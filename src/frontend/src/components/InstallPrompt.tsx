import { Download, Share2, X } from "lucide-react";
import { useEffect, useState } from "react";

// Extend Window to support the non-standard beforeinstallprompt event
interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent;
  }
}

const DISMISSED_KEY = "fstreamx-install-dismissed";
const DISMISS_DURATION_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

function isIOS(): boolean {
  return (
    typeof navigator !== "undefined" &&
    /iphone|ipad|ipod/i.test(navigator.userAgent) &&
    !(window as Window & { MSStream?: unknown }).MSStream
  );
}

function isInStandaloneMode(): boolean {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    ("standalone" in window.navigator &&
      (window.navigator as Navigator & { standalone?: boolean }).standalone ===
        true)
  );
}

function isDismissed(): boolean {
  try {
    const raw = localStorage.getItem(DISMISSED_KEY);
    if (!raw) return false;
    const ts = Number.parseInt(raw, 10);
    return Date.now() - ts < DISMISS_DURATION_MS;
  } catch {
    return false;
  }
}

function saveDismissed(): void {
  try {
    localStorage.setItem(DISMISSED_KEY, String(Date.now()));
  } catch {
    // ignore
  }
}

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [showIOS, setShowIOS] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Don't show if already installed or dismissed recently
    if (isInStandaloneMode() || isDismissed()) return;

    if (isIOS()) {
      // iOS doesn't fire beforeinstallprompt — show manual instructions
      setShowIOS(true);
      setShowBanner(true);
      // Slight delay for slide-up animation
      requestAnimationFrame(() => setVisible(true));
      return;
    }

    const handler = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowBanner(true);
      requestAnimationFrame(() => setVisible(true));
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      saveDismissed();
    }
    setDeferredPrompt(null);
    dismiss();
  };

  const dismiss = () => {
    setVisible(false);
    saveDismissed();
    setTimeout(() => setShowBanner(false), 350);
  };

  if (!showBanner) return null;

  return (
    <div
      data-ocid="install-prompt"
      className={`
        fixed bottom-0 left-0 right-0 z-[100]
        flex justify-center items-end
        transition-transform duration-350 ease-out
        ${visible ? "translate-y-0" : "translate-y-full"}
      `}
      style={{ transitionDuration: "350ms" }}
    >
      {/* Backdrop blur strip on mobile, card on desktop */}
      <div
        className="
          w-full md:max-w-lg md:mb-4 md:mx-4
          bg-card border-t border-border/70 md:border md:rounded-2xl
          shadow-elevated
          px-4 py-4
          md:px-6 md:py-5
        "
        style={{
          background:
            "linear-gradient(135deg, oklch(0.17 0 0) 0%, oklch(0.19 0.01 25) 100%)",
        }}
      >
        {/* Dismiss button */}
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss install banner"
          data-ocid="install-dismiss"
          className="absolute top-3 right-3 p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-smooth"
        >
          <X size={16} />
        </button>

        {showIOS ? (
          /* iOS manual install instructions */
          <div className="flex items-start gap-3 pr-6">
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center">
              <Share2 size={18} className="text-primary" />
            </div>
            <div className="flex flex-col gap-0.5 min-w-0">
              <p className="font-display font-bold text-sm text-foreground">
                Install FStreamX
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Tap{" "}
                <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-muted/60 text-foreground font-medium">
                  Share <Share2 size={10} />
                </span>{" "}
                then{" "}
                <span className="px-1.5 py-0.5 rounded bg-muted/60 text-foreground font-medium">
                  Add to Home Screen
                </span>{" "}
                to install
              </p>
            </div>
          </div>
        ) : (
          /* Standard install banner */
          <div className="flex items-center gap-3 pr-6">
            {/* Mini logo */}
            <div
              className="relative flex-shrink-0 w-10 h-10 rounded-xl border border-border/50 overflow-hidden flex items-center justify-center select-none"
              style={{ background: "#0a0a0a" }}
              aria-hidden="true"
            >
              <span
                className="absolute text-3xl font-black leading-none"
                style={{ color: "rgba(255,255,255,0.06)" }}
              >
                X
              </span>
              <span className="relative z-10 font-black text-sm leading-none">
                <span style={{ color: "#ef4444" }}>F</span>
                <span style={{ color: "#3b82f6" }}>S</span>
              </span>
            </div>

            <div className="flex-1 min-w-0">
              <p className="font-display font-bold text-sm text-foreground truncate">
                Install FStreamX
              </p>
              <p className="text-xs text-muted-foreground truncate">
                Stream anywhere, anytime — no browser needed
              </p>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                type="button"
                onClick={dismiss}
                data-ocid="install-not-now"
                className="px-3 py-1.5 rounded-lg text-xs font-body font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-smooth"
              >
                Not now
              </button>
              <button
                type="button"
                onClick={handleInstall}
                data-ocid="install-cta"
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-body font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-smooth"
              >
                <Download size={13} />
                Install
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

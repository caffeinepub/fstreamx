import { Radio, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { useLanguage } from "../lib/i18n";
import type { ContentItem } from "../types/content";

interface PlayerModalProps {
  item: ContentItem;
  onClose: () => void;
}

export function PlayerModal({ item, onClose }: PlayerModalProps) {
  const { t } = useLanguage();
  const circleRef = useRef<SVGCircleElement>(null);

  // Animate the progress circle
  useEffect(() => {
    const circle = circleRef.current;
    if (!circle) return;
    const r = 54;
    const circumference = 2 * Math.PI * r;
    circle.style.strokeDasharray = `${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;
    let progress = 0;
    const interval = setInterval(() => {
      progress = (progress + 0.5) % 100;
      circle.style.strokeDashoffset = `${circumference - (progress / 100) * circumference}`;
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <dialog
      open
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-md animate-fade-in m-0 max-w-none max-h-none w-full h-full border-none p-0"
      aria-label={`Playing ${item.title}`}
      data-ocid="player-modal"
      style={{ background: "oklch(0.12 0 0 / 0.9)" }}
    >
      {/* Backdrop click closes */}
      <div
        className="absolute inset-0"
        role="button"
        tabIndex={0}
        aria-label={t("common.close")}
        onClick={onClose}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") onClose();
        }}
      />

      {/* Modal card */}
      <div className="relative z-10 w-full max-w-lg mx-4 bg-card border border-border/60 rounded-2xl shadow-elevated overflow-hidden animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border/40">
          <div className="min-w-0">
            <p className="text-xs text-muted-foreground font-body uppercase tracking-widest">
              FStreamX
            </p>
            <h2 className="font-display font-bold text-foreground truncate mt-0.5">
              {item.title}
            </h2>
          </div>
          <button
            type="button"
            className="flex-shrink-0 ml-4 p-2 rounded-full bg-muted/50 hover:bg-muted transition-smooth text-muted-foreground hover:text-foreground"
            onClick={onClose}
            aria-label={t("common.close")}
            data-ocid="player-close"
          >
            <X size={18} />
          </button>
        </div>

        {/* Player area */}
        <div className="px-6 py-10 flex flex-col items-center gap-6">
          {/* Animated ring */}
          <div className="relative flex items-center justify-center">
            <svg
              width="128"
              height="128"
              className="rotate-[-90deg]"
              viewBox="0 0 128 128"
              aria-hidden="true"
            >
              <title>Loading progress</title>
              {/* Track */}
              <circle
                cx="64"
                cy="64"
                r="54"
                fill="none"
                stroke="var(--color-border)"
                strokeWidth="6"
              />
              {/* Progress */}
              <circle
                ref={circleRef}
                cx="64"
                cy="64"
                r="54"
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="6"
                strokeLinecap="round"
                style={{ transition: "stroke-dashoffset 0.05s linear" }}
              />
            </svg>
            {/* Inner icon */}
            <div className="absolute flex flex-col items-center gap-1">
              <Radio size={28} className="text-primary" />
              <span className="text-[10px] font-mono text-muted-foreground">
                LIVE
              </span>
            </div>
          </div>

          {/* Text */}
          <div className="text-center">
            <h3 className="font-display font-black text-2xl text-foreground mb-2">
              {t("player.comingSoon")}
            </h3>
            <p className="text-sm text-muted-foreground font-body max-w-xs mx-auto">
              {t("player.streamSoon")}
            </p>
          </div>

          {/* Meta chips */}
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              item.genre,
              `${item.year}`,
              item.duration,
              `⭐ ${item.rating.toFixed(1)}`,
            ].map((chip) => (
              <span
                key={chip}
                className="px-3 py-1 bg-muted/60 border border-border/40 rounded-full text-xs font-body text-muted-foreground"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-border/40 bg-muted/20 text-center">
          <p className="text-xs text-muted-foreground">
            © FStreamX — Free Streaming Platform
          </p>
        </div>
      </div>
    </dialog>
  );
}

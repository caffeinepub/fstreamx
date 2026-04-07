import { Link, useLocation } from "@tanstack/react-router";
import { Globe, Instagram, Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { type Language, useLanguage } from "../lib/i18n";
import { InstallPrompt } from "./InstallPrompt";

const LANG_OPTIONS: Language[] = ["EN", "HI", "UR", "ES"];

function FStreamXLogo({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative select-none ${className}`}
      style={{ width: 120, height: 48 }}
    >
      {/* Background X */}
      <span
        className="absolute inset-0 flex items-center justify-center font-display font-black text-5xl leading-none"
        style={{
          color: "oklch(0.93 0 0 / 0.08)",
          letterSpacing: "-0.05em",
          top: "-4px",
        }}
      >
        X
      </span>
      {/* FS overlay */}
      <span
        className="absolute left-2 top-1 font-display font-black text-2xl leading-none tracking-tight z-10"
        style={{ color: "oklch(0.98 0 0)" }}
      >
        <span style={{ color: "oklch(0.58 0.22 25)" }}>F</span>
        <span style={{ color: "oklch(0.65 0.18 255)" }}>S</span>
      </span>
      {/* Stream below */}
      <span
        className="absolute left-2 bottom-0 font-display font-bold text-xs tracking-widest z-10 uppercase"
        style={{ color: "oklch(0.93 0 0 / 0.85)", letterSpacing: "0.18em" }}
      >
        Stream
      </span>
    </div>
  );
}

const NAV_LINKS = [
  { key: "nav.home" as const, to: "/" },
  { key: "nav.movies" as const, to: "/movies" },
  { key: "nav.anime" as const, to: "/anime" },
  { key: "nav.dramas" as const, to: "/dramas" },
  { key: "nav.music" as const, to: "/music" },
  { key: "nav.admin" as const, to: "/admin" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const { t, language, setLanguage } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-card border-b border-border/60 shadow-elevated backdrop-blur-sm">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0" data-ocid="nav-logo">
            <FStreamXLogo />
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            data-ocid="nav-links"
          >
            {NAV_LINKS.map(({ key, to }) => {
              const active =
                location.pathname === to ||
                (to !== "/" && location.pathname.startsWith(to));
              return (
                <Link
                  key={to}
                  to={to}
                  className={`px-3 py-2 rounded-md text-sm font-body font-medium transition-smooth ${
                    active
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {t(key)}
                </Link>
              );
            })}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-2">
            <Link
              to="/search"
              className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-smooth"
              aria-label={t("nav.search")}
              data-ocid="nav-search"
            >
              <Search size={18} />
            </Link>

            {/* Language Selector */}
            <div className="relative" data-ocid="nav-language">
              <button
                type="button"
                className="flex items-center gap-1 px-2 py-2 rounded-md text-sm font-body font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-smooth"
                onClick={() => setLangOpen((v) => !v)}
                aria-label="Select language"
              >
                <Globe size={16} />
                <span className="hidden sm:inline">{language}</span>
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-1 w-28 bg-popover border border-border rounded-lg shadow-elevated overflow-hidden z-50">
                  {LANG_OPTIONS.map((lang) => (
                    <button
                      key={lang}
                      type="button"
                      className={`w-full text-left px-4 py-2 text-sm transition-smooth ${
                        lang === language
                          ? "text-primary bg-primary/10 font-medium"
                          : "text-foreground hover:bg-muted/60"
                      }`}
                      onClick={() => {
                        setLanguage(lang);
                        setLangOpen(false);
                      }}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile menu toggle */}
            <button
              type="button"
              className="md:hidden p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-smooth"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              data-ocid="nav-mobile-toggle"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-card px-4 py-3 flex flex-col gap-1">
            {NAV_LINKS.map(({ key, to }) => {
              const active = location.pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`px-4 py-3 rounded-lg text-sm font-body font-medium transition-smooth ${
                    active
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {t(key)}
                </Link>
              );
            })}
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 bg-background">{children}</main>

      {/* Footer */}
      <footer
        className="bg-card border-t border-border/60 mt-auto"
        data-ocid="footer"
      >
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <FStreamXLogo />
            <p className="text-xs text-muted-foreground mt-1">
              Stream everything. Everywhere. Free.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 text-xs text-muted-foreground">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/_f_a_i_s_a_l__r_a_z_a_?igsh=MXV3aXZzeXdubnR2dw=="
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="footer-instagram"
              className="group flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-muted/30 hover:border-pink-500/60 hover:bg-pink-500/10 transition-smooth"
              aria-label="Follow on Instagram"
            >
              <Instagram
                size={16}
                className="text-muted-foreground group-hover:text-pink-400 transition-smooth"
              />
              <span className="font-body font-medium tracking-wide text-muted-foreground group-hover:text-pink-400 transition-smooth">
                @_f_a_i_s_a_l__r_a_z_a_
              </span>
            </a>
            <p>
              © {new Date().getFullYear()}. Built with love using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-foreground transition-smooth"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
      <InstallPrompt />
    </div>
  );
}

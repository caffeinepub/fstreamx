import { Link } from "@tanstack/react-router";
import { Info, Play } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { ContentRow } from "../components/ContentRow";
import { PlayerModal } from "../components/PlayerModal";
import { useAllContent } from "../lib/backend-client";
import { useLanguage } from "../lib/i18n";
import type { ContentItem } from "../types/content";

const HERO_ITEM_IDS = ["1", "7", "13", "19"];
const HERO_INTERVAL = 5000;

// Skeleton loader for hero
function HeroSkeleton() {
  return (
    <div
      className="relative w-full bg-card animate-pulse"
      style={{ minHeight: 580 }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      <div
        className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col justify-end pb-20 h-full"
        style={{ minHeight: 580 }}
      >
        <div className="h-4 w-24 bg-muted/60 rounded mb-3" />
        <div className="h-10 w-80 bg-muted/60 rounded mb-4" />
        <div className="h-4 w-48 bg-muted/40 rounded mb-6" />
        <div className="flex gap-3">
          <div className="h-12 w-36 bg-muted/60 rounded-lg" />
          <div className="h-12 w-36 bg-muted/40 rounded-lg" />
        </div>
      </div>
    </div>
  );
}

// Row skeleton
const SKELETON_KEYS = ["sk-0", "sk-1", "sk-2", "sk-3", "sk-4", "sk-5"];

function RowSkeleton({ title: _title }: { title: string }) {
  return (
    <section className="py-4">
      <div className="px-4 md:px-8 mb-3">
        <div className="h-6 w-40 bg-muted/40 rounded animate-pulse" />
      </div>
      <div className="flex gap-3 px-4 md:px-8 overflow-hidden">
        {SKELETON_KEYS.map((key, i) => (
          <div
            key={key}
            className="flex-none w-[160px] aspect-[2/3] bg-card rounded-lg animate-pulse"
            style={{ animationDelay: `${i * 80}ms` }}
          />
        ))}
      </div>
    </section>
  );
}

interface HeroBannerProps {
  items: ContentItem[];
  onPlay: (item: ContentItem) => void;
}

function HeroBanner({ items, onPlay }: HeroBannerProps) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});
  const { t } = useLanguage();
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIdx((i) => (i + 1) % items.length);
    }, HERO_INTERVAL);
  }, [items.length]);

  useEffect(() => {
    if (items.length <= 1 || paused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [items.length, paused, startTimer]);

  const item = items[idx];
  if (!item) return null;

  const hasImgError = imgErrors[item.id];

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ minHeight: 580 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      data-ocid="hero-banner"
    >
      {/* Full-width backdrop */}
      <AnimatePresence mode="sync">
        <motion.div
          key={`backdrop-${item.id}`}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          {!hasImgError ? (
            <img
              src={item.posterUrl}
              alt=""
              className="w-full h-full object-cover object-top"
              style={{ filter: "brightness(0.45) saturate(1.2)" }}
              onError={() =>
                setImgErrors((prev) => ({ ...prev, [item.id]: true }))
              }
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 via-background to-accent/10" />
          )}
          {/* Gradient overlays for cinematic look */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/20" />
        </motion.div>
      </AnimatePresence>

      {/* Decorative X branding */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none select-none overflow-hidden hidden lg:flex items-center justify-end pr-12">
        <span
          className="font-display font-black leading-none"
          style={{
            fontSize: "min(40vw, 420px)",
            color: "oklch(0.93 0 0 / 0.03)",
            lineHeight: 1,
          }}
        >
          X
        </span>
      </div>

      {/* Content overlay */}
      <div
        className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col justify-end pb-24"
        style={{ minHeight: 580 }}
      >
        <div className="max-w-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${item.id}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              {/* Category badge */}
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold font-body uppercase tracking-widest bg-primary/20 text-primary border border-primary/30 mb-3">
                {item.category === "movie"
                  ? t("category.movies")
                  : item.category === "anime"
                    ? t("category.anime")
                    : item.category === "drama"
                      ? t("category.dramas")
                      : t("category.music")}
              </span>

              {/* Title */}
              <h1 className="font-display font-black text-4xl md:text-6xl text-foreground leading-[1.05] mb-4 drop-shadow-lg">
                {item.title}
              </h1>

              {/* Meta row */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-sm font-medium text-yellow-400">
                  ★ {item.rating.toFixed(1)}
                </span>
                <span className="text-muted-foreground text-sm">•</span>
                <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-muted/60 text-muted-foreground border border-border/40">
                  {item.genre}
                </span>
                <span className="text-muted-foreground text-sm">•</span>
                <span className="text-muted-foreground text-sm">
                  {item.year}
                </span>
                <span className="text-muted-foreground text-sm">•</span>
                <span className="text-muted-foreground text-sm">
                  {item.duration}
                </span>
              </div>

              {/* Description */}
              <p className="text-muted-foreground font-body text-sm md:text-base leading-relaxed mb-7 line-clamp-2 max-w-md">
                {item.description}
              </p>

              {/* CTA buttons */}
              <div className="flex gap-3 flex-wrap">
                <button
                  type="button"
                  onClick={() => onPlay(item)}
                  className="flex items-center gap-2.5 px-7 py-3 bg-primary text-primary-foreground rounded-lg font-display font-bold text-sm hover:bg-primary/90 transition-smooth glow-red shadow-lg"
                  data-ocid="hero-watch-now"
                >
                  <Play size={18} fill="currentColor" />
                  {t("hero.watchNow")}
                </button>
                <Link
                  to="/content/$id"
                  params={{ id: item.id }}
                  className="flex items-center gap-2.5 px-7 py-3 bg-muted/40 backdrop-blur-sm border border-border/50 text-foreground rounded-lg font-display font-bold text-sm hover:bg-muted/70 hover:border-border transition-smooth"
                  data-ocid="hero-more-info"
                >
                  <Info size={18} />
                  {t("hero.moreInfo")}
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-6 md:left-12 flex items-center gap-2 z-20">
        {items.map((it, i) => (
          <button
            key={it.id}
            type="button"
            onClick={() => {
              setIdx(i);
              startTimer();
            }}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-400 ${
              i === idx
                ? "bg-primary w-7 h-2.5 shadow-md glow-red"
                : "bg-muted-foreground/40 w-2.5 h-2.5 hover:bg-muted-foreground/70"
            }`}
            data-ocid={`hero-dot-${i}`}
          />
        ))}

        {/* Pause indicator */}
        {paused && (
          <span className="ml-2 text-xs text-muted-foreground/60 font-body">
            ⏸
          </span>
        )}
      </div>

      {/* Progress bar for current slide */}
      {!paused && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-border/20 z-20">
          <motion.div
            key={`progress-${idx}`}
            className="h-full bg-primary"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: HERO_INTERVAL / 1000, ease: "linear" }}
          />
        </div>
      )}
    </div>
  );
}

export default function HomePage() {
  const { data: all = [], isLoading } = useAllContent();
  const { t } = useLanguage();
  const [playing, setPlaying] = useState<ContentItem | null>(null);

  const movies = all.filter((i) => i.category === "movie");
  const anime = all.filter((i) => i.category === "anime");
  const dramas = all.filter((i) => i.category === "drama");
  const music = all.filter((i) => i.category === "music");

  const heroItems = HERO_ITEM_IDS.map((id) =>
    all.find((i) => i.id === id),
  ).filter(Boolean) as ContentItem[];

  // Fallback: if no matching hero items, pick first 4 items
  const displayHeroItems = heroItems.length > 0 ? heroItems : all.slice(0, 4);

  return (
    <div className="pb-16 -mt-0">
      {/* Hero section */}
      {isLoading ? (
        <HeroSkeleton />
      ) : displayHeroItems.length > 0 ? (
        <HeroBanner items={displayHeroItems} onPlay={setPlaying} />
      ) : null}

      {/* Content rows */}
      <div className="mt-2 space-y-2">
        {/* Movies row */}
        {isLoading ? (
          <RowSkeleton title={t("category.movies")} />
        ) : movies.length > 0 ? (
          <ContentRow
            title={t("category.movies")}
            items={movies}
            onPlay={setPlaying}
          />
        ) : null}

        {/* Anime row — alternate section bg */}
        <div className="bg-muted/10 py-2 rounded-none">
          {isLoading ? (
            <RowSkeleton title={t("category.anime")} />
          ) : anime.length > 0 ? (
            <ContentRow
              title={t("category.anime")}
              items={anime}
              onPlay={setPlaying}
            />
          ) : null}
        </div>

        {/* Dramas row */}
        {isLoading ? (
          <RowSkeleton title={t("category.dramas")} />
        ) : dramas.length > 0 ? (
          <ContentRow
            title={t("category.dramas")}
            items={dramas}
            onPlay={setPlaying}
          />
        ) : null}

        {/* Music row — alternate section bg */}
        <div className="bg-muted/10 py-2 rounded-none">
          {isLoading ? (
            <RowSkeleton title={t("category.music")} />
          ) : music.length > 0 ? (
            <ContentRow
              title={t("category.music")}
              items={music}
              onPlay={setPlaying}
            />
          ) : null}
        </div>
      </div>

      {/* Player modal */}
      {playing && (
        <PlayerModal item={playing} onClose={() => setPlaying(null)} />
      )}
    </div>
  );
}

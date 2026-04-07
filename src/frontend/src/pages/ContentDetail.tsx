import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  Play,
  Star,
  Tag,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { PlayerModal } from "../components/PlayerModal";
import { useContentById } from "../lib/backend-client";
import { useLanguage } from "../lib/i18n";
import type { Episode, Part } from "../types/content";

// ─── Types ────────────────────────────────────────────────────────────────────

interface PlayTarget {
  videoUrl?: string;
  label: string;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function SeasonTabs({
  seasons,
  active,
  onSelect,
  seasonLabel,
}: {
  seasons: { seasonNumber: number }[];
  active: number;
  onSelect: (n: number) => void;
  seasonLabel: string;
}) {
  return (
    <div
      className="flex gap-1 overflow-x-auto pb-1 scrollbar-hide"
      role="tablist"
      data-ocid="season-tabs"
    >
      {seasons.map((s) => (
        <button
          key={s.seasonNumber}
          type="button"
          role="tab"
          aria-selected={active === s.seasonNumber}
          onClick={() => onSelect(s.seasonNumber)}
          className={[
            "flex-shrink-0 px-5 py-2 rounded-t-md text-sm font-display font-semibold transition-smooth border-b-2",
            active === s.seasonNumber
              ? "border-primary text-primary bg-card"
              : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/40",
          ].join(" ")}
        >
          {seasonLabel} {s.seasonNumber}
        </button>
      ))}
    </div>
  );
}

function EpisodeRow({
  episode,
  isActive,
  episodeLabel,
  onClick,
}: {
  episode: Episode;
  isActive: boolean;
  episodeLabel: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      data-ocid={`episode-row-${episode.episodeNumber}`}
      className={[
        "w-full text-left flex gap-4 items-start px-4 py-3 rounded-lg border transition-smooth",
        isActive
          ? "border-primary/50 bg-primary/10"
          : "border-border/30 bg-card hover:bg-muted/40 hover:border-border/60",
      ].join(" ")}
    >
      {/* Episode number badge */}
      <span
        className={[
          "flex-shrink-0 w-9 h-9 rounded-md flex items-center justify-center text-sm font-display font-black",
          isActive
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-muted-foreground",
        ].join(" ")}
      >
        {episode.episodeNumber}
      </span>
      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-display font-semibold text-foreground leading-snug truncate">
          {episodeLabel} {episode.episodeNumber}: {episode.title}
        </p>
        <p className="text-xs text-muted-foreground font-body mt-0.5 line-clamp-2 leading-relaxed">
          {episode.description}
        </p>
      </div>
      {/* Duration */}
      <span className="flex-shrink-0 text-xs text-muted-foreground font-mono mt-1">
        {episode.duration}
      </span>
    </button>
  );
}

function PartButtons({
  parts,
  partLabel,
  onSelect,
}: {
  parts: Part[];
  partLabel: string;
  onSelect: (part: Part) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2" data-ocid="part-buttons">
      {parts.map((p) => (
        <button
          key={p.partNumber}
          type="button"
          onClick={() => onSelect(p)}
          data-ocid={`part-btn-${p.partNumber}`}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent/15 border border-accent/30 text-accent text-sm font-display font-semibold hover:bg-accent/25 hover:border-accent/60 transition-smooth"
        >
          <Play size={13} fill="currentColor" />
          {partLabel} {p.partNumber}
          {p.title ? ` — ${p.title}` : ""}
        </button>
      ))}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ContentDetailPage() {
  const { id } = useParams({ from: "/content/$id" });
  const { data: item, isLoading } = useContentById(id);
  const { t } = useLanguage();

  const [activeSeason, setActiveSeason] = useState(1);
  const [activeEpisodeIdx, setActiveEpisodeIdx] = useState(0);
  const [playTarget, setPlayTarget] = useState<PlayTarget | null>(null);

  // ── Loading ──
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin" />
      </div>
    );
  }

  // ── Not Found ──
  if (!item) {
    return (
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-20 text-center">
        <p className="text-muted-foreground font-display text-xl">
          Content not found
        </p>
        <Link
          to="/"
          className="mt-4 inline-block text-accent hover:text-foreground transition-smooth"
        >
          ← Back to Home
        </Link>
      </div>
    );
  }

  const categoryPath =
    item.category === "movie"
      ? "/movies"
      : item.category === "anime"
        ? "/anime"
        : item.category === "drama"
          ? "/dramas"
          : "/music";

  // Determine if this content has season/episode structure
  const isSeriesContent =
    (item.category === "anime" || item.category === "drama") &&
    item.seasons &&
    item.seasons.length > 0;

  const currentSeason = isSeriesContent
    ? (item.seasons!.find((s) => s.seasonNumber === activeSeason) ??
      item.seasons![0])
    : null;

  const episodes = currentSeason?.episodes ?? [];
  const currentEpisode: Episode | null =
    episodes.length > 0 ? (episodes[activeEpisodeIdx] ?? episodes[0]) : null;

  const hasParts = currentEpisode?.parts && currentEpisode.parts.length > 0;

  function handleSelectSeason(n: number) {
    setActiveSeason(n);
    setActiveEpisodeIdx(0);
  }

  function handleSelectEpisode(idx: number) {
    setActiveEpisodeIdx(idx);
    // If no parts, open player directly
    const ep = episodes[idx];
    if (ep && (!ep.parts || ep.parts.length === 0)) {
      setPlayTarget({
        videoUrl: ep.videoUrl,
        label: `${t("detail.episode")} ${ep.episodeNumber}: ${ep.title}`,
      });
    }
  }

  function handlePlayPart(part: Part) {
    setPlayTarget({
      videoUrl: part.videoUrl,
      label: `${t("detail.part")} ${part.partNumber}${part.title ? ` — ${part.title}` : ""}`,
    });
  }

  function handlePlayMain() {
    if (!item) return;
    if (isSeriesContent && currentEpisode) {
      if (!hasParts) {
        setPlayTarget({
          videoUrl: currentEpisode.videoUrl,
          label: `${t("detail.episode")} ${currentEpisode.episodeNumber}`,
        });
      }
    } else {
      setPlayTarget({ videoUrl: undefined, label: item.title });
    }
  }

  return (
    <div className="pb-16">
      {/* Hero backdrop */}
      <div className="relative overflow-hidden" style={{ minHeight: 400 }}>
        <div className="absolute inset-0">
          <img
            src={item.posterUrl}
            alt=""
            className="w-full h-full object-cover object-top opacity-20 scale-110"
            style={{ filter: "blur(4px)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8 pt-8 pb-0">
          <Link
            to={categoryPath}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-smooth mb-8 font-body"
          >
            <ArrowLeft size={16} />
            Back
          </Link>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Poster */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="flex-shrink-0 w-48 md:w-64 rounded-xl overflow-hidden shadow-elevated border border-border/30"
            >
              <img
                src={item.posterUrl}
                alt={item.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex-1 min-w-0"
            >
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium font-body uppercase tracking-wide">
                {item.category}
              </span>
              <h1 className="font-display font-black text-4xl md:text-5xl text-foreground mt-3 mb-4 leading-tight">
                {item.title}
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap gap-4 mb-5 text-sm text-muted-foreground font-body">
                <span className="flex items-center gap-1.5">
                  <Star
                    size={14}
                    className="text-yellow-400"
                    fill="currentColor"
                  />
                  {item.rating.toFixed(1)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  {item.year}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} />
                  {item.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <Tag size={14} />
                  {item.genre}
                </span>
                {isSeriesContent && (
                  <span className="flex items-center gap-1.5 text-accent">
                    {item.seasons!.length} {t("detail.seasons")}
                  </span>
                )}
              </div>

              <p className="text-foreground/80 font-body leading-relaxed mb-8 max-w-2xl">
                {item.description}
              </p>

              {/* Play button — for movies/music or quick-play for series */}
              {!isSeriesContent && (
                <button
                  type="button"
                  className="flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-display font-semibold hover:bg-primary/90 transition-smooth glow-red text-base"
                  onClick={handlePlayMain}
                  data-ocid="detail-play-btn"
                >
                  <Play size={20} fill="currentColor" />
                  {t("common.play")}
                </button>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Series: Seasons / Episodes / Parts ── */}
      {isSeriesContent && item.seasons && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-[1400px] mx-auto px-4 md:px-8 mt-8"
        >
          {/* Season Tabs */}
          <div className="border-b border-border/40 mb-0">
            <SeasonTabs
              seasons={item.seasons}
              active={activeSeason}
              onSelect={handleSelectSeason}
              seasonLabel={t("detail.season")}
            />
          </div>

          <div className="bg-card/50 border border-border/30 border-t-0 rounded-b-xl rounded-tr-xl p-4 md:p-6">
            {/* Season description */}
            {currentSeason?.description && (
              <p className="text-sm text-muted-foreground font-body mb-4 italic">
                {currentSeason.description}
              </p>
            )}

            {episodes.length === 0 ? (
              <p className="text-muted-foreground font-body py-8 text-center">
                {t("detail.noEpisodes")}
              </p>
            ) : (
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Episode list */}
                <div
                  className="flex-1 min-w-0 flex flex-col gap-2 max-h-[420px] overflow-y-auto pr-1"
                  data-ocid="episode-list"
                >
                  <p className="text-xs font-body text-muted-foreground uppercase tracking-widest mb-1 px-1">
                    {t("detail.episodes")}
                  </p>
                  {episodes.map((ep, idx) => (
                    <EpisodeRow
                      key={ep.episodeNumber}
                      episode={ep}
                      isActive={idx === activeEpisodeIdx}
                      episodeLabel={t("detail.episode")}
                      onClick={() => handleSelectEpisode(idx)}
                    />
                  ))}
                </div>

                {/* Right panel: selected episode details + parts */}
                {currentEpisode && (
                  <div className="lg:w-80 flex-shrink-0 flex flex-col gap-4">
                    <div className="bg-background/60 border border-border/30 rounded-xl p-4">
                      <p className="text-xs font-body text-muted-foreground uppercase tracking-widest mb-2">
                        {t("detail.episode")} {currentEpisode.episodeNumber}
                      </p>
                      <h3 className="font-display font-bold text-foreground text-lg leading-snug mb-2">
                        {currentEpisode.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
                        {currentEpisode.description}
                      </p>
                      <span className="text-xs text-muted-foreground font-mono flex items-center gap-1">
                        <Clock size={11} />
                        {currentEpisode.duration}
                      </span>
                    </div>

                    {/* Parts or Play */}
                    {hasParts ? (
                      <div className="flex flex-col gap-2">
                        <p className="text-xs font-body text-muted-foreground uppercase tracking-widest">
                          {t("detail.parts")}
                        </p>
                        <PartButtons
                          parts={currentEpisode.parts!}
                          partLabel={t("detail.part")}
                          onSelect={handlePlayPart}
                        />
                      </div>
                    ) : (
                      <button
                        type="button"
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-display font-semibold hover:bg-primary/90 transition-smooth glow-red text-sm w-full"
                        onClick={() =>
                          setPlayTarget({
                            videoUrl: currentEpisode.videoUrl,
                            label: `${t("detail.episode")} ${currentEpisode.episodeNumber}: ${currentEpisode.title}`,
                          })
                        }
                        data-ocid="episode-play-btn"
                      >
                        <Play size={16} fill="currentColor" />
                        {t("common.play")} {t("detail.episode")}{" "}
                        {currentEpisode.episodeNumber}
                      </button>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Prev / Next episode navigation */}
            {episodes.length > 1 && (
              <div
                className="flex items-center justify-between mt-6 pt-4 border-t border-border/30"
                data-ocid="episode-nav"
              >
                <button
                  type="button"
                  disabled={activeEpisodeIdx === 0}
                  onClick={() => setActiveEpisodeIdx((i) => Math.max(0, i - 1))}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-display font-semibold border border-border/40 text-muted-foreground hover:text-foreground hover:border-border/80 transition-smooth disabled:opacity-30 disabled:cursor-not-allowed"
                  data-ocid="episode-prev"
                >
                  <ChevronLeft size={16} />
                  {t("detail.episode")} {activeEpisodeIdx}
                </button>

                <span className="text-xs text-muted-foreground font-mono">
                  {activeEpisodeIdx + 1} / {episodes.length}
                </span>

                <button
                  type="button"
                  disabled={activeEpisodeIdx === episodes.length - 1}
                  onClick={() =>
                    setActiveEpisodeIdx((i) =>
                      Math.min(episodes.length - 1, i + 1),
                    )
                  }
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-display font-semibold border border-border/40 text-muted-foreground hover:text-foreground hover:border-border/80 transition-smooth disabled:opacity-30 disabled:cursor-not-allowed"
                  data-ocid="episode-next"
                >
                  {t("detail.episode")} {activeEpisodeIdx + 2}
                  <ChevronRight size={16} />
                </button>
              </div>
            )}
          </div>
        </motion.div>
      )}

      {/* Player Modal */}
      {playTarget && (
        <PlayerModal item={item} onClose={() => setPlayTarget(null)} />
      )}
    </div>
  );
}

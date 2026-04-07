import { Link } from "@tanstack/react-router";
import { Bookmark, Heart, Play, Star } from "lucide-react";
import { useState } from "react";
import type { ContentItem } from "../types/content";

interface ContentCardProps {
  item: ContentItem;
  onPlay?: (item: ContentItem) => void;
  onAddFavorite?: (item: ContentItem) => void;
  onAddWatchlist?: (item: ContentItem) => void;
}

const GENRE_COLORS: Record<string, string> = {
  "Sci-Fi": "bg-accent/20 text-accent",
  Action: "bg-primary/20 text-primary",
  Thriller: "bg-primary/20 text-primary",
  Drama: "bg-secondary/30 text-secondary-foreground",
  Romance: "bg-primary/10 text-primary",
  Fantasy: "bg-accent/30 text-accent",
  Mecha: "bg-accent/20 text-accent",
  Isekai: "bg-muted text-muted-foreground",
  Shonen: "bg-primary/20 text-primary",
  Historical: "bg-muted text-muted-foreground",
  Legal: "bg-accent/20 text-accent",
  Crime: "bg-primary/20 text-primary",
  Electronic: "bg-accent/30 text-accent",
  "R&B": "bg-primary/10 text-primary",
  Synthwave: "bg-secondary/30 text-secondary-foreground",
  Ambient: "bg-accent/20 text-accent",
  "Hip-Hop": "bg-primary/20 text-primary",
  Orchestral: "bg-accent/20 text-accent",
  Cyberpunk: "bg-accent/30 text-accent",
  Adventure: "bg-muted text-muted-foreground",
  War: "bg-primary/20 text-primary",
};

function genreBadgeClass(genre: string): string {
  return GENRE_COLORS[genre] ?? "bg-muted/60 text-muted-foreground";
}

const FALLBACK_GRADIENTS: Record<string, string> = {
  movie: "from-primary/40 to-background",
  anime: "from-accent/40 to-background",
  drama: "from-purple-600/40 to-background",
  music: "from-cyan-600/40 to-background",
};

export function ContentCard({
  item,
  onPlay,
  onAddFavorite,
  onAddWatchlist,
}: ContentCardProps) {
  const [imgError, setImgError] = useState(false);
  const fallback =
    FALLBACK_GRADIENTS[item.category] ?? "from-muted to-background";

  const hasSeasonsData = item.seasons && item.seasons.length > 0;
  const episodeCount = hasSeasonsData
    ? item.seasons!.reduce((acc, s) => acc + s.episodes.length, 0)
    : null;

  return (
    <div
      className="group relative rounded-lg overflow-hidden cursor-pointer bg-card border border-border/40 transition-all duration-300 ease-out hover:scale-110 hover:z-10 hover:shadow-2xl"
      style={{ transformOrigin: "center bottom" }}
      data-ocid={`content-card-${item.id}`}
    >
      {/* Poster */}
      <div className="relative aspect-[2/3] bg-muted overflow-hidden">
        {!imgError ? (
          <img
            src={item.posterUrl}
            alt={item.title}
            className="w-full h-full object-cover transition-smooth"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div
            className={`w-full h-full bg-gradient-to-b ${fallback} flex flex-col items-center justify-center gap-2 p-4`}
          >
            <span className="font-display font-black text-3xl text-foreground/20">
              FS
            </span>
            <span className="font-display text-center text-sm font-medium text-foreground/60 line-clamp-2">
              {item.title}
            </span>
          </div>
        )}

        {/* Genre badge */}
        <span
          className={`absolute top-2 right-2 px-2 py-0.5 rounded-full text-xs font-medium font-body ${genreBadgeClass(item.genre)}`}
        >
          {item.genre}
        </span>

        {/* Seasons badge */}
        {hasSeasonsData && (
          <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-xs font-medium bg-accent/20 text-accent border border-accent/30">
            {item.seasons!.length}S · {episodeCount}E
          </span>
        )}

        {/* Rating */}
        <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-background/70 backdrop-blur-sm px-2 py-0.5 rounded-full">
          <Star size={10} className="text-yellow-400" fill="currentColor" />
          <span className="text-xs font-medium text-foreground">
            {item.rating.toFixed(1)}
          </span>
        </div>

        {/* Hover overlay with actions */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-background/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-end pb-3 gap-2">
          {/* Title on hover */}
          <p className="font-display font-bold text-sm text-foreground text-center px-2 line-clamp-2 leading-tight">
            {item.title}
          </p>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Star size={10} className="text-yellow-400" fill="currentColor" />
            <span>{item.rating.toFixed(1)}</span>
            <span className="text-border mx-1">·</span>
            <span className="text-accent">{item.genre}</span>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 mt-1">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onPlay?.(item);
              }}
              className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg glow-red hover:scale-110 transition-smooth"
              aria-label={`Play ${item.title}`}
              data-ocid={`play-btn-${item.id}`}
            >
              <Play
                size={16}
                className="text-primary-foreground ml-0.5"
                fill="currentColor"
              />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onAddFavorite?.(item);
              }}
              className="w-8 h-8 rounded-full bg-card/80 border border-border/60 flex items-center justify-center hover:bg-primary/20 hover:border-primary/60 transition-smooth"
              aria-label={`Add ${item.title} to favorites`}
              data-ocid={`fav-btn-${item.id}`}
            >
              <Heart size={14} className="text-primary" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onAddWatchlist?.(item);
              }}
              className="w-8 h-8 rounded-full bg-card/80 border border-border/60 flex items-center justify-center hover:bg-accent/20 hover:border-accent/60 transition-smooth"
              aria-label={`Add ${item.title} to watchlist`}
              data-ocid={`watchlist-btn-${item.id}`}
            >
              <Bookmark size={14} className="text-accent" />
            </button>
          </div>
        </div>
      </div>

      {/* Info — visible always */}
      <Link to="/content/$id" params={{ id: item.id }}>
        <div className="p-3">
          <h3 className="font-display font-semibold text-sm text-foreground line-clamp-1 group-hover:text-primary transition-smooth">
            {item.title}
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1.5">
            <span>{item.year}</span>
            <span className="text-border">•</span>
            <span>{item.duration}</span>
          </p>
        </div>
      </Link>
    </div>
  );
}

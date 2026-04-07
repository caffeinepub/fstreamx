import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ContentItem } from "../types/content";
import { ContentCard } from "./ContentCard";

interface ContentRowProps {
  title: string;
  items: ContentItem[];
  onPlay?: (item: ContentItem) => void;
  onAddFavorite?: (item: ContentItem) => void;
  onAddWatchlist?: (item: ContentItem) => void;
}

const SCROLL_AMOUNT = 880;

export function ContentRow({
  title,
  items,
  onPlay,
  onAddFavorite,
  onAddWatchlist,
}: ContentRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = rowRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    const ro = new ResizeObserver(checkScroll);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      ro.disconnect();
    };
  }, [checkScroll]);

  // Re-check when items change
  useEffect(() => {
    checkScroll();
  }, [checkScroll]);

  const scroll = (direction: "left" | "right") => {
    const el = rowRef.current;
    if (!el) return;
    el.scrollBy({
      left: direction === "left" ? -SCROLL_AMOUNT : SCROLL_AMOUNT,
      behavior: "smooth",
    });
  };

  if (items.length === 0) return null;

  return (
    <section
      className="relative group/row"
      data-ocid={`content-row-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      {/* Row header */}
      <div className="flex items-center justify-between px-4 md:px-8 mb-3">
        <h2 className="font-display font-bold text-lg md:text-xl text-foreground tracking-tight">
          {title}
          <span className="ml-2 text-sm font-normal text-muted-foreground">
            ({items.length})
          </span>
        </h2>
        <div className="flex items-center gap-1 opacity-0 group-hover/row:opacity-100 transition-smooth">
          <button
            type="button"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            className="w-8 h-8 rounded-full bg-card border border-border/60 flex items-center justify-center text-foreground hover:bg-primary/20 hover:border-primary/60 hover:text-primary transition-smooth disabled:opacity-30 disabled:cursor-not-allowed"
            data-ocid="row-scroll-left"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            className="w-8 h-8 rounded-full bg-card border border-border/60 flex items-center justify-center text-foreground hover:bg-primary/20 hover:border-primary/60 hover:text-primary transition-smooth disabled:opacity-30 disabled:cursor-not-allowed"
            data-ocid="row-scroll-right"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Left arrow — absolute, large, visible on hover */}
      {canScrollLeft && (
        <button
          type="button"
          onClick={() => scroll("left")}
          aria-label="Scroll left"
          className="absolute left-0 top-8 bottom-0 z-20 w-12 hidden md:flex items-center justify-center bg-gradient-to-r from-background to-transparent opacity-0 group-hover/row:opacity-100 transition-smooth hover:from-background/90"
          data-ocid="row-arrow-left"
        >
          <div className="w-9 h-9 rounded-full bg-card/90 border border-border/60 flex items-center justify-center hover:bg-primary/20 hover:border-primary/60 hover:text-primary transition-smooth shadow-lg">
            <ChevronLeft size={20} className="text-foreground" />
          </div>
        </button>
      )}

      {canScrollRight && (
        <button
          type="button"
          onClick={() => scroll("right")}
          aria-label="Scroll right"
          className="absolute right-0 top-8 bottom-0 z-20 w-12 hidden md:flex items-center justify-center bg-gradient-to-l from-background to-transparent opacity-0 group-hover/row:opacity-100 transition-smooth hover:from-background/90"
          data-ocid="row-arrow-right"
        >
          <div className="w-9 h-9 rounded-full bg-card/90 border border-border/60 flex items-center justify-center hover:bg-primary/20 hover:border-primary/60 hover:text-primary transition-smooth shadow-lg">
            <ChevronRight size={20} className="text-foreground" />
          </div>
        </button>
      )}

      {/* Scrollable row — extra vertical padding so hovered card (scale 1.1) isn't clipped */}
      <div
        ref={rowRef}
        className="flex gap-3 overflow-x-auto scrollbar-hide px-4 md:px-8 py-6 scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="flex-none w-[140px] sm:w-[160px] md:w-[180px]"
          >
            <ContentCard
              item={item}
              onPlay={onPlay}
              onAddFavorite={onAddFavorite}
              onAddWatchlist={onAddWatchlist}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

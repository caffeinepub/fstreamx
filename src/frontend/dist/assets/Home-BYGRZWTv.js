import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, u as useLanguage, L as Link } from "./index-nodcIggE.js";
import { C as ContentCard } from "./ContentCard-CHuLhw25.js";
import { C as ChevronLeft } from "./chevron-left-D3mj_A7h.js";
import { C as ChevronRight } from "./chevron-right-ByFPvg64.js";
import { P as PlayerModal, a as Play } from "./PlayerModal-CSXJSzaL.js";
import { u as useAllContent, m as motion } from "./backend-client-BHE2ZAfV.js";
import { A as AnimatePresence } from "./index-C2P3ff-F.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
const Info = createLucideIcon("info", __iconNode);
const SCROLL_AMOUNT = 880;
function ContentRow({
  title,
  items,
  onPlay,
  onAddFavorite,
  onAddWatchlist
}) {
  const rowRef = reactExports.useRef(null);
  const [canScrollLeft, setCanScrollLeft] = reactExports.useState(false);
  const [canScrollRight, setCanScrollRight] = reactExports.useState(true);
  const checkScroll = reactExports.useCallback(() => {
    const el = rowRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  }, []);
  reactExports.useEffect(() => {
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
  reactExports.useEffect(() => {
    checkScroll();
  }, [checkScroll]);
  const scroll = (direction) => {
    const el = rowRef.current;
    if (!el) return;
    el.scrollBy({
      left: direction === "left" ? -SCROLL_AMOUNT : SCROLL_AMOUNT,
      behavior: "smooth"
    });
  };
  if (items.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      className: "relative group/row",
      "data-ocid": `content-row-${title.toLowerCase().replace(/\s+/g, "-")}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 md:px-8 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-lg md:text-xl text-foreground tracking-tight", children: [
            title,
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-2 text-sm font-normal text-muted-foreground", children: [
              "(",
              items.length,
              ")"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 opacity-0 group-hover/row:opacity-100 transition-smooth", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => scroll("left"),
                disabled: !canScrollLeft,
                "aria-label": "Scroll left",
                className: "w-8 h-8 rounded-full bg-card border border-border/60 flex items-center justify-center text-foreground hover:bg-primary/20 hover:border-primary/60 hover:text-primary transition-smooth disabled:opacity-30 disabled:cursor-not-allowed",
                "data-ocid": "row-scroll-left",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 16 })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => scroll("right"),
                disabled: !canScrollRight,
                "aria-label": "Scroll right",
                className: "w-8 h-8 rounded-full bg-card border border-border/60 flex items-center justify-center text-foreground hover:bg-primary/20 hover:border-primary/60 hover:text-primary transition-smooth disabled:opacity-30 disabled:cursor-not-allowed",
                "data-ocid": "row-scroll-right",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16 })
              }
            )
          ] })
        ] }),
        canScrollLeft && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => scroll("left"),
            "aria-label": "Scroll left",
            className: "absolute left-0 top-8 bottom-0 z-20 w-12 hidden md:flex items-center justify-center bg-gradient-to-r from-background to-transparent opacity-0 group-hover/row:opacity-100 transition-smooth hover:from-background/90",
            "data-ocid": "row-arrow-left",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-full bg-card/90 border border-border/60 flex items-center justify-center hover:bg-primary/20 hover:border-primary/60 hover:text-primary transition-smooth shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 20, className: "text-foreground" }) })
          }
        ),
        canScrollRight && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => scroll("right"),
            "aria-label": "Scroll right",
            className: "absolute right-0 top-8 bottom-0 z-20 w-12 hidden md:flex items-center justify-center bg-gradient-to-l from-background to-transparent opacity-0 group-hover/row:opacity-100 transition-smooth hover:from-background/90",
            "data-ocid": "row-arrow-right",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-full bg-card/90 border border-border/60 flex items-center justify-center hover:bg-primary/20 hover:border-primary/60 hover:text-primary transition-smooth shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 20, className: "text-foreground" }) })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            ref: rowRef,
            className: "flex gap-3 overflow-x-auto scrollbar-hide px-4 md:px-8 py-6 scroll-smooth",
            style: { scrollbarWidth: "none", msOverflowStyle: "none" },
            children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "flex-none w-[140px] sm:w-[160px] md:w-[180px]",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ContentCard,
                  {
                    item,
                    onPlay,
                    onAddFavorite,
                    onAddWatchlist
                  }
                )
              },
              item.id
            ))
          }
        )
      ]
    }
  );
}
const HERO_ITEM_IDS = ["1", "7", "13", "19"];
const HERO_INTERVAL = 5e3;
function HeroSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "relative w-full bg-card animate-pulse",
      style: { minHeight: 580 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col justify-end pb-20 h-full",
            style: { minHeight: 580 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-24 bg-muted/60 rounded mb-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-80 bg-muted/60 rounded mb-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-48 bg-muted/40 rounded mb-6" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-36 bg-muted/60 rounded-lg" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-36 bg-muted/40 rounded-lg" })
              ] })
            ]
          }
        )
      ]
    }
  );
}
const SKELETON_KEYS = ["sk-0", "sk-1", "sk-2", "sk-3", "sk-4", "sk-5"];
function RowSkeleton({ title: _title }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 md:px-8 mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 w-40 bg-muted/40 rounded animate-pulse" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 px-4 md:px-8 overflow-hidden", children: SKELETON_KEYS.map((key, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "flex-none w-[160px] aspect-[2/3] bg-card rounded-lg animate-pulse",
        style: { animationDelay: `${i * 80}ms` }
      },
      key
    )) })
  ] });
}
function HeroBanner({ items, onPlay }) {
  const [idx, setIdx] = reactExports.useState(0);
  const [paused, setPaused] = reactExports.useState(false);
  const [imgErrors, setImgErrors] = reactExports.useState({});
  const { t } = useLanguage();
  const timerRef = reactExports.useRef(null);
  const startTimer = reactExports.useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIdx((i) => (i + 1) % items.length);
    }, HERO_INTERVAL);
  }, [items.length]);
  reactExports.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "relative w-full overflow-hidden",
      style: { minHeight: 580 },
      onMouseEnter: () => setPaused(true),
      onMouseLeave: () => setPaused(false),
      "data-ocid": "hero-banner",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "sync", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            className: "absolute inset-0",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.7 },
            children: [
              !hasImgError ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: item.posterUrl,
                  alt: "",
                  className: "w-full h-full object-cover object-top",
                  style: { filter: "brightness(0.45) saturate(1.2)" },
                  onError: () => setImgErrors((prev) => ({ ...prev, [item.id]: true }))
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full bg-gradient-to-br from-primary/20 via-background to-accent/10" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/20" })
            ]
          },
          `backdrop-${item.id}`
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none select-none overflow-hidden hidden lg:flex items-center justify-end pr-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "font-display font-black leading-none",
            style: {
              fontSize: "min(40vw, 420px)",
              color: "oklch(0.93 0 0 / 0.03)",
              lineHeight: 1
            },
            children: "X"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col justify-end pb-24",
            style: { minHeight: 580 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 24 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -12 },
                transition: { duration: 0.45, ease: "easeOut" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-3 py-1 rounded-full text-xs font-bold font-body uppercase tracking-widest bg-primary/20 text-primary border border-primary/30 mb-3", children: item.category === "movie" ? t("category.movies") : item.category === "anime" ? t("category.anime") : item.category === "drama" ? t("category.dramas") : t("category.music") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-black text-4xl md:text-6xl text-foreground leading-[1.05] mb-4 drop-shadow-lg", children: item.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-medium text-yellow-400", children: [
                      "★ ",
                      item.rating.toFixed(1)
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-sm", children: "•" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded-full text-xs font-medium bg-muted/60 text-muted-foreground border border-border/40", children: item.genre }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-sm", children: "•" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-sm", children: item.year }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-sm", children: "•" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-sm", children: item.duration })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body text-sm md:text-base leading-relaxed mb-7 line-clamp-2 max-w-md", children: item.description }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 flex-wrap", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => onPlay(item),
                        className: "flex items-center gap-2.5 px-7 py-3 bg-primary text-primary-foreground rounded-lg font-display font-bold text-sm hover:bg-primary/90 transition-smooth glow-red shadow-lg",
                        "data-ocid": "hero-watch-now",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { size: 18, fill: "currentColor" }),
                          t("hero.watchNow")
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Link,
                      {
                        to: "/content/$id",
                        params: { id: item.id },
                        className: "flex items-center gap-2.5 px-7 py-3 bg-muted/40 backdrop-blur-sm border border-border/50 text-foreground rounded-lg font-display font-bold text-sm hover:bg-muted/70 hover:border-border transition-smooth",
                        "data-ocid": "hero-more-info",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { size: 18 }),
                          t("hero.moreInfo")
                        ]
                      }
                    )
                  ] })
                ]
              },
              `content-${item.id}`
            ) }) })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-8 left-6 md:left-12 flex items-center gap-2 z-20", children: [
          items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => {
                setIdx(i);
                startTimer();
              },
              "aria-label": `Go to slide ${i + 1}`,
              className: `rounded-full transition-all duration-400 ${i === idx ? "bg-primary w-7 h-2.5 shadow-md glow-red" : "bg-muted-foreground/40 w-2.5 h-2.5 hover:bg-muted-foreground/70"}`,
              "data-ocid": `hero-dot-${i}`
            },
            it.id
          )),
          paused && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 text-xs text-muted-foreground/60 font-body", children: "⏸" })
        ] }),
        !paused && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 h-0.5 bg-border/20 z-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "h-full bg-primary",
            initial: { width: "0%" },
            animate: { width: "100%" },
            transition: { duration: HERO_INTERVAL / 1e3, ease: "linear" }
          },
          `progress-${idx}`
        ) })
      ]
    }
  );
}
function HomePage() {
  const { data: all = [], isLoading } = useAllContent();
  const { t } = useLanguage();
  const [playing, setPlaying] = reactExports.useState(null);
  const movies = all.filter((i) => i.category === "movie");
  const anime = all.filter((i) => i.category === "anime");
  const dramas = all.filter((i) => i.category === "drama");
  const music = all.filter((i) => i.category === "music");
  const heroItems = HERO_ITEM_IDS.map(
    (id) => all.find((i) => i.id === id)
  ).filter(Boolean);
  const displayHeroItems = heroItems.length > 0 ? heroItems : all.slice(0, 4);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-16 -mt-0", children: [
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSkeleton, {}) : displayHeroItems.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(HeroBanner, { items: displayHeroItems, onPlay: setPlaying }) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 space-y-2", children: [
      isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(RowSkeleton, { title: t("category.movies") }) : movies.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        ContentRow,
        {
          title: t("category.movies"),
          items: movies,
          onPlay: setPlaying
        }
      ) : null,
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/10 py-2 rounded-none", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(RowSkeleton, { title: t("category.anime") }) : anime.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        ContentRow,
        {
          title: t("category.anime"),
          items: anime,
          onPlay: setPlaying
        }
      ) : null }),
      isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(RowSkeleton, { title: t("category.dramas") }) : dramas.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        ContentRow,
        {
          title: t("category.dramas"),
          items: dramas,
          onPlay: setPlaying
        }
      ) : null,
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/10 py-2 rounded-none", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(RowSkeleton, { title: t("category.music") }) : music.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        ContentRow,
        {
          title: t("category.music"),
          items: music,
          onPlay: setPlaying
        }
      ) : null })
    ] }),
    playing && /* @__PURE__ */ jsxRuntimeExports.jsx(PlayerModal, { item: playing, onClose: () => setPlaying(null) })
  ] });
}
export {
  HomePage as default
};

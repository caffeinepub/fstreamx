import { c as createLucideIcon, a as useParams, u as useLanguage, r as reactExports, j as jsxRuntimeExports, L as Link } from "./index-Cd7TRQZ4.js";
import { S as Star, a as Play, P as PlayerModal } from "./PlayerModal-BfUB_KBw.js";
import { c as useContentById, m as motion } from "./backend-client-BZnhBlka.js";
import { C as ChevronLeft } from "./chevron-left-Dx2slGub.js";
import { C as ChevronRight } from "./chevron-right-B7OPatXq.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = createLucideIcon("calendar", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
];
const Clock = createLucideIcon("clock", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0"
    }
  ],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
];
const Tag = createLucideIcon("tag", __iconNode);
function SeasonTabs({
  seasons,
  active,
  onSelect,
  seasonLabel
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "flex gap-1 overflow-x-auto pb-1 scrollbar-hide",
      role: "tablist",
      "data-ocid": "season-tabs",
      children: seasons.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          role: "tab",
          "aria-selected": active === s.seasonNumber,
          onClick: () => onSelect(s.seasonNumber),
          className: [
            "flex-shrink-0 px-5 py-2 rounded-t-md text-sm font-display font-semibold transition-smooth border-b-2",
            active === s.seasonNumber ? "border-primary text-primary bg-card" : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/40"
          ].join(" "),
          children: [
            seasonLabel,
            " ",
            s.seasonNumber
          ]
        },
        s.seasonNumber
      ))
    }
  );
}
function EpisodeRow({
  episode,
  isActive,
  episodeLabel,
  onClick
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      onClick,
      "data-ocid": `episode-row-${episode.episodeNumber}`,
      className: [
        "w-full text-left flex gap-4 items-start px-4 py-3 rounded-lg border transition-smooth",
        isActive ? "border-primary/50 bg-primary/10" : "border-border/30 bg-card hover:bg-muted/40 hover:border-border/60"
      ].join(" "),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: [
              "flex-shrink-0 w-9 h-9 rounded-md flex items-center justify-center text-sm font-display font-black",
              isActive ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
            ].join(" "),
            children: episode.episodeNumber
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-display font-semibold text-foreground leading-snug truncate", children: [
            episodeLabel,
            " ",
            episode.episodeNumber,
            ": ",
            episode.title
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-body mt-0.5 line-clamp-2 leading-relaxed", children: episode.description })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-shrink-0 text-xs text-muted-foreground font-mono mt-1", children: episode.duration })
      ]
    }
  );
}
function PartButtons({
  parts,
  partLabel,
  onSelect
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", "data-ocid": "part-buttons", children: parts.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      onClick: () => onSelect(p),
      "data-ocid": `part-btn-${p.partNumber}`,
      className: "flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent/15 border border-accent/30 text-accent text-sm font-display font-semibold hover:bg-accent/25 hover:border-accent/60 transition-smooth",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { size: 13, fill: "currentColor" }),
        partLabel,
        " ",
        p.partNumber,
        p.title ? ` — ${p.title}` : ""
      ]
    },
    p.partNumber
  )) });
}
function ContentDetailPage() {
  const { id } = useParams({ from: "/content/$id" });
  const { data: item, isLoading } = useContentById(id);
  const { t } = useLanguage();
  const [activeSeason, setActiveSeason] = reactExports.useState(1);
  const [activeEpisodeIdx, setActiveEpisodeIdx] = reactExports.useState(0);
  const [playTarget, setPlayTarget] = reactExports.useState(null);
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center min-h-[50vh]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin" }) });
  }
  if (!item) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1400px] mx-auto px-4 md:px-8 py-20 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-display text-xl", children: "Content not found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/",
          className: "mt-4 inline-block text-accent hover:text-foreground transition-smooth",
          children: "← Back to Home"
        }
      )
    ] });
  }
  const categoryPath = item.category === "movie" ? "/movies" : item.category === "anime" ? "/anime" : item.category === "drama" ? "/dramas" : "/music";
  const isSeriesContent = (item.category === "anime" || item.category === "drama") && item.seasons && item.seasons.length > 0;
  const currentSeason = isSeriesContent ? item.seasons.find((s) => s.seasonNumber === activeSeason) ?? item.seasons[0] : null;
  const episodes = (currentSeason == null ? void 0 : currentSeason.episodes) ?? [];
  const currentEpisode = episodes.length > 0 ? episodes[activeEpisodeIdx] ?? episodes[0] : null;
  const hasParts = (currentEpisode == null ? void 0 : currentEpisode.parts) && currentEpisode.parts.length > 0;
  function handleSelectSeason(n) {
    setActiveSeason(n);
    setActiveEpisodeIdx(0);
  }
  function handleSelectEpisode(idx) {
    setActiveEpisodeIdx(idx);
    const ep = episodes[idx];
    if (ep && (!ep.parts || ep.parts.length === 0)) {
      setPlayTarget({
        videoUrl: ep.videoUrl,
        label: `${t("detail.episode")} ${ep.episodeNumber}: ${ep.title}`
      });
    }
  }
  function handlePlayPart(part) {
    setPlayTarget({
      videoUrl: part.videoUrl,
      label: `${t("detail.part")} ${part.partNumber}${part.title ? ` — ${part.title}` : ""}`
    });
  }
  function handlePlayMain() {
    if (!item) return;
    if (isSeriesContent && currentEpisode) {
      if (!hasParts) {
        setPlayTarget({
          videoUrl: currentEpisode.videoUrl,
          label: `${t("detail.episode")} ${currentEpisode.episodeNumber}`
        });
      }
    } else {
      setPlayTarget({ videoUrl: void 0, label: item.title });
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden", style: { minHeight: 400 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: item.posterUrl,
            alt: "",
            className: "w-full h-full object-cover object-top opacity-20 scale-110",
            style: { filter: "blur(4px)" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-[1400px] mx-auto px-4 md:px-8 pt-8 pb-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: categoryPath,
            className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-smooth mb-8 font-body",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 16 }),
              "Back"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row gap-8 items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.95 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 0.4 },
              className: "flex-shrink-0 w-48 md:w-64 rounded-xl overflow-hidden shadow-elevated border border-border/30",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: item.posterUrl,
                  alt: item.title,
                  className: "w-full h-full object-cover",
                  onError: (e) => {
                    e.target.style.display = "none";
                  }
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.4, delay: 0.1 },
              className: "flex-1 min-w-0",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium font-body uppercase tracking-wide", children: item.category }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-black text-4xl md:text-5xl text-foreground mt-3 mb-4 leading-tight", children: item.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 mb-5 text-sm text-muted-foreground font-body", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Star,
                      {
                        size: 14,
                        className: "text-yellow-400",
                        fill: "currentColor"
                      }
                    ),
                    item.rating.toFixed(1)
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 14 }),
                    item.year
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 14 }),
                    item.duration
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { size: 14 }),
                    item.genre
                  ] }),
                  isSeriesContent && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-accent", children: [
                    item.seasons.length,
                    " ",
                    t("detail.seasons")
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/80 font-body leading-relaxed mb-8 max-w-2xl", children: item.description }),
                !isSeriesContent && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-display font-semibold hover:bg-primary/90 transition-smooth glow-red text-base",
                    onClick: handlePlayMain,
                    "data-ocid": "detail-play-btn",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { size: 20, fill: "currentColor" }),
                      t("common.play")
                    ]
                  }
                )
              ]
            }
          )
        ] })
      ] })
    ] }),
    isSeriesContent && item.seasons && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay: 0.2 },
        className: "max-w-[1400px] mx-auto px-4 md:px-8 mt-8",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border/40 mb-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SeasonTabs,
            {
              seasons: item.seasons,
              active: activeSeason,
              onSelect: handleSelectSeason,
              seasonLabel: t("detail.season")
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card/50 border border-border/30 border-t-0 rounded-b-xl rounded-tr-xl p-4 md:p-6", children: [
            (currentSeason == null ? void 0 : currentSeason.description) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-body mb-4 italic", children: currentSeason.description }),
            episodes.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body py-8 text-center", children: t("detail.noEpisodes") }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex-1 min-w-0 flex flex-col gap-2 max-h-[420px] overflow-y-auto pr-1",
                  "data-ocid": "episode-list",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-body text-muted-foreground uppercase tracking-widest mb-1 px-1", children: t("detail.episodes") }),
                    episodes.map((ep, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      EpisodeRow,
                      {
                        episode: ep,
                        isActive: idx === activeEpisodeIdx,
                        episodeLabel: t("detail.episode"),
                        onClick: () => handleSelectEpisode(idx)
                      },
                      ep.episodeNumber
                    ))
                  ]
                }
              ),
              currentEpisode && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:w-80 flex-shrink-0 flex flex-col gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background/60 border border-border/30 rounded-xl p-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-body text-muted-foreground uppercase tracking-widest mb-2", children: [
                    t("detail.episode"),
                    " ",
                    currentEpisode.episodeNumber
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-lg leading-snug mb-2", children: currentEpisode.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-body leading-relaxed mb-4", children: currentEpisode.description }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground font-mono flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 11 }),
                    currentEpisode.duration
                  ] })
                ] }),
                hasParts ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-body text-muted-foreground uppercase tracking-widest", children: t("detail.parts") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    PartButtons,
                    {
                      parts: currentEpisode.parts,
                      partLabel: t("detail.part"),
                      onSelect: handlePlayPart
                    }
                  )
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-display font-semibold hover:bg-primary/90 transition-smooth glow-red text-sm w-full",
                    onClick: () => setPlayTarget({
                      videoUrl: currentEpisode.videoUrl,
                      label: `${t("detail.episode")} ${currentEpisode.episodeNumber}: ${currentEpisode.title}`
                    }),
                    "data-ocid": "episode-play-btn",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { size: 16, fill: "currentColor" }),
                      t("common.play"),
                      " ",
                      t("detail.episode"),
                      " ",
                      currentEpisode.episodeNumber
                    ]
                  }
                )
              ] })
            ] }),
            episodes.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center justify-between mt-6 pt-4 border-t border-border/30",
                "data-ocid": "episode-nav",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      disabled: activeEpisodeIdx === 0,
                      onClick: () => setActiveEpisodeIdx((i) => Math.max(0, i - 1)),
                      className: "flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-display font-semibold border border-border/40 text-muted-foreground hover:text-foreground hover:border-border/80 transition-smooth disabled:opacity-30 disabled:cursor-not-allowed",
                      "data-ocid": "episode-prev",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 16 }),
                        t("detail.episode"),
                        " ",
                        activeEpisodeIdx
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground font-mono", children: [
                    activeEpisodeIdx + 1,
                    " / ",
                    episodes.length
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      disabled: activeEpisodeIdx === episodes.length - 1,
                      onClick: () => setActiveEpisodeIdx(
                        (i) => Math.min(episodes.length - 1, i + 1)
                      ),
                      className: "flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-display font-semibold border border-border/40 text-muted-foreground hover:text-foreground hover:border-border/80 transition-smooth disabled:opacity-30 disabled:cursor-not-allowed",
                      "data-ocid": "episode-next",
                      children: [
                        t("detail.episode"),
                        " ",
                        activeEpisodeIdx + 2,
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16 })
                      ]
                    }
                  )
                ]
              }
            )
          ] })
        ]
      }
    ),
    playTarget && /* @__PURE__ */ jsxRuntimeExports.jsx(PlayerModal, { item, onClose: () => setPlayTarget(null) })
  ] });
}
export {
  ContentDetailPage as default
};

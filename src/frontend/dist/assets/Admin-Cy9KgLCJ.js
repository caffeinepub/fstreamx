import { c as createLucideIcon, u as useLanguage, r as reactExports, j as jsxRuntimeExports, X } from "./index-nodcIggE.js";
import { u as useAllContent, d as useAddContent, e as useUpdateContent, f as useDeleteContent, m as motion } from "./backend-client-BHE2ZAfV.js";
import { A as AnimatePresence } from "./index-C2P3ff-F.js";
import { C as ChevronRight } from "./chevron-right-ByFPvg64.js";
import { F as Film } from "./film-Dd-Tisgq.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$6 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
const ChevronDown = createLucideIcon("chevron-down", __iconNode$6);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$5 = [
  [
    "path",
    {
      d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
      key: "zw3jo"
    }
  ],
  [
    "path",
    {
      d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
      key: "1wduqc"
    }
  ],
  [
    "path",
    {
      d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
      key: "kqbvx6"
    }
  ]
];
const Layers = createLucideIcon("layers", __iconNode$5);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["path", { d: "M12 12H3", key: "18klou" }],
  ["path", { d: "M16 6H3", key: "1wxfjs" }],
  ["path", { d: "M12 18H3", key: "11ftsu" }],
  ["path", { d: "m16 12 5 3-5 3v-6Z", key: "zpskkp" }]
];
const ListVideo = createLucideIcon("list-video", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
const Pencil = createLucideIcon("pencil", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
];
const Plus = createLucideIcon("plus", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
];
const Shield = createLucideIcon("shield", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
];
const Trash2 = createLucideIcon("trash-2", __iconNode);
const makeEpisode = (n) => ({
  episodeNumber: n,
  title: "",
  description: "",
  duration: "",
  videoUrl: "",
  parts: []
});
const makeSeason = (n) => ({
  seasonNumber: n,
  title: "",
  description: "",
  episodes: [makeEpisode(1)]
});
const makePart = (n) => ({
  partNumber: n,
  title: "",
  videoUrl: "",
  duration: ""
});
const CATEGORIES = ["movie", "anime", "drama", "music"];
const SHOW_SEASONS = ["anime", "drama"];
const EMPTY_FORM = {
  title: "",
  description: "",
  category: "movie",
  genre: "",
  year: (/* @__PURE__ */ new Date()).getFullYear(),
  rating: 0,
  duration: "",
  posterUrl: "",
  seasons: void 0
};
const fieldCls = "w-full px-3 py-2 bg-background border border-border/60 rounded-lg text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth";
const labelCls = "block text-xs text-muted-foreground mb-1 font-body uppercase tracking-wide";
function PartsEditor({
  parts,
  onChange
}) {
  const addPart = () => onChange([...parts, makePart(parts.length + 1)]);
  const removePart = (i) => {
    const next = parts.filter((_, idx) => idx !== i).map((p, idx) => ({ ...p, partNumber: idx + 1 }));
    onChange(next);
  };
  const setPart = (i, k, v) => {
    onChange(parts.map((p, idx) => idx === i ? { ...p, [k]: v } : p));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 space-y-2 pl-4 border-l-2 border-accent/30", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-accent font-display uppercase tracking-widest flex items-center gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Film, { size: 11 }),
      " Parts"
    ] }),
    parts.map((part, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-muted/20 rounded-lg p-3 space-y-2 relative",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-display text-accent font-semibold", children: [
              "Part ",
              part.partNumber
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => removePart(i),
                className: "text-muted-foreground hover:text-primary transition-smooth p-0.5 rounded",
                "aria-label": "Remove part",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 12 })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: `part-title-${part.partNumber}`,
                  className: labelCls,
                  children: "Part Title"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: `part-title-${part.partNumber}`,
                  type: "text",
                  value: part.title,
                  onChange: (e) => setPart(i, "title", e.target.value),
                  className: fieldCls,
                  placeholder: "Part 1 title"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: `part-video-${part.partNumber}`,
                  className: labelCls,
                  children: "Video URL"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: `part-video-${part.partNumber}`,
                  type: "url",
                  value: part.videoUrl ?? "",
                  onChange: (e) => setPart(i, "videoUrl", e.target.value),
                  className: fieldCls,
                  placeholder: "https://..."
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: `part-dur-${part.partNumber}`,
                  className: labelCls,
                  children: "Duration"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: `part-dur-${part.partNumber}`,
                  type: "text",
                  value: part.duration,
                  onChange: (e) => setPart(i, "duration", e.target.value),
                  className: fieldCls,
                  placeholder: "e.g. 12m"
                }
              )
            ] })
          ] })
        ]
      },
      `part-${part.partNumber}`
    )),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: addPart,
        className: "flex items-center gap-1.5 text-xs text-accent hover:text-foreground font-display transition-smooth px-2 py-1 rounded-md hover:bg-accent/10",
        "data-ocid": "admin-add-part",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 12 }),
          " Add Part"
        ]
      }
    )
  ] });
}
function EpisodeEditor({
  episode,
  onChange,
  onRemove
}) {
  const [expanded, setExpanded] = reactExports.useState(false);
  const setField = (k, v) => onChange({ ...episode, [k]: v });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "bg-muted/10 border border-border/30 rounded-lg overflow-hidden",
      "data-ocid": `admin-episode-${episode.episodeNumber}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-3 py-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setExpanded((x) => !x),
              className: "text-muted-foreground hover:text-foreground transition-smooth",
              "aria-label": "Toggle episode",
              children: expanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 14 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 14 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-display text-foreground/80 font-semibold min-w-[70px]", children: [
            "Ep ",
            episode.episodeNumber
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: episode.title,
              onChange: (e) => setField("title", e.target.value),
              className: "flex-1 px-2 py-1 bg-background border border-border/50 rounded-md text-foreground font-body text-xs focus:outline-none focus:ring-1 focus:ring-primary/50 transition-smooth",
              placeholder: "Episode title"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: onRemove,
              className: "text-muted-foreground hover:text-primary transition-smooth p-0.5",
              "aria-label": "Remove episode",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 13 })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: expanded && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: { height: 0, opacity: 0 },
            transition: { duration: 0.2 },
            className: "overflow-hidden",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pb-4 space-y-3 border-t border-border/20 pt-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "label",
                    {
                      htmlFor: `ep-desc-${episode.episodeNumber}`,
                      className: labelCls,
                      children: "Description"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "textarea",
                    {
                      id: `ep-desc-${episode.episodeNumber}`,
                      rows: 2,
                      value: episode.description,
                      onChange: (e) => setField("description", e.target.value),
                      className: `${fieldCls} resize-none`,
                      placeholder: "Episode synopsis"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "label",
                      {
                        htmlFor: `ep-video-${episode.episodeNumber}`,
                        className: labelCls,
                        children: "Video URL"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        id: `ep-video-${episode.episodeNumber}`,
                        type: "url",
                        value: episode.videoUrl ?? "",
                        onChange: (e) => setField("videoUrl", e.target.value),
                        className: fieldCls,
                        placeholder: "https://...",
                        "data-ocid": `admin-ep-videourl-${episode.episodeNumber}`
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "label",
                      {
                        htmlFor: `ep-dur-${episode.episodeNumber}`,
                        className: labelCls,
                        children: "Duration"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        id: `ep-dur-${episode.episodeNumber}`,
                        type: "text",
                        value: episode.duration,
                        onChange: (e) => setField("duration", e.target.value),
                        className: fieldCls,
                        placeholder: "e.g. 24m"
                      }
                    )
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                PartsEditor,
                {
                  parts: episode.parts ?? [],
                  onChange: (p) => onChange({ ...episode, parts: p })
                }
              )
            ] })
          }
        ) })
      ]
    }
  );
}
function SeasonEditor({
  season,
  onChange,
  onRemove
}) {
  const [expanded, setExpanded] = reactExports.useState(true);
  const setField = (k, v) => onChange({ ...season, [k]: v });
  const addEpisode = () => onChange({
    ...season,
    episodes: [...season.episodes, makeEpisode(season.episodes.length + 1)]
  });
  const removeEpisode = (i) => {
    const next = season.episodes.filter((_, idx) => idx !== i).map((ep, idx) => ({ ...ep, episodeNumber: idx + 1 }));
    onChange({ ...season, episodes: next });
  };
  const updateEpisode = (i, ep) => {
    onChange({
      ...season,
      episodes: season.episodes.map((e, idx) => idx === i ? ep : e)
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "border border-border/40 rounded-xl overflow-hidden",
      "data-ocid": `admin-season-${season.seasonNumber}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-4 py-3 bg-muted/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setExpanded((x) => !x),
              className: "text-muted-foreground hover:text-foreground transition-smooth",
              "aria-label": "Toggle season",
              children: expanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 16 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { size: 15, className: "text-primary shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-display font-bold text-foreground min-w-[80px]", children: [
            "Season ",
            season.seasonNumber
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: season.title,
              onChange: (e) => setField("title", e.target.value),
              className: "flex-1 px-3 py-1.5 bg-background border border-border/50 rounded-lg text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-smooth",
              placeholder: "Season title (optional)"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: onRemove,
              className: "text-muted-foreground hover:text-primary transition-smooth p-1 rounded-md hover:bg-primary/10",
              "aria-label": "Remove season",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 15 })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: expanded && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: { height: 0, opacity: 0 },
            transition: { duration: 0.2 },
            className: "overflow-hidden",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pb-4 pt-3 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: `season-desc-${season.seasonNumber}`,
                    className: labelCls,
                    children: "Season Description"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: `season-desc-${season.seasonNumber}`,
                    type: "text",
                    value: season.description,
                    onChange: (e) => setField("description", e.target.value),
                    className: fieldCls,
                    placeholder: "Brief description for this season"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground font-display uppercase tracking-widest flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ListVideo, { size: 11 }),
                  " Episodes (",
                  season.episodes.length,
                  ")"
                ] }),
                season.episodes.map((ep, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  EpisodeEditor,
                  {
                    episode: ep,
                    onChange: (updated) => updateEpisode(i, updated),
                    onRemove: () => removeEpisode(i)
                  },
                  `ep-${season.seasonNumber}-${ep.episodeNumber}`
                ))
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: addEpisode,
                  className: "flex items-center gap-1.5 text-sm text-primary hover:text-foreground font-display transition-smooth px-3 py-1.5 rounded-lg hover:bg-primary/10 border border-dashed border-primary/30",
                  "data-ocid": `admin-add-episode-${season.seasonNumber}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 13 }),
                    " Add Episode"
                  ]
                }
              )
            ] })
          }
        ) })
      ]
    }
  );
}
function SeasonsSection({
  seasons,
  onChange
}) {
  const addSeason = () => onChange([...seasons, makeSeason(seasons.length + 1)]);
  const removeSeason = (i) => {
    const next = seasons.filter((_, idx) => idx !== i).map((s, idx) => ({ ...s, seasonNumber: idx + 1 }));
    onChange(next);
  };
  const updateSeason = (i, s) => onChange(seasons.map((ss, idx) => idx === i ? s : ss));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "mt-6 border-t border-border/40 pt-6 space-y-4",
      "data-ocid": "admin-seasons-section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { size: 18, className: "text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-base text-foreground", children: "Seasons & Episodes" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground font-body", children: [
              "(",
              seasons.length,
              " season",
              seasons.length !== 1 ? "s" : "",
              ")"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: addSeason,
              className: "flex items-center gap-1.5 text-sm font-display text-primary hover:text-foreground px-4 py-1.5 rounded-lg border border-primary/40 hover:bg-primary/10 transition-smooth",
              "data-ocid": "admin-add-season",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 14 }),
                " Add Season"
              ]
            }
          )
        ] }),
        seasons.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-8 border border-dashed border-border/40 rounded-xl text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { size: 32, className: "mx-auto mb-2 opacity-30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-body", children: "No seasons yet — add one above" })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: seasons.map((season, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          SeasonEditor,
          {
            season,
            onChange: (s) => updateSeason(i, s),
            onRemove: () => removeSeason(i)
          },
          `season-${season.seasonNumber}`
        )) })
      ]
    }
  );
}
function ContentForm({
  initial,
  onSave,
  onCancel,
  isLoading
}) {
  const { t } = useLanguage();
  const [form, setForm] = reactExports.useState(() => ({
    ...initial,
    seasons: initial.seasons ?? (SHOW_SEASONS.includes(initial.category) ? [] : void 0)
  }));
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const handleCategoryChange = (cat) => {
    setForm((f) => ({
      ...f,
      category: cat,
      seasons: SHOW_SEASONS.includes(cat) ? f.seasons ?? [] : void 0
    }));
  };
  const showSeasons = SHOW_SEASONS.includes(form.category);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "form",
    {
      onSubmit: (e) => {
        e.preventDefault();
        onSave({
          ...form,
          seasons: showSeasons ? form.seasons : void 0
        });
      },
      className: "bg-card border border-border/50 rounded-xl p-6 space-y-4",
      "data-ocid": "admin-form",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "admin-title", className: labelCls, children: "Title *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: "admin-title",
                required: true,
                type: "text",
                value: form.title,
                onChange: (e) => set("title", e.target.value),
                className: fieldCls,
                "data-ocid": "admin-input-title"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "admin-desc", className: labelCls, children: "Description *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                id: "admin-desc",
                required: true,
                rows: 3,
                value: form.description,
                onChange: (e) => set("description", e.target.value),
                className: `${fieldCls} resize-none`,
                "data-ocid": "admin-input-description"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "admin-category", className: labelCls, children: "Category *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "select",
              {
                id: "admin-category",
                value: form.category,
                onChange: (e) => handleCategoryChange(e.target.value),
                className: fieldCls,
                "data-ocid": "admin-input-category",
                children: CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c, children: c.charAt(0).toUpperCase() + c.slice(1) }, c))
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "admin-genre", className: labelCls, children: "Genre *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: "admin-genre",
                required: true,
                type: "text",
                value: form.genre,
                onChange: (e) => set("genre", e.target.value),
                className: fieldCls,
                "data-ocid": "admin-input-genre"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "admin-year", className: labelCls, children: "Year *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: "admin-year",
                required: true,
                type: "number",
                min: 1900,
                max: 2099,
                value: form.year,
                onChange: (e) => set("year", Number(e.target.value)),
                className: fieldCls,
                "data-ocid": "admin-input-year"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "admin-rating", className: labelCls, children: "Rating (0–5)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: "admin-rating",
                type: "number",
                min: 0,
                max: 5,
                step: 0.1,
                value: form.rating,
                onChange: (e) => set("rating", Number(e.target.value)),
                className: fieldCls,
                "data-ocid": "admin-input-rating"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "admin-duration", className: labelCls, children: "Duration" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: "admin-duration",
                type: "text",
                placeholder: "e.g. 2h 15m or 24 eps",
                value: form.duration,
                onChange: (e) => set("duration", e.target.value),
                className: fieldCls,
                "data-ocid": "admin-input-duration"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "admin-poster", className: labelCls, children: "Poster URL" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: "admin-poster",
                type: "url",
                placeholder: "https://...",
                value: form.posterUrl,
                onChange: (e) => set("posterUrl", e.target.value),
                className: fieldCls,
                "data-ocid": "admin-input-poster"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showSeasons && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            transition: { duration: 0.25 },
            className: "overflow-hidden",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              SeasonsSection,
              {
                seasons: form.seasons ?? [],
                onChange: (s) => setForm((f) => ({ ...f, seasons: s }))
              }
            )
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-2 border-t border-border/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "submit",
              disabled: isLoading,
              className: "flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-display font-semibold text-sm hover:bg-primary/90 disabled:opacity-50 transition-smooth glow-red",
              "data-ocid": "admin-save-btn",
              children: t("admin.save")
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: onCancel,
              className: "px-6 py-2.5 bg-muted/60 border border-border/40 text-foreground rounded-lg font-display font-semibold text-sm hover:bg-muted transition-smooth",
              "data-ocid": "admin-cancel-btn",
              children: t("admin.cancel")
            }
          )
        ] })
      ]
    }
  );
}
const CATEGORY_LABELS = {
  movie: "Movie",
  anime: "Anime",
  drama: "Drama",
  music: "Music"
};
function AdminPage() {
  const { t } = useLanguage();
  const { data: all = [], isLoading } = useAllContent();
  const addMut = useAddContent();
  const updateMut = useUpdateContent();
  const deleteMut = useDeleteContent();
  const [showAdd, setShowAdd] = reactExports.useState(false);
  const [editing, setEditing] = reactExports.useState(null);
  const handleAdd = async (input) => {
    await addMut.mutateAsync(input);
    setShowAdd(false);
  };
  const handleUpdate = async (input) => {
    if (!editing) return;
    await updateMut.mutateAsync({ id: editing.id, input });
    setEditing(null);
  };
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this item?")) return;
    await deleteMut.mutateAsync(id);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1400px] mx-auto px-4 md:px-8 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-8 flex-wrap gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 28, className: "text-accent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-black text-3xl text-foreground", children: t("admin.title") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-body mt-0.5", children: "Manage all platform content" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          className: "flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-display font-semibold text-sm hover:bg-primary/90 transition-smooth glow-red",
          onClick: () => {
            setShowAdd(true);
            setEditing(null);
          },
          "data-ocid": "admin-add-btn",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 16 }),
            t("admin.addContent")
          ]
        }
      )
    ] }),
    showAdd && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -10 },
        animate: { opacity: 1, y: 0 },
        className: "mb-8",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-lg text-foreground mb-4", children: t("admin.addContent") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ContentForm,
            {
              initial: EMPTY_FORM,
              onSave: handleAdd,
              onCancel: () => setShowAdd(false),
              isLoading: addMut.isPending
            }
          )
        ]
      }
    ),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: Array.from({ length: 6 }, (_, i) => `skel-${i}`).map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "h-14 rounded-lg bg-muted/30 animate-pulse"
      },
      k
    )) }) : all.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "text-center py-20 text-muted-foreground",
        "data-ocid": "admin-empty",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 48, className: "mx-auto mb-4 opacity-30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl", children: "No content yet" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-2 font-body", children: "Add your first item above" })
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "rounded-xl border border-border/40 overflow-hidden",
        "data-ocid": "admin-table",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm font-body", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/40 border-b border-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: [
            "Title",
            "Category",
            "Genre",
            "Year",
            "Rating",
            "Duration",
            "Seasons",
            "Actions"
          ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "th",
            {
              className: "px-4 py-3 text-left text-xs uppercase tracking-wide text-muted-foreground font-medium",
              children: h
            },
            h
          )) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: all.map((item, i) => {
            var _a;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.tr,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: i * 0.03 },
                className: "border-b border-border/30 hover:bg-muted/20 transition-smooth",
                "data-ocid": `admin-row-${item.id}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-medium text-foreground max-w-[180px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "line-clamp-1", children: item.title }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 bg-primary/20 text-primary rounded-full text-xs", children: CATEGORY_LABELS[item.category] ?? item.category }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground", children: item.genre }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground tabular-nums", children: item.year }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground tabular-nums", children: item.rating.toFixed(1) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground", children: item.duration }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground tabular-nums", children: ((_a = item.seasons) == null ? void 0 : _a.length) ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2 py-0.5 bg-accent/20 text-accent rounded-full text-xs", children: [
                    item.seasons.length,
                    "S"
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/40", children: "—" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        className: "p-1.5 rounded-md hover:bg-accent/20 text-accent hover:text-foreground transition-smooth",
                        onClick: () => {
                          setEditing(item);
                          setShowAdd(false);
                        },
                        "aria-label": `Edit ${item.title}`,
                        "data-ocid": `admin-edit-${item.id}`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { size: 14 })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        className: "p-1.5 rounded-md hover:bg-primary/20 text-primary hover:text-foreground transition-smooth",
                        onClick: () => handleDelete(item.id),
                        "aria-label": `Delete ${item.title}`,
                        "data-ocid": `admin-delete-${item.id}`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 14 })
                      }
                    )
                  ] }) })
                ]
              },
              item.id
            );
          }) })
        ] }) })
      }
    ),
    editing && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        className: "mt-8",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-lg text-foreground mb-4", children: [
            t("admin.editContent"),
            ": ",
            editing.title
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ContentForm,
            {
              initial: {
                title: editing.title,
                description: editing.description,
                category: editing.category,
                genre: editing.genre,
                year: editing.year,
                rating: editing.rating,
                duration: editing.duration,
                posterUrl: editing.posterUrl,
                seasons: editing.seasons
              },
              onSave: handleUpdate,
              onCancel: () => setEditing(null),
              isLoading: updateMut.isPending
            }
          )
        ]
      }
    )
  ] });
}
export {
  AdminPage as default
};

import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, L as Link } from "./index-nodcIggE.js";
import { S as Star, a as Play } from "./PlayerModal-CSXJSzaL.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z", key: "1fy3hk" }]
];
const Bookmark = createLucideIcon("bookmark", __iconNode$1);
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
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ]
];
const Heart = createLucideIcon("heart", __iconNode);
const GENRE_COLORS = {
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
  War: "bg-primary/20 text-primary"
};
function genreBadgeClass(genre) {
  return GENRE_COLORS[genre] ?? "bg-muted/60 text-muted-foreground";
}
const FALLBACK_GRADIENTS = {
  movie: "from-primary/40 to-background",
  anime: "from-accent/40 to-background",
  drama: "from-purple-600/40 to-background",
  music: "from-cyan-600/40 to-background"
};
function ContentCard({
  item,
  onPlay,
  onAddFavorite,
  onAddWatchlist
}) {
  const [imgError, setImgError] = reactExports.useState(false);
  const fallback = FALLBACK_GRADIENTS[item.category] ?? "from-muted to-background";
  const hasSeasonsData = item.seasons && item.seasons.length > 0;
  const episodeCount = hasSeasonsData ? item.seasons.reduce((acc, s) => acc + s.episodes.length, 0) : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "group relative rounded-lg overflow-hidden cursor-pointer bg-card border border-border/40 transition-all duration-300 ease-out hover:scale-110 hover:z-10 hover:shadow-2xl",
      style: { transformOrigin: "center bottom" },
      "data-ocid": `content-card-${item.id}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[2/3] bg-muted overflow-hidden", children: [
          !imgError ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: item.posterUrl,
              alt: item.title,
              className: "w-full h-full object-cover transition-smooth",
              onError: () => setImgError(true),
              loading: "lazy"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `w-full h-full bg-gradient-to-b ${fallback} flex flex-col items-center justify-center gap-2 p-4`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-black text-3xl text-foreground/20", children: "FS" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-center text-sm font-medium text-foreground/60 line-clamp-2", children: item.title })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `absolute top-2 right-2 px-2 py-0.5 rounded-full text-xs font-medium font-body ${genreBadgeClass(item.genre)}`,
              children: item.genre
            }
          ),
          hasSeasonsData && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute top-2 left-2 px-2 py-0.5 rounded-full text-xs font-medium bg-accent/20 text-accent border border-accent/30", children: [
            item.seasons.length,
            "S · ",
            episodeCount,
            "E"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-2 left-2 flex items-center gap-1 bg-background/70 backdrop-blur-sm px-2 py-0.5 rounded-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 10, className: "text-yellow-400", fill: "currentColor" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-foreground", children: item.rating.toFixed(1) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/75 to-background/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-end pb-3 gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-sm text-foreground text-center px-2 line-clamp-2 leading-tight", children: item.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 10, className: "text-yellow-400", fill: "currentColor" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.rating.toFixed(1) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-border mx-1", children: "·" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: item.genre })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onPlay == null ? void 0 : onPlay(item);
                  },
                  className: "w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg glow-red hover:scale-110 transition-smooth",
                  "aria-label": `Play ${item.title}`,
                  "data-ocid": `play-btn-${item.id}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Play,
                    {
                      size: 16,
                      className: "text-primary-foreground ml-0.5",
                      fill: "currentColor"
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onAddFavorite == null ? void 0 : onAddFavorite(item);
                  },
                  className: "w-8 h-8 rounded-full bg-card/80 border border-border/60 flex items-center justify-center hover:bg-primary/20 hover:border-primary/60 transition-smooth",
                  "aria-label": `Add ${item.title} to favorites`,
                  "data-ocid": `fav-btn-${item.id}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 14, className: "text-primary" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onAddWatchlist == null ? void 0 : onAddWatchlist(item);
                  },
                  className: "w-8 h-8 rounded-full bg-card/80 border border-border/60 flex items-center justify-center hover:bg-accent/20 hover:border-accent/60 transition-smooth",
                  "aria-label": `Add ${item.title} to watchlist`,
                  "data-ocid": `watchlist-btn-${item.id}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bookmark, { size: 14, className: "text-accent" })
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/content/$id", params: { id: item.id }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-sm text-foreground line-clamp-1 group-hover:text-primary transition-smooth", children: item.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5 flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.year }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-border", children: "•" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.duration })
          ] })
        ] }) })
      ]
    }
  );
}
export {
  ContentCard as C
};

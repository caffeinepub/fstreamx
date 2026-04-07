import { u as useLanguage, r as reactExports, j as jsxRuntimeExports } from "./index-nodcIggE.js";
import { C as ContentCard } from "./ContentCard-CHuLhw25.js";
import { P as PlayerModal } from "./PlayerModal-CSXJSzaL.js";
import { a as useContentByCategory, m as motion } from "./backend-client-BHE2ZAfV.js";
import { F as Film } from "./film-Dd-Tisgq.js";
function MoviesPage() {
  const { data: movies = [], isLoading } = useContentByCategory("movie");
  const { t } = useLanguage();
  const [playing, setPlaying] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1400px] mx-auto px-4 md:px-8 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Film, { size: 28, className: "text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-black text-3xl text-foreground", children: t("category.movies") })
    ] }),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4", children: Array.from({ length: 10 }, (_, i) => `skel-${i}`).map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "aspect-[2/3] rounded-lg bg-muted/40 animate-pulse"
      },
      k
    )) }) : movies.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "text-center py-24 text-muted-foreground",
        "data-ocid": "movies-empty",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Film, { size: 48, className: "mx-auto mb-4 opacity-30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl", children: t("common.noResults") })
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4",
        "data-ocid": "movies-grid",
        children: movies.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.05 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContentCard, { item, onPlay: setPlaying })
          },
          item.id
        ))
      }
    ),
    playing && /* @__PURE__ */ jsxRuntimeExports.jsx(PlayerModal, { item: playing, onClose: () => setPlaying(null) })
  ] });
}
export {
  MoviesPage as default
};

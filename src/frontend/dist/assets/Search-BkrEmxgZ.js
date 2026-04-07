import { u as useLanguage, r as reactExports, j as jsxRuntimeExports, S as Search } from "./index-nodcIggE.js";
import { C as ContentCard } from "./ContentCard-CHuLhw25.js";
import { P as PlayerModal } from "./PlayerModal-CSXJSzaL.js";
import { b as useSearchContent, m as motion } from "./backend-client-BHE2ZAfV.js";
function SearchPage() {
  const { t } = useLanguage();
  const [query, setQuery] = reactExports.useState("");
  const [playing, setPlaying] = reactExports.useState(null);
  const { data: results = [], isLoading } = useSearchContent(query);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1400px] mx-auto px-4 md:px-8 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-8 max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Search,
        {
          size: 20,
          className: "absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "text",
          placeholder: t("search.placeholder"),
          value: query,
          onChange: (e) => setQuery(e.target.value),
          className: "w-full pl-12 pr-4 py-4 bg-card border border-border/60 rounded-xl text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-smooth text-sm",
          "data-ocid": "search-input"
        }
      )
    ] }),
    query.trim().length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-lg text-foreground mb-4", children: [
        t("search.results"),
        " ",
        results.length > 0 && `(${results.length})`
      ] }),
      isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4", children: Array.from({ length: 5 }, (_, i) => `skel-${i}`).map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "aspect-[2/3] rounded-lg bg-muted/40 animate-pulse"
        },
        k
      )) }) : results.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "text-center py-20 text-muted-foreground",
          "data-ocid": "search-empty",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 48, className: "mx-auto mb-4 opacity-30" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl", children: t("common.noResults") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-2 font-body", children: "Try a different keyword" })
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4",
          "data-ocid": "search-results",
          children: results.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.95 },
              animate: { opacity: 1, scale: 1 },
              transition: { delay: i * 0.04 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContentCard, { item, onPlay: setPlaying })
            },
            item.id
          ))
        }
      )
    ] }),
    !query.trim() && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-20 text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 64, className: "mx-auto mb-6 opacity-20" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl font-bold mb-2", children: "Search FStreamX" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-body", children: "Find movies, anime, dramas, and music" })
    ] }),
    playing && /* @__PURE__ */ jsxRuntimeExports.jsx(PlayerModal, { item: playing, onClose: () => setPlaying(null) })
  ] });
}
export {
  SearchPage as default
};

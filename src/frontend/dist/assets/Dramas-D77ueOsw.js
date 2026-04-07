import { c as createLucideIcon, u as useLanguage, r as reactExports, j as jsxRuntimeExports } from "./index-Cd7TRQZ4.js";
import { C as ContentCard } from "./ContentCard-DeC-wcC_.js";
import { P as PlayerModal } from "./PlayerModal-BfUB_KBw.js";
import { a as useContentByCategory, m as motion } from "./backend-client-BZnhBlka.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    { d: "M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z", key: "1tn4o7" }
  ],
  ["path", { d: "m6.2 5.3 3.1 3.9", key: "iuk76l" }],
  ["path", { d: "m12.4 3.4 3.1 4", key: "6hsd6n" }],
  ["path", { d: "M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z", key: "ltgou9" }]
];
const Clapperboard = createLucideIcon("clapperboard", __iconNode);
function DramasPage() {
  const { data: dramas = [], isLoading } = useContentByCategory("drama");
  const { t } = useLanguage();
  const [playing, setPlaying] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1400px] mx-auto px-4 md:px-8 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Clapperboard, { size: 28, className: "text-purple-400" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-black text-3xl text-foreground", children: t("category.dramas") })
    ] }),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4", children: Array.from({ length: 10 }, (_, i) => `skel-${i}`).map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "aspect-[2/3] rounded-lg bg-muted/40 animate-pulse"
      },
      k
    )) }) : dramas.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "text-center py-24 text-muted-foreground",
        "data-ocid": "dramas-empty",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clapperboard, { size: 48, className: "mx-auto mb-4 opacity-30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl", children: t("common.noResults") })
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4",
        "data-ocid": "dramas-grid",
        children: dramas.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
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
  DramasPage as default
};

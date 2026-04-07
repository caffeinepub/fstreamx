import { c as createLucideIcon, u as useLanguage, r as reactExports, j as jsxRuntimeExports, X } from "./index-nodcIggE.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]];
const Play = createLucideIcon("play", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M4.9 19.1C1 15.2 1 8.8 4.9 4.9", key: "1vaf9d" }],
  ["path", { d: "M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5", key: "u1ii0m" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5", key: "1j5fej" }],
  ["path", { d: "M19.1 4.9C23 8.8 23 15.1 19.1 19", key: "10b0cb" }]
];
const Radio = createLucideIcon("radio", __iconNode$1);
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
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode);
function PlayerModal({ item, onClose }) {
  const { t } = useLanguage();
  const circleRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const circle = circleRef.current;
    if (!circle) return;
    const r = 54;
    const circumference = 2 * Math.PI * r;
    circle.style.strokeDasharray = `${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;
    let progress = 0;
    const interval = setInterval(() => {
      progress = (progress + 0.5) % 100;
      circle.style.strokeDashoffset = `${circumference - progress / 100 * circumference}`;
    }, 50);
    return () => clearInterval(interval);
  }, []);
  reactExports.useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "dialog",
    {
      open: true,
      className: "fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-md animate-fade-in m-0 max-w-none max-h-none w-full h-full border-none p-0",
      "aria-label": `Playing ${item.title}`,
      "data-ocid": "player-modal",
      style: { background: "oklch(0.12 0 0 / 0.9)" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0",
            role: "button",
            tabIndex: 0,
            "aria-label": t("common.close"),
            onClick: onClose,
            onKeyDown: (e) => {
              if (e.key === "Enter" || e.key === " ") onClose();
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 w-full max-w-lg mx-4 bg-card border border-border/60 rounded-2xl shadow-elevated overflow-hidden animate-slide-up", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-6 py-4 border-b border-border/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-body uppercase tracking-widest", children: "FStreamX" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-foreground truncate mt-0.5", children: item.title })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "flex-shrink-0 ml-4 p-2 rounded-full bg-muted/50 hover:bg-muted transition-smooth text-muted-foreground hover:text-foreground",
                onClick: onClose,
                "aria-label": t("common.close"),
                "data-ocid": "player-close",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 18 })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-10 flex flex-col items-center gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "svg",
                {
                  width: "128",
                  height: "128",
                  className: "rotate-[-90deg]",
                  viewBox: "0 0 128 128",
                  "aria-hidden": "true",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Loading progress" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "circle",
                      {
                        cx: "64",
                        cy: "64",
                        r: "54",
                        fill: "none",
                        stroke: "var(--color-border)",
                        strokeWidth: "6"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "circle",
                      {
                        ref: circleRef,
                        cx: "64",
                        cy: "64",
                        r: "54",
                        fill: "none",
                        stroke: "var(--color-primary)",
                        strokeWidth: "6",
                        strokeLinecap: "round",
                        style: { transition: "stroke-dashoffset 0.05s linear" }
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute flex flex-col items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Radio, { size: 28, className: "text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono text-muted-foreground", children: "LIVE" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-black text-2xl text-foreground mb-2", children: t("player.comingSoon") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-body max-w-xs mx-auto", children: t("player.streamSoon") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 justify-center", children: [
              item.genre,
              `${item.year}`,
              item.duration,
              `⭐ ${item.rating.toFixed(1)}`
            ].map((chip) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "px-3 py-1 bg-muted/60 border border-border/40 rounded-full text-xs font-body text-muted-foreground",
                children: chip
              },
              chip
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 py-4 border-t border-border/40 bg-muted/20 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "© FStreamX — Free Streaming Platform" }) })
        ] })
      ]
    }
  );
}
export {
  PlayerModal as P,
  Star as S,
  Play as a
};

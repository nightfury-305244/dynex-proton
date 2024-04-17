import { a as _ } from "./chunk-MQHFYMPA.mjs";
import { a as j } from "./chunk-LQ7F556A.mjs";
import { a as Re } from "./chunk-FAFAVXHD.mjs";
import { a as S } from "./chunk-5TNMFSH2.mjs";
import {
  a as F,
  b as x,
  c as le,
  d as fe,
  e as de,
  f as ue,
  g as xe,
  h as ge,
  i as ke,
  j as Oe,
  k as Fe,
} from "./chunk-4MSIFSLU.mjs";
import { a as Ie, b as Ue, c as Se } from "./chunk-7CIBRMH5.mjs";
import {
  a as pe,
  b as ce,
  c as he,
  d as Ce,
  e as we,
  f as Te,
} from "./chunk-5YRUXKPA.mjs";
import {
  a as ve,
  b as ye,
  c as be,
  d as je,
  e as _e,
  f as Ne,
} from "./chunk-QFSO7F47.mjs";
import { e as I } from "./chunk-C724PHK6.mjs";
import { m as U } from "./chunk-Z6B2ZS7J.mjs";
import "./chunk-42U43NKG.mjs";
import {
  $ as v,
  G as T,
  I as Z,
  K as c,
  M as h,
  N as $,
  O as ee,
  P as re,
  Q as ae,
  V as d,
  Z as m,
  da as te,
  e as Y,
  g as q,
  ga as ie,
  ha as ne,
  la as oe,
  oa as se,
  p as K,
  qa as k,
  ra as me,
  sa as u,
  t as Q,
  ta as a,
  ua as O,
  v as X,
} from "./chunk-ALOT7UQK.mjs";
import {
  d as g,
  j as J,
  q as M,
  s as H,
  u as W,
  y as e,
  z as f,
} from "./chunk-DKTB2747.mjs";
import "./chunk-ELYU6EKT.mjs";
se.loadWebFontsFromSelectors([]);
var Ge = [],
  Le = [
    '.framer-oo7HG .framer-styles-preset-pbndum:not(.rich-text-wrapper), .framer-oo7HG .framer-styles-preset-pbndum.rich-text-wrapper a { --framer-link-current-text-color: var(--token-1742c135-0874-4b11-bc38-cace343dbddc, #ffffff) /* {"name":"White/White"} */; --framer-link-hover-text-color: var(--token-1742c135-0874-4b11-bc38-cace343dbddc, #ffffff) /* {"name":"White/White"} */; --framer-link-hover-text-decoration: none; --framer-link-text-color: var(--token-2678ca90-7bcd-460e-87c6-9327e3761be8, #66d8fa); --framer-link-text-decoration: none; }',
  ],
  Ve = "framer-oo7HG";
var N,
  R,
  G,
  L,
  Xe = u(U),
  Ze = u(j),
  $e = u(S),
  er = oe(S),
  rr = u(I);
var ar = {
  HLbldvYFG: "(min-width: 810px) and (max-width: 1199px)",
  IMG0JjI4J: "(max-width: 809px)",
  lVIz3eeb4: "(min-width: 1200px)",
};
var Pe = "framer-hOTrC",
  tr = {
    HLbldvYFG: "framer-v-1ukyuge",
    IMG0JjI4J: "framer-v-1x3hybc",
    lVIz3eeb4: "framer-v-1uuuuvx",
  },
  ir = { oDJvo1yNO: new ae(() => import("./F8eGhiphC-0-NVL74D26.mjs")) },
  nr = (t) => {
    let r = [];
    for (; t; ) {
      let o = ir[t.id];
      if (o) {
        let s = o.preload();
        s && r.push(s);
      }
      t = t.fallback;
    }
    if (r.length > 0) return Promise.all(r);
  };
var Ae = { damping: 80, delay: 0, mass: 1, stiffness: 400, type: "spring" },
  or = { opacity: 0, rotate: 0, scale: 1, transition: Ae, x: 0, y: -40 },
  V = (t, r) => `perspective(1200px) ${r}`,
  P = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    transition: Ae,
    x: 0,
    y: 0,
  },
  A = { opacity: 0.001, rotate: 0, scale: 1, x: 0, y: -40 },
  B = _(),
  sr = { Desktop: "lVIz3eeb4", Phone: "IMG0JjI4J", Tablet: "HLbldvYFG" },
  mr = ({ height: t, id: r, width: o, ...s }) => {
    var l, i;
    return {
      ...s,
      variant:
        (i = (l = sr[s.variant]) !== null && l !== void 0 ? l : s.variant) !==
          null && i !== void 0
          ? i
          : "lVIz3eeb4",
    };
  },
  lr = J(function (t, r) {
    let { activeLocale: o, setLocale: s } = Q(),
      l = X(),
      [i] = ie({
        from: { data: Re, type: "Collection" },
        select: [
          { name: "XBtLGj5jg", type: "Identifier" },
          { name: "Uu1cd17Pd", type: "Identifier" },
        ],
        where: ne(l),
      }),
      z = (n) => {
        if (!i)
          throw new K(
            `No data in "Learn" matches path variables: ${JSON.stringify(l)}`
          );
        return i[n];
      },
      {
        style: Be,
        className: ze,
        layoutId: b,
        variant: De,
        XBtLGj5jg: Ee = z("XBtLGj5jg"),
        Uu1cd17Pd: Je = z("Uu1cd17Pd"),
        ...Me
      } = mr(t);
    H(() => {
      let n = _(i, o);
      if (((document.title = n.title || ""), n.viewport)) {
        var C;
        (C = document.querySelector('meta[name="viewport"]')) === null ||
          C === void 0 ||
          C.setAttribute("content", n.viewport);
      }
      if (n.bodyClassName)
        return (
          Array.from(document.body.classList)
            .filter((w) => w.startsWith("framer-body-"))
            .map((w) => document.body.classList.remove(w)),
          document.body.classList.add(`${n.bodyClassName}-framer-hOTrC`),
          () => {
            document.body.classList.remove(`${n.bodyClassName}-framer-hOTrC`);
          }
        );
    }, [i, o]);
    let [p, dr] = te(De, ar, !1),
      pr = void 0,
      D = nr(o);
    if (D) throw D;
    let He = W(null),
      We = M(),
      E = [de, Te, Se, he, be, ge, Ne, Ve, Fe];
    return (
      ee({}),
      e(re.Provider, {
        value: { primaryVariantId: "lVIz3eeb4", variantClassNames: tr },
        children: f(q, {
          id: b ?? We,
          children: [
            f(Y.div, {
              ...Me,
              className: T(Pe, ...E, "framer-1uuuuvx", ze),
              ref: r ?? He,
              style: { ...Be },
              children: [
                e(c, {
                  children: e(h, {
                    className: "framer-1gd29r9-container",
                    children: e(d, {
                      breakpoint: p,
                      overrides: {
                        HLbldvYFG: { variant: "vRz6iFx98" },
                        IMG0JjI4J: {
                          style: { width: "100%" },
                          variant: "dxtA8R9ro",
                        },
                      },
                      children: e(U, {
                        height: "100%",
                        id: "UU10Y6_Kv",
                        layoutId: "UU10Y6_Kv",
                        style: {
                          height: "100%",
                          maxWidth: "100%",
                          width: "100%",
                        },
                        variant: "eoTXJYY6N",
                        width: "100%",
                      }),
                    }),
                  }),
                }),
                f("div", {
                  className: "framer-1tvkb68",
                  "data-framer-name": "Content",
                  name: "Content",
                  children: [
                    e(d, {
                      breakpoint: p,
                      overrides: {
                        HLbldvYFG: { width: "260px" },
                        IMG0JjI4J: { width: "min(100vw, 1200px)" },
                      },
                      children: e(c, {
                        width: "300px",
                        children: e(h, {
                          className: "framer-vva4mr-container",
                          children: e(j, {
                            height: "100%",
                            id: "ich8kAwc2",
                            layoutId: "ich8kAwc2",
                            style: { width: "100%" },
                            variant: "xs3AG2p_3",
                            width: "100%",
                          }),
                        }),
                      }),
                    }),
                    f("div", {
                      className: "framer-bm0l5",
                      "data-framer-name": "Post",
                      name: "Post",
                      children: [
                        e(d, {
                          breakpoint: p,
                          overrides: {
                            HLbldvYFG: {
                              children: e(g, {
                                children: e("h3", {
                                  className: "framer-styles-preset-bcjq8k",
                                  "data-styles-preset": "EtnOUzv10",
                                  children: "Telecommunication",
                                }),
                              }),
                              fonts: ["Inter"],
                            },
                            IMG0JjI4J: {
                              children: e(g, {
                                children: e("h4", {
                                  className: "framer-styles-preset-11ezvfj",
                                  "data-styles-preset": "rrjoIeBSb",
                                  children: "Telecommunication",
                                }),
                              }),
                              fonts: ["Inter"],
                            },
                          },
                          children: e(k, {
                            __fromCanvasComponent: !0,
                            children: e(g, {
                              children: e("h1", {
                                style: {
                                  "--font-selector":
                                    "Q1VTVE9NO1JpZ2lkIFNxdWFyZSBSZWd1bGFy",
                                  "--framer-font-family":
                                    '"Rigid Square Regular", sans-serif',
                                  "--framer-font-size": "64px",
                                  "--framer-letter-spacing": "0px",
                                  "--framer-line-height": "120%",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color":
                                    "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                                  "--framer-text-transform": "uppercase",
                                },
                                children:
                                  "Dynex: The Neuromorphic Cloud Computing Platform",
                              }),
                            }),
                            className: "framer-sh1wsd",
                            "data-framer-name": "Title",
                            fonts: ["CUSTOM;Rigid Square Regular"],
                            name: "Title",
                            text: Ee,
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                        e(c, {
                          children: e(h, {
                            className: "framer-xz7rcy-container",
                            children: e(er, {
                              __framer__animateOnce: !1,
                              __framer__obscuredVariantId: "JnoUcnydt",
                              __framer__threshold: 0.5,
                              __framer__variantAppearEffectEnabled: !0,
                              __framer__visibleVariantId: "yN4DNxohH",
                              height: "100%",
                              id: "LM8j4f_Rn",
                              layoutId: "LM8j4f_Rn",
                              style: { height: "100%", width: "100%" },
                              variant: "JnoUcnydt",
                              width: "100%",
                            }),
                          }),
                        }),
                        e(Z, {
                          presets: {
                            "module:NEd4VmDdsxM3StIUbddO/bZxrMUxBPAhoXlARkK9C/YouTube.js:Youtube":
                              F.T_j0y6EwI,
                            "module:pVk4QsoHxASnVtUBp6jr/TbhpORLndv1iOkZzyo83/CodeBlock.js:default":
                              F.io8WtmkA6,
                          },
                          children: e(d, {
                            breakpoint: p,
                            overrides: {
                              HLbldvYFG: {
                                "data-framer-appear-id": "3v7t1v",
                                animate: m("animate", "3v7t1v", P, "1ukyuge"),
                                initial: m("initial", "3v7t1v", A, "1ukyuge"),
                                transformTemplate: v("3v7t1v", V),
                              },
                              IMG0JjI4J: {
                                "data-framer-appear-id": "13s43s2",
                                animate: m("animate", "13s43s2", P, "1x3hybc"),
                                initial: m("initial", "13s43s2", A, "1x3hybc"),
                                transformTemplate: v("13s43s2", V),
                              },
                            },
                            children: e(k, {
                              __fromCanvasComponent: !0,
                              animate: m("animate", "hj8ubq", P, "1uuuuvx"),
                              children: Je,
                              className: "framer-hj8ubq",
                              "data-framer-appear-id": "hj8ubq",
                              "data-framer-name": "Content",
                              exit: or,
                              fonts: ["Inter"],
                              initial: m("initial", "hj8ubq", A, "1uuuuvx"),
                              name: "Content",
                              stylesPresetsClassNames: {
                                a: "framer-styles-preset-pbndum",
                                code: "framer-styles-preset-14p4v3h",
                                h1: "framer-styles-preset-3nqyhf",
                                h2: "framer-styles-preset-1wml6uu",
                                h3: "framer-styles-preset-bcjq8k",
                                h4: "framer-styles-preset-11ezvfj",
                                h5: "framer-styles-preset-13oo16j",
                                h6: "framer-styles-preset-14n5412",
                                p: "framer-styles-preset-21ogod",
                              },
                              transformTemplate: v("hj8ubq", V),
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                e("div", {
                  className: "framer-1jsmli2",
                  "data-framer-name": "Footer Container",
                  name: "Footer Container",
                  children: e(c, {
                    children: e(h, {
                      className: "framer-1jos2ma-container",
                      children: e(d, {
                        breakpoint: p,
                        overrides: {
                          HLbldvYFG: { variant: "aK_4VtDvt" },
                          IMG0JjI4J: { variant: "CP4euYBms" },
                        },
                        children: e(I, {
                          height: "100%",
                          id: "mgDkt0iun",
                          layoutId: "mgDkt0iun",
                          style: { maxWidth: "100%", width: "100%" },
                          variant: "lKW5sKZWt",
                          width: "100%",
                        }),
                      }),
                    }),
                  }),
                }),
                f("div", {
                  className: "framer-yfxwji",
                  "data-framer-name": "Gradients",
                  name: "Gradients",
                  children: [
                    e("div", {
                      className: "framer-l929br",
                      "data-framer-name": "Top Gradient Blue",
                      name: "Top Gradient Blue",
                    }),
                    e("div", {
                      className: "framer-20tle3",
                      "data-framer-name": "Top Gradient Blue Right",
                      name: "Top Gradient Blue Right",
                    }),
                    e("div", {
                      className: "framer-18fyo74",
                      "data-framer-name": "Top Gradient Yellow",
                      name: "Top Gradient Yellow",
                    }),
                  ],
                }),
              ],
            }),
            e("div", { className: T(Pe, ...E), id: "overlay" }),
          ],
        }),
      })
    );
  }),
  fr = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    `.${B.bodyClassName}-framer-hOTrC { background: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, rgb(7, 7, 19)) /* {"name":"Dark BG"} */; }`,
    ".framer-hOTrC.framer-19rp5pp, .framer-hOTrC .framer-19rp5pp { display: block; }",
    ".framer-hOTrC.framer-1uuuuvx { align-content: center; align-items: center; background-color: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, #070713); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: flex-start; overflow: visible; padding: 32px 0px 100px 0px; position: relative; width: 1200px; }",
    ".framer-hOTrC .framer-1gd29r9-container { flex: none; height: 80px; max-width: 1260px; position: relative; width: 100%; z-index: 10; }",
    ".framer-hOTrC .framer-1tvkb68 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: flex-start; max-width: 1200px; overflow: visible; padding: 48px 0px 0px 0px; position: relative; width: 100%; z-index: 1; }",
    ".framer-hOTrC .framer-vva4mr-container { flex: none; height: auto; position: sticky; top: 40px; width: 300px; will-change: transform; z-index: 1; }",
    ".framer-hOTrC .framer-bm0l5 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; padding: 32px 32px 32px 32px; position: relative; width: 1px; }",
    ".framer-hOTrC .framer-sh1wsd { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-hOTrC .framer-xz7rcy-container { flex: none; height: 60px; position: relative; width: 100%; }",
    ".framer-hOTrC .framer-hj8ubq { --framer-paragraph-spacing: 36px; flex: none; height: auto; position: relative; transform: perspective(1200px); white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-hOTrC .framer-1jsmli2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 48px 0px 48px; position: relative; width: 100%; }",
    ".framer-hOTrC .framer-1jos2ma-container { flex: 1 0 0px; height: auto; max-width: 1200px; position: relative; width: 1px; }",
    ".framer-hOTrC .framer-yfxwji { flex: none; height: 1566px; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; z-index: 0; }",
    '.framer-hOTrC .framer-l929br { -webkit-filter: blur(20px); background: radial-gradient(30.099999999999998% 51.2% at 47.099999999999994% 35.199999999999996%, var(--token-2678ca90-7bcd-460e-87c6-9327e3761be8, #66d8fa) /* {"name":"Dynex Blue"} */ 0%, rgba(103, 227, 249, 0) 100%); filter: blur(20px); flex: none; height: 1000px; left: -164px; opacity: 0.2; overflow: hidden; position: absolute; right: 226px; top: -579px; transform: rotate(-20deg); z-index: 0; }',
    ".framer-hOTrC .framer-20tle3 { -webkit-filter: blur(20px); background: radial-gradient(30.099999999999998% 51.2% at 47.099999999999994% 35.199999999999996%, #67E3F9 0%, rgba(103, 227, 249, 0) 100%); filter: blur(20px); flex: none; height: 1000px; left: 763px; opacity: 0.15; overflow: hidden; position: absolute; right: -443px; top: -599px; transform: rotate(30deg); z-index: 0; }",
    ".framer-hOTrC .framer-18fyo74 { -webkit-filter: blur(20px); background: radial-gradient(30.099999999999998% 51.2% at 47.099999999999994% 35.199999999999996%, #f1ff70 0%, rgba(103, 227, 249, 0) 100%); filter: blur(20px); flex: none; height: 1000px; left: -302px; opacity: 0.2; overflow: hidden; position: absolute; right: 364px; top: -555px; transform: rotate(-20deg); z-index: 0; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-hOTrC.framer-1uuuuvx, .framer-hOTrC .framer-1tvkb68, .framer-hOTrC .framer-bm0l5, .framer-hOTrC .framer-1jsmli2 { gap: 0px; } .framer-hOTrC.framer-1uuuuvx > * { margin: 0px; margin-bottom: calc(36px / 2); margin-top: calc(36px / 2); } .framer-hOTrC.framer-1uuuuvx > :first-child, .framer-hOTrC .framer-bm0l5 > :first-child { margin-top: 0px; } .framer-hOTrC.framer-1uuuuvx > :last-child, .framer-hOTrC .framer-bm0l5 > :last-child { margin-bottom: 0px; } .framer-hOTrC .framer-1tvkb68 > * { margin: 0px; margin-left: calc(64px / 2); margin-right: calc(64px / 2); } .framer-hOTrC .framer-1tvkb68 > :first-child, .framer-hOTrC .framer-1jsmli2 > :first-child { margin-left: 0px; } .framer-hOTrC .framer-1tvkb68 > :last-child, .framer-hOTrC .framer-1jsmli2 > :last-child { margin-right: 0px; } .framer-hOTrC .framer-bm0l5 > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-hOTrC .framer-1jsmli2 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }",
    "@media (min-width: 1200px) { .framer-hOTrC .hidden-1uuuuvx { display: none !important; } }",
    `@media (min-width: 810px) and (max-width: 1199px) { .framer-hOTrC .hidden-1ukyuge { display: none !important; } .${B.bodyClassName}-framer-hOTrC { background: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, rgb(7, 7, 19)) /* {"name":"Dark BG"} */; } .framer-hOTrC.framer-1uuuuvx { gap: 0px; width: 810px; } .framer-hOTrC .framer-1tvkb68 { gap: 24px; } .framer-hOTrC .framer-vva4mr-container { width: 260px; } .framer-hOTrC .framer-xz7rcy-container { height: 40px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-hOTrC.framer-1uuuuvx, .framer-hOTrC .framer-1tvkb68 { gap: 0px; } .framer-hOTrC.framer-1uuuuvx > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-hOTrC.framer-1uuuuvx > :first-child { margin-top: 0px; } .framer-hOTrC.framer-1uuuuvx > :last-child { margin-bottom: 0px; } .framer-hOTrC .framer-1tvkb68 > * { margin: 0px; margin-left: calc(24px / 2); margin-right: calc(24px / 2); } .framer-hOTrC .framer-1tvkb68 > :first-child { margin-left: 0px; } .framer-hOTrC .framer-1tvkb68 > :last-child { margin-right: 0px; } }}`,
    `@media (max-width: 809px) { .framer-hOTrC .hidden-1x3hybc { display: none !important; } .${B.bodyClassName}-framer-hOTrC { background: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, rgb(7, 7, 19)) /* {"name":"Dark BG"} */; } .framer-hOTrC.framer-1uuuuvx { padding: 48px 0px 100px 0px; width: 374px; } .framer-hOTrC .framer-1gd29r9-container { height: auto; left: 50%; max-width: unset; position: absolute; top: 0px; transform: translateX(-50%); } .framer-hOTrC .framer-1tvkb68 { flex-direction: column; gap: 24px; padding: 72px 0px 0px 0px; } .framer-hOTrC .framer-vva4mr-container { position: relative; top: unset; width: 100%; } .framer-hOTrC .framer-bm0l5, .framer-hOTrC .framer-1jos2ma-container { flex: none; width: 100%; } .framer-hOTrC .framer-xz7rcy-container { height: 40px; } .framer-hOTrC .framer-1jsmli2 { flex-direction: column; padding: 0px 24px 0px 24px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-hOTrC .framer-1tvkb68, .framer-hOTrC .framer-1jsmli2 { gap: 0px; } .framer-hOTrC .framer-1tvkb68 > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-hOTrC .framer-1tvkb68 > :first-child, .framer-hOTrC .framer-1jsmli2 > :first-child { margin-top: 0px; } .framer-hOTrC .framer-1tvkb68 > :last-child, .framer-hOTrC .framer-1jsmli2 > :last-child { margin-bottom: 0px; } .framer-hOTrC .framer-1jsmli2 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }}`,
    ...fe,
    ...we,
    ...Ue,
    ...ce,
    ...ye,
    ...xe,
    ..._e,
    ...Le,
    ...Oe,
  ],
  y = $(lr, fr, "framer-hOTrC"),
  Gr = y;
y.displayName = "Page";
y.defaultProps = { height: 3458, width: 1200 };
me(
  y,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Rigid Square Regular",
          source: "custom",
          url: "https://framerusercontent.com/assets/2byiqNmSK7iIV1YW3mItnbQSRUc.otf",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-ext-CFTLRB35.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-KKLZBALH.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-ext-ULEBLIFV.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-IRHSNFQB.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://app.framerstatic.com/Inter-Regular.latin-ext-VZDUGU3Q.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://app.framerstatic.com/Inter-Regular.latin-JLQMKCHE.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://app.framerstatic.com/Inter-Regular.vietnamese-QK7VSWXK.woff2",
          weight: "400",
        },
      ],
    },
    ...Xe,
    ...Ze,
    ...$e,
    ...rr,
    ...a(le),
    ...a(Ce),
    ...a(Ie),
    ...a(pe),
    ...a(ve),
    ...a(ue),
    ...a(je),
    ...a(Ge),
    ...a(ke),
    ...(!((N = x) === null || N === void 0) && N.io8WtmkA6
      ? O((R = x) === null || R === void 0 ? void 0 : R.io8WtmkA6)
      : []),
    ...(!((G = x) === null || G === void 0) && G.T_j0y6EwI
      ? O((L = x) === null || L === void 0 ? void 0 : L.T_j0y6EwI)
      : []),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Lr = {
  exports: {
    default: {
      type: "reactComponent",
      name: "FramerF8eGhiphC",
      slots: [],
      annotations: {
        framerImmutableVariables: "true",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"HLbldvYFG":{"layout":["fixed","auto"]},"IMG0JjI4J":{"layout":["fixed","auto"]}}}',
        framerIntrinsicWidth: "1200",
        framerContractVersion: "1",
        framerComponentViewportWidth: "true",
        framerResponsiveScreen: "",
        framerIntrinsicHeight: "3458",
        framerDisplayContentsDiv: "false",
      },
    },
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    __FramerMetadata__: { type: "variable" },
  },
};
export { Lr as __FramerMetadata__, Gr as default };
//# sourceMappingURL=Pr_PJriedczwT6CFlEq4DDYi1u5IZhMJNfD8WocJrhw.2I4XGMMX.mjs.map

import { a as Ae } from "./chunk-W5YZBFN3.mjs";
import { a as _e } from "./chunk-F64RYFBD.mjs";
import { a as qr, b as Ir, c as Fr } from "./chunk-VQVAOC4R.mjs";
import { a as qe } from "./chunk-C4C6T6VG.mjs";
import { a as Te } from "./chunk-C4LCIDXY.mjs";
import { a as O, b as z } from "./chunk-JJHRISHI.mjs";
import { a as Ne } from "./chunk-JEAYGDGA.mjs";
import { a as je } from "./chunk-R3PETZRW.mjs";
import { a as Se } from "./chunk-ICWJQOU4.mjs";
import "./chunk-C3SD45VA.mjs";
import { a as y } from "./chunk-CTIF5AVX.mjs";
import { f as xr, g as gr, h as ur } from "./chunk-DQH2D4MP.mjs";
import "./chunk-4CBC4XYV.mjs";
import {
  a as dr,
  b as hr,
  c as pr,
  d as wr,
  e as Hr,
  f as kr,
} from "./chunk-3REURG4N.mjs";
import { a as Ie } from "./chunk-GKORHWPJ.mjs";
import {
  a as yr,
  b as vr,
  c as br,
  d as zr,
  e as jr,
  f as Sr,
} from "./chunk-QZEJCLJB.mjs";
import { e as Fe } from "./chunk-XHADUV4Z.mjs";
import {
  a as $,
  b as fr,
  c as sr,
  d as cr,
  e as Le,
  h as Cr,
  i as _r,
  j as Nr,
  k as Lr,
  l as F,
  m as ze,
} from "./chunk-SK7OXHBT.mjs";
import "./chunk-42U43NKG.mjs";
import {
  $ as k,
  C as G,
  G as U,
  H as Ce,
  K as n,
  M as o,
  N as J,
  O as tr,
  P as ir,
  Q as nr,
  V as l,
  W,
  Z as c,
  a as we,
  da as or,
  e as i,
  g as Q,
  ja as mr,
  la as Y,
  na as b,
  oa as lr,
  pa as u,
  qa as t,
  ra as K,
  s as ar,
  sa as g,
  t as X,
  ta as _,
  w as He,
  x as ke,
  z as Z,
} from "./chunk-NCIFD65W.mjs";
import {
  d as a,
  j as B,
  o as $e,
  q as P,
  s as er,
  t as rr,
  u as T,
  y as e,
  z as r,
} from "./chunk-DKTB2747.mjs";
import "./chunk-ELYU6EKT.mjs";
var na = [
  "wFDZPe8Zi",
  "OhWmGgnxF",
  "l7LNAD70T",
  "zt_zhSCyR",
  "bgZokv8d_",
  "CdiOerLLo",
  "gjWJPNzH2",
];
var oa = {
  bgZokv8d_: "framer-v-gm0iyb",
  CdiOerLLo: "framer-v-ul1mr",
  gjWJPNzH2: "framer-v-19nqhtc",
  l7LNAD70T: "framer-v-z8daca",
  OhWmGgnxF: "framer-v-1we67gm",
  wFDZPe8Zi: "framer-v-y0p3ou",
  zt_zhSCyR: "framer-v-1ouns0x",
};
function j(s, ...f) {
  let d = {};
  return f?.forEach((h) => h && Object.assign(d, s[h])), d;
}
var ma = {
    default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  },
  la = ({ value: s, children: f }) => {
    let d = $e(we),
      h = s ?? d.transition,
      w = rr(() => ({ ...d, transition: h }), [JSON.stringify(h)]);
    return e(we.Provider, { value: w, children: f });
  },
  fa = {
    "Smart Cities": "zt_zhSCyR",
    AI: "wFDZPe8Zi",
    Architecture: "l7LNAD70T",
    Databse: "gjWJPNzH2",
    Gaming: "bgZokv8d_",
    Health: "OhWmGgnxF",
    Science: "CdiOerLLo",
  },
  sa = ({ height: s, id: f, width: d, ...h }) => {
    var w, C;
    return {
      ...h,
      variant:
        (C = (w = fa[h.variant]) !== null && w !== void 0 ? w : h.variant) !==
          null && C !== void 0
          ? C
          : "wFDZPe8Zi",
    };
  },
  ca = (s, f) => f.join("-") + s.layoutDependency,
  da = B(function (s, f) {
    let { activeLocale: d } = X(),
      { style: h, className: w, layoutId: C, variant: S, ...ie } = sa(s),
      {
        baseVariant: v,
        classNames: m,
        gestureVariant: q,
        setGestureState: A,
        setVariant: ne,
        transition: oe,
        variants: me,
      } = mr({
        cycleOrder: na,
        defaultVariant: "wFDZPe8Zi",
        transitions: ma,
        variant: S,
        variantClassNames: oa,
      }),
      H = ca(s, me),
      le = T(null),
      fe = P();
    return e(Q, {
      id: C ?? fe,
      children: e(i.div, {
        initial: S,
        animate: me,
        onHoverStart: () => A({ isHovered: !0 }),
        onHoverEnd: () => A({ isHovered: !1 }),
        onTapStart: () => A({ isPressed: !0 }),
        onTap: () => A({ isPressed: !1 }),
        onTapCancel: () => A({ isPressed: !1 }),
        className: U("framer-hJJDl", m),
        style: { display: "contents" },
        children: e(la, {
          value: oe,
          children: r(i.div, {
            ...ie,
            className: U("framer-y0p3ou", w),
            "data-framer-name": "AI",
            layoutDependency: H,
            layoutId: "wFDZPe8Zi",
            ref: f ?? le,
            style: { ...h },
            ...j(
              {
                bgZokv8d_: { "data-framer-name": "Gaming" },
                CdiOerLLo: { "data-framer-name": "Science" },
                gjWJPNzH2: { "data-framer-name": "Databse" },
                l7LNAD70T: { "data-framer-name": "Architecture" },
                OhWmGgnxF: { "data-framer-name": "Health" },
                zt_zhSCyR: { "data-framer-name": "Smart Cities" },
              },
              v,
              q
            ),
            children: [
              ![
                "OhWmGgnxF",
                "l7LNAD70T",
                "zt_zhSCyR",
                "bgZokv8d_",
                "CdiOerLLo",
                "gjWJPNzH2",
              ].includes(v) &&
                e(b, {
                  className: "framer-k14sff",
                  "data-framer-name": "AI",
                  layout: "position",
                  layoutDependency: H,
                  layoutId: "yQAFDVzC3",
                  opacity: 1,
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48"><path d="M 15.61 19.578 L 19.547 28.578 C 19.828 29.141 19.547 29.844 18.984 30.055 C 18.844 30.125 18.704 30.125 18.562 30.125 C 18.07 30.125 17.648 29.915 17.508 29.492 L 16.805 27.875 L 12.375 27.875 L 11.672 29.492 C 11.461 30.055 10.758 30.336 10.195 30.055 C 9.633 29.844 9.352 29.141 9.633 28.578 L 13.57 19.578 C 13.922 18.734 15.258 18.734 15.61 19.578 Z M 13.36 25.625 L 15.82 25.625 L 14.625 22.812 L 13.359 25.625 Z M 23.625 18.875 C 24.188 18.875 24.75 19.438 24.75 20 L 24.75 29 C 24.75 29.633 24.187 30.125 23.625 30.125 C 23.325 30.129 23.037 30.012 22.825 29.8 C 22.613 29.588 22.496 29.3 22.5 29 L 22.5 20 C 22.5 19.437 22.992 18.875 23.625 18.875 Z M 34.875 25.625 L 31.5 25.625 L 31.5 30.125 L 34.875 30.125 C 35.438 30.125 36 30.688 36 31.25 C 36 31.883 35.437 32.375 34.875 32.375 L 31.5 32.375 L 31.5 33.5 C 31.5 36.031 29.46 38 27 38 L 25.875 38 L 25.875 41.375 C 25.875 42.008 25.312 42.5 24.75 42.5 C 24.45 42.504 24.162 42.387 23.95 42.175 C 23.738 41.963 23.621 41.675 23.625 41.375 L 23.625 38 L 19.125 38 L 19.125 41.375 C 19.125 42.008 18.562 42.5 18 42.5 C 17.7 42.504 17.412 42.387 17.2 42.175 C 16.988 41.963 16.871 41.675 16.875 41.375 L 16.875 38 L 12.375 38 L 12.375 41.375 C 12.375 42.008 11.812 42.5 11.25 42.5 C 10.95 42.504 10.662 42.387 10.45 42.175 C 10.238 41.963 10.121 41.675 10.125 41.375 L 10.125 38 L 9 38 C 6.469 38 4.5 36.031 4.5 33.5 L 4.5 32.375 L 1.125 32.375 C 0.825 32.379 0.537 32.262 0.325 32.05 C 0.113 31.838 -0.004 31.55 0 31.25 C 0 30.687 0.492 30.125 1.125 30.125 L 4.5 30.125 L 4.5 25.625 L 1.125 25.625 C 0.825 25.629 0.537 25.512 0.325 25.3 C 0.113 25.088 -0.004 24.8 0 24.5 C 0 23.937 0.492 23.375 1.125 23.375 L 4.5 23.375 L 4.5 18.875 L 1.125 18.875 C 0.825 18.879 0.537 18.762 0.325 18.55 C 0.113 18.338 -0.004 18.05 0 17.75 C 0 17.187 0.492 16.625 1.125 16.625 L 4.5 16.625 L 4.5 15.5 C 4.5 13.04 6.469 11 9 11 L 10.125 11 L 10.125 7.625 C 10.125 7.062 10.617 6.5 11.25 6.5 C 11.813 6.5 12.375 7.063 12.375 7.625 L 12.375 11 L 16.875 11 L 16.875 7.625 C 16.875 7.062 17.367 6.5 18 6.5 C 18.563 6.5 19.125 7.063 19.125 7.625 L 19.125 11 L 23.625 11 L 23.625 7.625 C 23.625 7.062 24.117 6.5 24.75 6.5 C 25.313 6.5 25.875 7.063 25.875 7.625 L 25.875 11 L 27 11 C 29.46 11 31.5 13.04 31.5 15.5 L 31.5 16.625 L 34.875 16.625 C 35.438 16.625 36 17.188 36 17.75 C 36 18.383 35.437 18.875 34.875 18.875 L 31.5 18.875 L 31.5 23.375 L 34.875 23.375 C 35.438 23.375 36 23.938 36 24.5 C 36 25.133 35.437 25.625 34.875 25.625 Z M 29.25 33.5 L 29.25 15.5 C 29.25 14.305 28.195 13.25 27 13.25 L 9 13.25 C 7.734 13.25 6.75 14.305 6.75 15.5 L 6.75 33.5 C 6.742 34.099 6.976 34.676 7.4 35.1 C 7.824 35.524 8.401 35.758 9 35.75 L 27 35.75 C 28.195 35.75 29.25 34.766 29.25 33.5 Z" fill="var(--token-e2149c75-9099-4842-aea6-4fbafaef2693, rgb(191, 199, 212)) /* {&quot;name&quot;:&quot;TextColor&quot;} */"></path></svg>',
                  svgContentId: 4101363559,
                  withExternalLayout: !0,
                }),
              v === "OhWmGgnxF" &&
                e(b, {
                  className: "framer-dpuqhx",
                  "data-framer-name": "Health",
                  layout: "position",
                  layoutDependency: H,
                  layoutId: "Tk610cNUd",
                  opacity: 1,
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48"><path d="M 35.156 11.914 C 37.129 13.807 38.246 16.422 38.25 19.156 C 38.25 21.406 37.477 23.446 36.21 25.203 C 36 25.484 35.648 25.625 35.297 25.625 L 26.297 25.625 L 24.75 22.531 L 21.234 29.563 C 20.812 30.406 19.547 30.336 19.195 29.493 L 15.187 20.633 L 13.007 25.625 L 5.134 25.625 C 4.782 25.625 4.431 25.485 4.22 25.203 C 2.954 23.445 2.251 21.406 2.251 19.156 C 2.251 16.414 3.306 13.813 5.274 11.914 C 8.439 8.82 11.884 8.75 12.728 8.75 C 13.642 8.75 17.087 8.82 20.251 11.914 C 23.345 8.82 26.791 8.75 27.704 8.75 C 28.618 8.75 31.994 8.82 35.157 11.914 Z M 34.734 23.375 C 35.367 22.391 37.758 17.609 33.469 13.32 C 31.923 11.825 29.854 10.993 27.703 11 C 25.453 11 24.117 11.21 20.25 15.008 C 16.594 11.422 15.117 11 12.727 11 C 10.579 11.006 8.515 11.836 6.961 13.32 C 2.671 17.54 5.062 22.32 5.695 23.375 L 11.602 23.375 L 14.132 17.328 C 14.484 16.414 15.75 16.414 16.172 17.328 L 20.25 26.398 L 23.695 19.508 C 23.887 19.12 24.282 18.875 24.715 18.875 C 25.148 18.875 25.543 19.12 25.735 19.508 L 27.703 23.375 Z M 31.078 27.875 C 32.063 27.875 32.555 29.07 31.852 29.773 L 22.711 39.266 C 21.369 40.531 19.272 40.531 17.93 39.266 L 8.578 29.773 C 7.875 29.07 8.438 27.875 9.422 27.875 C 9.703 27.875 9.984 28.015 10.195 28.227 L 19.547 37.648 C 19.976 38.07 20.665 38.07 21.094 37.648 L 30.234 28.156 C 30.445 27.946 30.797 27.875 31.078 27.875 Z" fill="var(--token-e2149c75-9099-4842-aea6-4fbafaef2693, rgb(191, 199, 212)) /* {&quot;name&quot;:&quot;TextColor&quot;} */"></path></svg>',
                  svgContentId: 2487080901,
                  withExternalLayout: !0,
                  ...j({ OhWmGgnxF: { svgContentId: 682658390 } }, v, q),
                }),
              v === "l7LNAD70T" &&
                e(b, {
                  className: "framer-8nlb6n",
                  "data-framer-name": "Architecture",
                  layout: "position",
                  layoutDependency: H,
                  layoutId: "jVoRuiPyC",
                  opacity: 1,
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49 48"><path d="M 10 6.5 C 10.422 6.5 10.774 6.781 10.985 7.203 L 11.477 8.117 C 13.727 12.687 18.367 15.5 23.5 15.5 C 28.563 15.5 33.203 12.687 35.453 8.117 L 35.945 7.203 C 36.156 6.781 36.508 6.5 37 6.5 C 37.492 6.5 37.914 6.852 38.055 7.344 C 39.039 10.367 42.133 13.461 45.227 14.727 C 45.86 14.937 46.141 15.57 45.86 16.133 C 45.649 16.766 45.016 17.047 44.453 16.766 C 42.133 15.852 39.813 14.094 38.125 11.914 L 38.125 24.5 L 44.875 24.5 C 45.438 24.5 46 25.063 46 25.625 C 46 26.258 45.438 26.75 44.875 26.75 L 2.125 26.75 C 1.825 26.754 1.537 26.637 1.325 26.425 C 1.113 26.213 0.996 25.925 1 25.625 C 1 25.062 1.492 24.5 2.125 24.5 L 8.875 24.5 L 8.875 11.914 C 7.117 14.094 4.797 15.852 2.477 16.766 C 1.914 17.046 1.281 16.766 1.07 16.133 C 0.79 15.57 1.07 14.938 1.703 14.727 C 4.797 13.461 7.891 10.367 8.875 7.344 C 9.011 6.837 9.475 6.489 10 6.5 Z M 11.125 24.5 L 15.625 24.5 L 15.625 15.64 C 13.882 14.665 12.351 13.35 11.125 11.773 Z M 17.875 24.5 L 22.375 24.5 L 22.375 17.75 C 20.839 17.613 19.327 17.283 17.875 16.766 Z M 24.625 24.5 L 29.125 24.5 L 29.125 16.766 C 27.649 17.258 26.172 17.609 24.625 17.75 Z M 31.375 24.5 L 35.875 24.5 L 35.875 11.773 C 34.616 13.318 33.092 14.628 31.375 15.641 Z M 3.25 29 C 6.977 29.001 9.999 32.023 10 35.75 L 10 39.125 C 9.996 39.425 10.113 39.713 10.325 39.925 C 10.537 40.137 10.825 40.254 11.125 40.25 L 13.375 40.25 C 13.938 40.25 14.5 39.758 14.5 39.125 L 14.5 38 C 14.5 33.078 18.508 29 23.5 29 C 28.422 29 32.5 33.078 32.5 38 L 32.5 39.125 C 32.496 39.425 32.613 39.713 32.825 39.925 C 33.037 40.137 33.325 40.254 33.625 40.25 L 35.875 40.25 C 36.438 40.25 37 39.758 37 39.125 L 37 35.75 C 37 32.023 39.953 29 43.75 29 L 44.875 29 C 45.438 29 46 29.563 46 30.125 C 46 30.758 45.438 31.25 44.875 31.25 L 43.75 31.25 C 41.219 31.25 39.25 33.29 39.25 35.75 L 39.25 39.125 C 39.249 40.989 37.739 42.499 35.875 42.5 L 33.625 42.5 C 31.727 42.5 30.25 41.023 30.25 39.125 L 30.25 38 C 30.249 34.273 27.227 31.251 23.5 31.25 C 19.703 31.25 16.75 34.273 16.75 38 L 16.75 39.125 C 16.749 40.989 15.239 42.499 13.375 42.5 L 11.125 42.5 C 9.227 42.5 7.75 41.023 7.75 39.125 L 7.75 35.75 C 7.75 33.29 5.711 31.25 3.25 31.25 L 2.125 31.25 C 1.825 31.254 1.537 31.137 1.325 30.925 C 1.113 30.713 0.996 30.425 1 30.125 C 1 29.562 1.492 29 2.125 29 Z" fill="var(--token-e2149c75-9099-4842-aea6-4fbafaef2693, rgb(191, 199, 212)) /* {&quot;name&quot;:&quot;TextColor&quot;} */"></path></svg>',
                  svgContentId: 2125118323,
                  withExternalLayout: !0,
                  ...j({ l7LNAD70T: { svgContentId: 2055345926 } }, v, q),
                }),
              v === "zt_zhSCyR" &&
                e(b, {
                  className: "framer-1jmkp7b",
                  "data-framer-name": "SmartCities",
                  layout: "position",
                  layoutDependency: H,
                  layoutId: "D87RuAVzr-shape",
                  opacity: 1,
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 25 31"><path d="M 22.555 7.625 L 22.555 3.125 L 3.57 3.125 L 14.4 14.797 C 14.751 15.226 14.751 15.844 14.4 16.273 L 3.64 27.875 L 22.624 27.875 L 22.624 23.375 C 22.624 22.812 23.116 22.32 23.749 22.32 C 24.312 22.25 24.874 22.812 24.874 23.375 L 24.874 29 C 24.874 29.633 24.312 30.125 23.749 30.125 L 1.18 30.125 C 0.688 30.125 0.336 29.915 0.125 29.492 C -0.085 29.141 -0.015 28.648 0.265 28.297 L 12.149 15.5 L 0.337 2.773 C 0.056 2.422 -0.015 1.93 0.197 1.578 C 0.407 1.156 0.759 0.875 1.181 0.875 L 23.681 0.875 C 24.314 0.875 24.876 1.438 24.876 2 L 24.876 7.625 C 24.876 8.258 24.314 8.82 23.751 8.82 C 23.118 8.75 22.556 8.258 22.556 7.625 Z" fill="var(--token-e2149c75-9099-4842-aea6-4fbafaef2693, rgb(191, 199, 212)) /* {&quot;name&quot;:&quot;TextColor&quot;} */"></path></svg>',
                  svgContentId: 2410895994,
                  withExternalLayout: !0,
                  ...j({ zt_zhSCyR: { svgContentId: 14375799 } }, v, q),
                }),
              v === "bgZokv8d_" &&
                e(b, {
                  className: "framer-1gcent8",
                  "data-framer-name": "Gaming",
                  layout: "position",
                  layoutDependency: H,
                  layoutId: "QpFzGV6Vk-shape",
                  opacity: 1,
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 45 27"><path d="M 31.5 0 C 38.953 0 45 6.047 45 13.5 C 45 21.023 38.953 27 31.5 27 L 13.5 27 C 5.977 27 0 21.023 0 13.5 C 0 6.047 5.977 0 13.5 0 Z M 31.5 24.75 C 37.688 24.75 42.75 19.758 42.75 13.5 C 42.75 7.312 37.687 2.25 31.5 2.25 L 13.5 2.25 C 7.242 2.25 2.25 7.313 2.25 13.5 C 2.25 19.758 7.242 24.75 13.5 24.75 Z M 30.305 15.187 C 31.289 15.187 31.922 15.961 31.922 16.875 C 31.922 17.859 31.148 18.563 30.305 18.563 C 29.391 18.563 28.688 17.859 28.688 16.875 C 28.688 15.961 29.32 15.187 30.305 15.187 Z M 34.805 8.437 C 35.789 8.437 36.422 9.211 36.422 10.125 C 36.422 11.109 35.648 11.813 34.805 11.813 C 33.891 11.813 33.188 11.109 33.188 10.125 C 33.188 9.211 33.82 8.437 34.805 8.437 Z M 18 12.375 C 18.563 12.375 19.055 12.938 19.055 13.5 C 19.055 14.133 18.563 14.625 18 14.625 L 14.625 14.625 L 14.625 18 C 14.625 18.633 14.062 19.125 13.43 19.125 C 12.867 19.125 12.375 18.633 12.375 18 L 12.375 14.625 L 9 14.625 C 8.367 14.625 7.805 14.133 7.805 13.5 C 7.805 12.937 8.367 12.375 9 12.375 L 12.375 12.375 L 12.375 9 C 12.375 8.437 12.867 7.875 13.43 7.875 C 14.063 7.875 14.625 8.438 14.625 9 L 14.625 12.375 Z" fill="var(--token-e2149c75-9099-4842-aea6-4fbafaef2693, rgb(191, 199, 212)) /* {&quot;name&quot;:&quot;TextColor&quot;} */"></path></svg>',
                  svgContentId: 2006263955,
                  withExternalLayout: !0,
                  ...j({ bgZokv8d_: { svgContentId: 4234221426 } }, v, q),
                }),
              v === "CdiOerLLo" &&
                e(b, {
                  className: "framer-ewwuyv",
                  "data-framer-name": "Science",
                  layout: "position",
                  layoutDependency: H,
                  layoutId: "tQZlGZmnJ",
                  opacity: 1,
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49 48"><path d="M 30.953 10.297 C 33.695 12.969 32.57 18.594 28.633 24.5 C 32.5 30.477 33.625 36.102 30.883 38.773 C 29.969 39.758 28.563 40.25 26.805 40.25 C 25.328 40.25 23.641 39.898 21.742 39.125 C 20.125 38.492 18.438 37.578 16.75 36.453 C 14.992 37.578 13.305 38.493 11.688 39.125 C 9.789 39.898 8.102 40.25 6.625 40.25 C 4.867 40.25 3.461 39.758 2.477 38.773 C -0.266 36.101 0.859 30.476 4.727 24.5 C 0.859 18.594 -0.266 12.969 2.477 10.297 C 4.305 8.398 7.61 8.257 11.687 9.945 C 13.305 10.578 14.992 11.492 16.75 12.617 C 18.438 11.492 20.125 10.578 21.742 9.945 C 25.82 8.258 29.125 8.398 30.953 10.297 Z M 22.586 11.984 C 21.32 12.476 20.055 13.25 18.719 14.024 C 20.337 15.222 21.865 16.538 23.289 17.961 C 24.695 19.438 26.031 20.914 27.297 22.531 C 30.32 17.68 31.024 13.461 29.407 11.914 C 28.141 10.719 25.75 10.719 22.587 11.984 Z M 4.024 11.914 C 2.406 13.531 3.11 17.68 6.204 22.531 C 8.594 19.297 11.477 16.484 14.711 14.023 C 13.445 13.25 12.11 12.477 10.844 11.984 C 9.227 11.351 7.82 11 6.625 11 C 5.5 11 4.656 11.281 4.024 11.914 Z M 10.844 37.086 C 12.11 36.594 13.445 35.82 14.641 35.046 C 13.024 33.852 11.547 32.516 10.071 31.109 C 8.664 29.633 7.328 28.156 6.063 26.539 C 3.11 31.391 2.406 35.609 4.023 37.156 C 5.219 38.352 7.68 38.352 10.843 37.086 Z M 11.758 29.492 C 13.305 31.039 14.922 32.445 16.75 33.711 C 18.508 32.445 20.195 31.039 21.672 29.492 C 23.219 27.945 24.695 26.328 25.962 24.5 C 24.695 22.742 23.219 21.125 21.672 19.578 C 20.125 18.031 18.508 16.625 16.75 15.359 C 14.922 16.625 13.305 18.031 11.758 19.579 C 10.218 21.12 8.784 22.764 7.468 24.5 C 8.766 26.273 10.2 27.942 11.758 29.492 Z M 29.406 37.156 C 31.024 35.539 30.32 31.391 27.297 26.539 C 26.031 28.156 24.695 29.633 23.289 31.109 C 21.813 32.516 20.336 33.851 18.719 35.047 C 19.984 35.82 21.32 36.594 22.586 37.086 C 25.68 38.352 28.211 38.352 29.406 37.156 Z M 16.75 22.813 C 17.664 22.813 18.438 23.586 18.438 24.57 C 18.438 24.992 18.227 25.414 17.945 25.766 C 17.606 26.039 17.185 26.188 16.75 26.188 C 15.766 26.188 14.992 25.484 15.063 24.57 C 15.063 23.586 15.766 22.812 16.75 22.812 Z" fill="var(--token-e2149c75-9099-4842-aea6-4fbafaef2693, rgb(191, 199, 212)) /* {&quot;name&quot;:&quot;TextColor&quot;} */"></path></svg>',
                  svgContentId: 2731872822,
                  withExternalLayout: !0,
                  ...j({ CdiOerLLo: { svgContentId: 1181408714 } }, v, q),
                }),
              v === "gjWJPNzH2" &&
                e(b, {
                  className: "framer-1fjsa0c",
                  "data-framer-name": "graphic",
                  layout: "position",
                  layoutDependency: H,
                  layoutId: "kLUSEanKR",
                  opacity: 1,
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 42"><path d="M 43.5 24 C 45.938 24 48 26.063 48 28.5 L 48 37.5 C 48 40.031 45.937 42 43.5 42 L 4.5 42 C 1.969 42 0 40.031 0 37.5 L 0 28.5 C 0 26.062 1.969 24 4.5 24 Z M 46.5 37.5 L 46.5 28.5 C 46.5 26.906 45.094 25.5 43.5 25.5 L 4.5 25.5 C 2.812 25.5 1.5 26.906 1.5 28.5 L 1.5 37.5 C 1.5 39.188 2.813 40.5 4.5 40.5 L 43.5 40.5 C 45.094 40.5 46.5 39.187 46.5 37.5 Z M 43.5 0 C 45.938 0 48 2.063 48 4.5 L 48 13.5 C 48 16.031 45.937 18 43.5 18 L 4.5 18 C 1.969 18 0 16.031 0 13.5 L 0 4.5 C 0 2.062 1.969 0 4.5 0 Z M 46.5 13.5 L 46.5 4.5 C 46.5 2.906 45.094 1.5 43.5 1.5 L 4.5 1.5 C 2.812 1.5 1.5 2.906 1.5 4.5 L 1.5 13.5 C 1.5 15.188 2.813 16.5 4.5 16.5 L 43.5 16.5 C 45.094 16.5 46.5 15.187 46.5 13.5 Z M 33 7.5 C 33.75 7.5 34.5 8.25 34.5 9 C 34.5 9.844 33.75 10.5 33 10.5 C 32.601 10.505 32.216 10.349 31.933 10.067 C 31.651 9.784 31.495 9.399 31.5 9 C 31.5 8.25 32.156 7.5 33 7.5 Z M 39 7.5 C 39.75 7.5 40.5 8.25 40.5 9 C 40.5 9.844 39.75 10.5 39 10.5 C 38.601 10.505 38.216 10.349 37.933 10.067 C 37.651 9.784 37.495 9.399 37.5 9 C 37.5 8.25 38.156 7.5 39 7.5 Z M 33 31.5 C 33.75 31.5 34.5 32.25 34.5 33 C 34.5 33.844 33.75 34.5 33 34.5 C 32.601 34.505 32.216 34.349 31.933 34.067 C 31.651 33.784 31.495 33.399 31.5 33 C 31.5 32.25 32.156 31.5 33 31.5 Z M 39 31.5 C 39.75 31.5 40.5 32.25 40.5 33 C 40.5 33.844 39.75 34.5 39 34.5 C 38.601 34.505 38.216 34.349 37.933 34.067 C 37.651 33.784 37.495 33.399 37.5 33 C 37.5 32.25 38.156 31.5 39 31.5 Z" fill="var(--token-e2149c75-9099-4842-aea6-4fbafaef2693, rgb(191, 199, 212)) /* {&quot;name&quot;:&quot;TextColor&quot;} */"></path></svg>',
                  svgContentId: 2397695153,
                  withExternalLayout: !0,
                  ...j({ gjWJPNzH2: { svgContentId: 793928333 } }, v, q),
                }),
            ],
          }),
        }),
      }),
    });
  }),
  ha = [
    '.framer-hJJDl [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-hJJDl .framer-rod5v6 { display: block; }",
    ".framer-hJJDl .framer-y0p3ou { height: 48px; overflow: hidden; position: relative; width: 48px; }",
    ".framer-hJJDl .framer-k14sff, .framer-hJJDl .framer-dpuqhx { flex: none; height: 48px; left: calc(50.00000000000002% - 48px / 2); position: absolute; top: calc(50.00000000000002% - 48px / 2); width: 48px; }",
    ".framer-hJJDl .framer-8nlb6n { flex: none; height: 48px; position: absolute; right: -1px; top: calc(50.00000000000002% - 48px / 2); width: 49px; }",
    ".framer-hJJDl .framer-1jmkp7b { flex: none; height: 31px; left: 1px; position: absolute; top: 9px; width: 25px; }",
    ".framer-hJJDl .framer-1gcent8 { flex: none; height: 27px; left: 0px; position: absolute; top: 11px; width: 45px; }",
    ".framer-hJJDl .framer-ewwuyv { flex: none; height: 48px; left: 0px; position: absolute; top: 0px; width: 49px; }",
    ".framer-hJJDl .framer-1fjsa0c { flex: none; height: 42px; left: calc(50.00000000000002% - 48px / 2); position: absolute; top: calc(50.00000000000002% - 42px / 2); width: 48px; }",
  ],
  V = J(da, ha, "framer-hJJDl"),
  I = V;
(V.displayName = "Icons/Icon 48"),
  (V.defaultProps = { height: 48, width: 48 }),
  G(V, {
    variant: {
      options: [
        "wFDZPe8Zi",
        "OhWmGgnxF",
        "l7LNAD70T",
        "zt_zhSCyR",
        "bgZokv8d_",
        "CdiOerLLo",
        "gjWJPNzH2",
      ],
      optionTitles: [
        "AI",
        "Health",
        "Architecture",
        "Smart Cities",
        "Gaming",
        "Science",
        "Databse",
      ],
      title: "Variant",
      type: Z.Enum,
    },
  }),
  K(V, []);
function N(s) {
  let f = ke.current() === ke.canvas;
  return e(i.div, {
    ...s,
    className: "dandikko",
    initial: {
      width: s.baseWidth,
      backgroundImage: f
        ? "none"
        : "linear-gradient(90deg, #070713 50%, rgba(7, 17, 19, 0) 100%)",
    },
    whileInView: {
      backgroundImage: f
        ? "none"
        : "linear-gradient(45deg, #070713 10%, rgba(7, 17, 19, 0) 50%)",
      width: "50%",
      x: "-90%",
    },
    transition: { duration: s.duration, delay: s.delay },
    transitionEnd: { zIndex: -1 },
    exit: "hidden",
    viewport: { once: !0 },
  });
}
G(N, {
  baseWidth: { title: "Initial Width", type: Z.String },
  duration: { title: "Duration", type: Z.Number },
  delay: { title: "Delay", type: Z.Number },
});
N.defaultProps = { delay: 0, duration: 1, baseWidth: "1000px" };
lr.loadWebFontsFromSelectors(["GF;Rubik-regular"]);
var Ar = [
    {
      family: "Rubik",
      moduleAsset: {
        localModuleIdentifier: "local-module:css/UpGEs5oDy:default",
        url: "https://fonts.gstatic.com/s/rubik/v26/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-B4i1UE80V4bVkA.ttf",
      },
      style: "normal",
      url: "https://fonts.gstatic.com/s/rubik/v26/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-B4i1UE80V4bVkA.ttf",
      weight: "400",
    },
  ],
  Tr = [
    '.framer-LXl8H .framer-styles-preset-ufa6qn:not(.rich-text-wrapper), .framer-LXl8H .framer-styles-preset-ufa6qn.rich-text-wrapper p { --framer-font-family: "Rubik", "Rubik Placeholder", sans-serif; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 150%; --framer-paragraph-spacing: 0px; --framer-text-alignment: center; --framer-text-color: var(--token-e2149c75-9099-4842-aea6-4fbafaef2693, #98a2b3); --framer-text-decoration: none; --framer-text-transform: none; }',
    '@media (max-width: 1199px) and (min-width: 810px) { .framer-LXl8H .framer-styles-preset-ufa6qn:not(.rich-text-wrapper), .framer-LXl8H .framer-styles-preset-ufa6qn.rich-text-wrapper p { --framer-font-family: "Rubik", "Rubik Placeholder", sans-serif; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 150%; --framer-paragraph-spacing: 0px; --framer-text-alignment: center; --framer-text-color: var(--token-e2149c75-9099-4842-aea6-4fbafaef2693, #98a2b3); --framer-text-decoration: none; --framer-text-transform: none; } }',
    '@media (max-width: 809px) and (min-width: 0px) { .framer-LXl8H .framer-styles-preset-ufa6qn:not(.rich-text-wrapper), .framer-LXl8H .framer-styles-preset-ufa6qn.rich-text-wrapper p { --framer-font-family: "Rubik", "Rubik Placeholder", sans-serif; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 150%; --framer-paragraph-spacing: 0px; --framer-text-alignment: center; --framer-text-color: var(--token-e2149c75-9099-4842-aea6-4fbafaef2693, #98a2b3); --framer-text-decoration: none; --framer-text-transform: none; } }',
  ],
  Zr = "framer-LXl8H";
var xa = g(ze),
  ga = g(Ie),
  Me = Y(Ie),
  ua = g(je),
  Ee = Y(je),
  ya = g(N),
  va = g(Le),
  R = Ce(i.div),
  ba = g(Ne),
  wa = g(_e),
  Ha = g(I),
  ka = g(F),
  ee = Cr(i.div),
  Ca = g($),
  _a = g(z),
  Na = g(Ae),
  La = g(O),
  We = Ce(o),
  qa = g(Se),
  Ur = Y(Se),
  Ia = g(y),
  Fa = g(qe),
  za = g(Fe);
var ja = {
    SkQsu0FoZ: "(max-width: 767px)",
    TEAVYlFuh: "(min-width: 768px) and (max-width: 1039px)",
    WQLkyLRf1: "(min-width: 1040px)",
  },
  Sa = () => typeof document < "u",
  Rr = "framer-59oaH",
  Aa = {
    SkQsu0FoZ: "framer-v-1bstirn",
    TEAVYlFuh: "framer-v-clvs4f",
    WQLkyLRf1: "framer-v-72rtr7",
  },
  Vr = { oDJvo1yNO: new nr(() => import("./augiA20Il-0-P2QGQ62H.mjs")) },
  Ta = (s) => {
    let f = [];
    for (; s; ) {
      let d = Vr[s.id];
      if (d) {
        let h = d.preload();
        h && f.push(h);
      }
      s = s.fallback;
    }
    if (f.length > 0) return Promise.all(f);
  },
  L = (s, f) => {
    for (; f; ) {
      let d = Vr[f.id];
      if (d) {
        let h = d.read()[s];
        if (h) return h;
      }
      f = f.fallback;
    }
  },
  D = (s, f) => `${f} rotate(180deg)`,
  Mr = (s, f) => `${f} rotate(-180deg)`,
  Dr = { damping: 80, delay: 0.5, mass: 1, stiffness: 400, type: "spring" },
  Za = { opacity: 0, rotate: 0, scale: 1, transition: Dr, x: 0, y: -30 },
  x = (s, f) => `perspective(1200px) ${f}`,
  Oe = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    transition: Dr,
    x: 0,
    y: 0,
  },
  Ve = { opacity: 0.001, rotate: 0, scale: 1, x: 0, y: -30 },
  Br = { damping: 80, delay: 0.75, mass: 1, stiffness: 400, type: "spring" },
  Ua = { opacity: 0, rotate: 0, scale: 1, transition: Br, x: 0, y: -20 },
  De = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    transition: Br,
    x: 0,
    y: 0,
  },
  Be = { opacity: 0.001, rotate: 0, scale: 1, x: 0, y: -20 },
  Pr = { damping: 30, delay: 0, mass: 1, stiffness: 400, type: "spring" },
  Er = { opacity: 0, rotate: 0, scale: 1, transition: Pr, x: 0, y: 0 },
  M = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    transition: Pr,
    x: 0,
    y: 0,
  },
  E = { opacity: 0.001, rotate: 0, scale: 1, x: 0, y: 0 },
  Ra = { opacity: 0, rotate: 0, scale: 1, x: 0, y: 20 },
  Qr = { damping: 80, delay: 1.3, mass: 1, stiffness: 400, type: "spring" },
  Ma = { opacity: 0, rotate: 0, scale: 1, transition: Qr, x: 0, y: 20 },
  Xr = { delay: 2, duration: 0.75, ease: [0.44, 0, 0.56, 1], type: "tween" },
  Ea = {
    opacity: 0,
    rotate: 0,
    rotateX: -45,
    rotateY: 0,
    scale: 1,
    transition: Xr,
    x: 0,
    y: 0,
  },
  Pe = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    transition: Xr,
    x: 0,
    y: 0,
  },
  Qe = {
    opacity: 0.001,
    rotate: 0,
    rotateX: -45,
    rotateY: 0,
    scale: 1,
    x: 0,
    y: 0,
  },
  Wr = { opacity: 0, rotate: 0, scale: 1, x: 0, y: 50 },
  Ye = { delay: 0, duration: 0.6, ease: [0.44, 0, 0.56, 1], type: "tween" },
  Or = { opacity: 0, rotate: 0, scale: 1, transition: Ye, x: 0, y: 50 },
  Xe = (s, f) => `translate(-50%, -50%) ${f}`,
  Wa = { opacity: 0, rotate: 0, scale: 1, x: 0, y: 0 },
  Gr = { damping: 30, delay: 0.3, mass: 1, stiffness: 400, type: "spring" },
  Oa = { opacity: 0, rotate: 0, scale: 1, transition: Gr, x: 0, y: 0 },
  re = (s, f) => `${f} rotate(-90deg)`,
  ae = (s, f) => `${f} rotate(90deg)`,
  Ge = { opacity: 0, rotate: 0, scale: 1, x: 0, y: 30 },
  Jr = { damping: 90, delay: 0.1, mass: 0.5, stiffness: 600, type: "spring" },
  Va = { opacity: 0, rotate: 0, scale: 1, transition: Jr, x: 0, y: 30 },
  Yr = { damping: 90, delay: 0.2, mass: 0.5, stiffness: 600, type: "spring" },
  Da = { opacity: 0, rotate: 0, scale: 1, transition: Yr, x: 0, y: 30 },
  Kr = { damping: 90, delay: 0.3, mass: 0.5, stiffness: 600, type: "spring" },
  Ba = { opacity: 0, rotate: 0, scale: 1, transition: Kr, x: 0, y: 30 },
  Pa = { opacity: 0, rotate: 0, scale: 0.7, x: 0, y: 0 },
  $r = { damping: 80, delay: 0.7, mass: 1, stiffness: 500, type: "spring" },
  Qa = { opacity: 0, rotate: 0, scale: 0.7, transition: $r, x: 0, y: 0 },
  Xa = { opacity: 0, rotate: 0, scale: 0.8, x: 0, y: 0 },
  ea = { damping: 80, delay: 1, mass: 1, stiffness: 500, type: "spring" },
  Ga = { opacity: 0, rotate: 0, scale: 0.8, transition: ea, x: 0, y: 0 },
  Je = Te(),
  Ja = { Desktop: "WQLkyLRf1", Phone: "SkQsu0FoZ", Tablet: "TEAVYlFuh" },
  Ya = ({ height: s, id: f, width: d, ...h }) => {
    var w, C;
    return {
      ...h,
      variant:
        (C = (w = Ja[h.variant]) !== null && w !== void 0 ? w : h.variant) !==
          null && C !== void 0
          ? C
          : "WQLkyLRf1",
    };
  },
  Ka = B(function (s, f) {
    let { activeLocale: d, setLocale: h } = X(),
      { style: w, className: C, layoutId: S, variant: ie, ...v } = Ya(s);
    er(() => {
      let p = Te(void 0, d);
      if (((document.title = p.title || ""), p.viewport)) {
        var ve;
        (ve = document.querySelector('meta[name="viewport"]')) === null ||
          ve === void 0 ||
          ve.setAttribute("content", p.viewport);
      }
      if (p.bodyClassName)
        return (
          Array.from(document.body.classList)
            .filter((be) => be.startsWith("framer-body-"))
            .map((be) => document.body.classList.remove(be)),
          document.body.classList.add(`${p.bodyClassName}-framer-59oaH`),
          () => {
            document.body.classList.remove(`${p.bodyClassName}-framer-59oaH`);
          }
        );
    }, [void 0, d]);
    let [m, q] = or(ie, ja, !1),
      A = void 0,
      ne = Ta(d);
    if (ne) throw ne;
    let oe = T(null),
      me = ar(),
      H = () => (m === "SkQsu0FoZ" ? !Sa() : !0),
      le = He("vm_qgIZY9"),
      fe = T(null),
      ra = He("MJBjBDvtX"),
      aa = T(null),
      ta = P(),
      Ke = [Zr, cr, br, pr, Lr, Sr, ur, Fr, kr];
    tr({});
    var se, ce, de, he, pe, xe, ge, ue, ye;
    return e(ir.Provider, {
      value: { primaryVariantId: "WQLkyLRf1", variantClassNames: Aa },
      children: r(Q, {
        id: S ?? ta,
        children: [
          r(i.div, {
            ...v,
            className: U(Rr, ...Ke, "framer-72rtr7", C),
            ref: f ?? oe,
            style: { ...w },
            children: [
              e(n, {
                children: e(o, {
                  className: "framer-yoc6p9-container",
                  children: e(l, {
                    breakpoint: m,
                    overrides: {
                      SkQsu0FoZ: { variant: "dxtA8R9ro" },
                      TEAVYlFuh: { variant: "vRz6iFx98" },
                    },
                    children: e(ze, {
                      height: "100%",
                      id: "Gq932NKKY",
                      layoutId: "Gq932NKKY",
                      style: { maxWidth: "100%", width: "100%" },
                      variant: "eoTXJYY6N",
                      width: "100%",
                    }),
                  }),
                }),
              }),
              r("div", {
                className: "framer-1l2hlm",
                "data-framer-name": "Hero Content",
                name: "Hero Content",
                children: [
                  r("div", {
                    className: "framer-gmnhab",
                    "data-framer-name": "Hero Content Top",
                    name: "Hero Content Top",
                    children: [
                      e(n, {
                        children: e(o, {
                          className: "framer-1g24mmq-container",
                          children: e(Me, {
                            __framer__animateOnce: !1,
                            __framer__obscuredVariantId: "oz5SgFFkh",
                            __framer__threshold: 0,
                            __framer__variantAppearEffectEnabled: !0,
                            __framer__visibleVariantId: "ullo7U4po",
                            height: "100%",
                            id: "zWl25l_LO",
                            layoutId: "zWl25l_LO",
                            style: { height: "100%", width: "100%" },
                            variant: "oz5SgFFkh",
                            width: "100%",
                          }),
                        }),
                      }),
                      e(n, {
                        children: e(o, {
                          className: "framer-17ma0u2-container",
                          transformTemplate: D,
                          children: e(Me, {
                            __framer__animateOnce: !1,
                            __framer__obscuredVariantId: "oz5SgFFkh",
                            __framer__threshold: 0.5,
                            __framer__variantAppearEffectEnabled: !0,
                            __framer__visibleVariantId: "ullo7U4po",
                            height: "100%",
                            id: "lxYeE2bjf",
                            layoutId: "lxYeE2bjf",
                            style: { height: "100%", width: "100%" },
                            variant: "oz5SgFFkh",
                            width: "100%",
                          }),
                        }),
                      }),
                      e(n, {
                        children: e(o, {
                          className: "framer-dxpu6x-container",
                          children: e(Ee, {
                            __framer__animateOnce: !1,
                            __framer__obscuredVariantId: "cKtAfc2mS",
                            __framer__threshold: 0,
                            __framer__variantAppearEffectEnabled: !0,
                            __framer__visibleVariantId: "BfiNgCzTr",
                            height: "100%",
                            id: "cUNfwu8GA",
                            layoutId: "cUNfwu8GA",
                            style: { height: "100%", width: "100%" },
                            variant: "cKtAfc2mS",
                            width: "100%",
                          }),
                        }),
                      }),
                      e(n, {
                        children: e(o, {
                          className: "framer-1qbo3j0-container",
                          transformTemplate: Mr,
                          children: e(Ee, {
                            __framer__animateOnce: !1,
                            __framer__obscuredVariantId: "cKtAfc2mS",
                            __framer__threshold: 0.5,
                            __framer__variantAppearEffectEnabled: !0,
                            __framer__visibleVariantId: "BfiNgCzTr",
                            height: "100%",
                            id: "uhxQrWHG_",
                            layoutId: "uhxQrWHG_",
                            style: { height: "100%", width: "100%" },
                            variant: "cKtAfc2mS",
                            width: "100%",
                          }),
                        }),
                      }),
                      e(l, {
                        breakpoint: m,
                        overrides: {
                          SkQsu0FoZ: {
                            "data-framer-appear-id": "as062u",
                            animate: c("animate", "as062u", Oe, "1bstirn"),
                            children: e(a, {
                              children: e("p", {
                                style: {
                                  "--font-selector":
                                    "Q1VTVE9NO1JpZ2lkIFNxdWFyZSBSZWd1bGFy",
                                  "--framer-font-family":
                                    '"Rigid Square Regular", "Rigid Square Regular Placeholder", sans-serif',
                                  "--framer-font-size": "20px",
                                  "--framer-letter-spacing": "2px",
                                  "--framer-line-height": "100%",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--token-d1c6bc49-a4d7-460d-8ec2-97f80b7b859d, rgba(255, 255, 255, 0.75))",
                                  "--framer-text-transform": "uppercase",
                                },
                                children: "Global CLOUD Of",
                              }),
                            }),
                            initial: c("initial", "as062u", Ve, "1bstirn"),
                            transformTemplate: k("as062u", x),
                          },
                          TEAVYlFuh: {
                            "data-framer-appear-id": "1ljq0bk",
                            animate: c("animate", "1ljq0bk", Oe, "clvs4f"),
                            initial: c("initial", "1ljq0bk", Ve, "clvs4f"),
                            transformTemplate: k("1ljq0bk", x),
                          },
                        },
                        children: e(t, {
                          __fromCanvasComponent: !0,
                          animate: c("animate", "x71gk2", Oe, "72rtr7"),
                          children: e(a, {
                            children: e("p", {
                              style: {
                                "--font-selector":
                                  "Q1VTVE9NO1JpZ2lkIFNxdWFyZSBSZWd1bGFy",
                                "--framer-font-family":
                                  '"Rigid Square Regular", "Rigid Square Regular Placeholder", sans-serif',
                                "--framer-font-size": "20px",
                                "--framer-letter-spacing": "12px",
                                "--framer-line-height": "100%",
                                "--framer-text-alignment": "center",
                                "--framer-text-color":
                                  "var(--token-d1c6bc49-a4d7-460d-8ec2-97f80b7b859d, rgba(255, 255, 255, 0.75))",
                                "--framer-text-transform": "uppercase",
                              },
                              children: "Global CLOUD Of",
                            }),
                          }),
                          className: "framer-x71gk2",
                          "data-framer-appear-id": "x71gk2",
                          exit: Za,
                          fonts: ["CUSTOM;Rigid Square Regular"],
                          initial: c("initial", "x71gk2", Ve, "72rtr7"),
                          transformTemplate: k("x71gk2", x),
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      }),
                      e(l, {
                        breakpoint: m,
                        overrides: {
                          SkQsu0FoZ: {
                            "data-framer-appear-id": "mfk2wb",
                            animate: c("animate", "mfk2wb", De, "1bstirn"),
                            children: e(a, {
                              children: e("h1", {
                                style: {
                                  "--font-selector":
                                    "Q1VTVE9NO1JpZ2lkIFNxdWFyZSBSZWd1bGFy",
                                  "--framer-font-family":
                                    '"Rigid Square Regular", "Rigid Square Regular Placeholder", sans-serif',
                                  "--framer-font-size": "44px",
                                  "--framer-line-height": "120%",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                                },
                                children: e("span", {
                                  "data-text-fill": "true",
                                  style: {
                                    backgroundImage:
                                      "linear-gradient(0deg, var(--token-85b0d898-2a86-4360-a7d1-302d0c02e489, rgb(184, 238, 255)) 0%, var(--token-85b0d898-2a86-4360-a7d1-302d0c02e489, rgb(184, 238, 255)) 0%, var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255)) 100%)",
                                  },
                                  children: "n.quantum computing",
                                }),
                              }),
                            }),
                            initial: c("initial", "mfk2wb", Be, "1bstirn"),
                            transformTemplate: k("mfk2wb", x),
                          },
                          TEAVYlFuh: {
                            "data-framer-appear-id": "ml6rou",
                            animate: c("animate", "ml6rou", De, "clvs4f"),
                            initial: c("initial", "ml6rou", Be, "clvs4f"),
                            transformTemplate: k("ml6rou", x),
                          },
                        },
                        children: e(t, {
                          __fromCanvasComponent: !0,
                          animate: c("animate", "m3hnwb", De, "72rtr7"),
                          children: e(a, {
                            children: e("h1", {
                              style: {
                                "--font-selector":
                                  "Q1VTVE9NO1JpZ2lkIFNxdWFyZSBSZWd1bGFy",
                                "--framer-font-family":
                                  '"Rigid Square Regular", "Rigid Square Regular Placeholder", sans-serif',
                                "--framer-font-size": "64px",
                                "--framer-line-height": "120%",
                                "--framer-text-alignment": "center",
                                "--framer-text-color":
                                  "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                              },
                              children: e("span", {
                                "data-text-fill": "true",
                                style: {
                                  backgroundImage:
                                    "linear-gradient(0deg, var(--token-85b0d898-2a86-4360-a7d1-302d0c02e489, rgb(184, 238, 255)) 0%, var(--token-85b0d898-2a86-4360-a7d1-302d0c02e489, rgb(184, 238, 255)) 0%, var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255)) 100%)",
                                },
                                children: "n.quantum computing",
                              }),
                            }),
                          }),
                          className: "framer-m3hnwb",
                          "data-framer-appear-id": "m3hnwb",
                          exit: Ua,
                          fonts: ["CUSTOM;Rigid Square Regular"],
                          initial: c("initial", "m3hnwb", Be, "72rtr7"),
                          transformTemplate: k("m3hnwb", x),
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      }),
                    ],
                  }),
                  r("div", {
                    className: "framer-1cmwgnm",
                    "data-framer-name": "Hero Content Bottom",
                    name: "Hero Content Bottom",
                    children: [
                      r("div", {
                        className: "framer-1hvqv1r",
                        "data-framer-name": "Intro",
                        name: "Intro",
                        children: [
                          e(n, {
                            children: e(o, {
                              className: "framer-p5vvll-container",
                              children: e(N, {
                                baseWidth: "1300px",
                                delay: 1.2,
                                duration: 1,
                                height: "100%",
                                id: "Cfq_saNrP",
                                layoutId: "Cfq_saNrP",
                                style: { height: "100%", width: "100%" },
                                width: "100%",
                              }),
                            }),
                          }),
                          e(l, {
                            breakpoint: m,
                            overrides: {
                              SkQsu0FoZ: {
                                "data-framer-appear-id": "1o4byga",
                                animate: c("animate", "1o4byga", M, "1bstirn"),
                                children: e(a, {
                                  children: e("p", {
                                    className: "framer-styles-preset-11ut0g7",
                                    "data-styles-preset": "Auy8Lx_6q",
                                    style: {
                                      "--framer-text-alignment": "center",
                                    },
                                    children:
                                      "Proton is the world\u2019s only accessible neuromorphic quantum computing cloud for solving real-world problems, at scale.",
                                  }),
                                }),
                                initial: c("initial", "1o4byga", E, "1bstirn"),
                                transformTemplate: k("1o4byga", x),
                              },
                              TEAVYlFuh: {
                                "data-framer-appear-id": "81oqry",
                                animate: c("animate", "81oqry", M, "clvs4f"),
                                initial: c("initial", "81oqry", E, "clvs4f"),
                                transformTemplate: k("81oqry", x),
                              },
                            },
                            children: e(t, {
                              __fromCanvasComponent: !0,
                              animate: c("animate", "1t1190h", M, "72rtr7"),
                              children: e(a, {
                                children: e("p", {
                                  className: "framer-styles-preset-ufa6qn",
                                  "data-styles-preset": "UpGEs5oDy",
                                  children:
                                    "Proton is the world\u2019s only accessible neuromorphic quantum computing cloud for solving real-world problems, at scale.",
                                }),
                              }),
                              className: "framer-1t1190h",
                              "data-framer-appear-id": "1t1190h",
                              exit: Er,
                              fonts: ["Inter"],
                              initial: c("initial", "1t1190h", E, "72rtr7"),
                              transformTemplate: k("1t1190h", x),
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                        ],
                      }),
                      e(R, {
                        __framer__animate: { transition: Qr },
                        __framer__animateOnce: !0,
                        __framer__enter: Ra,
                        __framer__exit: Ma,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        className: "framer-7p4gz2",
                        "data-framer-name": "Buttons",
                        name: "Buttons",
                        transformTemplate: x,
                        children: e(W, {
                          links: [
                            {
                              href: { webPageId: "UvUGc8lZk" },
                              implicitPathVariables: void 0,
                            },
                            {
                              href: { webPageId: "UvUGc8lZk" },
                              implicitPathVariables: void 0,
                            },
                            {
                              href: { webPageId: "UvUGc8lZk" },
                              implicitPathVariables: void 0,
                            },
                          ],
                          children: (p) =>
                            e(n, {
                              children: e(o, {
                                className: "framer-xz1v6i-container",
                                children: e(l, {
                                  breakpoint: m,
                                  overrides: {
                                    SkQsu0FoZ: {
                                      eAW3DGEn9: p[1],
                                      MCUefySof: "SOLUTIONS",
                                      style: { width: "100%" },
                                      variant: "rtz8GqsrQ",
                                    },
                                    TEAVYlFuh: { eAW3DGEn9: p[2] },
                                  },
                                  children: e(Le, {
                                    eAW3DGEn9: p[0],
                                    height: "100%",
                                    Hj7DCPnJa: !1,
                                    id: "EC5XNxn9f",
                                    layoutId: "EC5XNxn9f",
                                    MCUefySof: "solutions",
                                    tQ1WYjDED: !0,
                                    variant: "gjnyqhhky",
                                    width: "100%",
                                    y_K10yxTM: "ArrowRight",
                                  }),
                                }),
                              }),
                            }),
                        }),
                      }),
                      e(l, {
                        breakpoint: m,
                        overrides: {
                          SkQsu0FoZ: {
                            "data-framer-appear-id": "aw7q2k",
                            animate: c("animate", "aw7q2k", M, "1bstirn"),
                            children: e(a, {
                              children: e("p", {
                                className: "framer-styles-preset-11ut0g7",
                                "data-styles-preset": "Auy8Lx_6q",
                                style: {
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--token-d1c6bc49-a4d7-460d-8ec2-97f80b7b859d, rgba(255, 255, 255, 0.5))",
                                },
                                children: "DePIN  |  DeSci  |  PoUW  |  AI",
                              }),
                            }),
                            initial: c("initial", "aw7q2k", E, "1bstirn"),
                            transformTemplate: k("aw7q2k", x),
                          },
                          TEAVYlFuh: {
                            "data-framer-appear-id": "18nu672",
                            animate: c("animate", "18nu672", M, "clvs4f"),
                            initial: c("initial", "18nu672", E, "clvs4f"),
                            transformTemplate: k("18nu672", x),
                          },
                        },
                        children: e(t, {
                          __fromCanvasComponent: !0,
                          animate: c("animate", "15zfy5q", M, "72rtr7"),
                          children: e(a, {
                            children: e("p", {
                              className: "framer-styles-preset-ufa6qn",
                              "data-styles-preset": "UpGEs5oDy",
                              style: {
                                "--framer-text-color":
                                  "var(--token-d1c6bc49-a4d7-460d-8ec2-97f80b7b859d, rgba(255, 255, 255, 0.5))",
                              },
                              children: "DePIN  |  DeSci  |  PoUW  |  AI",
                            }),
                          }),
                          className: "framer-15zfy5q",
                          "data-framer-appear-id": "15zfy5q",
                          exit: Er,
                          fonts: ["Inter"],
                          initial: c("initial", "15zfy5q", E, "72rtr7"),
                          transformTemplate: k("15zfy5q", x),
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              e(l, {
                breakpoint: m,
                overrides: {
                  SkQsu0FoZ: {
                    "data-framer-appear-id": "72k6zv",
                    animate: c("animate", "72k6zv", Pe, "1bstirn"),
                    initial: c("initial", "72k6zv", Qe, "1bstirn"),
                  },
                  TEAVYlFuh: {
                    "data-framer-appear-id": "rvf7l5",
                    animate: c("animate", "rvf7l5", Pe, "clvs4f"),
                    initial: c("initial", "rvf7l5", Qe, "clvs4f"),
                  },
                },
                children: e(i.div, {
                  animate: c("animate", "1oytnjx", Pe, "72rtr7"),
                  className: "framer-1oytnjx",
                  "data-framer-appear-id": "1oytnjx",
                  "data-framer-name": "Proton Main Spline",
                  exit: Ea,
                  initial: c("initial", "1oytnjx", Qe, "72rtr7"),
                  name: "Proton Main Spline",
                  children: e(n, {
                    children: e(o, {
                      className: "framer-vzkx53-container",
                      children: e(Ne, {
                        height: "100%",
                        html: `<script type="module" src="https://unpkg.com/@splinetool/viewer@1.0.31/build/spline-viewer.js"><\/script>
<spline-viewer url="../prod.spline.design/frUnApxGvsnDivof/scene.splinecode"></spline-viewer>`,
                        id: "IhzBHdNWk",
                        layoutId: "IhzBHdNWk",
                        style: { height: "100%", width: "100%" },
                        type: "html",
                        url: "https://my.spline.design/dynexorbuptodatecopy-7f829e2c689c4407b2b94499320140c7/",
                        width: "100%",
                      }),
                    }),
                  }),
                }),
              }),
              e(l, {
                breakpoint: m,
                overrides: {
                  SkQsu0FoZ: {
                    background: {
                      alt: "",
                      fit: "fit",
                      intrinsicHeight: 3781,
                      intrinsicWidth: 5500,
                      pixelHeight: 3781,
                      pixelWidth: 5500,
                      positionX: "center",
                      positionY: "center",
                      src: "https://framerusercontent.com/images/WmRtO1KxHMUpouSiTABIvVrTfsk.jpg?scale-down-to=1024",
                    },
                  },
                },
                children: r("div", {
                  background: {
                    alt: "",
                    fit: "fit",
                    intrinsicHeight: 3781,
                    intrinsicWidth: 5500,
                    loading: "lazy",
                    pixelHeight: 3781,
                    pixelWidth: 5500,
                    positionX: "center",
                    positionY: "center",
                    src: "https://framerusercontent.com/images/WmRtO1KxHMUpouSiTABIvVrTfsk.jpg?scale-down-to=1024",
                  },
                  className: "framer-13waxsl",
                  "data-framer-name": "Driving The Change",
                  name: "Driving The Change",
                  children: [
                    r("div", {
                      className: "framer-gdjx73",
                      "data-framer-name": "Left Col",
                      name: "Left Col",
                      children: [
                        r("div", {
                          className: "framer-165rbn6",
                          "data-framer-name": "Masked Title",
                          name: "Masked Title",
                          children: [
                            e(t, {
                              __fromCanvasComponent: !0,
                              children: e(a, {
                                children: e("h2", {
                                  className: "framer-styles-preset-1wml6uu",
                                  "data-styles-preset": "fVxnimdqP",
                                  children: "driving The Change",
                                }),
                              }),
                              className: "framer-1uq7zx9",
                              fonts: ["Inter"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                            H() &&
                              e(n, {
                                children: e(o, {
                                  className:
                                    "framer-piydgo-container hidden-1bstirn",
                                  children: e(N, {
                                    baseWidth: "1000px",
                                    delay: 0.2,
                                    duration: 1,
                                    height: "100%",
                                    id: "tcZ6RUlBo",
                                    layoutId: "tcZ6RUlBo",
                                    style: { height: "100%", width: "100%" },
                                    width: "100%",
                                  }),
                                }),
                              }),
                          ],
                        }),
                        r(R, {
                          __framer__animate: { transition: Gr },
                          __framer__animateOnce: !0,
                          __framer__enter: Wa,
                          __framer__exit: Oa,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: "framer-1ljvzrd",
                          "data-framer-name": "Title Line",
                          name: "Title Line",
                          transformTemplate: x,
                          children: [
                            e(t, {
                              __fromCanvasComponent: !0,
                              children: e(a, {
                                children: e("p", {
                                  className: "framer-styles-preset-1ygrrqz",
                                  "data-styles-preset": "aSqMlk60T",
                                  style: {
                                    "--framer-text-color":
                                      "var(--token-50859c1e-b9ab-4124-b93a-6ea1cca8c715, rgb(98, 103, 111))",
                                  },
                                  children: "Some Use Cases",
                                }),
                              }),
                              className: "framer-1bwjfel",
                              fonts: ["Inter"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                            e("div", {
                              className: "framer-2xbl1o",
                              "data-framer-name": "Line",
                              name: "Line",
                            }),
                            e(n, {
                              children: e(o, {
                                className: "framer-129zev6-container",
                                children: e(Me, {
                                  __framer__animateOnce: !1,
                                  __framer__obscuredVariantId: "oz5SgFFkh",
                                  __framer__threshold: 0.5,
                                  __framer__variantAppearEffectEnabled: !0,
                                  __framer__visibleVariantId: "ullo7U4po",
                                  height: "100%",
                                  id: "C8oXRmSJU",
                                  layoutId: "C8oXRmSJU",
                                  style: { height: "100%", width: "100%" },
                                  variant: "oz5SgFFkh",
                                  width: "100%",
                                }),
                              }),
                            }),
                          ],
                        }),
                        r("div", {
                          className: "framer-13esb9d",
                          "data-framer-name": "3 Cols Icons",
                          name: "3 Cols Icons",
                          children: [
                            r("div", {
                              className: "framer-1b88gup",
                              "data-framer-name": "Item",
                              name: "Item",
                              children: [
                                e(n, {
                                  children: e(o, {
                                    className: "framer-ixm5ny-container",
                                    children: e(I, {
                                      height: "100%",
                                      id: "U__vsNSCI",
                                      layoutId: "U__vsNSCI",
                                      style: { height: "100%", width: "100%" },
                                      variant: "wFDZPe8Zi",
                                      width: "100%",
                                    }),
                                  }),
                                }),
                                e(l, {
                                  breakpoint: m,
                                  overrides: {
                                    SkQsu0FoZ: {
                                      children: e(a, {
                                        children: r("p", {
                                          className:
                                            "framer-styles-preset-1ygrrqz",
                                          "data-styles-preset": "aSqMlk60T",
                                          children: [
                                            "Artificial ",
                                            e("br", {}),
                                            "Intelligence",
                                          ],
                                        }),
                                      }),
                                    },
                                  },
                                  children: e(t, {
                                    __fromCanvasComponent: !0,
                                    children: e(a, {
                                      children: e("p", {
                                        className:
                                          "framer-styles-preset-1ygrrqz",
                                        "data-styles-preset": "aSqMlk60T",
                                        children: "Artificial Intelligence",
                                      }),
                                    }),
                                    className: "framer-kq351o",
                                    fonts: ["Inter"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                            r("div", {
                              className: "framer-6oricf",
                              "data-framer-name": "Item",
                              name: "Item",
                              children: [
                                e(n, {
                                  children: e(o, {
                                    className: "framer-1sf77j2-container",
                                    children: e(I, {
                                      height: "100%",
                                      id: "iKzzsMYYx",
                                      layoutId: "iKzzsMYYx",
                                      style: { height: "100%", width: "100%" },
                                      variant: "OhWmGgnxF",
                                      width: "100%",
                                    }),
                                  }),
                                }),
                                e(t, {
                                  __fromCanvasComponent: !0,
                                  children: e(a, {
                                    children: e("p", {
                                      className: "framer-styles-preset-1ygrrqz",
                                      "data-styles-preset": "aSqMlk60T",
                                      children: "Healthcare",
                                    }),
                                  }),
                                  className: "framer-1nzi623",
                                  fonts: ["Inter"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            r("div", {
                              className: "framer-122ylt8",
                              "data-framer-name": "Item",
                              name: "Item",
                              children: [
                                e(n, {
                                  children: e(o, {
                                    className: "framer-1h8e0vg-container",
                                    children: e(I, {
                                      height: "100%",
                                      id: "b9O8tGbAy",
                                      layoutId: "b9O8tGbAy",
                                      style: { height: "100%", width: "100%" },
                                      variant: "zt_zhSCyR",
                                      width: "100%",
                                    }),
                                  }),
                                }),
                                e(t, {
                                  __fromCanvasComponent: !0,
                                  children: e(a, {
                                    children: e("p", {
                                      className: "framer-styles-preset-1ygrrqz",
                                      "data-styles-preset": "aSqMlk60T",
                                      children: "Science",
                                    }),
                                  }),
                                  className: "framer-1jds1vn",
                                  fonts: ["Inter"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            e(n, {
                              children: e(o, {
                                className: "framer-6eobk2-container",
                                children: e(N, {
                                  baseWidth: "1000px",
                                  delay: 0.6,
                                  duration: 1,
                                  height: "100%",
                                  id: "pxj2XxQNc",
                                  layoutId: "pxj2XxQNc",
                                  style: { height: "100%", width: "100%" },
                                  width: "100%",
                                }),
                              }),
                            }),
                          ],
                        }),
                        r("div", {
                          className: "framer-3xlpi3",
                          "data-framer-name": "3 Cols Icons",
                          name: "3 Cols Icons",
                          children: [
                            r("div", {
                              className: "framer-mtfi5p",
                              "data-framer-name": "Item",
                              name: "Item",
                              children: [
                                e(n, {
                                  children: e(o, {
                                    className: "framer-10ioje5-container",
                                    children: e(I, {
                                      height: "100%",
                                      id: "VOXQCviZh",
                                      layoutId: "VOXQCviZh",
                                      style: { height: "100%", width: "100%" },
                                      variant: "l7LNAD70T",
                                      width: "100%",
                                    }),
                                  }),
                                }),
                                e(t, {
                                  __fromCanvasComponent: !0,
                                  children: e(a, {
                                    children: e("p", {
                                      className: "framer-styles-preset-1ygrrqz",
                                      "data-styles-preset": "aSqMlk60T",
                                      children: "Architecture",
                                    }),
                                  }),
                                  className: "framer-1mqlmln",
                                  fonts: ["Inter"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            r("div", {
                              className: "framer-hnanzo",
                              "data-framer-name": "Item",
                              name: "Item",
                              children: [
                                e(n, {
                                  children: e(o, {
                                    className: "framer-1oytp0r-container",
                                    children: e(I, {
                                      height: "100%",
                                      id: "zR3ApaTXg",
                                      layoutId: "zR3ApaTXg",
                                      style: { height: "100%", width: "100%" },
                                      variant: "zt_zhSCyR",
                                      width: "100%",
                                    }),
                                  }),
                                }),
                                e(t, {
                                  __fromCanvasComponent: !0,
                                  children: e(a, {
                                    children: e("p", {
                                      className: "framer-styles-preset-1ygrrqz",
                                      "data-styles-preset": "aSqMlk60T",
                                      children: "Smart Cities",
                                    }),
                                  }),
                                  className: "framer-115u18",
                                  fonts: ["Inter"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            r("div", {
                              className: "framer-1jhouni",
                              "data-framer-name": "Item",
                              name: "Item",
                              children: [
                                e(n, {
                                  children: e(o, {
                                    className: "framer-1jd2c3a-container",
                                    children: e(I, {
                                      height: "100%",
                                      id: "W2u5dJv71",
                                      layoutId: "W2u5dJv71",
                                      style: { height: "100%", width: "100%" },
                                      variant: "CdiOerLLo",
                                      width: "100%",
                                    }),
                                  }),
                                }),
                                e(t, {
                                  __fromCanvasComponent: !0,
                                  children: e(a, {
                                    children: e("p", {
                                      className: "framer-styles-preset-1ygrrqz",
                                      "data-styles-preset": "aSqMlk60T",
                                      children: "Global-2000",
                                    }),
                                  }),
                                  className: "framer-165l1et",
                                  fonts: ["Inter"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            e(n, {
                              children: e(o, {
                                className: "framer-1fak2um-container",
                                children: e(N, {
                                  baseWidth: "1000px",
                                  delay: 0.5,
                                  duration: 1,
                                  height: "100%",
                                  id: "L1w30XeFU",
                                  layoutId: "L1w30XeFU",
                                  style: { height: "100%", width: "100%" },
                                  width: "100%",
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    r(ee, {
                      className: "framer-1h1t57e",
                      "data-framer-name": "Right Col",
                      name: "Right Col",
                      children: [
                        e(t, {
                          __fromCanvasComponent: !0,
                          children: r(a, {
                            children: [
                              r("p", {
                                className: "framer-styles-preset-21ogod",
                                "data-styles-preset": "xZndidUCt",
                                children: [
                                  "Proton is a ",
                                  e("span", {
                                    style: {
                                      "--framer-text-color":
                                        "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                                    },
                                    children: e("strong", {
                                      children: "DePIN",
                                    }),
                                  }),
                                  " platform for ",
                                  e("span", {
                                    style: {
                                      "--framer-text-color":
                                        "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                                    },
                                    children: e("strong", {
                                      children:
                                        "neuromorphic quantum computing",
                                    }),
                                  }),
                                  ", based on an innovative new blockchain protocol. ",
                                ],
                              }),
                              r("p", {
                                className: "framer-styles-preset-21ogod",
                                "data-styles-preset": "xZndidUCt",
                                children: [
                                  "It consists of participating ",
                                  e("span", {
                                    style: {
                                      "--framer-text-color":
                                        "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                                    },
                                    children: e("strong", {
                                      children: "Proof-of-Useful-Work (PoUW)",
                                    }),
                                  }),
                                  " miners that constitute a decentralised n.quantum computing network which is capable of computing quantum computing algorithms, featuring quantum-entanglement and -tunnelling effects, at scale.",
                                  e("br", {}),
                                  e("br", {}),
                                  "Without the limitations of traditional quantum computing, it can solve real-world problems, made possible with our proprietary algorithm  ",
                                  e("span", {
                                    style: {
                                      "--framer-text-color":
                                        "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                                    },
                                    children: e("strong", {
                                      children: "ProtonSolve",
                                    }),
                                  }),
                                  ".",
                                ],
                              }),
                              e("p", {
                                className: "framer-styles-preset-21ogod",
                                "data-styles-preset": "xZndidUCt",
                                children:
                                  "All this is wrapped in a sustainable and long term business model.",
                              }),
                            ],
                          }),
                          className: "framer-cppb84",
                          fonts: ["Inter", "Inter-Bold"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        r(i.div, {
                          className: "framer-swky90",
                          "data-framer-name": "Buttons",
                          name: "Buttons",
                          children: [
                            e(W, {
                              links: [
                                {
                                  href: { webPageId: "fyxHY82ZH" },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { webPageId: "fyxHY82ZH" },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { webPageId: "fyxHY82ZH" },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (p) =>
                                e(n, {
                                  children: e(o, {
                                    className: "framer-sfeycp-container",
                                    children: e(l, {
                                      breakpoint: m,
                                      overrides: {
                                        SkQsu0FoZ: { QOAMZflI5: p[1] },
                                        TEAVYlFuh: { QOAMZflI5: p[2] },
                                      },
                                      children: e(F, {
                                        aIZGIC_Sj: "regular",
                                        dyY4pb8hk: !1,
                                        gksRhNKQn:
                                          "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                                        hadnxFXYy: "ArrowRight",
                                        height: "100%",
                                        id: "X9eHiEISl",
                                        jzDLv4Gyt: !0,
                                        layoutId: "X9eHiEISl",
                                        QOAMZflI5: p[0],
                                        s3TC2p5g4: !1,
                                        style: { width: "100%" },
                                        u1kTRXq9c: "Proton Solve",
                                        variant: "TI13nY9Hs",
                                        width: "100%",
                                        X4tzEOP4z: !1,
                                      }),
                                    }),
                                  }),
                                }),
                            }),
                            e(W, {
                              links: [
                                {
                                  href: {
                                    hash: ":pW1NbyMLj",
                                    webPageId: "s3i5rh3Vt",
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    hash: ":pW1NbyMLj",
                                    webPageId: "s3i5rh3Vt",
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    hash: ":pW1NbyMLj",
                                    webPageId: "s3i5rh3Vt",
                                  },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (p) =>
                                e(n, {
                                  children: e(o, {
                                    className: "framer-m2sbcu-container",
                                    children: e(l, {
                                      breakpoint: m,
                                      overrides: {
                                        SkQsu0FoZ: { QOAMZflI5: p[1] },
                                        TEAVYlFuh: { QOAMZflI5: p[2] },
                                      },
                                      children: e(F, {
                                        aIZGIC_Sj: "regular",
                                        dyY4pb8hk: !1,
                                        gksRhNKQn:
                                          "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                                        hadnxFXYy: "ArrowRight",
                                        height: "100%",
                                        id: "O3s39giL8",
                                        jzDLv4Gyt: !1,
                                        layoutId: "O3s39giL8",
                                        QOAMZflI5: p[0],
                                        s3TC2p5g4: !1,
                                        style: { width: "100%" },
                                        u1kTRXq9c: "Mine DNX",
                                        variant: "KTGUhjkEK",
                                        width: "100%",
                                        X4tzEOP4z: !1,
                                      }),
                                    }),
                                  }),
                                }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              e(l, {
                breakpoint: m,
                overrides: {
                  SkQsu0FoZ: {
                    background: {
                      alt: "",
                      fit: "fit",
                      pixelHeight: 3781,
                      pixelWidth: 5500,
                      positionX: "center",
                      positionY: "center",
                      src: "https://framerusercontent.com/images/WmRtO1KxHMUpouSiTABIvVrTfsk.jpg?scale-down-to=1024",
                    },
                  },
                },
                children: e("div", {
                  background: {
                    alt: "",
                    fit: "fit",
                    loading: "lazy",
                    pixelHeight: 3781,
                    pixelWidth: 5500,
                    positionX: "center",
                    positionY: "center",
                    src: "https://framerusercontent.com/images/WmRtO1KxHMUpouSiTABIvVrTfsk.jpg?scale-down-to=1024",
                  },
                  className: "framer-c9j97n",
                  children: r(ee, {
                    className: "framer-90hoq1",
                    children: [
                      r(i.div, {
                        className: "framer-20tlo3",
                        "data-border": !0,
                        "data-framer-name": "Total GPUS",
                        name: "Total GPUS",
                        children: [
                          r(i.div, {
                            className: "framer-ggj8zy",
                            "data-framer-name": "Top",
                            name: "Top",
                            children: [
                              r(i.div, {
                                className: "framer-o3fo2l",
                                children: [
                                  e(n, {
                                    children: e(o, {
                                      className: "framer-18ftgzr-container",
                                      children: e(l, {
                                        breakpoint: m,
                                        overrides: {
                                          SkQsu0FoZ: {
                                            iconSearch:
                                              (se = L("v1", d)) !== null &&
                                              se !== void 0
                                                ? se
                                                : "chip",
                                          },
                                          TEAVYlFuh: {
                                            iconSearch:
                                              (ce = L("v2", d)) !== null &&
                                              ce !== void 0
                                                ? ce
                                                : "chip",
                                          },
                                        },
                                        children: e($, {
                                          color:
                                            "var(--token-2678ca90-7bcd-460e-87c6-9327e3761be8, rgb(102, 216, 250))",
                                          height: "100%",
                                          iconSearch:
                                            (de = L("v0", d)) !== null &&
                                            de !== void 0
                                              ? de
                                              : "chip",
                                          iconSelection: "Circuitry",
                                          id: "yISq6D_PU",
                                          layoutId: "yISq6D_PU",
                                          mirrored: !1,
                                          selectByList: !0,
                                          style: {
                                            height: "100%",
                                            width: "100%",
                                          },
                                          weight: "light",
                                          width: "100%",
                                        }),
                                      }),
                                    }),
                                  }),
                                  e(n, {
                                    children: e(o, {
                                      className: "framer-f4bgna-container",
                                      children: e(z, {
                                        fontSize: 40,
                                        height: "100%",
                                        id: "p8tfbqPm2",
                                        layoutId: "p8tfbqPm2",
                                        Show: "dynex_chips",
                                        textAlignment: "left",
                                        textColor:
                                          "var(--token-2678ca90-7bcd-460e-87c6-9327e3761be8, rgb(102, 216, 250))",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              r(i.div, {
                                className: "framer-1760fqd",
                                "data-framer-name": "Content",
                                name: "Content",
                                children: [
                                  e(l, {
                                    breakpoint: m,
                                    overrides: {
                                      SkQsu0FoZ: {
                                        children:
                                          (he = L("v4", d)) !== null &&
                                          he !== void 0
                                            ? he
                                            : e(a, {
                                                children: e("h6", {
                                                  className:
                                                    "framer-styles-preset-14n5412",
                                                  "data-styles-preset":
                                                    "H9bHClO9b",
                                                  children:
                                                    "n.quantum circuits",
                                                }),
                                              }),
                                      },
                                      TEAVYlFuh: {
                                        children:
                                          (pe = L("v5", d)) !== null &&
                                          pe !== void 0
                                            ? pe
                                            : e(a, {
                                                children: e("h6", {
                                                  className:
                                                    "framer-styles-preset-14n5412",
                                                  "data-styles-preset":
                                                    "H9bHClO9b",
                                                  children:
                                                    "n.quantum circuits",
                                                }),
                                              }),
                                      },
                                    },
                                    children: e(t, {
                                      __fromCanvasComponent: !0,
                                      children:
                                        (xe = L("v3", d)) !== null &&
                                        xe !== void 0
                                          ? xe
                                          : e(a, {
                                              children: e("h6", {
                                                className:
                                                  "framer-styles-preset-14n5412",
                                                "data-styles-preset":
                                                  "H9bHClO9b",
                                                children: "n.quantum circuits",
                                              }),
                                            }),
                                      className: "framer-159e0fv",
                                      fonts: ["Inter"],
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  e(l, {
                                    breakpoint: m,
                                    overrides: {
                                      SkQsu0FoZ: {
                                        children:
                                          (ge = L("v7", d)) !== null &&
                                          ge !== void 0
                                            ? ge
                                            : e(a, {
                                                children: e("p", {
                                                  className:
                                                    "framer-styles-preset-1iyl3hx",
                                                  "data-styles-preset":
                                                    "vnsT7kiZX",
                                                  style: {
                                                    "--framer-text-color":
                                                      "var(--token-50859c1e-b9ab-4124-b93a-6ea1cca8c715, rgb(98, 103, 111))",
                                                  },
                                                  children:
                                                    "Number of individual n.quantum circuits running to solve real world computing problems",
                                                }),
                                              }),
                                      },
                                      TEAVYlFuh: {
                                        children:
                                          (ue = L("v8", d)) !== null &&
                                          ue !== void 0
                                            ? ue
                                            : e(a, {
                                                children: e("p", {
                                                  className:
                                                    "framer-styles-preset-1iyl3hx",
                                                  "data-styles-preset":
                                                    "vnsT7kiZX",
                                                  style: {
                                                    "--framer-text-color":
                                                      "var(--token-50859c1e-b9ab-4124-b93a-6ea1cca8c715, rgb(98, 103, 111))",
                                                  },
                                                  children:
                                                    "Number of individual n.quantum circuits running to solve real world computing problems",
                                                }),
                                              }),
                                      },
                                    },
                                    children: e(t, {
                                      __fromCanvasComponent: !0,
                                      children:
                                        (ye = L("v6", d)) !== null &&
                                        ye !== void 0
                                          ? ye
                                          : e(a, {
                                              children: e("p", {
                                                className:
                                                  "framer-styles-preset-1iyl3hx",
                                                "data-styles-preset":
                                                  "vnsT7kiZX",
                                                style: {
                                                  "--framer-text-color":
                                                    "var(--token-50859c1e-b9ab-4124-b93a-6ea1cca8c715, rgb(98, 103, 111))",
                                                },
                                                children:
                                                  "Number of individual n.quantum circuits running to solve real world computing problems",
                                              }),
                                            }),
                                      className: "framer-1npcs7",
                                      fonts: ["Inter"],
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          r(i.div, {
                            className: "framer-14r4pw8",
                            "data-framer-name": "Corners",
                            name: "Corners",
                            children: [
                              e(i.div, {
                                className: "framer-2g9itc",
                                "data-border": !0,
                                "data-framer-name": "Top Left ",
                                name: "Top Left ",
                              }),
                              e(i.div, {
                                className: "framer-7nakil",
                                "data-border": !0,
                                "data-framer-name": "Top Left ",
                                name: "Top Left ",
                                transformTemplate: re,
                              }),
                              e(i.div, {
                                className: "framer-nv9k97",
                                "data-border": !0,
                                "data-framer-name": "Top Left ",
                                name: "Top Left ",
                                transformTemplate: ae,
                              }),
                              e(i.div, {
                                className: "framer-rytmxj",
                                "data-border": !0,
                                "data-framer-name": "Top Left ",
                                name: "Top Left ",
                                transformTemplate: D,
                              }),
                            ],
                          }),
                        ],
                      }),
                      r(i.div, {
                        className: "framer-12iqkz2",
                        "data-border": !0,
                        "data-framer-name": "Total GPUS",
                        name: "Total GPUS",
                        children: [
                          r(i.div, {
                            className: "framer-11au6x2",
                            "data-framer-name": "Top",
                            name: "Top",
                            children: [
                              r(i.div, {
                                className: "framer-hdinr2",
                                children: [
                                  e(n, {
                                    children: e(o, {
                                      className: "framer-1pat3j5-container",
                                      children: e($, {
                                        color:
                                          "var(--token-abdf8678-0f0a-4e4f-85e9-c710223de2bb, rgb(103, 249, 144))",
                                        height: "100%",
                                        iconSearch: "chip",
                                        iconSelection: "Cpu",
                                        id: "ayQ4n53ar",
                                        layoutId: "ayQ4n53ar",
                                        mirrored: !1,
                                        selectByList: !0,
                                        style: {
                                          height: "100%",
                                          width: "100%",
                                        },
                                        weight: "light",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                  e(n, {
                                    children: e(o, {
                                      className: "framer-1i9eb1b-container",
                                      children: e(z, {
                                        fontSize: 40,
                                        height: "100%",
                                        id: "m0zL0ClsU",
                                        layoutId: "m0zL0ClsU",
                                        Show: "gpus_total",
                                        textAlignment: "left",
                                        textColor:
                                          "var(--token-abdf8678-0f0a-4e4f-85e9-c710223de2bb, rgb(103, 249, 144))",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              r(i.div, {
                                className: "framer-nf52jn",
                                "data-framer-name": "Content",
                                name: "Content",
                                children: [
                                  e(t, {
                                    __fromCanvasComponent: !0,
                                    children: e(a, {
                                      children: e("h6", {
                                        className:
                                          "framer-styles-preset-14n5412",
                                        "data-styles-preset": "H9bHClO9b",
                                        children: "GPUS Being Utilized",
                                      }),
                                    }),
                                    className: "framer-iov82v",
                                    fonts: ["Inter"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                  e(t, {
                                    __fromCanvasComponent: !0,
                                    children: e(a, {
                                      children: e("p", {
                                        className:
                                          "framer-styles-preset-1iyl3hx",
                                        "data-styles-preset": "vnsT7kiZX",
                                        style: {
                                          "--framer-text-color":
                                            "var(--token-50859c1e-b9ab-4124-b93a-6ea1cca8c715, rgb(98, 103, 111))",
                                        },
                                        children:
                                          "Proton miners provide their GPUs to run n.quantum circuits for computational problems",
                                      }),
                                    }),
                                    className: "framer-hzse9i",
                                    fonts: ["Inter"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          r(i.div, {
                            className: "framer-xzj156",
                            "data-framer-name": "Corners",
                            name: "Corners",
                            children: [
                              e(i.div, {
                                className: "framer-uc0tyx",
                                "data-border": !0,
                                "data-framer-name": "Top Left ",
                                name: "Top Left ",
                              }),
                              e(i.div, {
                                className: "framer-qmtltg",
                                "data-border": !0,
                                "data-framer-name": "Top Left ",
                                name: "Top Left ",
                                transformTemplate: re,
                              }),
                              e(i.div, {
                                className: "framer-hjv3eb",
                                "data-border": !0,
                                "data-framer-name": "Top Left ",
                                name: "Top Left ",
                                transformTemplate: ae,
                              }),
                              e(i.div, {
                                className: "framer-o09n6f",
                                "data-border": !0,
                                "data-framer-name": "Top Left ",
                                name: "Top Left ",
                                transformTemplate: D,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              e(l, {
                breakpoint: m,
                overrides: {
                  SkQsu0FoZ: {
                    background: {
                      alt: "",
                      fit: "fit",
                      intrinsicHeight: 3781,
                      intrinsicWidth: 5500,
                      pixelHeight: 3781,
                      pixelWidth: 5500,
                      positionX: "center",
                      positionY: "center",
                      src: "https://framerusercontent.com/images/WmRtO1KxHMUpouSiTABIvVrTfsk.jpg?scale-down-to=1024",
                    },
                  },
                },
                children: r("div", {
                  background: {
                    alt: "",
                    fit: "fit",
                    intrinsicHeight: 3781,
                    intrinsicWidth: 5500,
                    loading: "lazy",
                    pixelHeight: 3781,
                    pixelWidth: 5500,
                    positionX: "center",
                    positionY: "center",
                    src: "https://framerusercontent.com/images/WmRtO1KxHMUpouSiTABIvVrTfsk.jpg?scale-down-to=1024",
                  },
                  className: "framer-1aao2hi",
                  "data-framer-name": "Uber Tech That Works",
                  name: "Uber Tech That Works",
                  children: [
                    e("div", {
                      className: "framer-1q3fxbt",
                      "data-framer-name": "Left",
                      name: "Left",
                      children: e(n, {
                        children: e(o, {
                          className: "framer-29dqaw-container",
                          children: e(Ae, {
                            body1: e(a, {
                              children: e("p", {
                                children:
                                  "Quantum computing algorithms for machine learning harness the power of quantum mechanics to enhance various aspects of machine learning tasks. As both, quantum computing and neuromorphic computing are sharing similar features, these algorithms can also be computed efficiently on the Proton platform directly within Python \u2013 but without the limitations of quantum machines.",
                              }),
                            }),
                            body2: e(a, {
                              children: e("p", {
                                children:
                                  "Fintech companies are using Proton computations for portfolio optimization problems. Pharmaceutical companies use it for protein/RNA folding and drug discovery research in general. Decentralised science at work.",
                              }),
                            }),
                            body3: e(a, {
                              children: r("p", {
                                children: [
                                  e("strong", {
                                    children:
                                      "Quantum Computation of Fluid Dynamics",
                                  }),
                                  " (QCFD): Proton offers an innovative platform for the efficient simulation of Computational Fluid Dynamics (QCFD) and empowers engineers to accelerate the QCFD simulation process, fostering innovation and driving advancements in fields reliant on fluid dynamics analyses.",
                                ],
                              }),
                            }),
                            body4: e(a, {
                              children: e("p", {
                                children:
                                  "n.quantum computers do not face limitations of legacy quantum machines. Operated on traditional hardware (GPUs) at room temperature, there is almost no limitation in number of bits being calculated. Problems with millions of variables and constraints can be computed efficiently on a neuromorphic annealer.",
                              }),
                            }),
                            height: "100%",
                            id: "C3iFBZOew",
                            layoutId: "C3iFBZOew",
                            style: { width: "100%" },
                            title1: "Machine Learning & Optimization",
                            title2: "Fintech & Pharmaceutical",
                            title3:
                              "Automotive, Aerospace, Super-Sports & Space",
                            title4: "n.quantum vs. Quantum",
                            width: "100%",
                          }),
                        }),
                      }),
                    }),
                    e("div", {
                      className: "framer-1ufwnv2",
                      "data-framer-name": "Right",
                      name: "Right",
                      children: r("div", {
                        className: "framer-6alxm2",
                        "data-framer-name": "Masked Title",
                        name: "Masked Title",
                        children: [
                          e(t, {
                            __fromCanvasComponent: !0,
                            children: e(a, {
                              children: e("h2", {
                                className: "framer-styles-preset-1wml6uu",
                                "data-styles-preset": "fVxnimdqP",
                                style: {
                                  "--framer-text-color":
                                    "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                                },
                                children: "Uber Tech That Works",
                              }),
                            }),
                            className: "framer-d9vkt8",
                            fonts: ["Inter"],
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                          e(n, {
                            children: e(o, {
                              className: "framer-svfxd7-container",
                              transformTemplate: Mr,
                              children: e(Ee, {
                                __framer__animateOnce: !1,
                                __framer__obscuredVariantId: "cKtAfc2mS",
                                __framer__threshold: 0.5,
                                __framer__variantAppearEffectEnabled: !0,
                                __framer__visibleVariantId: "BfiNgCzTr",
                                height: "100%",
                                id: "IjFsJR1XS",
                                layoutId: "IjFsJR1XS",
                                style: { height: "100%", width: "100%" },
                                variant: "cKtAfc2mS",
                                width: "100%",
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              r(R, {
                __framer__animate: { transition: Ye },
                __framer__animateOnce: !0,
                __framer__enter: Wr,
                __framer__exit: Or,
                __framer__styleAppearEffectEnabled: !0,
                __framer__threshold: 0.5,
                __perspectiveFX: !1,
                __targetOpacity: 1,
                className: "framer-waaw2j",
                "data-framer-name": "Fair Start",
                name: "Fair Start",
                transformTemplate: x,
                children: [
                  r("div", {
                    className: "framer-asfikv",
                    "data-framer-name": "Masked Title",
                    name: "Masked Title",
                    children: [
                      e(l, {
                        breakpoint: m,
                        overrides: {
                          SkQsu0FoZ: {
                            children: e(a, {
                              children: r("h2", {
                                className: "framer-styles-preset-1wml6uu",
                                "data-styles-preset": "fVxnimdqP",
                                style: {
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color":
                                    "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                                },
                                children: [
                                  "A ",
                                  e("span", {
                                    style: {
                                      "--framer-text-color":
                                        "var(--token-2678ca90-7bcd-460e-87c6-9327e3761be8, rgb(102, 216, 250))",
                                    },
                                    children: "Fair",
                                  }),
                                  " Start",
                                ],
                              }),
                            }),
                          },
                        },
                        children: e(t, {
                          __fromCanvasComponent: !0,
                          children: e(a, {
                            children: r("h2", {
                              className: "framer-styles-preset-1wml6uu",
                              "data-styles-preset": "fVxnimdqP",
                              style: {
                                "--framer-text-alignment": "center",
                                "--framer-text-color":
                                  "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                              },
                              children: [
                                "A ",
                                e("span", {
                                  style: {
                                    "--framer-text-color":
                                      "var(--token-2678ca90-7bcd-460e-87c6-9327e3761be8, rgb(102, 216, 250))",
                                  },
                                  children: "Fair",
                                }),
                                " Start",
                              ],
                            }),
                          }),
                          className: "framer-1qxzb89",
                          fonts: ["Inter"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      }),
                      H() &&
                        e(n, {
                          children: e(o, {
                            className: "framer-t84ruk-container hidden-1bstirn",
                            children: e(N, {
                              baseWidth: "1000px",
                              delay: 0.2,
                              duration: 1,
                              height: "100%",
                              id: "G7Ie4M41z",
                              layoutId: "G7Ie4M41z",
                              style: { height: "100%", width: "100%" },
                              width: "100%",
                            }),
                          }),
                        }),
                    ],
                  }),
                  r("div", {
                    className: "framer-1pgdkho",
                    "data-framer-name": "Content",
                    name: "Content",
                    children: [
                      e(n, {
                        children: e(We, {
                          __framer__animate: { transition: Jr },
                          __framer__animateOnce: !0,
                          __framer__enter: Ge,
                          __framer__exit: Va,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: "framer-1otinth-container",
                          transformTemplate: x,
                          children: e(O, {
                            De81Dd2tF: e(a, {
                              children: e("p", {
                                children:
                                  "Truly fair launch in September 2022 with no ICO, no pre-mining and pre-allocation of coins to the team or investors.",
                              }),
                            }),
                            FXMLloUXk:
                              "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                            height: "100%",
                            HMV4Yoe7M:
                              "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                            id: "cqyTp6MLy",
                            KXaYyhqTQ: "thin",
                            layoutId: "cqyTp6MLy",
                            lFSXA88cV: "No Premine",
                            style: { width: "100%" },
                            tXM8rNFsJ: "HardDrives",
                            width: "100%",
                          }),
                        }),
                      }),
                      e(n, {
                        children: e(We, {
                          __framer__animate: { transition: Yr },
                          __framer__animateOnce: !0,
                          __framer__enter: Ge,
                          __framer__exit: Da,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: "framer-1bo3wg0-container",
                          transformTemplate: x,
                          children: e(O, {
                            De81Dd2tF: e(a, {
                              children: r("p", {
                                children: [
                                  "A maximum of ",
                                  e("strong", { children: "110.000.000 DNX " }),
                                  "utility coins with a deflationary emission schedule.",
                                ],
                              }),
                            }),
                            FXMLloUXk:
                              "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                            height: "100%",
                            HMV4Yoe7M:
                              "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                            id: "qohJSl6Ma",
                            KXaYyhqTQ: "thin",
                            layoutId: "qohJSl6Ma",
                            lFSXA88cV: "Finite Supply",
                            style: { width: "100%" },
                            tXM8rNFsJ: "Database",
                            width: "100%",
                          }),
                        }),
                      }),
                      e(n, {
                        children: e(We, {
                          __framer__animate: { transition: Kr },
                          __framer__animateOnce: !0,
                          __framer__enter: Ge,
                          __framer__exit: Ba,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: "framer-akos1m-container",
                          transformTemplate: x,
                          children: e(O, {
                            De81Dd2tF: e(a, {
                              children: e("p", {
                                children:
                                  "With Proton, mining is channelled through solving real-world problems, with real, proven results.",
                              }),
                            }),
                            FXMLloUXk:
                              "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                            height: "100%",
                            HMV4Yoe7M:
                              "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                            id: "Tsv8SwMjN",
                            KXaYyhqTQ: "thin",
                            layoutId: "Tsv8SwMjN",
                            lFSXA88cV: "Sustainable",
                            style: { width: "100%" },
                            tXM8rNFsJ: "Leaf",
                            width: "100%",
                          }),
                        }),
                      }),
                    ],
                  }),
                  e("div", {
                    className: "framer-uqm8yq",
                    "data-framer-name": "Bottom Line",
                    name: "Bottom Line",
                  }),
                ],
              }),
              e(l, {
                breakpoint: m,
                overrides: {
                  SkQsu0FoZ: {
                    background: {
                      alt: "",
                      fit: "fit",
                      intrinsicHeight: 3781,
                      intrinsicWidth: 5500,
                      pixelHeight: 3781,
                      pixelWidth: 5500,
                      positionX: "center",
                      positionY: "center",
                      src: "https://framerusercontent.com/images/WmRtO1KxHMUpouSiTABIvVrTfsk.jpg?scale-down-to=1024",
                    },
                  },
                },
              }),
              e(l, {
                breakpoint: m,
                overrides: {
                  SkQsu0FoZ: {
                    background: {
                      alt: "",
                      fit: "fit",
                      intrinsicHeight: 3781,
                      intrinsicWidth: 5500,
                      pixelHeight: 3781,
                      pixelWidth: 5500,
                      positionX: "center",
                      positionY: "center",
                      src: "https://framerusercontent.com/images/WmRtO1KxHMUpouSiTABIvVrTfsk.jpg?scale-down-to=1024",
                    },
                  },
                },
              }),
              e(l, {
                breakpoint: m,
                overrides: {
                  SkQsu0FoZ: {
                    background: {
                      alt: "",
                      fit: "fit",
                      intrinsicHeight: 3781,
                      intrinsicWidth: 5500,
                      pixelHeight: 3781,
                      pixelWidth: 5500,
                      positionX: "center",
                      positionY: "center",
                      src: "https://framerusercontent.com/images/WmRtO1KxHMUpouSiTABIvVrTfsk.jpg?scale-down-to=1024",
                    },
                  },
                },
                children: r("div", {
                  background: {
                    alt: "",
                    fit: "fit",
                    intrinsicHeight: 3781,
                    intrinsicWidth: 5500,
                    loading: "lazy",
                    pixelHeight: 3781,
                    pixelWidth: 5500,
                    positionX: "center",
                    positionY: "center",
                    src: "https://framerusercontent.com/images/WmRtO1KxHMUpouSiTABIvVrTfsk.jpg?scale-down-to=1024",
                  },
                  className: "framer-1k27xst",
                  "data-framer-name": "Proton Live",
                  id: le,
                  name: "Proton Live",
                  ref: fe,
                  children: [
                    r("div", {
                      className: "framer-m06t2r",
                      "data-framer-name": "Radii",
                      name: "Radii",
                      children: [
                        e(R, {
                          __framer__animate: { transition: $r },
                          __framer__animateOnce: !0,
                          __framer__enter: Pa,
                          __framer__exit: Qa,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: "framer-aj5ewy",
                          "data-framer-name": "Circle Small",
                          name: "Circle Small",
                          transformTemplate: x,
                          children: e(b, {
                            className: "framer-tsapwp",
                            layout: "position",
                            opacity: 1,
                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 436 436"><g><defs><radialGradient id="idss4257448140_1g-2041446170" cy="0.5" cx="0.5" r="0.5" gradientTransform="translate(0.5, 0.5) scale(1 1) translate(-0.5, -0.5)"><stop offset="0" stop-color="var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White&quot;} */" stop-opacity="1"></stop><stop offset="1" stop-color="var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, rgb(7, 7, 19)) /* {&quot;name&quot;:&quot;Dark BG&quot;} */" stop-opacity="1"></stop></radialGradient></defs><path d="M 218 0.773 C 337.971 0.773 435.227 98.029 435.227 218 C 435.227 337.971 337.971 435.227 218 435.227 C 98.029 435.227 0.773 337.971 0.773 218 C 0.773 98.029 98.029 0.773 218 0.773 Z M 75.221 218 C 75.221 296.855 139.145 360.779 218 360.779 C 296.855 360.779 360.779 296.855 360.779 218 C 360.779 139.145 296.855 75.221 218 75.221 C 139.145 75.221 75.221 139.145 75.221 218 Z" fill="url(#idss4257448140_1g-2041446170)"></path></g></svg>',
                            svgContentId: 4257448140,
                            withExternalLayout: !0,
                          }),
                        }),
                        e(R, {
                          __framer__animate: { transition: ea },
                          __framer__animateOnce: !0,
                          __framer__enter: Xa,
                          __framer__exit: Ga,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: "framer-1vllfer",
                          "data-framer-name": "Circle Big",
                          name: "Circle Big",
                          transformTemplate: x,
                          children: e(b, {
                            className: "framer-1q1qy8o",
                            layout: "position",
                            opacity: 0.5,
                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 974 974"><g><defs><radialGradient id="idss3558243069_1g-2041446170" cy="0.5" cx="0.5" r="0.5" gradientTransform="translate(0.5, 0.5) scale(1 1) translate(-0.5, -0.5)"><stop offset="0" stop-color="var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White&quot;} */" stop-opacity="1"></stop><stop offset="1" stop-color="var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, rgb(7, 7, 19)) /* {&quot;name&quot;:&quot;Dark BG&quot;} */" stop-opacity="1"></stop></radialGradient></defs><path d="M 487 0.235 C 755.695 0.235 973.515 218.167 973.515 487 C 973.515 755.833 755.695 973.765 487 973.765 C 218.305 973.765 0.485 755.833 0.485 487 C 0.485 218.167 218.305 0.235 487 0.235 Z M 167.224 487 C 167.224 663.698 310.393 806.941 487 806.941 C 663.607 806.941 806.776 663.698 806.776 487 C 806.776 310.302 663.607 167.059 487 167.059 C 310.393 167.059 167.224 310.302 167.224 487 Z" fill="url(#idss3558243069_1g-2041446170)"></path></g></svg>',
                            svgContentId: 3558243069,
                            withExternalLayout: !0,
                          }),
                        }),
                      ],
                    }),
                    e(l, {
                      breakpoint: m,
                      overrides: {
                        SkQsu0FoZ: { width: "calc(min(100vw, 1260px) - 48px)" },
                      },
                      children: e(n, {
                        width: "calc(min(100vw, 1260px) - 96px)",
                        children: e(o, {
                          className: "framer-qj37fu-container",
                          id: ra,
                          ref: aa,
                          children: e(l, {
                            breakpoint: m,
                            overrides: { SkQsu0FoZ: { variant: "C4svJfZEf" } },
                            children: e(qe, {
                              height: "100%",
                              id: "MJBjBDvtX",
                              layoutId: "MJBjBDvtX",
                              style: { width: "100%" },
                              variant: "T1EM0HjLo",
                              width: "100%",
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              e("div", {
                className: "framer-rk1k5o",
                "data-framer-name": "Footer Container",
                name: "Footer Container",
                children: e(n, {
                  children: e(o, {
                    className: "framer-zk9ewp-container",
                    children: e(l, {
                      breakpoint: m,
                      overrides: {
                        SkQsu0FoZ: { variant: "CP4euYBms" },
                        TEAVYlFuh: { variant: "aK_4VtDvt" },
                      },
                      children: e(Fe, {
                        height: "100%",
                        id: "wbLoAshBS",
                        layoutId: "wbLoAshBS",
                        style: { width: "100%" },
                        variant: "lKW5sKZWt",
                        width: "100%",
                      }),
                    }),
                  }),
                }),
              }),
              e(u, {
                background: {
                  alt: "",
                  fit: "fill",
                  intrinsicHeight: 1384,
                  intrinsicWidth: 5104,
                  pixelHeight: 1384,
                  pixelWidth: 5104,
                  sizes: "100vw",
                  src: "https://framerusercontent.com/images/ESZPbyHyGeJ6veiCv3wIKEb0bWU.png",
                  srcSet:
                    "https://framerusercontent.com/images/ESZPbyHyGeJ6veiCv3wIKEb0bWU.png?scale-down-to=512 512w,https://framerusercontent.com/images/ESZPbyHyGeJ6veiCv3wIKEb0bWU.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/ESZPbyHyGeJ6veiCv3wIKEb0bWU.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/ESZPbyHyGeJ6veiCv3wIKEb0bWU.png?scale-down-to=4096 4096w,https://framerusercontent.com/images/ESZPbyHyGeJ6veiCv3wIKEb0bWU.png 5104w",
                },
                className: "framer-12urezt",
                "data-framer-name": "GradientBG",
                name: "GradientBG",
              }),
            ],
          }),
          e("div", { className: U(Rr, ...Ke), id: "overlay" }),
        ],
      }),
    });
  }),
  $a = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    `.${Je.bodyClassName}-framer-59oaH { background: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, rgb(7, 7, 19)) /* {"name":"Dark BG"} */; }`,
    ".framer-59oaH.framer-lux5qc, .framer-59oaH .framer-lux5qc { display: block; }",
    ".framer-59oaH.framer-72rtr7 { align-content: center; align-items: center; background-color: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, #070713); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1040px; }",
    ".framer-59oaH .framer-yoc6p9-container { flex: none; height: auto; left: 50%; max-width: 1260px; position: absolute; top: 32px; transform: translateX(-50%); width: 100%; z-index: 10; }",
    ".framer-59oaH .framer-1l2hlm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 36px; height: auto; justify-content: flex-start; overflow: visible; padding: 350px 0px 0px 0px; position: relative; width: 100%; z-index: 3; }",
    ".framer-59oaH .framer-gmnhab { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 760px; overflow: visible; padding: 43px 24px 0px 24px; position: relative; width: 100%; }",
    ".framer-59oaH .framer-1g24mmq-container { bottom: -330px; flex: none; height: 350px; left: -380px; position: absolute; width: 325px; z-index: 1; }",
    ".framer-59oaH .framer-17ma0u2-container { bottom: 120px; flex: none; height: 350px; position: absolute; right: -380px; transform: rotate(180deg); width: 325px; z-index: 1; }",
    ".framer-59oaH .framer-dxpu6x-container { flex: none; height: 350px; left: -493px; position: absolute; top: -359px; width: 325px; z-index: 1; }",
    ".framer-59oaH .framer-1qbo3j0-container { flex: none; height: 350px; position: absolute; right: -480px; top: 157px; transform: rotate(-180deg); width: 325px; z-index: 1; }",
    ".framer-59oaH .framer-x71gk2 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; transform: perspective(1200px); white-space: pre; width: auto; }",
    ".framer-59oaH .framer-m3hnwb, .framer-59oaH .framer-15zfy5q { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; transform: perspective(1200px); white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-59oaH .framer-1cmwgnm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; max-width: 700px; overflow: visible; padding: 0px 24px 0px 24px; position: relative; width: 100%; }",
    ".framer-59oaH .framer-1hvqv1r, .framer-59oaH .framer-165rbn6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-59oaH .framer-p5vvll-container, .framer-59oaH .framer-piydgo-container, .framer-59oaH .framer-1fak2um-container { flex: none; height: 100%; left: 0px; position: absolute; top: 0px; width: 1px; z-index: 1; }",
    ".framer-59oaH .framer-1t1190h { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 1 0 0px; height: auto; position: relative; transform: perspective(1200px); white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }",
    ".framer-59oaH .framer-7p4gz2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 48px; height: min-content; justify-content: center; max-width: 480px; overflow: visible; padding: 2px 2px 2px 2px; position: relative; transform: perspective(1200px); width: 100%; }",
    ".framer-59oaH .framer-xz1v6i-container, .framer-59oaH .framer-f4bgna-container, .framer-59oaH .framer-1i9eb1b-container, .framer-59oaH .framer-1w8uxwx-container, .framer-59oaH .framer-u8auzd-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-59oaH .framer-1oytnjx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 740px; justify-content: center; left: 26px; mix-blend-mode: screen; overflow: visible; padding: 0px 0px 0px 0px; position: absolute; right: 25px; top: 0px; z-index: 2; }",
    ".framer-59oaH .framer-vzkx53-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; }",
    '.framer-59oaH .framer-wl2w7v { align-content: flex-start; align-items: flex-start; box-shadow: 0px 110px 50px -80px var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, #070713) /* {"name":"Dark BG"} */; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; max-width: 1260px; overflow: hidden; padding: 128px 48px 0px 48px; position: relative; transform: perspective(1200px); width: 91%; z-index: 2; }',
    ".framer-59oaH .framer-1hps49o { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: auto; justify-content: center; overflow: visible; padding: 0px 64px 0px 64px; position: relative; width: 100%; }",
    ".framer-59oaH .framer-1hdgrzd { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1px; }",
    ".framer-59oaH .framer-epp99r { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 36px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 148px; }",
    ".framer-59oaH .framer-1d548ck { --border-bottom-width: 1px; --border-color: var(--token-6678d9c0-cf59-4b90-8a3f-78db6c108cce, #222426); --border-left-width: 1px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; border-bottom-left-radius: 5px; flex: none; height: 159px; left: -128px; overflow: hidden; position: absolute; top: -44px; transform: rotate(90deg); width: 38px; will-change: var(--framer-will-change-override, transform); z-index: 1; }",
    ".framer-59oaH .framer-1v2ocji { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 2; }",
    ".framer-59oaH .framer-wycmz1 { --border-bottom-width: 0px; --border-color: var(--token-6678d9c0-cf59-4b90-8a3f-78db6c108cce, #222426); --border-left-width: 1px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; border-bottom-left-radius: 5px; flex: none; height: 157px; overflow: hidden; position: absolute; right: -127px; top: -40px; transform: rotate(90deg); width: 38px; will-change: var(--framer-will-change-override, transform); z-index: 1; }",
    ".framer-59oaH .framer-8omuf9-container { flex: none; height: 100px; position: relative; width: 100%; }",
    ".framer-59oaH .framer-105vrs { height: 48px; opacity: 0.5; overflow: hidden; position: relative; width: 96px; }",
    ".framer-59oaH .framer-m9sjdy { aspect-ratio: 2 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 40px); left: 50%; position: absolute; top: 50%; transform: translate(-50%, -50%); width: 80px; }",
    ".framer-59oaH .framer-1mmcxh8 { height: 48px; opacity: 0.5; overflow: hidden; position: relative; width: 169px; }",
    ".framer-59oaH .framer-10quurr { aspect-ratio: 3.522727272727273 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 40px); left: 50%; position: absolute; top: 50%; transform: translate(-50%, -50%); width: 140px; }",
    ".framer-59oaH .framer-bcyof8 { aspect-ratio: 5.416666666666667 / 1; height: var(--framer-aspect-ratio-supported, 48px); opacity: 0.5; overflow: hidden; position: relative; width: 260px; }",
    ".framer-59oaH .framer-cz98qv { aspect-ratio: 5.416666666666667 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 40px); left: 50%; position: absolute; top: 50%; transform: translate(-50%, -50%); width: 217px; }",
    ".framer-59oaH .framer-15wz42t { height: 48px; opacity: 0.5; overflow: hidden; position: relative; width: 174px; }",
    ".framer-59oaH .framer-hmlcw2 { flex: none; height: 40px; left: calc(50.00000000000002% - 145px / 2); position: absolute; top: calc(50.00000000000002% - 40px / 2); width: 145px; }",
    ".framer-59oaH .framer-13waxsl { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 72px; height: min-content; justify-content: flex-start; max-width: 1260px; overflow: visible; padding: 128px 48px 64px 48px; position: relative; width: 100%; }",
    ".framer-59oaH .framer-gdjx73 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; z-index: 1; }",
    ".framer-59oaH .framer-1uq7zx9 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; z-index: 0; }",
    ".framer-59oaH .framer-1ljvzrd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 32px 0px 0px 0px; position: relative; transform: perspective(1200px); width: 100%; }",
    ".framer-59oaH .framer-1bwjfel, .framer-59oaH .framer-j0qaxp, .framer-59oaH .framer-l9jj21, .framer-59oaH .framer-nuunkr, .framer-59oaH .framer-116kuc9, .framer-59oaH .framer-1y7xgzn, .framer-59oaH .framer-5p9rpg, .framer-59oaH .framer-1ohj4wr, .framer-59oaH .framer-170jr80, .framer-59oaH .framer-11pbhhe, .framer-59oaH .framer-182f17, .framer-59oaH .framer-flzoru, .framer-59oaH .framer-1ph6qxi, .framer-59oaH .framer-m8qu47, .framer-59oaH .framer-1h9iclg, .framer-59oaH .framer-1cs99yy, .framer-59oaH .framer-1s6j0iv, .framer-59oaH .framer-3nm4r2, .framer-59oaH .framer-1iq8wg2, .framer-59oaH .framer-qp5cuq, .framer-59oaH .framer-1i0ihkq, .framer-59oaH .framer-esrf0m, .framer-59oaH .framer-1qc5q51, .framer-59oaH .framer-1gawxhz, .framer-59oaH .framer-1x11g04, .framer-59oaH .framer-zbxxhg, .framer-59oaH .framer-ddewfa, .framer-59oaH .framer-1wxen4i, .framer-59oaH .framer-1dggvrv, .framer-59oaH .framer-em7amh, .framer-59oaH .framer-hw51gi, .framer-59oaH .framer-ejs0wf { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    '.framer-59oaH .framer-2xbl1o { background: linear-gradient(270deg, rgba(98, 103, 111, 0) 0%, var(--token-50859c1e-b9ab-4124-b93a-6ea1cca8c715, rgb(98, 103, 111)) /* {"name":"Proton Faded"} */ 100%); flex: 1 0 0px; height: 1px; overflow: hidden; position: relative; width: 1px; }',
    ".framer-59oaH .framer-129zev6-container { bottom: -338px; flex: none; height: 350px; left: -360px; position: absolute; width: 325px; z-index: 1; }",
    ".framer-59oaH .framer-13esb9d, .framer-59oaH .framer-3xlpi3 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-59oaH .framer-1b88gup, .framer-59oaH .framer-6oricf, .framer-59oaH .framer-122ylt8, .framer-59oaH .framer-mtfi5p, .framer-59oaH .framer-hnanzo, .framer-59oaH .framer-1jhouni { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: auto; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1px; }",
    ".framer-59oaH .framer-ixm5ny-container, .framer-59oaH .framer-1sf77j2-container, .framer-59oaH .framer-1h8e0vg-container, .framer-59oaH .framer-10ioje5-container, .framer-59oaH .framer-1oytp0r-container, .framer-59oaH .framer-1jd2c3a-container, .framer-59oaH .framer-18ftgzr-container, .framer-59oaH .framer-1pat3j5-container { flex: none; height: 48px; position: relative; width: 48px; }",
    ".framer-59oaH .framer-kq351o, .framer-59oaH .framer-1nzi623, .framer-59oaH .framer-1jds1vn, .framer-59oaH .framer-1mqlmln, .framer-59oaH .framer-115u18, .framer-59oaH .framer-165l1et, .framer-59oaH .framer-159e0fv, .framer-59oaH .framer-1npcs7, .framer-59oaH .framer-iov82v, .framer-59oaH .framer-hzse9i, .framer-59oaH .framer-84533w, .framer-59oaH .framer-vdgwnf, .framer-59oaH .framer-q5h6k0, .framer-59oaH .framer-1gfnqj6, .framer-59oaH .framer-15wbja3, .framer-59oaH .framer-1p7hr7, .framer-59oaH .framer-1xefzyd, .framer-59oaH .framer-jepdau, .framer-59oaH .framer-12wv7ks, .framer-59oaH .framer-a44lod, .framer-59oaH .framer-7bmjdm, .framer-59oaH .framer-1wwwvhs, .framer-59oaH .framer-smv662, .framer-59oaH .framer-15hdw3o, .framer-59oaH .framer-wbnfda, .framer-59oaH .framer-1xhyrsb, .framer-59oaH .framer-s1g0s9, .framer-59oaH .framer-1rkrcw3, .framer-59oaH .framer-6rhio3, .framer-59oaH .framer-5d1ehv, .framer-59oaH .framer-7jtf9e { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-59oaH .framer-6eobk2-container { flex: none; height: 100%; left: 0px; position: absolute; top: 0px; width: 100%; z-index: 1; }",
    ".framer-59oaH .framer-1h1t57e { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1px; z-index: 1; }",
    ".framer-59oaH .framer-cppb84 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 550px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-59oaH .framer-swky90 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 36px; height: min-content; justify-content: flex-start; overflow: visible; padding: 48px 0px 12px 0px; position: relative; width: 100%; }",
    ".framer-59oaH .framer-sfeycp-container, .framer-59oaH .framer-m2sbcu-container, .framer-59oaH .framer-8jyirv-container, .framer-59oaH .framer-ozlya8-container, .framer-59oaH .framer-zk9ewp-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }",
    ".framer-59oaH .framer-c9j97n { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 72px; height: auto; justify-content: flex-start; max-width: 1260px; overflow: visible; padding: 64px 48px 64px 48px; position: relative; width: 100%; }",
    ".framer-59oaH .framer-90hoq1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 48px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-59oaH .framer-20tlo3, .framer-59oaH .framer-12iqkz2 { --border-bottom-width: 1px; --border-color: var(--token-6678d9c0-cf59-4b90-8a3f-78db6c108cce, #222426); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }",
    ".framer-59oaH .framer-ggj8zy, .framer-59oaH .framer-11au6x2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 24px 24px 24px 24px; position: relative; width: 100%; z-index: 1; }",
    ".framer-59oaH .framer-o3fo2l, .framer-59oaH .framer-hdinr2 { align-content: center; align-items: center; border-bottom-left-radius: 100px; border-bottom-right-radius: 100px; border-top-left-radius: 100px; border-top-right-radius: 100px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: auto; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: auto; will-change: var(--framer-will-change-override, transform); }",
    ".framer-59oaH .framer-1760fqd, .framer-59oaH .framer-nf52jn { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: auto; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-59oaH .framer-14r4pw8, .framer-59oaH .framer-xzj156, .framer-59oaH .framer-1ruuvin, .framer-59oaH .framer-3nr0x4 { bottom: 0px; flex: none; left: 0px; opacity: 0.4; overflow: hidden; position: absolute; right: 0px; top: 0px; z-index: 0; }",
    ".framer-59oaH .framer-2g9itc, .framer-59oaH .framer-uc0tyx, .framer-59oaH .framer-7f6hsb, .framer-59oaH .framer-mm2lt1 { --border-bottom-width: 0px; --border-color: #ffffff; --border-left-width: 1px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; border-top-left-radius: 3px; flex: none; height: 6px; left: 0px; overflow: hidden; position: absolute; top: 0px; width: 6px; will-change: var(--framer-will-change-override, transform); z-index: 1; }",
    ".framer-59oaH .framer-7nakil, .framer-59oaH .framer-qmtltg, .framer-59oaH .framer-1407dr2, .framer-59oaH .framer-wcfkb4 { --border-bottom-width: 0px; --border-color: #ffffff; --border-left-width: 1px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; border-top-left-radius: 3px; bottom: 0px; flex: none; height: 6px; left: 0px; overflow: hidden; position: absolute; transform: rotate(-90deg); width: 6px; will-change: var(--framer-will-change-override, transform); z-index: 1; }",
    ".framer-59oaH .framer-nv9k97, .framer-59oaH .framer-hjv3eb, .framer-59oaH .framer-kydwxz, .framer-59oaH .framer-1i6ovdk { --border-bottom-width: 0px; --border-color: #ffffff; --border-left-width: 1px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; border-top-left-radius: 3px; flex: none; height: 6px; overflow: hidden; position: absolute; right: 0px; top: 0px; transform: rotate(90deg); width: 6px; will-change: var(--framer-will-change-override, transform); z-index: 1; }",
    ".framer-59oaH .framer-rytmxj, .framer-59oaH .framer-o09n6f, .framer-59oaH .framer-1d7eva, .framer-59oaH .framer-1w75mre { --border-bottom-width: 0px; --border-color: #ffffff; --border-left-width: 1px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; border-top-left-radius: 3px; bottom: 0px; flex: none; height: 6px; overflow: hidden; position: absolute; right: 0px; transform: rotate(180deg); width: 6px; will-change: var(--framer-will-change-override, transform); z-index: 1; }",
    ".framer-59oaH .framer-1aao2hi { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 72px; height: min-content; justify-content: flex-start; max-width: 1260px; min-height: 600px; overflow: visible; padding: 100px 48px 64px 48px; position: relative; width: 100%; }",
    ".framer-59oaH .framer-1q3fxbt { align-content: flex-start; align-items: flex-start; display: flex; flex: 1.1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1px; z-index: 3; }",
    ".framer-59oaH .framer-29dqaw-container { flex: none; height: auto; position: relative; width: 457px; }",
    ".framer-59oaH .framer-1ufwnv2 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; z-index: 3; }",
    ".framer-59oaH .framer-6alxm2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-59oaH .framer-d9vkt8, .framer-59oaH .framer-1qxzb89, .framer-59oaH .framer-n81wjm, .framer-59oaH .framer-1xr19c5 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 0; }",
    ".framer-59oaH .framer-svfxd7-container { flex: none; height: 350px; position: absolute; right: -310px; top: 10px; transform: rotate(-180deg); width: 325px; z-index: 1; }",
    '.framer-59oaH .framer-waaw2j { align-content: flex-start; align-items: flex-start; background: radial-gradient(45.800000000000004% 50% at 51% 91.4%, #0e0e19 0%, var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, rgb(7, 7, 19)) /* {"name":"Dark BG"} */ 100%); box-shadow: 0px 110px 50px -80px var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, #070713) /* {"name":"Dark BG"} */; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; max-width: 1260px; overflow: hidden; padding: 96px 48px 96px 48px; position: relative; transform: perspective(1200px); width: 100%; z-index: 2; }',
    ".framer-59oaH .framer-asfikv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-59oaH .framer-t84ruk-container { flex: none; height: 60px; left: 200px; position: absolute; top: 0px; width: 1px; z-index: 1; }",
    ".framer-59oaH .framer-1pgdkho { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 32px 0px 32px 0px; position: relative; width: 100%; z-index: 3; }",
    ".framer-59oaH .framer-1otinth-container, .framer-59oaH .framer-1bo3wg0-container, .framer-59oaH .framer-akos1m-container { flex: 1 0 0px; height: auto; position: relative; transform: perspective(1200px); width: 1px; }",
    ".framer-59oaH .framer-uqm8yq { background: radial-gradient(31% 50% at 50% 50%, #ffffff 0%, rgba(255, 255, 255, 0) 100%); bottom: 0px; flex: none; height: 1px; left: calc(49.666666666666686% - 150% / 2); opacity: 0.25; overflow: hidden; position: absolute; width: 150%; z-index: 1; }",
    ".framer-59oaH .framer-2u3849, .framer-59oaH .framer-1wuzvkz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; max-width: 1260px; overflow: visible; padding: 72px 48px 48px 48px; position: relative; width: 100%; z-index: 2; }",
    ".framer-59oaH .framer-1qbzkcm, .framer-59oaH .framer-svd88z { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 48px 0px; position: relative; width: 100%; }",
    ".framer-59oaH .framer-d5ign1-container, .framer-59oaH .framer-dyhhg9-container { flex: none; height: 50px; position: relative; width: 536px; }",
    ".framer-59oaH .framer-1yts8uu, .framer-59oaH .framer-1qqav36 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-59oaH .framer-l7dwcz, .framer-59oaH .framer-1otjg5g, .framer-59oaH .framer-1coy4s4, .framer-59oaH .framer-n5988d, .framer-59oaH .framer-12o2n8u, .framer-59oaH .framer-214gmv, .framer-59oaH .framer-6xsbp9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: center; overflow: visible; padding: 16px 16px 16px 16px; position: relative; width: 100%; }",
    ".framer-59oaH .framer-1euo71w, .framer-59oaH .framer-n3taxo, .framer-59oaH .framer-tohowu, .framer-59oaH .framer-1ht84uk, .framer-59oaH .framer-1tl75o8, .framer-59oaH .framer-1frah2n, .framer-59oaH .framer-o6xv5x, .framer-59oaH .framer-1mggadv, .framer-59oaH .framer-3ju12m, .framer-59oaH .framer-1yxbrlg, .framer-59oaH .framer-8aocr8, .framer-59oaH .framer-aydh60, .framer-59oaH .framer-oc6nu9, .framer-59oaH .framer-amobqq, .framer-59oaH .framer-xc0ae1 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1px; }",
    ".framer-59oaH .framer-lw68yl, .framer-59oaH .framer-1uihwhp, .framer-59oaH .framer-lkrwh4, .framer-59oaH .framer-y2f82e, .framer-59oaH .framer-134mja4, .framer-59oaH .framer-3dmgkf, .framer-59oaH .framer-75lr2t, .framer-59oaH .framer-lkh1h, .framer-59oaH .framer-13s56fr, .framer-59oaH .framer-wua674, .framer-59oaH .framer-1p593pb, .framer-59oaH .framer-1na4357, .framer-59oaH .framer-1w6vmuw, .framer-59oaH .framer-14tpb3a, .framer-59oaH .framer-1up6j6q { flex: none; height: 99px; overflow: hidden; position: relative; width: 99px; }",
    ".framer-59oaH .framer-1ta7hw9-container, .framer-59oaH .framer-1v1dj65-container, .framer-59oaH .framer-1b7awv-container, .framer-59oaH .framer-ktrnsw-container, .framer-59oaH .framer-13ftj8x-container, .framer-59oaH .framer-12csoxx-container, .framer-59oaH .framer-ifupkw-container, .framer-59oaH .framer-1qoqnnk-container, .framer-59oaH .framer-1vsu9s3-container, .framer-59oaH .framer-skirv3-container, .framer-59oaH .framer-1l6dsrq-container, .framer-59oaH .framer-72mbjv-container, .framer-59oaH .framer-1xa3mcn-container, .framer-59oaH .framer-1akek9c-container, .framer-59oaH .framer-g4iotm-container { flex: none; height: 100%; left: calc(49.494949494949516% - 100% / 2); position: absolute; top: calc(49.494949494949516% - 100% / 2); width: 100%; z-index: 1; }",
    ".framer-59oaH .framer-luk84a, .framer-59oaH .framer-apdz16, .framer-59oaH .framer-qq1my7, .framer-59oaH .framer-194pq26 { aspect-ratio: 1 / 1; border-bottom-left-radius: 100px; border-bottom-right-radius: 100px; border-top-left-radius: 100px; border-top-right-radius: 100px; flex: none; height: var(--framer-aspect-ratio-supported, 67px); left: 16px; overflow: hidden; position: absolute; top: 16px; width: 67px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-59oaH .framer-cpvguq, .framer-59oaH .framer-15zgx1n, .framer-59oaH .framer-qulu09, .framer-59oaH .framer-bfvmhk, .framer-59oaH .framer-hvploh, .framer-59oaH .framer-1558c70, .framer-59oaH .framer-1win2k5, .framer-59oaH .framer-x8g145, .framer-59oaH .framer-kny6s5, .framer-59oaH .framer-lkqh5i, .framer-59oaH .framer-b4bvtt, .framer-59oaH .framer-1hrcq74, .framer-59oaH .framer-12z7qg3, .framer-59oaH .framer-18lh8r0, .framer-59oaH .framer-19ef4y9 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1px; }",
    ".framer-59oaH .framer-myyikh, .framer-59oaH .framer-17fas6n, .framer-59oaH .framer-1ynq3du, .framer-59oaH .framer-1o01hzb, .framer-59oaH .framer-vaj19m, .framer-59oaH .framer-12imjvo, .framer-59oaH .framer-1r4gnl8, .framer-59oaH .framer-1hky0k9, .framer-59oaH .framer-mm03w8, .framer-59oaH .framer-2dboao, .framer-59oaH .framer-45et93, .framer-59oaH .framer-jycyxu, .framer-59oaH .framer-16pdiw1, .framer-59oaH .framer-1sln6ud, .framer-59oaH .framer-sd2e55 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-59oaH .framer-4yj1zr, .framer-59oaH .framer-ldkrkz, .framer-59oaH .framer-135d1xz, .framer-59oaH .framer-1biwg5v, .framer-59oaH .framer-19cwo35, .framer-59oaH .framer-1rwyspb, .framer-59oaH .framer-naufcl, .framer-59oaH .framer-9sf9ai, .framer-59oaH .framer-1goh2gn { -webkit-filter: grayscale(1); aspect-ratio: 1 / 1; border-bottom-left-radius: 100px; border-bottom-right-radius: 100px; border-top-left-radius: 100px; border-top-right-radius: 100px; filter: grayscale(1); flex: none; height: var(--framer-aspect-ratio-supported, 67px); left: 16px; overflow: hidden; position: absolute; top: 16px; width: 67px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-59oaH .framer-erirss, .framer-59oaH .framer-jsc8co { -webkit-filter: grayscale(1); aspect-ratio: 1 / 1; border-bottom-left-radius: 100px; border-bottom-right-radius: 100px; border-top-left-radius: 100px; border-top-right-radius: 100px; filter: grayscale(1); flex: none; height: var(--framer-aspect-ratio-supported, 67px); left: 16px; overflow: visible; position: absolute; top: 16px; width: 67px; }",
    ".framer-59oaH .framer-1ap6bin { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: center; overflow: visible; padding: 16px 16px 16px 16px; position: relative; width: 100%; }",
    ".framer-59oaH .framer-1k27xst { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; max-width: 1260px; overflow: hidden; padding: 128px 48px 48px 48px; position: relative; scroll-margin-top: 80px; width: 100%; }",
    ".framer-59oaH .framer-1nc3p02 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; z-index: 1; }",
    ".framer-59oaH .framer-ino5al, .framer-59oaH .framer-wet794 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 0; }",
    ".framer-59oaH .framer-1wbwzjd { align-content: center; align-items: center; background-color: var(--token-abdf8678-0f0a-4e4f-85e9-c710223de2bb, #67f990); border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 8px 16px 8px 16px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-59oaH .framer-15fvnio { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 72px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; z-index: 3; }",
    ".framer-59oaH .framer-5qliep { --border-bottom-width: 1px; --border-color: var(--token-6678d9c0-cf59-4b90-8a3f-78db6c108cce, #222426); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background: radial-gradient(35% 33.2% at 65.4% 1.0999999999999999%, rgba(255, 255, 255, 0.05) 0%, hsla(0, 0%, 100%, 0) 100%); border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: flex-start; min-width: 480px; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }",
    ".framer-59oaH .framer-1y4cycf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: center; overflow: hidden; padding: 32px 32px 32px 32px; position: relative; width: 100%; }",
    ".framer-59oaH .framer-1kin63i { align-content: center; align-items: center; background-color: var(--token-abdf8678-0f0a-4e4f-85e9-c710223de2bb, #67f990); border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 24px 16px 24px 15px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-59oaH .framer-1ii50i2, .framer-59oaH .framer-bk5ym4 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: auto; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1px; }",
    ".framer-59oaH .framer-j5x0xd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-59oaH .framer-7muu96 { --border-bottom-width: 1px; --border-color: var(--token-4acb8bf0-ed98-46be-917a-9b6296c54a85, rgba(255, 255, 255, 0.05)); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: auto; justify-content: flex-start; overflow: hidden; padding: 0px 32px 32px 32px; position: relative; width: 1px; }",
    ".framer-59oaH .framer-921zt2-container, .framer-59oaH .framer-1dc6b59-container { flex: none; height: auto; position: relative; width: 100%; }",
    ".framer-59oaH .framer-1pl6uxh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 48px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; z-index: 1; }",
    ".framer-59oaH .framer-fue4fc { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: visible; padding: 32px 32px 32px 32px; position: relative; width: 1px; }",
    ".framer-59oaH .framer-1vda3qu { align-content: center; align-items: center; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 72px; height: auto; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }",
    ".framer-59oaH .framer-16at260 { --border-bottom-width: 1px; --border-color: var(--token-6678d9c0-cf59-4b90-8a3f-78db6c108cce, #222426); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background: radial-gradient(35% 33.2% at 65.4% 1.0999999999999999%, rgba(255, 255, 255, 0.05) 0%, hsla(0, 0%, 100%, 0) 100%); border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1px; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-59oaH .framer-18uvw9o { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 32px 32px 32px 32px; position: relative; width: 100%; z-index: 1; }",
    ".framer-59oaH .framer-xpyxx0 { --border-bottom-width: 1px; --border-color: var(--token-6678d9c0-cf59-4b90-8a3f-78db6c108cce, #1a1c1e); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: var(--token-4acb8bf0-ed98-46be-917a-9b6296c54a85, rgba(255, 255, 255, 0.08)); border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 96px; justify-content: center; overflow: hidden; padding: 12px 12px 12px 12px; position: relative; width: 100px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-59oaH .framer-59cd41 { --border-bottom-width: 0px; --border-color: #222222; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: visible; padding: 32px 32px 32px 32px; position: relative; width: 100%; }",
    ".framer-59oaH .framer-m06t2r { flex: none; height: 1312px; left: -26px; opacity: 0.25; overflow: hidden; position: absolute; right: -26px; top: -747px; z-index: 0; }",
    ".framer-59oaH .framer-aj5ewy { flex: none; height: 470px; left: calc(50.159744408945706% - 470px / 2); overflow: hidden; position: absolute; top: calc(51.37195121951221% - 470px / 2); transform: perspective(1200px); width: 470px; }",
    ".framer-59oaH .framer-tsapwp { flex: none; height: 436px; left: calc(50.00000000000002% - 436px / 2); position: absolute; top: calc(50.00000000000002% - 436px / 2); width: 436px; }",
    ".framer-59oaH .framer-1vllfer { flex: none; height: 974px; left: calc(50.00000000000002% - 974px / 2); overflow: hidden; position: absolute; top: calc(50.00000000000002% - 974px / 2); transform: perspective(1200px); width: 974px; }",
    ".framer-59oaH .framer-1q1qy8o { flex: none; height: 974px; left: calc(50.00000000000002% - 974px / 2); opacity: 0.5; position: absolute; top: calc(50.00000000000002% - 974px / 2); width: 974px; }",
    ".framer-59oaH .framer-qj37fu-container { flex: none; height: auto; position: relative; scroll-margin-top: 80px; width: 100%; }",
    ".framer-59oaH .framer-rk1k5o { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1260px; overflow: hidden; padding: 0px 48px 0px 48px; position: relative; width: 100%; }",
    ".framer-59oaH .framer-12urezt { aspect-ratio: 4 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 260px); left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; z-index: 0; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-59oaH.framer-72rtr7, .framer-59oaH .framer-1l2hlm, .framer-59oaH .framer-gmnhab, .framer-59oaH .framer-1cmwgnm, .framer-59oaH .framer-1hvqv1r, .framer-59oaH .framer-7p4gz2, .framer-59oaH .framer-1oytnjx, .framer-59oaH .framer-wl2w7v, .framer-59oaH .framer-1hps49o, .framer-59oaH .framer-1hdgrzd, .framer-59oaH .framer-epp99r, .framer-59oaH .framer-13waxsl, .framer-59oaH .framer-gdjx73, .framer-59oaH .framer-165rbn6, .framer-59oaH .framer-1ljvzrd, .framer-59oaH .framer-13esb9d, .framer-59oaH .framer-1b88gup, .framer-59oaH .framer-6oricf, .framer-59oaH .framer-122ylt8, .framer-59oaH .framer-3xlpi3, .framer-59oaH .framer-mtfi5p, .framer-59oaH .framer-hnanzo, .framer-59oaH .framer-1jhouni, .framer-59oaH .framer-1h1t57e, .framer-59oaH .framer-swky90, .framer-59oaH .framer-c9j97n, .framer-59oaH .framer-90hoq1, .framer-59oaH .framer-20tlo3, .framer-59oaH .framer-ggj8zy, .framer-59oaH .framer-o3fo2l, .framer-59oaH .framer-1760fqd, .framer-59oaH .framer-12iqkz2, .framer-59oaH .framer-11au6x2, .framer-59oaH .framer-hdinr2, .framer-59oaH .framer-nf52jn, .framer-59oaH .framer-1aao2hi, .framer-59oaH .framer-1q3fxbt, .framer-59oaH .framer-1ufwnv2, .framer-59oaH .framer-6alxm2, .framer-59oaH .framer-waaw2j, .framer-59oaH .framer-asfikv, .framer-59oaH .framer-1pgdkho, .framer-59oaH .framer-2u3849, .framer-59oaH .framer-1qbzkcm, .framer-59oaH .framer-1yts8uu, .framer-59oaH .framer-l7dwcz, .framer-59oaH .framer-1euo71w, .framer-59oaH .framer-cpvguq, .framer-59oaH .framer-myyikh, .framer-59oaH .framer-n3taxo, .framer-59oaH .framer-15zgx1n, .framer-59oaH .framer-17fas6n, .framer-59oaH .framer-1otjg5g, .framer-59oaH .framer-tohowu, .framer-59oaH .framer-qulu09, .framer-59oaH .framer-1ynq3du, .framer-59oaH .framer-1ht84uk, .framer-59oaH .framer-bfvmhk, .framer-59oaH .framer-1o01hzb, .framer-59oaH .framer-1coy4s4, .framer-59oaH .framer-1tl75o8, .framer-59oaH .framer-hvploh, .framer-59oaH .framer-vaj19m, .framer-59oaH .framer-1frah2n, .framer-59oaH .framer-1558c70, .framer-59oaH .framer-12imjvo, .framer-59oaH .framer-n5988d, .framer-59oaH .framer-o6xv5x, .framer-59oaH .framer-1win2k5, .framer-59oaH .framer-1r4gnl8, .framer-59oaH .framer-1mggadv, .framer-59oaH .framer-x8g145, .framer-59oaH .framer-1hky0k9, .framer-59oaH .framer-12o2n8u, .framer-59oaH .framer-3ju12m, .framer-59oaH .framer-kny6s5, .framer-59oaH .framer-mm03w8, .framer-59oaH .framer-1yxbrlg, .framer-59oaH .framer-lkqh5i, .framer-59oaH .framer-2dboao, .framer-59oaH .framer-1wuzvkz, .framer-59oaH .framer-svd88z, .framer-59oaH .framer-1qqav36, .framer-59oaH .framer-214gmv, .framer-59oaH .framer-8aocr8, .framer-59oaH .framer-b4bvtt, .framer-59oaH .framer-45et93, .framer-59oaH .framer-aydh60, .framer-59oaH .framer-1hrcq74, .framer-59oaH .framer-jycyxu, .framer-59oaH .framer-1ap6bin, .framer-59oaH .framer-oc6nu9, .framer-59oaH .framer-12z7qg3, .framer-59oaH .framer-16pdiw1, .framer-59oaH .framer-amobqq, .framer-59oaH .framer-18lh8r0, .framer-59oaH .framer-1sln6ud, .framer-59oaH .framer-6xsbp9, .framer-59oaH .framer-xc0ae1, .framer-59oaH .framer-19ef4y9, .framer-59oaH .framer-sd2e55, .framer-59oaH .framer-1k27xst, .framer-59oaH .framer-1nc3p02, .framer-59oaH .framer-1wbwzjd, .framer-59oaH .framer-15fvnio, .framer-59oaH .framer-5qliep, .framer-59oaH .framer-1y4cycf, .framer-59oaH .framer-1kin63i, .framer-59oaH .framer-1ii50i2, .framer-59oaH .framer-j5x0xd, .framer-59oaH .framer-7muu96, .framer-59oaH .framer-1pl6uxh, .framer-59oaH .framer-fue4fc, .framer-59oaH .framer-1vda3qu, .framer-59oaH .framer-16at260, .framer-59oaH .framer-18uvw9o, .framer-59oaH .framer-xpyxx0, .framer-59oaH .framer-bk5ym4, .framer-59oaH .framer-59cd41, .framer-59oaH .framer-rk1k5o { gap: 0px; } .framer-59oaH.framer-72rtr7 > *, .framer-59oaH .framer-20tlo3 > *, .framer-59oaH .framer-12iqkz2 > *, .framer-59oaH .framer-5qliep > *, .framer-59oaH .framer-16at260 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-59oaH.framer-72rtr7 > :first-child, .framer-59oaH .framer-1l2hlm > :first-child, .framer-59oaH .framer-gmnhab > :first-child, .framer-59oaH .framer-1cmwgnm > :first-child, .framer-59oaH .framer-wl2w7v > :first-child, .framer-59oaH .framer-1hdgrzd > :first-child, .framer-59oaH .framer-gdjx73 > :first-child, .framer-59oaH .framer-1b88gup > :first-child, .framer-59oaH .framer-6oricf > :first-child, .framer-59oaH .framer-122ylt8 > :first-child, .framer-59oaH .framer-mtfi5p > :first-child, .framer-59oaH .framer-hnanzo > :first-child, .framer-59oaH .framer-1jhouni > :first-child, .framer-59oaH .framer-1h1t57e > :first-child, .framer-59oaH .framer-c9j97n > :first-child, .framer-59oaH .framer-20tlo3 > :first-child, .framer-59oaH .framer-ggj8zy > :first-child, .framer-59oaH .framer-1760fqd > :first-child, .framer-59oaH .framer-12iqkz2 > :first-child, .framer-59oaH .framer-11au6x2 > :first-child, .framer-59oaH .framer-nf52jn > :first-child, .framer-59oaH .framer-1q3fxbt > :first-child, .framer-59oaH .framer-1ufwnv2 > :first-child, .framer-59oaH .framer-6alxm2 > :first-child, .framer-59oaH .framer-waaw2j > :first-child, .framer-59oaH .framer-asfikv > :first-child, .framer-59oaH .framer-2u3849 > :first-child, .framer-59oaH .framer-1qbzkcm > :first-child, .framer-59oaH .framer-1yts8uu > :first-child, .framer-59oaH .framer-cpvguq > :first-child, .framer-59oaH .framer-myyikh > :first-child, .framer-59oaH .framer-15zgx1n > :first-child, .framer-59oaH .framer-17fas6n > :first-child, .framer-59oaH .framer-qulu09 > :first-child, .framer-59oaH .framer-1ynq3du > :first-child, .framer-59oaH .framer-bfvmhk > :first-child, .framer-59oaH .framer-1o01hzb > :first-child, .framer-59oaH .framer-hvploh > :first-child, .framer-59oaH .framer-vaj19m > :first-child, .framer-59oaH .framer-1558c70 > :first-child, .framer-59oaH .framer-12imjvo > :first-child, .framer-59oaH .framer-1win2k5 > :first-child, .framer-59oaH .framer-1r4gnl8 > :first-child, .framer-59oaH .framer-x8g145 > :first-child, .framer-59oaH .framer-1hky0k9 > :first-child, .framer-59oaH .framer-kny6s5 > :first-child, .framer-59oaH .framer-mm03w8 > :first-child, .framer-59oaH .framer-lkqh5i > :first-child, .framer-59oaH .framer-2dboao > :first-child, .framer-59oaH .framer-1wuzvkz > :first-child, .framer-59oaH .framer-svd88z > :first-child, .framer-59oaH .framer-1qqav36 > :first-child, .framer-59oaH .framer-b4bvtt > :first-child, .framer-59oaH .framer-45et93 > :first-child, .framer-59oaH .framer-1hrcq74 > :first-child, .framer-59oaH .framer-jycyxu > :first-child, .framer-59oaH .framer-12z7qg3 > :first-child, .framer-59oaH .framer-16pdiw1 > :first-child, .framer-59oaH .framer-18lh8r0 > :first-child, .framer-59oaH .framer-1sln6ud > :first-child, .framer-59oaH .framer-19ef4y9 > :first-child, .framer-59oaH .framer-sd2e55 > :first-child, .framer-59oaH .framer-1k27xst > :first-child, .framer-59oaH .framer-5qliep > :first-child, .framer-59oaH .framer-1kin63i > :first-child, .framer-59oaH .framer-1ii50i2 > :first-child, .framer-59oaH .framer-7muu96 > :first-child, .framer-59oaH .framer-1vda3qu > :first-child, .framer-59oaH .framer-16at260 > :first-child, .framer-59oaH .framer-xpyxx0 > :first-child, .framer-59oaH .framer-bk5ym4 > :first-child { margin-top: 0px; } .framer-59oaH.framer-72rtr7 > :last-child, .framer-59oaH .framer-1l2hlm > :last-child, .framer-59oaH .framer-gmnhab > :last-child, .framer-59oaH .framer-1cmwgnm > :last-child, .framer-59oaH .framer-wl2w7v > :last-child, .framer-59oaH .framer-1hdgrzd > :last-child, .framer-59oaH .framer-gdjx73 > :last-child, .framer-59oaH .framer-1b88gup > :last-child, .framer-59oaH .framer-6oricf > :last-child, .framer-59oaH .framer-122ylt8 > :last-child, .framer-59oaH .framer-mtfi5p > :last-child, .framer-59oaH .framer-hnanzo > :last-child, .framer-59oaH .framer-1jhouni > :last-child, .framer-59oaH .framer-1h1t57e > :last-child, .framer-59oaH .framer-c9j97n > :last-child, .framer-59oaH .framer-20tlo3 > :last-child, .framer-59oaH .framer-ggj8zy > :last-child, .framer-59oaH .framer-1760fqd > :last-child, .framer-59oaH .framer-12iqkz2 > :last-child, .framer-59oaH .framer-11au6x2 > :last-child, .framer-59oaH .framer-nf52jn > :last-child, .framer-59oaH .framer-1q3fxbt > :last-child, .framer-59oaH .framer-1ufwnv2 > :last-child, .framer-59oaH .framer-6alxm2 > :last-child, .framer-59oaH .framer-waaw2j > :last-child, .framer-59oaH .framer-asfikv > :last-child, .framer-59oaH .framer-2u3849 > :last-child, .framer-59oaH .framer-1qbzkcm > :last-child, .framer-59oaH .framer-1yts8uu > :last-child, .framer-59oaH .framer-cpvguq > :last-child, .framer-59oaH .framer-myyikh > :last-child, .framer-59oaH .framer-15zgx1n > :last-child, .framer-59oaH .framer-17fas6n > :last-child, .framer-59oaH .framer-qulu09 > :last-child, .framer-59oaH .framer-1ynq3du > :last-child, .framer-59oaH .framer-bfvmhk > :last-child, .framer-59oaH .framer-1o01hzb > :last-child, .framer-59oaH .framer-hvploh > :last-child, .framer-59oaH .framer-vaj19m > :last-child, .framer-59oaH .framer-1558c70 > :last-child, .framer-59oaH .framer-12imjvo > :last-child, .framer-59oaH .framer-1win2k5 > :last-child, .framer-59oaH .framer-1r4gnl8 > :last-child, .framer-59oaH .framer-x8g145 > :last-child, .framer-59oaH .framer-1hky0k9 > :last-child, .framer-59oaH .framer-kny6s5 > :last-child, .framer-59oaH .framer-mm03w8 > :last-child, .framer-59oaH .framer-lkqh5i > :last-child, .framer-59oaH .framer-2dboao > :last-child, .framer-59oaH .framer-1wuzvkz > :last-child, .framer-59oaH .framer-svd88z > :last-child, .framer-59oaH .framer-1qqav36 > :last-child, .framer-59oaH .framer-b4bvtt > :last-child, .framer-59oaH .framer-45et93 > :last-child, .framer-59oaH .framer-1hrcq74 > :last-child, .framer-59oaH .framer-jycyxu > :last-child, .framer-59oaH .framer-12z7qg3 > :last-child, .framer-59oaH .framer-16pdiw1 > :last-child, .framer-59oaH .framer-18lh8r0 > :last-child, .framer-59oaH .framer-1sln6ud > :last-child, .framer-59oaH .framer-19ef4y9 > :last-child, .framer-59oaH .framer-sd2e55 > :last-child, .framer-59oaH .framer-1k27xst > :last-child, .framer-59oaH .framer-5qliep > :last-child, .framer-59oaH .framer-1kin63i > :last-child, .framer-59oaH .framer-1ii50i2 > :last-child, .framer-59oaH .framer-7muu96 > :last-child, .framer-59oaH .framer-1vda3qu > :last-child, .framer-59oaH .framer-16at260 > :last-child, .framer-59oaH .framer-xpyxx0 > :last-child, .framer-59oaH .framer-bk5ym4 > :last-child { margin-bottom: 0px; } .framer-59oaH .framer-1l2hlm > *, .framer-59oaH .framer-1qbzkcm > *, .framer-59oaH .framer-svd88z > * { margin: 0px; margin-bottom: calc(36px / 2); margin-top: calc(36px / 2); } .framer-59oaH .framer-gmnhab > *, .framer-59oaH .framer-1h1t57e > *, .framer-59oaH .framer-6alxm2 > *, .framer-59oaH .framer-asfikv > *, .framer-59oaH .framer-1kin63i > *, .framer-59oaH .framer-xpyxx0 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-59oaH .framer-1cmwgnm > *, .framer-59oaH .framer-wl2w7v > *, .framer-59oaH .framer-waaw2j > *, .framer-59oaH .framer-1k27xst > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-59oaH .framer-1hvqv1r > *, .framer-59oaH .framer-1oytnjx > *, .framer-59oaH .framer-epp99r > *, .framer-59oaH .framer-165rbn6 > *, .framer-59oaH .framer-1wbwzjd > *, .framer-59oaH .framer-rk1k5o > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-59oaH .framer-1hvqv1r > :first-child, .framer-59oaH .framer-7p4gz2 > :first-child, .framer-59oaH .framer-1oytnjx > :first-child, .framer-59oaH .framer-1hps49o > :first-child, .framer-59oaH .framer-epp99r > :first-child, .framer-59oaH .framer-13waxsl > :first-child, .framer-59oaH .framer-165rbn6 > :first-child, .framer-59oaH .framer-1ljvzrd > :first-child, .framer-59oaH .framer-13esb9d > :first-child, .framer-59oaH .framer-3xlpi3 > :first-child, .framer-59oaH .framer-swky90 > :first-child, .framer-59oaH .framer-90hoq1 > :first-child, .framer-59oaH .framer-o3fo2l > :first-child, .framer-59oaH .framer-hdinr2 > :first-child, .framer-59oaH .framer-1aao2hi > :first-child, .framer-59oaH .framer-1pgdkho > :first-child, .framer-59oaH .framer-l7dwcz > :first-child, .framer-59oaH .framer-1euo71w > :first-child, .framer-59oaH .framer-n3taxo > :first-child, .framer-59oaH .framer-1otjg5g > :first-child, .framer-59oaH .framer-tohowu > :first-child, .framer-59oaH .framer-1ht84uk > :first-child, .framer-59oaH .framer-1coy4s4 > :first-child, .framer-59oaH .framer-1tl75o8 > :first-child, .framer-59oaH .framer-1frah2n > :first-child, .framer-59oaH .framer-n5988d > :first-child, .framer-59oaH .framer-o6xv5x > :first-child, .framer-59oaH .framer-1mggadv > :first-child, .framer-59oaH .framer-12o2n8u > :first-child, .framer-59oaH .framer-3ju12m > :first-child, .framer-59oaH .framer-1yxbrlg > :first-child, .framer-59oaH .framer-214gmv > :first-child, .framer-59oaH .framer-8aocr8 > :first-child, .framer-59oaH .framer-aydh60 > :first-child, .framer-59oaH .framer-1ap6bin > :first-child, .framer-59oaH .framer-oc6nu9 > :first-child, .framer-59oaH .framer-amobqq > :first-child, .framer-59oaH .framer-6xsbp9 > :first-child, .framer-59oaH .framer-xc0ae1 > :first-child, .framer-59oaH .framer-1nc3p02 > :first-child, .framer-59oaH .framer-1wbwzjd > :first-child, .framer-59oaH .framer-15fvnio > :first-child, .framer-59oaH .framer-1y4cycf > :first-child, .framer-59oaH .framer-j5x0xd > :first-child, .framer-59oaH .framer-1pl6uxh > :first-child, .framer-59oaH .framer-fue4fc > :first-child, .framer-59oaH .framer-18uvw9o > :first-child, .framer-59oaH .framer-59cd41 > :first-child, .framer-59oaH .framer-rk1k5o > :first-child { margin-left: 0px; } .framer-59oaH .framer-1hvqv1r > :last-child, .framer-59oaH .framer-7p4gz2 > :last-child, .framer-59oaH .framer-1oytnjx > :last-child, .framer-59oaH .framer-1hps49o > :last-child, .framer-59oaH .framer-epp99r > :last-child, .framer-59oaH .framer-13waxsl > :last-child, .framer-59oaH .framer-165rbn6 > :last-child, .framer-59oaH .framer-1ljvzrd > :last-child, .framer-59oaH .framer-13esb9d > :last-child, .framer-59oaH .framer-3xlpi3 > :last-child, .framer-59oaH .framer-swky90 > :last-child, .framer-59oaH .framer-90hoq1 > :last-child, .framer-59oaH .framer-o3fo2l > :last-child, .framer-59oaH .framer-hdinr2 > :last-child, .framer-59oaH .framer-1aao2hi > :last-child, .framer-59oaH .framer-1pgdkho > :last-child, .framer-59oaH .framer-l7dwcz > :last-child, .framer-59oaH .framer-1euo71w > :last-child, .framer-59oaH .framer-n3taxo > :last-child, .framer-59oaH .framer-1otjg5g > :last-child, .framer-59oaH .framer-tohowu > :last-child, .framer-59oaH .framer-1ht84uk > :last-child, .framer-59oaH .framer-1coy4s4 > :last-child, .framer-59oaH .framer-1tl75o8 > :last-child, .framer-59oaH .framer-1frah2n > :last-child, .framer-59oaH .framer-n5988d > :last-child, .framer-59oaH .framer-o6xv5x > :last-child, .framer-59oaH .framer-1mggadv > :last-child, .framer-59oaH .framer-12o2n8u > :last-child, .framer-59oaH .framer-3ju12m > :last-child, .framer-59oaH .framer-1yxbrlg > :last-child, .framer-59oaH .framer-214gmv > :last-child, .framer-59oaH .framer-8aocr8 > :last-child, .framer-59oaH .framer-aydh60 > :last-child, .framer-59oaH .framer-1ap6bin > :last-child, .framer-59oaH .framer-oc6nu9 > :last-child, .framer-59oaH .framer-amobqq > :last-child, .framer-59oaH .framer-6xsbp9 > :last-child, .framer-59oaH .framer-xc0ae1 > :last-child, .framer-59oaH .framer-1nc3p02 > :last-child, .framer-59oaH .framer-1wbwzjd > :last-child, .framer-59oaH .framer-15fvnio > :last-child, .framer-59oaH .framer-1y4cycf > :last-child, .framer-59oaH .framer-j5x0xd > :last-child, .framer-59oaH .framer-1pl6uxh > :last-child, .framer-59oaH .framer-fue4fc > :last-child, .framer-59oaH .framer-18uvw9o > :last-child, .framer-59oaH .framer-59cd41 > :last-child, .framer-59oaH .framer-rk1k5o > :last-child { margin-right: 0px; } .framer-59oaH .framer-7p4gz2 > *, .framer-59oaH .framer-13esb9d > *, .framer-59oaH .framer-3xlpi3 > *, .framer-59oaH .framer-1pl6uxh > * { margin: 0px; margin-left: calc(48px / 2); margin-right: calc(48px / 2); } .framer-59oaH .framer-1hps49o > *, .framer-59oaH .framer-90hoq1 > *, .framer-59oaH .framer-j5x0xd > *, .framer-59oaH .framer-fue4fc > *, .framer-59oaH .framer-59cd41 > * { margin: 0px; margin-left: calc(32px / 2); margin-right: calc(32px / 2); } .framer-59oaH .framer-1hdgrzd > *, .framer-59oaH .framer-gdjx73 > *, .framer-59oaH .framer-1ufwnv2 > *, .framer-59oaH .framer-2u3849 > *, .framer-59oaH .framer-1wuzvkz > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-59oaH .framer-13waxsl > *, .framer-59oaH .framer-1aao2hi > *, .framer-59oaH .framer-15fvnio > * { margin: 0px; margin-left: calc(72px / 2); margin-right: calc(72px / 2); } .framer-59oaH .framer-1ljvzrd > *, .framer-59oaH .framer-1euo71w > *, .framer-59oaH .framer-n3taxo > *, .framer-59oaH .framer-tohowu > *, .framer-59oaH .framer-1ht84uk > *, .framer-59oaH .framer-1tl75o8 > *, .framer-59oaH .framer-1frah2n > *, .framer-59oaH .framer-o6xv5x > *, .framer-59oaH .framer-1mggadv > *, .framer-59oaH .framer-3ju12m > *, .framer-59oaH .framer-1yxbrlg > *, .framer-59oaH .framer-8aocr8 > *, .framer-59oaH .framer-aydh60 > *, .framer-59oaH .framer-oc6nu9 > *, .framer-59oaH .framer-amobqq > *, .framer-59oaH .framer-xc0ae1 > *, .framer-59oaH .framer-1nc3p02 > *, .framer-59oaH .framer-18uvw9o > * { margin: 0px; margin-left: calc(24px / 2); margin-right: calc(24px / 2); } .framer-59oaH .framer-1b88gup > *, .framer-59oaH .framer-6oricf > *, .framer-59oaH .framer-122ylt8 > *, .framer-59oaH .framer-mtfi5p > *, .framer-59oaH .framer-hnanzo > *, .framer-59oaH .framer-1jhouni > *, .framer-59oaH .framer-1yts8uu > *, .framer-59oaH .framer-1qqav36 > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-59oaH .framer-swky90 > *, .framer-59oaH .framer-1y4cycf > * { margin: 0px; margin-left: calc(36px / 2); margin-right: calc(36px / 2); } .framer-59oaH .framer-c9j97n > *, .framer-59oaH .framer-1vda3qu > * { margin: 0px; margin-bottom: calc(72px / 2); margin-top: calc(72px / 2); } .framer-59oaH .framer-ggj8zy > *, .framer-59oaH .framer-11au6x2 > *, .framer-59oaH .framer-cpvguq > *, .framer-59oaH .framer-15zgx1n > *, .framer-59oaH .framer-qulu09 > *, .framer-59oaH .framer-bfvmhk > *, .framer-59oaH .framer-hvploh > *, .framer-59oaH .framer-1558c70 > *, .framer-59oaH .framer-1win2k5 > *, .framer-59oaH .framer-x8g145 > *, .framer-59oaH .framer-kny6s5 > *, .framer-59oaH .framer-lkqh5i > *, .framer-59oaH .framer-b4bvtt > *, .framer-59oaH .framer-1hrcq74 > *, .framer-59oaH .framer-12z7qg3 > *, .framer-59oaH .framer-18lh8r0 > *, .framer-59oaH .framer-19ef4y9 > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-59oaH .framer-o3fo2l > *, .framer-59oaH .framer-hdinr2 > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-59oaH .framer-1760fqd > *, .framer-59oaH .framer-nf52jn > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-59oaH .framer-1q3fxbt > * { margin: 0px; margin-bottom: calc(100px / 2); margin-top: calc(100px / 2); } .framer-59oaH .framer-1pgdkho > *, .framer-59oaH .framer-l7dwcz > *, .framer-59oaH .framer-1otjg5g > *, .framer-59oaH .framer-1coy4s4 > *, .framer-59oaH .framer-n5988d > *, .framer-59oaH .framer-12o2n8u > *, .framer-59oaH .framer-214gmv > *, .framer-59oaH .framer-1ap6bin > *, .framer-59oaH .framer-6xsbp9 > * { margin: 0px; margin-left: calc(64px / 2); margin-right: calc(64px / 2); } .framer-59oaH .framer-myyikh > *, .framer-59oaH .framer-17fas6n > *, .framer-59oaH .framer-1ynq3du > *, .framer-59oaH .framer-1o01hzb > *, .framer-59oaH .framer-vaj19m > *, .framer-59oaH .framer-12imjvo > *, .framer-59oaH .framer-1r4gnl8 > *, .framer-59oaH .framer-1hky0k9 > *, .framer-59oaH .framer-mm03w8 > *, .framer-59oaH .framer-2dboao > *, .framer-59oaH .framer-45et93 > *, .framer-59oaH .framer-jycyxu > *, .framer-59oaH .framer-16pdiw1 > *, .framer-59oaH .framer-1sln6ud > *, .framer-59oaH .framer-sd2e55 > * { margin: 0px; margin-bottom: calc(4px / 2); margin-top: calc(4px / 2); } .framer-59oaH .framer-1ii50i2 > *, .framer-59oaH .framer-7muu96 > *, .framer-59oaH .framer-bk5ym4 > * { margin: 0px; margin-bottom: calc(12px / 2); margin-top: calc(12px / 2); } }",
    "@media (min-width: 1040px) { .framer-59oaH .hidden-72rtr7 { display: none !important; } }",
    `@media (max-width: 767px) { .framer-59oaH .hidden-1bstirn { display: none !important; } .${Je.bodyClassName}-framer-59oaH { background: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, rgb(7, 7, 19)) /* {"name":"Dark BG"} */; } .framer-59oaH.framer-72rtr7 { width: 374px; } .framer-59oaH .framer-yoc6p9-container { top: 0px; } .framer-59oaH .framer-1l2hlm { gap: 24px; padding: 230px 0px 0px 0px; } .framer-59oaH .framer-x71gk2 { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-59oaH .framer-7p4gz2 { flex-direction: column; gap: 24px; justify-content: flex-start; padding: 0px 0px 0px 0px; } .framer-59oaH .framer-xz1v6i-container, .framer-59oaH .framer-29dqaw-container, .framer-59oaH .framer-u8auzd-container { width: 100%; } .framer-59oaH .framer-1oytnjx { align-content: flex-start; align-items: flex-start; height: 500px; justify-content: flex-start; left: calc(50.00000000000002% - 449px / 2); right: unset; width: 449px; } .framer-59oaH .framer-vzkx53-container { flex: none; height: 470px; width: 100%; } .framer-59oaH .framer-wl2w7v, .framer-59oaH .framer-waaw2j { padding: 64px 24px 72px 24px; } .framer-59oaH .framer-1hps49o { padding: 0px 0px 0px 0px; } .framer-59oaH .framer-1v2ocji { flex: 1 0 0px; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; } .framer-59oaH .framer-13waxsl { flex-direction: column; justify-content: center; padding: 128px 24px 64px 24px; } .framer-59oaH .framer-gdjx73, .framer-59oaH .framer-1h1t57e { flex: none; max-width: 100%; width: 100%; } .framer-59oaH .framer-13esb9d { flex-wrap: wrap; } .framer-59oaH .framer-1b88gup, .framer-59oaH .framer-6oricf, .framer-59oaH .framer-122ylt8 { flex: none; width: auto; } .framer-59oaH .framer-kq351o, .framer-59oaH .framer-1nzi623, .framer-59oaH .framer-1jds1vn { white-space: pre; width: auto; } .framer-59oaH .framer-6eobk2-container { height: 142px; } .framer-59oaH .framer-3xlpi3 { align-content: unset; align-items: unset; display: grid; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(130px, 1fr)); grid-template-rows: repeat(1, min-content); justify-content: start; } .framer-59oaH .framer-mtfi5p, .framer-59oaH .framer-hnanzo, .framer-59oaH .framer-1jhouni { align-self: start; flex: none; justify-self: start; width: 100%; } .framer-59oaH .framer-swky90 { align-content: flex-start; align-items: flex-start; flex-direction: column; } .framer-59oaH .framer-sfeycp-container, .framer-59oaH .framer-m2sbcu-container, .framer-59oaH .framer-20tlo3, .framer-59oaH .framer-12iqkz2, .framer-59oaH .framer-1otinth-container, .framer-59oaH .framer-1bo3wg0-container, .framer-59oaH .framer-akos1m-container, .framer-59oaH .framer-cpvguq, .framer-59oaH .framer-15zgx1n, .framer-59oaH .framer-qulu09, .framer-59oaH .framer-bfvmhk, .framer-59oaH .framer-hvploh, .framer-59oaH .framer-1558c70, .framer-59oaH .framer-1win2k5, .framer-59oaH .framer-x8g145, .framer-59oaH .framer-kny6s5, .framer-59oaH .framer-lkqh5i, .framer-59oaH .framer-b4bvtt, .framer-59oaH .framer-1hrcq74, .framer-59oaH .framer-12z7qg3, .framer-59oaH .framer-18lh8r0, .framer-59oaH .framer-19ef4y9, .framer-59oaH .framer-1ii50i2, .framer-59oaH .framer-8jyirv-container { flex: none; width: 100%; } .framer-59oaH .framer-c9j97n { padding: 48px 24px 48px 24px; } .framer-59oaH .framer-90hoq1, .framer-59oaH .framer-1pgdkho, .framer-59oaH .framer-l7dwcz, .framer-59oaH .framer-1otjg5g, .framer-59oaH .framer-1coy4s4, .framer-59oaH .framer-n5988d, .framer-59oaH .framer-12o2n8u, .framer-59oaH .framer-214gmv, .framer-59oaH .framer-1ap6bin, .framer-59oaH .framer-6xsbp9, .framer-59oaH .framer-1pl6uxh { flex-direction: column; } .framer-59oaH .framer-1aao2hi { flex-direction: column; gap: 48px; padding: 64px 24px 64px 24px; } .framer-59oaH .framer-1q3fxbt { flex: none; order: 2; width: 100%; } .framer-59oaH .framer-1ufwnv2 { flex: none; order: 1; width: 100%; } .framer-59oaH .framer-1euo71w, .framer-59oaH .framer-n3taxo, .framer-59oaH .framer-tohowu, .framer-59oaH .framer-1ht84uk, .framer-59oaH .framer-1tl75o8, .framer-59oaH .framer-1frah2n, .framer-59oaH .framer-o6xv5x, .framer-59oaH .framer-1mggadv, .framer-59oaH .framer-3ju12m, .framer-59oaH .framer-1yxbrlg, .framer-59oaH .framer-8aocr8, .framer-59oaH .framer-aydh60, .framer-59oaH .framer-oc6nu9, .framer-59oaH .framer-amobqq, .framer-59oaH .framer-xc0ae1 { flex: none; flex-direction: column; width: 100%; } .framer-59oaH .framer-1k27xst { padding: 72px 24px 27px 24px; } .framer-59oaH .framer-15fvnio { flex-direction: column; gap: 48px; } .framer-59oaH .framer-5qliep { flex: none; flex-wrap: wrap; min-width: 100%; width: 100%; } .framer-59oaH .framer-1y4cycf { align-content: flex-start; align-items: flex-start; flex-direction: column; flex-wrap: wrap; justify-content: flex-start; padding: 24px 24px 24px 24px; } .framer-59oaH .framer-7muu96 { padding: 0px 24px 24px 24px; } .framer-59oaH .framer-fue4fc { flex: none; flex-direction: column; padding: 24px 24px 24px 24px; width: 100%; } .framer-59oaH .framer-1vda3qu { align-self: unset; flex: none; gap: 24px; height: min-content; width: 100%; } .framer-59oaH .framer-16at260 { flex: none; flex-wrap: wrap; height: auto; } .framer-59oaH .framer-18uvw9o { flex-wrap: wrap; padding: 24px 24px 24px 24px; } .framer-59oaH .framer-bk5ym4 { align-self: stretch; justify-content: center; } .framer-59oaH .framer-rk1k5o { padding: 0px 24px 0px 24px; } .framer-59oaH .framer-12urezt { height: var(--framer-aspect-ratio-supported, 450px); } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-59oaH .framer-1l2hlm, .framer-59oaH .framer-7p4gz2, .framer-59oaH .framer-13waxsl, .framer-59oaH .framer-3xlpi3, .framer-59oaH .framer-swky90, .framer-59oaH .framer-90hoq1, .framer-59oaH .framer-1aao2hi, .framer-59oaH .framer-1pgdkho, .framer-59oaH .framer-l7dwcz, .framer-59oaH .framer-1euo71w, .framer-59oaH .framer-n3taxo, .framer-59oaH .framer-1otjg5g, .framer-59oaH .framer-tohowu, .framer-59oaH .framer-1ht84uk, .framer-59oaH .framer-1coy4s4, .framer-59oaH .framer-1tl75o8, .framer-59oaH .framer-1frah2n, .framer-59oaH .framer-n5988d, .framer-59oaH .framer-o6xv5x, .framer-59oaH .framer-1mggadv, .framer-59oaH .framer-12o2n8u, .framer-59oaH .framer-3ju12m, .framer-59oaH .framer-1yxbrlg, .framer-59oaH .framer-214gmv, .framer-59oaH .framer-8aocr8, .framer-59oaH .framer-aydh60, .framer-59oaH .framer-1ap6bin, .framer-59oaH .framer-oc6nu9, .framer-59oaH .framer-amobqq, .framer-59oaH .framer-6xsbp9, .framer-59oaH .framer-xc0ae1, .framer-59oaH .framer-15fvnio, .framer-59oaH .framer-1y4cycf, .framer-59oaH .framer-1pl6uxh, .framer-59oaH .framer-fue4fc, .framer-59oaH .framer-1vda3qu { gap: 0px; } .framer-59oaH .framer-1l2hlm > *, .framer-59oaH .framer-7p4gz2 > *, .framer-59oaH .framer-1euo71w > *, .framer-59oaH .framer-n3taxo > *, .framer-59oaH .framer-tohowu > *, .framer-59oaH .framer-1ht84uk > *, .framer-59oaH .framer-1tl75o8 > *, .framer-59oaH .framer-1frah2n > *, .framer-59oaH .framer-o6xv5x > *, .framer-59oaH .framer-1mggadv > *, .framer-59oaH .framer-3ju12m > *, .framer-59oaH .framer-1yxbrlg > *, .framer-59oaH .framer-8aocr8 > *, .framer-59oaH .framer-aydh60 > *, .framer-59oaH .framer-oc6nu9 > *, .framer-59oaH .framer-amobqq > *, .framer-59oaH .framer-xc0ae1 > *, .framer-59oaH .framer-1vda3qu > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-59oaH .framer-1l2hlm > :first-child, .framer-59oaH .framer-7p4gz2 > :first-child, .framer-59oaH .framer-13waxsl > :first-child, .framer-59oaH .framer-swky90 > :first-child, .framer-59oaH .framer-90hoq1 > :first-child, .framer-59oaH .framer-1aao2hi > :first-child, .framer-59oaH .framer-1pgdkho > :first-child, .framer-59oaH .framer-l7dwcz > :first-child, .framer-59oaH .framer-1euo71w > :first-child, .framer-59oaH .framer-n3taxo > :first-child, .framer-59oaH .framer-1otjg5g > :first-child, .framer-59oaH .framer-tohowu > :first-child, .framer-59oaH .framer-1ht84uk > :first-child, .framer-59oaH .framer-1coy4s4 > :first-child, .framer-59oaH .framer-1tl75o8 > :first-child, .framer-59oaH .framer-1frah2n > :first-child, .framer-59oaH .framer-n5988d > :first-child, .framer-59oaH .framer-o6xv5x > :first-child, .framer-59oaH .framer-1mggadv > :first-child, .framer-59oaH .framer-12o2n8u > :first-child, .framer-59oaH .framer-3ju12m > :first-child, .framer-59oaH .framer-1yxbrlg > :first-child, .framer-59oaH .framer-214gmv > :first-child, .framer-59oaH .framer-8aocr8 > :first-child, .framer-59oaH .framer-aydh60 > :first-child, .framer-59oaH .framer-1ap6bin > :first-child, .framer-59oaH .framer-oc6nu9 > :first-child, .framer-59oaH .framer-amobqq > :first-child, .framer-59oaH .framer-6xsbp9 > :first-child, .framer-59oaH .framer-xc0ae1 > :first-child, .framer-59oaH .framer-15fvnio > :first-child, .framer-59oaH .framer-1y4cycf > :first-child, .framer-59oaH .framer-1pl6uxh > :first-child, .framer-59oaH .framer-fue4fc > :first-child, .framer-59oaH .framer-1vda3qu > :first-child { margin-top: 0px; } .framer-59oaH .framer-1l2hlm > :last-child, .framer-59oaH .framer-7p4gz2 > :last-child, .framer-59oaH .framer-13waxsl > :last-child, .framer-59oaH .framer-swky90 > :last-child, .framer-59oaH .framer-90hoq1 > :last-child, .framer-59oaH .framer-1aao2hi > :last-child, .framer-59oaH .framer-1pgdkho > :last-child, .framer-59oaH .framer-l7dwcz > :last-child, .framer-59oaH .framer-1euo71w > :last-child, .framer-59oaH .framer-n3taxo > :last-child, .framer-59oaH .framer-1otjg5g > :last-child, .framer-59oaH .framer-tohowu > :last-child, .framer-59oaH .framer-1ht84uk > :last-child, .framer-59oaH .framer-1coy4s4 > :last-child, .framer-59oaH .framer-1tl75o8 > :last-child, .framer-59oaH .framer-1frah2n > :last-child, .framer-59oaH .framer-n5988d > :last-child, .framer-59oaH .framer-o6xv5x > :last-child, .framer-59oaH .framer-1mggadv > :last-child, .framer-59oaH .framer-12o2n8u > :last-child, .framer-59oaH .framer-3ju12m > :last-child, .framer-59oaH .framer-1yxbrlg > :last-child, .framer-59oaH .framer-214gmv > :last-child, .framer-59oaH .framer-8aocr8 > :last-child, .framer-59oaH .framer-aydh60 > :last-child, .framer-59oaH .framer-1ap6bin > :last-child, .framer-59oaH .framer-oc6nu9 > :last-child, .framer-59oaH .framer-amobqq > :last-child, .framer-59oaH .framer-6xsbp9 > :last-child, .framer-59oaH .framer-xc0ae1 > :last-child, .framer-59oaH .framer-15fvnio > :last-child, .framer-59oaH .framer-1y4cycf > :last-child, .framer-59oaH .framer-1pl6uxh > :last-child, .framer-59oaH .framer-fue4fc > :last-child, .framer-59oaH .framer-1vda3qu > :last-child { margin-bottom: 0px; } .framer-59oaH .framer-13waxsl > * { margin: 0px; margin-bottom: calc(72px / 2); margin-top: calc(72px / 2); } .framer-59oaH .framer-3xlpi3 > *, .framer-59oaH .framer-3xlpi3 > :first-child, .framer-59oaH .framer-3xlpi3 > :last-child { margin: 0px; } .framer-59oaH .framer-swky90 > *, .framer-59oaH .framer-1y4cycf > * { margin: 0px; margin-bottom: calc(36px / 2); margin-top: calc(36px / 2); } .framer-59oaH .framer-90hoq1 > *, .framer-59oaH .framer-fue4fc > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-59oaH .framer-1aao2hi > *, .framer-59oaH .framer-15fvnio > *, .framer-59oaH .framer-1pl6uxh > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-59oaH .framer-1pgdkho > *, .framer-59oaH .framer-l7dwcz > *, .framer-59oaH .framer-1otjg5g > *, .framer-59oaH .framer-1coy4s4 > *, .framer-59oaH .framer-n5988d > *, .framer-59oaH .framer-12o2n8u > *, .framer-59oaH .framer-214gmv > *, .framer-59oaH .framer-1ap6bin > *, .framer-59oaH .framer-6xsbp9 > * { margin: 0px; margin-bottom: calc(64px / 2); margin-top: calc(64px / 2); } }}`,
    `@media (min-width: 768px) and (max-width: 1039px) { .framer-59oaH .hidden-clvs4f { display: none !important; } .${Je.bodyClassName}-framer-59oaH { background: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, rgb(7, 7, 19)) /* {"name":"Dark BG"} */; } .framer-59oaH.framer-72rtr7 { width: 768px; } .framer-59oaH .framer-13waxsl, .framer-59oaH .framer-1pgdkho { flex-direction: column; } .framer-59oaH .framer-gdjx73, .framer-59oaH .framer-1h1t57e, .framer-59oaH .framer-1otinth-container, .framer-59oaH .framer-1bo3wg0-container, .framer-59oaH .framer-akos1m-container, .framer-59oaH .framer-5qliep { flex: none; width: 100%; } .framer-59oaH .framer-cppb84 { max-width: unset; } .framer-59oaH .framer-swky90 { gap: 72px; } .framer-59oaH .framer-15fvnio { flex-direction: column; gap: 48px; } .framer-59oaH .framer-1vda3qu { align-self: unset; flex: none; gap: 48px; height: min-content; width: 100%; } .framer-59oaH .framer-16at260 { flex: none; height: auto; } .framer-59oaH .framer-12urezt { height: var(--framer-aspect-ratio-supported, 192px); } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-59oaH .framer-13waxsl, .framer-59oaH .framer-swky90, .framer-59oaH .framer-1pgdkho, .framer-59oaH .framer-15fvnio, .framer-59oaH .framer-1vda3qu { gap: 0px; } .framer-59oaH .framer-13waxsl > * { margin: 0px; margin-bottom: calc(72px / 2); margin-top: calc(72px / 2); } .framer-59oaH .framer-13waxsl > :first-child, .framer-59oaH .framer-1pgdkho > :first-child, .framer-59oaH .framer-15fvnio > :first-child, .framer-59oaH .framer-1vda3qu > :first-child { margin-top: 0px; } .framer-59oaH .framer-13waxsl > :last-child, .framer-59oaH .framer-1pgdkho > :last-child, .framer-59oaH .framer-15fvnio > :last-child, .framer-59oaH .framer-1vda3qu > :last-child { margin-bottom: 0px; } .framer-59oaH .framer-swky90 > * { margin: 0px; margin-left: calc(72px / 2); margin-right: calc(72px / 2); } .framer-59oaH .framer-swky90 > :first-child { margin-left: 0px; } .framer-59oaH .framer-swky90 > :last-child { margin-right: 0px; } .framer-59oaH .framer-1pgdkho > * { margin: 0px; margin-bottom: calc(64px / 2); margin-top: calc(64px / 2); } .framer-59oaH .framer-15fvnio > *, .framer-59oaH .framer-1vda3qu > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } }}`,
    ...Tr,
    ...sr,
    ...vr,
    ...hr,
    ...Nr,
    ...jr,
    ...gr,
    ...Ir,
    ...Hr,
    '.framer-59oaH[data-border="true"]::after, .framer-59oaH [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  te = J(Ka, $a, "framer-59oaH"),
  Ot = te;
te.displayName = "Home";
te.defaultProps = { height: 14661, width: 1040 };
K(
  te,
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
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://app.framerstatic.com/Inter-Bold.cyrillic-ext-XOTVL7ZR.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://app.framerstatic.com/Inter-Bold.cyrillic-6LOMBC2V.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://app.framerstatic.com/Inter-Bold.greek-ext-WXWSJXLB.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://app.framerstatic.com/Inter-Bold.greek-YRST7ODZ.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://app.framerstatic.com/Inter-Bold.latin-ext-BASA5UL3.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://app.framerstatic.com/Inter-Bold.latin-UCM45LQF.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://app.framerstatic.com/Inter-Bold.vietnamese-OEVJMXEP.woff2",
          weight: "700",
        },
      ],
    },
    ...xa,
    ...ga,
    ...ua,
    ...ya,
    ...va,
    ...ba,
    ...wa,
    ...Ha,
    ...ka,
    ...Ca,
    ..._a,
    ...Na,
    ...La,
    ...qa,
    ...Ia,
    ...Fa,
    ...za,
    ..._(Ar),
    ..._(fr),
    ..._(yr),
    ..._(dr),
    ..._(_r),
    ..._(zr),
    ..._(xr),
    ..._(qr),
    ..._(wr),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Vt = {
  exports: {
    default: {
      type: "reactComponent",
      name: "FrameraugiA20Il",
      slots: [],
      annotations: {
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"SkQsu0FoZ":{"layout":["fixed","auto"]},"TEAVYlFuh":{"layout":["fixed","auto"]}}}',
        framerContractVersion: "1",
        framerIntrinsicWidth: "1040",
        framerImmutableVariables: "true",
        framerComponentViewportWidth: "true",
        framerIntrinsicHeight: "14661",
        framerResponsiveScreen: "",
        framerDisplayContentsDiv: "false",
      },
    },
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    __FramerMetadata__: { type: "variable" },
  },
};
export { Vt as __FramerMetadata__, Ot as default };
//# sourceMappingURL=sfyjfVWJmiElSKzXymX8VNn37xEQYeUR4wUXv20WSIQ.TWJWSPUB.mjs.map

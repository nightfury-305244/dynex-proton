import { a as F } from "./chunk-CO46OLGF.mjs";
import { a as ve } from "./chunk-JEAYGDGA.mjs";
import { a as je } from "./chunk-R3PETZRW.mjs";
import { a as ze } from "./chunk-ICWJQOU4.mjs";
import { a as xe } from "./chunk-X4RL6ZYP.mjs";
import "./chunk-C3SD45VA.mjs";
import { a as Re } from "./chunk-CTIF5AVX.mjs";
import {
  a as _e,
  b as Ce,
  c as er,
  d as rr,
  e as ar,
  f as tr,
  g as nr,
  h as ir,
  i as dr,
  j as pr,
  k as hr,
} from "./chunk-DQH2D4MP.mjs";
import { a as ur, b as xr, c as gr } from "./chunk-4CBC4XYV.mjs";
import {
  a as pe,
  b as he,
  c as ue,
  d as sr,
  e as fr,
  f as cr,
} from "./chunk-3REURG4N.mjs";
import { a as Fe } from "./chunk-GKORHWPJ.mjs";
import {
  a as or,
  b as lr,
  c as mr,
  d as vr,
  e as kr,
  f as _r,
} from "./chunk-QZEJCLJB.mjs";
import { a as yr, b as Nr, c as br, e as Se } from "./chunk-XHADUV4Z.mjs";
import {
  a as ke,
  b as K,
  c as Q,
  d as $,
  g as wr,
  h as Ie,
  m as qe,
} from "./chunk-SK7OXHBT.mjs";
import "./chunk-42U43NKG.mjs";
import {
  $ as O,
  C as se,
  G as z,
  H as fe,
  I as Ye,
  K as m,
  M as s,
  N as L,
  O as Ge,
  P as Xe,
  Q as Ze,
  S as P,
  V as D,
  Z as v,
  a as j,
  ca as Ke,
  da as Qe,
  e as i,
  g as V,
  ja as Z,
  ka as $e,
  la as ce,
  pa as we,
  qa as f,
  ra as H,
  sa as g,
  t as M,
  ta as de,
  w as Je,
  z as E,
} from "./chunk-NCIFD65W.mjs";
import {
  d as n,
  j as A,
  o as G,
  q as W,
  s as Be,
  t as X,
  u as R,
  y as e,
  z as r,
} from "./chunk-DKTB2747.mjs";
import { a as De } from "./chunk-DPTOFUKK.mjs";
import { a as Pr } from "./chunk-ELYU6EKT.mjs";
var Ur = g(Re),
  Er = { Ofl0m7smm: { hover: !0 } },
  Or = ["Ofl0m7smm"],
  Br = "framer-WWtMR",
  Jr = { Ofl0m7smm: "framer-v-1gkgj5f" };
function Te(a, ...t) {
  let l = {};
  return t?.forEach((o) => o && Object.assign(l, a[o])), l;
}
var Yr = {
  default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
};
var Gr = ({ value: a, children: t }) => {
    let l = G(j),
      o = a ?? l.transition,
      h = X(() => ({ ...l, transition: o }), [JSON.stringify(o)]);
    return e(j.Provider, { value: h, children: t });
  },
  Xr = ({ content: a, height: t, id: l, title: o, width: h, ...p }) => {
    var c, u;
    return {
      ...p,
      FH8vLkjmb:
        (c = o ?? p.FH8vLkjmb) !== null && c !== void 0 ? c : "JOB_TYPE_SAT",
      lxuGyuudz:
        (u = a ?? p.lxuGyuudz) !== null && u !== void 0
          ? u
          : "Constraint satisfaction problem",
    };
  },
  Zr = (a, t) => t.join("-") + a.layoutDependency,
  Kr = A(function (a, t) {
    let { activeLocale: l, setLocale: o } = M(),
      {
        style: h,
        className: p,
        layoutId: c,
        variant: u,
        lxuGyuudz: C,
        FH8vLkjmb: x,
        ...J
      } = Xr(a),
      {
        baseVariant: S,
        classNames: _,
        gestureVariant: I,
        setGestureState: y,
        setVariant: T,
        transition: d,
        variants: q,
      } = Z({
        cycleOrder: Or,
        defaultVariant: "Ofl0m7smm",
        enabledGestures: Er,
        transitions: Yr,
        variant: u,
        variantClassNames: Jr,
      }),
      N = Zr(a, q),
      w = R(null),
      Y = W(),
      U = [$];
    return e(V, {
      id: c ?? Y,
      children: e(Gr, {
        value: d,
        children: r(i.div, {
          ...J,
          animate: q,
          className: z(Br, ...U, "framer-1gkgj5f", p, _),
          "data-framer-name": "Variant 1",
          initial: u,
          layoutDependency: N,
          layoutId: "Ofl0m7smm",
          onHoverEnd: () => y({ isHovered: !1 }),
          onHoverStart: () => y({ isHovered: !0 }),
          onTap: () => y({ isPressed: !1 }),
          onTapCancel: () => y({ isPressed: !1 }),
          onTapStart: () => y({ isPressed: !0 }),
          ref: t ?? w,
          style: {
            background:
              "radial-gradient(64.5506419400856% 90.5% at 125.49999999999999% -12.6%, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)",
            opacity: 0.8,
            ...h,
          },
          variants: {
            "Ofl0m7smm-hover": {
              background:
                "radial-gradient(64.5506419400856% 90.5% at 100% 0%, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)",
              opacity: 1,
            },
          },
          ...Te({ "Ofl0m7smm-hover": { "data-framer-name": void 0 } }, S, I),
          children: [
            e(i.div, {
              className: "framer-1qdp253-container",
              layoutDependency: N,
              layoutId: "aMJ3YnWVI-container",
              children: e(Re, {
                height: "100%",
                id: "aMJ3YnWVI",
                layoutId: "aMJ3YnWVI",
                style: { height: "100%", width: "100%" },
                variant: "Dl5vZx6Jj",
                width: "100%",
                ...Te({ "Ofl0m7smm-hover": { variant: "kym3b6alL" } }, S, I),
              }),
            }),
            e(f, {
              __fromCanvasComponent: !0,
              children: e(n, {
                children: e(i.h6, {
                  style: {
                    "--font-selector": "Q1VTVE9NO1JpZ2lkIFNxdWFyZSBSZWd1bGFy",
                    "--framer-font-family":
                      '"Rigid Square Regular", sans-serif',
                    "--framer-font-size": "18px",
                    "--framer-line-height": "160%",
                    "--framer-text-color":
                      "var(--extracted-1w1cjl5, var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255)))",
                    "--framer-text-transform": "uppercase",
                  },
                  children: "JOB_TYPE_SAT",
                }),
              }),
              className: "framer-hkttwi",
              "data-framer-name": "Number",
              fonts: ["CUSTOM;Rigid Square Regular"],
              layoutDependency: N,
              layoutId: "BWjZw5tEY",
              style: {
                "--extracted-1w1cjl5":
                  "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
              },
              text: x,
              verticalAlignment: "top",
              withExternalLayout: !0,
            }),
            e(f, {
              __fromCanvasComponent: !0,
              children: e(n, {
                children: e(i.p, {
                  className: "framer-styles-preset-11ut0g7",
                  "data-styles-preset": "Auy8Lx_6q",
                  style: {
                    "--framer-text-color":
                      "var(--extracted-r6o4lv, var(--token-50859c1e-b9ab-4124-b93a-6ea1cca8c715, rgb(98, 103, 111)))",
                  },
                  children: "Constraint satisfaction problem",
                }),
              }),
              className: "framer-6vps4a",
              "data-framer-name":
                "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
              layoutDependency: N,
              layoutId: "Av2Y8ocLR",
              style: {
                "--extracted-r6o4lv":
                  "var(--token-50859c1e-b9ab-4124-b93a-6ea1cca8c715, rgb(98, 103, 111))",
              },
              text: C,
              variants: {
                "Ofl0m7smm-hover": {
                  "--extracted-r6o4lv":
                    "var(--token-e2149c75-9099-4842-aea6-4fbafaef2693, rgb(191, 199, 212))",
                },
              },
              verticalAlignment: "top",
              withExternalLayout: !0,
              ...Te(
                {
                  "Ofl0m7smm-hover": {
                    children: e(n, {
                      children: e(i.p, {
                        className: "framer-styles-preset-11ut0g7",
                        "data-styles-preset": "Auy8Lx_6q",
                        style: {
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-e2149c75-9099-4842-aea6-4fbafaef2693, rgb(191, 199, 212)))",
                        },
                        children: "Constraint satisfaction problem",
                      }),
                    }),
                  },
                },
                S,
                I
              ),
            }),
          ],
        }),
      }),
    });
  }),
  Qr = [
    '.framer-WWtMR[data-border="true"]::after, .framer-WWtMR [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-WWtMR.framer-ylxezf, .framer-WWtMR .framer-ylxezf { display: block; }",
    ".framer-WWtMR.framer-1gkgj5f { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 72px; height: min-content; justify-content: flex-start; min-height: 220px; min-width: 200px; overflow: visible; padding: 32px 32px 32px 32px; position: relative; width: min-content; }",
    ".framer-WWtMR .framer-1qdp253-container { cursor: pointer; flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: calc(49.90757855822553% - 100% / 2); width: 100%; z-index: 1; }",
    ".framer-WWtMR .framer-hkttwi { align-self: stretch; flex: none; height: auto; position: relative; white-space: pre-wrap; width: auto; word-break: break-word; word-wrap: break-word; z-index: 2; }",
    ".framer-WWtMR .framer-6vps4a { align-self: stretch; flex: none; height: auto; position: relative; white-space: pre-wrap; width: auto; word-break: break-word; word-wrap: break-word; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-WWtMR.framer-1gkgj5f { gap: 0px; } .framer-WWtMR.framer-1gkgj5f > * { margin: 0px; margin-bottom: calc(72px / 2); margin-top: calc(72px / 2); } .framer-WWtMR.framer-1gkgj5f > :first-child { margin-top: 0px; } .framer-WWtMR.framer-1gkgj5f > :last-child { margin-bottom: 0px; } }",
    ".framer-WWtMR.framer-v-1gkgj5f.hover .framer-1qdp253-container { height: 105%; left: calc(50.00000000000002% - 105% / 2); top: calc(49.90757855822553% - 105% / 2); width: 105%; }",
    ...Q,
  ],
  le = L(Kr, Qr, "framer-WWtMR"),
  te = le;
le.displayName = "HowitWorks/JobTypes";
le.defaultProps = { height: 270, width: 200 };
se(le, {
  lxuGyuudz: {
    defaultValue: "Constraint satisfaction problem",
    displayTextArea: !0,
    title: "Content",
    type: E.String,
  },
  FH8vLkjmb: {
    defaultValue: "JOB_TYPE_SAT",
    displayTextArea: !1,
    title: "Title",
    type: E.String,
  },
});
H(le, [
  {
    family: "Rigid Square Regular",
    source: "custom",
    url: "https://framerusercontent.com/assets/2byiqNmSK7iIV1YW3mItnbQSRUc.otf",
  },
  ...Ur,
  ...K,
]);
var Pe = {};
Pr(Pe, { __FramerMetadata__: () => _a, default: () => ye });
var We,
  Ve,
  ra = g(ke),
  aa = { CxMu3T4FH: { hover: !0 } },
  ta = ["CxMu3T4FH", "xApzm7YSV"],
  na = "framer-F9pd6",
  ia = { CxMu3T4FH: "framer-v-agyovy", xApzm7YSV: "framer-v-1hsz816" };
function Fr(a, ...t) {
  let l = {};
  return t?.forEach((o) => o && Object.assign(l, a[o])), l;
}
var oa = {
  default: { damping: 40, delay: 0, mass: 0.1, stiffness: 500, type: "spring" },
};
var la = ({ value: a, children: t }) => {
    let l = G(j),
      o = a ?? l.transition,
      h = X(() => ({ ...l, transition: o }), [JSON.stringify(o)]);
    return e(j.Provider, { value: h, children: t });
  },
  ma = { "Variant 2": "xApzm7YSV", Closed: "CxMu3T4FH" },
  sa = ({ content: a, height: t, id: l, title: o, width: h, ...p }) => {
    var c, u, C, x;
    return {
      ...p,
      CzJaU8Vtj:
        (c = o ?? p.CzJaU8Vtj) !== null && c !== void 0 ? c : "What is Proton?",
      variant:
        (C = (u = ma[p.variant]) !== null && u !== void 0 ? u : p.variant) !==
          null && C !== void 0
          ? C
          : "CxMu3T4FH",
      XWKwRAXlK:
        (x = a ?? p.XWKwRAXlK) !== null && x !== void 0
          ? x
          : e(n, { children: e(i.p, { children: "Content goes here" }) }),
    };
  },
  fa = (a, t) => t.join("-") + a.layoutDependency,
  ca = A(function (a, t) {
    let { activeLocale: l, setLocale: o } = M(),
      {
        style: h,
        className: p,
        layoutId: c,
        variant: u,
        CzJaU8Vtj: C,
        XWKwRAXlK: x,
        ...J
      } = sa(a),
      {
        baseVariant: S,
        classNames: _,
        gestureVariant: I,
        setGestureState: y,
        setVariant: T,
        transition: d,
        variants: q,
      } = Z({
        cycleOrder: ta,
        defaultVariant: "CxMu3T4FH",
        enabledGestures: aa,
        transitions: oa,
        variant: u,
        variantClassNames: ia,
      }),
      N = fa(a, q),
      { activeVariantCallback: w, delay: Y } = Ke(S),
      U = w(async (...Lr) => {
        y({ isPressed: !1 }), T("xApzm7YSV");
      }),
      Ar = w(async (...Lr) => {
        y({ isPressed: !1 }), T("CxMu3T4FH");
      }),
      Wr = R(null),
      Vr = W(),
      Mr = [gr, ue, ar, cr, mr, ir, $, br, hr];
    return e(V, {
      id: c ?? Vr,
      children: e(la, {
        value: d,
        children: r(i.div, {
          ...J,
          animate: q,
          className: z(na, ...Mr, "framer-agyovy", p, _),
          "data-border": !0,
          "data-framer-name": "Closed",
          "data-highlight": !0,
          initial: u,
          layoutDependency: N,
          layoutId: "CxMu3T4FH",
          onHoverEnd: () => y({ isHovered: !1 }),
          onHoverStart: () => y({ isHovered: !0 }),
          onTap: U,
          onTapCancel: () => y({ isPressed: !1 }),
          onTapStart: () => y({ isPressed: !0 }),
          ref: t ?? Wr,
          style: {
            "--border-bottom-width": "1px",
            "--border-color":
              'var(--token-4acb8bf0-ed98-46be-917a-9b6296c54a85, rgba(255, 255, 255, 0.05)) /* {"name":"White Alpha 5"} */',
            "--border-left-width": "1px",
            "--border-right-width": "1px",
            "--border-style": "solid",
            "--border-top-width": "1px",
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            boxShadow:
              "inset -1px 0px 0px 0px rgba(255, 255, 255, 0.2), inset 1px 0px 0px 0px rgba(255, 255, 255, 0.2)",
            ...h,
          },
          variants: {
            "CxMu3T4FH-hover": {
              "--border-color": "rgba(255, 255, 255, 0.15)",
              boxShadow:
                "inset -3px 0px 0px 0px rgba(255, 255, 255, 0.9), inset 3px 0px 0px 0px rgba(255, 255, 255, 0.9)",
            },
            xApzm7YSV: {
              "--border-color": "rgba(255, 255, 255, 0.15)",
              boxShadow:
                'inset -3px 0px 0px 0px var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255)) /* {"name":"White/White"} */, inset 3px 0px 0px 0px var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255)) /* {"name":"White/White"} */',
            },
          },
          ...Fr(
            {
              "CxMu3T4FH-hover": { "data-framer-name": void 0 },
              xApzm7YSV: { "data-framer-name": "Variant 2", onTap: Ar },
            },
            S,
            I
          ),
          children: [
            r(i.div, {
              className: "framer-12t8sys",
              "data-framer-name": "Btn Content",
              layoutDependency: N,
              layoutId: "I04k82obG",
              children: [
                e(f, {
                  __fromCanvasComponent: !0,
                  children: e(n, {
                    children: e(i.p, {
                      style: {
                        "--font-selector": "R0Y7UnViaWstcmVndWxhcg==",
                        "--framer-font-family":
                          '"Rubik", "Rubik Placeholder", sans-serif',
                        "--framer-font-size": "15px",
                        "--framer-letter-spacing": "1px",
                        "--framer-line-height": "140%",
                        "--framer-text-alignment": "left",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-d1c6bc49-a4d7-460d-8ec2-97f80b7b859d, rgba(255, 255, 255, 0.5)))",
                        "--framer-text-transform": "uppercase",
                      },
                      children: "What is Proton?",
                    }),
                  }),
                  className: "framer-1x82rzb",
                  "data-framer-name": "Text",
                  fonts: ["GF;Rubik-regular"],
                  layoutDependency: N,
                  layoutId: "oejFcsZVx",
                  style: {
                    "--extracted-r6o4lv":
                      "var(--token-d1c6bc49-a4d7-460d-8ec2-97f80b7b859d, rgba(255, 255, 255, 0.5))",
                  },
                  text: C,
                  variants: {
                    "CxMu3T4FH-hover": {
                      "--extracted-r6o4lv": "rgb(255, 255, 255)",
                    },
                    xApzm7YSV: { "--extracted-r6o4lv": "rgb(255, 255, 255)" },
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                  ...Fr(
                    {
                      "CxMu3T4FH-hover": {
                        children: e(n, {
                          children: e(i.p, {
                            style: {
                              "--font-selector": "R0Y7UnViaWstcmVndWxhcg==",
                              "--framer-font-family":
                                '"Rubik", "Rubik Placeholder", sans-serif',
                              "--framer-font-size": "15px",
                              "--framer-letter-spacing": "1px",
                              "--framer-line-height": "140%",
                              "--framer-text-alignment": "left",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                              "--framer-text-transform": "uppercase",
                            },
                            children: "What is Proton?",
                          }),
                        }),
                      },
                      xApzm7YSV: {
                        children: e(n, {
                          children: e(i.p, {
                            style: {
                              "--font-selector": "R0Y7UnViaWstcmVndWxhcg==",
                              "--framer-font-family":
                                '"Rubik", "Rubik Placeholder", sans-serif',
                              "--framer-font-size": "15px",
                              "--framer-letter-spacing": "1px",
                              "--framer-line-height": "140%",
                              "--framer-text-alignment": "left",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                              "--framer-text-transform": "uppercase",
                            },
                            children: "What is Proton?",
                          }),
                        }),
                      },
                    },
                    S,
                    I
                  ),
                }),
                e(i.div, {
                  className: "framer-1xxb2mt-container",
                  layoutDependency: N,
                  layoutId: "daavOjHC0-container",
                  style: { opacity: 0.5, rotate: 0 },
                  variants: {
                    "CxMu3T4FH-hover": { opacity: 1 },
                    xApzm7YSV: { opacity: 1, rotate: 45 },
                  },
                  children: e(ke, {
                    color:
                      'var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255)) /* {"name":"White/White"} */',
                    height: "100%",
                    iconSearch: "HardDrives",
                    iconSelection: "Plus",
                    id: "daavOjHC0",
                    layoutId: "daavOjHC0",
                    mirrored: !1,
                    selectByList: !0,
                    style: { height: "100%", width: "100%" },
                    weight: "regular",
                    width: "100%",
                  }),
                }),
              ],
            }),
            e(i.div, {
              className: "framer-19w0a0i",
              "data-framer-name": "Content Frame",
              layoutDependency: N,
              layoutId: "fcqv_ZvvT",
              style: { opacity: 0 },
              variants: { xApzm7YSV: { opacity: 1 } },
              children: e(Ye, {
                presets: {
                  "module:NEd4VmDdsxM3StIUbddO/bZxrMUxBPAhoXlARkK9C/YouTube.js:Youtube":
                    _e.T_j0y6EwI,
                  "module:pVk4QsoHxASnVtUBp6jr/TbhpORLndv1iOkZzyo83/CodeBlock.js:default":
                    _e.io8WtmkA6,
                },
                children: e(f, {
                  __fromCanvasComponent: !0,
                  children: x,
                  className: "framer-1eleera",
                  layoutDependency: N,
                  layoutId: "zZMxaSOj3",
                  style: {
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                    opacity: 0,
                  },
                  stylesPresetsClassNames: {
                    a: "framer-styles-preset-1wicq5s",
                    code: "framer-styles-preset-14p4v3h",
                    h1: "framer-styles-preset-3nqyhf",
                    h2: "framer-styles-preset-1wml6uu",
                    h3: "framer-styles-preset-bcjq8k",
                    h4: "framer-styles-preset-11ezvfj",
                    h5: "framer-styles-preset-13oo16j",
                    h6: "framer-styles-preset-14n5412",
                    p: "framer-styles-preset-11ut0g7",
                  },
                  variants: { xApzm7YSV: { opacity: 1 } },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
              }),
            }),
          ],
        }),
      }),
    });
  }),
  da = [
    '.framer-F9pd6[data-border="true"]::after, .framer-F9pd6 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-F9pd6.framer-7vlsdu, .framer-F9pd6 .framer-7vlsdu { display: block; }",
    ".framer-F9pd6.framer-agyovy { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 16px 24px 16px 24px; position: relative; width: 488px; }",
    ".framer-F9pd6 .framer-12t8sys { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-F9pd6 .framer-1x82rzb { -webkit-user-select: none; flex: 1 0 0px; height: auto; overflow: hidden; position: relative; user-select: none; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }",
    ".framer-F9pd6 .framer-1xxb2mt-container { aspect-ratio: 1 / 1; flex: none; height: 18px; position: relative; width: var(--framer-aspect-ratio-supported, 18px); z-index: 1; }",
    ".framer-F9pd6 .framer-19w0a0i { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 1px; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-F9pd6 .framer-1eleera { flex: 1 0 0px; height: auto; overflow: hidden; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-F9pd6.framer-agyovy, .framer-F9pd6 .framer-19w0a0i { gap: 0px; } .framer-F9pd6.framer-agyovy > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-F9pd6.framer-agyovy > :first-child { margin-top: 0px; } .framer-F9pd6.framer-agyovy > :last-child { margin-bottom: 0px; } .framer-F9pd6 .framer-19w0a0i > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-F9pd6 .framer-19w0a0i > :first-child { margin-left: 0px; } .framer-F9pd6 .framer-19w0a0i > :last-child { margin-right: 0px; } }",
    ".framer-F9pd6.framer-v-1hsz816 .framer-19w0a0i { height: min-content; overflow: visible; padding: 24px 0px 12px 0px; }",
    ...xr,
    ...he,
    ...rr,
    ...fr,
    ...lr,
    ...nr,
    ...Q,
    ...Nr,
    ...pr,
  ],
  me = L(ca, da, "framer-F9pd6"),
  b = me;
me.displayName = "Accordion/Item";
me.defaultProps = { height: 54, width: 488 };
se(me, {
  variant: {
    options: ["CxMu3T4FH", "xApzm7YSV"],
    optionTitles: ["Closed", "Variant 2"],
    title: "Variant",
    type: E.Enum,
  },
  CzJaU8Vtj: {
    defaultValue: "What is Proton?",
    displayTextArea: !1,
    title: "Title",
    type: E.String,
  },
  XWKwRAXlK: {
    defaultValue: "<p>Content goes here</p>",
    title: "Content",
    type: E.RichText,
  },
});
var Me, Le;
H(me, [
  {
    family: "Rubik",
    source: "google",
    style: "normal",
    url: "https://fonts.gstatic.com/s/rubik/v28/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-B4i1VU80V4bVkA.woff2",
    weight: "400",
  },
  ...ra,
  ...ur,
  ...pe,
  ...er,
  ...sr,
  ...or,
  ...tr,
  ...K,
  ...yr,
  ...dr,
  ...((Me = (We = Ce) === null || We === void 0 ? void 0 : We.io8WtmkA6) !==
    null && Me !== void 0
    ? Me
    : []),
  ...((Le = (Ve = Ce) === null || Ve === void 0 ? void 0 : Ve.T_j0y6EwI) !==
    null && Le !== void 0
    ? Le
    : []),
]);
var ha = g(b),
  ua = ["pmrMBVs9w"],
  xa = "framer-kNFx0",
  ga = { pmrMBVs9w: "framer-v-1dqrxcf" };
var ya = {
  default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
};
var Na = ({ value: a, children: t }) => {
    let l = G(j),
      o = a ?? l.transition,
      h = X(() => ({ ...l, transition: o }), [JSON.stringify(o)]);
    return e(j.Provider, { value: h, children: t });
  },
  ba = ({ height: a, id: t, width: l, ...o }) => ({ ...o }),
  wa = (a, t) => t.join("-") + a.layoutDependency,
  va = A(function (a, t) {
    let { activeLocale: l, setLocale: o } = M(),
      { style: h, className: p, layoutId: c, variant: u, ...C } = ba(a),
      {
        baseVariant: x,
        classNames: J,
        gestureVariant: S,
        setGestureState: _,
        setVariant: I,
        transition: y,
        variants: T,
      } = Z({
        cycleOrder: ua,
        defaultVariant: "pmrMBVs9w",
        transitions: ya,
        variant: u,
        variantClassNames: ga,
      }),
      d = wa(a, T),
      q = R(null),
      N = W(),
      w = [];
    return e(V, {
      id: c ?? N,
      children: e(Na, {
        value: y,
        children: r(i.div, {
          ...C,
          animate: T,
          className: z(xa, ...w, "framer-1dqrxcf", p, J),
          "data-framer-name": "Variant 1",
          initial: u,
          layoutDependency: d,
          layoutId: "pmrMBVs9w",
          onHoverEnd: () => _({ isHovered: !1 }),
          onHoverStart: () => _({ isHovered: !0 }),
          onTap: () => _({ isPressed: !1 }),
          onTapCancel: () => _({ isPressed: !1 }),
          onTapStart: () => _({ isPressed: !0 }),
          ref: t ?? q,
          style: { ...h },
          children: [
            e(i.div, {
              className: "framer-pr4065-container",
              layoutDependency: d,
              layoutId: "UtOemIRwe-container",
              children: e(b, {
                content: r(n, {
                  children: [
                    e("p", {
                      children:
                        "Proton is a next-generation platform for neuromorphic computing based on a new flexible blockchain protocol. It consists of participating nodes that together constitute one enormous neuromorphic computing network. ",
                    }),
                    e("p", {
                      children:
                        "Consequently, the platform is capable of performing computations at unprecedented speeds and efficiency \u2013 even exceeding quantum computing. Everyone is welcome to participate, since the Proton neuromorphic computing chip is capable of being simulated efficiently on graphic processing units (GPUs). Users exchange computation time for Proton\u2019s native token PTN, thus enabling everyone to earn money on the platform.",
                    }),
                  ],
                }),
                height: "100%",
                id: "UtOemIRwe",
                layoutId: "UtOemIRwe",
                style: { width: "100%" },
                title: "What is Proton?",
                variant: "CxMu3T4FH",
                width: "100%",
              }),
            }),
            e(i.div, {
              className: "framer-wj0e3h-container",
              layoutDependency: d,
              layoutId: "UOkLaqqyi-container",
              children: e(b, {
                content: r(n, {
                  children: [
                    e("p", {
                      children:
                        "Proton was built to be a battle-ready network that supports permissionless, composable tokens and provides a secure, efficient, next-generation neuromorhpic computing platform. The initial design started in 2020, with the mainnet launching on September 16th, 2022.",
                    }),
                    r("p", {
                      children: [
                        "There is a maximum supply of\xA0",
                        e("strong", { children: "100,000,000" }),
                        "\xA0PTN. There was no private sales, pre-mine, or initial coin offering.",
                      ],
                    }),
                    e("p", {
                      children:
                        "The Proton project is community-driven and entirely focused on promoting development and widespread adoption of the Proton platform.",
                    }),
                  ],
                }),
                height: "100%",
                id: "UOkLaqqyi",
                layoutId: "UOkLaqqyi",
                style: { width: "100%" },
                title: "When/how was Proton launched?",
                variant: "CxMu3T4FH",
                width: "100%",
              }),
            }),
            e(i.div, {
              className: "framer-fwwaez-container",
              layoutDependency: d,
              layoutId: "CyFeFGBA0-container",
              children: e(b, {
                content: r(n, {
                  children: [
                    e("p", {
                      children:
                        "There are three possibilities to obtain PTN, Proton\u2019s native token:",
                    }),
                    r("ul", {
                      style: {
                        "--framer-font-size": "16px",
                        "--framer-text-alignment": "start",
                        "--framer-text-color": "rgb(255, 255, 255)",
                        "--framer-text-transform": "none",
                      },
                      children: [
                        e("li", {
                          "data-preset-tag": "p",
                          children: e("p", {
                            children:
                              "Perform mining (proof-of-work) on your computer systems and get rewarded \u2013 on CPU, GPU and FPGA",
                          }),
                        }),
                        e("li", {
                          "data-preset-tag": "p",
                          children: e("p", {
                            children:
                              "Run the Proton Neuromorphic Chip on your computer systems and get paid for the usage on a per minute basis \u2013 on CPU, GPU and FPGA",
                          }),
                        }),
                        e("li", {
                          "data-preset-tag": "p",
                          children: e("p", {
                            children: "Buy PTN on an exchange",
                          }),
                        }),
                      ],
                    }),
                    e("p", {
                      children: e(P, {
                        href: { webPageId: "s3i5rh3Vt" },
                        openInNewTab: !1,
                        smoothScroll: !1,
                        children: e("a", { children: "Learn More \u2192" }),
                      }),
                    }),
                  ],
                }),
                height: "100%",
                id: "CyFeFGBA0",
                layoutId: "CyFeFGBA0",
                style: { width: "100%" },
                title: "How can I get PTN?",
                variant: "CxMu3T4FH",
                width: "100%",
              }),
            }),
            e(i.div, {
              className: "framer-1hj3fhs-container",
              layoutDependency: d,
              layoutId: "xGZE_8UAL-container",
              children: e(b, {
                content: e(n, {
                  children: r("p", {
                    children: [
                      "In light of the growing threat of climate change to our environment and our future, it is imperative that we take every measure necessary to reduce global energy consumption. An accelerated adoption of neuromorphic computing will therefore benefit our entire society since it uses orders of magnitude less energy compared to traditional computing systems. For more information, read our publication \u201C",
                      e(P, {
                        href: "https://dynexcoin.medium.com/smart-mining-reinventing-the-cryptographic-puzzle-to-make-it-more-meaningful-84ea2d526aa",
                        openInNewTab: !0,
                        smoothScroll: !1,
                        children: e("a", {
                          children:
                            "Smart Mining \u2014 Reinventing the Cryptographic Puzzle to Make it More Meaningful",
                        }),
                      }),
                      "\u201D",
                    ],
                  }),
                }),
                height: "100%",
                id: "xGZE_8UAL",
                layoutId: "xGZE_8UAL",
                style: { width: "100%" },
                title: "Is Proton green?",
                variant: "CxMu3T4FH",
                width: "100%",
              }),
            }),
            e(i.div, {
              className: "framer-bjrrdd-container",
              layoutDependency: d,
              layoutId: "XZsl7TSmt-container",
              children: e(b, {
                content: r(n, {
                  children: [
                    r("p", {
                      children: [
                        "There\u2019s no initial coin offering (\u201EICO\u201C), no pre-mining and no coin drop for developers or any other hidden incentive built into the token. ",
                        e("br", {}),
                        e("br", {}),
                        "Upon launch of the",
                        e("br", {}),
                        "Proton mainnet, all 110,000,000.0 PTN tokens will be available according to the emission schedule. To ensure the smoothness of the emission process we use the following formula for block rewards: ",
                        e("strong", {
                          children: "BaseReward = (MSupply \u2212 A) \u226B 18",
                        }),
                        ", where A is amount of previously generated coins. A new block is generated every 120 seconds in the Proton blockchain.",
                      ],
                    }),
                    e("p", {
                      children:
                        "Proton mainnet launched on September 16th, 2022.",
                    }),
                  ],
                }),
                height: "100%",
                id: "XZsl7TSmt",
                layoutId: "XZsl7TSmt",
                style: { width: "100%" },
                title: "What is the Proton emission schedule?",
                variant: "CxMu3T4FH",
                width: "100%",
              }),
            }),
            e(i.div, {
              className: "framer-1hz3dqp-container",
              layoutDependency: d,
              layoutId: "StPUaRbfw-container",
              children: e(b, {
                content: e(n, {
                  children: r("p", {
                    children: [
                      "There is a maximum supply of\xA0",
                      e("strong", { children: "100,000,000" }),
                      "\xA0PTN.",
                    ],
                  }),
                }),
                height: "100%",
                id: "StPUaRbfw",
                layoutId: "StPUaRbfw",
                style: { width: "100%" },
                title: "What is the maximum supply of Proton tokens?",
                variant: "CxMu3T4FH",
                width: "100%",
              }),
            }),
            e(i.div, {
              className: "framer-fb02mc-container",
              layoutDependency: d,
              layoutId: "fwAZI4DgM-container",
              children: e(b, {
                content: r(n, {
                  children: [
                    r("p", {
                      children: [
                        "First, there\u2019s the ",
                        e(P, {
                          href: "https://dynexcoin.org/get-dnx/#wallets",
                          openInNewTab: !1,
                          smoothScroll: !1,
                          children: e("a", {
                            children: "Proton Mobile Web Wallet",
                          }),
                        }),
                        ". No installation, no download, just two clicks to get started.",
                      ],
                    }),
                    r("p", {
                      children: [
                        "There is also a convenient Proton wallet app for Windows, MacOS and Linux. You can download and install it from our ",
                        e(P, {
                          href: "https://github.com/dynexcoin/Proton-Wallet-App/",
                          openInNewTab: !0,
                          smoothScroll: !1,
                          children: e("a", { children: "GitHub repository" }),
                        }),
                        ". Here\u2019s how it looks:",
                      ],
                    }),
                  ],
                }),
                height: "100%",
                id: "fwAZI4DgM",
                layoutId: "fwAZI4DgM",
                style: { width: "100%" },
                title: "Is there a wallet for Proton?",
                variant: "CxMu3T4FH",
                width: "100%",
              }),
            }),
            e(i.div, {
              className: "framer-v4nqt8-container",
              layoutDependency: d,
              layoutId: "edz9M1s3e-container",
              children: e(b, {
                content: r(n, {
                  children: [
                    e("p", {
                      children:
                        "Users who are contributing CPU resources are getting compensated on a \u201Cper computing step\u201D basis. As you are running a Neuromorphic Chip on your regular machine, the Proton chip will be simulated on it (by numerically integrating the equations of motion of the circuit, but that\u2019s more a tech detail, see below). We measure the speed of the integration in \u201CIntegration Steps\u201D, which is also the basis for your compensation. You can choose how much you charge per 1,000 integration steps, which is then matched with the computing requests and what their budget is. As a rule of thumb, 1,000 integration steps require around 1 minute of real time on a Macbook Pro per core. You can run multiple cores with the command \u201Cstart_dynexchip <NUMBER OF THREADS>\u201D:",
                    }),
                    e("p", {
                      children:
                        "To stop your Proton chips, use the command \u201Cstop_dynexchip\u201D. You will be compensated every 1,000 integration steps with PTN which you will receive in the wallet you have specified (or from where you have started the chips). Every 1,000 steps your node submits your proof-of-work of your computations to the customer, who in turn can quickly verify the correctness of the calculation.",
                    }),
                    e("p", {
                      children: e(P, {
                        href: "https://github.com/dynexcoin/Proton",
                        openInNewTab: !0,
                        smoothScroll: !1,
                        children: e("a", {
                          children: "RUN YOUR NEUROMORPHIC CHIP",
                        }),
                      }),
                    }),
                  ],
                }),
                height: "100%",
                id: "edz9M1s3e",
                layoutId: "edz9M1s3e",
                style: { width: "100%" },
                title: "How can I run a Proton node?",
                variant: "CxMu3T4FH",
                width: "100%",
              }),
            }),
            e(i.div, {
              className: "framer-myqr2i-container",
              layoutDependency: d,
              layoutId: "GKqpvvyDD-container",
              children: e(b, {
                content: r(n, {
                  children: [
                    e("p", {
                      children:
                        "Users who are contributing CPU resources are getting compensated on a \u201Cper computing step\u201D basis. As you are running a Neuromorphic Chip on your regular machine, the Proton chip will be simulated on it (by numerically integrating the equations of motion of the circuit, but that\u2019s more a tech detail, see below). We measure the speed of the integration in \u201CIntegration Steps\u201D, which is also the basis for your compensation. You can choose how much you charge per 1,000 integration steps, which is then matched with the computing requests and what their budget is. As a rule of thumb, 1,000 integration steps require around 1 minute of real time on a Macbook Pro per core. You can run multiple cores with the command \u201Cstart_dynexchip <NUMBER OF THREADS>\u201D:",
                    }),
                    e("p", {
                      children:
                        "To stop your Proton chips, use the command \u201Cstop_dynexchip\u201D. You will be compensated every 1,000 integration steps with PTN which you will receive in the wallet you have specified (or from where you have started the chips). Every 1,000 steps your node submits your proof-of-work of your computations to the customer, who in turn can quickly verify the correctness of the calculation.",
                    }),
                  ],
                }),
                height: "100%",
                id: "GKqpvvyDD",
                layoutId: "GKqpvvyDD",
                style: { width: "100%" },
                title:
                  "How much do I earn when I run a Proton Chip on my machine?",
                variant: "CxMu3T4FH",
                width: "100%",
              }),
            }),
            e(i.div, {
              className: "framer-1qdysrg-container",
              layoutDependency: d,
              layoutId: "n9y9lRJSo-container",
              children: e(b, {
                content: r(n, {
                  children: [
                    e("p", {
                      children:
                        "Proton mining is based on\xA0a memory-hard algorithm which is designed to be Proof of Work algorithm. It can run on CPUs and on most low-end GPUs at cooler temperatures than other algorithms \u2013 increasing mining equipment longevity.",
                    }),
                    e("p", {
                      children: e(P, {
                        href: { hash: ":pW1NbyMLj", webPageId: "s3i5rh3Vt" },
                        openInNewTab: !1,
                        smoothScroll: !0,
                        children: e("a", { children: "Start Mining \u2192" }),
                      }),
                    }),
                  ],
                }),
                height: "100%",
                id: "n9y9lRJSo",
                layoutId: "n9y9lRJSo",
                style: { width: "100%" },
                title: "How do I mine Proton?",
                variant: "CxMu3T4FH",
                width: "100%",
              }),
            }),
            e(i.div, {
              className: "framer-18l5y4z-container",
              layoutDependency: d,
              layoutId: "b3w58e9W4-container",
              children: e(b, {
                content: r(n, {
                  children: [
                    e("p", {
                      children:
                        "Proton mining is based on\xA0a memory-hard algorithm which is designed to be Proof of Work algorithm. Instead of searching for hashes to secure the blockchain, Proton mining also performs useful computations, for example for Machine Learning, AI, medical research, optimization problems and more.",
                    }),
                    e("p", {
                      children: e(P, {
                        href: { hash: ":pW1NbyMLj", webPageId: "s3i5rh3Vt" },
                        openInNewTab: !1,
                        smoothScroll: !0,
                        children: e("a", { children: "Start Mining \u2192" }),
                      }),
                    }),
                  ],
                }),
                height: "100%",
                id: "b3w58e9W4",
                layoutId: "b3w58e9W4",
                style: { width: "100%" },
                title: "Why Proof-of-Work?",
                variant: "CxMu3T4FH",
                width: "100%",
              }),
            }),
            e(i.div, {
              className: "framer-151wfky-container",
              layoutDependency: d,
              layoutId: "PUO9c9C77-container",
              children: e(b, {
                content: r(n, {
                  children: [
                    e("p", {
                      children:
                        "Neuromorphic computers offer a number of fundamental operational advantages:",
                    }),
                    r("ul", {
                      style: {
                        "--framer-font-size": "16px",
                        "--framer-text-alignment": "start",
                        "--framer-text-color": "rgb(255, 255, 255)",
                        "--framer-text-transform": "none",
                      },
                      children: [
                        e("li", {
                          "data-preset-tag": "p",
                          children: e("p", {
                            children:
                              "Inherently parallel operation is a characteristic of neuromorphic computers, where all neurons and synapses can potentially operate simultaneously; however, when compared with the parallelized von Neumann systems, neurons and synapses perform relatively simple computations.",
                          }),
                        }),
                        e("li", {
                          "data-preset-tag": "p",
                          children: e("p", {
                            children:
                              "Memory and processing are co-located: in neuromorphic hardware, there is no concept of separating memory and processing. In many implementations, neurons and synapses perform processing and store values in tandem, despite the fact that neurons are sometimes thought of as processing units and synapses as memory units. By combining the processor and memory, the von Neumann bottleneck regarding processor/memory separation is mitigated, resulting in a reduction in maximum throughput. Furthermore, this collocation reduces the need for data access from the main memory, which consumes a large amount of energy compared to compute energy.",
                          }),
                        }),
                        e("li", {
                          "data-preset-tag": "p",
                          children: e("p", {
                            children:
                              "Neuromorphic computers have inherent scalability since adding more neuromorphic chips increases the number of neurons and synapses. . In order to run larger and larger networks, it is possible to treat multiple physical neuromorphic chips as a single large neuromorphic implementation. Several large-scale neuromorphic hardware systems have been successfully implemented, including SpiNNaker and Loihi.",
                          }),
                        }),
                        e("li", {
                          "data-preset-tag": "p",
                          children: e("p", {
                            children:
                              "Neuromorphic computers use event-driven computation (meaning, computing only when available data is available) and temporally sparse activity to achieve extremely high computational efficiency. There is no work being performed by neurons and synapses unless there are spikes to be processed, and typically spikes are relatively sparse in the network operation.",
                          }),
                        }),
                        e("li", {
                          "data-preset-tag": "p",
                          children: e("p", {
                            children:
                              "Stochasticity can be incorporated into neuromorphic computers, for instance when neurons fire, to accommodate noise.",
                          }),
                        }),
                      ],
                    }),
                    e("p", {
                      children: e("br", { className: "trailing-break" }),
                    }),
                  ],
                }),
                height: "100%",
                id: "PUO9c9C77",
                layoutId: "PUO9c9C77",
                style: { width: "100%" },
                title: "Why neuromorphic computing?",
                variant: "CxMu3T4FH",
                width: "100%",
              }),
            }),
            e(i.div, {
              className: "framer-1jxf0sg-container",
              layoutDependency: d,
              layoutId: "F5mPjAlTV-container",
              children: e(b, {
                content: e(n, {
                  children: e("p", {
                    children:
                      "Proton can be mined on laptops which have a GPU.",
                  }),
                }),
                height: "100%",
                id: "F5mPjAlTV",
                layoutId: "F5mPjAlTV",
                style: { width: "100%" },
                title: "Can I run the Proton Neuromorphic Chip on my Laptop?",
                variant: "CxMu3T4FH",
                width: "100%",
              }),
            }),
            e(i.div, {
              className: "framer-1s4vplo-container",
              layoutDependency: d,
              layoutId: "fNF_UnQh9-container",
              children: e(b, {
                content: e(n, {
                  children: e("p", {
                    children:
                      "Due to its nature as a platform, Proton is expected to support long-term contracts for at least the lifetime of an average person. Proton focuses on using stable, well-tested solutions. Many of the solutions used in Proton have been formalized in papers that have been presented at peer-reviewed conferences and have been widely discussed in the community.",
                  }),
                }),
                height: "100%",
                id: "fNF_UnQh9",
                layoutId: "fNF_UnQh9",
                style: { width: "100%" },
                title: "Can Proton scale?",
                variant: "CxMu3T4FH",
                width: "100%",
              }),
            }),
          ],
        }),
      }),
    });
  }),
  ka = [
    '.framer-kNFx0[data-border="true"]::after, .framer-kNFx0 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-kNFx0.framer-1m1rmjh, .framer-kNFx0 .framer-1m1rmjh { display: block; }",
    ".framer-kNFx0.framer-1dqrxcf { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 488px; }",
    ".framer-kNFx0 .framer-pr4065-container, .framer-kNFx0 .framer-wj0e3h-container, .framer-kNFx0 .framer-fwwaez-container, .framer-kNFx0 .framer-1hj3fhs-container, .framer-kNFx0 .framer-bjrrdd-container, .framer-kNFx0 .framer-1hz3dqp-container, .framer-kNFx0 .framer-fb02mc-container, .framer-kNFx0 .framer-v4nqt8-container, .framer-kNFx0 .framer-myqr2i-container, .framer-kNFx0 .framer-1qdysrg-container, .framer-kNFx0 .framer-18l5y4z-container, .framer-kNFx0 .framer-151wfky-container, .framer-kNFx0 .framer-1jxf0sg-container, .framer-kNFx0 .framer-1s4vplo-container { flex: none; height: auto; position: relative; width: 100%; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-kNFx0.framer-1dqrxcf { gap: 0px; } .framer-kNFx0.framer-1dqrxcf > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-kNFx0.framer-1dqrxcf > :first-child { margin-top: 0px; } .framer-kNFx0.framer-1dqrxcf > :last-child { margin-bottom: 0px; } }",
  ],
  ge = L(va, ka, "framer-kNFx0"),
  ye = ge;
ge.displayName = "FAQ";
ge.defaultProps = { height: 1006, width: 488 };
H(ge, [...ha]);
var _a = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FramerskApfVVem",
      slots: [],
      annotations: {
        framerImmutableVariables: "true",
        framerContractVersion: "1",
        framerDisplayContentsDiv: "false",
        framerIntrinsicHeight: "1006",
        framerIntrinsicWidth: "488",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]}}}',
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
var Ca = g(qe),
  Fa = g(xe),
  Sr = fe(s),
  Sa = g(ve),
  Ia = g(je),
  Ir = ce(je),
  qa = g(ze),
  Ne = ce(ze),
  ne = wr(i.div),
  Ra = g(F),
  He = fe(we),
  qr = fe(f),
  ja = g(te),
  za = Ie(i.div),
  Da = g(Fe),
  Ta = ce(Fe),
  Aa = g(ye),
  Wa = $e(Ie(ye), Pe),
  Va = g(Se);
var Ma = {
    aiBkCFdCW: "(min-width: 810px) and (max-width: 1199px)",
    qMySm2RTM: "(min-width: 1200px)",
    tkyLmJZY4: "(max-width: 809px)",
  },
  La = () => typeof document < "u",
  Rr = "framer-2k4NN",
  Pa = {
    aiBkCFdCW: "framer-v-xqsgsl",
    qMySm2RTM: "framer-v-kfllx4",
    tkyLmJZY4: "framer-v-1lqxe9y",
  },
  Ha = { oDJvo1yNO: new Ze(() => import("./cWoFoNZEk-0-QUYFIEQX.mjs")) },
  Ua = (a) => {
    let t = [];
    for (; a; ) {
      let l = Ha[a.id];
      if (l) {
        let o = l.preload();
        o && t.push(o);
      }
      a = a.fallback;
    }
    if (t.length > 0) return Promise.all(t);
  };
var k = (a, t) => `perspective(1200px) ${t}`,
  Ea = (a, t) => `${t} rotate(-180deg)`,
  Ue = {
    opacity: 0,
    rotate: 30,
    rotateX: 30,
    rotateY: 0,
    scale: 1,
    x: 0,
    y: 0,
  },
  B = { damping: 90, delay: 0, mass: 1, stiffness: 400, type: "spring" },
  Ee = {
    opacity: 0,
    rotate: 30,
    rotateX: 30,
    rotateY: 0,
    scale: 1,
    transition: B,
    x: 0,
    y: 0,
  },
  jr = { opacity: 0, rotate: 0, scale: 1, x: 0, y: 20 },
  zr = { opacity: 0, rotate: 0, scale: 1, transition: B, x: 0, y: 20 },
  Tr = { damping: 30, delay: 0, mass: 1, stiffness: 400, type: "spring" },
  Dr = { opacity: 0, rotate: 0, scale: 1, transition: Tr, x: 0, y: 0 },
  ie = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    transition: Tr,
    x: 0,
    y: 0,
  },
  oe = { opacity: 0.001, rotate: 0, scale: 1, x: 0, y: 0 },
  Oe = De(),
  Oa = { Desktop: "qMySm2RTM", Phone: "tkyLmJZY4", Tablet: "aiBkCFdCW" },
  Ba = ({ height: a, id: t, width: l, ...o }) => {
    var h, p;
    return {
      ...o,
      variant:
        (p = (h = Oa[o.variant]) !== null && h !== void 0 ? h : o.variant) !==
          null && p !== void 0
          ? p
          : "qMySm2RTM",
    };
  },
  Ja = A(function (a, t) {
    let { activeLocale: l, setLocale: o } = M(),
      { style: h, className: p, layoutId: c, variant: u, ...C } = Ba(a);
    Be(() => {
      let w = De(void 0, l);
      if (((document.title = w.title || ""), w.viewport)) {
        var Y;
        (Y = document.querySelector('meta[name="viewport"]')) === null ||
          Y === void 0 ||
          Y.setAttribute("content", w.viewport);
      }
      if (w.bodyClassName)
        return (
          Array.from(document.body.classList)
            .filter((U) => U.startsWith("framer-body-"))
            .map((U) => document.body.classList.remove(U)),
          document.body.classList.add(`${w.bodyClassName}-framer-2k4NN`),
          () => {
            document.body.classList.remove(`${w.bodyClassName}-framer-2k4NN`);
          }
        );
    }, [void 0, l]);
    let [x, J] = Qe(u, Ma, !1),
      S = void 0,
      _ = Ua(l);
    if (_) throw _;
    let I = R(null),
      y = Je("DkCOA8DwN"),
      T = R(null),
      d = () => (["aiBkCFdCW", "tkyLmJZY4"].includes(x) ? !La() : !0),
      q = W(),
      N = [ue, _r, $];
    return (
      Ge({}),
      e(Xe.Provider, {
        value: { primaryVariantId: "qMySm2RTM", variantClassNames: Pa },
        children: r(V, {
          id: c ?? q,
          children: [
            r(i.div, {
              ...C,
              className: z(Rr, ...N, "framer-kfllx4", p),
              ref: t ?? I,
              style: { ...h },
              children: [
                e(m, {
                  children: e(s, {
                    className: "framer-1gm2qp9-container",
                    children: e(D, {
                      breakpoint: x,
                      overrides: {
                        aiBkCFdCW: { variant: "vRz6iFx98" },
                        tkyLmJZY4: { variant: "dxtA8R9ro" },
                      },
                      children: e(qe, {
                        height: "100%",
                        id: "XEH996tRt",
                        layoutId: "XEH996tRt",
                        style: { maxWidth: "100%", width: "100%" },
                        variant: "eoTXJYY6N",
                        width: "100%",
                      }),
                    }),
                  }),
                }),
                e("div", {
                  background: {
                    alt: "",
                    fit: "fill",
                    intrinsicHeight: 1800,
                    intrinsicWidth: 2960,
                    pixelHeight: 1800,
                    pixelWidth: 2960,
                    src: "https://framerusercontent.com/images/sFRCThLDPJ219yeRopNhXPG2zDY.jpg",
                  },
                  className: "framer-1cfk5z4",
                  "data-framer-name": "Hero",
                  name: "Hero",
                  children: r("div", {
                    className: "framer-wd8wsn",
                    "data-framer-name": "Title",
                    name: "Title",
                    children: [
                      e(m, {
                        children: e(Sr, {
                          __framer__styleTransformEffectEnabled: !0,
                          __framer__transformTargets: [
                            {
                              target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                x: 0,
                                y: 0,
                              },
                            },
                            {
                              target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                x: 270,
                                y: 0,
                              },
                            },
                          ],
                          __framer__transformTrigger: "onScroll",
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: "framer-1141kba-container",
                          transformTemplate: k,
                          children: e(D, {
                            breakpoint: x,
                            overrides: {
                              aiBkCFdCW: {
                                font: {
                                  font: "Rigid Square Regular",
                                  fontSize: 72,
                                  fontWeight: 400,
                                  letterSpacing: 6,
                                  lineHeight: 1.1,
                                  lineHeightPixels: 100,
                                  lineHeightType: !0,
                                  offset: 0,
                                  textAlign: "left",
                                  whiteSpace: "pre-wrap",
                                },
                              },
                              tkyLmJZY4: {
                                font: {
                                  font: "Rigid Square Regular",
                                  fontSize: 72,
                                  fontWeight: 400,
                                  letterSpacing: 6,
                                  lineHeight: 1.1,
                                  lineHeightPixels: 100,
                                  lineHeightType: !0,
                                  offset: 0,
                                  textAlign: "left",
                                  whiteSpace: "pre-wrap",
                                },
                              },
                            },
                            children: e(xe, {
                              color:
                                "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                              effectOptions: {
                                opacity: 0,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                x: 0,
                                y: 100,
                              },
                              font: {
                                font: "Rigid Square Regular",
                                fontSize: 96,
                                fontWeight: 400,
                                letterSpacing: 6,
                                lineHeight: 1.1,
                                lineHeightPixels: 100,
                                lineHeightType: !0,
                                offset: 0,
                                textAlign: "left",
                                whiteSpace: "pre-wrap",
                              },
                              height: "100%",
                              id: "Kw6o52dTC",
                              layoutId: "Kw6o52dTC",
                              overflow: !1,
                              perWord: !1,
                              stagger: 0.05,
                              style: { width: "100%" },
                              text: "HOW",
                              transitionOptions: {
                                damping: 90,
                                delay: 0.5,
                                duration: 2,
                                ease: [0.44, 0, 0.56, 1],
                                mass: 1,
                                stiffness: 400,
                                type: "spring",
                              },
                              type: "letter",
                              variant: !0,
                              width: "100%",
                            }),
                          }),
                        }),
                      }),
                      e(m, {
                        children: e(Sr, {
                          __framer__styleTransformEffectEnabled: !0,
                          __framer__transformTargets: [
                            {
                              target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                x: 0,
                                y: 0,
                              },
                            },
                            {
                              target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                x: -270,
                                y: 0,
                              },
                            },
                          ],
                          __framer__transformTrigger: "onScroll",
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: "framer-3g3p58-container",
                          transformTemplate: k,
                          children: e(D, {
                            breakpoint: x,
                            overrides: {
                              aiBkCFdCW: {
                                font: {
                                  font: "Rigid Square Regular",
                                  fontSize: 72,
                                  fontWeight: 400,
                                  letterSpacing: 6,
                                  lineHeight: 1.1,
                                  lineHeightPixels: 100,
                                  lineHeightType: !0,
                                  offset: 0,
                                  textAlign: "left",
                                  whiteSpace: "pre-wrap",
                                },
                              },
                              tkyLmJZY4: {
                                font: {
                                  font: "Rigid Square Regular",
                                  fontSize: 72,
                                  fontWeight: 400,
                                  letterSpacing: 6,
                                  lineHeight: 1.1,
                                  lineHeightPixels: 100,
                                  lineHeightType: !0,
                                  offset: 0,
                                  textAlign: "left",
                                  whiteSpace: "pre-wrap",
                                },
                              },
                            },
                            children: e(xe, {
                              color:
                                "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                              effectOptions: {
                                opacity: 0,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                x: 0,
                                y: 100,
                              },
                              font: {
                                font: "Rigid Square Regular",
                                fontSize: 96,
                                fontWeight: 400,
                                letterSpacing: 6,
                                lineHeight: 1.1,
                                lineHeightPixels: 100,
                                lineHeightType: !0,
                                offset: 0,
                                textAlign: "left",
                                whiteSpace: "pre-wrap",
                              },
                              height: "100%",
                              id: "isaHvRcCa",
                              layoutId: "isaHvRcCa",
                              overflow: !1,
                              perWord: !1,
                              stagger: 0.05,
                              style: { width: "100%" },
                              text: "PROTON WORKS",
                              transitionOptions: {
                                damping: 90,
                                delay: 0.6,
                                duration: 2,
                                ease: [0.44, 0, 0.56, 1],
                                mass: 1,
                                stiffness: 400,
                                type: "spring",
                              },
                              type: "letter",
                              variant: !0,
                              width: "100%",
                            }),
                          }),
                        }),
                      }),
                      e(m, {
                        children: e(s, {
                          className: "framer-9w12ql-container",
                          transformTemplate: Ea,
                          children: e(Ir, {
                            __framer__animateOnce: !1,
                            __framer__obscuredVariantId: "cKtAfc2mS",
                            __framer__threshold: 0.5,
                            __framer__variantAppearEffectEnabled: !0,
                            __framer__visibleVariantId: "BfiNgCzTr",
                            height: "100%",
                            id: "Bxh9YpsOQ",
                            layoutId: "Bxh9YpsOQ",
                            style: { height: "100%", width: "100%" },
                            variant: "cKtAfc2mS",
                            width: "100%",
                          }),
                        }),
                      }),
                      e(m, {
                        children: e(s, {
                          className: "framer-1cf9paa-container",
                          children: e(Ir, {
                            __framer__animateOnce: !1,
                            __framer__obscuredVariantId: "cKtAfc2mS",
                            __framer__threshold: 0,
                            __framer__variantAppearEffectEnabled: !0,
                            __framer__visibleVariantId: "BfiNgCzTr",
                            height: "100%",
                            id: "HXFXipwnj",
                            layoutId: "HXFXipwnj",
                            style: { height: "100%", width: "100%" },
                            variant: "cKtAfc2mS",
                            width: "100%",
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                e(D, {
                  breakpoint: x,
                  overrides: {
                    aiBkCFdCW: {
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
                    },
                  },
                  children: r("div", {
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
                    className: "framer-14igq1",
                    "data-framer-name": "Content",
                    id: y,
                    name: "Content",
                    ref: T,
                    children: [
                      r("div", {
                        className: "framer-1o7yx6a",
                        "data-framer-name": "Step1",
                        name: "Step1",
                        children: [
                          r("div", {
                            className: "framer-hu7g7m",
                            "data-framer-name": "Left Col",
                            name: "Left Col",
                            children: [
                              e(m, {
                                children: e(s, {
                                  className: "framer-xk1fql-container",
                                  children: e(Ne, {
                                    __framer__animateOnce: !1,
                                    __framer__obscuredVariantId: "JnoUcnydt",
                                    __framer__threshold: 1,
                                    __framer__variantAppearEffectEnabled: !0,
                                    __framer__visibleVariantId: "yN4DNxohH",
                                    height: "100%",
                                    id: "wGopAzILG",
                                    layoutId: "wGopAzILG",
                                    style: { height: "100%", width: "100%" },
                                    variant: "JnoUcnydt",
                                    width: "100%",
                                  }),
                                }),
                              }),
                              r(ne, {
                                className: "framer-y7tzvk",
                                children: [
                                  e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(n, {
                                      children: r("h2", {
                                        className:
                                          "framer-styles-preset-1wml6uu",
                                        "data-styles-preset": "fVxnimdqP",
                                        children: [
                                          "Run a ",
                                          e("br", {}),
                                          "Compute Job",
                                        ],
                                      }),
                                    }),
                                    className: "framer-re8a33",
                                    "data-framer-name": "Run a Compute Job",
                                    fonts: ["Inter"],
                                    name: "Run a Compute Job",
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                  e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(n, {
                                      children: e("p", {
                                        className:
                                          "framer-styles-preset-21ogod",
                                        "data-styles-preset": "xZndidUCt",
                                        children:
                                          "Computing tasks are published to the Proton platform conveniently through Python using the Proton SDK. ",
                                      }),
                                    }),
                                    className: "framer-mvp5ci",
                                    "data-framer-name":
                                      "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                    fonts: ["Inter"],
                                    name: "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              r(ne, {
                                className: "framer-1c3reqe",
                                children: [
                                  r(i.div, {
                                    className: "framer-1jmob15",
                                    children: [
                                      e(m, {
                                        children: e(s, {
                                          className: "framer-1all2jz-container",
                                          children: e(F, {
                                            GOS9P5DB5: "01",
                                            height: "100%",
                                            id: "JSbyRhCaT",
                                            layoutId: "JSbyRhCaT",
                                            width: "100%",
                                          }),
                                        }),
                                      }),
                                      e(f, {
                                        __fromCanvasComponent: !0,
                                        children: e(n, {
                                          children: e("p", {
                                            className:
                                              "framer-styles-preset-11ut0g7",
                                            "data-styles-preset": "Auy8Lx_6q",
                                            children:
                                              "Define the computing task in Python",
                                          }),
                                        }),
                                        className: "framer-z9e42f",
                                        "data-framer-name":
                                          "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                        fonts: ["Inter"],
                                        name: "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  r(i.div, {
                                    className: "framer-1umbdlp",
                                    children: [
                                      e(m, {
                                        children: e(s, {
                                          className: "framer-1er6efw-container",
                                          children: e(F, {
                                            GOS9P5DB5: "02",
                                            height: "100%",
                                            id: "tQTiU7TWR",
                                            layoutId: "tQTiU7TWR",
                                            width: "100%",
                                          }),
                                        }),
                                      }),
                                      e(f, {
                                        __fromCanvasComponent: !0,
                                        children: e(n, {
                                          children: e("p", {
                                            className:
                                              "framer-styles-preset-11ut0g7",
                                            "data-styles-preset": "Auy8Lx_6q",
                                            children:
                                              "Buy & deposit PTN (FIAT based)",
                                          }),
                                        }),
                                        className: "framer-1bv04r9",
                                        "data-framer-name":
                                          "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                        fonts: ["Inter"],
                                        name: "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              e(ne, {
                                className: "framer-qnky9t",
                                children: r(i.div, {
                                  className: "framer-1ee7m8l",
                                  children: [
                                    e(m, {
                                      children: e(s, {
                                        className: "framer-skumw9-container",
                                        children: e(F, {
                                          GOS9P5DB5: "03",
                                          height: "100%",
                                          id: "CyXYTmHkH",
                                          layoutId: "CyXYTmHkH",
                                          width: "100%",
                                        }),
                                      }),
                                    }),
                                    e(f, {
                                      __fromCanvasComponent: !0,
                                      children: e(n, {
                                        children: e("p", {
                                          className:
                                            "framer-styles-preset-11ut0g7",
                                          "data-styles-preset": "Auy8Lx_6q",
                                          children:
                                            "Define block fee / solution reward and run the computation",
                                        }),
                                      }),
                                      className: "framer-1bxowey",
                                      "data-framer-name":
                                        "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                      fonts: ["Inter"],
                                      name: "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          d() &&
                            e("div", {
                              className:
                                "framer-1x31jbz hidden-xqsgsl hidden-1lqxe9y",
                              "data-framer-name": "Right Col",
                              name: "Right Col",
                              children: e(He, {
                                __framer__animate: { transition: B },
                                __framer__animateOnce: !1,
                                __framer__enter: Ue,
                                __framer__exit: Ee,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                background: {
                                  alt: "",
                                  fit: "fit",
                                  intrinsicHeight: 1008,
                                  intrinsicWidth: 930,
                                  pixelHeight: 1008,
                                  pixelWidth: 930,
                                  positionX: "center",
                                  positionY: "center",
                                  sizes:
                                    "max(max((min(100vw, 1260px) - 144px) / 2, 0px), 400px)",
                                  src: "https://framerusercontent.com/images/GNrDtIuMvMg1doCpY18a8dPfacs.png",
                                  srcSet:
                                    "https://framerusercontent.com/images/GNrDtIuMvMg1doCpY18a8dPfacs.png 930w",
                                },
                                className: "framer-fix750",
                                "data-framer-name": "Image",
                                name: "Image",
                                transformTemplate: k,
                              }),
                            }),
                        ],
                      }),
                      r("div", {
                        className: "framer-7mw4m1",
                        "data-framer-name": "Step2",
                        name: "Step2",
                        children: [
                          d() &&
                            e("div", {
                              className:
                                "framer-m61kcw hidden-xqsgsl hidden-1lqxe9y",
                              "data-framer-name": "Right Col",
                              name: "Right Col",
                              children: e(He, {
                                __framer__animate: { transition: B },
                                __framer__animateOnce: !1,
                                __framer__enter: Ue,
                                __framer__exit: Ee,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                background: {
                                  alt: "",
                                  fit: "fit",
                                  intrinsicHeight: 1008,
                                  intrinsicWidth: 930,
                                  loading: "lazy",
                                  pixelHeight: 1008,
                                  pixelWidth: 930,
                                  positionX: "center",
                                  positionY: "center",
                                  sizes:
                                    "max(max((min(100vw, 1260px) - 144px) / 2, 0px), 400px)",
                                  src: "https://framerusercontent.com/images/QtqLSa8tH4bDSMzWJBX58gPg.png",
                                  srcSet:
                                    "https://framerusercontent.com/images/QtqLSa8tH4bDSMzWJBX58gPg.png 930w",
                                },
                                className: "framer-hm00y2",
                                "data-framer-name": "Image",
                                name: "Image",
                                transformTemplate: k,
                              }),
                            }),
                          r("div", {
                            className: "framer-3budrh",
                            "data-framer-name": "Left Col",
                            name: "Left Col",
                            children: [
                              e(m, {
                                children: e(s, {
                                  className: "framer-10ewitt-container",
                                  children: e(Ne, {
                                    __framer__animateOnce: !1,
                                    __framer__obscuredVariantId: "JnoUcnydt",
                                    __framer__threshold: 1,
                                    __framer__variantAppearEffectEnabled: !0,
                                    __framer__visibleVariantId: "yN4DNxohH",
                                    height: "100%",
                                    id: "flRcPwMtR",
                                    layoutId: "flRcPwMtR",
                                    style: { height: "100%", width: "100%" },
                                    variant: "JnoUcnydt",
                                    width: "100%",
                                  }),
                                }),
                              }),
                              r(ne, {
                                className: "framer-1l1i9mr",
                                children: [
                                  e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(n, {
                                      children: e("h2", {
                                        className:
                                          "framer-styles-preset-1wml6uu",
                                        "data-styles-preset": "fVxnimdqP",
                                        children: "Proton Mallob Activates",
                                      }),
                                    }),
                                    className: "framer-1a02mv8",
                                    "data-framer-name": "Run a Compute Job",
                                    fonts: ["Inter"],
                                    name: "Run a Compute Job",
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                  e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(n, {
                                      children: e("p", {
                                        className:
                                          "framer-styles-preset-21ogod",
                                        "data-styles-preset": "xZndidUCt",
                                        children:
                                          "Miners aid in solving tasks by mining PTN. Proton Mallob, a system that organizes and prioritizes the jobs submitted by Proton clients, begins operating.",
                                      }),
                                    }),
                                    className: "framer-12921g7",
                                    "data-framer-name":
                                      "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                    fonts: ["Inter"],
                                    name: "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              r(ne, {
                                className: "framer-ik8pws",
                                children: [
                                  r(i.div, {
                                    className: "framer-1byu8qa",
                                    children: [
                                      e(m, {
                                        children: e(s, {
                                          className: "framer-6893lv-container",
                                          children: e(F, {
                                            GOS9P5DB5: "01",
                                            height: "100%",
                                            id: "gAU1_MKJd",
                                            layoutId: "gAU1_MKJd",
                                            width: "100%",
                                          }),
                                        }),
                                      }),
                                      e(f, {
                                        __fromCanvasComponent: !0,
                                        children: e(n, {
                                          children: e("p", {
                                            className:
                                              "framer-styles-preset-11ut0g7",
                                            "data-styles-preset": "Auy8Lx_6q",
                                            children:
                                              "Setting number of chips to be utilized",
                                          }),
                                        }),
                                        className: "framer-9c5iov",
                                        "data-framer-name":
                                          "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                        fonts: ["Inter"],
                                        name: "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  r(i.div, {
                                    className: "framer-pgurog",
                                    children: [
                                      e(m, {
                                        children: e(s, {
                                          className: "framer-pliroz-container",
                                          children: e(F, {
                                            GOS9P5DB5: "02",
                                            height: "100%",
                                            id: "smVkJq1qd",
                                            layoutId: "smVkJq1qd",
                                            width: "100%",
                                          }),
                                        }),
                                      }),
                                      e(f, {
                                        __fromCanvasComponent: !0,
                                        children: e(n, {
                                          children: e("p", {
                                            className:
                                              "framer-styles-preset-11ut0g7",
                                            "data-styles-preset": "Auy8Lx_6q",
                                            children:
                                              "Markov-chain based parameter tuning",
                                          }),
                                        }),
                                        className: "framer-12bwumo",
                                        "data-framer-name":
                                          "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                        fonts: ["Inter"],
                                        name: "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  r(i.div, {
                                    className: "framer-hspv56",
                                    children: [
                                      e(m, {
                                        children: e(s, {
                                          className: "framer-136g0z4-container",
                                          children: e(F, {
                                            GOS9P5DB5: "03",
                                            height: "100%",
                                            id: "ljanDr8py",
                                            layoutId: "ljanDr8py",
                                            width: "100%",
                                          }),
                                        }),
                                      }),
                                      e(f, {
                                        __fromCanvasComponent: !0,
                                        children: e(n, {
                                          children: e("p", {
                                            className:
                                              "framer-styles-preset-11ut0g7",
                                            "data-styles-preset": "Auy8Lx_6q",
                                            children:
                                              "Computational data exchange runs for tasks",
                                          }),
                                        }),
                                        className: "framer-1bhgj7b",
                                        "data-framer-name":
                                          "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                        fonts: ["Inter"],
                                        name: "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  r(i.div, {
                                    className: "framer-1j9u5i3",
                                    children: [
                                      e(m, {
                                        children: e(s, {
                                          className: "framer-1l5ll85-container",
                                          children: e(F, {
                                            GOS9P5DB5: "04",
                                            height: "100%",
                                            id: "zhkXftUHf",
                                            layoutId: "zhkXftUHf",
                                            width: "100%",
                                          }),
                                        }),
                                      }),
                                      e(f, {
                                        __fromCanvasComponent: !0,
                                        children: e(n, {
                                          children: e("p", {
                                            className:
                                              "framer-styles-preset-11ut0g7",
                                            "data-styles-preset": "Auy8Lx_6q",
                                            children:
                                              "Solution & computation verification (PoUW)",
                                          }),
                                        }),
                                        className: "framer-12a0q17",
                                        "data-framer-name":
                                          "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                        fonts: ["Inter"],
                                        name: "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      r("div", {
                        className: "framer-1i9bekp",
                        "data-framer-name": "Step3",
                        name: "Step3",
                        children: [
                          r("div", {
                            className: "framer-1i6w5o9",
                            "data-framer-name": "Left Col",
                            name: "Left Col",
                            children: [
                              e(m, {
                                children: e(s, {
                                  className: "framer-16vaphy-container",
                                  children: e(Ne, {
                                    __framer__animateOnce: !1,
                                    __framer__obscuredVariantId: "JnoUcnydt",
                                    __framer__threshold: 1,
                                    __framer__variantAppearEffectEnabled: !0,
                                    __framer__visibleVariantId: "yN4DNxohH",
                                    height: "100%",
                                    id: "f61aCxEAe",
                                    layoutId: "f61aCxEAe",
                                    style: { height: "100%", width: "100%" },
                                    variant: "JnoUcnydt",
                                    width: "100%",
                                  }),
                                }),
                              }),
                              r(ne, {
                                className: "framer-4tkfqr",
                                children: [
                                  e(qr, {
                                    __framer__animate: { transition: B },
                                    __framer__animateOnce: !0,
                                    __framer__enter: jr,
                                    __framer__exit: zr,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __fromCanvasComponent: !0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    children: e(n, {
                                      children: e("h2", {
                                        className:
                                          "framer-styles-preset-1wml6uu",
                                        "data-styles-preset": "fVxnimdqP",
                                        children: "Miners\u2019 Job Reward",
                                      }),
                                    }),
                                    className: "framer-np1dt0",
                                    "data-framer-name": "Run a Compute Job",
                                    fonts: ["Inter"],
                                    name: "Run a Compute Job",
                                    transformTemplate: k,
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                  e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(n, {
                                      children: e("p", {
                                        className:
                                          "framer-styles-preset-21ogod",
                                        "data-styles-preset": "xZndidUCt",
                                        children:
                                          "Upon finalisation of a computational task (job), ProtonSolve miners receive a significant amount of PTN as block reward.",
                                      }),
                                    }),
                                    className: "framer-1wmky6k",
                                    "data-framer-name":
                                      "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                    fonts: ["Inter"],
                                    name: "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              r("div", {
                                className: "framer-3fy6dg",
                                children: [
                                  r("div", {
                                    className: "framer-e1rcih",
                                    children: [
                                      e(m, {
                                        children: e(s, {
                                          className: "framer-1adyv69-container",
                                          children: e(F, {
                                            GOS9P5DB5: "01",
                                            height: "100%",
                                            id: "QfVlJV5nR",
                                            layoutId: "QfVlJV5nR",
                                            width: "100%",
                                          }),
                                        }),
                                      }),
                                      e(f, {
                                        __fromCanvasComponent: !0,
                                        children: e(n, {
                                          children: e("p", {
                                            className:
                                              "framer-styles-preset-11ut0g7",
                                            "data-styles-preset": "Auy8Lx_6q",
                                            children:
                                              "Miners receive PTN for the task completion",
                                          }),
                                        }),
                                        className: "framer-zfbiis",
                                        "data-framer-name":
                                          "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                        fonts: ["Inter"],
                                        name: "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  r("div", {
                                    className: "framer-fisvdh",
                                    children: [
                                      e(m, {
                                        children: e(s, {
                                          className: "framer-re3l1e-container",
                                          children: e(F, {
                                            GOS9P5DB5: "02",
                                            height: "100%",
                                            id: "lhTClu7B_",
                                            layoutId: "lhTClu7B_",
                                            width: "100%",
                                          }),
                                        }),
                                      }),
                                      e(f, {
                                        __fromCanvasComponent: !0,
                                        children: e(n, {
                                          children: e("p", {
                                            className:
                                              "framer-styles-preset-11ut0g7",
                                            "data-styles-preset": "Auy8Lx_6q",
                                            children:
                                              "Rewards distributed once block fees are calculated",
                                          }),
                                        }),
                                        className: "framer-124yjd3",
                                        "data-framer-name":
                                          "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                        fonts: ["Inter"],
                                        name: "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          d() &&
                            e("div", {
                              className:
                                "framer-velztz hidden-xqsgsl hidden-1lqxe9y",
                              "data-framer-name": "Right Col",
                              name: "Right Col",
                              children: e(He, {
                                __framer__animate: { transition: B },
                                __framer__animateOnce: !1,
                                __framer__enter: Ue,
                                __framer__exit: Ee,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 1008,
                                  intrinsicWidth: 930,
                                  loading: "lazy",
                                  pixelHeight: 1008,
                                  pixelWidth: 930,
                                  sizes:
                                    "max(max((min(100vw, 1260px) - 144px) / 2, 0px), 400px)",
                                  src: "https://framerusercontent.com/images/sS4OsevI9FcvYGmNbrpBsl6T8.png",
                                  srcSet:
                                    "https://framerusercontent.com/images/sS4OsevI9FcvYGmNbrpBsl6T8.png 930w",
                                },
                                className: "framer-1vg5w9q",
                                "data-framer-name": "Image",
                                name: "Image",
                                transformTemplate: k,
                              }),
                            }),
                        ],
                      }),
                      e("div", {
                        className: "framer-5iyzgf",
                        "data-framer-name": "Supported Tasks",
                        name: "Supported Tasks",
                        children: r("div", {
                          className: "framer-104g1pf",
                          "data-framer-name": "Top",
                          name: "Top",
                          children: [
                            e(qr, {
                              __framer__animate: { transition: B },
                              __framer__animateOnce: !0,
                              __framer__enter: jr,
                              __framer__exit: zr,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __fromCanvasComponent: !0,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              children: e(n, {
                                children: e("h2", {
                                  className: "framer-styles-preset-1wml6uu",
                                  "data-styles-preset": "fVxnimdqP",
                                  children: "Practical Applications",
                                }),
                              }),
                              className: "framer-tgd8t8",
                              "data-framer-name": "Run a Compute Job",
                              fonts: ["Inter"],
                              name: "Run a Compute Job",
                              transformTemplate: k,
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                            r(za, {
                              className: "framer-1cf81o5",
                              children: [
                                e(m, {
                                  children: e(s, {
                                    className: "framer-1nxt8hz-container",
                                    children: e(te, {
                                      FH8vLkjmb:
                                        "Boosting Artificial Intelligence",
                                      height: "100%",
                                      id: "iXB2X3ZBh",
                                      layoutId: "iXB2X3ZBh",
                                      lxuGyuudz:
                                        "Quantum-Boltzmann-Machines, Quantum Single-Image-Super-Resolution, Quantum-Support-Vector-Machines, Mode-Assisted Quantum Restricted Boltzmann Machines ",
                                      style: { width: "100%" },
                                      width: "100%",
                                    }),
                                  }),
                                }),
                                e(m, {
                                  children: e(s, {
                                    className: "framer-z0q2z7-container",
                                    children: e(te, {
                                      FH8vLkjmb: "Pharmaceutical Applications",
                                      height: "100%",
                                      id: "dlGJOXUgK",
                                      layoutId: "dlGJOXUgK",
                                      lxuGyuudz:
                                        "Innovations in the fields of Drug Repurposing with 3D molecular quantum methods, RNA-folding of very large strcutures and Enzyme-target prediction.",
                                      style: { width: "100%" },
                                      width: "100%",
                                    }),
                                  }),
                                }),
                                e(m, {
                                  children: e(s, {
                                    className: "framer-u4um8x-container",
                                    children: e(te, {
                                      FH8vLkjmb:
                                        "Automotive, Aerospace, Super-Sports & Space",
                                      height: "100%",
                                      id: "UuP174a2Y",
                                      layoutId: "UuP174a2Y",
                                      lxuGyuudz:
                                        "Quantum Computation of Fluid Dynamics, empowering engineers to accelerate the QCFD simulation process, fostering innovation and driving advancements in fields reliant on fluid dynamics analyses.",
                                      style: { width: "100%" },
                                      width: "100%",
                                    }),
                                  }),
                                }),
                                e(m, {
                                  children: e(s, {
                                    className: "framer-4xoa8p-container",
                                    children: e(te, {
                                      FH8vLkjmb: "Financial Services",
                                      height: "100%",
                                      id: "PXLkuy55p",
                                      layoutId: "PXLkuy55p",
                                      lxuGyuudz:
                                        "Stock portfolio optimisation with quantum algorithms by overcoming typical limitations of exponentially growing complexity by number of stocks.",
                                      style: { height: "100%", width: "100%" },
                                      width: "100%",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      r("div", {
                        className: "framer-1pnzdiv",
                        children: [
                          r("div", {
                            className: "framer-1lmf8fj",
                            "data-framer-name": "Title",
                            name: "Title",
                            children: [
                              e(m, {
                                children: e(s, {
                                  className: "framer-79gt14-container",
                                  children: e(Ta, {
                                    __framer__animateOnce: !1,
                                    __framer__obscuredVariantId: "oz5SgFFkh",
                                    __framer__threshold: 0.5,
                                    __framer__variantAppearEffectEnabled: !0,
                                    __framer__visibleVariantId: "ullo7U4po",
                                    height: "100%",
                                    id: "a8H8yNOLU",
                                    layoutId: "a8H8yNOLU",
                                    style: { height: "100%", width: "100%" },
                                    variant: "oz5SgFFkh",
                                    width: "100%",
                                  }),
                                }),
                              }),
                              r("div", {
                                className: "framer-hbefbq",
                                "data-framer-name": "Title",
                                name: "Title",
                                children: [
                                  e(D, {
                                    breakpoint: x,
                                    overrides: {
                                      aiBkCFdCW: {
                                        "data-framer-appear-id": "8a8amj",
                                        animate: v(
                                          "animate",
                                          "8a8amj",
                                          ie,
                                          "xqsgsl"
                                        ),
                                        initial: v(
                                          "initial",
                                          "8a8amj",
                                          oe,
                                          "xqsgsl"
                                        ),
                                        transformTemplate: O("8a8amj", k),
                                      },
                                      tkyLmJZY4: {
                                        "data-framer-appear-id": "1aeolye",
                                        animate: v(
                                          "animate",
                                          "1aeolye",
                                          ie,
                                          "1lqxe9y"
                                        ),
                                        initial: v(
                                          "initial",
                                          "1aeolye",
                                          oe,
                                          "1lqxe9y"
                                        ),
                                        transformTemplate: O("1aeolye", k),
                                      },
                                    },
                                    children: e(f, {
                                      __fromCanvasComponent: !0,
                                      animate: v(
                                        "animate",
                                        "t7isvv",
                                        ie,
                                        "kfllx4"
                                      ),
                                      children: e(n, {
                                        children: e("h2", {
                                          className:
                                            "framer-styles-preset-1wml6uu",
                                          "data-styles-preset": "fVxnimdqP",
                                          children:
                                            "Frequently Asked Questions",
                                        }),
                                      }),
                                      className: "framer-t7isvv",
                                      "data-framer-appear-id": "t7isvv",
                                      "data-framer-name": "Title",
                                      exit: Dr,
                                      fonts: ["Inter"],
                                      initial: v(
                                        "initial",
                                        "t7isvv",
                                        oe,
                                        "kfllx4"
                                      ),
                                      name: "Title",
                                      transformTemplate: O("t7isvv", k),
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  e(D, {
                                    breakpoint: x,
                                    overrides: {
                                      aiBkCFdCW: {
                                        "data-framer-appear-id": "3xwoqh",
                                        animate: v(
                                          "animate",
                                          "3xwoqh",
                                          ie,
                                          "xqsgsl"
                                        ),
                                        initial: v(
                                          "initial",
                                          "3xwoqh",
                                          oe,
                                          "xqsgsl"
                                        ),
                                        transformTemplate: O("3xwoqh", k),
                                      },
                                      tkyLmJZY4: {
                                        "data-framer-appear-id": "1125tib",
                                        animate: v(
                                          "animate",
                                          "1125tib",
                                          ie,
                                          "1lqxe9y"
                                        ),
                                        children: e(n, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "Q1VTVE9NO1JpZ2lkIFNxdWFyZSBSZWd1bGFy",
                                              "--framer-font-family":
                                                '"Rigid Square Regular", sans-serif',
                                              "--framer-font-size": "14px",
                                              "--framer-letter-spacing":
                                                "0.37em",
                                              "--framer-line-height": "140%",
                                              "--framer-text-alignment": "left",
                                              "--framer-text-color":
                                                "var(--token-50859c1e-b9ab-4124-b93a-6ea1cca8c715, rgb(98, 103, 111))",
                                              "--framer-text-transform":
                                                "uppercase",
                                            },
                                            children: "And The answers",
                                          }),
                                        }),
                                        initial: v(
                                          "initial",
                                          "1125tib",
                                          oe,
                                          "1lqxe9y"
                                        ),
                                        transformTemplate: O("1125tib", k),
                                      },
                                    },
                                    children: e(f, {
                                      __fromCanvasComponent: !0,
                                      animate: v(
                                        "animate",
                                        "udxq0j",
                                        ie,
                                        "kfllx4"
                                      ),
                                      children: e(n, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "Q1VTVE9NO1JpZ2lkIFNxdWFyZSBSZWd1bGFy",
                                            "--framer-font-family":
                                              '"Rigid Square Regular", sans-serif',
                                            "--framer-font-size": "14px",
                                            "--framer-letter-spacing": "1.09em",
                                            "--framer-line-height": "140%",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color":
                                              "var(--token-50859c1e-b9ab-4124-b93a-6ea1cca8c715, rgb(98, 103, 111))",
                                            "--framer-text-transform":
                                              "uppercase",
                                          },
                                          children: "And The answers",
                                        }),
                                      }),
                                      className: "framer-udxq0j",
                                      "data-framer-appear-id": "udxq0j",
                                      "data-framer-name": "Subtitle",
                                      exit: Dr,
                                      fonts: ["CUSTOM;Rigid Square Regular"],
                                      initial: v(
                                        "initial",
                                        "udxq0j",
                                        oe,
                                        "kfllx4"
                                      ),
                                      name: "Subtitle",
                                      transformTemplate: O("udxq0j", k),
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                              }),
                              e("div", {
                                className: "framer-8ghkbk",
                                "data-framer-name": "Line Container",
                                name: "Line Container",
                                children: e(m, {
                                  children: e(s, {
                                    className: "framer-1fhx7t2-container",
                                    children: e(Ne, {
                                      __framer__animateOnce: !1,
                                      __framer__obscuredVariantId: "JnoUcnydt",
                                      __framer__threshold: 0.5,
                                      __framer__variantAppearEffectEnabled: !0,
                                      __framer__visibleVariantId: "yN4DNxohH",
                                      height: "100%",
                                      id: "VtbHki7VN",
                                      layoutId: "VtbHki7VN",
                                      style: { height: "100%", width: "100%" },
                                      variant: "JnoUcnydt",
                                      width: "100%",
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                          r("div", {
                            className: "framer-1b3z7lt",
                            "data-framer-name": "Content",
                            name: "Content",
                            children: [
                              e(m, {
                                children: e(s, {
                                  className: "framer-5xsgj7-container",
                                  children: e(Wa, {
                                    height: "100%",
                                    id: "IKdqlKc_C",
                                    layoutId: "IKdqlKc_C",
                                    style: { width: "100%" },
                                    width: "100%",
                                  }),
                                }),
                              }),
                              e("div", {
                                className: "framer-jjb5zf",
                                "data-framer-name": "Left",
                                name: "Left",
                                children: e(f, {
                                  __fromCanvasComponent: !0,
                                  children: e(n, {
                                    children: e("p", {
                                      className: "framer-styles-preset-21ogod",
                                      "data-styles-preset": "xZndidUCt",
                                      children:
                                        "The Proton Platform leverages this dynamics to accelerate and enable new methods for solving discrete optimization, sampling, and machine learning problems. Proton uses a process called neuromorphic annealing to search for solutions to a problem. Neuromorphic annealing is fundamentally different from classical computing. ",
                                    }),
                                  }),
                                  className: "framer-1ldkdlq",
                                  "data-framer-name":
                                    "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                  fonts: ["Inter"],
                                  name: "Send your job request to Proton platform. It can be a computational problem and will be queued accordingly to be solved",
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                e(we, {
                  background: {
                    alt: "",
                    fit: "fill",
                    intrinsicHeight: 1384,
                    intrinsicWidth: 5104,
                    pixelHeight: 1384,
                    pixelWidth: 5104,
                    sizes: "calc(100vw + 240px)",
                    src: "https://framerusercontent.com/images/ESZPbyHyGeJ6veiCv3wIKEb0bWU.png",
                    srcSet:
                      "https://framerusercontent.com/images/ESZPbyHyGeJ6veiCv3wIKEb0bWU.png?scale-down-to=512 512w,https://framerusercontent.com/images/ESZPbyHyGeJ6veiCv3wIKEb0bWU.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/ESZPbyHyGeJ6veiCv3wIKEb0bWU.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/ESZPbyHyGeJ6veiCv3wIKEb0bWU.png?scale-down-to=4096 4096w,https://framerusercontent.com/images/ESZPbyHyGeJ6veiCv3wIKEb0bWU.png 5104w",
                  },
                  className: "framer-17x7df3",
                  "data-framer-name": "GradientBG",
                  name: "GradientBG",
                }),
                e("div", {
                  className: "framer-uvaq3r",
                  "data-framer-name": "Footer Container",
                  name: "Footer Container",
                  children: e(m, {
                    children: e(s, {
                      className: "framer-1fbc39y-container",
                      children: e(D, {
                        breakpoint: x,
                        overrides: {
                          aiBkCFdCW: { variant: "aK_4VtDvt" },
                          tkyLmJZY4: { variant: "CP4euYBms" },
                        },
                        children: e(Se, {
                          height: "100%",
                          id: "qDuDBG0zu",
                          layoutId: "qDuDBG0zu",
                          style: { width: "100%" },
                          variant: "lKW5sKZWt",
                          width: "100%",
                        }),
                      }),
                    }),
                  }),
                }),
              ],
            }),
            e("div", { className: z(Rr, ...N), id: "overlay" }),
          ],
        }),
      })
    );
  }),
  Ya = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    `.${Oe.bodyClassName}-framer-2k4NN { background: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, rgb(7, 7, 19)) /* {"name":"Dark BG"} */; }`,
    ".framer-2k4NN.framer-bqfo7l, .framer-2k4NN .framer-bqfo7l { display: block; }",
    ".framer-2k4NN.framer-kfllx4 { align-content: center; align-items: center; background-color: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, #070713); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1200px; }",
    ".framer-2k4NN .framer-1gm2qp9-container { flex: none; height: auto; left: 50%; max-width: 1260px; position: absolute; top: 32px; transform: translateX(-50%); width: 100%; z-index: 10; }",
    ".framer-2k4NN .framer-1cfk5z4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; z-index: 3; }",
    ".framer-2k4NN .framer-wd8wsn { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 800px; overflow: visible; padding: 0px 0px 0px 0px; position: relative; transform: perspective(1200px); width: 100%; z-index: 2; }",
    ".framer-2k4NN .framer-1141kba-container { flex: none; height: auto; position: relative; transform: perspective(1200px); width: 500px; }",
    ".framer-2k4NN .framer-3g3p58-container { flex: none; height: auto; position: relative; transform: perspective(1200px); width: 100%; }",
    ".framer-2k4NN .framer-1lr5wic { flex: none; height: 1000px; left: -350px; overflow: visible; position: absolute; top: -425px; width: 1500px; z-index: 4; }",
    ".framer-2k4NN .framer-1ftl3lr-container { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: calc(50.055617352614036% - 100% / 2); width: 100%; z-index: 1; }",
    ".framer-2k4NN .framer-9w12ql-container { bottom: -321px; flex: none; height: 350px; position: absolute; right: -373px; transform: rotate(-180deg); width: 325px; z-index: 1; }",
    ".framer-2k4NN .framer-1cf9paa-container { flex: none; height: 350px; left: -373px; position: absolute; top: -329px; width: 325px; z-index: 1; }",
    ".framer-2k4NN .framer-14igq1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; max-width: 1260px; overflow: visible; padding: 0px 48px 48px 48px; position: relative; width: 100%; }",
    ".framer-2k4NN .framer-1o7yx6a { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-2k4NN .framer-hu7g7m, .framer-2k4NN .framer-3budrh, .framer-2k4NN .framer-1i6w5o9 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: flex-start; min-width: 500px; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }",
    ".framer-2k4NN .framer-xk1fql-container, .framer-2k4NN .framer-10ewitt-container, .framer-2k4NN .framer-16vaphy-container { flex: none; height: 60px; position: relative; width: 100%; }",
    ".framer-2k4NN .framer-y7tzvk, .framer-2k4NN .framer-1l1i9mr, .framer-2k4NN .framer-4tkfqr { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-2k4NN .framer-re8a33, .framer-2k4NN .framer-mvp5ci, .framer-2k4NN .framer-1a02mv8, .framer-2k4NN .framer-12921g7, .framer-2k4NN .framer-1wmky6k, .framer-2k4NN .framer-1ldkdlq { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-2k4NN .framer-1c3reqe, .framer-2k4NN .framer-3fy6dg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: flex-start; overflow: visible; padding: 16px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-2k4NN .framer-1jmob15, .framer-2k4NN .framer-1umbdlp { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1px; }",
    ".framer-2k4NN .framer-1all2jz-container, .framer-2k4NN .framer-1er6efw-container, .framer-2k4NN .framer-skumw9-container, .framer-2k4NN .framer-6893lv-container, .framer-2k4NN .framer-pliroz-container, .framer-2k4NN .framer-136g0z4-container, .framer-2k4NN .framer-1l5ll85-container, .framer-2k4NN .framer-1adyv69-container, .framer-2k4NN .framer-re3l1e-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-2k4NN .framer-z9e42f, .framer-2k4NN .framer-1bv04r9, .framer-2k4NN .framer-1bxowey, .framer-2k4NN .framer-9c5iov, .framer-2k4NN .framer-12bwumo, .framer-2k4NN .framer-1bhgj7b, .framer-2k4NN .framer-12a0q17, .framer-2k4NN .framer-zfbiis, .framer-2k4NN .framer-124yjd3 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }",
    ".framer-2k4NN .framer-qnky9t { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: 8px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-2k4NN .framer-1ee7m8l { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; max-width: 270px; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1px; }",
    ".framer-2k4NN .framer-1x31jbz { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: auto; justify-content: flex-start; min-height: 400px; min-width: 400px; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }",
    ".framer-2k4NN .framer-fix750, .framer-2k4NN .framer-hm00y2, .framer-2k4NN .framer-1vg5w9q { flex: none; height: 100%; position: relative; transform: perspective(1200px); width: 100%; }",
    ".framer-2k4NN .framer-7mw4m1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; overflow: visible; padding: 164px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-2k4NN .framer-m61kcw { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: auto; justify-content: flex-start; min-height: 400px; min-width: 400px; overflow: visible; padding: 24px 0px 0px 0px; position: relative; width: 1px; }",
    ".framer-2k4NN .framer-ik8pws { display: grid; flex: none; gap: 36px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(200px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: visible; padding: 16px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-2k4NN .framer-1byu8qa, .framer-2k4NN .framer-pgurog { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: 100%; justify-content: flex-start; justify-self: start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-2k4NN .framer-hspv56, .framer-2k4NN .framer-1j9u5i3 { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; justify-self: start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-2k4NN .framer-1i9bekp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; overflow: hidden; padding: 164px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-2k4NN .framer-np1dt0 { flex: none; height: auto; max-width: 450px; position: relative; transform: perspective(1200px); white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-2k4NN .framer-e1rcih, .framer-2k4NN .framer-fisvdh { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }",
    ".framer-2k4NN .framer-velztz { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: auto; justify-content: flex-start; min-height: 480px; min-width: 400px; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }",
    ".framer-2k4NN .framer-5iyzgf { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; overflow: visible; padding: 164px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-2k4NN .framer-104g1pf { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 128px 0px; position: relative; width: 100%; }",
    ".framer-2k4NN .framer-tgd8t8 { flex: none; height: auto; position: relative; transform: perspective(1200px); white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-2k4NN .framer-1cf81o5 { display: grid; flex: none; gap: 48px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(200px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: visible; padding: 16px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-2k4NN .framer-1nxt8hz-container, .framer-2k4NN .framer-z0q2z7-container, .framer-2k4NN .framer-u4um8x-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }",
    ".framer-2k4NN .framer-4xoa8p-container { align-self: start; flex: none; height: 100%; justify-self: start; position: relative; width: 100%; }",
    ".framer-2k4NN .framer-1pnzdiv { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-2k4NN .framer-1lmf8fj { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 72px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; z-index: 1; }",
    ".framer-2k4NN .framer-79gt14-container { flex: none; height: 350px; left: -369px; position: absolute; top: 16px; width: 325px; z-index: 1; }",
    ".framer-2k4NN .framer-hbefbq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 700px; }",
    ".framer-2k4NN .framer-t7isvv, .framer-2k4NN .framer-udxq0j { flex: none; height: auto; max-width: 700px; position: relative; transform: perspective(1200px); white-space: pre-wrap; width: auto; word-break: break-word; word-wrap: break-word; }",
    ".framer-2k4NN .framer-8ghkbk { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 16px 0px 0px 0px; position: relative; width: 1px; }",
    ".framer-2k4NN .framer-1fhx7t2-container { flex: 1 0 0px; height: 60px; position: relative; width: 1px; }",
    ".framer-2k4NN .framer-1b3z7lt { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 74px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-2k4NN .framer-5xsgj7-container { flex: none; height: auto; position: relative; width: 700px; }",
    ".framer-2k4NN .framer-jjb5zf { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }",
    ".framer-2k4NN .framer-17x7df3 { aspect-ratio: 4 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 360px); left: -120px; overflow: hidden; position: absolute; right: -120px; top: 0px; z-index: 1; }",
    ".framer-2k4NN .framer-uvaq3r { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1260px; overflow: hidden; padding: 0px 48px 0px 48px; position: relative; width: 100%; }",
    ".framer-2k4NN .framer-1fbc39y-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-2k4NN.framer-kfllx4, .framer-2k4NN .framer-1cfk5z4, .framer-2k4NN .framer-wd8wsn, .framer-2k4NN .framer-14igq1, .framer-2k4NN .framer-1o7yx6a, .framer-2k4NN .framer-hu7g7m, .framer-2k4NN .framer-y7tzvk, .framer-2k4NN .framer-1c3reqe, .framer-2k4NN .framer-1jmob15, .framer-2k4NN .framer-1umbdlp, .framer-2k4NN .framer-qnky9t, .framer-2k4NN .framer-1ee7m8l, .framer-2k4NN .framer-1x31jbz, .framer-2k4NN .framer-7mw4m1, .framer-2k4NN .framer-m61kcw, .framer-2k4NN .framer-3budrh, .framer-2k4NN .framer-1l1i9mr, .framer-2k4NN .framer-1byu8qa, .framer-2k4NN .framer-pgurog, .framer-2k4NN .framer-hspv56, .framer-2k4NN .framer-1j9u5i3, .framer-2k4NN .framer-1i9bekp, .framer-2k4NN .framer-1i6w5o9, .framer-2k4NN .framer-4tkfqr, .framer-2k4NN .framer-3fy6dg, .framer-2k4NN .framer-e1rcih, .framer-2k4NN .framer-fisvdh, .framer-2k4NN .framer-velztz, .framer-2k4NN .framer-5iyzgf, .framer-2k4NN .framer-104g1pf, .framer-2k4NN .framer-1pnzdiv, .framer-2k4NN .framer-1lmf8fj, .framer-2k4NN .framer-hbefbq, .framer-2k4NN .framer-8ghkbk, .framer-2k4NN .framer-1b3z7lt, .framer-2k4NN .framer-jjb5zf, .framer-2k4NN .framer-uvaq3r { gap: 0px; } .framer-2k4NN.framer-kfllx4 > *, .framer-2k4NN .framer-1cfk5z4 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-2k4NN.framer-kfllx4 > :first-child, .framer-2k4NN .framer-1cfk5z4 > :first-child, .framer-2k4NN .framer-wd8wsn > :first-child, .framer-2k4NN .framer-14igq1 > :first-child, .framer-2k4NN .framer-hu7g7m > :first-child, .framer-2k4NN .framer-y7tzvk > :first-child, .framer-2k4NN .framer-1x31jbz > :first-child, .framer-2k4NN .framer-m61kcw > :first-child, .framer-2k4NN .framer-3budrh > :first-child, .framer-2k4NN .framer-1l1i9mr > :first-child, .framer-2k4NN .framer-1i6w5o9 > :first-child, .framer-2k4NN .framer-4tkfqr > :first-child, .framer-2k4NN .framer-velztz > :first-child, .framer-2k4NN .framer-5iyzgf > :first-child, .framer-2k4NN .framer-104g1pf > :first-child, .framer-2k4NN .framer-1pnzdiv > :first-child, .framer-2k4NN .framer-hbefbq > :first-child, .framer-2k4NN .framer-jjb5zf > :first-child { margin-top: 0px; } .framer-2k4NN.framer-kfllx4 > :last-child, .framer-2k4NN .framer-1cfk5z4 > :last-child, .framer-2k4NN .framer-wd8wsn > :last-child, .framer-2k4NN .framer-14igq1 > :last-child, .framer-2k4NN .framer-hu7g7m > :last-child, .framer-2k4NN .framer-y7tzvk > :last-child, .framer-2k4NN .framer-1x31jbz > :last-child, .framer-2k4NN .framer-m61kcw > :last-child, .framer-2k4NN .framer-3budrh > :last-child, .framer-2k4NN .framer-1l1i9mr > :last-child, .framer-2k4NN .framer-1i6w5o9 > :last-child, .framer-2k4NN .framer-4tkfqr > :last-child, .framer-2k4NN .framer-velztz > :last-child, .framer-2k4NN .framer-5iyzgf > :last-child, .framer-2k4NN .framer-104g1pf > :last-child, .framer-2k4NN .framer-1pnzdiv > :last-child, .framer-2k4NN .framer-hbefbq > :last-child, .framer-2k4NN .framer-jjb5zf > :last-child { margin-bottom: 0px; } .framer-2k4NN .framer-wd8wsn > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-2k4NN .framer-14igq1 > *, .framer-2k4NN .framer-5iyzgf > *, .framer-2k4NN .framer-1pnzdiv > *, .framer-2k4NN .framer-jjb5zf > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-2k4NN .framer-1o7yx6a > *, .framer-2k4NN .framer-7mw4m1 > *, .framer-2k4NN .framer-1i9bekp > * { margin: 0px; margin-left: calc(48px / 2); margin-right: calc(48px / 2); } .framer-2k4NN .framer-1o7yx6a > :first-child, .framer-2k4NN .framer-1c3reqe > :first-child, .framer-2k4NN .framer-1jmob15 > :first-child, .framer-2k4NN .framer-1umbdlp > :first-child, .framer-2k4NN .framer-qnky9t > :first-child, .framer-2k4NN .framer-1ee7m8l > :first-child, .framer-2k4NN .framer-7mw4m1 > :first-child, .framer-2k4NN .framer-1byu8qa > :first-child, .framer-2k4NN .framer-pgurog > :first-child, .framer-2k4NN .framer-hspv56 > :first-child, .framer-2k4NN .framer-1j9u5i3 > :first-child, .framer-2k4NN .framer-1i9bekp > :first-child, .framer-2k4NN .framer-3fy6dg > :first-child, .framer-2k4NN .framer-e1rcih > :first-child, .framer-2k4NN .framer-fisvdh > :first-child, .framer-2k4NN .framer-1lmf8fj > :first-child, .framer-2k4NN .framer-8ghkbk > :first-child, .framer-2k4NN .framer-1b3z7lt > :first-child, .framer-2k4NN .framer-uvaq3r > :first-child { margin-left: 0px; } .framer-2k4NN .framer-1o7yx6a > :last-child, .framer-2k4NN .framer-1c3reqe > :last-child, .framer-2k4NN .framer-1jmob15 > :last-child, .framer-2k4NN .framer-1umbdlp > :last-child, .framer-2k4NN .framer-qnky9t > :last-child, .framer-2k4NN .framer-1ee7m8l > :last-child, .framer-2k4NN .framer-7mw4m1 > :last-child, .framer-2k4NN .framer-1byu8qa > :last-child, .framer-2k4NN .framer-pgurog > :last-child, .framer-2k4NN .framer-hspv56 > :last-child, .framer-2k4NN .framer-1j9u5i3 > :last-child, .framer-2k4NN .framer-1i9bekp > :last-child, .framer-2k4NN .framer-3fy6dg > :last-child, .framer-2k4NN .framer-e1rcih > :last-child, .framer-2k4NN .framer-fisvdh > :last-child, .framer-2k4NN .framer-1lmf8fj > :last-child, .framer-2k4NN .framer-8ghkbk > :last-child, .framer-2k4NN .framer-1b3z7lt > :last-child, .framer-2k4NN .framer-uvaq3r > :last-child { margin-right: 0px; } .framer-2k4NN .framer-hu7g7m > *, .framer-2k4NN .framer-3budrh > *, .framer-2k4NN .framer-1i6w5o9 > *, .framer-2k4NN .framer-104g1pf > * { margin: 0px; margin-bottom: calc(36px / 2); margin-top: calc(36px / 2); } .framer-2k4NN .framer-y7tzvk > *, .framer-2k4NN .framer-1l1i9mr > *, .framer-2k4NN .framer-4tkfqr > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-2k4NN .framer-1c3reqe > *, .framer-2k4NN .framer-3fy6dg > * { margin: 0px; margin-left: calc(36px / 2); margin-right: calc(36px / 2); } .framer-2k4NN .framer-1jmob15 > *, .framer-2k4NN .framer-1umbdlp > *, .framer-2k4NN .framer-1ee7m8l > *, .framer-2k4NN .framer-1byu8qa > *, .framer-2k4NN .framer-pgurog > *, .framer-2k4NN .framer-hspv56 > *, .framer-2k4NN .framer-1j9u5i3 > *, .framer-2k4NN .framer-e1rcih > *, .framer-2k4NN .framer-fisvdh > * { margin: 0px; margin-left: calc(24px / 2); margin-right: calc(24px / 2); } .framer-2k4NN .framer-qnky9t > * { margin: 0px; margin-left: calc(32px / 2); margin-right: calc(32px / 2); } .framer-2k4NN .framer-1x31jbz > *, .framer-2k4NN .framer-m61kcw > *, .framer-2k4NN .framer-velztz > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-2k4NN .framer-1lmf8fj > * { margin: 0px; margin-left: calc(72px / 2); margin-right: calc(72px / 2); } .framer-2k4NN .framer-hbefbq > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-2k4NN .framer-8ghkbk > *, .framer-2k4NN .framer-uvaq3r > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-2k4NN .framer-1b3z7lt > * { margin: 0px; margin-left: calc(74px / 2); margin-right: calc(74px / 2); } }",
    "@media (min-width: 1200px) { .framer-2k4NN .hidden-kfllx4 { display: none !important; } }",
    `@media (min-width: 810px) and (max-width: 1199px) { .framer-2k4NN .hidden-xqsgsl { display: none !important; } .${Oe.bodyClassName}-framer-2k4NN { background: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, rgb(7, 7, 19)) /* {"name":"Dark BG"} */; } .framer-2k4NN.framer-kfllx4 { width: 810px; } .framer-2k4NN .framer-wd8wsn { width: 80%; } .framer-2k4NN .framer-1lr5wic { aspect-ratio: 1.5 / 1; height: var(--framer-aspect-ratio-supported, 667px); left: -210px; top: -305px; width: 1000px; } .framer-2k4NN .framer-14igq1 { padding: 0px 48px 0px 48px; } .framer-2k4NN .framer-1o7yx6a { flex-direction: column; justify-content: flex-start; } .framer-2k4NN .framer-hu7g7m, .framer-2k4NN .framer-3budrh, .framer-2k4NN .framer-1i6w5o9, .framer-2k4NN .framer-jjb5zf { flex: none; width: 100%; } .framer-2k4NN .framer-7mw4m1 { flex-direction: column; padding: 72px 0px 0px 0px; } .framer-2k4NN .framer-1i9bekp { flex-direction: column; justify-content: flex-start; padding: 72px 0px 0px 0px; } .framer-2k4NN .framer-1cf81o5 { gap: 36px; } .framer-2k4NN .framer-1b3z7lt { flex-direction: column; } .framer-2k4NN .framer-5xsgj7-container { width: 100%; } .framer-2k4NN .framer-17x7df3 { height: var(--framer-aspect-ratio-supported, 263px); } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-2k4NN .framer-1o7yx6a, .framer-2k4NN .framer-7mw4m1, .framer-2k4NN .framer-1i9bekp, .framer-2k4NN .framer-1cf81o5, .framer-2k4NN .framer-1b3z7lt { gap: 0px; } .framer-2k4NN .framer-1o7yx6a > *, .framer-2k4NN .framer-7mw4m1 > *, .framer-2k4NN .framer-1i9bekp > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-2k4NN .framer-1o7yx6a > :first-child, .framer-2k4NN .framer-7mw4m1 > :first-child, .framer-2k4NN .framer-1i9bekp > :first-child, .framer-2k4NN .framer-1b3z7lt > :first-child { margin-top: 0px; } .framer-2k4NN .framer-1o7yx6a > :last-child, .framer-2k4NN .framer-7mw4m1 > :last-child, .framer-2k4NN .framer-1i9bekp > :last-child, .framer-2k4NN .framer-1b3z7lt > :last-child { margin-bottom: 0px; } .framer-2k4NN .framer-1cf81o5 > *, .framer-2k4NN .framer-1cf81o5 > :first-child, .framer-2k4NN .framer-1cf81o5 > :last-child { margin: 0px; } .framer-2k4NN .framer-1b3z7lt > * { margin: 0px; margin-bottom: calc(74px / 2); margin-top: calc(74px / 2); } }}`,
    `@media (max-width: 809px) { .framer-2k4NN .hidden-1lqxe9y { display: none !important; } .${Oe.bodyClassName}-framer-2k4NN { background: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, rgb(7, 7, 19)) /* {"name":"Dark BG"} */; } .framer-2k4NN.framer-kfllx4 { width: 390px; } .framer-2k4NN .framer-1gm2qp9-container { top: 0px; } .framer-2k4NN .framer-1cfk5z4 { align-content: flex-start; align-items: flex-start; padding: 0px 24px 0px 24px; } .framer-2k4NN .framer-1lr5wic { height: 339%; left: -277px; right: -543px; top: -359px; transform: rotate(-1deg); width: unset; } .framer-2k4NN .framer-1ftl3lr-container { height: 100%; top: calc(49.57983193277313% - 99.78991596638656% / 2); } .framer-2k4NN .framer-14igq1 { max-width: unset; padding: 0px 24px 0px 24px; } .framer-2k4NN .framer-1o7yx6a { flex-direction: column; justify-content: flex-start; } .framer-2k4NN .framer-hu7g7m, .framer-2k4NN .framer-3budrh, .framer-2k4NN .framer-1i6w5o9 { flex: none; gap: 32px; min-width: unset; width: 100%; } .framer-2k4NN .framer-1c3reqe, .framer-2k4NN .framer-3fy6dg { align-content: flex-start; align-items: flex-start; flex-direction: column; } .framer-2k4NN .framer-1jmob15, .framer-2k4NN .framer-1umbdlp, .framer-2k4NN .framer-e1rcih, .framer-2k4NN .framer-fisvdh, .framer-2k4NN .framer-jjb5zf, .framer-2k4NN .framer-1fbc39y-container { flex: none; width: 100%; } .framer-2k4NN .framer-7mw4m1 { flex-direction: column; padding: 72px 0px 0px 0px; } .framer-2k4NN .framer-ik8pws { grid-template-columns: repeat(1, minmax(200px, 1fr)); } .framer-2k4NN .framer-1i9bekp { flex-direction: column; justify-content: flex-start; padding: 72px 0px 0px 0px; } .framer-2k4NN .framer-104g1pf { padding: 0px 0px 0px 0px; } .framer-2k4NN .framer-1cf81o5 { gap: 36px; grid-template-columns: repeat(1, minmax(200px, 1fr)); } .framer-2k4NN .framer-1lmf8fj, .framer-2k4NN .framer-1b3z7lt { flex-direction: column; } .framer-2k4NN .framer-79gt14-container { order: 0; } .framer-2k4NN .framer-hbefbq { order: 2; width: 100%; } .framer-2k4NN .framer-8ghkbk { flex: none; order: 1; width: 100%; } .framer-2k4NN .framer-5xsgj7-container { width: 100%; } .framer-2k4NN .framer-17x7df3 { height: var(--framer-aspect-ratio-supported, 158px); } .framer-2k4NN .framer-uvaq3r { flex-direction: column; padding: 0px 24px 0px 24px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-2k4NN .framer-1o7yx6a, .framer-2k4NN .framer-hu7g7m, .framer-2k4NN .framer-1c3reqe, .framer-2k4NN .framer-7mw4m1, .framer-2k4NN .framer-3budrh, .framer-2k4NN .framer-1i9bekp, .framer-2k4NN .framer-1i6w5o9, .framer-2k4NN .framer-3fy6dg, .framer-2k4NN .framer-1cf81o5, .framer-2k4NN .framer-1lmf8fj, .framer-2k4NN .framer-1b3z7lt, .framer-2k4NN .framer-uvaq3r { gap: 0px; } .framer-2k4NN .framer-1o7yx6a > *, .framer-2k4NN .framer-7mw4m1 > *, .framer-2k4NN .framer-1i9bekp > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-2k4NN .framer-1o7yx6a > :first-child, .framer-2k4NN .framer-hu7g7m > :first-child, .framer-2k4NN .framer-1c3reqe > :first-child, .framer-2k4NN .framer-7mw4m1 > :first-child, .framer-2k4NN .framer-3budrh > :first-child, .framer-2k4NN .framer-1i9bekp > :first-child, .framer-2k4NN .framer-1i6w5o9 > :first-child, .framer-2k4NN .framer-3fy6dg > :first-child, .framer-2k4NN .framer-1lmf8fj > :first-child, .framer-2k4NN .framer-1b3z7lt > :first-child, .framer-2k4NN .framer-uvaq3r > :first-child { margin-top: 0px; } .framer-2k4NN .framer-1o7yx6a > :last-child, .framer-2k4NN .framer-hu7g7m > :last-child, .framer-2k4NN .framer-1c3reqe > :last-child, .framer-2k4NN .framer-7mw4m1 > :last-child, .framer-2k4NN .framer-3budrh > :last-child, .framer-2k4NN .framer-1i9bekp > :last-child, .framer-2k4NN .framer-1i6w5o9 > :last-child, .framer-2k4NN .framer-3fy6dg > :last-child, .framer-2k4NN .framer-1lmf8fj > :last-child, .framer-2k4NN .framer-1b3z7lt > :last-child, .framer-2k4NN .framer-uvaq3r > :last-child { margin-bottom: 0px; } .framer-2k4NN .framer-hu7g7m > *, .framer-2k4NN .framer-3budrh > *, .framer-2k4NN .framer-1i6w5o9 > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-2k4NN .framer-1c3reqe > *, .framer-2k4NN .framer-3fy6dg > * { margin: 0px; margin-bottom: calc(36px / 2); margin-top: calc(36px / 2); } .framer-2k4NN .framer-1cf81o5 > *, .framer-2k4NN .framer-1cf81o5 > :first-child, .framer-2k4NN .framer-1cf81o5 > :last-child { margin: 0px; } .framer-2k4NN .framer-1lmf8fj > * { margin: 0px; margin-bottom: calc(72px / 2); margin-top: calc(72px / 2); } .framer-2k4NN .framer-1b3z7lt > * { margin: 0px; margin-bottom: calc(74px / 2); margin-top: calc(74px / 2); } .framer-2k4NN .framer-uvaq3r > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }}`,
    ...he,
    ...kr,
    ...Q,
  ],
  be = L(Ja, Ya, "framer-2k4NN"),
  Vt = be;
be.displayName = "How It Works";
be.defaultProps = { height: 5942, width: 1200 };
H(
  be,
  [
    {
      explicitInter: !0,
      fonts: [
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
          family: "Rigid Square Regular",
          source: "custom",
          url: "https://framerusercontent.com/assets/2byiqNmSK7iIV1YW3mItnbQSRUc.otf",
        },
      ],
    },
    ...Ca,
    ...Fa,
    ...Sa,
    ...Ia,
    ...qa,
    ...Ra,
    ...ja,
    ...Da,
    ...Aa,
    ...Va,
    ...de(pe),
    ...de(vr),
    ...de(K),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Mt = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FramercWoFoNZEk",
      slots: [],
      annotations: {
        framerDisplayContentsDiv: "false",
        framerComponentViewportWidth: "true",
        framerResponsiveScreen: "",
        framerImmutableVariables: "true",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"aiBkCFdCW":{"layout":["fixed","auto"]},"tkyLmJZY4":{"layout":["fixed","auto"]}}}',
        framerIntrinsicHeight: "5942",
        framerContractVersion: "1",
        framerIntrinsicWidth: "1200",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
export { Mt as __FramerMetadata__, Vt as default };
//# sourceMappingURL=jzXVqYnt9dBn3gXb0tYzy7kFVeUpsneEUj5IKuCEyGg.HYN3MAFN.mjs.map

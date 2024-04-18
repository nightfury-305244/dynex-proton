import {
  a as V,
  b as me,
  c as ce,
  d as de,
  f as w,
} from "./chunk-Z6B2ZS7J.mjs";
import {
  C as A,
  G as C,
  N as H,
  S as c,
  W as Z,
  a as G,
  ca as T,
  e as r,
  ea as oe,
  g as z,
  ja as M,
  na as se,
  oa as le,
  qa as k,
  ra as E,
  s as ne,
  sa as F,
  t as ie,
  z as W,
} from "./chunk-ALOT7UQK.mjs";
import {
  d as v,
  j as K,
  o as re,
  q as j,
  t as ae,
  u as te,
  y as e,
  z as l,
} from "./chunk-DKTB2747.mjs";
le.loadWebFontsFromSelectors([]);
var fe = [],
  pe = [
    '.framer-7uzTt .framer-styles-preset-1wicq5s:not(.rich-text-wrapper), .framer-7uzTt .framer-styles-preset-1wicq5s.rich-text-wrapper a { --framer-link-current-text-color: var(--token-2678ca90-7bcd-460e-87c6-9327e3761be8, #66d8fa) /* {"name":"Dynex Blue"} */; --framer-link-hover-text-color: var(--token-1742c135-0874-4b11-bc38-cace343dbddc, #ffffff) /* {"name":"White/White"} */; --framer-link-text-color: var(--token-2678ca90-7bcd-460e-87c6-9327e3761be8, #66d8fa); --framer-link-text-decoration: none; }',
  ],
  he = "framer-7uzTt";
var ve = [
    "qWHqe9DNA",
    "HG9nxcAQZ",
    "wnhgyNZSn",
    "qL_75vhEL",
    "ii7YQuEKs",
    "a5lmV8vcV",
  ],
  be = {
    a5lmV8vcV: "framer-v-15s5btz",
    HG9nxcAQZ: "framer-v-13szk7s",
    ii7YQuEKs: "framer-v-1sh5xgy",
    qL_75vhEL: "framer-v-uxidwh",
    qWHqe9DNA: "framer-v-bvygqm",
    wnhgyNZSn: "framer-v-jrg22d",
  };
function we(n, ...t) {
  let s = {};
  return t?.forEach((i) => i && Object.assign(s, n[i])), s;
}
var De = {
    Step0: "qWHqe9DNA",
    Step1: "HG9nxcAQZ",
    Step2: "wnhgyNZSn",
    Step3: "qL_75vhEL",
    Step4: "ii7YQuEKs",
    Step5: "a5lmV8vcV",
  },
  Ie = {
    a5lmV8vcV: {
      damping: 60,
      delay: 0,
      duration: 0.3,
      ease: [0.44, 0, 0.56, 1],
      mass: 1,
      stiffness: 500,
      type: "spring",
    },
    default: {
      damping: 60,
      delay: 0,
      duration: 0.3,
      ease: [0.44, 0, 0.56, 1],
      mass: 1,
      stiffness: 500,
      type: !1,
    },
    ii7YQuEKs: {
      damping: 60,
      delay: 0,
      duration: 0.3,
      ease: [0.44, 0, 0.56, 1],
      mass: 1,
      stiffness: 500,
      type: "spring",
    },
  },
  Ce = K(function (
    {
      id: n,
      style: t,
      className: s,
      width: i,
      height: p,
      layoutId: d,
      variant: b = "qWHqe9DNA",
      ...I
    },
    R
  ) {
    let N = De[b] || b,
      {
        baseVariant: m,
        classNames: x,
        gestureVariant: B,
        setGestureState: u,
        setVariant: h,
        transition: a,
        variants: _,
      } = M({
        cycleOrder: ve,
        defaultVariant: "qWHqe9DNA",
        transitions: Ie,
        variant: N,
        variantClassNames: be,
      }),
      $ = _.join("-") + I.layoutDependency,
      { activeVariantCallback: g, delay: y } = T(m),
      ee = g(async (...P) => {
        await y(() => h("HG9nxcAQZ"), 50);
      }),
      O = g(async (...P) => {
        await y(() => h("wnhgyNZSn"), 50);
      }),
      Y = g(async (...P) => {
        await y(() => h("qL_75vhEL"), 50);
      }),
      Q = g(async (...P) => {
        await y(() => h("ii7YQuEKs"), 50);
      }),
      o = g(async (...P) => {
        await y(() => h("a5lmV8vcV"), 50);
      });
    oe(m, {
      a5lmV8vcV: void 0,
      default: ee,
      HG9nxcAQZ: O,
      ii7YQuEKs: o,
      qL_75vhEL: Q,
      wnhgyNZSn: Y,
    });
    let xe = j();
    return e(z, {
      id: d ?? xe,
      children: e(r.div, {
        initial: N,
        animate: _,
        onHoverStart: () => u({ isHovered: !0 }),
        onHoverEnd: () => u({ isHovered: !1 }),
        onTapStart: () => u({ isPressed: !0 }),
        onTap: () => u({ isPressed: !1 }),
        onTapCancel: () => u({ isPressed: !1 }),
        className: C("framer-LDB9V", x),
        style: { display: "contents" },
        children: e(r.div, {
          ...I,
          className: C("framer-bvygqm", s),
          "data-border": !0,
          "data-framer-name": "Step0",
          "data-highlight": !0,
          layoutDependency: $,
          layoutId: "qWHqe9DNA",
          ref: R,
          style: {
            "--border-bottom-width": "0px",
            "--border-color":
              'var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255)) /* {"name":"White/White"} */',
            "--border-left-width": "0px",
            "--border-right-width": "0px",
            "--border-style": "solid",
            "--border-top-width": "1px",
            opacity: 0,
            ...t,
          },
          transition: a,
          variants: {
            a5lmV8vcV: {
              "--border-color": "rgba(255, 255, 255, 0.5)",
              opacity: 1,
            },
            HG9nxcAQZ: { opacity: 1 },
            qL_75vhEL: { opacity: 1 },
          },
          ...we(
            {
              a5lmV8vcV: {
                "data-framer-name": "Step5",
                "data-highlight": void 0,
              },
              HG9nxcAQZ: { "data-framer-name": "Step1" },
              ii7YQuEKs: { "data-framer-name": "Step4" },
              qL_75vhEL: { "data-framer-name": "Step3" },
              wnhgyNZSn: { "data-framer-name": "Step2" },
            },
            m,
            B
          ),
        }),
      }),
    });
  }),
  ke = [
    '.framer-LDB9V [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-LDB9V .framer-12b64li { display: block; }",
    ".framer-LDB9V .framer-bvygqm { height: 12px; overflow: hidden; position: relative; width: 42px; }",
  ],
  q = H(Ce, ke, "framer-LDB9V"),
  L = q;
q.displayName = "LineFlicker";
q.defaultProps = { height: 12, width: 42 };
A(q, {
  variant: {
    options: [
      "qWHqe9DNA",
      "HG9nxcAQZ",
      "wnhgyNZSn",
      "qL_75vhEL",
      "ii7YQuEKs",
      "a5lmV8vcV",
    ],
    optionTitles: ["Step0", "Step1", "Step2", "Step3", "Step4", "Step5"],
    title: "Variant",
    type: W.Enum,
  },
});
E(q, []);
var Ve = F(L),
  qe = F(V),
  Le = F(w),
  Se = ["lKW5sKZWt", "aK_4VtDvt", "CP4euYBms"],
  Ne = "framer-1CD2I",
  _e = {
    aK_4VtDvt: "framer-v-mzhioa",
    CP4euYBms: "framer-v-nr6sku",
    lKW5sKZWt: "framer-v-1epdmp0",
  };
function D(n, ...t) {
  let s = {};
  return t?.forEach((i) => i && Object.assign(s, n[i])), s;
}
var Pe = {
  default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
};
var Ke = ({ value: n, children: t }) => {
    let s = re(G),
      i = n ?? s.transition,
      p = ae(() => ({ ...s, transition: i }), [JSON.stringify(i)]);
    return e(G.Provider, { value: p, children: t });
  },
  je = { Desktop: "lKW5sKZWt", Mobile: "CP4euYBms", Tablet: "aK_4VtDvt" },
  ze = ({ height: n, id: t, width: s, ...i }) => {
    var p, d;
    return {
      ...i,
      variant:
        (d = (p = je[i.variant]) !== null && p !== void 0 ? p : i.variant) !==
          null && d !== void 0
          ? d
          : "lKW5sKZWt",
    };
  },
  We = (n, t) => t.join("-") + n.layoutDependency,
  Ae = K(function (n, t) {
    let { activeLocale: s, setLocale: i } = ie(),
      { style: p, className: d, layoutId: b, variant: I, ...R } = ze(n),
      {
        baseVariant: f,
        classNames: N,
        gestureVariant: m,
        setGestureState: x,
        setVariant: B,
        transition: u,
        variants: h,
      } = M({
        cycleOrder: Se,
        defaultVariant: "lKW5sKZWt",
        transitions: Pe,
        variant: I,
        variantClassNames: _e,
      }),
      a = We(n, h),
      { activeVariantCallback: _, delay: $ } = T(f),
      g = _(async (...o) => {
        B("lKW5sKZWt");
      }),
      y = te(null),
      ee = ne(),
      O = () => !["aK_4VtDvt", "CP4euYBms"].includes(f),
      Y = j(),
      Q = [de, he];
    return e(z, {
      id: b ?? Y,
      children: e(Ke, {
        value: u,
        children: l(r.div, {
          ...R,
          animate: h,
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
          className: C(Ne, ...Q, "framer-1epdmp0", d, N),
          "data-framer-name": "Desktop",
          initial: I,
          layoutDependency: a,
          layoutId: "lKW5sKZWt",
          onHoverEnd: () => x({ isHovered: !1 }),
          onHoverStart: () => x({ isHovered: !0 }),
          onTap: () => x({ isPressed: !1 }),
          onTapCancel: () => x({ isPressed: !1 }),
          onTapStart: () => x({ isPressed: !0 }),
          ref: t ?? y,
          style: { ...p },
          ...D(
            {
              aK_4VtDvt: { "data-framer-name": "Tablet" },
              CP4euYBms: { "data-framer-name": "Mobile" },
            },
            f,
            m
          ),
          children: [
            l(r.div, {
              className: "framer-rwpjcm",
              "data-framer-name": "Top",
              layoutDependency: a,
              layoutId: "gDkRJ29O1",
              children: [
                l(r.div, {
                  className: "framer-1lm86fb",
                  "data-framer-name": "Top Row",
                  layoutDependency: a,
                  layoutId: "xSqJl5jtQ",
                  children: [
                    e(c, {
                      href: { webPageId: "augiA20Il" },
                      children: e(se, {
                        as: "a",
                        className: "framer-1fq34iy framer-c5b2dc",
                        layout: "position",
                        layoutDependency: a,
                        layoutId: "HpuLeU7kh",
                        opacity: 1,
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="74" height="74" viewBox="0 0 99 99" fill="#bfc7d4"><defs id="SvgjsDefs4044"></defs><g id="SvgjsG4045" featurekey="symbolFeature-0" transform="matrix(1.142987698267014,0,0,1.142987698267014,-7.150531633339118,-7.17224846064832)" ><path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M91.288,54.316c-0.643-1.411-1.308-2.543-1.854-3.376  c-0.561-0.856-1-1.405-1.173-1.624c-1.093-1.378-3.678-4.591-6.491-8.079V33.97c0-0.078-0.011-0.153-0.012-0.231V11.324  c0,0-3.258-2.207-5.854-3.204c-2.421-0.93-5.877-1.845-10.109-1.845c-4.783,0-8.664,1.18-11.464,2.457  c-1.411,0.643-2.543,1.308-3.376,1.854c-0.856,0.561-1.405,1-1.624,1.173c-1.378,1.094-4.591,3.678-8.079,6.491h-7.267  c-0.043,0-0.084,0.006-0.127,0.006H11.304c0,0-2.207,3.258-3.204,5.854c-0.93,2.421-1.844,5.877-1.844,10.109  c0,4.783,1.18,8.664,2.457,11.464c0.643,1.411,1.308,2.543,1.854,3.376c0.561,0.856,1,1.405,1.173,1.624  c1.093,1.378,3.678,4.591,6.491,8.079v7.267c0,0.085,0.011,0.167,0.013,0.251v22.396c0,0,3.258,2.207,5.854,3.204  c2.421,0.93,5.878,1.844,10.109,1.844c4.783,0,8.664-1.18,11.464-2.456c1.411-0.643,2.543-1.308,3.377-1.854  c0.856-0.561,1.405-1,1.624-1.173c1.378-1.093,4.591-3.678,8.079-6.491h7.267c0.046,0,0.091-0.007,0.137-0.007h22.543  c0,0,2.207-3.258,3.204-5.854c0.93-2.421,1.844-5.877,1.844-10.109C93.744,60.997,92.564,57.116,91.288,54.316z M71.654,28.71  c-1.421-1.505-3.546-2.565-5.787-2.565c-4.322,0-7.825,3.503-7.825,7.825c0,1.704,0.823,3.656,1.772,4.959  c0.86,1.068,5.101,6.337,9.078,11.287c-0.934-0.171-1.892-0.273-2.876-0.273c-0.87,0-1.721,0.076-2.554,0.211l-1.754-2.166  l-2.646-3.267l-2.646-3.267l-0.13-0.2c-1.54-2.022-2.454-4.547-2.454-7.285c0-3.323,1.347-6.332,3.525-8.51  c0.136-0.136,0.284-0.258,0.427-0.388c0.588-0.47,1.062-0.847,1.376-1.095c1.526-1.026,3.303-1.703,5.216-1.94  c0.448-0.05,0.919-0.082,1.419-0.082c1.133,0,2.158,0.142,3.075,0.373c0.001,0,0.003,0.001,0.005,0.001  c0.296,0.074,0.579,0.159,0.852,0.25c0.072,0.024,0.141,0.052,0.212,0.078c0.302,0.107,0.589,0.223,0.864,0.345  c0.23,0.103,0.457,0.21,0.679,0.327c0.081,0.042,0.159,0.086,0.237,0.129c0.957,0.534,1.834,1.192,2.607,1.956  c0.154,0.172,0.563,0.646,1.133,1.31c1.527,2.02,2.443,4.543,2.443,7.366l0,2.353C74.516,32.25,71.654,28.71,71.654,28.71z   M48.613,59.451c-0.539-1.188-1.219-2.308-2.024-3.34l-2.646-3.267l-2.646-3.267l-0.755-0.932c1.196-0.541,2.322-1.224,3.361-2.034  l3.267-2.646l3.267-2.646l0.948-0.768c0.539,1.188,1.219,2.307,2.023,3.339l2.646,3.267l2.646,3.267l0.756,0.933  c-1.196,0.541-2.322,1.224-3.36,2.034l-3.267,2.646l-3.267,2.646L48.613,59.451z M51.736,14.79  c0.721-0.572,5.792-4.646,14.059-4.646c7.342,0,12.094,3.175,12.094,3.175v10.1c0,0-2.435-3.07-7.056-4.55  c-0.251-0.083-0.507-0.152-0.764-0.222c-0.13-0.035-0.26-0.069-0.393-0.101c-1.223-0.301-2.494-0.478-3.809-0.478  c-0.318,0-0.629,0.029-0.942,0.048c-0.096,0.005-0.194,0.008-0.288,0.015c-0.232,0.018-0.463,0.038-0.692,0.065  c-4.676,0.521-7.327,2.85-7.374,2.892c-0.396,0.286-0.778,0.588-1.145,0.908c-4.261,3.398-17.143,13.777-18.908,15.199l-0.201,0.162  c-0.653,0.476-1.46,0.754-2.331,0.754c-2.185,0-3.956-1.771-3.956-3.956c0-1.134,0.477-2.155,1.24-2.877  C31.269,31.276,48.043,17.72,51.736,14.79z M36.458,22.119c-4.193,3.385-7.733,6.247-7.733,6.247  c-1.505,1.421-2.565,3.546-2.565,5.787c0,4.322,3.503,7.825,7.825,7.825c1.704,0,3.656-0.822,4.959-1.772  c1.068-0.86,6.337-5.101,11.287-9.078c-0.167,0.924-0.268,1.87-0.268,2.842c0,0.879,0.077,1.74,0.214,2.581l-2.174,1.76  l-3.267,2.646l-3.267,2.646l-0.2,0.13c-2.022,1.54-4.547,2.454-7.285,2.454c-3.323,0-6.332-1.347-8.51-3.525  c-0.224-0.224-0.434-0.463-0.64-0.704c-0.143-0.179-0.273-0.343-0.394-0.494c-1.556-2.028-2.491-4.558-2.491-7.312  c0-3.323,1.347-6.332,3.525-8.51c0.201-0.201,0.417-0.388,0.632-0.574c0.099-0.085,0.205-0.177,0.318-0.274  c2.069-1.672,4.711-2.677,7.679-2.677L36.458,22.119z M10.124,34.22c0-7.342,3.175-12.094,3.175-12.094h10.1  c0,0-5.332,4.213-5.332,12.094c0,5.871,3.003,9.23,3.003,9.23c0.124,0.158,0.316,0.401,0.555,0.701  c0.045,0.056,0.088,0.113,0.134,0.168c3.152,3.958,13.961,17.374,15.415,19.179l0.162,0.201c0.476,0.653,0.754,1.461,0.754,2.331  c0,2.185-1.771,3.956-3.956,3.956c-1.133,0-2.155-0.477-2.877-1.24c0,0-13.556-16.774-16.487-20.467  C14.197,47.558,10.124,42.488,10.124,34.22z M28.346,71.29c1.422,1.505,3.546,2.565,5.787,2.565c4.322,0,7.825-3.503,7.825-7.825  c0-1.704-0.822-3.656-1.772-4.959c-0.86-1.068-5.101-6.337-9.078-11.287c0.934,0.171,1.893,0.273,2.877,0.273  c0.869,0,1.721-0.076,2.553-0.211l1.753,2.165l2.646,3.267l2.646,3.267l0.13,0.2c1.54,2.022,2.454,4.547,2.454,7.285  c0,3.323-1.347,6.332-3.525,8.51c-0.139,0.139-0.291,0.265-0.437,0.397c-0.58,0.463-1.048,0.835-1.36,1.082  c-1.529,1.03-3.311,1.709-5.23,1.945c-0.446,0.049-0.913,0.081-1.41,0.081c-1.132,0-2.156-0.142-3.073-0.373  c-0.003-0.001-0.006-0.001-0.008-0.002c-0.295-0.074-0.578-0.158-0.85-0.249c-0.071-0.024-0.14-0.052-0.211-0.077  c-0.305-0.108-0.595-0.225-0.871-0.348c-0.227-0.102-0.452-0.207-0.671-0.323c-0.083-0.044-0.163-0.088-0.243-0.132  c-0.953-0.532-1.828-1.188-2.599-1.95c-0.151-0.168-0.565-0.647-1.143-1.322c-1.523-2.019-2.437-4.539-2.437-7.358l0-2.353  C25.484,67.75,28.346,71.29,28.346,71.29z M48.265,85.21c-0.721,0.572-5.791,4.645-14.059,4.645c-7.342,0-12.095-3.175-12.095-3.175  v-10.1c0,0,2.436,3.071,7.057,4.55c0.249,0.082,0.504,0.151,0.758,0.221c0.133,0.036,0.266,0.071,0.402,0.103  c1.221,0.3,2.491,0.477,3.804,0.477c0.309,0,0.611-0.029,0.916-0.046c0.109-0.005,0.22-0.009,0.327-0.017  c0.225-0.017,0.448-0.037,0.671-0.063c4.724-0.524,7.389-2.897,7.389-2.897c0.004-0.003,0.011-0.009,0.016-0.013  c0.384-0.278,0.755-0.571,1.111-0.882c4.248-3.388,17.153-13.785,18.92-15.209l0.201-0.162c0.653-0.476,1.461-0.754,2.331-0.754  c2.185,0,3.956,1.771,3.956,3.956c0,1.133-0.477,2.156-1.24,2.877C68.732,68.724,51.958,82.28,48.265,85.21z M63.544,77.882  c4.193-3.385,7.732-6.247,7.732-6.247c1.505-1.422,2.565-3.546,2.565-5.788c0-4.322-3.503-7.825-7.825-7.825  c-1.704,0-3.656,0.823-4.959,1.773c-1.068,0.86-6.338,5.102-11.288,9.079c0.167-0.924,0.268-1.871,0.268-2.843  c0-0.879-0.077-1.739-0.214-2.58l2.175-1.761l3.267-2.646l3.267-2.646l0.199-0.13c2.022-1.54,4.547-2.454,7.285-2.454  c3.323,0,6.332,1.347,8.51,3.525c0.222,0.222,0.43,0.459,0.634,0.698c0.15,0.188,0.285,0.358,0.41,0.515  c1.549,2.026,2.48,4.55,2.48,7.297c0,3.323-1.347,6.332-3.525,8.51c-0.193,0.193-0.401,0.371-0.607,0.551  c-0.109,0.094-0.227,0.195-0.354,0.305c-2.067,1.667-4.705,2.669-7.669,2.669L63.544,77.882z M86.701,77.874h-10.1  c0,0,5.332-4.213,5.332-12.095c0-5.871-3.003-9.23-3.003-9.23c-0.121-0.155-0.309-0.392-0.542-0.685  c-0.051-0.063-0.099-0.128-0.151-0.19c-3.158-3.966-13.957-17.369-15.41-19.173l-0.162-0.201c-0.476-0.653-0.754-1.461-0.754-2.331  c0-2.185,1.771-3.956,3.956-3.956c1.133,0,2.155,0.477,2.877,1.24c0,0,13.556,16.774,16.487,20.467  c0.572,0.721,4.645,5.791,4.645,14.059C89.876,73.122,86.701,77.874,86.701,77.874z"></path></g></svg>',
                        svgContentId: 1662312965,
                        withExternalLayout: !0,
                      }),
                    }),
                    e(k, {
                      __fromCanvasComponent: !0,
                      children: e(v, {
                        children: e(r.p, {
                          className: "framer-styles-preset-11ut0g7",
                          "data-styles-preset": "Auy8Lx_6q",
                          style: {
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-50859c1e-b9ab-4124-b93a-6ea1cca8c715, rgb(98, 103, 111)))",
                          },
                          children:
                            "Copyright \xA9 2024 Proton. All rights reserved.",
                        }),
                      }),
                      className: "framer-1twlgaa",
                      layoutDependency: a,
                      layoutId: "rRdq7uWh5",
                      style: {
                        "--extracted-r6o4lv":
                          "var(--token-50859c1e-b9ab-4124-b93a-6ea1cca8c715, rgb(98, 103, 111))",
                        "--framer-link-text-color": "rgb(0, 153, 255)",
                        "--framer-link-text-decoration": "underline",
                      },
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                  ],
                }),
                l(r.div, {
                  className: "framer-y93s2x",
                  "data-border": !0,
                  "data-framer-name": "Line",
                  layoutDependency: a,
                  layoutId: "g5WsKPrmD",
                  style: {
                    "--border-bottom-width": "0px",
                    "--border-color":
                      'var(--token-6678d9c0-cf59-4b90-8a3f-78db6c108cce, rgb(26, 28, 30)) /* {"name":"Border"} */',
                    "--border-left-width": "0px",
                    "--border-right-width": "0px",
                    "--border-style": "solid",
                    "--border-top-width": "1px",
                  },
                  children: [
                    e(r.div, {
                      className: "framer-7r8j47-container",
                      layoutDependency: a,
                      layoutId: "g5WsKPrmDnBfeRZjyz-container",
                      children: e(L, {
                        height: "100%",
                        id: "g5WsKPrmDnBfeRZjyz",
                        layoutId: "g5WsKPrmDnBfeRZjyz",
                        style: { height: "100%", width: "100%" },
                        variant: "a5lmV8vcV",
                        width: "100%",
                      }),
                    }),
                    e(r.div, {
                      className: "framer-17ypd9b-container",
                      layoutDependency: a,
                      layoutId: "g5WsKPrmDkPI_49_EK-container",
                      children: e(L, {
                        height: "100%",
                        id: "g5WsKPrmDkPI_49_EK",
                        layoutId: "g5WsKPrmDkPI_49_EK",
                        style: { height: "100%", width: "100%" },
                        variant: "a5lmV8vcV",
                        width: "100%",
                      }),
                    }),
                    e(r.div, {
                      className: "framer-qeihun-container",
                      layoutDependency: a,
                      layoutId: "g5WsKPrmDhGLObcwdI-container",
                      children: e(L, {
                        height: "100%",
                        id: "g5WsKPrmDhGLObcwdI",
                        layoutId: "g5WsKPrmDhGLObcwdI",
                        style: { height: "100%", width: "100%" },
                        variant: "a5lmV8vcV",
                        width: "100%",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            l(r.div, {
              className: "framer-1ophdb2",
              layoutDependency: a,
              layoutId: "CWizRQe0d",
              children: [
                l(r.div, {
                  className: "framer-s21ukq",
                  layoutDependency: a,
                  layoutId: "qODOMMV9t",
                  children: [
                    l(r.div, {
                      className: "framer-d8e7bh",
                      "data-framer-name": "Social Icons",
                      layoutDependency: a,
                      layoutId: "KofM6p8vT",
                      children: [
                        e(c, {
                          href: "https://discord.gg/2YFnG5357k",
                          openInNewTab: !0,
                          children: e(se, {
                            as: "a",
                            className: "framer-1fq34iy framer-c5b2dc",
                            layout: "position",
                            layoutDependency: a,
                            layoutId: "HpuLeU7kh",
                            opacity: 1,
                            svg: '<svg fill="none" height="25" viewBox="0 0 754.779 867.058" width="25" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m280.395 49.025c-51.649 26.905-93.905 49.672-93.896 50.598.023 2.39 123.959 65.156 128.358 65.003 2.001-.067 16.517-6.749 32.256-14.847l28.621-14.721 31.258 16.067 31.256 16.07 51.188-23.001c77.13-34.659 85.141-38.457 83.885-39.733-1.666-1.693-29.331-16.555-104.388-56.07-36.274-19.098-71.481-37.823-78.24-41.612-6.758-3.789-13.21-6.837-14.337-6.778s-44.311 22.12-95.961 49.024zm-226.532 117.306-53.766 27.772v121.886c0 67.038.706 121.885 1.572 121.885.863 0 27.316-11.467 58.783-25.482l57.213-25.482v-128.476l27.958 15.232a33224.294 33224.294 0 0 0 64.671 35.109l36.712 19.877 16.336-7.387a3822.03 3822.03 0 0 0 30.674-14.056c7.885-3.672 27.241-12.39 43.012-19.377 15.771-6.99 30.37-14.019 32.44-15.621 2.75-2.128-30.782-20.658-124.025-68.54-70.285-36.093-130.046-65.509-132.802-65.368s-29.206 12.752-58.778 28.028zm529.148 7.799c-36.618 16.531-66.604 30.717-66.638 31.526-.032.808 19.926 12.675 44.354 26.367 24.426 13.695 44.412 25.632 44.412 26.531 0 .897-21.615 11.37-48.03 23.278-26.419 11.905-93.194 42.061-148.393 67.014l-184.954 83.602c-46.525 21.032-88.462 39.989-93.193 42.132-95.03 43.019-121.15 54.956-124.737 57.005-3.607 2.063-4.424 14.048-5.066 74.201l-.766 71.744 48.08 24.498 48.079 24.497 66.669-30.088c36.669-16.547 66.669-30.953 66.669-32.014 0-1.058-6.776-5.473-15.054-9.815-8.282-4.342-25.378-13.954-37.995-21.364-12.616-7.411-25.196-14.21-27.958-15.112-2.761-.899-4.98-2.472-4.935-3.498.046-1.023 29.404-14.968 65.236-30.991 69.597-31.117 122.858-55.1 237.202-106.809a305577.39 305577.39 0 0 1 153.411-69.31c44.948-20.288 97.208-43.983 116.134-52.655l34.41-15.767.765-72.561.769-72.558-48.765-25.03c-26.822-13.765-49.748-24.994-50.95-24.953-1.201.038-32.141 13.595-68.756 30.13zm153.872 261.772c-7.186 3.51-21.38 10.082-31.542 14.603s-29.446 13.222-42.852 19.339l-24.374 11.117-.556 63.702c-.307 35.035-1.597 63.545-2.867 63.36-2.885-.429-48.567-23.857-94.487-48.463-33.143-17.757-35.225-18.463-43.013-14.606-4.502 2.231-31.413 14.3-59.801 26.825-28.389 12.523-52.541 23.587-53.677 24.589-1.133 1 56.002 31.967 126.97 68.819l129.029 67.003 55.119-28.513c30.312-15.68 56.088-29.983 57.275-31.782 2.672-4.045 2.443-242.93-.232-242.607-1.058.127-7.806 3.104-14.992 6.614zm-305.227 280.391a25013.26 25013.26 0 0 0 -28.675 12.349c-28.856 12.484-23.201 12.898-57.531-4.192-22.865-11.382-32.721-14.894-36.999-13.189-3.209 1.278-30.826 13.703-61.376 27.61-30.548 13.907-56.602 25.285-57.898 25.285-12.817 0 8.491 12.731 90.714 54.207l96.428 48.637 40.572-20.03c22.315-11.017 67.323-33.078 100.021-49.024 32.695-15.95 59.042-29.413 58.549-29.921-.497-.506-27.893-14.574-60.883-31.262l-59.982-30.338z" fill="#848189" fill-rule="evenodd"/></svg>',
                            svgContentId: 1662312965,
                            withExternalLayout: !0,
                            style: {width: "30px" }
                          }),
                        }),
                        e(c, {
                          href: "https://t.me/dynextg",
                          children: e(r.a, {
                            className: "framer-wrr5pd framer-c5b2dc",
                            layoutDependency: a,
                            layoutId: "bzEaUAFjp",
                            children: e(r.div, {
                              className: "framer-1s45pmm-container",
                              layoutDependency: a,
                              layoutId: "q8HMqAgQK-container",
                              children: e(V, {
                                color:
                                  'var(--token-d1c6bc49-a4d7-460d-8ec2-97f80b7b859d, rgba(255, 255, 255, 0.5)) /* {"name":"White/White Alpha 75"} */',
                                height: "100%",
                                iconSearch: "House",
                                iconSelection: "TelegramLogo",
                                id: "q8HMqAgQK",
                                layoutId: "q8HMqAgQK",
                                mirrored: !1,
                                selectByList: !0,
                                style: { height: "100%", width: "100%" },
                                weight: "regular",
                                width: "100%",
                              }),
                            }),
                          }),
                        }),
                        e(c, {
                          href: "https://twitter.com/dynexcoin",
                          children: e(r.a, {
                            className: "framer-ephpoe framer-c5b2dc",
                            layoutDependency: a,
                            layoutId: "jAq14GMyo",
                            children: e(r.div, {
                              className: "framer-1ll6yu7-container",
                              layoutDependency: a,
                              layoutId: "ff89F7UBi-container",
                              children: e(V, {
                                color:
                                  'var(--token-d1c6bc49-a4d7-460d-8ec2-97f80b7b859d, rgba(255, 255, 255, 0.5)) /* {"name":"White/White Alpha 75"} */',
                                height: "100%",
                                iconSearch: "House",
                                iconSelection: "TwitterLogo",
                                id: "ff89F7UBi",
                                layoutId: "ff89F7UBi",
                                mirrored: !1,
                                selectByList: !0,
                                style: { height: "100%", width: "100%" },
                                weight: "regular",
                                width: "100%",
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    l(r.div, {
                      className: "framer-1xj6gb",
                      "data-framer-name": "Links",
                      layoutDependency: a,
                      layoutId: "too8qhzSw",
                      children: [
                        e(k, {
                          __fromCanvasComponent: !0,
                          children: e(v, {
                            children: e(r.p, {
                              className: "framer-styles-preset-11ut0g7",
                              "data-styles-preset": "Auy8Lx_6q",
                              style: {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-50859c1e-b9ab-4124-b93a-6ea1cca8c715, rgb(98, 103, 111)))",
                              },
                              children: e(c, {
                                href: "https://live.protoncoin.org/terms-and-conditions",
                                openInNewTab: !0,
                                smoothScroll: !1,
                                children: e(r.a, {
                                  className: "framer-styles-preset-1wicq5s",
                                  "data-styles-preset": "ro7OPezbn",
                                  children: "Terms & Conditions",
                                }),
                              }),
                            }),
                          }),
                          className: "framer-1jfdht9",
                          layoutDependency: a,
                          layoutId: "IYL7YDMhO",
                          style: {
                            "--extracted-r6o4lv":
                              "var(--token-50859c1e-b9ab-4124-b93a-6ea1cca8c715, rgb(98, 103, 111))",
                          },
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                          ...D(
                            {
                              aK_4VtDvt: {
                                children: e(v, {
                                  children: e(r.p, {
                                    className: "framer-styles-preset-11ut0g7",
                                    "data-styles-preset": "Auy8Lx_6q",
                                    style: {
                                      "--framer-text-alignment": "right",
                                      "--framer-text-color":
                                        "var(--extracted-r6o4lv, var(--token-50859c1e-b9ab-4124-b93a-6ea1cca8c715, rgb(98, 103, 111)))",
                                    },
                                    children: e(c, {
                                      href: "https://live.protoncoin.org/terms-and-conditions",
                                      openInNewTab: !0,
                                      smoothScroll: !1,
                                      children: e(r.a, {
                                        className:
                                          "framer-styles-preset-1wicq5s",
                                        "data-styles-preset": "ro7OPezbn",
                                        children: "Terms & Conditions",
                                      }),
                                    }),
                                  }),
                                }),
                              },
                            },
                            f,
                            m
                          ),
                        }),
                        e(k, {
                          __fromCanvasComponent: !0,
                          children: e(v, {
                            children: e(r.p, {
                              className: "framer-styles-preset-11ut0g7",
                              "data-styles-preset": "Auy8Lx_6q",
                              style: {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-50859c1e-b9ab-4124-b93a-6ea1cca8c715, rgb(98, 103, 111)))",
                              },
                              children: e(c, {
                                href: "https://live.protoncoin.org/privacy-policy",
                                openInNewTab: !0,
                                smoothScroll: !1,
                                children: e(r.a, {
                                  className: "framer-styles-preset-1wicq5s",
                                  "data-styles-preset": "ro7OPezbn",
                                  children: "Privacy Policy",
                                }),
                              }),
                            }),
                          }),
                          className: "framer-133pmsl",
                          layoutDependency: a,
                          layoutId: "msuVZBS9U",
                          style: {
                            "--extracted-r6o4lv":
                              "var(--token-50859c1e-b9ab-4124-b93a-6ea1cca8c715, rgb(98, 103, 111))",
                          },
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                          ...D(
                            {
                              aK_4VtDvt: {
                                children: e(v, {
                                  children: e(r.p, {
                                    className: "framer-styles-preset-11ut0g7",
                                    "data-styles-preset": "Auy8Lx_6q",
                                    style: {
                                      "--framer-text-alignment": "right",
                                      "--framer-text-color":
                                        "var(--extracted-r6o4lv, var(--token-50859c1e-b9ab-4124-b93a-6ea1cca8c715, rgb(98, 103, 111)))",
                                    },
                                    children: e(c, {
                                      href: "https://live.protoncoin.org/privacy-policy",
                                      openInNewTab: !0,
                                      smoothScroll: !1,
                                      children: e(r.a, {
                                        className:
                                          "framer-styles-preset-1wicq5s",
                                        "data-styles-preset": "ro7OPezbn",
                                        children: "Privacy Policy",
                                      }),
                                    }),
                                  }),
                                }),
                              },
                            },
                            f,
                            m
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                l(r.div, {
                  className: "framer-sghiqz",
                  "data-framer-name": "Right Col",
                  layoutDependency: a,
                  layoutId: "pzIFUT2ZK",
                  children: [
                    l(r.div, {
                      className: "framer-1ckrn7",
                      "data-framer-name": "Nav Stack",
                      layoutDependency: a,
                      layoutId: "r0i8Azupe",
                      children: [
                        e(Z, {
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
                          children: (o) =>
                            e(r.div, {
                              className: "framer-1i64cgo-container",
                              layoutDependency: a,
                              layoutId: "qDTcZysJP-container",
                              children: e(w, {
                                height: "100%",
                                id: "qDTcZysJP",
                                KZZfr0JA7: !1,
                                layoutId: "qDTcZysJP",
                                ld6qgK5r6: o[0],
                                nrP0QM6gt: "Learn",
                                variant: "hDyJsHtJ3",
                                width: "100%",
                                yhcsYd89y: !1,
                                ...D(
                                  {
                                    aK_4VtDvt: { ld6qgK5r6: o[1] },
                                    CP4euYBms: { ld6qgK5r6: o[2] },
                                  },
                                  f,
                                  m
                                ),
                              }),
                            }),
                        }),
                        e(Z, {
                          links: [
                            {
                              href: { webPageId: "k5VRHciV7" },
                              implicitPathVariables: void 0,
                            },
                            {
                              href: { webPageId: "k5VRHciV7" },
                              implicitPathVariables: void 0,
                            },
                            {
                              href: { webPageId: "k5VRHciV7" },
                              implicitPathVariables: void 0,
                            },
                          ],
                          children: (o) =>
                            e(r.div, {
                              className: "framer-swmxkq-container",
                              layoutDependency: a,
                              layoutId: "why82X62u-container",
                              children: e(w, {
                                height: "100%",
                                id: "why82X62u",
                                KZZfr0JA7: !1,
                                layoutId: "why82X62u",
                                ld6qgK5r6: o[0],
                                nrP0QM6gt: "Use",
                                variant: "hDyJsHtJ3",
                                width: "100%",
                                yhcsYd89y: !1,
                                ...D(
                                  {
                                    aK_4VtDvt: { ld6qgK5r6: o[1] },
                                    CP4euYBms: { ld6qgK5r6: o[2] },
                                  },
                                  f,
                                  m
                                ),
                              }),
                            }),
                        }),
                        e(Z, {
                          links: [
                            {
                              href: { webPageId: "s3i5rh3Vt" },
                              implicitPathVariables: void 0,
                            },
                            {
                              href: { webPageId: "s3i5rh3Vt" },
                              implicitPathVariables: void 0,
                            },
                            {
                              href: { webPageId: "s3i5rh3Vt" },
                              implicitPathVariables: void 0,
                            },
                          ],
                          children: (o) =>
                            e(r.div, {
                              className: "framer-10ho4m3-container",
                              layoutDependency: a,
                              layoutId: "SASdVme0p-container",
                              children: e(w, {
                                height: "100%",
                                id: "SASdVme0p",
                                KZZfr0JA7: !1,
                                layoutId: "SASdVme0p",
                                ld6qgK5r6: o[0],
                                nrP0QM6gt: "Get",
                                variant: "hDyJsHtJ3",
                                width: "100%",
                                yhcsYd89y: !0,
                                ...D(
                                  {
                                    aK_4VtDvt: { ld6qgK5r6: o[1] },
                                    CP4euYBms: { ld6qgK5r6: o[2] },
                                  },
                                  f,
                                  m
                                ),
                              }),
                            }),
                        }),
                        e(r.div, {
                          className: "framer-5c4jq6-container",
                          layoutDependency: a,
                          layoutId: "x9Wr29o29-container",
                          children: e(w, {
                            height: "100%",
                            id: "x9Wr29o29",
                            KZZfr0JA7: !0,
                            layoutId: "x9Wr29o29",
                            ld6qgK5r6: "https://blockexplorer.dynexcoin.org/",
                            nrP0QM6gt: "Network",
                            variant: "hDyJsHtJ3",
                            width: "100%",
                            yhcsYd89y: !1,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    });
  }),
  He = [
    '.framer-1CD2I[data-border="true"]::after, .framer-1CD2I [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-1CD2I.framer-c5b2dc, .framer-1CD2I .framer-c5b2dc { display: block; }",
    ".framer-1CD2I.framer-1epdmp0 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 128px 0px 72px 0px; position: relative; scroll-margin-top: 80px; width: 1164px; }",
    ".framer-1CD2I .framer-rwpjcm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 72px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-1CD2I .framer-1lm86fb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-1CD2I .framer-1fq34iy { flex: none; height: 74px; position: relative; text-decoration: none; width: 68px; }",
    ".framer-1CD2I .framer-1twlgaa { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 230px; word-break: break-word; word-wrap: break-word; }",
    ".framer-1CD2I .framer-y93s2x { flex: none; height: 72px; overflow: visible; position: relative; width: 100%; }",
    ".framer-1CD2I .framer-7r8j47-container { flex: none; height: 12px; left: 0px; position: absolute; top: 0px; width: 42px; z-index: 2; }",
    ".framer-1CD2I .framer-17ypd9b-container { flex: none; height: 12px; left: calc(50.00000000000002% - 42px / 2); position: absolute; top: 0px; width: 42px; z-index: 2; }",
    ".framer-1CD2I .framer-qeihun-container { flex: none; height: 12px; position: absolute; right: 0px; top: 0px; width: 42px; z-index: 2; }",
    ".framer-1CD2I .framer-1ophdb2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-1CD2I .framer-s21ukq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-1CD2I .framer-d8e7bh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-1CD2I .framer-mi8xj2 { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; text-decoration: none; width: min-content; }",
    ".framer-1CD2I .framer-1x5enfw-container, .framer-1CD2I .framer-1s45pmm-container, .framer-1CD2I .framer-1ll6yu7-container { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 35px); position: relative; width: 32px; }",
    ".framer-1CD2I .framer-wrr5pd, .framer-1CD2I .framer-ephpoe { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; text-decoration: none; width: min-content; }",
    ".framer-1CD2I .framer-1xj6gb { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: auto; }",
    ".framer-1CD2I .framer-1jfdht9, .framer-1CD2I .framer-133pmsl, .framer-1CD2I .framer-yy1c5n { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-1CD2I .framer-sghiqz { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: auto; justify-content: space-between; overflow: hidden; padding: 0px 0px 0px 260px; position: relative; width: 1px; }",
    ".framer-1CD2I .framer-1ckrn7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; z-index: 1; }",
    ".framer-1CD2I .framer-1i64cgo-container, .framer-1CD2I .framer-swmxkq-container, .framer-1CD2I .framer-10ho4m3-container, .framer-1CD2I .framer-5c4jq6-container { flex: none; height: auto; position: relative; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-1CD2I.framer-1epdmp0, .framer-1CD2I .framer-rwpjcm, .framer-1CD2I .framer-1lm86fb, .framer-1CD2I .framer-s21ukq, .framer-1CD2I .framer-d8e7bh, .framer-1CD2I .framer-mi8xj2, .framer-1CD2I .framer-wrr5pd, .framer-1CD2I .framer-ephpoe, .framer-1CD2I .framer-1xj6gb { gap: 0px; } .framer-1CD2I.framer-1epdmp0 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-1CD2I.framer-1epdmp0 > :first-child, .framer-1CD2I .framer-rwpjcm > :first-child, .framer-1CD2I .framer-s21ukq > :first-child, .framer-1CD2I .framer-1xj6gb > :first-child { margin-top: 0px; } .framer-1CD2I.framer-1epdmp0 > :last-child, .framer-1CD2I .framer-rwpjcm > :last-child, .framer-1CD2I .framer-s21ukq > :last-child, .framer-1CD2I .framer-1xj6gb > :last-child { margin-bottom: 0px; } .framer-1CD2I .framer-rwpjcm > * { margin: 0px; margin-bottom: calc(72px / 2); margin-top: calc(72px / 2); } .framer-1CD2I .framer-1lm86fb > *, .framer-1CD2I .framer-d8e7bh > * { margin: 0px; margin-left: calc(32px / 2); margin-right: calc(32px / 2); } .framer-1CD2I .framer-1lm86fb > :first-child, .framer-1CD2I .framer-d8e7bh > :first-child, .framer-1CD2I .framer-mi8xj2 > :first-child, .framer-1CD2I .framer-wrr5pd > :first-child, .framer-1CD2I .framer-ephpoe > :first-child { margin-left: 0px; } .framer-1CD2I .framer-1lm86fb > :last-child, .framer-1CD2I .framer-d8e7bh > :last-child, .framer-1CD2I .framer-mi8xj2 > :last-child, .framer-1CD2I .framer-wrr5pd > :last-child, .framer-1CD2I .framer-ephpoe > :last-child { margin-right: 0px; } .framer-1CD2I .framer-s21ukq > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-1CD2I .framer-mi8xj2 > *, .framer-1CD2I .framer-wrr5pd > *, .framer-1CD2I .framer-ephpoe > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-1CD2I .framer-1xj6gb > * { margin: 0px; margin-bottom: calc(12px / 2); margin-top: calc(12px / 2); } }",
    ".framer-1CD2I.framer-v-mzhioa.framer-1epdmp0 { width: 768px; }",
    ".framer-1CD2I.framer-v-mzhioa .framer-1ophdb2 { flex-direction: column; gap: 32px; justify-content: center; }",
    ".framer-1CD2I.framer-v-mzhioa .framer-s21ukq { flex-direction: row; order: 1; width: 100%; }",
    ".framer-1CD2I.framer-v-mzhioa .framer-1xj6gb { align-content: flex-end; align-items: flex-end; align-self: unset; flex: 1 0 0px; flex-direction: row; gap: 32px; justify-content: flex-end; width: 1px; }",
    ".framer-1CD2I.framer-v-mzhioa .framer-1jfdht9, .framer-1CD2I.framer-v-mzhioa .framer-133pmsl { white-space: pre; width: auto; }",
    ".framer-1CD2I.framer-v-mzhioa .framer-sghiqz { align-self: unset; flex: none; gap: 48px; height: min-content; justify-content: flex-start; order: 0; padding: 0px 0px 0px 0px; width: 79%; }",
    ".framer-1CD2I.framer-v-mzhioa .framer-1ckrn7 { height: auto; width: 500px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-1CD2I.framer-v-mzhioa .framer-1ophdb2, .framer-1CD2I.framer-v-mzhioa .framer-s21ukq, .framer-1CD2I.framer-v-mzhioa .framer-1xj6gb, .framer-1CD2I.framer-v-mzhioa .framer-sghiqz { gap: 0px; } .framer-1CD2I.framer-v-mzhioa .framer-1ophdb2 > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-1CD2I.framer-v-mzhioa .framer-1ophdb2 > :first-child, .framer-1CD2I.framer-v-mzhioa .framer-sghiqz > :first-child { margin-top: 0px; } .framer-1CD2I.framer-v-mzhioa .framer-1ophdb2 > :last-child, .framer-1CD2I.framer-v-mzhioa .framer-sghiqz > :last-child { margin-bottom: 0px; } .framer-1CD2I.framer-v-mzhioa .framer-s21ukq > * { margin: 0px; margin-left: calc(48px / 2); margin-right: calc(48px / 2); } .framer-1CD2I.framer-v-mzhioa .framer-s21ukq > :first-child, .framer-1CD2I.framer-v-mzhioa .framer-1xj6gb > :first-child { margin-left: 0px; } .framer-1CD2I.framer-v-mzhioa .framer-s21ukq > :last-child, .framer-1CD2I.framer-v-mzhioa .framer-1xj6gb > :last-child { margin-right: 0px; } .framer-1CD2I.framer-v-mzhioa .framer-1xj6gb > * { margin: 0px; margin-left: calc(32px / 2); margin-right: calc(32px / 2); } .framer-1CD2I.framer-v-mzhioa .framer-sghiqz > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } }",
    ".framer-1CD2I.framer-v-nr6sku.framer-1epdmp0 { width: 370px; }",
    ".framer-1CD2I.framer-v-nr6sku .framer-1twlgaa { flex: 1 0 0px; width: 1px; }",
    ".framer-1CD2I.framer-v-nr6sku .framer-1ophdb2 { flex-direction: column; gap: 0px; justify-content: center; }",
    ".framer-1CD2I.framer-v-nr6sku .framer-s21ukq { order: 1; }",
    ".framer-1CD2I.framer-v-nr6sku .framer-sghiqz { align-self: unset; flex: none; gap: 48px; height: min-content; justify-content: flex-start; order: 0; padding: 0px 0px 32px 0px; width: 100%; }",
    ".framer-1CD2I.framer-v-nr6sku .framer-1ckrn7 { align-content: unset; align-items: unset; display: grid; gap: 0px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(1px, 1fr)); grid-template-rows: repeat(3, minmax(0, 1fr)); height: auto; justify-content: start; }",
    ".framer-1CD2I.framer-v-nr6sku .framer-1i64cgo-container, .framer-1CD2I.framer-v-nr6sku .framer-swmxkq-container, .framer-1CD2I.framer-v-nr6sku .framer-10ho4m3-container, .framer-1CD2I.framer-v-nr6sku .framer-5c4jq6-container { align-self: start; height: 100%; justify-self: start; width: fit-content; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-1CD2I.framer-v-nr6sku .framer-1ophdb2, .framer-1CD2I.framer-v-nr6sku .framer-sghiqz, .framer-1CD2I.framer-v-nr6sku .framer-1ckrn7 { gap: 0px; } .framer-1CD2I.framer-v-nr6sku .framer-1ophdb2 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-1CD2I.framer-v-nr6sku .framer-1ophdb2 > :first-child, .framer-1CD2I.framer-v-nr6sku .framer-sghiqz > :first-child { margin-top: 0px; } .framer-1CD2I.framer-v-nr6sku .framer-1ophdb2 > :last-child, .framer-1CD2I.framer-v-nr6sku .framer-sghiqz > :last-child { margin-bottom: 0px; } .framer-1CD2I.framer-v-nr6sku .framer-sghiqz > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-1CD2I.framer-v-nr6sku .framer-1ckrn7 > *, .framer-1CD2I.framer-v-nr6sku .framer-1ckrn7 > :first-child, .framer-1CD2I.framer-v-nr6sku .framer-1ckrn7 > :last-child { margin: 0px; } }",
    ...ce,
    ...pe,
  ],
  S = H(Ae, He, "framer-1CD2I"),
  er = S;
S.displayName = "Footer";
S.defaultProps = { height: 564, width: 1164 };
A(S, {
  variant: {
    options: ["lKW5sKZWt", "aK_4VtDvt", "CP4euYBms"],
    optionTitles: ["Desktop", "Tablet", "Mobile"],
    title: "Variant",
    type: W.Enum,
  },
});
E(S, [...Ve, ...qe, ...Le, ...me, ...fe]);
export { fe as a, pe as b, he as c, L as d, er as e };
//# sourceMappingURL=chunk-C724PHK6.mjs.map

import {
  a as S,
  b as Bn,
  c as Re,
  d as Fo,
  e as Ea,
  f as gn,
  g as be,
  h as ue,
  j as We,
  k as Hn,
  m as Lo,
  n as fe,
  o as M,
  p as W,
  q as Ri,
  r as Ft,
  s as Pi,
  t as ge,
  u as A,
  v as Lt,
  w as je,
  x as ze,
  y as T,
  z as se,
} from "./chunk-DKTB2747.mjs";
import { a as cm, b as ft, c as L } from "./chunk-ELYU6EKT.mjs";
var uC = Object.create,
  Yu = Object.defineProperty,
  fC = Object.getOwnPropertyDescriptor,
  Rv = Object.getOwnPropertyNames,
  dC = Object.getPrototypeOf,
  hC = Object.prototype.hasOwnProperty,
  pC = (e, t, n) =>
    t in e
      ? Yu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  sn = (e, t) =>
    function () {
      return t || (0, e[Rv(e)[0]])((t = { exports: {} }).exports, t), t.exports;
    },
  mC = (e, t, n, r) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let i of Rv(t))
        !hC.call(e, i) &&
          i !== n &&
          Yu(e, i, {
            get: () => t[i],
            enumerable: !(r = fC(t, i)) || r.enumerable,
          });
    return e;
  },
  Gt = (e, t, n) => (
    (n = e != null ? uC(dC(e)) : {}),
    mC(
      t || !e || !e.__esModule
        ? Yu(n, "default", { value: e, enumerable: !0 })
        : n,
      e
    )
  ),
  R = (e, t, n) => (pC(e, typeof t != "symbol" ? t + "" : t, n), n),
  Pv = (e, t, n) => {
    if (!t.has(e)) throw TypeError("Cannot " + n);
  },
  Ct = (e, t, n) => (
    Pv(e, t, "read from private field"), n ? n.call(e) : t.get(e)
  ),
  Xo = (e, t, n) => {
    if (t.has(e))
      throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, n);
  },
  Ku = (e, t, n, r) => (
    Pv(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n
  ),
  vC = sn({
    "../../../node_modules/@emotion/memoize/dist/memoize.browser.cjs.js"(e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      function t(n) {
        var r = {};
        return function (i) {
          return r[i] === void 0 && (r[i] = n(i)), r[i];
        };
      }
      e.default = t;
    },
  }),
  gC = sn({
    "../../../node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.cjs.js"(
      e
    ) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      function t(o) {
        return o && typeof o == "object" && "default" in o ? o.default : o;
      }
      var n = t(vC()),
        r =
          /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        i = n(function (o) {
          return (
            r.test(o) ||
            (o.charCodeAt(0) === 111 &&
              o.charCodeAt(1) === 110 &&
              o.charCodeAt(2) < 91)
          );
        });
      e.default = i;
    },
  }),
  $n = be({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  Go = be({}),
  Ai = be(null),
  Yo = typeof document < "u",
  fr = Yo ? Pi : W,
  qu = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
  yC = "framerAppearId",
  Ua = "data-" + qu(yC),
  Xa = { skipAnimations: !1, useManualTiming: !1 },
  Wo = be({}),
  Ga = be({}),
  Iv = be({ strict: !1 }),
  um = class {
    constructor() {
      (this.order = []), (this.scheduled = new Set());
    }
    add(e) {
      if (!this.scheduled.has(e))
        return this.scheduled.add(e), this.order.push(e), !0;
    }
    remove(e) {
      let t = this.order.indexOf(e);
      t !== -1 && (this.order.splice(t, 1), this.scheduled.delete(e));
    }
    clear() {
      (this.order.length = 0), this.scheduled.clear();
    }
  };
function bC(e) {
  let t = new um(),
    n = new um(),
    r = 0,
    i = !1,
    o = !1,
    s = new WeakSet(),
    a = {
      schedule: (l, c = !1, u = !1) => {
        let f = u && i,
          d = f ? t : n;
        return c && s.add(l), d.add(l) && f && i && (r = t.order.length), l;
      },
      cancel: (l) => {
        n.remove(l), s.delete(l);
      },
      process: (l) => {
        if (i) {
          o = !0;
          return;
        }
        if (((i = !0), ([t, n] = [n, t]), n.clear(), (r = t.order.length), r))
          for (let c = 0; c < r; c++) {
            let u = t.order[c];
            s.has(u) && (a.schedule(u), e()), u(l);
          }
        (i = !1), o && ((o = !1), a.process(l));
      },
    };
  return a;
}
var Ao = ["prepare", "read", "update", "preRender", "render", "postRender"],
  xC = 40;
function Fv(e, t) {
  let n = !1,
    r = !0,
    i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = Ao.reduce((f, d) => ((f[d] = bC(() => (n = !0))), f), {}),
    s = (f) => {
      o[f].process(i);
    },
    a = () => {
      let f = Xa.useManualTiming ? i.timestamp : performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(f - i.timestamp, xC), 1)),
        (i.timestamp = f),
        (i.isProcessing = !0),
        Ao.forEach(s),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(a));
    },
    l = () => {
      (n = !0), (r = !0), i.isProcessing || e(a);
    };
  return {
    schedule: Ao.reduce((f, d) => {
      let h = o[d];
      return (f[d] = (g, y = !1, x = !1) => (n || l(), h.schedule(g, y, x))), f;
    }, {}),
    cancel: (f) => Ao.forEach((d) => o[d].cancel(f)),
    state: i,
    steps: o,
  };
}
var { schedule: Qu, cancel: j4 } = Fv(queueMicrotask, !1);
function SC(e, t, n, r) {
  let { visualElement: i } = M(Go),
    o = M(Iv),
    s = M(Ai),
    a = M($n).reducedMotion,
    l = A();
  (r = r || o.renderer),
    !l.current &&
      r &&
      (l.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceContext: s,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: a,
      }));
  let c = l.current;
  Ft(() => {
    c && c.update(n, s);
  });
  let u = A(!!(n[Ua] && !L.HandoffComplete));
  return (
    fr(() => {
      c &&
        (Qu.postRender(c.render),
        u.current && c.animationState && c.animationState.animateChanges());
    }),
    W(() => {
      c &&
        (c.updateFeatures(),
        !u.current && c.animationState && c.animationState.animateChanges(),
        u.current && ((u.current = !1), (L.HandoffComplete = !0)));
    }),
    c
  );
}
function Ii(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function wC(e, t, n) {
  return fe(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Ii(n) && (n.current = r));
    },
    [t]
  );
}
function jo(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Ya(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
var Zu = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Ju = ["initial", ...Zu];
function Ka(e) {
  return Ya(e.animate) || Ju.some((t) => jo(e[t]));
}
function Lv(e) {
  return !!(Ka(e) || e.variants);
}
function CC(e, t) {
  if (Ka(e)) {
    let { initial: n, animate: r } = e;
    return {
      initial: n === !1 || jo(n) ? n : void 0,
      animate: jo(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function kC(e) {
  let { initial: t, animate: n } = CC(e, M(Go));
  return ge(() => ({ initial: t, animate: n }), [fm(t), fm(n)]);
}
function fm(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
var dm = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Uo = {};
for (let e in dm) Uo[e] = { isEnabled: (t) => dm[e].some((n) => !!t[n]) };
function TC(e) {
  for (let t in e) Uo[t] = { ...Uo[t], ...e[t] };
}
var ef = Symbol.for("motionComponentSymbol");
function _v({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && TC(e);
  function o(a, l) {
    let c,
      u = { ...M($n), ...a, layoutId: EC(a) },
      { isStatic: f } = u,
      d = kC(a),
      h = r(a, f);
    if (!f && Yo) {
      d.visualElement = SC(i, h, u, t);
      let g = M(Ga),
        y = M(Iv).strict;
      d.visualElement && (c = d.visualElement.loadFeatures(u, y, e, g));
    }
    return ue(
      Go.Provider,
      { value: d },
      c && d.visualElement
        ? ue(c, { visualElement: d.visualElement, ...u })
        : null,
      n(i, a, wC(h, d.visualElement, l), h, f, d.visualElement)
    );
  }
  let s = We(o);
  return (s[ef] = i), s;
}
function EC({ layoutId: e }) {
  let t = M(Wo).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
var Da = {};
function tf(e) {
  Object.assign(Da, e);
}
var Se = (e) => !!(e && e.getVelocity),
  Ko = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Jr = new Set(Ko),
  RC = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  PC = Ko.length;
function Mv(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
  r,
  i
) {
  let o = "";
  for (let s = 0; s < PC; s++) {
    let a = Ko[s];
    if (e[a] !== void 0) {
      let l = RC[a] || a;
      o += `${l}(${e[a]}) `;
    }
  }
  return (
    t && !e.z && (o += "translateZ(0)"),
    (o = o.trim()),
    i ? (o = i(e, r ? "" : o)) : n && r && (o = "none"),
    o
  );
}
var Wn = (e, t, n) => (n > t ? t : n < e ? e : n),
  Vo = (e) => Math.round(e * 1e5) / 1e5,
  nf = /(-)?([\d]*\.?[\d])+/g,
  IC =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  FC =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function qo(e) {
  return typeof e == "string";
}
var Qo = (e) => ({
    test: (t) => qo(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  sr = Qo("deg"),
  yn = Qo("%"),
  $ = Qo("px"),
  LC = Qo("vh"),
  _C = Qo("vw"),
  hm = {
    ...yn,
    parse: (e) => yn.parse(e) / 100,
    transform: (e) => yn.transform(e * 100),
  },
  MC = new Set([
    "animate",
    "exit",
    "variants",
    "initial",
    "style",
    "values",
    "variants",
    "transition",
    "transformTemplate",
    "custom",
    "inherit",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "_dragX",
    "_dragY",
    "onHoverStart",
    "onHoverEnd",
    "onViewportEnter",
    "onViewportLeave",
    "globalTapTarget",
    "ignoreStrict",
    "viewport",
  ]);
function Mi(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    MC.has(e)
  );
}
var Ov = (e) => !Mi(e);
function Av(e) {
  e && (Ov = (t) => (t.startsWith("on") ? !Mi(t) : e(t)));
}
try {
  Av(gC().default);
} catch {}
function Dv(e, t, n) {
  let r = {};
  for (let i in e)
    (i === "values" && typeof e.values == "object") ||
      ((Ov(i) ||
        (n === !0 && Mi(i)) ||
        (!t && !Mi(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
var Va = (e) => Array.isArray(e),
  OC = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  AC = (e) => (Va(e) ? e[e.length - 1] || 0 : e);
function et(e) {
  let t = Se(e) ? e.get() : e;
  return OC(t) ? t.toValue() : t;
}
function rf(e, t, n, r = {}, i = {}) {
  return (
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    t
  );
}
function Un(e) {
  let t = A(null);
  return t.current === null && (t.current = e()), t.current;
}
function DC(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  i,
  o
) {
  let s = { latestValues: VC(r, i, o, e), renderState: t() };
  return n && (s.mount = (a) => n(r, a, s)), s;
}
var qa = (e) => (t, n) => {
  let r = M(Go),
    i = M(Ai),
    o = () => DC(e, t, r, i);
  return n ? o() : Un(o);
};
function VC(e, t, n, r) {
  let i = {},
    o = r(e, {});
  for (let d in o) i[d] = et(o[d]);
  let { initial: s, animate: a } = e,
    l = Ka(e),
    c = Lv(e);
  t &&
    c &&
    !l &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || s === !1;
  let f = u ? a : s;
  return (
    f &&
      typeof f != "boolean" &&
      !Ya(f) &&
      (Array.isArray(f) ? f : [f]).forEach((h) => {
        let g = rf(e, h);
        if (!g) return;
        let { transitionEnd: y, transition: x, ...p } = g;
        for (let m in p) {
          let v = p[m];
          if (Array.isArray(v)) {
            let b = u ? v.length - 1 : 0;
            v = v[b];
          }
          v !== null && (i[m] = v);
        }
        for (let m in y) i[m] = y[m];
      }),
    i
  );
}
var Oe = (e) => e,
  {
    schedule: K,
    cancel: tt,
    state: Ie,
    steps: La,
  } = Fv(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Oe, !0),
  Vv = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1;
function Qa(e, t = "page") {
  return { point: { x: e[t + "X"], y: e[t + "Y"] } };
}
var Bv = (e) => (t) => Vv(t) && e(t, Qa(t));
function zn(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function bn(e, t, n, r) {
  return zn(e, t, Bv(n), r);
}
var BC = (e, t) => (n) => t(e(n)),
  xn = (...e) => e.reduce(BC);
function Hv(e) {
  let t = null;
  return () => {
    let n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
var pm = Hv("dragHorizontal"),
  mm = Hv("dragVertical");
function zv(e) {
  let t = !1;
  if (e === "y") t = mm();
  else if (e === "x") t = pm();
  else {
    let n = pm(),
      r = mm();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function of() {
  let e = zv(!0);
  return e ? (e(), !1) : !0;
}
var Zo = Oe,
  nt = Oe,
  Nv = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  HC = 1e-7,
  zC = 12;
function NC(e, t, n, r, i) {
  let o,
    s,
    a = 0;
  do (s = t + (n - t) / 2), (o = Nv(s, r, i) - e), o > 0 ? (n = s) : (t = s);
  while (Math.abs(o) > HC && ++a < zC);
  return s;
}
function Di(e, t, n, r) {
  if (e === t && n === r) return Oe;
  let i = (o) => NC(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : Nv(i(o), t, r));
}
var $v = Di(0.42, 0, 1, 1),
  Wv = Di(0, 0, 0.58, 1),
  sf = Di(0.42, 0, 0.58, 1),
  af = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  lf = (e) => (t) => 1 - e(1 - t),
  Za = (e) => 1 - Math.sin(Math.acos(e)),
  cf = lf(Za),
  jv = af(Za),
  uf = Di(0.33, 1.53, 0.69, 0.99),
  Ja = lf(uf),
  Uv = af(Ja),
  Xv = (e) =>
    (e *= 2) < 1 ? 0.5 * Ja(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  cr = (e, t, n) => {
    let r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  Vi = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Bo = { ...Vi, transform: (e) => Wn(0, 1, e) },
  Ra = { ...Vi, default: 1 },
  ff = (e, t) => (n) =>
    !!(
      (qo(n) && FC.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Gv = (e, t, n) => (r) => {
    if (!qo(r)) return r;
    let [i, o, s, a] = r.match(nf);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  $C = (e) => Wn(0, 255, e),
  xu = { ...Vi, transform: (e) => Math.round($C(e)) },
  Kr = {
    test: ff("rgb", "red"),
    parse: Gv("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      xu.transform(e) +
      ", " +
      xu.transform(t) +
      ", " +
      xu.transform(n) +
      ", " +
      Vo(Bo.transform(r)) +
      ")",
  };
function WC(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
var Lu = { test: ff("#"), parse: WC, transform: Kr.transform },
  Fi = {
    test: ff("hsl", "hue"),
    parse: Gv("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      yn.transform(Vo(t)) +
      ", " +
      yn.transform(Vo(n)) +
      ", " +
      Vo(Bo.transform(r)) +
      ")",
  },
  Ke = {
    test: (e) => Kr.test(e) || Lu.test(e) || Fi.test(e),
    parse: (e) =>
      Kr.test(e) ? Kr.parse(e) : Fi.test(e) ? Fi.parse(e) : Lu.parse(e),
    transform: (e) =>
      qo(e) ? e : e.hasOwnProperty("red") ? Kr.transform(e) : Fi.transform(e),
  };
function jC(e) {
  var t, n;
  return (
    isNaN(e) &&
    qo(e) &&
    (((t = e.match(nf)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(IC)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
var Yv = "number",
  Kv = "color",
  UC = "var",
  XC = "var(",
  vm = "${}",
  gm =
    /(var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\))|(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))|((-)?([\d]*\.?[\d])+)/gi;
function Ba(e) {
  let t = e.toString(),
    n = t.match(gm) || [],
    r = [],
    i = { color: [], number: [], var: [] },
    o = [];
  for (let l = 0; l < n.length; l++) {
    let c = n[l];
    Ke.test(c)
      ? (i.color.push(l), o.push(Kv), r.push(Ke.parse(c)))
      : c.startsWith(XC)
      ? (i.var.push(l), o.push(UC), r.push(c))
      : (i.number.push(l), o.push(Yv), r.push(parseFloat(c)));
  }
  let a = t.replace(gm, vm).split(vm);
  return { values: r, split: a, indexes: i, types: o };
}
function qv(e) {
  return Ba(e).values;
}
function Qv(e) {
  let { split: t, types: n } = Ba(e),
    r = t.length;
  return (i) => {
    let o = "";
    for (let s = 0; s < r; s++)
      if (((o += t[s]), i[s] !== void 0)) {
        let a = n[s];
        a === Yv
          ? (o += Vo(i[s]))
          : a === Kv
          ? (o += Ke.transform(i[s]))
          : (o += i[s]);
      }
    return o;
  };
}
var GC = (e) => (typeof e == "number" ? 0 : e);
function YC(e) {
  let t = qv(e);
  return Qv(e)(t.map(GC));
}
var jn = { test: jC, parse: qv, createTransformer: Qv, getAnimatableNone: YC },
  he = (e, t, n) => e + (t - e) * n;
function Su(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function KC({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    o = 0,
    s = 0;
  if (!t) i = o = s = n;
  else {
    let a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (i = Su(l, a, e + 1 / 3)), (o = Su(l, a, e)), (s = Su(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
var wu = (e, t, n) => {
    let r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  qC = [Lu, Kr, Fi],
  QC = (e) => qC.find((t) => t.test(e));
function ym(e) {
  let t = QC(e);
  nt(
    !!t,
    `'${e}' is not an animatable color. Use the equivalent color code instead.`
  );
  let n = t.parse(e);
  return t === Fi && (n = KC(n)), n;
}
var bm = (e, t) => {
    let n = ym(e),
      r = ym(t),
      i = { ...n };
    return (o) => (
      (i.red = wu(n.red, r.red, o)),
      (i.green = wu(n.green, r.green, o)),
      (i.blue = wu(n.blue, r.blue, o)),
      (i.alpha = he(n.alpha, r.alpha, o)),
      Kr.transform(i)
    );
  },
  Zv = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Jv = Zv("--"),
  ZC = Zv("var(--"),
  Ha = (e) => (ZC(e) ? JC.test(e.split("/*")[0].trim()) : !1),
  JC =
    /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)$/i;
function _u(e, t) {
  return (n) => (n > 0 ? t : e);
}
function ek(e, t) {
  return (n) => he(e, t, n);
}
function df(e) {
  return typeof e == "number"
    ? ek
    : typeof e == "string"
    ? Ha(e)
      ? _u
      : Ke.test(e)
      ? bm
      : rk
    : Array.isArray(e)
    ? eg
    : typeof e == "object"
    ? Ke.test(e)
      ? bm
      : tk
    : _u;
}
function eg(e, t) {
  let n = [...e],
    r = n.length,
    i = e.map((o, s) => df(o)(o, t[s]));
  return (o) => {
    for (let s = 0; s < r; s++) n[s] = i[s](o);
    return n;
  };
}
function tk(e, t) {
  let n = { ...e, ...t },
    r = {};
  for (let i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = df(e[i])(e[i], t[i]));
  return (i) => {
    for (let o in r) n[o] = r[o](i);
    return n;
  };
}
function nk(e, t) {
  var n;
  let r = [],
    i = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < t.values.length; o++) {
    let s = t.types[o],
      a = e.indexes[s][i[s]],
      l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    (r[o] = l), i[s]++;
  }
  return r;
}
var rk = (e, t) => {
  let n = jn.createTransformer(t),
    r = Ba(e),
    i = Ba(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? xn(eg(nk(r, i), i.values), n)
    : (Zo(
        !0,
        `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
      ),
      _u(e, t));
};
function hf(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? he(e, t, n)
    : df(e)(e, t);
}
function ik(e, t, n) {
  let r = [],
    i = n || hf,
    o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let a = i(e[s], e[s + 1]);
    if (t) {
      let l = Array.isArray(t) ? t[s] || Oe : t;
      a = xn(l, a);
    }
    r.push(a);
  }
  return r;
}
function Bi(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  let o = e.length;
  if (
    (nt(o === t.length, "Both input and output ranges must be the same length"),
    o === 1)
  )
    return () => t[0];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  let s = ik(t, r, i),
    a = s.length,
    l = (c) => {
      let u = 0;
      if (a > 1) for (; u < e.length - 2 && !(c < e[u + 1]); u++);
      let f = cr(e[u], e[u + 1], c);
      return s[u](f);
    };
  return n ? (c) => l(Wn(e[0], e[o - 1], c)) : l;
}
var Nn = (e) => e * 1e3,
  Sn = (e) => e / 1e3;
function pf(e, t) {
  return t ? e * (1e3 / t) : 0;
}
var ok = 5;
function tg(e, t, n) {
  let r = Math.max(t - ok, 0);
  return pf(n - e(r), t - r);
}
var Cu = 0.001,
  sk = 0.01,
  xm = 10,
  ak = 0.05,
  lk = 1;
function ck({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i, o;
  Zo(e <= Nn(xm), "Spring duration must be 10 seconds or less");
  let s = 1 - t;
  (s = Wn(ak, lk, s)),
    (e = Wn(sk, xm, Sn(e))),
    s < 1
      ? ((i = (c) => {
          let u = c * s,
            f = u * e,
            d = u - n,
            h = Mu(c, s),
            g = Math.exp(-f);
          return Cu - (d / h) * g;
        }),
        (o = (c) => {
          let f = c * s * e,
            d = f * n + n,
            h = Math.pow(s, 2) * Math.pow(c, 2) * e,
            g = Math.exp(-f),
            y = Mu(Math.pow(c, 2), s);
          return ((-i(c) + Cu > 0 ? -1 : 1) * ((d - h) * g)) / y;
        }))
      : ((i = (c) => {
          let u = Math.exp(-c * e),
            f = (c - n) * e + 1;
          return -Cu + u * f;
        }),
        (o = (c) => {
          let u = Math.exp(-c * e),
            f = (n - c) * (e * e);
          return u * f;
        }));
  let a = 5 / e,
    l = fk(i, o, a);
  if (((e = Nn(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    let c = Math.pow(l, 2) * r;
    return { stiffness: c, damping: s * 2 * Math.sqrt(r * c), duration: e };
  }
}
var uk = 12;
function fk(e, t, n) {
  let r = n;
  for (let i = 1; i < uk; i++) r = r - e(r) / t(r);
  return r;
}
function Mu(e, t) {
  return e * Math.sqrt(1 - t * t);
}
var dk = ["duration", "bounce"],
  hk = ["stiffness", "damping", "mass"];
function Sm(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function pk(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Sm(e, hk) && Sm(e, dk)) {
    let n = ck(e);
    (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function Jo({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  let i = e[0],
    o = e[e.length - 1],
    s = { done: !1, value: i },
    {
      stiffness: a,
      damping: l,
      mass: c,
      duration: u,
      velocity: f,
      isResolvedFromDuration: d,
    } = pk({ ...r, velocity: -Sn(r.velocity || 0) }),
    h = f || 0,
    g = l / (2 * Math.sqrt(a * c)),
    y = o - i,
    x = Sn(Math.sqrt(a / c)),
    p = Math.abs(y) < 5;
  n || (n = p ? 0.01 : 2), t || (t = p ? 0.005 : 0.5);
  let m;
  if (g < 1) {
    let v = Mu(x, g);
    m = (b) => {
      let C = Math.exp(-g * x * b);
      return (
        o - C * (((h + g * x * y) / v) * Math.sin(v * b) + y * Math.cos(v * b))
      );
    };
  } else if (g === 1) m = (v) => o - Math.exp(-x * v) * (y + (h + x * y) * v);
  else {
    let v = x * Math.sqrt(g * g - 1);
    m = (b) => {
      let C = Math.exp(-g * x * b),
        w = Math.min(v * b, 300);
      return (
        o - (C * ((h + g * x * y) * Math.sinh(w) + v * y * Math.cosh(w))) / v
      );
    };
  }
  return {
    calculatedDuration: (d && u) || null,
    next: (v) => {
      let b = m(v);
      if (d) s.done = v >= u;
      else {
        let C = h;
        v !== 0 && (g < 1 ? (C = tg(m, v, b)) : (C = 0));
        let w = Math.abs(C) <= n,
          k = Math.abs(o - b) <= t;
        s.done = w && k;
      }
      return (s.value = s.done ? o : b), s;
    },
  };
}
var ng = (e) => Array.isArray(e) && typeof e[0] != "number",
  wm = {
    linear: Oe,
    easeIn: $v,
    easeInOut: sf,
    easeOut: Wv,
    circIn: Za,
    circInOut: jv,
    circOut: cf,
    backIn: Ja,
    backInOut: Uv,
    backOut: uf,
    anticipate: Xv,
  },
  Cm = (e) => {
    if (Array.isArray(e)) {
      nt(
        e.length === 4,
        "Cubic bezier arrays must contain four numerical values."
      );
      let [t, n, r, i] = e;
      return Di(t, n, r, i);
    } else if (typeof e == "string")
      return nt(wm[e] !== void 0, `Invalid easing type '${e}'`), wm[e];
    return e;
  };
function rg(e, t) {
  let n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    let i = cr(0, t, r);
    e.push(he(n, 1, i));
  }
}
function mf(e) {
  let t = [0];
  return rg(t, e.length - 1), t;
}
function mk(e, t) {
  return e.map((n) => n * t);
}
function vk(e, t) {
  return e.map(() => t || sf).splice(0, e.length - 1);
}
function za({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  let i = ng(r) ? r.map(Cm) : Cm(r),
    o = { done: !1, value: t[0] },
    s = mk(n && n.length === t.length ? n : mf(t), e),
    a = Bi(s, t, { ease: Array.isArray(i) ? i : vk(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((o.value = a(l)), (o.done = l >= e), o),
  };
}
function km({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: s,
  min: a,
  max: l,
  restDelta: c = 0.5,
  restSpeed: u,
}) {
  let f = e[0],
    d = { done: !1, value: f },
    h = (E) => (a !== void 0 && E < a) || (l !== void 0 && E > l),
    g = (E) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - E) < Math.abs(l - E)
        ? a
        : l,
    y = n * t,
    x = f + y,
    p = s === void 0 ? x : s(x);
  p !== x && (y = p - f);
  let m = (E) => -y * Math.exp(-E / r),
    v = (E) => p + m(E),
    b = (E) => {
      let P = m(E),
        I = v(E);
      (d.done = Math.abs(P) <= c), (d.value = d.done ? p : I);
    },
    C,
    w,
    k = (E) => {
      h(d.value) &&
        ((C = E),
        (w = Jo({
          keyframes: [d.value, g(d.value)],
          velocity: tg(v, E, d.value),
          damping: i,
          stiffness: o,
          restDelta: c,
          restSpeed: u,
        })));
    };
  return (
    k(0),
    {
      calculatedDuration: null,
      next: (E) => {
        let P = !1;
        return (
          !w && C === void 0 && ((P = !0), b(E), k(E)),
          C !== void 0 && E > C ? w.next(E - C) : (!P && b(E), d)
        );
      },
    }
  );
}
var _a;
function gk() {
  _a = void 0;
}
var qr = {
    now: () => (
      _a === void 0 &&
        qr.set(
          Ie.isProcessing || Xa.useManualTiming
            ? Ie.timestamp
            : performance.now()
        ),
      _a
    ),
    set: (e) => {
      (_a = e), queueMicrotask(gk);
    },
  },
  yk = (e) => {
    let t = ({ timestamp: n }) => e(n);
    return {
      start: () => K.update(t, !0),
      stop: () => tt(t),
      now: () => (Ie.isProcessing ? Ie.timestamp : qr.now()),
    };
  },
  Ou = 2e4;
function Au(e) {
  let t = 0,
    n = 50,
    r = e.next(t);
  for (; !r.done && t < Ou; ) (t += n), (r = e.next(t));
  return t >= Ou ? 1 / 0 : t;
}
var bk = { decay: km, inertia: km, tween: za, keyframes: za, spring: Jo },
  xk = (e) => e / 100;
function Zr({
  autoplay: e = !0,
  delay: t = 0,
  driver: n = yk,
  keyframes: r,
  type: i = "keyframes",
  repeat: o = 0,
  repeatDelay: s = 0,
  repeatType: a = "loop",
  onPlay: l,
  onStop: c,
  onComplete: u,
  onUpdate: f,
  ...d
}) {
  let h = 1,
    g = !1,
    y,
    x,
    p = () => {
      x = new Promise((V) => {
        y = V;
      });
    };
  p();
  let m,
    v = bk[i] || za,
    b;
  v !== za &&
    typeof r[0] != "number" &&
    ((b = xn(xk, hf(r[0], r[1]))), (r = [0, 100]));
  let C = v({ ...d, keyframes: r }),
    w;
  a === "mirror" &&
    (w = v({
      ...d,
      keyframes: [...r].reverse(),
      velocity: -(d.velocity || 0),
    }));
  let k = "idle",
    E = null,
    P = null,
    I = null;
  C.calculatedDuration === null && o && (C.calculatedDuration = Au(C));
  let { calculatedDuration: H } = C,
    _ = 1 / 0,
    Z = 1 / 0;
  H !== null && ((_ = H + s), (Z = _ * (o + 1) - s));
  let N = 0,
    ee = (V) => {
      if (P === null) return;
      h > 0 && (P = Math.min(P, V)),
        h < 0 && (P = Math.min(V - Z / h, P)),
        E !== null ? (N = E) : (N = Math.round(V - P) * h);
      let te = N - t * (h >= 0 ? 1 : -1),
        Y = h >= 0 ? te < 0 : te > Z;
      (N = Math.max(te, 0)), k === "finished" && E === null && (N = Z);
      let J = N,
        jt = C;
      if (o) {
        let It = Math.min(N, Z) / _,
          xt = Math.floor(It),
          ut = It % 1;
        !ut && It >= 1 && (ut = 1),
          ut === 1 && xt--,
          (xt = Math.min(xt, o + 1)),
          !!(xt % 2) &&
            (a === "reverse"
              ? ((ut = 1 - ut), s && (ut -= s / _))
              : a === "mirror" && (jt = w)),
          (J = Wn(0, 1, ut) * _);
      }
      let re = Y ? { done: !1, value: r[0] } : jt.next(J);
      b && (re.value = b(re.value));
      let { done: ct } = re;
      !Y && H !== null && (ct = h >= 0 ? N >= Z : N <= 0);
      let q = E === null && (k === "finished" || (k === "running" && ct));
      return f && f(re.value), q && j(), re;
    },
    G = () => {
      m && m.stop(), (m = void 0);
    },
    z = () => {
      (k = "idle"), G(), y(), p(), (P = I = null);
    },
    j = () => {
      (k = "finished"), u && u(), G(), y();
    },
    D = () => {
      if (g) return;
      m || (m = n(ee));
      let V = m.now();
      l && l(),
        E !== null ? (P = V - E) : (!P || k === "finished") && (P = V),
        k === "finished" && p(),
        (I = P),
        (E = null),
        (k = "running"),
        m.start();
    };
  e && D();
  let Q = {
    then(V, te) {
      return x.then(V, te);
    },
    get time() {
      return Sn(N);
    },
    set time(V) {
      (V = Nn(V)),
        (N = V),
        E !== null || !m || h === 0 ? (E = V) : (P = m.now() - V / h);
    },
    get duration() {
      let V = C.calculatedDuration === null ? Au(C) : C.calculatedDuration;
      return Sn(V);
    },
    get speed() {
      return h;
    },
    set speed(V) {
      V === h || !m || ((h = V), (Q.time = Sn(N)));
    },
    get state() {
      return k;
    },
    play: D,
    pause: () => {
      (k = "paused"), (E = N);
    },
    stop: () => {
      (g = !0), k !== "idle" && ((k = "idle"), c && c(), z());
    },
    cancel: () => {
      I !== null && ee(I), z();
    },
    complete: () => {
      k = "finished";
    },
    sample: (V) => ((P = 0), ee(V)),
  };
  return Q;
}
function vf(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function el(e, t) {
  let n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
function Sk([...e], t, n) {
  let r = t < 0 ? e.length + t : t;
  if (r >= 0 && r < e.length) {
    let i = n < 0 ? e.length + n : n,
      [o] = e.splice(t, 1);
    e.splice(i, 0, o);
  }
  return e;
}
var gf = class {
    constructor() {
      this.subscriptions = [];
    }
    add(e) {
      return vf(this.subscriptions, e), () => el(this.subscriptions, e);
    }
    notify(e, t, n) {
      let r = this.subscriptions.length;
      if (r)
        if (r === 1) this.subscriptions[0](e, t, n);
        else
          for (let i = 0; i < r; i++) {
            let o = this.subscriptions[i];
            o && o(e, t, n);
          }
    }
    getSize() {
      return this.subscriptions.length;
    }
    clear() {
      this.subscriptions.length = 0;
    }
  },
  Tm = 30,
  wk = (e) => !isNaN(parseFloat(e)),
  Ho = { current: void 0 },
  tl = class {
    constructor(e, t = {}) {
      (this.version = "11.0.7"),
        (this.canTrackVelocity = !1),
        (this.events = {}),
        (this.updateAndNotify = (n, r = !0) => {
          let i = qr.now();
          this.updatedAt !== i && this.setPrevFrameValue(),
            (this.prev = this.current),
            this.setCurrent(n),
            this.current !== this.prev &&
              this.events.change &&
              this.events.change.notify(this.current),
            r &&
              this.events.renderRequest &&
              this.events.renderRequest.notify(this.current);
        }),
        (this.hasAnimated = !1),
        this.setCurrent(e),
        (this.canTrackVelocity = wk(this.current)),
        (this.owner = t.owner);
    }
    setCurrent(e) {
      (this.current = e), (this.updatedAt = qr.now());
    }
    setPrevFrameValue(e = this.current) {
      (this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt);
    }
    onChange(e) {
      return this.on("change", e);
    }
    on(e, t) {
      this.events[e] || (this.events[e] = new gf());
      let n = this.events[e].add(t);
      return e === "change"
        ? () => {
            n(),
              K.read(() => {
                this.events.change.getSize() || this.stop();
              });
          }
        : n;
    }
    clearListeners() {
      for (let e in this.events) this.events[e].clear();
    }
    attach(e, t) {
      (this.passiveEffect = e), (this.stopPassiveEffect = t);
    }
    set(e, t = !0) {
      !t || !this.passiveEffect
        ? this.updateAndNotify(e, t)
        : this.passiveEffect(e, this.updateAndNotify);
    }
    setWithVelocity(e, t, n) {
      this.set(t),
        (this.prev = void 0),
        (this.prevFrameValue = e),
        (this.prevUpdatedAt = this.updatedAt - n);
    }
    jump(e) {
      this.updateAndNotify(e),
        (this.prev = e),
        (this.prevUpdatedAt = this.prevFrameValue = void 0),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect();
    }
    get() {
      return Ho.current && Ho.current.push(this), this.current;
    }
    getPrevious() {
      return this.prev;
    }
    getVelocity() {
      let e = qr.now();
      if (
        !this.canTrackVelocity ||
        this.prevFrameValue === void 0 ||
        e - this.updatedAt > Tm
      )
        return 0;
      let t = Math.min(this.updatedAt - this.prevUpdatedAt, Tm);
      return pf(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
    }
    start(e) {
      return (
        this.stop(),
        new Promise((t) => {
          (this.hasAnimated = !0),
            (this.animation = e(t)),
            this.events.animationStart && this.events.animationStart.notify();
        }).then(() => {
          this.events.animationComplete &&
            this.events.animationComplete.notify(),
            this.clearAnimation();
        })
      );
    }
    stop() {
      this.animation &&
        (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation();
    }
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      delete this.animation;
    }
    destroy() {
      this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect();
    }
  };
function xe(e, t) {
  return new tl(e, t);
}
var ig = (e) => /^\-?\d*\.?\d+$/.test(e),
  og = (e) => /^0[^.\s]+$/.test(e),
  Ck = new Set(["brightness", "contrast", "saturate", "opacity"]);
function kk(e) {
  let [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  let [r] = n.match(nf) || [];
  if (!r) return e;
  let i = n.replace(r, ""),
    o = Ck.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + i + ")";
}
var Tk = /([a-z-]*)\(.*?\)/g,
  Du = {
    ...jn,
    getAnimatableNone: (e) => {
      let t = e.match(Tk);
      return t ? t.map(kk).join(" ") : e;
    },
  },
  Em = { ...Vi, transform: Math.round },
  sg = {
    borderWidth: $,
    borderTopWidth: $,
    borderRightWidth: $,
    borderBottomWidth: $,
    borderLeftWidth: $,
    borderRadius: $,
    radius: $,
    borderTopLeftRadius: $,
    borderTopRightRadius: $,
    borderBottomRightRadius: $,
    borderBottomLeftRadius: $,
    width: $,
    maxWidth: $,
    height: $,
    maxHeight: $,
    size: $,
    top: $,
    right: $,
    bottom: $,
    left: $,
    padding: $,
    paddingTop: $,
    paddingRight: $,
    paddingBottom: $,
    paddingLeft: $,
    margin: $,
    marginTop: $,
    marginRight: $,
    marginBottom: $,
    marginLeft: $,
    rotate: sr,
    rotateX: sr,
    rotateY: sr,
    rotateZ: sr,
    scale: Ra,
    scaleX: Ra,
    scaleY: Ra,
    scaleZ: Ra,
    skew: sr,
    skewX: sr,
    skewY: sr,
    distance: $,
    translateX: $,
    translateY: $,
    translateZ: $,
    x: $,
    y: $,
    z: $,
    perspective: $,
    transformPerspective: $,
    opacity: Bo,
    originX: hm,
    originY: hm,
    originZ: $,
    zIndex: Em,
    fillOpacity: Bo,
    strokeOpacity: Bo,
    numOctaves: Em,
  },
  Ek = {
    ...sg,
    color: Ke,
    backgroundColor: Ke,
    outlineColor: Ke,
    fill: Ke,
    stroke: Ke,
    borderColor: Ke,
    borderTopColor: Ke,
    borderRightColor: Ke,
    borderBottomColor: Ke,
    borderLeftColor: Ke,
    filter: Du,
    WebkitFilter: Du,
  },
  yf = (e) => Ek[e];
function ag(e, t) {
  let n = yf(e);
  return (
    n !== Du && (n = jn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
var lg = (e) => (t) => t.test(e),
  Rk = { test: (e) => e === "auto", parse: (e) => e },
  cg = [Vi, $, yn, sr, _C, LC, Rk],
  _o = (e) => cg.find(lg(e)),
  Pk = [...cg, Ke, jn],
  Ik = (e) => Pk.find(lg(e));
function Fk(e) {
  let t = {};
  return e.values.forEach((n, r) => (t[r] = n.get())), t;
}
function Lk(e) {
  let t = {};
  return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
}
function nl(e, t, n) {
  let r = e.getProps();
  return rf(r, t, n !== void 0 ? n : r.custom, Fk(e), Lk(e));
}
function _k(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, xe(n));
}
function bf(e, t) {
  let n = nl(e, t),
    {
      transitionEnd: r = {},
      transition: i = {},
      ...o
    } = n ? e.makeTargetAnimatable(n, !1) : {};
  o = { ...o, ...r };
  for (let s in o) {
    let a = AC(o[s]);
    _k(e, s, a);
  }
}
function Vu(e, t) {
  [...t].reverse().forEach((r) => {
    let i = e.getVariant(r);
    i && bf(e, i),
      e.variantChildren &&
        e.variantChildren.forEach((o) => {
          Vu(o, t);
        });
  });
}
function Mk(e, t) {
  if (Array.isArray(t)) return Vu(e, t);
  if (typeof t == "string") return Vu(e, [t]);
  bf(e, t);
}
function ug(e, t, n) {
  var r, i;
  let o = Object.keys(t).filter((a) => !e.hasValue(a)),
    s = o.length;
  if (s)
    for (let a = 0; a < s; a++) {
      let l = o[a],
        c = t[l],
        u = null;
      Array.isArray(c) && (u = c[0]),
        u === null &&
          (u =
            (i = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !==
              null && i !== void 0
              ? i
              : t[l]),
        u != null &&
          (typeof u == "string" && (ig(u) || og(u))
            ? (u = parseFloat(u))
            : !Ik(u) && jn.test(c) && (u = ag(l, c)),
          e.addValue(l, xe(u, { owner: e })),
          n[l] === void 0 && (n[l] = u),
          u !== null && e.setBaseTarget(l, u));
    }
}
function Ok(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function Ak(e, t, n) {
  let r = {};
  for (let i in e) {
    let o = Ok(i, t);
    if (o !== void 0) r[i] = o;
    else {
      let s = n.getValue(i);
      s && (r[i] = s.get());
    }
  }
  return r;
}
var Na = { current: !1 },
  fg = (e) => Array.isArray(e) && typeof e[0] == "number";
function dg(e) {
  return !!(
    !e ||
    (typeof e == "string" && hg[e]) ||
    fg(e) ||
    (Array.isArray(e) && e.every(dg))
  );
}
var Do = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  hg = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Do([0, 0.65, 0.55, 1]),
    circOut: Do([0.55, 0, 1, 0.45]),
    backIn: Do([0.31, 0.01, 0.66, -0.59]),
    backOut: Do([0.33, 1.53, 0.69, 0.99]),
  };
function pg(e) {
  if (e) return fg(e) ? Do(e) : Array.isArray(e) ? e.map(pg) : hg[e];
}
function Dk(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i,
    repeat: o = 0,
    repeatType: s = "loop",
    ease: a,
    times: l,
  } = {}
) {
  let c = { [t]: n };
  l && (c.offset = l);
  let u = pg(a);
  return (
    Array.isArray(u) && (c.easing = u),
    e.animate(c, {
      delay: r,
      duration: i,
      easing: Array.isArray(u) ? "linear" : u,
      fill: "both",
      iterations: o + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
function Vk(e, { repeat: t, repeatType: n = "loop" }) {
  let r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[r];
}
function mg(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
var Bk = mg(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Hk = new Set(["opacity", "clipPath", "filter", "transform"]),
  Pa = 10,
  zk = 2e4,
  Nk = (e, t) => t.type === "spring" || e === "backgroundColor" || !dg(t.ease);
function $k(e, t, { onUpdate: n, onComplete: r, ...i }) {
  if (
    !(
      Bk() &&
      Hk.has(t) &&
      !i.repeatDelay &&
      i.repeatType !== "mirror" &&
      i.damping !== 0 &&
      i.type !== "inertia"
    )
  )
    return !1;
  let s = !1,
    a,
    l,
    c = !1,
    u = () => {
      l = new Promise((v) => {
        a = v;
      });
    };
  u();
  let { keyframes: f, duration: d = 300, ease: h, times: g } = i;
  if (Nk(t, i)) {
    let v = Zr({ ...i, repeat: 0, delay: 0 }),
      b = { done: !1, value: f[0] },
      C = [],
      w = 0;
    for (; !b.done && w < zk; ) (b = v.sample(w)), C.push(b.value), (w += Pa);
    (g = void 0), (f = C), (d = w - Pa), (h = "linear");
  }
  let y = Dk(e.owner.current, t, f, { ...i, duration: d, ease: h, times: g }),
    x = () => {
      (c = !1), y.cancel();
    },
    p = () => {
      (c = !0), K.update(x), a(), u();
    };
  return (
    (y.onfinish = () => {
      c || (e.set(Vk(f, i)), r && r(), p());
    }),
    {
      then(v, b) {
        return l.then(v, b);
      },
      attachTimeline(v) {
        return (y.timeline = v), (y.onfinish = null), Oe;
      },
      get time() {
        return Sn(y.currentTime || 0);
      },
      set time(v) {
        y.currentTime = Nn(v);
      },
      get speed() {
        return y.playbackRate;
      },
      set speed(v) {
        y.playbackRate = v;
      },
      get duration() {
        return Sn(d);
      },
      play: () => {
        s || (y.play(), tt(x));
      },
      pause: () => y.pause(),
      stop: () => {
        if (((s = !0), y.playState === "idle")) return;
        let { currentTime: v } = y;
        if (v) {
          let b = Zr({ ...i, autoplay: !1 });
          e.setWithVelocity(b.sample(v - Pa).value, b.sample(v).value, Pa);
        }
        p();
      },
      complete: () => {
        c || y.finish();
      },
      cancel: p,
    }
  );
}
function Wk({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
  let i = () => (
    n && n(e[e.length - 1]),
    r && r(),
    {
      time: 0,
      speed: 1,
      duration: 0,
      play: Oe,
      pause: Oe,
      stop: Oe,
      then: (o) => (o(), Promise.resolve()),
      cancel: Oe,
      complete: Oe,
    }
  );
  return t
    ? Zr({ keyframes: [0, 1], duration: 0, delay: t, onComplete: i })
    : i();
}
var jk = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  Uk = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  Xk = { type: "keyframes", duration: 0.8 },
  Gk = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  Yk = (e, { keyframes: t }) =>
    t.length > 2
      ? Xk
      : Jr.has(e)
      ? e.startsWith("scale")
        ? Uk(t[1])
        : jk
      : Gk,
  Bu = (e, t) =>
    e === "zIndex"
      ? !1
      : !!(
          typeof t == "number" ||
          Array.isArray(t) ||
          (typeof t == "string" &&
            (jn.test(t) || t === "0") &&
            !t.startsWith("url("))
        );
function Kk(e) {
  if (typeof e == "number") return e === 0;
  if (e !== null) return e === "none" || e === "0" || og(e);
}
function qk(e, t, n, r) {
  let i = Bu(t, n),
    o;
  Array.isArray(n) ? (o = [...n]) : (o = [null, n]);
  let s = r.from !== void 0 ? r.from : e.get(),
    a,
    l = [];
  for (let c = 0; c < o.length; c++)
    o[c] === null && (o[c] = c === 0 ? s : o[c - 1]),
      Kk(o[c]) && l.push(c),
      typeof o[c] == "string" && o[c] !== "none" && o[c] !== "0" && (a = o[c]);
  if (i && l.length && a)
    for (let c = 0; c < l.length; c++) {
      let u = l[c];
      o[u] = ag(t, a);
    }
  return o;
}
function Qk({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: o,
  repeatType: s,
  repeatDelay: a,
  from: l,
  elapsed: c,
  ...u
}) {
  return !!Object.keys(u).length;
}
function xf(e, t) {
  return e[t] || e.default || e;
}
var Sf =
  (e, t, n, r = {}) =>
  (i) => {
    let o = xf(r, e) || {},
      s = o.delay || r.delay || 0,
      { elapsed: a = 0 } = r;
    a = a - Nn(s);
    let l = qk(t, e, n, o),
      c = l[0],
      u = l[l.length - 1],
      f = Bu(e, c),
      d = Bu(e, u);
    Zo(
      f === d,
      `You are trying to animate ${e} from "${c}" to "${u}". ${c} is not an animatable value - to enable this animation set ${c} to a value animatable to ${u} via the \`style\` property.`
    );
    let h = {
      keyframes: l,
      velocity: t.getVelocity(),
      ease: "easeOut",
      ...o,
      delay: -a,
      onUpdate: (g) => {
        t.set(g), o.onUpdate && o.onUpdate(g);
      },
      onComplete: () => {
        i(), o.onComplete && o.onComplete();
      },
    };
    if (
      (Qk(o) || (h = { ...h, ...Yk(e, h) }),
      h.duration && (h.duration = Nn(h.duration)),
      h.repeatDelay && (h.repeatDelay = Nn(h.repeatDelay)),
      !f || !d || Na.current || o.type === !1 || Xa.skipAnimations)
    )
      return Wk(Na.current ? { ...h, delay: 0 } : h);
    if (
      !r.isHandoff &&
      t.owner &&
      t.owner.current instanceof HTMLElement &&
      !t.owner.getProps().onUpdate
    ) {
      let g = $k(t, e, h);
      if (g) return g;
    }
    return Zr(h);
  };
function $a(e) {
  return !!(Se(e) && e.add);
}
function Zk({ protectedKeys: e, needsAnimating: t }, n) {
  let r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function Jk(e, t) {
  let n = e.get();
  if (Array.isArray(t)) {
    for (let r = 0; r < t.length; r++) if (t[r] !== n) return !0;
  } else return n !== t;
}
function wf(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let {
      transition: o = e.getDefaultTransition(),
      transitionEnd: s,
      ...a
    } = e.makeTargetAnimatable(t),
    l = e.getValue("willChange");
  r && (o = r);
  let c = [],
    u = i && e.animationState && e.animationState.getState()[i];
  for (let f in a) {
    let d = e.getValue(f),
      h = a[f];
    if (!d || h === void 0 || (u && Zk(u, f))) continue;
    let g = { delay: n, elapsed: 0, ...xf(o || {}, f) };
    if (L.HandoffAppearAnimations) {
      let p = e.getProps()[Ua];
      if (p) {
        let m = L.HandoffAppearAnimations(p, f, d, K);
        m !== null && ((g.elapsed = m), (g.isHandoff = !0));
      }
    }
    let y = !g.isHandoff && !Jk(d, h);
    if (
      (g.type === "spring" && (d.getVelocity() || g.velocity) && (y = !1),
      d.animation && (y = !1),
      y)
    )
      continue;
    d.start(Sf(f, d, h, e.shouldReduceMotion && Jr.has(f) ? { type: !1 } : g));
    let x = d.animation;
    $a(l) && (l.add(f), x.then(() => l.remove(f))), c.push(x);
  }
  return (
    s &&
      Promise.all(c).then(() => {
        s && bf(e, s);
      }),
    c
  );
}
function Hu(e, t, n = {}) {
  let r = nl(e, t, n.custom),
    { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  let o = r ? () => Promise.all(wf(e, r, n)) : () => Promise.resolve(),
    s =
      e.variantChildren && e.variantChildren.size
        ? (l = 0) => {
            let {
              delayChildren: c = 0,
              staggerChildren: u,
              staggerDirection: f,
            } = i;
            return eT(e, t, c + l, u, f, n);
          }
        : () => Promise.resolve(),
    { when: a } = i;
  if (a) {
    let [l, c] = a === "beforeChildren" ? [o, s] : [s, o];
    return l().then(() => c());
  } else return Promise.all([o(), s(n.delay)]);
}
function eT(e, t, n = 0, r = 0, i = 1, o) {
  let s = [],
    a = (e.variantChildren.size - 1) * r,
    l = i === 1 ? (c = 0) => c * r : (c = 0) => a - c * r;
  return (
    Array.from(e.variantChildren)
      .sort(tT)
      .forEach((c, u) => {
        c.notify("AnimationStart", t),
          s.push(
            Hu(c, t, { ...o, delay: n + l(u) }).then(() =>
              c.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(s)
  );
}
function tT(e, t) {
  return e.sortNodePosition(t);
}
function Cf(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    let i = t.map((o) => Hu(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = Hu(e, t, n);
  else {
    let i = typeof t == "function" ? nl(e, t, n.custom) : t;
    r = Promise.all(wf(e, i, n));
  }
  return r.then(() => e.notify("AnimationComplete", t));
}
function vg(e, t) {
  if (!Array.isArray(t)) return !1;
  let n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
var nT = [...Zu].reverse(),
  rT = Zu.length;
function iT(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => Cf(e, n, r)));
}
function oT(e) {
  let t = iT(e),
    n = aT(),
    r = !0,
    i = (l, c) => {
      let u = nl(e, c);
      if (u) {
        let { transition: f, transitionEnd: d, ...h } = u;
        l = { ...l, ...h, ...d };
      }
      return l;
    };
  function o(l) {
    t = l(e);
  }
  function s(l, c) {
    let u = e.getProps(),
      f = e.getVariantContext(!0) || {},
      d = [],
      h = new Set(),
      g = {},
      y = 1 / 0;
    for (let p = 0; p < rT; p++) {
      let m = nT[p],
        v = n[m],
        b = u[m] !== void 0 ? u[m] : f[m],
        C = jo(b),
        w = m === c ? v.isActive : null;
      w === !1 && (y = p);
      let k = b === f[m] && b !== u[m] && C;
      if (
        (k && r && e.manuallyAnimateOnMount && (k = !1),
        (v.protectedKeys = { ...g }),
        (!v.isActive && w === null) ||
          (!b && !v.prevProp) ||
          Ya(b) ||
          typeof b == "boolean")
      )
        continue;
      let P =
          sT(v.prevProp, b) ||
          (m === c && v.isActive && !k && C) ||
          (p > y && C),
        I = !1,
        H = Array.isArray(b) ? b : [b],
        _ = H.reduce(i, {});
      w === !1 && (_ = {});
      let { prevResolvedValues: Z = {} } = v,
        N = { ...Z, ..._ },
        ee = (G) => {
          (P = !0),
            h.has(G) && ((I = !0), h.delete(G)),
            (v.needsAnimating[G] = !0);
        };
      for (let G in N) {
        let z = _[G],
          j = Z[G];
        if (g.hasOwnProperty(G)) continue;
        let D = !1;
        Va(z) && Va(j) ? (D = !vg(z, j)) : (D = z !== j),
          D
            ? z !== void 0
              ? ee(G)
              : h.add(G)
            : z !== void 0 && h.has(G)
            ? ee(G)
            : (v.protectedKeys[G] = !0);
      }
      (v.prevProp = b),
        (v.prevResolvedValues = _),
        v.isActive && (g = { ...g, ..._ }),
        r && e.blockInitialAnimation && (P = !1),
        P &&
          (!k || I) &&
          d.push(
            ...H.map((G) => ({ animation: G, options: { type: m, ...l } }))
          );
    }
    if (h.size) {
      let p = {};
      h.forEach((m) => {
        let v = e.getBaseTarget(m);
        v !== void 0 && (p[m] = v);
      }),
        d.push({ animation: p });
    }
    let x = !!d.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (x = !1),
      (r = !1),
      x ? t(d) : Promise.resolve()
    );
  }
  function a(l, c, u) {
    var f;
    if (n[l].isActive === c) return Promise.resolve();
    (f = e.variantChildren) === null ||
      f === void 0 ||
      f.forEach((h) => {
        var g;
        return (g = h.animationState) === null || g === void 0
          ? void 0
          : g.setActive(l, c);
      }),
      (n[l].isActive = c);
    let d = s(u, l);
    for (let h in n) n[h].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
  };
}
function sT(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !vg(t, e) : !1;
}
function Ur(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function aT() {
  return {
    animate: Ur(!0),
    whileInView: Ur(),
    whileHover: Ur(),
    whileTap: Ur(),
    whileDrag: Ur(),
    whileFocus: Ur(),
    exit: Ur(),
  };
}
var dr = class {
    constructor(e) {
      (this.isMounted = !1), (this.node = e);
    }
    update() {}
  },
  lT = class extends dr {
    constructor(e) {
      super(e), e.animationState || (e.animationState = oT(e));
    }
    updateAnimationControlsSubscription() {
      let { animate: e } = this.node.getProps();
      this.unmount(), Ya(e) && (this.unmount = e.subscribe(this.node));
    }
    mount() {
      this.updateAnimationControlsSubscription();
    }
    update() {
      let { animate: e } = this.node.getProps(),
        { animate: t } = this.node.prevProps || {};
      e !== t && this.updateAnimationControlsSubscription();
    }
    unmount() {}
  },
  cT = 0,
  uT = class extends dr {
    constructor() {
      super(...arguments), (this.id = cT++);
    }
    update() {
      if (!this.node.presenceContext) return;
      let {
          isPresent: e,
          onExitComplete: t,
          custom: n,
        } = this.node.presenceContext,
        { isPresent: r } = this.node.prevPresenceContext || {};
      if (!this.node.animationState || e === r) return;
      let i = this.node.animationState.setActive("exit", !e, {
        custom: n ?? this.node.getProps().custom,
      });
      t && !e && i.then(() => t(this.id));
    }
    mount() {
      let { register: e } = this.node.presenceContext || {};
      e && (this.unmount = e(this.id));
    }
    unmount() {}
  },
  kf = { animation: { Feature: lT }, exit: { Feature: uT } },
  zu = (e, t) => Math.abs(e - t);
function gg(e, t) {
  let n = zu(e.x, t.x),
    r = zu(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
function wt(e) {
  return e.max - e.min;
}
function Nu(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function Rm(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = he(t.min, t.max, e.origin)),
    (e.scale = wt(n) / wt(t)),
    (Nu(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = he(n.min, n.max, e.origin) - e.originPoint),
    (Nu(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function zo(e, t, n, r) {
  Rm(e.x, t.x, n.x, r ? r.originX : void 0),
    Rm(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Pm(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + wt(t));
}
function fT(e, t, n) {
  Pm(e.x, t.x, n.x), Pm(e.y, t.y, n.y);
}
function Im(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + wt(t));
}
function No(e, t, n) {
  Im(e.x, t.x, n.x), Im(e.y, t.y, n.y);
}
var Fm = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Li = () => ({ x: Fm(), y: Fm() }),
  Lm = () => ({ min: 0, max: 0 }),
  Pe = () => ({ x: Lm(), y: Lm() });
function Tf() {
  let e = M(Ai);
  if (e === null) return [!0, null];
  let { isPresent: t, onExitComplete: n, register: r } = e,
    i = Ri();
  return W(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
}
var dT = (e, t) => e.depth - t.depth,
  yg = class {
    constructor() {
      (this.children = []), (this.isDirty = !1);
    }
    add(e) {
      vf(this.children, e), (this.isDirty = !0);
    }
    remove(e) {
      el(this.children, e), (this.isDirty = !0);
    }
    forEach(e) {
      this.isDirty && this.children.sort(dT),
        (this.isDirty = !1),
        this.children.forEach(e);
    }
  };
function bg(e, t) {
  let n = qr.now(),
    r = ({ timestamp: i }) => {
      let o = i - n;
      o >= t && (tt(r), e(o - t));
    };
  return K.read(r, !0), () => tt(r);
}
var ur = new WeakMap(),
  Wa = { current: null },
  Ef = { current: !1 };
function xg() {
  if (((Ef.current = !0), !!Yo))
    if (L.matchMedia) {
      let e = L.matchMedia("(prefers-reduced-motion)"),
        t = () => (Wa.current = e.matches);
      e.addListener(t), t();
    } else Wa.current = !1;
}
function hT(e, t, n) {
  let { willChange: r } = t;
  for (let i in t) {
    let o = t[i],
      s = n[i];
    if (Se(o)) e.addValue(i, o), $a(r) && r.add(i);
    else if (Se(s)) e.addValue(i, xe(o, { owner: e })), $a(r) && r.remove(i);
    else if (s !== o)
      if (e.hasValue(i)) {
        let a = e.getValue(i);
        !a.hasAnimated && a.set(o);
      } else {
        let a = e.getStaticValue(i);
        e.addValue(i, xe(a !== void 0 ? a : o, { owner: e }));
      }
  }
  for (let i in n) t[i] === void 0 && e.removeValue(i);
  return t;
}
var Sg = Object.keys(Uo),
  pT = Sg.length,
  _m = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  mT = Ju.length,
  wg = class {
    constructor(
      {
        parent: e,
        props: t,
        presenceContext: n,
        reducedMotionConfig: r,
        visualState: i,
      },
      o = {}
    ) {
      (this.current = null),
        (this.children = new Set()),
        (this.isVariantNode = !1),
        (this.isControllingVariants = !1),
        (this.shouldReduceMotion = null),
        (this.values = new Map()),
        (this.features = {}),
        (this.valueSubscriptions = new Map()),
        (this.prevMotionValues = {}),
        (this.events = {}),
        (this.propEventSubscriptions = {}),
        (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
        (this.render = () => {
          this.current &&
            (this.triggerBuild(),
            this.renderInstance(
              this.current,
              this.renderState,
              this.props.style,
              this.projection
            ));
        }),
        (this.scheduleRender = () => K.render(this.render, !1, !0));
      let { latestValues: s, renderState: a } = i;
      (this.latestValues = s),
        (this.baseTarget = { ...s }),
        (this.initialValues = t.initial ? { ...s } : {}),
        (this.renderState = a),
        (this.parent = e),
        (this.props = t),
        (this.presenceContext = n),
        (this.depth = e ? e.depth + 1 : 0),
        (this.reducedMotionConfig = r),
        (this.options = o),
        (this.isControllingVariants = Ka(t)),
        (this.isVariantNode = Lv(t)),
        this.isVariantNode && (this.variantChildren = new Set()),
        (this.manuallyAnimateOnMount = !!(e && e.current));
      let { willChange: l, ...c } = this.scrapeMotionValuesFromProps(t, {});
      for (let u in c) {
        let f = c[u];
        s[u] !== void 0 && Se(f) && (f.set(s[u], !1), $a(l) && l.add(u));
      }
    }
    scrapeMotionValuesFromProps(e, t) {
      return {};
    }
    mount(e) {
      (this.current = e),
        ur.set(e, this),
        this.projection &&
          !this.projection.instance &&
          this.projection.mount(e),
        this.parent &&
          this.isVariantNode &&
          !this.isControllingVariants &&
          (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach((t, n) => this.bindToMotionValue(n, t)),
        Ef.current || xg(),
        (this.shouldReduceMotion =
          this.reducedMotionConfig === "never"
            ? !1
            : this.reducedMotionConfig === "always"
            ? !0
            : Wa.current),
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext);
    }
    unmount() {
      ur.delete(this.current),
        this.projection && this.projection.unmount(),
        tt(this.notifyUpdate),
        tt(this.render),
        this.valueSubscriptions.forEach((e) => e()),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
      for (let e in this.events) this.events[e].clear();
      for (let e in this.features) this.features[e].unmount();
      this.current = null;
    }
    bindToMotionValue(e, t) {
      let n = Jr.has(e),
        r = t.on("change", (o) => {
          (this.latestValues[e] = o),
            this.props.onUpdate && K.update(this.notifyUpdate, !1, !0),
            n && this.projection && (this.projection.isTransformDirty = !0);
        }),
        i = t.on("renderRequest", this.scheduleRender);
      this.valueSubscriptions.set(e, () => {
        r(), i();
      });
    }
    sortNodePosition(e) {
      return !this.current ||
        !this.sortInstanceNodePosition ||
        this.type !== e.type
        ? 0
        : this.sortInstanceNodePosition(this.current, e.current);
    }
    loadFeatures({ children: e, ...t }, n, r, i) {
      let o, s;
      for (let a = 0; a < pT; a++) {
        let l = Sg[a],
          {
            isEnabled: c,
            Feature: u,
            ProjectionNode: f,
            MeasureLayout: d,
          } = Uo[l];
        f && (o = f),
          c(t) &&
            (!this.features[l] && u && (this.features[l] = new u(this)),
            d && (s = d));
      }
      if (
        (this.type === "html" || this.type === "svg") &&
        !this.projection &&
        o
      ) {
        this.projection = new o(
          this.latestValues,
          this.parent && this.parent.projection
        );
        let {
          layoutId: a,
          layout: l,
          drag: c,
          dragConstraints: u,
          layoutScroll: f,
          layoutRoot: d,
        } = t;
        this.projection.setOptions({
          layoutId: a,
          layout: l,
          alwaysMeasureLayout: !!c || (u && Ii(u)),
          visualElement: this,
          scheduleRender: () => this.scheduleRender(),
          animationType: typeof l == "string" ? l : "both",
          initialPromotionConfig: i,
          layoutScroll: f,
          layoutRoot: d,
        });
      }
      return s;
    }
    updateFeatures() {
      for (let e in this.features) {
        let t = this.features[e];
        t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.options, this.props);
    }
    measureViewportBox() {
      return this.current
        ? this.measureInstanceViewportBox(this.current, this.props)
        : Pe();
    }
    getStaticValue(e) {
      return this.latestValues[e];
    }
    setStaticValue(e, t) {
      this.latestValues[e] = t;
    }
    makeTargetAnimatable(e, t = !0) {
      return this.makeTargetAnimatableFromInstance(e, t);
    }
    update(e, t) {
      (e.transformTemplate || this.props.transformTemplate) &&
        this.scheduleRender(),
        (this.prevProps = this.props),
        (this.props = e),
        (this.prevPresenceContext = this.presenceContext),
        (this.presenceContext = t);
      for (let n = 0; n < _m.length; n++) {
        let r = _m[n];
        this.propEventSubscriptions[r] &&
          (this.propEventSubscriptions[r](),
          delete this.propEventSubscriptions[r]);
        let i = e["on" + r];
        i && (this.propEventSubscriptions[r] = this.on(r, i));
      }
      (this.prevMotionValues = hT(
        this,
        this.scrapeMotionValuesFromProps(e, this.prevProps),
        this.prevMotionValues
      )),
        this.handleChildMotionValue && this.handleChildMotionValue();
    }
    getProps() {
      return this.props;
    }
    getVariant(e) {
      return this.props.variants ? this.props.variants[e] : void 0;
    }
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
      return this.isVariantNode
        ? this
        : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
    }
    getVariantContext(e = !1) {
      if (e) return this.parent ? this.parent.getVariantContext() : void 0;
      if (!this.isControllingVariants) {
        let n = this.parent ? this.parent.getVariantContext() || {} : {};
        return (
          this.props.initial !== void 0 && (n.initial = this.props.initial), n
        );
      }
      let t = {};
      for (let n = 0; n < mT; n++) {
        let r = Ju[n],
          i = this.props[r];
        (jo(i) || i === !1) && (t[r] = i);
      }
      return t;
    }
    addVariantChild(e) {
      let t = this.getClosestVariantNode();
      if (t)
        return (
          t.variantChildren && t.variantChildren.add(e),
          () => t.variantChildren.delete(e)
        );
    }
    addValue(e, t) {
      t !== this.values.get(e) &&
        (this.removeValue(e), this.bindToMotionValue(e, t)),
        this.values.set(e, t),
        (this.latestValues[e] = t.get());
    }
    removeValue(e) {
      this.values.delete(e);
      let t = this.valueSubscriptions.get(e);
      t && (t(), this.valueSubscriptions.delete(e)),
        delete this.latestValues[e],
        this.removeValueFromRenderState(e, this.renderState);
    }
    hasValue(e) {
      return this.values.has(e);
    }
    getValue(e, t) {
      if (this.props.values && this.props.values[e])
        return this.props.values[e];
      let n = this.values.get(e);
      return (
        n === void 0 &&
          t !== void 0 &&
          ((n = xe(t, { owner: this })), this.addValue(e, n)),
        n
      );
    }
    readValue(e) {
      var t;
      return this.latestValues[e] !== void 0 || !this.current
        ? this.latestValues[e]
        : (t = this.getBaseTargetFromProps(this.props, e)) !== null &&
          t !== void 0
        ? t
        : this.readValueFromInstance(this.current, e, this.options);
    }
    setBaseTarget(e, t) {
      this.baseTarget[e] = t;
    }
    getBaseTarget(e) {
      var t;
      let { initial: n } = this.props,
        r =
          typeof n == "string" || typeof n == "object"
            ? (t = rf(this.props, n)) === null || t === void 0
              ? void 0
              : t[e]
            : void 0;
      if (n && r !== void 0) return r;
      let i = this.getBaseTargetFromProps(this.props, e);
      return i !== void 0 && !Se(i)
        ? i
        : this.initialValues[e] !== void 0 && r === void 0
        ? void 0
        : this.baseTarget[e];
    }
    on(e, t) {
      return (
        this.events[e] || (this.events[e] = new gf()), this.events[e].add(t)
      );
    }
    notify(e, ...t) {
      this.events[e] && this.events[e].notify(...t);
    }
  };
function Cg(e) {
  function t(r, i = {}) {
    return _v(e(r, i));
  }
  if (typeof Proxy > "u") return t;
  let n = new Map();
  return new Proxy(t, {
    get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i)),
  });
}
var vT = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Rf(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(vT.indexOf(e) > -1 || /[A-Z]/.test(e));
}
function kg(e, { layout: t, layoutId: n }) {
  return (
    Jr.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!Da[e] || e === "opacity"))
  );
}
var gT = (e, t) => (t && typeof e == "number" ? t.transform(e) : e);
function Pf(e, t, n, r) {
  let { style: i, vars: o, transform: s, transformOrigin: a } = e,
    l = !1,
    c = !1,
    u = !0;
  for (let f in t) {
    let d = t[f];
    if (Jv(f)) {
      o[f] = d;
      continue;
    }
    let h = sg[f],
      g = gT(d, h);
    if (Jr.has(f)) {
      if (((l = !0), (s[f] = g), !u)) continue;
      d !== (h.default || 0) && (u = !1);
    } else f.startsWith("origin") ? ((c = !0), (a[f] = g)) : (i[f] = g);
  }
  if (
    (t.transform ||
      (l || r
        ? (i.transform = Mv(e.transform, n, u, r))
        : i.transform && (i.transform = "none")),
    c)
  ) {
    let { originX: f = "50%", originY: d = "50%", originZ: h = 0 } = a;
    i.transformOrigin = `${f} ${d} ${h}`;
  }
}
var If = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Tg(e, t, n) {
  for (let r in t) !Se(t[r]) && !kg(r, n) && (e[r] = t[r]);
}
function yT({ transformTemplate: e }, t, n) {
  return ge(() => {
    let r = If();
    return (
      Pf(r, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, r.vars, r.style)
    );
  }, [t]);
}
function bT(e, t, n) {
  let r = e.style || {},
    i = {};
  return Tg(i, r, e), Object.assign(i, yT(e, t, n)), i;
}
function xT(e, t, n) {
  let r = {},
    i = bT(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
      (i.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (r.tabIndex = 0),
    (r.style = i),
    r
  );
}
function Mm(e, t, n) {
  return typeof e == "string" ? e : $.transform(t + n * e);
}
function ST(e, t, n) {
  let r = Mm(t, e.x, e.width),
    i = Mm(n, e.y, e.height);
  return `${r} ${i}`;
}
var wT = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  CT = { offset: "strokeDashoffset", array: "strokeDasharray" };
function kT(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  let o = i ? wT : CT;
  e[o.offset] = $.transform(-r);
  let s = $.transform(t),
    a = $.transform(n);
  e[o.array] = `${s} ${a}`;
}
function Ff(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: s,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...c
  },
  u,
  f,
  d
) {
  if ((Pf(e, c, u, d), f)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  let { attrs: h, style: g, dimensions: y } = e;
  h.transform && (y && (g.transform = h.transform), delete h.transform),
    y &&
      (i !== void 0 || o !== void 0 || g.transform) &&
      (g.transformOrigin = ST(
        y,
        i !== void 0 ? i : 0.5,
        o !== void 0 ? o : 0.5
      )),
    t !== void 0 && (h.x = t),
    n !== void 0 && (h.y = n),
    r !== void 0 && (h.scale = r),
    s !== void 0 && kT(h, s, a, l, !1);
}
var Eg = () => ({ ...If(), attrs: {} }),
  Lf = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function TT(e, t, n, r) {
  let i = ge(() => {
    let o = Eg();
    return (
      Ff(o, t, { enableHardwareAcceleration: !1 }, Lf(r), e.transformTemplate),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [t]);
  if (e.style) {
    let o = {};
    Tg(o, e.style, e), (i.style = { ...o, ...i.style });
  }
  return i;
}
function ET(e = !1) {
  return (n, r, i, { latestValues: o }, s) => {
    let l = (Rf(n) ? TT : xT)(r, o, s, n),
      c = Dv(r, typeof n == "string", e),
      u = n !== Fo ? { ...c, ...l, ref: i } : {},
      { children: f } = r,
      d = ge(() => (Se(f) ? f.get() : f), [f]);
    return ue(n, { ...u, children: d });
  };
}
function Rg(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (let o in n) e.style.setProperty(o, n[o]);
}
var Pg = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function Ig(e, t, n, r) {
  Rg(e, t, void 0, r);
  for (let i in t.attrs) e.setAttribute(Pg.has(i) ? i : qu(i), t.attrs[i]);
}
function _f(e, t) {
  let { style: n } = e,
    r = {};
  for (let i in n)
    (Se(n[i]) || (t.style && Se(t.style[i])) || kg(i, e)) && (r[i] = n[i]);
  return r;
}
function Fg(e, t) {
  let n = _f(e, t);
  for (let r in e)
    if (Se(e[r]) || Se(t[r])) {
      let i =
        Ko.indexOf(r) !== -1
          ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
          : r;
      n[i] = e[r];
    }
  return n;
}
var RT = {
    useVisualState: qa({
      scrapeMotionValuesFromProps: Fg,
      createRenderState: Eg,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        K.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          K.render(() => {
            Ff(
              n,
              r,
              { enableHardwareAcceleration: !1 },
              Lf(t.tagName),
              e.transformTemplate
            ),
              Ig(t, n);
          });
      },
    }),
  },
  PT = {
    useVisualState: qa({
      scrapeMotionValuesFromProps: _f,
      createRenderState: If,
    }),
  };
function Lg(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(Rf(e) ? RT : PT),
    preloadedFeatures: n,
    useRender: ET(t),
    createVisualElement: r,
    Component: e,
  };
}
function Om(e, t) {
  let n = "pointer" + (t ? "enter" : "leave"),
    r = "onHover" + (t ? "Start" : "End"),
    i = (o, s) => {
      if (o.pointerType === "touch" || of()) return;
      let a = e.getProps();
      e.animationState &&
        a.whileHover &&
        e.animationState.setActive("whileHover", t),
        a[r] && K.update(() => a[r](o, s));
    };
  return bn(e.current, n, i, { passive: !e.getProps()[r] });
}
var IT = class extends dr {
    mount() {
      this.unmount = xn(Om(this.node, !0), Om(this.node, !1));
    }
    unmount() {}
  },
  FT = class extends dr {
    constructor() {
      super(...arguments), (this.isActive = !1);
    }
    onFocus() {
      let e = !1;
      try {
        e = this.node.current.matches(":focus-visible");
      } catch {
        e = !0;
      }
      !e ||
        !this.node.animationState ||
        (this.node.animationState.setActive("whileFocus", !0),
        (this.isActive = !0));
    }
    onBlur() {
      !this.isActive ||
        !this.node.animationState ||
        (this.node.animationState.setActive("whileFocus", !1),
        (this.isActive = !1));
    }
    mount() {
      this.unmount = xn(
        zn(this.node.current, "focus", () => this.onFocus()),
        zn(this.node.current, "blur", () => this.onBlur())
      );
    }
    unmount() {}
  },
  _g = (e, t) => (t ? (e === t ? !0 : _g(e, t.parentElement)) : !1);
function ku(e, t) {
  if (!t) return;
  let n = new PointerEvent("pointer" + e);
  t(n, Qa(n));
}
var LT = class extends dr {
    constructor() {
      super(...arguments),
        (this.removeStartListeners = Oe),
        (this.removeEndListeners = Oe),
        (this.removeAccessibleListeners = Oe),
        (this.startPointerPress = (e, t) => {
          if (this.isPressing) return;
          this.removeEndListeners();
          let n = this.node.getProps(),
            i = bn(
              L,
              "pointerup",
              (s, a) => {
                if (!this.checkPressEnd()) return;
                let {
                  onTap: l,
                  onTapCancel: c,
                  globalTapTarget: u,
                } = this.node.getProps();
                K.update(() => {
                  !u && !_g(this.node.current, s.target)
                    ? c && c(s, a)
                    : l && l(s, a);
                });
              },
              { passive: !(n.onTap || n.onPointerUp) }
            ),
            o = bn(L, "pointercancel", (s, a) => this.cancelPress(s, a), {
              passive: !(n.onTapCancel || n.onPointerCancel),
            });
          (this.removeEndListeners = xn(i, o)), this.startPress(e, t);
        }),
        (this.startAccessiblePress = () => {
          let e = (i) => {
              if (i.key !== "Enter" || this.isPressing) return;
              let o = (s) => {
                s.key !== "Enter" ||
                  !this.checkPressEnd() ||
                  ku("up", (a, l) => {
                    let { onTap: c } = this.node.getProps();
                    c && K.update(() => c(a, l));
                  });
              };
              this.removeEndListeners(),
                (this.removeEndListeners = zn(this.node.current, "keyup", o)),
                ku("down", (s, a) => {
                  this.startPress(s, a);
                });
            },
            t = zn(this.node.current, "keydown", e),
            n = () => {
              this.isPressing && ku("cancel", (i, o) => this.cancelPress(i, o));
            },
            r = zn(this.node.current, "blur", n);
          this.removeAccessibleListeners = xn(t, r);
        });
    }
    startPress(e, t) {
      this.isPressing = !0;
      let { onTapStart: n, whileTap: r } = this.node.getProps();
      r &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !0),
        n && K.update(() => n(e, t));
    }
    checkPressEnd() {
      return (
        this.removeEndListeners(),
        (this.isPressing = !1),
        this.node.getProps().whileTap &&
          this.node.animationState &&
          this.node.animationState.setActive("whileTap", !1),
        !of()
      );
    }
    cancelPress(e, t) {
      if (!this.checkPressEnd()) return;
      let { onTapCancel: n } = this.node.getProps();
      n && K.update(() => n(e, t));
    }
    mount() {
      let e = this.node.getProps(),
        t = bn(
          e.globalTapTarget ? L : this.node.current,
          "pointerdown",
          this.startPointerPress,
          { passive: !(e.onTapStart || e.onPointerStart) }
        ),
        n = zn(this.node.current, "focus", this.startAccessiblePress);
      this.removeStartListeners = xn(t, n);
    }
    unmount() {
      this.removeStartListeners(),
        this.removeEndListeners(),
        this.removeAccessibleListeners();
    }
  },
  $u = new WeakMap(),
  Tu = new WeakMap(),
  _T = (e) => {
    let t = $u.get(e.target);
    t && t(e);
  },
  MT = (e) => {
    e.forEach(_T);
  };
function OT({ root: e, ...t }) {
  let n = e || document;
  Tu.has(n) || Tu.set(n, {});
  let r = Tu.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(MT, { root: e, ...t })), r[i];
}
function AT(e, t, n) {
  let r = OT(t);
  return (
    $u.set(e, n),
    r.observe(e),
    () => {
      $u.delete(e), r.unobserve(e);
    }
  );
}
var DT = { some: 0, all: 1 },
  VT = class extends dr {
    constructor() {
      super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
    }
    startObserver() {
      this.unmount();
      let { viewport: e = {} } = this.node.getProps(),
        { root: t, margin: n, amount: r = "some", once: i } = e,
        o = {
          root: t ? t.current : void 0,
          rootMargin: n,
          threshold: typeof r == "number" ? r : DT[r],
        },
        s = (a) => {
          let { isIntersecting: l } = a;
          if (
            this.isInView === l ||
            ((this.isInView = l), i && !l && this.hasEnteredView)
          )
            return;
          l && (this.hasEnteredView = !0),
            this.node.animationState &&
              this.node.animationState.setActive("whileInView", l);
          let { onViewportEnter: c, onViewportLeave: u } = this.node.getProps(),
            f = l ? c : u;
          f && f(a);
        };
      return AT(this.node.current, o, s);
    }
    mount() {
      this.startObserver();
    }
    update() {
      if (typeof IntersectionObserver > "u") return;
      let { props: e, prevProps: t } = this.node;
      ["amount", "margin", "root"].some(BT(e, t)) && this.startObserver();
    }
    unmount() {}
  };
function BT({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
var Mg = {
    inView: { Feature: VT },
    tap: { Feature: LT },
    focus: { Feature: FT },
    hover: { Feature: IT },
  },
  Og = class {
    constructor(
      e,
      t,
      { transformPagePoint: n, contextWindow: r, dragSnapToOrigin: i = !1 } = {}
    ) {
      if (
        ((this.startEvent = null),
        (this.lastMoveEvent = null),
        (this.lastMoveEventInfo = null),
        (this.handlers = {}),
        (this.contextWindow = L),
        (this.updatePoint = () => {
          if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
          let u = Ru(this.lastMoveEventInfo, this.history),
            f = this.startEvent !== null,
            d = gg(u.offset, { x: 0, y: 0 }) >= 3;
          if (!f && !d) return;
          let { point: h } = u,
            { timestamp: g } = Ie;
          this.history.push({ ...h, timestamp: g });
          let { onStart: y, onMove: x } = this.handlers;
          f ||
            (y && y(this.lastMoveEvent, u),
            (this.startEvent = this.lastMoveEvent)),
            x && x(this.lastMoveEvent, u);
        }),
        (this.handlePointerMove = (u, f) => {
          (this.lastMoveEvent = u),
            (this.lastMoveEventInfo = Eu(f, this.transformPagePoint)),
            K.update(this.updatePoint, !0);
        }),
        (this.handlePointerUp = (u, f) => {
          this.end();
          let { onEnd: d, onSessionEnd: h, resumeAnimation: g } = this.handlers;
          if (
            (this.dragSnapToOrigin && g && g(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
          )
            return;
          let y = Ru(
            u.type === "pointercancel"
              ? this.lastMoveEventInfo
              : Eu(f, this.transformPagePoint),
            this.history
          );
          this.startEvent && d && d(u, y), h && h(u, y);
        }),
        !Vv(e))
      )
        return;
      (this.dragSnapToOrigin = i),
        (this.handlers = t),
        (this.transformPagePoint = n),
        (this.contextWindow = r || L);
      let o = Qa(e),
        s = Eu(o, this.transformPagePoint),
        { point: a } = s,
        { timestamp: l } = Ie;
      this.history = [{ ...a, timestamp: l }];
      let { onSessionStart: c } = t;
      c && c(e, Ru(s, this.history)),
        (this.removeListeners = xn(
          bn(this.contextWindow, "pointermove", this.handlePointerMove),
          bn(this.contextWindow, "pointerup", this.handlePointerUp),
          bn(this.contextWindow, "pointercancel", this.handlePointerUp)
        ));
    }
    updateHandlers(e) {
      this.handlers = e;
    }
    end() {
      this.removeListeners && this.removeListeners(), tt(this.updatePoint);
    }
  };
function Eu(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Am(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Ru({ point: e }, t) {
  return {
    point: e,
    delta: Am(e, Ag(t)),
    offset: Am(e, HT(t)),
    velocity: zT(t, 0.1),
  };
}
function HT(e) {
  return e[0];
}
function Ag(e) {
  return e[e.length - 1];
}
function zT(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null,
    i = Ag(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > Nn(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  let o = Sn(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  let s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function NT(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? he(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? he(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Dm(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function $T(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: Dm(e.x, n, i), y: Dm(e.y, t, r) };
}
function Vm(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function WT(e, t) {
  return { x: Vm(e.x, t.x), y: Vm(e.y, t.y) };
}
function jT(e, t) {
  let n = 0.5,
    r = wt(e),
    i = wt(t);
  return (
    i > r
      ? (n = cr(t.min, t.max - r, e.min))
      : r > i && (n = cr(e.min, e.max - i, t.min)),
    Wn(0, 1, n)
  );
}
function UT(e, t) {
  let n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
var Wu = 0.35;
function XT(e = Wu) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Wu),
    { x: Bm(e, "left", "right"), y: Bm(e, "top", "bottom") }
  );
}
function Bm(e, t, n) {
  return { min: Hm(e, t), max: Hm(e, n) };
}
function Hm(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
function Xt(e) {
  return [e("x"), e("y")];
}
function Dg({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function GT({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function YT(e, t) {
  if (!t) return e;
  let n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Pu(e) {
  return e === void 0 || e === 1;
}
function ju({ scale: e, scaleX: t, scaleY: n }) {
  return !Pu(e) || !Pu(t) || !Pu(n);
}
function Xr(e) {
  return ju(e) || Vg(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function Vg(e) {
  return zm(e.x) || zm(e.y);
}
function zm(e) {
  return e && e !== "0%";
}
function ja(e, t, n) {
  let r = e - n,
    i = t * r;
  return n + i;
}
function Nm(e, t, n, r, i) {
  return i !== void 0 && (e = ja(e, i, r)), ja(e, n, r) + t;
}
function Uu(e, t = 0, n = 1, r, i) {
  (e.min = Nm(e.min, t, n, r, i)), (e.max = Nm(e.max, t, n, r, i));
}
function Bg(e, { x: t, y: n }) {
  Uu(e.x, t.translate, t.scale, t.originPoint),
    Uu(e.y, n.translate, n.scale, n.originPoint);
}
function KT(e, t, n, r = !1) {
  let i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, s;
  for (let a = 0; a < i; a++) {
    (o = n[a]), (s = o.projectionDelta);
    let l = o.instance;
    (l && l.style && l.style.display === "contents") ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        _i(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), Bg(e, s)),
      r && Xr(o.latestValues) && _i(e, o.latestValues));
  }
  (t.x = $m(t.x)), (t.y = $m(t.y));
}
function $m(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function lr(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function Wm(e, t, [n, r, i]) {
  let o = t[i] !== void 0 ? t[i] : 0.5,
    s = he(e.min, e.max, o);
  Uu(e, t[n], t[r], s, t.scale);
}
var qT = ["x", "scaleX", "originX"],
  QT = ["y", "scaleY", "originY"];
function _i(e, t) {
  Wm(e.x, t, qT), Wm(e.y, t, QT);
}
function Hg(e, t) {
  return Dg(YT(e.getBoundingClientRect(), t));
}
function ZT(e, t, n) {
  let r = Hg(e, n),
    { scroll: i } = t;
  return i && (lr(r.x, i.offset.x), lr(r.y, i.offset.y)), r;
}
var zg = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  JT = new WeakMap(),
  eE = class {
    constructor(e) {
      (this.openGlobalLock = null),
        (this.isDragging = !1),
        (this.currentDirection = null),
        (this.originPoint = { x: 0, y: 0 }),
        (this.constraints = !1),
        (this.hasMutatedConstraints = !1),
        (this.elastic = Pe()),
        (this.visualElement = e);
    }
    start(e, { snapToCursor: t = !1 } = {}) {
      let { presenceContext: n } = this.visualElement;
      if (n && n.isPresent === !1) return;
      let r = (c) => {
          let { dragSnapToOrigin: u } = this.getProps();
          u ? this.pauseAnimation() : this.stopAnimation(),
            t && this.snapToCursor(Qa(c, "page").point);
        },
        i = (c, u) => {
          let { drag: f, dragPropagation: d, onDragStart: h } = this.getProps();
          if (
            f &&
            !d &&
            (this.openGlobalLock && this.openGlobalLock(),
            (this.openGlobalLock = zv(f)),
            !this.openGlobalLock)
          )
            return;
          (this.isDragging = !0),
            (this.currentDirection = null),
            this.resolveConstraints(),
            this.visualElement.projection &&
              ((this.visualElement.projection.isAnimationBlocked = !0),
              (this.visualElement.projection.target = void 0)),
            Xt((y) => {
              let x = this.getAxisMotionValue(y).get() || 0;
              if (yn.test(x)) {
                let { projection: p } = this.visualElement;
                if (p && p.layout) {
                  let m = p.layout.layoutBox[y];
                  m && (x = wt(m) * (parseFloat(x) / 100));
                }
              }
              this.originPoint[y] = x;
            }),
            h && K.update(() => h(c, u), !1, !0);
          let { animationState: g } = this.visualElement;
          g && g.setActive("whileDrag", !0);
        },
        o = (c, u) => {
          let {
            dragPropagation: f,
            dragDirectionLock: d,
            onDirectionLock: h,
            onDrag: g,
          } = this.getProps();
          if (!f && !this.openGlobalLock) return;
          let { offset: y } = u;
          if (d && this.currentDirection === null) {
            (this.currentDirection = tE(y)),
              this.currentDirection !== null && h && h(this.currentDirection);
            return;
          }
          this.updateAxis("x", u.point, y),
            this.updateAxis("y", u.point, y),
            this.visualElement.render(),
            g && g(c, u);
        },
        s = (c, u) => this.stop(c, u),
        a = () =>
          Xt((c) => {
            var u;
            return (
              this.getAnimationState(c) === "paused" &&
              ((u = this.getAxisMotionValue(c).animation) === null ||
              u === void 0
                ? void 0
                : u.play())
            );
          }),
        { dragSnapToOrigin: l } = this.getProps();
      this.panSession = new Og(
        e,
        {
          onSessionStart: r,
          onStart: i,
          onMove: o,
          onSessionEnd: s,
          resumeAnimation: a,
        },
        {
          transformPagePoint: this.visualElement.getTransformPagePoint(),
          dragSnapToOrigin: l,
          contextWindow: zg(this.visualElement),
        }
      );
    }
    stop(e, t) {
      let n = this.isDragging;
      if ((this.cancel(), !n)) return;
      let { velocity: r } = t;
      this.startAnimation(r);
      let { onDragEnd: i } = this.getProps();
      i && K.update(() => i(e, t));
    }
    cancel() {
      this.isDragging = !1;
      let { projection: e, animationState: t } = this.visualElement;
      e && (e.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        (this.panSession = void 0);
      let { dragPropagation: n } = this.getProps();
      !n &&
        this.openGlobalLock &&
        (this.openGlobalLock(), (this.openGlobalLock = null)),
        t && t.setActive("whileDrag", !1);
    }
    updateAxis(e, t, n) {
      let { drag: r } = this.getProps();
      if (!n || !Ia(e, r, this.currentDirection)) return;
      let i = this.getAxisMotionValue(e),
        o = this.originPoint[e] + n[e];
      this.constraints &&
        this.constraints[e] &&
        (o = NT(o, this.constraints[e], this.elastic[e])),
        i.set(o);
    }
    resolveConstraints() {
      var e;
      let { dragConstraints: t, dragElastic: n } = this.getProps(),
        r =
          this.visualElement.projection && !this.visualElement.projection.layout
            ? this.visualElement.projection.measure(!1)
            : (e = this.visualElement.projection) === null || e === void 0
            ? void 0
            : e.layout,
        i = this.constraints;
      t && Ii(t)
        ? this.constraints || (this.constraints = this.resolveRefConstraints())
        : t && r
        ? (this.constraints = $T(r.layoutBox, t))
        : (this.constraints = !1),
        (this.elastic = XT(n)),
        i !== this.constraints &&
          r &&
          this.constraints &&
          !this.hasMutatedConstraints &&
          Xt((o) => {
            this.getAxisMotionValue(o) &&
              (this.constraints[o] = UT(r.layoutBox[o], this.constraints[o]));
          });
    }
    resolveRefConstraints() {
      let { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps();
      if (!e || !Ii(e)) return !1;
      let n = e.current;
      nt(
        n !== null,
        "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
      );
      let { projection: r } = this.visualElement;
      if (!r || !r.layout) return !1;
      let i = ZT(n, r.root, this.visualElement.getTransformPagePoint()),
        o = WT(r.layout.layoutBox, i);
      if (t) {
        let s = t(GT(o));
        (this.hasMutatedConstraints = !!s), s && (o = Dg(s));
      }
      return o;
    }
    startAnimation(e) {
      let {
          drag: t,
          dragMomentum: n,
          dragElastic: r,
          dragTransition: i,
          dragSnapToOrigin: o,
          onDragTransitionEnd: s,
        } = this.getProps(),
        a = this.constraints || {},
        l = Xt((c) => {
          if (!Ia(c, t, this.currentDirection)) return;
          let u = (a && a[c]) || {};
          o && (u = { min: 0, max: 0 });
          let f = r ? 200 : 1e6,
            d = r ? 40 : 1e7,
            h = {
              type: "inertia",
              velocity: n ? e[c] : 0,
              bounceStiffness: f,
              bounceDamping: d,
              timeConstant: 750,
              restDelta: 1,
              restSpeed: 10,
              ...i,
              ...u,
            };
          return this.startAxisValueAnimation(c, h);
        });
      return Promise.all(l).then(s);
    }
    startAxisValueAnimation(e, t) {
      let n = this.getAxisMotionValue(e);
      return n.start(Sf(e, n, 0, t));
    }
    stopAnimation() {
      Xt((e) => this.getAxisMotionValue(e).stop());
    }
    pauseAnimation() {
      Xt((e) => {
        var t;
        return (t = this.getAxisMotionValue(e).animation) === null ||
          t === void 0
          ? void 0
          : t.pause();
      });
    }
    getAnimationState(e) {
      var t;
      return (t = this.getAxisMotionValue(e).animation) === null || t === void 0
        ? void 0
        : t.state;
    }
    getAxisMotionValue(e) {
      let t = "_drag" + e.toUpperCase(),
        n = this.visualElement.getProps(),
        r = n[t];
      return (
        r ||
        this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0)
      );
    }
    snapToCursor(e) {
      Xt((t) => {
        let { drag: n } = this.getProps();
        if (!Ia(t, n, this.currentDirection)) return;
        let { projection: r } = this.visualElement,
          i = this.getAxisMotionValue(t);
        if (r && r.layout) {
          let { min: o, max: s } = r.layout.layoutBox[t];
          i.set(e[t] - he(o, s, 0.5));
        }
      });
    }
    scalePositionWithinConstraints() {
      if (!this.visualElement.current) return;
      let { drag: e, dragConstraints: t } = this.getProps(),
        { projection: n } = this.visualElement;
      if (!Ii(t) || !n || !this.constraints) return;
      this.stopAnimation();
      let r = { x: 0, y: 0 };
      Xt((o) => {
        let s = this.getAxisMotionValue(o);
        if (s) {
          let a = s.get();
          r[o] = jT({ min: a, max: a }, this.constraints[o]);
        }
      });
      let { transformTemplate: i } = this.visualElement.getProps();
      (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
        n.root && n.root.updateScroll(),
        n.updateLayout(),
        this.resolveConstraints(),
        Xt((o) => {
          if (!Ia(o, e, null)) return;
          let s = this.getAxisMotionValue(o),
            { min: a, max: l } = this.constraints[o];
          s.set(he(a, l, r[o]));
        });
    }
    addListeners() {
      if (!this.visualElement.current) return;
      JT.set(this.visualElement, this);
      let e = this.visualElement.current,
        t = bn(e, "pointerdown", (a) => {
          let { drag: l, dragListener: c = !0 } = this.getProps();
          l && c && this.start(a);
        }),
        n = () => {
          let { dragConstraints: a } = this.getProps();
          Ii(a) && (this.constraints = this.resolveRefConstraints());
        },
        { projection: r } = this.visualElement,
        i = r.addEventListener("measure", n);
      r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()),
        n();
      let o = zn(L, "resize", () => this.scalePositionWithinConstraints()),
        s = r.addEventListener(
          "didUpdate",
          ({ delta: a, hasLayoutChanged: l }) => {
            this.isDragging &&
              l &&
              (Xt((c) => {
                let u = this.getAxisMotionValue(c);
                u &&
                  ((this.originPoint[c] += a[c].translate),
                  u.set(u.get() + a[c].translate));
              }),
              this.visualElement.render());
          }
        );
      return () => {
        o(), t(), i(), s && s();
      };
    }
    getProps() {
      let e = this.visualElement.getProps(),
        {
          drag: t = !1,
          dragDirectionLock: n = !1,
          dragPropagation: r = !1,
          dragConstraints: i = !1,
          dragElastic: o = Wu,
          dragMomentum: s = !0,
        } = e;
      return {
        ...e,
        drag: t,
        dragDirectionLock: n,
        dragPropagation: r,
        dragConstraints: i,
        dragElastic: o,
        dragMomentum: s,
      };
    }
  };
function Ia(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function tE(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
var nE = class extends dr {
    constructor(e) {
      super(e),
        (this.removeGroupControls = Oe),
        (this.removeListeners = Oe),
        (this.controls = new eE(e));
    }
    mount() {
      let { dragControls: e } = this.node.getProps();
      e && (this.removeGroupControls = e.subscribe(this.controls)),
        (this.removeListeners = this.controls.addListeners() || Oe);
    }
    unmount() {
      this.removeGroupControls(), this.removeListeners();
    }
  },
  jm = (e) => (t, n) => {
    e && K.update(() => e(t, n));
  },
  rE = class extends dr {
    constructor() {
      super(...arguments), (this.removePointerDownListener = Oe);
    }
    onPointerDown(e) {
      this.session = new Og(e, this.createPanHandlers(), {
        transformPagePoint: this.node.getTransformPagePoint(),
        contextWindow: zg(this.node),
      });
    }
    createPanHandlers() {
      let {
        onPanSessionStart: e,
        onPanStart: t,
        onPan: n,
        onPanEnd: r,
      } = this.node.getProps();
      return {
        onSessionStart: jm(e),
        onStart: jm(t),
        onMove: n,
        onEnd: (i, o) => {
          delete this.session, r && K.update(() => r(i, o));
        },
      };
    }
    mount() {
      this.removePointerDownListener = bn(
        this.node.current,
        "pointerdown",
        (e) => this.onPointerDown(e)
      );
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
      this.removePointerDownListener(), this.session && this.session.end();
    }
  },
  Ma = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Um(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
var Mo = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if ($.test(e)) e = parseFloat(e);
        else return e;
      let n = Um(e, t.target.x),
        r = Um(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  iE = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      let r = e,
        i = jn.parse(e);
      if (i.length > 5) return r;
      let o = jn.createTransformer(e),
        s = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (i[0 + s] /= a), (i[1 + s] /= l);
      let c = he(a, l, 0.5);
      return (
        typeof i[2 + s] == "number" && (i[2 + s] /= c),
        typeof i[3 + s] == "number" && (i[3 + s] /= c),
        o(i)
      );
    },
  },
  oE = class extends S.Component {
    componentDidMount() {
      let {
          visualElement: e,
          layoutGroup: t,
          switchLayoutGroup: n,
          layoutId: r,
        } = this.props,
        { projection: i } = e;
      tf(sE),
        i &&
          (t.group && t.group.add(i),
          n && n.register && r && n.register(i),
          i.root.didUpdate(),
          i.addEventListener("animationComplete", () => {
            this.safeToRemove();
          }),
          i.setOptions({
            ...i.options,
            onExitComplete: () => this.safeToRemove(),
          })),
        (Ma.hasEverUpdated = !0);
    }
    getSnapshotBeforeUpdate(e) {
      let {
          layoutDependency: t,
          visualElement: n,
          drag: r,
          isPresent: i,
        } = this.props,
        o = n.projection;
      return (
        o &&
          ((o.isPresent = i),
          r || e.layoutDependency !== t || t === void 0
            ? o.willUpdate()
            : this.safeToRemove(),
          e.isPresent !== i &&
            (i
              ? o.promote()
              : o.relegate() ||
                K.postRender(() => {
                  let s = o.getStack();
                  (!s || !s.members.length) && this.safeToRemove();
                }))),
        null
      );
    }
    componentDidUpdate() {
      let { projection: e } = this.props.visualElement;
      e &&
        (e.root.didUpdate(),
        Qu.postRender(() => {
          !e.currentAnimation && e.isLead() && this.safeToRemove();
        }));
    }
    componentWillUnmount() {
      let {
          visualElement: e,
          layoutGroup: t,
          switchLayoutGroup: n,
        } = this.props,
        { projection: r } = e;
      r &&
        (r.scheduleCheckAfterUnmount(),
        t && t.group && t.group.remove(r),
        n && n.deregister && n.deregister(r));
    }
    safeToRemove() {
      let { safeToRemove: e } = this.props;
      e && e();
    }
    render() {
      return null;
    }
  };
function Ng(e) {
  let [t, n] = Tf(),
    r = M(Wo);
  return S.createElement(oE, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: M(Ga),
    isPresent: t,
    safeToRemove: n,
  });
}
var sE = {
    borderRadius: {
      ...Mo,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: Mo,
    borderTopRightRadius: Mo,
    borderBottomLeftRadius: Mo,
    borderBottomRightRadius: Mo,
    boxShadow: iE,
  },
  $g = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  aE = $g.length,
  Xm = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Gm = (e) => typeof e == "number" || $.test(e);
function lE(e, t, n, r, i, o) {
  i
    ? ((e.opacity = he(0, n.opacity !== void 0 ? n.opacity : 1, cE(r))),
      (e.opacityExit = he(t.opacity !== void 0 ? t.opacity : 1, 0, uE(r))))
    : o &&
      (e.opacity = he(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let s = 0; s < aE; s++) {
    let a = `border${$g[s]}Radius`,
      l = Ym(t, a),
      c = Ym(n, a);
    if (l === void 0 && c === void 0) continue;
    l || (l = 0),
      c || (c = 0),
      l === 0 || c === 0 || Gm(l) === Gm(c)
        ? ((e[a] = Math.max(he(Xm(l), Xm(c), r), 0)),
          (yn.test(c) || yn.test(l)) && (e[a] += "%"))
        : (e[a] = c);
  }
  (t.rotate || n.rotate) && (e.rotate = he(t.rotate || 0, n.rotate || 0, r));
}
function Ym(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
var cE = Wg(0, 0.5, cf),
  uE = Wg(0.5, 0.95, Oe);
function Wg(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(cr(e, t, r)));
}
function Km(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Ut(e, t) {
  Km(e.x, t.x), Km(e.y, t.y);
}
function qm(e, t, n, r, i) {
  return (
    (e -= t), (e = ja(e, 1 / n, r)), i !== void 0 && (e = ja(e, 1 / i, r)), e
  );
}
function fE(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (
    (yn.test(t) &&
      ((t = parseFloat(t)), (t = he(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let a = he(o.min, o.max, r);
  e === o && (a -= t),
    (e.min = qm(e.min, t, n, a, i)),
    (e.max = qm(e.max, t, n, a, i));
}
function Qm(e, t, [n, r, i], o, s) {
  fE(e, t[n], t[r], t[i], t.scale, o, s);
}
var dE = ["x", "scaleX", "originX"],
  hE = ["y", "scaleY", "originY"];
function Zm(e, t, n, r) {
  Qm(e.x, t, dE, n ? n.x : void 0, r ? r.x : void 0),
    Qm(e.y, t, hE, n ? n.y : void 0, r ? r.y : void 0);
}
function Jm(e) {
  return e.translate === 0 && e.scale === 1;
}
function jg(e) {
  return Jm(e.x) && Jm(e.y);
}
function pE(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function Ug(e, t) {
  return (
    Math.round(e.x.min) === Math.round(t.x.min) &&
    Math.round(e.x.max) === Math.round(t.x.max) &&
    Math.round(e.y.min) === Math.round(t.y.min) &&
    Math.round(e.y.max) === Math.round(t.y.max)
  );
}
function ev(e) {
  return wt(e.x) / wt(e.y);
}
var mE = class {
  constructor() {
    this.members = [];
  }
  add(e) {
    vf(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (
      (el(this.members, e),
      e === this.prevLead && (this.prevLead = void 0),
      e === this.lead)
    ) {
      let t = this.members[this.members.length - 1];
      t && this.promote(t);
    }
  }
  relegate(e) {
    let t = this.members.findIndex((r) => e === r);
    if (t === 0) return !1;
    let n;
    for (let r = t; r >= 0; r--) {
      let i = this.members[r];
      if (i.isPresent !== !1) {
        n = i;
        break;
      }
    }
    return n ? (this.promote(n), !0) : !1;
  }
  promote(e, t) {
    let n = this.lead;
    if (e !== n && ((this.prevLead = n), (this.lead = e), e.show(), n)) {
      n.instance && n.scheduleRender(),
        e.scheduleRender(),
        (e.resumeFrom = n),
        t && (e.resumeFrom.preserveOpacity = !0),
        n.snapshot &&
          ((e.snapshot = n.snapshot),
          (e.snapshot.latestValues = n.animationValues || n.latestValues)),
        e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
      let { crossfade: r } = e.options;
      r === !1 && n.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      let { options: t, resumingFrom: n } = e;
      t.onExitComplete && t.onExitComplete(),
        n && n.options.onExitComplete && n.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
};
function tv(e, t, n) {
  let r = "",
    i = e.x.translate / t.x,
    o = e.y.translate / t.y;
  if (
    ((i || o) && (r = `translate3d(${i}px, ${o}px, 0) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    let { rotate: l, rotateX: c, rotateY: u } = n;
    l && (r += `rotate(${l}deg) `),
      c && (r += `rotateX(${c}deg) `),
      u && (r += `rotateY(${u}deg) `);
  }
  let s = e.x.scale * t.x,
    a = e.y.scale * t.y;
  return (s !== 1 || a !== 1) && (r += `scale(${s}, ${a})`), r || "none";
}
function vE(e) {
  L.MotionDebug && L.MotionDebug.record(e);
}
function Xg(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function Mf(e, t, n) {
  let r = Se(e) ? e : xe(e);
  return r.start(Sf("", r, t, n)), r.animation;
}
var nv = ["", "X", "Y", "Z"],
  gE = { visibility: "hidden" },
  rv = 1e3,
  yE = 0,
  Gr = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  };
function Gg({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(s = {}, a = t?.()) {
      (this.id = yE++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            (Gr.totalNodes =
              Gr.resolvedTargetDeltas =
              Gr.recalculatedProjection =
                0),
            this.nodes.forEach(SE),
            this.nodes.forEach(EE),
            this.nodes.forEach(RE),
            this.nodes.forEach(wE),
            vE(Gr);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new yg());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new gf()),
        this.eventHandlers.get(s).add(a)
      );
    }
    notifyListeners(s, ...a) {
      let l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = Xg(s)), (this.instance = s);
      let { layoutId: l, layout: c, visualElement: u } = this.options;
      if (
        (u && !u.current && u.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (c || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f,
          d = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            f && f(),
            (f = bg(d, 250)),
            Ma.hasAnimatedSinceResize &&
              ((Ma.hasAnimatedSinceResize = !1), this.nodes.forEach(ov));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          u &&
          (l || c) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: d,
              hasRelativeTargetChanged: h,
              layout: g,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              let y = this.options.transition || u.getDefaultTransition() || _E,
                { onLayoutAnimationStart: x, onLayoutAnimationComplete: p } =
                  u.getProps(),
                m = !this.targetLayout || !Ug(this.targetLayout, g) || h,
                v = !d && h;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                v ||
                (d && (m || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, v);
                let b = { ...xf(y, "layout"), onPlay: x, onComplete: p };
                (u.shouldReduceMotion || this.options.layoutRoot) &&
                  ((b.delay = 0), (b.type = !1)),
                  this.startAnimation(b);
              } else
                d || ov(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = g;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      let s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        tt(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(PE),
        this.animationId++);
    }
    getTransformTemplate() {
      let { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        let f = this.path[u];
        (f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1);
      }
      let { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      let c = this.getTransformTemplate();
      (this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(iv);
        return;
      }
      this.isUpdating || this.nodes.forEach(kE),
        (this.isUpdating = !1),
        this.nodes.forEach(TE),
        this.nodes.forEach(bE),
        this.nodes.forEach(xE),
        this.clearAllSnapshots();
      let a = qr.now();
      (Ie.delta = Wn(0, 1e3 / 60, a - Ie.timestamp)),
        (Ie.timestamp = a),
        (Ie.isProcessing = !0),
        La.update.process(Ie),
        La.preRender.process(Ie),
        La.render.process(Ie),
        (Ie.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Qu.read(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(CE), this.sharedNodes.forEach(IE);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        K.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      K.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      let s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Pe()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      let { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0
        );
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === s &&
        (a = !1),
        a &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: s,
            isRoot: r(this.instance),
            offset: n(this.instance),
          });
    }
    resetTransform() {
      if (!i) return;
      let s = this.isLayoutDirty || this.shouldResetTransform,
        a = this.projectionDelta && !jg(this.projectionDelta),
        l = this.getTransformTemplate(),
        c = l ? l(this.latestValues, "") : void 0,
        u = c !== this.prevTransformTemplateValue;
      s &&
        (a || Xr(this.latestValues) || u) &&
        (i(this.instance, c),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      let a = this.measurePageBox(),
        l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        ME(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      let { visualElement: s } = this.options;
      if (!s) return Pe();
      let a = s.measureViewportBox(),
        { scroll: l } = this.root;
      return l && (lr(a.x, l.offset.x), lr(a.y, l.offset.y)), a;
    }
    removeElementScroll(s) {
      let a = Pe();
      Ut(a, s);
      for (let l = 0; l < this.path.length; l++) {
        let c = this.path[l],
          { scroll: u, options: f } = c;
        if (c !== this.root && u && f.layoutScroll) {
          if (u.isRoot) {
            Ut(a, s);
            let { scroll: d } = this.root;
            d && (lr(a.x, -d.offset.x), lr(a.y, -d.offset.y));
          }
          lr(a.x, u.offset.x), lr(a.y, u.offset.y);
        }
      }
      return a;
    }
    applyTransform(s, a = !1) {
      let l = Pe();
      Ut(l, s);
      for (let c = 0; c < this.path.length; c++) {
        let u = this.path[c];
        !a &&
          u.options.layoutScroll &&
          u.scroll &&
          u !== u.root &&
          _i(l, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }),
          Xr(u.latestValues) && _i(l, u.latestValues);
      }
      return Xr(this.latestValues) && _i(l, this.latestValues), l;
    }
    removeTransform(s) {
      let a = Pe();
      Ut(a, s);
      for (let l = 0; l < this.path.length; l++) {
        let c = this.path[l];
        if (!c.instance || !Xr(c.latestValues)) continue;
        ju(c.latestValues) && c.updateSnapshot();
        let u = Pe(),
          f = c.measurePageBox();
        Ut(u, f),
          Zm(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return Xr(this.latestValues) && Zm(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Ie.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var a;
      let l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      let c = !!this.resumingFrom || this !== l;
      if (
        !(
          s ||
          (c && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      let { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (
          ((this.resolvedRelativeTargetAt = Ie.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          let h = this.getClosestProjectingParent();
          h && h.layout && this.animationProgress !== 1
            ? ((this.relativeParent = h),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Pe()),
              (this.relativeTargetOrigin = Pe()),
              No(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                h.layout.layoutBox
              ),
              Ut(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = Pe()), (this.targetWithTransforms = Pe())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                fT(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Ut(this.target, this.layout.layoutBox),
                Bg(this.target, this.targetDelta))
              : Ut(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            let h = this.getClosestProjectingParent();
            h &&
            !!h.resumingFrom == !!this.resumingFrom &&
            !h.options.layoutScroll &&
            h.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = h),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = Pe()),
                (this.relativeTargetOrigin = Pe()),
                No(this.relativeTargetOrigin, this.target, h.target),
                Ut(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Gr.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          ju(this.parent.latestValues) ||
          Vg(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      let a = this.getLead(),
        l = !!this.resumingFrom || this !== a,
        c = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (c = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (c = !1),
        this.resolvedRelativeTargetAt === Ie.timestamp && (c = !1),
        c)
      )
        return;
      let { layout: u, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(u || f))
      )
        return;
      Ut(this.layoutCorrected, this.layout.layoutBox);
      let d = this.treeScale.x,
        h = this.treeScale.y;
      KT(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = Pe()));
      let { target: g } = a;
      if (!g) {
        this.projectionTransform &&
          ((this.projectionDelta = Li()),
          (this.projectionTransform = "none"),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = Li()),
        (this.projectionDeltaWithTransform = Li()));
      let y = this.projectionTransform;
      zo(this.projectionDelta, this.layoutCorrected, g, this.latestValues),
        (this.projectionTransform = tv(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== y ||
          this.treeScale.x !== d ||
          this.treeScale.y !== h) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", g)),
        Gr.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), s)) {
        let a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(s, a = !1) {
      let l = this.snapshot,
        c = l ? l.latestValues : {},
        u = { ...this.latestValues },
        f = Li();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      let d = Pe(),
        h = l ? l.source : void 0,
        g = this.layout ? this.layout.source : void 0,
        y = h !== g,
        x = this.getStack(),
        p = !x || x.members.length <= 1,
        m = !!(y && !p && this.options.crossfade === !0 && !this.path.some(LE));
      this.animationProgress = 0;
      let v;
      (this.mixTargetDelta = (b) => {
        let C = b / 1e3;
        sv(f.x, s.x, C),
          sv(f.y, s.y, C),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (No(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            FE(this.relativeTarget, this.relativeTargetOrigin, d, C),
            v && pE(this.relativeTarget, v) && (this.isProjectionDirty = !1),
            v || (v = Pe()),
            Ut(v, this.relativeTarget)),
          y &&
            ((this.animationValues = u), lE(u, c, this.latestValues, C, m, p)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = C);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (tt(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = K.update(() => {
          (Ma.hasAnimatedSinceResize = !0),
            (this.currentAnimation = Mf(0, rv, {
              ...s,
              onUpdate: (a) => {
                this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      let s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(rv),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      let s = this.getLead(),
        { targetWithTransforms: a, target: l, layout: c, latestValues: u } = s;
      if (!(!a || !l || !c)) {
        if (
          this !== s &&
          this.layout &&
          c &&
          Yg(this.options.animationType, this.layout.layoutBox, c.layoutBox)
        ) {
          l = this.target || Pe();
          let f = wt(this.layout.layoutBox.x);
          (l.x.min = s.target.x.min), (l.x.max = l.x.min + f);
          let d = wt(this.layout.layoutBox.y);
          (l.y.min = s.target.y.min), (l.y.max = l.y.min + d);
        }
        Ut(a, l),
          _i(a, u),
          zo(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new mE()),
        this.sharedNodes.get(s).add(a);
      let c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity:
          c && c.shouldPreserveFollowOpacity
            ? c.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      let s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      let { layoutId: a } = this.options;
      return a
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      let { layoutId: a } = this.options;
      return a
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      let { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      let c = this.getStack();
      c && c.promote(this, l),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      let s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetRotation() {
      let { visualElement: s } = this.options;
      if (!s) return;
      let a = !1,
        { latestValues: l } = s;
      if (((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (a = !0), !a))
        return;
      let c = {};
      for (let u = 0; u < nv.length; u++) {
        let f = "rotate" + nv[u];
        l[f] && ((c[f] = l[f]), s.setStaticValue(f, 0));
      }
      s.render();
      for (let u in c) s.setStaticValue(u, c[u]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return gE;
      let c = { visibility: "" },
        u = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (c.opacity = ""),
          (c.pointerEvents = et(s?.pointerEvents) || ""),
          (c.transform = u ? u(this.latestValues, "") : "none"),
          c
        );
      let f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        let y = {};
        return (
          this.options.layoutId &&
            ((y.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (y.pointerEvents = et(s?.pointerEvents) || "")),
          this.hasProjected &&
            !Xr(this.latestValues) &&
            ((y.transform = u ? u({}, "") : "none"), (this.hasProjected = !1)),
          y
        );
      }
      let d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        (c.transform = tv(
          this.projectionDeltaWithTransform,
          this.treeScale,
          d
        )),
        u && (c.transform = u(d, c.transform));
      let { x: h, y: g } = this.projectionDelta;
      (c.transformOrigin = `${h.origin * 100}% ${g.origin * 100}% 0`),
        f.animationValues
          ? (c.opacity =
              f === this
                ? (l =
                    (a = d.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : d.opacityExit)
          : (c.opacity =
              f === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ""
                : d.opacityExit !== void 0
                ? d.opacityExit
                : 0);
      for (let y in Da) {
        if (d[y] === void 0) continue;
        let { correct: x, applyTo: p } = Da[y],
          m = c.transform === "none" ? d[y] : x(d[y], f);
        if (p) {
          let v = p.length;
          for (let b = 0; b < v; b++) c[p[b]] = m;
        } else c[y] = m;
      }
      return (
        this.options.layoutId &&
          (c.pointerEvents = f === this ? et(s?.pointerEvents) || "" : "none"),
        c
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(iv),
        this.root.sharedNodes.clear();
    }
  };
}
function bE(e) {
  e.updateLayout();
}
function xE(e) {
  var t;
  let n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    let { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      s = n.source !== e.layout.source;
    o === "size"
      ? Xt((f) => {
          let d = s ? n.measuredBox[f] : n.layoutBox[f],
            h = wt(d);
          (d.min = r[f].min), (d.max = d.min + h);
        })
      : Yg(o, n.layoutBox, r) &&
        Xt((f) => {
          let d = s ? n.measuredBox[f] : n.layoutBox[f],
            h = wt(r[f]);
          (d.max = d.min + h),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + h));
        });
    let a = Li();
    zo(a, r, n.layoutBox);
    let l = Li();
    s ? zo(l, e.applyTransform(i, !0), n.measuredBox) : zo(l, r, n.layoutBox);
    let c = !jg(a),
      u = !1;
    if (!e.resumeFrom) {
      let f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        let { snapshot: d, layout: h } = f;
        if (d && h) {
          let g = Pe();
          No(g, n.layoutBox, d.layoutBox);
          let y = Pe();
          No(y, r, h.layoutBox),
            Ug(g, y) || (u = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = y),
              (e.relativeTargetOrigin = g),
              (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: c,
      hasRelativeTargetChanged: u,
    });
  } else if (e.isLead()) {
    let { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function SE(e) {
  Gr.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function wE(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function CE(e) {
  e.clearSnapshot();
}
function iv(e) {
  e.clearMeasurements();
}
function kE(e) {
  e.isLayoutDirty = !1;
}
function TE(e) {
  let { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function ov(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function EE(e) {
  e.resolveTargetDelta();
}
function RE(e) {
  e.calcProjection();
}
function PE(e) {
  e.resetRotation();
}
function IE(e) {
  e.removeLeadSnapshot();
}
function sv(e, t, n) {
  (e.translate = he(t.translate, 0, n)),
    (e.scale = he(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function av(e, t, n, r) {
  (e.min = he(t.min, n.min, r)), (e.max = he(t.max, n.max, r));
}
function FE(e, t, n, r) {
  av(e.x, t.x, n.x, r), av(e.y, t.y, n.y, r);
}
function LE(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
var _E = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  lv = (e) =>
    typeof ft < "u" && ft.userAgent && ft.userAgent.toLowerCase().includes(e),
  cv = lv("applewebkit/") && !lv("chrome/") ? Math.round : Oe;
function uv(e) {
  (e.min = cv(e.min)), (e.max = cv(e.max));
}
function ME(e) {
  uv(e.x), uv(e.y);
}
function Yg(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !Nu(ev(t), ev(n), 0.2))
  );
}
var OE = Gg({
    attachResizeListener: (e, t) => zn(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Qr = { current: void 0 },
  Kg = Gg({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Qr.current) {
        let e = new OE({});
        e.mount(L), e.setOptions({ layoutScroll: !0 }), (Qr.current = e);
      }
      return Qr.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => L.getComputedStyle(e).position === "fixed",
  }),
  qg = {
    pan: { Feature: rE },
    drag: { Feature: nE, ProjectionNode: Kg, MeasureLayout: Ng },
  },
  AE = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function DE(e) {
  let t = AE.exec(e);
  if (!t) return [,];
  let [, n, r] = t;
  return [n, r];
}
var VE = 4;
function Xu(e, t, n = 1) {
  nt(
    n <= VE,
    `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
  );
  let [r, i] = DE(e);
  if (!r) return;
  let o = L.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    let s = o.trim();
    return ig(s) ? parseFloat(s) : s;
  } else return Ha(i) ? Xu(i, t, n + 1) : i;
}
function BE(e, { ...t }, n) {
  let r = e.current;
  if (!(r instanceof Element)) return { target: t, transitionEnd: n };
  n && (n = { ...n }),
    e.values.forEach((i) => {
      let o = i.get();
      if (!Ha(o)) return;
      let s = Xu(o, r);
      s && i.set(s);
    });
  for (let i in t) {
    let o = t[i];
    if (!Ha(o)) continue;
    let s = Xu(o, r);
    s && ((t[i] = s), n || (n = {}), n[i] === void 0 && (n[i] = o));
  }
  return { target: t, transitionEnd: n };
}
var HE = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  Qg = (e) => HE.has(e),
  zE = (e) => Object.keys(e).some(Qg),
  Fa = (e) => e === Vi || e === $,
  fv = (e, t) => parseFloat(e.split(", ")[t]),
  dv =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      let i = r.match(/^matrix3d\((.+)\)$/);
      if (i) return fv(i[1], t);
      {
        let o = r.match(/^matrix\((.+)\)$/);
        return o ? fv(o[1], e) : 0;
      }
    },
  NE = new Set(["x", "y", "z"]),
  $E = Ko.filter((e) => !NE.has(e));
function WE(e) {
  let t = [];
  return (
    $E.forEach((n) => {
      let r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t.length && e.render(),
    t
  );
}
var Oi = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: dv(4, 13),
  y: dv(5, 14),
};
Oi.translateX = Oi.x;
Oi.translateY = Oi.y;
var jE = (e, t, n) => {
    let r = t.measureViewportBox(),
      i = t.current,
      o = getComputedStyle(i),
      { display: s } = o,
      a = {};
    s === "none" && t.setStaticValue("display", e.display || "block"),
      n.forEach((c) => {
        a[c] = Oi[c](r, o);
      }),
      t.render();
    let l = t.measureViewportBox();
    return (
      n.forEach((c) => {
        let u = t.getValue(c);
        u && u.jump(a[c]), (e[c] = Oi[c](l, o));
      }),
      e
    );
  },
  UE = (e, t, n = {}, r = {}) => {
    (t = { ...t }), (r = { ...r });
    let i = Object.keys(t).filter(Qg),
      o = [],
      s = !1,
      a = [];
    if (
      (i.forEach((l) => {
        let c = e.getValue(l);
        if (!e.hasValue(l)) return;
        let u = n[l],
          f = _o(u),
          d = t[l],
          h;
        if (Va(d)) {
          let g = d.length,
            y = d[0] === null ? 1 : 0;
          (u = d[y]), (f = _o(u));
          for (let x = y; x < g && d[x] !== null; x++)
            h
              ? nt(_o(d[x]) === h, "All keyframes must be of the same type")
              : ((h = _o(d[x])),
                nt(
                  h === f || (Fa(f) && Fa(h)),
                  "Keyframes must be of the same dimension as the current value"
                ));
        } else h = _o(d);
        if (f !== h)
          if (Fa(f) && Fa(h)) {
            let g = c.get();
            typeof g == "string" && c.set(parseFloat(g)),
              typeof d == "string"
                ? (t[l] = parseFloat(d))
                : Array.isArray(d) && h === $ && (t[l] = d.map(parseFloat));
          } else
            f?.transform && h?.transform && (u === 0 || d === 0)
              ? u === 0
                ? c.set(h.transform(u))
                : (t[l] = f.transform(d))
              : (s || ((o = WE(e)), (s = !0)),
                a.push(l),
                (r[l] = r[l] !== void 0 ? r[l] : t[l]),
                c.jump(d));
      }),
      a.length)
    ) {
      let l = a.indexOf("height") >= 0 ? L.pageYOffset : null,
        c = jE(t, e, a);
      return (
        o.length &&
          o.forEach(([u, f]) => {
            e.getValue(u).set(f);
          }),
        e.render(),
        Yo && l !== null && L.scrollTo({ top: l }),
        { target: c, transitionEnd: r }
      );
    } else return { target: t, transitionEnd: r };
  };
function XE(e, t, n, r) {
  return zE(t) ? UE(e, t, n, r) : { target: t, transitionEnd: r };
}
var GE = (e, t, n, r) => {
    let i = BE(e, t, r);
    return (t = i.target), (r = i.transitionEnd), XE(e, t, n, r);
  },
  Zg = class extends wg {
    sortInstanceNodePosition(e, t) {
      return e.compareDocumentPosition(t) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(e, t) {
      return e.style ? e.style[t] : void 0;
    }
    removeValueFromRenderState(e, { vars: t, style: n }) {
      delete t[e], delete n[e];
    }
    makeTargetAnimatableFromInstance(
      { transition: e, transitionEnd: t, ...n },
      r
    ) {
      let i = Ak(n, e || {}, this);
      if (r) {
        ug(this, n, i);
        let o = GE(this, n, i, t);
        (t = o.transitionEnd), (n = o.target);
      }
      return { transition: e, transitionEnd: t, ...n };
    }
  };
function YE(e) {
  return L.getComputedStyle(e);
}
var Jg = class extends Zg {
    constructor() {
      super(...arguments), (this.type = "html");
    }
    readValueFromInstance(e, t) {
      if (Jr.has(t)) {
        let n = yf(t);
        return (n && n.default) || 0;
      } else {
        let n = YE(e),
          r = (Jv(t) ? n.getPropertyValue(t) : n[t]) || 0;
        return typeof r == "string" ? r.trim() : r;
      }
    }
    measureInstanceViewportBox(e, { transformPagePoint: t }) {
      return Hg(e, t);
    }
    build(e, t, n, r) {
      Pf(e, t, n, r.transformTemplate);
    }
    scrapeMotionValuesFromProps(e, t) {
      return _f(e, t);
    }
    handleChildMotionValue() {
      this.childSubscription &&
        (this.childSubscription(), delete this.childSubscription);
      let { children: e } = this.props;
      Se(e) &&
        (this.childSubscription = e.on("change", (t) => {
          this.current && (this.current.textContent = `${t}`);
        }));
    }
    renderInstance(e, t, n, r) {
      Rg(e, t, n, r);
    }
  },
  ey = class extends Zg {
    constructor() {
      super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
    }
    getBaseTargetFromProps(e, t) {
      return e[t];
    }
    readValueFromInstance(e, t) {
      if (Jr.has(t)) {
        let n = yf(t);
        return (n && n.default) || 0;
      }
      return (t = Pg.has(t) ? t : qu(t)), e.getAttribute(t);
    }
    measureInstanceViewportBox() {
      return Pe();
    }
    scrapeMotionValuesFromProps(e, t) {
      return Fg(e, t);
    }
    build(e, t, n, r) {
      Ff(e, t, n, this.isSVGTag, r.transformTemplate);
    }
    renderInstance(e, t, n, r) {
      Ig(e, t, n, r);
    }
    mount(e) {
      (this.isSVGTag = Lf(e.tagName)), super.mount(e);
    }
  },
  ty = (e, t) =>
    Rf(e)
      ? new ey(t, { enableHardwareAcceleration: !1 })
      : new Jg(t, { enableHardwareAcceleration: !0 }),
  ny = { layout: { ProjectionNode: Kg, MeasureLayout: Ng } },
  KE = { ...kf, ...Mg, ...qg, ...ny },
  _t = Cg((e, t) => Lg(e, t, KE, ty));
var qE = Cg(Lg);
function ry() {
  let e = A(!1);
  return (
    fr(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    e
  );
}
function rl() {
  let e = ry(),
    [t, n] = Lt(0),
    r = fe(() => {
      e.current && n(t + 1);
    }, [t]);
  return [fe(() => K.postRender(r), [r]), t];
}
function iy(e) {
  return W(() => () => e(), []);
}
var QE = class extends Re {
  getSnapshotBeforeUpdate(e) {
    let t = this.props.childRef.current;
    if (t && e.isPresent && !this.props.isPresent) {
      let n = this.props.sizeRef.current;
      (n.height = t.offsetHeight || 0),
        (n.width = t.offsetWidth || 0),
        (n.top = t.offsetTop),
        (n.left = t.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
};
function ZE({ children: e, isPresent: t }) {
  let n = Ri(),
    r = A(null),
    i = A({ width: 0, height: 0, top: 0, left: 0 });
  return (
    Ft(() => {
      let { width: o, height: s, top: a, left: l } = i.current;
      if (t || !r.current || !o || !s) return;
      r.current.dataset.motionPopId = n;
      let c = document.createElement("style");
      return (
        document.head.appendChild(c),
        c.sheet &&
          c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${s}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),
        () => {
          document.head.removeChild(c);
        }
      );
    }, [t]),
    ue(QE, { isPresent: t, childRef: r, sizeRef: i }, gn(e, { ref: r }))
  );
}
var Iu = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: o,
  mode: s,
}) => {
  let a = Un(JE),
    l = Ri(),
    c = ge(
      () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: (u) => {
          a.set(u, !0);
          for (let f of a.values()) if (!f) return;
          r && r();
        },
        register: (u) => (a.set(u, !1), () => a.delete(u)),
      }),
      o ? void 0 : [n]
    );
  return (
    ge(() => {
      a.forEach((u, f) => a.set(f, !1));
    }, [n]),
    W(() => {
      !n && !a.size && r && r();
    }, [n]),
    s === "popLayout" && (e = ue(ZE, { isPresent: n }, e)),
    ue(Ai.Provider, { value: c }, e)
  );
};
function JE() {
  return new Map();
}
var Yr = (e) => e.key || "";
function eR(e, t) {
  e.forEach((n) => {
    let r = Yr(n);
    t.set(r, n);
  });
}
function tR(e) {
  let t = [];
  return (
    Bn.forEach(e, (n) => {
      Hn(n) && t.push(n);
    }),
    t
  );
}
var Of = ({
  children: e,
  custom: t,
  initial: n = !0,
  onExitComplete: r,
  exitBeforeEnter: i,
  presenceAffectsLayout: o = !0,
  mode: s = "sync",
}) => {
  nt(!i, "Replace exitBeforeEnter with mode='wait'");
  let a = M(Wo).forceRender || rl()[0],
    l = ry(),
    c = tR(e),
    u = c,
    f = A(new Map()).current,
    d = A(u),
    h = A(new Map()).current,
    g = A(!0);
  if (
    (fr(() => {
      (g.current = !1), eR(c, h), (d.current = u);
    }),
    iy(() => {
      (g.current = !0), h.clear(), f.clear();
    }),
    g.current)
  )
    return ue(
      Fo,
      null,
      u.map((m) =>
        ue(
          Iu,
          {
            key: Yr(m),
            isPresent: !0,
            initial: n ? void 0 : !1,
            presenceAffectsLayout: o,
            mode: s,
          },
          m
        )
      )
    );
  u = [...u];
  let y = d.current.map(Yr),
    x = c.map(Yr),
    p = y.length;
  for (let m = 0; m < p; m++) {
    let v = y[m];
    x.indexOf(v) === -1 && !f.has(v) && f.set(v, void 0);
  }
  return (
    s === "wait" && f.size && (u = []),
    f.forEach((m, v) => {
      if (x.indexOf(v) !== -1) return;
      let b = h.get(v);
      if (!b) return;
      let C = y.indexOf(v),
        w = m;
      if (!w) {
        let k = () => {
          f.delete(v);
          let E = Array.from(h.keys()).filter((P) => !x.includes(P));
          if (
            (E.forEach((P) => h.delete(P)),
            (d.current = c.filter((P) => {
              let I = Yr(P);
              return I === v || E.includes(I);
            })),
            !f.size)
          ) {
            if (l.current === !1) return;
            a(), r && r();
          }
        };
        (w = ue(
          Iu,
          {
            key: Yr(b),
            isPresent: !1,
            onExitComplete: k,
            custom: t,
            presenceAffectsLayout: o,
            mode: s,
          },
          b
        )),
          f.set(v, w);
      }
      u.splice(C, 0, w);
    }),
    (u = u.map((m) => {
      let v = m.key;
      return f.has(v)
        ? m
        : ue(
            Iu,
            { key: Yr(m), isPresent: !0, presenceAffectsLayout: o, mode: s },
            m
          );
    })),
    ue(Fo, null, f.size ? u : u.map((m) => gn(m)))
  );
};
function oy({ children: e, isValidProp: t, ...n }) {
  t && Av(t), (n = { ...M($n), ...n }), (n.isStatic = Un(() => n.isStatic));
  let r = ge(
    () => n,
    [JSON.stringify(n.transition), n.transformPagePoint, n.reducedMotion]
  );
  return ue($n.Provider, { value: r }, e);
}
var sy = be(null),
  nR = (e) => !e.isLayoutDirty && e.willUpdate(!1);
function hv() {
  let e = new Set(),
    t = new WeakMap(),
    n = () => e.forEach(nR);
  return {
    add: (r) => {
      e.add(r), t.set(r, r.addEventListener("willUpdate", n));
    },
    remove: (r) => {
      e.delete(r);
      let i = t.get(r);
      i && (i(), t.delete(r)), n();
    },
    dirty: n,
  };
}
var ay = (e) => e === !0,
  rR = (e) => ay(e === !0) || e === "id",
  ly = ({ children: e, id: t, inherit: n = !0 }) => {
    let r = M(Wo),
      i = M(sy),
      [o, s] = rl(),
      a = A(null),
      l = r.id || i;
    a.current === null &&
      (rR(n) && l && (t = t ? l + "-" + t : l),
      (a.current = { id: t, group: (ay(n) && r.group) || hv() }));
    let c = ge(() => ({ ...a.current, forceRender: o }), [s]);
    return ue(Wo.Provider, { value: c }, e);
  };
function wn(e) {
  let t = Un(() => xe(e)),
    { isStatic: n } = M($n);
  if (n) {
    let [, r] = Lt(e);
    W(() => t.on("change", r), []);
  }
  return t;
}
var iR = (e) => e && typeof e == "object" && e.mix,
  oR = (e) => (iR(e) ? e.mix : void 0);
function Hi(...e) {
  let t = !Array.isArray(e[0]),
    n = t ? 0 : -1,
    r = e[0 + n],
    i = e[1 + n],
    o = e[2 + n],
    s = e[3 + n],
    a = Bi(i, o, { mixer: oR(o[0]), ...s });
  return t ? a(r) : a;
}
function cy(e, t) {
  let n = wn(t()),
    r = () => n.set(t());
  return (
    r(),
    fr(() => {
      let i = () => K.update(r, !1, !0),
        o = e.map((s) => s.on("change", i));
      return () => {
        o.forEach((s) => s()), tt(r);
      };
    }),
    n
  );
}
function sR(e) {
  (Ho.current = []), e();
  let t = cy(Ho.current, e);
  return (Ho.current = void 0), t;
}
function dt(e, t, n, r) {
  if (typeof e == "function") return sR(e);
  let i = typeof t == "function" ? t : Hi(t, n, r);
  return Array.isArray(e) ? pv(e, i) : pv([e], ([o]) => i(o));
}
function pv(e, t) {
  let n = Un(() => []);
  return cy(e, () => {
    n.length = 0;
    let r = e.length;
    for (let i = 0; i < r; i++) n[i] = e[i].get();
    return t(n);
  });
}
var uy = be(null);
function aR(e, t, n, r) {
  if (!r) return e;
  let i = e.findIndex((u) => u.value === t);
  if (i === -1) return e;
  let o = r > 0 ? 1 : -1,
    s = e[i + o];
  if (!s) return e;
  let a = e[i],
    l = s.layout,
    c = he(l.min, l.max, 0.5);
  return (o === 1 && a.layout.max + n > c) || (o === -1 && a.layout.min + n < c)
    ? Sk(e, i, i + o)
    : e;
}
function lR(
  { children: e, as: t = "ul", axis: n = "y", onReorder: r, values: i, ...o },
  s
) {
  let a = Un(() => _t(t)),
    l = [],
    c = A(!1);
  nt(!!i, "Reorder.Group must be provided a values prop");
  let u = {
    axis: n,
    registerItem: (f, d) => {
      let h = l.findIndex((g) => f === g.value);
      h !== -1 ? (l[h].layout = d[n]) : l.push({ value: f, layout: d[n] }),
        l.sort(uR);
    },
    updateOrder: (f, d, h) => {
      if (c.current) return;
      let g = aR(l, f, d, h);
      l !== g &&
        ((c.current = !0), r(g.map(cR).filter((y) => i.indexOf(y) !== -1)));
    },
  };
  return (
    W(() => {
      c.current = !1;
    }),
    ue(a, { ...o, ref: s, ignoreStrict: !0 }, ue(uy.Provider, { value: u }, e))
  );
}
var p5 = We(lR);
function cR(e) {
  return e.value;
}
function uR(e, t) {
  return e.layout.min - t.layout.min;
}
function mv(e, t = 0) {
  return Se(e) ? e : wn(t);
}
function fR(
  {
    children: e,
    style: t = {},
    value: n,
    as: r = "li",
    onDrag: i,
    layout: o = !0,
    ...s
  },
  a
) {
  let l = Un(() => _t(r)),
    c = M(uy),
    u = { x: mv(t.x), y: mv(t.y) },
    f = dt([u.x, u.y], ([y, x]) => (y || x ? 1 : "unset"));
  nt(!!c, "Reorder.Item must be a child of Reorder.Group");
  let { axis: d, registerItem: h, updateOrder: g } = c;
  return ue(
    l,
    {
      drag: d,
      ...s,
      dragSnapToOrigin: !0,
      style: { ...t, x: u.x, y: u.y, zIndex: f },
      layout: o,
      onDrag: (y, x) => {
        let { velocity: p } = x;
        p[d] && g(n, u[d].get(), p[d]), i && i(y, x);
      },
      onLayoutMeasure: (y) => h(n, y),
      ref: a,
      ignoreStrict: !0,
    },
    e
  );
}
var v5 = We(fR);
var fy = { renderer: ty, ...kf, ...Mg },
  dR = { ...fy, ...qg, ...ny };
function Af(e, t = {}) {
  let { isStatic: n } = M($n),
    r = A(null),
    i = wn(Se(e) ? e.get() : e),
    o = () => {
      r.current && r.current.stop();
    };
  return (
    Ft(
      () =>
        i.attach((s, a) => {
          if (n) return a(s);
          let l = r.current;
          return (
            l && l.time === 0 && l.sample(Ie.delta),
            o(),
            (r.current = Zr({
              keyframes: [i.get(), s],
              velocity: i.getVelocity(),
              type: "spring",
              restDelta: 0.001,
              restSpeed: 0.01,
              ...t,
              onUpdate: a,
            })),
            i.get()
          );
        }, o),
      [JSON.stringify(t)]
    ),
    fr(() => {
      if (Se(e)) return e.on("change", (s) => i.set(parseFloat(s)));
    }, [i]),
    i
  );
}
function il(e, t, n) {
  var r;
  if (typeof e == "string") {
    let i = document;
    t &&
      (nt(!!t.current, "Scope provided, but no element detected."),
      (i = t.current)),
      n
        ? (((r = n[e]) !== null && r !== void 0) ||
            (n[e] = i.querySelectorAll(e)),
          (e = n[e]))
        : (e = i.querySelectorAll(e));
  } else e instanceof Element && (e = [e]);
  return Array.from(e || []);
}
var Oa = new WeakMap(),
  ar;
function hR(e, t) {
  if (t) {
    let { inlineSize: n, blockSize: r } = t[0];
    return { width: n, height: r };
  } else
    return e instanceof SVGElement && "getBBox" in e
      ? e.getBBox()
      : { width: e.offsetWidth, height: e.offsetHeight };
}
function pR({ target: e, contentRect: t, borderBoxSize: n }) {
  var r;
  (r = Oa.get(e)) === null ||
    r === void 0 ||
    r.forEach((i) => {
      i({
        target: e,
        contentSize: t,
        get size() {
          return hR(e, n);
        },
      });
    });
}
function mR(e) {
  e.forEach(pR);
}
function vR() {
  typeof ResizeObserver > "u" || (ar = new ResizeObserver(mR));
}
function gR(e, t) {
  ar || vR();
  let n = il(e);
  return (
    n.forEach((r) => {
      let i = Oa.get(r);
      i || ((i = new Set()), Oa.set(r, i)), i.add(t), ar?.observe(r);
    }),
    () => {
      n.forEach((r) => {
        let i = Oa.get(r);
        i?.delete(t), i?.size || ar?.unobserve(r);
      });
    }
  );
}
var Aa = new Set(),
  $o;
function yR() {
  ($o = () => {
    let e = { width: L.innerWidth, height: L.innerHeight },
      t = { target: L, size: e, contentSize: e };
    Aa.forEach((n) => n(t));
  }),
    L.addEventListener("resize", $o);
}
function bR(e) {
  return (
    Aa.add(e),
    $o || yR(),
    () => {
      Aa.delete(e), !Aa.size && $o && ($o = void 0);
    }
  );
}
function xR(e, t) {
  return typeof e == "function" ? bR(e) : gR(e, t);
}
var SR = 50,
  vv = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
  }),
  wR = () => ({ time: 0, x: vv(), y: vv() }),
  CR = {
    x: { length: "Width", position: "Left" },
    y: { length: "Height", position: "Top" },
  };
function gv(e, t, n, r) {
  let i = n[t],
    { length: o, position: s } = CR[t],
    a = i.current,
    l = n.time;
  (i.current = e["scroll" + s]),
    (i.scrollLength = e["scroll" + o] - e["client" + o]),
    (i.offset.length = 0),
    (i.offset[0] = 0),
    (i.offset[1] = i.scrollLength),
    (i.progress = cr(0, i.scrollLength, i.current));
  let c = r - l;
  i.velocity = c > SR ? 0 : pf(i.current - a, c);
}
function kR(e, t, n) {
  gv(e, "x", t, n), gv(e, "y", t, n), (t.time = n);
}
function TR(e, t) {
  let n = { x: 0, y: 0 },
    r = e;
  for (; r && r !== t; )
    if (r instanceof HTMLElement)
      (n.x += r.offsetLeft), (n.y += r.offsetTop), (r = r.offsetParent);
    else if (r.tagName === "svg") {
      let i = r.getBoundingClientRect();
      r = r.parentElement;
      let o = r.getBoundingClientRect();
      (n.x += i.left - o.left), (n.y += i.top - o.top);
    } else if (r instanceof SVGGraphicsElement) {
      let { x: i, y: o } = r.getBBox();
      (n.x += i), (n.y += o);
      let s = null,
        a = r.parentNode;
      for (; !s; ) a.tagName === "svg" && (s = a), (a = r.parentNode);
      r = s;
    } else break;
  return n;
}
var ER = {
    Enter: [
      [0, 1],
      [1, 1],
    ],
    Exit: [
      [0, 0],
      [1, 0],
    ],
    Any: [
      [1, 0],
      [0, 1],
    ],
    All: [
      [0, 0],
      [1, 1],
    ],
  },
  Gu = { start: 0, center: 0.5, end: 1 };
function yv(e, t, n = 0) {
  let r = 0;
  if ((Gu[e] !== void 0 && (e = Gu[e]), typeof e == "string")) {
    let i = parseFloat(e);
    e.endsWith("px")
      ? (r = i)
      : e.endsWith("%")
      ? (e = i / 100)
      : e.endsWith("vw")
      ? (r = (i / 100) * document.documentElement.clientWidth)
      : e.endsWith("vh")
      ? (r = (i / 100) * document.documentElement.clientHeight)
      : (e = i);
  }
  return typeof e == "number" && (r = t * e), n + r;
}
var RR = [0, 0];
function PR(e, t, n, r) {
  let i = Array.isArray(e) ? e : RR,
    o = 0,
    s = 0;
  return (
    typeof e == "number"
      ? (i = [e, e])
      : typeof e == "string" &&
        ((e = e.trim()),
        e.includes(" ") ? (i = e.split(" ")) : (i = [e, Gu[e] ? e : "0"])),
    (o = yv(i[0], n, r)),
    (s = yv(i[1], t)),
    o - s
  );
}
var IR = { x: 0, y: 0 };
function FR(e) {
  return "getBBox" in e && e.tagName !== "svg"
    ? e.getBBox()
    : { width: e.clientWidth, height: e.clientHeight };
}
function LR(e, t, n) {
  let { offset: r = ER.All } = n,
    { target: i = e, axis: o = "y" } = n,
    s = o === "y" ? "height" : "width",
    a = i !== e ? TR(i, e) : IR,
    l = i === e ? { width: e.scrollWidth, height: e.scrollHeight } : FR(i),
    c = { width: e.clientWidth, height: e.clientHeight };
  t[o].offset.length = 0;
  let u = !t[o].interpolate,
    f = r.length;
  for (let d = 0; d < f; d++) {
    let h = PR(r[d], c[s], l[s], a[o]);
    !u && h !== t[o].interpolatorOffsets[d] && (u = !0), (t[o].offset[d] = h);
  }
  u &&
    ((t[o].interpolate = Bi(t[o].offset, mf(r))),
    (t[o].interpolatorOffsets = [...t[o].offset])),
    (t[o].progress = t[o].interpolate(t[o].current));
}
function _R(e, t = e, n) {
  if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), t !== e)) {
    let r = t;
    for (; r && r !== e; )
      (n.x.targetOffset += r.offsetLeft),
        (n.y.targetOffset += r.offsetTop),
        (r = r.offsetParent);
  }
  (n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
    (n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight),
    (n.x.containerLength = e.clientWidth),
    (n.y.containerLength = e.clientHeight);
}
function MR(e, t, n, r = {}) {
  return {
    measure: () => _R(e, r.target, n),
    update: (i) => {
      kR(e, n, i), (r.offset || r.target) && LR(e, n, r);
    },
    notify: () => t(n),
  };
}
var Oo = new WeakMap(),
  bv = new WeakMap(),
  Fu = new WeakMap(),
  xv = (e) => (e === document.documentElement ? L : e);
function ei(e, { container: t = document.documentElement, ...n } = {}) {
  let r = Fu.get(t);
  r || ((r = new Set()), Fu.set(t, r));
  let i = wR(),
    o = MR(t, e, i, n);
  if ((r.add(o), !Oo.has(t))) {
    let a = () => {
        for (let d of r) d.measure();
      },
      l = () => {
        for (let d of r) d.update(Ie.timestamp);
      },
      c = () => {
        for (let d of r) d.notify();
      },
      u = () => {
        K.read(a, !1, !0), K.read(l, !1, !0), K.update(c, !1, !0);
      };
    Oo.set(t, u);
    let f = xv(t);
    L.addEventListener("resize", u, { passive: !0 }),
      t !== document.documentElement && bv.set(t, xR(t, u)),
      f.addEventListener("scroll", u, { passive: !0 });
  }
  let s = Oo.get(t);
  return (
    K.read(s, !1, !0),
    () => {
      var a;
      tt(s);
      let l = Fu.get(t);
      if (!l || (l.delete(o), l.size)) return;
      let c = Oo.get(t);
      Oo.delete(t),
        c &&
          (xv(t).removeEventListener("scroll", c),
          (a = bv.get(t)) === null || a === void 0 || a(),
          L.removeEventListener("resize", c));
    }
  );
}
function Sv(e, t) {
  Zo(
    !!(!t || t.current),
    `You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`
  );
}
var OR = () => ({
  scrollX: xe(0),
  scrollY: xe(0),
  scrollXProgress: xe(0),
  scrollYProgress: xe(0),
});
function dy({ container: e, target: t, layoutEffect: n = !0, ...r } = {}) {
  let i = Un(OR);
  return (
    (n ? fr : W)(
      () => (
        Sv("target", t),
        Sv("container", e),
        ei(
          ({ x: s, y: a }) => {
            i.scrollX.set(s.current),
              i.scrollXProgress.set(s.progress),
              i.scrollY.set(a.current),
              i.scrollYProgress.set(a.progress);
          },
          {
            ...r,
            container: e?.current || void 0,
            target: t?.current || void 0,
          }
        )
      ),
      [e, t, JSON.stringify(r.offset)]
    ),
    i
  );
}
function AR(e) {
  let t = A(0),
    { isStatic: n } = M($n);
  W(() => {
    if (n) return;
    let r = ({ timestamp: i, delta: o }) => {
      t.current || (t.current = i), e(i - t.current, o);
    };
    return K.update(r, !0), () => tt(r);
  }, [e]);
}
function hy() {
  !Ef.current && xg();
  let [e] = Lt(Wa.current);
  return e;
}
function ti() {
  let e = hy(),
    { reducedMotion: t } = M($n);
  return t === "never" ? !1 : t === "always" ? !0 : e;
}
function DR(e) {
  e.values.forEach((t) => t.stop());
}
function py() {
  let e = !1,
    t = new Set(),
    n = {
      subscribe(r) {
        return t.add(r), () => void t.delete(r);
      },
      start(r, i) {
        nt(
          e,
          "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook."
        );
        let o = [];
        return (
          t.forEach((s) => {
            o.push(Cf(s, r, { transitionOverride: i }));
          }),
          Promise.all(o)
        );
      },
      set(r) {
        return (
          nt(
            e,
            "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."
          ),
          t.forEach((i) => {
            Mk(i, r);
          })
        );
      },
      stop() {
        t.forEach((r) => {
          DR(r);
        });
      },
      mount() {
        return (
          (e = !0),
          () => {
            (e = !1), n.stop();
          }
        );
      },
    };
  return n;
}
var my = (e, t, n) => {
  let r = t - e;
  return ((((n - e) % r) + r) % r) + e;
};
function VR(e, t) {
  let n,
    r = () => {
      let { currentTime: i } = t,
        s = (i === null ? 0 : i.value) / 100;
      n !== s && e(s), (n = s);
    };
  return K.update(r, !0), () => tt(r);
}
var BR = mg(() => L.ScrollTimeline !== void 0),
  vy = class {
    constructor(e) {
      this.animations = e.filter(Boolean);
    }
    then(e, t) {
      return Promise.all(this.animations).then(e).catch(t);
    }
    getAll(e) {
      return this.animations[0][e];
    }
    setAll(e, t) {
      for (let n = 0; n < this.animations.length; n++)
        this.animations[n][e] = t;
    }
    attachTimeline(e) {
      let t = this.animations.map((n) => {
        if (BR() && n.attachTimeline) n.attachTimeline(e);
        else
          return (
            n.pause(),
            VR((r) => {
              n.time = n.duration * r;
            }, e)
          );
      });
      return () => {
        t.forEach((n, r) => {
          n && n(), this.animations[r].stop();
        });
      };
    }
    get time() {
      return this.getAll("time");
    }
    set time(e) {
      this.setAll("time", e);
    }
    get speed() {
      return this.getAll("speed");
    }
    set speed(e) {
      this.setAll("speed", e);
    }
    get duration() {
      let e = 0;
      for (let t = 0; t < this.animations.length; t++)
        e = Math.max(e, this.animations[t].duration);
      return e;
    }
    runAll(e) {
      this.animations.forEach((t) => t[e]());
    }
    play() {
      this.runAll("play");
    }
    pause() {
      this.runAll("pause");
    }
    stop() {
      this.runAll("stop");
    }
    cancel() {
      this.runAll("cancel");
    }
    complete() {
      this.runAll("complete");
    }
  };
function HR(e) {
  return typeof e == "object" && !Array.isArray(e);
}
function zR(e) {
  let t = {
      presenceContext: null,
      props: {},
      visualState: {
        renderState: {
          transform: {},
          transformOrigin: {},
          style: {},
          vars: {},
          attrs: {},
        },
        latestValues: {},
      },
    },
    n = Xg(e)
      ? new ey(t, { enableHardwareAcceleration: !1 })
      : new Jg(t, { enableHardwareAcceleration: !0 });
  n.mount(e), ur.set(e, n);
}
function NR(e, t = 100) {
  let n = Jo({ keyframes: [0, t], ...e }),
    r = Math.min(Au(n), Ou);
  return {
    type: "keyframes",
    ease: (i) => n.next(r * i).value / t,
    duration: Sn(r),
  };
}
function wv(e, t, n, r) {
  var i;
  return typeof t == "number"
    ? t
    : t.startsWith("-") || t.startsWith("+")
    ? Math.max(0, e + parseFloat(t))
    : t === "<"
    ? n
    : (i = r.get(t)) !== null && i !== void 0
    ? i
    : e;
}
function $R(e, t) {
  return ng(e) ? e[my(0, e.length, t)] : e;
}
function WR(e, t, n) {
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    i.at > t && i.at < n && (el(e, i), r--);
  }
}
function jR(e, t, n, r, i, o) {
  WR(e, i, o);
  for (let s = 0; s < t.length; s++)
    e.push({ value: t[s], at: he(i, o, r[s]), easing: $R(n, s) });
}
function UR(e, t) {
  return e.at === t.at
    ? e.value === null
      ? 1
      : t.value === null
      ? -1
      : 0
    : e.at - t.at;
}
var XR = "easeInOut";
function GR(e, { defaultTransition: t = {}, ...n } = {}, r) {
  let i = t.duration || 0.3,
    o = new Map(),
    s = new Map(),
    a = {},
    l = new Map(),
    c = 0,
    u = 0,
    f = 0;
  for (let d = 0; d < e.length; d++) {
    let h = e[d];
    if (typeof h == "string") {
      l.set(h, u);
      continue;
    } else if (!Array.isArray(h)) {
      l.set(h.name, wv(u, h.at, c, l));
      continue;
    }
    let [g, y, x = {}] = h;
    x.at !== void 0 && (u = wv(u, x.at, c, l));
    let p = 0,
      m = (v, b, C, w = 0, k = 0) => {
        let E = YR(v),
          { delay: P = 0, times: I = mf(E), type: H = "keyframes", ..._ } = b,
          { ease: Z = t.ease || "easeOut", duration: N } = b,
          ee = typeof P == "function" ? P(w, k) : P,
          G = E.length;
        if (G <= 2 && H === "spring") {
          let Q = 100;
          if (G === 2 && QR(E)) {
            let Y = E[1] - E[0];
            Q = Math.abs(Y);
          }
          let V = { ..._ };
          N !== void 0 && (V.duration = Nn(N));
          let te = NR(V, Q);
          (Z = te.ease), (N = te.duration);
        }
        N ?? (N = i);
        let z = u + ee,
          j = z + N;
        I.length === 1 && I[0] === 0 && (I[1] = 1);
        let D = I.length - E.length;
        D > 0 && rg(I, D),
          E.length === 1 && E.unshift(null),
          jR(C, E, Z, I, z, j),
          (p = Math.max(ee + N, p)),
          (f = Math.max(j, f));
      };
    if (Se(g)) {
      let v = Cv(g, s);
      m(y, x, kv("default", v));
    } else {
      let v = il(g, r, a),
        b = v.length;
      for (let C = 0; C < b; C++) {
        (y = y), (x = x);
        let w = v[C],
          k = Cv(w, s);
        for (let E in y) m(y[E], KR(x, E), kv(E, k), C, b);
      }
    }
    (c = u), (u += p);
  }
  return (
    s.forEach((d, h) => {
      for (let g in d) {
        let y = d[g];
        y.sort(UR);
        let x = [],
          p = [],
          m = [];
        for (let b = 0; b < y.length; b++) {
          let { at: C, value: w, easing: k } = y[b];
          x.push(w), p.push(cr(0, f, C)), m.push(k || "easeOut");
        }
        p[0] !== 0 && (p.unshift(0), x.unshift(x[0]), m.unshift(XR)),
          p[p.length - 1] !== 1 && (p.push(1), x.push(null)),
          o.has(h) || o.set(h, { keyframes: {}, transition: {} });
        let v = o.get(h);
        (v.keyframes[g] = x),
          (v.transition[g] = { ...t, duration: f, ease: m, times: p, ...n });
      }
    }),
    o
  );
}
function Cv(e, t) {
  return !t.has(e) && t.set(e, {}), t.get(e);
}
function kv(e, t) {
  return t[e] || (t[e] = []), t[e];
}
function YR(e) {
  return Array.isArray(e) ? e : [e];
}
function KR(e, t) {
  return e[t] ? { ...e, ...e[t] } : { ...e };
}
var qR = (e) => typeof e == "number",
  QR = (e) => e.every(qR);
function gy(e, t, n, r) {
  let i = il(e, r),
    o = i.length;
  nt(!!o, "No valid element provided.");
  let s = [];
  for (let a = 0; a < o; a++) {
    let l = i[a];
    ur.has(l) || zR(l);
    let c = ur.get(l),
      u = { ...n };
    typeof u.delay == "function" && (u.delay = u.delay(a, o)),
      s.push(...wf(c, { ...t, transition: u }, {}));
  }
  return new vy(s);
}
var ZR = (e) => Array.isArray(e) && Array.isArray(e[0]);
function JR(e, t, n) {
  let r = [];
  return (
    GR(e, t, n).forEach(({ keyframes: o, transition: s }, a) => {
      let l;
      Se(a) ? (l = Mf(a, o.default, s.default)) : (l = gy(a, o, s)), r.push(l);
    }),
    new vy(r)
  );
}
var yy = (e) => {
    function t(n, r, i) {
      let o;
      return (
        ZR(n)
          ? (o = JR(n, r, e))
          : HR(r)
          ? (o = gy(n, r, i, e))
          : (o = Mf(n, r, i)),
        e && e.animations.push(o),
        o
      );
    }
    return t;
  },
  zi = yy();
function by() {
  let e = Un(py);
  return fr(e.mount, []), e;
}
var xy = by;
var eP = { some: 0, all: 1 };
function Sy(e, t, { root: n, margin: r, amount: i = "some" } = {}) {
  let o = il(e),
    s = new WeakMap(),
    a = (c) => {
      c.forEach((u) => {
        let f = s.get(u.target);
        if (u.isIntersecting !== !!f)
          if (u.isIntersecting) {
            let d = t(u);
            typeof d == "function" ? s.set(u.target, d) : l.unobserve(u.target);
          } else f && (f(u), s.delete(u.target));
      });
    },
    l = new IntersectionObserver(a, {
      root: n,
      rootMargin: r,
      threshold: typeof i == "number" ? i : eP[i],
    });
  return o.forEach((c) => l.observe(c)), () => l.disconnect();
}
function tP(e, { root: t, margin: n, amount: r, once: i = !1 } = {}) {
  let [o, s] = Lt(!1);
  return (
    W(() => {
      if (!e.current || (i && o)) return;
      let a = () => (s(!0), i ? void 0 : () => s(!1)),
        l = { root: (t && t.current) || void 0, margin: n, amount: r };
      return Sy(e.current, a, l);
    }, [t, e, n, i, r]),
    o
  );
}
function Df(e) {
  return e !== null && typeof e == "object" && ef in e;
}
function wy(e) {
  if (Df(e)) return e[ef];
}
function Vf() {
  return nP;
}
function nP(e) {
  Qr.current &&
    ((Qr.current.isUpdating = !1), Qr.current.blockUpdate(), e && e());
}
function Cy() {
  let [e, t] = rl(),
    n = Vf(),
    r = A();
  return (
    W(() => {
      K.postRender(() =>
        K.postRender(() => {
          t === r.current && (Na.current = !1);
        })
      );
    }, [t]),
    (i) => {
      n(() => {
        (Na.current = !0), e(), i(), (r.current = t + 1);
      });
    }
  );
}
function ky() {
  return fe(() => {
    let t = Qr.current;
    t && t.resetTree();
  }, []);
}
var Tv = () => ({});
var P5 = qa({ scrapeMotionValuesFromProps: Tv, createRenderState: Tv });
var rP = Ao.reduce((e, t) => ((e[t] = (n) => tt(n)), e), {});
var BF = {};
cm(BF, {
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => EF,
  createPortal: () => RF,
  createRoot: () => PF,
  default: () => Nx,
  findDOMNode: () => IF,
  flushSync: () => FF,
  hydrate: () => LF,
  hydrateRoot: () => _F,
  render: () => MF,
  unmountComponentAtNode: () => OF,
  unstable_batchedUpdates: () => AF,
  unstable_renderSubtreeIntoContainer: () => DF,
  version: () => VF,
});
var ul = {};
cm(ul, {
  default: () => U,
  unstable_IdlePriority: () => sP,
  unstable_ImmediatePriority: () => aP,
  unstable_LowPriority: () => lP,
  unstable_NormalPriority: () => cP,
  unstable_Profiling: () => uP,
  unstable_UserBlockingPriority: () => fP,
  unstable_cancelCallback: () => dP,
  unstable_continueExecution: () => hP,
  unstable_forceFrameRate: () => pP,
  unstable_getCurrentPriorityLevel: () => mP,
  unstable_getFirstCallbackNode: () => vP,
  unstable_next: () => gP,
  unstable_now: () => oP,
  unstable_pauseExecution: () => yP,
  unstable_requestPaint: () => bP,
  unstable_runWithPriority: () => xP,
  unstable_scheduleCallback: () => SP,
  unstable_shouldYield: () => wP,
  unstable_wrapCallback: () => CP,
});
var U = {};
function Nf(e, t) {
  var n = e.length;
  e.push(t);
  e: for (; 0 < n; ) {
    var r = (n - 1) >>> 1,
      i = e[r];
    if (!(0 < ol(i, t))) break e;
    (e[r] = t), (e[n] = i), (n = r);
  }
}
function an(e) {
  return e.length === 0 ? null : e[0];
}
function al(e) {
  if (e.length === 0) return null;
  var t = e[0],
    n = e.pop();
  if (n !== t) {
    e[0] = n;
    e: for (var r = 0, i = e.length, o = i >>> 1; r < o; ) {
      var s = 2 * (r + 1) - 1,
        a = e[s],
        l = s + 1,
        c = e[l];
      if (0 > ol(a, n))
        l < i && 0 > ol(c, a)
          ? ((e[r] = c), (e[l] = n), (r = l))
          : ((e[r] = a), (e[s] = n), (r = s));
      else {
        if (!(l < i && 0 > ol(c, n))) break e;
        (e[r] = c), (e[l] = n), (r = l);
      }
    }
  }
  return t;
}
function ol(e, t) {
  var n = e.sortIndex - t.sortIndex;
  return n !== 0 ? n : e.id - t.id;
}
typeof performance == "object" && typeof performance.now == "function"
  ? ((Ty = performance),
    (U.unstable_now = function () {
      return Ty.now();
    }))
  : ((Bf = Date),
    (Ey = Bf.now()),
    (U.unstable_now = function () {
      return Bf.now() - Ey;
    }));
var Ty,
  Bf,
  Ey,
  Cn = [],
  hr = [],
  iP = 1,
  Yt = null,
  rt = 3,
  ll = !1,
  ni = !1,
  ts = !1,
  Iy = typeof setTimeout == "function" ? setTimeout : null,
  Fy = typeof clearTimeout == "function" ? clearTimeout : null,
  Ry = typeof setImmediate < "u" ? setImmediate : null;
typeof ft < "u" &&
  ft.scheduling !== void 0 &&
  ft.scheduling.isInputPending !== void 0 &&
  ft.scheduling.isInputPending.bind(ft.scheduling);
function $f(e) {
  for (var t = an(hr); t !== null; ) {
    if (t.callback === null) al(hr);
    else {
      if (!(t.startTime <= e)) break;
      al(hr), (t.sortIndex = t.expirationTime), Nf(Cn, t);
    }
    t = an(hr);
  }
}
function Wf(e) {
  if (((ts = !1), $f(e), !ni))
    if (an(Cn) !== null) (ni = !0), Uf(jf);
    else {
      var t = an(hr);
      t !== null && Xf(Wf, t.startTime - e);
    }
}
function jf(e, t) {
  (ni = !1), ts && ((ts = !1), Fy(ns), (ns = -1)), (ll = !0);
  var n = rt;
  try {
    for (
      $f(t), Yt = an(Cn);
      Yt !== null && (!(Yt.expirationTime > t) || (e && !My()));

    ) {
      var r = Yt.callback;
      if (typeof r == "function") {
        (Yt.callback = null), (rt = Yt.priorityLevel);
        var i = r(Yt.expirationTime <= t);
        (t = U.unstable_now()),
          typeof i == "function" ? (Yt.callback = i) : Yt === an(Cn) && al(Cn),
          $f(t);
      } else al(Cn);
      Yt = an(Cn);
    }
    if (Yt !== null) var o = !0;
    else {
      var s = an(hr);
      s !== null && Xf(Wf, s.startTime - t), (o = !1);
    }
    return o;
  } finally {
    (Yt = null), (rt = n), (ll = !1);
  }
}
var cl = !1,
  sl = null,
  ns = -1,
  Ly = 5,
  _y = -1;
function My() {
  return !(U.unstable_now() - _y < Ly);
}
function Hf() {
  if (sl !== null) {
    var e = U.unstable_now();
    _y = e;
    var t = !0;
    try {
      t = sl(!0, e);
    } finally {
      t ? es() : ((cl = !1), (sl = null));
    }
  } else cl = !1;
}
var es;
typeof Ry == "function"
  ? (es = function () {
      Ry(Hf);
    })
  : typeof MessageChannel < "u"
  ? ((zf = new MessageChannel()),
    (Py = zf.port2),
    (zf.port1.onmessage = Hf),
    (es = function () {
      Py.postMessage(null);
    }))
  : (es = function () {
      Iy(Hf, 0);
    });
var zf, Py;
function Uf(e) {
  (sl = e), cl || ((cl = !0), es());
}
function Xf(e, t) {
  ns = Iy(function () {
    e(U.unstable_now());
  }, t);
}
U.unstable_IdlePriority = 5;
U.unstable_ImmediatePriority = 1;
U.unstable_LowPriority = 4;
U.unstable_NormalPriority = 3;
U.unstable_Profiling = null;
U.unstable_UserBlockingPriority = 2;
U.unstable_cancelCallback = function (e) {
  e.callback = null;
};
U.unstable_continueExecution = function () {
  ni || ll || ((ni = !0), Uf(jf));
};
U.unstable_forceFrameRate = function (e) {
  0 > e || 125 < e
    ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      )
    : (Ly = 0 < e ? Math.floor(1e3 / e) : 5);
};
U.unstable_getCurrentPriorityLevel = function () {
  return rt;
};
U.unstable_getFirstCallbackNode = function () {
  return an(Cn);
};
U.unstable_next = function (e) {
  switch (rt) {
    case 1:
    case 2:
    case 3:
      var t = 3;
      break;
    default:
      t = rt;
  }
  var n = rt;
  rt = t;
  try {
    return e();
  } finally {
    rt = n;
  }
};
U.unstable_pauseExecution = function () {};
U.unstable_requestPaint = function () {};
U.unstable_runWithPriority = function (e, t) {
  switch (e) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      break;
    default:
      e = 3;
  }
  var n = rt;
  rt = e;
  try {
    return t();
  } finally {
    rt = n;
  }
};
U.unstable_scheduleCallback = function (e, t, n) {
  var r = U.unstable_now();
  switch (
    (typeof n == "object" && n !== null
      ? ((n = n.delay), (n = typeof n == "number" && 0 < n ? r + n : r))
      : (n = r),
    e)
  ) {
    case 1:
      var i = -1;
      break;
    case 2:
      i = 250;
      break;
    case 5:
      i = 1073741823;
      break;
    case 4:
      i = 1e4;
      break;
    default:
      i = 5e3;
  }
  return (
    (i = n + i),
    (e = {
      id: iP++,
      callback: t,
      priorityLevel: e,
      startTime: n,
      expirationTime: i,
      sortIndex: -1,
    }),
    n > r
      ? ((e.sortIndex = n),
        Nf(hr, e),
        an(Cn) === null &&
          e === an(hr) &&
          (ts ? (Fy(ns), (ns = -1)) : (ts = !0), Xf(Wf, n - r)))
      : ((e.sortIndex = i), Nf(Cn, e), ni || ll || ((ni = !0), Uf(jf))),
    e
  );
};
U.unstable_shouldYield = My;
U.unstable_wrapCallback = function (e) {
  var t = rt;
  return function () {
    var n = rt;
    rt = t;
    try {
      return e.apply(this, arguments);
    } finally {
      rt = n;
    }
  };
};
var oP = U.unstable_now,
  sP = U.unstable_IdlePriority,
  aP = U.unstable_ImmediatePriority,
  lP = U.unstable_LowPriority,
  cP = U.unstable_NormalPriority,
  uP = U.unstable_Profiling,
  fP = U.unstable_UserBlockingPriority,
  dP = U.unstable_cancelCallback,
  hP = U.unstable_continueExecution,
  pP = U.unstable_forceFrameRate,
  mP = U.unstable_getCurrentPriorityLevel,
  vP = U.unstable_getFirstCallbackNode,
  gP = U.unstable_next,
  yP = U.unstable_pauseExecution,
  bP = U.unstable_requestPaint,
  xP = U.unstable_runWithPriority,
  SP = U.unstable_scheduleCallback,
  wP = U.unstable_shouldYield,
  CP = U.unstable_wrapCallback;
var kP = "default" in je ? S : je,
  TP = "default" in ul ? U : ul,
  Vt = {},
  z0 = kP,
  Dt = TP;
function F(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var N0 = new Set(),
  ks = {};
function mi(e, t) {
  ao(e, t), ao(e + "Capture", t);
}
function ao(e, t) {
  for (ks[e] = t, e = 0; e < t.length; e++) N0.add(t[e]);
}
var Qn = !(
    typeof L > "u" ||
    typeof L.document > "u" ||
    typeof L.document.createElement > "u"
  ),
  md = Object.prototype.hasOwnProperty,
  EP =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Oy = {},
  Ay = {};
function RP(e) {
  return md.call(Ay, e)
    ? !0
    : md.call(Oy, e)
    ? !1
    : EP.test(e)
    ? (Ay[e] = !0)
    : ((Oy[e] = !0), !1);
}
function PP(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function IP(e, t, n, r) {
  if (t === null || typeof t > "u" || PP(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function mt(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var Ze = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ze[e] = new mt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ze[t] = new mt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ze[e] = new mt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ze[e] = new mt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ze[e] = new mt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ze[e] = new mt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ze[e] = new mt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ze[e] = new mt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ze[e] = new mt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var sh = /[\-:]([a-z])/g;
function ah(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(sh, ah);
    Ze[t] = new mt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(sh, ah);
    Ze[t] = new mt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(sh, ah);
  Ze[t] = new mt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ze[e] = new mt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ze.xlinkHref = new mt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ze[e] = new mt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function lh(e, t, n, r) {
  var i = Ze.hasOwnProperty(t) ? Ze[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (IP(t, n, i, r) && (n = null),
    r || i === null
      ? RP(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? i.type !== 3 && "" : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var tr = z0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  fl = Symbol.for("react.element"),
  Wi = Symbol.for("react.portal"),
  ji = Symbol.for("react.fragment"),
  ch = Symbol.for("react.strict_mode"),
  vd = Symbol.for("react.profiler"),
  $0 = Symbol.for("react.provider"),
  W0 = Symbol.for("react.context"),
  uh = Symbol.for("react.forward_ref"),
  gd = Symbol.for("react.suspense"),
  yd = Symbol.for("react.suspense_list"),
  fh = Symbol.for("react.memo"),
  mr = Symbol.for("react.lazy");
Symbol.for("react.scope");
Symbol.for("react.debug_trace_mode");
var j0 = Symbol.for("react.offscreen");
Symbol.for("react.legacy_hidden");
Symbol.for("react.cache");
Symbol.for("react.tracing_marker");
var Dy = Symbol.iterator;
function rs(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Dy && e[Dy]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Gf,
  ke = Object.assign;
function fs(e) {
  if (Gf === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Gf = (t && t[1]) || "";
    }
  return (
    `
` +
    Gf +
    e
  );
}
var Yf = !1;
function Kf(e, t) {
  if (!e || Yf) return "";
  Yf = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var i = c.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          a = o.length - 1;
        1 <= s && 0 <= a && i[s] !== o[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (i[s] !== o[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || i[s] !== o[a])) {
                var l =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (Yf = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? fs(e) : "";
}
function FP(e) {
  switch (e.tag) {
    case 5:
      return fs(e.type);
    case 16:
      return fs("Lazy");
    case 13:
      return fs("Suspense");
    case 19:
      return fs("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Kf(e.type, !1)), e;
    case 11:
      return (e = Kf(e.type.render, !1)), e;
    case 1:
      return (e = Kf(e.type, !0)), e;
    default:
      return "";
  }
}
function bd(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ji:
      return "Fragment";
    case Wi:
      return "Portal";
    case vd:
      return "Profiler";
    case ch:
      return "StrictMode";
    case gd:
      return "Suspense";
    case yd:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case W0:
        return (e.displayName || "Context") + ".Consumer";
      case $0:
        return (e._context.displayName || "Context") + ".Provider";
      case uh:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case fh:
        return (
          (t = e.displayName || null), t !== null ? t : bd(e.type) || "Memo"
        );
      case mr:
        (t = e._payload), (e = e._init);
        try {
          return bd(e(t));
        } catch {}
    }
  return null;
}
function LP(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return bd(t);
    case 8:
      return t === ch ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Ir(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function U0(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function _P(e) {
  var t = U0(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function dl(e) {
  e._valueTracker || (e._valueTracker = _P(e));
}
function X0(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = U0(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n && (t.setValue(e), !0)
  );
}
function zl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function xd(e, t) {
  var n = t.checked;
  return ke({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Vy(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Ir(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function G0(e, t) {
  (t = t.checked), t != null && lh(e, "checked", t, !1);
}
function Sd(e, t) {
  G0(e, t);
  var n = Ir(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? wd(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && wd(e, t.type, Ir(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function By(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function wd(e, t, n) {
  (t === "number" && zl(e.ownerDocument) === e) ||
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ds = Array.isArray;
function to(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Ir(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Cd(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(F(91));
  return ke({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Hy(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(F(92));
      if (ds(n)) {
        if (1 < n.length) throw Error(F(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Ir(n) };
}
function Y0(e, t) {
  var n = Ir(t.value),
    r = Ir(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function zy(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function K0(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function kd(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? K0(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var hl,
  q0 = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        hl = hl || document.createElement("div"),
          hl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = hl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ts(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ms = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  MP = ["Webkit", "ms", "Moz", "O"];
Object.keys(ms).forEach(function (e) {
  MP.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ms[t] = ms[e]);
  });
});
function Q0(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (ms.hasOwnProperty(e) && ms[e])
    ? ("" + t).trim()
    : t + "px";
}
function Z0(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Q0(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var OP = ke(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Td(e, t) {
  if (t) {
    if (OP[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(F(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(F(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(F(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(F(62));
  }
}
function Ed(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Rd = null;
function dh(e) {
  return (
    (e = e.target || e.srcElement || L),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Pd = null,
  no = null,
  ro = null;
function Ny(e) {
  if ((e = Ws(e))) {
    if (typeof Pd != "function") throw Error(F(280));
    var t = e.stateNode;
    t && ((t = pc(t)), Pd(e.stateNode, e.type, t));
  }
}
function J0(e) {
  no ? (ro ? ro.push(e) : (ro = [e])) : (no = e);
}
function eb() {
  if (no) {
    var e = no,
      t = ro;
    if (((ro = no = null), Ny(e), t)) for (e = 0; e < t.length; e++) Ny(t[e]);
  }
}
function tb(e, t) {
  return e(t);
}
function nb() {}
var qf = !1;
function rb(e, t, n) {
  if (qf) return e(t, n);
  qf = !0;
  try {
    return tb(e, t, n);
  } finally {
    (qf = !1), (no !== null || ro !== null) && (nb(), eb());
  }
}
function Es(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = pc(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(F(231, t, typeof n));
  return n;
}
var Id = !1;
if (Qn)
  try {
    (Ni = {}),
      Object.defineProperty(Ni, "passive", {
        get: function () {
          Id = !0;
        },
      }),
      L.addEventListener("test", Ni, Ni),
      L.removeEventListener("test", Ni, Ni);
  } catch {
    Id = !1;
  }
var Ni;
function AP(e, t, n, r, i, o, s, a, l) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (u) {
    this.onError(u);
  }
}
var vs = !1,
  Nl = null,
  $l = !1,
  Fd = null,
  DP = {
    onError: function (e) {
      (vs = !0), (Nl = e);
    },
  };
function VP(e, t, n, r, i, o, s, a, l) {
  (vs = !1), (Nl = null), AP.apply(DP, arguments);
}
function BP(e, t, n, r, i, o, s, a, l) {
  if ((VP.apply(this, arguments), vs)) {
    if (!vs) throw Error(F(198));
    var c = Nl;
    (vs = !1), (Nl = null), $l || (($l = !0), (Fd = c));
  }
}
function vi(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), 4098 & t.flags && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function ib(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function $y(e) {
  if (vi(e) !== e) throw Error(F(188));
}
function HP(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = vi(e)), t === null)) throw Error(F(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return $y(i), e;
        if (o === r) return $y(i), t;
        o = o.sibling;
      }
      throw Error(F(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, a = i.child; a; ) {
        if (a === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (a === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = o.child; a; ) {
          if (a === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (a === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(F(189));
      }
    }
    if (n.alternate !== r) throw Error(F(190));
  }
  if (n.tag !== 3) throw Error(F(188));
  return n.stateNode.current === n ? e : t;
}
function ob(e) {
  return (e = HP(e)), e !== null ? sb(e) : null;
}
function sb(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = sb(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ab = Dt.unstable_scheduleCallback,
  Wy = Dt.unstable_cancelCallback,
  zP = Dt.unstable_shouldYield,
  NP = Dt.unstable_requestPaint,
  Ae = Dt.unstable_now,
  $P = Dt.unstable_getCurrentPriorityLevel,
  hh = Dt.unstable_ImmediatePriority,
  lb = Dt.unstable_UserBlockingPriority,
  Wl = Dt.unstable_NormalPriority,
  WP = Dt.unstable_LowPriority,
  cb = Dt.unstable_IdlePriority,
  uc = null,
  Rn = null;
function jP(e) {
  if (Rn && typeof Rn.onCommitFiberRoot == "function")
    try {
      Rn.onCommitFiberRoot(uc, e, void 0, (128 & e.current.flags) === 128);
    } catch {}
}
var dn = Math.clz32 ? Math.clz32 : GP,
  UP = Math.log,
  XP = Math.LN2;
function GP(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((UP(e) / XP) | 0)) | 0;
}
var pl = 64,
  ml = 4194304;
function hs(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return 4194240 & e;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return 130023424 & e;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function jl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = 268435455 & n;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? (r = hs(a)) : ((o &= s), o !== 0 && (r = hs(o)));
  } else (s = n & ~i), s !== 0 ? (r = hs(s)) : o !== 0 && (r = hs(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (4194240 & o) !== 0))
  )
    return t;
  if ((4 & r && (r |= 16 & n), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - dn(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function YP(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function KP(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - dn(o),
      a = 1 << s,
      l = i[s];
    l === -1
      ? (a & n && !(a & r)) || (i[s] = YP(a, t))
      : l <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function Ld(e) {
  return (
    (e = -1073741825 & e.pendingLanes),
    e !== 0 ? e : 1073741824 & e ? 1073741824 : 0
  );
}
function ub() {
  var e = pl;
  return (pl <<= 1), !(4194240 & pl) && (pl = 64), e;
}
function Qf(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ns(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - dn(t)),
    (e[t] = n);
}
function qP(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - dn(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function ph(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - dn(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var le = 0;
function fb(e) {
  return (e &= -e), 1 < e ? (4 < e ? (268435455 & e ? 16 : 536870912) : 4) : 1;
}
var db,
  mh,
  hb,
  pb,
  mb,
  _d = !1,
  vl = [],
  Sr = null,
  wr = null,
  Cr = null,
  Rs = new Map(),
  Ps = new Map(),
  gr = [],
  QP =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function jy(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Sr = null;
      break;
    case "dragenter":
    case "dragleave":
      wr = null;
      break;
    case "mouseover":
    case "mouseout":
      Cr = null;
      break;
    case "pointerover":
    case "pointerout":
      Rs.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ps.delete(t.pointerId);
  }
}
function is(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Ws(t)), t !== null && mh(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function ZP(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Sr = is(Sr, e, t, n, r, i)), !0;
    case "dragenter":
      return (wr = is(wr, e, t, n, r, i)), !0;
    case "mouseover":
      return (Cr = is(Cr, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Rs.set(o, is(Rs.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), Ps.set(o, is(Ps.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function vb(e) {
  var t = oi(e.target);
  if (t !== null) {
    var n = vi(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ib(n)), t !== null)) {
          (e.blockedOn = t),
            mb(e.priority, function () {
              hb(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Fl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Md(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n !== null)
      return (t = Ws(n)), t !== null && mh(t), (e.blockedOn = n), !1;
    n = e.nativeEvent;
    var r = new n.constructor(n.type, n);
    (Rd = r), n.target.dispatchEvent(r), (Rd = null), t.shift();
  }
  return !0;
}
function Uy(e, t, n) {
  Fl(e) && n.delete(t);
}
function JP() {
  (_d = !1),
    Sr !== null && Fl(Sr) && (Sr = null),
    wr !== null && Fl(wr) && (wr = null),
    Cr !== null && Fl(Cr) && (Cr = null),
    Rs.forEach(Uy),
    Ps.forEach(Uy);
}
function os(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    _d ||
      ((_d = !0),
      Dt.unstable_scheduleCallback(Dt.unstable_NormalPriority, JP)));
}
function Is(e) {
  function t(i) {
    return os(i, e);
  }
  if (0 < vl.length) {
    os(vl[0], e);
    for (var n = 1; n < vl.length; n++) {
      var r = vl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Sr !== null && os(Sr, e),
      wr !== null && os(wr, e),
      Cr !== null && os(Cr, e),
      Rs.forEach(t),
      Ps.forEach(t),
      n = 0;
    n < gr.length;
    n++
  )
    (r = gr[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < gr.length && ((n = gr[0]), n.blockedOn === null); )
    vb(n), n.blockedOn === null && gr.shift();
}
var io = tr.ReactCurrentBatchConfig,
  Ul = !0;
function eI(e, t, n, r) {
  var i = le,
    o = io.transition;
  io.transition = null;
  try {
    (le = 1), vh(e, t, n, r);
  } finally {
    (le = i), (io.transition = o);
  }
}
function tI(e, t, n, r) {
  var i = le,
    o = io.transition;
  io.transition = null;
  try {
    (le = 4), vh(e, t, n, r);
  } finally {
    (le = i), (io.transition = o);
  }
}
function vh(e, t, n, r) {
  if (Ul) {
    var i = Md(e, t, n, r);
    if (i === null) id(e, t, r, Xl, n), jy(e, r);
    else if (ZP(i, e, t, n, r)) r.stopPropagation();
    else if ((jy(e, r), 4 & t && -1 < QP.indexOf(e))) {
      for (; i !== null; ) {
        var o = Ws(i);
        if (
          (o !== null && db(o),
          (o = Md(e, t, n, r)),
          o === null && id(e, t, r, Xl, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else id(e, t, r, null, n);
  }
}
var Xl = null;
function Md(e, t, n, r) {
  if (((Xl = null), (e = dh(r)), (e = oi(e)), e !== null))
    if (((t = vi(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ib(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Xl = e), null;
}
function gb(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch ($P()) {
        case hh:
          return 1;
        case lb:
          return 4;
        case Wl:
        case WP:
          return 16;
        case cb:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var br = null,
  gh = null,
  Ll = null;
function yb() {
  if (Ll) return Ll;
  var e,
    t,
    n = gh,
    r = n.length,
    i = "value" in br ? br.value : br.textContent,
    o = i.length;
  for (e = 0; e < r && n[e] === i[e]; e++);
  var s = r - e;
  for (t = 1; t <= s && n[r - t] === i[o - t]; t++);
  return (Ll = i.slice(e, 1 < t ? 1 - t : void 0));
}
function _l(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function gl() {
  return !0;
}
function Xy() {
  return !1;
}
function Bt(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? gl
        : Xy),
      (this.isPropagationStopped = Xy),
      this
    );
  }
  return (
    ke(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = gl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = gl));
      },
      persist: function () {},
      isPersistent: gl,
    }),
    t
  );
}
var Zf,
  Jf,
  ss,
  mo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  yh = Bt(mo),
  $s = ke({}, mo, { view: 0, detail: 0 }),
  nI = Bt($s),
  fc = ke({}, $s, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: bh,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== ss &&
            (ss && e.type === "mousemove"
              ? ((Zf = e.screenX - ss.screenX), (Jf = e.screenY - ss.screenY))
              : (Jf = Zf = 0),
            (ss = e)),
          Zf);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Jf;
    },
  }),
  Gy = Bt(fc),
  rI = ke({}, fc, { dataTransfer: 0 }),
  iI = Bt(rI),
  oI = ke({}, $s, { relatedTarget: 0 }),
  ed = Bt(oI),
  sI = ke({}, mo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  aI = Bt(sI),
  lI = ke({}, mo, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : L.clipboardData;
    },
  }),
  cI = Bt(lI),
  uI = ke({}, mo, { data: 0 }),
  Yy = Bt(uI),
  fI = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  dI = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  hI = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function pI(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : !!(e = hI[e]) && !!t[e];
}
function bh() {
  return pI;
}
var mI = ke({}, $s, {
    key: function (e) {
      if (e.key) {
        var t = fI[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = _l(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? dI[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: bh,
    charCode: function (e) {
      return e.type === "keypress" ? _l(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? _l(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  vI = Bt(mI),
  gI = ke({}, fc, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Ky = Bt(gI),
  yI = ke({}, $s, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: bh,
  }),
  bI = Bt(yI),
  xI = ke({}, mo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  SI = Bt(xI),
  wI = ke({}, fc, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  CI = Bt(wI),
  kI = [9, 13, 27, 32],
  xh = Qn && "CompositionEvent" in L,
  gs = null;
Qn && "documentMode" in document && (gs = document.documentMode);
var TI = Qn && "TextEvent" in L && !gs,
  bb = Qn && (!xh || (gs && 8 < gs && 11 >= gs)),
  qy = String.fromCharCode(32),
  Qy = !1;
function xb(e, t) {
  switch (e) {
    case "keyup":
      return kI.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Sb(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Ui = !1;
function EI(e, t) {
  switch (e) {
    case "compositionend":
      return Sb(t);
    case "keypress":
      return t.which !== 32 ? null : ((Qy = !0), qy);
    case "textInput":
      return (e = t.data), e === qy && Qy ? null : e;
    default:
      return null;
  }
}
function RI(e, t) {
  if (Ui)
    return e === "compositionend" || (!xh && xb(e, t))
      ? ((e = yb()), (Ll = gh = br = null), (Ui = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return bb && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var PI = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Zy(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!PI[e.type] : t === "textarea";
}
function wb(e, t, n, r) {
  J0(r),
    (t = Gl(t, "onChange")),
    0 < t.length &&
      ((n = new yh("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var ys = null,
  Fs = null;
function II(e) {
  Mb(e, 0);
}
function dc(e) {
  var t = Yi(e);
  if (X0(t)) return e;
}
function FI(e, t) {
  if (e === "change") return t;
}
var Cb = !1;
Qn &&
  (Qn
    ? ((bl = "oninput" in document),
      bl ||
        ((td = document.createElement("div")),
        td.setAttribute("oninput", "return;"),
        (bl = typeof td.oninput == "function")),
      (yl = bl))
    : (yl = !1),
  (Cb = yl && (!document.documentMode || 9 < document.documentMode)));
var yl, bl, td;
function Jy() {
  ys && (ys.detachEvent("onpropertychange", kb), (Fs = ys = null));
}
function kb(e) {
  if (e.propertyName === "value" && dc(Fs)) {
    var t = [];
    wb(t, Fs, e, dh(e)), rb(II, t);
  }
}
function LI(e, t, n) {
  e === "focusin"
    ? (Jy(), (ys = t), (Fs = n), ys.attachEvent("onpropertychange", kb))
    : e === "focusout" && Jy();
}
function _I(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return dc(Fs);
}
function MI(e, t) {
  if (e === "click") return dc(t);
}
function OI(e, t) {
  if (e === "input" || e === "change") return dc(t);
}
function AI(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var pn = typeof Object.is == "function" ? Object.is : AI;
function Ls(e, t) {
  if (pn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!md.call(t, i) || !pn(e[i], t[i])) return !1;
  }
  return !0;
}
function e0(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function t0(e, t) {
  var n = e0(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = e0(n);
  }
}
function Tb(e, t) {
  return (
    !(!e || !t) &&
    (e === t ||
      ((!e || e.nodeType !== 3) &&
        (t && t.nodeType === 3
          ? Tb(e, t.parentNode)
          : "contains" in e
          ? e.contains(t)
          : !!e.compareDocumentPosition &&
            !!(16 & e.compareDocumentPosition(t)))))
  );
}
function Eb() {
  for (var e = L, t = zl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (!n) break;
    (e = t.contentWindow), (t = zl(e.document));
  }
  return t;
}
function Sh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function DI(e) {
  var t = Eb(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Tb(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Sh(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || L),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = t0(n, o));
        var s = t0(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var VI = Qn && "documentMode" in document && 11 >= document.documentMode,
  Xi = null,
  Od = null,
  bs = null,
  Ad = !1;
function n0(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ad ||
    Xi == null ||
    Xi !== zl(r) ||
    ((r = Xi),
    "selectionStart" in r && Sh(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          L
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (bs && Ls(bs, r)) ||
      ((bs = r),
      (r = Gl(Od, "onSelect")),
      0 < r.length &&
        ((t = new yh("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Xi))));
}
function xl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Gi = {
    animationend: xl("Animation", "AnimationEnd"),
    animationiteration: xl("Animation", "AnimationIteration"),
    animationstart: xl("Animation", "AnimationStart"),
    transitionend: xl("Transition", "TransitionEnd"),
  },
  nd = {},
  Rb = {};
Qn &&
  ((Rb = document.createElement("div").style),
  "AnimationEvent" in L ||
    (delete Gi.animationend.animation,
    delete Gi.animationiteration.animation,
    delete Gi.animationstart.animation),
  "TransitionEvent" in L || delete Gi.transitionend.transition);
function hc(e) {
  if (nd[e]) return nd[e];
  if (!Gi[e]) return e;
  var t,
    n = Gi[e];
  for (t in n) if (n.hasOwnProperty(t) && t in Rb) return (nd[e] = n[t]);
  return e;
}
var Pb = hc("animationend"),
  Ib = hc("animationiteration"),
  Fb = hc("animationstart"),
  Lb = hc("transitionend"),
  _b = new Map(),
  r0 =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Lr(e, t) {
  _b.set(e, t), mi(t, [e]);
}
for (Sl = 0; Sl < r0.length; Sl++)
  (wl = r0[Sl]),
    (i0 = wl.toLowerCase()),
    (o0 = wl[0].toUpperCase() + wl.slice(1)),
    Lr(i0, "on" + o0);
var wl, i0, o0, Sl;
Lr(Pb, "onAnimationEnd");
Lr(Ib, "onAnimationIteration");
Lr(Fb, "onAnimationStart");
Lr("dblclick", "onDoubleClick");
Lr("focusin", "onFocus");
Lr("focusout", "onBlur");
Lr(Lb, "onTransitionEnd");
ao("onMouseEnter", ["mouseout", "mouseover"]);
ao("onMouseLeave", ["mouseout", "mouseover"]);
ao("onPointerEnter", ["pointerout", "pointerover"]);
ao("onPointerLeave", ["pointerout", "pointerover"]);
mi(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
mi(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
mi("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
mi(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
mi(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
mi(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var ps =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  BI = new Set("cancel close invalid load scroll toggle".split(" ").concat(ps));
function s0(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), BP(r, t, void 0, e), (e.currentTarget = null);
}
function Mb(e, t) {
  t = (4 & t) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), l !== o && i.isPropagationStopped())) break e;
          s0(i, a, c), (o = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            l !== o && i.isPropagationStopped())
          )
            break e;
          s0(i, a, c), (o = l);
        }
    }
  }
  if ($l) throw ((e = Fd), ($l = !1), (Fd = null), e);
}
function pe(e, t) {
  var n = t[zd];
  n === void 0 && (n = t[zd] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ob(t, e, 2, !1), n.add(r));
}
function rd(e, t, n) {
  var r = 0;
  t && (r |= 4), Ob(n, e, r, t);
}
var Cl = "_reactListening" + Math.random().toString(36).slice(2);
function _s(e) {
  if (!e[Cl]) {
    (e[Cl] = !0),
      N0.forEach(function (n) {
        n !== "selectionchange" && (BI.has(n) || rd(n, !1, e), rd(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Cl] || ((t[Cl] = !0), rd("selectionchange", !1, t));
  }
}
function Ob(e, t, n, r) {
  switch (gb(t)) {
    case 1:
      var i = eI;
      break;
    case 4:
      i = tI;
      break;
    default:
      i = vh;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Id ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function id(e, t, n, r, i) {
  var o = r;
  if (!(1 & t) && !(2 & t) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = oi(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = o = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  rb(function () {
    var c = o,
      u = dh(n),
      f = [];
    e: {
      var d = _b.get(e);
      if (d !== void 0) {
        var h = yh,
          g = e;
        switch (e) {
          case "keypress":
            if (_l(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = vI;
            break;
          case "focusin":
            (g = "focus"), (h = ed);
            break;
          case "focusout":
            (g = "blur"), (h = ed);
            break;
          case "beforeblur":
          case "afterblur":
            h = ed;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = Gy;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = iI;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = bI;
            break;
          case Pb:
          case Ib:
          case Fb:
            h = aI;
            break;
          case Lb:
            h = SI;
            break;
          case "scroll":
            h = nI;
            break;
          case "wheel":
            h = CI;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = cI;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = Ky;
        }
        var y = (4 & t) !== 0,
          x = !y && e === "scroll",
          p = y ? (d !== null ? d + "Capture" : null) : d;
        y = [];
        for (var m, v = c; v !== null; ) {
          m = v;
          var b = m.stateNode;
          if (
            (m.tag === 5 &&
              b !== null &&
              ((m = b),
              p !== null && ((b = Es(v, p)), b != null && y.push(Ms(v, b, m)))),
            x)
          )
            break;
          v = v.return;
        }
        0 < y.length &&
          ((d = new h(d, g, null, n, u)), f.push({ event: d, listeners: y }));
      }
    }
    if (!(7 & t)) {
      if (
        ((d = e === "mouseover" || e === "pointerover"),
        (h = e === "mouseout" || e === "pointerout"),
        (!d ||
          n === Rd ||
          !(g = n.relatedTarget || n.fromElement) ||
          (!oi(g) && !g[Zn])) &&
          (h || d) &&
          ((d =
            u.window === u
              ? u
              : (d = u.ownerDocument)
              ? d.defaultView || d.parentWindow
              : L),
          h
            ? ((g = n.relatedTarget || n.toElement),
              (h = c),
              (g = g ? oi(g) : null),
              g !== null &&
                ((x = vi(g)), g !== x || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((h = null), (g = c)),
          h !== g))
      ) {
        if (
          ((y = Gy),
          (b = "onMouseLeave"),
          (p = "onMouseEnter"),
          (v = "mouse"),
          (e !== "pointerout" && e !== "pointerover") ||
            ((y = Ky),
            (b = "onPointerLeave"),
            (p = "onPointerEnter"),
            (v = "pointer")),
          (x = h == null ? d : Yi(h)),
          (m = g == null ? d : Yi(g)),
          (d = new y(b, v + "leave", h, n, u)),
          (d.target = x),
          (d.relatedTarget = m),
          (b = null),
          oi(u) === c &&
            ((y = new y(p, v + "enter", g, n, u)),
            (y.target = m),
            (y.relatedTarget = x),
            (b = y)),
          (x = b),
          h && g)
        )
          e: {
            for (y = h, p = g, v = 0, m = y; m; m = $i(m)) v++;
            for (m = 0, b = p; b; b = $i(b)) m++;
            for (; 0 < v - m; ) (y = $i(y)), v--;
            for (; 0 < m - v; ) (p = $i(p)), m--;
            for (; v--; ) {
              if (y === p || (p !== null && y === p.alternate)) break e;
              (y = $i(y)), (p = $i(p));
            }
            y = null;
          }
        else y = null;
        h !== null && a0(f, d, h, y, !1),
          g !== null && x !== null && a0(f, x, g, y, !0);
      }
      if (
        ((d = c ? Yi(c) : L),
        (h = d.nodeName && d.nodeName.toLowerCase()),
        h === "select" || (h === "input" && d.type === "file"))
      )
        var C = FI;
      else if (Zy(d))
        if (Cb) C = OI;
        else {
          C = _I;
          var w = LI;
        }
      else
        (h = d.nodeName) &&
          h.toLowerCase() === "input" &&
          (d.type === "checkbox" || d.type === "radio") &&
          (C = MI);
      switch (
        (C && (C = C(e, c))
          ? wb(f, C, n, u)
          : (w && w(e, d, c),
            e === "focusout" &&
              (w = d._wrapperState) &&
              w.controlled &&
              d.type === "number" &&
              wd(d, "number", d.value)),
        (w = c ? Yi(c) : L),
        e)
      ) {
        case "focusin":
          (Zy(w) || w.contentEditable === "true") &&
            ((Xi = w), (Od = c), (bs = null));
          break;
        case "focusout":
          bs = Od = Xi = null;
          break;
        case "mousedown":
          Ad = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ad = !1), n0(f, n, u);
          break;
        case "selectionchange":
          if (VI) break;
        case "keydown":
        case "keyup":
          n0(f, n, u);
      }
      var k;
      if (xh)
        e: {
          switch (e) {
            case "compositionstart":
              var E = "onCompositionStart";
              break e;
            case "compositionend":
              E = "onCompositionEnd";
              break e;
            case "compositionupdate":
              E = "onCompositionUpdate";
              break e;
          }
          E = void 0;
        }
      else
        Ui
          ? xb(e, n) && (E = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E &&
        (bb &&
          n.locale !== "ko" &&
          (Ui || E !== "onCompositionStart"
            ? E === "onCompositionEnd" && Ui && (k = yb())
            : ((br = u),
              (gh = "value" in br ? br.value : br.textContent),
              (Ui = !0))),
        (w = Gl(c, E)),
        0 < w.length &&
          ((E = new Yy(E, e, null, n, u)),
          f.push({ event: E, listeners: w }),
          k ? (E.data = k) : ((k = Sb(n)), k !== null && (E.data = k)))),
        (k = TI ? EI(e, n) : RI(e, n)) &&
          ((c = Gl(c, "onBeforeInput")),
          0 < c.length &&
            ((u = new Yy("onBeforeInput", "beforeinput", null, n, u)),
            f.push({ event: u, listeners: c }),
            (u.data = k)));
    }
    Mb(f, t);
  });
}
function Ms(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Gl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Es(e, n)),
      o != null && r.unshift(Ms(e, o, i)),
      (o = Es(e, t)),
      o != null && r.push(Ms(e, o, i))),
      (e = e.return);
  }
  return r;
}
function $i(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function a0(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      c = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      c !== null &&
      ((a = c),
      i
        ? ((l = Es(n, o)), l != null && s.unshift(Ms(n, l, a)))
        : i || ((l = Es(n, o)), l != null && s.push(Ms(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var HI = /\r\n?/g,
  zI = /\u0000|\uFFFD/g;
function l0(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      HI,
      `
`
    )
    .replace(zI, "");
}
function kl(e, t, n) {
  if (((t = l0(t)), l0(e) !== t && n)) throw Error(F(425));
}
function Yl() {}
var Dd = null,
  Vd = null;
function Bd(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Hd = typeof setTimeout == "function" ? setTimeout : void 0,
  NI = typeof clearTimeout == "function" ? clearTimeout : void 0,
  c0 = typeof Promise == "function" ? Promise : void 0,
  $I =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof c0 < "u"
      ? function (e) {
          return c0.resolve(null).then(e).catch(WI);
        }
      : Hd;
function WI(e) {
  setTimeout(function () {
    throw e;
  });
}
function od(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Is(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Is(t);
}
function kr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function u0(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var vo = Math.random().toString(36).slice(2),
  En = "__reactFiber$" + vo,
  Os = "__reactProps$" + vo,
  Zn = "__reactContainer$" + vo,
  zd = "__reactEvents$" + vo,
  jI = "__reactListeners$" + vo,
  UI = "__reactHandles$" + vo;
function oi(e) {
  var t = e[En];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Zn] || n[En])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = u0(e); e !== null; ) {
          if ((n = e[En])) return n;
          e = u0(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Ws(e) {
  return (
    (e = e[En] || e[Zn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Yi(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(F(33));
}
function pc(e) {
  return e[Os] || null;
}
var Nd = [],
  Ki = -1;
function _r(e) {
  return { current: e };
}
function me(e) {
  0 > Ki || ((e.current = Nd[Ki]), (Nd[Ki] = null), Ki--);
}
function de(e, t) {
  Ki++, (Nd[Ki] = e.current), (e.current = t);
}
var Fr = {},
  at = _r(Fr),
  Et = _r(!1),
  ui = Fr;
function lo(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Fr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i,
    o = {};
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Rt(e) {
  return (e = e.childContextTypes), e != null;
}
function Kl() {
  me(Et), me(at);
}
function f0(e, t, n) {
  if (at.current !== Fr) throw Error(F(168));
  de(at, t), de(Et, n);
}
function Ab(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(F(108, LP(e) || "Unknown", i));
  return ke({}, n, r);
}
function ql(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Fr),
    (ui = at.current),
    de(at, e),
    de(Et, Et.current),
    !0
  );
}
function d0(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(F(169));
  n
    ? ((e = Ab(e, t, ui)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      me(Et),
      me(at),
      de(at, e))
    : me(Et),
    de(Et, n);
}
var Gn = null,
  mc = !1,
  sd = !1;
function Db(e) {
  Gn === null ? (Gn = [e]) : Gn.push(e);
}
function XI(e) {
  (mc = !0), Db(e);
}
function Mr() {
  if (!sd && Gn !== null) {
    sd = !0;
    var e = 0,
      t = le;
    try {
      var n = Gn;
      for (le = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Gn = null), (mc = !1);
    } catch (i) {
      throw (Gn !== null && (Gn = Gn.slice(e + 1)), ab(hh, Mr), i);
    } finally {
      (le = t), (sd = !1);
    }
  }
  return null;
}
var qi = [],
  Qi = 0,
  Ql = null,
  Zl = 0,
  Kt = [],
  qt = 0,
  fi = null,
  Yn = 1,
  Kn = "";
function ri(e, t) {
  (qi[Qi++] = Zl), (qi[Qi++] = Ql), (Ql = e), (Zl = t);
}
function Vb(e, t, n) {
  (Kt[qt++] = Yn), (Kt[qt++] = Kn), (Kt[qt++] = fi), (fi = e);
  var r = Yn;
  e = Kn;
  var i = 32 - dn(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - dn(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (Yn = (1 << (32 - dn(t) + i)) | (n << i) | r),
      (Kn = o + e);
  } else (Yn = (1 << o) | (n << i) | r), (Kn = e);
}
function wh(e) {
  e.return !== null && (ri(e, 1), Vb(e, 1, 0));
}
function Ch(e) {
  for (; e === Ql; )
    (Ql = qi[--Qi]), (qi[Qi] = null), (Zl = qi[--Qi]), (qi[Qi] = null);
  for (; e === fi; )
    (fi = Kt[--qt]),
      (Kt[qt] = null),
      (Kn = Kt[--qt]),
      (Kt[qt] = null),
      (Yn = Kt[--qt]),
      (Kt[qt] = null);
}
var At = null,
  Ot = null,
  ye = !1,
  fn = null;
function Bb(e, t) {
  var n = Qt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function h0(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null && ((e.stateNode = t), (At = e), (Ot = kr(t.firstChild)), !0)
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null && ((e.stateNode = t), (At = e), (Ot = null), !0)
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null &&
          ((n = fi !== null ? { id: Yn, overflow: Kn } : null),
          (e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824,
          }),
          (n = Qt(18, null, null, 0)),
          (n.stateNode = t),
          (n.return = e),
          (e.child = n),
          (At = e),
          (Ot = null),
          !0)
      );
    default:
      return !1;
  }
}
function $d(e) {
  return (1 & e.mode) !== 0 && (128 & e.flags) === 0;
}
function Wd(e) {
  if (ye) {
    var t = Ot;
    if (t) {
      var n = t;
      if (!h0(e, t)) {
        if ($d(e)) throw Error(F(418));
        t = kr(n.nextSibling);
        var r = At;
        t && h0(e, t)
          ? Bb(r, n)
          : ((e.flags = (-4097 & e.flags) | 2), (ye = !1), (At = e));
      }
    } else {
      if ($d(e)) throw Error(F(418));
      (e.flags = (-4097 & e.flags) | 2), (ye = !1), (At = e);
    }
  }
}
function p0(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  At = e;
}
function Tl(e) {
  if (e !== At) return !1;
  if (!ye) return p0(e), (ye = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Bd(e.type, e.memoizedProps))),
    t && (t = Ot))
  ) {
    if ($d(e)) throw (Hb(), Error(F(418)));
    for (; t; ) Bb(e, t), (t = kr(t.nextSibling));
  }
  if ((p0(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(F(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ot = kr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ot = null;
    }
  } else Ot = At ? kr(e.stateNode.nextSibling) : null;
  return !0;
}
function Hb() {
  for (var e = Ot; e; ) e = kr(e.nextSibling);
}
function co() {
  (Ot = At = null), (ye = !1);
}
function kh(e) {
  fn === null ? (fn = [e]) : fn.push(e);
}
var GI = tr.ReactCurrentBatchConfig;
function cn(e, t) {
  if (e && e.defaultProps) {
    (t = ke({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Jl = _r(null),
  ec = null,
  Zi = null,
  Th = null;
function Eh() {
  Th = Zi = ec = null;
}
function Rh(e) {
  var t = Jl.current;
  me(Jl), (e._currentValue = t);
}
function jd(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function oo(e, t) {
  (ec = e),
    (Th = Zi = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Tt = !0), (e.firstContext = null));
}
function Jt(e) {
  var t = e._currentValue;
  if (Th !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Zi === null)) {
      if (ec === null) throw Error(F(308));
      (Zi = e), (ec.dependencies = { lanes: 0, firstContext: e });
    } else Zi = Zi.next = e;
  return t;
}
var si = null;
function Ph(e) {
  si === null ? (si = [e]) : si.push(e);
}
function zb(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Ph(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Jn(e, r)
  );
}
function Jn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var vr = !1;
function Ih(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Nb(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function qn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Tr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), 2 & ie)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Jn(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Ph(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Jn(e, n)
  );
}
function Ml(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (4194240 & n) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ph(e, n);
  }
}
function m0(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r === null || ((r = r.updateQueue), n !== r))
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  else {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
  }
}
function tc(e, t, n, r) {
  var i = e.updateQueue;
  vr = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      c = l.next;
    (l.next = null), s === null ? (o = c) : (s.next = c), (s = l);
    var u = e.alternate;
    u !== null &&
      ((u = u.updateQueue),
      (a = u.lastBaseUpdate),
      a !== s &&
        (a === null ? (u.firstBaseUpdate = c) : (a.next = c),
        (u.lastBaseUpdate = l)));
  }
  if (o !== null) {
    var f = i.baseState;
    (s = 0), (u = c = l = null), (a = o);
    do {
      var d = a.lane,
        h = a.eventTime;
      if ((r & d) === d) {
        u !== null &&
          (u = u.next =
            {
              eventTime: h,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var g = e,
            y = a;
          switch (((d = t), (h = n), y.tag)) {
            case 1:
              if (((g = y.payload), typeof g == "function")) {
                f = g.call(h, f, d);
                break e;
              }
              f = g;
              break e;
            case 3:
              g.flags = (-65537 & g.flags) | 128;
            case 0:
              if (
                ((g = y.payload),
                (d = typeof g == "function" ? g.call(h, f, d) : g),
                d == null)
              )
                break e;
              f = ke({}, f, d);
              break e;
            case 2:
              vr = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [a]) : d.push(a));
      } else
        (h = {
          eventTime: h,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          u === null ? ((c = u = h), (l = f)) : (u = u.next = h),
          (s |= d);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (d = a),
          (a = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (u === null && (l = f),
      (i.baseState = l),
      (i.firstBaseUpdate = c),
      (i.lastBaseUpdate = u),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (hi |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function v0(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(F(191, i));
        i.call(r);
      }
    }
}
var $b = new z0.Component().refs;
function Ud(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ke({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var vc = {
  isMounted: function (e) {
    return !!(e = e._reactInternals) && vi(e) === e;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = pt(),
      i = Rr(e),
      o = qn(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Tr(e, o, i)),
      t !== null && (hn(t, e, i, r), Ml(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = pt(),
      i = Rr(e),
      o = qn(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Tr(e, o, i)),
      t !== null && (hn(t, e, i, r), Ml(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = pt(),
      r = Rr(e),
      i = qn(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Tr(e, i, r)),
      t !== null && (hn(t, e, r, n), Ml(t, e, r));
  },
};
function g0(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : !t.prototype ||
        !t.prototype.isPureReactComponent ||
        !Ls(n, r) ||
        !Ls(i, o)
  );
}
function Wb(e, t, n) {
  var r = !1,
    i = Fr,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Jt(o))
      : ((i = Rt(t) ? ui : at.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? lo(e, i) : Fr)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = vc),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function y0(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && vc.enqueueReplaceState(t, t.state, null);
}
function Xd(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = $b), Ih(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = Jt(o))
    : ((o = Rt(t) ? ui : at.current), (i.context = lo(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Ud(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && vc.enqueueReplaceState(i, i.state, null),
      tc(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function as(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(F(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(F(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var a = i.refs;
            a === $b && (a = i.refs = {}),
              s === null ? delete a[o] : (a[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(F(284));
    if (!n._owner) throw Error(F(290, e));
  }
  return e;
}
function El(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      F(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function b0(e) {
  var t = e._init;
  return t(e._payload);
}
function jb(e) {
  function t(p, m) {
    if (e) {
      var v = p.deletions;
      v === null ? ((p.deletions = [m]), (p.flags |= 16)) : v.push(m);
    }
  }
  function n(p, m) {
    if (!e) return null;
    for (; m !== null; ) t(p, m), (m = m.sibling);
    return null;
  }
  function r(p, m) {
    for (p = new Map(); m !== null; )
      m.key !== null ? p.set(m.key, m) : p.set(m.index, m), (m = m.sibling);
    return p;
  }
  function i(p, m) {
    return (p = Pr(p, m)), (p.index = 0), (p.sibling = null), p;
  }
  function o(p, m, v) {
    return (
      (p.index = v),
      e
        ? ((v = p.alternate),
          v !== null
            ? ((v = v.index), v < m ? ((p.flags |= 2), m) : v)
            : ((p.flags |= 2), m))
        : ((p.flags |= 1048576), m)
    );
  }
  function s(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, m, v, b) {
    return m === null || m.tag !== 6
      ? ((m = hd(v, p.mode, b)), (m.return = p), m)
      : ((m = i(m, v)), (m.return = p), m);
  }
  function l(p, m, v, b) {
    var C = v.type;
    return C === ji
      ? u(p, m, v.props.children, b, v.key)
      : m !== null &&
        (m.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === mr &&
            b0(C) === m.type))
      ? ((b = i(m, v.props)), (b.ref = as(p, m, v)), (b.return = p), b)
      : ((b = Hl(v.type, v.key, v.props, null, p.mode, b)),
        (b.ref = as(p, m, v)),
        (b.return = p),
        b);
  }
  function c(p, m, v, b) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== v.containerInfo ||
      m.stateNode.implementation !== v.implementation
      ? ((m = pd(v, p.mode, b)), (m.return = p), m)
      : ((m = i(m, v.children || [])), (m.return = p), m);
  }
  function u(p, m, v, b, C) {
    return m === null || m.tag !== 7
      ? ((m = ci(v, p.mode, b, C)), (m.return = p), m)
      : ((m = i(m, v)), (m.return = p), m);
  }
  function f(p, m, v) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return (m = hd("" + m, p.mode, v)), (m.return = p), m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case fl:
          return (
            (v = Hl(m.type, m.key, m.props, null, p.mode, v)),
            (v.ref = as(p, null, m)),
            (v.return = p),
            v
          );
        case Wi:
          return (m = pd(m, p.mode, v)), (m.return = p), m;
        case mr:
          var b = m._init;
          return f(p, b(m._payload), v);
      }
      if (ds(m) || rs(m))
        return (m = ci(m, p.mode, v, null)), (m.return = p), m;
      El(p, m);
    }
    return null;
  }
  function d(p, m, v, b) {
    var C = m !== null ? m.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return C !== null ? null : a(p, m, "" + v, b);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case fl:
          return v.key === C ? l(p, m, v, b) : null;
        case Wi:
          return v.key === C ? c(p, m, v, b) : null;
        case mr:
          return (C = v._init), d(p, m, C(v._payload), b);
      }
      if (ds(v) || rs(v)) return C !== null ? null : u(p, m, v, b, null);
      El(p, v);
    }
    return null;
  }
  function h(p, m, v, b, C) {
    if ((typeof b == "string" && b !== "") || typeof b == "number")
      return (p = p.get(v) || null), a(m, p, "" + b, C);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case fl:
          return (p = p.get(b.key === null ? v : b.key) || null), l(m, p, b, C);
        case Wi:
          return (p = p.get(b.key === null ? v : b.key) || null), c(m, p, b, C);
        case mr:
          var w = b._init;
          return h(p, m, v, w(b._payload), C);
      }
      if (ds(b) || rs(b)) return (p = p.get(v) || null), u(m, p, b, C, null);
      El(m, b);
    }
    return null;
  }
  function g(p, m, v, b) {
    for (
      var C = null, w = null, k = m, E = (m = 0), P = null;
      k !== null && E < v.length;
      E++
    ) {
      k.index > E ? ((P = k), (k = null)) : (P = k.sibling);
      var I = d(p, k, v[E], b);
      if (I === null) {
        k === null && (k = P);
        break;
      }
      e && k && I.alternate === null && t(p, k),
        (m = o(I, m, E)),
        w === null ? (C = I) : (w.sibling = I),
        (w = I),
        (k = P);
    }
    if (E === v.length) return n(p, k), ye && ri(p, E), C;
    if (k === null) {
      for (; E < v.length; E++)
        (k = f(p, v[E], b)),
          k !== null &&
            ((m = o(k, m, E)), w === null ? (C = k) : (w.sibling = k), (w = k));
      return ye && ri(p, E), C;
    }
    for (k = r(p, k); E < v.length; E++)
      (P = h(k, p, E, v[E], b)),
        P !== null &&
          (e && P.alternate !== null && k.delete(P.key === null ? E : P.key),
          (m = o(P, m, E)),
          w === null ? (C = P) : (w.sibling = P),
          (w = P));
    return (
      e &&
        k.forEach(function (H) {
          return t(p, H);
        }),
      ye && ri(p, E),
      C
    );
  }
  function y(p, m, v, b) {
    var C = rs(v);
    if (typeof C != "function") throw Error(F(150));
    if (((v = C.call(v)), v == null)) throw Error(F(151));
    for (
      var w = (C = null), k = m, E = (m = 0), P = null, I = v.next();
      k !== null && !I.done;
      E++, I = v.next()
    ) {
      k.index > E ? ((P = k), (k = null)) : (P = k.sibling);
      var H = d(p, k, I.value, b);
      if (H === null) {
        k === null && (k = P);
        break;
      }
      e && k && H.alternate === null && t(p, k),
        (m = o(H, m, E)),
        w === null ? (C = H) : (w.sibling = H),
        (w = H),
        (k = P);
    }
    if (I.done) return n(p, k), ye && ri(p, E), C;
    if (k === null) {
      for (; !I.done; E++, I = v.next())
        (I = f(p, I.value, b)),
          I !== null &&
            ((m = o(I, m, E)), w === null ? (C = I) : (w.sibling = I), (w = I));
      return ye && ri(p, E), C;
    }
    for (k = r(p, k); !I.done; E++, I = v.next())
      (I = h(k, p, E, I.value, b)),
        I !== null &&
          (e && I.alternate !== null && k.delete(I.key === null ? E : I.key),
          (m = o(I, m, E)),
          w === null ? (C = I) : (w.sibling = I),
          (w = I));
    return (
      e &&
        k.forEach(function (_) {
          return t(p, _);
        }),
      ye && ri(p, E),
      C
    );
  }
  function x(p, m, v, b) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === ji &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case fl:
          e: {
            for (var C = v.key, w = m; w !== null; ) {
              if (w.key === C) {
                if (((C = v.type), C === ji)) {
                  if (w.tag === 7) {
                    n(p, w.sibling),
                      (m = i(w, v.props.children)),
                      (m.return = p),
                      (p = m);
                    break e;
                  }
                } else if (
                  w.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === mr &&
                    b0(C) === w.type)
                ) {
                  n(p, w.sibling),
                    (m = i(w, v.props)),
                    (m.ref = as(p, w, v)),
                    (m.return = p),
                    (p = m);
                  break e;
                }
                n(p, w);
                break;
              }
              t(p, w), (w = w.sibling);
            }
            v.type === ji
              ? ((m = ci(v.props.children, p.mode, b, v.key)),
                (m.return = p),
                (p = m))
              : ((b = Hl(v.type, v.key, v.props, null, p.mode, b)),
                (b.ref = as(p, m, v)),
                (b.return = p),
                (p = b));
          }
          return s(p);
        case Wi:
          e: {
            for (w = v.key; m !== null; ) {
              if (m.key === w) {
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === v.containerInfo &&
                  m.stateNode.implementation === v.implementation
                ) {
                  n(p, m.sibling),
                    (m = i(m, v.children || [])),
                    (m.return = p),
                    (p = m);
                  break e;
                }
                n(p, m);
                break;
              }
              t(p, m), (m = m.sibling);
            }
            (m = pd(v, p.mode, b)), (m.return = p), (p = m);
          }
          return s(p);
        case mr:
          return (w = v._init), x(p, m, w(v._payload), b);
      }
      if (ds(v)) return g(p, m, v, b);
      if (rs(v)) return y(p, m, v, b);
      El(p, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        m !== null && m.tag === 6
          ? (n(p, m.sibling), (m = i(m, v)), (m.return = p), (p = m))
          : (n(p, m), (m = hd(v, p.mode, b)), (m.return = p), (p = m)),
        s(p))
      : n(p, m);
  }
  return x;
}
var uo = jb(!0),
  Ub = jb(!1),
  js = {},
  Pn = _r(js),
  As = _r(js),
  Ds = _r(js);
function ai(e) {
  if (e === js) throw Error(F(174));
  return e;
}
function Fh(e, t) {
  switch ((de(Ds, t), de(As, e), de(Pn, js), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : kd(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = kd(t, e));
  }
  me(Pn), de(Pn, t);
}
function fo() {
  me(Pn), me(As), me(Ds);
}
function Xb(e) {
  ai(Ds.current);
  var t = ai(Pn.current),
    n = kd(t, e.type);
  t !== n && (de(As, e), de(Pn, n));
}
function Lh(e) {
  As.current === e && (me(Pn), me(As));
}
var we = _r(0);
function nc(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (128 & t.flags) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ad = [];
function _h() {
  for (var e = 0; e < ad.length; e++)
    ad[e]._workInProgressVersionPrimary = null;
  ad.length = 0;
}
var Ol = tr.ReactCurrentDispatcher,
  ld = tr.ReactCurrentBatchConfig,
  di = 0,
  Ce = null,
  Ne = null,
  Ue = null,
  rc = !1,
  xs = !1,
  Vs = 0,
  YI = 0;
function it() {
  throw Error(F(321));
}
function Mh(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!pn(e[n], t[n])) return !1;
  return !0;
}
function Oh(e, t, n, r, i, o) {
  if (
    ((di = o),
    (Ce = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ol.current = e === null || e.memoizedState === null ? ZI : JI),
    (e = n(r, i)),
    xs)
  ) {
    o = 0;
    do {
      if (((xs = !1), (Vs = 0), 25 <= o)) throw Error(F(301));
      (o += 1),
        (Ue = Ne = null),
        (t.updateQueue = null),
        (Ol.current = eF),
        (e = n(r, i));
    } while (xs);
  }
  if (
    ((Ol.current = ic),
    (t = Ne !== null && Ne.next !== null),
    (di = 0),
    (Ue = Ne = Ce = null),
    (rc = !1),
    t)
  )
    throw Error(F(300));
  return e;
}
function Ah() {
  var e = Vs !== 0;
  return (Vs = 0), e;
}
function Tn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ue === null ? (Ce.memoizedState = Ue = e) : (Ue = Ue.next = e), Ue;
}
function en() {
  if (Ne === null) {
    var e = Ce.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ne.next;
  var t = Ue === null ? Ce.memoizedState : Ue.next;
  if (t !== null) (Ue = t), (Ne = e);
  else {
    if (e === null) throw Error(F(310));
    (Ne = e),
      (e = {
        memoizedState: Ne.memoizedState,
        baseState: Ne.baseState,
        baseQueue: Ne.baseQueue,
        queue: Ne.queue,
        next: null,
      }),
      Ue === null ? (Ce.memoizedState = Ue = e) : (Ue = Ue.next = e);
  }
  return Ue;
}
function Bs(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function cd(e) {
  var t = en(),
    n = t.queue;
  if (n === null) throw Error(F(311));
  n.lastRenderedReducer = e;
  var r = Ne,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      c = o;
    do {
      var u = c.lane;
      if ((di & u) === u)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var f = {
          lane: u,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        l === null ? ((a = l = f), (s = r)) : (l = l.next = f),
          (Ce.lanes |= u),
          (hi |= u);
      }
      c = c.next;
    } while (c !== null && c !== o);
    l === null ? (s = r) : (l.next = a),
      pn(r, t.memoizedState) || (Tt = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (Ce.lanes |= o), (hi |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ud(e) {
  var t = en(),
    n = t.queue;
  if (n === null) throw Error(F(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    pn(o, t.memoizedState) || (Tt = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Gb() {}
function Yb(e, t) {
  var n = Ce,
    r = en(),
    i = t(),
    o = !pn(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Tt = !0)),
    (r = r.queue),
    Dh(Qb.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Ue !== null && 1 & Ue.memoizedState.tag))
  ) {
    if (
      ((n.flags |= 2048),
      Hs(9, qb.bind(null, n, r, i, t), void 0, null),
      Xe === null)
    )
      throw Error(F(349));
    30 & di || Kb(n, t, i);
  }
  return i;
}
function Kb(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Ce.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ce.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function qb(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Zb(t) && Jb(e);
}
function Qb(e, t, n) {
  return n(function () {
    Zb(t) && Jb(e);
  });
}
function Zb(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !pn(e, n);
  } catch {
    return !0;
  }
}
function Jb(e) {
  var t = Jn(e, 1);
  t !== null && hn(t, e, 1, -1);
}
function x0(e) {
  var t = Tn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Bs,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = QI.bind(null, Ce, e)),
    [t.memoizedState, e]
  );
}
function Hs(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Ce.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ce.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function ex() {
  return en().memoizedState;
}
function Al(e, t, n, r) {
  var i = Tn();
  (Ce.flags |= e),
    (i.memoizedState = Hs(1 | t, n, void 0, r === void 0 ? null : r));
}
function gc(e, t, n, r) {
  var i = en();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Ne !== null) {
    var s = Ne.memoizedState;
    if (((o = s.destroy), r !== null && Mh(r, s.deps))) {
      i.memoizedState = Hs(t, n, o, r);
      return;
    }
  }
  (Ce.flags |= e), (i.memoizedState = Hs(1 | t, n, o, r));
}
function S0(e, t) {
  return Al(8390656, 8, e, t);
}
function Dh(e, t) {
  return gc(2048, 8, e, t);
}
function tx(e, t) {
  return gc(4, 2, e, t);
}
function nx(e, t) {
  return gc(4, 4, e, t);
}
function rx(e, t) {
  return typeof t == "function"
    ? ((e = e()),
      t(e),
      function () {
        t(null);
      })
    : t != null
    ? ((e = e()),
      (t.current = e),
      function () {
        t.current = null;
      })
    : void 0;
}
function ix(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), gc(4, 4, rx.bind(null, t, e), n)
  );
}
function Vh() {}
function ox(e, t) {
  var n = en();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Mh(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function sx(e, t) {
  var n = en();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Mh(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ax(e, t, n) {
  return 21 & di
    ? (pn(n, t) || ((n = ub()), (Ce.lanes |= n), (hi |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Tt = !0)), (e.memoizedState = n));
}
function KI(e, t) {
  var n = le;
  (le = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ld.transition;
  ld.transition = {};
  try {
    e(!1), t();
  } finally {
    (le = n), (ld.transition = r);
  }
}
function lx() {
  return en().memoizedState;
}
function qI(e, t, n) {
  var r = Rr(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    cx(e))
  )
    ux(t, n);
  else if (((n = zb(e, t, n, r)), n !== null)) {
    var i = pt();
    hn(n, e, r, i), fx(n, t, r);
  }
}
function QI(e, t, n) {
  var r = Rr(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (cx(e)) ux(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), pn(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), Ph(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {}
    (n = zb(e, t, i, r)),
      n !== null && ((i = pt()), hn(n, e, r, i), fx(n, t, r));
  }
}
function cx(e) {
  var t = e.alternate;
  return e === Ce || (t !== null && t === Ce);
}
function ux(e, t) {
  xs = rc = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function fx(e, t, n) {
  if (4194240 & n) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ph(e, n);
  }
}
var ic = {
    readContext: Jt,
    useCallback: it,
    useContext: it,
    useEffect: it,
    useImperativeHandle: it,
    useInsertionEffect: it,
    useLayoutEffect: it,
    useMemo: it,
    useReducer: it,
    useRef: it,
    useState: it,
    useDebugValue: it,
    useDeferredValue: it,
    useTransition: it,
    useMutableSource: it,
    useSyncExternalStore: it,
    useId: it,
    unstable_isNewReconciler: !1,
  },
  ZI = {
    readContext: Jt,
    useCallback: function (e, t) {
      return (Tn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Jt,
    useEffect: S0,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Al(4194308, 4, rx.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Al(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Al(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Tn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Tn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = qI.bind(null, Ce, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Tn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: x0,
    useDebugValue: Vh,
    useDeferredValue: function (e) {
      return (Tn().memoizedState = e);
    },
    useTransition: function () {
      var e = x0(!1),
        t = e[0];
      return (e = KI.bind(null, e[1])), (Tn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Ce,
        i = Tn();
      if (ye) {
        if (n === void 0) throw Error(F(407));
        n = n();
      } else {
        if (((n = t()), Xe === null)) throw Error(F(349));
        30 & di || Kb(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        S0(Qb.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Hs(9, qb.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Tn(),
        t = Xe.identifierPrefix;
      if (ye) {
        var n = Kn,
          r = Yn;
        (n = (r & ~(1 << (32 - dn(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Vs++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = YI++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  JI = {
    readContext: Jt,
    useCallback: ox,
    useContext: Jt,
    useEffect: Dh,
    useImperativeHandle: ix,
    useInsertionEffect: tx,
    useLayoutEffect: nx,
    useMemo: sx,
    useReducer: cd,
    useRef: ex,
    useState: function () {
      return cd(Bs);
    },
    useDebugValue: Vh,
    useDeferredValue: function (e) {
      var t = en();
      return ax(t, Ne.memoizedState, e);
    },
    useTransition: function () {
      var e = cd(Bs)[0],
        t = en().memoizedState;
      return [e, t];
    },
    useMutableSource: Gb,
    useSyncExternalStore: Yb,
    useId: lx,
    unstable_isNewReconciler: !1,
  },
  eF = {
    readContext: Jt,
    useCallback: ox,
    useContext: Jt,
    useEffect: Dh,
    useImperativeHandle: ix,
    useInsertionEffect: tx,
    useLayoutEffect: nx,
    useMemo: sx,
    useReducer: ud,
    useRef: ex,
    useState: function () {
      return ud(Bs);
    },
    useDebugValue: Vh,
    useDeferredValue: function (e) {
      var t = en();
      return Ne === null ? (t.memoizedState = e) : ax(t, Ne.memoizedState, e);
    },
    useTransition: function () {
      var e = ud(Bs)[0],
        t = en().memoizedState;
      return [e, t];
    },
    useMutableSource: Gb,
    useSyncExternalStore: Yb,
    useId: lx,
    unstable_isNewReconciler: !1,
  };
function ho(e, t) {
  try {
    var n = "",
      r = t;
    do (n += FP(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function fd(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Gd(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var tF = typeof WeakMap == "function" ? WeakMap : Map;
function dx(e, t, n) {
  (n = qn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      sc || ((sc = !0), (nh = r)), Gd(e, t);
    }),
    n
  );
}
function hx(e, t, n) {
  (n = qn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Gd(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Gd(e, t),
          typeof r != "function" &&
            (Er === null ? (Er = new Set([this])) : Er.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function w0(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new tF();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = mF.bind(null, e, t, n)), t.then(e, e));
}
function C0(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t === null || t.dehydrated !== null)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function k0(e, t, n, r, i) {
  return 1 & e.mode
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = qn(-1, 1)), (t.tag = 2), Tr(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var nF = tr.ReactCurrentOwner,
  Tt = !1;
function ht(e, t, n, r) {
  t.child = e === null ? Ub(t, null, n, r) : uo(t, e.child, n, r);
}
function T0(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    oo(t, i),
    (r = Oh(e, t, n, r, o, i)),
    (n = Ah()),
    e !== null && !Tt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        er(e, t, i))
      : (ye && n && wh(t), (t.flags |= 1), ht(e, t, r, i), t.child)
  );
}
function E0(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Uh(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), px(e, t, o, r, i))
      : ((e = Hl(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Ls), n(s, r) && e.ref === t.ref)
    )
      return er(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Pr(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function px(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Ls(o, r) && e.ref === t.ref) {
      if (((Tt = !1), (t.pendingProps = r = o), (e.lanes & i) === 0))
        return (t.lanes = e.lanes), er(e, t, i);
      131072 & e.flags && (Tt = !0);
    }
  }
  return Yd(e, t, n, r, i);
}
function mx(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(1 & t.mode))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        de(eo, Mt),
        (Mt |= n);
    else {
      if (!(1073741824 & n))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          de(eo, Mt),
          (Mt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        de(eo, Mt),
        (Mt |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      de(eo, Mt),
      (Mt |= r);
  return ht(e, t, i, n), t.child;
}
function vx(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Yd(e, t, n, r, i) {
  var o = Rt(n) ? ui : at.current;
  return (
    (o = lo(t, o)),
    oo(t, i),
    (n = Oh(e, t, n, r, o, i)),
    (r = Ah()),
    e !== null && !Tt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        er(e, t, i))
      : (ye && r && wh(t), (t.flags |= 1), ht(e, t, n, i), t.child)
  );
}
function R0(e, t, n, r, i) {
  if (Rt(n)) {
    var o = !0;
    ql(t);
  } else o = !1;
  if ((oo(t, i), t.stateNode === null))
    Dl(e, t), Wb(t, n, r), Xd(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Jt(c))
      : ((c = Rt(n) ? ui : at.current), (c = lo(t, c)));
    var u = n.getDerivedStateFromProps,
      f =
        typeof u == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== c) && y0(t, s, r, c)),
      (vr = !1);
    var d = t.memoizedState;
    (s.state = d),
      tc(t, r, s, i),
      (l = t.memoizedState),
      a !== r || d !== l || Et.current || vr
        ? (typeof u == "function" && (Ud(t, n, u, r), (l = t.memoizedState)),
          (a = vr || g0(t, n, a, r, d, l, c))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = c),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Nb(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : cn(t.type, a)),
      (s.props = c),
      (f = t.pendingProps),
      (d = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = Jt(l))
        : ((l = Rt(n) ? ui : at.current), (l = lo(t, l)));
    var h = n.getDerivedStateFromProps;
    (u =
      typeof h == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== f || d !== l) && y0(t, s, r, l)),
      (vr = !1),
      (d = t.memoizedState),
      (s.state = d),
      tc(t, r, s, i);
    var g = t.memoizedState;
    a !== f || d !== g || Et.current || vr
      ? (typeof h == "function" && (Ud(t, n, h, r), (g = t.memoizedState)),
        (c = vr || g0(t, n, c, r, d, g, l) || !1)
          ? (u ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, g, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, g, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (s.props = r),
        (s.state = g),
        (s.context = l),
        (r = c))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Kd(e, t, n, r, o, i);
}
function Kd(e, t, n, r, i, o) {
  vx(e, t);
  var s = (128 & t.flags) !== 0;
  if (!r && !s) return i && d0(t, n, !1), er(e, t, o);
  (r = t.stateNode), (nF.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = uo(t, e.child, null, o)), (t.child = uo(t, null, a, o)))
      : ht(e, t, a, o),
    (t.memoizedState = r.state),
    i && d0(t, n, !0),
    t.child
  );
}
function gx(e) {
  var t = e.stateNode;
  t.pendingContext
    ? f0(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && f0(e, t.context, !1),
    Fh(e, t.containerInfo);
}
function P0(e, t, n, r, i) {
  return co(), kh(i), (t.flags |= 256), ht(e, t, n, r), t.child;
}
var qd = { dehydrated: null, treeContext: null, retryLane: 0 };
function Qd(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function yx(e, t, n) {
  var r,
    i = t.pendingProps,
    o = we.current,
    s = !1,
    a = (128 & t.flags) !== 0;
  if (
    ((r = a) || (r = (e === null || e.memoizedState !== null) && (2 & o) !== 0),
    r
      ? ((s = !0), (t.flags &= -129))
      : (e !== null && e.memoizedState === null) || (o |= 1),
    de(we, 1 & o),
    e === null)
  )
    return (
      Wd(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (1 & t.mode
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = i.children),
          (e = i.fallback),
          s
            ? ((i = t.mode),
              (s = t.child),
              (a = { mode: "hidden", children: a }),
              !(1 & i) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = a))
                : (s = xc(a, i, 0, null)),
              (e = ci(e, i, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Qd(n)),
              (t.memoizedState = qd),
              e)
            : Bh(t, a))
    );
  if (((o = e.memoizedState), o !== null && ((r = o.dehydrated), r !== null)))
    return rF(e, t, a, i, r, o, n);
  if (s) {
    (s = i.fallback), (a = t.mode), (o = e.child), (r = o.sibling);
    var l = { mode: "hidden", children: i.children };
    return (
      !(1 & a) && t.child !== o
        ? ((i = t.child),
          (i.childLanes = 0),
          (i.pendingProps = l),
          (t.deletions = null))
        : ((i = Pr(o, l)), (i.subtreeFlags = 14680064 & o.subtreeFlags)),
      r !== null ? (s = Pr(r, s)) : ((s = ci(s, a, n, null)), (s.flags |= 2)),
      (s.return = t),
      (i.return = t),
      (i.sibling = s),
      (t.child = i),
      (i = s),
      (s = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? Qd(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (s.memoizedState = a),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = qd),
      i
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (i = Pr(s, { mode: "visible", children: i.children })),
    !(1 & t.mode) && (i.lanes = n),
    (i.return = t),
    (i.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = i),
    (t.memoizedState = null),
    i
  );
}
function Bh(e, t) {
  return (
    (t = xc({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Rl(e, t, n, r) {
  return (
    r !== null && kh(r),
    uo(t, e.child, null, n),
    (e = Bh(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function rF(e, t, n, r, i, o, s) {
  if (n)
    return 256 & t.flags
      ? ((t.flags &= -257), (r = fd(Error(F(422)))), Rl(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = xc({ mode: "visible", children: r.children }, i, 0, null)),
        (o = ci(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        1 & t.mode && uo(t, e.child, null, s),
        (t.child.memoizedState = Qd(s)),
        (t.memoizedState = qd),
        o);
  if (!(1 & t.mode)) return Rl(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(F(419))), (r = fd(o, r, void 0)), Rl(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), Tt || a)) {
    if (((r = Xe), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), Jn(e, i), hn(r, e, i, -1));
    }
    return jh(), (r = fd(Error(F(421)))), Rl(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = vF.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ot = kr(i.nextSibling)),
      (At = t),
      (ye = !0),
      (fn = null),
      e !== null &&
        ((Kt[qt++] = Yn),
        (Kt[qt++] = Kn),
        (Kt[qt++] = fi),
        (Yn = e.id),
        (Kn = e.overflow),
        (fi = t)),
      (t = Bh(t, r.children)),
      (t.flags |= 4096),
      t);
}
function I0(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), jd(e.return, t, n);
}
function dd(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function bx(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((ht(e, t, r.children, n), (r = we.current), 2 & r))
    (r = (1 & r) | 2), (t.flags |= 128);
  else {
    if (e !== null && 128 & e.flags)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && I0(e, n, t);
        else if (e.tag === 19) I0(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((de(we, r), !(1 & t.mode))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && nc(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          dd(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && nc(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        dd(t, !0, n, null, o);
        break;
      case "together":
        dd(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Dl(e, t) {
  !(1 & t.mode) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function er(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (hi |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(F(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Pr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Pr(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function iF(e, t, n) {
  switch (t.tag) {
    case 3:
      gx(t), co();
      break;
    case 5:
      Xb(t);
      break;
    case 1:
      Rt(t.type) && ql(t);
      break;
    case 4:
      Fh(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      de(Jl, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (de(we, 1 & we.current), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? yx(e, t, n)
          : (de(we, 1 & we.current),
            (e = er(e, t, n)),
            e !== null ? e.sibling : null);
      de(we, 1 & we.current);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), 128 & e.flags)) {
        if (r) return bx(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        de(we, we.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), mx(e, t, n);
  }
  return er(e, t, n);
}
var xx, Zd, Sx, wx;
xx = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Zd = function () {};
Sx = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), ai(Pn.current);
    var o = null;
    switch (n) {
      case "input":
        (i = xd(e, i)), (r = xd(e, r)), (o = []);
        break;
      case "select":
        (i = ke({}, i, { value: void 0 })),
          (r = ke({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = Cd(e, i)), (r = Cd(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Yl);
    }
    Td(n, r);
    var s;
    n = null;
    for (c in i)
      if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
        if (c === "style") {
          var a = i[c];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (ks.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var l = r[c];
      if (
        ((a = i?.[c]),
        r.hasOwnProperty(c) && l !== a && (l != null || a != null))
      )
        if (c === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (o || (o = []), o.push(c, n)), (n = l);
        else
          c === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (o = o || []).push(c, l))
            : c === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (o = o || []).push(c, "" + l)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (ks.hasOwnProperty(c)
                ? (l != null && c === "onScroll" && pe("scroll", e),
                  o || a === l || (o = []))
                : (o = o || []).push(c, l));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
wx = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ls(e, t) {
  if (!ye)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ot(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= 14680064 & i.subtreeFlags),
        (r |= 14680064 & i.flags),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function oF(e, t, n) {
  var r = t.pendingProps;
  switch ((Ch(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ot(t), null;
    case 1:
      return Rt(t.type) && Kl(), ot(t), null;
    case 3:
      return (
        (r = t.stateNode),
        fo(),
        me(Et),
        me(at),
        _h(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e !== null && e.child !== null) ||
          (Tl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(256 & t.flags)) ||
              ((t.flags |= 1024), fn !== null && (oh(fn), (fn = null)))),
        Zd(e, t),
        ot(t),
        null
      );
    case 5:
      Lh(t);
      var i = ai(Ds.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Sx(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(F(166));
          return ot(t), null;
        }
        if (((e = ai(Pn.current)), Tl(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[En] = t), (r[Os] = o), (e = (1 & t.mode) !== 0), n)) {
            case "dialog":
              pe("cancel", r), pe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              pe("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < ps.length; i++) pe(ps[i], r);
              break;
            case "source":
              pe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              pe("error", r), pe("load", r);
              break;
            case "details":
              pe("toggle", r);
              break;
            case "input":
              Vy(r, o), pe("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                pe("invalid", r);
              break;
            case "textarea":
              Hy(r, o), pe("invalid", r);
          }
          Td(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var a = o[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      kl(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      kl(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : ks.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  pe("scroll", r);
            }
          switch (n) {
            case "input":
              dl(r), By(r, o, !0);
              break;
            case "textarea":
              dl(r), zy(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Yl);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = K0(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[En] = t),
            (e[Os] = r),
            xx(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Ed(n, r)), n)) {
              case "dialog":
                pe("cancel", e), pe("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                pe("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < ps.length; i++) pe(ps[i], e);
                i = r;
                break;
              case "source":
                pe("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                pe("error", e), pe("load", e), (i = r);
                break;
              case "details":
                pe("toggle", e), (i = r);
                break;
              case "input":
                Vy(e, r), (i = xd(e, r)), pe("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = ke({}, r, { value: void 0 })),
                  pe("invalid", e);
                break;
              case "textarea":
                Hy(e, r), (i = Cd(e, r)), pe("invalid", e);
                break;
              default:
                i = r;
            }
            Td(n, i), (a = i);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var l = a[o];
                o === "style"
                  ? Z0(e, l)
                  : o === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && q0(e, l))
                  : o === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && Ts(e, l)
                    : typeof l == "number" && Ts(e, "" + l)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (ks.hasOwnProperty(o)
                      ? l != null && o === "onScroll" && pe("scroll", e)
                      : l != null && lh(e, o, l, s));
              }
            switch (n) {
              case "input":
                dl(e), By(e, r, !1);
                break;
              case "textarea":
                dl(e), zy(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ir(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? to(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      to(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Yl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ot(t), null;
    case 6:
      if (e && t.stateNode != null) wx(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(F(166));
        if (((n = ai(Ds.current)), ai(Pn.current), Tl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[En] = t),
            (o = r.nodeValue !== n) && ((e = At), e !== null))
          )
            switch (e.tag) {
              case 3:
                kl(r.nodeValue, n, (1 & e.mode) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  kl(r.nodeValue, n, (1 & e.mode) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[En] = t),
            (t.stateNode = r);
      }
      return ot(t), null;
    case 13:
      if (
        (me(we),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ye && Ot !== null && 1 & t.mode && !(128 & t.flags))
          Hb(), co(), (t.flags |= 98560), (o = !1);
        else if (((o = Tl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(F(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(F(317));
            o[En] = t;
          } else
            co(), !(128 & t.flags) && (t.memoizedState = null), (t.flags |= 4);
          ot(t), (o = !1);
        } else fn !== null && (oh(fn), (fn = null)), (o = !0);
        if (!o) return 65536 & t.flags ? t : null;
      }
      return 128 & t.flags
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            1 & t.mode &&
              (e === null || 1 & we.current ? $e === 0 && ($e = 3) : jh())),
          t.updateQueue !== null && (t.flags |= 4),
          ot(t),
          null);
    case 4:
      return (
        fo(), Zd(e, t), e === null && _s(t.stateNode.containerInfo), ot(t), null
      );
    case 10:
      return Rh(t.type._context), ot(t), null;
    case 17:
      return Rt(t.type) && Kl(), ot(t), null;
    case 19:
      if ((me(we), (o = t.memoizedState), o === null)) return ot(t), null;
      if (((r = (128 & t.flags) !== 0), (s = o.rendering), s === null))
        if (r) ls(o, !1);
        else {
          if ($e !== 0 || (e !== null && 128 & e.flags))
            for (e = t.child; e !== null; ) {
              if (((s = nc(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    ls(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return de(we, (1 & we.current) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Ae() > po &&
            ((t.flags |= 128), (r = !0), ls(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = nc(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ls(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !ye)
            )
              return ot(t), null;
          } else
            2 * Ae() - o.renderingStartTime > po &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ls(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Ae()),
          (t.sibling = null),
          (n = we.current),
          de(we, r ? (1 & n) | 2 : 1 & n),
          t)
        : (ot(t), null);
    case 22:
    case 23:
      return (
        Wh(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && 1 & t.mode
          ? 1073741824 & Mt && (ot(t), 6 & t.subtreeFlags && (t.flags |= 8192))
          : ot(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(F(156, t.tag));
}
function sF(e, t) {
  switch ((Ch(t), t.tag)) {
    case 1:
      return (
        Rt(t.type) && Kl(),
        (e = t.flags),
        65536 & e ? ((t.flags = (-65537 & e) | 128), t) : null
      );
    case 3:
      return (
        fo(),
        me(Et),
        me(at),
        _h(),
        (e = t.flags),
        65536 & e && !(128 & e) ? ((t.flags = (-65537 & e) | 128), t) : null
      );
    case 5:
      return Lh(t), null;
    case 13:
      if (
        (me(we), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(F(340));
        co();
      }
      return (
        (e = t.flags), 65536 & e ? ((t.flags = (-65537 & e) | 128), t) : null
      );
    case 19:
      return me(we), null;
    case 4:
      return fo(), null;
    case 10:
      return Rh(t.type._context), null;
    case 22:
    case 23:
      return Wh(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Pl = !1,
  st = !1,
  aF = typeof WeakSet == "function" ? WeakSet : Set,
  O = null;
function Ji(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Fe(e, t, r);
      }
    else n.current = null;
}
function Cx(e, t, n) {
  try {
    n();
  } catch (r) {
    Fe(e, t, r);
  }
}
var F0 = !1;
function lF(e, t) {
  if (((Dd = Ul), (e = Eb()), Sh(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || L;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            c = 0,
            u = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var h;
              f !== n || (i !== 0 && f.nodeType !== 3) || (a = s + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (h = f.firstChild) !== null;

            )
              (d = f), (f = h);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++c === i && (a = s),
                d === o && ++u === r && (l = s),
                (h = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = h;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Vd = { focusedElem: e, selectionRange: n }, Ul = !1, O = t; O !== null; )
    if (((t = O), (e = t.child), (1028 & t.subtreeFlags) !== 0 && e !== null))
      (e.return = t), (O = e);
    else
      for (; O !== null; ) {
        t = O;
        try {
          var g = t.alternate;
          if (1024 & t.flags)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var y = g.memoizedProps,
                    x = g.memoizedState,
                    p = t.stateNode,
                    m = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : cn(t.type, y),
                      x
                    );
                  p.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(F(163));
            }
        } catch (b) {
          Fe(t, t.return, b);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (O = e);
          break;
        }
        O = t.return;
      }
  return (g = F0), (F0 = !1), g;
}
function Ss(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && Cx(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function yc(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Jd(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function kx(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), kx(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[En], delete t[Os], delete t[zd], delete t[jI], delete t[UI])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Tx(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function L0(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Tx(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (2 & e.flags || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(2 & e.flags)) return e.stateNode;
  }
}
function eh(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Yl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (eh(e, t, n), e = e.sibling; e !== null; ) eh(e, t, n), (e = e.sibling);
}
function th(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (th(e, t, n), e = e.sibling; e !== null; ) th(e, t, n), (e = e.sibling);
}
var qe = null,
  un = !1;
function pr(e, t, n) {
  for (n = n.child; n !== null; ) Ex(e, t, n), (n = n.sibling);
}
function Ex(e, t, n) {
  if (Rn && typeof Rn.onCommitFiberUnmount == "function")
    try {
      Rn.onCommitFiberUnmount(uc, n);
    } catch {}
  switch (n.tag) {
    case 5:
      st || Ji(n, t);
    case 6:
      var r = qe,
        i = un;
      (qe = null),
        pr(e, t, n),
        (qe = r),
        (un = i),
        qe !== null &&
          (un
            ? ((e = qe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : qe.removeChild(n.stateNode));
      break;
    case 18:
      qe !== null &&
        (un
          ? ((e = qe),
            (n = n.stateNode),
            e.nodeType === 8
              ? od(e.parentNode, n)
              : e.nodeType === 1 && od(e, n),
            Is(e))
          : od(qe, n.stateNode));
      break;
    case 4:
      (r = qe),
        (i = un),
        (qe = n.stateNode.containerInfo),
        (un = !0),
        pr(e, t, n),
        (qe = r),
        (un = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !st &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (2 & o || 4 & o) && Cx(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      pr(e, t, n);
      break;
    case 1:
      if (
        !st &&
        (Ji(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          Fe(n, t, a);
        }
      pr(e, t, n);
      break;
    case 21:
      pr(e, t, n);
      break;
    case 22:
      1 & n.mode
        ? ((st = (r = st) || n.memoizedState !== null), pr(e, t, n), (st = r))
        : pr(e, t, n);
      break;
    default:
      pr(e, t, n);
  }
}
function _0(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new aF()),
      t.forEach(function (r) {
        var i = gF.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function ln(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (qe = a.stateNode), (un = !1);
              break e;
            case 3:
              (qe = a.stateNode.containerInfo), (un = !0);
              break e;
            case 4:
              (qe = a.stateNode.containerInfo), (un = !0);
              break e;
          }
          a = a.return;
        }
        if (qe === null) throw Error(F(160));
        Ex(o, s, i), (qe = null), (un = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (c) {
        Fe(i, t, c);
      }
    }
  if (12854 & t.subtreeFlags)
    for (t = t.child; t !== null; ) Rx(t, e), (t = t.sibling);
}
function Rx(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ln(t, e), kn(e), 4 & r)) {
        try {
          Ss(3, e, e.return), yc(3, e);
        } catch (y) {
          Fe(e, e.return, y);
        }
        try {
          Ss(5, e, e.return);
        } catch (y) {
          Fe(e, e.return, y);
        }
      }
      break;
    case 1:
      ln(t, e), kn(e), 512 & r && n !== null && Ji(n, n.return);
      break;
    case 5:
      if (
        (ln(t, e),
        kn(e),
        512 & r && n !== null && Ji(n, n.return),
        32 & e.flags)
      ) {
        var i = e.stateNode;
        try {
          Ts(i, "");
        } catch (y) {
          Fe(e, e.return, y);
        }
      }
      if (4 & r && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && G0(i, o),
              Ed(a, s);
            var c = Ed(a, o);
            for (s = 0; s < l.length; s += 2) {
              var u = l[s],
                f = l[s + 1];
              u === "style"
                ? Z0(i, f)
                : u === "dangerouslySetInnerHTML"
                ? q0(i, f)
                : u === "children"
                ? Ts(i, f)
                : lh(i, u, f, c);
            }
            switch (a) {
              case "input":
                Sd(i, o);
                break;
              case "textarea":
                Y0(i, o);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var h = o.value;
                h != null
                  ? to(i, !!o.multiple, h, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? to(i, !!o.multiple, o.defaultValue, !0)
                      : to(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Os] = o;
          } catch (y) {
            Fe(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((ln(t, e), kn(e), 4 & r)) {
        if (e.stateNode === null) throw Error(F(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (y) {
          Fe(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (ln(t, e), kn(e), 4 & r && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Is(t.containerInfo);
        } catch (y) {
          Fe(e, e.return, y);
        }
      break;
    case 4:
      ln(t, e), kn(e);
      break;
    case 13:
      ln(t, e),
        kn(e),
        (i = e.child),
        8192 & i.flags &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Nh = Ae())),
        4 & r && _0(e);
      break;
    case 22:
      if (
        ((u = n !== null && n.memoizedState !== null),
        1 & e.mode ? ((st = (c = st) || u), ln(t, e), (st = c)) : ln(t, e),
        kn(e),
        8192 & r)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !u && 1 & e.mode)
        )
          for (O = e, u = e.child; u !== null; ) {
            for (f = O = u; O !== null; ) {
              switch (((d = O), (h = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ss(4, d, d.return);
                  break;
                case 1:
                  Ji(d, d.return);
                  var g = d.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (y) {
                      Fe(r, n, y);
                    }
                  }
                  break;
                case 5:
                  Ji(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    O0(f);
                    continue;
                  }
              }
              h !== null ? ((h.return = d), (O = h)) : O0(f);
            }
            u = u.sibling;
          }
        e: for (u = null, f = e; ; ) {
          if (f.tag === 5) {
            if (u === null) {
              u = f;
              try {
                (i = f.stateNode),
                  c
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = f.stateNode),
                      (l = f.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = Q0("display", s)));
              } catch (y) {
                Fe(e, e.return, y);
              }
            }
          } else if (f.tag === 6) {
            if (u === null)
              try {
                f.stateNode.nodeValue = c ? "" : f.memoizedProps;
              } catch (y) {
                Fe(e, e.return, y);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            u === f && (u = null), (f = f.return);
          }
          u === f && (u = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      ln(t, e), kn(e), 4 & r && _0(e);
      break;
    case 21:
      break;
    default:
      ln(t, e), kn(e);
  }
}
function kn(e) {
  var t = e.flags;
  if (2 & t) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Tx(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(F(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          32 & r.flags && (Ts(i, ""), (r.flags &= -33));
          var o = L0(e);
          th(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = L0(e);
          eh(e, a, s);
          break;
        default:
          throw Error(F(161));
      }
    } catch (l) {
      Fe(e, e.return, l);
    }
    e.flags &= -3;
  }
  4096 & t && (e.flags &= -4097);
}
function cF(e, t, n) {
  (O = e), Px(e, t, n);
}
function Px(e, t, n) {
  for (var r = (1 & e.mode) !== 0; O !== null; ) {
    var i = O,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || Pl;
      if (!s) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || st;
        a = Pl;
        var c = st;
        if (((Pl = s), (st = l) && !c))
          for (O = i; O !== null; )
            (s = O),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? A0(i)
                : l !== null
                ? ((l.return = s), (O = l))
                : A0(i);
        for (; o !== null; ) (O = o), Px(o, t, n), (o = o.sibling);
        (O = i), (Pl = a), (st = c);
      }
      M0(e, t, n);
    } else
      8772 & i.subtreeFlags && o !== null
        ? ((o.return = i), (O = o))
        : M0(e, t, n);
  }
}
function M0(e) {
  for (; O !== null; ) {
    var t = O;
    if (8772 & t.flags) {
      var n = t.alternate;
      try {
        if (8772 & t.flags)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              st || yc(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (4 & t.flags && !st)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : cn(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && v0(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                v0(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && 4 & t.flags) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var u = c.memoizedState;
                  if (u !== null) {
                    var f = u.dehydrated;
                    f !== null && Is(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(F(163));
          }
        st || (512 & t.flags && Jd(t));
      } catch (d) {
        Fe(t, t.return, d);
      }
    }
    if (t === e) {
      O = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function O0(e) {
  for (; O !== null; ) {
    var t = O;
    if (t === e) {
      O = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function A0(e) {
  for (; O !== null; ) {
    var t = O;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            yc(4, t);
          } catch (l) {
            Fe(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Fe(t, i, l);
            }
          }
          var o = t.return;
          try {
            Jd(t);
          } catch (l) {
            Fe(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Jd(t);
          } catch (l) {
            Fe(t, s, l);
          }
      }
    } catch (l) {
      Fe(t, t.return, l);
    }
    if (t === e) {
      O = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (O = a);
      break;
    }
    O = t.return;
  }
}
var uF = Math.ceil,
  oc = tr.ReactCurrentDispatcher,
  Hh = tr.ReactCurrentOwner,
  Zt = tr.ReactCurrentBatchConfig,
  ie = 0,
  Xe = null,
  Ve = null,
  Qe = 0,
  Mt = 0,
  eo = _r(0),
  $e = 0,
  zs = null,
  hi = 0,
  bc = 0,
  zh = 0,
  ws = null,
  kt = null,
  Nh = 0,
  po = 1 / 0,
  Xn = null,
  sc = !1,
  nh = null,
  Er = null,
  Il = !1,
  xr = null,
  ac = 0,
  Cs = 0,
  rh = null,
  Vl = -1,
  Bl = 0;
function pt() {
  return 6 & ie ? Ae() : Vl !== -1 ? Vl : (Vl = Ae());
}
function Rr(e) {
  return 1 & e.mode
    ? 2 & ie && Qe !== 0
      ? Qe & -Qe
      : GI.transition !== null
      ? (Bl === 0 && (Bl = ub()), Bl)
      : ((e = le),
        e !== 0 || ((e = L.event), (e = e === void 0 ? 16 : gb(e.type))),
        e)
    : 1;
}
function hn(e, t, n, r) {
  if (50 < Cs) throw ((Cs = 0), (rh = null), Error(F(185)));
  Ns(e, n, r),
    (2 & ie && e === Xe) ||
      (e === Xe && (!(2 & ie) && (bc |= n), $e === 4 && yr(e, Qe)),
      Pt(e, r),
      n === 1 && ie === 0 && !(1 & t.mode) && ((po = Ae() + 500), mc && Mr()));
}
function Pt(e, t) {
  var n = e.callbackNode;
  KP(e, t);
  var r = jl(e, e === Xe ? Qe : 0);
  if (r === 0)
    n !== null && Wy(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Wy(n), t === 1))
      e.tag === 0 ? XI(D0.bind(null, e)) : Db(D0.bind(null, e)),
        $I(function () {
          !(6 & ie) && Mr();
        }),
        (n = null);
    else {
      switch (fb(r)) {
        case 1:
          n = hh;
          break;
        case 4:
          n = lb;
          break;
        case 16:
          n = Wl;
          break;
        case 536870912:
          n = cb;
          break;
        default:
          n = Wl;
      }
      n = Dx(n, Ix.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Ix(e, t) {
  if (((Vl = -1), (Bl = 0), 6 & ie)) throw Error(F(327));
  var n = e.callbackNode;
  if (so() && e.callbackNode !== n) return null;
  var r = jl(e, e === Xe ? Qe : 0);
  if (r === 0) return null;
  if (30 & r || r & e.expiredLanes || t) t = lc(e, r);
  else {
    t = r;
    var i = ie;
    ie |= 2;
    var o = Lx();
    (Xe === e && Qe === t) || ((Xn = null), (po = Ae() + 500), li(e, t));
    do
      try {
        hF();
        break;
      } catch (a) {
        Fx(e, a);
      }
    while (1);
    Eh(),
      (oc.current = o),
      (ie = i),
      Ve !== null ? (t = 0) : ((Xe = null), (Qe = 0), (t = $e));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Ld(e)), i !== 0 && ((r = i), (t = ih(e, i)))), t === 1)
    )
      throw ((n = zs), li(e, 0), yr(e, r), Pt(e, Ae()), n);
    if (t === 6) yr(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(30 & r) &&
          !fF(i) &&
          ((t = lc(e, r)),
          t === 2 && ((o = Ld(e)), o !== 0 && ((r = o), (t = ih(e, o)))),
          t === 1))
      )
        throw ((n = zs), li(e, 0), yr(e, r), Pt(e, Ae()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(F(345));
        case 2:
          ii(e, kt, Xn);
          break;
        case 3:
          if (
            (yr(e, r), (130023424 & r) === r && ((t = Nh + 500 - Ae()), 10 < t))
          ) {
            if (jl(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              pt(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Hd(ii.bind(null, e, kt, Xn), t);
            break;
          }
          ii(e, kt, Xn);
          break;
        case 4:
          if ((yr(e, r), (4194240 & r) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - dn(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = Ae() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * uF(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Hd(ii.bind(null, e, kt, Xn), r);
            break;
          }
          ii(e, kt, Xn);
          break;
        case 5:
          ii(e, kt, Xn);
          break;
        default:
          throw Error(F(329));
      }
    }
  }
  return Pt(e, Ae()), e.callbackNode === n ? Ix.bind(null, e) : null;
}
function ih(e, t) {
  var n = ws;
  return (
    e.current.memoizedState.isDehydrated && (li(e, t).flags |= 256),
    (e = lc(e, t)),
    e !== 2 && ((t = kt), (kt = n), t !== null && oh(t)),
    e
  );
}
function oh(e) {
  kt === null ? (kt = e) : kt.push.apply(kt, e);
}
function fF(e) {
  for (var t = e; ; ) {
    if (16384 & t.flags) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!pn(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), 16384 & t.subtreeFlags && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function yr(e, t) {
  for (
    t &= ~zh,
      t &= ~bc,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - dn(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function D0(e) {
  if (6 & ie) throw Error(F(327));
  so();
  var t = jl(e, 0);
  if (!(1 & t)) return Pt(e, Ae()), null;
  var n = lc(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ld(e);
    r !== 0 && ((t = r), (n = ih(e, r)));
  }
  if (n === 1) throw ((n = zs), li(e, 0), yr(e, t), Pt(e, Ae()), n);
  if (n === 6) throw Error(F(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    ii(e, kt, Xn),
    Pt(e, Ae()),
    null
  );
}
function $h(e, t) {
  var n = ie;
  ie |= 1;
  try {
    return e(t);
  } finally {
    (ie = n), ie === 0 && ((po = Ae() + 500), mc && Mr());
  }
}
function pi(e) {
  xr !== null && xr.tag === 0 && !(6 & ie) && so();
  var t = ie;
  ie |= 1;
  var n = Zt.transition,
    r = le;
  try {
    if (((Zt.transition = null), (le = 1), e)) return e();
  } finally {
    (le = r), (Zt.transition = n), (ie = t), !(6 & ie) && Mr();
  }
}
function Wh() {
  (Mt = eo.current), me(eo);
}
function li(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), NI(n)), Ve !== null))
    for (n = Ve.return; n !== null; ) {
      var r = n;
      switch ((Ch(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Kl();
          break;
        case 3:
          fo(), me(Et), me(at), _h();
          break;
        case 5:
          Lh(r);
          break;
        case 4:
          fo();
          break;
        case 13:
          me(we);
          break;
        case 19:
          me(we);
          break;
        case 10:
          Rh(r.type._context);
          break;
        case 22:
        case 23:
          Wh();
      }
      n = n.return;
    }
  if (
    ((Xe = e),
    (Ve = e = Pr(e.current, null)),
    (Qe = Mt = t),
    ($e = 0),
    (zs = null),
    (zh = bc = hi = 0),
    (kt = ws = null),
    si !== null)
  ) {
    for (t = 0; t < si.length; t++)
      if (((n = si[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    si = null;
  }
  return e;
}
function Fx(e, t) {
  do {
    var n = Ve;
    try {
      if ((Eh(), (Ol.current = ic), rc)) {
        for (var r = Ce.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        rc = !1;
      }
      if (
        ((di = 0),
        (Ue = Ne = Ce = null),
        (xs = !1),
        (Vs = 0),
        (Hh.current = null),
        n === null || n.return === null)
      ) {
        ($e = 1), (zs = t), (Ve = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = Qe),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var c = l,
            u = a,
            f = u.tag;
          if (!(1 & u.mode) && (f === 0 || f === 11 || f === 15)) {
            var d = u.alternate;
            d
              ? ((u.updateQueue = d.updateQueue),
                (u.memoizedState = d.memoizedState),
                (u.lanes = d.lanes))
              : ((u.updateQueue = null), (u.memoizedState = null));
          }
          var h = C0(s);
          if (h !== null) {
            (h.flags &= -257),
              k0(h, s, a, o, t),
              1 & h.mode && w0(o, c, t),
              (t = h),
              (l = c);
            var g = t.updateQueue;
            if (g === null) {
              var y = new Set();
              y.add(l), (t.updateQueue = y);
            } else g.add(l);
            break e;
          }
          if (!(1 & t)) {
            w0(o, c, t), jh();
            break e;
          }
          l = Error(F(426));
        } else if (ye && 1 & a.mode) {
          var x = C0(s);
          if (x !== null) {
            !(65536 & x.flags) && (x.flags |= 256),
              k0(x, s, a, o, t),
              kh(ho(l, a));
            break e;
          }
        }
        (o = l = ho(l, a)),
          $e !== 4 && ($e = 2),
          ws === null ? (ws = [o]) : ws.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var p = dx(o, l, t);
              m0(o, p);
              break e;
            case 1:
              a = l;
              var m = o.type,
                v = o.stateNode;
              if (
                !(128 & o.flags) &&
                (typeof m.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (Er === null || !Er.has(v))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var b = hx(o, a, t);
                m0(o, b);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Mx(n);
    } catch (C) {
      (t = C), Ve === n && n !== null && (Ve = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Lx() {
  var e = oc.current;
  return (oc.current = ic), e === null ? ic : e;
}
function jh() {
  ($e !== 0 && $e !== 3 && $e !== 2) || ($e = 4),
    Xe === null || (!(268435455 & hi) && !(268435455 & bc)) || yr(Xe, Qe);
}
function lc(e, t) {
  var n = ie;
  ie |= 2;
  var r = Lx();
  (Xe === e && Qe === t) || ((Xn = null), li(e, t));
  do
    try {
      dF();
      break;
    } catch (i) {
      Fx(e, i);
    }
  while (1);
  if ((Eh(), (ie = n), (oc.current = r), Ve !== null)) throw Error(F(261));
  return (Xe = null), (Qe = 0), $e;
}
function dF() {
  for (; Ve !== null; ) _x(Ve);
}
function hF() {
  for (; Ve !== null && !zP(); ) _x(Ve);
}
function _x(e) {
  var t = Ax(e.alternate, e, Mt);
  (e.memoizedProps = e.pendingProps),
    t === null ? Mx(e) : (Ve = t),
    (Hh.current = null);
}
function Mx(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), 32768 & t.flags)) {
      if (((n = sF(n, t)), n !== null)) {
        (n.flags &= 32767), (Ve = n);
        return;
      }
      if (e === null) {
        ($e = 6), (Ve = null);
        return;
      }
      (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
    } else if (((n = oF(n, t, Mt)), n !== null)) {
      Ve = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ve = t;
      return;
    }
    Ve = t = e;
  } while (t !== null);
  $e === 0 && ($e = 5);
}
function ii(e, t, n) {
  var r = le,
    i = Zt.transition;
  try {
    (Zt.transition = null), (le = 1), pF(e, t, n, r);
  } finally {
    (Zt.transition = i), (le = r);
  }
  return null;
}
function pF(e, t, n, r) {
  do so();
  while (xr !== null);
  if (6 & ie) throw Error(F(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(F(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (qP(e, o),
    e === Xe && ((Ve = Xe = null), (Qe = 0)),
    (!(2064 & n.subtreeFlags) && !(2064 & n.flags)) ||
      Il ||
      ((Il = !0),
      Dx(Wl, function () {
        return so(), null;
      })),
    (o = (15990 & n.flags) !== 0),
    15990 & n.subtreeFlags || o)
  ) {
    (o = Zt.transition), (Zt.transition = null);
    var s = le;
    le = 1;
    var a = ie;
    (ie |= 4),
      (Hh.current = null),
      lF(e, n),
      Rx(n, e),
      DI(Vd),
      (Ul = !!Dd),
      (Vd = Dd = null),
      (e.current = n),
      cF(n, e, i),
      NP(),
      (ie = a),
      (le = s),
      (Zt.transition = o);
  } else e.current = n;
  if (
    (Il && ((Il = !1), (xr = e), (ac = i)),
    (o = e.pendingLanes),
    o === 0 && (Er = null),
    jP(n.stateNode, r),
    Pt(e, Ae()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (sc) throw ((sc = !1), (e = nh), (nh = null), e);
  return (
    1 & ac && e.tag !== 0 && so(),
    (o = e.pendingLanes),
    1 & o ? (e === rh ? Cs++ : ((Cs = 0), (rh = e))) : (Cs = 0),
    Mr(),
    null
  );
}
function so() {
  if (xr !== null) {
    var e = fb(ac),
      t = Zt.transition,
      n = le;
    try {
      if (((Zt.transition = null), (le = 16 > e ? 16 : e), xr === null))
        var r = !1;
      else {
        if (((e = xr), (xr = null), (ac = 0), 6 & ie)) throw Error(F(331));
        var i = ie;
        for (ie |= 4, O = e.current; O !== null; ) {
          var o = O,
            s = o.child;
          if (16 & O.flags) {
            var a = o.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var c = a[l];
                for (O = c; O !== null; ) {
                  var u = O;
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ss(8, u, o);
                  }
                  var f = u.child;
                  if (f !== null) (f.return = u), (O = f);
                  else
                    for (; O !== null; ) {
                      u = O;
                      var d = u.sibling,
                        h = u.return;
                      if ((kx(u), u === c)) {
                        O = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = h), (O = d);
                        break;
                      }
                      O = h;
                    }
                }
              }
              var g = o.alternate;
              if (g !== null) {
                var y = g.child;
                if (y !== null) {
                  g.child = null;
                  do {
                    var x = y.sibling;
                    (y.sibling = null), (y = x);
                  } while (y !== null);
                }
              }
              O = o;
            }
          }
          if (2064 & o.subtreeFlags && s !== null) (s.return = o), (O = s);
          else
            e: for (; O !== null; ) {
              if (((o = O), 2048 & o.flags))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ss(9, o, o.return);
                }
              var p = o.sibling;
              if (p !== null) {
                (p.return = o.return), (O = p);
                break e;
              }
              O = o.return;
            }
        }
        var m = e.current;
        for (O = m; O !== null; ) {
          s = O;
          var v = s.child;
          if (2064 & s.subtreeFlags && v !== null) (v.return = s), (O = v);
          else
            e: for (s = m; O !== null; ) {
              if (((a = O), 2048 & a.flags))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      yc(9, a);
                  }
                } catch (C) {
                  Fe(a, a.return, C);
                }
              if (a === s) {
                O = null;
                break e;
              }
              var b = a.sibling;
              if (b !== null) {
                (b.return = a.return), (O = b);
                break e;
              }
              O = a.return;
            }
        }
        if (
          ((ie = i), Mr(), Rn && typeof Rn.onPostCommitFiberRoot == "function")
        )
          try {
            Rn.onPostCommitFiberRoot(uc, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (le = n), (Zt.transition = t);
    }
  }
  return !1;
}
function V0(e, t, n) {
  (t = ho(n, t)),
    (t = dx(e, t, 1)),
    (e = Tr(e, t, 1)),
    (t = pt()),
    e !== null && (Ns(e, 1, t), Pt(e, t));
}
function Fe(e, t, n) {
  if (e.tag === 3) V0(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        V0(t, e, n);
        break;
      }
      if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Er === null || !Er.has(r)))
        ) {
          (e = ho(n, e)),
            (e = hx(t, e, 1)),
            (t = Tr(t, e, 1)),
            (e = pt()),
            t !== null && (Ns(t, 1, e), Pt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function mF(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = pt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Xe === e &&
      (Qe & n) === n &&
      ($e === 4 || ($e === 3 && (130023424 & Qe) === Qe && 500 > Ae() - Nh)
        ? li(e, 0)
        : (zh |= n)),
    Pt(e, t);
}
function Ox(e, t) {
  t === 0 &&
    (1 & e.mode
      ? ((t = ml), (ml <<= 1), !(130023424 & ml) && (ml = 4194304))
      : (t = 1));
  var n = pt();
  (e = Jn(e, t)), e !== null && (Ns(e, t, n), Pt(e, n));
}
function vF(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Ox(e, n);
}
function gF(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(F(314));
  }
  r !== null && r.delete(t), Ox(e, n);
}
var Ax;
Ax = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Et.current) Tt = !0;
    else {
      if (!(e.lanes & n) && !(128 & t.flags)) return (Tt = !1), iF(e, t, n);
      Tt = (131072 & e.flags) !== 0;
    }
  else (Tt = !1), ye && 1048576 & t.flags && Vb(t, Zl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Dl(e, t), (e = t.pendingProps);
      var i = lo(t, at.current);
      oo(t, n), (i = Oh(null, t, r, e, i, n));
      var o = Ah();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Rt(r) ? ((o = !0), ql(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Ih(t),
            (i.updater = vc),
            (t.stateNode = i),
            (i._reactInternals = t),
            Xd(t, r, e, n),
            (t = Kd(null, t, r, !0, o, n)))
          : ((t.tag = 0), ye && o && wh(t), ht(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Dl(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = bF(r)),
          (e = cn(r, e)),
          i)
        ) {
          case 0:
            t = Yd(null, t, r, e, n);
            break e;
          case 1:
            t = R0(null, t, r, e, n);
            break e;
          case 11:
            t = T0(null, t, r, e, n);
            break e;
          case 14:
            t = E0(null, t, r, cn(r.type, e), n);
            break e;
        }
        throw Error(F(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : cn(r, i)),
        Yd(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : cn(r, i)),
        R0(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((gx(t), e === null)) throw Error(F(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Nb(e, t),
          tc(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated)) {
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            256 & t.flags)
          ) {
            (i = ho(Error(F(423)), t)), (t = P0(e, t, r, n, i));
            break e;
          }
          if (r !== i) {
            (i = ho(Error(F(424)), t)), (t = P0(e, t, r, n, i));
            break e;
          }
          for (
            Ot = kr(t.stateNode.containerInfo.firstChild),
              At = t,
              ye = !0,
              fn = null,
              n = Ub(t, null, r, n),
              t.child = n;
            n;

          )
            (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
        } else {
          if ((co(), r === i)) {
            t = er(e, t, n);
            break e;
          }
          ht(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Xb(t),
        e === null && Wd(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        Bd(r, i) ? (s = null) : o !== null && Bd(r, o) && (t.flags |= 32),
        vx(e, t),
        ht(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Wd(t), null;
    case 13:
      return yx(e, t, n);
    case 4:
      return (
        Fh(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = uo(t, null, r, n)) : ht(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : cn(r, i)),
        T0(e, t, r, i, n)
      );
    case 7:
      return ht(e, t, t.pendingProps, n), t.child;
    case 8:
      return ht(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ht(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          de(Jl, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (pn(o.value, s)) {
            if (o.children === i.children && !Et.current) {
              t = er(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                s = o.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (o.tag === 1) {
                      (l = qn(-1, n & -n)), (l.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var u = c.pending;
                        u === null
                          ? (l.next = l)
                          : ((l.next = u.next), (u.next = l)),
                          (c.pending = l);
                      }
                    }
                    (o.lanes |= n),
                      (l = o.alternate),
                      l !== null && (l.lanes |= n),
                      jd(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(F(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  jd(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        ht(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        oo(t, n),
        (i = Jt(i)),
        (r = r(i)),
        (t.flags |= 1),
        ht(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = cn(r, t.pendingProps)),
        (i = cn(r.type, i)),
        E0(e, t, r, i, n)
      );
    case 15:
      return px(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : cn(r, i)),
        Dl(e, t),
        (t.tag = 1),
        Rt(r) ? ((e = !0), ql(t)) : (e = !1),
        oo(t, n),
        Wb(t, r, i),
        Xd(t, r, i, n),
        Kd(null, t, r, !0, e, n)
      );
    case 19:
      return bx(e, t, n);
    case 22:
      return mx(e, t, n);
  }
  throw Error(F(156, t.tag));
};
function Dx(e, t) {
  return ab(e, t);
}
function yF(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Qt(e, t, n, r) {
  return new yF(e, t, n, r);
}
function Uh(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function bF(e) {
  if (typeof e == "function") return Uh(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === uh)) return 11;
    if (e === fh) return 14;
  }
  return 2;
}
function Pr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Qt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = 14680064 & e.flags),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Hl(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) Uh(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case ji:
        return ci(n.children, i, o, t);
      case ch:
        (s = 8), (i |= 8);
        break;
      case vd:
        return (
          (e = Qt(12, n, t, 2 | i)), (e.elementType = vd), (e.lanes = o), e
        );
      case gd:
        return (e = Qt(13, n, t, i)), (e.elementType = gd), (e.lanes = o), e;
      case yd:
        return (e = Qt(19, n, t, i)), (e.elementType = yd), (e.lanes = o), e;
      case j0:
        return xc(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case $0:
              s = 10;
              break e;
            case W0:
              s = 9;
              break e;
            case uh:
              s = 11;
              break e;
            case fh:
              s = 14;
              break e;
            case mr:
              (s = 16), (r = null);
              break e;
          }
        throw Error(F(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Qt(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function ci(e, t, n, r) {
  return (e = Qt(7, e, r, t)), (e.lanes = n), e;
}
function xc(e, t, n, r) {
  return (
    (e = Qt(22, e, r, t)),
    (e.elementType = j0),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function hd(e, t, n) {
  return (e = Qt(6, e, null, t)), (e.lanes = n), e;
}
function pd(e, t, n) {
  return (
    (t = Qt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function xF(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Qf(0)),
    (this.expirationTimes = Qf(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Qf(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Xh(e, t, n, r, i, o, s, a, l) {
  return (
    (e = new xF(e, t, n, a, l)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Qt(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ih(o),
    e
  );
}
function SF(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Wi,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Vx(e) {
  if (!e) return Fr;
  e = e._reactInternals;
  e: {
    if (vi(e) !== e || e.tag !== 1) throw Error(F(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Rt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(F(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Rt(n)) return Ab(e, n, t);
  }
  return t;
}
function Bx(e, t, n, r, i, o, s, a, l) {
  return (
    (e = Xh(n, r, !0, e, i, o, s, a, l)),
    (e.context = Vx(null)),
    (n = e.current),
    (r = pt()),
    (i = Rr(n)),
    (o = qn(r, i)),
    (o.callback = t ?? null),
    Tr(n, o, i),
    (e.current.lanes = i),
    Ns(e, i, r),
    Pt(e, r),
    e
  );
}
function Sc(e, t, n, r) {
  var i = t.current,
    o = pt(),
    s = Rr(i);
  return (
    (n = Vx(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = qn(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Tr(i, t, s)),
    e !== null && (hn(e, i, s, o), Ml(e, i, s)),
    s
  );
}
function cc(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function B0(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Gh(e, t) {
  B0(e, t), (e = e.alternate) && B0(e, t);
}
function wF() {
  return null;
}
var Hx =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Yh(e) {
  this._internalRoot = e;
}
wc.prototype.render = Yh.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(F(409));
  Sc(e, t, null, null);
};
wc.prototype.unmount = Yh.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    pi(function () {
      Sc(null, e, null, null);
    }),
      (t[Zn] = null);
  }
};
function wc(e) {
  this._internalRoot = e;
}
wc.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = pb();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < gr.length && t !== 0 && t < gr[n].priority; n++);
    gr.splice(n, 0, e), n === 0 && vb(e);
  }
};
function Kh(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Cc(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function H0() {}
function CF(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = cc(s);
        o.call(c);
      };
    }
    var s = Bx(t, r, e, 0, null, !1, !1, "", H0);
    return (
      (e._reactRootContainer = s),
      (e[Zn] = s.current),
      _s(e.nodeType === 8 ? e.parentNode : e),
      pi(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = cc(l);
      a.call(c);
    };
  }
  var l = Xh(e, 0, !1, null, null, !1, !1, "", H0);
  return (
    (e._reactRootContainer = l),
    (e[Zn] = l.current),
    _s(e.nodeType === 8 ? e.parentNode : e),
    pi(function () {
      Sc(t, l, n, r);
    }),
    l
  );
}
function kc(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = cc(s);
        a.call(l);
      };
    }
    Sc(t, s, e, i);
  } else s = CF(n, t, e, i, r);
  return cc(s);
}
db = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = hs(t.pendingLanes);
        n !== 0 &&
          (ph(t, 1 | n), Pt(t, Ae()), !(6 & ie) && ((po = Ae() + 500), Mr()));
      }
      break;
    case 13:
      pi(function () {
        var r = Jn(e, 1);
        if (r !== null) {
          var i = pt();
          hn(r, e, 1, i);
        }
      }),
        Gh(e, 1);
  }
};
mh = function (e) {
  if (e.tag === 13) {
    var t = Jn(e, 134217728);
    if (t !== null) {
      var n = pt();
      hn(t, e, 134217728, n);
    }
    Gh(e, 134217728);
  }
};
hb = function (e) {
  if (e.tag === 13) {
    var t = Rr(e),
      n = Jn(e, t);
    if (n !== null) {
      var r = pt();
      hn(n, e, t, r);
    }
    Gh(e, t);
  }
};
pb = function () {
  return le;
};
mb = function (e, t) {
  var n = le;
  try {
    return (le = e), t();
  } finally {
    le = n;
  }
};
Pd = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Sd(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = pc(r);
            if (!i) throw Error(F(90));
            X0(r), Sd(r, i);
          }
        }
      }
      break;
    case "textarea":
      Y0(e, n);
      break;
    case "select":
      (t = n.value), t != null && to(e, !!n.multiple, t, !1);
  }
};
tb = $h;
nb = pi;
var kF = { usingClientEntryPoint: !1, Events: [Ws, Yi, pc, J0, eb, $h] },
  cs = {
    findFiberByHostInstance: oi,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  TF = {
    bundleType: cs.bundleType,
    version: cs.version,
    rendererPackageName: cs.rendererPackageName,
    rendererConfig: cs.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: tr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ob(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: cs.findFiberByHostInstance || wF,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
  ((us = __REACT_DEVTOOLS_GLOBAL_HOOK__), !us.isDisabled && us.supportsFiber)
)
  try {
    (uc = us.inject(TF)), (Rn = us);
  } catch {}
var us;
Vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kF;
Vt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Kh(t)) throw Error(F(200));
  return SF(e, t, null, n);
};
Vt.createRoot = function (e, t) {
  if (!Kh(e)) throw Error(F(299));
  var n = !1,
    r = "",
    i = Hx;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Xh(e, 1, !1, null, null, n, !1, r, i)),
    (e[Zn] = t.current),
    _s(e.nodeType === 8 ? e.parentNode : e),
    new Yh(t)
  );
};
Vt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(F(188))
      : ((e = Object.keys(e).join(",")), Error(F(268, e)));
  return (e = ob(t)), (e = e === null ? null : e.stateNode), e;
};
Vt.flushSync = function (e) {
  return pi(e);
};
Vt.hydrate = function (e, t, n) {
  if (!Cc(t)) throw Error(F(200));
  return kc(null, e, t, !0, n);
};
Vt.hydrateRoot = function (e, t, n) {
  if (!Kh(e)) throw Error(F(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = Hx;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Bx(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[Zn] = t.current),
    _s(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new wc(t);
};
Vt.render = function (e, t, n) {
  if (!Cc(t)) throw Error(F(200));
  return kc(null, e, t, !1, n);
};
Vt.unmountComponentAtNode = function (e) {
  if (!Cc(e)) throw Error(F(40));
  return (
    !!e._reactRootContainer &&
    (pi(function () {
      kc(null, null, e, !1, function () {
        (e._reactRootContainer = null), (e[Zn] = null);
      });
    }),
    !0)
  );
};
Vt.unstable_batchedUpdates = $h;
Vt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Cc(n)) throw Error(F(200));
  if (e == null || e._reactInternals === void 0) throw Error(F(38));
  return kc(e, t, n, !1, r);
};
Vt.version = "18.2.0-next-9e3b772b8-20220608";
function zx() {
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == "function"
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zx);
    } catch (e) {
      console.error(e);
    }
}
zx();
var Ht = Vt,
  Nx = Ht,
  EF = Ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  RF = Ht.createPortal,
  PF = Ht.createRoot,
  IF = Ht.findDOMNode,
  FF = Ht.flushSync,
  LF = Ht.hydrate,
  _F = Ht.hydrateRoot,
  MF = Ht.render,
  OF = Ht.unmountComponentAtNode,
  AF = Ht.unstable_batchedUpdates,
  DF = Ht.unstable_renderSubtreeIntoContainer,
  VF = Ht.version;
var HF = sn({
    "../../../node_modules/hsluv/hsluv.js"(e, t) {
      var n = n || {};
      (n.Geometry = function () {}),
        (n.Geometry.intersectLineLine = function (i, o) {
          var s = (i.intercept - o.intercept) / (o.slope - i.slope),
            a = i.slope * s + i.intercept;
          return { x: s, y: a };
        }),
        (n.Geometry.distanceFromOrigin = function (i) {
          return Math.sqrt(Math.pow(i.x, 2) + Math.pow(i.y, 2));
        }),
        (n.Geometry.distanceLineFromOrigin = function (i) {
          return Math.abs(i.intercept) / Math.sqrt(Math.pow(i.slope, 2) + 1);
        }),
        (n.Geometry.perpendicularThroughPoint = function (i, o) {
          var s = -1 / i.slope,
            a = o.y - s * o.x;
          return { slope: s, intercept: a };
        }),
        (n.Geometry.angleFromOrigin = function (i) {
          return Math.atan2(i.y, i.x);
        }),
        (n.Geometry.normalizeAngle = function (i) {
          var o = 2 * Math.PI;
          return ((i % o) + o) % o;
        }),
        (n.Geometry.lengthOfRayUntilIntersect = function (i, o) {
          return o.intercept / (Math.sin(i) - o.slope * Math.cos(i));
        }),
        (n.Hsluv = function () {}),
        (n.Hsluv.getBounds = function (i) {
          for (
            var o = [],
              s = Math.pow(i + 16, 3) / 1560896,
              a = s > n.Hsluv.epsilon ? s : i / n.Hsluv.kappa,
              l = 0;
            l < 3;

          )
            for (
              var c = l++,
                u = n.Hsluv.m[c][0],
                f = n.Hsluv.m[c][1],
                d = n.Hsluv.m[c][2],
                h = 0;
              h < 2;

            ) {
              var g = h++,
                y = (284517 * u - 94839 * d) * a,
                x =
                  (838422 * d + 769860 * f + 731718 * u) * i * a -
                  769860 * g * i,
                p = (632260 * d - 126452 * f) * a + 126452 * g;
              o.push({ slope: y / p, intercept: x / p });
            }
          return o;
        }),
        (n.Hsluv.maxSafeChromaForL = function (i) {
          for (var o = n.Hsluv.getBounds(i), s = 1 / 0, a = 0; a < o.length; ) {
            var l = o[a];
            ++a;
            var c = n.Geometry.distanceLineFromOrigin(l);
            s = Math.min(s, c);
          }
          return s;
        }),
        (n.Hsluv.maxChromaForLH = function (i, o) {
          for (
            var s = (o / 360) * Math.PI * 2,
              a = n.Hsluv.getBounds(i),
              l = 1 / 0,
              c = 0;
            c < a.length;

          ) {
            var u = a[c];
            ++c;
            var f = n.Geometry.lengthOfRayUntilIntersect(s, u);
            f >= 0 && (l = Math.min(l, f));
          }
          return l;
        }),
        (n.Hsluv.dotProduct = function (i, o) {
          for (var s = 0, a = 0, l = i.length; a < l; ) {
            var c = a++;
            s += i[c] * o[c];
          }
          return s;
        }),
        (n.Hsluv.fromLinear = function (i) {
          return i <= 0.0031308
            ? 12.92 * i
            : 1.055 * Math.pow(i, 0.4166666666666667) - 0.055;
        }),
        (n.Hsluv.toLinear = function (i) {
          return i > 0.04045 ? Math.pow((i + 0.055) / 1.055, 2.4) : i / 12.92;
        }),
        (n.Hsluv.xyzToRgb = function (i) {
          return [
            n.Hsluv.fromLinear(n.Hsluv.dotProduct(n.Hsluv.m[0], i)),
            n.Hsluv.fromLinear(n.Hsluv.dotProduct(n.Hsluv.m[1], i)),
            n.Hsluv.fromLinear(n.Hsluv.dotProduct(n.Hsluv.m[2], i)),
          ];
        }),
        (n.Hsluv.rgbToXyz = function (i) {
          var o = [
            n.Hsluv.toLinear(i[0]),
            n.Hsluv.toLinear(i[1]),
            n.Hsluv.toLinear(i[2]),
          ];
          return [
            n.Hsluv.dotProduct(n.Hsluv.minv[0], o),
            n.Hsluv.dotProduct(n.Hsluv.minv[1], o),
            n.Hsluv.dotProduct(n.Hsluv.minv[2], o),
          ];
        }),
        (n.Hsluv.yToL = function (i) {
          return i <= n.Hsluv.epsilon
            ? (i / n.Hsluv.refY) * n.Hsluv.kappa
            : 116 * Math.pow(i / n.Hsluv.refY, 0.3333333333333333) - 16;
        }),
        (n.Hsluv.lToY = function (i) {
          return i <= 8
            ? (n.Hsluv.refY * i) / n.Hsluv.kappa
            : n.Hsluv.refY * Math.pow((i + 16) / 116, 3);
        }),
        (n.Hsluv.xyzToLuv = function (i) {
          var o = i[0],
            s = i[1],
            a = i[2],
            l = o + 15 * s + 3 * a,
            c = 4 * o,
            u = 9 * s;
          l != 0 ? ((c /= l), (u /= l)) : ((c = NaN), (u = NaN));
          var f = n.Hsluv.yToL(s);
          if (f == 0) return [0, 0, 0];
          var d = 13 * f * (c - n.Hsluv.refU),
            h = 13 * f * (u - n.Hsluv.refV);
          return [f, d, h];
        }),
        (n.Hsluv.luvToXyz = function (i) {
          var o = i[0],
            s = i[1],
            a = i[2];
          if (o == 0) return [0, 0, 0];
          var l = s / (13 * o) + n.Hsluv.refU,
            c = a / (13 * o) + n.Hsluv.refV,
            u = n.Hsluv.lToY(o),
            f = 0 - (9 * u * l) / ((l - 4) * c - l * c),
            d = (9 * u - 15 * c * u - c * f) / (3 * c);
          return [f, u, d];
        }),
        (n.Hsluv.luvToLch = function (i) {
          var o = i[0],
            s = i[1],
            a = i[2],
            l = Math.sqrt(s * s + a * a),
            c;
          if (l < 1e-8) c = 0;
          else {
            var u = Math.atan2(a, s);
            (c = (u * 180) / Math.PI), c < 0 && (c = 360 + c);
          }
          return [o, l, c];
        }),
        (n.Hsluv.lchToLuv = function (i) {
          var o = i[0],
            s = i[1],
            a = i[2],
            l = (a / 360) * 2 * Math.PI,
            c = Math.cos(l) * s,
            u = Math.sin(l) * s;
          return [o, c, u];
        }),
        (n.Hsluv.hsluvToLch = function (i) {
          var o = i[0],
            s = i[1],
            a = i[2];
          if (a > 99.9999999) return [100, 0, o];
          if (a < 1e-8) return [0, 0, o];
          var l = n.Hsluv.maxChromaForLH(a, o),
            c = (l / 100) * s;
          return [a, c, o];
        }),
        (n.Hsluv.lchToHsluv = function (i) {
          var o = i[0],
            s = i[1],
            a = i[2];
          if (o > 99.9999999) return [a, 0, 100];
          if (o < 1e-8) return [a, 0, 0];
          var l = n.Hsluv.maxChromaForLH(o, a),
            c = (s / l) * 100;
          return [a, c, o];
        }),
        (n.Hsluv.hpluvToLch = function (i) {
          var o = i[0],
            s = i[1],
            a = i[2];
          if (a > 99.9999999) return [100, 0, o];
          if (a < 1e-8) return [0, 0, o];
          var l = n.Hsluv.maxSafeChromaForL(a),
            c = (l / 100) * s;
          return [a, c, o];
        }),
        (n.Hsluv.lchToHpluv = function (i) {
          var o = i[0],
            s = i[1],
            a = i[2];
          if (o > 99.9999999) return [a, 0, 100];
          if (o < 1e-8) return [a, 0, 0];
          var l = n.Hsluv.maxSafeChromaForL(o),
            c = (s / l) * 100;
          return [a, c, o];
        }),
        (n.Hsluv.rgbToHex = function (i) {
          for (var o = "#", s = 0; s < 3; ) {
            var a = s++,
              l = i[a],
              c = Math.round(l * 255),
              u = c % 16,
              f = ((c - u) / 16) | 0;
            o += n.Hsluv.hexChars.charAt(f) + n.Hsluv.hexChars.charAt(u);
          }
          return o;
        }),
        (n.Hsluv.hexToRgb = function (i) {
          i = i.toLowerCase();
          for (var o = [], s = 0; s < 3; ) {
            var a = s++,
              l = n.Hsluv.hexChars.indexOf(i.charAt(a * 2 + 1)),
              c = n.Hsluv.hexChars.indexOf(i.charAt(a * 2 + 2)),
              u = l * 16 + c;
            o.push(u / 255);
          }
          return o;
        }),
        (n.Hsluv.lchToRgb = function (i) {
          return n.Hsluv.xyzToRgb(n.Hsluv.luvToXyz(n.Hsluv.lchToLuv(i)));
        }),
        (n.Hsluv.rgbToLch = function (i) {
          return n.Hsluv.luvToLch(n.Hsluv.xyzToLuv(n.Hsluv.rgbToXyz(i)));
        }),
        (n.Hsluv.hsluvToRgb = function (i) {
          return n.Hsluv.lchToRgb(n.Hsluv.hsluvToLch(i));
        }),
        (n.Hsluv.rgbToHsluv = function (i) {
          return n.Hsluv.lchToHsluv(n.Hsluv.rgbToLch(i));
        }),
        (n.Hsluv.hpluvToRgb = function (i) {
          return n.Hsluv.lchToRgb(n.Hsluv.hpluvToLch(i));
        }),
        (n.Hsluv.rgbToHpluv = function (i) {
          return n.Hsluv.lchToHpluv(n.Hsluv.rgbToLch(i));
        }),
        (n.Hsluv.hsluvToHex = function (i) {
          return n.Hsluv.rgbToHex(n.Hsluv.hsluvToRgb(i));
        }),
        (n.Hsluv.hpluvToHex = function (i) {
          return n.Hsluv.rgbToHex(n.Hsluv.hpluvToRgb(i));
        }),
        (n.Hsluv.hexToHsluv = function (i) {
          return n.Hsluv.rgbToHsluv(n.Hsluv.hexToRgb(i));
        }),
        (n.Hsluv.hexToHpluv = function (i) {
          return n.Hsluv.rgbToHpluv(n.Hsluv.hexToRgb(i));
        }),
        (n.Hsluv.m = [
          [3.240969941904521, -1.537383177570093, -0.498610760293],
          [-0.96924363628087, 1.87596750150772, 0.041555057407175],
          [0.055630079696993, -0.20397695888897, 1.056971514242878],
        ]),
        (n.Hsluv.minv = [
          [0.41239079926595, 0.35758433938387, 0.18048078840183],
          [0.21263900587151, 0.71516867876775, 0.072192315360733],
          [0.019330818715591, 0.11919477979462, 0.95053215224966],
        ]),
        (n.Hsluv.refY = 1),
        (n.Hsluv.refU = 0.19783000664283),
        (n.Hsluv.refV = 0.46831999493879),
        (n.Hsluv.kappa = 903.2962962),
        (n.Hsluv.epsilon = 0.0088564516),
        (n.Hsluv.hexChars = "0123456789abcdef");
      var r = {
        hsluvToRgb: n.Hsluv.hsluvToRgb,
        rgbToHsluv: n.Hsluv.rgbToHsluv,
        hpluvToRgb: n.Hsluv.hpluvToRgb,
        rgbToHpluv: n.Hsluv.rgbToHpluv,
        hsluvToHex: n.Hsluv.hsluvToHex,
        hexToHsluv: n.Hsluv.hexToHsluv,
        hpluvToHex: n.Hsluv.hpluvToHex,
        hexToHpluv: n.Hsluv.hexToHpluv,
        lchToHpluv: n.Hsluv.lchToHpluv,
        hpluvToLch: n.Hsluv.hpluvToLch,
        lchToHsluv: n.Hsluv.lchToHsluv,
        hsluvToLch: n.Hsluv.hsluvToLch,
        lchToLuv: n.Hsluv.lchToLuv,
        luvToLch: n.Hsluv.luvToLch,
        xyzToLuv: n.Hsluv.xyzToLuv,
        luvToXyz: n.Hsluv.luvToXyz,
        xyzToRgb: n.Hsluv.xyzToRgb,
        rgbToXyz: n.Hsluv.rgbToXyz,
        lchToRgb: n.Hsluv.lchToRgb,
        rgbToLch: n.Hsluv.rgbToLch,
      };
      t.exports = r;
    },
  }),
  zF = sn({
    "../../../node_modules/eventemitter3/index.js"(e, t) {
      "use strict";
      var n = Object.prototype.hasOwnProperty,
        r = "~";
      function i() {}
      Object.create &&
        ((i.prototype = Object.create(null)), new i().__proto__ || (r = !1));
      function o(c, u, f) {
        (this.fn = c), (this.context = u), (this.once = f || !1);
      }
      function s(c, u, f, d, h) {
        if (typeof f != "function")
          throw new TypeError("The listener must be a function");
        var g = new o(f, d || c, h),
          y = r ? r + u : u;
        return (
          c._events[y]
            ? c._events[y].fn
              ? (c._events[y] = [c._events[y], g])
              : c._events[y].push(g)
            : ((c._events[y] = g), c._eventsCount++),
          c
        );
      }
      function a(c, u) {
        --c._eventsCount === 0 ? (c._events = new i()) : delete c._events[u];
      }
      function l() {
        (this._events = new i()), (this._eventsCount = 0);
      }
      (l.prototype.eventNames = function () {
        var u = [],
          f,
          d;
        if (this._eventsCount === 0) return u;
        for (d in (f = this._events))
          n.call(f, d) && u.push(r ? d.slice(1) : d);
        return Object.getOwnPropertySymbols
          ? u.concat(Object.getOwnPropertySymbols(f))
          : u;
      }),
        (l.prototype.listeners = function (u) {
          var f = r ? r + u : u,
            d = this._events[f];
          if (!d) return [];
          if (d.fn) return [d.fn];
          for (var h = 0, g = d.length, y = new Array(g); h < g; h++)
            y[h] = d[h].fn;
          return y;
        }),
        (l.prototype.listenerCount = function (u) {
          var f = r ? r + u : u,
            d = this._events[f];
          return d ? (d.fn ? 1 : d.length) : 0;
        }),
        (l.prototype.emit = function (u, f, d, h, g, y) {
          var x = r ? r + u : u;
          if (!this._events[x]) return !1;
          var p = this._events[x],
            m = arguments.length,
            v,
            b;
          if (p.fn) {
            switch ((p.once && this.removeListener(u, p.fn, void 0, !0), m)) {
              case 1:
                return p.fn.call(p.context), !0;
              case 2:
                return p.fn.call(p.context, f), !0;
              case 3:
                return p.fn.call(p.context, f, d), !0;
              case 4:
                return p.fn.call(p.context, f, d, h), !0;
              case 5:
                return p.fn.call(p.context, f, d, h, g), !0;
              case 6:
                return p.fn.call(p.context, f, d, h, g, y), !0;
            }
            for (b = 1, v = new Array(m - 1); b < m; b++)
              v[b - 1] = arguments[b];
            p.fn.apply(p.context, v);
          } else {
            var C = p.length,
              w;
            for (b = 0; b < C; b++)
              switch (
                (p[b].once && this.removeListener(u, p[b].fn, void 0, !0), m)
              ) {
                case 1:
                  p[b].fn.call(p[b].context);
                  break;
                case 2:
                  p[b].fn.call(p[b].context, f);
                  break;
                case 3:
                  p[b].fn.call(p[b].context, f, d);
                  break;
                case 4:
                  p[b].fn.call(p[b].context, f, d, h);
                  break;
                default:
                  if (!v)
                    for (w = 1, v = new Array(m - 1); w < m; w++)
                      v[w - 1] = arguments[w];
                  p[b].fn.apply(p[b].context, v);
              }
          }
          return !0;
        }),
        (l.prototype.on = function (u, f, d) {
          return s(this, u, f, d, !1);
        }),
        (l.prototype.once = function (u, f, d) {
          return s(this, u, f, d, !0);
        }),
        (l.prototype.removeListener = function (u, f, d, h) {
          var g = r ? r + u : u;
          if (!this._events[g]) return this;
          if (!f) return a(this, g), this;
          var y = this._events[g];
          if (y.fn)
            y.fn === f &&
              (!h || y.once) &&
              (!d || y.context === d) &&
              a(this, g);
          else {
            for (var x = 0, p = [], m = y.length; x < m; x++)
              (y[x].fn !== f ||
                (h && !y[x].once) ||
                (d && y[x].context !== d)) &&
                p.push(y[x]);
            p.length
              ? (this._events[g] = p.length === 1 ? p[0] : p)
              : a(this, g);
          }
          return this;
        }),
        (l.prototype.removeAllListeners = function (u) {
          var f;
          return (
            u
              ? ((f = r ? r + u : u), this._events[f] && a(this, f))
              : ((this._events = new i()), (this._eventsCount = 0)),
            this
          );
        }),
        (l.prototype.off = l.prototype.removeListener),
        (l.prototype.addListener = l.prototype.on),
        (l.prefixed = r),
        (l.EventEmitter = l),
        typeof t < "u" && (t.exports = l);
    },
  }),
  _p = sn({
    "../../../node_modules/process/browser.js"(e, t) {
      var n = (t.exports = {}),
        r,
        i;
      function o() {
        throw new Error("setTimeout has not been defined");
      }
      function s() {
        throw new Error("clearTimeout has not been defined");
      }
      (function () {
        try {
          typeof setTimeout == "function" ? (r = setTimeout) : (r = o);
        } catch {
          r = o;
        }
        try {
          typeof clearTimeout == "function" ? (i = clearTimeout) : (i = s);
        } catch {
          i = s;
        }
      })();
      function a(p) {
        if (r === setTimeout) return setTimeout(p, 0);
        if ((r === o || !r) && setTimeout)
          return (r = setTimeout), setTimeout(p, 0);
        try {
          return r(p, 0);
        } catch {
          try {
            return r.call(null, p, 0);
          } catch {
            return r.call(this, p, 0);
          }
        }
      }
      function l(p) {
        if (i === clearTimeout) return clearTimeout(p);
        if ((i === s || !i) && clearTimeout)
          return (i = clearTimeout), clearTimeout(p);
        try {
          return i(p);
        } catch {
          try {
            return i.call(null, p);
          } catch {
            return i.call(this, p);
          }
        }
      }
      var c = [],
        u = !1,
        f,
        d = -1;
      function h() {
        !u ||
          !f ||
          ((u = !1), f.length ? (c = f.concat(c)) : (d = -1), c.length && g());
      }
      function g() {
        if (!u) {
          var p = a(h);
          u = !0;
          for (var m = c.length; m; ) {
            for (f = c, c = []; ++d < m; ) f && f[d].run();
            (d = -1), (m = c.length);
          }
          (f = null), (u = !1), l(p);
        }
      }
      n.nextTick = function (p) {
        var m = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var v = 1; v < arguments.length; v++) m[v - 1] = arguments[v];
        c.push(new y(p, m)), c.length === 1 && !u && a(g);
      };
      function y(p, m) {
        (this.fun = p), (this.array = m);
      }
      (y.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
        (n.title = "browser"),
        (n.browser = !0),
        (n.env = {}),
        (n.argv = []),
        (n.version = ""),
        (n.versions = {});
      function x() {}
      (n.on = x),
        (n.addListener = x),
        (n.once = x),
        (n.off = x),
        (n.removeListener = x),
        (n.removeAllListeners = x),
        (n.emit = x),
        (n.prependListener = x),
        (n.prependOnceListener = x),
        (n.listeners = function (p) {
          return [];
        }),
        (n.binding = function (p) {
          throw new Error("process.binding is not supported");
        }),
        (n.cwd = function () {
          return "/";
        }),
        (n.chdir = function (p) {
          throw new Error("process.chdir is not supported");
        }),
        (n.umask = function () {
          return 0;
        });
    },
  }),
  NF = sn({
    "../../../node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js"(
      e
    ) {
      "use strict";
      var t = typeof Symbol == "function" && Symbol.for,
        n = t ? Symbol.for("react.element") : 60103,
        r = t ? Symbol.for("react.portal") : 60106,
        i = t ? Symbol.for("react.fragment") : 60107,
        o = t ? Symbol.for("react.strict_mode") : 60108,
        s = t ? Symbol.for("react.profiler") : 60114,
        a = t ? Symbol.for("react.provider") : 60109,
        l = t ? Symbol.for("react.context") : 60110,
        c = t ? Symbol.for("react.async_mode") : 60111,
        u = t ? Symbol.for("react.concurrent_mode") : 60111,
        f = t ? Symbol.for("react.forward_ref") : 60112,
        d = t ? Symbol.for("react.suspense") : 60113,
        h = t ? Symbol.for("react.suspense_list") : 60120,
        g = t ? Symbol.for("react.memo") : 60115,
        y = t ? Symbol.for("react.lazy") : 60116,
        x = t ? Symbol.for("react.block") : 60121,
        p = t ? Symbol.for("react.fundamental") : 60117,
        m = t ? Symbol.for("react.responder") : 60118,
        v = t ? Symbol.for("react.scope") : 60119;
      function b(w) {
        if (typeof w == "object" && w !== null) {
          var k = w.$$typeof;
          switch (k) {
            case n:
              switch (((w = w.type), w)) {
                case c:
                case u:
                case i:
                case s:
                case o:
                case d:
                  return w;
                default:
                  switch (((w = w && w.$$typeof), w)) {
                    case l:
                    case f:
                    case y:
                    case g:
                    case a:
                      return w;
                    default:
                      return k;
                  }
              }
            case r:
              return k;
          }
        }
      }
      function C(w) {
        return b(w) === u;
      }
      (e.AsyncMode = c),
        (e.ConcurrentMode = u),
        (e.ContextConsumer = l),
        (e.ContextProvider = a),
        (e.Element = n),
        (e.ForwardRef = f),
        (e.Fragment = i),
        (e.Lazy = y),
        (e.Memo = g),
        (e.Portal = r),
        (e.Profiler = s),
        (e.StrictMode = o),
        (e.Suspense = d),
        (e.isAsyncMode = function (w) {
          return C(w) || b(w) === c;
        }),
        (e.isConcurrentMode = C),
        (e.isContextConsumer = function (w) {
          return b(w) === l;
        }),
        (e.isContextProvider = function (w) {
          return b(w) === a;
        }),
        (e.isElement = function (w) {
          return typeof w == "object" && w !== null && w.$$typeof === n;
        }),
        (e.isForwardRef = function (w) {
          return b(w) === f;
        }),
        (e.isFragment = function (w) {
          return b(w) === i;
        }),
        (e.isLazy = function (w) {
          return b(w) === y;
        }),
        (e.isMemo = function (w) {
          return b(w) === g;
        }),
        (e.isPortal = function (w) {
          return b(w) === r;
        }),
        (e.isProfiler = function (w) {
          return b(w) === s;
        }),
        (e.isStrictMode = function (w) {
          return b(w) === o;
        }),
        (e.isSuspense = function (w) {
          return b(w) === d;
        }),
        (e.isValidElementType = function (w) {
          return (
            typeof w == "string" ||
            typeof w == "function" ||
            w === i ||
            w === u ||
            w === s ||
            w === o ||
            w === d ||
            w === h ||
            (typeof w == "object" &&
              w !== null &&
              (w.$$typeof === y ||
                w.$$typeof === g ||
                w.$$typeof === a ||
                w.$$typeof === l ||
                w.$$typeof === f ||
                w.$$typeof === p ||
                w.$$typeof === m ||
                w.$$typeof === v ||
                w.$$typeof === x))
          );
        }),
        (e.typeOf = b);
    },
  }),
  $F = sn({
    "../../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(
      e,
      t
    ) {
      "use strict";
      t.exports = NF();
    },
  }),
  nu = sn({
    "../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(
      e,
      t
    ) {
      "use strict";
      var n = $F(),
        r = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        i = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        o = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
        },
        s = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        a = {};
      (a[n.ForwardRef] = o), (a[n.Memo] = s);
      function l(x) {
        return n.isMemo(x) ? s : a[x.$$typeof] || r;
      }
      var c = Object.defineProperty,
        u = Object.getOwnPropertyNames,
        f = Object.getOwnPropertySymbols,
        d = Object.getOwnPropertyDescriptor,
        h = Object.getPrototypeOf,
        g = Object.prototype;
      function y(x, p, m) {
        if (typeof p != "string") {
          if (g) {
            var v = h(p);
            v && v !== g && y(x, v, m);
          }
          var b = u(p);
          f && (b = b.concat(f(p)));
          for (var C = l(x), w = l(p), k = 0; k < b.length; ++k) {
            var E = b[k];
            if (!i[E] && !(m && m[E]) && !(w && w[E]) && !(C && C[E])) {
              var P = d(p, E);
              try {
                c(x, E, P);
              } catch {}
            }
          }
        }
        return x;
      }
      t.exports = y;
    },
  }),
  WF = sn({
    "../../../node_modules/archy/index.js"(e, t) {
      t.exports = function n(r, i, o) {
        i === void 0 && (i = ""), o || (o = {});
        var s = function (u) {
          var f = {
            "\u2502": "|",
            "\u2514": "`",
            "\u251C": "+",
            "\u2500": "-",
            "\u252C": "-",
          };
          return o.unicode === !1 ? f[u] : u;
        };
        typeof r == "string" && (r = { label: r });
        var a = r.nodes || [],
          l = (r.label || "").split(`
`),
          c =
            `
` +
            i +
            (a.length ? s("\u2502") : " ") +
            " ";
        return (
          i +
          l.join(c) +
          `
` +
          a
            .map(function (u, f) {
              var d = f === a.length - 1,
                h = u.nodes && u.nodes.length,
                g = i + (d ? " " : s("\u2502")) + " ";
              return (
                i +
                s(d ? "\u2514" : "\u251C") +
                s("\u2500") +
                s(h ? "\u252C" : "\u2500") +
                " " +
                n(u, g, o).slice(i.length + 2)
              );
            })
            .join("")
        );
      };
    },
  }),
  jF = sn({
    "../../../node_modules/fontfaceobserver/fontfaceobserver.standalone.js"(
      e,
      t
    ) {
      (function () {
        function n(p, m) {
          document.addEventListener
            ? p.addEventListener("scroll", m, !1)
            : p.attachEvent("scroll", m);
        }
        function r(p) {
          document.body
            ? p()
            : document.addEventListener
            ? document.addEventListener("DOMContentLoaded", function m() {
                document.removeEventListener("DOMContentLoaded", m), p();
              })
            : document.attachEvent("onreadystatechange", function m() {
                (document.readyState == "interactive" ||
                  document.readyState == "complete") &&
                  (document.detachEvent("onreadystatechange", m), p());
              });
        }
        function i(p) {
          (this.a = document.createElement("div")),
            this.a.setAttribute("aria-hidden", "true"),
            this.a.appendChild(document.createTextNode(p)),
            (this.b = document.createElement("span")),
            (this.c = document.createElement("span")),
            (this.h = document.createElement("span")),
            (this.f = document.createElement("span")),
            (this.g = -1),
            (this.b.style.cssText =
              "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
            (this.c.style.cssText =
              "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
            (this.f.style.cssText =
              "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
            (this.h.style.cssText =
              "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;"),
            this.b.appendChild(this.h),
            this.c.appendChild(this.f),
            this.a.appendChild(this.b),
            this.a.appendChild(this.c);
        }
        function o(p, m) {
          p.a.style.cssText =
            "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" +
            m +
            ";";
        }
        function s(p) {
          var m = p.a.offsetWidth,
            v = m + 100;
          return (
            (p.f.style.width = v + "px"),
            (p.c.scrollLeft = v),
            (p.b.scrollLeft = p.b.scrollWidth + 100),
            p.g !== m ? ((p.g = m), !0) : !1
          );
        }
        function a(p, m) {
          function v() {
            var C = b;
            s(C) && C.a.parentNode && m(C.g);
          }
          var b = p;
          n(p.b, v), n(p.c, v), s(p);
        }
        function l(p, m) {
          var v = m || {};
          (this.family = p),
            (this.style = v.style || "normal"),
            (this.weight = v.weight || "normal"),
            (this.stretch = v.stretch || "normal");
        }
        var c = null,
          u = null,
          f = null,
          d = null;
        function h() {
          if (u === null)
            if (g() && /Apple/.test(L.navigator.vendor)) {
              var p = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
                L.navigator.userAgent
              );
              u = !!p && 603 > parseInt(p[1], 10);
            } else u = !1;
          return u;
        }
        function g() {
          return d === null && (d = !!document.fonts), d;
        }
        function y() {
          if (f === null) {
            var p = document.createElement("div");
            try {
              p.style.font = "condensed 100px sans-serif";
            } catch {}
            f = p.style.font !== "";
          }
          return f;
        }
        function x(p, m) {
          return [p.style, p.weight, y() ? p.stretch : "", "100px", m].join(
            " "
          );
        }
        (l.prototype.load = function (p, m) {
          var v = this,
            b = p || "BESbswy",
            C = 0,
            w = m || 3e3,
            k = new Date().getTime();
          return new Promise(function (E, P) {
            if (g() && !h()) {
              var I = new Promise(function (_, Z) {
                  function N() {
                    new Date().getTime() - k >= w
                      ? Z(Error("" + w + "ms timeout exceeded"))
                      : document.fonts
                          .load(x(v, '"' + v.family + '"'), b)
                          .then(function (ee) {
                            1 <= ee.length ? _() : setTimeout(N, 25);
                          }, Z);
                  }
                  N();
                }),
                H = new Promise(function (_, Z) {
                  C = setTimeout(function () {
                    Z(Error("" + w + "ms timeout exceeded"));
                  }, w);
                });
              Promise.race([H, I]).then(function () {
                clearTimeout(C), E(v);
              }, P);
            } else
              r(function () {
                function _() {
                  var J;
                  (J =
                    (z != -1 && j != -1) ||
                    (z != -1 && D != -1) ||
                    (j != -1 && D != -1)) &&
                    ((J = z != j && z != D && j != D) ||
                      (c === null &&
                        ((J = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                          L.navigator.userAgent
                        )),
                        (c =
                          !!J &&
                          (536 > parseInt(J[1], 10) ||
                            (parseInt(J[1], 10) === 536 &&
                              11 >= parseInt(J[2], 10))))),
                      (J =
                        c &&
                        ((z == Q && j == Q && D == Q) ||
                          (z == V && j == V && D == V) ||
                          (z == te && j == te && D == te)))),
                    (J = !J)),
                    J &&
                      (Y.parentNode && Y.parentNode.removeChild(Y),
                      clearTimeout(C),
                      E(v));
                }
                function Z() {
                  if (new Date().getTime() - k >= w)
                    Y.parentNode && Y.parentNode.removeChild(Y),
                      P(Error("" + w + "ms timeout exceeded"));
                  else {
                    var J = document.hidden;
                    (J === !0 || J === void 0) &&
                      ((z = N.a.offsetWidth),
                      (j = ee.a.offsetWidth),
                      (D = G.a.offsetWidth),
                      _()),
                      (C = setTimeout(Z, 50));
                  }
                }
                var N = new i(b),
                  ee = new i(b),
                  G = new i(b),
                  z = -1,
                  j = -1,
                  D = -1,
                  Q = -1,
                  V = -1,
                  te = -1,
                  Y = document.createElement("div");
                (Y.dir = "ltr"),
                  o(N, x(v, "sans-serif")),
                  o(ee, x(v, "serif")),
                  o(G, x(v, "monospace")),
                  Y.appendChild(N.a),
                  Y.appendChild(ee.a),
                  Y.appendChild(G.a),
                  document.body.appendChild(Y),
                  (Q = N.a.offsetWidth),
                  (V = ee.a.offsetWidth),
                  (te = G.a.offsetWidth),
                  Z(),
                  a(N, function (J) {
                    (z = J), _();
                  }),
                  o(N, x(v, '"' + v.family + '",sans-serif')),
                  a(ee, function (J) {
                    (j = J), _();
                  }),
                  o(ee, x(v, '"' + v.family + '",serif')),
                  a(G, function (J) {
                    (D = J), _();
                  }),
                  o(G, x(v, '"' + v.family + '",monospace'));
              });
          });
        }),
          typeof t == "object"
            ? (t.exports = l)
            : ((L.FontFaceObserver = l),
              (L.FontFaceObserver.prototype.load = l.prototype.load));
      })();
    },
  });
function gp(e, t) {
  return S.isValidElement(e)
    ? S.cloneElement(e, { style: t })
    : S.createElement(e, { style: t });
}
var UF = class extends Error {},
  XF = class extends Re {
    constructor(e) {
      super(e),
        (this.state = { error: void 0, forceUpdateKey: e.forceUpdateKey });
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      if (e.forceUpdateKey !== t.forceUpdateKey) {
        let n = { forceUpdateKey: e.forceUpdateKey };
        return t.error && (n.error = void 0), n;
      }
      return null;
    }
    render() {
      if (this.state.error === void 0) return this.props.children;
      if (!(this.state.error instanceof UF)) throw this.state.error;
      let { notFoundPage: e, defaultPageStyle: t } = this.props;
      if (!e) throw this.state.error;
      return gp(e, t);
    }
  },
  GF = ":([a-z]\\w*)",
  Si = new RegExp(GF, "gi");
function xS(e, t) {
  return e.replace(Si, (n, r) => {
    let i = t[r];
    return typeof i != "string" || i.length === 0 ? n : encodeURIComponent(i);
  });
}
function SS(e, t) {
  if (!e.startsWith("/") || !t.startsWith("/"))
    throw new Error("from/to paths are expected to be absolute");
  let [n] = $x(e),
    [r, i] = $x(t),
    o = YF(n, r);
  return (
    o === "" && (o = "."),
    !o.startsWith(".") && !o.startsWith("/") && (o = "./" + o),
    o + "/" + i
  );
}
function $x(e) {
  let t = e.lastIndexOf("/");
  return [e.substring(0, t + 1), e.substring(t + 1)];
}
var qh = 46,
  bo = 47,
  Nr = (e, t) => e.charCodeAt(t),
  Wx = (e, t) => e.lastIndexOf(t),
  So = (e, t, n) => e.slice(t, n);
function YF(e, t) {
  if (e === t || ((e = "/" + Ux(e)), (t = "/" + Ux(t)), e === t)) return "";
  let n = 1,
    r = e.length,
    i = r - n,
    o = 1,
    s = t.length - o,
    a = i < s ? i : s,
    l = -1,
    c = 0;
  for (; c < a; c++) {
    let f = Nr(e, n + c);
    if (f !== Nr(t, o + c)) break;
    f === bo && (l = c);
  }
  if (c === a)
    if (s > a) {
      if (Nr(t, o + c) === bo) return So(t, o + c + 1);
      if (c === 0) return So(t, o + c);
    } else i > a && (Nr(e, n + c) === bo ? (l = c) : c === 0 && (l = 0));
  let u = "";
  for (c = n + l + 1; c <= r; ++c)
    (c === r || Nr(e, c) === bo) && (u += u.length === 0 ? ".." : "/..");
  return `${u}${So(t, o + l)}`;
}
var KF = !1,
  Tc = "/",
  jx = (e) => e === bo;
function Ux(e) {
  let t = "",
    n = 0,
    r = -1,
    i = 0,
    o = 0;
  for (let s = 0; s <= e.length; ++s) {
    if (s < e.length) o = Nr(e, s);
    else {
      if (jx(o)) break;
      o = bo;
    }
    if (jx(o)) {
      if (!(r === s - 1 || i === 1))
        if (i === 2) {
          if (
            t.length < 2 ||
            n !== 2 ||
            Nr(t, t.length - 1) !== qh ||
            Nr(t, t.length - 2) !== qh
          ) {
            if (t.length > 2) {
              let a = Wx(t, Tc);
              a === -1
                ? ((t = ""), (n = 0))
                : ((t = So(t, 0, a)), (n = t.length - 1 - Wx(t, Tc))),
                (r = s),
                (i = 0);
              continue;
            } else if (t.length !== 0) {
              (t = ""), (n = 0), (r = s), (i = 0);
              continue;
            }
          }
          KF && ((t += t.length > 0 ? `${Tc}..` : ".."), (n = 2));
        } else
          t.length > 0
            ? (t += `${Tc}${So(e, r + 1, s)}`)
            : (t = So(e, r + 1, s)),
            (n = s - r - 1);
      (r = s), (i = 0);
    } else o === qh && i !== -1 ? ++i : (i = -1);
  }
  return t;
}
function wS(e) {
  let t = typeof L < "u" ? L.location.search : "";
  return t ? qF(t, e) : e;
}
function qF(e, t) {
  let n = t.indexOf("#"),
    r = n === -1 ? t : t.substring(0, n),
    i = n === -1 ? "" : t.substring(n),
    o = r.indexOf("?");
  if (o === -1) return r + e + i;
  let s = new URLSearchParams(e),
    a = r.substring(o + 1),
    l = new URLSearchParams(a);
  for (let [c, u] of s) l.has(c) || l.append(c, u);
  return r.substring(0, o + 1) + l.toString() + i;
}
function Uc(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function Qs(e) {
  return typeof e == "string";
}
var QF = "preload";
function CS(e) {
  return typeof e == "object" && e !== null && !S.isValidElement(e) && QF in e;
}
function OB(e) {
  let t = S.lazy(e),
    n,
    r,
    i = S.forwardRef(function (s, a) {
      return S.createElement(r ?? t, Object.assign(a ? { ref: a } : {}, s));
    });
  return (
    (i.preload = () => (n || (n = e().then((o) => ((r = o.default), r))), n)), i
  );
}
function ru(e, t) {
  if (t && e) return e.elements && t in e.elements ? e.elements[t] : t;
}
function ZF(e) {
  return /bot|Mediapartners-Google|Google-PageRenderer|yandex|ia_archiver/i.test(
    e
  );
}
async function JF(e, t, n, r, i, o, s) {
  var a, l, c;
  let u = e,
    f = !1,
    d = { ...o },
    h = Array.from(u.matchAll(Si)),
    g = await Promise.all(
      h.map(async (m) => {
        var v;
        let b = m?.[0],
          C = m?.[1];
        if (!b || !C)
          throw new Error(
            "Failed to replace path variables: unexpected regex match group"
          );
        let w = o[C];
        if (!w || !Qs(w))
          throw new Error(`No slug found for path variable ${C}`);
        let k = await ((v = s?.[i]) === null || v === void 0
          ? void 0
          : v.call(s));
        if (!k || !t) return w;
        let E = await k.getRecordIdBySlug(w, t);
        if (!E) return w;
        let P = await k.getSlugByRecordId(E, n);
        if (!P) {
          f = !0;
          let I = await k.getSlugByRecordId(E, r);
          return I && (d[C] = I), I ?? w;
        }
        return (d[C] = P), P;
      })
    ),
    y = 0,
    x = "",
    p = !1;
  for (let m = 0; m < h.length; m++) {
    let v = h[m],
      b = g[m];
    !v ||
      !b ||
      ((x += u.substring(y, v.index)),
      (y =
        ((a = v.index) !== null && a !== void 0 ? a : 0) +
        ((c = (l = v[0]) === null || l === void 0 ? void 0 : l.length) !==
          null && c !== void 0
          ? c
          : 0)),
      (x += g[m]),
      (p = !0));
  }
  return p && (u = x), { path: u, pathVariables: d, isMissingInLocale: f };
}
async function e2({
  currentLocale: e,
  nextLocale: t,
  defaultLocale: n,
  route: r,
  pathVariables: i,
  collectionUtils: o,
  preserveQueryParams: s,
}) {
  let { path: a } = r,
    l = { path: a, pathVariables: i, isMissingInLocale: !1 };
  if (!a) return l;
  if (i && r.collectionId)
    try {
      l = await JF(a, e, t, n, r.collectionId, i, o);
    } catch {}
  return (
    t.slug && (l.path = "/" + t.slug + l.path),
    s && l.path && (l.path = wS(l.path)),
    l
  );
}
function t2(e, t, { global: n, routes: r }) {
  var i;
  return ((i = r[e]) === null || i === void 0 ? void 0 : i[t]) || n;
}
var n2 = { global: void 0, routes: {} },
  kS = S.createContext(n2);
function BB({ children: e, value: t }) {
  return T(kS.Provider, { value: t, children: e });
}
function r2() {
  return S.useContext(kS);
}
var Qh = 10,
  i2 = 1e4;
function o2(e) {
  let t = Qh,
    n = e.next(0),
    r = [n.value];
  for (; !n.done && t < i2; ) (n = e.next(t)), r.push(n.value), (t += Qh);
  return (
    r.length === 1 && r.push(n.value),
    { easing: `linear(${r.join(",")})`, duration: t - Qh }
  );
}
var or = (e) => `--view-transition-${e}`;
function yp(e) {
  return [parseFloat(e), e.endsWith("px") ? "px" : "%"];
}
function TS(e) {
  let { innerWidth: t, innerHeight: n } = L,
    [r, i] = yp(e.x),
    [o, s] = yp(e.y);
  return {
    x: i === "px" ? r : t * (r / 100),
    y: s === "px" ? o : n * (o / 100),
  };
}
var s2 = {
    makeKeyframe: (e, t, n) => {
      let r = 0;
      return (
        ((n === "exit" &&
          e.angularDirection === "clockwise" &&
          t === "start") ||
          (n === "exit" &&
            e.angularDirection === "counter-clockwise" &&
            t === "end") ||
          (n === "enter" &&
            e.angularDirection === "counter-clockwise" &&
            t === "start") ||
          (n === "enter" &&
            e.angularDirection === "clockwise" &&
            t === "end")) &&
          (r = (e.sweepAngle / 360) * 100),
        `${or("conic-offset")}: ${r}%;`
      );
    },
    makeStyles: (e, t) => {
      let n = `var(${or("conic-offset")})`,
        r =
          (t === "exit" && e.angularDirection === "clockwise") ||
          (t === "enter" && e.angularDirection === "counter-clockwise"),
        i = r ? "transparent" : "black",
        o = r ? "black" : "transparent",
        s = "conic-gradient(from ";
      return (
        (s += `${e.angle}deg at ${e.x} ${e.y}, `),
        (s += `${i} 0%, ${i} ${n}, `),
        (s += `${o} ${n}, ${o} 100%)`),
        `mask-image: ${s}; -webkit-mask-image: ${s};`
      );
    },
    makePropertyRules: () => `
        @property ${or("conic-offset")} {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
        }
    `,
  },
  a2 = {
    makeKeyframe: (e, t) => {
      let { x: n, y: r } = TS(e);
      return t === "start"
        ? `clip-path: circle(0 at ${n}px ${r}px);`
        : `clip-path: circle(${Math.hypot(
            Math.max(n, L.innerWidth - n),
            Math.max(r, L.innerHeight - r)
          )}px at ${n}px ${r}px);`;
    },
  },
  l2 = {
    makeKeyframe: (e, t) => {
      let { x: n, y: r } = TS(e),
        i = L.innerHeight - r,
        o = L.innerWidth - n;
      return t === "start"
        ? `clip-path: inset(${r}px ${o}px ${i}px ${n}px round ${e.round}px);`
        : "clip-path: inset(0 round 0);";
    },
  },
  c2 = {
    makeKeyframe: (e, t, n) => {
      let [, r] = yp(e.width),
        i = `0${r}`;
      return (
        ((t === "start" && n === "exit") || (t === "end" && n === "enter")) &&
          (i = e.width),
        `${or("blinds-width")}: ${i};`
      );
    },
    makeStyles: (e, t) => {
      let n = `var(${or("blinds-width")})`,
        r = t === "exit" ? "transparent" : "black",
        i = t === "exit" ? "black" : "transparent",
        o = "repeating-linear-gradient(";
      return (
        (o += e.angle + 90 + "deg, "),
        (o += `${r} 0px, ${r} ${n}, `),
        (o += `${i} ${n}, ${i} ${e.width})`),
        `mask-image: ${o}; -webkit-mask-image: ${o};`
      );
    },
    makePropertyRules: () => `
            @property ${or("blinds-width")} {
                syntax: '<length-percentage>';
                initial-value: 0px;
                inherits: false;
            }
        `,
  },
  u2 = {
    makeKeyframe: (e, t, n) => {
      let r =
        (t === "start" && n === "exit") || (t === "end" && n === "enter")
          ? 1
          : 0;
      return `${or("wipe-offset")}: ${r};`;
    },
    makeStyles: (e, t) => {
      let n = `var(${or("wipe-offset")})`,
        r = t === "exit" ? "transparent" : "black",
        i = t === "exit" ? "black" : "transparent",
        o = "linear-gradient(";
      return (
        (o += e.angle + 90 + "deg, "),
        (o += `${r} calc(calc(0% - ${e.width}) + calc(calc(100% + ${e.width}) * ${n})), `),
        (o += `${i} calc(calc(100% + ${e.width}) * ${n}))`),
        `mask-image: ${o}; -webkit-mask-image: ${o};`
      );
    },
    makePropertyRules: () => `
            @property ${or("wipe-offset")} {
                syntax: '<number>';
                initial-value: 0;
                inherits: false;
            }
        `,
  },
  f2 = { circle: a2, conic: s2, inset: l2, blinds: c2, wipe: u2 },
  d2 = {
    opacity: 1,
    x: "0px",
    y: "0px",
    scale: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    mask: void 0,
  };
function Xx(e, t, n, r) {
  var i;
  let o = `
      opacity: ${e.opacity};
      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);
    `;
  return (
    e.mask &&
      (o +=
        ((i = r?.makeKeyframe) === null || i === void 0
          ? void 0
          : i.call(r, e.mask, t, n)) || ""),
    o
  );
}
function h2(e) {
  return e ? f2[e] : void 0;
}
function Gx(e, { transition: t, ...n }) {
  var r;
  let i = "view-transition-" + e,
    o = { duration: "0s", easing: "linear" };
  if (t.type === "tween")
    (o.duration = t.duration + "s"),
      (o.easing = `cubic-bezier(${t.ease.join(",")})`);
  else if (t.type === "spring") {
    let { easing: c, duration: u } = o2(
      Jo({
        keyframes: [0, 1],
        stiffness: t.stiffness,
        damping: t.damping,
        mass: t.mass,
        restDelta: 0.001,
        restSpeed: 1e-4,
      })
    );
    (o.duration = u + "ms"), (o.easing = c);
  }
  let s = h2((r = n?.mask) === null || r === void 0 ? void 0 : r.type),
    a = Xx(n, "start", e, s),
    l = Xx({ ...d2, mask: n.mask }, "end", e, s);
  return (
    e === "exit" && ([a, l] = [l, a]),
    `
        ${n.mask && s?.makePropertyRules ? s.makePropertyRules(n.mask) : ""}

        @keyframes ${i} {
            0% {
                ${a}
            }

            100% {
                ${l}
            }
        }

        ::view-transition-${e === "enter" ? "new" : "old"}(root) {
            animation-name: ${i};
            animation-duration: ${o.duration};
            animation-delay: ${t.delay}s;
            animation-timing-function: ${o.easing};
            animation-fill-mode: both;
            ${n.mask && s?.makeStyles ? s.makeStyles(n.mask, e) : ""}
        }
    `
  );
}
var ES = "view-transition-styles",
  p2 = {
    x: "0px",
    y: "0px",
    scale: 1,
    opacity: 1,
    rotate3d: !1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    mask: void 0,
    transition: {
      type: "tween",
      delay: 0,
      duration: 0.2,
      ease: [0.27, 0, 0.51, 1],
      stiffness: 400,
      damping: 30,
      mass: 1,
    },
  };
function m2({ exit: e = p2, enter: t }) {
  let n = document.createElement("style");
  n.id = ES;
  let r = `
        @media (prefers-reduced-motion) {
            ::view-transition-group(*),
            ::view-transition-old(*),
            ::view-transition-new(*) {
                animation: none !important;
            }
        }
    `;
  (e.mask ||
    t.mask ||
    e.opacity ||
    t.opacity ||
    e.transition.delay ||
    t.transition.delay) &&
    (r += `
            ::view-transition-old(*),
            ::view-transition-new(*) {
                mix-blend-mode: normal;
            }
        `),
    (r += `
        ::view-transition-old(*),
        ::view-transition-new(*) {
            backface-visibility: hidden;
        }
    `),
    (r += Gx("exit", e)),
    (r += Gx("enter", t)),
    (n.textContent = r),
    document.head.appendChild(n);
}
function v2() {
  K.render(() => {
    let e = document.getElementById(ES);
    e && document.head.removeChild(e);
  });
}
function g2() {
  return !!document.startViewTransition;
}
function y2(e, t) {
  if (!g2()) return void e();
  m2(t);
  let n = document.startViewTransition(e);
  return (
    Promise.all([n.ready, n.finished])
      .then(v2)
      .catch(() => {}),
    n
  );
}
function RS() {
  let e = r2(),
    t = A(void 0);
  return (
    W(() => {
      t.current && (t.current(), (t.current = void 0));
    }),
    fe(
      (n, r, i) => {
        let o = t2(n, r, e);
        if (o) {
          let s = new Promise((l) => {
            t.current = l;
          });
          return y2(async () => {
            i(), await s;
          }, o);
        } else return i();
      },
      [e]
    )
  );
}
function Yx(
  e,
  t,
  {
    currentRoutePath: n,
    currentPathVariables: r,
    hash: i,
    pathVariables: o,
    localeId: s,
    preserveQueryParams: a,
  }
) {
  let { path: l } = t;
  if (l)
    try {
      let c = iu(t, {
        currentRoutePath: n,
        currentPathVariables: r,
        hash: i,
        pathVariables: o,
        preserveQueryParams: a,
      });
      PS({ routeId: e, hash: i, pathVariables: o, localeId: s }, c);
    } catch {}
}
function b2(e, t) {
  L.history.replaceState(e, "", t);
}
function PS(e, t) {
  L.history.pushState(e, "", t);
}
function x2({
  disabled: e,
  routeId: t,
  initialPathVariables: n,
  initialLocaleId: r,
}) {
  S.useLayoutEffect(() => {
    e || b2({ routeId: t, pathVariables: n, localeId: r });
  }, []);
}
function S2(e, t) {
  let n = RS(),
    r = S.useRef(void 0),
    i = S.useCallback(
      ({ state: s }) => {
        var a, l, c;
        if (!Uc(s)) return;
        let { routeId: u, hash: f, pathVariables: d, localeId: h } = s;
        if (!Qs(u)) return;
        let g = () => {
            t(
              u,
              Qs(h) ? h : void 0,
              Qs(f) ? f : void 0,
              Uc(d) ? d : void 0,
              !1,
              !0
            );
          },
          y = n(e.current, u, g);
        y
          ? y.updateCallbackDone
              .then(
                (a = r.current) === null || a === void 0 ? void 0 : a.resolve
              )
              .catch(
                (l = r.current) === null || l === void 0 ? void 0 : l.reject
              )
          : (c = r.current) === null || c === void 0 || c.resolve();
      },
      [e, t, n]
    ),
    o = fe((s) => {
      s.navigationType === "traverse" &&
        s.intercept({
          async handler() {
            await new Promise((a, l) => {
              r.current = { resolve: a, reject: l };
            });
          },
          scroll: "after-transition",
        });
    }, []);
  S.useEffect(() => {
    var s;
    return (
      L.addEventListener("popstate", i),
      (s = L.navigation) === null ||
        s === void 0 ||
        s.addEventListener("navigate", o),
      () => {
        var a;
        L.removeEventListener("popstate", i),
          (a = L.navigation) === null ||
            a === void 0 ||
            a.removeEventListener("navigate", o);
      }
    );
  }, [i, o]);
}
function w2(e, t, n) {
  let r = ru(t, e);
  if (!r) return;
  let i = Object.assign({}, t?.elements, n);
  return r.replace(Si, (o, s) => {
    var a;
    return String((a = i[s]) !== null && a !== void 0 ? a : o);
  });
}
function iu(
  e,
  {
    currentRoutePath: t,
    currentPathVariables: n,
    hash: r,
    pathVariables: i,
    hashVariables: o,
    relative: s = !0,
    preserveQueryParams: a,
  }
) {
  var l;
  let c = t ?? "/";
  n &&
    (c = c.replace(Si, (g, y) => {
      var x;
      return String((x = n[y]) !== null && x !== void 0 ? x : g);
    }));
  let f = (l = e?.path) !== null && l !== void 0 ? l : "/";
  i &&
    (f = f.replace(Si, (g, y) => {
      var x;
      return String((x = i[y]) !== null && x !== void 0 ? x : g);
    }));
  let d = w2(r, e, o),
    h = c === f && d;
  return (
    s && (f = SS(c, f)), (a || h) && (f = wS(f)), d && (f = `${f}#${d}`), f
  );
}
async function C2(e, t, n) {
  if (!e.path || !t) return !1;
  let i = `${n.slug ? `/${n.slug}` : ""}${xS(e.path, t)}`;
  return (await fetch(i, { method: "HEAD", redirect: "manual" })).type ===
    "opaqueredirect"
    ? ((L.location.href = L.location.origin + i), !0)
    : !1;
}
async function k2(e) {
  let t = await e2(e);
  if (t) {
    try {
      localStorage.setItem("preferredLocale", e.nextLocale.code);
    } catch {}
    try {
      if (typeof t.path != "string")
        throw new Error("Expected result.path to be a string");
      if (
        t.isMissingInLocale &&
        (await C2(e.route, t.pathVariables, e.nextLocale))
      )
        return;
      PS(
        {
          routeId: e.routeId,
          pathVariables: t.pathVariables,
          localeId: e.nextLocale.id,
        },
        t.path
      );
    } catch {}
    return t;
  }
}
function T2(e, t) {
  if (e.routeId !== t.routeId) return !1;
  if (e.pathVariables === t.pathVariables) return !0;
  let n = e.pathVariables || {},
    r = t.pathVariables || {};
  return n.length === r.length && Object.keys(n).every((i) => n[i] === r[i]);
}
function IS(e) {
  return S.useCallback((t) => e[t], [e]);
}
var Mp = S.createContext({});
function E2({ api: e, children: t }) {
  return T(Mp.Provider, { value: e, children: t });
}
function Ro() {
  return S.useContext(Mp);
}
function R2({ routes: e, children: t }) {
  let n = IS(e);
  return T(Mp.Provider, { value: { getRoute: n }, children: t });
}
var P2 = class extends Re {
    constructor(e) {
      super(e), (this.state = { error: void 0 });
    }
    static getDerivedStateFromError(e) {
      return (
        console.error(
          "Error in SuspenseErrorBoundary (getDerivedStateFromError).",
          e
        ),
        { error: e }
      );
    }
    componentDidCatch(e, t) {
      var n;
      console.error("Caught error in in SuspenseErrorBoundary.", e, t),
        (n = L.__framer_events) === null ||
          n === void 0 ||
          n.push([
            "published_site_load_recoverable_error",
            { message: String(e), componentStack: t?.componentStack },
          ]);
    }
    render() {
      return this.state.error === void 0
        ? this.props.children
        : T(Ea, { children: this.props.fallbackChildren });
    }
  },
  I2 = typeof L < "u" ? new Promise(() => {}) : null;
function F2() {
  if (typeof L > "u") return null;
  throw I2;
}
function L2({ children: e }) {
  return T(P2, {
    fallbackChildren: e,
    children: T(Ea, { fallback: T(F2, {}), children: e }),
  });
}
var Kx = "default";
function _2() {
  let [e, t] = S.useState(0);
  return [e, S.useCallback(() => t((n) => n + 1), [])];
}
var M2 = async () => {},
  O2 = { activeLocale: null, locales: [], setLocale: M2 },
  FS = S.createContext(O2);
function ou() {
  return S.useContext(FS);
}
function A2(e) {
  let t = `start-${e}`,
    n = `end-${e}`,
    r = A(void 0);
  return (
    W(() => {
      r.current && (r.current(), (r.current = void 0));
    }),
    fe(() => {
      let i = new Promise((o) => {
        r.current = o;
      });
      performance.mark(t),
        i
          .then(() => {
            performance.mark(n), performance.measure(e, t, n);
          })
          .catch(() => {});
    }, [e, t, n])
  );
}
function qx(e, t, n) {
  let r = e && document.getElementById(e);
  if (r) {
    B2(r, t);
    return;
  }
  n || L.scrollTo(0, 0);
}
function D2(e) {
  let t = S.useRef([]);
  return (
    S.useLayoutEffect(() => {
      var n;
      !((n = t.current) === null || n === void 0) &&
        n.length &&
        (t.current.forEach((r) => r()), (t.current = []));
    }, [e]),
    S.useCallback((n) => {
      t.current.push(n);
    }, [])
  );
}
function V2({
  defaultPageStyle: e,
  disableHistory: t,
  initialPathVariables: n,
  initialRoute: r,
  notFoundPage: i,
  collectionUtils: o,
  routes: s,
  initialLocaleId: a,
  locales: l = [],
  preserveQueryParams: c = !1,
  enableSuspenseThatPreservesDom: u,
}) {
  x2({ disabled: t, routeId: r, initialPathVariables: n, initialLocaleId: a });
  let f = RS(),
    d = A2("route-change"),
    h = S.useRef(r),
    g = S.useRef(n),
    y = S.useRef(a),
    x = y.current,
    p = S.useMemo(() => {
      var z;
      return (z = l.find(({ id: j }) => (x ? j === x : j === Kx))) !== null &&
        z !== void 0
        ? z
        : null;
    }, [x, l]),
    [m, v] = _2(),
    b = S.useMemo(
      () => ({
        activeLocale: p,
        locales: l,
        setLocale: async (z) => {
          let j;
          Qs(z) ? (j = z) : Uc(z) && (j = z.id);
          let D = l.find(({ id: Y }) => Y === Kx),
            Q = l.find(({ id: Y }) => Y === j);
          if (!Q) return;
          let V = h.current,
            te = s[V];
          if (te)
            try {
              let Y = await k2({
                currentLocale: p,
                nextLocale: Q,
                route: te,
                routeId: V,
                defaultLocale: D,
                pathVariables: g.current,
                collectionUtils: o,
                preserveQueryParams: c,
              });
              if (!Y) return;
              (g.current = Y.pathVariables),
                (y.current = Q.id),
                f(h.current, V, () => Lo(v)),
                d();
            } catch {}
        },
      }),
      [p, o, v, l, d, s, f, c]
    ),
    C = D2(m),
    w = S.useCallback(
      (z, j, D, Q, V = !1, te = !1) => {
        (h.current = z),
          (g.current = Q),
          (y.current = j),
          C(() => {
            qx(D, V, te);
          }),
          Lo(v),
          d();
      },
      [v, d, C]
    );
  S2(h, w);
  let k = S.useCallback(
      (z, j, D, Q) => {
        var V, te;
        let Y = s[z];
        if (D) {
          let re = new Set(),
            ct = (V = Y?.path) !== null && V !== void 0 ? V : "/";
          for (let q of ct.matchAll(Si)) {
            let It = q[1];
            if (It === void 0)
              throw new Error(
                "A matching path variable should not be undefined"
              );
            re.add(It);
          }
          D = Object.fromEntries(Object.entries(D).filter(([q]) => re.has(q)));
        }
        let J = ru(Y, j);
        if (
          T2(
            { routeId: h.current, pathVariables: g.current },
            { routeId: z, pathVariables: D }
          )
        ) {
          if (
            ((te = L.history.state) === null || te === void 0
              ? void 0
              : te.hash) !== j &&
            !t
          ) {
            let re = s[z];
            re &&
              Yx(z, re, {
                currentRoutePath: re.path,
                currentPathVariables: g.current,
                pathVariables: D,
                hash: j,
                localeId: y.current,
                preserveQueryParams: c,
              });
          }
          qx(J, Q, !1);
          return;
        }
        if (!Y) return;
        if (!t) {
          let re = s[h.current];
          Yx(z, Y, {
            currentRoutePath: re?.path,
            currentPathVariables: g.current,
            hash: j,
            pathVariables: D,
            localeId: y.current,
            preserveQueryParams: c,
          });
        }
        let jt = () => w(z, y.current, J, D, Q, !1);
        f(h.current, z, jt);
      },
      [s, t, w, f, c]
    ),
    E = IS(s),
    P = h.current,
    I = g.current,
    H = S.useMemo(
      () => ({
        navigate: k,
        getRoute: E,
        currentRouteId: P,
        currentPathVariables: I,
        routes: s,
        collectionUtils: o,
        preserveQueryParams: c,
      }),
      [k, E, P, I, s, o, c]
    ),
    _ = s[h.current];
  if (!_) throw new Error(`Router cannot find route for ${h.current}`);
  let Z = !p || !_.includedLocales || _.includedLocales.includes(p.id),
    N = _.path && I ? xS(_.path, I) : _.path,
    ee = String(x) + N,
    G = T(XF, {
      notFoundPage: i,
      defaultPageStyle: e,
      forceUpdateKey: m,
      children: T(
        S.Fragment,
        { children: Z ? gp(_.page, e) : i && gp(i, e) },
        ee
      ),
    });
  return T(E2, {
    api: H,
    children: T(FS.Provider, {
      value: b,
      children: u
        ? T(L2, { children: G })
        : T(S.Suspense, { fallback: null, children: G }),
    }),
  });
}
function B2(e, t) {
  let n = t
    ? { behavior: "smooth", block: "start", inline: "nearest" }
    : void 0;
  e.scrollIntoView(n);
}
var Ec, Zh, Qx;
function H2(e) {
  if (Qx !== e) {
    Ec = {};
    for (let [t, { path: n }] of Object.entries(e))
      n && (Ec[n] = { path: n, depth: N2(n), routeId: t });
    (Zh = Object.values(Ec)),
      Zh.sort(({ depth: t }, { depth: n }) => n - t),
      (Qx = e);
  }
  return [Ec, Zh];
}
function z2(e, t, n = !0, r = []) {
  let [i, o] = H2(e),
    s,
    a,
    l = t;
  if (r.length > 0) {
    let d = l.split("/").find(Boolean);
    if (
      (d &&
        ((s = r.find(({ slug: h }) => h === d)),
        s && ((a = s.id), (l = l.substring(s.slug.length + 1)))),
      !a)
    ) {
      let h = r.find(({ slug: g }) => g === "");
      h && (a = h.id);
    }
  }
  let c = i[l];
  if (c) {
    let d = Zx(l, c.path);
    if (d.isMatch)
      return {
        routeId: c.routeId,
        localeId: a,
        pathVariables: d.pathVariables,
      };
  }
  for (let { path: d, routeId: h } of o) {
    let g = Zx(l, d);
    if (g.isMatch)
      return { routeId: h, localeId: a, pathVariables: g.pathVariables };
  }
  if (!n) throw new Error("No exact match found for path");
  let u = i["/"];
  if (u) return { routeId: u.routeId, localeId: a };
  let f = Object.keys(e)[0];
  if (!f) throw new Error("Router should not have undefined routes");
  return { routeId: f, localeId: a };
}
function N2(e) {
  let t = e.replace(/^\/|\/$/gu, "");
  return t === "" ? 0 : t.split("/").length;
}
function Zx(e, t) {
  let n = [],
    i = $2(t).replace(Si, (c, u) => (n.push(u), "([^/]+)")),
    o = new RegExp(i + "$"),
    s = e.match(o);
  if (!s) return { isMatch: !1 };
  if (s.length === 1) return { isMatch: !0 };
  let a = {},
    l = s.slice(1);
  for (let c = 0; c < n.length; ++c) {
    let u = n[c];
    if (u === void 0) continue;
    let f = l[c],
      d = a[u];
    if (d) {
      if (d !== f) return { isMatch: !1 };
      continue;
    }
    if (f === void 0)
      throw new Error("Path variable values cannot be undefined");
    a[u] = f;
  }
  return { isMatch: !0, pathVariables: a };
}
function $2(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/gu, "\\$&").replace(/-/gu, "\\x2d");
}
var W2 = "page";
function Jx(e) {
  return Uc(e) && W2 in e && e.page !== void 0;
}
var j2 = S.createContext(void 0);
function va() {
  var e;
  let t = Ro(),
    n = M(j2),
    r = n ?? t.currentRouteId;
  if (!r) return;
  let i = (e = t.getRoute) === null || e === void 0 ? void 0 : e.call(t, r);
  if (i)
    return { ...i, id: r, pathVariables: n ? void 0 : t.currentPathVariables };
}
function ZB() {
  var e;
  return (e = va()) === null || e === void 0 ? void 0 : e.pathVariables;
}
function U2(e) {
  var t;
  let n = Ro();
  if (e)
    return (t = n.getRoute) === null || t === void 0 ? void 0 : t.call(n, e);
}
var LS = typeof L < "u" && !ZF(ft.userAgent);
function X2(e, t = !0) {
  let { getRoute: n } = Ro();
  S.useEffect(() => {
    if (!(!n || !t || !LS))
      for (let r of e) {
        let i = n(r);
        i?.page && Op(i.page);
      }
  }, [e, n, t]);
}
function Op(e) {
  LS && CS(e) && e.preload();
}
function nH(e, t) {
  var n;
  let r = va(),
    i = (n = U2(t)) !== null && n !== void 0 ? n : r;
  return S.useMemo(() => (i ? ru(i, e) : e), [e, i]);
}
var e1 = new Set();
function ta(e, ...t) {
  e1.has(e) || (e1.add(e), console.warn(e, ...t));
}
function G2(e, t, n) {
  let r = n ? `, use ${n} instead` : "",
    i = `Deprecation warning: ${e} will be removed in version ${t}${r}.`;
  ta(i);
}
var _S = class {
    constructor() {
      R(this, "observers", new Set()), R(this, "transactions", {});
    }
    add(e) {
      this.observers.add(e);
      let t = !1;
      return () => {
        t || ((t = !0), this.remove(e));
      };
    }
    remove(e) {
      this.observers.delete(e);
    }
    notify(e, t) {
      if (t) {
        let n = this.transactions[t] || e;
        (n.value = e.value), (this.transactions[t] = n);
      } else this.callObservers(e);
    }
    finishTransaction(e) {
      let t = this.transactions[e];
      return delete this.transactions[e], this.callObservers(t, e);
    }
    callObservers(e, t) {
      let n = [];
      return (
        new Set(this.observers).forEach((r) => {
          typeof r == "function" ? r(e, t) : (r.update(e, t), n.push(r.finish));
        }),
        n
      );
    }
  },
  Be = (() => {
    function e(t) {
      return (
        G2(
          "Animatable()",
          "2.0.0",
          "the new animation API (https://www.framer.com/api/animation/)"
        ),
        mn(t) ? t : new K2(t)
      );
    }
    return (
      (e.transaction = (t) => {
        let n = Math.random(),
          r = new Set();
        t((s, a) => {
          s.set(a, n), r.add(s);
        }, n);
        let o = [];
        r.forEach((s) => {
          o.push(...s.finishTransaction(n));
        }),
          o.forEach((s) => {
            s(n);
          });
      }),
      (e.getNumber = (t, n = 0) => e.get(t, n)),
      (e.get = (t, n) => (t == null ? n : mn(t) ? t.get() : t)),
      (e.objectToValues = (t) => {
        if (!t) return t;
        let n = {};
        for (let r in t) {
          let i = t[r];
          mn(i) ? (n[r] = i.get()) : (n[r] = i);
        }
        return n;
      }),
      e
    );
  })(),
  t1 = "onUpdate",
  n1 = "finishTransaction";
function mn(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    t1 in e &&
    e[t1] instanceof Function &&
    n1 in e &&
    e[n1] instanceof Function
  );
}
function Y2(e, t) {
  return {
    interpolate(n, r) {
      let i = n.get(),
        o = r.get(),
        s = Be(i);
      return (a) => {
        let l = t.interpolate(i, o)(a);
        return s.set(l), s;
      };
    },
    difference(n, r) {
      let i = n.get();
      return t.difference(i, r.get());
    },
  };
}
var K2 = class {
  constructor(e) {
    (this.value = e), R(this, "observers", new _S());
  }
  static interpolationFor(e, t) {
    if (mn(e)) return Y2(e, t);
  }
  get() {
    return this.value;
  }
  set(e, t) {
    let n = this.value;
    mn(e) && (e = e.get()), (this.value = e);
    let r = { value: e, oldValue: n };
    this.observers.notify(r, t);
  }
  finishTransaction(e) {
    return this.observers.finishTransaction(e);
  }
  onUpdate(e) {
    return this.observers.add(e);
  }
};
function Rc(e, t) {
  let r = 10 ** Math.round(Math.abs(t));
  return Math.round(e * r) / r;
}
function r1(e, t) {
  return t === 0
    ? Math.round(e)
    : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function lt(e, t) {
  return { x: e, y: t };
}
((e) => {
  (e.add = (...r) =>
    r.reduce((i, o) => ({ x: i.x + o.x, y: i.y + o.y }), { x: 0, y: 0 })),
    (e.subtract = (r, i) => ({ x: r.x - i.x, y: r.y - i.y })),
    (e.multiply = (r, i) => ({ x: r.x * i, y: r.y * i })),
    (e.divide = (r, i) => ({ x: r.x / i, y: r.y / i })),
    (e.absolute = (r) => ({ x: Math.abs(r.x), y: Math.abs(r.y) })),
    (e.reverse = (r) => ({ x: r.x * -1, y: r.y * -1 })),
    (e.pixelAligned = (r, i = { x: 0, y: 0 }) => ({
      x: r1(r.x, i.x),
      y: r1(r.y, i.y),
    })),
    (e.distance = (r, i) => {
      let o = Math.abs(r.x - i.x),
        s = Math.abs(r.y - i.y);
      return Math.sqrt(o * o + s * s);
    }),
    (e.angle = (r, i) =>
      (Math.atan2(i.y - r.y, i.x - r.x) * 180) / Math.PI - 90),
    (e.isEqual = (r, i) => r.x === i.x && r.y === i.y),
    (e.rotationNormalizer = () => {
      let r;
      return (i) => {
        typeof r != "number" && (r = i);
        let o = r - i,
          s = Math.abs(o) + 180,
          a = Math.floor(s / 360);
        return o < 180 && (i -= a * 360), o > 180 && (i += a * 360), (r = i), i;
      };
    });
  function t(r, i) {
    return { x: (r.x + i.x) / 2, y: (r.y + i.y) / 2 };
  }
  e.center = t;
  function n(r, i) {
    var o, s, a, l;
    let c = r.x,
      u = r.y,
      f = !1;
    for (let d = 0, h = i.length - 1; d < i.length; h = d++) {
      let g = ((o = i[d]) == null ? void 0 : o.x) ?? 0,
        y = ((s = i[d]) == null ? void 0 : s.y) ?? 0,
        x = ((a = i[h]) == null ? void 0 : a.x) ?? 0,
        p = ((l = i[h]) == null ? void 0 : l.y) ?? 0;
      y > u != p > u && c < ((x - g) * (u - y)) / (p - y) + g && (f = !f);
    }
    return f;
  }
  e.insidePoints = n;
})(lt || (lt = {}));
var iH = Number.MIN_VALUE;
var oH = { tension: 500, friction: 10, tolerance: 1 / 1e4, velocity: 0 };
var q2 = Gt(HF(), 1),
  bp = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32",
  };
function Or(e, t, n, r = !1) {
  let [i, o] = t,
    [s, a] = n,
    l = o - i;
  if (l === 0) return (a + s) / 2;
  let c = a - s;
  if (c === 0) return s;
  let u = s + ((e - i) / l) * c;
  if (r === !0)
    if (s < a) {
      if (u < s) return s;
      if (u > a) return a;
    } else {
      if (u > s) return s;
      if (u < a) return a;
    }
  return u;
}
function wo(e) {
  return !isNaN(e) && isFinite(e);
}
function Ar(e) {
  let t = xp(e);
  return t !== void 0 ? (e.includes("%") ? t / 100 : t) : 0;
}
function xp(e) {
  let t = /\d?\.?\d+/u.exec(e);
  return t ? Number(t[0]) : void 0;
}
var { hsluvToRgb: Q2, rgbToHsluv: Z2 } = q2.default;
function J2(e, t, n) {
  let [r, i, o] = Z2([e / 255, t / 255, n / 255]);
  return { h: r, s: i, l: o };
}
function eL(e, t, n, r = 1) {
  let i = Q2([e, t, n]);
  return { r: i[0] * 255, g: i[1] * 255, b: i[2] * 255, a: r };
}
function Pc(e, t, n, r) {
  let i = Math.round(e),
    o = Math.round(t * 100),
    s = Math.round(n * 100);
  return r === void 0 || r === 1
    ? "hsv(" + i + ", " + o + "%, " + s + "%)"
    : "hsva(" + i + ", " + o + "%, " + s + "%, " + r + ")";
}
function tL(e, t, n) {
  return {
    r: wo(e) ? yt(e, 255) * 255 : 0,
    g: wo(t) ? yt(t, 255) * 255 : 0,
    b: wo(n) ? yt(n, 255) * 255 : 0,
  };
}
function i1(e, t, n, r) {
  let i = [
    ep(Math.round(e).toString(16)),
    ep(Math.round(t).toString(16)),
    ep(Math.round(n).toString(16)),
  ];
  return r &&
    i[0].charAt(0) === i[0].charAt(1) &&
    i[1].charAt(0) === i[1].charAt(1) &&
    i[2].charAt(0) === i[2].charAt(1)
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join("");
}
function Ap(e, t, n) {
  let r,
    i,
    o = yt(e, 255),
    s = yt(t, 255),
    a = yt(n, 255),
    l = Math.max(o, s, a),
    c = Math.min(o, s, a),
    u = (i = r = (l + c) / 2);
  if (l === c) u = i = 0;
  else {
    let f = l - c;
    switch (((i = r > 0.5 ? f / (2 - l - c) : f / (l + c)), l)) {
      case o:
        u = (s - a) / f + (s < a ? 6 : 0);
        break;
      case s:
        u = (a - o) / f + 2;
        break;
      case a:
        u = (o - s) / f + 4;
        break;
    }
    u /= 6;
  }
  return { h: u * 360, s: i, l: r };
}
function Jh(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function nL(e, t, n) {
  let r, i, o;
  if (
    ((e = yt(e, 360)), (t = yt(t * 100, 100)), (n = yt(n * 100, 100)), t === 0)
  )
    r = i = o = n;
  else {
    let s = n < 0.5 ? n * (1 + t) : n + t - n * t,
      a = 2 * n - s;
    (r = Jh(a, s, e + 1 / 3)), (i = Jh(a, s, e)), (o = Jh(a, s, e - 1 / 3));
  }
  return { r: r * 255, g: i * 255, b: o * 255 };
}
function o1(e, t, n) {
  (e = yt(e, 255)), (t = yt(t, 255)), (n = yt(n, 255));
  let r = Math.max(e, t, n),
    i = Math.min(e, t, n),
    o = r - i,
    s,
    a = r === 0 ? 0 : o / r,
    l = r;
  if (r === i) s = 0;
  else {
    switch (r) {
      case e:
        s = (t - n) / o + (t < n ? 6 : 0);
        break;
      case t:
        s = (n - e) / o + 2;
        break;
      case n:
        s = (e - t) / o + 4;
        break;
    }
    s /= 6;
  }
  return { h: s, s: a, v: l };
}
function rL(e, t, n) {
  (e = yt(e, 360) * 6), (t = yt(t * 100, 100)), (n = yt(n * 100, 100));
  let r = Math.floor(e),
    i = e - r,
    o = n * (1 - t),
    s = n * (1 - i * t),
    a = n * (1 - (1 - i) * t),
    l = r % 6,
    c = [n, s, o, o, a, n][l],
    u = [a, n, n, s, o, o][l],
    f = [o, o, a, n, n, s][l];
  return { r: c * 255, g: u * 255, b: f * 255 };
}
function yt(e, t) {
  let n, r;
  if (
    (typeof t == "string" ? (n = parseFloat(t)) : (n = t), typeof e == "string")
  ) {
    iL(e) && (e = "100%");
    let i = oL(e);
    (r = Math.min(n, Math.max(0, parseFloat(e)))),
      i && (r = Math.floor(r * n) / 100);
  } else r = e;
  return Math.abs(r - n) < 1e-6 ? 1 : (r % n) / n;
}
function iL(e) {
  return typeof e == "string" && e.includes(".") && parseFloat(e) === 1;
}
function oL(e) {
  return typeof e == "string" && e.includes("%");
}
function ep(e) {
  return e.length === 1 ? "0" + e : "" + e;
}
var In = (() => {
  let e = "[-\\+]?\\d+%?",
    n = "(?:" + "[-\\+]?\\d*\\.\\d+%?" + ")|(?:" + e + ")",
    r = "[\\s|\\(]+(" + n + ")[,|\\s]+(" + n + ")[,|\\s]+(" + n + ")\\s*\\)?",
    i =
      "[\\s|\\(]+(" +
      n +
      ")[,|\\s]+(" +
      n +
      ")[,|\\s]+(" +
      n +
      ")[,|\\s]+(" +
      n +
      ")\\s*\\)?";
  return {
    rgb: new RegExp("rgb" + r),
    rgba: new RegExp("rgba" + i),
    hsl: new RegExp("hsl" + r),
    hsla: new RegExp("hsla" + i),
    hsv: new RegExp("hsv" + r),
    hsva: new RegExp("hsva" + i),
    hex3: /^([\da-f])([\da-f])([\da-f])$/iu,
    hex6: /^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
    hex4: /^#?([\da-f])([\da-f])([\da-f])([\da-f])$/iu,
    hex8: /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
  };
})();
function Dp(e) {
  if (e.includes("gradient(") || e.includes("var(")) return !1;
  let t = /^[\s,#]+/u,
    n = e.replace(t, "").trimEnd().toLowerCase(),
    r = bp[n];
  if ((r && (n = r), n === "transparent"))
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  let i;
  return (i = In.rgb.exec(n))
    ? {
        r: parseInt(i[1] ?? ""),
        g: parseInt(i[2] ?? ""),
        b: parseInt(i[3] ?? ""),
        a: 1,
        format: "rgb",
      }
    : (i = In.rgba.exec(n))
    ? {
        r: parseInt(i[1] ?? ""),
        g: parseInt(i[2] ?? ""),
        b: parseInt(i[3] ?? ""),
        a: parseFloat(i[4] ?? ""),
        format: "rgb",
      }
    : (i = In.hsl.exec(n))
    ? {
        h: parseInt(i[1] ?? ""),
        s: Ar(i[2] ?? ""),
        l: Ar(i[3] ?? ""),
        a: 1,
        format: "hsl",
      }
    : (i = In.hsla.exec(n))
    ? {
        h: parseInt(i[1] ?? ""),
        s: Ar(i[2] ?? ""),
        l: Ar(i[3] ?? ""),
        a: parseFloat(i[4] ?? ""),
        format: "hsl",
      }
    : (i = In.hsv.exec(n))
    ? {
        h: parseInt(i[1] ?? ""),
        s: Ar(i[2] ?? ""),
        v: Ar(i[3] ?? ""),
        a: 1,
        format: "hsv",
      }
    : (i = In.hsva.exec(n))
    ? {
        h: parseInt(i[1] ?? ""),
        s: Ar(i[2] ?? ""),
        v: Ar(i[3] ?? ""),
        a: parseFloat(i[4] ?? ""),
        format: "hsv",
      }
    : (i = In.hex8.exec(n))
    ? {
        r: zt(i[1] ?? ""),
        g: zt(i[2] ?? ""),
        b: zt(i[3] ?? ""),
        a: s1(i[4] ?? ""),
        format: r ? "name" : "hex",
      }
    : (i = In.hex6.exec(n))
    ? {
        r: zt(i[1] ?? ""),
        g: zt(i[2] ?? ""),
        b: zt(i[3] ?? ""),
        a: 1,
        format: r ? "name" : "hex",
      }
    : (i = In.hex4.exec(n))
    ? {
        r: zt(`${i[1]}${i[1]}`),
        g: zt(`${i[2]}${i[2]}`),
        b: zt(`${i[3]}${i[3]}`),
        a: s1(i[4] + "" + i[4]),
        format: r ? "name" : "hex",
      }
    : (i = In.hex3.exec(n))
    ? {
        r: zt(`${i[1]}${i[1]}`),
        g: zt(`${i[2]}${i[2]}`),
        b: zt(`${i[3]}${i[3]}`),
        a: 1,
        format: r ? "name" : "hex",
      }
    : !1;
}
function zt(e) {
  return parseInt(e, 16);
}
function s1(e) {
  return zt(e) / 255;
}
var a1 = new Map(),
  B = (() => {
    function e(o, s, a, l) {
      if (typeof o == "string") {
        let u = a1.get(o);
        return (
          u ||
          ((u = t(o)),
          u === void 0 ? { ...e("black"), isValid: !1 } : (a1.set(o, u), u))
        );
      }
      let c = t(o, s, a, l);
      return c !== void 0 ? c : { ...e("black"), isValid: !1 };
    }
    function t(o, s, a, l) {
      if (o === "") return;
      let c = sL(o, s, a, l);
      if (c) {
        let u = {
          r: c.r,
          g: c.g,
          b: c.b,
          a: c.a,
          h: c.h,
          s: c.s,
          l: c.l,
          initialValue: typeof o == "string" && c.format !== "hsv" ? o : void 0,
          roundA: Math.round(100 * c.a) / 100,
          format: c.format,
          mix: e.mix,
          toValue: () => e.toRgbString(u),
        };
        return u;
      } else return;
    }
    let n = {
      isRGB(o) {
        return o === "rgb" || o === "rgba";
      },
      isHSL(o) {
        return o === "hsl" || o === "hsla";
      },
    };
    (e.inspect = (o, s) =>
      o.format === "hsl"
        ? `<${o.constructor.name} h:${o.h} s:${o.s} l:${o.l} a:${o.a}>`
        : o.format === "hex" || o.format === "name"
        ? `<${o.constructor.name} "${s}">`
        : `<${o.constructor.name} r:${o.r} g:${o.g} b:${o.b} a:${o.a}>`),
      (e.isColor = (o) =>
        typeof o == "string" ? e.isColorString(o) : e.isColorObject(o)),
      (e.isColorString = (o) => (typeof o == "string" ? Dp(o) !== !1 : !1)),
      (e.isColorObject = (o) =>
        o &&
        typeof o != "string" &&
        typeof o.r == "number" &&
        typeof o.g == "number" &&
        typeof o.b == "number" &&
        typeof o.h == "number" &&
        typeof o.s == "number" &&
        typeof o.l == "number" &&
        typeof o.a == "number" &&
        typeof o.roundA == "number" &&
        typeof o.format == "string"),
      (e.toString = (o) => e.toRgbString(o)),
      (e.toHex = (o, s = !1) => i1(o.r, o.g, o.b, s)),
      (e.toHexString = (o, s = !1) => `#${e.toHex(o, s)}`),
      (e.toRgbString = (o) =>
        o.a === 1
          ? "rgb(" +
            Math.round(o.r) +
            ", " +
            Math.round(o.g) +
            ", " +
            Math.round(o.b) +
            ")"
          : "rgba(" +
            Math.round(o.r) +
            ", " +
            Math.round(o.g) +
            ", " +
            Math.round(o.b) +
            ", " +
            o.roundA +
            ")"),
      (e.toHusl = (o) => ({ ...J2(o.r, o.g, o.b), a: o.roundA })),
      (e.toHslString = (o) => {
        let s = e.toHsl(o),
          a = Math.round(s.h),
          l = Math.round(s.s * 100),
          c = Math.round(s.l * 100);
        return o.a === 1
          ? "hsl(" + a + ", " + l + "%, " + c + "%)"
          : "hsla(" + a + ", " + l + "%, " + c + "%, " + o.roundA + ")";
      }),
      (e.toHsv = (o) => {
        let s = o1(o.r, o.g, o.b);
        return { h: s.h * 360, s: s.s, v: s.v, a: o.a };
      }),
      (e.toHsvString = (o) => {
        let s = o1(o.r, o.g, o.b),
          a = Math.round(s.h * 360),
          l = Math.round(s.s * 100),
          c = Math.round(s.v * 100);
        return o.a === 1
          ? "hsv(" + a + ", " + l + "%, " + c + "%)"
          : "hsva(" + a + ", " + l + "%, " + c + "%, " + o.roundA + ")";
      }),
      (e.toName = (o) => {
        if (o.a === 0) return "transparent";
        if (o.a < 1) return !1;
        let s = i1(o.r, o.g, o.b, !0);
        for (let a of Object.keys(bp)) if (bp[a] === s) return a;
        return !1;
      }),
      (e.toHsl = (o) => ({ h: Math.round(o.h), s: o.s, l: o.l, a: o.a })),
      (e.toRgb = (o) => ({
        r: Math.round(o.r),
        g: Math.round(o.g),
        b: Math.round(o.b),
        a: o.a,
      })),
      (e.brighten = (o, s = 10) => {
        let a = e.toRgb(o);
        return (
          (a.r = Math.max(
            0,
            Math.min(255, a.r - Math.round(255 * -(s / 100)))
          )),
          (a.g = Math.max(
            0,
            Math.min(255, a.g - Math.round(255 * -(s / 100)))
          )),
          (a.b = Math.max(
            0,
            Math.min(255, a.b - Math.round(255 * -(s / 100)))
          )),
          e(a)
        );
      }),
      (e.lighten = (o, s = 10) => {
        let a = e.toHsl(o);
        return (a.l += s / 100), (a.l = Math.min(1, Math.max(0, a.l))), e(a);
      }),
      (e.darken = (o, s = 10) => {
        let a = e.toHsl(o);
        return (a.l -= s / 100), (a.l = Math.min(1, Math.max(0, a.l))), e(a);
      }),
      (e.saturate = (o, s = 10) => {
        let a = e.toHsl(o);
        return (a.s += s / 100), (a.s = Math.min(1, Math.max(0, a.s))), e(a);
      }),
      (e.desaturate = (o, s = 10) => {
        let a = e.toHsl(o);
        return (a.s -= s / 100), (a.s = Math.min(1, Math.max(0, a.s))), e(a);
      }),
      (e.grayscale = (o) => e.desaturate(o, 100)),
      (e.hueRotate = (o, s) => {
        let a = e.toHsl(o);
        return (a.h += s), (a.h = a.h > 360 ? a.h - 360 : a.h), e(a);
      }),
      (e.alpha = (o, s = 1) => e({ r: o.r, g: o.g, b: o.b, a: s })),
      (e.transparent = (o) => e.alpha(o, 0)),
      (e.multiplyAlpha = (o, s = 1) =>
        e({ r: o.r, g: o.g, b: o.b, a: o.a * s })),
      (e.interpolate = (o, s, a = "rgb") => {
        if (!e.isColorObject(o) || !e.isColorObject(s))
          throw new TypeError(
            "Both arguments for Color.interpolate must be Color objects"
          );
        return (l) => e.mixAsColor(o, s, l, !1, a);
      }),
      (e.mix = (o, s, { model: a = "rgb" } = {}) => {
        let l = typeof o == "string" ? e(o) : o,
          c = e.interpolate(l, s, a);
        return (u) => e.toRgbString(c(u));
      }),
      (e.mixAsColor = (o, s, a = 0.5, l = !1, c = "rgb") => {
        let u = null;
        if (n.isRGB(c))
          u = e({
            r: Or(a, [0, 1], [o.r, s.r], l),
            g: Or(a, [0, 1], [o.g, s.g], l),
            b: Or(a, [0, 1], [o.b, s.b], l),
            a: Or(a, [0, 1], [o.a, s.a], l),
          });
        else {
          let f, d;
          n.isHSL(c)
            ? ((f = e.toHsl(o)), (d = e.toHsl(s)))
            : ((f = e.toHusl(o)), (d = e.toHusl(s))),
            f.s === 0 ? (f.h = d.h) : d.s === 0 && (d.h = f.h);
          let h = f.h,
            g = d.h,
            y = g - h;
          y > 180 ? (y = g - 360 - h) : y < -180 && (y = g + 360 - h);
          let x = {
            h: Or(a, [0, 1], [h, h + y], l),
            s: Or(a, [0, 1], [f.s, d.s], l),
            l: Or(a, [0, 1], [f.l, d.l], l),
            a: Or(a, [0, 1], [o.a, s.a], l),
          };
          n.isHSL(c) ? (u = e(x)) : (u = e(eL(x.h, x.s, x.l, x.a)));
        }
        return u;
      }),
      (e.random = (o = 1) => {
        function s() {
          return Math.floor(Math.random() * 255);
        }
        return e("rgba(" + s() + ", " + s() + ", " + s() + ", " + o + ")");
      }),
      (e.grey = (o = 0.5, s = 1) => (
        (o = Math.floor(o * 255)),
        e("rgba(" + o + ", " + o + ", " + o + ", " + s + ")")
      )),
      (e.gray = e.grey),
      (e.rgbToHsl = (o, s, a) => Ap(o, s, a)),
      (e.isValidColorProperty = (o, s) =>
        !!(
          (o.toLowerCase().slice(-5) === "color" ||
            o === "fill" ||
            o === "stroke") &&
          typeof s == "string" &&
          e.isColorString(s)
        )),
      (e.difference = (o, s) => {
        let a = (o.r + s.r) / 2,
          l = o.r - s.r,
          c = o.g - s.g,
          u = o.b - s.b,
          f = Math.pow(l, 2),
          d = Math.pow(c, 2),
          h = Math.pow(u, 2);
        return Math.sqrt(2 * f + 4 * d + 3 * h + (a * (f - h)) / 256);
      }),
      (e.equal = (o, s, a = 0.1) =>
        !(
          Math.abs(o.r - s.r) >= a ||
          Math.abs(o.g - s.g) >= a ||
          Math.abs(o.b - s.b) >= a ||
          Math.abs(o.a - s.a) * 256 >= a
        ));
    let r = Bi([0, 255], [0, 1]);
    function i(o) {
      o = r(o);
      let s = Math.abs(o);
      return s < 0.04045
        ? o / 12.92
        : (Math.sign(o) || 1) * Math.pow((s + 0.055) / 1.055, 2.4);
    }
    return (
      (e.luminance = (o) => {
        let { r: s, g: a, b: l } = e.toRgb(o);
        return 0.2126 * i(s) + 0.7152 * i(a) + 0.0722 * i(l);
      }),
      (e.contrast = (o, s) => {
        let a = e.luminance(o),
          l = e.luminance(s);
        return (Math.max(a, l) + 0.05) / (Math.min(a, l) + 0.05);
      }),
      e
    );
  })();
function sL(e, t, n, r = 1) {
  let i;
  return (
    typeof e == "number" &&
    !Number.isNaN(e) &&
    typeof t == "number" &&
    !Number.isNaN(t) &&
    typeof n == "number" &&
    !Number.isNaN(n)
      ? (i = Sp({ r: e, g: t, b: n, a: r }))
      : typeof e == "string"
      ? (i = aL(e))
      : typeof e == "object" &&
        (e.hasOwnProperty("r") && e.hasOwnProperty("g") && e.hasOwnProperty("b")
          ? (i = Sp(e))
          : (i = MS(e))),
    i
  );
}
function aL(e) {
  let t = Dp(e);
  if (t) return t.format === "hsl" ? MS(t) : t.format === "hsv" ? lL(t) : Sp(t);
}
function lL(e) {
  let t = rL(e.h, e.s, e.v);
  return {
    ...Ap(t.r, t.g, t.b),
    ...t,
    format: "rgb",
    a: e.a !== void 0 ? OS(e.a) : 1,
  };
}
function Sp(e) {
  let t = tL(e.r, e.g, e.b);
  return {
    ...Ap(t.r, t.g, t.b),
    ...t,
    format: "rgb",
    a: e.a !== void 0 ? OS(e.a) : 1,
  };
}
function MS(e) {
  let t,
    n,
    r,
    i = { r: 0, g: 0, b: 0 },
    o = { h: 0, s: 0, l: 0 };
  return (
    (t = wo(e.h) ? e.h : 0),
    (t = (t + 360) % 360),
    (n = wo(e.s) ? e.s : 1),
    typeof e.s == "string" && (n = xp(e.s)),
    (r = wo(e.l) ? e.l : 0.5),
    typeof e.l == "string" && (r = xp(e.l)),
    (i = nL(t, n, r)),
    (o = { h: t, s: n, l: r }),
    { ...i, ...o, a: e.a === void 0 ? 1 : e.a, format: "hsl" }
  );
}
function OS(e) {
  return (
    (e = parseFloat(e)), e < 0 && (e = 0), (isNaN(e) || e > 1) && (e = 1), e
  );
}
var l1 = (e) => e instanceof tl,
  sH = { delta: 1 / 60, maxValues: 1e4 };
var cL = Gt(zF(), 1),
  { EventEmitter: uL } = cL.default,
  fL = class {
    constructor() {
      R(this, "_emitter", new uL());
    }
    eventNames() {
      return this._emitter.eventNames();
    }
    eventListeners() {
      let e = {};
      for (let t of this._emitter.eventNames())
        e[t] = this._emitter.listeners(t);
      return e;
    }
    on(e, t) {
      this.addEventListener(e, t, !1, !1, this);
    }
    off(e, t) {
      this.removeEventListeners(e, t);
    }
    once(e, t) {
      this.addEventListener(e, t, !0, !1, this);
    }
    unique(e, t) {
      this.addEventListener(e, t, !1, !0, this);
    }
    addEventListener(e, t, n, r, i) {
      if (r) {
        for (let o of this._emitter.eventNames())
          if (t === this._emitter.listeners(o)) return;
      }
      n === !0
        ? this._emitter.once(e, t, i)
        : this._emitter.addListener(e, t, i);
    }
    removeEventListeners(e, t) {
      e ? this._emitter.removeListener(e, t) : this.removeAllEventListeners();
    }
    removeAllEventListeners() {
      this._emitter.removeAllListeners();
    }
    countEventListeners(e, t) {
      if (e) return this._emitter.listeners(e).length;
      {
        let n = 0;
        for (let r of this._emitter.eventNames())
          n += this._emitter.listeners(r).length;
        return n;
      }
    }
    emit(e, ...t) {
      this._emitter.emit(e, ...t);
    }
  },
  dL = {
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => !1,
    ResizeObserver: void 0,
    onpointerdown: !1,
    onpointermove: !1,
    onpointerup: !1,
    ontouchstart: !1,
    ontouchmove: !1,
    ontouchend: !1,
    onmousedown: !1,
    onmousemove: !1,
    onmouseup: !1,
    devicePixelRatio: 1,
    scrollX: 0,
    scrollY: 0,
    location: { href: "" },
    setTimeout: () => 0,
    clearTimeout: () => {},
    setInterval: () => 0,
    clearInterval: () => {},
    requestAnimationFrame: () => 0,
    cancelAnimationFrame: () => {},
    getSelection: () => null,
    matchMedia: (e) => ({
      matches: !1,
      media: e,
      onchange: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => !1,
    }),
    innerHeight: 0,
    innerWidth: 0,
    SVGSVGElement: {},
  },
  $t = typeof L > "u" ? dL : L,
  hL = (e) => {
    setTimeout(e, 1 / 60);
  },
  pL = $t.requestAnimationFrame || hL,
  c1 = (e) => pL(e),
  Us = 1 / 60,
  mL = class extends fL {
    constructor(e = !1) {
      super(),
        R(this, "_started", !1),
        R(this, "_frame", 0),
        R(this, "_frameTasks", []),
        R(this, "tick", () => {
          this._started &&
            (c1(this.tick),
            this.emit("update", this._frame, Us),
            this.emit("render", this._frame, Us),
            this._processFrameTasks(),
            this._frame++);
        }),
        e && this.start();
    }
    addFrameTask(e) {
      this._frameTasks.push(e);
    }
    _processFrameTasks() {
      var e;
      let t = this._frameTasks,
        n = t.length;
      if (n !== 0) {
        for (let r = 0; r < n; r++) (e = t[r]) == null || e.call(t);
        t.length = 0;
      }
    }
    static set TimeStep(e) {
      Us = e;
    }
    static get TimeStep() {
      return Us;
    }
    start() {
      return this._started
        ? this
        : ((this._frame = 0), (this._started = !0), c1(this.tick), this);
    }
    stop() {
      return (this._started = !1), this;
    }
    get frame() {
      return this._frame;
    }
    get time() {
      return this._frame * Us;
    }
  },
  AS = new mL(),
  Ee = ((e) => (
    (e.canvas = "CANVAS"),
    (e.export = "EXPORT"),
    (e.thumbnail = "THUMBNAIL"),
    (e.preview = "PREVIEW"),
    e
  ))(Ee || {}),
  Xc = { target: "PREVIEW", zoom: 1 };
((e) => {
  function t() {
    return Xc.target;
  }
  e.current = t;
  function n() {
    let r = Xc.target;
    return r === "CANVAS" || r === "EXPORT";
  }
  e.hasRestrictions = n;
})(Ee || (Ee = {}));
var Ic = (e) => ({
  correct: (t, { delta: n, treeScale: r }) => {
    if ((typeof t == "string" && (t = parseFloat(t)), t === 0)) return "0px";
    let i = t;
    return (
      n && r && ((i = Math.round(t / n[e].scale / r[e])), (i = Math.max(i, 1))),
      i + "px"
    );
  },
});
tf({
  borderTopWidth: Ic("y"),
  borderLeftWidth: Ic("x"),
  borderRightWidth: Ic("x"),
  borderBottomWidth: Ic("y"),
});
function ae(e, ...t) {
  var n, r;
  if (e) return;
  let i = Error("Assertion Error" + (t.length > 0 ? ": " + t.join(" ") : ""));
  if (i.stack)
    try {
      let o = i.stack.split(`
`);
      (n = o[1]) != null && n.includes("assert")
        ? (o.splice(1, 1),
          (i.stack = o.join(`
`)))
        : (r = o[0]) != null &&
          r.includes("assert") &&
          (o.splice(0, 1),
          (i.stack = o.join(`
`)));
    } catch {}
  throw i;
}
function Wt(e, t) {
  throw (
    t ||
    new Error(
      e ? `Unexpected value: ${e}` : "Application entered invalid state"
    )
  );
}
var ko = S.createContext({
  getLayoutId: (e) => null,
  persistLayoutIdCache: () => {},
  top: !1,
  enabled: !0,
});
function vL({ children: e }) {
  if (M(ko).top) return T(ze, { children: e });
  let n = A({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
      count: { byId: {}, byName: {} },
    }),
    r = A({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
    }),
    i = A(new Set()).current,
    o = fe(({ id: l, name: c, duplicatedFrom: u }) => {
      if (!l) return null;
      let f = c ? "byName" : "byId",
        d = n.current[f][l];
      if (d) return d;
      let h = c || l;
      if (
        !u &&
        !i.has(h) &&
        (!n.current.byLayoutId[h] || n.current.byLayoutId[h] === h)
      )
        return (
          n.current.count[f][h] === void 0 &&
            ((n.current.count[f][h] = 0),
            (n.current.byLayoutId[h] = h),
            (r.current[f][l] = h)),
          i.add(h),
          h
        );
      let g;
      if (u?.length)
        for (let w = u.length - 1; w >= 0; w--) {
          let k = u[w];
          ae(!!k, "duplicatedId must be defined");
          let E = n.current[f][k],
            P = n.current.byLastId[k];
          if (P && !g) {
            let _ = n.current.byLayoutId[P],
              Z = !_ || _ === c;
            P && !i.has(P) && (!c || Z) && (g = [P, k]);
          }
          let I = E ? n.current.byLayoutId[E] : void 0,
            H = !I || I === c;
          if (E && !i.has(E) && (!c || H))
            return (
              (r.current[f][l] = E), (r.current.byLastId[k] = E), i.add(E), E
            );
        }
      let y = n.current.byLastId[l];
      if (y && !i.has(y)) return i.add(y), (r.current.byId[l] = y), y;
      if (g) {
        let [w, k] = g;
        return (r.current[f][l] = w), (r.current.byLastId[k] = w), i.add(w), w;
      }
      let x = n.current.byPossibleId[l];
      if (x && !i.has(x)) return i.add(x), (r.current.byId[l] = x), x;
      let p = u?.[0],
        m = c || p || l,
        v = (n.current.count[f][m] ?? -1) + 1,
        { layoutId: b, value: C } = gL(m, v, i);
      if (
        ((n.current.count[f][m] = C), (r.current[f][l] = b), u?.length && !c)
      ) {
        let w = u[u.length - 1];
        if ((w && (r.current.byLastId[w] = b), u.length > 1))
          for (let k = 0; k < u.length - 1; k++) {
            let E = u[k];
            E !== void 0 &&
              (r.current.byPossibleId[E] || (r.current.byPossibleId[E] = b));
          }
      }
      return (r.current.byLayoutId[b] = h), i.add(b), b;
    }, []),
    s = fe(() => {
      (n.current = {
        byId: { ...n.current.byId, ...r.current.byId },
        byLastId: { ...n.current.byLastId, ...r.current.byLastId },
        byPossibleId: { ...n.current.byPossibleId, ...r.current.byPossibleId },
        byName: { ...n.current.byName, ...r.current.byName },
        byLastName: { ...n.current.byLastName, ...r.current.byLastName },
        byLayoutId: { ...n.current.byLayoutId, ...r.current.byLayoutId },
        count: { ...n.current.count, byName: {} },
      }),
        (r.current = {
          byId: {},
          byName: {},
          byLastId: {},
          byPossibleId: {},
          byLastName: {},
          byLayoutId: {},
        }),
        i.clear();
    }, []),
    a = A({
      getLayoutId: o,
      persistLayoutIdCache: s,
      top: !0,
      enabled: !0,
    }).current;
  return T(ko.Provider, { value: a, children: e });
}
function gL(e, t, n) {
  let r = t,
    i = r ? `${e}-${r}` : e;
  for (; n.has(i); ) r++, (i = `${e}-${r}`);
  return { layoutId: i, value: r };
}
function yL({ enabled: e = !0, ...t }) {
  let n = M(ko),
    r = ge(() => ({ ...n, enabled: e }), [e]);
  return T(ko.Provider, { ...t, value: r });
}
function on(e) {
  let t = A(null);
  return t.current === null && (t.current = e()), t.current;
}
var bL = {
    background: void 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    lineHeight: "1.4em",
    textOverflow: "ellipsis",
    overflow: "hidden",
    minHeight: 0,
    width: "100%",
    height: "100%",
  },
  xL = {
    ...bL,
    border: "1px solid rgba(149, 149, 149, 0.15)",
    borderRadius: 6,
    fontSize: "12px",
    backgroundColor: "rgba(149, 149, 149, 0.1)",
    color: "#a5a5a5",
  },
  DS = {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    maxWidth: "100%",
    flexShrink: 0,
    padding: "0 10px",
  },
  SL = { ...DS, fontWeight: 500 },
  wL = {
    ...DS,
    whiteSpace: "pre",
    maxHeight:
      "calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))",
    WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
  };
function hH(e) {
  let { error: t, file: n } = e,
    r = n ? `Error in ${CL(n)}` : "Error",
    i = t instanceof Error ? t.message : "" + t;
  return se("div", {
    style: xL,
    children: [
      T("div", { className: "text", style: SL, children: r }),
      i && T("div", { className: "text", style: wL, children: i }),
    ],
  });
}
function CL(e) {
  return e.startsWith("./") ? e.replace("./", "") : e;
}
var mH = 992 - 5;
function X(e) {
  return typeof e == "number" && isFinite(e);
}
function kL(e) {
  return !e || (!Object.keys(e).length && e.constructor === Object);
}
function Vc(e) {
  return typeof e != "string" && typeof e != "number";
}
function Bc(e) {
  return e !== null && typeof e < "u" && typeof e != "boolean" && !kL(e);
}
var Gc;
((e) => {
  function t(i, o) {
    return i === o
      ? !0
      : !i || !o
      ? !1
      : i.x === o.x &&
        i.y === o.y &&
        i.width === o.width &&
        i.height === o.height;
  }
  (e.equals = t),
    (e.atOrigin = (i) => ({ ...i, x: 0, y: 0 })),
    (e.fromTwoPoints = (i, o) => ({
      x: Math.min(i.x, o.x),
      y: Math.min(i.y, o.y),
      width: Math.abs(i.x - o.x),
      height: Math.abs(i.y - o.y),
    })),
    (e.fromRect = (i) => ({
      x: i.left,
      y: i.top,
      width: i.right - i.left,
      height: i.bottom - i.top,
    })),
    (e.multiply = (i, o) => ({
      x: i.x * o,
      y: i.y * o,
      width: i.width * o,
      height: i.height * o,
    })),
    (e.divide = (i, o) => (0, e.multiply)(i, 1 / o)),
    (e.offset = (i, o) => {
      let s = typeof o.x == "number" ? o.x : 0,
        a = typeof o.y == "number" ? o.y : 0;
      return { ...i, x: i.x + s, y: i.y + a };
    });
  function n(i, o) {
    if (o === 0) return i;
    let s = 2 * o;
    return { x: i.x - o, y: i.y - o, width: i.width + s, height: i.height + s };
  }
  (e.inflate = n),
    (e.pixelAligned = (i) => {
      let o = Math.round(i.x),
        s = Math.round(i.y),
        a = Math.round(i.x + i.width),
        l = Math.round(i.y + i.height),
        c = Math.max(a - o, 0),
        u = Math.max(l - s, 0);
      return { x: o, y: s, width: c, height: u };
    }),
    (e.halfPixelAligned = (i) => {
      let o = Math.round(i.x * 2) / 2,
        s = Math.round(i.y * 2) / 2,
        a = Math.round((i.x + i.width) * 2) / 2,
        l = Math.round((i.y + i.height) * 2) / 2,
        c = Math.max(a - o, 1),
        u = Math.max(l - s, 1);
      return { x: o, y: s, width: c, height: u };
    }),
    (e.round = (i, o = 0) => {
      let s = Rc(i.x, o),
        a = Rc(i.y, o),
        l = Rc(i.width, o),
        c = Rc(i.height, o);
      return { x: s, y: a, width: l, height: c };
    }),
    (e.roundToOutside = (i) => {
      let o = Math.floor(i.x),
        s = Math.floor(i.y),
        a = Math.ceil(i.x + i.width),
        l = Math.ceil(i.y + i.height),
        c = Math.max(a - o, 0),
        u = Math.max(l - s, 0);
      return { x: o, y: s, width: c, height: u };
    }),
    (e.minX = (i) => i.x),
    (e.maxX = (i) => i.x + i.width),
    (e.minY = (i) => i.y),
    (e.maxY = (i) => i.y + i.height),
    (e.positions = (i) => ({
      minX: i.x,
      midX: i.x + i.width / 2,
      maxX: (0, e.maxX)(i),
      minY: i.y,
      midY: i.y + i.height / 2,
      maxY: (0, e.maxY)(i),
    })),
    (e.center = (i) => ({ x: i.x + i.width / 2, y: i.y + i.height / 2 })),
    (e.boundingRectFromPoints = (i) => {
      let o = i.map((f) => f.x),
        s = i.map((f) => f.y),
        a = Math.min(...o),
        l = Math.min(...s),
        c = Math.max(...o) - a,
        u = Math.max(...s) - l;
      return { x: a, y: l, width: c, height: u };
    }),
    (e.fromPoints = (i) => {
      let [o, s, a, l] = i,
        { x: c, y: u } = o,
        f = lt.distance(o, s),
        d = lt.distance(o, l);
      return { x: c, y: u, width: f, height: d };
    }),
    (e.merge = (...i) => {
      let o = { x: Math.min(...i.map(e.minX)), y: Math.min(...i.map(e.minY)) },
        s = { x: Math.max(...i.map(e.maxX)), y: Math.max(...i.map(e.maxY)) };
      return (0, e.fromTwoPoints)(o, s);
    }),
    (e.intersection = (i, o) => {
      let s = Math.max(i.x, o.x),
        a = Math.min(i.x + i.width, o.x + o.width),
        l = Math.max(i.y, o.y),
        c = Math.min(i.y + i.height, o.y + o.height);
      return { x: s, y: l, width: a - s, height: c - l };
    }),
    (e.points = (i) => [
      { x: (0, e.minX)(i), y: (0, e.minY)(i) },
      { x: (0, e.minX)(i), y: (0, e.maxY)(i) },
      { x: (0, e.maxX)(i), y: (0, e.minY)(i) },
      { x: (0, e.maxX)(i), y: (0, e.maxY)(i) },
    ]),
    (e.transform = (i, o) => {
      let { x: s, y: a } = o.transformPoint({ x: i.x, y: i.y }),
        { x: l, y: c } = o.transformPoint({ x: i.x + i.width, y: i.y }),
        { x: u, y: f } = o.transformPoint({
          x: i.x + i.width,
          y: i.y + i.height,
        }),
        { x: d, y: h } = o.transformPoint({ x: i.x, y: i.y + i.height }),
        g = Math.min(s, l, u, d),
        y = Math.max(s, l, u, d) - g,
        x = Math.min(a, c, f, h),
        p = Math.max(a, c, f, h) - x;
      return { x: g, y: x, width: y, height: p };
    }),
    (e.containsPoint = (i, o) =>
      !(
        o.x < (0, e.minX)(i) ||
        o.x > (0, e.maxX)(i) ||
        o.y < (0, e.minY)(i) ||
        o.y > (0, e.maxY)(i) ||
        isNaN(i.x) ||
        isNaN(i.y)
      )),
    (e.containsRect = (i, o) => {
      for (let s of (0, e.points)(o))
        if (!(0, e.containsPoint)(i, s)) return !1;
      return !0;
    }),
    (e.toCSS = (i) => ({
      display: "block",
      transform: `translate(${i.x}px, ${i.y}px)`,
      width: `${i.width}px`,
      height: `${i.height}px`,
    })),
    (e.inset = (i, o) => ({
      x: i.x + o,
      y: i.y + o,
      width: Math.max(0, i.width - 2 * o),
      height: Math.max(0, i.height - 2 * o),
    })),
    (e.intersects = (i, o) =>
      !(
        o.x >= (0, e.maxX)(i) ||
        (0, e.maxX)(o) <= i.x ||
        o.y >= (0, e.maxY)(i) ||
        (0, e.maxY)(o) <= i.y
      )),
    (e.overlapHorizontally = (i, o) => {
      let s = e.maxX(i),
        a = e.maxX(o);
      return s > o.x && a > i.x;
    }),
    (e.overlapVertically = (i, o) => {
      let s = e.maxY(i),
        a = e.maxY(o);
      return s > o.y && a > i.y;
    }),
    (e.doesNotIntersect = (i, o) =>
      o.find((s) => e.intersects(s, i)) === void 0),
    (e.isEqual = (i, o) => e.equals(i, o)),
    (e.cornerPoints = (i) => {
      let o = i.x,
        s = i.x + i.width,
        a = i.y,
        l = i.y + i.height;
      return [
        { x: o, y: a },
        { x: s, y: a },
        { x: s, y: l },
        { x: o, y: l },
      ];
    }),
    (e.midPoints = (i) => {
      let o = i.x,
        s = i.x + i.width / 2,
        a = i.x + i.width,
        l = i.y,
        c = i.y + i.height / 2,
        u = i.y + i.height;
      return [
        { x: s, y: l },
        { x: a, y: c },
        { x: s, y: u },
        { x: o, y: c },
      ];
    }),
    (e.pointDistance = (i, o) => {
      let s = 0,
        a = 0;
      return (
        o.x < i.x ? (s = i.x - o.x) : o.x > e.maxX(i) && (s = o.x - e.maxX(i)),
        o.y < i.y ? (a = i.y - o.y) : o.y > e.maxY(i) && (a = o.y - e.maxY(i)),
        lt.distance({ x: s, y: a }, { x: 0, y: 0 })
      );
    });
  let r = { x: 0, y: 0, width: 0, height: 0 };
  (e.fromAny = (i, o = r) => ({
    x: i.x || o.x,
    y: i.y || o.y,
    width: i.width || o.width,
    height: i.height || o.height,
  })),
    (e.delta = (i, o) => {
      let s = { x: (0, e.minX)(i), y: (0, e.minY)(i) },
        a = { x: (0, e.minX)(o), y: (0, e.minY)(o) };
      return { x: s.x - a.x, y: s.y - a.y };
    }),
    (e.withMinSize = (i, o) => {
      let { width: s, height: a } = o,
        l = i.width - s,
        c = i.height - a;
      return {
        width: Math.max(i.width, s),
        height: Math.max(i.height, a),
        x: i.width < s ? i.x + l / 2 : i.x,
        y: i.height < a ? i.y + c / 2 : i.y,
      };
    }),
    (e.anyPointsOutsideRect = (i, o) => {
      let s = (0, e.minX)(i),
        a = (0, e.minY)(i),
        l = (0, e.maxX)(i),
        c = (0, e.maxY)(i);
      for (let u of o) if (u.x < s || u.x > l || u.y < a || u.y > c) return !0;
      return !1;
    }),
    (e.rebaseRectOnto = (i, o, s, a) => {
      let l = { ...i };
      switch (s) {
        case "bottom":
        case "top":
          switch (a) {
            case "start":
              l.x = o.x;
              break;
            case "center":
              l.x = o.x + o.width / 2 - i.width / 2;
              break;
            case "end":
              l.x = o.x + o.width - i.width;
              break;
            default:
              Wt(a);
          }
          break;
        case "left":
          l.x = o.x - i.width;
          break;
        case "right":
          l.x = o.x + o.width;
          break;
        default:
          Wt(s);
      }
      switch (s) {
        case "left":
        case "right":
          switch (a) {
            case "start":
              l.y = o.y;
              break;
            case "center":
              l.y = o.y + o.height / 2 - i.height / 2;
              break;
            case "end":
              l.y = o.y + o.height - i.height;
              break;
            default:
              Wt(a);
          }
          break;
        case "top":
          l.y = o.y - i.height;
          break;
        case "bottom":
          l.y = o.y + o.height;
          break;
        default:
          Wt(s);
      }
      return l;
    });
})(Gc || (Gc = {}));
var Yc;
((e) => {
  e.quickfix = (t) => (
    (t.widthType === 2 || t.heightType === 2) && (t.aspectRatio = null),
    X(t.aspectRatio) &&
      (t.left && t.right && (t.widthType = 0),
      t.top && t.bottom && (t.heightType = 0),
      t.left && t.right && t.top && t.bottom && (t.bottom = !1),
      t.widthType !== 0 && t.heightType !== 0 && (t.heightType = 0)),
    t.left &&
      t.right &&
      ((t.fixedSize || t.widthType === 2 || X(t.maxWidth)) && (t.right = !1),
      (t.widthType = 0)),
    t.top &&
      t.bottom &&
      ((t.fixedSize || t.heightType === 2 || X(t.maxHeight)) && (t.bottom = !1),
      (t.heightType = 0)),
    t
  );
})(Yc || (Yc = {}));
function Kc(e) {
  if (typeof e == "string") {
    let t = e.trim();
    if (t === "auto") return 2;
    if (t.endsWith("fr")) return 3;
    if (t.endsWith("%")) return 1;
    if (t.endsWith("vw") || t.endsWith("vh")) return 4;
  }
  return 0;
}
var wp;
((e) => {
  (e.fromProperties = (t) => {
    let {
        left: n,
        right: r,
        top: i,
        bottom: o,
        width: s,
        height: a,
        centerX: l,
        centerY: c,
        aspectRatio: u,
        autoSize: f,
      } = t,
      d = Yc.quickfix({
        left: X(n) || mn(n),
        right: X(r) || mn(r),
        top: X(i) || mn(i),
        bottom: X(o) || mn(o),
        widthType: Kc(s),
        heightType: Kc(a),
        aspectRatio: u || null,
        fixedSize: f === !0,
      }),
      h = null,
      g = null,
      y = 0,
      x = 0;
    if (d.widthType !== 0 && typeof s == "string") {
      let v = parseFloat(s);
      s.endsWith("fr")
        ? ((y = 3), (h = v))
        : s === "auto"
        ? (y = 2)
        : ((y = 1), (h = v / 100));
    } else s !== void 0 && typeof s != "string" && (h = Be.getNumber(s));
    if (d.heightType !== 0 && typeof a == "string") {
      let v = parseFloat(a);
      a.endsWith("fr")
        ? ((x = 3), (g = v))
        : a === "auto"
        ? (x = 2)
        : ((x = 1), (g = parseFloat(a) / 100));
    } else a !== void 0 && typeof a != "string" && (g = Be.getNumber(a));
    let p = 0.5,
      m = 0.5;
    return (
      l && (p = parseFloat(l) / 100),
      c && (m = parseFloat(c) / 100),
      {
        left: d.left ? Be.getNumber(n) : null,
        right: d.right ? Be.getNumber(r) : null,
        top: d.top ? Be.getNumber(i) : null,
        bottom: d.bottom ? Be.getNumber(o) : null,
        widthType: y,
        heightType: x,
        width: h,
        height: g,
        aspectRatio: d.aspectRatio || null,
        centerAnchorX: p,
        centerAnchorY: m,
      }
    );
  }),
    (e.toSize = (t, n, r, i) => {
      let o = null,
        s = null,
        a = n?.sizing ? Be.getNumber(n?.sizing.width) : null,
        l = n?.sizing ? Be.getNumber(n?.sizing.height) : null,
        c = u1(t.left, t.right);
      if (a && X(c)) o = a - c;
      else if (r && t.widthType === 2) o = r.width;
      else if (X(t.width))
        switch (t.widthType) {
          case 0:
            o = t.width;
            break;
          case 3:
            o = i
              ? (i.freeSpaceInParent.width / i.freeSpaceUnitDivisor.width) *
                t.width
              : null;
            break;
          case 1:
          case 4:
            a && (o = a * t.width);
            break;
          case 2:
            break;
          default:
            Wt(t.widthType);
        }
      let u = u1(t.top, t.bottom);
      if (l && X(u)) s = l - u;
      else if (r && t.heightType === 2) s = r.height;
      else if (X(t.height))
        switch (t.heightType) {
          case 0:
            s = t.height;
            break;
          case 3:
            s = i
              ? (i.freeSpaceInParent.height / i.freeSpaceUnitDivisor.height) *
                t.height
              : null;
            break;
          case 1:
          case 4:
            l && (s = l * t.height);
            break;
          case 2:
            break;
          default:
            Wt(t.heightType);
        }
      return IL(o, s, t, { height: l ?? 0, width: a ?? 0 }, n?.viewport);
    }),
    (e.toRect = (t, n = null, r = null, i = !1, o = null) => {
      let s = t.left || 0,
        a = t.top || 0,
        { width: l, height: c } = e.toSize(t, n, r, o),
        u = n?.positioning ?? null,
        f = u ? Be.getNumber(u.width) : null,
        d = u ? Be.getNumber(u.height) : null;
      t.left !== null
        ? (s = t.left)
        : f && t.right !== null
        ? (s = f - t.right - l)
        : f && (s = t.centerAnchorX * f - l / 2),
        t.top !== null
          ? (a = t.top)
          : d && t.bottom !== null
          ? (a = d - t.bottom - c)
          : d && (a = t.centerAnchorY * d - c / 2);
      let h = { x: s, y: a, width: l, height: c };
      return i ? Gc.pixelAligned(h) : h;
    });
})(wp || (wp = {}));
var TL = 200,
  EL = 200;
function qc(e, t, n, r) {
  if (typeof t == "string") {
    if (t.endsWith("%") && n)
      switch (e) {
        case "maxWidth":
        case "minWidth":
          return (parseFloat(t) / 100) * n.width;
        case "maxHeight":
        case "minHeight":
          return (parseFloat(t) / 100) * n.height;
        default:
          break;
      }
    if (t.endsWith("vh") && r)
      switch (e) {
        case "maxWidth":
        case "minWidth":
          return (parseFloat(t) / 100) * r.width;
        case "maxHeight":
        case "minHeight":
          return (parseFloat(t) / 100) * r.height;
        default:
          break;
      }
    return parseFloat(t);
  }
  return t;
}
function RL(e, t, n, r) {
  return (
    t.minHeight && (e = Math.max(qc("minHeight", t.minHeight, n, r), e)),
    t.maxHeight && (e = Math.min(qc("maxHeight", t.maxHeight, n, r), e)),
    e
  );
}
function PL(e, t, n, r) {
  return (
    t.minWidth && (e = Math.max(qc("minWidth", t.minWidth, n, r), e)),
    t.maxWidth && (e = Math.min(qc("maxWidth", t.maxWidth, n, r), e)),
    e
  );
}
function IL(e, t, n, r, i) {
  let o = PL(X(e) ? e : TL, n, r, i),
    s = RL(X(t) ? t : EL, n, r, i);
  return (
    X(n.aspectRatio) &&
      n.aspectRatio > 0 &&
      (X(n.left) && X(n.right)
        ? (s = o / n.aspectRatio)
        : X(n.top) && X(n.bottom)
        ? (o = s * n.aspectRatio)
        : n.widthType !== 0
        ? (s = o / n.aspectRatio)
        : (o = s * n.aspectRatio)),
    { width: o, height: s }
  );
}
function u1(e, t) {
  return !X(e) || !X(t) ? null : e + t;
}
function FL(e) {
  return (
    typeof e.right == "string" ||
    typeof e.bottom == "string" ||
    (typeof e.left == "string" && (!e.center || e.center === "y")) ||
    (typeof e.top == "string" && (!e.center || e.center === "x"))
  );
}
function ga(e) {
  return !e._constraints || FL(e) ? !1 : e._constraints.enabled;
}
function LL(e) {
  let { size: t } = e,
    { width: n, height: r } = e;
  return (
    X(t) && (n === void 0 && (n = t), r === void 0 && (r = t)),
    X(n) && X(r) ? { width: n, height: r } : null
  );
}
function _L(e) {
  let t = LL(e);
  if (t === null) return null;
  let { left: n, top: r } = e;
  return X(n) && X(r) ? { x: n, y: r, ...t } : null;
}
function na(e, t, n = !0) {
  if (e.positionFixed || e.positionAbsolute) return null;
  let r = t === 1 || t === 2;
  if (!ga(e) || r) return _L(e);
  let i = ML(e),
    o = OL(t),
    s = o ? { sizing: o, positioning: o, viewport: null } : null;
  return wp.toRect(i, s, null, n, null);
}
function ML(e) {
  let {
      left: t,
      right: n,
      top: r,
      bottom: i,
      center: o,
      _constraints: s,
      size: a,
    } = e,
    { width: l, height: c } = e;
  l === void 0 && (l = a), c === void 0 && (c = a);
  let { aspectRatio: u, autoSize: f } = s,
    d = Yc.quickfix({
      left: X(t),
      right: X(n),
      top: X(r),
      bottom: X(i),
      widthType: Kc(l),
      heightType: Kc(c),
      aspectRatio: u || null,
      fixedSize: f === !0,
    }),
    h = null,
    g = null,
    y = 0,
    x = 0;
  if (d.widthType !== 0 && typeof l == "string") {
    let v = parseFloat(l);
    l.endsWith("fr")
      ? ((y = 3), (h = v))
      : l === "auto"
      ? (y = 2)
      : ((y = 1), (h = v / 100));
  } else l !== void 0 && typeof l != "string" && (h = l);
  if (d.heightType !== 0 && typeof c == "string") {
    let v = parseFloat(c);
    c.endsWith("fr")
      ? ((x = 3), (g = v))
      : c === "auto"
      ? (x = 2)
      : ((x = 1), (g = parseFloat(c) / 100));
  } else c !== void 0 && typeof c != "string" && (g = c);
  let p = 0.5,
    m = 0.5;
  return (
    (o === !0 || o === "x") &&
      ((d.left = !1), typeof t == "string" && (p = parseFloat(t) / 100)),
    (o === !0 || o === "y") &&
      ((d.top = !1), typeof r == "string" && (m = parseFloat(r) / 100)),
    {
      left: d.left ? t : null,
      right: d.right ? n : null,
      top: d.top ? r : null,
      bottom: d.bottom ? i : null,
      widthType: y,
      heightType: x,
      width: h,
      height: g,
      aspectRatio: d.aspectRatio || null,
      centerAnchorX: p,
      centerAnchorY: m,
      minHeight: e.minHeight,
      maxHeight: e.maxHeight,
      minWidth: e.minWidth,
      maxWidth: e.maxWidth,
    }
  );
}
var Vp = S.createContext({ parentSize: 0 });
function OL(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function ya() {
  return S.useContext(Vp).parentSize;
}
function VS(e) {
  return typeof e == "object";
}
var AL = (e) => {
  let t = ya(),
    { parentSize: n, children: r } = e,
    i = S.useMemo(() => ({ parentSize: n }), [DL(n), VL(n)]);
  return t === 1
    ? r
      ? T(ze, { children: r })
      : null
    : T(Vp.Provider, { value: i, children: r });
};
function DL(e) {
  return VS(e) ? e.width : e;
}
function VL(e) {
  return VS(e) ? e.height : e;
}
var bH = Vp.Consumer;
function BL(e, t) {
  return T(AL, { parentSize: t, children: e });
}
function HL(e) {
  let t = ya();
  return na(e, t, !0);
}
var zL = ((e) => (
    (e.Boolean = "boolean"),
    (e.Number = "number"),
    (e.String = "string"),
    (e.RichText = "richtext"),
    (e.FusedNumber = "fusednumber"),
    (e.Enum = "enum"),
    (e.SegmentedEnum = "segmentedenum"),
    (e.Color = "color"),
    (e.Image = "image"),
    (e.ResponsiveImage = "responsiveimage"),
    (e.File = "file"),
    (e.ComponentInstance = "componentinstance"),
    (e.Array = "array"),
    (e.EventHandler = "eventhandler"),
    (e.Transition = "transition"),
    (e.BoxShadow = "boxshadow"),
    (e.Link = "link"),
    (e.Date = "date"),
    (e.Object = "object"),
    (e.Font = "font"),
    (e.PageScope = "pagescope"),
    (e.ScrollSectionRef = "scrollsectionref"),
    (e.CustomCursor = "customcursor"),
    (e.Border = "border"),
    (e.Cursor = "cursor"),
    e
  ))(zL || {}),
  tp;
function NL() {
  if (tp !== void 0) return tp;
  let e = document.createElement("div");
  Object.assign(e.style, {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    rowGap: "1px",
  }),
    e.appendChild(document.createElement("div")),
    e.appendChild(document.createElement("div")),
    document.body.appendChild(e);
  let t = e.scrollHeight === 1;
  return e.parentNode && e.parentNode.removeChild(e), (tp = t), t;
}
var wi = "flexbox-gap-not-supported",
  f1 = !1;
function xH() {
  f1 || ((f1 = !0), !NL() && document.body.classList.add(wi));
}
var $L = `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6,
[data-framer-component-type="DeprecatedRichText"] li,
[data-framer-component-type="DeprecatedRichText"] ol,
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] span:not([data-text-fill]) {
    font-family: var(--framer-font-family, Inter, Inter Placeholder, sans-serif);
    font-style: var(--framer-font-style, normal);
    font-weight: var(--framer-font-weight, 400);
    color: var(--framer-text-color, #000);
    font-size: var(--framer-font-size, 16px);
    letter-spacing: var(--framer-letter-spacing, 0);
    text-transform: var(--framer-text-transform, none);
    text-decoration: var(--framer-text-decoration, none);
    line-height: var(--framer-line-height, 1.2em);
    text-align: var(--framer-text-alignment, start);
}
`,
  WL = `
[data-framer-component-type="DeprecatedRichText"] p:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] div:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h1:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h2:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h3:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h4:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h5:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h6:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ol:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ul:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] .framer-image:not(:first-child) {
    margin-top: var(--framer-paragraph-spacing, 0);
}
`,
  jL = `
[data-framer-component-type="DeprecatedRichText"] span[data-text-fill] {
    display: inline-block;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`,
  UL = `
[data-framer-component-type="DeprecatedRichText"] a,
[data-framer-component-type="DeprecatedRichText"] a span:not([data-text-fill]) {
    font-family: var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
    font-style: var(--framer-link-font-style, var(--framer-font-style, normal));
    font-weight: var(--framer-link-font-weight, var(--framer-font-weight, 400));
    color: var(--framer-link-text-color, var(--framer-text-color, #000));
    font-size: var(--framer-link-font-size, var(--framer-font-size, 16px));
    text-transform: var(--framer-link-text-transform, var(--framer-text-transform, none));
    text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration, none));
}
`,
  XL = `
[data-framer-component-type="DeprecatedRichText"] a:hover,
[data-framer-component-type="DeprecatedRichText"] a:hover span:not([data-text-fill]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
  GL = `
a[data-framer-page-link-current],
a[data-framer-page-link-current] span:not([data-text-fill]) {
    font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
  YL = `
a[data-framer-page-link-current]:hover,
a[data-framer-page-link-current]:hover span:not([data-text-fill]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
    color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
}
`,
  KL = `
[data-framer-component-type="DeprecatedRichText"] strong {
    font-weight: bolder;
}
`,
  qL = `
[data-framer-component-type="DeprecatedRichText"] em {
    font-style: italic;
}
`,
  QL = `
[data-framer-component-type="DeprecatedRichText"] .framer-image {
    display: block;
    max-width: 100%;
    height: auto;
}
`,
  ZL = `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6 {
    margin: 0;
    padding: 0;
}
`,
  JL = `
[data-framer-component-type="DeprecatedRichText"] .text-styles-preset-reset {
    --framer-font-family: Inter, Inter Placeholder, sans-serif;
    --framer-font-style: normal;
    --framer-font-weight: 500;
    --framer-text-color: #000;
    --framer-font-size: 16px;
    --framer-letter-spacing: 0;
    --framer-text-transform: none;
    --framer-text-decoration: none;
    --framer-line-height: 1.2em;
    --framer-text-alignment: start;
}
`,
  e_ = `
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] ol {
    display: table;
    width: 100%;
    padding-left: 0;
    margin: 0;
}
`,
  t_ = `
[data-framer-component-type="DeprecatedRichText"] li {
    display: table-row;
    counter-increment: list-item;
    list-style: none;
}
`,
  n_ = `
[data-framer-component-type="DeprecatedRichText"] ol > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: counter(list-item) ".";
    white-space: nowrap;
}
`,
  r_ = `
[data-framer-component-type="DeprecatedRichText"] ul > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: "\u2022";
}
`,
  i_ = [
    '[data-framer-component-type="DeprecatedRichText"] { cursor: inherit; }',
    JL,
    ZL,
    $L,
    WL,
    jL,
    UL,
    XL,
    GL,
    YL,
    KL,
    qL,
    QL,
    e_,
    t_,
    n_,
    r_,
  ],
  o_ = [
    `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        ol.framer-text,
        ul.framer-text {
            margin: 0;
            padding: 0;
        }
    `,
    `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text,
        span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family, Inter, Inter Placeholder, sans-serif);
            font-style: var(--framer-font-style, normal);
            font-weight: var(--framer-font-weight, 400);
            color: var(--framer-text-color, #000);
            font-size: calc(var(--framer-font-size, 16px) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-letter-spacing, 0);
            text-transform: var(--framer-text-transform, none);
            text-decoration: var(--framer-text-decoration, none);
            line-height: var(--framer-line-height, 1.2em);
            text-align: var(--framer-text-alignment, start);
        }
    `,
    `
        .framer-fit-text .framer-text {
            white-space: nowrap;
        }
    `,
    `
        strong.framer-text {
            font-family: var(--framer-font-family-bold);
            font-style: var(--framer-font-style-bold);
            font-weight: var(--framer-font-weight-bold, bolder);
        }
    `,
    `
        em.framer-text {
            font-family: var(--framer-font-family-italic);
            font-style: var(--framer-font-style-italic, italic);
            font-weight: var(--framer-font-weight-italic);
        }
    `,
    `
        em.framer-text > strong.framer-text {
            font-family: var(--framer-font-family-bold-italic);
            font-style: var(--framer-font-style-bold-italic, italic);
            font-weight: var(--framer-font-weight-bold-italic, bolder);
        }
    `,
    `
        p.framer-text:not(:first-child),
        div.framer-text:not(:first-child),
        h1.framer-text:not(:first-child),
        h2.framer-text:not(:first-child),
        h3.framer-text:not(:first-child),
        h4.framer-text:not(:first-child),
        h5.framer-text:not(:first-child),
        h6.framer-text:not(:first-child),
        ol.framer-text:not(:first-child),
        ul.framer-text:not(:first-child),
        .framer-image.framer-text:not(:first-child) {
            margin-top: var(--framer-paragraph-spacing, 0);
        }
    `,
    `
        li.framer-text > ul.framer-text:nth-child(2),
        li.framer-text > ol.framer-text:nth-child(2) {
            margin-top: 0;
        }
    `,
    `
        .framer-text[data-text-fill] {
            display: inline-block;
            background-clip: text;
            -webkit-background-clip: text;
            /* make this a transparent color if you want to visualise the clipping  */
            -webkit-text-fill-color: transparent;
            padding: max(0em, calc(calc(1.3em - var(--framer-line-height, 1.3em)) / 2));
            margin: min(0em, calc(calc(1.3em - var(--framer-line-height, 1.3em)) / -2));
        }
    `,
    `
        code.framer-text,
        code.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-code-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-font-size, 16px) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-letter-spacing, 0);
            line-height: var(--framer-line-height, 1.2em);
        }
    `,
    `
        a.framer-text,
        a.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-link-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-link-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-link-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-text-transform, var(--framer-text-transform, none));
            text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration, none));
            /* Cursor inherit to overwrite the user agent stylesheet on rich text links. */
            cursor: var(--framer-custom-cursors, pointer);
        }
    `,
    `
        code.framer-text a.framer-text,
        code.framer-text a.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-link-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
        }
    `,
    `
        a.framer-text:hover,
        a.framer-text:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
        }
    `,
    `
        code.framer-text a.framer-text:hover,
        code.framer-text a.framer-text:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `,
    `
        a.framer-text[data-framer-page-link-current],
        a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
        }
    `,
    `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `,
    `
        a.framer-text[data-framer-page-link-current]:hover,
        a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
        }
    `,
    `
        code.framer-text a.framer-text[data-framer-page-link-current]:hover,
        code.framer-text a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
        }
    `,
    `
        .framer-image.framer-text {
            display: block;
            max-width: 100%;
            height: auto;
        }
    `,
    `
        .text-styles-preset-reset.framer-text {
            --framer-font-family: Inter, Inter Placeholder, sans-serif;
            --framer-font-style: normal;
            --framer-font-weight: 500;
            --framer-text-color: #000;
            --framer-font-size: 16px;
            --framer-letter-spacing: 0;
            --framer-text-transform: none;
            --framer-text-decoration: none;
            --framer-line-height: 1.2em;
            --framer-text-alignment: start;
        }
    `,
    `
        ol.framer-text {
            --list-style-type: decimal;
        }
    `,
    `
        ul.framer-text,
        ol.framer-text {
            display: table;
            width: 100%;
        }
    `,
    `
        li.framer-text {
            display: table-row;
            counter-increment: list-item;
            list-style: none;
        }
    `,
    `
        ol.framer-text > li.framer-text::before {
            display: table-cell;
            width: 2.25ch;
            box-sizing: border-box;
            padding-inline-end: 0.75ch;
            content: counter(list-item, var(--list-style-type)) ".";
            white-space: nowrap;
        }
    `,
    `
        ul.framer-text > li.framer-text::before {
            display: table-cell;
            width: 2.25ch;
            box-sizing: border-box;
            padding-inline-end: 0.75ch;
            content: "\u2022";
        }
    `,
    `
        .framer-text-module[style*="aspect-ratio"] > :first-child {
            width: 100%;
        }
    `,
    `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"] {
                position: relative;
            }
        }
    `,
    `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"]::before {
                content: "";
                display: block;
                padding-bottom: calc(100% / calc(var(--aspect-ratio)));
            }
        }
    `,
    `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"] > :first-child {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
            }
        }
    `,
  ],
  s_ = new Set(),
  np;
function BS(e, t, n = s_) {
  if (!(!e || n.has(e) || typeof document > "u")) {
    if ((n.add(e), !t)) {
      if (!np) {
        let r = document.createElement("style");
        if (
          (r.setAttribute("type", "text/css"),
          r.setAttribute("data-framer-css", "true"),
          !document.head)
        ) {
          console.warn(
            "not injecting CSS: the document is missing a <head> element"
          );
          return;
        }
        if ((document.head.appendChild(r), r.sheet)) np = r.sheet;
        else {
          console.warn(
            "not injecting CSS: injected <style> element does not have a sheet",
            r
          );
          return;
        }
      }
      t = np;
    }
    try {
      t.insertRule(e, t.cssRules.length);
    } catch {}
  }
}
var a_ = ["[data-framer-component-type] { position: absolute; }"],
  l_ = `
[data-framer-component-type="Text"] > * {
    text-align: var(--framer-text-alignment, start);
}`,
  c_ = `
[data-framer-component-type="Text"] span span,
[data-framer-component-type="Text"] p span,
[data-framer-component-type="Text"] h1 span,
[data-framer-component-type="Text"] h2 span,
[data-framer-component-type="Text"] h3 span,
[data-framer-component-type="Text"] h4 span,
[data-framer-component-type="Text"] h5 span,
[data-framer-component-type="Text"] h6 span {
    display: block;
}`,
  u_ = `
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span {
    display: unset;
}`,
  f_ = `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    font-family: var(--font-family);
    font-style: var(--font-style);
    font-weight: min(calc(var(--framer-font-weight-increase, 0) + var(--font-weight, 400)), 900);
    color: var(--text-color);
    letter-spacing: var(--letter-spacing);
    font-size: var(--font-size);
    text-transform: var(--text-transform);
    text-decoration: var(--text-decoration);
    line-height: var(--line-height);
}`,
  d_ = `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    --font-family: var(--framer-font-family);
    --font-style: var(--framer-font-style);
    --font-weight: var(--framer-font-weight);
    --text-color: var(--framer-text-color);
    --letter-spacing: var(--framer-letter-spacing);
    --font-size: var(--framer-font-size);
    --text-transform: var(--framer-text-transform);
    --text-decoration: var(--framer-text-decoration);
    --line-height: var(--framer-line-height);
}`,
  h_ = `
[data-framer-component-type="Text"] a,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] a span span span,
[data-framer-component-type="Text"] a p span span,
[data-framer-component-type="Text"] a h1 span span,
[data-framer-component-type="Text"] a h2 span span,
[data-framer-component-type="Text"] a h3 span span,
[data-framer-component-type="Text"] a h4 span span,
[data-framer-component-type="Text"] a h5 span span,
[data-framer-component-type="Text"] a h6 span span {
    --font-family: var(--framer-link-font-family, var(--framer-font-family));
    --font-style: var(--framer-link-font-style, var(--framer-font-style));
    --font-weight: var(--framer-link-font-weight, var(--framer-font-weight));
    --text-color: var(--framer-link-text-color, var(--framer-text-color));
    --font-size: var(--framer-link-font-size, var(--framer-font-size));
    --text-transform: var(--framer-link-text-transform, var(--framer-text-transform));
    --text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration));
}`,
  p_ = `
[data-framer-component-type="Text"] a:hover,
[data-framer-component-type="Text"] a div span:hover,
[data-framer-component-type="Text"] a span span span:hover,
[data-framer-component-type="Text"] a p span span:hover,
[data-framer-component-type="Text"] a h1 span span:hover,
[data-framer-component-type="Text"] a h2 span span:hover,
[data-framer-component-type="Text"] a h3 span span:hover,
[data-framer-component-type="Text"] a h4 span span:hover,
[data-framer-component-type="Text"] a h5 span span:hover,
[data-framer-component-type="Text"] a h6 span span:hover {
    --font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration)));
}`,
  m_ = `
[data-framer-component-type="Text"].isCurrent a,
[data-framer-component-type="Text"].isCurrent a div span,
[data-framer-component-type="Text"].isCurrent a span span span,
[data-framer-component-type="Text"].isCurrent a p span span,
[data-framer-component-type="Text"].isCurrent a h1 span span,
[data-framer-component-type="Text"].isCurrent a h2 span span,
[data-framer-component-type="Text"].isCurrent a h3 span span,
[data-framer-component-type="Text"].isCurrent a h4 span span,
[data-framer-component-type="Text"].isCurrent a h5 span span,
[data-framer-component-type="Text"].isCurrent a h6 span span {
    --font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration)));
}`,
  v_ = [
    '[data-framer-component-type="Text"] { cursor: inherit; }',
    "[data-framer-component-text-autosized] * { white-space: pre; }",
    l_,
    c_,
    u_,
    f_,
    d_,
    h_,
    p_,
    m_,
  ],
  g_ = `
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-component-type],
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > [data-framer-component-type] {
    position: relative;
}`,
  y_ = [
    `[data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: var(--stack-native-row-gap);
        column-gap: var(--stack-native-column-gap);
    }`,
    `.${wi} [data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: unset;
        column-gap: unset;
    }`,
  ],
  b_ = `
.${wi} [data-framer-legacy-stack-gap-enabled="true"] > *, [data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"] {
    margin-top: calc(var(--stack-gap-y) / 2);
    margin-bottom: calc(var(--stack-gap-y) / 2);
    margin-right: calc(var(--stack-gap-x) / 2);
    margin-left: calc(var(--stack-gap-x) / 2);
}
`,
  x_ = `
.${wi}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child,
.${wi}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child {
    margin-top: 0;
    margin-left: 0;
}`,
  S_ = `
.${wi}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child,
.${wi}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child {
    margin-right: 0;
    margin-bottom: 0;
}`,
  w_ = [g_, b_, ...y_, x_, S_],
  C_ = [
    `
NavigationContainer
[data-framer-component-type="NavigationContainer"] > *,
[data-framer-component-type="NavigationContainer"] > [data-framer-component-type] {
    position: relative;
}`,
  ],
  k_ = [
    '[data-framer-component-type="Scroll"]::-webkit-scrollbar { display: none; }',
    '[data-framer-component-type="ScrollContentWrapper"] > * { position: relative; }',
  ],
  T_ = [
    '[data-framer-component-type="NativeScroll"] { -webkit-overflow-scrolling: touch; }',
    '[data-framer-component-type="NativeScroll"] > * { position: relative; }',
    '[data-framer-component-type="NativeScroll"].direction-both { overflow-x: scroll; overflow-y: scroll; }',
    '[data-framer-component-type="NativeScroll"].direction-vertical { overflow-x: hidden; overflow-y: scroll; }',
    '[data-framer-component-type="NativeScroll"].direction-horizontal { overflow-x: scroll; overflow-y: hidden; }',
    '[data-framer-component-type="NativeScroll"].direction-vertical > * { width: 100% !important; }',
    '[data-framer-component-type="NativeScroll"].direction-horizontal > * { height: 100% !important; }',
    '[data-framer-component-type="NativeScroll"].scrollbar-hidden::-webkit-scrollbar { display: none; }',
  ],
  E_ = [
    '[data-framer-component-type="DeviceComponent"].no-device > * { width: 100% !important; height: 100% !important; }',
  ],
  R_ = [
    '[data-framer-component-type="PageContentWrapper"] > *, [data-framer-component-type="PageContentWrapper"] > [data-framer-component-type] { position: relative; }',
  ],
  P_ = [
    '[data-is-present="false"], [data-is-present="false"] * { pointer-events: none !important; }',
  ],
  I_ = [
    '[data-framer-cursor="pointer"] { cursor: pointer; }',
    '[data-framer-cursor="grab"] { cursor: grab; }',
    '[data-framer-cursor="grab"]:active { cursor: grabbing; }',
  ],
  F_ = [
    '[data-framer-component-type="Frame"] *, [data-framer-component-type="Stack"] * { pointer-events: auto; }',
    "[data-framer-generated] * { pointer-events: unset }",
  ],
  L_ = [
    `[data-reset="button"] {
        border-width: 0;
        padding: 0;
        background: none;
}`,
  ],
  __ = [
    '[data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }',
    '[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }',
  ],
  M_ = (e) => (e ? F_ : []),
  O_ = [".svgContainer svg { display: block; }"],
  HS = (e) => [
    ...a_,
    ...v_,
    ...o_,
    ...i_,
    ...w_,
    ...C_,
    ...k_,
    ...T_,
    ...R_,
    ...E_,
    ...P_,
    ...I_,
    ...M_(e),
    ...O_,
    ...L_,
    ...__,
  ],
  A_ = HS(!1),
  D_ = HS(!0),
  d1 = !1;
function ba() {
  if (d1) return;
  d1 = !0;
  let e = Ee.current() === "PREVIEW" ? D_ : A_;
  for (let t of e) BS(t, void 0, void 0);
}
function ra(e) {
  return typeof e == "function";
}
function zS(e) {
  return typeof e == "boolean";
}
function ne(e) {
  return typeof e == "string";
}
function ce(e) {
  return Number.isFinite(e);
}
function su(e) {
  return Array.isArray(e);
}
function De(e) {
  return e !== null && typeof e == "object" && !su(e);
}
function bt(e) {
  return typeof e > "u";
}
function Le(e) {
  return e === null;
}
function ia(e) {
  return bt(e) || Le(e);
}
function tn(e) {
  return e instanceof Date && !isNaN(e.getTime());
}
function V_(e) {
  return De(e) || ra(e);
}
var h1 = "optional";
function B_(e) {
  return !!e && h1 in e && e[h1] === !0;
}
function H_(e) {
  try {
    switch (e.type) {
      case "string":
      case "color":
      case "date":
      case "link":
      case "boxshadow":
        return ne(e.defaultValue) ? e.defaultValue : void 0;
      case "boolean":
        return zS(e.defaultValue) ? e.defaultValue : void 0;
      case "enum":
        return bt(e.defaultValue)
          ? void 0
          : e.options.includes(e.defaultValue)
          ? e.defaultValue
          : void 0;
      case "fusednumber":
      case "number":
        return ce(e.defaultValue) ? e.defaultValue : void 0;
      case "transition":
        return De(e.defaultValue) ? e.defaultValue : void 0;
      case "border":
        return De(e.defaultValue) ? e.defaultValue : void 0;
      case "font":
        return De(e.defaultValue) ? e.defaultValue : void 0;
      case "object": {
        let t = De(e.defaultValue) ? e.defaultValue : {};
        return De(e.controls) && NS(t, e.controls), t;
      }
      case "array":
        return su(e.defaultValue) ? e.defaultValue : void 0;
      case "file":
      case "image":
      case "richtext":
      case "pagescope":
      case "eventhandler":
      case "segmentedenum":
      case "responsiveimage":
      case "componentinstance":
      case "scrollsectionref":
      case "customcursor":
      case "cursor":
        return;
      default:
        return;
    }
  } catch {
    return;
  }
}
function NS(e, t) {
  for (let n in t) {
    let r = t[n];
    if (!r) continue;
    let i = e[n];
    if (!bt(i) || B_(r)) continue;
    let o = H_(r);
    bt(o) || (e[n] = o);
  }
}
function z_(e) {
  if (De(e.defaultProps)) return e.defaultProps;
  let t = {};
  return (e.defaultProps = t), t;
}
function N_(e, t) {
  if (!V_(e)) return;
  let n = z_(e);
  NS(n, t);
}
function SH(e, t) {
  Object.assign(e, { propertyControls: t }), N_(e, t);
}
function $_(e) {
  return e.propertyControls;
}
var Fn = {
    iPhonePro: {
      screenRadius: 0,
      clayBezelLeft: 21,
      clayBezelRight: 21,
      clayBezelTop: 21,
      clayBezelBottom: 21,
      clayBezelRadius: 38 + 21,
    },
    iPhone8: {
      screenRadius: 0,
      clayBezelLeft: 24,
      clayBezelRight: 24,
      clayBezelTop: 96,
      clayBezelBottom: 96,
      clayBezelRadius: 38 * 1.5,
    },
    iPadPro: {
      screenRadius: 25,
      clayBezelLeft: 38,
      clayBezelRight: 38,
      clayBezelTop: 38,
      clayBezelBottom: 38,
      clayBezelRadius: 25 + 38,
    },
    desktop: {
      clayBezelLeft: 20,
      clayBezelRight: 20,
      clayBezelTop: 20,
      clayBezelBottom: 20,
      clayBezelRadius: 20,
    },
  },
  W_ = [
    {
      id: "iphone-12",
      title: "iPhone 12",
      screenRadius: 0,
      clayBezelLeft: 22,
      clayBezelRight: 22,
      clayBezelTop: 22,
      clayBezelBottom: 22,
      clayBezelRadius: 66,
      screenWidth: 390,
      screenHeight: 844,
      externalClay: {
        width: 500,
        height: 974,
        screenOffsetTop: 65,
        screenOffsetLeft: 55,
      },
      screenMask:
        '<g style="transform: scale(0.5);"><path d="M171.2 0c2.3 0 4 .5 5.4 1.3 1.6 1 2.8 2.2 3.7 3.8.8 1.6 1.2 2.3 1.2 4.9 0 12 2.2 19 6.2 26.5s9.8 13.3 17.3 17.4c7.5 4 15.8 6.1 30.6 6.1h311.5c14.3 0 22.5-2.2 29.9-6.1 7.5-4 13.3-10 17.3-17.4 4-7.5 6.2-14.5 6.2-26.5 0-2.6.4-3.2 1.1-4.9.8-1.6 2-2.9 3.4-3.8 1.4-.8 3.2-1.3 5.4-1.3h54.2c40.1 0 54.7 4.2 69.4 12a81.8 81.8 0 0134 34c7.8 14.7 12 29.3 12 69.4v1457.2c0 40.1-4.2 54.7-12 69.4a81.8 81.8 0 01-34 34c-14.7 7.8-29.3 12-69.4 12H115.4c-40.1 0-54.7-4.2-69.4-12a81.8 81.8 0 01-34-34c-7.8-14.7-12-29.3-12-69.4V115.4C0 75.3 4.2 60.7 12 46a81.8 81.8 0 0134-34C60.7 4.2 75.3 0 115.4 0h55.4z" fill="#000" fill-rule="evenodd"/></g>',
      realisticImage: {
        width: 490,
        height: 944,
        screenOffsetLeft: 50,
        screenOffsetTop: 50,
        availableColors: [
          { id: "black", title: "Black", colorValue: "#2E2C36" },
          { id: "white", title: "White", colorValue: "#F7F3F0" },
          { id: "blue", title: "Blue", colorValue: "#14496D" },
          { id: "green", title: "Green", colorValue: "#DAF0D9" },
          { id: "red", title: "Red", colorValue: "#DB4141" },
        ],
        handOffset: { left: 29, right: 29, bottom: 29 },
      },
    },
    {
      id: "iphone-12-mini",
      title: "iPhone 12 Mini",
      screenRadius: 0,
      clayBezelLeft: 22,
      clayBezelRight: 22,
      clayBezelTop: 22,
      clayBezelBottom: 22,
      clayBezelRadius: 66,
      screenWidth: 360,
      screenHeight: 780,
      externalClay: {
        width: 450,
        height: 890,
        screenOffsetTop: 55,
        screenOffsetLeft: 45,
      },
      screenMask:
        '<g style="transform: scale(0.5);"><path d="M142 18c0 19 14 47 43 48h349c31 0 44-29 44-48 0-12 4-18 14-18h18c38 0 52 4 66 11 14 8 25 19 33 33v1c7 14 11 28 11 65v1340c0 38-4 52-11 66-8 14-19 25-33 33h-1c-14 7-28 11-65 11H110c-38 0-52-4-66-11-14-8-25-19-33-33v-1c-7-13-11-27-11-64V110c0-38 4-52 11-66 8-14 19-25 33-33h1C58 4 72 0 109 0h16c11 0 17 6 17 18z" fill="#000" fill-rule="evenodd"/></g>',
      realisticImage: {
        width: 460,
        height: 880,
        screenOffsetLeft: 50,
        screenOffsetTop: 50,
        availableColors: [
          { id: "black", title: "Black", colorValue: "#2E2C36" },
          { id: "white", title: "White", colorValue: "#F7F3F0" },
          { id: "blue", title: "Blue", colorValue: "#14496D" },
          { id: "green", title: "Green", colorValue: "#DAF0D9" },
          { id: "red", title: "Red", colorValue: "#DB4141" },
        ],
        handOffset: { left: 31.5, right: 30.5, bottom: 30 },
      },
    },
    {
      id: "iphone-12-pro",
      title: "iPhone 12 Pro",
      screenRadius: 0,
      clayBezelLeft: 22,
      clayBezelRight: 22,
      clayBezelTop: 22,
      clayBezelBottom: 22,
      clayBezelRadius: 66,
      screenWidth: 390,
      screenHeight: 844,
      externalClay: {
        width: 494,
        height: 968,
        screenOffsetTop: 62,
        screenOffsetLeft: 52,
      },
      screenMask:
        '<g style="transform: scale(0.5);"><path d="M171.2 0c2.3 0 4 .5 5.4 1.3 1.6 1 2.8 2.2 3.7 3.8.8 1.6 1.2 2.3 1.2 4.9 0 12 2.2 19 6.2 26.5s9.8 13.3 17.3 17.4c7.5 4 15.8 6.1 30.6 6.1h311.5c14.3 0 22.5-2.2 29.9-6.1 7.5-4 13.3-10 17.3-17.4 4-7.5 6.2-14.5 6.2-26.5 0-2.6.4-3.2 1.1-4.9.8-1.6 2-2.9 3.4-3.8 1.4-.8 3.2-1.3 5.4-1.3h54.2c40.1 0 54.7 4.2 69.4 12a81.8 81.8 0 0134 34c7.8 14.7 12 29.3 12 69.4v1457.2c0 40.1-4.2 54.7-12 69.4a81.8 81.8 0 01-34 34c-14.7 7.8-29.3 12-69.4 12H115.4c-40.1 0-54.7-4.2-69.4-12a81.8 81.8 0 01-34-34c-7.8-14.7-12-29.3-12-69.4V115.4C0 75.3 4.2 60.7 12 46a81.8 81.8 0 0134-34C60.7 4.2 75.3 0 115.4 0h55.4z" fill="#000" fill-rule="evenodd"/></g>',
      realisticImage: {
        width: 490,
        height: 944,
        screenOffsetLeft: 50,
        screenOffsetTop: 50,
        availableColors: [
          { id: "graphite", title: "Graphite", colorValue: "#585753" },
          { id: "silver", title: "Silver", colorValue: "#E5E6E1" },
          { id: "pacific-blue", title: "Pacific Blue", colorValue: "#415D6C" },
          { id: "gold", title: "Gold", colorValue: "#FCECD5" },
        ],
        handOffset: { left: 29, right: 29, bottom: 29 },
      },
    },
    {
      id: "iphone-12-pro-max",
      title: "iPhone 12 Pro Max",
      screenRadius: 50,
      clayBezelLeft: 22,
      clayBezelRight: 22,
      clayBezelTop: 22,
      clayBezelBottom: 22,
      clayBezelRadius: 66,
      screenWidth: 428,
      screenHeight: 926,
      externalClay: {
        width: 532,
        height: 1050,
        screenOffsetTop: 62,
        screenOffsetLeft: 52,
      },
      screenMask:
        '<path d="M102 0c6 0 7 3 7 9 0 10 7 23 24 23h164c13 0 22-12 22-23 0-6 1-9 7-9h34c24 0 32 2 41 7s15 11 20 20 7 17 7 41v790c0 24-2 32-7 41s-11 15-20 20-17 7-41 7H68c-24 0-32-2-41-7s-15-11-20-20-7-17-7-41V68c0-24 2-32 7-41S18 12 27 7s17-7 41-7h34z" fill="#000" fill-rule="evenodd"/>',
      realisticImage: {
        width: 528,
        height: 1026,
        screenOffsetLeft: 50,
        screenOffsetTop: 50,
        availableColors: [
          { id: "graphite", title: "Graphite", colorValue: "#585753" },
          { id: "silver", title: "Silver", colorValue: "#E5E6E1" },
          { id: "pacific-blue", title: "Pacific Blue", colorValue: "#415D6C" },
          { id: "gold", title: "Gold", colorValue: "#FCECD5" },
        ],
        handOffset: { left: 28.5, right: 28, bottom: 29 },
      },
    },
    {
      id: "iphone-11",
      title: "iPhone 11",
      screenRadius: 0,
      clayBezelLeft: 35.5,
      clayBezelRight: 35.5,
      clayBezelTop: 35.5,
      clayBezelBottom: 35.5,
      clayBezelRadius: 77,
      screenWidth: 414,
      screenHeight: 896,
      externalClay: {
        width: 524,
        height: 1026,
        screenOffsetTop: 65,
        screenOffsetLeft: 55,
      },
      screenMask:
        '<path d="M85.5 0C89.1 0 92 3 92 6.5c.3 6 1.5 10 3.4 13.5 2.2 4.1 5.5 7.4 9.6 9.6 4.2 2.2 8.9 3.4 17 3.4h170c8.1 0 12.8-1.2 17-3.4 4.1-2.2 7.4-5.5 9.6-9.6A31 31 0 00322 6.5c0-3.6 3-6.5 6.5-6.5h32.3c18.5 0 25.2 2 32 5.5 6.7 3.7 12 9 15.7 15.7 3.6 6.8 5.5 13.5 5.5 32v789.6c0 18.5-2 25.2-5.5 32-3.7 6.7-9 12-15.7 15.7-6.8 3.6-13.5 5.5-32 5.5H53.2c-18.5 0-25.2-2-32-5.5-6.7-3.7-12-9-15.7-15.7C2 868 0 861.3 0 842.8V53.2c0-18.5 2-25.2 5.5-32 3.7-6.7 9-12 15.7-15.7C28 2 34.7 0 53.2 0h32.3z" fill="#000" fill-rule="nonzero"/>',
      realisticImage: {
        width: 514,
        height: 996,
        screenOffsetLeft: 50,
        screenOffsetTop: 50,
        availableColors: [
          { id: "black", title: "Black", colorValue: "#202120" },
          { id: "white", title: "White", colorValue: "#F9F6EF" },
          { id: "purple", title: "Purple", colorValue: "#D1CDDB" },
          { id: "green", title: "Green", colorValue: "#ADE0CD" },
          { id: "red", title: "Red", colorValue: "#B90D2E" },
          { id: "yellow", title: "Yellow", colorValue: "#FFE680" },
        ],
        handOffset: { left: 14.5, right: 14.5, bottom: 14.5 },
      },
    },
    {
      id: "iphone-11-pro",
      title: "iPhone 11 Pro",
      ...Fn.iPhonePro,
      screenWidth: 375,
      screenHeight: 812,
      externalClay: {
        width: 485,
        height: 942,
        screenOffsetTop: 65,
        screenOffsetLeft: 55,
      },
      screenMask:
        '<path d="M292 8.668V9c0 9.266-7.07 21-23.332 21h-162C90.402 30 83.332 18.266 83.332 9v-.332c0-4.285 0-8.668-7.664-8.668H43.332C16.312 0 0 16.313 0 43.332v725.336C0 795.688 16.313 812 43.332 812h288.336c27.02 0 43.332-16.313 43.332-43.332V43.332C375 16.312 358.687 0 331.668 0h-32C292 0 292 4.383 292 8.668zm0 0"/>',
      realisticImage: {
        width: 475,
        height: 912,
        screenOffsetLeft: 50,
        screenOffsetTop: 50,
        availableColors: [
          { id: "space-grey", title: "Space Grey", colorValue: "#52514F" },
          { id: "silver", title: "Silver", colorValue: "#EBEBE3" },
          { id: "gold", title: "Gold", colorValue: "#FBD7BD" },
          {
            id: "midnight-green",
            title: "Midnight Green",
            colorValue: "#4F5850",
          },
        ],
        handOffset: { left: 24.5, right: 24.5, bottom: 23.5 },
      },
    },
    {
      id: "iphone-11-pro-max",
      title: "iPhone 11 Pro Max",
      ...Fn.iPhonePro,
      screenWidth: 414,
      screenHeight: 896,
      externalClay: {
        width: 524,
        height: 1026,
        screenOffsetTop: 65,
        screenOffsetLeft: 55,
      },
      screenMask:
        '<path d="M96 0c3.313 0 5.91 2.688 6 6 .18 6.645 1.191 10.148 2.938 13.41 1.917 3.586 4.73 6.402 8.316 8.317 3.586 1.918 7.441 2.941 15.445 2.941h156.602c8.004 0 11.86-1.023 15.445-2.941 3.586-1.915 6.399-4.73 8.317-8.317 1.746-3.265 2.746-6.758 2.937-13.41.094-3.313 2.688-6 6-6h46.004c17.387 0 23.687 1.809 30.043 5.21 6.355 3.4 11.344 8.388 14.742 14.743C412.191 26.31 414 32.61 414 49.996v796.008c0 17.387-1.809 23.687-5.21 30.043-3.4 6.355-8.388 11.344-14.743 14.742-6.356 3.402-12.656 5.211-30.043 5.211H49.996c-17.387 0-23.687-1.809-30.043-5.21-6.355-3.4-11.344-8.388-14.742-14.743C1.809 869.69 0 863.39 0 846.004V49.996C0 32.61 1.809 26.31 5.21 19.953c3.4-6.355 8.388-11.344 14.743-14.742C26.31 1.809 32.61 0 49.996 0zm0 0"/>',
      realisticImage: {
        width: 514,
        height: 996,
        screenOffsetLeft: 50,
        screenOffsetTop: 50,
        availableColors: [
          { id: "space-grey", title: "Space Grey", colorValue: "#52514F" },
          { id: "silver", title: "Silver", colorValue: "#EBEBE3" },
          { id: "gold", title: "Gold", colorValue: "#FBD7BD" },
          {
            id: "midnight-green",
            title: "Midnight Green",
            colorValue: "#4F5850",
          },
        ],
        handOffset: { left: 23.5, right: 24.5, bottom: 24 },
      },
    },
    {
      id: "iphone-8",
      title: "iPhone 8",
      ...Fn.iPhone8,
      screenWidth: 375,
      screenHeight: 667,
      externalClay: {
        width: 491,
        height: 971,
        screenOffsetLeft: 58,
        screenOffsetTop: 152,
      },
      realisticImage: {
        width: 475,
        height: 927,
        screenOffsetLeft: 50,
        screenOffsetTop: 130,
        availableColors: [
          { id: "space-grey", title: "Space Grey", colorValue: "#28282A" },
          { id: "silver", title: "Silver", colorValue: "#DFE1E2" },
          { id: "gold", title: "Gold", colorValue: "#F6E6DB" },
        ],
        handOffset: { left: 22, right: 22, bottom: 18.5 },
      },
    },
    {
      id: "iphone-8-plus",
      title: "iPhone 8 Plus",
      ...Fn.iPhone8,
      screenWidth: 414,
      screenHeight: 736,
      externalClay: {
        width: 530,
        height: 1064,
        screenOffsetLeft: 58,
        screenOffsetTop: 164,
      },
      realisticImage: {
        width: 514,
        height: 996,
        screenOffsetLeft: 50,
        screenOffsetTop: 130,
        availableColors: [
          { id: "space-grey", title: "Space Grey", colorValue: "#28282A" },
          { id: "silver", title: "Silver", colorValue: "#DFE1E2" },
          { id: "gold", title: "Gold", colorValue: "#F6E6DB" },
        ],
        handOffset: { left: 21, right: 20.5, bottom: 19 },
      },
    },
    {
      id: "iphone-se",
      title: "iPhone SE",
      screenWidth: 320,
      screenHeight: 568,
      screenRadius: 0,
      clayBezelLeft: 20,
      clayBezelRight: 20,
      clayBezelTop: 112,
      clayBezelBottom: 112,
      clayBezelRadius: 38 * 1.5,
      externalClay: {
        width: 436,
        height: 872,
        screenOffsetLeft: 58,
        screenOffsetTop: 152,
      },
      realisticImage: {
        width: 420,
        height: 828,
        screenOffsetLeft: 50,
        screenOffsetTop: 130,
        availableColors: [
          { id: "space-grey", title: "Space Grey", colorValue: "#C3C4C8" },
          { id: "silver", title: "Silver", colorValue: "#E1E2E4" },
          { id: "gold", title: "Gold", colorValue: "#EFD8BD" },
          { id: "rose-gold", title: "Rose Gold", colorValue: "#F7CFCA" },
        ],
        handOffset: { left: 22, right: 22, bottom: 26.5 },
      },
    },
    {
      id: "samsung-galaxy-s7",
      title: "Samsung Galaxy S7",
      screenRadius: 0,
      clayBezelLeft: 22,
      clayBezelRight: 22,
      clayBezelTop: 22,
      clayBezelBottom: 22,
      clayBezelRadius: 66,
      screenWidth: 360,
      screenHeight: 640,
      externalClay: {
        width: 454,
        height: 880,
        screenOffsetTop: 120,
        screenOffsetLeft: 47,
      },
      realisticImage: {
        width: 440,
        height: 860,
        screenOffsetLeft: 40,
        screenOffsetTop: 110,
        availableColors: [
          { id: "black", title: "Black", colorValue: "#2E2C36" },
          { id: "white", title: "White", colorValue: "#F7F3F0" },
          { id: "silver", title: "Silver", colorValue: "#E5E6E1" },
          { id: "gold", title: "Gold", colorValue: "#FCECD5" },
        ],
        handOffset: { left: 26, right: 25.5, bottom: 32 },
      },
    },
    {
      id: "samsung-note-10",
      title: "Samsung Note 10",
      screenWidth: 360,
      screenHeight: 760,
      screenRadius: 10,
      clayBezelLeft: 7,
      clayBezelRight: 7,
      clayBezelTop: 15,
      clayBezelBottom: 15,
      clayBezelRadius: 15,
    },
    {
      id: "pixel-5",
      title: "Google Pixel 5",
      screenRadius: 31,
      clayBezelLeft: 22,
      clayBezelRight: 22,
      clayBezelTop: 22,
      clayBezelBottom: 22,
      clayBezelRadius: 66,
      screenWidth: 360,
      screenHeight: 780,
      externalClay: {
        width: 460,
        height: 900,
        screenOffsetTop: 60,
        screenOffsetLeft: 50,
      },
      realisticImage: {
        width: 920 / 2,
        height: 1760 / 2,
        screenOffsetLeft: 100 / 2,
        screenOffsetTop: 100 / 2,
        availableColors: [
          { id: "just-black", title: "Just Black", colorValue: "#2E2C36" },
          { id: "sorta-sage", title: "Sorta Sage", colorValue: "#B7C9C0" },
        ],
        handOffset: { left: 31.5, right: 31, bottom: 31 },
      },
    },
    {
      id: "pixel-4",
      title: "Google Pixel 4",
      screenWidth: 360,
      screenHeight: 760,
      screenRadius: 34,
      clayBezelLeft: 10,
      clayBezelRight: 10,
      clayBezelTop: 50,
      clayBezelBottom: 25,
      clayBezelRadius: 50,
      externalClay: {
        width: 460,
        height: 938,
        screenOffsetLeft: 50,
        screenOffsetTop: 89,
      },
      realisticImage: {
        width: 460,
        height: 920,
        screenOffsetLeft: 50,
        screenOffsetTop: 80,
        availableColors: [
          {
            id: "clearly-white",
            title: "Clearly White",
            colorValue: "#EAEDF2",
          },
          { id: "just-black", title: "Just Black", colorValue: "#1A1A1A" },
          { id: "oh-so-orange", title: "Oh So Orange", colorValue: "#FF7A68" },
        ],
        handOffset: { left: 35.5, right: 35.5, bottom: 57 },
      },
    },
    {
      id: "macbook-air",
      title: "MacBook Air",
      screenWidth: 1440,
      screenHeight: 900,
      disableRotation: !0,
      externalClay: {
        width: 1890,
        height: 1125,
        screenOffsetLeft: 225,
        screenOffsetTop: 98,
      },
      realisticImage: {
        width: 3848 / 2,
        height: 2240 / 2,
        screenOffsetLeft: 484 / 2,
        screenOffsetTop: 196 / 2,
        availableColors: [
          { id: "silver", title: "Silver", colorValue: "#E5E6E1" },
          { id: "space-grey", title: "Space Grey", colorValue: "#B1B5B7" },
          { id: "gold", title: "Gold", colorValue: "#FCECD5" },
        ],
      },
    },
    {
      id: "macbook-pro-13",
      title: 'MacBook Pro 13"',
      screenWidth: 1440,
      screenHeight: 900,
      disableRotation: !0,
      externalClay: {
        width: 1914,
        height: 1169,
        screenOffsetLeft: 236,
        screenOffsetTop: 109,
      },
      realisticImage: {
        width: 3916 / 2,
        height: 2330 / 2,
        screenOffsetLeft: 518 / 2,
        screenOffsetTop: 218 / 2,
        availableColors: [
          { id: "silver", title: "Silver", colorValue: "#E5E6E1" },
          { id: "space-grey", title: "Space Grey", colorValue: "#B1B5B7" },
        ],
      },
    },
    {
      id: "macbook-pro-16",
      title: 'MacBook Pro 16"',
      screenWidth: 1536,
      screenHeight: 960,
      disableRotation: !0,
      externalClay: {
        width: 1984,
        height: 1179,
        screenOffsetLeft: 225,
        screenOffsetTop: 78,
      },
      realisticImage: {
        width: 4032 / 2,
        height: 2348 / 2,
        screenOffsetLeft: 480 / 2,
        screenOffsetTop: 148 / 2,
        availableColors: [
          { id: "silver", title: "Silver", colorValue: "#E5E6E1" },
          { id: "space-grey", title: "Space Grey", colorValue: "#B1B5B7" },
        ],
      },
    },
    {
      id: "imac-21-5",
      title: 'iMac 21.5"',
      screenWidth: 2048,
      screenHeight: 1152,
      disableRotation: !0,
      externalClay: {
        width: 2288,
        height: 1892,
        screenOffsetLeft: 120,
        screenOffsetTop: 120,
      },
      realisticImage: {
        width: 4562 / 2,
        height: 3796 / 2,
        screenOffsetLeft: 232 / 2,
        screenOffsetTop: 244 / 2,
      },
    },
    {
      id: "imac-27",
      title: 'iMac 27"',
      screenWidth: 2560,
      screenHeight: 1440,
      disableRotation: !0,
      externalClay: {
        width: 2848,
        height: 2351,
        screenOffsetLeft: 144,
        screenOffsetTop: 151,
      },
      realisticImage: {
        width: 5676 / 2,
        height: 4720 / 2,
        screenOffsetLeft: 278 / 2,
        screenOffsetTop: 292 / 2,
        availableColors: [
          { id: "silver", title: "Silver", colorValue: "#E5E6E1" },
          { id: "pro", title: "Pro", colorValue: "#5F5E63" },
        ],
      },
    },
    {
      id: "pro-display-xdr",
      title: "Pro Display XDR",
      screenWidth: 3008,
      screenHeight: 1692,
      disableRotation: !0,
      externalClay: {
        width: 3148,
        height: 2325,
        screenOffsetLeft: 70,
        screenOffsetTop: 60,
      },
      realisticImage: {
        width: 6276 / 2,
        height: 4695 / 2,
        screenOffsetLeft: 130 / 2,
        screenOffsetTop: 130 / 2,
      },
    },
    {
      id: "dell-xps",
      title: "Dell XPS",
      screenWidth: 1920,
      screenHeight: 1080,
      disableRotation: !0,
      externalClay: {
        width: 2624,
        height: 1381,
        screenOffsetLeft: 352,
        screenOffsetTop: 57,
      },
      realisticImage: {
        width: 5412 / 2,
        height: 2746 / 2,
        screenOffsetLeft: 786 / 2,
        screenOffsetTop: 108 / 2,
      },
    },
    {
      id: "surface-book",
      title: "Microsoft Surface Book",
      screenWidth: 1500,
      screenHeight: 1e3,
      disableRotation: !0,
      externalClay: {
        width: 2089,
        height: 1234,
        screenOffsetLeft: 296,
        screenOffsetTop: 93,
      },
      realisticImage: {
        width: 4200 / 2,
        height: 2508 / 2,
        screenOffsetLeft: 600 / 2,
        screenOffsetTop: 210 / 2,
      },
    },
    {
      id: "ipad",
      title: "iPad",
      screenRadius: 0,
      screenWidth: 810,
      screenHeight: 1080,
      clayBezelLeft: 30,
      clayBezelRight: 30,
      clayBezelTop: 95,
      clayBezelBottom: 95,
      clayBezelRadius: 0,
      externalClay: {
        width: 966,
        height: 1378,
        screenOffsetLeft: 78,
        screenOffsetTop: 149,
      },
      realisticImage: {
        width: 1920 / 2,
        height: 2720 / 2,
        screenOffsetLeft: 75,
        screenOffsetTop: 140,
        availableColors: [
          { id: "space-grey", title: "Space Grey", colorValue: "#C3C4C8" },
          { id: "silver", title: "Silver", colorValue: "#E1E2E4" },
          { id: "gold", title: "Gold", colorValue: "#EFD8BD" },
        ],
      },
    },
    {
      id: "ipad-mini",
      title: "iPad Mini",
      screenRadius: 0,
      clayBezelLeft: 49,
      clayBezelRight: 49,
      clayBezelTop: 49,
      clayBezelBottom: 49,
      clayBezelRadius: 49,
      screenWidth: 768,
      screenHeight: 1024,
      externalClay: {
        width: 924,
        height: 1384,
        screenOffsetLeft: 78,
        screenOffsetTop: 180,
      },
      realisticImage: {
        width: 1856 / 2,
        height: 2728 / 2,
        screenOffsetLeft: 160 / 2,
        screenOffsetTop: 340 / 2,
        availableColors: [
          { id: "space-grey", title: "Space Grey", colorValue: "#C3C4C8" },
          { id: "silver", title: "Silver", colorValue: "#E1E2E4" },
          { id: "gold", title: "Gold", colorValue: "#EFD8BD" },
        ],
      },
    },
    {
      id: "ipad-air",
      title: "iPad Air",
      screenRadius: 18,
      clayBezelLeft: 49,
      clayBezelRight: 49,
      clayBezelTop: 49,
      clayBezelBottom: 49,
      clayBezelRadius: 49,
      screenWidth: 820,
      screenHeight: 1180,
      externalClay: {
        width: 994,
        height: 1374,
        screenOffsetLeft: 87,
        screenOffsetTop: 97,
      },
      realisticImage: {
        width: 1960 / 2,
        height: 2680 / 2,
        screenOffsetLeft: 160 / 2,
        screenOffsetTop: 160 / 2,
        availableColors: [
          { id: "space-grey", title: "Space Grey", colorValue: "#C3C4C8" },
          { id: "silver", title: "Silver", colorValue: "#E1E2E4" },
          { id: "rose-gold", title: "Rose Gold", colorValue: "#ECCBC4" },
          { id: "blue", title: "Blue", colorValue: "#CBDAE6" },
          { id: "green", title: "Green", colorValue: "#DAF0D9" },
        ],
      },
    },
    {
      id: "ipad-pro-11",
      title: "iPad Pro 11\u2033",
      screenRadius: 17,
      clayBezelLeft: 49,
      clayBezelRight: 49,
      clayBezelTop: 49,
      clayBezelBottom: 49,
      clayBezelRadius: 49,
      screenWidth: 834,
      screenHeight: 1194,
      externalClay: {
        width: 990,
        height: 1370,
        screenOffsetLeft: 78,
        screenOffsetTop: 88,
      },
      realisticImage: {
        width: 1968 / 2,
        height: 2688 / 2,
        screenOffsetLeft: 75,
        screenOffsetTop: 75,
        availableColors: [
          { id: "space-grey", title: "Space Grey", colorValue: "#C3C4C8" },
          { id: "silver", title: "Silver", colorValue: "#E1E2E4" },
        ],
      },
    },
    {
      id: "ipad-pro-12-9",
      title: "iPad Pro 12.9\u2033",
      ...Fn.iPadPro,
      screenRadius: 17,
      screenWidth: 1024,
      screenHeight: 1366,
      externalClay: {
        width: 1180,
        height: 1542,
        screenOffsetLeft: 78,
        screenOffsetTop: 88,
      },
      realisticImage: {
        width: 2348 / 2,
        height: 3032 / 2,
        screenOffsetLeft: 75,
        screenOffsetTop: 75,
        availableColors: [
          { id: "space-grey", title: "Space Grey", colorValue: "#C3C4C8" },
          { id: "silver", title: "Silver", colorValue: "#E1E2E4" },
        ],
      },
    },
    {
      id: "surface-3",
      title: "Microsoft Surface 3",
      screenRadius: 0,
      clayBezelLeft: 49,
      clayBezelRight: 49,
      clayBezelTop: 49,
      clayBezelBottom: 49,
      clayBezelRadius: 49,
      screenWidth: 960,
      screenHeight: 640,
      externalClay: {
        width: 1184,
        height: 864,
        screenOffsetLeft: 112,
        screenOffsetTop: 112,
      },
      realisticImage: {
        width: 2280 / 2,
        height: 1580 / 2,
        screenOffsetLeft: 180 / 2,
        screenOffsetTop: 150 / 2,
      },
    },
    {
      id: "surface-pro-4",
      title: "Microsoft Surface Pro 4",
      screenRadius: 0,
      clayBezelLeft: 49,
      clayBezelRight: 49,
      clayBezelTop: 49,
      clayBezelBottom: 49,
      clayBezelRadius: 49,
      screenWidth: 1368,
      screenHeight: 912,
      externalClay: {
        width: 1592,
        height: 1136,
        screenOffsetLeft: 112,
        screenOffsetTop: 112,
      },
      realisticImage: {
        width: 3176 / 2,
        height: 2224 / 2,
        screenOffsetLeft: 220 / 2,
        screenOffsetTop: 200 / 2,
      },
    },
    {
      id: "apple-watch-44",
      title: "Apple Watch 44mm",
      screenRadius: 33,
      screenWidth: 184,
      screenHeight: 224,
      disableRotation: !0,
      externalClay: {
        width: 298,
        height: 502,
        screenOffsetLeft: 57,
        screenOffsetTop: 129,
      },
      realisticImage: {
        width: 548 / 2,
        height: 908 / 2,
        screenOffsetLeft: 90 / 2,
        screenOffsetTop: 230 / 2,
        availableColors: [
          { id: "black", title: "Black", colorValue: "#2E2C36" },
          { id: "white", title: "White", colorValue: "#F7F3F0" },
          { id: "yellow", title: "Yellow", colorValue: "#FDDC6C" },
          { id: "orange", title: "Orange", colorValue: "#F35C56" },
        ],
      },
    },
    {
      id: "apple-watch-40",
      title: "Apple Watch 40mm",
      screenRadius: 27,
      screenWidth: 162,
      screenHeight: 197,
      disableRotation: !0,
      externalClay: {
        width: 280,
        height: 463,
        screenOffsetLeft: 59,
        screenOffsetTop: 124,
      },
      realisticImage: {
        width: 504 / 2,
        height: 854 / 2,
        screenOffsetLeft: 90 / 2,
        screenOffsetTop: 230 / 2,
        availableColors: [
          { id: "black", title: "Black", colorValue: "#2E2C36" },
          { id: "white", title: "White", colorValue: "#F7F3F0" },
          { id: "yellow", title: "Yellow", colorValue: "#FDDC6C" },
          { id: "orange", title: "Orange", colorValue: "#F35C56" },
        ],
      },
    },
    {
      id: "tv-full-hd",
      title: "Full HD",
      screenRadius: 0,
      screenWidth: 1920,
      screenHeight: 1080,
      externalClay: {
        width: 1968,
        height: 1168,
        screenOffsetLeft: 24,
        screenOffsetTop: 12,
      },
      realisticImage: {
        width: 4040 / 2,
        height: 2360 / 2,
        screenOffsetLeft: 100 / 2,
        screenOffsetTop: 100 / 2,
      },
    },
    {
      id: "tv-4k",
      title: "4K",
      screenRadius: 0,
      screenWidth: 3840,
      screenHeight: 2160,
      externalClay: {
        width: 3908,
        height: 2308,
        screenOffsetLeft: 34,
        screenOffsetTop: 24,
      },
      realisticImage: {
        width: 7960 / 2,
        height: 4600 / 2,
        screenOffsetLeft: 140 / 2,
        screenOffsetTop: 140 / 2,
      },
    },
    {
      id: "720p",
      title: "720p",
      ...Fn.desktop,
      screenWidth: 720,
      screenHeight: 1280,
    },
    {
      id: "900p",
      title: "900p",
      ...Fn.desktop,
      screenWidth: 900,
      screenHeight: 1440,
    },
    {
      id: "1080p",
      title: "1080p",
      ...Fn.desktop,
      screenWidth: 1080,
      screenHeight: 1920,
    },
    {
      id: "1440p",
      title: "1440p",
      ...Fn.desktop,
      screenWidth: 1440,
      screenHeight: 2560,
    },
    {
      id: "4k",
      title: "4K",
      ...Fn.desktop,
      screenWidth: 2160,
      screenHeight: 3840,
    },
  ];
var wH = W_.reduce((e, t) => ((e[t.id] = t), e), {});
var _e = (e) => e;
function j_(e) {
  let t = Object.create(Object.prototype);
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
var U_ =
    /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/,
  X_ = j_(
    (e) =>
      U_.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
  ),
  $S = S.createContext(void 0),
  IH = $S.Provider,
  G_ = () => S.useContext($S) ?? {},
  Y_ = Gt(_p(), 1),
  nn = typeof ft < "u" ? ft : void 0,
  Vn = () => typeof document == "object";
var K_ = () => {
    let e = -1,
      n = nn && /Version\/([\d.]+)/.exec(nn.userAgent);
    return n && n[1] && (e = parseFloat(n[1])), e;
  },
  q_ = () =>
    nn && /Chrome/.test(nn.userAgent) && /Google Inc/.test(nn.vendor) && !Z_(),
  WS = () =>
    nn && /Safari/.test(nn.userAgent) && /Apple Computer/.test(nn.vendor);
var Q_ = () => nn && /FramerX/.test(nn.userAgent),
  Z_ = () => nn && /Edg\//.test(nn.userAgent);
var jS = () => Y_.default.env.NODE_ENV === "test";
var p1 = (e) => () => {
    ta(e);
  },
  J_ = () => () => {},
  eM = {
    useImageSource(e) {
      return e.src ?? "";
    },
    useImageElement(e, t, n) {
      let r = new Image();
      return (
        (r.src = Ye.useImageSource(e, t, n)),
        e.srcSet && (r.srcset = e.srcSet),
        r
      );
    },
    canRenderOptimizedCanvasImage() {
      return !1;
    },
  },
  tM = !1,
  nM = {
    get(e, t, n) {
      return Reflect.has(e, t)
        ? Reflect.get(e, t, n)
        : ["getLogger"].includes(String(t))
        ? J_()
        : p1(
            tM
              ? `${String(t)} is not available in this version of Framer.`
              : `${String(
                  t
                )} is only available inside of Framer. https://www.framer.com/`
          );
    },
  },
  Ye = new Proxy(eM, nM);
function rM(e, t, n = 1) {
  let { width: r, height: i } = t,
    o = e.pixelWidth ?? e.intrinsicWidth ?? 0,
    s = e.pixelHeight ?? e.intrinsicHeight ?? 0;
  if (r < 1 || i < 1 || o < 1 || s < 1) return;
  (r *= n), (i *= n);
  let a = r / i,
    l = o / s;
  switch (e.fit) {
    case "fill":
      return l > a ? s / i : o / r;
    case "fit":
    case "stretch":
      return Math.max(o / r, s / i);
  }
}
function m1(e, t) {
  return t && Math.max(1, e) > t ? "pixelated" : "auto";
}
var v1 = {
    position: "absolute",
    borderRadius: "inherit",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  iM = {
    backgroundSize: "16px 16px",
    backgroundImage:
      "repeating-linear-gradient(45deg, rgba(180, 180, 180, 0.8) 0, rgba(180, 180, 180, 0.8) 1px, rgba(255, 255, 255, 0.2) 0, rgba(255, 255, 255, 0.2) 50%)",
    border: "1px solid #c4c4c4",
  };
function oM(e) {
  switch (e) {
    case "fit":
      return "contain";
    case "stretch":
      return "fill";
    default:
      return "cover";
  }
}
function US(e, t) {
  let n = e ?? "center",
    r = t ?? "center";
  return n === "center" && r === "center" ? "center" : n + " " + r;
}
function sM(e, t) {
  if (!t) return "auto";
  let n = Ee.current() === "CANVAS" ? $t.devicePixelRatio : 1,
    r = rM(e, t, n);
  return Ee.current() === "CANVAS" ? m1(1, r) : m1(Xc.zoom, r);
}
function Bp(e, t) {
  return {
    display: "block",
    width: "100%",
    height: "100%",
    borderRadius: "inherit",
    objectPosition: US(e.positionX, e.positionY),
    objectFit: oM(e.fit),
    imageRendering: sM(e, t),
  };
}
function aM({ image: e, containerSize: t, nodeId: n, alt: r }) {
  let i = Ye.useImageSource(e, t, n),
    o = Bp(e, t),
    [s, a] = S.useState(),
    l = S.useRef(null),
    c = G_();
  return (
    S.useEffect(() => {
      if (!c.imgSizesWorkaroundEnabled) return;
      let u = l.current;
      if (!u || jS() || !e.sizes || !u.closest("[data-framer-name]")) return;
      let d = u.clientWidth,
        h = Number(e.sizes.replace("px", ""));
      (!isNaN(h) && d < h) || a(d + "px");
    }, [e.sizes]),
    T("img", {
      ref: l,
      decoding: "async",
      loading: e.loading,
      sizes: s ?? e.sizes,
      srcSet: e.srcSet,
      src: i,
      alt: r ?? e.alt,
      style: o,
    })
  );
}
function lM({ image: e, containerSize: t, nodeId: n }) {
  let r = S.useRef(null),
    i = Ye.useImageElement(e, t, n),
    o = Bp(e, t);
  return (
    S.useLayoutEffect(() => {
      let s = r.current;
      if (s !== null)
        return (
          s.appendChild(i),
          () => {
            s.removeChild(i);
          }
        );
    }, [i]),
    Object.assign(i.style, o),
    T("div", {
      ref: r,
      style: { display: "contents", borderRadius: "inherit" },
    })
  );
}
function cM({ nodeId: e, image: t, containerSize: n }) {
  let r = S.useRef(null),
    i = Ye.useImageSource(t, n, e);
  return (
    S.useLayoutEffect(() => {
      let o = r.current;
      if (o === null) return;
      let s = Bp(t, n);
      Ye.renderOptimizedCanvasImage(o, i, s, e);
    }, [e, t, i, n]),
    T("div", {
      ref: r,
      style: { display: "contents", borderRadius: "inherit" },
    })
  );
}
function XS({ layoutId: e, image: t, ...n }) {
  e && (e = e + "-background");
  let r = { ...v1, ...iM },
    i = null;
  if (ne(t.src))
    if (t.fit === "tile" && t.pixelWidth && t.pixelHeight) {
      let o = ce(t.backgroundSize) ? t.backgroundSize : 1,
        s = {
          width: Math.round(o * t.pixelWidth),
          height: Math.round(o * t.pixelHeight),
        },
        a = Ye.useImageSource(t, s);
      (r.backgroundImage = `url(${a})`),
        (r.backgroundRepeat = "repeat"),
        (r.backgroundPosition = US(t.positionX, t.positionY)),
        t.pixelWidth &&
          (r.backgroundSize = `${(o * (t.pixelWidth / 2)).toFixed(2)}px auto`),
        (r.border = 0),
        (i = null);
    } else
      Ee.current() !== "CANVAS"
        ? (i = T(aM, { image: t, ...n }))
        : Ye.canRenderOptimizedCanvasImage(Ye.useImageSource(t))
        ? (i = T(cM, { image: t, ...n }))
        : (i = T(lM, { image: t, ...n }));
  return T(_t.div, {
    layoutId: e,
    style: i ? v1 : r,
    "data-framer-background-image-wrapper": !0,
    children: i,
  });
}
var uM = "src",
  ir;
((e) => {
  e.isImageObject = function (t) {
    return !t || typeof t == "string" ? !1 : uM in t;
  };
})(ir || (ir = {}));
function fM(e, t) {
  let { _forwardedOverrideId: n, _forwardedOverrides: r, id: i } = t,
    o = n ?? i,
    s = r && o ? r[o] : void 0;
  return s && typeof s == "string" && (e = { ...e, src: s }), e;
}
function dM(e) {
  let { background: t, image: n } = e;
  if (n !== void 0 && t && !ir.isImageObject(t)) return;
  let r = null;
  if (
    (ne(n) ? (r = { alt: "", src: n }) : (r = Be.get(t, null)),
    !!ir.isImageObject(r))
  )
    return fM(r, e);
}
function hM(e, t, n = !0) {
  let { borderWidth: r, borderStyle: i, borderColor: o } = e;
  if (!r) return;
  let s, a, l, c;
  if (
    (typeof r == "number"
      ? (s = a = l = c = r)
      : ((s = r.top || 0),
        (a = r.bottom || 0),
        (l = r.left || 0),
        (c = r.right || 0)),
    !(s === 0 && a === 0 && l === 0 && c === 0))
  ) {
    if (n && s === a && s === l && s === c) {
      t.border = `${s}px ${i} ${o}`;
      return;
    }
    (t.borderStyle = e.borderStyle),
      (t.borderColor = e.borderColor),
      (t.borderTopWidth = `${s}px`),
      (t.borderBottomWidth = `${a}px`),
      (t.borderLeftWidth = `${l}px`),
      (t.borderRightWidth = `${c}px`);
  }
}
function pM(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth) return null;
  let n = {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: "inherit",
    pointerEvents: "none",
  };
  return e.border
    ? ((n.border = e.border), T(_t.div, { style: n }))
    : (hM(e, n, !1),
      T(_t.div, { "data-frame-border": !0, style: n, layoutId: t }));
}
function au(e) {
  return e && e !== "search" && e !== "slot" && e !== "template"
    ? _t[e]
    : _t.div;
}
var mM = q_();
function GS(e) {
  let t = {};
  return (
    !mM ||
      Ee.current() !== "CANVAS" ||
      ((e === !0 || e === "x") && (t["data-framer-layout-hint-center-x"] = !0),
      (e === !0 || e === "y") && (t["data-framer-layout-hint-center-y"] = !0)),
    t
  );
}
function Hp(e) {
  return e.replace(/^id_/, "").replace(/\\/g, "");
}
function vM(e, t) {
  if (!t && ((t = e.children), !t)) return { props: e, children: t };
  let n = e._forwardedOverrides,
    r = e._overrideForwardingDescription;
  if (r) {
    n = void 0;
    for (let i in r) {
      let o = r[i];
      e[o] !== void 0 &&
        (n || ((n = {}), (e = { ...e })), (n[i] = e[o]), delete e[o]);
    }
  }
  return n
    ? ((t = S.Children.map(t, (i) =>
        S.isValidElement(i) ? S.cloneElement(i, { _forwardedOverrides: n }) : i
      )),
      { props: e, children: t })
    : { props: e, children: t };
}
function lu(e) {
  return (t, n) =>
    e === !0
      ? `translate(-50%, -50%) ${n}`
      : e === "x"
      ? `translateX(-50%) ${n}`
      : e === "y"
      ? `translateY(-50%) ${n}`
      : n || "none";
}
function xa(e, { specificLayoutId: t, postfix: n } = {}) {
  let {
      name: r,
      layoutIdKey: i,
      duplicatedFrom: o,
      __fromCodeComponentNode: s = !1,
      drag: a,
    } = e,
    { getLayoutId: l, enabled: c } = M(ko);
  return ge(() => {
    if (!c) return e.layoutId;
    let u = t || e.layoutId;
    if (!u && (a || !i || s)) return;
    let f = u || l({ id: i, name: r, duplicatedFrom: o });
    if (f) return n ? `${f}-${n}` : f;
  }, [c]);
}
var YS = typeof document < "u" ? Pi : W,
  Po = S.createContext(!1),
  yi = [],
  gM = function () {
    return yi.some(function (e) {
      return e.activeTargets.length > 0;
    });
  },
  yM = function () {
    return yi.some(function (e) {
      return e.skippedTargets.length > 0;
    });
  },
  g1 = "ResizeObserver loop completed with undelivered notifications.",
  bM = function () {
    var e;
    typeof ErrorEvent == "function"
      ? (e = new ErrorEvent("error", { message: g1 }))
      : ((e = document.createEvent("Event")),
        e.initEvent("error", !1, !1),
        (e.message = g1)),
      L.dispatchEvent(e);
  },
  oa;
(function (e) {
  (e.BORDER_BOX = "border-box"),
    (e.CONTENT_BOX = "content-box"),
    (e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box");
})(oa || (oa = {}));
var bi = function (e) {
    return Object.freeze(e);
  },
  xM = (function () {
    function e(t, n) {
      (this.inlineSize = t), (this.blockSize = n), bi(this);
    }
    return e;
  })(),
  KS = (function () {
    function e(t, n, r, i) {
      return (
        (this.x = t),
        (this.y = n),
        (this.width = r),
        (this.height = i),
        (this.top = this.y),
        (this.left = this.x),
        (this.bottom = this.top + this.height),
        (this.right = this.left + this.width),
        bi(this)
      );
    }
    return (
      (e.prototype.toJSON = function () {
        var t = this,
          n = t.x,
          r = t.y,
          i = t.top,
          o = t.right,
          s = t.bottom,
          a = t.left,
          l = t.width,
          c = t.height;
        return {
          x: n,
          y: r,
          top: i,
          right: o,
          bottom: s,
          left: a,
          width: l,
          height: c,
        };
      }),
      (e.fromRect = function (t) {
        return new e(t.x, t.y, t.width, t.height);
      }),
      e
    );
  })(),
  zp = function (e) {
    return e instanceof SVGElement && "getBBox" in e;
  },
  qS = function (e) {
    if (zp(e)) {
      var t = e.getBBox(),
        n = t.width,
        r = t.height;
      return !n && !r;
    }
    var i = e,
      o = i.offsetWidth,
      s = i.offsetHeight;
    return !(o || s || e.getClientRects().length);
  },
  y1 = function (e) {
    var t, n;
    if (e instanceof Element) return !0;
    var r =
      (n = (t = e) === null || t === void 0 ? void 0 : t.ownerDocument) ===
        null || n === void 0
        ? void 0
        : n.defaultView;
    return !!(r && e instanceof r.Element);
  },
  SM = function (e) {
    switch (e.tagName) {
      case "INPUT":
        if (e.type !== "image") break;
      case "VIDEO":
      case "AUDIO":
      case "EMBED":
      case "OBJECT":
      case "CANVAS":
      case "IFRAME":
      case "IMG":
        return !0;
    }
    return !1;
  },
  Zs = typeof L < "u" ? L : {},
  Fc = new WeakMap(),
  b1 = /auto|scroll/,
  wM = /^tb|vertical/,
  CM = /msie|trident/i.test(Zs.navigator && Zs.navigator.userAgent),
  Ln = function (e) {
    return parseFloat(e || "0");
  },
  Co = function (e, t, n) {
    return (
      e === void 0 && (e = 0),
      t === void 0 && (t = 0),
      n === void 0 && (n = !1),
      new xM((n ? t : e) || 0, (n ? e : t) || 0)
    );
  },
  x1 = bi({
    devicePixelContentBoxSize: Co(),
    borderBoxSize: Co(),
    contentBoxSize: Co(),
    contentRect: new KS(0, 0, 0, 0),
  }),
  QS = function (e, t) {
    if ((t === void 0 && (t = !1), Fc.has(e) && !t)) return Fc.get(e);
    if (qS(e)) return Fc.set(e, x1), x1;
    var n = getComputedStyle(e),
      r = zp(e) && e.ownerSVGElement && e.getBBox(),
      i = !CM && n.boxSizing === "border-box",
      o = wM.test(n.writingMode || ""),
      s = !r && b1.test(n.overflowY || ""),
      a = !r && b1.test(n.overflowX || ""),
      l = r ? 0 : Ln(n.paddingTop),
      c = r ? 0 : Ln(n.paddingRight),
      u = r ? 0 : Ln(n.paddingBottom),
      f = r ? 0 : Ln(n.paddingLeft),
      d = r ? 0 : Ln(n.borderTopWidth),
      h = r ? 0 : Ln(n.borderRightWidth),
      g = r ? 0 : Ln(n.borderBottomWidth),
      y = r ? 0 : Ln(n.borderLeftWidth),
      x = f + c,
      p = l + u,
      m = y + h,
      v = d + g,
      b = a ? e.offsetHeight - v - e.clientHeight : 0,
      C = s ? e.offsetWidth - m - e.clientWidth : 0,
      w = i ? x + m : 0,
      k = i ? p + v : 0,
      E = r ? r.width : Ln(n.width) - w - C,
      P = r ? r.height : Ln(n.height) - k - b,
      I = E + x + C + m,
      H = P + p + b + v,
      _ = bi({
        devicePixelContentBoxSize: Co(
          Math.round(E * devicePixelRatio),
          Math.round(P * devicePixelRatio),
          o
        ),
        borderBoxSize: Co(I, H, o),
        contentBoxSize: Co(E, P, o),
        contentRect: new KS(f, l, E, P),
      });
    return Fc.set(e, _), _;
  },
  ZS = function (e, t, n) {
    var r = QS(e, n),
      i = r.borderBoxSize,
      o = r.contentBoxSize,
      s = r.devicePixelContentBoxSize;
    switch (t) {
      case oa.DEVICE_PIXEL_CONTENT_BOX:
        return s;
      case oa.BORDER_BOX:
        return i;
      default:
        return o;
    }
  },
  kM = (function () {
    function e(t) {
      var n = QS(t);
      (this.target = t),
        (this.contentRect = n.contentRect),
        (this.borderBoxSize = bi([n.borderBoxSize])),
        (this.contentBoxSize = bi([n.contentBoxSize])),
        (this.devicePixelContentBoxSize = bi([n.devicePixelContentBoxSize]));
    }
    return e;
  })(),
  JS = function (e) {
    if (qS(e)) return 1 / 0;
    for (var t = 0, n = e.parentNode; n; ) (t += 1), (n = n.parentNode);
    return t;
  },
  TM = function () {
    var e = 1 / 0,
      t = [];
    yi.forEach(function (s) {
      if (s.activeTargets.length !== 0) {
        var a = [];
        s.activeTargets.forEach(function (c) {
          var u = new kM(c.target),
            f = JS(c.target);
          a.push(u),
            (c.lastReportedSize = ZS(c.target, c.observedBox)),
            f < e && (e = f);
        }),
          t.push(function () {
            s.callback.call(s.observer, a, s.observer);
          }),
          s.activeTargets.splice(0, s.activeTargets.length);
      }
    });
    for (var n = 0, r = t; n < r.length; n++) {
      var i = r[n];
      i();
    }
    return e;
  },
  S1 = function (e) {
    yi.forEach(function (n) {
      n.activeTargets.splice(0, n.activeTargets.length),
        n.skippedTargets.splice(0, n.skippedTargets.length),
        n.observationTargets.forEach(function (i) {
          i.isActive() &&
            (JS(i.target) > e
              ? n.activeTargets.push(i)
              : n.skippedTargets.push(i));
        });
    });
  },
  EM = function () {
    var e = 0;
    for (S1(e); gM(); ) (e = TM()), S1(e);
    return yM() && bM(), e > 0;
  },
  rp,
  ew = [],
  RM = function () {
    return ew.splice(0).forEach(function (e) {
      return e();
    });
  },
  PM = function (e) {
    if (!rp) {
      var t = 0,
        n = document.createTextNode(""),
        r = { characterData: !0 };
      new MutationObserver(function () {
        return RM();
      }).observe(n, r),
        (rp = function () {
          n.textContent = "" + (t ? t-- : t++);
        });
    }
    ew.push(e), rp();
  },
  IM = function (e) {
    PM(function () {
      requestAnimationFrame(e);
    });
  },
  Hc = 0,
  FM = function () {
    return !!Hc;
  },
  LM = 250,
  _M = { attributes: !0, characterData: !0, childList: !0, subtree: !0 },
  w1 = [
    "resize",
    "load",
    "transitionend",
    "animationend",
    "animationstart",
    "animationiteration",
    "keyup",
    "keydown",
    "mouseup",
    "mousedown",
    "mouseover",
    "mouseout",
    "blur",
    "focus",
  ],
  C1 = function (e) {
    return e === void 0 && (e = 0), Date.now() + e;
  },
  ip = !1,
  MM = (function () {
    function e() {
      var t = this;
      (this.stopped = !0),
        (this.listener = function () {
          return t.schedule();
        });
    }
    return (
      (e.prototype.run = function (t) {
        var n = this;
        if ((t === void 0 && (t = LM), !ip)) {
          ip = !0;
          var r = C1(t);
          IM(function () {
            var i = !1;
            try {
              i = EM();
            } finally {
              if (((ip = !1), (t = r - C1()), !FM())) return;
              i ? n.run(1e3) : t > 0 ? n.run(t) : n.start();
            }
          });
        }
      }),
      (e.prototype.schedule = function () {
        this.stop(), this.run();
      }),
      (e.prototype.observe = function () {
        var t = this,
          n = function () {
            return t.observer && t.observer.observe(document.body, _M);
          };
        document.body ? n() : Zs.addEventListener("DOMContentLoaded", n);
      }),
      (e.prototype.start = function () {
        var t = this;
        this.stopped &&
          ((this.stopped = !1),
          (this.observer = new MutationObserver(this.listener)),
          this.observe(),
          w1.forEach(function (n) {
            return Zs.addEventListener(n, t.listener, !0);
          }));
      }),
      (e.prototype.stop = function () {
        var t = this;
        this.stopped ||
          (this.observer && this.observer.disconnect(),
          w1.forEach(function (n) {
            return Zs.removeEventListener(n, t.listener, !0);
          }),
          (this.stopped = !0));
      }),
      e
    );
  })(),
  Cp = new MM(),
  k1 = function (e) {
    !Hc && e > 0 && Cp.start(), (Hc += e), !Hc && Cp.stop();
  },
  OM = function (e) {
    return !zp(e) && !SM(e) && getComputedStyle(e).display === "inline";
  },
  AM = (function () {
    function e(t, n) {
      (this.target = t),
        (this.observedBox = n || oa.CONTENT_BOX),
        (this.lastReportedSize = { inlineSize: 0, blockSize: 0 });
    }
    return (
      (e.prototype.isActive = function () {
        var t = ZS(this.target, this.observedBox, !0);
        return (
          OM(this.target) && (this.lastReportedSize = t),
          this.lastReportedSize.inlineSize !== t.inlineSize ||
            this.lastReportedSize.blockSize !== t.blockSize
        );
      }),
      e
    );
  })(),
  DM = (function () {
    function e(t, n) {
      (this.activeTargets = []),
        (this.skippedTargets = []),
        (this.observationTargets = []),
        (this.observer = t),
        (this.callback = n);
    }
    return e;
  })(),
  Lc = new WeakMap(),
  T1 = function (e, t) {
    for (var n = 0; n < e.length; n += 1) if (e[n].target === t) return n;
    return -1;
  },
  _c = (function () {
    function e() {}
    return (
      (e.connect = function (t, n) {
        var r = new DM(t, n);
        Lc.set(t, r);
      }),
      (e.observe = function (t, n, r) {
        var i = Lc.get(t),
          o = i.observationTargets.length === 0;
        T1(i.observationTargets, n) < 0 &&
          (o && yi.push(i),
          i.observationTargets.push(new AM(n, r && r.box)),
          k1(1),
          Cp.schedule());
      }),
      (e.unobserve = function (t, n) {
        var r = Lc.get(t),
          i = T1(r.observationTargets, n),
          o = r.observationTargets.length === 1;
        i >= 0 &&
          (o && yi.splice(yi.indexOf(r), 1),
          r.observationTargets.splice(i, 1),
          k1(-1));
      }),
      (e.disconnect = function (t) {
        var n = this,
          r = Lc.get(t);
        r.observationTargets.slice().forEach(function (i) {
          return n.unobserve(t, i.target);
        }),
          r.activeTargets.splice(0, r.activeTargets.length);
      }),
      e
    );
  })(),
  VM = (function () {
    function e(t) {
      if (arguments.length === 0)
        throw new TypeError(
          "Failed to construct 'ResizeObserver': 1 argument required, but only 0 present."
        );
      if (typeof t != "function")
        throw new TypeError(
          "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function."
        );
      _c.connect(this, t);
    }
    return (
      (e.prototype.observe = function (t, n) {
        if (arguments.length === 0)
          throw new TypeError(
            "Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present."
          );
        if (!y1(t))
          throw new TypeError(
            "Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element"
          );
        _c.observe(this, t, n);
      }),
      (e.prototype.unobserve = function (t) {
        if (arguments.length === 0)
          throw new TypeError(
            "Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present."
          );
        if (!y1(t))
          throw new TypeError(
            "Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element"
          );
        _c.unobserve(this, t);
      }),
      (e.prototype.disconnect = function () {
        _c.disconnect(this);
      }),
      (e.toString = function () {
        return "function ResizeObserver () { [polyfill code] }";
      }),
      e
    );
  })();
function cu() {
  let [e, t] = S.useState(0);
  return S.useCallback(() => t((n) => n + 1), []);
}
var Ys,
  Ks,
  BM = class {
    constructor() {
      Xo(this, Ys, void 0), Xo(this, Ks, new WeakMap());
      let e = $t.ResizeObserver ?? VM;
      Ku(this, Ys, new e(this.updateResizedElements.bind(this)));
    }
    updateResizedElements(e) {
      for (let t of e) {
        let n = Ct(this, Ks).get(t.target);
        n && n(t.contentRect);
      }
    }
    observeElementWithCallback(e, t) {
      Ct(this, Ys).observe(e), Ct(this, Ks).set(e, t);
    }
    unobserve(e) {
      Ct(this, Ys).unobserve(e), Ct(this, Ks).delete(e);
    }
  };
Ys = new WeakMap();
Ks = new WeakMap();
var Mc = Vn() ? new BM() : void 0;
function HM(e) {
  let t = cu();
  W(() => {
    let n = e?.current;
    if (n)
      return (
        Mc?.observeElementWithCallback(e.current, t),
        () => {
          Mc?.unobserve(n);
        }
      );
  }, [e, t]);
}
var zM = "data-framer-size-compatibility-wrapper";
function NM(e) {
  return [
    ...(e.firstElementChild && e.firstElementChild.hasAttribute(zM)
      ? e.firstElementChild.children
      : e.children),
  ]
    .filter(tw)
    .map(nw);
}
function tw(e) {
  return e instanceof HTMLBaseElement ||
    e instanceof HTMLHeadElement ||
    e instanceof HTMLLinkElement ||
    e instanceof HTMLMetaElement ||
    e instanceof HTMLScriptElement ||
    e instanceof HTMLStyleElement ||
    e instanceof HTMLTitleElement
    ? !1
    : e instanceof HTMLElement || e instanceof SVGElement;
}
function nw(e) {
  if (
    !(e instanceof HTMLElement) ||
    e.children.length === 0 ||
    e.style.display !== "contents"
  )
    return e;
  let t = [...e.children].find(tw);
  return t ? nw(t) : e;
}
function uu(e, t, n = () => [], r = {}) {
  let { id: i, visible: o, _needsMeasure: s } = e,
    { skipHook: a = !1 } = r,
    l = !!M(Po),
    c = Ee.current() === "CANVAS";
  YS(() => {
    !c ||
      l ||
      a ||
      (t.current &&
        i &&
        o &&
        s &&
        Ye.queueMeasureRequest(Hp(i), t.current, n(t.current)));
  });
}
function $M(e) {
  let t = e.closest("[data-framer-component-container]");
  t && Ye.queueMeasureRequest(Hp(t.id), t, NM(t));
}
var Ci = Object.keys;
function sa(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function E1(e) {
  return sa(e, "equals") ? typeof e.equals == "function" : !1;
}
function Np(e, t) {
  return e === t ? !0 : e !== e && t !== t;
}
function WM(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0; ) if (!Np(e[r], t[r])) return !1;
  return !0;
}
function jM(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0; ) if (!fu(e[r], t[r], !0)) return !1;
  return !0;
}
function UM(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!Np(r, t.get(n))) return !1;
  return !0;
}
function XM(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!fu(r, t.get(n), !0)) return !1;
  return !0;
}
function GM(e, t) {
  if (e.size !== t.size) return !1;
  for (let n of e.keys()) if (!t.has(n)) return !1;
  return !0;
}
function YM(e, t) {
  let n = Ci(e);
  if (n.length !== Ci(t).length) return !1;
  for (let r of n) {
    if (!sa(t, r)) return !1;
    if (!(r === "_owner" && sa(e, "$$typeof") && e.$$typeof) && !Np(e[r], t[r]))
      return !1;
  }
  return !0;
}
function KM(e, t) {
  let n = Ci(e);
  if (n.length !== Ci(t).length) return !1;
  for (let r of n) {
    if (!sa(t, r)) return !1;
    if (
      !(r === "_owner" && sa(e, "$$typeof") && e.$$typeof) &&
      !fu(e[r], t[r], !0)
    )
      return !1;
  }
  return !0;
}
function fu(e, t, n) {
  if (e === t) return !0;
  if (!e || !t) return e !== e && t !== t;
  let r = typeof e;
  if (r !== typeof t || r !== "object") return !1;
  let o = Array.isArray(e),
    s = Array.isArray(t);
  if (o && s) return n ? jM(e, t) : WM(e, t);
  if (o !== s) return !1;
  let a = e instanceof Map,
    l = t instanceof Map;
  if (a && l) return n ? XM(e, t) : UM(e, t);
  if (a !== l) return !1;
  let c = e instanceof Set,
    u = t instanceof Set;
  if (c && u) return GM(e, t);
  if (c !== u) return !1;
  let f = e instanceof Date,
    d = t instanceof Date;
  if (f && d) return e.getTime() === t.getTime();
  if (f !== d) return !1;
  let h = e instanceof RegExp,
    g = t instanceof RegExp;
  return h && g
    ? e.toString() === t.toString()
    : h !== g
    ? !1
    : E1(e) && E1(t)
    ? e.equals(t)
    : n
    ? KM(e, t)
    : YM(e, t);
}
function Me(e, t, n = !0) {
  try {
    return fu(e, t, n);
  } catch (r) {
    if (r instanceof Error && /stack|recursion/iu.exec(r.message))
      return (
        console.warn(
          "Warning: isEqual does not handle circular references.",
          r.name,
          r.message
        ),
        !1
      );
    throw r;
  }
}
var rw = "0.000001px",
  op = ` translateZ(${rw})`,
  iw = Q_() || WS() || jS();
function qM(e) {
  e.willChange = "transform";
  let t = Ee.current() === "CANVAS";
  iw && t && (e.translateZ = rw);
}
function $p(e) {
  (e.willChange = "transform"), QM(e, !0);
}
function QM(e, t) {
  let n = Ee.current() === "CANVAS";
  if (!iw || !n) return;
  let r = e.transform || "";
  t
    ? r.includes(op) || (e.transform = r + op)
    : (e.transform = r.replace(op, ""));
}
function ow(e, t, n, r = !0) {
  if (!e) return;
  let i = _e(e.style),
    o = n || i[t],
    s = () => {
      i[t] = o;
    };
  (i[t] = null), r ? Promise.resolve().then(s) : setTimeout(s, 0);
}
var Js = class extends Re {
  constructor() {
    super(...arguments),
      R(this, "layerElement", null),
      R(this, "setLayerElement", (e) => {
        this.layerElement = e;
      });
  }
  static applyWillChange(e, t, n) {
    e.willChangeTransform && (n ? qM(t) : $p(t));
  }
  shouldComponentUpdate(e, t) {
    return e._needsMeasure || this.state !== t || !Me(this.props, e);
  }
  componentDidUpdate(e) {
    _e(this.props).clip &&
      _e(this.props).radius === 0 &&
      _e(e).radius !== 0 &&
      ow(this.layerElement, "overflow", "hidden", !1);
  }
};
R(Js, "defaultProps", {});
function ZM(e, t) {
  if (e.size < t) return;
  let r = Math.round(Math.random());
  for (let i of e.keys()) (++r & 1) !== 1 && e.delete(i);
}
function JM(e, t, n, r) {
  let i = t.get(n);
  if (i) return i;
  ZM(t, e);
  let o = r(n);
  return t.set(n, o), o;
}
var sw = (e) => {
    let t = 0,
      n,
      r;
    if (e.length === 0) return t;
    for (n = 0; n < e.length; n++)
      (r = e.charCodeAt(n)), (t = (t << 5) - t + r), (t |= 0);
    return t;
  },
  Wp = {
    hueRotate: (e, t) => B.toHslString(B.hueRotate(B(e), t)),
    setAlpha: (e, t) => B.toRgbString(B.alpha(B(e), t)),
    getAlpha: (e) => {
      let t = Dp(e);
      return t ? t.a : 1;
    },
    multiplyAlpha: (e, t) => B.toRgbString(B.multiplyAlpha(B(e), t)),
    toHex: (e) => B.toHexString(B(e)).toUpperCase(),
    toRgb: (e) => B.toRgb(B(e)),
    toRgbString: (e) => B.toRgbString(B(e)),
    toHSV: (e) => B.toHsv(B(e)),
    toHSL: (e) => B.toHsl(B(e)),
    toHslString: (e) => B.toHslString(B(e)),
    toHsvString: (e) => B.toHsvString(B(e)),
    hsvToHSLString: (e) => B.toHslString(B(Pc(e.h, e.s, e.v, e.a))),
    hsvToHex: (e) => B.toHexString(B(Pc(e.h, e.s, e.v, e.a))).toUpperCase(),
    hsvToRgbString: (e) => B.toRgbString(B(Pc(e.h, e.s, e.v, e.a))),
    hsvToString: (e) => Pc(e.h, e.s, e.v),
    rgbaToString: (e) => B.toRgbString(B(e)),
    rgbToHexString: (e) => B.toHexString(B(e)),
    hslToString: (e) => B.toHslString(B(e)),
    hslToRgbString: (e) => B.toRgbString(B(e)),
    toColorPickerSquare: (e) => B.toRgbString(B({ h: e, s: 1, l: 0.5, a: 1 })),
    isValid: (e) => B(e).isValid !== !1,
    equals: (e, t) => (
      typeof e == "string" && (e = B(e)),
      typeof t == "string" && (t = B(t)),
      B.equal(e, t)
    ),
    toHexOrRgbaString: (e) => {
      let t = B(e);
      return t.a !== 1 ? B.toRgbString(t) : B.toHexString(t);
    },
  },
  eO = /var\(.+\)/,
  tO = new Map();
function nO(e, t) {
  let n = [e, t];
  return eO.test(e) ? e : JM(1e3, tO, n, () => Wp.multiplyAlpha(e, t));
}
function Sa(e, t = 1) {
  let n;
  return (
    "stops" in e
      ? (n = e.stops)
      : (n = [
          { value: e.start, position: 0 },
          { value: e.end, position: 1 },
        ]),
    t === 1 ? n : n.map((r) => ({ ...r, value: nO(r.value, t) }))
  );
}
function aw(e, t) {
  let n = 0;
  return (
    Sa(e, t).forEach((r) => {
      n ^= sw(r.value) ^ r.position;
    }),
    n
  );
}
var rO = ["stops"];
function lw(e) {
  return e && rO.every((t) => t in e);
}
var iO = ["start", "end"];
function cw(e) {
  return e && iO.every((t) => t in e);
}
var oO = ["angle", "alpha"],
  aa = {
    isLinearGradient: (e) => e && oO.every((t) => t in e) && (cw(e) || lw(e)),
    hash: (e) => e.angle ^ aw(e, e.alpha),
    toCSS: (e, t) => {
      let n = Sa(e, e.alpha),
        r = t !== void 0 ? t : e.angle,
        i = n.map((o) => `${o.value} ${o.position * 100}%`);
      return `linear-gradient(${r}deg, ${i.join(", ")})`;
    },
  },
  sO = [
    "widthFactor",
    "heightFactor",
    "centerAnchorX",
    "centerAnchorY",
    "alpha",
  ],
  la = {
    isRadialGradient: (e) => e && sO.every((t) => t in e) && (cw(e) || lw(e)),
    hash: (e) =>
      e.centerAnchorX ^
      e.centerAnchorY ^
      e.widthFactor ^
      e.heightFactor ^
      aw(e, e.alpha),
    toCSS: (e) => {
      let {
          alpha: t,
          widthFactor: n,
          heightFactor: r,
          centerAnchorX: i,
          centerAnchorY: o,
        } = e,
        a = Sa(e, t).map((l) => `${l.value} ${l.position * 100}%`);
      return `radial-gradient(${n * 100}% ${r * 100}% at ${i * 100}% ${
        o * 100
      }%, ${a.join(", ")})`;
    },
  };
function aO({ background: e, backgroundColor: t }, n) {
  t
    ? typeof t == "string" || l1(t)
      ? (n.backgroundColor = t)
      : B.isColorObject(e) &&
        (n.backgroundColor = e.initialValue || B.toRgbString(e))
    : e &&
      ((e = Be.get(e, null)),
      typeof e == "string" || l1(e)
        ? (n.background = e)
        : aa.isLinearGradient(e)
        ? (n.background = aa.toCSS(e))
        : la.isRadialGradient(e)
        ? (n.background = la.toCSS(e))
        : B.isColorObject(e) &&
          (n.backgroundColor = e.initialValue || B.toRgbString(e)));
}
function oe(e, t, n, r) {
  if ((r === void 0 && (r = t), e[t] !== void 0)) {
    n[r] = e[t];
    return;
  }
}
function lO(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : !1;
}
function cO(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : !1;
}
function uO(e) {
  if (!e) return {};
  let t = {};
  return (
    e.preserve3d === !0
      ? (t.transformStyle = "preserve-3d")
      : e.preserve3d === !1 && (t.transformStyle = "flat"),
    e.backfaceVisible === !0
      ? (t.backfaceVisibility = "visible")
      : e.backfaceVisible === !1 && (t.backfaceVisibility = "hidden"),
    t.backfaceVisibility && (t.WebkitBackfaceVisibility = t.backfaceVisibility),
    e.perspective !== void 0 &&
      (t.perspective = t.WebkitPerspective = e.perspective),
    e.__fromCanvasComponent ||
      (e.center === !0
        ? ((t.left = "50%"), (t.top = "50%"))
        : e.center === "x"
        ? (t.left = "50%")
        : e.center === "y" && (t.top = "50%")),
    oe(e, "size", t),
    oe(e, "width", t),
    oe(e, "height", t),
    oe(e, "minWidth", t),
    oe(e, "minHeight", t),
    oe(e, "top", t),
    oe(e, "right", t),
    oe(e, "bottom", t),
    oe(e, "left", t),
    oe(e, "position", t),
    oe(e, "overflow", t),
    oe(e, "opacity", t),
    (!e._border || !e._border.borderWidth) && oe(e, "border", t),
    oe(e, "borderRadius", t),
    oe(e, "radius", t, "borderRadius"),
    oe(e, "color", t),
    oe(e, "shadow", t, "boxShadow"),
    oe(e, "x", t),
    oe(e, "y", t),
    oe(e, "z", t),
    oe(e, "rotate", t),
    oe(e, "rotateX", t),
    oe(e, "rotateY", t),
    oe(e, "rotateZ", t),
    oe(e, "scale", t),
    oe(e, "scaleX", t),
    oe(e, "scaleY", t),
    oe(e, "skew", t),
    oe(e, "skewX", t),
    oe(e, "skewY", t),
    oe(e, "originX", t),
    oe(e, "originY", t),
    oe(e, "originZ", t),
    aO(e, t),
    t
  );
}
function fO(e) {
  for (let t in e)
    if (
      t === "drag" ||
      t.startsWith("while") ||
      (typeof _e(e)[t] == "function" &&
        t.startsWith("on") &&
        !t.includes("Animation"))
    )
      return !0;
  return !1;
}
var R1 = [
    "onClick",
    "onDoubleClick",
    "onMouse",
    "onMouseDown",
    "onMouseUp",
    "onTapDown",
    "onTap",
    "onTapUp",
    "onPointer",
    "onPointerDown",
    "onPointerUp",
    "onTouch",
    "onTouchDown",
    "onTouchUp",
  ],
  dO = new Set([...R1, ...R1.map((e) => `${e}Capture`)]);
function hO(e) {
  if (e.drag) return "grab";
  for (let t in e) if (dO.has(t)) return "pointer";
}
var sp = "overflow";
function pO(e) {
  return P1(e) ? !0 : e.style ? !!P1(e.style) : !1;
}
function P1(e) {
  return sp in e && (e[sp] === "scroll" || e[sp] === "auto");
}
function uw(e) {
  let {
      left: t,
      top: n,
      bottom: r,
      right: i,
      width: o,
      height: s,
      center: a,
      _constraints: l,
      size: c,
      widthType: u,
      heightType: f,
      positionFixed: d,
      positionAbsolute: h,
    } = e,
    g = et(e.minWidth),
    y = et(e.minHeight),
    x = et(e.maxWidth),
    p = et(e.maxHeight);
  return {
    top: et(n),
    left: et(t),
    bottom: et(r),
    right: et(i),
    width: et(o),
    height: et(s),
    size: et(c),
    center: a,
    _constraints: l,
    widthType: u,
    heightType: f,
    positionFixed: d,
    positionAbsolute: h,
    minWidth: g,
    minHeight: y,
    maxWidth: x,
    maxHeight: p,
  };
}
var I1 = { x: 0, y: 0, width: 200, height: 200 };
function mO(e) {
  S.useInsertionEffect(() => {
    ba();
  }, []);
  let t = !!M(Po),
    { style: n, _initialStyle: r, __fromCanvasComponent: i, size: o } = e,
    s = uw(e),
    a = HL(s),
    l = {
      display: "block",
      flex: n?.flex ?? "0 0 auto",
      userSelect: Ee.current() !== "PREVIEW" ? "none" : void 0,
    };
  e.__fromCanvasComponent ||
    (l.backgroundColor =
      e.background === void 0 ? "rgba(0, 170, 255, 0.3)" : void 0);
  let c = !fO(e) && !e.__fromCanvasComponent && !pO(e),
    u = e.style ? !("pointerEvents" in e.style) : !0;
  c && u && (l.pointerEvents = "none");
  let d = S.Children.count(e.children) > 0 &&
      S.Children.toArray(e.children).every(
        (p) => typeof p == "string" || typeof p == "number"
      ) && {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      },
    h = uO(e);
  o === void 0 &&
    !i &&
    (lO(h) || (l.width = I1.width), cO(h) || (l.height = I1.height)),
    s.minWidth !== void 0 && (l.minWidth = s.minWidth),
    s.minHeight !== void 0 && (l.minHeight = s.minHeight);
  let g = {};
  ga(s) &&
    a &&
    !fw(e) &&
    (g = {
      left: a.x,
      top: a.y,
      width: a.width,
      height: a.height,
      right: void 0,
      bottom: void 0,
    }),
    Object.assign(l, d, r, h, g, n),
    Object.assign(l, {
      overflowX: l.overflowX ?? l.overflow,
      overflowY: l.overflowY ?? l.overflow,
      overflow: void 0,
    }),
    Js.applyWillChange(e, l, !0);
  let y = l;
  l.transform || (y = { x: 0, y: 0, ...l });
  let x = Ee.current() === "CANVAS";
  return (
    e.positionSticky
      ? (!x || t) &&
        ((y.position = "sticky"),
        (y.willChange = "transform"),
        (y.zIndex = 1),
        (y.top = e.positionStickyTop),
        (y.right = e.positionStickyRight),
        (y.bottom = e.positionStickyBottom),
        (y.left = e.positionStickyLeft))
      : x &&
        (e.positionFixed || e.positionAbsolute) &&
        (y.position = "absolute"),
    "rotate" in y && y.rotate === void 0 && delete y.rotate,
    [y, a]
  );
}
var vO = new Set([
  "width",
  "height",
  "opacity",
  "overflow",
  "radius",
  "background",
  "color",
  "x",
  "y",
  "z",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "scale",
  "scaleX",
  "scaleY",
  "skew",
  "skewX",
  "skewY",
  "originX",
  "originY",
  "originZ",
]);
function gO(e) {
  let t = {};
  for (let n in e)
    (Mi(n) || X_(n)) && !vO.has(n)
      ? (t[n] = _e(e)[n])
      : (n === "positionTransition" || n === "layoutTransition") &&
        ((t.layout = !0),
        typeof _e(e)[n] != "boolean" &&
          !e.transition &&
          (t.transition = _e(e)[n]));
  return t;
}
function yO(e) {
  return "data-framer-name" in e;
}
var bO = We(function (t, n) {
    let { name: r, center: i, border: o, _border: s, __portal: a } = t,
      { props: l, children: c } = vM(t),
      u = gO(l),
      f = xa(t),
      d = hO(t),
      h = A(null),
      g = n ?? h,
      y = {
        "data-framer-component-type": "Frame",
        "data-framer-cursor": d,
        "data-framer-highlight": d === "pointer" ? !0 : void 0,
        "data-layoutid": f,
        "data-framer-offset-parent-id": _e(t)["data-framer-offset-parent-id"],
      };
    !yO(t) && r && (_e(y)["data-framer-name"] = r);
    let [x, p] = mO(l),
      m = uw(l),
      v = fw(m);
    i && !(p && !v && ga(m))
      ? (u.transformTemplate || (u.transformTemplate = lu(i)),
        Object.assign(y, GS(i)))
      : u.transformTemplate || (u.transformTemplate = void 0),
      uu(t, g);
    let b = dM(t),
      C = !!M(Po),
      w = xO(l, m, p, C),
      k = BL(
        se(ze, {
          children: [
            b
              ? T(XS, {
                  alt: t.alt ?? "",
                  image: b,
                  containerSize: p ?? void 0,
                  nodeId: t.id && Hp(t.id),
                  layoutId: f,
                })
              : null,
            c,
            T(pM, { ...s, border: o, layoutId: f }),
          ],
        }),
        w
      ),
      E = au(t.as),
      { size: P, radius: I, shadow: H } = x;
    return (
      P !== void 0 &&
        (delete x.size,
        x.height === void 0 && (x.height = P),
        x.width === void 0 && (x.width = P)),
      I !== void 0 && (delete x.radius, (x.borderRadius = I)),
      H !== void 0 && (delete x.shadow, (x.boxShadow = H)),
      se(E, { ...y, ...u, layoutId: f, style: x, ref: g, children: [k, a] })
    );
  }),
  zc = We(function (t, n) {
    let { visible: r = !0 } = t;
    return r ? T(bO, { ...t, ref: n }) : null;
  });
function xO(e, t, n, r) {
  if (r) return n ? { width: n.width, height: n.height } : 1;
  let { _usesDOMRect: i } = e,
    { widthType: o = 0, heightType: s = 0, width: a, height: l } = t;
  return n && !i
    ? n
    : o === 0 && s === 0 && typeof a == "number" && typeof l == "number"
    ? { width: a, height: l }
    : i || e.positionFixed || e.positionAbsolute
    ? 2
    : 0;
}
function fw({ width: e, height: t }) {
  return (
    e === "auto" || e === "min-content" || t === "auto" || t === "min-content"
  );
}
var jp = "__LAYOUT_TREE_ROOT",
  dw = S.createContext({
    schedulePromoteTree: () => {},
    scheduleProjectionDidUpdate: () => {},
    initLead: () => {},
  }),
  SO = class extends Re {
    constructor() {
      super(...arguments),
        R(this, "shouldAnimate", !1),
        R(this, "transition"),
        R(this, "lead"),
        R(this, "follow"),
        R(this, "scheduledPromotion", !1),
        R(this, "scheduledDidUpdate", !1),
        R(this, "scheduleProjectionDidUpdate", () => {
          this.scheduledDidUpdate = !0;
        }),
        R(this, "schedulePromoteTree", (e, t, n) => {
          (this.follow = this.lead),
            (this.shouldAnimate = n),
            (this.lead = e),
            (this.transition = t),
            (this.scheduledPromotion = !0);
        }),
        R(this, "initLead", (e, t) => {
          (this.follow = this.lead),
            (this.lead = e),
            this.follow && t && (this.follow.layoutMaybeMutated = !0);
        }),
        R(this, "sharedLayoutContext", {
          schedulePromoteTree: this.schedulePromoteTree,
          scheduleProjectionDidUpdate: this.scheduleProjectionDidUpdate,
          initLead: this.initLead,
        });
    }
    getSnapshotBeforeUpdate() {
      var e;
      if (!this.scheduledPromotion || !this.lead || !this.follow) return null;
      let t =
        !!((e = this.lead) != null && e.layoutMaybeMutated) &&
        !this.shouldAnimate;
      return (
        this.lead.projectionNodes.forEach((n) => {
          var r;
          n?.promote({
            needsReset: t,
            transition: this.shouldAnimate ? this.transition : void 0,
            preserveFollowOpacity:
              n.options.layoutId === jp &&
              !((r = this.follow) != null && r.isExiting),
          });
        }),
        this.shouldAnimate
          ? (this.follow.layoutMaybeMutated = !0)
          : this.scheduleProjectionDidUpdate(),
        (this.lead.layoutMaybeMutated = !1),
        (this.transition = void 0),
        (this.scheduledPromotion = !1),
        null
      );
    }
    componentDidUpdate() {
      var e, t;
      if (!this.lead) return null;
      this.scheduledDidUpdate &&
        ((t = (e = this.lead.rootProjectionNode) == null ? void 0 : e.root) ==
          null || t.didUpdate(),
        (this.scheduledDidUpdate = !1));
    }
    render() {
      return T(dw.Provider, {
        value: this.sharedLayoutContext,
        children: this.props.children,
      });
    }
  },
  wO = { width: "100%", height: "100%", backgroundColor: "none" };
function CO(e) {
  return T(_t.div, { layoutId: jp, style: wO, children: e.children });
}
var Vr,
  qs,
  kO = class {
    constructor(e) {
      Xo(this, Vr, void 0),
        Xo(this, qs, new WeakMap()),
        document &&
          Ku(
            this,
            Vr,
            new IntersectionObserver(this.resizeObserverCallback.bind(this), e)
          );
    }
    resizeObserverCallback(e, t) {
      for (let n of e) {
        let r = Ct(this, qs).get(n.target);
        r && r([n], t);
      }
    }
    observeElementWithCallback(e, t) {
      Ct(this, Vr) && (Ct(this, Vr).observe(e), Ct(this, qs).set(e, t));
    }
    unobserve(e) {
      Ct(this, Vr) && (Ct(this, Vr).unobserve(e), Ct(this, qs).delete(e));
    }
    get root() {
      var e;
      return (e = Ct(this, Vr)) == null ? void 0 : e.root;
    }
  };
Vr = new WeakMap();
qs = new WeakMap();
var TO = S.createContext(new Map());
function EO(e, t, n) {
  if (typeof IntersectionObserver > "u") return;
  let r = on(() => `${n.rootMargin}`),
    i = S.useContext(TO),
    { enabled: o } = n;
  S.useEffect(() => {
    var s;
    let a = e.current;
    if (!o || !a) return;
    let l = i.get(r);
    if (!l || l.root !== ((s = n.root) == null ? void 0 : s.current)) {
      let { root: c, ...u } = n;
      (l = new kO({ ...u, root: c?.current })), i.set(r, l);
    }
    return l.observeElementWithCallback(a, t), () => l?.unobserve(a);
  }, [o]);
}
var RO = new Array(100).fill(void 0).map((e, t) => t * 0.01),
  PO = S.createContext(null);
function hw(e, t, n) {
  let r = S.useRef({ isInView: !1, hasAnimatedOnce: !1 }),
    {
      enabled: i,
      animateOnce: o,
      threshold: s,
      rootMargin: a = "0px 0px 0px 0px",
    } = n,
    l = S.useCallback(
      ([c]) => {
        if (!c) return;
        let { isInView: u, hasAnimatedOnce: f } = r.current,
          d = FO(c, s?.y ?? 0);
        if (d && !u) {
          if (o && f) return;
          (r.current.hasAnimatedOnce = !0), (r.current.isInView = !0), t(!0);
          return;
        }
        if (!d && u) {
          if (((r.current.isInView = !1), o)) return;
          t(!1);
          return;
        }
      },
      [o, s?.y, t]
    );
  EO(e, l, { threshold: RO, rootMargin: a, enabled: i ?? !0 });
}
function IO(e, t) {
  return t.height === 0 ? 0 : e.height / Math.min(t.height, $t.innerHeight);
}
function FO(
  { boundingClientRect: e, intersectionRect: t, isIntersecting: n },
  r
) {
  return e.height === 0 ? n : n && IO(t, e) >= r;
}
var JH = Gt(nu(), 1);
var tz = Gt(nu(), 1);
var iz = S.createContext({ dragging: !1 });
var LO = { onMouseEnter: "mouseenter", onMouseLeave: "mouseleave" },
  sz = Object.keys(LO);
var F1 = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
  nr = Symbol("private"),
  ap = (() => {
    function e(t = {}, n = !1, r = !0) {
      let i = {
          [nr]: {
            makeAnimatables: n,
            observeAnimatables: r,
            observers: new _S(),
            reset() {
              for (let s in o)
                if (F1(o, s)) {
                  let a = F1(t, s) ? _e(t)[s] : void 0;
                  a !== void 0 ? (o[s] = a) : delete o[s];
                }
            },
            transactions: new Set(),
          },
        },
        o = new Proxy(i, MO);
      return Object.assign(o, t), o;
    }
    return (
      (e.resetObject = (t) => t[nr].reset()),
      (e.addObserver = (t, n) => t[nr].observers.add(n)),
      e
    );
  })(),
  _O = class {
    constructor() {
      R(this, "set", (e, t, n, r) => {
        if (t === nr) return !1;
        let i = e[nr],
          o,
          s;
        if (
          (mn(n) ? ((o = n), (s = o.get())) : (s = n),
          i.makeAnimatables &&
            typeof n != "function" &&
            typeof n != "object" &&
            !o &&
            (o = Be(n)),
          i.observeAnimatables && o)
        ) {
          let u = i.transactions;
          o.onUpdate({
            update: (f, d) => {
              d && u.add(d), i.observers.notify({ value: r }, d);
            },
            finish: (f) => {
              u.delete(f) && i.observers.finishTransaction(f);
            },
          });
        }
        let a = !1,
          l = !0,
          c = _e(e)[t];
        if (c !== void 0) {
          mn(c)
            ? ((l = c.get() !== s), c.set(s))
            : ((l = c !== s), (_e(e)[t] = s));
          let u = s !== null && typeof s == "object";
          (Array.isArray(s) || u) && (l = !0), (a = !0);
        } else o && (n = o), (a = Reflect.set(e, t, n));
        return l && i.observers.notify({ value: r }), a;
      }),
        R(this, "get", (e, t, n) => {
          if (t === nr) return _e(e)[t];
          let r = Reflect.get(e, t, n);
          return typeof r == "function" ? r.bind(n) : r;
        });
    }
    deleteProperty(e, t) {
      let n = Reflect.deleteProperty(e, t);
      return e[nr].observers.notify({ value: e }), n;
    }
    ownKeys(e) {
      let t = Reflect.ownKeys(e),
        n = t.indexOf(nr);
      return n !== -1 && t.splice(n, 1), t;
    }
    getOwnPropertyDescriptor(e, t) {
      if (t !== nr) return Reflect.getOwnPropertyDescriptor(e, t);
    }
  },
  MO = new _O();
var OO = "opacity";
function AO(e) {
  return OO in e;
}
function DO(e, t) {
  if (!AO(e)) return;
  let n = Be.getNumber(e.opacity);
  n !== 1 && (t.opacity = n);
}
function VO(e) {
  let t = [];
  if (e && e.length) {
    let n = e.map(
      (r) => `drop-shadow(${r.x}px ${r.y}px ${r.blur}px ${r.color})`
    );
    t.push(...n);
  }
  return t;
}
function pw(e, t) {
  if (!e.shadows || e.shadows.length === 0) return;
  let n = e.shadows
    .map((r) => `${r.x}px ${r.y}px ${r.blur}px ${r.color}`)
    .join(", ");
  n && (t.textShadow = n);
}
function BO(e, t) {
  let n = [];
  X(e.brightness) && n.push(`brightness(${e.brightness / 100})`),
    X(e.contrast) && n.push(`contrast(${e.contrast / 100})`),
    X(e.grayscale) && n.push(`grayscale(${e.grayscale / 100})`),
    X(e.hueRotate) && n.push(`hue-rotate(${e.hueRotate}deg)`),
    X(e.invert) && n.push(`invert(${e.invert / 100})`),
    X(e.saturate) && n.push(`saturate(${e.saturate / 100})`),
    X(e.sepia) && n.push(`sepia(${e.sepia / 100})`),
    X(e.blur) && n.push(`blur(${e.blur}px)`),
    e.dropShadows && n.push(...VO(e.dropShadows)),
    n.length !== 0 && (t.filter = t.WebkitFilter = n.join(" "));
}
function HO(e, t) {
  X(e.backgroundBlur) &&
    (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`);
}
function Up(e, t) {
  HO(e, t), BO(e, t);
}
var { getNumber: cz } = Be;
var zO = class extends Re {
    constructor() {
      super(...arguments),
        R(this, "layoutMaybeMutated"),
        R(this, "projectionNodes", new Map()),
        R(this, "rootProjectionNode"),
        R(this, "isExiting"),
        R(
          this,
          "shouldPreserveFollowOpacity",
          (e) => e.options.layoutId === jp && !this.props.isExiting
        ),
        R(this, "switchLayoutGroupContext", {
          register: (e) => this.addChild(e),
          deregister: (e) => this.removeChild(e),
          transition:
            this.props.isLead !== void 0 && this.props.animatesLayout
              ? this.props.transition
              : void 0,
          shouldPreserveFollowOpacity: this.shouldPreserveFollowOpacity,
        });
    }
    componentDidMount() {
      this.props.isLead &&
        this.props.sharedLayoutContext.initLead(
          this,
          !!this.props.animatesLayout
        );
    }
    shouldComponentUpdate(e) {
      let {
        isLead: t,
        isExiting: n,
        isOverlayed: r,
        animatesLayout: i,
        transition: o,
        sharedLayoutContext: s,
      } = e;
      if (((this.isExiting = n), t === void 0)) return !0;
      let a = !this.props.isLead && !!t,
        l = this.props.isExiting && !n,
        c = a || l,
        u = !!this.props.isLead && !t,
        f = this.props.isOverlayed !== r;
      return (
        (c || u) && this.projectionNodes.forEach((d) => d?.willUpdate()),
        c
          ? s.schedulePromoteTree(this, o, !!i)
          : f && s.scheduleProjectionDidUpdate(),
        !!c && !!i
      );
    }
    addChild(e) {
      let t = e.options.layoutId;
      t && (this.projectionNodes.set(t, e), this.setRootChild(e));
    }
    setRootChild(e) {
      if (!this.rootProjectionNode) return (this.rootProjectionNode = e);
      this.rootProjectionNode =
        this.rootProjectionNode.depth < e.depth ? this.rootProjectionNode : e;
    }
    removeChild(e) {
      let t = e.options.layoutId;
      t && this.projectionNodes.delete(t);
    }
    render() {
      return T(Ga.Provider, {
        value: this.switchLayoutGroupContext,
        children: this.props.children,
      });
    }
  },
  NO = (e) => {
    let t = S.useContext(dw);
    return T(zO, { ...e, sharedLayoutContext: t });
  },
  mw = S.createContext(!0);
function mz() {
  return M(mw);
}
function $O() {
  return new Map();
}
function WO() {
  return on($O);
}
var vw = be({ register: () => {}, deregister: () => {} }),
  jO = ({ isCurrent: e, isOverlayed: t, children: n }) => {
    let r = WO(),
      i = fe(
        (a) => {
          if (r.has(a)) {
            console.warn("NavigationTargetWrapper: already registered");
            return;
          }
          r.set(a, void 0);
        },
        [r]
      ),
      o = fe(
        (a) => {
          let l = r.get(a);
          l?.(), r.delete(a);
        },
        [r]
      ),
      s = A({ register: i, deregister: o }).current;
    return (
      W(
        () => (
          r.forEach((a, l) => {
            let c = l(e, t);
            r.set(l, ra(c) ? c : void 0);
          }),
          () => {
            r.forEach((a, l) => {
              a && (a(), r.set(l, void 0));
            });
          }
        ),
        [e, t, r]
      ),
      T(vw.Provider, { value: s, children: n })
    );
  };
function gw(e, t = []) {
  let { register: n, deregister: r } = M(vw);
  W(() => {
    if (e) return n(e), () => r(e);
  }, [n, r, ...t]);
}
var lp = S.memo(function ({
  isLayeredContainer: t,
  isCurrent: n,
  isPrevious: r,
  isOverlayed: i = !1,
  visible: o,
  transitionProps: s,
  children: a,
  backdropColor: l,
  onTapBackdrop: c,
  backfaceVisible: u,
  exitBackfaceVisible: f,
  animation: d,
  exitAnimation: h,
  instant: g,
  initialProps: y,
  exitProps: x,
  position: p = { top: 0, right: 0, bottom: 0, left: 0 },
  withMagicMotion: m,
  index: v,
  areMagicMotionLayersPresent: b,
  id: C,
  isInitial: w,
}) {
  let k = xy(),
    E = M(Ai),
    { persistLayoutIdCache: P } = M(ko),
    I = A({
      wasCurrent: void 0,
      wasPrevious: !1,
      wasBeingRemoved: !1,
      wasReset: !0,
      origins: L1({}, y, s),
    }),
    H = A(null),
    _ = E !== null && !E.isPresent;
  n && I.current.wasCurrent === void 0 && P(),
    W(() => {
      if (t || !k) return;
      if (_) {
        I.current = { ...I.current, wasBeingRemoved: _ };
        return;
      }
      let { wasPrevious: Y, wasCurrent: J } = I.current,
        jt = (n && !J) || (!_ && I.current.wasBeingRemoved && n),
        re = r && !Y,
        ct = L1(I.current.origins, y, s),
        q = I.current.wasReset;
      jt || re
        ? (k.stop(), k.start({ zIndex: v, ...ct, ...s }), (q = !1))
        : q === !1 &&
          (k.stop(), k.set({ zIndex: v, ...gi, opacity: 0 }), (q = !0)),
        (I.current = {
          wasCurrent: !!n,
          wasPrevious: !!r,
          wasBeingRemoved: !1,
          wasReset: q,
          origins: ct,
        });
    }, [n, r, _]);
  let Z = g ? { type: !1 } : "velocity" in d ? { ...d, velocity: 0 } : d,
    N = g ? { type: !1 } : h || d,
    ee = { ...p };
  (ee.left === void 0 || ee.right === void 0) && (ee.width = "auto"),
    (ee.top === void 0 || ee.bottom === void 0) && (ee.height = "auto");
  let z = (_1(s) || _1(y)) && (t || n || r) ? 1200 : void 0,
    j = { ...gi, ...I.current.origins },
    D = t
      ? {
          initial: { ...j, ...y },
          animate: { ...j, ...s, transition: Z },
          exit: { ...j, ...x, transition: d },
        }
      : { animate: k, exit: { ...j, ...x, transition: N } },
    Q = !(_ || b === !1),
    V = !!n && Q;
  return se(zc, {
    "data-framer-component-type": "NavigationContainerWrapper",
    width: "100%",
    height: "100%",
    style: {
      position: "absolute",
      transformStyle: "flat",
      backgroundColor: "transparent",
      overflow: "hidden",
      zIndex: t || _ || (n && m) ? v : void 0,
      pointerEvents: void 0,
      visibility: o ? "visible" : "hidden",
      perspective: z,
    },
    children: [
      t &&
        T(zc, {
          width: "100%",
          height: "100%",
          "data-framer-component-type": "NavigationContainerBackdrop",
          transition: d,
          initial: { opacity: g && o ? 1 : 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          backgroundColor: l || "transparent",
          onTap: _ ? void 0 : c,
        }),
      T(zc, {
        ...ee,
        ...D,
        transition: {
          default: Z,
          originX: { type: !1 },
          originY: { type: !1 },
          originZ: { type: !1 },
        },
        backgroundColor: "transparent",
        backfaceVisible: _ ? f : u,
        "data-framer-component-type": "NavigationContainer",
        "data-framer-is-current-navigation-target": !!n,
        style: {
          pointerEvents: void 0,
          opacity: (n && w) || t || (n && m) ? 1 : 0,
        },
        "data-is-present": Q ? void 0 : !1,
        ref: H,
        children: T(PO.Provider, {
          value: H,
          children: T(mw.Provider, {
            value: V,
            children: T(jO, {
              isCurrent: V,
              isOverlayed: i,
              children: T(NO, {
                isLead: n,
                animatesLayout: !!m,
                transition: Z,
                isExiting: !Q,
                isOverlayed: i,
                id: C,
                children: a,
              }),
            }),
          }),
        }),
      }),
    ],
  });
},
UO);
function UO(e, t) {
  return !(
    t.isCurrent === void 0 ||
    e.isCurrent !== t.isCurrent ||
    e.isPrevious !== t.isPrevious ||
    (t.isCurrent && e.isOverlayed !== t.isOverlayed)
  );
}
function L1(e, t, n) {
  let r = { ...e };
  return (
    t &&
      (X(t.originX) && (r.originX = t.originX),
      X(t.originY) && (r.originY = t.originY),
      X(t.originZ) && (r.originZ = t.originZ)),
    n &&
      (X(n.originX) && (r.originX = n.originX),
      X(n.originY) && (r.originY = n.originY),
      X(n.originZ) && (r.originZ = n.originZ)),
    r
  );
}
function _1(e) {
  var t, n, r;
  if (!e || !("rotateX" in e || "rotateY" in e || "z" in e)) return !1;
  let o = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0,
    s =
      ((t = e?.transition) == null ? void 0 : t.rotateX.from) !== 0 ||
      ((n = e?.transition) == null ? void 0 : n.rotateY.from) !== 0 ||
      ((r = e?.transition) == null ? void 0 : r.z.from) !== 0;
  return o || s;
}
var gi = {
    x: 0,
    y: 0,
    z: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    scale: 1,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 1,
    skew: 0,
    skewX: 0,
    skewY: 0,
    originX: 0.5,
    originY: 0.5,
    originZ: 0,
    opacity: 1,
  },
  XO = class {
    constructor() {
      R(this, "warning", () => {
        ta(
          "The Navigator API is only available inside of Framer: https://www.framer.com/"
        );
      }),
        R(this, "goBack", () => this.warning()),
        R(this, "instant", () => this.warning()),
        R(this, "fade", () => this.warning()),
        R(this, "push", () => this.warning()),
        R(this, "modal", () => this.warning()),
        R(this, "overlay", () => this.warning()),
        R(this, "flip", () => this.warning()),
        R(this, "customTransition", () => this.warning()),
        R(this, "magicMotion", () => this.warning());
    }
  },
  GO = new XO(),
  yw = be(GO),
  Ge = {
    Fade: { exit: { opacity: 0 }, enter: { opacity: 0 } },
    PushLeft: { exit: { x: "-30%" }, enter: { x: "100%" } },
    PushRight: { exit: { x: "30%" }, enter: { x: "-100%" } },
    PushUp: { exit: { y: "-30%" }, enter: { y: "100%" } },
    PushDown: { exit: { y: "30%" }, enter: { y: "-100%" } },
    Instant: { animation: { type: !1 }, enter: { opacity: 0 } },
    Modal: {
      overCurrentContext: !0,
      goBackOnTapOutside: !0,
      position: { center: !0 },
      enter: { opacity: 0, scale: 1.2 },
    },
    OverlayLeft: {
      overCurrentContext: !0,
      goBackOnTapOutside: !0,
      position: { right: 0, top: 0, bottom: 0 },
      enter: { x: "100%" },
    },
    OverlayRight: {
      overCurrentContext: !0,
      goBackOnTapOutside: !0,
      position: { left: 0, top: 0, bottom: 0 },
      enter: { x: "-100%" },
    },
    OverlayUp: {
      overCurrentContext: !0,
      goBackOnTapOutside: !0,
      position: { bottom: 0, left: 0, right: 0 },
      enter: { y: "100%" },
    },
    OverlayDown: {
      overCurrentContext: !0,
      goBackOnTapOutside: !0,
      position: { top: 0, left: 0, right: 0 },
      enter: { y: "-100%" },
    },
    FlipLeft: {
      backfaceVisible: !1,
      exit: { rotateY: -180 },
      enter: { rotateY: 180 },
    },
    FlipRight: {
      backfaceVisible: !1,
      exit: { rotateY: 180 },
      enter: { rotateY: -180 },
    },
    FlipUp: {
      backfaceVisible: !1,
      exit: { rotateX: 180 },
      enter: { rotateX: -180 },
    },
    FlipDown: {
      backfaceVisible: !1,
      exit: { rotateX: -180 },
      enter: { rotateX: 180 },
    },
    MagicMotion: { withMagicMotion: !0 },
  };
function YO(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : "right") {
    case "right":
      return Ge.PushLeft;
    case "left":
      return Ge.PushRight;
    case "bottom":
      return Ge.PushUp;
    case "top":
      return Ge.PushDown;
  }
}
function KO(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : "bottom") {
    case "right":
      return Ge.OverlayLeft;
    case "left":
      return Ge.OverlayRight;
    case "bottom":
      return Ge.OverlayUp;
    case "top":
      return Ge.OverlayDown;
  }
}
function qO(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : "bottom") {
    case "right":
      return Ge.FlipLeft;
    case "left":
      return Ge.FlipRight;
    case "bottom":
      return Ge.FlipUp;
    case "top":
      return Ge.FlipDown;
  }
}
var QO = () => ({
  current: -1,
  previous: -1,
  currentOverlay: -1,
  previousOverlay: -1,
  visualIndex: 0,
  overlayItemId: 0,
  historyItemId: 0,
  history: [],
  overlayStack: [],
  containers: {},
  containerIndex: {},
  containerVisualIndex: {},
  containerIsRemoved: {},
  transitionForContainer: {},
  previousTransition: null,
});
function M1(e, t) {
  switch (t.type) {
    case "addOverlay":
      return JO(e, t.transition, t.component);
    case "removeOverlay":
      return eA(e);
    case "add":
      return bw(e, t.key, t.transition, t.component);
    case "remove":
      return xw(e);
    case "update":
      return ZO(e, t.key, t.component);
    case "back":
      return tA(e);
    case "forward":
      return nA(e);
    default:
      return;
  }
}
function ZO(e, t, n) {
  return { ...e, containers: { ...e.containers, [t]: n } };
}
function JO(e, t, n) {
  let r = e.overlayStack[e.currentOverlay];
  if (r && r.component === n) return;
  let i = e.overlayItemId + 1,
    o = [...e.overlayStack, { key: `stack-${i}`, component: n, transition: t }];
  return {
    ...e,
    overlayStack: o,
    overlayItemId: i,
    currentOverlay: Math.max(0, Math.min(e.currentOverlay + 1, o.length - 1)),
    previousOverlay: e.currentOverlay,
  };
}
function eA(e) {
  return {
    ...e,
    overlayStack: [],
    currentOverlay: -1,
    previousOverlay: e.currentOverlay,
  };
}
function bw(e, t, n, r) {
  e.containers[t] || (e.containers[t] = r),
    (e.history = e.history.slice(0, e.current + 1)),
    (e.visualIndex = Math.max(e.history.length, 0));
  let i = e.history[e.history.length - 1],
    o = i && i.key === t;
  if (((e.overlayStack = []), o && e.currentOverlay > -1))
    return { ...e, currentOverlay: -1, previousOverlay: e.currentOverlay };
  if (o) return;
  let s = e.containerVisualIndex[t],
    a = e.containerIsRemoved[t],
    l = i?.key && n.withMagicMotion ? sA(t, s, a, e.history) : !0;
  e.history.push({
    key: t,
    transition: n,
    visualIndex: l ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t],
  });
  let c = e.current + 1,
    u = e.current;
  for (let g in e.containerIndex)
    e.containerIndex[g] === c && (e.containerIndex[g] = oA(g, e.history));
  e.containerIndex[t] = c;
  let { containerVisualIndex: f, containerIsRemoved: d } = rA(e, t, l),
    h = Sw(c, u, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: c,
    previous: u,
    containerVisualIndex: f,
    containerIsRemoved: d,
    transitionForContainer: h,
    previousTransition: null,
    currentOverlay: -1,
    historyItemId: e.historyItemId + 1,
    previousOverlay: e.currentOverlay,
  };
}
function tA(e) {
  let t = { ...e.containers },
    n = xw(e);
  if (n) return (n.containers = t), n;
}
function nA(e) {
  let t = e.history[e.current + 1];
  if (!t) return;
  let { key: n, transition: r, component: i } = t,
    o = [...e.history],
    s = bw(e, n, r, i);
  if (s) return (s.history = o), s;
}
function xw(e) {
  let t = [...e.history.slice(0, e.current + 1)];
  if (t.length === 1) return;
  let n = t.pop();
  if (!n) return;
  let r = t[t.length - 1];
  ae(r, "The navigation history must have at least one component"),
    (e.containerIndex[r.key] = t.length - 1),
    t.every((d) => d.key !== n.key) && delete e.containers[n.key];
  let o = e.current - 1,
    s = e.current,
    {
      containerIsRemoved: a,
      containerVisualIndex: l,
      previousTransition: c,
      visualIndex: u,
    } = iA(e, r, n),
    f = Sw(o, s, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: o,
    previous: s,
    containerIsRemoved: a,
    containerVisualIndex: l,
    previousTransition: c,
    visualIndex: u,
    transitionForContainer: f,
  };
}
function rA(e, t, n) {
  let r = {
    containerVisualIndex: { ...e.containerVisualIndex },
    containerIsRemoved: { ...e.containerIsRemoved },
  };
  if (n)
    (r.containerVisualIndex[t] = e.history.length - 1),
      (r.containerIsRemoved[t] = !1);
  else {
    let i = e.containerVisualIndex[t];
    for (let [o, s] of Object.entries(e.containerVisualIndex))
      i !== void 0 && s > i && (r.containerIsRemoved[o] = !0);
  }
  return r;
}
function iA(e, t, n) {
  let r = [t.key, n.key],
    i = e.history[e.history.length - 2],
    o = e.previousTransition === null ? null : { ...e.previousTransition },
    s = {
      containerIsRemoved: { ...e.containerIsRemoved },
      containerVisualIndex: { ...e.containerVisualIndex },
      previousTransition: o,
      visualIndex: e.visualIndex,
    };
  i && r.push(i.key);
  let a = e.containerVisualIndex[t.key],
    l = e.containerVisualIndex[n.key],
    c =
      (a !== void 0 && l !== void 0 && a <= l) ||
      (t.visualIndex !== void 0 && t.visualIndex < e.history.length - 1),
    u = t.visualIndex;
  return (
    c
      ? ((s.containerIsRemoved[n.key] = !0),
        (s.containerVisualIndex[t.key] =
          u !== void 0 ? u : e.history.length - 1))
      : ((s.visualIndex = e.visualIndex + 1),
        (s.containerVisualIndex[t.key] = e.visualIndex + 1)),
    n.transition.withMagicMotion &&
      (s.previousTransition = n.transition || null),
    (e.containerIsRemoved[t.key] = !1),
    s
  );
}
function oA(e, t) {
  var n;
  for (let r = t.length; r > t.length; r--)
    if (((n = t[r]) == null ? void 0 : n.key) === e) return r;
  return -1;
}
function Sw(e, t, n, r, i) {
  let o = { ...i };
  for (let [s, a] of Object.entries(r)) {
    let l = aA(a, { current: e, previous: t, history: n });
    l && (o[s] = l);
  }
  return o;
}
function sA(e, t, n, r) {
  return n || t === void 0
    ? !0
    : t === 0
    ? !1
    : r.slice(t, r.length).findIndex((s) => s.key === e) > -1
    ? !0
    : !(r.slice(0, t - 1).findIndex((s) => s.key === e) > -1);
}
function aA(e, t) {
  let { current: n, previous: r, history: i } = t;
  if (!(e !== n && e !== r)) {
    if (e === n && n > r) {
      let o = i[e];
      return Oc("enter", o?.transition.enter, o?.transition.animation);
    }
    if (e === r && n > r) {
      let o = i[e + 1];
      return Oc("exit", o?.transition.exit, o?.transition.animation);
    }
    if (e === n && n < r) {
      let o = i[e + 1];
      return Oc("enter", o?.transition.exit, o?.transition.animation);
    }
    if (e === r && n < r) {
      let o = i[e];
      return Oc("exit", o?.transition.enter, o?.transition.animation);
    }
  }
}
var lA = Ci(gi);
function Oc(e, t, n) {
  let r = {},
    i = {};
  return (
    lA.forEach((o) => {
      (r[o] = gi[o]), (i[o] = { ...n, from: gi[o] });
    }),
    t &&
      Object.keys(t).forEach((o) => {
        if (t[o] === void 0) return;
        let s = t[o],
          a = typeof t[o] == "string" ? `${_e(gi)[o]}%` : _e(gi)[o];
        (_e(r)[o] = e === "enter" ? a : s),
          (i[o] = { ...n, from: e === "enter" ? s : a, velocity: 0 });
      }),
    { ...r, transition: { ...i } }
  );
}
var Sz = yw.Consumer,
  ww = S.createContext(void 0),
  wz = ww.Provider,
  Cw = S.createContext(void 0),
  Xp = class extends Re {
    constructor(e) {
      var t;
      super(e),
        R(this, "lastEventTimeStamp", null),
        R(this, "state", QO()),
        R(this, "navigationAction", (a) => {
          if (!this.props.enabled && this.state.history.length > 0) return;
          let l = M1(this.state, a);
          if (!l) return;
          let { skipLayoutAnimation: c } = this.props,
            u = l.history[l.current],
            f =
              (a.type === "add" && a.transition.withMagicMotion) ||
              (a.type === "forward" && u?.transition.withMagicMotion) ||
              (a.type === "remove" && !!l.previousTransition),
            d = () => {
              var h;
              this.setState(l),
                u?.key && ((h = this.context) == null || h.call(this, u.key));
            };
          c && !f ? c(d) : d();
        }),
        R(this, "goBack", () => {
          var a;
          if (!this.isSameEventTransition())
            return (
              (this.lastEventTimeStamp =
                ((a = globalThis.event) == null ? void 0 : a.timeStamp) ||
                null),
              this.state.currentOverlay !== -1
                ? this.navigationAction({ type: "removeOverlay" })
                : this.navigationAction({ type: "remove" })
            );
        });
      let n = this.props.children;
      if (!n || !Bc(n) || !Vc(n)) return;
      let r = { ...Ge.Instant },
        o = {
          type: "add",
          key:
            ((t = n.key) == null ? void 0 : t.toString()) ||
            `stack-${this.state.historyItemId + 1}`,
          transition: r,
          component: n,
        },
        s = M1(this.state, o);
      s && (this.state = s);
    }
    componentDidMount() {
      var e;
      let t = this.state.history[this.state.current];
      t && ((e = this.context) == null || e.call(this, t.key));
    }
    UNSAFE_componentWillReceiveProps(e) {
      var t;
      let n = e.children;
      if (!Bc(n) || !Vc(n)) return;
      let r = (t = n.key) == null ? void 0 : t.toString();
      r &&
        (this.state.history.length === 0
          ? this.transition(n, Ge.Instant)
          : this.navigationAction({ type: "update", key: r, component: n }));
    }
    componentWillUnmount() {
      var e, t;
      (t = (e = this.props).resetProjection) == null || t.call(e);
    }
    getStackState(e) {
      let {
        current: t,
        previous: n,
        currentOverlay: r,
        previousOverlay: i,
      } = this.state;
      return e.overCurrentContext
        ? { current: r, previous: i, history: this.state.overlayStack }
        : { current: t, previous: n, history: this.state.history };
    }
    isSameEventTransition() {
      return globalThis.event
        ? this.lastEventTimeStamp === globalThis.event.timeStamp
        : !1;
    }
    transition(e, t, n) {
      var r, i;
      if (
        this.isSameEventTransition() ||
        ((this.lastEventTimeStamp =
          ((r = globalThis.event) == null ? void 0 : r.timeStamp) || null),
        !e || !Bc(e) || !Vc(e))
      )
        return;
      let o = { ...t, ...n };
      if (!!o.overCurrentContext)
        return this.navigationAction({
          type: "addOverlay",
          transition: o,
          component: e,
        });
      let a =
        ((i = e.key) == null ? void 0 : i.toString()) ||
        `stack-${this.state.historyItemId + 1}`;
      this.navigationAction({
        type: "add",
        key: a,
        transition: o,
        component: e,
      });
    }
    instant(e) {
      this.transition(e, Ge.Instant, void 0);
    }
    fade(e, t) {
      this.transition(e, Ge.Fade, t);
    }
    push(e, t) {
      this.transition(e, YO(t), t);
    }
    modal(e, t) {
      this.transition(e, Ge.Modal, t);
    }
    overlay(e, t) {
      this.transition(e, KO(t), t);
    }
    flip(e, t) {
      this.transition(e, qO(t), t);
    }
    magicMotion(e, t) {
      this.transition(e, Ge.MagicMotion, t);
    }
    customTransition(e, t) {
      this.transition(e, t);
    }
    render() {
      var e, t, n, r, i;
      let o = this.getStackState({ overCurrentContext: !1 }),
        s = this.getStackState({ overCurrentContext: !0 }),
        a = cA(s),
        l = s.current > -1,
        c = this.state.history.length === 1,
        u = [];
      for (let [d, h] of Object.entries(this.state.containers)) {
        let g = this.state.containerIndex[d];
        ae(g !== void 0, "Container's index must be registered");
        let y = this.state.containerVisualIndex[d];
        ae(y !== void 0, "Container's visual index must be registered");
        let x = this.state.containerIsRemoved[d],
          p = this.state.history[g],
          m = this.state.transitionForContainer[d],
          v = g === this.state.current,
          b = g === this.state.previous,
          C = v ? !1 : x,
          w =
            ((e = p?.transition) == null ? void 0 : e.withMagicMotion) ||
            (v && !!this.state.previousTransition);
        u.push(
          T(
            lp,
            {
              id: d,
              index: y,
              isInitial: c,
              isCurrent: v,
              isPrevious: b,
              isOverlayed: l,
              visible: v || b,
              position: (t = p?.transition) == null ? void 0 : t.position,
              instant: A1(g, o),
              transitionProps: m,
              animation: O1(g, o),
              backfaceVisible: vA(g, o),
              exitAnimation: (n = p?.transition) == null ? void 0 : n.animation,
              exitBackfaceVisible:
                (r = p?.transition) == null ? void 0 : r.backfaceVisible,
              exitProps: (i = p?.transition) == null ? void 0 : i.enter,
              withMagicMotion: w,
              areMagicMotionLayersPresent: C ? !1 : void 0,
              children: T(CO, {
                children: D1({ component: h, transition: p?.transition }),
              }),
            },
            d
          )
        );
      }
      let f = this.state.overlayStack.map((d, h) =>
        T(
          lp,
          {
            isLayeredContainer: !0,
            isCurrent: h === this.state.currentOverlay,
            position: d.transition.position,
            initialProps: mA(h, s),
            transitionProps: gA(h, s),
            instant: A1(h, s, !0),
            animation: O1(h, s),
            exitProps: d.transition.enter,
            visible: yA(h, s),
            backdropColor: hA(d.transition),
            backfaceVisible: pA(h, s),
            onTapBackdrop: bA(d.transition, this.goBack),
            index: this.state.current + 1 + h,
            children: D1({ component: d.component, transition: d.transition }),
          },
          d.key
        )
      );
      return T(zc, {
        "data-framer-component-type": "NavigationRoot",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        position: "relative",
        style: {
          overflow: "hidden",
          backgroundColor: "unset",
          pointerEvents: void 0,
          ...this.props.style,
        },
        children: T(yw.Provider, {
          value: this,
          children: se(Cw.Provider, {
            value: c,
            children: [
              T(lp, {
                isLayeredContainer: !0,
                position: void 0,
                initialProps: {},
                instant: !1,
                transitionProps: uA(a),
                animation: fA(a),
                backfaceVisible: dA(a),
                visible: !0,
                backdropColor: void 0,
                onTapBackdrop: void 0,
                index: 0,
                children: T(vL, {
                  children: T(SO, {
                    children: T(Of, { presenceAffectsLayout: !1, children: u }),
                  }),
                }),
              }),
              T(Of, { children: f }),
            ],
          }),
        }),
      });
    }
  };
R(Xp, "defaultProps", { enabled: !0 });
R(Xp, "contextType", ww);
var kw = { stiffness: 500, damping: 50, restDelta: 1, type: "spring" };
function cA(e) {
  let t, n;
  return (
    e.current !== -1 ? (t = e.history[e.current]) : (n = e.history[e.previous]),
    { currentOverlayItem: t, previousOverlayItem: n }
  );
}
function uA({ currentOverlayItem: e }) {
  return e && e.transition.exit;
}
function fA({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e && e.transition.animation
    ? e.transition.animation
    : t && t.transition.animation
    ? t.transition.animation
    : kw;
}
function dA({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e ? e.transition.backfaceVisible : t && t.transition.backfaceVisible;
}
function hA(e) {
  if (e.backdropColor) return e.backdropColor;
  if (e.overCurrentContext) return "rgba(4,4,15,.4)";
}
function pA(e, t) {
  let { current: n, history: r } = t;
  if (e === n) {
    let i = r[e];
    return i && i.transition ? i.transition.backfaceVisible : !0;
  } else if (e < n) {
    let i = r[e + 1];
    return i && i.transition ? i.transition.backfaceVisible : !0;
  } else {
    let i = r[e];
    return i && i.transition ? i.transition.backfaceVisible : !0;
  }
}
function mA(e, t) {
  let n = t.history[e];
  if (n) return n.transition.enter;
}
function vA(e, t) {
  var n, r, i, o;
  let { current: s, previous: a, history: l } = t;
  return (e === a && s > a) || (e === s && s < a)
    ? (r = (n = l[e + 1]) == null ? void 0 : n.transition) == null
      ? void 0
      : r.backfaceVisible
    : (o = (i = l[e]) == null ? void 0 : i.transition) == null
    ? void 0
    : o.backfaceVisible;
}
function gA(e, t) {
  let { current: n, history: r } = t;
  if (e !== n)
    if (e < n) {
      let i = r[e + 1];
      if (i && i.transition) return i.transition.exit;
    } else {
      let i = r[e];
      if (i && i.transition) return i.transition.enter;
    }
}
function O1(e, t) {
  let { current: n, previous: r, history: i } = t,
    o = r > n ? r : n;
  if (e < o) {
    let s = i[e + 1];
    if (s && s.transition.animation) return s.transition.animation;
  } else if (e !== o) {
    let s = i[e];
    if (s && s.transition.animation) return s.transition.animation;
  } else {
    let s = i[e];
    if (s?.transition.animation) return s.transition.animation;
  }
  return kw;
}
function A1(e, t, n) {
  let { current: r, previous: i, history: o } = t;
  return !!((n && o.length > 1) || (e !== i && e !== r) || r === i);
}
function yA(e, t) {
  let { current: n, previous: r } = t;
  return e > n && e > r ? !1 : e === n;
}
function D1(e) {
  return S.Children.map(e.component, (n) => {
    var r;
    if (!Bc(n) || !Vc(n) || !n.props) return n;
    let i = { style: n.props.style ?? {} },
      o = (r = e?.transition) == null ? void 0 : r.position,
      s = !o || (o.left !== void 0 && o.right !== void 0),
      a = !o || (o.top !== void 0 && o.bottom !== void 0),
      l = "style" in n.props ? De(n.props.style) : !0;
    return (
      s &&
        ("width" in n.props && (i.width = "100%"),
        l && (i.style.width = "100%")),
      a &&
        ("height" in n.props && (i.height = "100%"),
        l && (i.style.height = "100%")),
      S.cloneElement(n, i)
    );
  });
}
function bA(e, t) {
  if (e.goBackOnTapOutside !== !1) return t;
}
function xA() {
  return (
    S.useInsertionEffect(() => {
      ba();
    }, []),
    null
  );
}
function SA(e) {
  let t = ky(),
    n = Vf();
  return se(Xp, {
    ...e,
    resetProjection: t,
    skipLayoutAnimation: n,
    children: [e.children, T(xA, {})],
  });
}
var Cz = Gt(nu(), 1);
var Ez = Gt(_p(), 1);
var Lz = !!(WS() && K_() < 15.4);
function Gp(...e) {
  return e.filter(Boolean).join(" ");
}
var wA = {};
Object.freeze(wA);
var Gz = (4 / 60) * 1e3;
var CA = (() => {
    function e(t = {}) {
      let n = ap(t, !1, !1);
      return e.addData(n), n;
    }
    return (
      (e._stores = []),
      (e.addData = (t) => {
        e._stores.push(t);
      }),
      (e.reset = () => {
        e._stores.forEach((t) => ap.resetObject(t));
      }),
      (e.addObserver = (t, n) => ap.addObserver(t, n)),
      e
    );
  })(),
  cp = CA;
var kA = { update: 0 },
  TA = S.createContext({ update: NaN });
var EA = class extends Re {
    constructor() {
      super(...arguments),
        R(this, "observers", []),
        R(this, "state", kA),
        R(this, "taskAdded", !1),
        R(this, "frameTask", () => {
          this.setState({ update: this.state.update + 1 }),
            (this.taskAdded = !1);
        }),
        R(this, "observer", () => {
          this.taskAdded ||
            ((this.taskAdded = !0), AS.addFrameTask(this.frameTask));
        });
    }
    componentWillUnmount() {
      this.observers.map((e) => e()), cp.reset();
    }
    render() {
      let { children: e } = this.props;
      return (
        this.observers.map((t) => t()),
        (this.observers = []),
        cp._stores.forEach((t) => {
          let n = cp.addObserver(t, this.observer);
          this.observers.push(n);
        }),
        T(TA.Provider, { value: { ...this.state }, children: e })
      );
    }
  },
  e6 = Gt(nu(), 1);
var Tw = "__framer__",
  RA = Tw.length;
function PA(e, t) {
  let n = {},
    r = {};
  for (let i in e) {
    let o = Ew(i);
    if (o && t.has(o)) {
      n[o] = e[i];
      continue;
    }
    r[i] = e[i];
  }
  return [n, r];
}
function Ew(e) {
  if (e.startsWith(Tw)) return e.substr(RA);
}
var On = [
    "opacity",
    "x",
    "y",
    "scale",
    "rotate",
    "rotateX",
    "rotateY",
    "skewX",
    "skewY",
    "transformPerspective",
  ],
  Qc = (e) => ({
    x: xe(e?.x ?? 0),
    y: xe(e?.y ?? 0),
    opacity: xe(e?.opacity ?? 1),
    scale: xe(e?.scale ?? 1),
    rotate: xe(e?.rotate ?? 0),
    rotateX: xe(e?.rotateX ?? 0),
    rotateY: xe(e?.rotateY ?? 0),
    skewX: xe(e?.skewX ?? 0),
    skewY: xe(e?.skewY ?? 0),
    transformPerspective: xe(e?.transformPerspective ?? 0),
  }),
  He = {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    skewX: 0,
    skewY: 0,
    transformPerspective: 0,
  };
function Rw(e, t) {
  let n = on(() => ({ values: Qc(t ? e : void 0) }));
  return (
    S.useEffect(() => {
      if (!t)
        for (let r of On) {
          let i = He[r];
          bt(i) || n.values[r].set(i);
        }
    }, [n, t]),
    n
  );
}
var IA = new Set([
    "loopEffectEnabled",
    "loopTransition",
    "loop",
    "loopRepeatType",
    "loopRepeatDelay",
  ]),
  FA = () => {
    let e = A();
    return (
      W(
        () => () => {
          clearTimeout(e.current);
        },
        []
      ),
      async (t) =>
        new Promise((n) => {
          e.current = setTimeout(() => {
            n(!0);
          }, t * 1e3);
        })
    );
  };
function LA({
  loopEffectEnabled: e,
  loopRepeatDelay: t,
  loopTransition: n,
  loopRepeatType: r,
  loop: i,
}) {
  let o = ti(),
    s = on(() => ({ values: Qc() })),
    a = S.useRef(!1),
    l = FA(),
    c = async () => {
      if (!i) return;
      let d = n || void 0,
        h = a.current && r === "mirror",
        g = h ? He : i,
        y = h ? i : He;
      return (
        (a.current = !a.current),
        Promise.all(
          On.map((x) => {
            if (!(o && x !== "opacity"))
              return (
                s.values[x].set(y[x] ?? He[x]),
                new Promise((p) => {
                  let m = { ...d, onComplete: () => p() };
                  zi(s.values[x], g[x] ?? y[x], m);
                })
              );
          })
        )
      );
    },
    u = async () => {
      e && (await c(), await l(t ?? 0), await u());
    },
    f = fe(() => {
      On.forEach((d) => {
        s.values[d].stop();
      }),
        On.forEach((d) => {
          s.values[d].set(He[d]);
        }),
        (a.current = !1);
    }, [s]);
  return S.useEffect(() => (e && i ? u() : f(), () => f()), [e]), s;
}
function _A(e, t, n, r, i) {
  let o = n / 100 - 1,
    s = i ? (t - r) * o : 0,
    a = -e * o;
  return s + a;
}
var MA = new Set([
  "speed",
  "adjustPosition",
  "offset",
  "parallaxTransformEnabled",
]);
function OA(e, t, n) {
  let {
      speed: r = 100,
      offset: i = 0,
      adjustPosition: o = !1,
      parallaxTransformEnabled: s,
    } = e,
    a = S.useRef(null),
    l = ti(),
    c = S.useCallback(
      (g) => (a.current === null || r === 100 ? 0 : _A(g, a.current, r, i, o)),
      [a, r, i, o]
    );
  S.useLayoutEffect(() => {
    K.read(() => {
      var g, y;
      a.current =
        ((y = (g = t.current) == null ? void 0 : g.getBoundingClientRect()) ==
        null
          ? void 0
          : y.top) ?? 0;
    }),
      K.update(() => {
        f.set(c(u.get())), o && d.set(n ?? "initial");
      });
  }, [t, a, o]);
  let { scrollY: u } = dy(),
    f = dt(u, c),
    d = wn(o && a.current === null ? "hidden" : n),
    h = wn(0);
  return {
    values: { y: l || !s ? h : f },
    style: s ? { visibility: d } : void 0,
  };
}
function AA(e) {
  if (!(ne(e) || !De(e))) return e?.transition;
}
async function V1(e, t, n, r, i) {
  let o = AA(e);
  return Promise.all(
    On.map(
      (s) =>
        new Promise((a) => {
          if (n && s !== "opacity") return a();
          let l = t.values[s];
          l.stop();
          let c = De(e) ? e?.[s] ?? He[s] : He[s];
          if ((Se(c) && (c = c.get()), !ce(c))) return a();
          let u = ur.get(r.current);
          u && u.setBaseTarget(s, c);
          let f =
              ne(i) && !l?.hasAnimated && $t.HandoffAppearAnimations
                ? { elapsed: $t.HandoffAppearAnimations(i, s, l, K) }
                : void 0,
            d = { ...o, velocity: 0, elapsed: 0, ...f, onComplete: () => a() };
          zi(l, c, d);
        })
    )
  );
}
var DA = new Set(["presenceInitial", "presenceAnimate", "presenceExit"]);
function VA(
  {
    initial: e,
    animate: t,
    exit: n,
    presenceInitial: r,
    presenceAnimate: i,
    presenceExit: o,
  },
  s,
  a,
  l
) {
  let c = r ?? e,
    u = i ?? t,
    f = o ?? n,
    d = on(() => {
      var x;
      if (!De(c)) return { values: Qc() };
      let p = {};
      for (let m in c) {
        let v = De(c) ? ((x = _e(c)) == null ? void 0 : x[m]) : void 0;
        Se(v) && (v = v.get()), ce(v) && (p[m] = v);
      }
      return { values: Qc(p) };
    }),
    [h, g] = Tf(),
    y = ti();
  return (
    Pi(() => {
      if (!a) {
        g?.();
        return;
      }
      h
        ? c && u && V1(u, d, y, s, l)
        : f
        ? V1(f, d, y, s).then(() => g())
        : g();
    }, [h]),
    d
  );
}
function BA(e, t) {
  let n = 0,
    r = e;
  for (; r && r !== t && r instanceof HTMLElement; )
    (n += r.offsetTop), (r = r.offsetParent);
  return n;
}
var HA = 1;
function Yp(e, t = 0, n) {
  var r;
  let i = [],
    o = [];
  for (let s = e.length; s >= 0; s--) {
    let { ref: a, offset: l } = e[s] ?? {};
    if (!a || !a.current) continue;
    let u = BA(a.current, document.documentElement) - HA - (l ?? 0) - t,
      f = ((r = a.current) == null ? void 0 : r.clientHeight) ?? 0,
      d = i[i.length - 1],
      h = Math.max(u + f, 0);
    i.push(u),
      o.unshift(
        Math.max(u, 0),
        d === void 0 ? h : Math.min(h, Math.max(d - 1, 0))
      ),
      n?.(s);
  }
  return o;
}
function zA(e, t = 0) {
  return e < t ? "up" : "down";
}
var NA = 4;
function Pw(e, t, n = {}) {
  let { direction: r, target: i } = e ?? {},
    { repeat: o = !0, enabled: s = !0 } = n;
  S.useEffect(() => {
    if (!r || !s) return;
    let a,
      l = 0,
      c,
      u;
    return ei(({ y: f }) => {
      if ((!o && u === i) || f.current > f.scrollLength || f.current < 0)
        return;
      let d = zA(f.current, a);
      a = f.current;
      let h = d !== c;
      if (((c = d), h)) l = f.current;
      else {
        if (Math.abs(f.current - l) < NA) return;
        let y = d === r ? i : void 0;
        y !== u && t(y), (u = y);
      }
    });
  }, [r, o, i, s, t]);
}
var $A = new Set([
    "threshold",
    "animateOnce",
    "opacity",
    "targetOpacity",
    "x",
    "y",
    "scale",
    "transition",
    "rotate",
    "rotateX",
    "rotateY",
    "perspective",
    "enter",
    "exit",
    "animate",
    "styleAppearEffectEnabled",
    "targets",
    "scrollDirection",
  ]),
  WA = ["animate", "animate"],
  B1 = { inputRange: [], outputRange: [] };
function jA(e, t, n) {
  let r = Yp(e, t),
    i = [...WA],
    o = r[0];
  if (!ce(o)) return B1;
  if ((o > 1 && (r.unshift(0, o - 1), i.unshift("initial", "initial")), n)) {
    let s = r.length - 1,
      a = r[s];
    if (!ce(a)) return B1;
    r.push(a + 1), i.push("exit");
  }
  return { inputRange: r, outputRange: i };
}
function up(e) {
  return {
    x: e?.x ?? He.x,
    y: e?.y ?? He.y,
    scale: e?.scale ?? He.scale,
    opacity: e?.opacity ?? He.opacity,
    transformPerspective: e?.transformPerspective ?? He.transformPerspective,
    rotate: e?.rotate ?? He.rotate,
    rotateX: e?.rotateX ?? He.rotateX,
    rotateY: e?.rotateY ?? He.rotateY,
    skewX: e?.skewX ?? He.skewX,
    skewY: e?.skewY ?? He.skewY,
    transition: e?.transition ?? void 0,
  };
}
function UA({
  opacity: e,
  targetOpacity: t,
  perspective: n,
  enter: r,
  exit: i,
  animate: o,
  ...s
}) {
  return S.useMemo(
    () => ({
      initial: r ?? up({ ...s, opacity: e ?? t ?? 1, transformPerspective: n }),
      animate: o ?? up({ opacity: t }),
      exit: i ?? up(),
    }),
    [o, s, r, i, e, t, n]
  );
}
function XA(e, t) {
  let n = ti(),
    r = UA(e),
    i = e.styleAppearEffectEnabled,
    o = Rw(i ? r.initial : r.animate, i),
    s = S.useRef({
      isPlaying: !1,
      scheduledAppearState: void 0,
      lastAppearState: !e.styleAppearEffectEnabled,
    }),
    a = S.useRef(),
    l = S.useCallback(async ({ transition: d, ...h }, g) => {
      let y = d ?? r.animate.transition ?? e.transition;
      await a.current,
        (a.current = Promise.all(
          On.map((x) => {
            g && o.values[x].set(r.initial[x] ?? He[x]);
            let p = h[x] ?? He[x],
              m = ur.get(t.current);
            return (
              m && typeof p != "object" && m.setBaseTarget(x, p),
              new Promise((v) => {
                if (n && x !== "opacity") v();
                else {
                  let b = {
                    restDelta: x === "scale" ? 0.001 : void 0,
                    ...y,
                    onComplete: () => v(),
                  };
                  zi(o.values[x], p, b);
                }
              })
            );
          })
        ));
    }, []),
    c = e.animateOnce && s.current.lastAppearState === !0,
    u = !e.targets && e.styleAppearEffectEnabled && !e.scrollDirection && !c;
  hw(
    t,
    (d) => {
      let { isPlaying: h, lastAppearState: g } = s.current;
      if (h) {
        s.current.scheduledAppearState = d;
        return;
      }
      (s.current.scheduledAppearState = void 0),
        (s.current.lastAppearState = d),
        g !== d && l(d ? r.animate : r.exit, d);
    },
    { enabled: u, animateOnce: !!e.animateOnce, threshold: { y: e.threshold } }
  );
  let f = e.targets && i && !e.scrollDirection;
  return (
    S.useEffect(() => {
      if (!f) return;
      let d = { initial: !0 },
        h = "initial";
      return ei(({ y: g }) => {
        let { targets: y } = e;
        if (!y || !y[0] || (y[0].ref && !y[0].ref.current)) return;
        let { inputRange: x, outputRange: p } = jA(
          y,
          (e.threshold ?? 0) * g.containerLength,
          !!e.exit
        );
        if (x.length === 0 || x.length !== p.length) return;
        let m = Hi(g.current, x, p);
        if ((e.animateOnce && d[m]) || ((d[m] = !0), h === m)) return;
        h = m;
        let v = _e(r)[m];
        v && l(v);
      });
    }, [f]),
    Pw(e.scrollDirection, (d) => l(d ?? r.animate), {
      enabled: i,
      repeat: !e.animateOnce,
    }),
    o
  );
}
var GA = new Set([
    "transformViewportThreshold",
    "styleTransformEffectEnabled",
    "transformTargets",
    "spring",
    "transformTrigger",
  ]),
  YA = (e, t) => {
    var n;
    let r = (n = e?.[0]) == null ? void 0 : n.target;
    return t ? { opacity: r?.opacity ?? 1 } : r;
  },
  Iw = () => ({
    opacity: [],
    x: [],
    y: [],
    scale: [],
    rotate: [],
    rotateX: [],
    rotateY: [],
    skewX: [],
    skewY: [],
    transformPerspective: [],
  });
function KA(e, t) {
  let n = S.useRef({});
  S.useEffect(() => {
    if (t !== void 0)
      for (let r of Ci(e)) {
        let i = e[r];
        i.attach((o, s) => {
          let a = n.current[r];
          if (
            (a && a.stop(),
            (n.current[r] = Zr({
              keyframes: [i.get(), o],
              velocity: i.getVelocity(),
              ...t,
              restDelta: 0.001,
              onUpdate: s,
            })),
            !Ie.isProcessing)
          ) {
            let l = performance.now() - Ie.timestamp;
            l < 40 && (n.current[r].time = l / 1e3);
          }
          return i.get();
        });
      }
  }, [JSON.stringify(t)]);
}
function qA(e, t) {
  let n = Iw();
  return {
    inputRange: Yp(e, t, (i) => {
      var o, s, a;
      let l = (o = e[i - 1]) == null ? void 0 : o.target,
        c = (s = e[i]) == null ? void 0 : s.target;
      for (let u of On)
        (a = n[u]) == null || a.unshift(l?.[u] ?? 0, c?.[u] ?? 0);
    }),
    effectKeyOutputRange: n,
  };
}
function QA(e) {
  var t;
  let n = Iw();
  for (let { target: r } of e)
    for (let i of On) (t = n[i]) == null || t.push(r[i]);
  return n;
}
var H1 = [0, 1];
function ZA(
  {
    transformTrigger: e,
    styleTransformEffectEnabled: t,
    transformTargets: n,
    spring: r,
    transformViewportThreshold: i = 0,
  },
  o
) {
  let s = ti(),
    a = Rw(YA(n, s), t);
  return (
    S.useLayoutEffect(() => {
      if (!(!t || !n))
        if (e !== "onScrollTarget") {
          let l = QA(n);
          return ei(
            ({ y: c }) => {
              for (let u of On)
                (s && u !== "opacity") ||
                  (H1.length === l[u].length &&
                    a.values[u].set(Hi(c.progress, H1, l[u])));
            },
            e === "onInView"
              ? {
                  target: o.current ?? void 0,
                  offset: ["start end", "end end"],
                }
              : void 0
          );
        } else
          return ei(({ y: l }) => {
            if (!n[0] || (n[0].ref && !n[0].ref.current)) return;
            let { inputRange: c, effectKeyOutputRange: u } = qA(
              n,
              i * l.containerLength
            );
            if (c.length !== 0)
              for (let f of On)
                (s && f !== "opacity") ||
                  (c.length === u[f].length &&
                    a.values[f].set(Hi(l.current, c, u[f])));
          });
    }, [s, e, o, i, t, a, n]),
    KA(a.values, r),
    a
  );
}
var Fw = {
    parallax: MA,
    styleAppear: $A,
    styleTransform: GA,
    loop: IA,
    presence: DA,
  },
  JA = Ci(Fw);
function z1(e, t, n) {
  return (!(e in n) && t in n) || n[e] === !0;
}
function eD(e) {
  let t = {
    parallax: {},
    styleAppear: {},
    styleTransform: {},
    presence: { animate: e.animate, initial: e.initial, exit: e.exit },
    loop: {},
    forwardedProps: {},
  };
  for (let n in e) {
    let r = Ew(n);
    if (r)
      for (let i of JA) {
        let o = Fw[i];
        if (o?.has(r)) {
          t[i][r] = _e(e)[n];
          break;
        }
      }
    else t.forwardedProps[n] = _e(e)[n];
  }
  return (
    (t.parallax.parallaxTransformEnabled = z1(
      "parallaxTransformEnabled",
      "speed",
      t.parallax
    )),
    (t.styleAppear.styleAppearEffectEnabled = z1(
      "styleAppearEffectEnabled",
      "animateOnce",
      t.styleAppear
    )),
    t
  );
}
var Dr = (e) => e.reduce((t, n) => (t += n), 0),
  N1 = (e) => e.reduce((t, n) => (t = t * n), 1),
  tD = "current";
function nD(e) {
  return De(e) && tD in e;
}
function rD(e, t) {
  if (!e || !De(e)) return t;
  for (let n in e) {
    let r = e[n];
    !Se(r) || !iD(n) || (ce(r.get()) && t[n].push(r));
  }
}
function Xs(e) {
  return ne(e) || Array.isArray(e);
}
function iD(e) {
  return e in He;
}
var d6 = (e) =>
  S.forwardRef((t, n) => {
    if (t.__withFX)
      return T(e, {
        ...t,
        animate: void 0,
        initial: void 0,
        exit: void 0,
        ref: n,
      });
    if (Ee.current() === "CANVAS") {
      let Y = Xs(t.animate) ? t.animate : void 0,
        J = Xs(t.initial) ? t.initial : void 0;
      return T(e, { ...t, animate: Y, initial: J, exit: void 0, ref: n });
    }
    let r = S.useRef(null),
      i = n ?? r,
      {
        parallax: o = {},
        styleAppear: s = {},
        styleTransform: a = {},
        presence: l = {},
        loop: c = {},
        forwardedProps: u,
      } = eD(t),
      {
        __targetOpacity: f,
        __perspectiveFX: d,
        __smartComponentFX: h = !1,
      } = t,
      g = wn(f ?? 1),
      { values: y } = VA(l, i, h, t[Ua]),
      { values: x, style: p } = OA(o, i),
      { values: m } = ZA(a, i),
      { values: v } = XA(s, i),
      { values: b } = LA(c),
      C = S.useMemo(
        () => ({
          scale: [v.scale, b.scale, y.scale, m.scale],
          opacity: [v.opacity, b.opacity, y.opacity, g, m.opacity],
          x: [v.x, b.x, y.x, m.x],
          y: [v.y, b.y, x.y, y.y, m.y],
          rotate: [v.rotate, b.rotate, y.rotate, m.rotate],
          rotateX: [v.rotateX, b.rotateX, y.rotateX, m.rotateX],
          rotateY: [v.rotateY, b.rotateY, y.rotateY, m.rotateY],
          skewX: [v.skewX, b.skewX, y.skewX, m.skewX],
          skewY: [v.skewY, b.skewY, y.skewY, m.skewY],
          transformPerspective: [
            m.transformPerspective,
            v.transformPerspective,
          ],
        }),
        [g, m, x, v, b, y]
      );
    rD(t.style, C);
    let w = dt(C.scale, N1),
      k = dt(C.opacity, N1),
      E = dt(C.x, Dr),
      P = dt(C.y, Dr),
      I = dt(C.rotate, Dr),
      H = dt(C.rotateX, Dr),
      _ = dt(C.rotateY, Dr),
      Z = dt(C.skewX, Dr),
      N = dt(C.skewY, Dr),
      ee = dt(C.transformPerspective, Dr),
      { drag: G, dragConstraints: z } = u;
    HM(G && nD(z) ? z : void 0);
    let j = {
      opacity: k,
      scale: w,
      x: E,
      y: P,
      rotate: I,
      rotateX: H,
      rotateY: _,
      skewX: Z,
      skewY: N,
    };
    bt(d) && (j.transformPerspective = ee);
    let D = Xs(t.animate) ? t.animate : void 0,
      Q = Xs(t.initial) ? t.initial : void 0,
      V = Xs(t.exit) ? t.exit : void 0,
      te = h && !l.presenceInitial ? { initial: Q, animate: D, exit: V } : {};
    return T(e, {
      ...u,
      ...te,
      __withFX: !0,
      style: { ...t.style, ...p, ...j },
      values: y,
      ref: i,
    });
  });
var oD = be({});
function m6({ presets: e, children: t }) {
  let n = A(e);
  return (
    Me(e, n.current, !1) || (n.current = e),
    T(oD.Provider, { value: n.current, children: t })
  );
}
function du(e) {
  let t = on(() => sD(e));
  return t.useSetup(e), t.cloneAsElement;
}
function sD(e) {
  let t = { forwardedRef: e, childRef: null, ref: null };
  t.ref = $1(t);
  let n = (s, a) => {
      if (!t.forwardedRef && t.forwardedRef === s) {
        t.ref = a;
        return;
      }
      let l = !1;
      t.childRef !== a && ((t.childRef = a), (l = !0)),
        t.forwardedRef !== s && ((t.forwardedRef = s), (l = !0)),
        l && (t.ref = $1(t));
    },
    r = !1;
  function i(s, a) {
    if (r)
      throw new ReferenceError(
        "useCloneChildrenWithPropsAndRef: You should not call cloneChildrenWithPropsAndRef more than once during the render cycle."
      );
    return (
      (r = !0),
      Bn.count(s) > 1 && e && ((t.forwardedRef = void 0), (t.ref = t.childRef)),
      Bn.map(s, (l) => {
        if (Hn(l)) {
          let c = "ref" in l ? l.ref : void 0;
          n(t.forwardedRef, c);
          let u = t.ref !== c ? { ...a, ref: t.ref } : a;
          return gn(l, u);
        }
        return l;
      })
    );
  }
  let o = function (a, l) {
    return T(ze, { children: i(a, l) });
  };
  return (
    (o.cloneAsArray = i),
    {
      useSetup: (s) => {
        (r = !1), n(s, t.childRef);
      },
      cloneAsElement: o,
    }
  );
}
function $1(e) {
  if (!e.forwardedRef) return e.childRef;
  let { forwardedRef: t, childRef: n } = e;
  return (r) => {
    W1(n, r), W1(t, r);
  };
}
function W1(e, t) {
  ra(e) ? e(t) : aD(e) && (e.current = t);
}
function aD(e) {
  return De(e) && "current" in e;
}
var Lw = S.createContext({});
function b6() {
  return S.useContext(Lw);
}
var x6 = S.forwardRef(({ width: e, children: t, ...n }, r) => {
    let i = S.useMemo(() => ({ width: e }), [e]),
      o = du(r);
    return T(Lw.Provider, { value: i, children: o(t, n) });
  }),
  lD = (e) =>
    S.forwardRef((t, n) => {
      let r = xa(t);
      return T(e, {
        layoutId: r,
        ...t,
        layoutIdKey: void 0,
        duplicatedFrom: void 0,
        ref: n,
      });
    }),
  cD = S.forwardRef(({ children: e, layoutId: t, ...n }, r) => {
    let i = on(() => (t ? `${t}-container` : void 0));
    return T(_t.div, {
      layoutId: i,
      ...n,
      ref: r,
      children: T(Po.Provider, {
        value: !0,
        children: T(yL, {
          enabled: !1,
          children: T(ly, {
            id: t ?? "",
            inherit: "id",
            children: S.Children.map(e, (o) =>
              S.isValidElement(o) ? S.cloneElement(o, { layoutId: t }) : o
            ),
          }),
        }),
      }),
    });
  }),
  T6 = lD(cD),
  uD = S.createContext(void 0);
if (Vn())
  for (let e of document.querySelectorAll("style[data-framer-css-ssr]"))
    document.head.appendChild(e);
var fD = (() => {
    var e;
    if (!Vn()) return new Set();
    let t =
      (e = document.querySelector("style[data-framer-css-ssr-minified]")) ==
      null
        ? void 0
        : e.getAttribute("data-framer-components");
    return t ? new Set(t.split(" ")) : new Set();
  })(),
  _w = { "data-framer-css-ssr": !0 },
  dD = (e, t, n) =>
    S.forwardRef((r, i) => {
      let { sheet: o, cache: s } = S.useContext(uD) ?? {};
      if (!Vn()) {
        let a = Array.isArray(t)
          ? t.join(`
`)
          : t;
        return se(ze, {
          children: [
            T("style", {
              ..._w,
              "data-framer-component": n,
              dangerouslySetInnerHTML: { __html: a },
            }),
            T(e, { ...r, ref: i }),
          ],
        });
      }
      return (
        S.useInsertionEffect(() => {
          if (n && fD.has(n)) return;
          (Array.isArray(t)
            ? t
            : t.split(`
`)
          ).forEach((l) => l && BS(l, o, s));
        }, []),
        T(e, { ...r, ref: i })
      );
    }),
  Kp = S.createContext({
    onRegisterCursors: () => () => {},
    registerCursors: () => {},
  }),
  Zc = "framer-cursor-none",
  kp = "framer-pointer-events-none",
  hD = S.memo(function ({ children: t }) {
    let n = on(() => {
        let i = new Set(),
          o = {};
        return {
          onRegisterCursors: (s) => (s(o), i.add(s), () => i.delete(s)),
          registerCursors: (s) => {
            let a = {};
            for (let l in s) {
              let c = o[l] ?? s[l];
              c && (a[l] = c);
            }
            o = a;
            for (let l of i) l(o);
          },
        };
      }),
      r = ti();
    return se(Kp.Provider, { value: n, children: [t, !r && T(bD, {})] });
  }),
  pD = dD(hD, [
    `.${Zc}, .${Zc} * { cursor: none !important; }`,
    `.${kp}, .${kp} * { pointer-events: none !important; }`,
  ]),
  mD = {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 12 + 1,
    pointerEvents: "none",
  };
function vD(e) {
  return !(!e || e.placement || e.alignment);
}
function Ac(e) {
  switch (e) {
    case "start":
      return "0%";
    case "center":
      return "-50%";
    case "end":
      return "-100%";
    default:
      Wt(e);
  }
}
function gD(e, t = "center") {
  switch (e) {
    case "top":
      return `${Ac(t)}, -100%`;
    case "right":
      return `0%, ${Ac(t)}`;
    case "bottom":
      return `${Ac(t)}, 0%`;
    case "left":
      return `-100%, ${Ac(t)}`;
    default:
      return "-50%, -50%";
  }
}
var j1 = "data-framer-portal-id";
function U1(e, t) {
  let n = document.elementFromPoint(e, t);
  for (; n; ) {
    if (n === document.body) return;
    let r = n.getAttribute("data-framer-cursor");
    if (r) return r;
    if (n.hasAttribute(j1)) {
      let i = n.getAttribute(j1);
      (n = n.parentElement), i && (n = document.getElementById(i) ?? n);
    } else n = n.parentElement;
  }
}
function yD(e) {
  for (let t in e) return !1;
  return !0;
}
var bD = S.memo(function () {
  let { onRegisterCursors: t } = M(Kp),
    n = wn(0),
    r = wn(0),
    i = wn(0),
    o = S.useRef(null),
    s = S.useRef({ cursors: {}, cursorHash: void 0 }),
    a = cu(),
    l = !yD(s.current.cursors);
  S.useEffect(() => {
    let w = 0,
      k = 0;
    function E() {
      n.set(w), r.set(k), zi(i, 1, { type: "tween", duration: 0.2 });
    }
    function P(_) {
      _.pointerType !== "touch" &&
        ((w = _.clientX), (k = _.clientY), K.update(E));
    }
    let I = () => {
      if (!l) return;
      let _ = U1(w, k);
      _ !== s.current.cursorHash &&
        ((s.current.cursorHash = _), K.update(() => a()));
    };
    K.read(I, !0);
    function H(_) {
      if (_.target === o.current || !o.current) return;
      let Z = new PointerEvent(_.type, {
        bubbles: !0,
        cancelable: _.cancelable,
        pointerType: _.pointerType,
        pointerId: _.pointerId,
        composed: _.composed,
        isPrimary: _.isPrimary,
        buttons: _.buttons,
        button: _.button,
      });
      K.update(() => {
        var N;
        (N = o.current) == null || N.dispatchEvent(Z);
      });
    }
    return (
      $t.addEventListener("pointermove", P),
      document.addEventListener("pointerdown", H),
      document.addEventListener("pointerup", H),
      () => {
        $t.removeEventListener("pointermove", P),
          document.removeEventListener("pointerdown", H),
          document.removeEventListener("pointerup", H),
          tt(I);
      }
    );
  }, [i, n, r, l, a]),
    S.useEffect(() => {
      function w() {
        zi(i, 0, { type: "tween", duration: 0.2 });
      }
      return (
        document.addEventListener("mouseleave", w),
        $t.addEventListener("blur", w),
        () => {
          document.removeEventListener("mouseleave", w),
            $t.removeEventListener("blur", w);
        }
      );
    }, [i]),
    S.useLayoutEffect(() => {
      function w(E) {
        (s.current.cursors = E),
          (s.current.cursorHash = U1(n.get(), r.get())),
          a();
      }
      let k = t(w);
      return () => {
        k(), document.body.classList.toggle(Zc, !1);
      };
    }, [n, r, t, a]);
  let { cursors: c, cursorHash: u } = s.current,
    f = u ? c[u] : null,
    d = vD(f);
  S.useLayoutEffect(() => {
    document.body.classList.toggle(Zc, d);
  }, [d]);
  let h = f?.component,
    g = f?.transition ?? { duration: 0 },
    y = Af(n, g),
    x = Af(r, g),
    p = dt(() => {
      var w;
      return y.get() + (((w = f?.offset) == null ? void 0 : w.x) ?? 0);
    }),
    m = dt(() => {
      var w;
      return x.get() + (((w = f?.offset) == null ? void 0 : w.y) ?? 0);
    }),
    v = f?.alignment,
    b = f?.placement,
    C = S.useCallback((w, k) => `translate(${gD(b, v)}) ${k}`, [v, b]);
  return !f || !h
    ? null
    : T(h, {
        transformTemplate: C,
        style: { ...mD, x: p, y: m, opacity: i },
        globalTapTarget: !0,
        variant: f?.variant,
        ref: o,
        className: kp,
      });
});
function L6(e) {
  let { registerCursors: t } = M(Kp),
    n = on(() => e);
  S.useLayoutEffect(() => {
    t(n);
  }, [n, t]);
}
var xD = S.createContext(void 0),
  wa = class {
    constructor(e) {
      (this.resolver = e), R(this, "status");
    }
    static is(e) {
      return e instanceof wa;
    }
    preload() {
      if (this.status) {
        let t = this.status;
        return t.type !== "pending" ? void 0 : t.promise;
      }
      let e = this.resolver().then(
        (t) => {
          this.status = { type: "fulfilled", value: t };
        },
        (t) => {
          this.status = { type: "rejected", error: t };
        }
      );
      return (this.status = { type: "pending", promise: e }), e;
    }
    read() {
      let e = this.status;
      if (!e) throw new Error("Need to call preload() before read()");
      switch (e.type) {
        case "pending":
          throw new Error("Need to wait for preload() to resolve");
        case "fulfilled":
          return e.value;
        case "rejected":
          throw e.error;
        default:
          Wt(e);
      }
    }
  };
function qp(e, t) {
  return e instanceof HTMLAnchorElement
    ? e
    : e instanceof Element
    ? e === t
      ? null
      : qp(e.parentElement, t)
    : null;
}
var X1 = "element",
  SD = "collection",
  wD = "collectionItemId",
  CD = "pathVariables",
  Mw = "framer/page-link,";
function Ow(e) {
  return ne(e) && e.startsWith(`data:${Mw}`);
}
function Qp(e) {
  if (Ow(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(Mw.length),
        r = t.searchParams,
        i = r.has(X1) ? r.get(X1) : void 0,
        o,
        s = r.get(SD),
        a = r.get(wD),
        l = r.get(CD);
      if (s && a && l) {
        let c = Object.fromEntries(new URLSearchParams(l).entries());
        o = { collection: s, collectionItemId: a, pathVariables: c };
      }
      return {
        target: n === "none" ? null : n,
        element: i === "none" ? void 0 : i,
        collectionItem: o,
      };
    } catch {
      return;
    }
}
function kD(e, t, n) {
  var r;
  let i = t.getAttribute("data-framer-page-link-target"),
    o,
    s;
  if (i) {
    o = t.getAttribute("data-framer-page-link-element") ?? void 0;
    let l = t.getAttribute("data-framer-page-link-path-variables");
    l && (s = Object.fromEntries(new URLSearchParams(l).entries()));
  } else {
    let l = t.getAttribute("href");
    if (!l) return !1;
    let c = Qp(l);
    if (!c || !c.target) return !1;
    (i = c.target),
      (o = c.element ?? void 0),
      (s = (r = c.collectionItem) == null ? void 0 : r.pathVariables);
  }
  let a = o ? t.dataset.framerSmoothScroll !== void 0 : void 0;
  return e(i, o, Object.assign({}, n, s), a), !0;
}
var fp = {},
  Dc = new WeakMap();
function Aw(e, t, n) {
  var r, i;
  let o =
    (i = (r = Dc?.get(n ?? fp)) == null ? void 0 : r.get(e.collectionId)) ==
    null
      ? void 0
      : i.get(e.collectionItemId);
  if (o) return o;
  let s = Dc.get(n ?? fp) ?? new Map();
  Dc.set(n ?? fp, s);
  let a = s.get(e.collectionId) ?? new Map();
  s.set(e.collectionId, a);
  let l = new wa(async () => {
    try {
      let c = t[e.collectionId];
      if (!c)
        throw new Error(
          `Key not found in collection utils for collection id: "${e.collectionId}`
        );
      let u = await c();
      if (!u) throw new Error("Collection does not contain utility functions");
      return await u.getSlugByRecordId(e.collectionItemId, n ?? void 0);
    } catch (c) {
      console.warn(
        `Failed to resolve slug: ${
          c instanceof Error ? c.message : "Unknown error"
        }`
      );
      return;
    }
  });
  return a.set(e.collectionItemId, l), l;
}
var TD = "webPageId";
function Tp(e) {
  return !!(e && typeof e == "object" && TD in e);
}
function ED(e) {
  if (!e) return;
  let t = {};
  for (let n in e.pathVariables) {
    let r = e.pathVariables[n];
    r && (t[n] = r);
  }
  return t;
}
function Zp(e) {
  if (!Ow(e)) return e;
  let t = Qp(e);
  if (!t) return;
  let { target: n, element: r, collectionItem: i } = t;
  if (n) return { webPageId: n, hash: r ?? void 0, pathVariables: ED(i) };
}
var Dw = /:([a-z]\w*)/gi,
  RD = S.createContext(void 0);
function Vw() {
  var e;
  let t = S.useContext(RD),
    n = (e = va()) == null ? void 0 : e.pathVariables;
  return t || n;
}
function Bw(e, { webPageId: t, hash: n, pathVariables: r }, i) {
  if (t !== e.id || n) return !1;
  if (e.path && e.pathVariables) {
    let o = Object.assign({}, i, r);
    for (let [, s] of e.path.matchAll(Dw))
      if (!s || e.pathVariables[s] !== o[s]) return !1;
  }
  return !0;
}
function Hw(e) {
  return e === void 0
    ? !1
    : !!(e.startsWith("#") || e.startsWith("/") || e.startsWith("."));
}
function PD(e, t) {
  try {
    return !!new URL(e).protocol;
  } catch {}
  return t;
}
function Jp(e, t) {
  return e !== void 0 ? (e ? "_blank" : void 0) : t ? void 0 : "_blank";
}
function Ep(e, t = void 0) {
  let n = Hw(e),
    r = Jp(t, n);
  return {
    href: PD(e, n) ? e : `https://${e}`,
    target: r,
    rel: n ? void 0 : "noopener",
  };
}
function zw(e, t, n, r, i) {
  return async (o) => {
    var s, a;
    if (o.metaKey) return;
    let l = qp(o.target);
    if (!l || l.getAttribute("target") === "_blank") return;
    o.preventDefault();
    let c = (s = e.getRoute) == null ? void 0 : s.call(e, t);
    c && CS(c?.page) && (await c.page.preload()),
      (a = e.navigate) == null || a.call(e, t, n, r, i);
  };
}
function ID(e, t, n, r, i, o) {
  let s = Hw(e);
  if (!n.routes || !n.getRoute || !r || !s) return Ep(e, t);
  try {
    let [a, l] = e.split("#", 2);
    ae(a !== void 0, "A href must have a defined pathname.");
    let [c] = a.split("?", 2);
    ae(c !== void 0, "A href must have a defined pathname.");
    let { routeId: u, pathVariables: f } = z2(n.routes, c),
      d = n.getRoute(u);
    if (d) {
      Op(d.page);
      let h = Object.assign({}, i, f),
        g = iu(d, {
          currentRoutePath: r.path,
          currentPathVariables: r.pathVariables,
          hash: l || void 0,
          pathVariables: h,
          preserveQueryParams: n.preserveQueryParams,
        }),
        y = Jp(t, !0);
      return { href: g, target: y, onClick: zw(n, u, l || void 0, h, o) };
    }
  } catch {}
  return Ep(e, t);
}
function FD(e, t, n, r) {
  let i = [];
  function o(a) {
    if (!a || !n) return;
    let l = {};
    for (let c in a) {
      let u = a[c];
      ae(u, "unresolvedSlug should be defined");
      let f = Aw(u, n, r),
        d = f.preload();
      if (d) i.push(d);
      else {
        let h = f.read();
        h && (l[c] = h);
      }
    }
    return l;
  }
  let s = { path: o(e), hash: o(t) };
  if (i.length) throw Promise.allSettled(i);
  return s;
}
var V6 = S.forwardRef(
  ({ children: e, href: t, openInNewTab: n, smoothScroll: r, ...i }, o) => {
    let s = Ro(),
      a = va(),
      l = Vw(),
      { activeLocale: c } = ou(),
      u = du(o),
      f = S.useMemo(() => {
        var d;
        if (!t) return {};
        let h = Tp(t) ? t : Zp(t);
        if (!h) return {};
        if (ne(h)) return ID(h, n, s, a, l, r);
        let {
            webPageId: g,
            hash: y,
            pathVariables: x,
            hashVariables: p,
            unresolvedHashSlugs: m,
            unresolvedPathSlugs: v,
          } = h,
          b = (d = s.getRoute) == null ? void 0 : d.call(s, g),
          C = FD(v, m, s.collectionUtils, c);
        b && Op(b.page);
        let w = Object.assign({}, l, x, C?.path),
          k = Object.assign({}, l, p, C?.hash),
          E = Jp(n, !0),
          P = iu(b, {
            currentRoutePath: a?.path,
            currentPathVariables: a?.pathVariables,
            hash: y,
            pathVariables: w,
            hashVariables: k,
            preserveQueryParams: s.preserveQueryParams,
          }),
          I = P.split("#", 2)[1];
        return {
          href: P,
          target: E,
          onClick: zw(s, g, I, w, r),
          "data-framer-page-link-current": (a && Bw(a, h, l)) || void 0,
        };
      }, [t, s, c, l, n, a, r]);
    return u(e, { ...i, ...f });
  }
);
function B6(e, t, n) {
  return Nw(e, t, n);
}
function Nw(e, t, n, r) {
  let i = Tp(e) ? e : Zp(e);
  if (!Tp(i)) return ne(e) ? Ep(e).href : void 0;
  if (!t.getRoute || !t.currentRouteId) return;
  let o = t.getRoute(t.currentRouteId),
    {
      webPageId: s,
      hash: a,
      pathVariables: l,
      hashVariables: c,
      unresolvedHashSlugs: u,
      unresolvedPathSlugs: f,
    } = i,
    d = t.getRoute(s),
    h = f || u ? r?.(f, u) : void 0,
    g = Object.assign({}, t.currentPathVariables, n, l, h?.path),
    y = Object.assign({}, t.currentPathVariables, n, c, h?.hash);
  return iu(d, {
    currentRoutePath: o?.path,
    currentPathVariables: t.currentPathVariables,
    hash: a,
    pathVariables: g,
    hashVariables: y,
    relative: !1,
    preserveQueryParams: t.preserveQueryParams,
  });
}
function N6({
  RootComponent: e,
  isWebsite: t,
  routeId: n,
  pathVariables: r,
  routes: i,
  collectionUtils: o,
  notFoundPage: s,
  isReducedMotion: a = !1,
  includeDataObserver: l = !1,
  localeId: c,
  locales: u,
  preserveQueryParams: f,
  enableSuspenseThatPreservesDom: d,
  shouldMarkHydrationEnd: h = !1,
}) {
  if (
    (S.useLayoutEffect(() => {
      h &&
        (performance.mark("framer-hydration-end"),
        performance.measure(
          "framer-hydration",
          "framer-hydration-start",
          "framer-hydration-end"
        ));
    }, []),
    S.useEffect(() => {
      t || AS.start();
    }, []),
    t)
  )
    return T(oy, {
      reducedMotion: a ? "user" : "never",
      children: T(pD, {
        children: T(V2, {
          initialRoute: n,
          initialPathVariables: r,
          initialLocaleId: c,
          routes: i,
          collectionUtils: o,
          notFoundPage: s,
          locales: u,
          defaultPageStyle: { minHeight: "100vh", width: "auto" },
          preserveQueryParams: f,
          enableSuspenseThatPreservesDom: d,
        }),
      }),
    });
  {
    let g = l ? EA : S.Fragment;
    return T(g, {
      children: T(R2, {
        routes: i,
        children: T(SA, {
          children: S.isValidElement(e) ? e : S.createElement(e, { key: n }),
        }),
      }),
    });
  }
}
function dp(e, t, n) {
  let r = Bn.map(e, (i) => (Hn(i) ? gn(i, t) : i));
  return n ? r : T(ze, { children: r });
}
var $w = S.createContext(void 0),
  G1 = "ssr-variant";
function LD(e, t, n, r, i, o, s) {
  if (Vn()) throw new Error("This should not be called on the client");
  let a = S.Children.toArray(t),
    l = a[0];
  if (a.length !== 1 || !S.isValidElement(l))
    return (
      console.warn(s + ": expected exactly one React element for a child", t),
      dp(t, n)
    );
  let c = [],
    u = [];
  for (let [g] of Object.entries(r)) {
    if (g === i) continue;
    let y = e[g];
    if (!y || !MD(l.props, y)) {
      u.push(g);
      continue;
    }
    let x = Y1([g], o);
    x.length && c.push({ variants: x, propOverrides: y });
  }
  if (c.length === 0) return dp(l, n);
  let f = [i, ...u],
    d = Y1(f, o);
  d.length && c.unshift({ variants: d });
  let h = `.${G1} { display: contents }`;
  return se(ze, {
    children: [
      !o && T("style", { ..._w, children: h }),
      c.map(({ variants: g, propOverrides: y }) => {
        let x = g.join("+"),
          p = T(
            $w.Provider,
            { value: new Set(g), children: dp(l, { ...n, ...y }) },
            x
          ),
          m = _D(g, o, r);
        return (
          m.length
            ? (ae(
                c.length > 1,
                "Must branch out when there are hiddenClassNames"
              ),
              (p = T(
                "div",
                { className: `${G1} ${m.join(" ")}`, children: p },
                x
              )))
            : ae(
                c.length === 1,
                "Cannot branch out when hiddenClassNames is empty"
              ),
          p
        );
      }),
    ],
  });
}
function _D(e, t, n) {
  let r = [];
  for (let [i, o] of Object.entries(n)) {
    let s = t && !t.has(i);
    if (e.includes(i) || s) continue;
    let a = o.split("-")[2];
    r.push(`hidden-${a}`);
  }
  return r;
}
function Y1(e, t) {
  return t ? e.filter((n) => t.has(n)) : e;
}
function MD(e, t) {
  for (let n of Object.keys(t)) if (!Me(e[n], t[n], !0)) return !0;
  return !1;
}
function OD(e, t, n) {
  return !n || !e ? t : { ...t, ...n[e] };
}
var U6 = S.forwardRef(function (
    { breakpoint: t, overrides: n, children: r, ...i },
    o
  ) {
    let s = du(o);
    if (Vn()) return s(r, OD(t, i, n));
    let a = S.useContext(xD);
    if (!a)
      return (
        console.warn("PropertyOverrides is missing GeneratedComponentContext"),
        s(r, i)
      );
    let { primaryVariantId: l, variantClassNames: c } = a,
      u = S.useContext($w);
    return LD(n, r, i, c, l, u, "PropertyOverrides");
  }),
  X6 = We(function ({ links: t, children: n, ...r }, i) {
    let o = Ro(),
      { activeLocale: s } = ou(),
      a = du(i),
      l = [],
      c = t.map((f) =>
        Nw(f.href, o, f.implicitPathVariables, (d, h) => {
          function g(y) {
            let x = {};
            for (let p in y) {
              let m = y[p];
              ae(o.collectionUtils, "collectionUtils should be defined"),
                ae(m, "unresolvedSlug be defined");
              let v = Aw(m, o.collectionUtils, s),
                b = v.preload();
              if (b) l.push(b);
              else {
                let C = v.read();
                C && (x[p] = C);
              }
            }
            return x;
          }
          return { path: g(d), hash: g(h) };
        })
      );
    if (l.length > 0) throw Promise.allSettled(l);
    let u = n(c);
    return a(u, r);
  });
var AD = Gt(WF(), 1);
function DD(e) {
  return {
    trace(...t) {
      var n;
      return (n = Ye.getLogger(e)) == null ? void 0 : n.trace(...t);
    },
    debug(...t) {
      var n;
      return (n = Ye.getLogger(e)) == null ? void 0 : n.debug(...t);
    },
    info(...t) {
      var n;
      return (n = Ye.getLogger(e)) == null ? void 0 : n.info(...t);
    },
    warn(...t) {
      var n;
      return (n = Ye.getLogger(e)) == null ? void 0 : n.warn(...t);
    },
    error(...t) {
      var n;
      return (n = Ye.getLogger(e)) == null ? void 0 : n.error(...t);
    },
  };
}
function VD(e) {
  return su(e) && e.every(De);
}
function BD(e) {
  return De(e) && ra(e.read) && ra(e.preload);
}
function hu(e) {
  return De(e) && De(e.collectionByLocaleId);
}
var rn = {
  equal(e, t, n) {
    return e?.type !== t?.type ? !1 : Gs(e, t, n) === 0;
  },
  lessThan(e, t, n) {
    return e?.type !== t?.type ? !1 : Gs(e, t, n) < 0;
  },
  lessThanOrEqual(e, t, n) {
    return e?.type !== t?.type ? !1 : Gs(e, t, n) <= 0;
  },
  greaterThan(e, t, n) {
    return e?.type !== t?.type ? !1 : Gs(e, t, n) > 0;
  },
  greaterThanOrEqual(e, t, n) {
    return e?.type !== t?.type ? !1 : Gs(e, t, n) >= 0;
  },
  stringify(e) {
    if (e === null) return "null";
    switch (e.type) {
      case "boolean":
      case "number":
        return String(e.value);
      case "string":
        return `'${e.value}'`;
      case "enum":
        return `'${e.value}' /* Enum */`;
      case "color":
        return `'${e.value}' /* Color */`;
      case "date":
        return `'${e.value}' /* Date */`;
      case "richtext":
        return "RichText";
      case "responsiveimage":
        return "ResponsiveImage";
      case "file":
        return "File";
      case "link":
        return ne(e.value) ? `'${e.value}' /* Link */` : "Link";
      default:
        Wt(e);
    }
  },
};
function Gs(e, t, n) {
  if (Le(e) || Le(t)) return ae(e === t), 0;
  switch (e.type) {
    case "boolean":
      return (
        ae(e.type === t.type),
        e.value < t.value ? -1 : e.value > t.value ? 1 : 0
      );
    case "color":
      return (
        ae(e.type === t.type),
        e.value < t.value ? -1 : e.value > t.value ? 1 : 0
      );
    case "date": {
      ae(e.type === t.type);
      let r = new Date(e.value),
        i = new Date(t.value);
      return r < i ? -1 : r > i ? 1 : 0;
    }
    case "enum":
      return (
        ae(e.type === t.type),
        e.value < t.value ? -1 : e.value > t.value ? 1 : 0
      );
    case "file":
      return (
        ae(e.type === t.type),
        e.value < t.value ? -1 : e.value > t.value ? 1 : 0
      );
    case "responsiveimage": {
      ae(e.type === t.type);
      let r = JSON.stringify(e.value),
        i = JSON.stringify(t.value);
      return r < i ? -1 : r > i ? 1 : 0;
    }
    case "link": {
      ae(e.type === t.type);
      let r = JSON.stringify(e.value),
        i = JSON.stringify(t.value);
      return r < i ? -1 : r > i ? 1 : 0;
    }
    case "number":
      return (
        ae(e.type === t.type),
        e.value < t.value ? -1 : e.value > t.value ? 1 : 0
      );
    case "richtext": {
      ae(e.type === t.type);
      let r = e.value,
        i = t.value;
      return r < i ? -1 : r > i ? 1 : 0;
    }
    case "string": {
      ae(e.type === t.type);
      let r = e.value,
        i = t.value;
      return (
        n.type === 0 &&
          ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
        r < i ? -1 : r > i ? 1 : 0
      );
    }
    default:
      Wt(e);
  }
}
var Rp = "index",
  vt = class {
    static from(e, t) {
      return Mn(e, t, void 0);
    }
  },
  Je = class extends vt {
    constructor(e, t) {
      super(),
        (this.schema = e),
        (this.name = t),
        R(this, "definition"),
        t === Rp
          ? (this.definition = { type: "number", isNullable: !1 })
          : (this.definition = e[t] ?? null);
    }
    stringify() {
      return this.name;
    }
    equals(e) {
      return (
        e instanceof Je &&
        Me(this.definition, e.definition) &&
        Me(e.name, this.name)
      );
    }
    evaluate(e) {
      let t = this.name;
      if (bt(e) || t === Rp) throw new Error(`Can't evaluate identifier: ${t}`);
      return e.data[t] ?? null;
    }
    canEvaluate() {
      return !1;
    }
  },
  Te = class extends vt {
    constructor(e, t) {
      super(), (this.definition = e), (this.value = t);
    }
    stringify() {
      return rn.stringify(this.value);
    }
    static fromNull() {
      return new Te(null, null);
    }
    static fromBoolean(e) {
      return new Te(
        { type: "boolean", isNullable: Le(e) },
        Le(e) ? null : { type: "boolean", value: e }
      );
    }
    static fromDate(e) {
      return new Te(
        { type: "date", isNullable: Le(e) },
        Le(e) ? null : { type: "date", value: e.toISOString() }
      );
    }
    static fromEnum(e) {
      return new Te(
        { type: "enum", isNullable: Le(e) },
        Le(e) ? null : { type: "enum", value: e }
      );
    }
    static fromNumber(e) {
      return new Te(
        { type: "number", isNullable: Le(e) },
        Le(e) ? null : { type: "number", value: e }
      );
    }
    static fromString(e) {
      return new Te(
        { type: "string", isNullable: Le(e) },
        Le(e) ? null : { type: "string", value: e }
      );
    }
    equals(e) {
      return (
        e instanceof Te &&
        Me(this.definition, e.definition) &&
        Me(e.value, this.value)
      );
    }
    evaluate() {
      return this.value;
    }
    canEvaluate() {
      return !0;
    }
  },
  Ca = class extends vt {
    constructor(e) {
      super(),
        (this.argumentExpressions = e),
        R(this, "collation", { type: 0 });
    }
    getArgumentExpression(e) {
      let t = this.argumentExpressions[e];
      if (bt(t)) throw new Error("Missing argument in function call");
      return t;
    }
    equals(e) {
      return (
        e instanceof Ca &&
        Me(this.constructor, e.constructor) &&
        Me(this.argumentExpressions, e.argumentExpressions)
      );
    }
    canEvaluate() {
      return this.argumentExpressions.every((e) => e.canEvaluate());
    }
  },
  pu = class extends Ca {
    constructor() {
      super(...arguments),
        R(this, "definition", pu.getDefinition()),
        R(this, "sourceExpression", this.getArgumentExpression(0)),
        R(this, "targetExpression", this.getArgumentExpression(1));
    }
    static getDefinition() {
      return { type: "boolean", isNullable: !1 };
    }
    stringify() {
      return `CONTAINS(${this.sourceExpression.stringify()}, ${this.targetExpression.stringify()})`;
    }
    getValue(e, t) {
      if (Le(e) || e.type !== "string" || Le(t) || t.type !== "string")
        return !1;
      let n = e.value,
        r = t.value;
      return (
        this.collation.type === 0 &&
          ((n = n.toLowerCase()), (r = r.toLowerCase())),
        n.includes(r)
      );
    }
    evaluate(e) {
      let t = this.sourceExpression.evaluate(e),
        n = this.targetExpression.evaluate(e);
      return { type: "boolean", value: this.getValue(t, n) };
    }
  },
  mu = class extends Ca {
    constructor() {
      super(...arguments),
        R(this, "definition", mu.getDefinition()),
        R(this, "sourceExpression", this.getArgumentExpression(0)),
        R(this, "targetExpression", this.getArgumentExpression(1));
    }
    static getDefinition() {
      return { type: "boolean", isNullable: !1 };
    }
    stringify() {
      return `STARTS_WITH(${this.sourceExpression.stringify()}, ${this.targetExpression.stringify()})`;
    }
    getValue(e, t) {
      if (Le(e) || e.type !== "string" || Le(t) || t.type !== "string")
        return !1;
      let n = e.value,
        r = t.value;
      return (
        this.collation.type === 0 &&
          ((n = n.toLowerCase()), (r = r.toLowerCase())),
        n.startsWith(r)
      );
    }
    evaluate(e) {
      let t = this.sourceExpression.evaluate(e),
        n = this.targetExpression.evaluate(e);
      return { type: "boolean", value: this.getValue(t, n) };
    }
  },
  vu = class extends Ca {
    constructor() {
      super(...arguments),
        R(this, "definition", vu.getDefinition()),
        R(this, "sourceExpression", this.getArgumentExpression(0)),
        R(this, "targetExpression", this.getArgumentExpression(1));
    }
    static getDefinition() {
      return { type: "boolean", isNullable: !1 };
    }
    stringify() {
      return `ENDS_WITH(${this.sourceExpression.stringify()}, ${this.targetExpression.stringify()})`;
    }
    getValue(e, t) {
      if (Le(e) || e.type !== "string" || Le(t) || t.type !== "string")
        return !1;
      let n = e.value,
        r = t.value;
      return (
        this.collation.type === 0 &&
          ((n = n.toLowerCase()), (r = r.toLowerCase())),
        n.endsWith(r)
      );
    }
    evaluate(e) {
      let t = this.sourceExpression.evaluate(e),
        n = this.targetExpression.evaluate(e);
      return { type: "boolean", value: this.getValue(t, n) };
    }
  },
  Jc = class extends vt {
    constructor(e, t, n) {
      super(),
        (this.valueExpression = e),
        (this.conditions = t),
        (this.elseExpression = n),
        R(this, "definition"),
        R(this, "collation", { type: 0 });
      let r = [];
      for (let { thenExpression: i } of t) r.push(i.definition);
      n && r.push(n.definition), (this.definition = Jc.getDefinition(r));
    }
    static getDefinition(e) {
      let t = null,
        n = !1;
      for (let r of e) {
        if ((t ?? (t = r), t && r && t.type !== r.type))
          throw new Error("Incompatible types in CASE expression");
        n || (n = r?.isNullable ?? !0);
      }
      return t ? { type: t.type, isNullable: n } : null;
    }
    stringify() {
      let e = "CASE";
      this.valueExpression && (e += ` ${this.valueExpression.stringify()}`);
      for (let { whenExpression: t, thenExpression: n } of this.conditions)
        e += ` WHEN ${t.stringify()} THEN ${n.stringify()}`;
      return (
        this.elseExpression &&
          (e += ` ELSE ${this.elseExpression.stringify()}`),
        (e += " END"),
        e
      );
    }
    equals(e) {
      return (
        e instanceof Jc &&
        Me(this.valueExpression, e.valueExpression) &&
        Me(this.conditions, e.conditions) &&
        Me(this.elseExpression, e.elseExpression)
      );
    }
    evaluate(e) {
      var t, n;
      let r =
        ((t = this.valueExpression) == null ? void 0 : t.evaluate(e)) ?? null;
      for (let { whenExpression: i, thenExpression: o } of this.conditions) {
        let s = i.evaluate(e);
        if (this.valueExpression ? rn.equal(s, r, this.collation) : ki(s))
          return o.evaluate(e);
      }
      return (
        ((n = this.elseExpression) == null ? void 0 : n.evaluate(e)) ?? null
      );
    }
    canEvaluate() {
      let e = [];
      this.valueExpression && e.push(this.valueExpression);
      for (let t of this.conditions)
        e.push(t.whenExpression), e.push(t.thenExpression);
      return (
        this.elseExpression && e.push(this.elseExpression),
        e.every((t) => t.canEvaluate())
      );
    }
  },
  HD = class {
    constructor(e, t) {
      (this.whenExpression = e), (this.thenExpression = t);
    }
  },
  Ww = class extends vt {
    constructor(e) {
      super(), (this.valueExpression = e);
    }
    equals(e) {
      return (
        e instanceof Ww &&
        Me(this.constructor, e.constructor) &&
        Me(this.valueExpression, e.valueExpression)
      );
    }
    canEvaluate() {
      return this.valueExpression.canEvaluate();
    }
  },
  ca = class extends Ww {
    constructor() {
      super(...arguments), R(this, "definition", ca.getDefinition());
    }
    static getDefinition() {
      return { type: "boolean", isNullable: !1 };
    }
    stringify() {
      return `NOT ${this.valueExpression.stringify()}`;
    }
    evaluate(e) {
      let t = this.valueExpression.evaluate(e);
      return { type: "boolean", value: !ki(t) };
    }
  },
  ua = class extends vt {
    constructor(e) {
      super(),
        (this.operandExpressions = e),
        R(this, "definition", ua.getDefinition());
    }
    static getDefinition() {
      return { type: "boolean", isNullable: !1 };
    }
    stringify() {
      return this.operandExpressions.map((e) => e.stringify()).join(" AND ");
    }
    equals(e) {
      return (
        e instanceof ua &&
        Me(this.constructor, e.constructor) &&
        Me(this.operandExpressions, e.operandExpressions)
      );
    }
    canEvaluate() {
      return this.operandExpressions.every((e) => e.canEvaluate());
    }
  },
  xi = class extends ua {
    constructor() {
      super(...arguments), R(this, "operator", "AND");
    }
    evaluate(e) {
      return {
        type: "boolean",
        value: this.operandExpressions.every((n) => {
          let r = n.evaluate(e);
          return ki(r);
        }),
      };
    }
  },
  ea = class extends ua {
    constructor() {
      super(...arguments), R(this, "operator", "OR");
    }
    evaluate(e) {
      return {
        type: "boolean",
        value: this.operandExpressions.some((n) => {
          let r = n.evaluate(e);
          return ki(r);
        }),
      };
    }
  },
  An = class extends vt {
    constructor(e, t) {
      super(),
        (this.leftExpression = e),
        (this.rightExpression = t),
        R(this, "definition", An.getDefinition()),
        R(this, "collation", { type: 0 });
    }
    static getDefinition() {
      return { type: "boolean", isNullable: !1 };
    }
    stringify() {
      return `${this.leftExpression.stringify()} ${
        this.operator
      } ${this.rightExpression.stringify()}`;
    }
    equals(e) {
      return (
        e instanceof An &&
        Me(this.constructor, e.constructor) &&
        Me(this.leftExpression, e.leftExpression) &&
        Me(this.rightExpression, e.rightExpression)
      );
    }
    canEvaluate() {
      return (
        this.leftExpression.canEvaluate() && this.rightExpression.canEvaluate()
      );
    }
  },
  To = class extends An {
    constructor() {
      super(...arguments), R(this, "operator", "=");
    }
    evaluate(e) {
      let t = this.leftExpression.evaluate(e),
        n = this.rightExpression.evaluate(e);
      return { type: "boolean", value: rn.equal(t, n, this.collation) };
    }
  },
  Eo = class extends An {
    constructor() {
      super(...arguments), R(this, "operator", "!=");
    }
    evaluate(e) {
      let t = this.leftExpression.evaluate(e),
        n = this.rightExpression.evaluate(e);
      return { type: "boolean", value: !rn.equal(t, n, this.collation) };
    }
  },
  fa = class extends An {
    constructor() {
      super(...arguments), R(this, "operator", "<");
    }
    evaluate(e) {
      let t = this.leftExpression.evaluate(e),
        n = this.rightExpression.evaluate(e);
      return { type: "boolean", value: rn.lessThan(t, n, this.collation) };
    }
  },
  da = class extends An {
    constructor() {
      super(...arguments), R(this, "operator", "<=");
    }
    evaluate(e) {
      let t = this.leftExpression.evaluate(e),
        n = this.rightExpression.evaluate(e);
      return {
        type: "boolean",
        value: rn.lessThanOrEqual(t, n, this.collation),
      };
    }
  },
  ha = class extends An {
    constructor() {
      super(...arguments), R(this, "operator", ">");
    }
    evaluate(e) {
      let t = this.leftExpression.evaluate(e),
        n = this.rightExpression.evaluate(e);
      return { type: "boolean", value: rn.greaterThan(t, n, this.collation) };
    }
  },
  pa = class extends An {
    constructor() {
      super(...arguments), R(this, "operator", ">=");
    }
    evaluate(e) {
      let t = this.leftExpression.evaluate(e),
        n = this.rightExpression.evaluate(e);
      return {
        type: "boolean",
        value: rn.greaterThanOrEqual(t, n, this.collation),
      };
    }
  },
  ka = class extends vt {
    constructor(e) {
      super(), (this.valueExpression = e);
    }
    stringify() {
      return `CAST(${this.valueExpression.stringify()} AS ${this.dataType})`;
    }
    equals(e) {
      return (
        e instanceof ka &&
        Me(this.constructor, e.constructor) &&
        Me(this.valueExpression, e.valueExpression)
      );
    }
    canEvaluate() {
      return this.valueExpression.canEvaluate();
    }
  },
  gu = class extends ka {
    constructor() {
      super(...arguments),
        R(this, "dataType", "BOOLEAN"),
        R(this, "definition", gu.getDefinition());
    }
    static getDefinition() {
      return { type: "boolean", isNullable: !1 };
    }
    evaluate(e) {
      let t = this.valueExpression.evaluate(e);
      return { type: "boolean", value: ki(t) };
    }
  };
function ki(e) {
  switch (e?.type) {
    case "boolean":
    case "number":
    case "string":
      return !!e.value;
  }
  return !1;
}
var em = class extends ka {
  constructor() {
    super(...arguments),
      R(this, "dataType", "DATE"),
      R(this, "definition", em.getDefinition());
  }
  static getDefinition() {
    return { type: "date", isNullable: !0 };
  }
  evaluate(e) {
    let t = this.valueExpression.evaluate(e),
      n = jw(t);
    return Le(n) ? null : { type: "date", value: n.toISOString() };
  }
};
function jw(e) {
  switch (e?.type) {
    case "date":
    case "number":
    case "string": {
      let t = new Date(e.value);
      return tn(t) ? t : null;
    }
  }
  return null;
}
var tm = class extends ka {
  constructor() {
    super(...arguments),
      R(this, "dataType", "NUMBER"),
      R(this, "definition", tm.getDefinition());
  }
  static getDefinition() {
    return { type: "number", isNullable: !0 };
  }
  evaluate(e) {
    let t = this.valueExpression.evaluate(e),
      n = Uw(t);
    return Le(n) ? null : { type: "number", value: n };
  }
};
function Uw(e) {
  switch (e?.type) {
    case "number":
    case "string": {
      let t = Number(e.value);
      return Number.isFinite(t) ? t : null;
    }
  }
  return null;
}
var nm = class extends ka {
  constructor() {
    super(...arguments),
      R(this, "dataType", "STRING"),
      R(this, "definition", nm.getDefinition());
  }
  static getDefinition() {
    return { type: "string", isNullable: !0 };
  }
  evaluate(e) {
    let t = this.valueExpression.evaluate(e),
      n = Xw(t);
    return Le(n) ? null : { type: "string", value: n };
  }
};
function Xw(e) {
  switch (e?.type) {
    case "string":
    case "number":
      return String(e.value);
  }
  return null;
}
function Mn(e, t, n) {
  let r = zD(e, t, n),
    i = r instanceof Te;
  if (r.canEvaluate() && !i) {
    let o = r.evaluate();
    return new Te(r.definition, o);
  }
  return r;
}
function zD(e, t, n) {
  switch (e.type) {
    case "Identifier":
      return ND(e, t);
    case "LiteralValue":
      return $D(e, n);
    case "FunctionCall":
      return jD(e, t);
    case "Case":
      return UD(e, t, n);
    case "UnaryOperation":
      return XD(e, t);
    case "BinaryOperation":
      return GD(e, t);
    case "TypeCast":
      return nV(e, t);
    default:
      throw new Error(`Unsupported expression: ${JSON.stringify(e)}`);
  }
}
function ND(e, t) {
  return new Je(t, e.name);
}
function $D(e, t) {
  var n;
  let r = WD(e.value);
  switch (t?.type) {
    case "boolean": {
      let i = ki(r.value);
      return Te.fromBoolean(i);
    }
    case "date": {
      let i = jw(r.value);
      return Te.fromDate(i);
    }
    case "enum":
      return ((n = r.value) == null ? void 0 : n.type) === "string"
        ? Te.fromEnum(r.value.value)
        : r;
    case "number": {
      let i = Uw(r.value);
      return Te.fromNumber(i);
    }
    case "string": {
      let i = Xw(r.value);
      return Te.fromString(i);
    }
  }
  return r;
}
function WD(e) {
  return zS(e)
    ? Te.fromBoolean(e)
    : tn(e)
    ? Te.fromDate(e)
    : ce(e)
    ? Te.fromNumber(e)
    : ne(e)
    ? Te.fromString(e)
    : Te.fromNull();
}
function jD(e, t) {
  let n = e.arguments.map((r) => Mn(r, t, void 0));
  switch (e.functionName) {
    case "CONTAINS":
      return new pu(n);
    case "STARTS_WITH":
      return new mu(n);
    case "ENDS_WITH":
      return new vu(n);
    default:
      throw new Error(`Unsupported function name: ${e.functionName}`);
  }
}
function UD(e, t, n) {
  let r = e.value && Mn(e.value, t, void 0),
    i = e.value && ma(e.value, t),
    o = e.conditions.map((a) => {
      let l = Mn(a.when, t, i),
        c = Mn(a.then, t, n);
      return new HD(l, c);
    }),
    s = e.else && Mn(e.else, t, n);
  return new Jc(r, o, s);
}
function XD(e, t) {
  let n = Mn(e.value, t, void 0);
  switch (e.operator) {
    case "not":
      return Pp(n);
    default:
      throw new Error(`Unsupported unary operator: ${e.operator}`);
  }
}
function Pp(e) {
  var t;
  if (e instanceof ca) {
    let n = e.valueExpression;
    return ((t = n.definition) == null ? void 0 : t.type) === "boolean"
      ? n
      : new gu(n);
  }
  if (e instanceof To) {
    let { leftExpression: n, rightExpression: r } = e;
    return new Eo(n, r);
  }
  if (e instanceof Eo) {
    let { leftExpression: n, rightExpression: r } = e;
    return new To(n, r);
  }
  if (e instanceof fa) {
    let { leftExpression: n, rightExpression: r } = e;
    return new pa(n, r);
  }
  if (e instanceof da) {
    let { leftExpression: n, rightExpression: r } = e;
    return new ha(n, r);
  }
  if (e instanceof ha) {
    let { leftExpression: n, rightExpression: r } = e;
    return new da(n, r);
  }
  if (e instanceof pa) {
    let { leftExpression: n, rightExpression: r } = e;
    return new fa(n, r);
  }
  if (e instanceof xi) {
    let { operandExpressions: n } = e,
      r = n.map(Pp);
    return new ea(r);
  }
  if (e instanceof xi) {
    let { operandExpressions: n } = e,
      r = n.map(Pp);
    return new xi(r);
  }
  return new ca(e);
}
function GD(e, t) {
  let n =
      e.operator !== "and" && e.operator !== "or"
        ? ma(e.left, t) || ma(e.right, t)
        : void 0,
    r = Mn(e.left, t, n),
    i = Mn(e.right, t, n);
  switch (e.operator) {
    case "and":
      return YD(r, i);
    case "or":
      return KD(r, i);
    case "==":
      return qD(r, i);
    case "!=":
      return QD(r, i);
    case "<":
      return ZD(r, i);
    case "<=":
      return JD(r, i);
    case ">":
      return eV(r, i);
    case ">=":
      return tV(r, i);
    default:
      throw new Error(`Unsupported binary operator: ${e.operator}`);
  }
}
function YD(e, t) {
  let n = [];
  return (
    e instanceof xi ? n.push(...e.operandExpressions) : n.push(e),
    t instanceof xi ? n.push(...t.operandExpressions) : n.push(t),
    new xi(n)
  );
}
function KD(e, t) {
  let n = [];
  return (
    e instanceof ea ? n.push(...e.operandExpressions) : n.push(e),
    t instanceof ea ? n.push(...t.operandExpressions) : n.push(t),
    new ea(n)
  );
}
function qD(e, t) {
  let n = e instanceof Je;
  return t instanceof Je && !n ? new To(t, e) : new To(e, t);
}
function QD(e, t) {
  let n = e instanceof Je;
  return t instanceof Je && !n ? new Eo(t, e) : new Eo(e, t);
}
function ZD(e, t) {
  let n = e instanceof Je;
  return t instanceof Je && !n ? new ha(t, e) : new fa(e, t);
}
function JD(e, t) {
  let n = e instanceof Je;
  return t instanceof Je && !n ? new pa(t, e) : new da(e, t);
}
function eV(e, t) {
  let n = e instanceof Je;
  return t instanceof Je && !n ? new fa(t, e) : new ha(e, t);
}
function tV(e, t) {
  let n = e instanceof Je;
  return t instanceof Je && !n ? new da(t, e) : new pa(e, t);
}
function nV(e, t) {
  let n = Mn(e.value, t, void 0);
  switch (e.dataType) {
    case "BOOLEAN":
      return rV(n);
    case "DATE":
      return iV(n);
    case "NUMBER":
      return oV(n);
    case "STRING":
      return sV(n);
    default:
      throw new Error(`Unsupported data type: ${e.dataType}`);
  }
}
function rV(e) {
  var t;
  return ((t = e.definition) == null ? void 0 : t.type) === "boolean"
    ? e
    : new gu(e);
}
function iV(e) {
  var t;
  return ((t = e.definition) == null ? void 0 : t.type) === "date"
    ? e
    : new em(e);
}
function oV(e) {
  var t;
  return ((t = e.definition) == null ? void 0 : t.type) === "number"
    ? e
    : new tm(e);
}
function sV(e) {
  var t;
  return ((t = e.definition) == null ? void 0 : t.type) === "string"
    ? e
    : new nm(e);
}
function ma(e, t) {
  switch (e.type) {
    case "Identifier":
      return aV(e, t);
    case "LiteralValue":
      return;
    case "FunctionCall":
      return lV(e);
    case "Case":
      return cV(e, t);
    case "UnaryOperation":
      return uV(e);
    case "BinaryOperation":
      return fV(e);
    case "TypeCast":
      return dV(e);
    default:
      throw new Error(`Unsupported expression: ${JSON.stringify(e)}`);
  }
}
function aV(e, t) {
  return t[e.name];
}
function lV(e) {
  switch (e.functionName) {
    case "CONTAINS":
      return pu.getDefinition();
    case "STARTS_WITH":
      return mu.getDefinition();
    case "ENDS_WITH":
      return vu.getDefinition();
    default:
      throw new Error(`Unsupported function name: ${e.functionName}`);
  }
}
function cV(e, t) {
  let n = [];
  for (let r of e.conditions) {
    let i = ma(r.then, t);
    bt(i) || n.push(i);
  }
  if (e.else) {
    let r = ma(e.else, t);
    bt(r) || n.push(r);
  }
  return Jc.getDefinition(n) ?? void 0;
}
function uV(e) {
  switch (e.operator) {
    case "not":
      return ca.getDefinition();
    default:
      throw new Error(`Unsupported unary operator: ${e.operator}`);
  }
}
function fV(e) {
  switch (e.operator) {
    case "and":
    case "or":
      return ua.getDefinition();
    case "==":
    case "!=":
    case "<":
    case "<=":
    case ">":
    case ">=":
      return An.getDefinition();
    default:
      throw new Error(`Unsupported binary operator: ${e.operator}`);
  }
}
function dV(e) {
  switch (e.dataType) {
    case "BOOLEAN":
      return gu.getDefinition();
    case "DATE":
      return em.getDefinition();
    case "NUMBER":
      return tm.getDefinition();
    case "STRING":
      return nm.getDefinition();
    default:
      throw new Error(`Unsupported data type: ${e.dataType}`);
  }
}
function $r(e, t) {
  return `(self: ${e}ms${t ? `, total: ${t}ms` : ""})`;
}
function Dn(e) {
  return `(items: ${e})`;
}
var Wr = class {
    constructor() {
      R(this, "executionTime", 0), R(this, "itemCount", 0);
    }
    async execute() {
      let e = performance.now(),
        t = await this._execute();
      return (
        (this.executionTime = performance.now() - e),
        (this.itemCount = t.length),
        t
      );
    }
  },
  Gw = class extends Wr {
    constructor(e) {
      super(), (this.collection = e);
    }
    inspect() {
      return {
        label: `ScanCollectionPlan ${$r(this.executionTime)} ${Dn(
          this.itemCount
        )}`,
      };
    }
    async _execute() {
      return this.collection.scanItems();
    }
  },
  rr = class extends Wr {
    constructor(e, t) {
      super(), (this.index = e), (this.query = t);
    }
    inspect() {
      let e = [],
        t = (n) => {
          switch (n.type) {
            case "All":
              return n.type;
            case "Equals":
            case "NotEquals":
            case "LessThan":
            case "GreaterThan":
            case "Contains":
            case "StartsWith":
            case "EndsWith":
              return `${n.type} ${rn.stringify(n.value)}`;
            default:
              Wt(n);
          }
        };
      for (let n = 0; n < this.index.fields.length; n++) {
        let r = this.index.fields[n],
          i = this.query[n];
        !r ||
          r.type !== "Identifier" ||
          !i ||
          i.type === "All" ||
          e.push(`${r.name} ${t(i)}`);
      }
      return {
        label: `LookupIndexPlan(${e.join(", ")}) ${$r(this.executionTime)} ${Dn(
          this.itemCount
        )}`,
      };
    }
    async _execute() {
      return this.index.lookupItems(this.query);
    }
  },
  hV = class extends Wr {
    constructor(e) {
      super(), (this.childPlans = e);
    }
    inspect() {
      let e = Math.max(...this.childPlans.map((t) => t.executionTime ?? 0));
      return {
        label: `UnionPlan ${$r(
          this.executionTime - e,
          this.executionTime
        )} ${Dn(this.itemCount)}`,
        nodes: this.childPlans.map((t) => t.inspect()),
      };
    }
    async _execute() {
      let e = await Promise.all(
          this.childPlans.map(async (n) => {
            let r = await n.execute();
            return new eu(r);
          })
        ),
        t;
      for (let n of e) t ? (t = t.union(n)) : (t = n);
      return t?.items() ?? [];
    }
  },
  pV = class extends Wr {
    constructor(e) {
      super(), (this.childPlans = e);
    }
    inspect() {
      let e = Math.max(...this.childPlans.map((t) => t.executionTime ?? 0));
      return {
        label: `IntersectionPlan ${$r(
          this.executionTime - e,
          this.executionTime
        )} ${Dn(this.itemCount)} ${Dn(this.itemCount)}`,
        nodes: this.childPlans.map((t) => t.inspect()),
      };
    }
    async _execute() {
      let e = await Promise.all(
          this.childPlans.map(async (n) => {
            let r = await n.execute();
            return new eu(r);
          })
        ),
        t;
      for (let n of e) t ? (t = t.intersection(n)) : (t = n);
      return t?.items() ?? [];
    }
  },
  mV = class extends Wr {
    constructor(e, t, n, r) {
      super(),
        (this.childPlan = e),
        (this.collection = t),
        (this.richTextResolver = n),
        (this.select = r);
    }
    inspect() {
      return {
        label: `ResolveItemsPlan ${$r(
          this.executionTime - this.childPlan.executionTime,
          this.executionTime
        )} ${Dn(this.itemCount)}`,
        nodes: [this.childPlan.inspect()],
      };
    }
    async _execute() {
      let e = await this.childPlan.execute(),
        t = e.map((n) => n.pointer);
      for (let n of e)
        for (let r of this.select) {
          if (r.type !== "Identifier") continue;
          let i = n.data[r.name];
          i?.type === "richtext" && this.richTextResolver.resolve(i.value);
        }
      return this.collection.resolveItems(t);
    }
  },
  vV = class extends Wr {
    constructor(e, t) {
      super(), (this.childPlan = e), (this.filterExpression = t);
    }
    inspect() {
      return {
        label: `FilterItemsPlan(${this.filterExpression.stringify()}) ${$r(
          this.executionTime - this.childPlan.executionTime,
          this.executionTime
        )} ${Dn(this.itemCount)} ${Dn(this.itemCount)}`,
        nodes: [this.childPlan.inspect()],
      };
    }
    async _execute() {
      return (await this.childPlan.execute()).filter((t) => {
        let n = this.filterExpression.evaluate(t);
        return ki(n);
      });
    }
  },
  gV = class extends Wr {
    constructor(e, t, n) {
      super(),
        (this.childPlan = e),
        (this.orderExpressions = t),
        (this.collection = n);
    }
    inspect() {
      return {
        label: `SortItemsPlan(${this.orderExpressions
          .map(
            (t) => `${t.expression.stringify()} ${t.direction.toUpperCase()}`
          )
          .join(", ")}) ${$r(
          this.executionTime - this.childPlan.executionTime,
          this.executionTime
        )} ${Dn(this.itemCount)}`,
        nodes: [this.childPlan.inspect()],
      };
    }
    async _execute() {
      return (await this.childPlan.execute()).sort((t, n) => {
        for (let { expression: r, direction: i, collation: o } of this
          .orderExpressions) {
          let s = i === "asc";
          if (r instanceof Je && r.name === Rp) {
            let c = this.collection.compareItems(t, n);
            return s ? c : -c;
          }
          let a = r.evaluate(t),
            l = r.evaluate(n);
          if (!rn.equal(a, l, o)) {
            if (rn.lessThan(a, l, o) || ia(a)) return s ? -1 : 1;
            if (rn.greaterThan(a, l, o) || ia(l)) return s ? 1 : -1;
            throw new Error("Invalid comparison result.");
          }
        }
        return this.collection.compareItems(t, n);
      });
    }
  },
  yV = class {
    constructor(e, t, n) {
      (this.expression = e), (this.direction = t), (this.collation = n);
    }
  },
  bV = class extends Wr {
    constructor(e, t, n) {
      super(),
        (this.childPlan = e),
        (this.offsetExpression = t),
        (this.limitExpression = n);
    }
    inspect() {
      var e, t;
      return {
        label: `SliceItemsPlan(LIMIT ${
          ((e = this.limitExpression) == null ? void 0 : e.stringify()) ??
          "Infinity"
        }, OFFSET ${
          ((t = this.offsetExpression) == null ? void 0 : t.stringify()) ?? "0"
        }) ${$r(
          this.executionTime - this.childPlan.executionTime,
          this.executionTime
        )} ${Dn(this.itemCount)}`,
        nodes: [this.childPlan.inspect()],
      };
    }
    getOffset() {
      var e;
      let t = (e = this.offsetExpression) == null ? void 0 : e.evaluate();
      if (!(ia(t) || t.type !== "number")) return t.value;
    }
    getLimit() {
      var e;
      let t = (e = this.limitExpression) == null ? void 0 : e.evaluate();
      if (!(ia(t) || t.type !== "number")) return t.value;
    }
    async _execute() {
      let e = await this.childPlan.execute(),
        t = this.getOffset() ?? 0,
        n = this.getLimit() ?? 1 / 0;
      return e.slice(t, t + n);
    }
  },
  eu = class extends Map {
    constructor(e = []) {
      super();
      for (let t of e) this.set(t.pointer, t);
    }
    union(e) {
      let t = new eu();
      for (let [n, r] of this) t.set(n, r);
      for (let [n, r] of e) t.set(n, r);
      return t;
    }
    intersection(e) {
      let t = new eu();
      for (let [n, r] of this) e.has(n) && t.set(n, r);
      return t;
    }
    items() {
      return [...this.values()];
    }
  },
  xV = class {
    constructor(e) {
      (this.collection = e), R(this, "cache", new Map());
    }
    resolve(e) {
      let t = this.cache.get(e);
      if (t) return t;
      let n = this.collection.resolveRichText(e);
      return this.cache.set(e, n), n;
    }
  };
function SV(e, t) {
  var n;
  if (hu(e)) {
    let r = $_(e),
      i = (n = r?.[t.name]) == null ? void 0 : n.title;
    if (i) return `"${t.name}" /* ${i} */`;
  }
  return `"${t.name}"`;
}
function wV(e) {
  return typeof e.value == "string" ? `'${e.value}'` : e.value;
}
function CV(e, t) {
  return `${t.functionName}(${t.arguments.map((n) => Nt(e, n)).join(", ")})`;
}
function kV(e, t) {
  let n = "CASE";
  t.value && (n += ` ${Nt(e, t.value)}`);
  for (let r of t.conditions)
    n += ` WHEN ${Nt(e, r.when)} THEN ${Nt(e, r.then)}`;
  return t.else && (n += ` ELSE ${t.else}`), (n += " END"), n;
}
function TV(e, t) {
  let n = Nt(e, t.value);
  return `${t.operator.toUpperCase()} ${n}`;
}
function EV(e, t) {
  let n = Nt(e, t.left),
    r = Nt(e, t.right),
    i = t.operator.toUpperCase();
  return `${n} ${i} ${r}`;
}
function RV(e, t) {
  return `CAST(${Nt(e, t.value)} as ${t.dataType})`;
}
function Nt(e, t) {
  switch (t.type) {
    case "Identifier":
      return SV(e, t);
    case "LiteralValue":
      return wV(t);
    case "FunctionCall":
      return CV(e, t);
    case "Case":
      return kV(e, t);
    case "UnaryOperation":
      return TV(e, t);
    case "BinaryOperation":
      return EV(e, t);
    case "TypeCast":
      return RV(e, t);
    default:
      Wt(t);
  }
}
function PV(e) {
  let t = "";
  return (
    e.split(/\s+/u).forEach((r) => {
      r !== "" &&
        (["SELECT", "FROM", "WHERE", "ORDER", "LIMIT", "OFFSET"].includes(r)
          ? (t += `
${r}`)
          : ["AND", "OR"].includes(r)
          ? (t += `
	${r}`)
          : (t += ` ${r}`));
    }),
    t.trim()
  );
}
function IV(e) {
  let t = "";
  return (
    (t += `SELECT ${e.select
      .map((n) => {
        let r = Nt(e.from.data, n);
        return n.alias ? `${r} AS ${n.alias}` : r;
      })
      .join(", ")}`),
    hu(e.from.data)
      ? (t += ` FROM ${e.from.data.displayName}`)
      : (t += ` FROM ${e.from.data.displayName}`),
    e.where && (t += ` WHERE ${Nt(e.from.data, e.where)}`),
    e.orderBy &&
      (t += ` ORDER BY ${e.orderBy
        .map((n) => `${Nt(e.from.data, n)} ${n.direction ?? "asc"}`)
        .join(", ")}`),
    e.limit && (t += ` LIMIT ${Nt(e.from.data, e.limit)}`),
    e.offset && (t += ` OFFSET ${Nt(e.from.data, e.offset)}`),
    PV(t)
  );
}
var FV = DD("query-engine");
function LV({ data: e }, t) {
  if (hu(e)) {
    for (; t; ) {
      let n = e.collectionByLocaleId[t.id];
      if (n) return n;
      t = t.fallback;
    }
    return e.collectionByLocaleId.default;
  }
  throw new Error("Unsupported collection type");
}
var _V = class {
  async query(e, t) {
    let n = LV(e.from, t),
      r = new xV(n),
      i = this.createQueryPlan(n, r, e),
      o = await this.executeQueryPlan(n, r, e, i);
    return (
      FV.debug(`Query:
${IV(e)}

${(0, AD.default)(i.inspect())}`),
      o
    );
  }
  createQueryPlan(e, t, n) {
    var r;
    let i = new Gw(e);
    if (n.where) {
      let l = vt.from(n.where, e.schema);
      i = Ip(e, l);
    }
    let o =
      (r = n.orderBy) == null
        ? void 0
        : r.map(
            (l) =>
              new yV(vt.from(l, e.schema), l.direction ?? "asc", { type: 0 })
          );
    i = new gV(i, o ?? [], e);
    let s;
    n.offset && (s = vt.from(n.offset, e.schema));
    let a;
    return (
      n.limit && (a = vt.from(n.limit, e.schema)),
      (s || a) && (i = new bV(i, s, a)),
      n.select.length > 0 && (i = new mV(i, e, t, n.select)),
      i
    );
  }
  async executeQueryPlan(e, t, n, r) {
    let i = await r.execute();
    return Promise.all(
      i.map(async (o) => {
        let s = {};
        for (let a of n.select) {
          let l = vt.from(a, e.schema),
            c = MV(a),
            u = l.evaluate(o);
          s[c] = await OV(t, u);
        }
        return s;
      })
    );
  }
};
function MV(e) {
  if (e.alias) return e.alias;
  if (e.type === "Identifier") return e.name;
  throw new Error("Can't serialize expression");
}
async function OV(e, t) {
  return ia(t) ? null : t.type === "richtext" ? e.resolve(t.value) : t.value;
}
function Ip(e, t) {
  if (t instanceof xi) {
    let n = t.operandExpressions.map((r) => Ip(e, r));
    return new pV(n);
  }
  if (t instanceof ea) {
    let n = t.operandExpressions.map((r) => Ip(e, r));
    return new hV(n);
  }
  return AV(e, t) ?? VV(e, t);
}
function AV(e, t) {
  var n, r;
  if (t instanceof An) return hp(e, t);
  if (t instanceof Ca) return DV(e, t);
  if (
    t instanceof Je &&
    ((n = t.definition) == null ? void 0 : n.type) === "boolean"
  ) {
    let i = Te.fromBoolean(!0),
      o = new To(t, i);
    return hp(e, o);
  }
  if (
    t instanceof ca &&
    t.valueExpression instanceof Je &&
    ((r = t.valueExpression.definition) == null ? void 0 : r.type) === "boolean"
  ) {
    let i = Te.fromBoolean(!0),
      o = new Eo(t.valueExpression, i);
    return hp(e, o);
  }
}
function hp(e, t) {
  let n = t.leftExpression,
    r = t.rightExpression;
  if (r instanceof Te)
    for (let i of e.indexes) {
      let o = i.fields[0];
      if (bt(o)) continue;
      let s = vt.from(o, e.schema);
      if (!n.equals(s)) continue;
      let a = new Array(i.fields.length - 1).fill({ type: "All" });
      if (t instanceof To && i.supportedLookupTypes.includes("Equals"))
        return new rr(i, [{ type: "Equals", value: r.evaluate() }, ...a]);
      if (t instanceof Eo && i.supportedLookupTypes.includes("NotEquals"))
        return new rr(i, [{ type: "NotEquals", value: r.evaluate() }, ...a]);
      if (t instanceof fa && i.supportedLookupTypes.includes("LessThan"))
        return new rr(i, [
          { type: "LessThan", value: r.evaluate(), inclusive: !1 },
          ...a,
        ]);
      if (t instanceof da && i.supportedLookupTypes.includes("LessThan"))
        return new rr(i, [
          { type: "LessThan", value: r.evaluate(), inclusive: !0 },
          ...a,
        ]);
      if (t instanceof ha && i.supportedLookupTypes.includes("GreaterThan"))
        return new rr(i, [
          { type: "GreaterThan", value: r.evaluate(), inclusive: !1 },
          ...a,
        ]);
      if (t instanceof pa && i.supportedLookupTypes.includes("GreaterThan"))
        return new rr(i, [
          { type: "GreaterThan", value: r.evaluate(), inclusive: !0 },
          ...a,
        ]);
    }
}
function DV(e, t) {
  if (t.argumentExpressions.length !== 2) return;
  let n = t.argumentExpressions[0],
    r = t.argumentExpressions[1];
  if (!bt(n) && !bt(r) && r instanceof Te)
    for (let i of e.indexes) {
      let o = i.fields[0];
      if (bt(o)) continue;
      let s = vt.from(o, e.schema);
      if (!n.equals(s)) continue;
      let a = new Array(i.fields.length - 1).fill({ type: "All" });
      if (t instanceof pu && i.supportedLookupTypes.includes("Contains"))
        return new rr(i, [{ type: "Contains", value: r.evaluate() }, ...a]);
      if (t instanceof mu && i.supportedLookupTypes.includes("StartsWith"))
        return new rr(i, [{ type: "StartsWith", value: r.evaluate() }, ...a]);
      if (t instanceof vu && i.supportedLookupTypes.includes("EndsWith"))
        return new rr(i, [{ type: "EndsWith", value: r.evaluate() }, ...a]);
    }
}
function VV(e, t) {
  let n = new Gw(e);
  return new vV(n, t);
}
var BV = class {
    constructor() {
      R(this, "entries", new Map());
    }
    set(e, t, n, r) {
      let i = this.entries.get(e);
      switch (t) {
        case "transformTemplate": {
          ae(
            typeof n == "string",
            `transformTemplate must be a string, received: ${n}`
          ),
            i
              ? (i.transformTemplate = n)
              : this.entries.set(e, { transformTemplate: n });
          break;
        }
        case "initial":
        case "animate": {
          ae(
            typeof n == "object",
            `${t} must be a valid object, received: ${n}`
          ),
            i
              ? ((i[t] = n), i.variantHash || (i.variantHash = r))
              : this.entries.set(e, { [t]: n, variantHash: r });
          break;
        }
        default:
          break;
      }
    }
    clear() {
      this.entries.clear();
    }
    toObject() {
      return Object.fromEntries(this.entries);
    }
  },
  Yw = new BV(),
  G6 = (e, t, n, r) => (Vn() || Yw.set(t, e, n, r), n),
  HV = "__Appear_Animation_Transform__",
  Y6 = (e, t) => {
    if (!Vn()) {
      let n = t?.({}, HV);
      if (n === void 0) return t;
      Yw.set(e, "transformTemplate", n);
    }
    return t;
  },
  K6 = "data-framer-appear-id",
  q6 = "data-framer-appear-animation";
function pp(e, t) {
  e.forEach((n) => clearTimeout(n)),
    e.clear(),
    t.forEach((n) => n && n("Callback cancelled by variant change")),
    t.clear();
}
function K1() {
  return new Set();
}
function Z6(e) {
  let t = on(K1),
    n = on(K1);
  return (
    gw(() => () => pp(n, t)),
    S.useEffect(() => () => pp(n, t), [t, n]),
    S.useEffect(() => {
      pp(n, t);
    }, [e, t, n]),
    S.useRef({
      activeVariantCallback:
        (r) =>
        (...i) =>
          new Promise((o, s) => {
            t.add(s), r(...i).then(o);
          }).catch(() => {}),
      delay: async (r, i) => {
        await new Promise((o) => n.add(globalThis.setTimeout(() => o(!0), i))),
          r();
      },
    }).current
  );
}
function zV(e, t, n) {
  return S.useCallback(
    (r) => {
      var i, o, s;
      return n
        ? e
          ? t
            ? Object.assign(
                {},
                (i = n[e]) == null ? void 0 : i[r],
                (o = n[t]) == null ? void 0 : o[r]
              )
            : ((s = n[e]) == null ? void 0 : s[r]) || {}
          : {}
        : {};
    },
    [e, t, n]
  );
}
function NV(e) {
  for (let [t, n] of Object.entries(e)) if ($t.matchMedia(n).matches) return t;
}
function tN(e, t, n = !0) {
  let r = M(Cw),
    i = A(Vn() ? NV(t) ?? e : e),
    o = A(n && r ? e : i.current),
    s = cu(),
    a = Cy(),
    l = fe(
      (c) => {
        (c !== i.current || c !== o.current) &&
          a(() => {
            (i.current = o.current = c),
              Lo(() => {
                s();
              });
          });
      },
      [a, s]
    );
  return (
    YS(() => {
      !n || r !== !0 || l(i.current);
    }, []),
    W(() => {
      let c = [];
      for (let [u, f] of Object.entries(t)) {
        let d = $t.matchMedia(f),
          h = (g) => {
            g.matches && l(u);
          };
        $V(d, h), c.push([d, h]);
      }
      return () => c.forEach(([u, f]) => WV(u, f));
    }, [t, l]),
    [i.current, o.current]
  );
}
function $V(e, t) {
  e.addEventListener ? e.addEventListener("change", t) : e.addListener(t);
}
function WV(e, t) {
  e.removeEventListener
    ? e.removeEventListener("change", t)
    : e.removeListener(t);
}
function rm() {
  return Ee.current() === "CANVAS";
}
function q1(e, t) {
  if (e[t]) return e[t];
  if (!(t in e)) return e.default;
}
function jV(e, t) {
  if (rm()) return;
  let r = S.useRef(!0),
    i = S.useRef(t);
  gw((o, s) => {
    let a = o && !s;
    if (!r.current && a) {
      let l = q1(i.current, e);
      l && l();
    }
    r.current = a;
  }, []),
    S.useEffect(() => {
      if (r.current) {
        let o = q1(i.current, e);
        o && o();
      }
    }, [e]);
}
function aN(e) {
  jV("default", { default: e });
}
var UV = class {
    constructor(e) {
      (this.queryEngine = e), R(this, "cache", new Map());
    }
    get(e, t) {
      let n = GV(e, t),
        r = this.cache.get(n);
      if (r) return r;
      let i = () => this.queryEngine.query(e, t),
        o = new wa(i);
      return this.cache.set(n, o), o;
    }
  },
  Q1 = new WeakMap();
function XV(e) {
  let t = Q1.get(e);
  if (t) return t;
  let n = Math.random().toString(16).slice(2);
  return Q1.set(e, n), n;
}
function GV({ from: e, ...t }, n) {
  let r = XV(e.data),
    i = n?.id ?? "default";
  return r + JSON.stringify(t) + i;
}
function im(e) {
  throw e;
}
var Ta = class {
  constructor() {
    R(this, "map1", new WeakMap());
  }
  get(e, t) {
    let n = this.map1.get(e);
    return n?.get(t);
  }
  set(e, t, n) {
    let r = this.map1.get(e) ?? new WeakMap();
    return this.map1.set(e, r), r.set(t, n);
  }
};
function YV({ data: e }) {
  let { activeLocale: t } = ou();
  if (VD(e)) return e;
  if (BD(e)) {
    let n = e.preload(t);
    return n && im(n), e.read(t);
  }
  throw new Error("Unsupported collection module");
}
var Z1 = new WeakMap();
function KV(e) {
  let t = Z1.get(e);
  if (t) return t;
  let n = e.map((r, i) => ({ ...r, index: i }));
  return Z1.set(e, n), n;
}
var J1 = new Ta();
function qV(e, t) {
  if (!t) return e;
  let n = J1.get(e, t);
  if (n) return n;
  let r = e.filter((i) =>
    gt(t, {
      resolveIdentifier(o) {
        return i[o];
      },
    })
  );
  return J1.set(e, t, r), r;
}
var eS = new Ta();
function QV(e, t) {
  if (!t) return e;
  let n = eS.get(e, t);
  if (n) return n;
  let r = [...e].sort((i, o) => {
    let s = 0;
    for (let a of t) {
      let l = gt(a, {
          resolveIdentifier(u) {
            return i[u];
          },
        }),
        c = gt(a, {
          resolveIdentifier(u) {
            return o[u];
          },
        });
      if (
        (ce(l) && ce(c) && (s = l - c),
        ne(l) && ne(c) && (s = l.localeCompare(c, "en")),
        s !== 0)
      )
        return a.direction === "desc" ? -s : s;
    }
    return ce(i.index) && ce(o.index) ? i.index - o.index : 0;
  });
  return eS.set(e, t, r), r;
}
var tS = new Ta();
function ZV(e, t) {
  if (!t) return e;
  let n = tS.get(e, t);
  if (n) return n;
  let r = gt(t, {
      resolveIdentifier() {
        throw new Error("Can't resolve identifier");
      },
    }),
    i = ce(r) ? e.slice(r) : e;
  return tS.set(e, t, i), i;
}
var nS = new Ta();
function JV(e, t) {
  if (!t) return e;
  let n = nS.get(e, t);
  if (n) return n;
  let r = gt(t, {
      resolveIdentifier() {
        throw new Error("Can't resolve identifier");
      },
    }),
    i = ce(r) ? e.slice(0, r) : e;
  return nS.set(e, t, i), i;
}
var rS = new Ta();
function e3(e, t) {
  let n = rS.get(e, t);
  if (n) return n;
  let r = t3(t, e);
  r && im(r);
  let i = e.map((o) => {
    let s = {};
    for (let a of t) {
      let l = a.alias ?? u3(a);
      s[l] = gt(a, {
        resolveIdentifier(c) {
          let u = o[c];
          return wa.is(u) ? u.read() : u;
        },
      });
    }
    return s;
  });
  return rS.set(e, t, i), i;
}
function t3(e, t) {
  let n = [];
  for (let i of e) _n(n, i);
  if (n.length === 0) return;
  let r = [];
  for (let i of t)
    for (let o of n) {
      let s = i[o];
      if (!wa.is(s)) continue;
      let a = s.preload();
      a && r.push(a);
    }
  if (r.length !== 0) return Promise.all(r);
}
function _n(e, t) {
  if ((t.type === "Identifier" && e.push(t.name), t.type === "FunctionCall"))
    for (let n of t.arguments) _n(e, n);
  if (t.type === "Case") {
    t.value && _n(e, t.value);
    for (let n of t.conditions) _n(e, n.when), _n(e, n.then);
    t.else && _n(e, t.else);
  }
  t.type === "UnaryOperation" && _n(e, t.value),
    t.type === "BinaryOperation" && (_n(e, t.left), _n(e, t.right)),
    t.type === "TypeCast" && _n(e, t.value);
}
var n3 = new _V(),
  r3 = new UV(n3);
function i3(e) {
  let { activeLocale: t } = ou(),
    n = r3.get(e, t),
    r = n.preload();
  return r && im(r), n.read();
}
function fN(e) {
  if (hu(e.from.data)) return i3(e);
  let t = A();
  t.current && Me(t.current, e) ? (e = t.current) : (t.current = e);
  let n = YV(e.from);
  return (
    (n = KV(n)),
    (n = qV(n, e.where)),
    (n = QV(n, e.orderBy)),
    (n = ZV(n, e.offset)),
    (n = JV(n, e.limit)),
    (n = e3(n, e.select)),
    n
  );
}
function gt(e, t) {
  switch (e.type) {
    case "Identifier":
      return t.resolveIdentifier(e.name);
    case "LiteralValue":
      return e.value;
    case "FunctionCall":
      return o3(e, t);
    case "Case":
      return s3(e, t);
    case "UnaryOperation":
      return a3(e, t);
    case "BinaryOperation":
      return l3(e, t);
    case "TypeCast":
      return c3(e, t);
    default:
      throw new Error(`Unsupported expression: ${JSON.stringify(e)}`);
  }
}
function o3(e, t) {
  function n(r) {
    let i = e.arguments[r];
    if (i) return gt(i, t);
  }
  switch (e.functionName) {
    case "CONTAINS": {
      let r = n(0),
        i = n(1);
      return ne(r) && ne(i) ? r.toLowerCase().includes(i.toLowerCase()) : !1;
    }
    case "STARTS_WITH": {
      let r = n(0),
        i = n(1);
      return ne(r) && ne(i) ? r.toLowerCase().startsWith(i.toLowerCase()) : !1;
    }
    case "ENDS_WITH": {
      let r = n(0),
        i = n(1);
      return ne(r) && ne(i) ? r.toLowerCase().endsWith(i.toLowerCase()) : !1;
    }
    default:
      throw new Error(`Unsupported function: ${e.functionName}`);
  }
}
function s3(e, t) {
  let n = e.value && gt(e.value, t);
  for (let r of e.conditions) {
    let i = gt(r.when, t);
    if (e.value ? Fp(i, n) : i) return gt(r.then, t);
  }
  if (e.else) return gt(e.else, t);
}
function a3(e, t) {
  let n = gt(e.value, t);
  switch (e.operator) {
    case "not":
      return !n;
    default:
      throw new Error(`Unsupported unary operation: ${e.operator}`);
  }
}
function l3(e, t) {
  let n = gt(e.left, t),
    r = gt(e.right, t);
  switch (e.operator) {
    case "and":
      return !!(n && r);
    case "or":
      return !!(n || r);
    case "==":
      return Fp(n, r);
    case "!=":
      return !Fp(n, r);
    case "<":
      return (ce(n) && ce(r)) || (tn(n) && tn(r)) ? n < r : !1;
    case "<=":
      return (ce(n) && ce(r)) || (tn(n) && tn(r)) ? n <= r : !1;
    case ">":
      return (ce(n) && ce(r)) || (tn(n) && tn(r)) ? n > r : !1;
    case ">=":
      return (ce(n) && ce(r)) || (tn(n) && tn(r)) ? n >= r : !1;
    default:
      throw new Error(`Unsupported binary operation: ${e.operator}`);
  }
}
function c3(e, t) {
  let n = gt(e.value, t);
  switch (e.dataType) {
    case "BOOLEAN":
      return !!n;
    case "NUMBER": {
      if (ce(n) && isFinite(n)) return n;
      if (ne(n)) {
        let r = parseFloat(n);
        if (isFinite(r)) return r;
      }
      return 0;
    }
    case "DATE":
      return n instanceof Date ? n : !ne(n) && !ce(n) ? void 0 : new Date(n);
    case "STRING":
      return String(n);
    default:
      throw new Error(`Unsupported type cast: ${e.dataType}`);
  }
}
function u3(e) {
  switch (e.type) {
    case "Identifier":
      return e.name;
    default:
      throw new Error(`Can't stringify expression: ${JSON.stringify(e)}`);
  }
}
function Fp(e, t) {
  return e == null && t == null
    ? !0
    : ne(e) && ne(t)
    ? e.toLowerCase() === t.toLowerCase()
    : tn(e) && tn(t)
    ? e.getTime() === t.getTime()
    : e === t;
}
function dN(e) {
  let n = Object.entries(e)
    .filter(([, r]) => !(bt(r) || De(r)))
    .map(([r, i]) => ({
      type: "BinaryOperation",
      operator: "==",
      left: {
        type: "TypeCast",
        value: { type: "Identifier", name: r },
        dataType: "STRING",
      },
      right: { type: "LiteralValue", value: String(i) },
    }));
  return n.length === 0
    ? { type: "LiteralValue", value: !1 }
    : n.reduce((r, i) => ({
        type: "BinaryOperation",
        operator: "and",
        left: r,
        right: i,
      }));
}
function f3(e, t) {
  return `${e}-${t}`;
}
function d3(e, t) {
  let r = e.indexOf(t) + 1;
  r >= e.length && (r = 0);
  let i = e[r];
  return ae(i !== void 0, "nextVariant should be defined"), i;
}
function h3(e, t) {
  if (e) {
    if (t) {
      let n = e[t];
      if (n) return n;
    }
    return e.default;
  }
}
function iS(e, t, n) {
  let { hover: r, pressed: i } = e || {};
  if (i && n) return "pressed";
  if (r && t) return "hover";
}
function p3(e, t) {
  let n = t[e];
  return n || `framer-v-${e}`;
}
function oS(e, t, n) {
  return e && n.has(e) ? e : t;
}
var m3 = Symbol("cycle");
function pN({
  variant: e,
  defaultVariant: t,
  transitions: n,
  enabledGestures: r,
  cycleOrder: i = [],
  variantProps: o = {},
  variantClassNames: s = {},
}) {
  let a = cu(),
    l = on(() => new Set(i)),
    c = S.useRef({
      isHovered: !1,
      isPressed: !1,
      baseVariant: oS(e, t, l),
      lastVariant: e,
      gestureVariant: void 0,
      defaultVariant: t,
      enabledGestures: r,
      cycleOrder: i,
      transitions: n,
    }),
    u = S.useCallback(
      (b) => {
        let {
            isHovered: C,
            isPressed: w,
            enabledGestures: k,
            defaultVariant: E,
          } = c.current,
          P = oS(b, E, l),
          I = iS(k?.[P], C, w),
          H = I ? f3(P, I) : void 0;
        return [P, H];
      },
      [l]
    ),
    f = S.useCallback(
      ({ isHovered: b, isPressed: C }) => {
        b !== void 0 && (c.current.isHovered = b),
          C !== void 0 && (c.current.isPressed = C);
        let {
            baseVariant: w,
            gestureVariant: k,
            defaultVariant: E,
          } = c.current,
          [P, I] = u(w);
        (P !== w || I !== k) &&
          ((c.current.baseVariant = P || E),
          (c.current.gestureVariant = I),
          a());
      },
      [u, a]
    ),
    d = S.useCallback(
      (b) => {
        let {
            defaultVariant: C,
            cycleOrder: w,
            baseVariant: k,
            gestureVariant: E,
          } = c.current,
          P = b === m3 ? d3(w || [], k || C) : b,
          [I, H] = u(P);
        (I !== k || H !== E) &&
          ((c.current.baseVariant = I || C),
          (c.current.gestureVariant = H),
          a());
      },
      [u, a]
    );
  if (e !== c.current.lastVariant) {
    let [b, C] = u(e);
    (c.current.lastVariant = b),
      (b !== c.current.baseVariant || C !== c.current.gestureVariant) &&
        ((c.current.baseVariant = b), (c.current.gestureVariant = C));
  }
  let {
      baseVariant: h,
      gestureVariant: g,
      defaultVariant: y,
      enabledGestures: x,
      isHovered: p,
      isPressed: m,
    } = c.current,
    v = zV(c.current.baseVariant, c.current.gestureVariant, o);
  return S.useMemo(() => {
    let b = [];
    return (
      h !== y && b.push(h),
      g && b.push(g),
      {
        variants: b,
        baseVariant: h,
        gestureVariant: g,
        transition: h3(c.current.transitions, h),
        setVariant: d,
        setGestureState: f,
        addVariantProps: v,
        classNames: Gp(p3(h, s), iS(x?.[h], p, m)),
      }
    );
  }, [h, g, p, m, v, d, y, x, f, s]);
}
function v3(e) {
  var t;
  let n =
    (t = e.__FramerMetadata__.exports.default.annotations) == null
      ? void 0
      : t.framerVariables;
  if (n)
    try {
      return JSON.parse(n);
    } catch {
      return;
    }
}
function vN(e, t) {
  return (n) => {
    let r = {},
      i = v3(t);
    for (let o in n) _e(r)[i?.[o] ?? o] = n[o];
    return T(e, { ...r });
  };
}
var g3 = new Set([
    "visibleVariantId",
    "obscuredVariantId",
    "threshold",
    "animateOnce",
    "variantAppearEffectEnabled",
    "targets",
    "exitTarget",
    "scrollDirection",
  ]),
  sS = { inputRange: [], outputRange: [] };
function y3(e, t, n) {
  let r = [],
    i = Yp(e, t, (s) => r.unshift(s, s));
  if (n) {
    let s = i[i.length - 1];
    if (!ce(s)) return sS;
    i.push(s + 1), r.push(-1);
  }
  let o = i[0];
  return ce(o)
    ? o <= 1
      ? { inputRange: i, outputRange: r }
      : {
          inputRange: [0, Math.max(o - 1, 0), ...i],
          outputRange: [-1, -1, ...r],
        }
    : sS;
}
var bN = (e) =>
  S.forwardRef((t, n) => {
    if (Ee.current() === "CANVAS") return T(e, { ...t, ref: n });
    let r = S.useRef(null),
      i = n ?? r,
      [o, s] = PA(t, g3),
      {
        visibleVariantId: a,
        obscuredVariantId: l,
        animateOnce: c,
        threshold: u,
        variantAppearEffectEnabled: f,
        targets: d,
        exitTarget: h,
        scrollDirection: g,
      } = o,
      [y, x] = S.useState(l),
      p = S.useRef(!1);
    return (
      hw(
        i,
        (m) => {
          o.targets ||
            o.scrollDirection ||
            (c && p.current === !0) ||
            (p.current !== m && ((p.current = m), x(m ? a : l)));
        },
        { enabled: f, animateOnce: c, threshold: { y: u } }
      ),
      S.useEffect(() => {
        if (g || !d) return;
        let m = {},
          v;
        return ei(({ y: b }) => {
          var C;
          if (!d[0] || (d[0].ref && !d[0].ref.current)) return;
          let { inputRange: w, outputRange: k } = y3(
            d,
            (u ?? 0) * b.containerLength,
            h
          );
          if (w.length === 0 || w.length !== k.length) return;
          let E = Math.floor(Hi(b.current, w, k));
          if (c && m[E]) return;
          m[E] = !0;
          let P = ((C = d[E]) == null ? void 0 : C.target) ?? void 0;
          P !== v && ((v = P), x(P));
        });
      }, [c, u, d, t.variant]),
      Pw(g, x, { enabled: f, repeat: !c }),
      !("variantAppearEffectEnabled" in o) || f === !0
        ? T(e, { ...s, variant: y ?? t.variant, ref: i })
        : T(e, { ...s })
    );
  });
var Br = (() => {
  function e(t, n) {
    return { a: t, b: n };
  }
  return (
    (e.intersection = (t, n) => {
      let r = t.a.x,
        i = t.a.y,
        o = t.b.x,
        s = t.b.y,
        a = n.a.x,
        l = n.a.y,
        c = n.b.x,
        u = n.b.y,
        f = (r - o) * (l - u) - (i - s) * (a - c);
      if (f === 0) return null;
      let d = ((a - c) * (r * s - i * o) - (r - o) * (a * u - l * c)) / f,
        h = ((l - u) * (r * s - i * o) - (i - s) * (a * u - l * c)) / f;
      return { x: d, y: h };
    }),
    (e.intersectionAngle = (t, n) => {
      let r = t.b.x - t.a.x,
        i = t.b.y - t.a.y,
        o = n.b.x - n.a.x,
        s = n.b.y - n.a.y;
      return Math.atan2(r * s - i * o, r * o + i * s) * (180 / Math.PI);
    }),
    (e.isOrthogonal = (t) => t.a.x === t.b.x || t.a.y === t.b.y),
    (e.perpendicular = (t, n) => {
      let r = t.a.x - t.b.x,
        i = t.a.y - t.b.y,
        o = lt(n.x - i, n.y + r);
      return e(o, n);
    }),
    (e.projectPoint = (t, n) => {
      let r = e.perpendicular(t, n);
      return e.intersection(t, r);
    }),
    (e.pointAtPercentDistance = (t, n) => {
      let r = e.distance(t),
        i = (n * r) / r;
      return { x: i * t.b.x + (1 - i) * t.a.x, y: i * t.b.y + (1 - i) * t.a.y };
    }),
    (e.distance = (t) => lt.distance(t.a, t.b)),
    e
  );
})();
function b3(e) {
  var t, n;
  let r = (e * Math.PI) / 180,
    i = { x: -Math.sin(r) * 100, y: Math.cos(r) * 100 },
    o = lt(i.x, i.y),
    s = Br(lt(0.5, 0.5), o),
    a = Gc.points({ x: 0, y: 0, width: 1, height: 1 }),
    l = a
      .map((y) => ({ point: y, distance: lt.distance(o, y) }))
      .sort((y, x) => y.distance - x.distance),
    c = (t = l[0]) == null ? void 0 : t.point,
    u = (n = l[1]) == null ? void 0 : n.point;
  ae(c && u, "linearGradientLine: Must have 2 closest points.");
  let [f, d] = a.filter((y) => !lt.isEqual(y, c) && !lt.isEqual(y, u));
  ae(f && d, "linearGradientLine: Must have 2 opposing points.");
  let h = Br.intersection(s, Br(c, u)),
    g = Br.intersection(s, Br(f, d));
  return (
    ae(h && g, "linearGradientLine: Must have a start and end point."), Br(h, g)
  );
}
function x3(e, t) {
  var n, r;
  let i = b3(e.angle),
    o = Sa(e),
    s = ((n = o[0]) == null ? void 0 : n.position) ?? 0,
    a = ((r = o[o.length - 1]) == null ? void 0 : r.position) ?? 1,
    l = Br.pointAtPercentDistance(i, s),
    c = Br.pointAtPercentDistance(i, a),
    u = Bi([s, a], [0, 1]);
  return {
    id: `id${t}g${aa.hash(e)}`,
    x1: l.x,
    y1: l.y,
    x2: c.x,
    y2: c.y,
    stops: o.map((f) => ({
      color: f.value,
      alpha: Wp.getAlpha(f.value) * e.alpha,
      position: u(f.position),
    })),
  };
}
function S3(e, t) {
  return {
    id: `id${t}g${la.hash(e)}`,
    widthFactor: e.widthFactor,
    heightFactor: e.heightFactor,
    centerAnchorX: e.centerAnchorX,
    centerAnchorY: e.centerAnchorY,
    stops: Sa(e).map((n) => ({
      color: n.value,
      alpha: Wp.getAlpha(n.value) * e.alpha,
      position: n.position,
    })),
  };
}
function Kw(e) {
  if (!ne(e) || e.charAt(e.length - 1) !== "%") return !1;
  let n = e.slice(0, -1),
    r = parseFloat(n);
  return ce(r);
}
function qw(e) {
  let t = e.slice(0, -1),
    n = parseFloat(t);
  return ce(n) ? n : 50;
}
function aS(e) {
  return Kw(e) ? qw(e) / 100 : e === "left" ? 0 : e === "right" ? 1 : 0.5;
}
function lS(e) {
  return Kw(e) ? qw(e) / 100 : e === "top" ? 0 : e === "bottom" ? 1 : 0.5;
}
function w3(e, t, n, r) {
  if (
    ((e = Be.get(e, "#09F")),
    !ir.isImageObject(e) || !e.pixelWidth || !e.pixelHeight)
  )
    return;
  let i = e.pixelWidth,
    o = e.pixelHeight,
    s,
    { fit: a } = e,
    l = 1,
    c = 1,
    u = 0,
    f = 0;
  if (a === "fill" || a === "fit" || a === "tile" || !a) {
    let h = 1,
      g = 1,
      y = i / o,
      x = t.height * y,
      p = t.width / y,
      m = x / t.width,
      v = p / t.height;
    if (a === "tile") {
      e.backgroundSize ?? (e.backgroundSize = 1),
        (l = Math.round(e.backgroundSize * (i / 2))),
        (c = Math.round(e.backgroundSize * (o / 2)));
      let b = t.x ?? 0,
        C = t.y ?? 0,
        w = 0,
        k = 0;
      r && ((w = b), (k = C)),
        (u = (t.width - l) * aS(e.positionX) + w),
        (f = (t.height - c) * lS(e.positionY) + k),
        (s = `translate(${u + b}, ${f + C})`);
    } else
      (a === "fill" || !a ? v > m : v < m)
        ? ((g = v), (f = (1 - v) * lS(e.positionY)))
        : ((h = m), (u = (1 - m) * aS(e.positionX))),
        (s = `translate(${u}, ${f}) scale(${h}, ${g})`);
  }
  return {
    id: `id${n}g-fillImage`,
    path: e.src ?? "",
    transform: s,
    width: l,
    height: c,
    offsetX: u,
    offsetY: f,
  };
}
var C3 = S.createContext(void 0),
  k3 = () => S.useContext(C3),
  T3 = "framer/asset-reference,";
function E3(e) {
  return e.startsWith(`data:${T3}`);
}
function R3(e, t) {
  if (/^\w+:/.test(e) && !E3(e)) return e;
  typeof t != "number"
    ? (t = void 0)
    : t <= 512
    ? (t = 512)
    : t <= 1024
    ? (t = 1024)
    : t <= 2048
    ? (t = 2048)
    : (t = 4096);
  let n = Ee.current() === "EXPORT";
  return Ye.assetResolver(e, { pixelSize: t, isExport: n }) ?? "";
}
var P3 = ({
    id: e,
    path: t,
    transform: n,
    repeat: r,
    width: i,
    height: o,
    offsetX: s,
    offsetY: a,
  }) => {
    let l = R3(t);
    return T("pattern", {
      id: e,
      width: r ? i : "100%",
      height: r ? o : "100%",
      patternContentUnits: r ? void 0 : "objectBoundingBox",
      patternUnits: r ? "userSpaceOnUse" : void 0,
      x: r ? s : void 0,
      y: r ? a : void 0,
      children: T(
        "image",
        {
          width: r ? i : 1,
          height: r ? o : 1,
          href: l,
          preserveAspectRatio: "none",
          transform: r ? void 0 : n,
          x: r ? 0 : void 0,
          y: r ? 0 : void 0,
        },
        l
      ),
    });
  },
  cS = Vn(),
  I3 = class {
    constructor(e, t, n, r, i = 0) {
      (this.id = e),
        (this.svg = t),
        (this.innerHTML = n),
        (this.viewBox = r),
        (this.count = i);
    }
  },
  F3 = class {
    constructor() {
      R(this, "entries", new Map());
    }
    debugGetEntries() {
      return this.entries;
    }
    subscribe(e, t, n) {
      if (!e || e === "") return "";
      let r = this.entries.get(e);
      if (!r) {
        n || (n = "svg" + String(sw(e)) + "_" + String(e.length));
        let i = e,
          o,
          s = L3(e);
        s && (t && _3(s, n), (s.id = n), (o = D3(s)), (i = s.outerHTML)),
          (r = this.createDOMElementFor(i, n, o)),
          this.entries.set(e, r);
      }
      return (r.count += 1), r.innerHTML;
    }
    getViewBox(e) {
      if (!e || e === "") return;
      let t = this.entries.get(e);
      return t?.viewBox;
    }
    unsubscribe(e) {
      if (!e || e === "") return;
      let t = this.entries.get(e);
      t &&
        ((t.count -= 1),
        !(t.count > 0) && setTimeout(() => this.maybeRemoveEntry(e), 5e3));
    }
    maybeRemoveEntry(e) {
      let t = this.entries.get(e);
      t && (t.count > 0 || (this.entries.delete(e), this.removeDOMElement(t)));
    }
    removeDOMElement(e) {
      let t = "container_" + e.id;
      if (cS) {
        let n = document?.querySelector("#" + t);
        n?.remove();
      }
    }
    createDOMElementFor(e, t, n) {
      let r = "container_" + t;
      if (cS) {
        let a = document.querySelector("#svg-templates");
        if (
          (a ||
            ((a = document.createElement("div")),
            (a.id = "svg-templates"),
            (a.style.position = "absolute"),
            (a.style.top = "0"),
            (a.style.left = "0"),
            (a.style.width = "0"),
            (a.style.height = "0"),
            (a.style.overflow = "hidden"),
            document.body.appendChild(a)),
          !document.querySelector("#" + r))
        ) {
          let l = document.createElement("div");
          (l.id = r),
            (l.innerHTML = e),
            l.firstElementChild && (l.firstElementChild.id = t),
            a.appendChild(l);
        }
      }
      let i = n ? `0 0 ${n.width} ${n.height}` : void 0,
        s = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="width: 100%; height: 100%"${
          i ? ` viewBox="${i}"` : ""
        }><use href="#${t}"></use></svg>`;
      return new I3(t, e, s, i);
    }
    clear() {
      this.entries.clear();
    }
    generateTemplates() {
      let e = [],
        t =
          "position: absolute; overflow: hidden; top: 0; left: 0; width: 0; height: 0";
      e.push(`<div id="svg-templates" style="${t}">`);
      for (let n of this.entries.values()) {
        let r = "container_" + n.id;
        e.push(`  <div id="${r}">`), e.push(`    ${n.svg}`), e.push("  </div>");
      }
      return (
        e.push("</div>"),
        e.join(`
`)
      );
    }
  },
  go = new F3();
function L3(e) {
  if (typeof DOMParser > "u") {
    console.warn("unable to find DOMParser");
    return;
  }
  try {
    let r = new DOMParser()
      .parseFromString(e, "text/html")
      .getElementsByTagName("svg")[0];
    if (!r) throw Error("no svg element found");
    return r;
  } catch {
    return;
  }
}
function _3(e, t) {
  let n = M3(t);
  Qw(e, n);
}
function M3(e) {
  return e.replace(/[^\w\-:.]|^[^a-z]+/gi, "");
}
function Qw(e, t) {
  O3(e, t),
    Array.from(e.children).forEach((r) => {
      Qw(r, t);
    });
}
function O3(e, t) {
  e.getAttributeNames().forEach((r) => {
    let i = e.getAttribute(r);
    if (!i) return;
    if (
      (r === "id" && e.setAttribute(r, `${t}_${i}`),
      r === "href" || r === "xlink:href")
    ) {
      let [s, a] = i.split("#");
      if (s) return;
      e.setAttribute(r, `#${t}_${a}`);
      return;
    }
    let o = "url(#";
    if (i.includes(o)) {
      let s = i.replace(o, `${o}${t}_`);
      e.setAttribute(r, s);
    }
  });
}
var A3 = {
  cm: 96 / 2.54,
  mm: 96 / 2.54 / 10,
  Q: 96 / 2.54 / 40,
  in: 96,
  pc: 96 / 6,
  pt: 96 / 72,
  px: 1,
  em: 16,
  ex: 8,
  ch: 8,
  rem: 16,
};
function uS(e) {
  var t;
  if (!e) return;
  let n = /(-?[\d.]+)([a-z%]*)/.exec(e);
  if (
    !(n?.[1] === void 0 || n?.[2] === void 0) &&
    !((t = n[2]) != null && t.startsWith("%"))
  )
    return Math.round(parseFloat(n[1]) * (A3[n[2]] || 1));
}
function D3(e) {
  let t = uS(e.getAttribute("width")),
    n = uS(e.getAttribute("height"));
  if (!(typeof t != "number" || typeof n != "number") && !(t <= 0 || n <= 0))
    return { width: t, height: n };
}
function IN(e) {
  let t = ya(),
    n = xa(e),
    r = S.useRef(null),
    i = k3();
  return (
    uu(e, r),
    T($3, { ...e, innerRef: r, parentSize: t, layoutId: n, providedWindow: i })
  );
}
var V3 = 5e4;
function B3(e) {
  return e.indexOf("image") >= 0;
}
function H3(e) {
  return e.indexOf("var(--") >= 0;
}
function z3(e) {
  return !!(
    e.borderRadius ||
    e.borderBottomLeftRadius ||
    e.borderBottomRightRadius ||
    e.borderTopLeftRadius ||
    e.borderTopRightRadius
  );
}
function fS(e, t) {
  var n, r;
  let i = e.current;
  if (!i) return;
  let o = t.providedWindow ?? $t,
    s = i.firstElementChild;
  if (!s || !(s instanceof o.SVGSVGElement)) return;
  if (!s.getAttribute("viewBox")) {
    let h = go.getViewBox(t.svg);
    h && s.setAttribute("viewBox", h);
  }
  let { withExternalLayout: a, parentSize: l } = t;
  if (!a && ga(t) && l !== 1 && l !== 2) return;
  let { intrinsicWidth: u, intrinsicHeight: f, _constraints: d } = t;
  ((n = s.viewBox.baseVal) == null ? void 0 : n.width) === 0 &&
    ((r = s.viewBox.baseVal) == null ? void 0 : r.height) === 0 &&
    X(u) &&
    X(f) &&
    s.setAttribute("viewBox", `0 0 ${u} ${f}`),
    d && d.aspectRatio
      ? s.setAttribute("preserveAspectRatio", "")
      : s.setAttribute("preserveAspectRatio", "none"),
    s.setAttribute("width", "100%"),
    s.setAttribute("height", "100%");
}
function N3() {
  return (
    S.useInsertionEffect(() => {
      ba();
    }, []),
    null
  );
}
var $3 = (() => {
    var e;
    return (
      (e = class extends Js {
        constructor() {
          super(...arguments),
            R(this, "container", S.createRef()),
            R(this, "svgElement", null),
            R(this, "setSVGElement", (t) => {
              (this.svgElement = t), this.setLayerElement(t);
            }),
            R(this, "previouslyRenderedSVG", ""),
            R(this, "unmountedSVG", "");
        }
        static frame(t) {
          return na(t, t.parentSize || 0);
        }
        get frame() {
          return na(this.props, this.props.parentSize || 0);
        }
        componentDidMount() {
          if (this.unmountedSVG) {
            let { svgContentId: t } = this.props,
              n = t ? "svg" + t : null;
            go.subscribe(this.unmountedSVG, !t, n),
              (this.previouslyRenderedSVG = this.unmountedSVG);
          }
          this.props.svgContentId || fS(this.container, this.props);
        }
        componentWillUnmount() {
          go.unsubscribe(this.previouslyRenderedSVG),
            (this.unmountedSVG = this.previouslyRenderedSVG),
            (this.previouslyRenderedSVG = "");
        }
        componentDidUpdate(t) {
          if ((super.componentDidUpdate(t), this.props.svgContentId)) return;
          let { fill: n } = this.props;
          ir.isImageObject(n) &&
            ir.isImageObject(t.fill) &&
            n.src !== t.fill.src &&
            ow(this.svgElement, "fill", null, !1),
            fS(this.container, this.props);
        }
        collectLayout(t, n) {
          if (this.props.withExternalLayout) {
            (n.width = "100%"),
              (n.height = "100%"),
              (n.aspectRatio = "inherit");
            return;
          }
          let r = this.frame,
            {
              rotation: i,
              intrinsicWidth: o,
              intrinsicHeight: s,
              width: a,
              height: l,
            } = this.props,
            c = Be.getNumber(i);
          if (
            ((t.opacity = X(this.props.opacity) ? this.props.opacity : 1),
            Ee.hasRestrictions() && r)
          ) {
            Object.assign(t, {
              transform: `translate(${r.x}px, ${r.y}px) rotate(${c.toFixed(
                4
              )}deg)`,
              width: `${r.width}px`,
              height: `${r.height}px`,
            }),
              ga(this.props) && (t.position = "absolute");
            let u = r.width / (o || 1),
              f = r.height / (s || 1);
            n.transformOrigin = "top left";
            let { zoom: d, target: h } = Xc;
            if (h === "EXPORT") {
              let g = d > 1 ? d : 1;
              (n.transform = `scale(${u * g}, ${f * g})`), (n.zoom = 1 / g);
            } else n.transform = `scale(${u}, ${f})`;
            o && s && ((n.width = o), (n.height = s));
          } else {
            let { left: u, right: f, top: d, bottom: h } = this.props;
            Object.assign(t, {
              left: u,
              right: f,
              top: d,
              bottom: h,
              width: a,
              height: l,
              rotate: c,
            }),
              Object.assign(n, {
                left: 0,
                top: 0,
                bottom: 0,
                right: 0,
                position: "absolute",
              });
          }
        }
        render() {
          let {
            id: t,
            visible: n,
            style: r,
            fill: i,
            svg: o,
            intrinsicHeight: s,
            intrinsicWidth: a,
            title: l,
            description: c,
            layoutId: u,
            className: f,
            variants: d,
            withExternalLayout: h,
            innerRef: g,
            svgContentId: y,
            height: x,
            opacity: p,
            width: m,
            ...v
          } = this.props;
          if (!h && (!n || !t)) return null;
          let b = t ?? u ?? "svg",
            C = this.frame,
            w = C || { width: a || 100, height: s || 100 },
            k = { ...r, imageRendering: "pixelated", flexShrink: 0 },
            E = {};
          this.collectLayout(k, E),
            DO(this.props, k),
            Up(this.props, k),
            Js.applyWillChange(this.props, k, !1);
          let P = null;
          if (typeof i == "string" || B.isColorObject(i)) {
            let D = B.isColorObject(i) ? i.initialValue || B.toRgbString(i) : i;
            (k.fill = D), (k.color = D);
          } else if (aa.isLinearGradient(i)) {
            let D = i,
              Q = `${encodeURI(t || "")}g${aa.hash(D)}`;
            k.fill = `url(#${Q})`;
            let { stops: V, x1: te, x2: Y, y1: J, y2: jt } = x3(D, b);
            P = T("svg", {
              ref: this.setSVGElement,
              xmlns: "http://www.w3.org/2000/svg",
              width: "100%",
              height: "100%",
              style: { position: "absolute" },
              children: T("linearGradient", {
                id: Q,
                x1: te,
                x2: Y,
                y1: J,
                y2: jt,
                children: V.map((re, ct) =>
                  T(
                    "stop",
                    {
                      offset: re.position,
                      stopColor: re.color,
                      stopOpacity: re.alpha,
                    },
                    ct
                  )
                ),
              }),
            });
          } else if (la.isRadialGradient(i)) {
            let D = i,
              Q = `${encodeURI(t || "")}g${la.hash(D)}`;
            k.fill = `url(#${Q})`;
            let V = S3(D, b);
            P = T("svg", {
              ref: this.setSVGElement,
              xmlns: "http://www.w3.org/2000/svg",
              width: "100%",
              height: "100%",
              style: { position: "absolute" },
              children: T("radialGradient", {
                id: Q,
                cy: D.centerAnchorY,
                cx: D.centerAnchorX,
                r: D.widthFactor,
                children: V.stops.map((te, Y) =>
                  T(
                    "stop",
                    {
                      offset: te.position,
                      stopColor: te.color,
                      stopOpacity: te.alpha,
                    },
                    Y
                  )
                ),
              }),
            });
          } else if (ir.isImageObject(i)) {
            let D = w3(i, w, b);
            D &&
              ((k.fill = `url(#${D.id})`),
              (P = T("svg", {
                ref: this.setSVGElement,
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                width: "100%",
                height: "100%",
                style: { position: "absolute" },
                children: T("defs", { children: T(P3, { ...D }) }),
              })));
          }
          let I = { "data-framer-component-type": "SVG" },
            H = !C;
          H && Object.assign(I, GS(this.props.center));
          let _ =
              !P &&
              !k.fill &&
              !k.background &&
              !k.backgroundImage &&
              o.length < V3 &&
              !B3(o) &&
              !H3(o),
            Z = null;
          if (_)
            (k.backgroundSize = "100% 100%"),
              (k.backgroundImage = `url('data:image/svg+xml;utf8,${encodeURIComponent(
                o
              )}')`),
              go.unsubscribe(this.previouslyRenderedSVG),
              (this.previouslyRenderedSVG = "");
          else {
            let D = y ? "svg" + y : null,
              Q = go.subscribe(o, !y, D);
            go.unsubscribe(this.previouslyRenderedSVG),
              (this.previouslyRenderedSVG = o),
              z3(k) && (k.overflow = "hidden"),
              (Z = se(ze, {
                children: [
                  P,
                  T(
                    "div",
                    {
                      className: "svgContainer",
                      style: E,
                      ref: this.container,
                      dangerouslySetInnerHTML: { __html: Q },
                    },
                    ir.isImageObject(i) ? i.src : ""
                  ),
                ],
              }));
          }
          let N = au(this.props.as),
            { href: ee, target: G, rel: z, onClick: j } = this.props;
          return se(N, {
            ...I,
            ...v,
            layoutId: u,
            transformTemplate: H ? lu(this.props.center) : void 0,
            id: t,
            ref: g,
            style: k,
            className: f,
            variants: d,
            tabIndex: this.props.tabIndex,
            role: l || c ? "img" : void 0,
            "aria-label": l,
            "aria-description": c,
            href: ee,
            target: G,
            rel: z,
            onClick: j,
            children: [Z, T(N3, {})],
          });
        }
      }),
      R(e, "supportsConstraints", !0),
      R(e, "defaultSVGProps", {
        left: void 0,
        right: void 0,
        top: void 0,
        bottom: void 0,
        style: void 0,
        _constraints: { enabled: !0, aspectRatio: null },
        parentSize: 0,
        rotation: 0,
        visible: !0,
        svg: "",
        shadows: [],
      }),
      R(e, "defaultProps", { ...Js.defaultProps, ...e.defaultSVGProps }),
      e
    );
  })(),
  W3 = /[&<>'"]/g,
  j3 = (e) =>
    e.replace(
      W3,
      (t) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          "'": "&#39;",
          '"': "&quot;",
        }[t] || t)
    ),
  U3 =
    /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi;
function X3(e, t, n, r) {
  return e.replace(U3, (i, o, s, a, l, c, u) => {
    var f, d;
    if (s.toLowerCase() !== "a") return i;
    let h = l || c,
      g = Qp(h.replace(/&amp;/g, "&"));
    if (!g || !g.target) return i;
    let y = t(g.target);
    if (!Jx(y) || !Jx(n)) return i;
    let x = y.path,
      p = n.path;
    if (!x || !p) return i;
    let m = ` data-framer-page-link-target="${g.target}"`,
      v = ru(y, g.element ?? void 0);
    v && (m += ` data-framer-page-link-element="${g.element}"`);
    let b = Zp(h);
    if (!b || ne(b)) return i;
    Bw(n, b, r) && (m += " data-framer-page-link-current");
    let C = x,
      w = Object.assign(
        {},
        r,
        (f = g.collectionItem) == null ? void 0 : f.pathVariables
      );
    if (
      (Object.keys(w).length > 0 && (C = C.replace(Dw, (k, E) => "" + w[E])),
      (d = g.collectionItem) != null && d.pathVariables)
    ) {
      let k = new URLSearchParams(g.collectionItem.pathVariables);
      m += ` data-framer-page-link-path-variables="${k}"`;
    }
    return (C = SS(p, C)), o + a + `"${j3(C + (v ? `#${v}` : ""))}"` + m + u;
  });
}
var G3 = Gt(_p(), 1);
var xo = "CUSTOM;";
function Y3(e, t) {
  if (!t) return e.substring(0, e.lastIndexOf("."));
  let n =
      t.font.preferredFamily === ""
        ? t.font.fontFamily
        : t.font.preferredFamily,
    r =
      t.font.preferredSubFamily === ""
        ? t.font.fontSubFamily
        : t.font.preferredSubFamily;
  return `${n} ${r}`;
}
var K3 = class {
  constructor() {
    R(this, "name", "custom"),
      R(this, "fontFamilies", []),
      R(this, "byFamilyName", new Map()),
      R(this, "assetsByFamily", new Map());
  }
  importFonts(e) {
    var t;
    (this.fontFamilies.length = 0),
      this.byFamilyName.clear(),
      this.assetsByFamily.clear();
    let n = [];
    for (let r of e) {
      if (!this.isValidCustomFontAsset(r)) continue;
      let i = Y3(r.name, r.properties),
        o = this.createFontFamily(i),
        s = {
          family: o,
          selector: `${xo}${i}`,
          variant: this.inferVariantName(i),
          postscriptName:
            (t = r.properties) == null ? void 0 : t.font.postscriptName,
          file: r.url,
        };
      o.fonts.push(s),
        (o.owner = r.ownerType === "team" ? "team" : "project"),
        this.assetsByFamily.set(i, r),
        n.push(...o.fonts);
    }
    return n;
  }
  isValidCustomFontAsset(e) {
    var t;
    return !e.mimeType.startsWith("font/") ||
      ((t = e.properties) == null ? void 0 : t.kind) !== "font" ||
      !e.properties.font
      ? !1
      : "fontFamily" in e.properties.font;
  }
  inferVariantName(e) {
    let t = [
        "thin",
        "ultra light",
        "extra light",
        "light",
        "normal",
        "medium",
        "semi bold",
        "bold",
        "extra bold",
        "black",
      ],
      n = [...t.map((s) => `${s} italic`), ...t],
      r = e.toLowerCase(),
      i = [...r.split(" "), ...r.split("-"), ...r.split("_")],
      o = n.find((s) => i.includes(s) || i.includes(s.replace(/\s+/g, "")));
    return o ? o.replace(/^\w|\s\w/g, (s) => s.toUpperCase()) : "Regular";
  }
  createFontFamily(e) {
    let t = this.byFamilyName.get(e);
    if (t) return t;
    let n = { source: this.name, name: e, fonts: [] };
    return this.addFontFamily(n), n;
  }
  addFontFamily(e) {
    this.fontFamilies.push(e), this.byFamilyName.set(e.name, e);
  }
  parseSelector(e) {
    if (!e.startsWith(xo)) return null;
    let t = e.split(xo);
    return t[1] === void 0 ? null : { source: "custom", name: t[1] };
  }
  getFontBySelector(e, t = !0) {
    let n = this.parseSelector(e);
    if (!n || (!t && !this.byFamilyName.get(n.name))) return;
    let r = this.getFontFamilyByName(n.name).fonts;
    return (
      r.find((o) => {
        var s;
        return (s = o.file) == null ? void 0 : s.endsWith(".woff2");
      }) || r[0]
    );
  }
  getFontFamilyByName(e) {
    let t = this.byFamilyName.get(e);
    if (t) return t;
    let n = { source: "custom", name: e, fonts: [] };
    return (
      n.fonts.push({
        selector: `${xo}${e}`,
        variant: this.inferVariantName(e),
        family: n,
      }),
      n
    );
  }
};
function Zw(e, t, n) {
  if (t.length === 0) return {};
  let r = n(e);
  if (!r) return {};
  let { weight: i, style: o } = r,
    s = new Map(),
    a = new Map();
  t.forEach((f) => {
    let d = ne(f) ? f : f.name.toLocaleLowerCase(),
      h = n(d);
    h &&
      (s.set(`${h.weight}-${h.style}`, d),
      !(h.weight <= i) && (a.has(h.style) || a.set(h.style, d)));
  });
  let l = a.get(o),
    c = a.get("italic") ?? a.get("oblique");
  r.weight <= 300
    ? ((l = s.get(`400-${o}`) ?? l),
      (c = s.get("400-italic") ?? s.get("400-oblique") ?? c))
    : r.weight <= 500
    ? ((l = s.get(`700-${o}`) ?? l),
      (c = s.get("700-italic") ?? s.get("700-oblique") ?? c))
    : ((l = s.get(`900-${o}`) ?? l),
      (c = s.get("900-italic") ?? s.get("900-oblique") ?? c));
  let u = s.get(`${i}-italic`) ?? s.get(`${i}-oblique`);
  return { variantBold: l, variantItalic: u, variantBoldItalic: c };
}
var q3 = ["display", "sans", "serif", "slab", "handwritten", "script"];
function Q3(e) {
  return e
    .split(",")
    .map((t) => t.trim().toLowerCase())
    .filter(Z3);
}
function Z3(e) {
  return q3.includes(e);
}
var Nc = "FS;",
  Jw = {
    thin: 100,
    hairline: 100,
    extralight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    ultra: 800,
    black: 900,
    heavy: 900,
  },
  eC = Object.keys(Jw),
  J3 = new RegExp(`^(?:${[...eC, "italic"].join("|")})`, "u"),
  Hr = class {
    constructor() {
      R(this, "name", "fontshare"),
        R(this, "fontFamilies", []),
        R(this, "byFamilyName", new Map());
    }
    getFontFamilyByName(e) {
      return this.byFamilyName.get(e) ?? null;
    }
    static parseVariant(e) {
      let t = e.split(" "),
        n = eC.find((s) => t.includes(s)),
        r = e.includes("italic") ? "italic" : "normal";
      return {
        weight: (n && Jw[n]) || 400,
        style: r === "italic" ? r : "normal",
      };
    }
    parseSelector(e) {
      if (!e.startsWith(Nc)) return null;
      let t = e.split("-");
      if (t.length !== 2) return null;
      let [n, r] = t;
      return !n || !r
        ? null
        : { name: n.replace(Nc, ""), variant: r, source: this.name };
    }
    static createSelector(e, t) {
      return `${Nc}${e}-${t}`;
    }
    addFontFamily(e) {
      this.fontFamilies.push(e), this.byFamilyName.set(e.name, e);
    }
    importFonts(e) {
      (this.fontFamilies.length = 0), this.byFamilyName.clear();
      let t = [];
      for (let n of e) {
        let r = n.font_styles.filter((i) => {
          let o = i.name.toLowerCase();
          return !(!J3.exec(o) || o.endsWith("wide"));
        });
        for (let i of r) {
          let { name: o } = n,
            s = i.name.toLowerCase(),
            a = this.getFontFamilyByName(o);
          a ||
            ((a = { name: o, fonts: [], source: this.name }),
            this.addFontFamily(a));
          let l = Hr.createSelector(o, s),
            c = Hr.parseVariant(s) || { weight: void 0, style: void 0 },
            { weight: u, style: f } = c,
            {
              variantBold: d,
              variantBoldItalic: h,
              variantItalic: g,
            } = Zw(s, r, Hr.parseVariant),
            y = {
              family: a,
              variant: s,
              selector: l,
              selectorBold: d ? Hr.createSelector(o, d) : void 0,
              selectorBoldItalic: h ? Hr.createSelector(o, h) : void 0,
              selectorItalic: g ? Hr.createSelector(o, g) : void 0,
              weight: u,
              style: f,
              file: i.file,
              category: e4(n.category),
            };
          a.fonts.push(y), t.push(y);
        }
      }
      return t;
    }
  };
function e4(e) {
  let t = {
      serif: "serif",
      sans: "sans-serif",
      slab: "slab",
      display: "display",
      handwritten: "handwriting",
      script: "handwriting",
    },
    n = Q3(e)[0];
  return n && t[n];
}
var t4 = "Inter",
  n4 = {
    Thin: 100,
    ExtraLight: 200,
    Light: 300,
    "": 400,
    Medium: 500,
    SemiBold: 600,
    Bold: 700,
    ExtraBold: 800,
    Black: 900,
  },
  dS = class {
    constructor() {
      R(this, "name", "framer"),
        R(this, "fontFamilies", []),
        R(this, "byFamilyName", new Map());
    }
    getFontFamilyByName(e) {
      return this.byFamilyName.get(e) ?? null;
    }
    addFontFamily(e) {
      let t = { name: e, fonts: [], source: this.name };
      return this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t;
    }
    static getDraftFontPropertiesBySelector(e) {
      if (!e.startsWith(t4)) return null;
      let t = e.split("-"),
        [n, r = ""] = t;
      if (!n) return null;
      let i = r.includes("Italic") ? "italic" : "normal",
        o = r.replace("Italic", ""),
        s = (o && n4[o]) || 400;
      return {
        family: n,
        style: i,
        weight: s,
        source: "framer",
        variant: void 0,
        category: "sans-serif",
      };
    }
    importFonts(e) {
      (this.fontFamilies.length = 0), this.byFamilyName.clear();
      let t = [];
      return (
        e.forEach((n) => {
          let { familyName: r, ...i } = n,
            o = this.getFontFamilyByName(r);
          o || (o = this.addFontFamily(r));
          let s = { ...i, family: o };
          o.fonts.push(s), t.push(s);
        }),
        t
      );
    }
  },
  $c = "GF;",
  zr = class {
    constructor() {
      R(this, "name", "google"),
        R(this, "fontFamilies", []),
        R(this, "byFamilyName", new Map());
    }
    getFontFamilyByName(e) {
      return this.byFamilyName.get(e) ?? null;
    }
    static parseVariant(e) {
      if (e === "regular") return { style: "normal", weight: 400 };
      let t = /(\d*)(normal|italic)?/.exec(e);
      if (!t) return null;
      let n = parseInt(t[1] || "400"),
        r = t[2] === "italic" ? "italic" : "normal";
      return { weight: n, style: r };
    }
    parseSelector(e) {
      if (!e.startsWith($c)) return null;
      let t = e.split("-");
      if (t.length !== 2) return null;
      let [n, r] = t;
      return !n || !r
        ? null
        : { name: n.replace($c, ""), variant: r, source: this.name };
    }
    static createSelector(e, t) {
      return `${$c}${e}-${t}`;
    }
    addFontFamily(e) {
      let t = { name: e, fonts: [], source: this.name };
      return this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t;
    }
    importFonts(e) {
      (this.fontFamilies.length = 0), this.byFamilyName.clear();
      let t = [];
      return (
        e.forEach((n) => {
          n.variants.forEach((r) => {
            var i;
            let o = n.family,
              s = this.getFontFamilyByName(o);
            s || (s = this.addFontFamily(o));
            let a = zr.parseVariant(r) ?? {},
              { weight: l, style: c } = a,
              u = zr.createSelector(o, r),
              {
                variantBold: f,
                variantItalic: d,
                variantBoldItalic: h,
              } = Zw(r, n.variants, zr.parseVariant),
              g = {
                family: s,
                variant: r,
                selector: u,
                selectorBold: f ? zr.createSelector(o, f) : void 0,
                selectorBoldItalic: h ? zr.createSelector(o, h) : void 0,
                selectorItalic: d ? zr.createSelector(o, d) : void 0,
                weight: l,
                style: c,
                category: r4(n.category),
                file:
                  (i = n.files[r]) == null
                    ? void 0
                    : i.replace("http://", "https://"),
              };
            s.fonts.push(g), t.push(g);
          });
        }),
        t
      );
    }
  };
function r4(e) {
  let t = {
    serif: "serif",
    "sans-serif": "sans-serif",
    display: "display",
    handwriting: "handwriting",
    monospace: "monospace",
  };
  if (e) return t[e];
}
var i4 = Gt(jF(), 1),
  hS = 5e3,
  o4 = 3,
  tC = class extends Error {
    constructor(e) {
      super(e), (this.name = "FontLoadingError");
    }
  },
  mp = new Map(),
  vp = new Map(),
  s4 = (e, t) => nC(e, t);
async function nC(e, t, n = 0) {
  let { family: r, url: i, stretch: o, unicodeRange: s } = e,
    a = e.weight || 500,
    l = e.style || "normal",
    c = `${r}-${l}-${a}-${i}`;
  if (!mp.has(c) || n > 0) {
    let u = new FontFace(r, `url(${i})`, {
        weight: ne(a) ? a : a?.toString(),
        style: l,
        stretch: o,
        unicodeRange: s,
      }),
      f = u
        .load()
        .then(() => (t.fonts.add(u), rC(r, l, a)))
        .catch((d) => {
          if (d.name !== "NetworkError") throw d;
          if (n < o4) return nC(e, t, n + 1);
          throw new tC(
            `Font loading failed after ${n} retries due to network error: ${JSON.stringify(
              {
                family: r,
                style: l,
                weight: a,
                url: i,
                stretch: o,
                unicodeRange: s,
              }
            )}`
          );
        });
    mp.set(c, f);
  }
  await mp.get(c);
}
async function rC(e, t, n) {
  let r = `${e}-${t}-${n}`;
  if (!vp.has(r)) {
    let o = new i4.default(e, { style: t, weight: n }).load(null, hS);
    vp.set(r, o);
  }
  try {
    await vp.get(r);
  } catch {
    throw new tC(
      `Failed to check if font is ready (${hS}ms timeout exceeded): ${JSON.stringify(
        { family: e, style: t, weight: n }
      )}`
    );
  }
}
var a4 = {
    Arial: {
      Regular: { selector: "Arial", weight: void 0 },
      Black: { selector: "Arial-Black", weight: void 0 },
      Narrow: { selector: "Arial Narrow", weight: void 0 },
      "Rounded Bold": { selector: "Arial Rounded MT Bold", weight: void 0 },
    },
    Avenir: {
      Book: { selector: "Avenir", weight: void 0 },
      Light: { selector: "Avenir-Light", weight: void 0 },
      Medium: { selector: "Avenir-Medium", weight: void 0 },
      Heavy: { selector: "Avenir-Heavy", weight: void 0 },
      Black: { selector: "Avenir-Black", weight: void 0 },
    },
    "Avenir Next": {
      Regular: { selector: "Avenir Next", weight: void 0 },
      "Ultra Light": { selector: "AvenirNext-UltraLight", weight: void 0 },
      Medium: { selector: "AvenirNext-Medium", weight: void 0 },
      "Demi Bold": { selector: "AvenirNext-DemiBold", weight: void 0 },
      Heavy: { selector: "AvenirNext-Heavy", weight: void 0 },
    },
    "Avenir Next Condensed": {
      Regular: { selector: "Avenir Next Condensed", weight: void 0 },
      "Ultra Light": {
        selector: "AvenirNextCondensed-UltraLight",
        weight: void 0,
      },
      Medium: { selector: "AvenirNextCondensed-Medium", weight: void 0 },
      "Demi Bold": { selector: "AvenirNextCondensed-DemiBold", weight: void 0 },
      Heavy: { selector: "AvenirNextCondensed-Heavy", weight: void 0 },
    },
    Baskerville: {
      Regular: { selector: "Baskerville", weight: void 0 },
      "Semi Bold": { selector: "Baskerville-SemiBold", weight: void 0 },
    },
    "Bodoni 72": {
      Book: { selector: "Bodoni 72", weight: void 0 },
      Oldstyle: { selector: "Bodoni 72 Oldstyle", weight: void 0 },
      Smallcaps: { selector: "Bodoni 72 Smallcaps", weight: void 0 },
    },
    Courier: { Regular: { selector: "Courier", weight: void 0 } },
    "Courier New": { Regular: { selector: "Courier New", weight: void 0 } },
    Futura: {
      Medium: { selector: "Futura", weight: void 0 },
      Condensed: { selector: "Futura-CondensedMedium", weight: void 0 },
      "Condensed ExtraBold": {
        selector: "Futura-CondensedExtraBold",
        weight: void 0,
      },
    },
    Georgia: { Regular: { selector: "Georgia", weight: void 0 } },
    "Gill Sans": {
      Regular: { selector: "Gill Sans", weight: void 0 },
      Light: { selector: "GillSans-Light", weight: void 0 },
      SemiBold: { selector: "GillSans-SemiBold", weight: void 0 },
      UltraBold: { selector: "GillSans-UltraBold", weight: void 0 },
    },
    Helvetica: {
      Regular: { selector: "Helvetica", weight: void 0 },
      Light: { selector: "Helvetica-Light", weight: void 0 },
      Bold: { selector: "Helvetica-Bold", weight: void 0 },
      Oblique: { selector: "Helvetica-Oblique", weight: void 0 },
      "Light Oblique": { selector: "Helvetica-LightOblique", weight: void 0 },
      "Bold Oblique": { selector: "Helvetica-BoldOblique", weight: void 0 },
    },
    "Helvetica Neue": {
      Regular: { selector: "Helvetica Neue", weight: void 0 },
      UltraLight: { selector: "HelveticaNeue-UltraLight", weight: void 0 },
      Thin: { selector: "HelveticaNeue-Thin", weight: void 0 },
      Light: { selector: "HelveticaNeue-Light", weight: void 0 },
      Medium: { selector: "HelveticaNeue-Medium", weight: void 0 },
      Bold: { selector: "HelveticaNeue-Bold", weight: void 0 },
      Italic: { selector: "HelveticaNeue-Italic", weight: void 0 },
      "UltraLight Italic": {
        selector: "HelveticaNeue-UltraLightItalic",
        weight: void 0,
      },
      "Thin Italic": { selector: "HelveticaNeue-ThinItalic", weight: void 0 },
      "Light Italic": { selector: "HelveticaNeue-LightItalic", weight: void 0 },
      "Medium Italic": {
        selector: "HelveticaNeue-MediumItalic",
        weight: void 0,
      },
      "Bold Italic": { selector: "HelveticaNeue-BoldItalic", weight: void 0 },
      "Condensed Bold": {
        selector: "HelveticaNeue-CondensedBold",
        weight: void 0,
      },
      "Condensed Black": {
        selector: "HelveticaNeue-CondensedBlack",
        weight: void 0,
      },
    },
    "Hoefler Text": { Regular: { selector: "Hoefler Text", weight: void 0 } },
    Impact: { Regular: { selector: "Impact", weight: void 0 } },
    "Lucida Grande": { Regular: { selector: "Lucida Grande", weight: void 0 } },
    Menlo: { Regular: { selector: "Menlo", weight: void 0 } },
    Monaco: { Regular: { selector: "Monaco", weight: void 0 } },
    Optima: {
      Regular: { selector: "Optima", weight: void 0 },
      ExtraBlack: { selector: "Optima-ExtraBlack", weight: void 0 },
    },
    Palatino: { Regular: { selector: "Palatino", weight: void 0 } },
    "SF Pro Display": {
      Regular: { selector: "__SF-UI-Display-Regular__", weight: 400 },
      Ultralight: { selector: "__SF-UI-Display-Ultralight__", weight: 100 },
      Thin: { selector: "__SF-UI-Display-Thin__", weight: 200 },
      Light: { selector: "__SF-UI-Display-Light__", weight: 300 },
      Medium: { selector: "__SF-UI-Display-Medium__", weight: 500 },
      Semibold: { selector: "__SF-UI-Display-Semibold__", weight: 600 },
      Bold: { selector: "__SF-UI-Display-Bold__", weight: 700 },
      Heavy: { selector: "__SF-UI-Display-Heavy__", weight: 800 },
      Black: { selector: "__SF-UI-Display-Black__", weight: 900 },
      Italic: { selector: "__SF-UI-Display-Italic__", weight: 400 },
      "Ultralight Italic": {
        selector: "__SF-UI-Display-Ultralight-Italic__",
        weight: 100,
      },
      "Thin Italic": { selector: "__SF-UI-Display-Thin-Italic__", weight: 200 },
      "Light Italic": {
        selector: "__SF-UI-Display-Light-Italic__",
        weight: 300,
      },
      "Medium Italic": {
        selector: "__SF-UI-Display-Medium-Italic__",
        weight: 500,
      },
      "Semibold Italic": {
        selector: "__SF-UI-Display-Semibold-Italic__",
        weight: 600,
      },
      "Bold Italic": { selector: "__SF-UI-Display-Bold-Italic__", weight: 700 },
      "Heavy Italic": {
        selector: "__SF-UI-Display-Heavy-Italic__",
        weight: 800,
      },
      "Black Italic": {
        selector: "__SF-UI-Display-Black-Italic__",
        weight: 900,
      },
    },
    "SF Pro Display Condensed": {
      Regular: { selector: "__SF-UI-Display-Condensed-Regular__", weight: 400 },
      Ultralight: {
        selector: "__SF-UI-Display-Condensed-Ultralight__",
        weight: 100,
      },
      Thin: { selector: "__SF-UI-Display-Condensed-Thin__", weight: 200 },
      Light: { selector: "__SF-UI-Display-Condensed-Light__", weight: 300 },
      Medium: { selector: "__SF-UI-Display-Condensed-Medium__", weight: 500 },
      Semibold: {
        selector: "__SF-UI-Display-Condensed-Semibold__",
        weight: 600,
      },
      Bold: { selector: "__SF-UI-Display-Condensed-Bold__", weight: 700 },
      Heavy: { selector: "__SF-UI-Display-Condensed-Heavy__", weight: 800 },
      Black: { selector: "__SF-UI-Display-Condensed-Black__", weight: 900 },
    },
    "SF Pro Text": {
      Regular: { selector: "__SF-UI-Text-Regular__", weight: 400 },
      Light: { selector: "__SF-UI-Text-Light__", weight: 200 },
      Medium: { selector: "__SF-UI-Text-Medium__", weight: 500 },
      Semibold: { selector: "__SF-UI-Text-Semibold__", weight: 600 },
      Bold: { selector: "__SF-UI-Text-Bold__", weight: 700 },
      Heavy: { selector: "__SF-UI-Text-Heavy__", weight: 800 },
      Italic: { selector: "__SF-UI-Text-Italic__", weight: 400 },
      "Light Italic": { selector: "__SF-UI-Text-Light-Italic__", weight: 200 },
      "Medium Italic": {
        selector: "__SF-UI-Text-Medium-Italic__",
        weight: 500,
      },
      "Semibold Italic": {
        selector: "__SF-UI-Text-Semibold-Italic__",
        weight: 600,
      },
      "Bold Italic": { selector: "__SF-UI-Text-Bold-Italic__", weight: 700 },
      "Heavy Italic": { selector: "__SF-UI-Text-Heavy-Italic__", weight: 800 },
    },
    "SF Pro Text Condensed": {
      Regular: { selector: "__SF-UI-Text-Condensed-Regular__", weight: 400 },
      Light: { selector: "__SF-UI-Text-Condensed-Light__", weight: 200 },
      Medium: { selector: "__SF-UI-Text-Condensed-Medium__", weight: 500 },
      Semibold: { selector: "__SF-UI-Text-Condensed-Semibold__", weight: 600 },
      Bold: { selector: "__SF-UI-Text-Condensed-Bold__", weight: 700 },
      Heavy: { selector: "__SF-UI-Text-Condensed-Heavy__", weight: 800 },
    },
    Tahoma: { Regular: { selector: "Tahoma", weight: void 0 } },
    Times: { Regular: { selector: "Times", weight: void 0 } },
    "Times New Roman": {
      Regular: { selector: "Times New Roman", weight: void 0 },
    },
    Trebuchet: { Regular: { selector: "Trebuchet MS", weight: void 0 } },
    Verdana: { Regular: { selector: "Verdana", weight: void 0 } },
  },
  l4 = {
    "__SF-Compact-Display-Regular__":
      "SFCompactDisplay-Regular|.SFCompactDisplay-Regular",
    "__SF-Compact-Display-Ultralight__":
      "SFCompactDisplay-Ultralight|.SFCompactDisplay-Ultralight",
    "__SF-Compact-Display-Thin__":
      "SFCompactDisplay-Thin|.SFCompactDisplay-Thin",
    "__SF-Compact-Display-Light__":
      "SFCompactDisplay-Light|.SFCompactDisplay-Light",
    "__SF-Compact-Display-Medium__":
      "SFCompactDisplay-Medium|.SFCompactDisplay-Medium",
    "__SF-Compact-Display-Semibold__":
      "SFCompactDisplay-Semibold|.SFCompactDisplay-Semibold",
    "__SF-Compact-Display-Heavy__":
      "SFCompactDisplay-Heavy|.SFCompactDisplay-Heavy",
    "__SF-Compact-Display-Black__":
      "SFCompactDisplay-Black|.SFCompactDisplay-Black",
    "__SF-Compact-Display-Bold__":
      "SFCompactDisplay-Bold|.SFCompactDisplay-Bold",
    "__SF-UI-Text-Regular__":
      ".SFNSText|SFProText-Regular|SFUIText-Regular|.SFUIText",
    "__SF-UI-Text-Light__":
      ".SFNSText-Light|SFProText-Light|SFUIText-Light|.SFUIText-Light",
    "__SF-UI-Text-Medium__":
      ".SFNSText-Medium|SFProText-Medium|SFUIText-Medium|.SFUIText-Medium",
    "__SF-UI-Text-Semibold__":
      ".SFNSText-Semibold|SFProText-Semibold|SFUIText-Semibold|.SFUIText-Semibold",
    "__SF-UI-Text-Bold__":
      ".SFNSText-Bold|SFProText-Bold|SFUIText-Bold|.SFUIText-Bold",
    "__SF-UI-Text-Heavy__": ".SFNSText-Heavy|SFProText-Heavy|.SFUIText-Heavy",
    "__SF-UI-Text-Italic__":
      ".SFNSText-Italic|SFProText-Italic|SFUIText-Italic|.SFUIText-Italic",
    "__SF-UI-Text-Light-Italic__":
      ".SFNSText-LightItalic|SFProText-LightItalic|SFUIText-LightItalic|.SFUIText-LightItalic",
    "__SF-UI-Text-Medium-Italic__":
      ".SFNSText-MediumItalic|SFProText-MediumItalic|SFUIText-MediumItalic|.SFUIText-MediumItalic",
    "__SF-UI-Text-Semibold-Italic__":
      ".SFNSText-SemiboldItalic|SFProText-SemiboldItalic|SFUIText-SemiboldItalic|.SFUIText-SemiboldItalic",
    "__SF-UI-Text-Bold-Italic__":
      ".SFNSText-BoldItalic|SFProText-BoldItalic|SFUIText-BoldItalic|.SFUIText-BoldItalic",
    "__SF-UI-Text-Heavy-Italic__":
      ".SFNSText-HeavyItalic|SFProText-HeavyItalic|.SFUIText-HeavyItalic",
    "__SF-Compact-Text-Regular__":
      "SFCompactText-Regular|.SFCompactText-Regular",
    "__SF-Compact-Text-Light__": "SFCompactText-Light|.SFCompactText-Light",
    "__SF-Compact-Text-Medium__": "SFCompactText-Medium|.SFCompactText-Medium",
    "__SF-Compact-Text-Semibold__":
      "SFCompactText-Semibold|.SFCompactText-Semibold",
    "__SF-Compact-Text-Bold__": "SFCompactText-Bold|.SFCompactText-Bold",
    "__SF-Compact-Text-Heavy__": "SFCompactText-Heavy|.SFCompactText-Heavy",
    "__SF-Compact-Text-Italic__": "SFCompactText-Italic|.SFCompactText-Italic",
    "__SF-Compact-Text-Light-Italic__":
      "SFCompactText-LightItalic|.SFCompactText-LightItalic",
    "__SF-Compact-Text-Medium-Italic__":
      "SFCompactText-MediumItalic|.SFCompactText-MediumItalic",
    "__SF-Compact-Text-Semibold-Italic__":
      "SFCompactText-SemiboldItalic|.SFCompactText-SemiboldItalic",
    "__SF-Compact-Text-Bold-Italic__":
      "SFCompactText-BoldItalic|.SFCompactText-BoldItalic",
    "__SF-Compact-Text-Heavy-Italic__":
      "SFCompactText-HeavyItalic|.SFCompactText-HeavyItalic",
    "__SF-UI-Display-Condensed-Regular__":
      ".SFNSDisplayCondensed-Regular|SFUIDisplayCondensed-Regular|.SFUIDisplayCondensed-Regular",
    "__SF-UI-Display-Condensed-Ultralight__":
      ".SFNSDisplayCondensed-Ultralight|SFUIDisplayCondensed-Ultralight|.SFUIDisplayCondensed-Ultralight",
    "__SF-UI-Display-Condensed-Thin__":
      ".SFNSDisplayCondensed-Thin|SFUIDisplayCondensed-Thin|.SFUIDisplayCondensed-Thin",
    "__SF-UI-Display-Condensed-Light__":
      ".SFNSDisplayCondensed-Light|SFUIDisplayCondensed-Light|.SFUIDisplayCondensed-Light",
    "__SF-UI-Display-Condensed-Medium__":
      ".SFNSDisplayCondensed-Medium|SFUIDisplayCondensed-Medium|.SFUIDisplayCondensed-Medium",
    "__SF-UI-Display-Condensed-Semibold__":
      ".SFNSDisplayCondensed-Semibold|SFUIDisplayCondensed-Semibold|.SFUIDisplayCondensed-Semibold",
    "__SF-UI-Display-Condensed-Bold__":
      ".SFNSDisplayCondensed-Bold|SFUIDisplayCondensed-Bold|.SFUIDisplayCondensed-Bold",
    "__SF-UI-Display-Condensed-Heavy__":
      ".SFNSDisplayCondensed-Heavy|SFUIDisplayCondensed-Heavy|.SFUIDisplayCondensed-Heavy",
    "__SF-UI-Display-Condensed-Black__":
      ".SFNSDisplayCondensed-Black|.SFUIDisplayCondensed-Black",
    "__SF-UI-Display-Regular__":
      ".SFNSDisplay|SFProDisplay-Regular|SFUIDisplay-Regular|.SFUIDisplay",
    "__SF-UI-Display-Ultralight__":
      ".SFNSDisplay-Ultralight|SFProDisplay-Ultralight|SFUIDisplay-Ultralight|.SFUIDisplay-Ultralight",
    "__SF-UI-Display-Thin__":
      ".SFNSDisplay-Thin|SFProDisplay-Thin|SFUIDisplay-Thin|.SFUIDisplay-Thin",
    "__SF-UI-Display-Light__":
      ".SFNSDisplay-Light|SFProDisplay-Light|SFUIDisplay-Light|.SFUIDisplay-Light",
    "__SF-UI-Display-Medium__":
      ".SFNSDisplay-Medium|SFProDisplay-Medium|SFUIDisplay-Medium|.SFUIDisplay-Medium",
    "__SF-UI-Display-Semibold__":
      ".SFNSDisplay-Semibold|SFProDisplay-Semibold|SFUIDisplay-Semibold|.SFUIDisplay-Semibold",
    "__SF-UI-Display-Bold__":
      ".SFNSDisplay-Bold|SFProDisplay-Bold|SFUIDisplay-Bold|.SFUIDisplay-Bold",
    "__SF-UI-Display-Heavy__":
      ".SFNSDisplay-Heavy|SFProDisplay-Heavy|SFUIDisplay-Heavy|.SFUIDisplay-Heavy",
    "__SF-UI-Display-Black__":
      ".SFNSDisplay-Black|SFProDisplay-Black|.SFUIDisplay-Black",
    "__SF-UI-Display-Italic__":
      ".SFNSDisplay-Italic|SFProDisplay-Italic|SFUIDisplay-Italic",
    "__SF-UI-Display-Ultralight-Italic__":
      ".SFNSDisplay-UltralightItalic|SFProDisplay-UltralightItalic|SFUIDisplay-UltralightItalic|.SFUIDisplay-UltralightItalic",
    "__SF-UI-Display-Thin-Italic__":
      ".SFNSDisplay-ThinItalic|SFProDisplay-ThinItalic|SFUIDisplay-ThinItalic|.SFUIDisplay-ThinItalic",
    "__SF-UI-Display-Light-Italic__":
      ".SFNSDisplay-LightItalic|SFProDisplay-LightItalic|SFUIDisplay-LightItalic|.SFUIDisplay-LightItalic",
    "__SF-UI-Display-Medium-Italic__":
      ".SFNSDisplay-MediumItalic|SFProDisplay-MediumItalic|SFUIDisplay-MediumItalic|.SFUIDisplay-MediumItalic",
    "__SF-UI-Display-Semibold-Italic__":
      ".SFNSDisplay-SemiboldItalic|SFProDisplay-SemiboldItalic|SFUIDisplay-SemiboldItalic|.SFUIDisplay-SemiboldItalic",
    "__SF-UI-Display-Bold-Italic__":
      ".SFNSDisplay-BoldItalic|SFProDisplay-BoldItalic|SFUIDisplay-BoldItalic|.SFUIDisplay-BoldItalic",
    "__SF-UI-Display-Heavy-Italic__":
      ".SFNSDisplay-HeavyItalic|SFProDisplay-HeavyItalic|SFUIDisplay-HeavyItalic|.SFUIDisplay-HeavyItalic",
    "__SF-UI-Display-Black-Italic__":
      ".SFNSDisplay-BlackItalic|SFProDisplay-BlackItalic|.SFUIDisplay-BlackItalic",
    "__SF-UI-Text-Condensed-Regular__":
      ".SFNSTextCondensed-Regular|SFUITextCondensed-Regular|.SFUITextCondensed-Regular",
    "__SF-UI-Text-Condensed-Light__":
      ".SFNSTextCondensed-Light|SFUITextCondensed-Light|.SFUITextCondensed-Light",
    "__SF-UI-Text-Condensed-Medium__":
      ".SFNSTextCondensed-Medium|SFUITextCondensed-Medium|.SFUITextCondensed-Medium",
    "__SF-UI-Text-Condensed-Semibold__":
      ".SFNSTextCondensed-Semibold|SFUITextCondensed-Semibold|.SFUITextCondensed-Semibold",
    "__SF-UI-Text-Condensed-Bold__":
      ".SFNSTextCondensed-Bold|SFUITextCondensed-Bold|.SFUITextCondensed-Bold",
    "__SF-UI-Text-Condensed-Heavy__":
      ".SFNSTextCondensed-Heavy|.SFUITextCondensed-Heavy",
    "__SF-Compact-Rounded-Regular__":
      "SFCompactRounded-Regular|.SFCompactRounded-Regular",
    "__SF-Compact-Rounded-Ultralight__":
      "SFCompactRounded-Ultralight|.SFCompactRounded-Ultralight",
    "__SF-Compact-Rounded-Thin__":
      "SFCompactRounded-Thin|.SFCompactRounded-Thin",
    "__SF-Compact-Rounded-Light__":
      "SFCompactRounded-Light|.SFCompactRounded-Light",
    "__SF-Compact-Rounded-Medium__":
      "SFCompactRounded-Medium|.SFCompactRounded-Medium",
    "__SF-Compact-Rounded-Semibold__":
      "SFCompactRounded-Semibold|.SFCompactRounded-Semibold",
    "__SF-Compact-Rounded-Bold__":
      "SFCompactRounded-Bold|.SFCompactRounded-Bold",
    "__SF-Compact-Rounded-Heavy__":
      "SFCompactRounded-Heavy|.SFCompactRounded-Heavy",
    "__SF-Compact-Rounded-Black__":
      "SFCompactRounded-Black|.SFCompactRounded-Black",
  },
  pS = a4,
  c4 = "System Default",
  u4 = class {
    constructor() {
      R(this, "name", "local"),
        R(this, "fontFamilies", []),
        R(this, "byFamilyName", new Map()),
        R(this, "fontAliasBySelector", new Map()),
        R(this, "fontAliases", new Map());
    }
    getFontFamilyByName(e) {
      return this.byFamilyName.get(e) ?? null;
    }
    createFontFamily(e) {
      let t = { name: e, fonts: [], source: this.name };
      return this.addFontFamily(t), t;
    }
    addFontFamily(e) {
      this.fontFamilies.push(e), this.byFamilyName.set(e.name, e);
    }
    importFonts() {
      let e = [];
      for (let r of Object.keys(pS)) {
        let i = pS[r];
        if (!i) continue;
        let o = this.createFontFamily(r);
        for (let s of Object.keys(i)) {
          let a = i[s];
          if (!a) continue;
          let { selector: l, weight: c } = a,
            u = { variant: s, selector: l, weight: c, family: o };
          o.fonts.push(u);
        }
        e.push(...o.fonts);
      }
      for (let [r, i] of Object.entries(l4)) this.addFontAlias(r, i);
      let { fontFamily: t, aliases: n } = this.getSystemFontFamily();
      this.addFontFamily(t);
      for (let [r, i] of n) this.addFontAlias(r, i);
      return e.push(...t.fonts), e;
    }
    addFontAlias(e, t) {
      this.fontAliases.set(e, t), this.fontAliasBySelector.set(t, e);
    }
    getSystemFontFamily() {
      let e =
          "system-ui|-apple-system|BlinkMacSystemFont|Segoe UI|Roboto|Oxygen|Ubuntu|Cantarell|Fira Sans|Droid Sans|Helvetica Neue|sans-serif",
        t = { name: c4, fonts: [], source: this.name },
        n = new Map(),
        r = [400, 100, 200, 300, 500, 600, 700, 800, 900],
        i = ["normal", "italic"];
      for (let o of i)
        for (let s of r) {
          let a = f4(s, o),
            l = `__SystemDefault-${s}-${o}__`,
            c = { variant: a, selector: l, style: o, weight: s, family: t };
          t.fonts.push(c), n.set(l, e);
        }
      return { fontFamily: t, aliases: n };
    }
    getFontAliasBySelector(e) {
      return this.fontAliasBySelector.get(e) || null;
    }
    getFontSelectorByAlias(e) {
      return this.fontAliases.get(e) || null;
    }
    isFontFamilyAlias(e) {
      return !!(e && /^__.*__$/u.exec(e));
    }
  },
  mS = {
    100: "Thin",
    200: "Extra Light",
    300: "Light",
    400: "Normal",
    500: "Medium",
    600: "Semi Bold",
    700: "Bold",
    800: "Extra Bold",
    900: "Black",
  };
function f4(e, t) {
  let n = t === "normal" ? "Regular" : "Italic";
  return e === 400 ? n : t !== "normal" ? `${mS[e]} ${n}` : `${mS[e]}`;
}
var d4 = class {
    constructor() {
      R(this, "enabled", !1),
        R(this, "bySelector", new Map()),
        R(this, "getGoogleFontsListPromise"),
        R(this, "getFontshareFontsListPromise"),
        R(this, "loadedSelectors", new Set()),
        R(this, "googleFamilyNames", new Set()),
        R(this, "local"),
        R(this, "google"),
        R(this, "fontshare"),
        R(this, "framer"),
        R(this, "custom"),
        (this.local = new u4()),
        (this.google = new zr()),
        (this.fontshare = new Hr()),
        (this.framer = new dS()),
        (this.custom = new K3()),
        (this.bySelector = new Map()),
        this.importLocalFonts();
    }
    addFont(e) {
      this.bySelector.set(e.selector, e);
    }
    getAvailableFonts() {
      return Array.from(this.bySelector.values());
    }
    importLocalFonts() {
      for (let e of this.local.importFonts()) this.addFont(e), this.loadFont(e);
    }
    async importGoogleFonts() {
      if (!this.getGoogleFontsListPromise) {
        this.getGoogleFontsListPromise = Ye.fetchGoogleFontsList();
        let e = await this.getGoogleFontsListPromise;
        for (let t of this.google.importFonts(e))
          this.googleFamilyNames.add(t.family.name.toLowerCase()),
            this.addFont(t);
      }
      return this.getGoogleFontsListPromise;
    }
    async importFontshareFonts() {
      if (!this.getFontshareFontsListPromise) {
        this.getFontshareFontsListPromise = Ye.fetchFontshareFontsList();
        let e = await this.getFontshareFontsListPromise;
        for (let t of this.fontshare.importFonts(e))
          this.googleFamilyNames.has(t.family.name.toLowerCase()) ||
            this.addFont(t);
      }
      return this.getFontshareFontsListPromise;
    }
    importFramerFonts(e) {
      this.framer.importFonts(e).forEach((t) => {
        this.addFont(t);
      });
    }
    importCustomFonts(e) {
      this.bySelector.forEach((t, n) => {
        n.startsWith(xo) && this.bySelector.delete(n);
      });
      for (let t of this.custom.importFonts(e)) this.addFont(t);
    }
    getFontFamily(e) {
      return this[e.source].getFontFamilyByName(e.name);
    }
    getFontBySelector(e, t = !0) {
      return e.startsWith(xo)
        ? this.custom.getFontBySelector(e, t)
        : this.bySelector.get(e);
    }
    getDraftPropertiesBySelector(e) {
      let t = this.getFontBySelector(e);
      if (t)
        return {
          style: t.style,
          weight: t.weight,
          variant: t.variant,
          family: t.family.name,
          source: t.family.source,
          category: t.category,
        };
      let n = this.google.parseSelector(e);
      if (n) {
        let o = zr.parseVariant(n.variant);
        if (o)
          return {
            style: o.style,
            weight: o.weight,
            variant: n.variant,
            family: n.name,
            source: "google",
            category: void 0,
          };
      }
      let r = this.fontshare.parseSelector(e);
      if (r) {
        let o = Hr.parseVariant(r.variant);
        if (o)
          return {
            style: o.style,
            weight: o.weight,
            variant: r.variant,
            family: r.name,
            source: "fontshare",
            category: void 0,
          };
      }
      let i = dS.getDraftFontPropertiesBySelector(e);
      return i || null;
    }
    isSelectorLoaded(e) {
      return this.loadedSelectors.has(e);
    }
    async loadFont(e) {
      if (this.isSelectorLoaded(e.selector)) return 0;
      let t = e.family.source;
      switch (t) {
        case "local":
          return this.loadedSelectors.add(e.selector), 1;
        case "framer":
          return (
            G3.default.env.NODE_ENV !== "test" &&
              (await rC(e.family.name, e.style, e.weight)),
            this.loadedSelectors.add(e.selector),
            1
          );
        case "google":
        case "fontshare":
        case "custom":
          return e.file
            ? (await s4(
                {
                  family: e.family.name,
                  url: e.file,
                  weight: e.weight,
                  style: e.style,
                },
                document
              ),
              this.loadedSelectors.add(e.selector),
              1)
            : Promise.reject(`Unable to load font: ${e.selector}`);
        default:
          Wt(t);
      }
    }
    async loadFontsFromSelectors(e) {
      if (!this.enabled) return [];
      let t = e.some((i) => i.startsWith($c)),
        n = e.some((i) => i.startsWith(Nc));
      if (t || n) {
        try {
          await this.importGoogleFonts();
        } catch (i) {
          ta("Failed to load Google fonts:", i);
        }
        try {
          await this.importFontshareFonts();
        } catch (i) {
          ta("Failed to load Fontshare fonts:", i);
        }
      }
      let r = e.map((i) => this.bySelector.get(i)).filter((i) => !!i);
      return Promise.allSettled(r.map((i) => this.loadFont(i)));
    }
    async loadFonts(e) {
      return {
        newlyLoadedFontCount: (await this.loadFontsFromSelectors(e)).filter(
          (r) => r.status === "fulfilled" && r.value === 1
        ).length,
      };
    }
    async loadMissingFonts(e, t) {
      let n = e.filter((i) => !Wc.isSelectorLoaded(i));
      if (n.length === 0) return;
      await Wc.loadWebFontsFromSelectors(n),
        n.every((i) => Wc.isSelectorLoaded(i)) && t && t();
    }
    async loadWebFontsFromSelectors(e) {
      return this.loadFontsFromSelectors(e);
    }
    get defaultFont() {
      let e = this.getFontBySelector("Inter");
      return ae(e, "Can\u2019t find Inter font"), e;
    }
  },
  Wc = new d4();
Promise.allSettled =
  Promise.allSettled ||
  ((e) =>
    Promise.all(
      e.map((t) =>
        t
          .then((n) => ({ status: "fulfilled", value: n }))
          .catch((n) => ({ status: "rejected", reason: n }))
      )
    ));
function h4(e, t) {
  return e.length === t.length && e.every((n, r) => n === t[r]);
}
var p4 = "(?:<a[^>]*>)?",
  m4 = "(?:</a>)?",
  v4 = "<[^>]+>",
  g4 = "</[^>]+>",
  y4 = "<(?:div|span)[^>]*>",
  b4 = "</(?:div|span)>",
  x4 = "<[^>]+>",
  S4 = "</[^>]+>",
  MN = new RegExp(
    `^(${p4}${v4}${y4}${x4}).*?(${S4}).*?(${b4}${g4}${m4})$`,
    "s"
  );
var tu = class {
  constructor(e) {
    R(this, "__class", "PathSegment"),
      R(this, "x", 0),
      R(this, "y", 0),
      R(this, "handleMirroring", "straight"),
      R(this, "handleOutX", 0),
      R(this, "handleOutY", 0),
      R(this, "handleInX", 0),
      R(this, "handleInY", 0),
      R(this, "radius", 0),
      e && Object.assign(this, e);
  }
  merge(e) {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this, e);
  }
};
R(tu, "displayName", "WithClassDiscriminatorMixin(PathSegment)");
tu.prototype.__class = "PathSegment";
((e) => {
  (e.point = (t) => ({ x: t.x, y: t.y })),
    (e.handleOut = (t) => ({ x: t.handleOutX, y: t.handleOutY })),
    (e.handleIn = (t) => ({ x: t.handleInX, y: t.handleInY })),
    (e.calculatedHandleOut = (t) => {
      switch (t.handleMirroring) {
        case "symmetric":
        case "disconnected":
        case "asymmetric":
          return lt.add((0, e.point)(t), (0, e.handleOut)(t));
        default:
          return { x: t.x, y: t.y };
      }
    }),
    (e.calculatedHandleIn = (t) => {
      switch (t.handleMirroring) {
        case "symmetric":
          return lt.subtract((0, e.point)(t), (0, e.handleOut)(t));
        case "disconnected":
        case "asymmetric":
          return lt.add((0, e.point)(t), (0, e.handleIn)(t));
        default:
          return (0, e.point)(t);
      }
    }),
    (e.curveDefault = (t, n) => {
      if (t.length > 2) {
        let r, i;
        n === 0 ? (r = t[t.length - 1]) : (r = t[n - 1]),
          n === t.length - 1 ? (i = t[0]) : (i = t[n + 1]),
          ae(r, "pointBefore should be defined"),
          ae(i, "pointAfter should be defined");
        let o = lt.subtract((0, e.point)(i), (0, e.point)(r));
        return { x: o.x / 4, y: o.y / 4 };
      }
      return { x: 10, y: 10 };
    });
})(tu || (tu = {}));
var yo = class {
    constructor() {
      R(this, "canvas", { children: [] }),
        R(this, "listeners", []),
        R(this, "ids", []);
    }
    static shared(e) {
      if (e) {
        let t = new yo();
        return t.setCanvas(e), t;
      }
      return yo.__shared || (yo.__shared = new yo()), yo.__shared;
    }
    updateNode(e) {
      let t = e.props.id,
        n = this.canvas.children;
      n || (this.canvas.children = n = []);
      let r = !1;
      for (let i = 0; i < n.length; i++) {
        let o = n[i];
        if (o?.props.id === t) {
          (r = !0), (n[i] = e);
          break;
        }
      }
      r || n.push(e), this.setCanvas(this.canvas);
    }
    setCanvas(e) {
      e.children &&
        ((this.canvas = e),
        this.listeners.forEach((t, n) => {
          let r = this.ids[n];
          if (!r) return;
          let i = Lp(e, r);
          t.setState({ data: i });
        }));
    }
    registerListener(e, t) {
      return this.listeners.push(e), this.ids.push(t), Lp(this.canvas, t);
    }
    removeListener(e) {
      let t = this.listeners.indexOf(e);
      t !== -1 && (this.listeners.splice(t, 1), this.ids.splice(t, 1));
    }
  },
  w4 = yo;
R(w4, "__shared", null);
function vS(e, t) {
  let { name: n, props: r } = t;
  return (r && r.id === e) || n === e;
}
function Lp(e, t) {
  if (!e) return null;
  if (vS(t, e)) return e;
  let { children: n } = e;
  if (!n || !su(n)) return null;
  for (let r of n) if (vS(t, r)) return r;
  for (let r of n) {
    let i = Lp(r, t);
    if (i) return i;
  }
  return null;
}
var C4 = S.createContext(null),
  NN = C4.Provider;
var UN = S.forwardRef(function (t, n) {
  let { background: r, children: i, alt: o, ...s } = t,
    a = { ...s.style };
  r && delete a.background;
  let l = au(t.as);
  return se(l, {
    ...s,
    style: a,
    ref: n,
    children: [r && T(XS, { image: r, alt: o }), i],
  });
});
var k4 = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  },
  iC = /[&<>"']/g,
  T4 = RegExp(iC.source);
function gS(e) {
  return e && T4.test(e) ? e.replace(iC, (t) => k4[t] ?? "") : e || "";
}
var yS = "{{ text-placeholder }}",
  E4 = "rich-text-wrapper",
  R4 = We(function (t, n) {
    let {
        id: r,
        name: i,
        html: o,
        htmlFromDesign: s,
        text: a,
        textFromDesign: l,
        fonts: c = [],
        width: u,
        height: f,
        left: d,
        right: h,
        top: g,
        bottom: y,
        center: x,
        className: p,
        stylesPresetsClassName: m,
        visible: v = !0,
        opacity: b,
        rotation: C = 0,
        verticalAlignment: w = "top",
        isEditable: k = !1,
        willChangeTransform: E,
        environment: P = Ee.current,
        withExternalLayout: I = !1,
        positionSticky: H,
        positionStickyTop: _,
        positionStickyRight: Z,
        positionStickyBottom: N,
        positionStickyLeft: ee,
        __htmlStructure: G,
        __fromCanvasComponent: z = !1,
        _forwardedOverrideId: j,
        _forwardedOverrides: D,
        _usesDOMRect: Q,
        children: V,
        ...te
      } = t,
      Y = ya(),
      J = xa(t),
      jt = A(null),
      re = n ?? jt,
      { navigate: ct, getRoute: q } = Ro(),
      It = va();
    X2(t.preload ?? []), uu(t, re);
    let xt = M(Po),
      ut = rm(),
      Io = a,
      Ti = j ?? r;
    if (Ti && D) {
      let St = D[Ti];
      typeof St == "string" && (Io = St);
    }
    let vn = "";
    if (Io) {
      let St = gS(Io);
      vn = G ? G.replace(yS, St) : `<p>${St}</p>`;
    } else if (o) vn = o;
    else if (l) {
      let St = gS(l);
      vn = G ? G.replace(yS, St) : `<p>${St}</p>`;
    } else s && (vn = s);
    let Ei = Vw(),
      aC = ge(
        () => (ut || !q || !It ? vn : X3(vn, q, It, Ei)),
        [ut, vn, q, It, Ei]
      );
    if (
      (W(() => {
        let St = re.current;
        if (St === null) return;
        function lm(yu) {
          let bu = qp(yu.target, re.current);
          if (
            yu.metaKey ||
            !ct ||
            !bu ||
            bu.getAttribute("target") === "_blank"
          )
            return;
          kD(ct, bu, Ei) && yu.preventDefault();
        }
        return (
          St.addEventListener("click", lm),
          () => {
            St.removeEventListener("click", lm);
          }
        );
      }, [ct, Ei]),
      sC(c, z, re),
      Ft(() => {
        ba();
      }, []),
      !v)
    )
      return null;
    let lC = k && P() === "CANVAS",
      ve = {
        outline: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: oC(w),
        opacity: lC ? 0 : b,
        flexShrink: 0,
      },
      sm = Ee.hasRestrictions(),
      jr = na(t, Y || 0, !1),
      am = Q && (u === "auto" || f === "auto"),
      cC =
        !!t.transformTemplate || !jr || !sm || z || am
          ? t.transformTemplate ?? lu(x)
          : void 0;
    if (!I) {
      if (jr && sm && !am) {
        let St = Be.getNumber(C).toFixed(4);
        (ve.transform = `translate(${jr.x}px, ${jr.y}px) rotate(${St}deg)`),
          (ve.width = jr.width),
          (ve.minWidth = jr.width),
          (ve.height = jr.height);
      } else
        (ve.left = d),
          (ve.right = h),
          (ve.top = g),
          (ve.bottom = y),
          (ve.width = u),
          (ve.height = f),
          (ve.rotate = C);
      H
        ? (!ut || xt) &&
          ((ve.position = "sticky"),
          (ve.willChange = "transform"),
          (ve.zIndex = 1),
          (ve.top = _),
          (ve.right = Z),
          (ve.bottom = N),
          (ve.left = ee))
        : ut &&
          (t.positionFixed || t.positionAbsolute) &&
          (ve.position = "absolute");
    }
    return (
      Up(t, ve),
      pw(t, ve),
      E && $p(ve),
      Object.assign(ve, t.style),
      T(_t.div, {
        id: r,
        ref: re,
        ...te,
        style: ve,
        layoutId: J,
        "data-framer-name": i,
        "data-framer-component-type": "DeprecatedRichText",
        "data-center": x,
        className: Gp(p, m, E4),
        transformTemplate: cC,
        dangerouslySetInnerHTML: { __html: aC },
      })
    );
  });
function oC(e) {
  switch (e) {
    case "top":
      return "flex-start";
    case "center":
      return "center";
    case "bottom":
      return "flex-end";
  }
}
function sC(e, t, n) {
  let r = A([]);
  h4(r.current, e) ||
    ((r.current = e),
    Wc.loadFonts(e).then(({ newlyLoadedFontCount: i }) => {
      !t || !n.current || Ee.current() !== "CANVAS" || (i > 0 && $M(n.current));
    }));
}
var bS = We(({ viewBoxScale: e, viewBox: t, children: n, ...r }, i) =>
    T(_t.svg, {
      ref: i,
      ...r,
      viewBox: t,
      children: T(_t.foreignObject, {
        width: "100%",
        height: "100%",
        className: "framer-fit-text",
        transform: `scale(${e})`,
        style: { overflow: "visible", transformOrigin: "center center" },
        children: n,
      }),
    })
  ),
  P4 = We((e, t) => {
    let {
        __fromCanvasComponent: n = !1,
        _forwardedOverrideId: r,
        _forwardedOverrides: i,
        _usesDOMRect: o,
        as: s,
        bottom: a,
        center: l,
        children: c,
        environment: u = Ee.current,
        fonts: f = [],
        height: d,
        isEditable: h = !1,
        left: g,
        name: y,
        opacity: x,
        positionSticky: p,
        positionStickyBottom: m,
        positionStickyLeft: v,
        positionStickyRight: b,
        positionStickyTop: C,
        right: w,
        rotation: k = 0,
        style: E,
        _initialStyle: P,
        stylesPresetsClassNames: I,
        text: H,
        top: _,
        verticalAlignment: Z = "top",
        visible: N = !0,
        width: ee,
        willChangeTransform: G,
        withExternalLayout: z = !1,
        viewBox: j,
        viewBoxScale: D = 1,
        ...Q
      } = e,
      V = ya(),
      te = rm(),
      Y = M(Po),
      J = xa(e),
      jt = A(null),
      re = t ?? jt;
    if (
      (uu(e, re),
      sC(f, n, re),
      Ft(() => {
        ba();
      }, []),
      !N)
    )
      return null;
    let ct = h && u() === "CANVAS",
      q = {
        outline: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: oC(Z),
        opacity: ct ? 0 : x,
        flexShrink: 0,
      },
      It = Ee.hasRestrictions(),
      xt = na(e, V || 0, !1),
      ut = o && (ee === "auto" || d === "auto"),
      Ti =
        !!e.transformTemplate || !xt || !It || n || ut
          ? e.transformTemplate ?? lu(l)
          : void 0;
    if (!z) {
      if (xt && It && !ut) {
        let Ei = Be.getNumber(k).toFixed(4);
        (q.transform = `translate(${xt.x}px, ${xt.y}px) rotate(${Ei}deg)`),
          (q.width = xt.width),
          (q.minWidth = xt.width),
          (q.height = xt.height);
      } else
        (q.left = g),
          (q.right = w),
          (q.top = _),
          (q.bottom = a),
          (q.width = ee),
          (q.height = d),
          (q.rotate = k);
      p
        ? (!te || Y) &&
          ((q.position = "sticky"),
          (q.willChange = "transform"),
          (q.zIndex = 1),
          (q.top = C),
          (q.right = b),
          (q.bottom = m),
          (q.left = v))
        : te &&
          (e.positionFixed || e.positionAbsolute) &&
          (q.position = "absolute");
    }
    Up(e, q),
      pw(e, q),
      G && $p(q),
      Object.assign(q, P, E),
      J && (Q.layout = "preserve-aspect");
    let vn = au(e.as);
    return ne(e.viewBox)
      ? e.as !== void 0
        ? T(vn, {
            ...Q,
            ref: re,
            style: q,
            layoutId: J,
            transformTemplate: Ti,
            "data-framer-name": y,
            "data-framer-component-type": "RichTextContainer",
            children: T(bS, {
              viewBox: j,
              viewBoxScale: D,
              style: { width: "100%", height: "100%" },
              children: c && jc(c, I, H),
            }),
          })
        : T(bS, {
            ...Q,
            ref: re,
            style: q,
            layoutId: J,
            viewBox: j,
            viewBoxScale: D,
            transformTemplate: Ti,
            "data-framer-name": y,
            "data-framer-component-type": "RichTextContainer",
            children: c && jc(c, I, H),
          })
      : T(vn, {
          ...Q,
          ref: re,
          style: q,
          layoutId: J,
          transformTemplate: Ti,
          "data-framer-name": y,
          "data-framer-component-type": "RichTextContainer",
          children: c && jc(c, I, H),
        });
  });
function jc(e, t, n) {
  let r = Bn.toArray(e.props.children);
  ne(n) && (r = r.slice(0, 1)),
    (r = r.map((s) => (Hn(s) ? jc(s, t, n) : ne(n) ? n : s)));
  let { ["data-preset-tag"]: i, ...o } = e.props;
  if (ne(e.type) || Df(e.type)) {
    let s = i || wy(e.type) || e.type,
      a = ne(s) ? t?.[s] : void 0;
    o.className = Gp("framer-text", o.className, a);
  }
  return gn(e, o, ...r);
}
var qN = We(({ children: e, html: t, htmlFromDesign: n, ...r }, i) => {
  let o = t || e || n;
  if (ne(o)) {
    !r.stylesPresetsClassName &&
      De(r.stylesPresetsClassNames) &&
      (r.stylesPresetsClassName = Object.values(r.stylesPresetsClassNames).join(
        " "
      ));
    let s = { [ne(t) ? "html" : "htmlFromDesign"]: o };
    return T(R4, { ...r, ...s, ref: i });
  }
  if (!r.stylesPresetsClassNames && ne(r.stylesPresetsClassName)) {
    let [s, a, l, c, u] = r.stylesPresetsClassName.split(" ");
    s === void 0 || a === void 0 || l === void 0 || c === void 0 || u === void 0
      ? console.warn(
          `Encountered invalid stylesPresetsClassNames: ${r.stylesPresetsClassNames}`
        )
      : (r.stylesPresetsClassNames = { h1: s, h2: a, h3: l, p: c, a: u });
  }
  return T(P4, { ...r, ref: i, children: Hn(o) ? o : void 0 });
});
function QN(e, t, n) {
  let r = om(t);
  !n?.supportsExplicitInterCodegen &&
    !r.some((i) => i.explicitInter === !1) &&
    r.push({ explicitInter: !1, fonts: [] }),
    Object.assign(e, { fonts: r });
}
function ZN(e) {
  return e.fonts ?? [];
}
function JN(e) {
  return e.length === 0 ? [{ explicitInter: !1, fonts: [] }] : om(e);
}
function e8(e) {
  return e.length === 0 ? [{ explicitInter: !1, fonts: [] }] : om(e);
}
function om(e) {
  let t = { explicitInter: !1, fonts: [] },
    n = [];
  for (let r of e) F4(r) ? n.push(r) : t.fonts.push(L4(r));
  return t.fonts.length > 0 && n.push(t), n;
}
var I4 = "explicitInter";
function F4(e) {
  return I4 in e;
}
function L4(e) {
  let t;
  return (
    e.url.startsWith("https://fonts.gstatic.com/s/")
      ? (t = "google")
      : e.url.startsWith(
          "https://framerusercontent.com/third-party-assets/fontshare/"
        )
      ? (t = "fontshare")
      : (t = "custom"),
    { ...e, source: t }
  );
}
var _4 = {
    name: "framer",
    version: "2.4.1",
    main: "build/index.js",
    type: "module",
    exports: {
      ".": "./build/index.js",
      "./package.json": "./package.json",
      "./*": "./build/*",
    },
    files: [
      "build",
      "CHANGELOG.md",
      "README.md",
      "LICENSE.md",
      "postinstall.cjs",
    ],
    types: "./build/index.d.ts",
    author: "Framer",
    license: "MIT",
    scripts: {
      prepublishOnly: "make build",
      coverage: "yarn :jest --coverage",
      lint: "yarn :eslint ./src --ext .ts,.tsx --format codeframe --quiet",
      "lint:fix": "yarn lint --fix --cache",
      test: "yarn :jest",
      watch: "yarn :jest --watch",
      postinstall: "node postinstall.cjs",
    },
    dependencies: {
      "@framerjs/router": "workspace:*",
      "@juggle/resize-observer": "^3.3.1",
      eventemitter3: "^3.1.0",
      fontfaceobserver: "^2.1.0",
      "hoist-non-react-statics": "^3.3.2",
      hsluv: "^0.0.3",
    },
    devDependencies: {
      "@microsoft/api-extractor": "^7.42.3",
      "@testing-library/dom": "^8.19.1",
      "@testing-library/jest-dom": "^5.16.5",
      "@testing-library/react": "^13.4.0",
      "@testing-library/user-event": "^14.4.3",
      "@types/google.fonts": "1.0.3",
      "@types/hsluv": "https://github.com/framer/typed_hsluv#bump",
      "@types/node": "^18.17.15",
      "@types/react": "^18.0.26",
      "@types/react-dom": "^18.0.10",
      "@types/yargs": "^17.0.19",
      "@typescript-eslint/eslint-plugin": "^6.16.0",
      "@typescript-eslint/parser": "^6.16.0",
      chalk: "^4.1.2",
      eslint: "^8.56.0",
      immutable: "^3.8.2",
      "jest-diff": "^29.3.1",
      "jest-junit": "^15.0.0",
      react: "^18.2.0",
      "react-dom": "^18.2.0",
      semver: "^7.5.2",
      typescript: "^5.3.3",
      yargs: "^17.6.2",
    },
    peerDependencies: {
      "framer-motion": "11.0.7",
      react: "^18.2.0",
      "react-dom": "^18.2.0",
    },
    tsdoc: { tsdocFlavor: "AEDoc" },
    framer: {
      components: [
        {
          name: "Scroll",
          children: !0,
          properties: [
            {
              key: "direction",
              title: "Direction",
              kind: "enum",
              options: ["horizontal", "vertical", "both"],
            },
          ],
        },
        { name: "Page" },
      ],
    },
  },
  { version: n8 } = _4;
tl.prototype.addChild = function ({ transformer: e = (t) => t }) {
  let t = xe(e(this.get()));
  return this.onChange((n) => t.set(e(n))), t;
};
/**
 * @license Emotion v11.0.0
 * MIT License
 *
 * Copyright (c) Emotion team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */ /*! Bundled license information:

react-is/cjs/react-is.production.min.js:
  (** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/ export {
  $n as a,
  Go as b,
  Se as c,
  K as d,
  _t as e,
  Of as f,
  ly as g,
  wn as h,
  dt as i,
  AR as j,
  hy as k,
  my as l,
  tP as m,
  Nx as n,
  BF as o,
  UF as p,
  OB as q,
  BB as r,
  Ro as s,
  ou as t,
  z2 as u,
  ZB as v,
  nH as w,
  Ee as x,
  hH as y,
  zL as z,
  xH as A,
  D_ as B,
  SH as C,
  $_ as D,
  IH as E,
  mz as F,
  Gp as G,
  d6 as H,
  m6 as I,
  b6 as J,
  x6 as K,
  lD as L,
  T6 as M,
  dD as N,
  L6 as O,
  xD as P,
  wa as Q,
  RD as R,
  V6 as S,
  B6 as T,
  N6 as U,
  U6 as V,
  X6 as W,
  _V as X,
  Yw as Y,
  G6 as Z,
  HV as _,
  Y6 as $,
  K6 as aa,
  q6 as ba,
  Z6 as ca,
  tN as da,
  jV as ea,
  aN as fa,
  fN as ga,
  dN as ha,
  m3 as ia,
  pN as ja,
  vN as ka,
  bN as la,
  go as ma,
  IN as na,
  Wc as oa,
  UN as pa,
  qN as qa,
  QN as ra,
  ZN as sa,
  JN as ta,
  e8 as ua,
};
//# sourceMappingURL=chunk-NCIFD65W.mjs.map

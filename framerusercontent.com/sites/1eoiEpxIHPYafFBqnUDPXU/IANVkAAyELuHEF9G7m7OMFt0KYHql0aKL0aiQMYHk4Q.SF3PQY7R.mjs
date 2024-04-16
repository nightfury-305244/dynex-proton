import { a as Ie, b as se } from "./chunk-JJHRISHI.mjs";
import { a as yr } from "./chunk-O4N5PNPP.mjs";
import { a as Ee } from "./chunk-X4RL6ZYP.mjs";
import {
  c as lr,
  d as cr,
  e as mr,
  f as dr,
  g as fr,
  h as pr,
  i as hr,
} from "./chunk-C3SD45VA.mjs";
import { a as br } from "./chunk-CTIF5AVX.mjs";
import {
  c as De,
  d as Me,
  e as Qe,
  f as Zr,
  g as Kr,
  h as $r,
} from "./chunk-DQH2D4MP.mjs";
import "./chunk-4CBC4XYV.mjs";
import { d as et, e as rt, f as tt } from "./chunk-3REURG4N.mjs";
import { a as xr } from "./chunk-GKORHWPJ.mjs";
import { d as _e, e as ke, f as Ce } from "./chunk-QZEJCLJB.mjs";
import { e as ur } from "./chunk-XHADUV4Z.mjs";
import {
  a as Ae,
  b as Yr,
  c as Gr,
  d as Xr,
  h as at,
  i as ve,
  j as we,
  k as Re,
  m as gr,
} from "./chunk-SK7OXHBT.mjs";
import "./chunk-42U43NKG.mjs";
import {
  $ as te,
  C as J,
  D as Hr,
  F as Or,
  G as O,
  H as Oe,
  J as Be,
  K as h,
  M as C,
  N as Y,
  O as Br,
  P as Ar,
  Q as Dr,
  V as g,
  Z as V,
  a as q,
  c as sr,
  da as Mr,
  e as o,
  g as Q,
  ja as ie,
  la as Qr,
  m as Pr,
  na as Wr,
  pa as Jr,
  qa as S,
  ra as G,
  sa as w,
  t as W,
  ta as B,
  w as qr,
  z as x,
} from "./chunk-NCIFD65W.mjs";
import {
  d as s,
  j as A,
  l as zr,
  n as He,
  o as ne,
  p as he,
  q as D,
  s as jr,
  t as M,
  u as T,
  v as ir,
  y as e,
  z as d,
} from "./chunk-DKTB2747.mjs";
import "./chunk-ELYU6EKT.mjs";
var ot;
(function (r) {
  (r.Fill = "fill"),
    (r.Contain = "contain"),
    (r.Cover = "cover"),
    (r.None = "none"),
    (r.ScaleDown = "scale-down");
})(ot || (ot = {}));
var nt;
(function (r) {
  (r.Video = "Upload"), (r.Url = "URL");
})(nt || (nt = {}));
function kt(r) {
  let {
    width: a,
    height: t,
    topLeft: i,
    topRight: l,
    bottomRight: m,
    bottomLeft: c,
    id: f,
    children: v,
    ...n
  } = r;
  return n;
}
function H(r) {
  let a = kt(r);
  return e(Vt, { ...a });
}
function Ct(r) {
  let a = Or(),
    t = T(!1),
    i = He((c) => {
      if (!r.current) return;
      let f = (c === 1 ? 0.999 : c) * r.current.duration,
        v = Math.abs(r.current.currentTime - f) < 0.1;
      r.current.duration > 0 && !v && (r.current.currentTime = f);
    }, []),
    l = He(() => {
      !(
        r.current.currentTime > 0 &&
        r.current.onplaying &&
        !r.current.paused &&
        !r.current.ended &&
        r.current.readyState > r.current.HAVE_CURRENT_DATA
      ) &&
        r.current &&
        !t.current &&
        a &&
        ((t.current = !0),
        r.current
          .play()
          .catch((f) => {})
          .finally(() => (t.current = !1)));
    }, []),
    m = He(() => {
      !r.current || t.current || r.current.pause();
    }, []);
  return { play: l, pause: m, setProgress: i };
}
function St({
  playingProp: r,
  muted: a,
  loop: t,
  playsinline: i,
  controls: l,
}) {
  let [m] = ir(() => r),
    [c, f] = ir(!1);
  r !== m && !c && f(!0);
  let v = m && a && t && i && !l && !c,
    n;
  return (
    v ? (n = "on-viewport") : m ? (n = "on-mount") : (n = "no-autoplay"), n
  );
}
var it = !1,
  Vt = zr(function (a) {
    let {
        srcType: t,
        srcFile: i,
        srcUrl: l,
        playing: m,
        muted: c,
        playsinline: f,
        controls: v,
        progress: n,
        objectFit: F,
        backgroundColor: U,
        onSeeked: b,
        onPause: k,
        onPlay: I,
        onEnd: u,
        onClick: y,
        onMouseEnter: E,
        onMouseLeave: R,
        onMouseDown: z,
        onMouseUp: j,
        poster: ae,
        posterEnabled: Se,
        startTime: ue,
        volume: oe,
        loop: me,
      } = a,
      L = T(),
      Ve = dr(),
      de = T(null),
      ge = T(null),
      $ = fr(),
      Ne = pr(a),
      ee = $
        ? "no-autoplay"
        : St({
            playingProp: m,
            muted: c,
            loop: me,
            playsinline: f,
            controls: v,
          }),
      be = $ ? !0 : Pr(L),
      P = ue === 100 ? 99.9 : ue,
      { play: re, pause: fe, setProgress: pe } = Ct(L);
    he(() => {
      $ || (m ? re() : fe());
    }, [m]),
      he(() => {
        $ || (ee === "on-viewport" && (be ? re() : fe()));
      }, [ee, be]),
      he(() => {
        if (!it) {
          it = !0;
          return;
        }
        let _ = sr(n) ? n.get() : (n ?? 0) * 0.01;
        pe((_ ?? 0) || (P ?? 0) / 100);
      }, [P, i, l, n]),
      he(() => {
        if (sr(n)) return n.on("change", (_) => pe(_));
      }, [n]),
      cr(() => {
        de.current !== null &&
          L.current &&
          ((!ge && me) || !de.current) &&
          re();
      }),
      mr(() => {
        L.current &&
          ((ge.current = L.current.ended),
          (de.current = L.current.paused),
          fe());
      });
    let Fe = M(() => {
      let _ = "";
      if (t === "URL") return l + _;
      if (t === "Upload") return i + _;
    }, [t, i, l, P]);
    return (
      he(() => {
        Ve && L.current && ee === "on-mount" && setTimeout(() => re(), 50);
      }, []),
      he(() => {
        L.current && !c && (L.current.volume = (oe ?? 0) / 100);
      }, [oe]),
      e("video", {
        onClick: y,
        onMouseEnter: E,
        onMouseLeave: R,
        onMouseDown: z,
        onMouseUp: j,
        src: Fe,
        loop: me,
        ref: L,
        onSeeked: (_) => b?.(_),
        onPause: (_) => k?.(_),
        onPlay: (_) => I?.(_),
        onEnded: (_) => u?.(_),
        autoPlay: ee === "on-mount",
        poster: Se ? ae : void 0,
        onLoadedData: () => {
          L.current &&
            (L.current.currentTime < 0.3 && pe((P ?? 0) * 0.01),
            ee === "on-mount" && re());
        },
        controls: v,
        muted: $ ? !0 : c,
        playsInline: f,
        style: {
          cursor: y ? "pointer" : "auto",
          width: "100%",
          height: "100%",
          borderRadius: Ne,
          display: "block",
          objectFit: F,
          backgroundColor: U,
          objectPosition: "50% 50%",
        },
      })
    );
  });
H.displayName = "Video";
H.defaultProps = {
  srcType: "URL",
  srcUrl:
    "https://assets.mixkit.co/videos/preview/mixkit-shining-sun-in-the-sky-surrounded-by-moving-clouds-31793-small.mp4",
  srcFile: "",
  posterEnabled: !1,
  controls: !1,
  playing: !0,
  loop: !0,
  muted: !0,
  playsinline: !0,
  restartOnEnter: !1,
  objectFit: "cover",
  backgroundColor: "rgba(0,0,0,0)",
  radius: 0,
  volume: 25,
  startTime: 0,
};
var Nt = /[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu;
function Ft(r) {
  return r.charAt(0).toUpperCase() + r.slice(1);
}
function It(r) {
  return (r.match(Nt) || []).map(Ft).join(" ");
}
var st = ["cover", "fill", "contain", "scale-down", "none"];
J(H, {
  srcType: {
    type: x.Enum,
    displaySegmentedControl: !0,
    title: "Source",
    options: ["URL", "Upload"],
  },
  srcUrl: {
    type: x.String,
    title: "URL",
    placeholder: "../example.mp4",
    hidden(r) {
      return r.srcType === "Upload";
    },
    description:
      "Hosted video file URL. For YouTube, use the YouTube component.",
  },
  srcFile: {
    type: x.File,
    title: "File",
    allowedFileTypes: ["mp4", "webm"],
    hidden(r) {
      return r.srcType === "URL";
    },
  },
  playing: {
    type: x.Boolean,
    title: "Playing",
    enabledTitle: "Yes",
    disabledTitle: "No",
  },
  posterEnabled: {
    type: x.Boolean,
    title: "Poster",
    enabledTitle: "Yes",
    disabledTitle: "No",
  },
  poster: { type: x.Image, title: " ", hidden: ({ posterEnabled: r }) => !r },
  backgroundColor: { type: x.Color, title: "Background" },
  ...hr,
  startTime: {
    title: "Start Time",
    type: x.Number,
    min: 0,
    max: 100,
    step: 0.1,
    unit: "%",
  },
  loop: {
    type: x.Boolean,
    title: "Loop",
    enabledTitle: "Yes",
    disabledTitle: "No",
  },
  objectFit: {
    type: x.Enum,
    title: "Fit",
    options: st,
    optionTitles: st.map(It),
  },
  controls: {
    type: x.Boolean,
    title: "Controls",
    enabledTitle: "Show",
    disabledTitle: "Hide",
  },
  muted: {
    type: x.Boolean,
    title: "Muted",
    enabledTitle: "Yes",
    disabledTitle: "No",
  },
  volume: {
    type: x.Number,
    max: 100,
    min: 0,
    unit: "%",
    hidden: ({ muted: r }) => r,
  },
  onEnd: { type: x.EventHandler },
  onSeeked: { type: x.EventHandler },
  onPause: { type: x.EventHandler },
  onPlay: { type: x.EventHandler },
  ...lr,
});
var Lt = w(br),
  Tt = { SNgQa2QQH: { hover: !0 } },
  Ut = ["SNgQa2QQH", "XNXC65zCA"],
  zt = "framer-QO1RE",
  jt = { SNgQa2QQH: "framer-v-1jwjuaz", XNXC65zCA: "framer-v-xu1tsv" };
function vr(r, ...a) {
  let t = {};
  return a?.forEach((i) => i && Object.assign(t, r[i])), t;
}
var Pt = {
  default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
};
var qt = ({ value: r, children: a }) => {
    let t = ne(q),
      i = r ?? t.transition,
      l = M(() => ({ ...t, transition: i }), [JSON.stringify(i)]);
    return e(q.Provider, { value: l, children: a });
  },
  Ht = { "Variant 1": "SNgQa2QQH", Mobile: "XNXC65zCA" },
  Ot = ({ height: r, id: a, title: t, width: i, ...l }) => {
    var m, c, f;
    return {
      ...l,
      PdPNpvCFq:
        (m = t ?? l.PdPNpvCFq) !== null && m !== void 0
          ? m
          : "Endless Possibilites",
      variant:
        (f = (c = Ht[l.variant]) !== null && c !== void 0 ? c : l.variant) !==
          null && f !== void 0
          ? f
          : "SNgQa2QQH",
    };
  },
  Bt = (r, a) => a.join("-") + r.layoutDependency,
  At = A(function (r, a) {
    let { activeLocale: t, setLocale: i } = W(),
      {
        style: l,
        className: m,
        layoutId: c,
        variant: f,
        PdPNpvCFq: v,
        ...n
      } = Ot(r),
      {
        baseVariant: F,
        classNames: U,
        gestureVariant: b,
        setGestureState: k,
        setVariant: I,
        transition: u,
        variants: y,
      } = ie({
        cycleOrder: Ut,
        defaultVariant: "SNgQa2QQH",
        enabledGestures: Tt,
        transitions: Pt,
        variant: f,
        variantClassNames: jt,
      }),
      E = Bt(r, y),
      R = T(null),
      z = D(),
      j = [tt, Ce];
    return e(Q, {
      id: c ?? z,
      children: e(qt, {
        value: u,
        children: d(o.div, {
          ...n,
          animate: y,
          className: O(zt, ...j, "framer-1jwjuaz", m, U),
          "data-framer-name": "Variant 1",
          initial: f,
          layoutDependency: E,
          layoutId: "SNgQa2QQH",
          onHoverEnd: () => k({ isHovered: !1 }),
          onHoverStart: () => k({ isHovered: !0 }),
          onTap: () => k({ isPressed: !1 }),
          onTapCancel: () => k({ isPressed: !1 }),
          onTapStart: () => k({ isPressed: !0 }),
          ref: a ?? R,
          style: {
            borderBottomLeftRadius: 2,
            borderBottomRightRadius: 2,
            borderTopLeftRadius: 2,
            borderTopRightRadius: 2,
            ...l,
          },
          ...vr(
            {
              "SNgQa2QQH-hover": { "data-framer-name": void 0 },
              XNXC65zCA: { "data-framer-name": "Mobile" },
            },
            F,
            b
          ),
          children: [
            e(S, {
              __fromCanvasComponent: !0,
              children: e(s, {
                children: e(o.h4, {
                  className: "framer-styles-preset-11ezvfj",
                  "data-styles-preset": "rrjoIeBSb",
                  style: {
                    "--framer-text-color":
                      "var(--extracted-1eung3n, var(--token-e2149c75-9099-4842-aea6-4fbafaef2693, rgb(191, 199, 212)))",
                  },
                  children: "Endless Possibilites",
                }),
              }),
              className: "framer-jh9dz8",
              layoutDependency: E,
              layoutId: "Uc0H_k47P",
              style: {
                "--extracted-1eung3n":
                  "var(--token-e2149c75-9099-4842-aea6-4fbafaef2693, rgb(191, 199, 212))",
                "--framer-link-text-color": "rgb(0, 153, 255)",
                "--framer-link-text-decoration": "underline",
              },
              text: v,
              variants: {
                "SNgQa2QQH-hover": {
                  "--extracted-1eung3n":
                    "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                },
                XNXC65zCA: {
                  "--extracted-1eung3n":
                    "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                },
              },
              verticalAlignment: "top",
              withExternalLayout: !0,
              ...vr(
                {
                  "SNgQa2QQH-hover": {
                    children: e(s, {
                      children: e(o.h4, {
                        className: "framer-styles-preset-11ezvfj",
                        "data-styles-preset": "rrjoIeBSb",
                        style: {
                          "--framer-text-color":
                            "var(--extracted-1eung3n, var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255)))",
                        },
                        children: "Endless Possibilites",
                      }),
                    }),
                  },
                  XNXC65zCA: {
                    children: e(s, {
                      children: e(o.h4, {
                        className: "framer-styles-preset-11ezvfj",
                        "data-styles-preset": "rrjoIeBSb",
                        style: {
                          "--framer-text-color":
                            "var(--extracted-1eung3n, var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255)))",
                        },
                        children: "Endless Possibilites",
                      }),
                    }),
                  },
                },
                F,
                b
              ),
            }),
            e(o.div, {
              className: "framer-1s46jup-container",
              layoutDependency: E,
              layoutId: "z3kfZSWgY-container",
              style: { opacity: 0.75 },
              children: e(br, {
                height: "100%",
                id: "z3kfZSWgY",
                layoutId: "z3kfZSWgY",
                style: { height: "100%", width: "100%" },
                variant: "Dl5vZx6Jj",
                width: "100%",
              }),
            }),
            e(S, {
              __fromCanvasComponent: !0,
              children: d(s, {
                children: [
                  e(o.p, {
                    className: "framer-styles-preset-21ogod",
                    "data-styles-preset": "xZndidUCt",
                    style: {
                      "--framer-text-color":
                        "var(--extracted-r6o4lv, var(--token-50859c1e-b9ab-4124-b93a-6ea1cca8c715, rgb(98, 103, 111)))",
                    },
                    children:
                      "The Proton platform is capable of performing quantum computing based algorithms without their limitations, significantly accelerating machine learning training, optimising feature selection and improving model accuracy. ",
                  }),
                  e(o.p, {
                    className: "framer-styles-preset-21ogod",
                    "data-styles-preset": "xZndidUCt",
                    style: {
                      "--framer-text-color":
                        "var(--extracted-2gxw0f, var(--token-50859c1e-b9ab-4124-b93a-6ea1cca8c715, rgb(98, 103, 111)))",
                    },
                    children:
                      "It also addresses optimization challenges faced by Fin-Tech, Pharmaceutical, Genomics, Smart Cities and Global-2000 companies.",
                  }),
                ],
              }),
              className: "framer-5u3zj8",
              layoutDependency: E,
              layoutId: "zfTrVifnr",
              style: {
                "--extracted-2gxw0f":
                  "var(--token-50859c1e-b9ab-4124-b93a-6ea1cca8c715, rgb(98, 103, 111))",
                "--extracted-r6o4lv":
                  "var(--token-50859c1e-b9ab-4124-b93a-6ea1cca8c715, rgb(98, 103, 111))",
                "--framer-link-text-color": "rgb(0, 153, 255)",
                "--framer-link-text-decoration": "underline",
              },
              variants: {
                "SNgQa2QQH-hover": {
                  "--extracted-2gxw0f":
                    "var(--token-e2149c75-9099-4842-aea6-4fbafaef2693, rgb(191, 199, 212))",
                  "--extracted-r6o4lv":
                    "var(--token-e2149c75-9099-4842-aea6-4fbafaef2693, rgb(191, 199, 212))",
                },
              },
              verticalAlignment: "top",
              withExternalLayout: !0,
              ...vr(
                {
                  "SNgQa2QQH-hover": {
                    children: d(s, {
                      children: [
                        e(o.p, {
                          className: "framer-styles-preset-21ogod",
                          "data-styles-preset": "xZndidUCt",
                          style: {
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-e2149c75-9099-4842-aea6-4fbafaef2693, rgb(191, 199, 212)))",
                          },
                          children:
                            "The Proton platform is capable of performing quantum computing based algorithms without their limitations, significantly accelerating machine learning training, optimising feature selection and improving model accuracy. ",
                        }),
                        e(o.p, {
                          className: "framer-styles-preset-21ogod",
                          "data-styles-preset": "xZndidUCt",
                          style: {
                            "--framer-text-color":
                              "var(--extracted-2gxw0f, var(--token-e2149c75-9099-4842-aea6-4fbafaef2693, rgb(191, 199, 212)))",
                          },
                          children:
                            "It also addresses optimization challenges faced by Fin-Tech, Pharmaceutical, Genomics, Smart Cities and Global-2000 companies.",
                        }),
                      ],
                    }),
                  },
                  XNXC65zCA: {
                    children: d(s, {
                      children: [
                        e(o.p, {
                          className: "framer-styles-preset-21ogod",
                          "data-styles-preset": "xZndidUCt",
                          children:
                            "The Proton platform is capable of performing quantum computing based algorithms without their limitations, significantly accelerating machine learning training, optimising feature selection and improving model accuracy. ",
                        }),
                        e(o.p, {
                          className: "framer-styles-preset-21ogod",
                          "data-styles-preset": "xZndidUCt",
                          children:
                            "It also addresses optimization challenges faced by Fin-Tech, Pharmaceutical, Genomics, Smart Cities and Global-2000 companies.",
                        }),
                      ],
                    }),
                  },
                },
                F,
                b
              ),
            }),
          ],
        }),
      }),
    });
  }),
  Dt = [
    '.framer-QO1RE[data-border="true"]::after, .framer-QO1RE [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-QO1RE.framer-1c8eabf, .framer-QO1RE .framer-1c8eabf { display: block; }",
    ".framer-QO1RE.framer-1jwjuaz { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: auto; justify-content: flex-start; min-width: 300px; overflow: hidden; padding: 48px 48px 48px 48px; position: relative; width: 506px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-QO1RE .framer-jh9dz8 { -webkit-user-select: none; cursor: pointer; flex: none; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-QO1RE .framer-1s46jup-container { bottom: 0px; flex: none; height: 100%; left: 0px; position: absolute; width: 100%; }",
    ".framer-QO1RE .framer-5u3zj8 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-QO1RE.framer-1jwjuaz { gap: 0px; } .framer-QO1RE.framer-1jwjuaz > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-QO1RE.framer-1jwjuaz > :first-child { margin-top: 0px; } .framer-QO1RE.framer-1jwjuaz > :last-child { margin-bottom: 0px; } }",
    ".framer-QO1RE.framer-v-xu1tsv.framer-1jwjuaz { cursor: unset; padding: 24px 24px 24px 24px; }",
    ...rt,
    ...ke,
  ],
  Le = Y(At, Dt, "framer-QO1RE"),
  wr = Le;
Le.displayName = "About/Endless";
Le.defaultProps = { height: 502, width: 506 };
J(Le, {
  variant: {
    options: ["SNgQa2QQH", "XNXC65zCA"],
    optionTitles: ["Variant 1", "Mobile"],
    title: "Variant",
    type: x.Enum,
  },
  PdPNpvCFq: {
    defaultValue: "Endless Possibilites",
    displayTextArea: !1,
    title: "Title",
    type: x.String,
  },
});
G(Le, [...Lt, ...et, ..._e]);
var Qt = w(se),
  Je = Hr(se),
  Wt = ["ohTCRDcHH"],
  Jt = "framer-pNgcu",
  Yt = { ohTCRDcHH: "framer-v-z2yw3m" };
var Gt = {
  default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
};
var Xt = ({ value: r, children: a }) => {
    let t = ne(q),
      i = r ?? t.transition,
      l = M(() => ({ ...t, transition: i }), [JSON.stringify(i)]);
    return e(q.Provider, { value: l, children: a });
  },
  Zt = {
    "All Jobs": "total_supply",
    "Block Height": "blockheight",
    "Proton Chips": "solution_rewards",
    "Finished Jobs": "jobs_all",
    "Jobs in Progress": "jobs_upcoming",
    "Next Reward": "nextreward",
    "Solution Rewards": "jobs_inprogress",
    "Total GPUS": "dynex_chips",
    "Upcoming Jobs": "jobs_finished",
    Circulation: "circulation",
    Hashrate: "hashrate",
    Transactions: "transactions",
  },
  Kt = ({ data: r, height: a, id: t, title: i, width: l, ...m }) => {
    var c, f, v, n;
    return {
      ...m,
      jYwSC76Yw:
        (c = i ?? m.jYwSC76Yw) !== null && c !== void 0 ? c : "Hash Rate      ",
      QVK7aWHm1:
        (n =
          (v = (f = Zt[r]) !== null && f !== void 0 ? f : r) !== null &&
          v !== void 0
            ? v
            : m.QVK7aWHm1) !== null && n !== void 0
          ? n
          : "hashrate",
    };
  },
  $t = (r, a) => a.join("-") + r.layoutDependency,
  ea = A(function (r, a) {
    let { activeLocale: t, setLocale: i } = W(),
      {
        style: l,
        className: m,
        layoutId: c,
        variant: f,
        jYwSC76Yw: v,
        QVK7aWHm1: n,
        ...F
      } = Kt(r),
      {
        baseVariant: U,
        classNames: b,
        gestureVariant: k,
        setGestureState: I,
        setVariant: u,
        transition: y,
        variants: E,
      } = ie({
        cycleOrder: Wt,
        defaultVariant: "ohTCRDcHH",
        transitions: Gt,
        variant: f,
        variantClassNames: Yt,
      }),
      R = $t(r, E),
      z = T(null),
      j = D(),
      ae = [Re];
    return e(Q, {
      id: c ?? j,
      children: e(Xt, {
        value: y,
        children: d(o.div, {
          ...F,
          animate: E,
          className: O(Jt, ...ae, "framer-z2yw3m", m, b),
          "data-border": !0,
          "data-framer-name": "Variant 1",
          initial: f,
          layoutDependency: R,
          layoutId: "ohTCRDcHH",
          onHoverEnd: () => I({ isHovered: !1 }),
          onHoverStart: () => I({ isHovered: !0 }),
          onTap: () => I({ isPressed: !1 }),
          onTapCancel: () => I({ isPressed: !1 }),
          onTapStart: () => I({ isPressed: !0 }),
          ref: a ?? z,
          style: {
            "--border-bottom-width": "1px",
            "--border-color": "rgba(36, 38, 41, 0.5)",
            "--border-left-width": "1px",
            "--border-right-width": "1px",
            "--border-style": "solid",
            "--border-top-width": "1px",
            borderBottomLeftRadius: 2,
            borderBottomRightRadius: 2,
            borderTopLeftRadius: 2,
            borderTopRightRadius: 2,
            ...l,
          },
          children: [
            e(S, {
              __fromCanvasComponent: !0,
              children: e(s, {
                children: e(o.p, {
                  className: "framer-styles-preset-1ygrrqz",
                  "data-styles-preset": "aSqMlk60T",
                  style: {
                    "--framer-text-color":
                      "var(--extracted-r6o4lv, var(--token-50859c1e-b9ab-4124-b93a-6ea1cca8c715, rgb(98, 103, 111)))",
                  },
                  children: "Hash Rate      ",
                }),
              }),
              className: "framer-1q8w02s",
              layoutDependency: R,
              layoutId: "WOwIuKw4S",
              style: {
                "--extracted-r6o4lv":
                  "var(--token-50859c1e-b9ab-4124-b93a-6ea1cca8c715, rgb(98, 103, 111))",
                "--framer-link-text-color": "rgb(0, 153, 255)",
                "--framer-link-text-decoration": "underline",
              },
              text: v,
              verticalAlignment: "top",
              withExternalLayout: !0,
            }),
            e(o.div, {
              className: "framer-1bgqcwz-container",
              layoutDependency: R,
              layoutId: "m_tC3pRfV-container",
              children: e(se, {
                fontSize: 28,
                height: "100%",
                id: "m_tC3pRfV",
                layoutId: "m_tC3pRfV",
                Show: n,
                style: { width: "100%" },
                textAlignment: "left",
                textColor:
                  'var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255)) /* {"name":"White"} */',
                width: "100%",
              }),
            }),
            d(o.div, {
              className: "framer-coglu2",
              "data-framer-name": "Corners",
              layoutDependency: R,
              layoutId: "Y3vY2JxX9",
              style: { opacity: 0.5 },
              children: [
                e(o.div, {
                  className: "framer-1sqqvlj",
                  "data-border": !0,
                  "data-framer-name": "Top Left ",
                  layoutDependency: R,
                  layoutId: "KVLv9kMM5",
                  style: {
                    "--border-bottom-width": "0px",
                    "--border-color": "rgb(255, 255, 255)",
                    "--border-left-width": "1px",
                    "--border-right-width": "0px",
                    "--border-style": "solid",
                    "--border-top-width": "1px",
                    borderTopLeftRadius: 3,
                    opacity: 0.4,
                  },
                }),
                e(o.div, {
                  className: "framer-81f406",
                  "data-border": !0,
                  "data-framer-name": "Top Left ",
                  layoutDependency: R,
                  layoutId: "an8q9NuJj",
                  style: {
                    "--border-bottom-width": "0px",
                    "--border-color": "rgb(255, 255, 255)",
                    "--border-left-width": "1px",
                    "--border-right-width": "0px",
                    "--border-style": "solid",
                    "--border-top-width": "1px",
                    borderTopLeftRadius: 3,
                    opacity: 0.4,
                    rotate: -90,
                  },
                }),
                e(o.div, {
                  className: "framer-13dskz5",
                  "data-border": !0,
                  "data-framer-name": "Top Left ",
                  layoutDependency: R,
                  layoutId: "DAJcVGmVU",
                  style: {
                    "--border-bottom-width": "0px",
                    "--border-color": "rgb(255, 255, 255)",
                    "--border-left-width": "1px",
                    "--border-right-width": "0px",
                    "--border-style": "solid",
                    "--border-top-width": "1px",
                    borderTopLeftRadius: 3,
                    opacity: 0.4,
                    rotate: 90,
                  },
                }),
                e(o.div, {
                  className: "framer-y8g8kv",
                  "data-border": !0,
                  "data-framer-name": "Top Left ",
                  layoutDependency: R,
                  layoutId: "A4_VMG_EP",
                  style: {
                    "--border-bottom-width": "0px",
                    "--border-color": "rgb(255, 255, 255)",
                    "--border-left-width": "1px",
                    "--border-right-width": "0px",
                    "--border-style": "solid",
                    "--border-top-width": "1px",
                    borderTopLeftRadius: 3,
                    opacity: 0.4,
                    rotate: 180,
                  },
                }),
              ],
            }),
          ],
        }),
      }),
    });
  }),
  ra = [
    '.framer-pNgcu[data-border="true"]::after, .framer-pNgcu [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-pNgcu.framer-dxa1wq, .framer-pNgcu .framer-dxa1wq { display: block; }",
    ".framer-pNgcu.framer-z2yw3m { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: auto; justify-content: flex-start; min-width: 245px; overflow: visible; padding: 24px 24px 24px 24px; position: relative; width: auto; }",
    ".framer-pNgcu .framer-1q8w02s { -webkit-user-select: none; cursor: pointer; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }",
    ".framer-pNgcu .framer-1bgqcwz-container { align-self: stretch; flex: none; height: auto; position: relative; width: auto; }",
    ".framer-pNgcu .framer-coglu2 { bottom: 0px; flex: none; height: 100%; overflow: hidden; position: absolute; right: 0px; width: 100%; z-index: 1; }",
    ".framer-pNgcu .framer-1sqqvlj { flex: none; height: 6px; left: 0px; overflow: hidden; position: absolute; top: 0px; width: 6px; will-change: var(--framer-will-change-override, transform); z-index: 1; }",
    ".framer-pNgcu .framer-81f406 { bottom: 0px; flex: none; height: 6px; left: 0px; overflow: hidden; position: absolute; width: 6px; will-change: var(--framer-will-change-override, transform); z-index: 1; }",
    ".framer-pNgcu .framer-13dskz5 { flex: none; height: 6px; overflow: hidden; position: absolute; right: 0px; top: 0px; width: 6px; will-change: var(--framer-will-change-override, transform); z-index: 1; }",
    ".framer-pNgcu .framer-y8g8kv { bottom: 0px; flex: none; height: 6px; overflow: hidden; position: absolute; right: 0px; width: 6px; will-change: var(--framer-will-change-override, transform); z-index: 1; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-pNgcu.framer-z2yw3m { gap: 0px; } .framer-pNgcu.framer-z2yw3m > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-pNgcu.framer-z2yw3m > :first-child { margin-top: 0px; } .framer-pNgcu.framer-z2yw3m > :last-child { margin-bottom: 0px; } }",
    ...we,
  ],
  Te = Y(ea, ra, "framer-pNgcu"),
  le = Te;
Te.displayName = "Network Item";
Te.defaultProps = { height: 139, width: 220 };
J(Te, {
  jYwSC76Yw: {
    defaultValue: "Hash Rate      ",
    displayTextArea: !1,
    title: "Title",
    type: x.String,
  },
  QVK7aWHm1: Je?.Show && {
    ...Je.Show,
    defaultValue: "hashrate",
    description: void 0,
    hidden: void 0,
    title: "Data",
  },
});
G(Te, [...Qt, ...ve]);
var oa = w(H),
  na = { JdsjnOJk7: { hover: !0 } },
  ia = ["JdsjnOJk7", "j4wS5g39O"],
  sa = "framer-5HmVc",
  la = { j4wS5g39O: "framer-v-beqj94", JdsjnOJk7: "framer-v-mmxnbk" };
function Ue(r, ...a) {
  let t = {};
  return a?.forEach((i) => i && Object.assign(t, r[i])), t;
}
var ca = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  ma = ({ value: r, children: a }) => {
    let t = ne(q),
      i = r ?? t.transition,
      l = M(() => ({ ...t, transition: i }), [JSON.stringify(i)]);
    return e(q.Provider, { value: l, children: a });
  },
  da = o(s),
  fa = { Desktop: "JdsjnOJk7", Mobile: "j4wS5g39O" },
  pa = ({ height: r, id: a, width: t, ...i }) => {
    var l, m;
    return {
      ...i,
      variant:
        (m = (l = fa[i.variant]) !== null && l !== void 0 ? l : i.variant) !==
          null && m !== void 0
          ? m
          : "JdsjnOJk7",
    };
  },
  ha = (r, a) => a.join("-") + r.layoutDependency,
  xa = A(function (r, a) {
    let { activeLocale: t, setLocale: i } = W(),
      { style: l, className: m, layoutId: c, variant: f, ...v } = pa(r),
      {
        baseVariant: n,
        classNames: F,
        gestureVariant: U,
        setGestureState: b,
        setVariant: k,
        variants: I,
      } = ie({
        cycleOrder: ia,
        defaultVariant: "JdsjnOJk7",
        enabledGestures: na,
        variant: f,
        variantClassNames: la,
      }),
      u = ha(r, I),
      y = T(null),
      E = () => n !== "j4wS5g39O",
      R = D(),
      z = [Re, Qe, Ce],
      j = Be();
    return e(Q, {
      id: c ?? R,
      children: e(da, {
        animate: I,
        initial: !1,
        children: e(ma, {
          value: ca,
          children: d(o.div, {
            ...v,
            className: O(sa, ...z, "framer-mmxnbk", m, F),
            "data-border": !0,
            "data-framer-name": "Desktop",
            layoutDependency: u,
            layoutId: "JdsjnOJk7",
            onHoverEnd: () => b({ isHovered: !1 }),
            onHoverStart: () => b({ isHovered: !0 }),
            onTap: () => b({ isPressed: !1 }),
            onTapCancel: () => b({ isPressed: !1 }),
            onTapStart: () => b({ isPressed: !0 }),
            ref: a ?? y,
            style: {
              "--border-bottom-width": "1px",
              "--border-color":
                'var(--token-6678d9c0-cf59-4b90-8a3f-78db6c108cce, rgb(26, 28, 30)) /* {"name":"Border"} */',
              "--border-left-width": "1px",
              "--border-right-width": "1px",
              "--border-style": "dashed",
              "--border-top-width": "1px",
              borderBottomLeftRadius: 2,
              borderBottomRightRadius: 2,
              borderTopLeftRadius: 2,
              borderTopRightRadius: 2,
              ...l,
            },
            ...Ue(
              {
                "JdsjnOJk7-hover": { "data-framer-name": void 0 },
                j4wS5g39O: { "data-framer-name": "Mobile" },
              },
              n,
              U
            ),
            children: [
              d(o.div, {
                className: "framer-xghibn",
                "data-framer-name": "Top",
                layoutDependency: u,
                layoutId: "NhyAAzJnx",
                children: [
                  e(S, {
                    __fromCanvasComponent: !0,
                    children: e(s, {
                      children: e(o.p, {
                        className: "framer-styles-preset-1ygrrqz",
                        "data-styles-preset": "aSqMlk60T",
                        style: {
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-50859c1e-b9ab-4124-b93a-6ea1cca8c715, rgb(98, 103, 111)))",
                        },
                        children: "Proof of Useful Work",
                      }),
                    }),
                    className: "framer-1y3f8u4",
                    fonts: ["Inter"],
                    layoutDependency: u,
                    layoutId: "IxM5SalVZ",
                    style: {
                      "--extracted-r6o4lv":
                        "var(--token-50859c1e-b9ab-4124-b93a-6ea1cca8c715, rgb(98, 103, 111))",
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                  e(S, {
                    __fromCanvasComponent: !0,
                    children: e(s, {
                      children: e(o.h3, {
                        className: "framer-styles-preset-bcjq8k",
                        "data-styles-preset": "EtnOUzv10",
                        style: {
                          "--framer-text-color":
                            "var(--extracted-a0htzi, var(--token-e2149c75-9099-4842-aea6-4fbafaef2693, rgb(191, 199, 212)))",
                        },
                        children: "Proton Solve",
                      }),
                    }),
                    className: "framer-1h5q29i",
                    fonts: ["Inter"],
                    layoutDependency: u,
                    layoutId: "IvoXa1lfR",
                    style: {
                      "--extracted-a0htzi":
                        "var(--token-e2149c75-9099-4842-aea6-4fbafaef2693, rgb(191, 199, 212))",
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    variants: {
                      "JdsjnOJk7-hover": {
                        "--extracted-a0htzi":
                          "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                      },
                      j4wS5g39O: {
                        "--extracted-a0htzi":
                          "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                      },
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                    ...Ue(
                      {
                        "JdsjnOJk7-hover": {
                          children: e(s, {
                            children: e(o.h3, {
                              className: "framer-styles-preset-bcjq8k",
                              "data-styles-preset": "EtnOUzv10",
                              style: {
                                "--framer-text-color":
                                  "var(--extracted-a0htzi, var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255)))",
                              },
                              children: "Proton Solve",
                            }),
                          }),
                        },
                        j4wS5g39O: {
                          children: e(s, {
                            children: e(o.h3, {
                              className: "framer-styles-preset-bcjq8k",
                              "data-styles-preset": "EtnOUzv10",
                              style: {
                                "--framer-text-color":
                                  "var(--extracted-a0htzi, var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255)))",
                              },
                              children: "Proton Solve",
                            }),
                          }),
                        },
                      },
                      n,
                      U
                    ),
                  }),
                ],
              }),
              d(o.div, {
                className: "framer-5s1478",
                "data-framer-name": "Corners",
                layoutDependency: u,
                layoutId: "STyIIrT7E",
                style: { opacity: 0.75 },
                children: [
                  e(o.div, {
                    className: "framer-5v0uxq",
                    "data-border": !0,
                    "data-framer-name": "TL",
                    layoutDependency: u,
                    layoutId: "yoHqQkYAz",
                    style: {
                      "--border-bottom-width": "0px",
                      "--border-color": "rgb(255, 255, 255)",
                      "--border-left-width": "1px",
                      "--border-right-width": "0px",
                      "--border-style": "solid",
                      "--border-top-width": "1px",
                      borderTopLeftRadius: 3,
                      opacity: 0.4,
                    },
                  }),
                  e(o.div, {
                    className: "framer-8lbl2i",
                    "data-border": !0,
                    "data-framer-name": "Top Left ",
                    layoutDependency: u,
                    layoutId: "qtq1eKrYU",
                    style: {
                      "--border-bottom-width": "0px",
                      "--border-color": "rgb(255, 255, 255)",
                      "--border-left-width": "1px",
                      "--border-right-width": "0px",
                      "--border-style": "solid",
                      "--border-top-width": "1px",
                      borderTopLeftRadius: 3,
                      opacity: 0.4,
                      rotate: -90,
                    },
                  }),
                  e(o.div, {
                    className: "framer-19mwowk",
                    "data-border": !0,
                    "data-framer-name": "Top Left ",
                    layoutDependency: u,
                    layoutId: "CK9jpDo2L",
                    style: {
                      "--border-bottom-width": "0px",
                      "--border-color": "rgb(255, 255, 255)",
                      "--border-left-width": "1px",
                      "--border-right-width": "0px",
                      "--border-style": "solid",
                      "--border-top-width": "1px",
                      borderTopLeftRadius: 3,
                      opacity: 0.4,
                      rotate: 90,
                    },
                  }),
                  e(o.div, {
                    className: "framer-z0kagi",
                    "data-border": !0,
                    "data-framer-name": "BR",
                    layoutDependency: u,
                    layoutId: "P4Y84Esl1",
                    style: {
                      "--border-bottom-width": "0px",
                      "--border-color": "rgb(255, 255, 255)",
                      "--border-left-width": "1px",
                      "--border-right-width": "0px",
                      "--border-style": "solid",
                      "--border-top-width": "1px",
                      borderTopLeftRadius: 3,
                      opacity: 0.4,
                      rotate: 180,
                    },
                  }),
                ],
              }),
              d(o.div, {
                className: "framer-11d1bgb",
                "data-framer-name": "Paragraphs",
                layoutDependency: u,
                layoutId: "cxPR5rgr8",
                children: [
                  e(S, {
                    __fromCanvasComponent: !0,
                    children: e(s, {
                      children: e(o.p, {
                        className: "framer-styles-preset-21ogod",
                        "data-styles-preset": "xZndidUCt",
                        style: {
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-50859c1e-b9ab-4124-b93a-6ea1cca8c715, rgb(98, 103, 111)))",
                        },
                        children:
                          "We have built an algorithm for n.quantum computing which is based on ideal memristors - resistive devices with memory. Memristors are mathematically modeled using a set of differential algebraic equations, where an ordinary differential equation governs the memory state's time evolution, and an algebraic relation captures the state- and input-dependent Ohm's law. ",
                      }),
                    }),
                    className: "framer-2iuz2e",
                    fonts: ["Inter"],
                    layoutDependency: u,
                    layoutId: "j29QkG7ou",
                    style: {
                      "--extracted-r6o4lv":
                        "var(--token-50859c1e-b9ab-4124-b93a-6ea1cca8c715, rgb(98, 103, 111))",
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    variants: {
                      "JdsjnOJk7-hover": {
                        "--extracted-r6o4lv":
                          "var(--token-e2149c75-9099-4842-aea6-4fbafaef2693, rgb(191, 199, 212))",
                      },
                      j4wS5g39O: {
                        "--extracted-r6o4lv":
                          "var(--token-e2149c75-9099-4842-aea6-4fbafaef2693, rgb(191, 199, 212))",
                      },
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                    ...Ue(
                      {
                        "JdsjnOJk7-hover": {
                          children: e(s, {
                            children: e(o.p, {
                              className: "framer-styles-preset-21ogod",
                              "data-styles-preset": "xZndidUCt",
                              style: {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-e2149c75-9099-4842-aea6-4fbafaef2693, rgb(191, 199, 212)))",
                              },
                              children:
                                "We have built an algorithm for n.quantum computing which is based on ideal memristors - resistive devices with memory. Memristors are mathematically modeled using a set of differential algebraic equations, where an ordinary differential equation governs the memory state's time evolution, and an algebraic relation captures the state- and input-dependent Ohm's law. ",
                            }),
                          }),
                        },
                        j4wS5g39O: {
                          children: e(s, {
                            children: e(o.p, {
                              className: "framer-styles-preset-21ogod",
                              "data-styles-preset": "xZndidUCt",
                              style: {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-e2149c75-9099-4842-aea6-4fbafaef2693, rgb(191, 199, 212)))",
                              },
                              children:
                                "We have built an algorithm for n.quantum computing which is based on ideal memristors - resistive devices with memory. Memristors are mathematically modeled using a set of differential algebraic equations, where an ordinary differential equation governs the memory state's time evolution, and an algebraic relation captures the state- and input-dependent Ohm's law. ",
                            }),
                          }),
                        },
                      },
                      n,
                      U
                    ),
                  }),
                  e(S, {
                    __fromCanvasComponent: !0,
                    children: e(s, {
                      children: e(o.p, {
                        className: "framer-styles-preset-21ogod",
                        "data-styles-preset": "xZndidUCt",
                        style: {
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-50859c1e-b9ab-4124-b93a-6ea1cca8c715, rgb(98, 103, 111)))",
                        },
                        children:
                          "The ProtonSolve PoUW algorithm utilizes the exceptional performance of memristors and performs ODE integration (simulations) of Proton Chips. By leveraging the parallel processing power of multiple GPUs, the algorithm is the core of Proton' n.quantum computing network.",
                      }),
                    }),
                    className: "framer-6mpa94",
                    fonts: ["Inter"],
                    layoutDependency: u,
                    layoutId: "WC2TM_OIC",
                    style: {
                      "--extracted-r6o4lv":
                        "var(--token-50859c1e-b9ab-4124-b93a-6ea1cca8c715, rgb(98, 103, 111))",
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    variants: {
                      "JdsjnOJk7-hover": {
                        "--extracted-r6o4lv":
                          "var(--token-e2149c75-9099-4842-aea6-4fbafaef2693, rgb(191, 199, 212))",
                      },
                      j4wS5g39O: {
                        "--extracted-r6o4lv":
                          "var(--token-e2149c75-9099-4842-aea6-4fbafaef2693, rgb(191, 199, 212))",
                      },
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                    ...Ue(
                      {
                        "JdsjnOJk7-hover": {
                          children: e(s, {
                            children: e(o.p, {
                              className: "framer-styles-preset-21ogod",
                              "data-styles-preset": "xZndidUCt",
                              style: {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-e2149c75-9099-4842-aea6-4fbafaef2693, rgb(191, 199, 212)))",
                              },
                              children:
                                "The ProtonSolve PoUW algorithm utilizes the exceptional performance of memristors and performs ODE integration (simulations) of Proton Chips. By leveraging the parallel processing power of multiple GPUs, the algorithm is the core of Proton' n.quantum computing network.",
                            }),
                          }),
                        },
                        j4wS5g39O: {
                          children: e(s, {
                            children: e(o.p, {
                              className: "framer-styles-preset-21ogod",
                              "data-styles-preset": "xZndidUCt",
                              style: {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-e2149c75-9099-4842-aea6-4fbafaef2693, rgb(191, 199, 212)))",
                              },
                              children:
                                "The ProtonSolve PoUW algorithm utilizes the exceptional performance of memristors and performs ODE integration (simulations) of Proton Chips. By leveraging the parallel processing power of multiple GPUs, the algorithm is the core of Proton' n.quantum computing network.",
                            }),
                          }),
                        },
                      },
                      n,
                      U
                    ),
                  }),
                ],
              }),
              E() &&
                e(o.div, {
                  className: "framer-1e7mmcy",
                  "data-framer-name": "VideoSquare",
                  layoutDependency: u,
                  layoutId: "Vlc5zVuFO",
                  style: {
                    filter: "saturate(0.35)",
                    opacity: 0.3,
                    rotate: -15,
                    WebkitFilter: "saturate(0.35)",
                  },
                  variants: { "JdsjnOJk7-hover": { opacity: 1 } },
                  children: e(h, {
                    children: e(o.div, {
                      className: "framer-mbjkq7-container",
                      layoutDependency: u,
                      layoutId: "Umqsebytg-container",
                      children: e(H, {
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderRadius: 0,
                        bottomLeftRadius: 0,
                        bottomRightRadius: 0,
                        controls: !1,
                        height: "100%",
                        id: "Umqsebytg",
                        isMixedBorderRadius: !1,
                        layoutId: "Umqsebytg",
                        loop: !0,
                        muted: !0,
                        objectFit: "cover",
                        playing: !1,
                        posterEnabled: !1,
                        srcFile:
                          "https://framerusercontent.com/assets/hElF1ohigbKTb0D6UptpFvSWvbg.mp4",
                        srcType: "Upload",
                        srcUrl:
                          "https://assets.mixkit.co/videos/preview/mixkit-shining-sun-in-the-sky-surrounded-by-moving-clouds-31793-small.mp4",
                        startTime: 0,
                        style: { height: "100%", width: "100%" },
                        topLeftRadius: 0,
                        topRightRadius: 0,
                        volume: 25,
                        width: "100%",
                        ...Ue({ "JdsjnOJk7-hover": { playing: !0 } }, n, U),
                      }),
                    }),
                  }),
                }),
            ],
          }),
        }),
      }),
    });
  }),
  ua = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-5HmVc.framer-n9mkqx, .framer-5HmVc .framer-n9mkqx { display: block; }",
    ".framer-5HmVc.framer-mmxnbk { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: flex-start; min-width: 400px; mix-blend-mode: screen; overflow: hidden; padding: 48px 48px 48px 48px; position: relative; width: 1104px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-5HmVc .framer-xghibn { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1px; z-index: 1; }",
    ".framer-5HmVc .framer-1y3f8u4, .framer-5HmVc .framer-1h5q29i { -webkit-user-select: none; cursor: pointer; flex: none; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-5HmVc .framer-5s1478 { bottom: 0px; flex: none; height: 100%; left: 0px; overflow: hidden; position: absolute; width: 100%; z-index: 1; }",
    ".framer-5HmVc .framer-5v0uxq { flex: none; height: 6px; left: 0px; overflow: hidden; position: absolute; top: 0px; width: 6px; will-change: var(--framer-will-change-override, transform); z-index: 1; }",
    ".framer-5HmVc .framer-8lbl2i { bottom: 0px; flex: none; height: 6px; left: 0px; overflow: hidden; position: absolute; width: 6px; will-change: var(--framer-will-change-override, transform); z-index: 1; }",
    ".framer-5HmVc .framer-19mwowk { flex: none; height: 6px; overflow: hidden; position: absolute; right: 0px; top: 0px; width: 6px; will-change: var(--framer-will-change-override, transform); z-index: 1; }",
    ".framer-5HmVc .framer-z0kagi { bottom: 0px; flex: none; height: 6px; overflow: hidden; position: absolute; right: 0px; width: 6px; will-change: var(--framer-will-change-override, transform); z-index: 1; }",
    ".framer-5HmVc .framer-11d1bgb { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1px; z-index: 1; }",
    ".framer-5HmVc .framer-2iuz2e, .framer-5HmVc .framer-6mpa94 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-5HmVc .framer-1e7mmcy { align-content: center; align-items: center; aspect-ratio: 1 / 1; bottom: -214px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 643px); justify-content: center; left: -159px; mix-blend-mode: screen; overflow: hidden; padding: 0px 0px 0px 0px; position: absolute; width: 643px; z-index: 0; }",
    ".framer-5HmVc .framer-mbjkq7-container { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 1; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-5HmVc.framer-mmxnbk, .framer-5HmVc .framer-xghibn, .framer-5HmVc .framer-11d1bgb, .framer-5HmVc .framer-1e7mmcy { gap: 0px; } .framer-5HmVc.framer-mmxnbk > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-5HmVc.framer-mmxnbk > :first-child, .framer-5HmVc .framer-1e7mmcy > :first-child { margin-left: 0px; } .framer-5HmVc.framer-mmxnbk > :last-child, .framer-5HmVc .framer-1e7mmcy > :last-child { margin-right: 0px; } .framer-5HmVc .framer-xghibn > * { margin: 0px; margin-bottom: calc(4px / 2); margin-top: calc(4px / 2); } .framer-5HmVc .framer-xghibn > :first-child, .framer-5HmVc .framer-11d1bgb > :first-child { margin-top: 0px; } .framer-5HmVc .framer-xghibn > :last-child, .framer-5HmVc .framer-11d1bgb > :last-child { margin-bottom: 0px; } .framer-5HmVc .framer-11d1bgb > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-5HmVc .framer-1e7mmcy > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }",
    ".framer-5HmVc.framer-v-beqj94.framer-mmxnbk { cursor: unset; flex-direction: column; gap: 48px; min-width: unset; padding: 48px 24px 48px 24px; width: 390px; }",
    ".framer-5HmVc.framer-v-beqj94 .framer-xghibn, .framer-5HmVc.framer-v-beqj94 .framer-11d1bgb { flex: none; width: 100%; }",
    ".framer-5HmVc.framer-v-beqj94 .framer-5s1478 { height: 547px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-5HmVc.framer-v-beqj94.framer-mmxnbk { gap: 0px; } .framer-5HmVc.framer-v-beqj94.framer-mmxnbk > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-5HmVc.framer-v-beqj94.framer-mmxnbk > :first-child { margin-top: 0px; } .framer-5HmVc.framer-v-beqj94.framer-mmxnbk > :last-child { margin-bottom: 0px; } }",
    ...we,
    ...Me,
    ...ke,
    '.framer-5HmVc[data-border="true"]::after, .framer-5HmVc [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  ze = Y(xa, ua, "framer-5HmVc"),
  Rr = ze;
ze.displayName = "About/ProtonSolve";
ze.defaultProps = { height: 489.5, width: 1104 };
J(ze, {
  variant: {
    options: ["JdsjnOJk7", "j4wS5g39O"],
    optionTitles: ["Desktop", "Mobile"],
    title: "Variant",
    type: x.Enum,
  },
});
G(
  ze,
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
      ],
    },
    ...oa,
    ...B(ve),
    ...B(De),
    ...B(_e),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var ba = w(H),
  ya = { EqNwqppSo: { hover: !0 } },
  va = ["EqNwqppSo", "CbVfYxRIG"],
  wa = "framer-tEtQh",
  Ra = { CbVfYxRIG: "framer-v-52zamf", EqNwqppSo: "framer-v-1pa53lc" };
function Ye(r, ...a) {
  let t = {};
  return a?.forEach((i) => i && Object.assign(t, r[i])), t;
}
var _a = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  ka = ({ value: r, children: a }) => {
    let t = ne(q),
      i = r ?? t.transition,
      l = M(() => ({ ...t, transition: i }), [JSON.stringify(i)]);
    return e(q.Provider, { value: l, children: a });
  },
  Ca = o(s),
  Sa = { "Variant 1": "EqNwqppSo", Mobile: "CbVfYxRIG" },
  Va = ({ height: r, id: a, title: t, width: i, ...l }) => {
    var m, c, f;
    return {
      ...l,
      IZj2RVV3J:
        (m = t ?? l.IZj2RVV3J) !== null && m !== void 0
          ? m
          : "A Flexible Blockchain",
      variant:
        (f = (c = Sa[l.variant]) !== null && c !== void 0 ? c : l.variant) !==
          null && f !== void 0
          ? f
          : "EqNwqppSo",
    };
  },
  Na = (r, a) => a.join("-") + r.layoutDependency,
  Fa = A(function (r, a) {
    let { activeLocale: t, setLocale: i } = W(),
      {
        style: l,
        className: m,
        layoutId: c,
        variant: f,
        IZj2RVV3J: v,
        ...n
      } = Va(r),
      {
        baseVariant: F,
        classNames: U,
        gestureVariant: b,
        setGestureState: k,
        setVariant: I,
        variants: u,
      } = ie({
        cycleOrder: va,
        defaultVariant: "EqNwqppSo",
        enabledGestures: ya,
        variant: f,
        variantClassNames: Ra,
      }),
      y = Na(r, u),
      E = T(null),
      R = () => F !== "CbVfYxRIG",
      z = D(),
      j = [Qe, Ce],
      ae = Be();
    return e(Q, {
      id: c ?? z,
      children: e(Ca, {
        animate: u,
        initial: !1,
        children: e(ka, {
          value: _a,
          children: d(o.div, {
            ...n,
            className: O(wa, ...j, "framer-1pa53lc", m, U),
            "data-border": !0,
            "data-framer-name": "Variant 1",
            layoutDependency: y,
            layoutId: "EqNwqppSo",
            onHoverEnd: () => k({ isHovered: !1 }),
            onHoverStart: () => k({ isHovered: !0 }),
            onTap: () => k({ isPressed: !1 }),
            onTapCancel: () => k({ isPressed: !1 }),
            onTapStart: () => k({ isPressed: !0 }),
            ref: a ?? E,
            style: {
              "--border-bottom-width": "1px",
              "--border-color":
                'var(--token-6678d9c0-cf59-4b90-8a3f-78db6c108cce, rgb(26, 28, 30)) /* {"name":"Border"} */',
              "--border-left-width": "1px",
              "--border-right-width": "1px",
              "--border-style": "dashed",
              "--border-top-width": "1px",
              borderBottomLeftRadius: 2,
              borderBottomRightRadius: 2,
              borderTopLeftRadius: 2,
              borderTopRightRadius: 2,
              ...l,
            },
            ...Ye(
              {
                "EqNwqppSo-hover": { "data-framer-name": void 0 },
                CbVfYxRIG: { "data-framer-name": "Mobile" },
              },
              F,
              b
            ),
            children: [
              e(S, {
                __fromCanvasComponent: !0,
                children: e(s, {
                  children: e(o.h3, {
                    className: "framer-styles-preset-bcjq8k",
                    "data-styles-preset": "EtnOUzv10",
                    style: {
                      "--framer-text-color":
                        "var(--extracted-a0htzi, var(--token-e2149c75-9099-4842-aea6-4fbafaef2693, rgb(191, 199, 212)))",
                    },
                    children: "EndLess Use cases",
                  }),
                }),
                className: "framer-1f4f3ah",
                fonts: ["Inter"],
                layoutDependency: y,
                layoutId: "O_JvfagWT",
                style: {
                  "--extracted-a0htzi":
                    "var(--token-e2149c75-9099-4842-aea6-4fbafaef2693, rgb(191, 199, 212))",
                  "--framer-link-text-color": "rgb(0, 153, 255)",
                  "--framer-link-text-decoration": "underline",
                },
                text: v,
                variants: {
                  "EqNwqppSo-hover": {
                    "--extracted-a0htzi":
                      "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                  },
                  CbVfYxRIG: {
                    "--extracted-a0htzi":
                      "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                  },
                },
                verticalAlignment: "top",
                withExternalLayout: !0,
                ...Ye(
                  {
                    "EqNwqppSo-hover": {
                      children: e(s, {
                        children: e(o.h3, {
                          className: "framer-styles-preset-bcjq8k",
                          "data-styles-preset": "EtnOUzv10",
                          style: {
                            "--framer-text-color":
                              "var(--extracted-a0htzi, var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255)))",
                          },
                          children: "A Flexible Blockchain",
                        }),
                      }),
                    },
                    CbVfYxRIG: {
                      children: e(s, {
                        children: e(o.h3, {
                          className: "framer-styles-preset-bcjq8k",
                          "data-styles-preset": "EtnOUzv10",
                          style: {
                            "--framer-text-color":
                              "var(--extracted-a0htzi, var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255)))",
                          },
                          children: "A Flexible Blockchain",
                        }),
                      }),
                    },
                  },
                  F,
                  b
                ),
              }),
              d(o.div, {
                className: "framer-12oe74h",
                "data-framer-name": "Corners",
                layoutDependency: y,
                layoutId: "C5iP1iVNg",
                style: { opacity: 0.75 },
                children: [
                  e(o.div, {
                    className: "framer-54vo76",
                    "data-border": !0,
                    "data-framer-name": "TL",
                    layoutDependency: y,
                    layoutId: "VeIluZzNM",
                    style: {
                      "--border-bottom-width": "0px",
                      "--border-color": "rgb(255, 255, 255)",
                      "--border-left-width": "1px",
                      "--border-right-width": "0px",
                      "--border-style": "solid",
                      "--border-top-width": "1px",
                      borderTopLeftRadius: 3,
                      opacity: 0.4,
                    },
                  }),
                  e(o.div, {
                    className: "framer-16vcgqh",
                    "data-border": !0,
                    "data-framer-name": "Top Left ",
                    layoutDependency: y,
                    layoutId: "Tupjb4wMO",
                    style: {
                      "--border-bottom-width": "0px",
                      "--border-color": "rgb(255, 255, 255)",
                      "--border-left-width": "1px",
                      "--border-right-width": "0px",
                      "--border-style": "solid",
                      "--border-top-width": "1px",
                      borderTopLeftRadius: 3,
                      opacity: 0.4,
                      rotate: -90,
                    },
                  }),
                  e(o.div, {
                    className: "framer-1np92ud",
                    "data-border": !0,
                    "data-framer-name": "Top Left ",
                    layoutDependency: y,
                    layoutId: "l41dEHXlU",
                    style: {
                      "--border-bottom-width": "0px",
                      "--border-color": "rgb(255, 255, 255)",
                      "--border-left-width": "1px",
                      "--border-right-width": "0px",
                      "--border-style": "solid",
                      "--border-top-width": "1px",
                      borderTopLeftRadius: 3,
                      opacity: 0.4,
                      rotate: 90,
                    },
                  }),
                  e(o.div, {
                    className: "framer-fg7f8b",
                    "data-border": !0,
                    "data-framer-name": "BR",
                    layoutDependency: y,
                    layoutId: "HGCx80w9_",
                    style: {
                      "--border-bottom-width": "0px",
                      "--border-color": "rgb(255, 255, 255)",
                      "--border-left-width": "1px",
                      "--border-right-width": "0px",
                      "--border-style": "solid",
                      "--border-top-width": "1px",
                      borderTopLeftRadius: 3,
                      opacity: 0.4,
                      rotate: 180,
                    },
                  }),
                ],
              }),
              e(S, {
                __fromCanvasComponent: !0,
                children: e(s, {
                  children: e(o.p, {
                    className: "framer-styles-preset-21ogod",
                    "data-styles-preset": "xZndidUCt",
                    style: {
                      "--framer-text-color":
                        "var(--extracted-r6o4lv, var(--token-50859c1e-b9ab-4124-b93a-6ea1cca8c715, rgb(98, 103, 111)))",
                    },
                    children:
                      "Proton represents a cutting-edge neuromorphic computing platform, built upon a revolutionary adaptable blockchain system. Comprising of collaborating miners, this decentralized n.quantum computing network excels in executing calculations with unparalleled speed and efficiency, surpassing usual quantum computing limitations.",
                  }),
                }),
                className: "framer-1ez5bzv",
                fonts: ["Inter"],
                layoutDependency: y,
                layoutId: "kZUDM097A",
                style: {
                  "--extracted-r6o4lv":
                    "var(--token-50859c1e-b9ab-4124-b93a-6ea1cca8c715, rgb(98, 103, 111))",
                  "--framer-link-text-color": "rgb(0, 153, 255)",
                  "--framer-link-text-decoration": "underline",
                },
                variants: {
                  "EqNwqppSo-hover": {
                    "--extracted-r6o4lv":
                      "var(--token-e2149c75-9099-4842-aea6-4fbafaef2693, rgb(191, 199, 212))",
                  },
                  CbVfYxRIG: {
                    "--extracted-r6o4lv":
                      "var(--token-e2149c75-9099-4842-aea6-4fbafaef2693, rgb(191, 199, 212))",
                  },
                },
                verticalAlignment: "top",
                withExternalLayout: !0,
                ...Ye(
                  {
                    "EqNwqppSo-hover": {
                      children: e(s, {
                        children: e(o.p, {
                          className: "framer-styles-preset-21ogod",
                          "data-styles-preset": "xZndidUCt",
                          style: {
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-e2149c75-9099-4842-aea6-4fbafaef2693, rgb(191, 199, 212)))",
                          },
                          children:
                            "Proton represents a cutting-edge neuromorphic computing platform, built upon a revolutionary adaptable blockchain system. Comprising of collaborating miners, this decentralized n.quantum computing network excels in executing calculations with unparalleled speed and efficiency, surpassing usual quantum computing limitations.",
                        }),
                      }),
                    },
                    CbVfYxRIG: {
                      children: e(s, {
                        children: e(o.p, {
                          className: "framer-styles-preset-21ogod",
                          "data-styles-preset": "xZndidUCt",
                          style: {
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-e2149c75-9099-4842-aea6-4fbafaef2693, rgb(191, 199, 212)))",
                          },
                          children:
                            "Proton represents a cutting-edge neuromorphic computing platform, built upon a revolutionary adaptable blockchain system. Comprising of collaborating miners, this decentralized n.quantum computing network excels in executing calculations with unparalleled speed and efficiency, surpassing usual quantum computing limitations.",
                        }),
                      }),
                    },
                  },
                  F,
                  b
                ),
              }),
              R() &&
                e(o.div, {
                  className: "framer-voh50",
                  "data-framer-name": "VideoSquare",
                  layoutDependency: y,
                  layoutId: "R0Gl3YAsy",
                  style: { opacity: 0.4 },
                  variants: { "EqNwqppSo-hover": { opacity: 1 } },
                  children: e(h, {
                    children: e(o.div, {
                      className: "framer-1ec1br4-container",
                      layoutDependency: y,
                      layoutId: "xpgOipKzH-container",
                      children: e(H, {
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderRadius: 0,
                        bottomLeftRadius: 0,
                        bottomRightRadius: 0,
                        controls: !1,
                        height: "100%",
                        id: "xpgOipKzH",
                        isMixedBorderRadius: !1,
                        layoutId: "xpgOipKzH",
                        loop: !0,
                        muted: !0,
                        objectFit: "cover",
                        playing: !1,
                        posterEnabled: !1,
                        srcFile:
                          "https://framerusercontent.com/assets/2Rrwb1dHOOIbGokxn0n523J8iO8.mp4",
                        srcType: "Upload",
                        srcUrl:
                          "https://assets.mixkit.co/videos/preview/mixkit-shining-sun-in-the-sky-surrounded-by-moving-clouds-31793-small.mp4",
                        startTime: 0,
                        style: { height: "100%", width: "100%" },
                        topLeftRadius: 0,
                        topRightRadius: 0,
                        volume: 25,
                        width: "100%",
                        ...Ye({ "EqNwqppSo-hover": { playing: !0 } }, F, b),
                      }),
                    }),
                  }),
                }),
            ],
          }),
        }),
      }),
    });
  }),
  Ia = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-tEtQh.framer-f8iopp, .framer-tEtQh .framer-f8iopp { display: block; }",
    ".framer-tEtQh.framer-1pa53lc { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: 713px; justify-content: flex-start; min-width: 500px; overflow: hidden; padding: 48px 48px 338px 48px; position: relative; width: 500px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-tEtQh .framer-1f4f3ah { -webkit-user-select: auto; cursor: pointer; flex: none; height: auto; position: relative; user-select: auto; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 2; }",
    ".framer-tEtQh .framer-12oe74h { bottom: 0px; flex: none; height: 100%; left: 0px; overflow: hidden; position: absolute; width: 100%; z-index: 2; }",
    ".framer-tEtQh .framer-54vo76 { flex: none; height: 6px; left: 0px; overflow: hidden; position: absolute; top: 0px; width: 6px; will-change: var(--framer-will-change-override, transform); z-index: 1; }",
    ".framer-tEtQh .framer-16vcgqh { bottom: 0px; flex: none; height: 6px; left: 0px; overflow: hidden; position: absolute; width: 6px; will-change: var(--framer-will-change-override, transform); z-index: 1; }",
    ".framer-tEtQh .framer-1np92ud { flex: none; height: 6px; overflow: hidden; position: absolute; right: 0px; top: 0px; width: 6px; will-change: var(--framer-will-change-override, transform); z-index: 1; }",
    ".framer-tEtQh .framer-fg7f8b { bottom: 0px; flex: none; height: 6px; overflow: hidden; position: absolute; right: 0px; width: 6px; will-change: var(--framer-will-change-override, transform); z-index: 1; }",
    ".framer-tEtQh .framer-1ez5bzv { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 2; }",
    ".framer-tEtQh .framer-voh50 { align-content: center; align-items: center; bottom: -470px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 800px; justify-content: center; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; padding: 0px 0px 0px 0px; position: absolute; width: 100%; z-index: 1; }",
    ".framer-tEtQh .framer-1ec1br4-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-tEtQh.framer-1pa53lc, .framer-tEtQh .framer-voh50 { gap: 0px; } .framer-tEtQh.framer-1pa53lc > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-tEtQh.framer-1pa53lc > :first-child { margin-top: 0px; } .framer-tEtQh.framer-1pa53lc > :last-child { margin-bottom: 0px; } .framer-tEtQh .framer-voh50 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-tEtQh .framer-voh50 > :first-child { margin-left: 0px; } .framer-tEtQh .framer-voh50 > :last-child { margin-right: 0px; } }",
    ".framer-tEtQh.framer-v-52zamf.framer-1pa53lc { cursor: unset; height: auto; min-width: unset; padding: 24px 24px 24px 24px; }",
    ".framer-tEtQh.framer-v-52zamf .framer-12oe74h { height: 713px; }",
    ".framer-tEtQh.framer-v-1pa53lc.hover .framer-voh50 { z-index: -1; }",
    ".framer-tEtQh.framer-v-1pa53lc.hover .framer-1ec1br4-container { flex: none; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 1; }",
    ...Me,
    ...ke,
    '.framer-tEtQh[data-border="true"]::after, .framer-tEtQh [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  je = Y(Fa, Ia, "framer-tEtQh"),
  _r = je;
je.displayName = "About/Aboutcol";
je.defaultProps = { height: 713, width: 500 };
J(je, {
  variant: {
    options: ["EqNwqppSo", "CbVfYxRIG"],
    optionTitles: ["Variant 1", "Mobile"],
    title: "Variant",
    type: x.Enum,
  },
  IZj2RVV3J: {
    defaultValue: "A Flexible Blockchain",
    displayTextArea: !1,
    title: "Title",
    type: x.String,
  },
});
G(
  je,
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
      ],
    },
    ...ba,
    ...B(De),
    ...B(_e),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Ea = w(gr),
  La = w(Ee),
  ce = Oe(C),
  kr = Oe(S),
  Ta = w(xr),
  mt = Qr(xr),
  Ua = w(H),
  Cr = Oe(o.div),
  za = w(wr),
  ja = w(_r),
  Pa = w(Rr),
  qa = w(Ae),
  Ha = w(se),
  Sr = at(o.div),
  Oa = w(le),
  Ba = w(Ie),
  Aa = w(ur);
var Da = {
  LPhuP8IE0: "(min-width: 768px) and (max-width: 1023px)",
  olxJMbKTh: "(min-width: 1024px)",
  vEm2qB4sB: "(max-width: 767px)",
};
var dt = "framer-xRcpo",
  Ma = {
    LPhuP8IE0: "framer-v-1d77tjy",
    olxJMbKTh: "framer-v-1l1gc90",
    vEm2qB4sB: "framer-v-12qgckm",
  },
  ut = { oDJvo1yNO: new Dr(() => import("./fyxHY82ZH-0-SP4VY7CG.mjs")) },
  Qa = (r) => {
    let a = [];
    for (; r; ) {
      let t = ut[r.id];
      if (t) {
        let i = t.preload();
        i && a.push(i);
      }
      r = r.fallback;
    }
    if (a.length > 0) return Promise.all(a);
  },
  p = (r, a) => {
    for (; a; ) {
      let t = ut[a.id];
      if (t) {
        let i = t.read()[r];
        if (i) return i;
      }
      a = a.fallback;
    }
  },
  xe = { damping: 90, delay: 0, mass: 1, stiffness: 400, type: "spring" },
  Wa = { opacity: 0, rotate: 0, scale: 1, transition: xe, x: 0, y: -50 },
  N = (r, a) => `perspective(1200px) ${a}`,
  Vr = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    transition: xe,
    x: 0,
    y: 0,
  },
  Nr = { opacity: 0.001, rotate: 0, scale: 1, x: 0, y: -50 },
  gt = { damping: 90, delay: 1, mass: 1, stiffness: 400, type: "spring" },
  Ja = { opacity: 0, rotate: 0, scale: 1, transition: gt, x: 0, y: 20 },
  Fr = (r, a) => `perspective(500px) ${a}`,
  Ir = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    transition: gt,
    x: 0,
    y: 0,
  },
  Er = { opacity: 0.001, rotate: 0, scale: 1, x: 0, y: 20 },
  Lr = (r, a) => `${a} rotate(180deg)`,
  bt = { damping: 100, delay: 1.2, mass: 1, stiffness: 400, type: "spring" },
  Ya = { opacity: 0, rotate: 0, scale: 0.9, transition: bt, x: 0, y: 0 },
  ft = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    transition: bt,
    x: 0,
    y: 0,
  },
  pt = { opacity: 0.001, rotate: 0, scale: 0.9, x: 0, y: 0 },
  Pe = { opacity: 0, rotate: 0, scale: 1, x: 0, y: 20 },
  Ge = { opacity: 0, rotate: 0, scale: 1, transition: xe, x: 0, y: 20 },
  ht = (r, a) => `${a} rotate(-90deg)`,
  xt = (r, a) => `${a} rotate(90deg)`,
  yt = { damping: 60, delay: 0.1, mass: 1, stiffness: 400, type: "spring" },
  Ga = { opacity: 0, rotate: 0, scale: 1, transition: yt, x: 0, y: 20 },
  Xa = { opacity: 0, rotate: 0, scale: 1, x: 0, y: 50 },
  vt = { delay: 0, duration: 0.6, ease: [0.44, 0, 0.56, 1], type: "tween" },
  Za = { opacity: 0, rotate: 0, scale: 1, transition: vt, x: 0, y: 50 },
  Tr = { opacity: 0, rotate: 0, scale: 1, x: 0, y: 30 },
  wt = { damping: 90, delay: 0.1, mass: 0.5, stiffness: 600, type: "spring" },
  Ka = { opacity: 0, rotate: 0, scale: 1, transition: wt, x: 0, y: 30 },
  Rt = { damping: 90, delay: 0.2, mass: 0.5, stiffness: 600, type: "spring" },
  $a = { opacity: 0, rotate: 0, scale: 1, transition: Rt, x: 0, y: 30 },
  _t = { damping: 90, delay: 0.3, mass: 0.5, stiffness: 600, type: "spring" },
  eo = { opacity: 0, rotate: 0, scale: 1, transition: _t, x: 0, y: 30 },
  Ur = yr(),
  ro = { Desktop: "olxJMbKTh", Phone: "vEm2qB4sB", Tablet: "LPhuP8IE0" },
  to = ({ height: r, id: a, width: t, ...i }) => {
    var l, m;
    return {
      ...i,
      variant:
        (m = (l = ro[i.variant]) !== null && l !== void 0 ? l : i.variant) !==
          null && m !== void 0
          ? m
          : "olxJMbKTh",
    };
  },
  ao = A(function (r, a) {
    let { activeLocale: t, setLocale: i } = W(),
      { style: l, className: m, layoutId: c, variant: f, ...v } = to(r);
    jr(() => {
      let ye = yr(void 0, t);
      if (((document.title = ye.title || ""), ye.viewport)) {
        var or;
        (or = document.querySelector('meta[name="viewport"]')) === null ||
          or === void 0 ||
          or.setAttribute("content", ye.viewport);
      }
      if (ye.bodyClassName)
        return (
          Array.from(document.body.classList)
            .filter((nr) => nr.startsWith("framer-body-"))
            .map((nr) => document.body.classList.remove(nr)),
          document.body.classList.add(`${ye.bodyClassName}-framer-xRcpo`),
          () => {
            document.body.classList.remove(`${ye.bodyClassName}-framer-xRcpo`);
          }
        );
    }, [void 0, t]);
    let [n, F] = Mr(f, Da, !1),
      U = void 0,
      b = Qa(t);
    if (b) throw b;
    let k = T(null),
      I = qr("IEMPt7BBw"),
      u = T(null),
      y = D(),
      E = [Xr, $r, Re];
    Br({});
    var R,
      z,
      j,
      ae,
      Se,
      ue,
      oe,
      me,
      L,
      Ve,
      de,
      ge,
      $,
      Ne,
      ee,
      be,
      P,
      re,
      fe,
      pe,
      Fe,
      qe,
      _,
      Ze,
      Ke,
      $e,
      er,
      rr,
      tr,
      ar;
    return e(Ar.Provider, {
      value: { primaryVariantId: "olxJMbKTh", variantClassNames: Ma },
      children: d(Q, {
        id: c ?? y,
        children: [
          d(o.div, {
            ...v,
            className: O(dt, ...E, "framer-1l1gc90", m),
            ref: a ?? k,
            style: { ...l },
            children: [
              e(h, {
                children: e(C, {
                  className: "framer-1npnb0f-container",
                  children: e(g, {
                    breakpoint: n,
                    overrides: {
                      LPhuP8IE0: { variant: "vRz6iFx98" },
                      vEm2qB4sB: { variant: "dxtA8R9ro" },
                    },
                    children: e(gr, {
                      height: "100%",
                      id: "wKees_epW",
                      layoutId: "wKees_epW",
                      style: { maxWidth: "100%", width: "100%" },
                      variant: "eoTXJYY6N",
                      width: "100%",
                    }),
                  }),
                }),
              }),
              d("div", {
                className: "framer-14knw98",
                "data-framer-name": "Hero",
                name: "Hero",
                children: [
                  d("div", {
                    className: "framer-1tgljwr",
                    "data-framer-name": "Title",
                    name: "Title",
                    children: [
                      e(g, {
                        breakpoint: n,
                        overrides: {
                          LPhuP8IE0: {
                            "data-framer-appear-id": "1oooxtd",
                            animate: V("animate", "1oooxtd", Vr, "1d77tjy"),
                            initial: V("initial", "1oooxtd", Nr, "1d77tjy"),
                            transformTemplate: te("1oooxtd", N),
                          },
                          vEm2qB4sB: {
                            "data-framer-appear-id": "wzjude",
                            animate: V("animate", "wzjude", Vr, "12qgckm"),
                            initial: V("initial", "wzjude", Nr, "12qgckm"),
                            transformTemplate: te("wzjude", N),
                          },
                        },
                        children: e(o.div, {
                          animate: V("animate", "1u1auh3", Vr, "1l1gc90"),
                          className: "framer-1u1auh3",
                          "data-framer-appear-id": "1u1auh3",
                          "data-framer-name": "Logotype",
                          exit: Wa,
                          initial: V("initial", "1u1auh3", Nr, "1l1gc90"),
                          name: "Logotype",
                          transformTemplate: te("1u1auh3", N),
                          children: e(Wr, {
                            className: "framer-17idpoe",
                            layout: "position",
                            opacity: 1,
                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 175 26"><path d="M 19.875 17.975 C 19.148 19.588 18.152 20.921 16.89 21.974 C 15.557 23.114 13.996 24.008 12.293 24.605 C 10.532 25.237 8.561 25.554 6.377 25.554 L 0 25.554 L 0 21.553 L 6.318 21.553 C 7.773 21.553 9.096 21.342 10.282 20.923 C 11.401 20.52 12.418 19.91 13.27 19.133 C 14.118 18.353 14.783 17.421 15.223 16.396 C 15.682 15.342 15.911 14.185 15.911 12.921 C 15.911 11.692 15.682 10.553 15.223 9.5 C 14.764 8.413 14.112 7.518 13.27 6.815 C 12.504 6.079 11.509 5.482 10.282 5.027 C 9.014 4.598 7.671 4.384 6.318 4.395 L 0 4.395 L 0 0.394 L 6.377 0.394 C 8.406 0.394 10.36 0.726 12.236 1.395 C 13.976 1.978 15.562 2.893 16.89 4.078 C 18.205 5.185 19.227 6.554 19.875 8.079 C 20.593 9.646 20.964 11.328 20.967 13.027 C 20.967 14.852 20.604 16.5 19.875 17.975 Z M 40.376 0.446 L 35.034 0.446 L 45.719 15.658 L 45.719 25.606 L 50.947 25.606 L 50.947 15.553 Z M 61.689 0.446 L 56.691 0.446 L 50.373 8.711 L 53.186 12.184 Z M 74.377 25.554 L 79.145 25.554 L 79.145 12.132 L 74.377 5.974 L 74.377 25.552 Z M 93.449 0.5 L 93.449 17.817 L 79.949 0.5 L 74.781 0.5 L 94.197 25.554 L 98.159 25.554 L 98.159 0.5 L 93.45 0.5 Z M 113.949 0.5 L 134.401 0.5 L 134.401 4.499 L 113.949 4.499 Z M 113.949 21.552 L 134.342 21.552 L 134.342 25.554 L 113.949 25.554 Z M 113.949 10.92 L 132.39 10.92 L 132.39 14.869 L 113.949 14.869 Z M 151.001 19.342 L 153.586 16.185 L 153.529 16.079 Z M 174.491 0.5 L 168.976 0.5 L 162.14 9.499 L 155.36 0.5 L 149.673 0.5 L 159.268 12.816 L 149.329 25.552 L 155.476 25.552 L 174.491 0.498 Z M 174.835 25.554 L 167.253 15.71 L 164.381 19.237 L 169.204 25.554 Z" fill="rgb(255,255,255)"></path></svg>',
                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="270.40000000000003" height="43.616669857897044" viewBox="0 0 300 48.39127572991536"><g id="SvgjsG1408" featurekey="VGK2BT-0" transform="matrix(2.6025084857716685,0,0,2.6025084857716685,-7.319815720510434,-1.8295506139836781)" fill="#ffffff"><path d="M16.719 4.375 c-0.33855 -0.72918 -0.80734 -1.3802 -1.4063 -1.9532 c-0.625 -0.54688 -1.3672 -0.97656 -2.2266 -1.2891 c-0.9375 -0.28645 -1.9271 -0.42969 -2.9688 -0.42969 l-7.3047 0 l0 2.9297 l7.0313 0 c1.1719 0 2.1484 0.28645 2.9297 0.85938 c0.72918 0.54688 1.0938 1.3802 1.0938 2.5 c0 1.0156 -0.35156 1.8359 -1.0547 2.4609 c-0.7552 0.59895 -1.7448 0.89844 -2.9687 0.89844 l-7.0313 0 l0 8.9453 l3.2422 0 l0 -5.9766 l3.6719 0 c0.96355 0 1.9401 -0.14324 2.9297 -0.42969 c0.91145 -0.28645 1.6927 -0.69008 2.3438 -1.2109 c0.67707 -0.52082 1.2109 -1.1849 1.6016 -1.9922 c0.39063 -0.78125 0.58594 -1.6927 0.58594 -2.7344 c0 -0.98957 -0.15625 -1.8489 -0.46875 -2.5781 z M37.891 19.29687 l-5.0391 -7.0313 c0.67707 -0.20832 1.276 -0.4557 1.7968 -0.74215 c0.57293 -0.36457 1.0417 -0.7682 1.4063 -1.2109 c0.41668 -0.4948 0.71617 -1.0287 0.89848 -1.6016 c0.23438 -0.625 0.35156 -1.3281 0.35156 -2.1094 c0 -0.91145 -0.15625 -1.7318 -0.46875 -2.4609 c-0.3125 -0.70313 -0.76824 -1.3151 -1.3672 -1.8359 c-0.57293 -0.4948 -1.3021 -0.88543 -2.1875 -1.1719 c-0.91145 -0.28645 -1.875 -0.42969 -2.8906 -0.42969 l-8.2813 0 l0 2.9688 l8.0078 0 c1.2239 0 2.1745 0.26043 2.8515 0.78125 s1.0156 1.3021 1.0156 2.3438 c0 0.96355 -0.33855 1.7188 -1.0156 2.2656 c-0.67707 0.57293 -1.6146 0.85938 -2.8125 0.85938 l-8.0469 0 l0 9.375 l3.2422 0 l0 -6.4844 l4.1016 0 l4.5703 6.4844 l3.8672 0 l0 0 z M48.6719 16.3281 c-0.39063 -0.078125 -0.75523 -0.19535 -1.0938 -0.3516 c-0.72918 -0.33855 -1.3672 -0.8073 -1.9141 -1.4063 c-0.52082 -0.54688 -0.9375 -1.2239 -1.25 -2.0313 c-0.28645 -0.8073 -0.42969 -1.6276 -0.42969 -2.4609 l0 -0.078125 l0 -0.11719 c0 -0.85938 0.14324 -1.6927 0.42969 -2.5 c0.33855 -0.83332 0.75523 -1.4974 1.25 -1.9922 c0.52082 -0.59895 1.1458 -1.0547 1.875 -1.3672 c0.4427 -0.20832 0.82031 -0.33852 1.1328 -0.39059 l0 -2.9297 c-0.91145 0.1302 -1.7188 0.35156 -2.4219 0.66406 c-1.1458 0.4948 -2.1224 1.1589 -2.9297 1.9922 s-1.4453 1.8229 -1.9141 2.9687 s-0.70313 2.3438 -0.70313 3.5938 l0 0.078125 l0 0.11719 c0 1.2761 0.23438 2.474 0.70313 3.5938 c0.41668 1.1198 1.0417 2.0964 1.875 2.9297 c0.83332 0.85938 1.8099 1.5234 2.9297 1.9922 c0.70313 0.3125 1.5234 0.53387 2.4609 0.66406 l0 -2.9688 z M59.297 10 l0.000038147 -0.11719 c0 -1.2761 -0.23438 -2.474 -0.70313 -3.5938 c-0.46875 -1.1458 -1.1068 -2.1354 -1.9141 -2.9687 c-0.78125 -0.83332 -1.7448 -1.4844 -2.8906 -1.9531 c-0.65105 -0.3125 -1.4453 -0.53387 -2.3828 -0.66406 l0 2.9688 l0.46875 0.15625 c0.23438 0.078125 0.41668 0.14324 0.54688 0.19531 c0.72918 0.33855 1.3672 0.8073 1.9141 1.4063 c0.52082 0.54688 0.9375 1.2239 1.25 2.0313 c0.28645 0.8073 0.42969 1.6276 0.42969 2.4609 l0 0.078125 l0 0.11719 c0 0.85938 -0.14324 1.6927 -0.42969 2.5 c-0.33855 0.83332 -0.75523 1.4974 -1.25 1.9922 c-0.52082 0.59895 -1.1458 1.0547 -1.875 1.3672 c-0.33855 0.15625 -0.69012 0.27344 -1.0547 0.35156 l0 2.9688 c0.78125 -0.10418 1.5625 -0.32555 2.3438 -0.6641 c1.0677 -0.4427 2.0443 -1.1068 2.9297 -1.9922 c0.85938 -0.91145 1.4974 -1.901 1.9141 -2.9687 c0.46875 -1.1458 0.70313 -2.3438 0.70313 -3.5938 l0 -0.078125 z M71.641 3.75 l5.8984 0 l0 -3.0469 l-15.078 0 l0 3.0469 l9.1797 0 z M68.3594 6.797000000000001 l3.2813 0 l0 12.5 l-3.2813 0 l0 -12.5 z M88.6719 16.3281 c-0.39063 -0.078125 -0.75523 -0.19535 -1.0938 -0.3516 c-0.72918 -0.33855 -1.3672 -0.8073 -1.9141 -1.4063 c-0.52082 -0.54688 -0.9375 -1.2239 -1.25 -2.0313 c-0.28645 -0.8073 -0.42969 -1.6276 -0.42969 -2.4609 l0 -0.078125 l0 -0.11719 c0 -0.85938 0.14324 -1.6927 0.42969 -2.5 c0.33855 -0.83332 0.75523 -1.4974 1.25 -1.9922 c0.52082 -0.59895 1.1458 -1.0547 1.875 -1.3672 c0.4427 -0.20832 0.82031 -0.33852 1.1328 -0.39059 l0 -2.9297 c-0.91145 0.1302 -1.7188 0.35156 -2.4219 0.66406 c-1.1458 0.4948 -2.1224 1.1589 -2.9297 1.9922 s-1.4453 1.8229 -1.9141 2.9687 s-0.70313 2.3438 -0.70313 3.5938 l0 0.078125 l0 0.11719 c0 1.2761 0.23438 2.474 0.70313 3.5938 c0.41668 1.1198 1.0417 2.0964 1.875 2.9297 c0.83332 0.85938 1.8099 1.5234 2.9297 1.9922 c0.70313 0.3125 1.5234 0.53387 2.4609 0.66406 l0 -2.9688 z M99.297 10 l0.000038147 -0.11719 c0 -1.2761 -0.23438 -2.474 -0.70313 -3.5938 c-0.46875 -1.1458 -1.1068 -2.1354 -1.9141 -2.9687 c-0.78125 -0.83332 -1.7448 -1.4844 -2.8906 -1.9531 c-0.65105 -0.3125 -1.4453 -0.53387 -2.3828 -0.66406 l0 2.9688 l0.46875 0.15625 c0.23438 0.078125 0.41668 0.14324 0.54688 0.19531 c0.72918 0.33855 1.3672 0.8073 1.9141 1.4063 c0.52082 0.54688 0.9375 1.2239 1.25 2.0313 c0.28645 0.8073 0.42969 1.6276 0.42969 2.4609 l0 0.078125 l0 0.11719 c0 0.85938 -0.14324 1.6927 -0.42969 2.5 c-0.33855 0.83332 -0.75523 1.4974 -1.25 1.9922 c-0.52082 0.59895 -1.1458 1.0547 -1.875 1.3672 c-0.33855 0.15625 -0.69012 0.27344 -1.0547 0.35156 l0 2.9688 c0.78125 -0.10418 1.5625 -0.32555 2.3438 -0.6641 c1.0677 -0.4427 2.0443 -1.1068 2.9297 -1.9922 c0.85938 -0.91145 1.4974 -1.901 1.9141 -2.9687 c0.46875 -1.1458 0.70313 -2.3438 0.70313 -3.5938 l0 -0.078125 z M101.9141 19.29687 l3.2422 0 l0 -9.9609 l-3.2422 -4.5703 l0 14.531 z M114.883 0.7029999999999994 l0 12.852 l-9.1797 -12.852 l-3.5156 0 l13.203 18.594 l2.6953 0 l0 -18.594 l-3.2031 0 z"></path></g></svg>',
                            svgContentId: 957590620,
                            withExternalLayout: !0,
                          }),
                        }),
                      }),
                      e(h, {
                        children: e(ce, {
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
                          className: "framer-jfz8p9-container",
                          transformTemplate: N,
                          children: e(g, {
                            breakpoint: n,
                            overrides: {
                              LPhuP8IE0: {
                                text:
                                  (R = p("v1", t)) !== null && R !== void 0
                                    ? R
                                    : "UPSCALED",
                              },
                              vEm2qB4sB: {
                                font: {
                                  font: "Rigid Square Regular",
                                  fontSize: 48,
                                  fontWeight: 400,
                                  letterSpacing: 12,
                                  lineHeight: 1.1,
                                  lineHeightPixels: 100,
                                  lineHeightType: !0,
                                  offset: 0,
                                  textAlign: "left",
                                  whiteSpace: "pre-wrap",
                                },
                                text:
                                  (z = p("v2", t)) !== null && z !== void 0
                                    ? z
                                    : "UPSCALED",
                              },
                            },
                            children: e(Ee, {
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
                                letterSpacing: 12,
                                lineHeight: 1.1,
                                lineHeightPixels: 100,
                                lineHeightType: !0,
                                offset: 0,
                                textAlign: "left",
                                whiteSpace: "pre-wrap",
                              },
                              height: "100%",
                              id: "ZJVSRLAkR",
                              layoutId: "ZJVSRLAkR",
                              overflow: !1,
                              perWord: !1,
                              stagger: 0.05,
                              style: { width: "100%" },
                              text:
                                (j = p("v0", t)) !== null && j !== void 0
                                  ? j
                                  : "UPSCALED",
                              transitionOptions: {
                                damping: 60,
                                delay: 0.05,
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
                      e(h, {
                        children: e(ce, {
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
                                x: -180,
                                y: 0,
                              },
                            },
                          ],
                          __framer__transformTrigger: "onScroll",
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: "framer-sfnx4g-container",
                          transformTemplate: N,
                          children: e(g, {
                            breakpoint: n,
                            overrides: {
                              LPhuP8IE0: {
                                text:
                                  (ae = p("v4", t)) !== null && ae !== void 0
                                    ? ae
                                    : "QUANTUM",
                              },
                              vEm2qB4sB: {
                                font: {
                                  font: "Rigid Square Regular",
                                  fontSize: 48,
                                  fontWeight: 400,
                                  letterSpacing: 12,
                                  lineHeight: 1.1,
                                  lineHeightPixels: 100,
                                  lineHeightType: !0,
                                  offset: 0,
                                  textAlign: "right",
                                  whiteSpace: "pre-wrap",
                                },
                                text:
                                  (Se = p("v5", t)) !== null && Se !== void 0
                                    ? Se
                                    : "QUANTUM",
                              },
                            },
                            children: e(Ee, {
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
                                letterSpacing: 12,
                                lineHeight: 1.1,
                                lineHeightPixels: 100,
                                lineHeightType: !0,
                                offset: 0,
                                textAlign: "right",
                                whiteSpace: "pre-wrap",
                              },
                              height: "100%",
                              id: "WgIbNIldC",
                              layoutId: "WgIbNIldC",
                              overflow: !1,
                              perWord: !1,
                              stagger: 0.05,
                              style: { width: "100%" },
                              text:
                                (ue = p("v3", t)) !== null && ue !== void 0
                                  ? ue
                                  : "QUANTUM",
                              transitionOptions: {
                                damping: 60,
                                delay: 0.3,
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
                      d("div", {
                        className: "framer-1mdq1ma",
                        "data-framer-name": "Last Row",
                        name: "Last Row",
                        children: [
                          e(h, {
                            children: e(ce, {
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
                              className: "framer-b12m4a-container",
                              transformTemplate: N,
                              children: e(g, {
                                breakpoint: n,
                                overrides: {
                                  LPhuP8IE0: {
                                    text:
                                      (oe = p("v7", t)) !== null &&
                                      oe !== void 0
                                        ? oe
                                        : "COMPUTING",
                                  },
                                  vEm2qB4sB: {
                                    font: {
                                      font: "Rigid Square Regular",
                                      fontSize: 48,
                                      fontWeight: 400,
                                      letterSpacing: 12,
                                      lineHeight: 1.1,
                                      lineHeightPixels: 100,
                                      lineHeightType: !0,
                                      offset: 0,
                                      textAlign: "left",
                                      whiteSpace: "pre-wrap",
                                    },
                                    text:
                                      (me = p("v8", t)) !== null &&
                                      me !== void 0
                                        ? me
                                        : "COMPUTING",
                                  },
                                },
                                children: e(Ee, {
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
                                    letterSpacing: 12,
                                    lineHeight: 1.1,
                                    lineHeightPixels: 100,
                                    lineHeightType: !0,
                                    offset: 0,
                                    textAlign: "left",
                                    whiteSpace: "pre-wrap",
                                  },
                                  height: "100%",
                                  id: "HqtN7pe9u",
                                  layoutId: "HqtN7pe9u",
                                  overflow: !1,
                                  perWord: !1,
                                  stagger: 0.05,
                                  style: { width: "100%" },
                                  text:
                                    (L = p("v6", t)) !== null && L !== void 0
                                      ? L
                                      : "COMPUTING",
                                  transitionOptions: {
                                    damping: 60,
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
                          e(g, {
                            breakpoint: n,
                            overrides: {
                              LPhuP8IE0: {
                                "data-framer-appear-id": "1or5xld",
                                animate: V("animate", "1or5xld", Ir, "1d77tjy"),
                                children:
                                  (Ve = p("v10", t)) !== null && Ve !== void 0
                                    ? Ve
                                    : e(s, {
                                        children: e("p", {
                                          className:
                                            "framer-styles-preset-11ut0g7",
                                          "data-styles-preset": "Auy8Lx_6q",
                                          style: {
                                            "--framer-text-color":
                                              "var(--token-e2149c75-9099-4842-aea6-4fbafaef2693, rgb(191, 199, 212))",
                                          },
                                          children:
                                            "Transforming dormant GPUs into neuromorphic machines, liberating computing to beyond traditional capabilities.",
                                        }),
                                      }),
                                initial: V("initial", "1or5xld", Er, "1d77tjy"),
                                transformTemplate: te("1or5xld", Fr),
                              },
                              vEm2qB4sB: {
                                "data-framer-appear-id": "1ixvtrs",
                                animate: V("animate", "1ixvtrs", Ir, "12qgckm"),
                                children:
                                  (de = p("v11", t)) !== null && de !== void 0
                                    ? de
                                    : e(s, {
                                        children: e("p", {
                                          className:
                                            "framer-styles-preset-11ut0g7",
                                          "data-styles-preset": "Auy8Lx_6q",
                                          style: {
                                            "--framer-text-color":
                                              "var(--token-e2149c75-9099-4842-aea6-4fbafaef2693, rgb(191, 199, 212))",
                                          },
                                          children:
                                            "Transforming dormant GPUs into neuromorphic machines, liberating computing to beyond traditional capabilities.",
                                        }),
                                      }),
                                initial: V("initial", "1ixvtrs", Er, "12qgckm"),
                                transformTemplate: te("1ixvtrs", Fr),
                              },
                            },
                            children: e(kr, {
                              __framer__spring: {
                                damping: 60,
                                delay: 0,
                                duration: 0.3,
                                ease: [0.44, 0, 0.56, 1],
                                mass: 1,
                                stiffness: 500,
                                type: "spring",
                              },
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
                                    opacity: 0,
                                    rotate: 0,
                                    rotateX: -1,
                                    rotateY: 0,
                                    scale: 1,
                                    x: -290,
                                    y: 0,
                                  },
                                },
                              ],
                              __framer__transformTrigger: "onScroll",
                              __fromCanvasComponent: !0,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              animate: V("animate", "y4mkxi", Ir, "1l1gc90"),
                              children:
                                (ge = p("v9", t)) !== null && ge !== void 0
                                  ? ge
                                  : e(s, {
                                      children: e("p", {
                                        className:
                                          "framer-styles-preset-11ut0g7",
                                        "data-styles-preset": "Auy8Lx_6q",
                                        style: {
                                          "--framer-text-color":
                                            "var(--token-e2149c75-9099-4842-aea6-4fbafaef2693, rgb(191, 199, 212))",
                                        },
                                        children:
                                          "Transforming dormant GPUs into neuromorphic machines, liberating computing to beyond traditional capabilities.",
                                      }),
                                    }),
                              className: "framer-y4mkxi",
                              "data-framer-appear-id": "y4mkxi",
                              exit: Ja,
                              fonts: ["Inter"],
                              initial: V("initial", "y4mkxi", Er, "1l1gc90"),
                              transformTemplate: te("y4mkxi", Fr),
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                        ],
                      }),
                      e(h, {
                        children: e(C, {
                          className: "framer-17wgyc3-container",
                          children: e(mt, {
                            __framer__animateOnce: !1,
                            __framer__obscuredVariantId: "oz5SgFFkh",
                            __framer__threshold: 0.5,
                            __framer__variantAppearEffectEnabled: !0,
                            __framer__visibleVariantId: "ullo7U4po",
                            height: "100%",
                            id: "dmvL4jYto",
                            layoutId: "dmvL4jYto",
                            style: { height: "100%", width: "100%" },
                            variant: "oz5SgFFkh",
                            width: "100%",
                          }),
                        }),
                      }),
                      e(h, {
                        children: e(C, {
                          className: "framer-1j1puzq-container",
                          transformTemplate: Lr,
                          children: e(mt, {
                            __framer__animateOnce: !1,
                            __framer__obscuredVariantId: "oz5SgFFkh",
                            __framer__threshold: 0.5,
                            __framer__variantAppearEffectEnabled: !0,
                            __framer__visibleVariantId: "ullo7U4po",
                            height: "100%",
                            id: "vuJvCBsE5",
                            layoutId: "vuJvCBsE5",
                            style: { height: "100%", width: "100%" },
                            variant: "oz5SgFFkh",
                            width: "100%",
                          }),
                        }),
                      }),
                    ],
                  }),
                  e("div", {
                    className: "framer-1cx0sk1",
                    "data-framer-name": "Gradcover",
                    name: "Gradcover",
                  }),
                ],
              }),
              e(g, {
                breakpoint: n,
                overrides: {
                  LPhuP8IE0: {
                    "data-framer-appear-id": "1a8wecq",
                    animate: V("animate", "1a8wecq", ft, "1d77tjy"),
                    initial: V("initial", "1a8wecq", pt, "1d77tjy"),
                    transformTemplate: te("1a8wecq", N),
                  },
                  vEm2qB4sB: {
                    __framer__styleTransformEffectEnabled: void 0,
                    animate: void 0,
                    exit: void 0,
                    initial: void 0,
                    transformTemplate: void 0,
                  },
                },
                children: e(Cr, {
                  __framer__spring: {
                    damping: 60,
                    delay: 0,
                    duration: 0.3,
                    ease: [0.44, 0, 0.56, 1],
                    mass: 1,
                    stiffness: 500,
                    type: "spring",
                  },
                  __framer__styleTransformEffectEnabled: !0,
                  __framer__transformTargets: [
                    {
                      target: {
                        opacity: 1,
                        rotate: 0,
                        rotateX: 0,
                        rotateY: 0,
                        scale: 0.9,
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
                        scale: 1.9,
                        x: 0,
                        y: -200,
                      },
                    },
                  ],
                  __framer__transformTrigger: "onScroll",
                  __perspectiveFX: !1,
                  __targetOpacity: 1,
                  animate: V("animate", "1wz134y", ft, "1l1gc90"),
                  className: "framer-1wz134y",
                  "data-framer-appear-id": "1wz134y",
                  "data-framer-name": "Video Container",
                  exit: Ya,
                  initial: V("initial", "1wz134y", pt, "1l1gc90"),
                  name: "Video Container",
                  transformTemplate: te("1wz134y", N),
                  children: e(h, {
                    children: e(C, {
                      className: "framer-1a60odb-container",
                      children: e(H, {
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderRadius: 0,
                        bottomLeftRadius: 0,
                        bottomRightRadius: 0,
                        controls: !1,
                        height: "100%",
                        id: "d9Oh8C37g",
                        isMixedBorderRadius: !1,
                        layoutId: "d9Oh8C37g",
                        loop: !0,
                        muted: !0,
                        objectFit: "cover",
                        playing: !0,
                        posterEnabled: !1,
                        srcFile:
                          "https://framerusercontent.com/assets/lLY2IKoab3lGbXKWxhq6cqfRc.mp4",
                        srcType: "Upload",
                        srcUrl:
                          "https://assets.mixkit.co/videos/preview/mixkit-shining-sun-in-the-sky-surrounded-by-moving-clouds-31793-small.mp4",
                        startTime: 0,
                        style: { height: "100%", width: "100%" },
                        topLeftRadius: 0,
                        topRightRadius: 0,
                        volume: 25,
                        width: "100%",
                      }),
                    }),
                  }),
                }),
              }),
              e(g, {
                breakpoint: n,
                overrides: {
                  LPhuP8IE0: {
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
                children: d("div", {
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
                  className: "framer-v13if9",
                  "data-framer-name": "Content",
                  id: I,
                  name: "Content",
                  ref: u,
                  children: [
                    d("div", {
                      className: "framer-1lobd0t",
                      children: [
                        d("div", {
                          className: "framer-ed5tne",
                          "data-framer-name": "Elements",
                          name: "Elements",
                          children: [
                            e("div", {
                              className: "framer-18s6q8y",
                              children: e(g, {
                                breakpoint: n,
                                overrides: {
                                  LPhuP8IE0: {
                                    children:
                                      ($ = p("v13", t)) !== null && $ !== void 0
                                        ? $
                                        : e(s, {
                                            children: e("p", {
                                              style: {
                                                "--font-selector":
                                                  "Q1VTVE9NO1JpZ2lkIFNxdWFyZSBSZWd1bGFy",
                                                "--framer-font-family":
                                                  '"Rigid Square Regular", sans-serif',
                                                "--framer-font-size": "24px",
                                                "--framer-line-height": "160%",
                                                "--framer-text-alignment":
                                                  "left",
                                                "--framer-text-color":
                                                  "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                                                "--framer-text-transform":
                                                  "uppercase",
                                              },
                                              children:
                                                "ProtonSolve IS the proprietary mining algorithm that addresses real-life computational tasks BY applying Proof-of-useful-Work (PoUW) throughout the mining process.",
                                            }),
                                          }),
                                  },
                                  vEm2qB4sB: {
                                    children:
                                      (Ne = p("v14", t)) !== null &&
                                      Ne !== void 0
                                        ? Ne
                                        : e(s, {
                                            children: e("p", {
                                              style: {
                                                "--font-selector":
                                                  "Q1VTVE9NO1JpZ2lkIFNxdWFyZSBSZWd1bGFy",
                                                "--framer-font-family":
                                                  '"Rigid Square Regular", sans-serif',
                                                "--framer-font-size": "24px",
                                                "--framer-line-height": "160%",
                                                "--framer-text-alignment":
                                                  "left",
                                                "--framer-text-color":
                                                  "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                                                "--framer-text-transform":
                                                  "uppercase",
                                              },
                                              children:
                                                "ProtonSolve IS the proprietary mining algorithm that addresses real-life computational tasks BY applying Proof-of-useful-Work (PoUW) throughout the mining process.",
                                            }),
                                          }),
                                  },
                                },
                                children: e(kr, {
                                  __framer__animate: { transition: xe },
                                  __framer__animateOnce: !0,
                                  __framer__enter: Pe,
                                  __framer__exit: Ge,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __fromCanvasComponent: !0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  children:
                                    (ee = p("v12", t)) !== null && ee !== void 0
                                      ? ee
                                      : e(s, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "Q1VTVE9NO1JpZ2lkIFNxdWFyZSBSZWd1bGFy",
                                              "--framer-font-family":
                                                '"Rigid Square Regular", sans-serif',
                                              "--framer-font-size": "24px",
                                              "--framer-line-height": "160%",
                                              "--framer-text-alignment": "left",
                                              "--framer-text-color":
                                                "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                                              "--framer-text-transform":
                                                "uppercase",
                                            },
                                            children:
                                              "ProtonSolve IS the proprietary mining algorithm that addresses real-life computational tasks BY applying Proof-of-useful-Work (PoUW) throughout the mining process.",
                                          }),
                                        }),
                                  className: "framer-1qnb5r2",
                                  fonts: ["CUSTOM;Rigid Square Regular"],
                                  transformTemplate: N,
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              }),
                            }),
                            e(h, {
                              children: e(ce, {
                                __framer__animate: { transition: xe },
                                __framer__animateOnce: !0,
                                __framer__enter: Pe,
                                __framer__exit: Ge,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: "framer-1c9xwij-container",
                                transformTemplate: N,
                                children: e(g, {
                                  breakpoint: n,
                                  overrides: {
                                    LPhuP8IE0: {
                                      PdPNpvCFq:
                                        (be = p("v16", t)) !== null &&
                                        be !== void 0
                                          ? be
                                          : "Endless Possibilites",
                                      style: { width: "100%" },
                                    },
                                    vEm2qB4sB: {
                                      PdPNpvCFq:
                                        (P = p("v17", t)) !== null &&
                                        P !== void 0
                                          ? P
                                          : "Endless Possibilites",
                                      style: { width: "100%" },
                                      variant: "XNXC65zCA",
                                    },
                                  },
                                  children: e(wr, {
                                    height: "100%",
                                    id: "uiWcwCrtP",
                                    layoutId: "uiWcwCrtP",
                                    PdPNpvCFq:
                                      (re = p("v15", t)) !== null &&
                                      re !== void 0
                                        ? re
                                        : "Endless Possibilites",
                                    style: { height: "100%", width: "100%" },
                                    variant: "SNgQa2QQH",
                                    width: "100%",
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                        e(g, {
                          breakpoint: n,
                          overrides: {
                            LPhuP8IE0: {
                              width: "calc(min(100vw, 1260px) - 96px)",
                            },
                            vEm2qB4sB: {
                              width: "calc(min(100vw, 1260px) - 48px)",
                            },
                          },
                          children: e(h, {
                            width: "500px",
                            children: e(ce, {
                              __framer__animate: { transition: xe },
                              __framer__animateOnce: !0,
                              __framer__enter: Pe,
                              __framer__exit: Ge,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: "framer-nt0dc0-container",
                              transformTemplate: N,
                              children: e(g, {
                                breakpoint: n,
                                overrides: {
                                  LPhuP8IE0: {
                                    IZj2RVV3J:
                                      (fe = p("v19", t)) !== null &&
                                      fe !== void 0
                                        ? fe
                                        : "A Flexible Blockchain",
                                    style: { width: "100%" },
                                  },
                                  vEm2qB4sB: {
                                    IZj2RVV3J:
                                      (pe = p("v20", t)) !== null &&
                                      pe !== void 0
                                        ? pe
                                        : "A Flexible Blockchain",
                                    style: { width: "100%" },
                                    variant: "CbVfYxRIG",
                                  },
                                },
                                children: e(_r, {
                                  height: "100%",
                                  id: "t_96JVAwN",
                                  IZj2RVV3J:
                                    (Fe = p("v18", t)) !== null && Fe !== void 0
                                      ? Fe
                                      : "A Flexible Blockchain",
                                  layoutId: "t_96JVAwN",
                                  style: { height: "100%", width: "100%" },
                                  variant: "EqNwqppSo",
                                  width: "100%",
                                }),
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    e(g, {
                      breakpoint: n,
                      overrides: {
                        vEm2qB4sB: { width: "calc(min(100vw, 1260px) - 48px)" },
                      },
                      children: e(h, {
                        width: "calc(min(100vw, 1260px) - 96px)",
                        children: e(C, {
                          className: "framer-119zcg2-container",
                          children: e(g, {
                            breakpoint: n,
                            overrides: { vEm2qB4sB: { variant: "j4wS5g39O" } },
                            children: e(Rr, {
                              height: "100%",
                              id: "dUSokbdZd",
                              layoutId: "dUSokbdZd",
                              style: { width: "100%" },
                              variant: "JdsjnOJk7",
                              width: "100%",
                            }),
                          }),
                        }),
                      }),
                    }),
                    e("div", {
                      className: "framer-1smus8x",
                      "data-framer-name": "Big Words",
                      name: "Big Words",
                      children: e(g, {
                        breakpoint: n,
                        overrides: {
                          LPhuP8IE0: {
                            children:
                              (qe = p("v22", t)) !== null && qe !== void 0
                                ? qe
                                : e(s, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "Q1VTVE9NO1JpZ2lkIFNxdWFyZSBSZWd1bGFy",
                                        "--framer-font-family":
                                          '"Rigid Square Regular", sans-serif',
                                        "--framer-font-size": "32px",
                                        "--framer-line-height": "160%",
                                        "--framer-text-alignment": "left",
                                        "--framer-text-color":
                                          "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                                        "--framer-text-transform": "uppercase",
                                      },
                                      children:
                                        "Instead of brute-forcing random hashes, ProtonSolve proof-of-useful-work (pouw) enables customers to access the combined computing power of thousands of GPUs through Python.",
                                    }),
                                  }),
                          },
                          vEm2qB4sB: {
                            children:
                              (_ = p("v23", t)) !== null && _ !== void 0
                                ? _
                                : e(s, {
                                    children: e("h6", {
                                      className: "framer-styles-preset-14n5412",
                                      "data-styles-preset": "H9bHClO9b",
                                      children:
                                        "Instead of brute-forcing random hashes, ProtonSolve proof-of-useful-work (pouw) enables customers to access the combined computing power of thousands of GPUs through Python.",
                                    }),
                                  }),
                            fonts: ["Inter"],
                          },
                        },
                        children: e(kr, {
                          __framer__animate: { transition: xe },
                          __framer__animateOnce: !0,
                          __framer__enter: Pe,
                          __framer__exit: Ge,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __fromCanvasComponent: !0,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          children:
                            (Ze = p("v21", t)) !== null && Ze !== void 0
                              ? Ze
                              : e(s, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO1JpZ2lkIFNxdWFyZSBSZWd1bGFy",
                                      "--framer-font-family":
                                        '"Rigid Square Regular", sans-serif',
                                      "--framer-font-size": "32px",
                                      "--framer-line-height": "160%",
                                      "--framer-text-alignment": "left",
                                      "--framer-text-color":
                                        "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                                      "--framer-text-transform": "uppercase",
                                    },
                                    children:
                                      "Instead of brute-forcing random hashes, ProtonSolve proof-of-useful-work (pouw) enables customers to access the combined computing power of thousands of GPUs through Python.",
                                  }),
                                }),
                          className: "framer-13myp4l",
                          fonts: ["CUSTOM;Rigid Square Regular"],
                          transformTemplate: N,
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      }),
                    }),
                    d(Sr, {
                      className: "framer-1e46v6f",
                      children: [
                        d(o.div, {
                          className: "framer-1ivpptm",
                          "data-border": !0,
                          "data-framer-name": "Total GPUS",
                          name: "Total GPUS",
                          children: [
                            d(o.div, {
                              className: "framer-1n4y538",
                              "data-framer-name": "Top",
                              name: "Top",
                              children: [
                                d(o.div, {
                                  className: "framer-2tb97y",
                                  children: [
                                    e(h, {
                                      children: e(C, {
                                        className: "framer-1xkep4m-container",
                                        children: e(Ae, {
                                          color:
                                            "var(--token-abdf8678-0f0a-4e4f-85e9-c710223de2bb, rgb(103, 249, 144))",
                                          height: "100%",
                                          iconSearch: "chip",
                                          iconSelection: "Cpu",
                                          id: "es402Pi6A",
                                          layoutId: "es402Pi6A",
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
                                    e(h, {
                                      children: e(C, {
                                        className: "framer-27tx51-container",
                                        children: e(se, {
                                          fontSize: 40,
                                          height: "100%",
                                          id: "d8rP7I8ok",
                                          layoutId: "d8rP7I8ok",
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
                                e(o.div, {
                                  className: "framer-tmbu2t",
                                  "data-framer-name": "Content",
                                  name: "Content",
                                  children: e(S, {
                                    __fromCanvasComponent: !0,
                                    children: e(s, {
                                      children: e("h6", {
                                        className:
                                          "framer-styles-preset-14n5412",
                                        "data-styles-preset": "H9bHClO9b",
                                        children: "GPUS Being Utilized",
                                      }),
                                    }),
                                    className: "framer-1gp7g3f",
                                    fonts: ["Inter"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                            d(o.div, {
                              className: "framer-1njbnic",
                              "data-framer-name": "Corners",
                              name: "Corners",
                              children: [
                                e(o.div, {
                                  className: "framer-efct9a",
                                  "data-border": !0,
                                  "data-framer-name": "Top Left ",
                                  name: "Top Left ",
                                }),
                                e(o.div, {
                                  className: "framer-hh7z5",
                                  "data-border": !0,
                                  "data-framer-name": "Top Left ",
                                  name: "Top Left ",
                                  transformTemplate: ht,
                                }),
                                e(o.div, {
                                  className: "framer-135thn7",
                                  "data-border": !0,
                                  "data-framer-name": "Top Left ",
                                  name: "Top Left ",
                                  transformTemplate: xt,
                                }),
                                e(o.div, {
                                  className: "framer-1yvznv3",
                                  "data-border": !0,
                                  "data-framer-name": "Top Left ",
                                  name: "Top Left ",
                                  transformTemplate: Lr,
                                }),
                              ],
                            }),
                          ],
                        }),
                        d(o.div, {
                          className: "framer-ud3v47",
                          "data-border": !0,
                          "data-framer-name": "Total GPUS",
                          name: "Total GPUS",
                          children: [
                            d(o.div, {
                              className: "framer-lw91k3",
                              "data-framer-name": "Top",
                              name: "Top",
                              children: [
                                d(o.div, {
                                  className: "framer-8chv81",
                                  children: [
                                    e(h, {
                                      children: e(C, {
                                        className: "framer-7a9pkz-container",
                                        children: e(g, {
                                          breakpoint: n,
                                          overrides: {
                                            LPhuP8IE0: {
                                              iconSearch:
                                                (Ke = p("v25", t)) !== null &&
                                                Ke !== void 0
                                                  ? Ke
                                                  : "chip",
                                            },
                                            vEm2qB4sB: {
                                              iconSearch:
                                                ($e = p("v26", t)) !== null &&
                                                $e !== void 0
                                                  ? $e
                                                  : "chip",
                                            },
                                          },
                                          children: e(Ae, {
                                            color:
                                              "var(--token-2678ca90-7bcd-460e-87c6-9327e3761be8, rgb(102, 216, 250))",
                                            height: "100%",
                                            iconSearch:
                                              (er = p("v24", t)) !== null &&
                                              er !== void 0
                                                ? er
                                                : "chip",
                                            iconSelection: "Circuitry",
                                            id: "ncviiI5xJ",
                                            layoutId: "ncviiI5xJ",
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
                                    e(h, {
                                      children: e(C, {
                                        className: "framer-1az82pr-container",
                                        children: e(g, {
                                          breakpoint: n,
                                          overrides: {
                                            vEm2qB4sB: { fontSize: 36 },
                                          },
                                          children: e(se, {
                                            fontSize: 40,
                                            height: "100%",
                                            id: "LrQlTD_vx",
                                            layoutId: "LrQlTD_vx",
                                            Show: "dynex_chips",
                                            textAlignment: "left",
                                            textColor:
                                              "var(--token-2678ca90-7bcd-460e-87c6-9327e3761be8, rgb(102, 216, 250))",
                                            width: "100%",
                                          }),
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                                e(o.div, {
                                  className: "framer-sqyesw",
                                  "data-framer-name": "Content",
                                  name: "Content",
                                  children: e(g, {
                                    breakpoint: n,
                                    overrides: {
                                      LPhuP8IE0: {
                                        children:
                                          (rr = p("v28", t)) !== null &&
                                          rr !== void 0
                                            ? rr
                                            : e(s, {
                                                children: e("h6", {
                                                  className:
                                                    "framer-styles-preset-14n5412",
                                                  "data-styles-preset":
                                                    "H9bHClO9b",
                                                  children:
                                                    "N.QUANTUM Chips Running",
                                                }),
                                              }),
                                      },
                                      vEm2qB4sB: {
                                        children:
                                          (tr = p("v29", t)) !== null &&
                                          tr !== void 0
                                            ? tr
                                            : e(s, {
                                                children: e("h6", {
                                                  className:
                                                    "framer-styles-preset-14n5412",
                                                  "data-styles-preset":
                                                    "H9bHClO9b",
                                                  children:
                                                    "N.QUANTUM Chips Running",
                                                }),
                                              }),
                                      },
                                    },
                                    children: e(S, {
                                      __fromCanvasComponent: !0,
                                      children:
                                        (ar = p("v27", t)) !== null &&
                                        ar !== void 0
                                          ? ar
                                          : e(s, {
                                              children: e("h6", {
                                                className:
                                                  "framer-styles-preset-14n5412",
                                                "data-styles-preset":
                                                  "H9bHClO9b",
                                                children:
                                                  "N.QUANTUM Chips Running",
                                              }),
                                            }),
                                      className: "framer-1c7a1qi",
                                      fonts: ["Inter"],
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            d(o.div, {
                              className: "framer-1mb6zq0",
                              "data-framer-name": "Corners",
                              name: "Corners",
                              children: [
                                e(o.div, {
                                  className: "framer-1vl5jq9",
                                  "data-border": !0,
                                  "data-framer-name": "Top Left ",
                                  name: "Top Left ",
                                }),
                                e(o.div, {
                                  className: "framer-icytk5",
                                  "data-border": !0,
                                  "data-framer-name": "Top Left ",
                                  name: "Top Left ",
                                  transformTemplate: ht,
                                }),
                                e(o.div, {
                                  className: "framer-12hbj8h",
                                  "data-border": !0,
                                  "data-framer-name": "Top Left ",
                                  name: "Top Left ",
                                  transformTemplate: xt,
                                }),
                                e(o.div, {
                                  className: "framer-1iel4o5",
                                  "data-border": !0,
                                  "data-framer-name": "Top Left ",
                                  name: "Top Left ",
                                  transformTemplate: Lr,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    e(g, {
                      breakpoint: n,
                      overrides: {
                        vEm2qB4sB: {
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
                      children: d("div", {
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
                        className: "framer-s8hch",
                        "data-framer-name": "Network In Numbers",
                        name: "Network In Numbers",
                        children: [
                          d(Cr, {
                            __framer__animate: { transition: yt },
                            __framer__animateOnce: !0,
                            __framer__enter: Pe,
                            __framer__exit: Ga,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: "framer-3msx0u",
                            "data-framer-name": "Title Line",
                            name: "Title Line",
                            transformTemplate: N,
                            children: [
                              e(S, {
                                __fromCanvasComponent: !0,
                                children: e(s, {
                                  children: e("p", {
                                    className: "framer-styles-preset-1ygrrqz",
                                    "data-styles-preset": "aSqMlk60T",
                                    style: {
                                      "--framer-text-color":
                                        "var(--token-50859c1e-b9ab-4124-b93a-6ea1cca8c715, rgb(98, 103, 111))",
                                    },
                                    children: "Network In Numbers",
                                  }),
                                }),
                                className: "framer-5r7mna",
                                fonts: ["Inter"],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                              e("div", {
                                className: "framer-rxci74",
                                "data-framer-name": "Line",
                                name: "Line",
                              }),
                            ],
                          }),
                          d(Sr, {
                            className: "framer-tnskmw",
                            "data-framer-name": "3 Cols Icons",
                            name: "3 Cols Icons",
                            children: [
                              e(h, {
                                children: e(C, {
                                  className: "framer-8iwn0u-container",
                                  children: e(g, {
                                    breakpoint: n,
                                    overrides: {
                                      LPhuP8IE0: { style: { width: "100%" } },
                                      vEm2qB4sB: { style: { width: "100%" } },
                                    },
                                    children: e(le, {
                                      height: "100%",
                                      id: "LphckFTOU",
                                      jYwSC76Yw: "Hash Rate      ",
                                      layoutId: "LphckFTOU",
                                      QVK7aWHm1: "hashrate",
                                      width: "100%",
                                    }),
                                  }),
                                }),
                              }),
                              e(h, {
                                children: e(C, {
                                  className: "framer-192jri7-container",
                                  children: e(g, {
                                    breakpoint: n,
                                    overrides: {
                                      LPhuP8IE0: { style: { width: "100%" } },
                                      vEm2qB4sB: { style: { width: "100%" } },
                                    },
                                    children: e(le, {
                                      height: "100%",
                                      id: "gC7WxLkwa",
                                      jYwSC76Yw: "Block Height",
                                      layoutId: "gC7WxLkwa",
                                      QVK7aWHm1: "blockheight",
                                      width: "100%",
                                    }),
                                  }),
                                }),
                              }),
                              e(h, {
                                children: e(C, {
                                  className: "framer-ovtqvl-container",
                                  children: e(le, {
                                    height: "100%",
                                    id: "QbMBi2ZHn",
                                    jYwSC76Yw: "Next Reward",
                                    layoutId: "QbMBi2ZHn",
                                    QVK7aWHm1: "nextreward",
                                    style: { width: "100%" },
                                    width: "100%",
                                  }),
                                }),
                              }),
                            ],
                          }),
                          d(Sr, {
                            className: "framer-ce5911",
                            "data-framer-name": "3 Cols Icons",
                            name: "3 Cols Icons",
                            children: [
                              e(h, {
                                children: e(C, {
                                  className: "framer-1qs67y7-container",
                                  children: e(g, {
                                    breakpoint: n,
                                    overrides: {
                                      LPhuP8IE0: { style: { width: "100%" } },
                                      vEm2qB4sB: { style: { width: "100%" } },
                                    },
                                    children: e(le, {
                                      height: "100%",
                                      id: "U03gJ7S7h",
                                      jYwSC76Yw: "Transactions",
                                      layoutId: "U03gJ7S7h",
                                      QVK7aWHm1: "transactions",
                                      width: "100%",
                                    }),
                                  }),
                                }),
                              }),
                              e(h, {
                                children: e(C, {
                                  className: "framer-1rvpceu-container",
                                  children: e(le, {
                                    height: "100%",
                                    id: "Oek7ikGZb",
                                    jYwSC76Yw: "Circulation",
                                    layoutId: "Oek7ikGZb",
                                    QVK7aWHm1: "circulation",
                                    style: { width: "100%" },
                                    width: "100%",
                                  }),
                                }),
                              }),
                              e(h, {
                                children: e(C, {
                                  className: "framer-81v3i0-container",
                                  children: e(le, {
                                    height: "100%",
                                    id: "LoEBKh4vr",
                                    jYwSC76Yw: "Max Supply",
                                    layoutId: "LoEBKh4vr",
                                    QVK7aWHm1: "total_supply",
                                    style: { width: "100%" },
                                    width: "100%",
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    e(g, {
                      breakpoint: n,
                      overrides: {
                        vEm2qB4sB: {
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
                      children: e(Cr, {
                        __framer__animate: { transition: vt },
                        __framer__animateOnce: !0,
                        __framer__enter: Xa,
                        __framer__exit: Za,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0.5,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
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
                        className: "framer-1fbfjgq",
                        "data-framer-name": "Fair Start",
                        name: "Fair Start",
                        transformTemplate: N,
                        children: d("div", {
                          className: "framer-5ops8s",
                          "data-framer-name": "Content",
                          name: "Content",
                          children: [
                            e(h, {
                              children: e(ce, {
                                __framer__animate: { transition: wt },
                                __framer__animateOnce: !0,
                                __framer__enter: Tr,
                                __framer__exit: Ka,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: "framer-hm9o8m-container",
                                transformTemplate: N,
                                children: e(Ie, {
                                  De81Dd2tF: e(s, {
                                    children: e("p", {
                                      children:
                                        "Proton mining is based on our proprietary, meaningful PoUW mining algorithm ProtonSolve. When mining PTN, computations are performed for the network.",
                                    }),
                                  }),
                                  FXMLloUXk:
                                    "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                                  height: "100%",
                                  HMV4Yoe7M:
                                    "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                                  id: "GxpY3yYXc",
                                  KXaYyhqTQ: "thin",
                                  layoutId: "GxpY3yYXc",
                                  lFSXA88cV: "Meaningful Mining",
                                  style: { width: "100%" },
                                  tXM8rNFsJ: "Sparkle",
                                  width: "100%",
                                }),
                              }),
                            }),
                            e(h, {
                              children: e(ce, {
                                __framer__animate: { transition: Rt },
                                __framer__animateOnce: !0,
                                __framer__enter: Tr,
                                __framer__exit: $a,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: "framer-mxa8fw-container",
                                transformTemplate: N,
                                children: e(Ie, {
                                  De81Dd2tF: e(s, {
                                    children: e("p", {
                                      children:
                                        "The security and integrity benefits of blockchain, combined with strong cryptographic safeguards and multi-factor authentication.",
                                    }),
                                  }),
                                  FXMLloUXk:
                                    "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                                  height: "100%",
                                  HMV4Yoe7M:
                                    "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                                  id: "cPafeP1tT",
                                  KXaYyhqTQ: "thin",
                                  layoutId: "cPafeP1tT",
                                  lFSXA88cV: "Secure",
                                  style: { width: "100%" },
                                  tXM8rNFsJ: "ShieldCheck",
                                  width: "100%",
                                }),
                              }),
                            }),
                            e(h, {
                              children: e(ce, {
                                __framer__animate: { transition: _t },
                                __framer__animateOnce: !0,
                                __framer__enter: Tr,
                                __framer__exit: eo,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: "framer-b2wwk1-container",
                                transformTemplate: N,
                                children: e(Ie, {
                                  De81Dd2tF: e(s, {
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
                                  id: "k6aXGAhap",
                                  KXaYyhqTQ: "thin",
                                  layoutId: "k6aXGAhap",
                                  lFSXA88cV: "Sustainable",
                                  style: { width: "100%" },
                                  tXM8rNFsJ: "Leaf",
                                  width: "100%",
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              e("div", {
                className: "framer-1koyykq",
                "data-framer-name": "Footer Container",
                name: "Footer Container",
                children: e(h, {
                  children: e(C, {
                    className: "framer-vrygav-container",
                    children: e(g, {
                      breakpoint: n,
                      overrides: {
                        LPhuP8IE0: { variant: "aK_4VtDvt" },
                        vEm2qB4sB: { variant: "CP4euYBms" },
                      },
                      children: e(ur, {
                        height: "100%",
                        id: "wgOJEbkva",
                        layoutId: "wgOJEbkva",
                        style: { width: "100%" },
                        variant: "lKW5sKZWt",
                        width: "100%",
                      }),
                    }),
                  }),
                }),
              }),
              e(Jr, {
                background: {
                  alt: "",
                  fit: "fill",
                  intrinsicHeight: 1384,
                  intrinsicWidth: 5104,
                  pixelHeight: 1384,
                  pixelWidth: 5104,
                  sizes: "calc(100vw + 376px)",
                  src: "https://framerusercontent.com/images/ESZPbyHyGeJ6veiCv3wIKEb0bWU.png",
                  srcSet:
                    "https://framerusercontent.com/images/ESZPbyHyGeJ6veiCv3wIKEb0bWU.png?scale-down-to=512 512w,https://framerusercontent.com/images/ESZPbyHyGeJ6veiCv3wIKEb0bWU.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/ESZPbyHyGeJ6veiCv3wIKEb0bWU.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/ESZPbyHyGeJ6veiCv3wIKEb0bWU.png?scale-down-to=4096 4096w,https://framerusercontent.com/images/ESZPbyHyGeJ6veiCv3wIKEb0bWU.png 5104w",
                },
                className: "framer-x2nedh",
                "data-framer-name": "GradientBG",
                name: "GradientBG",
              }),
            ],
          }),
          e("div", { className: O(dt, ...E), id: "overlay" }),
        ],
      }),
    });
  }),
  oo = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    `.${Ur.bodyClassName}-framer-xRcpo { background: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, rgb(7, 7, 19)) /* {"name":"Dark BG"} */; }`,
    ".framer-xRcpo.framer-1tgaahj, .framer-xRcpo .framer-1tgaahj { display: block; }",
    ".framer-xRcpo.framer-1l1gc90 { align-content: center; align-items: center; background-color: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, #070713); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1024px; }",
    ".framer-xRcpo .framer-1npnb0f-container { flex: none; height: auto; left: 50%; max-width: 1260px; position: absolute; top: 32px; transform: translateX(-50%); width: 100%; z-index: 10; }",
    ".framer-xRcpo .framer-14knw98 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; overflow: hidden; padding: 40px 0px 0px 0px; position: relative; width: 100%; z-index: 3; }",
    ".framer-xRcpo .framer-1tgljwr { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 800px; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-xRcpo .framer-1u1auh3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 24px 9px; position: relative; transform: perspective(1200px); width: min-content; }",
    ".framer-xRcpo .framer-17idpoe { flex: none; height: 26px; position: relative; width: 175px; }",
    ".framer-xRcpo .framer-jfz8p9-container { flex: none; height: auto; position: relative; transform: perspective(1200px); width: 620px; }",
    ".framer-xRcpo .framer-sfnx4g-container { flex: none; height: auto; position: relative; transform: perspective(1200px); width: 100%; }",
    ".framer-xRcpo .framer-1mdq1ma { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; max-width: 460px; overflow: visible; padding: 0px 0px 0px 105px; position: relative; width: 100%; }",
    ".framer-xRcpo .framer-b12m4a-container { flex: none; height: auto; position: relative; transform: perspective(1200px); width: 709px; }",
    ".framer-xRcpo .framer-y4mkxi { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; overflow: hidden; position: relative; transform: perspective(500px); white-space: pre-wrap; width: 355px; word-break: break-word; word-wrap: break-word; z-index: 1; }",
    ".framer-xRcpo .framer-17wgyc3-container { bottom: -280px; flex: none; height: 350px; left: -320px; position: absolute; width: 325px; z-index: 1; }",
    ".framer-xRcpo .framer-1j1puzq-container { bottom: 232px; flex: none; height: 350px; position: absolute; right: -400px; transform: rotate(180deg); width: 325px; z-index: 1; }",
    '.framer-xRcpo .framer-1cx0sk1 { background: linear-gradient(180deg, rgba(7, 7, 19, 0) 0%, var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, rgb(7, 7, 19)) /* {"name":"Dark BG"} */ 100%); bottom: 0px; flex: none; height: 23.02558398220245vh; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; position: absolute; width: 100%; z-index: 2; }',
    ".framer-xRcpo .framer-1wz134y { -webkit-filter: brightness(1.5) contrast(2) saturate(0.39); align-content: center; align-items: center; display: flex; filter: brightness(1.5) contrast(2) saturate(0.39); flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; left: calc(50.00000000000002% - 100% / 2); mix-blend-mode: lighten; overflow: hidden; padding: 48px 0px 0px 0px; position: absolute; top: 0px; transform: perspective(1200px); width: 100%; z-index: 1; }",
    ".framer-xRcpo .framer-1a60odb-container { flex: none; height: 90%; position: relative; width: 90%; }",
    ".framer-xRcpo .framer-v13if9 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; max-width: 1260px; overflow: visible; padding: 128px 48px 0px 48px; position: relative; scroll-margin-top: 80px; width: 100%; }",
    ".framer-xRcpo .framer-1lobd0t { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-xRcpo .framer-ed5tne { align-content: center; align-items: center; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: auto; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1px; }",
    ".framer-xRcpo .framer-18s6q8y { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 24px 24px 24px 24px; position: relative; width: 100%; }",
    ".framer-xRcpo .framer-1qnb5r2, .framer-xRcpo .framer-13myp4l { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 1 0 0px; height: auto; position: relative; transform: perspective(1200px); white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }",
    ".framer-xRcpo .framer-1c9xwij-container { flex: 1 0 0px; height: 1px; position: relative; transform: perspective(1200px); width: 100%; }",
    ".framer-xRcpo .framer-nt0dc0-container { flex: none; height: 1043px; position: relative; transform: perspective(1200px); width: 500px; }",
    ".framer-xRcpo .framer-119zcg2-container { flex: none; height: auto; position: relative; width: 100%; }",
    ".framer-xRcpo .framer-1smus8x { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 72px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-xRcpo .framer-1e46v6f { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 48px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-xRcpo .framer-1ivpptm, .framer-xRcpo .framer-ud3v47 { --border-bottom-width: 1px; --border-color: var(--token-6678d9c0-cf59-4b90-8a3f-78db6c108cce, #222426); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }",
    ".framer-xRcpo .framer-1n4y538, .framer-xRcpo .framer-lw91k3 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 24px 24px 24px 24px; position: relative; width: 100%; z-index: 1; }",
    ".framer-xRcpo .framer-2tb97y, .framer-xRcpo .framer-8chv81 { align-content: center; align-items: center; border-bottom-left-radius: 100px; border-bottom-right-radius: 100px; border-top-left-radius: 100px; border-top-right-radius: 100px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: auto; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: auto; will-change: var(--framer-will-change-override, transform); }",
    ".framer-xRcpo .framer-1xkep4m-container, .framer-xRcpo .framer-7a9pkz-container { flex: none; height: 48px; position: relative; width: 48px; }",
    ".framer-xRcpo .framer-27tx51-container, .framer-xRcpo .framer-1az82pr-container, .framer-xRcpo .framer-8iwn0u-container, .framer-xRcpo .framer-192jri7-container, .framer-xRcpo .framer-1qs67y7-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-xRcpo .framer-tmbu2t, .framer-xRcpo .framer-sqyesw { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: auto; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-xRcpo .framer-1gp7g3f, .framer-xRcpo .framer-1c7a1qi { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-xRcpo .framer-1njbnic, .framer-xRcpo .framer-1mb6zq0 { bottom: 0px; flex: none; left: 0px; opacity: 0.4; overflow: hidden; position: absolute; right: 0px; top: 0px; z-index: 0; }",
    ".framer-xRcpo .framer-efct9a, .framer-xRcpo .framer-1vl5jq9 { --border-bottom-width: 0px; --border-color: #ffffff; --border-left-width: 1px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; border-top-left-radius: 3px; flex: none; height: 6px; left: 0px; overflow: hidden; position: absolute; top: 0px; width: 6px; will-change: var(--framer-will-change-override, transform); z-index: 1; }",
    ".framer-xRcpo .framer-hh7z5, .framer-xRcpo .framer-icytk5 { --border-bottom-width: 0px; --border-color: #ffffff; --border-left-width: 1px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; border-top-left-radius: 3px; bottom: 0px; flex: none; height: 6px; left: 0px; overflow: hidden; position: absolute; transform: rotate(-90deg); width: 6px; will-change: var(--framer-will-change-override, transform); z-index: 1; }",
    ".framer-xRcpo .framer-135thn7, .framer-xRcpo .framer-12hbj8h { --border-bottom-width: 0px; --border-color: #ffffff; --border-left-width: 1px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; border-top-left-radius: 3px; flex: none; height: 6px; overflow: hidden; position: absolute; right: 0px; top: 0px; transform: rotate(90deg); width: 6px; will-change: var(--framer-will-change-override, transform); z-index: 1; }",
    ".framer-xRcpo .framer-1yvznv3, .framer-xRcpo .framer-1iel4o5 { --border-bottom-width: 0px; --border-color: #ffffff; --border-left-width: 1px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; border-top-left-radius: 3px; bottom: 0px; flex: none; height: 6px; overflow: hidden; position: absolute; right: 0px; transform: rotate(180deg); width: 6px; will-change: var(--framer-will-change-override, transform); z-index: 1; }",
    ".framer-xRcpo .framer-s8hch { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; z-index: 2; }",
    ".framer-xRcpo .framer-3msx0u { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 32px 0px 0px 0px; position: relative; transform: perspective(1200px); width: 100%; }",
    ".framer-xRcpo .framer-5r7mna { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    '.framer-xRcpo .framer-rxci74 { background: linear-gradient(270deg, rgba(98, 103, 111, 0) 0%, var(--token-50859c1e-b9ab-4124-b93a-6ea1cca8c715, rgb(98, 103, 111)) /* {"name":"Proton Faded"} */ 100%); flex: 1 0 0px; height: 1px; opacity: 0.25; overflow: hidden; position: relative; width: 1px; }',
    ".framer-xRcpo .framer-tnskmw, .framer-xRcpo .framer-ce5911 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-xRcpo .framer-ovtqvl-container, .framer-xRcpo .framer-1rvpceu-container, .framer-xRcpo .framer-81v3i0-container, .framer-xRcpo .framer-vrygav-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }",
    '.framer-xRcpo .framer-1fbfjgq { align-content: flex-start; align-items: flex-start; box-shadow: 0px 110px 50px -80px var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, #070713) /* {"name":"Dark BG"} */; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; transform: perspective(1200px); width: 100%; z-index: 2; }',
    ".framer-xRcpo .framer-5ops8s { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 72px 0px 32px 0px; position: relative; width: 100%; z-index: 3; }",
    ".framer-xRcpo .framer-hm9o8m-container, .framer-xRcpo .framer-mxa8fw-container, .framer-xRcpo .framer-b2wwk1-container { flex: 1 0 0px; height: auto; position: relative; transform: perspective(1200px); width: 1px; }",
    ".framer-xRcpo .framer-1koyykq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1260px; overflow: hidden; padding: 0px 48px 0px 48px; position: relative; width: 100%; }",
    ".framer-xRcpo .framer-x2nedh { aspect-ratio: 4 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 350px); left: -188px; overflow: hidden; position: absolute; right: -188px; top: 0px; z-index: 0; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-xRcpo.framer-1l1gc90, .framer-xRcpo .framer-14knw98, .framer-xRcpo .framer-1tgljwr, .framer-xRcpo .framer-1u1auh3, .framer-xRcpo .framer-1mdq1ma, .framer-xRcpo .framer-1wz134y, .framer-xRcpo .framer-v13if9, .framer-xRcpo .framer-1lobd0t, .framer-xRcpo .framer-ed5tne, .framer-xRcpo .framer-18s6q8y, .framer-xRcpo .framer-1smus8x, .framer-xRcpo .framer-1e46v6f, .framer-xRcpo .framer-1ivpptm, .framer-xRcpo .framer-1n4y538, .framer-xRcpo .framer-2tb97y, .framer-xRcpo .framer-tmbu2t, .framer-xRcpo .framer-ud3v47, .framer-xRcpo .framer-lw91k3, .framer-xRcpo .framer-8chv81, .framer-xRcpo .framer-sqyesw, .framer-xRcpo .framer-s8hch, .framer-xRcpo .framer-3msx0u, .framer-xRcpo .framer-tnskmw, .framer-xRcpo .framer-ce5911, .framer-xRcpo .framer-1fbfjgq, .framer-xRcpo .framer-5ops8s, .framer-xRcpo .framer-1koyykq { gap: 0px; } .framer-xRcpo.framer-1l1gc90 > *, .framer-xRcpo .framer-14knw98 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-xRcpo.framer-1l1gc90 > :first-child, .framer-xRcpo .framer-14knw98 > :first-child, .framer-xRcpo .framer-1tgljwr > :first-child, .framer-xRcpo .framer-1mdq1ma > :first-child, .framer-xRcpo .framer-v13if9 > :first-child, .framer-xRcpo .framer-ed5tne > :first-child, .framer-xRcpo .framer-1ivpptm > :first-child, .framer-xRcpo .framer-1n4y538 > :first-child, .framer-xRcpo .framer-tmbu2t > :first-child, .framer-xRcpo .framer-ud3v47 > :first-child, .framer-xRcpo .framer-lw91k3 > :first-child, .framer-xRcpo .framer-sqyesw > :first-child, .framer-xRcpo .framer-s8hch > :first-child, .framer-xRcpo .framer-1fbfjgq > :first-child { margin-top: 0px; } .framer-xRcpo.framer-1l1gc90 > :last-child, .framer-xRcpo .framer-14knw98 > :last-child, .framer-xRcpo .framer-1tgljwr > :last-child, .framer-xRcpo .framer-1mdq1ma > :last-child, .framer-xRcpo .framer-v13if9 > :last-child, .framer-xRcpo .framer-ed5tne > :last-child, .framer-xRcpo .framer-1ivpptm > :last-child, .framer-xRcpo .framer-1n4y538 > :last-child, .framer-xRcpo .framer-tmbu2t > :last-child, .framer-xRcpo .framer-ud3v47 > :last-child, .framer-xRcpo .framer-lw91k3 > :last-child, .framer-xRcpo .framer-sqyesw > :last-child, .framer-xRcpo .framer-s8hch > :last-child, .framer-xRcpo .framer-1fbfjgq > :last-child { margin-bottom: 0px; } .framer-xRcpo .framer-1tgljwr > *, .framer-xRcpo .framer-1ivpptm > *, .framer-xRcpo .framer-ud3v47 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-xRcpo .framer-1u1auh3 > *, .framer-xRcpo .framer-1wz134y > *, .framer-xRcpo .framer-18s6q8y > *, .framer-xRcpo .framer-1smus8x > *, .framer-xRcpo .framer-1koyykq > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-xRcpo .framer-1u1auh3 > :first-child, .framer-xRcpo .framer-1wz134y > :first-child, .framer-xRcpo .framer-1lobd0t > :first-child, .framer-xRcpo .framer-18s6q8y > :first-child, .framer-xRcpo .framer-1smus8x > :first-child, .framer-xRcpo .framer-1e46v6f > :first-child, .framer-xRcpo .framer-2tb97y > :first-child, .framer-xRcpo .framer-8chv81 > :first-child, .framer-xRcpo .framer-3msx0u > :first-child, .framer-xRcpo .framer-tnskmw > :first-child, .framer-xRcpo .framer-ce5911 > :first-child, .framer-xRcpo .framer-5ops8s > :first-child, .framer-xRcpo .framer-1koyykq > :first-child { margin-left: 0px; } .framer-xRcpo .framer-1u1auh3 > :last-child, .framer-xRcpo .framer-1wz134y > :last-child, .framer-xRcpo .framer-1lobd0t > :last-child, .framer-xRcpo .framer-18s6q8y > :last-child, .framer-xRcpo .framer-1smus8x > :last-child, .framer-xRcpo .framer-1e46v6f > :last-child, .framer-xRcpo .framer-2tb97y > :last-child, .framer-xRcpo .framer-8chv81 > :last-child, .framer-xRcpo .framer-3msx0u > :last-child, .framer-xRcpo .framer-tnskmw > :last-child, .framer-xRcpo .framer-ce5911 > :last-child, .framer-xRcpo .framer-5ops8s > :last-child, .framer-xRcpo .framer-1koyykq > :last-child { margin-right: 0px; } .framer-xRcpo .framer-1mdq1ma > *, .framer-xRcpo .framer-1n4y538 > *, .framer-xRcpo .framer-lw91k3 > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-xRcpo .framer-v13if9 > *, .framer-xRcpo .framer-ed5tne > *, .framer-xRcpo .framer-1fbfjgq > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-xRcpo .framer-1lobd0t > *, .framer-xRcpo .framer-5ops8s > * { margin: 0px; margin-left: calc(48px / 2); margin-right: calc(48px / 2); } .framer-xRcpo .framer-1e46v6f > *, .framer-xRcpo .framer-tnskmw > *, .framer-xRcpo .framer-ce5911 > * { margin: 0px; margin-left: calc(32px / 2); margin-right: calc(32px / 2); } .framer-xRcpo .framer-2tb97y > *, .framer-xRcpo .framer-8chv81 > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-xRcpo .framer-tmbu2t > *, .framer-xRcpo .framer-sqyesw > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-xRcpo .framer-s8hch > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-xRcpo .framer-3msx0u > * { margin: 0px; margin-left: calc(24px / 2); margin-right: calc(24px / 2); } }",
    "@media (min-width: 1024px) { .framer-xRcpo .hidden-1l1gc90 { display: none !important; } }",
    `@media (min-width: 768px) and (max-width: 1023px) { .framer-xRcpo .hidden-1d77tjy { display: none !important; } .${Ur.bodyClassName}-framer-xRcpo { background: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, rgb(7, 7, 19)) /* {"name":"Dark BG"} */; } .framer-xRcpo.framer-1l1gc90 { width: 768px; } .framer-xRcpo .framer-1tgljwr { padding: 0px 72px 0px 72px; } .framer-xRcpo .framer-1a60odb-container { width: 100%; } .framer-xRcpo .framer-v13if9 { padding: 0px 48px 0px 48px; } .framer-xRcpo .framer-1lobd0t, .framer-xRcpo .framer-1e46v6f { flex-direction: column; } .framer-xRcpo .framer-ed5tne { align-self: unset; flex: none; height: min-content; width: 100%; } .framer-xRcpo .framer-1c9xwij-container { flex: none; height: auto; } .framer-xRcpo .framer-nt0dc0-container { height: auto; width: 100%; } .framer-xRcpo .framer-1ivpptm, .framer-xRcpo .framer-ud3v47 { flex: none; width: 100%; } .framer-xRcpo .framer-tnskmw, .framer-xRcpo .framer-ce5911 { align-content: unset; align-items: unset; display: grid; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(200px, 1fr)); grid-template-rows: repeat(1, min-content); justify-content: start; } .framer-xRcpo .framer-8iwn0u-container, .framer-xRcpo .framer-192jri7-container, .framer-xRcpo .framer-1qs67y7-container { align-self: start; justify-self: start; width: 100%; } .framer-xRcpo .framer-ovtqvl-container, .framer-xRcpo .framer-1rvpceu-container, .framer-xRcpo .framer-81v3i0-container { align-self: start; flex: none; justify-self: start; width: 100%; } .framer-xRcpo .framer-5ops8s { align-content: unset; align-items: unset; display: grid; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(200px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); justify-content: center; padding: 72px 0px 0px 0px; } .framer-xRcpo .framer-hm9o8m-container, .framer-xRcpo .framer-mxa8fw-container, .framer-xRcpo .framer-b2wwk1-container { align-self: start; flex: none; height: 100%; justify-self: start; width: 100%; } .framer-xRcpo .framer-x2nedh { height: var(--framer-aspect-ratio-supported, 286px); } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-xRcpo .framer-1lobd0t, .framer-xRcpo .framer-1e46v6f, .framer-xRcpo .framer-tnskmw, .framer-xRcpo .framer-ce5911, .framer-xRcpo .framer-5ops8s { gap: 0px; } .framer-xRcpo .framer-1lobd0t > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-xRcpo .framer-1lobd0t > :first-child, .framer-xRcpo .framer-1e46v6f > :first-child { margin-top: 0px; } .framer-xRcpo .framer-1lobd0t > :last-child, .framer-xRcpo .framer-1e46v6f > :last-child { margin-bottom: 0px; } .framer-xRcpo .framer-1e46v6f > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-xRcpo .framer-tnskmw > *, .framer-xRcpo .framer-tnskmw > :first-child, .framer-xRcpo .framer-tnskmw > :last-child, .framer-xRcpo .framer-ce5911 > *, .framer-xRcpo .framer-ce5911 > :first-child, .framer-xRcpo .framer-ce5911 > :last-child, .framer-xRcpo .framer-5ops8s > *, .framer-xRcpo .framer-5ops8s > :first-child, .framer-xRcpo .framer-5ops8s > :last-child { margin: 0px; } }}`,
    `@media (max-width: 767px) { .framer-xRcpo .hidden-12qgckm { display: none !important; } .${Ur.bodyClassName}-framer-xRcpo { background: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, rgb(7, 7, 19)) /* {"name":"Dark BG"} */; } .framer-xRcpo.framer-1l1gc90 { width: 390px; } .framer-xRcpo .framer-1npnb0f-container { top: 0px; } .framer-xRcpo .framer-14knw98, .framer-xRcpo .framer-18s6q8y { padding: 0px 0px 0px 0px; } .framer-xRcpo .framer-1tgljwr { padding: 0px 36px 0px 36px; } .framer-xRcpo .framer-jfz8p9-container, .framer-xRcpo .framer-1a60odb-container { width: 100%; } .framer-xRcpo .framer-1wz134y { flex-direction: column; padding: 0px 0px 0px 0px; top: 48px; transform: unset; } .framer-xRcpo .framer-v13if9 { padding: 0px 24px 0px 24px; } .framer-xRcpo .framer-1lobd0t, .framer-xRcpo .framer-1e46v6f { flex-direction: column; } .framer-xRcpo .framer-ed5tne { align-self: unset; flex: none; height: min-content; width: 100%; } .framer-xRcpo .framer-1c9xwij-container { flex: none; height: auto; } .framer-xRcpo .framer-nt0dc0-container { height: auto; width: 100%; } .framer-xRcpo .framer-1ivpptm, .framer-xRcpo .framer-ud3v47, .framer-xRcpo .framer-vrygav-container { flex: none; width: 100%; } .framer-xRcpo .framer-lw91k3 { justify-content: flex-start; } .framer-xRcpo .framer-tnskmw, .framer-xRcpo .framer-ce5911 { align-content: unset; align-items: unset; display: grid; grid-auto-rows: min-content; grid-template-columns: repeat(1, minmax(200px, 1fr)); grid-template-rows: repeat(1, min-content); justify-content: start; } .framer-xRcpo .framer-8iwn0u-container, .framer-xRcpo .framer-192jri7-container, .framer-xRcpo .framer-1qs67y7-container { align-self: start; justify-self: start; width: 100%; } .framer-xRcpo .framer-ovtqvl-container, .framer-xRcpo .framer-1rvpceu-container, .framer-xRcpo .framer-81v3i0-container { align-self: start; flex: none; justify-self: start; width: 100%; } .framer-xRcpo .framer-5ops8s { align-content: unset; align-items: unset; display: grid; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(1, minmax(200px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); justify-content: center; padding: 72px 0px 0px 0px; } .framer-xRcpo .framer-hm9o8m-container, .framer-xRcpo .framer-mxa8fw-container, .framer-xRcpo .framer-b2wwk1-container { align-self: start; flex: none; height: 100%; justify-self: start; width: 100%; } .framer-xRcpo .framer-1koyykq { flex-direction: column; padding: 0px 24px 0px 24px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-xRcpo .framer-1wz134y, .framer-xRcpo .framer-1lobd0t, .framer-xRcpo .framer-1e46v6f, .framer-xRcpo .framer-tnskmw, .framer-xRcpo .framer-ce5911, .framer-xRcpo .framer-5ops8s, .framer-xRcpo .framer-1koyykq { gap: 0px; } .framer-xRcpo .framer-1wz134y > *, .framer-xRcpo .framer-1koyykq > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-xRcpo .framer-1wz134y > :first-child, .framer-xRcpo .framer-1lobd0t > :first-child, .framer-xRcpo .framer-1e46v6f > :first-child, .framer-xRcpo .framer-1koyykq > :first-child { margin-top: 0px; } .framer-xRcpo .framer-1wz134y > :last-child, .framer-xRcpo .framer-1lobd0t > :last-child, .framer-xRcpo .framer-1e46v6f > :last-child, .framer-xRcpo .framer-1koyykq > :last-child { margin-bottom: 0px; } .framer-xRcpo .framer-1lobd0t > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-xRcpo .framer-1e46v6f > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-xRcpo .framer-tnskmw > *, .framer-xRcpo .framer-tnskmw > :first-child, .framer-xRcpo .framer-tnskmw > :last-child, .framer-xRcpo .framer-ce5911 > *, .framer-xRcpo .framer-ce5911 > :first-child, .framer-xRcpo .framer-ce5911 > :last-child, .framer-xRcpo .framer-5ops8s > *, .framer-xRcpo .framer-5ops8s > :first-child, .framer-xRcpo .framer-5ops8s > :last-child { margin: 0px; } }}`,
    ...Gr,
    ...Kr,
    ...we,
    '.framer-xRcpo[data-border="true"]::after, .framer-xRcpo [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  Xe = Y(ao, oo, "framer-xRcpo"),
  Zn = Xe;
Xe.displayName = "About";
Xe.defaultProps = { height: 4674.5, width: 1024 };
G(
  Xe,
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
    ...Ea,
    ...La,
    ...Ta,
    ...Ua,
    ...za,
    ...ja,
    ...Pa,
    ...qa,
    ...Ha,
    ...Oa,
    ...Ba,
    ...Aa,
    ...B(Yr),
    ...B(Zr),
    ...B(ve),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Kn = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FramerfyxHY82ZH",
      slots: [],
      annotations: {
        framerImmutableVariables: "true",
        framerIntrinsicHeight: "4674.5",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"LPhuP8IE0":{"layout":["fixed","auto"]},"vEm2qB4sB":{"layout":["fixed","auto"]}}}',
        framerDisplayContentsDiv: "false",
        framerResponsiveScreen: "",
        framerComponentViewportWidth: "true",
        framerIntrinsicWidth: "1024",
        framerContractVersion: "1",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
export { Kn as __FramerMetadata__, Zn as default };
//# sourceMappingURL=IANVkAAyELuHEF9G7m7OMFt0KYHql0aKL0aiQMYHk4Q.SF3PQY7R.mjs.map

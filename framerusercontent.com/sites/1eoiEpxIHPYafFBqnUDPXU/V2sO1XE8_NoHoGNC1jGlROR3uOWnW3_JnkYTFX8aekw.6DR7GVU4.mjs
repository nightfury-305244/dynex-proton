import { a as S } from "./chunk-ISD3VXYD.mjs";
import { a as r } from "./chunk-HG4N6CRA.mjs";
import "./chunk-VWVO6BDV.mjs";
import { a as V, b as R, c as Z } from "./chunk-7CIBRMH5.mjs";
import { e as b } from "./chunk-C724PHK6.mjs";
import { b as W, c as K, d as U, m as k } from "./chunk-Z6B2ZS7J.mjs";
import "./chunk-42U43NKG.mjs";
import {
  G as w,
  M as t,
  N as B,
  P as E,
  Q as L,
  V as c,
  da as F,
  e as g,
  g as C,
  pa as H,
  qa as y,
  ra as G,
  sa as h,
  t as D,
} from "./chunk-ALOT7UQK.mjs";
import {
  d as x,
  j,
  q as z,
  s as I,
  u as T,
  y as e,
  z as m,
} from "./chunk-DKTB2747.mjs";
import "./chunk-ELYU6EKT.mjs";
var $ = h(k),
  ee = h(r),
  te = h(b);
var q = {
    Llc6Pldp4: "(max-width: 809px)",
    lrsdkFfGn: "(min-width: 1024px)",
    uneZsfNuF: "(min-width: 810px) and (max-width: 1023px)",
  },
  A = () => typeof document < "u";
var _ = {
  Llc6Pldp4: "framer-v-1ksgj1h",
  lrsdkFfGn: "framer-v-u32exf",
  uneZsfNuF: "framer-v-1dyo272",
};
A() && void 0;
var re = { default: { duration: 0 } },
  ae = { oDJvo1yNO: new L(() => import("./s6YWe3VcZ-0-2SDUJONE.mjs")) },
  ne = (n) => {
    let a = [];
    for (; n; ) {
      let o = ae[n.id];
      if (o) {
        let i = o.preload();
        i && a.push(i);
      }
      n = n.fallback;
    }
    if (a.length > 0) return Promise.all(a);
  };
var ie = (n, a) => `perspective(500px) ${a}`,
  N = S(),
  oe = { Desktop: "lrsdkFfGn", Phone: "Llc6Pldp4", Tablet: "uneZsfNuF" },
  se = ({ height: n, id: a, width: o, ...i }) => {
    var d, s;
    return {
      ...i,
      variant:
        (s = (d = oe[i.variant]) !== null && d !== void 0 ? d : i.variant) !==
          null && s !== void 0
          ? s
          : "lrsdkFfGn",
    };
  },
  le = j(function (n, a) {
    let { activeLocale: o } = D(),
      { style: i, className: d, layoutId: s, variant: J, ...M } = se(n);
    I(() => {
      let l = S(void 0, o);
      if (((document.title = l.title || ""), l.viewport)) {
        var v;
        (v = document.querySelector('meta[name="viewport"]')) === null ||
          v === void 0 ||
          v.setAttribute("content", l.viewport);
      }
      if (l.bodyClassName)
        return (
          Array.from(document.body.classList)
            .filter((u) => u.startsWith("framer-body-"))
            .map((u) => document.body.classList.remove(u)),
          document.body.classList.add(`${l.bodyClassName}-framer-tvn5v`),
          () => {
            document.body.classList.remove(`${l.bodyClassName}-framer-tvn5v`);
          }
        );
    }, [void 0, o]);
    let [f, de] = F(J, q, !1),
      fe = void 0,
      ce = re.default,
      Y = T(null),
      O = () => (f === "Llc6Pldp4" ? !A() : !0),
      P = ne(o);
    if (P) throw P;
    let X = z(),
      Q = [Z, U];
    return e(E.Provider, {
      value: { primaryVariantId: "lrsdkFfGn", variantClassNames: _ },
      children: e(C, {
        id: s ?? X,
        children: m(g.div, {
          className: w("framer-tvn5v", ...Q),
          style: { display: "contents" },
          children: [
            m(g.div, {
              ...M,
              className: w("framer-u32exf", d),
              ref: a ?? Y,
              style: { ...i },
              children: [
                e(t, {
                  className: "framer-1wtlg19-container",
                  children: e(c, {
                    breakpoint: f,
                    overrides: {
                      Llc6Pldp4: { variant: "dxtA8R9ro" },
                      uneZsfNuF: { variant: "vRz6iFx98" },
                    },
                    children: e(k, {
                      height: "100%",
                      id: "qjD591U5E",
                      layoutId: "qjD591U5E",
                      style: { maxWidth: "100%", width: "100%" },
                      variant: "eoTXJYY6N",
                      width: "100%",
                    }),
                  }),
                }),
                m("header", {
                  className: "framer-31bz89",
                  "data-framer-name": "Header",
                  name: "Header",
                  children: [
                    e("div", { className: "framer-1k27ibh" }),
                    e(y, {
                      __fromCanvasComponent: !0,
                      children: e(x, {
                        children: e("h1", {
                          className: "framer-styles-preset-3nqyhf",
                          "data-styles-preset": "YAP816Y5n",
                          style: { "--framer-text-alignment": "center" },
                          children: "Dynex Links",
                        }),
                      }),
                      className: "framer-112u8jt",
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                    e(y, {
                      __fromCanvasComponent: !0,
                      children: e(x, {
                        children: e("p", {
                          className: "framer-styles-preset-11ut0g7",
                          "data-styles-preset": "Auy8Lx_6q",
                          style: { "--framer-text-alignment": "center" },
                          children:
                            "Below are the links to our official Dynex properties. Stay ahead of the scammers and protect yourself from phishing attacks by verifying links.",
                        }),
                      }),
                      className: "framer-s12x2d",
                      transformTemplate: ie,
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                  ],
                }),
                m("div", {
                  className: "framer-1n7owqo",
                  "data-framer-name": "FAQ",
                  name: "FAQ",
                  children: [
                    e(t, {
                      className: "framer-yjfe91-container",
                      children: e(r, {
                        fontSize: 18,
                        height: "100%",
                        id: "Zld6AhUSz",
                        layoutId: "Zld6AhUSz",
                        link: "https://dynexcoin.org/",
                        newTab: !0,
                        smoothScroll: !1,
                        style: { width: "100%" },
                        title: "Dynex Website",
                        variant: "gBo37P4ea",
                        width: "100%",
                      }),
                    }),
                    e(t, {
                      className: "framer-14xpjos-container",
                      children: e(r, {
                        fontSize: 18,
                        height: "100%",
                        id: "zj29pPb9L",
                        layoutId: "zj29pPb9L",
                        link: "https://t.me/dynextg",
                        newTab: !0,
                        smoothScroll: !1,
                        style: { width: "100%" },
                        title: "Telegram \u2013 Dynex Official (EN)",
                        variant: "gBo37P4ea",
                        width: "100%",
                      }),
                    }),
                    e(t, {
                      className: "framer-121ka2u-container",
                      children: e(r, {
                        fontSize: 18,
                        height: "100%",
                        id: "ag61RR9bs",
                        layoutId: "ag61RR9bs",
                        link: "https://join.slack.com/t/dynex-workspace/shared_invite/zt-22eb1n4mo-aXS5zsUBoPs613Dofi8Q4A",
                        newTab: !0,
                        smoothScroll: !1,
                        style: { width: "100%" },
                        title: "Slack (Customers & Devs)",
                        variant: "gBo37P4ea",
                        width: "100%",
                      }),
                    }),
                    e(t, {
                      className: "framer-s3lfki-container",
                      children: e(r, {
                        fontSize: 18,
                        height: "100%",
                        id: "pkHrlMtK9",
                        layoutId: "pkHrlMtK9",
                        link: "https://discord.gg/2YFnG5357k",
                        newTab: !0,
                        smoothScroll: !1,
                        style: { width: "100%" },
                        title: "Discord",
                        variant: "gBo37P4ea",
                        width: "100%",
                      }),
                    }),
                    e(t, {
                      className: "framer-1nhwkj6-container",
                      children: e(r, {
                        fontSize: 18,
                        height: "100%",
                        id: "stLEWBqx7",
                        layoutId: "stLEWBqx7",
                        link: "https://twitter.com/dynexcoin",
                        newTab: !0,
                        smoothScroll: !1,
                        style: { width: "100%" },
                        title: "Twitter",
                        variant: "gBo37P4ea",
                        width: "100%",
                      }),
                    }),
                    e(t, {
                      className: "framer-xrgysc-container",
                      children: e(r, {
                        fontSize: 18,
                        height: "100%",
                        id: "oHXdUs3H1",
                        layoutId: "oHXdUs3H1",
                        link: "https://t.me/Dynexnews",
                        newTab: !0,
                        smoothScroll: !1,
                        style: { width: "100%" },
                        title: "Telegram \u2013 Dynex News (EN)",
                        variant: "gBo37P4ea",
                        width: "100%",
                      }),
                    }),
                    e(t, {
                      className: "framer-kqs1c-container",
                      children: e(r, {
                        fontSize: 18,
                        height: "100%",
                        id: "NAOPoWf1Y",
                        layoutId: "NAOPoWf1Y",
                        link: "https://t.me/dynexpricediscussion",
                        newTab: !0,
                        smoothScroll: !1,
                        style: { width: "100%" },
                        title: "Telegram \u2013 Dynex Price Discussion (EN)",
                        variant: "gBo37P4ea",
                        width: "100%",
                      }),
                    }),
                    e(t, {
                      className: "framer-h0c70w-container",
                      children: e(r, {
                        fontSize: 18,
                        height: "100%",
                        id: "Yb0SpVVo8",
                        layoutId: "Yb0SpVVo8",
                        link: "https://t.me/dnxmining",
                        newTab: !0,
                        smoothScroll: !1,
                        style: { width: "100%" },
                        title: "Telegram \u2013 Dynex Mining Discussion (EN)",
                        variant: "gBo37P4ea",
                        width: "100%",
                      }),
                    }),
                    e(t, {
                      className: "framer-erw3jv-container",
                      children: e(r, {
                        fontSize: 18,
                        height: "100%",
                        id: "dOFUjL7dJ",
                        layoutId: "dOFUjL7dJ",
                        link: "https://t.me/dynexChinese",
                        newTab: !0,
                        smoothScroll: !1,
                        style: { width: "100%" },
                        title: "Telegram \u2013 Dynex Chinese",
                        variant: "gBo37P4ea",
                        width: "100%",
                      }),
                    }),
                    e(t, {
                      className: "framer-k8d8ng-container",
                      children: e(r, {
                        fontSize: 18,
                        height: "100%",
                        id: "jJh9pqwNU",
                        layoutId: "jJh9pqwNU",
                        link: "https://t.me/DynexTurkiye",
                        newTab: !0,
                        smoothScroll: !1,
                        style: { width: "100%" },
                        title: "Telegram \u2013 Dynex Turkey",
                        variant: "gBo37P4ea",
                        width: "100%",
                      }),
                    }),
                    e(t, {
                      className: "framer-vv5owv-container",
                      children: e(r, {
                        fontSize: 18,
                        height: "100%",
                        id: "lKGzsTMSB",
                        layoutId: "lKGzsTMSB",
                        link: "https://t.me/dynexrussian",
                        newTab: !0,
                        smoothScroll: !1,
                        style: { width: "100%" },
                        title: "Telegram \u2013 Dynex Dynex Russian",
                        variant: "gBo37P4ea",
                        width: "100%",
                      }),
                    }),
                    e(t, {
                      className: "framer-1rm62d4-container",
                      children: e(r, {
                        fontSize: 18,
                        height: "100%",
                        id: "oD9H4XAHy",
                        layoutId: "oD9H4XAHy",
                        link: "https://t.me/DynexPersian",
                        newTab: !0,
                        smoothScroll: !1,
                        style: { width: "100%" },
                        title: "Telegram \u2013 Dynex Persian",
                        variant: "gBo37P4ea",
                        width: "100%",
                      }),
                    }),
                    e(t, {
                      className: "framer-1mb7kvn-container",
                      children: e(r, {
                        fontSize: 18,
                        height: "100%",
                        id: "XOqjpuVTC",
                        layoutId: "XOqjpuVTC",
                        link: "https://t.me/dynex_chinese_group",
                        newTab: !0,
                        smoothScroll: !1,
                        style: { width: "100%" },
                        title: "TELEGRAM - Dynex Chinese (community)",
                        variant: "gBo37P4ea",
                        width: "100%",
                      }),
                    }),
                    e(t, {
                      className: "framer-12e4yuw-container",
                      children: e(r, {
                        fontSize: 18,
                        height: "100%",
                        id: "c4kN46abl",
                        layoutId: "c4kN46abl",
                        link: "https://dynexwallet.dynexcoin.org/public_html/",
                        newTab: !0,
                        smoothScroll: !1,
                        style: { width: "100%" },
                        title: "Dynex Mobile Web Wallet (beta)",
                        variant: "gBo37P4ea",
                        width: "100%",
                      }),
                    }),
                    e(t, {
                      className: "framer-98f8tr-container",
                      children: e(r, {
                        fontSize: 18,
                        height: "100%",
                        id: "YRKVzIb1o",
                        layoutId: "YRKVzIb1o",
                        link: "https://blockexplorer.dynexcoin.org",
                        newTab: !0,
                        smoothScroll: !1,
                        style: { width: "100%" },
                        title: "Dynex Block Explorer",
                        variant: "gBo37P4ea",
                        width: "100%",
                      }),
                    }),
                    e(t, {
                      className: "framer-1g1o3lr-container",
                      children: e(r, {
                        fontSize: 18,
                        height: "100%",
                        id: "yIiwdKehh",
                        layoutId: "yIiwdKehh",
                        link: "https://dynexfaq.notion.site/dynexfaq/Dynex-Community-FAQ-849ec5c3bf6248f6b7553815d8299740",
                        newTab: !0,
                        smoothScroll: !1,
                        style: { width: "100%" },
                        title: "FAQS (COMMUNITY CURATED)",
                        variant: "gBo37P4ea",
                        width: "100%",
                      }),
                    }),
                    e(t, {
                      className: "framer-1tvnkng-container",
                      children: e(r, {
                        fontSize: 18,
                        height: "100%",
                        id: "tKciJlRcV",
                        layoutId: "tKciJlRcV",
                        link: "https://github.com/dynexcoin",
                        newTab: !0,
                        smoothScroll: !1,
                        style: { width: "100%" },
                        title: "Dynex Github",
                        variant: "gBo37P4ea",
                        width: "100%",
                      }),
                    }),
                    e(t, {
                      className: "framer-vtug8s-container",
                      children: e(r, {
                        fontSize: 18,
                        height: "100%",
                        id: "iLwTUV2RH",
                        layoutId: "iLwTUV2RH",
                        link: "https://github.com/dynexcoin/DynexSDK/wiki",
                        newTab: !0,
                        smoothScroll: !1,
                        style: { width: "100%" },
                        title: "Dynex SDK WIKI",
                        variant: "gBo37P4ea",
                        width: "100%",
                      }),
                    }),
                    e(t, {
                      className: "framer-ejwdv6-container",
                      children: e(r, {
                        fontSize: 18,
                        height: "100%",
                        id: "PK1g82kvA",
                        layoutId: "PK1g82kvA",
                        link: "https://docs.dynexcoin.org",
                        newTab: !0,
                        smoothScroll: !1,
                        style: { width: "100%" },
                        title: "Dynex SDK Documentation",
                        variant: "gBo37P4ea",
                        width: "100%",
                      }),
                    }),
                  ],
                }),
                m("header", {
                  className: "framer-i8ugdj",
                  "data-framer-name": "Header",
                  name: "Header",
                  children: [
                    O() &&
                      e("div", { className: "framer-djsgxf hidden-1ksgj1h" }),
                    e(t, {
                      className: "framer-7cecku-container",
                      children: e(c, {
                        breakpoint: f,
                        overrides: {
                          Llc6Pldp4: { variant: "CP4euYBms" },
                          uneZsfNuF: { variant: "aK_4VtDvt" },
                        },
                        children: e(b, {
                          height: "100%",
                          id: "QZdLWFzvG",
                          layoutId: "QZdLWFzvG",
                          style: { width: "100%" },
                          variant: "lKW5sKZWt",
                          width: "100%",
                        }),
                      }),
                    }),
                  ],
                }),
                e(c, {
                  breakpoint: f,
                  overrides: {
                    Llc6Pldp4: {
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 1384,
                        intrinsicWidth: 5104,
                        pixelHeight: 1384,
                        pixelWidth: 5104,
                        sizes: "calc(100vw + 810px)",
                        src: "https://framerusercontent.com/images/ESZPbyHyGeJ6veiCv3wIKEb0bWU.png",
                        srcSet:
                          "https://framerusercontent.com/images/ESZPbyHyGeJ6veiCv3wIKEb0bWU.png?scale-down-to=512 512w, https://framerusercontent.com/images/ESZPbyHyGeJ6veiCv3wIKEb0bWU.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/ESZPbyHyGeJ6veiCv3wIKEb0bWU.png?scale-down-to=2048 2048w, https://framerusercontent.com/images/ESZPbyHyGeJ6veiCv3wIKEb0bWU.png?scale-down-to=4096 4096w, https://framerusercontent.com/images/ESZPbyHyGeJ6veiCv3wIKEb0bWU.png 5104w",
                      },
                    },
                  },
                  children: e(H, {
                    background: {
                      alt: "",
                      fit: "fill",
                      intrinsicHeight: 1384,
                      intrinsicWidth: 5104,
                      pixelHeight: 1384,
                      pixelWidth: 5104,
                      sizes: "calc(100vw + 976px)",
                      src: "https://framerusercontent.com/images/ESZPbyHyGeJ6veiCv3wIKEb0bWU.png",
                      srcSet:
                        "https://framerusercontent.com/images/ESZPbyHyGeJ6veiCv3wIKEb0bWU.png?scale-down-to=512 512w, https://framerusercontent.com/images/ESZPbyHyGeJ6veiCv3wIKEb0bWU.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/ESZPbyHyGeJ6veiCv3wIKEb0bWU.png?scale-down-to=2048 2048w, https://framerusercontent.com/images/ESZPbyHyGeJ6veiCv3wIKEb0bWU.png?scale-down-to=4096 4096w, https://framerusercontent.com/images/ESZPbyHyGeJ6veiCv3wIKEb0bWU.png 5104w",
                    },
                    className: "framer-1kqqetl",
                    "data-framer-name": "GradientBG",
                    name: "GradientBG",
                  }),
                }),
              ],
            }),
            e("div", { id: "overlay" }),
          ],
        }),
      }),
    });
  }),
  me = [
    '.framer-tvn5v [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    `.${N.bodyClassName}-framer-tvn5v { background: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, rgb(7, 7, 19)) /* {"name":"Dark BG"} */; }`,
    ".framer-tvn5v .framer-cj5nun { display: block; }",
    ".framer-tvn5v .framer-u32exf { align-content: center; align-items: center; background-color: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, #070713); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1024px; }",
    ".framer-tvn5v .framer-1wtlg19-container { flex: none; height: auto; left: 50%; max-width: 1260px; position: absolute; top: 32px; transform: translateX(-50%); width: 100%; z-index: 10; }",
    ".framer-tvn5v .framer-31bz89 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 60vh; justify-content: center; overflow: hidden; padding: 128px 128px 128px 128px; position: relative; width: 100%; z-index: 2; }",
    ".framer-tvn5v .framer-1k27ibh, .framer-tvn5v .framer-djsgxf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; min-height: 40px; min-width: 110px; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-tvn5v .framer-112u8jt { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 100%; position: relative; white-space: pre-wrap; width: auto; word-break: break-word; word-wrap: break-word; }",
    ".framer-tvn5v .framer-s12x2d { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 600px; overflow: hidden; position: relative; transform: perspective(500px); white-space: pre-wrap; width: 600px; word-break: break-word; word-wrap: break-word; z-index: 1; }",
    ".framer-tvn5v .framer-1n7owqo { background-color: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, #070713); display: grid; flex: none; gap: 32px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(3, minmax(200px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); height: min-content; justify-content: center; max-width: 1260px; overflow: hidden; padding: 128px 48px 0px 48px; position: relative; width: 100%; z-index: 3; }",
    ".framer-tvn5v .framer-yjfe91-container, .framer-tvn5v .framer-14xpjos-container, .framer-tvn5v .framer-121ka2u-container, .framer-tvn5v .framer-s3lfki-container, .framer-tvn5v .framer-1nhwkj6-container, .framer-tvn5v .framer-xrgysc-container, .framer-tvn5v .framer-kqs1c-container, .framer-tvn5v .framer-h0c70w-container, .framer-tvn5v .framer-erw3jv-container, .framer-tvn5v .framer-k8d8ng-container, .framer-tvn5v .framer-vv5owv-container, .framer-tvn5v .framer-1rm62d4-container, .framer-tvn5v .framer-1mb7kvn-container, .framer-tvn5v .framer-12e4yuw-container, .framer-tvn5v .framer-98f8tr-container, .framer-tvn5v .framer-1g1o3lr-container, .framer-tvn5v .framer-1tvnkng-container, .framer-tvn5v .framer-vtug8s-container, .framer-tvn5v .framer-ejwdv6-container { align-self: start; flex: none; height: 100%; justify-self: start; position: relative; width: 100%; }",
    ".framer-tvn5v .framer-i8ugdj { align-content: center; align-items: center; background-color: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, #070713); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; max-width: 1260px; overflow: hidden; padding: 40px 40px 40px 40px; position: relative; width: 100%; }",
    ".framer-tvn5v .framer-7cecku-container { flex: none; height: auto; position: relative; width: 100%; }",
    ".framer-tvn5v .framer-1kqqetl { aspect-ratio: 4 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 500px); left: -488px; overflow: hidden; position: absolute; right: -488px; top: 0px; z-index: 0; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-tvn5v .framer-u32exf, .framer-tvn5v .framer-31bz89, .framer-tvn5v .framer-1k27ibh, .framer-tvn5v .framer-i8ugdj, .framer-tvn5v .framer-djsgxf { gap: 0px; } .framer-tvn5v .framer-u32exf > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-tvn5v .framer-u32exf > :first-child, .framer-tvn5v .framer-31bz89 > :first-child, .framer-tvn5v .framer-i8ugdj > :first-child { margin-top: 0px; } .framer-tvn5v .framer-u32exf > :last-child, .framer-tvn5v .framer-31bz89 > :last-child, .framer-tvn5v .framer-i8ugdj > :last-child { margin-bottom: 0px; } .framer-tvn5v .framer-31bz89 > *, .framer-tvn5v .framer-i8ugdj > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-tvn5v .framer-1k27ibh > *, .framer-tvn5v .framer-djsgxf > * { margin: 0px; margin-left: calc(15px / 2); margin-right: calc(15px / 2); } .framer-tvn5v .framer-1k27ibh > :first-child, .framer-tvn5v .framer-djsgxf > :first-child { margin-left: 0px; } .framer-tvn5v .framer-1k27ibh > :last-child, .framer-tvn5v .framer-djsgxf > :last-child { margin-right: 0px; } }",
    "@media (min-width: 1024px) { .framer-tvn5v .hidden-u32exf { display: none !important; } }",
    `@media (min-width: 810px) and (max-width: 1023px) { .framer-tvn5v .hidden-1dyo272 { display: none !important; } .${N.bodyClassName}-framer-tvn5v { background: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, rgb(7, 7, 19)) /* {"name":"Dark BG"} */; } .framer-tvn5v .framer-u32exf { width: 810px; } .framer-tvn5v .framer-1n7owqo { grid-template-columns: repeat(2, minmax(200px, 1fr)); } .framer-tvn5v .framer-1kqqetl { height: var(--framer-aspect-ratio-supported, 447px); }}`,
    `@media (max-width: 809px) { .framer-tvn5v .hidden-1ksgj1h { display: none !important; } .${N.bodyClassName}-framer-tvn5v { background: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, rgb(7, 7, 19)) /* {"name":"Dark BG"} */; } .framer-tvn5v .framer-u32exf { width: 390px; } .framer-tvn5v .framer-1wtlg19-container { top: 0px; } .framer-tvn5v .framer-31bz89 { padding: 128px 24px 128px 24px; } .framer-tvn5v .framer-112u8jt { width: 100%; } .framer-tvn5v .framer-s12x2d { max-width: unset; width: 100%; } .framer-tvn5v .framer-1n7owqo { grid-template-columns: repeat(1, minmax(200px, 1fr)); padding: 24px 24px 0px 24px; } .framer-tvn5v .framer-i8ugdj { padding: 24px 24px 24px 24px; } .framer-tvn5v .framer-1kqqetl { height: var(--framer-aspect-ratio-supported, 300px); left: -405px; right: -405px; }}`,
    ...R,
    ...K,
  ],
  p = B(le, me, "framer-tvn5v"),
  ze = p;
p.displayName = "Linktree";
p.defaultProps = { height: 2540, width: 1024 };
G(p, [...$, ...ee, ...te, ...V, ...W]);
var Ie = {
  exports: {
    default: {
      type: "reactComponent",
      name: "Framers6YWe3VcZ",
      slots: [],
      annotations: {
        framerImmutableVariables: "true",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"uneZsfNuF":{"layout":["fixed","auto"]},"Llc6Pldp4":{"layout":["fixed","auto"]}}}',
        framerIntrinsicHeight: "2540",
        framerContractVersion: "1",
        framerIntrinsicWidth: "1024",
        framerResponsiveScreen: "",
      },
    },
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    __FramerMetadata__: { type: "variable" },
  },
};
export { Ie as __FramerMetadata__, ze as default };
//# sourceMappingURL=V2sO1XE8_NoHoGNC1jGlROR3uOWnW3_JnkYTFX8aekw.6DR7GVU4.mjs.map

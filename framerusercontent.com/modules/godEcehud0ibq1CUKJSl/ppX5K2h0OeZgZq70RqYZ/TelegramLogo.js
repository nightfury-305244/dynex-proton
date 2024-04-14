let Component;
var TelegramLogo_default = (React) => {
  if (!Component) {
    const weights = /* @__PURE__ */ new Map([
      [
        "bold",
        /* @__PURE__ */ React.createElement(
          React.Fragment,
          null,
          /* @__PURE__ */ React.createElement("path", {
            d: "M239.49,23.16a13,13,0,0,0-13.23-2.26L23.6,100.21a18.22,18.22,0,0,0,3.12,34.86L76,144.74V200a20,20,0,0,0,34.4,13.88l22.67-23.51L170.35,223a20,20,0,0,0,32.7-10.54L243.67,35.91A13,13,0,0,0,239.49,23.16ZM147.41,77.52,85.22,122.09l-34.43-6.75ZM100,190.06V161.35l15,13.15Zm81.16,10.52-73.88-64.77L213.59,59.63Z",
          })
        ),
      ],
      [
        "duotone",
        /* @__PURE__ */ React.createElement(
          React.Fragment,
          null,
          /* @__PURE__ */ React.createElement("path", {
            d: "M88,200V134.87l44.37,38.91-30.61,31.76A8,8,0,0,1,88,200ZM230.63,32.07,28,111.38A6.23,6.23,0,0,0,29,123.3l59,11.57L232,33.22A1,1,0,0,0,230.63,32.07Z",
            opacity: "0.2",
          }),
          /* @__PURE__ */ React.createElement("path", {
            d: "M236.88,26.19a9,9,0,0,0-9.16-1.57L25.06,103.93a14.22,14.22,0,0,0,2.43,27.21L80,141.45V200a15.92,15.92,0,0,0,10,14.83,15.91,15.91,0,0,0,17.51-3.73l25.32-26.26L173,220a15.88,15.88,0,0,0,10.51,4,16.3,16.3,0,0,0,5-.79,15.85,15.85,0,0,0,10.67-11.63L239.77,35A9,9,0,0,0,236.88,26.19Zm-61.14,36L86.15,126.35l-49.61-9.73ZM96,200V152.52l24.79,21.74Zm87.53,8L100.85,135.5l119-85.29Z",
          })
        ),
      ],
      [
        "fill",
        /* @__PURE__ */ React.createElement(
          React.Fragment,
          null,
          /* @__PURE__ */ React.createElement("path", {
            d: "M236.88,26.19a9,9,0,0,0-9.16-1.57L25.06,103.93a14.22,14.22,0,0,0,2.43,27.21L80,141.45V200a15.92,15.92,0,0,0,10,14.83,15.91,15.91,0,0,0,17.51-3.73l25.32-26.26L173,220a15.88,15.88,0,0,0,10.51,4,16.3,16.3,0,0,0,5-.79,15.85,15.85,0,0,0,10.67-11.63L239.77,35A9,9,0,0,0,236.88,26.19ZM183.53,208,100.85,135.5l119-85.29Z",
          })
        ),
      ],
      [
        "light",
        /* @__PURE__ */ React.createElement(
          React.Fragment,
          null,
          /* @__PURE__ */ React.createElement("path", {
            d: "M235.57,27.7a7,7,0,0,0-7.13-1.22L25.78,105.79a12.23,12.23,0,0,0,2.1,23.39L82,139.81V200a14,14,0,0,0,24.08,9.71l26.64-27.63,41.58,36.45a13.9,13.9,0,0,0,9.2,3.49,14.33,14.33,0,0,0,4.36-.69,13.86,13.86,0,0,0,9.34-10.17L237.82,34.57A7,7,0,0,0,235.57,27.7ZM30.05,117.37h0a.46.46,0,0,1,0-.32.51.51,0,0,1,.15-.08L189.91,54.45l-103.3,74L30.2,117.41Zm67.39,84A2,2,0,0,1,94,200V148.11l29.69,26Zm88.07,7.08a1.93,1.93,0,0,1-1.34,1.44,2,2,0,0,1-2-.4L97.64,135.34,223,45.5Z",
          })
        ),
      ],
      [
        "regular",
        /* @__PURE__ */ React.createElement(
          React.Fragment,
          null,
          /* @__PURE__ */ React.createElement("path", {
            d: "M236.88,26.19a9,9,0,0,0-9.16-1.57L25.06,103.93a14.22,14.22,0,0,0,2.43,27.21L80,141.45V200a15.92,15.92,0,0,0,10,14.83,15.91,15.91,0,0,0,17.51-3.73l25.32-26.26L173,220a15.88,15.88,0,0,0,10.51,4,16.3,16.3,0,0,0,5-.79,15.85,15.85,0,0,0,10.67-11.63L239.77,35A9,9,0,0,0,236.88,26.19Zm-61.14,36L86.15,126.35l-49.6-9.73ZM96,200V152.52l24.79,21.74Zm87.53,8L100.85,135.5l119-85.29Z",
          })
        ),
      ],
      [
        "thin",
        /* @__PURE__ */ React.createElement(
          React.Fragment,
          null,
          /* @__PURE__ */ React.createElement("path", {
            d: "M234.27,29.22a5,5,0,0,0-5.1-.87L26.51,107.66a10.22,10.22,0,0,0,1.75,19.56L84,138.16V200a12,12,0,0,0,7.51,11.13A12.1,12.1,0,0,0,96,212a12,12,0,0,0,8.62-3.68l28-29,43,37.71a12,12,0,0,0,7.89,3,12.47,12.47,0,0,0,3.74-.59,11.87,11.87,0,0,0,8-8.72L235.87,34.12A5,5,0,0,0,234.27,29.22ZM28,117.38a2.13,2.13,0,0,1,1.42-2.27L204.07,46.76l-117,83.85L29.81,119.37A2.12,2.12,0,0,1,28,117.38Zm70.87,85.38A4,4,0,0,1,92,200V143.7L126.58,174Zm88.58,6.14a4,4,0,0,1-6.57,2.09L94.43,135.18,226.13,40.8Z",
          })
        ),
      ],
    ]);
    const TelegramLogo = React.forwardRef((props, ref) =>
      /* @__PURE__ */ React.createElement(
        "g",
        { ref, ...props },
        weights.get(props.weight)
      )
    );
    TelegramLogo.displayName = "TelegramLogo";
    Component = TelegramLogo;
  }
  return Component;
};
const __FramerMetadata__ = {
  exports: {
    default: {
      type: "reactComponent",
      slots: [],
      annotations: { framerContractVersion: "1" },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
export { __FramerMetadata__, TelegramLogo_default as default };

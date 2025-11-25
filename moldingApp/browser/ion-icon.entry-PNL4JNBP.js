import {
  Host,
  getElement,
  getName,
  getUrl,
  h,
  inheritAttributes,
  isRTL,
  isStr,
  registerInstance
} from "./chunk-R4H3LHE5.js";
import "./chunk-B3DYXOBH.js";

// node_modules/ionicons/dist/esm/ion-icon.entry.js
var validateContent = (svgContent) => {
  const div = document.createElement("div");
  div.innerHTML = svgContent;
  for (let i = div.childNodes.length - 1; i >= 0; i--) {
    if (div.childNodes[i].nodeName.toLowerCase() !== "svg") {
      div.removeChild(div.childNodes[i]);
    }
  }
  const svgElm = div.firstElementChild;
  if (svgElm && svgElm.nodeName.toLowerCase() === "svg") {
    const svgClass = svgElm.getAttribute("class") || "";
    svgElm.setAttribute("class", (svgClass + " s-ion-icon").trim());
    if (isValid(svgElm)) {
      return div.innerHTML;
    }
  }
  return "";
};
var isValid = (elm) => {
  if (elm.nodeType === 1) {
    if (elm.nodeName.toLowerCase() === "script") {
      return false;
    }
    for (let i = 0; i < elm.attributes.length; i++) {
      const name = elm.attributes[i].name;
      if (isStr(name) && name.toLowerCase().indexOf("on") === 0) {
        return false;
      }
    }
    for (let i = 0; i < elm.childNodes.length; i++) {
      if (!isValid(elm.childNodes[i])) {
        return false;
      }
    }
  }
  return true;
};
var isSvgDataUrl = (url) => url.startsWith("data:image/svg+xml");
var isEncodedDataUrl = (url) => url.indexOf(";utf8,") !== -1;
var ioniconContent = /* @__PURE__ */ new Map();
var requests = /* @__PURE__ */ new Map();
var parser;
function safeFallback(url) {
  const svg = "";
  ioniconContent.set(url, svg);
  return svg;
}
var getSvgContent = (url, sanitize) => {
  const req = requests.get(url);
  if (req) {
    return req;
  }
  if (typeof fetch !== "undefined" && typeof document !== "undefined") {
    if (isSvgDataUrl(url) && isEncodedDataUrl(url)) {
      return Promise.resolve(getSvgByUrl(url));
    }
    return fetchSvg(url, sanitize);
  }
  return Promise.resolve(safeFallback(url));
};
function getSvgByUrl(url) {
  if (!parser) {
    parser = new DOMParser();
  }
  const doc = parser.parseFromString(url, "text/html");
  const svg = doc.querySelector("svg");
  if (svg) {
    ioniconContent.set(url, svg.outerHTML);
    return svg.outerHTML;
  }
  throw new Error(`Could not parse svg from ${url}`);
}
function fetchSvg(url, sanitize) {
  const req = fetch(url).then((rsp) => {
    return rsp.text().then((svgContent) => {
      if (svgContent && sanitize !== false) {
        svgContent = validateContent(svgContent);
      }
      const svg = svgContent || "";
      ioniconContent.set(url, svg);
      return svg;
    }).catch(() => safeFallback(url));
  }).catch(() => safeFallback(url));
  requests.set(url, req);
  return req;
}
var iconCss = ":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}@supports (background: -webkit-named-image(i)){:host(.icon-rtl) .icon-inner{transform:scaleX(-1)}}@supports not selector(:dir(rtl)) and selector(:host-context([dir='rtl'])){:host(.icon-rtl) .icon-inner{transform:scaleX(-1)}}:host(.flip-rtl):host-context([dir='rtl']) .icon-inner{transform:scaleX(-1)}@supports selector(:dir(rtl)){:host(.flip-rtl:dir(rtl)) .icon-inner{transform:scaleX(-1)}:host(.flip-rtl:dir(ltr)) .icon-inner{transform:scaleX(1)}}:host(.icon-small){font-size:1.125rem !important}:host(.icon-large){font-size:2rem !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}";
var Icon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.iconName = null;
    this.inheritedAttributes = {};
    this.didLoadIcon = false;
    this.isVisible = false;
    this.mode = getIonMode();
    this.lazy = false;
    this.sanitize = true;
  }
  componentWillLoad() {
    this.inheritedAttributes = inheritAttributes(this.el, ["aria-label"]);
  }
  connectedCallback() {
    this.waitUntilVisible(this.el, "50px", () => {
      this.isVisible = true;
      this.loadIcon();
    });
  }
  /**
   * Loads the icon after the component has finished rendering.
   */
  componentDidLoad() {
    if (!this.didLoadIcon) {
      this.loadIcon();
    }
  }
  /**
   * Disconnect the IntersectionObserver.
   */
  disconnectedCallback() {
    if (this.io) {
      this.io.disconnect();
      this.io = void 0;
    }
  }
  /**
   * Wait until the icon is visible in the viewport.
   * @param el - The element to observe.
   * @param rootMargin - The root margin of the observer.
   * @param cb - The callback to call when the element is visible.
   */
  waitUntilVisible(el, rootMargin, cb) {
    const hasIntersectionObserverSupport = Boolean(this.lazy && typeof window !== "undefined" && window.IntersectionObserver);
    if (!hasIntersectionObserverSupport) {
      return cb();
    }
    const io = this.io = new window.IntersectionObserver((data) => {
      if (data[0].isIntersecting) {
        io.disconnect();
        this.io = void 0;
        cb();
      }
    }, {
      rootMargin
    });
    io.observe(el);
  }
  /**
   * Watch for changes to the icon name, src, icon, ios, or md properties.
   * When a change is detected, the icon will be loaded.
   */
  loadIcon() {
    if (this.isVisible) {
      const url = getUrl(this);
      if (url) {
        if (ioniconContent.has(url)) {
          this.svgContent = ioniconContent.get(url);
        } else {
          getSvgContent(url, this.sanitize).then(() => this.svgContent = ioniconContent.get(url));
        }
        this.didLoadIcon = true;
      }
    }
    this.iconName = getName(this.name, this.icon, this.mode, this.ios, this.md);
  }
  render() {
    const {
      flipRtl,
      iconName,
      inheritedAttributes,
      el
    } = this;
    const mode = this.mode || "md";
    const shouldAutoFlip = iconName ? (iconName.includes("arrow") || iconName.includes("chevron")) && flipRtl !== false : false;
    const shouldBeFlippable = flipRtl || shouldAutoFlip;
    return h(Host, Object.assign({
      key: "0578c899781ca145dd8205acd9670af39b57cf2e",
      role: "img",
      class: Object.assign(Object.assign({
        [mode]: true
      }, createColorClasses(this.color)), {
        [`icon-${this.size}`]: !!this.size,
        "flip-rtl": shouldBeFlippable,
        "icon-rtl": shouldBeFlippable && isRTL(el)
      })
    }, inheritedAttributes), this.svgContent ? h("div", {
      class: "icon-inner",
      innerHTML: this.svgContent
    }) : h("div", {
      class: "icon-inner"
    }));
  }
  static get assetsDirs() {
    return ["svg"];
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "name": ["loadIcon"],
      "src": ["loadIcon"],
      "icon": ["loadIcon"],
      "ios": ["loadIcon"],
      "md": ["loadIcon"]
    };
  }
};
var getIonMode = () => typeof document !== "undefined" && document.documentElement.getAttribute("mode") || "md";
var createColorClasses = (color) => {
  return color ? {
    "ion-color": true,
    [`ion-color-${color}`]: true
  } : null;
};
Icon.style = iconCss;
export {
  Icon as ion_icon
};
//# sourceMappingURL=ion-icon.entry-PNL4JNBP.js.map

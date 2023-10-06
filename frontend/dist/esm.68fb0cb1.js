// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"5L4Mo":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "105f86fe68fb0cb1";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"7md93":[function(require,module,exports) {
var Refresh = require("e3daedbd352fccbb");
var ErrorOverlay = require("5ba6fd152f7c7303");
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};
ErrorOverlay.setEditorHandler(function editorHandler(errorLocation) {
    let file = `${errorLocation.fileName}:${errorLocation.lineNumber || 1}:${errorLocation.colNumber || 1}`;
    fetch(`/__parcel_launch_editor?file=${encodeURIComponent(file)}`);
});
ErrorOverlay.startReportingRuntimeErrors({
    onError: function() {}
});
window.addEventListener("parcelhmraccept", ()=>{
    ErrorOverlay.dismissRuntimeErrors();
});

},{"e3daedbd352fccbb":"6LKJy","5ba6fd152f7c7303":"hpC8F"}],"58BsC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Calendar", ()=>(0, _calendarJsDefault.default));
parcelHelpers.export(exports, "CenturyView", ()=>(0, _centuryViewJsDefault.default));
parcelHelpers.export(exports, "DecadeView", ()=>(0, _decadeViewJsDefault.default));
parcelHelpers.export(exports, "MonthView", ()=>(0, _monthViewJsDefault.default));
parcelHelpers.export(exports, "Navigation", ()=>(0, _navigationJsDefault.default));
parcelHelpers.export(exports, "YearView", ()=>(0, _yearViewJsDefault.default));
var _calendarJs = require("./Calendar.js");
var _calendarJsDefault = parcelHelpers.interopDefault(_calendarJs);
var _centuryViewJs = require("./CenturyView.js");
var _centuryViewJsDefault = parcelHelpers.interopDefault(_centuryViewJs);
var _decadeViewJs = require("./DecadeView.js");
var _decadeViewJsDefault = parcelHelpers.interopDefault(_decadeViewJs);
var _monthViewJs = require("./MonthView.js");
var _monthViewJsDefault = parcelHelpers.interopDefault(_monthViewJs);
var _navigationJs = require("./Calendar/Navigation.js");
var _navigationJsDefault = parcelHelpers.interopDefault(_navigationJs);
var _yearViewJs = require("./YearView.js");
var _yearViewJsDefault = parcelHelpers.interopDefault(_yearViewJs);
exports.default = (0, _calendarJsDefault.default);

},{"./Calendar.js":"bWqSm","./CenturyView.js":"hKv9C","./DecadeView.js":"j3o41","./MonthView.js":"hGceO","./Calendar/Navigation.js":"46ifv","./YearView.js":"j4meB","@parcel/transformer-js/src/esmodule-helpers.js":"1OlAz"}],"bWqSm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
var _clsx = require("clsx");
var _clsxDefault = parcelHelpers.interopDefault(_clsx);
var _navigationJs = require("./Calendar/Navigation.js");
var _navigationJsDefault = parcelHelpers.interopDefault(_navigationJs);
var _centuryViewJs = require("./CenturyView.js");
var _centuryViewJsDefault = parcelHelpers.interopDefault(_centuryViewJs);
var _decadeViewJs = require("./DecadeView.js");
var _decadeViewJsDefault = parcelHelpers.interopDefault(_decadeViewJs);
var _yearViewJs = require("./YearView.js");
var _yearViewJsDefault = parcelHelpers.interopDefault(_yearViewJs);
var _monthViewJs = require("./MonthView.js");
var _monthViewJsDefault = parcelHelpers.interopDefault(_monthViewJs);
var _datesJs = require("./shared/dates.js");
var _propTypesJs = require("./shared/propTypes.js");
var _utilsJs = require("./shared/utils.js");
"use client";
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var baseClassName = "react-calendar";
var allViews = [
    "century",
    "decade",
    "year",
    "month"
];
var allValueTypes = [
    "decade",
    "year",
    "month",
    "day"
];
var defaultMinDate = new Date();
defaultMinDate.setFullYear(1, 0, 1);
defaultMinDate.setHours(0, 0, 0, 0);
var defaultMaxDate = new Date(8.64e15);
function toDate(value) {
    if (value instanceof Date) return value;
    return new Date(value);
}
/**
 * Returns views array with disallowed values cut off.
 */ function getLimitedViews(minDetail, maxDetail) {
    return allViews.slice(allViews.indexOf(minDetail), allViews.indexOf(maxDetail) + 1);
}
/**
 * Determines whether a given view is allowed with currently applied settings.
 */ function isViewAllowed(view, minDetail, maxDetail) {
    var views = getLimitedViews(minDetail, maxDetail);
    return views.indexOf(view) !== -1;
}
/**
 * Gets either provided view if allowed by minDetail and maxDetail, or gets
 * the default view if not allowed.
 */ function getView(view, minDetail, maxDetail) {
    if (!view) return maxDetail;
    if (isViewAllowed(view, minDetail, maxDetail)) return view;
    return maxDetail;
}
/**
 * Returns value type that can be returned with currently applied settings.
 */ function getValueType(view) {
    var index = allViews.indexOf(view);
    return allValueTypes[index];
}
function getValue(value, index) {
    var rawValue = Array.isArray(value) ? value[index] : value;
    if (!rawValue) return null;
    var valueDate = toDate(rawValue);
    if (isNaN(valueDate.getTime())) throw new Error("Invalid date: ".concat(value));
    return valueDate;
}
function getDetailValue(_a, index) {
    var value = _a.value, minDate = _a.minDate, maxDate = _a.maxDate, maxDetail = _a.maxDetail;
    var valuePiece = getValue(value, index);
    if (!valuePiece) return null;
    var valueType = getValueType(maxDetail);
    var detailValueFrom = function() {
        switch(index){
            case 0:
                return (0, _datesJs.getBegin)(valueType, valuePiece);
            case 1:
                return (0, _datesJs.getEnd)(valueType, valuePiece);
            default:
                throw new Error("Invalid index value: ".concat(index));
        }
    }();
    return (0, _utilsJs.between)(detailValueFrom, minDate, maxDate);
}
var getDetailValueFrom = function(args) {
    return getDetailValue(args, 0);
};
var getDetailValueTo = function(args) {
    return getDetailValue(args, 1);
};
var getDetailValueArray = function(args) {
    return [
        getDetailValueFrom,
        getDetailValueTo
    ].map(function(fn) {
        return fn(args);
    });
};
function getActiveStartDate(_a) {
    var maxDate = _a.maxDate, maxDetail = _a.maxDetail, minDate = _a.minDate, minDetail = _a.minDetail, value = _a.value, view = _a.view;
    var rangeType = getView(view, minDetail, maxDetail);
    var valueFrom = getDetailValueFrom({
        value: value,
        minDate: minDate,
        maxDate: maxDate,
        maxDetail: maxDetail
    }) || new Date();
    return (0, _datesJs.getBegin)(rangeType, valueFrom);
}
function getInitialActiveStartDate(_a) {
    var activeStartDate = _a.activeStartDate, defaultActiveStartDate = _a.defaultActiveStartDate, defaultValue = _a.defaultValue, defaultView = _a.defaultView, maxDate = _a.maxDate, maxDetail = _a.maxDetail, minDate = _a.minDate, minDetail = _a.minDetail, value = _a.value, view = _a.view;
    var rangeType = getView(view, minDetail, maxDetail);
    var valueFrom = activeStartDate || defaultActiveStartDate;
    if (valueFrom) return (0, _datesJs.getBegin)(rangeType, valueFrom);
    return getActiveStartDate({
        maxDate: maxDate,
        maxDetail: maxDetail,
        minDate: minDate,
        minDetail: minDetail,
        value: value || defaultValue,
        view: view || defaultView
    });
}
function getIsSingleValue(value) {
    return value && (!Array.isArray(value) || value.length === 1);
}
function areDatesEqual(date1, date2) {
    return date1 instanceof Date && date2 instanceof Date && date1.getTime() === date2.getTime();
}
var Calendar = (0, _react.forwardRef)(function Calendar(props, ref) {
    var activeStartDateProps = props.activeStartDate, allowPartialRange = props.allowPartialRange, calendarType = props.calendarType, className = props.className, defaultActiveStartDate = props.defaultActiveStartDate, defaultValue = props.defaultValue, defaultView = props.defaultView, formatDay = props.formatDay, formatLongDate = props.formatLongDate, formatMonth = props.formatMonth, formatMonthYear = props.formatMonthYear, formatShortWeekday = props.formatShortWeekday, formatWeekday = props.formatWeekday, formatYear = props.formatYear, _a = props.goToRangeStartOnSelect, goToRangeStartOnSelect = _a === void 0 ? true : _a, inputRef = props.inputRef, locale = props.locale, _b = props.maxDate, maxDate = _b === void 0 ? defaultMaxDate : _b, _c = props.maxDetail, maxDetail = _c === void 0 ? "month" : _c, _d = props.minDate, minDate = _d === void 0 ? defaultMinDate : _d, _e = props.minDetail, minDetail = _e === void 0 ? "century" : _e, navigationAriaLabel = props.navigationAriaLabel, navigationAriaLive = props.navigationAriaLive, navigationLabel = props.navigationLabel, next2AriaLabel = props.next2AriaLabel, next2Label = props.next2Label, nextAriaLabel = props.nextAriaLabel, nextLabel = props.nextLabel, onActiveStartDateChange = props.onActiveStartDateChange, onChangeProps = props.onChange, onClickDay = props.onClickDay, onClickDecade = props.onClickDecade, onClickMonth = props.onClickMonth, onClickWeekNumber = props.onClickWeekNumber, onClickYear = props.onClickYear, onDrillDown = props.onDrillDown, onDrillUp = props.onDrillUp, onViewChange = props.onViewChange, prev2AriaLabel = props.prev2AriaLabel, prev2Label = props.prev2Label, prevAriaLabel = props.prevAriaLabel, prevLabel = props.prevLabel, _f = props.returnValue, returnValue = _f === void 0 ? "start" : _f, selectRange = props.selectRange, showDoubleView = props.showDoubleView, showFixedNumberOfWeeks = props.showFixedNumberOfWeeks, _g = props.showNavigation, showNavigation = _g === void 0 ? true : _g, _h = props.showNeighboringMonth, showNeighboringMonth = _h === void 0 ? true : _h, showWeekNumbers = props.showWeekNumbers, tileClassName = props.tileClassName, tileContent = props.tileContent, tileDisabled = props.tileDisabled, valueProps = props.value, viewProps = props.view;
    var _j = (0, _react.useState)(defaultActiveStartDate), activeStartDateState = _j[0], setActiveStartDateState = _j[1];
    var _k = (0, _react.useState)(null), hoverState = _k[0], setHoverState = _k[1];
    var _l = (0, _react.useState)(Array.isArray(defaultValue) ? defaultValue.map(function(el) {
        return el !== null ? toDate(el) : null;
    }) : defaultValue !== null && defaultValue !== undefined ? toDate(defaultValue) : null), valueState = _l[0], setValueState = _l[1];
    var _m = (0, _react.useState)(defaultView), viewState = _m[0], setViewState = _m[1];
    var activeStartDate = activeStartDateProps || activeStartDateState || getInitialActiveStartDate({
        activeStartDate: activeStartDateProps,
        defaultActiveStartDate: defaultActiveStartDate,
        defaultValue: defaultValue,
        defaultView: defaultView,
        maxDate: maxDate,
        maxDetail: maxDetail,
        minDate: minDate,
        minDetail: minDetail,
        value: valueProps,
        view: viewProps
    });
    var value = function() {
        var rawValue = function() {
            // In the middle of range selection, use value from state
            if (selectRange && getIsSingleValue(valueState)) return valueState;
            return valueProps !== undefined ? valueProps : valueState;
        }();
        if (!rawValue) return null;
        return Array.isArray(rawValue) ? rawValue.map(function(el) {
            return el !== null ? toDate(el) : null;
        }) : rawValue !== null ? toDate(rawValue) : null;
    }();
    var valueType = getValueType(maxDetail);
    var view = getView(viewProps || viewState, minDetail, maxDetail);
    var views = getLimitedViews(minDetail, maxDetail);
    var hover = selectRange ? hoverState : null;
    var drillDownAvailable = views.indexOf(view) < views.length - 1;
    var drillUpAvailable = views.indexOf(view) > 0;
    var getProcessedValue = (0, _react.useCallback)(function(value) {
        var processFunction = function() {
            switch(returnValue){
                case "start":
                    return getDetailValueFrom;
                case "end":
                    return getDetailValueTo;
                case "range":
                    return getDetailValueArray;
                default:
                    throw new Error("Invalid returnValue.");
            }
        }();
        return processFunction({
            maxDate: maxDate,
            maxDetail: maxDetail,
            minDate: minDate,
            value: value
        });
    }, [
        maxDate,
        maxDetail,
        minDate,
        returnValue
    ]);
    var setActiveStartDate = (0, _react.useCallback)(function(nextActiveStartDate, action) {
        setActiveStartDateState(nextActiveStartDate);
        var args = {
            action: action,
            activeStartDate: nextActiveStartDate,
            value: value,
            view: view
        };
        if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) onActiveStartDateChange(args);
    }, [
        activeStartDate,
        onActiveStartDateChange,
        value,
        view
    ]);
    var onClickTile = (0, _react.useCallback)(function(value, event) {
        var callback = function() {
            switch(view){
                case "century":
                    return onClickDecade;
                case "decade":
                    return onClickYear;
                case "year":
                    return onClickMonth;
                case "month":
                    return onClickDay;
                default:
                    throw new Error("Invalid view: ".concat(view, "."));
            }
        }();
        if (callback) callback(value, event);
    }, [
        onClickDay,
        onClickDecade,
        onClickMonth,
        onClickYear,
        view
    ]);
    var drillDown = (0, _react.useCallback)(function(nextActiveStartDate, event) {
        if (!drillDownAvailable) return;
        onClickTile(nextActiveStartDate, event);
        var nextView = views[views.indexOf(view) + 1];
        if (!nextView) throw new Error("Attempted to drill down from the lowest view.");
        setActiveStartDateState(nextActiveStartDate);
        setViewState(nextView);
        var args = {
            action: "drillDown",
            activeStartDate: nextActiveStartDate,
            value: value,
            view: nextView
        };
        if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) onActiveStartDateChange(args);
        if (onViewChange && view !== nextView) onViewChange(args);
        if (onDrillDown) onDrillDown(args);
    }, [
        activeStartDate,
        drillDownAvailable,
        onActiveStartDateChange,
        onClickTile,
        onDrillDown,
        onViewChange,
        value,
        view,
        views
    ]);
    var drillUp = (0, _react.useCallback)(function() {
        if (!drillUpAvailable) return;
        var nextView = views[views.indexOf(view) - 1];
        if (!nextView) throw new Error("Attempted to drill up from the highest view.");
        var nextActiveStartDate = (0, _datesJs.getBegin)(nextView, activeStartDate);
        setActiveStartDateState(nextActiveStartDate);
        setViewState(nextView);
        var args = {
            action: "drillUp",
            activeStartDate: nextActiveStartDate,
            value: value,
            view: nextView
        };
        if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) onActiveStartDateChange(args);
        if (onViewChange && view !== nextView) onViewChange(args);
        if (onDrillUp) onDrillUp(args);
    }, [
        activeStartDate,
        drillUpAvailable,
        onActiveStartDateChange,
        onDrillUp,
        onViewChange,
        value,
        view,
        views
    ]);
    var onChange = (0, _react.useCallback)(function(rawNextValue, event) {
        var previousValue = value;
        onClickTile(rawNextValue, event);
        var isFirstValueInRange = selectRange && !getIsSingleValue(previousValue);
        var nextValue;
        if (selectRange) {
            // Range selection turned on
            if (isFirstValueInRange) // Value has 0 or 2 elements - either way we're starting a new array
            // First value
            nextValue = (0, _datesJs.getBegin)(valueType, rawNextValue);
            else {
                if (!previousValue) throw new Error("previousValue is required");
                if (Array.isArray(previousValue)) throw new Error("previousValue must not be an array");
                // Second value
                nextValue = (0, _datesJs.getValueRange)(valueType, previousValue, rawNextValue);
            }
        } else // Range selection turned off
        nextValue = getProcessedValue(rawNextValue);
        var nextActiveStartDate = // Range selection turned off
        !selectRange || // Range selection turned on, first value
        isFirstValueInRange || // Range selection turned on, second value, goToRangeStartOnSelect toggled on
        goToRangeStartOnSelect ? getActiveStartDate({
            maxDate: maxDate,
            maxDetail: maxDetail,
            minDate: minDate,
            minDetail: minDetail,
            value: nextValue,
            view: view
        }) : null;
        event.persist();
        setActiveStartDateState(nextActiveStartDate);
        setValueState(nextValue);
        var args = {
            action: "onChange",
            activeStartDate: nextActiveStartDate,
            value: nextValue,
            view: view
        };
        if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) onActiveStartDateChange(args);
        if (onChangeProps) {
            if (selectRange) {
                var isSingleValue = getIsSingleValue(nextValue);
                if (!isSingleValue) onChangeProps(nextValue || null, event);
                else if (allowPartialRange) {
                    if (Array.isArray(nextValue)) throw new Error("value must not be an array");
                    onChangeProps([
                        nextValue || null,
                        null
                    ], event);
                }
            } else onChangeProps(nextValue || null, event);
        }
    }, [
        activeStartDate,
        allowPartialRange,
        getProcessedValue,
        goToRangeStartOnSelect,
        maxDate,
        maxDetail,
        minDate,
        minDetail,
        onActiveStartDateChange,
        onChangeProps,
        onClickTile,
        selectRange,
        value,
        valueType,
        view
    ]);
    function onMouseOver(nextHover) {
        setHoverState(nextHover);
    }
    function onMouseLeave() {
        setHoverState(null);
    }
    (0, _react.useImperativeHandle)(ref, function() {
        return {
            activeStartDate: activeStartDate,
            drillDown: drillDown,
            drillUp: drillUp,
            onChange: onChange,
            setActiveStartDate: setActiveStartDate,
            value: value,
            view: view
        };
    }, [
        activeStartDate,
        drillDown,
        drillUp,
        onChange,
        setActiveStartDate,
        value,
        view
    ]);
    function renderContent(next) {
        var currentActiveStartDate = next ? (0, _datesJs.getBeginNext)(view, activeStartDate) : (0, _datesJs.getBegin)(view, activeStartDate);
        var onClick = drillDownAvailable ? drillDown : onChange;
        var commonProps = {
            activeStartDate: currentActiveStartDate,
            hover: hover,
            locale: locale,
            maxDate: maxDate,
            minDate: minDate,
            onClick: onClick,
            onMouseOver: selectRange ? onMouseOver : undefined,
            tileClassName: tileClassName,
            tileContent: tileContent,
            tileDisabled: tileDisabled,
            value: value,
            valueType: valueType
        };
        switch(view){
            case "century":
                return (0, _reactDefault.default).createElement((0, _centuryViewJsDefault.default), __assign({
                    formatYear: formatYear
                }, commonProps));
            case "decade":
                return (0, _reactDefault.default).createElement((0, _decadeViewJsDefault.default), __assign({
                    formatYear: formatYear
                }, commonProps));
            case "year":
                return (0, _reactDefault.default).createElement((0, _yearViewJsDefault.default), __assign({
                    formatMonth: formatMonth,
                    formatMonthYear: formatMonthYear
                }, commonProps));
            case "month":
                return (0, _reactDefault.default).createElement((0, _monthViewJsDefault.default), __assign({
                    calendarType: calendarType,
                    formatDay: formatDay,
                    formatLongDate: formatLongDate,
                    formatShortWeekday: formatShortWeekday,
                    formatWeekday: formatWeekday,
                    onClickWeekNumber: onClickWeekNumber,
                    onMouseLeave: selectRange ? onMouseLeave : undefined,
                    showFixedNumberOfWeeks: typeof showFixedNumberOfWeeks !== "undefined" ? showFixedNumberOfWeeks : showDoubleView,
                    showNeighboringMonth: showNeighboringMonth,
                    showWeekNumbers: showWeekNumbers
                }, commonProps));
            default:
                throw new Error("Invalid view: ".concat(view, "."));
        }
    }
    function renderNavigation() {
        if (!showNavigation) return null;
        return (0, _reactDefault.default).createElement((0, _navigationJsDefault.default), {
            activeStartDate: activeStartDate,
            drillUp: drillUp,
            formatMonthYear: formatMonthYear,
            formatYear: formatYear,
            locale: locale,
            maxDate: maxDate,
            minDate: minDate,
            navigationAriaLabel: navigationAriaLabel,
            navigationAriaLive: navigationAriaLive,
            navigationLabel: navigationLabel,
            next2AriaLabel: next2AriaLabel,
            next2Label: next2Label,
            nextAriaLabel: nextAriaLabel,
            nextLabel: nextLabel,
            prev2AriaLabel: prev2AriaLabel,
            prev2Label: prev2Label,
            prevAriaLabel: prevAriaLabel,
            prevLabel: prevLabel,
            setActiveStartDate: setActiveStartDate,
            showDoubleView: showDoubleView,
            view: view,
            views: views
        });
    }
    var valueArray = Array.isArray(value) ? value : [
        value
    ];
    return (0, _reactDefault.default).createElement("div", {
        className: (0, _clsxDefault.default)(baseClassName, selectRange && valueArray.length === 1 && "".concat(baseClassName, "--selectRange"), showDoubleView && "".concat(baseClassName, "--doubleView"), className),
        ref: inputRef
    }, renderNavigation(), (0, _reactDefault.default).createElement("div", {
        className: "".concat(baseClassName, "__viewContainer"),
        onBlur: selectRange ? onMouseLeave : undefined,
        onMouseLeave: selectRange ? onMouseLeave : undefined
    }, renderContent(), showDoubleView ? renderContent(true) : null));
});
var isActiveStartDate = (0, _propTypesDefault.default).instanceOf(Date);
var isValue = (0, _propTypesDefault.default).oneOfType([
    (0, _propTypesDefault.default).string,
    (0, _propTypesDefault.default).instanceOf(Date)
]);
var isValueOrValueArray = (0, _propTypesDefault.default).oneOfType([
    isValue,
    (0, _propTypesJs.rangeOf)(isValue)
]);
Calendar.propTypes = {
    activeStartDate: isActiveStartDate,
    allowPartialRange: (0, _propTypesDefault.default).bool,
    calendarType: (0, _propTypesJs.isCalendarType),
    className: (0, _propTypesJs.isClassName),
    defaultActiveStartDate: isActiveStartDate,
    defaultValue: isValueOrValueArray,
    defaultView: (0, _propTypesJs.isView),
    formatDay: (0, _propTypesDefault.default).func,
    formatLongDate: (0, _propTypesDefault.default).func,
    formatMonth: (0, _propTypesDefault.default).func,
    formatMonthYear: (0, _propTypesDefault.default).func,
    formatShortWeekday: (0, _propTypesDefault.default).func,
    formatWeekday: (0, _propTypesDefault.default).func,
    formatYear: (0, _propTypesDefault.default).func,
    goToRangeStartOnSelect: (0, _propTypesDefault.default).bool,
    inputRef: (0, _propTypesJs.isRef),
    locale: (0, _propTypesDefault.default).string,
    maxDate: (0, _propTypesJs.isMaxDate),
    maxDetail: (0, _propTypesDefault.default).oneOf(allViews),
    minDate: (0, _propTypesJs.isMinDate),
    minDetail: (0, _propTypesDefault.default).oneOf(allViews),
    navigationAriaLabel: (0, _propTypesDefault.default).string,
    navigationAriaLive: (0, _propTypesDefault.default).oneOf([
        "off",
        "polite",
        "assertive"
    ]),
    navigationLabel: (0, _propTypesDefault.default).func,
    next2AriaLabel: (0, _propTypesDefault.default).string,
    next2Label: (0, _propTypesDefault.default).node,
    nextAriaLabel: (0, _propTypesDefault.default).string,
    nextLabel: (0, _propTypesDefault.default).node,
    onActiveStartDateChange: (0, _propTypesDefault.default).func,
    onChange: (0, _propTypesDefault.default).func,
    onClickDay: (0, _propTypesDefault.default).func,
    onClickDecade: (0, _propTypesDefault.default).func,
    onClickMonth: (0, _propTypesDefault.default).func,
    onClickWeekNumber: (0, _propTypesDefault.default).func,
    onClickYear: (0, _propTypesDefault.default).func,
    onDrillDown: (0, _propTypesDefault.default).func,
    onDrillUp: (0, _propTypesDefault.default).func,
    onViewChange: (0, _propTypesDefault.default).func,
    prev2AriaLabel: (0, _propTypesDefault.default).string,
    prev2Label: (0, _propTypesDefault.default).node,
    prevAriaLabel: (0, _propTypesDefault.default).string,
    prevLabel: (0, _propTypesDefault.default).node,
    returnValue: (0, _propTypesDefault.default).oneOf([
        "start",
        "end",
        "range"
    ]),
    selectRange: (0, _propTypesDefault.default).bool,
    showDoubleView: (0, _propTypesDefault.default).bool,
    showFixedNumberOfWeeks: (0, _propTypesDefault.default).bool,
    showNavigation: (0, _propTypesDefault.default).bool,
    showNeighboringMonth: (0, _propTypesDefault.default).bool,
    showWeekNumbers: (0, _propTypesDefault.default).bool,
    tileClassName: (0, _propTypesDefault.default).oneOfType([
        (0, _propTypesDefault.default).func,
        (0, _propTypesJs.isClassName)
    ]),
    tileContent: (0, _propTypesDefault.default).oneOfType([
        (0, _propTypesDefault.default).func,
        (0, _propTypesDefault.default).node
    ]),
    tileDisabled: (0, _propTypesDefault.default).func,
    value: isValueOrValueArray,
    view: (0, _propTypesJs.isView)
};
exports.default = Calendar;

},{"react":"k0IeW","prop-types":"sBX5e","clsx":"7RLh3","./Calendar/Navigation.js":"46ifv","./CenturyView.js":"hKv9C","./DecadeView.js":"j3o41","./YearView.js":"j4meB","./MonthView.js":"hGceO","./shared/dates.js":"jnNCe","./shared/propTypes.js":"9We5O","./shared/utils.js":"baU9K","@parcel/transformer-js/src/esmodule-helpers.js":"1OlAz"}],"k0IeW":[function(require,module,exports) {
"use strict";
module.exports = require("27af38a5e5fb81d9");

},{"27af38a5e5fb81d9":"9wqzU"}],"9wqzU":[function(require,module,exports) {
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
(function() {
    "use strict";
    /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */ if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var ReactVersion = "18.2.0";
    // ATTENTION
    // When adding new symbols to this file,
    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
    // The Symbol used to tag the ReactElement-like types.
    var REACT_ELEMENT_TYPE = Symbol.for("react.element");
    var REACT_PORTAL_TYPE = Symbol.for("react.portal");
    var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
    var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
    var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
    var REACT_CONTEXT_TYPE = Symbol.for("react.context");
    var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
    var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
    var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
    var REACT_MEMO_TYPE = Symbol.for("react.memo");
    var REACT_LAZY_TYPE = Symbol.for("react.lazy");
    var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
    var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = "@@iterator";
    function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable !== "object") return null;
        var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
        if (typeof maybeIterator === "function") return maybeIterator;
        return null;
    }
    /**
 * Keeps track of the current dispatcher.
 */ var ReactCurrentDispatcher = {
        /**
   * @internal
   * @type {ReactComponent}
   */ current: null
    };
    /**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */ var ReactCurrentBatchConfig = {
        transition: null
    };
    var ReactCurrentActQueue = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: false,
        didScheduleLegacyUpdate: false
    };
    /**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */ var ReactCurrentOwner = {
        /**
   * @internal
   * @type {ReactComponent}
   */ current: null
    };
    var ReactDebugCurrentFrame = {};
    var currentExtraStackFrame = null;
    function setExtraStackFrame(stack) {
        currentExtraStackFrame = stack;
    }
    ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
        currentExtraStackFrame = stack;
    }; // Stack implementation injected by the current renderer.
    ReactDebugCurrentFrame.getCurrentStack = null;
    ReactDebugCurrentFrame.getStackAddendum = function() {
        var stack = ""; // Add an extra top frame while an element is being validated
        if (currentExtraStackFrame) stack += currentExtraStackFrame;
         // Delegate to the injected renderer-specific implementation
        var impl = ReactDebugCurrentFrame.getCurrentStack;
        if (impl) stack += impl() || "";
        return stack;
    };
    // -----------------------------------------------------------------------------
    var enableScopeAPI = false; // Experimental Create Event Handle API.
    var enableCacheElement = false;
    var enableTransitionTracing = false; // No known bugs, but needs performance testing
    var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
    // stuff. Intended to enable React core members to more easily debug scheduling
    // issues in DEV builds.
    var enableDebugTracing = false; // Track which Fiber(s) schedule render work.
    var ReactSharedInternals = {
        ReactCurrentDispatcher: ReactCurrentDispatcher,
        ReactCurrentBatchConfig: ReactCurrentBatchConfig,
        ReactCurrentOwner: ReactCurrentOwner
    };
    ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
    ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
    // by calls to these methods by a Babel plugin.
    //
    // In PROD (or in packages without access to React internals),
    // they are left as they are instead.
    function warn(format) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
        printWarning("warn", format, args);
    }
    function error(format) {
        for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)args[_key2 - 1] = arguments[_key2];
        printWarning("error", format, args);
    }
    function printWarning(level, format, args) {
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        var stack = ReactDebugCurrentFrame.getStackAddendum();
        if (stack !== "") {
            format += "%s";
            args = args.concat([
                stack
            ]);
        } // eslint-disable-next-line react-internal/safe-string-coercion
        var argsWithFormat = args.map(function(item) {
            return String(item);
        }); // Careful: RN currently depends on this prefix
        argsWithFormat.unshift("Warning: " + format); // We intentionally don't use spread (or .apply) directly because it
        // breaks IE9: https://github.com/facebook/react/issues/13610
        // eslint-disable-next-line react-internal/no-production-logging
        Function.prototype.apply.call(console[level], console, argsWithFormat);
    }
    var didWarnStateUpdateForUnmountedComponent = {};
    function warnNoop(publicInstance, callerName) {
        var _constructor = publicInstance.constructor;
        var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
        var warningKey = componentName + "." + callerName;
        if (didWarnStateUpdateForUnmountedComponent[warningKey]) return;
        error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
        didWarnStateUpdateForUnmountedComponent[warningKey] = true;
    }
    /**
 * This is the abstract API for an update queue.
 */ var ReactNoopUpdateQueue = {
        /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */ isMounted: function(publicInstance) {
            return false;
        },
        /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */ enqueueForceUpdate: function(publicInstance, callback, callerName) {
            warnNoop(publicInstance, "forceUpdate");
        },
        /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */ enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
            warnNoop(publicInstance, "replaceState");
        },
        /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */ enqueueSetState: function(publicInstance, partialState, callback, callerName) {
            warnNoop(publicInstance, "setState");
        }
    };
    var assign = Object.assign;
    var emptyObject = {};
    Object.freeze(emptyObject);
    /**
 * Base class helpers for the updating state of a component.
 */ function Component(props, context, updater) {
        this.props = props;
        this.context = context; // If a component has string refs, we will assign a different object later.
        this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
        // renderer.
        this.updater = updater || ReactNoopUpdateQueue;
    }
    Component.prototype.isReactComponent = {};
    /**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */ Component.prototype.setState = function(partialState, callback) {
        if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null) throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, partialState, callback, "setState");
    };
    /**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */ Component.prototype.forceUpdate = function(callback) {
        this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
    };
    var deprecatedAPIs = {
        isMounted: [
            "isMounted",
            "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
            "replaceState",
            "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
    };
    var defineDeprecationWarning = function(methodName, info) {
        Object.defineProperty(Component.prototype, methodName, {
            get: function() {
                warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                return undefined;
            }
        });
    };
    for(var fnName in deprecatedAPIs)if (deprecatedAPIs.hasOwnProperty(fnName)) defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    function ComponentDummy() {}
    ComponentDummy.prototype = Component.prototype;
    /**
 * Convenience component with default shallow equality check for sCU.
 */ function PureComponent(props, context, updater) {
        this.props = props;
        this.context = context; // If a component has string refs, we will assign a different object later.
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
    }
    var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
    pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.
    assign(pureComponentPrototype, Component.prototype);
    pureComponentPrototype.isPureReactComponent = true;
    // an immutable object with a single mutable value
    function createRef() {
        var refObject = {
            current: null
        };
        Object.seal(refObject);
        return refObject;
    }
    var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare
    function isArray(a) {
        return isArrayImpl(a);
    }
    /*
 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
 *
 * The functions in this module will throw an easier-to-understand,
 * easier-to-debug exception with a clear errors message message explaining the
 * problem. (Instead of a confusing exception thrown inside the implementation
 * of the `value` object).
 */ // $FlowFixMe only called in DEV, so void return is not possible.
    function typeName(value) {
        // toStringTag is needed for namespaced types like Temporal.Instant
        var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
        var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
        return type;
    } // $FlowFixMe only called in DEV, so void return is not possible.
    function willCoercionThrow(value) {
        try {
            testStringCoercion(value);
            return false;
        } catch (e) {
            return true;
        }
    }
    function testStringCoercion(value) {
        // If you ended up here by following an exception call stack, here's what's
        // happened: you supplied an object or symbol value to React (as a prop, key,
        // DOM attribute, CSS property, string ref, etc.) and when React tried to
        // coerce it to a string using `'' + value`, an exception was thrown.
        //
        // The most common types that will cause this exception are `Symbol` instances
        // and Temporal objects like `Temporal.Instant`. But any object that has a
        // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
        // exception. (Library authors do this to prevent users from using built-in
        // numeric operators like `+` or comparison operators like `>=` because custom
        // methods are needed to perform accurate arithmetic or comparison.)
        //
        // To fix the problem, coerce this object or symbol value to a string before
        // passing it to React. The most reliable way is usually `String(value)`.
        //
        // To find which value is throwing, check the browser or debugger console.
        // Before this exception was thrown, there should be `console.error` output
        // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
        // problem and how that type was used: key, atrribute, input value prop, etc.
        // In most cases, this console output also shows the component and its
        // ancestor components where the exception happened.
        //
        // eslint-disable-next-line react-internal/safe-string-coercion
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        if (willCoercionThrow(value)) {
            error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
            return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
        }
    }
    function getWrappedName(outerType, innerType, wrapperName) {
        var displayName = outerType.displayName;
        if (displayName) return displayName;
        var functionName = innerType.displayName || innerType.name || "";
        return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
    } // Keep in sync with react-reconciler/getComponentNameFromFiber
    function getContextName(type) {
        return type.displayName || "Context";
    } // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.
    function getComponentNameFromType(type) {
        if (type == null) // Host root, text node or just invalid type.
        return null;
        if (typeof type.tag === "number") error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
        if (typeof type === "function") return type.displayName || type.name || null;
        if (typeof type === "string") return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
        }
        if (typeof type === "object") switch(type.$$typeof){
            case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
            case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
            case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
            case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) return outerName;
                return getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                    return getComponentNameFromType(init(payload));
                } catch (x) {
                    return null;
                }
        }
        return null;
    }
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var RESERVED_PROPS = {
        key: true,
        ref: true,
        __self: true,
        __source: true
    };
    var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
    didWarnAboutStringRefs = {};
    function hasValidRef(config) {
        if (hasOwnProperty.call(config, "ref")) {
            var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
            if (getter && getter.isReactWarning) return false;
        }
        return config.ref !== undefined;
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return false;
        }
        return config.key !== undefined;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        var warnAboutAccessingKey = function() {
            if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
            }
        };
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
        });
    }
    function defineRefPropWarningGetter(props, displayName) {
        var warnAboutAccessingRef = function() {
            if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
            }
        };
        warnAboutAccessingRef.isReactWarning = true;
        Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: true
        });
    }
    function warnIfStringRefCannotBeAutoConverted(config) {
        if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
            var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
            if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                didWarnAboutStringRefs[componentName] = true;
            }
        }
    }
    /**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */ var ReactElement = function(type, key, ref, self, source, owner, props) {
        var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type: type,
            key: key,
            ref: ref,
            props: props,
            // Record the component responsible for creating this element.
            _owner: owner
        };
        // The validation flag is currently mutative. We put it on
        // an external backing store so that we can freeze the whole object.
        // This can be replaced with a WeakMap once they are implemented in
        // commonly used development environments.
        element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
        // the validation flag non-enumerable (where possible, which should
        // include every environment we run tests in), so the test framework
        // ignores it.
        Object.defineProperty(element._store, "validated", {
            configurable: false,
            enumerable: false,
            writable: true,
            value: false
        }); // self and source are DEV only properties.
        Object.defineProperty(element, "_self", {
            configurable: false,
            enumerable: false,
            writable: false,
            value: self
        }); // Two elements created in two different places should be considered
        // equal for testing purposes and therefore we hide it from enumeration.
        Object.defineProperty(element, "_source", {
            configurable: false,
            enumerable: false,
            writable: false,
            value: source
        });
        if (Object.freeze) {
            Object.freeze(element.props);
            Object.freeze(element);
        }
        return element;
    };
    /**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */ function createElement(type, config, children) {
        var propName; // Reserved names are extracted
        var props = {};
        var key = null;
        var ref = null;
        var self = null;
        var source = null;
        if (config != null) {
            if (hasValidRef(config)) {
                ref = config.ref;
                warnIfStringRefCannotBeAutoConverted(config);
            }
            if (hasValidKey(config)) {
                checkKeyStringCoercion(config.key);
                key = "" + config.key;
            }
            self = config.__self === undefined ? null : config.__self;
            source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object
            for(propName in config)if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) props[propName] = config[propName];
        } // Children can be more than one argument, and those are transferred onto
        // the newly allocated props object.
        var childrenLength = arguments.length - 2;
        if (childrenLength === 1) props.children = children;
        else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for(var i = 0; i < childrenLength; i++)childArray[i] = arguments[i + 2];
            if (Object.freeze) Object.freeze(childArray);
            props.children = childArray;
        } // Resolve default props
        if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for(propName in defaultProps)if (props[propName] === undefined) props[propName] = defaultProps[propName];
        }
        if (key || ref) {
            var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
            if (key) defineKeyPropWarningGetter(props, displayName);
            if (ref) defineRefPropWarningGetter(props, displayName);
        }
        return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
    }
    function cloneAndReplaceKey(oldElement, newKey) {
        var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
        return newElement;
    }
    /**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */ function cloneElement(element, config, children) {
        if (element === null || element === undefined) throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
        var propName; // Original props are copied
        var props = assign({}, element.props); // Reserved names are extracted
        var key = element.key;
        var ref = element.ref; // Self is preserved since the owner is preserved.
        var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
        // transpiler, and the original source is probably a better indicator of the
        // true owner.
        var source = element._source; // Owner will be preserved, unless ref is overridden
        var owner = element._owner;
        if (config != null) {
            if (hasValidRef(config)) {
                // Silently steal the ref from the parent.
                ref = config.ref;
                owner = ReactCurrentOwner.current;
            }
            if (hasValidKey(config)) {
                checkKeyStringCoercion(config.key);
                key = "" + config.key;
            } // Remaining properties override existing props
            var defaultProps;
            if (element.type && element.type.defaultProps) defaultProps = element.type.defaultProps;
            for(propName in config)if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                if (config[propName] === undefined && defaultProps !== undefined) // Resolve default props
                props[propName] = defaultProps[propName];
                else props[propName] = config[propName];
            }
        } // Children can be more than one argument, and those are transferred onto
        // the newly allocated props object.
        var childrenLength = arguments.length - 2;
        if (childrenLength === 1) props.children = children;
        else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for(var i = 0; i < childrenLength; i++)childArray[i] = arguments[i + 2];
            props.children = childArray;
        }
        return ReactElement(element.type, key, ref, self, source, owner, props);
    }
    /**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */ function isValidElement(object) {
        return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var SEPARATOR = ".";
    var SUBSEPARATOR = ":";
    /**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */ function escape(key) {
        var escapeRegex = /[=:]/g;
        var escaperLookup = {
            "=": "=0",
            ":": "=2"
        };
        var escapedString = key.replace(escapeRegex, function(match) {
            return escaperLookup[match];
        });
        return "$" + escapedString;
    }
    /**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */ var didWarnAboutMaps = false;
    var userProvidedKeyEscapeRegex = /\/+/g;
    function escapeUserProvidedKey(text) {
        return text.replace(userProvidedKeyEscapeRegex, "$&/");
    }
    /**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */ function getElementKey(element, index) {
        // Do some typechecking here since we call this blindly. We want to ensure
        // that we don't block potential future ES APIs.
        if (typeof element === "object" && element !== null && element.key != null) {
            checkKeyStringCoercion(element.key);
            return escape("" + element.key);
        } // Implicit key determined by the index in the set
        return index.toString(36);
    }
    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
        var type = typeof children;
        if (type === "undefined" || type === "boolean") // All of the above are perceived as null.
        children = null;
        var invokeCallback = false;
        if (children === null) invokeCallback = true;
        else switch(type){
            case "string":
            case "number":
                invokeCallback = true;
                break;
            case "object":
                switch(children.$$typeof){
                    case REACT_ELEMENT_TYPE:
                    case REACT_PORTAL_TYPE:
                        invokeCallback = true;
                }
        }
        if (invokeCallback) {
            var _child = children;
            var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
            // so that it's consistent if the number of children grows:
            var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
            if (isArray(mappedChild)) {
                var escapedChildKey = "";
                if (childKey != null) escapedChildKey = escapeUserProvidedKey(childKey) + "/";
                mapIntoArray(mappedChild, array, escapedChildKey, "", function(c) {
                    return c;
                });
            } else if (mappedChild != null) {
                if (isValidElement(mappedChild)) {
                    // The `if` statement here prevents auto-disabling of the safe
                    // coercion ESLint rule, so we must manually disable it below.
                    // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                    if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) checkKeyStringCoercion(mappedChild.key);
                    mappedChild = cloneAndReplaceKey(mappedChild, // traverseAllChildren used to do for objects as children
                    escapedPrefix + (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // eslint-disable-next-line react-internal/safe-string-coercion
                    escapeUserProvidedKey("" + mappedChild.key) + "/" : "") + childKey);
                }
                array.push(mappedChild);
            }
            return 1;
        }
        var child;
        var nextName;
        var subtreeCount = 0; // Count of children found in the current subtree.
        var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
        if (isArray(children)) for(var i = 0; i < children.length; i++){
            child = children[i];
            nextName = nextNamePrefix + getElementKey(child, i);
            subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
        }
        else {
            var iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === "function") {
                var iterableChildren = children;
                // Warn about using Maps as children
                if (iteratorFn === iterableChildren.entries) {
                    if (!didWarnAboutMaps) warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                    didWarnAboutMaps = true;
                }
                var iterator = iteratorFn.call(iterableChildren);
                var step;
                var ii = 0;
                while(!(step = iterator.next()).done){
                    child = step.value;
                    nextName = nextNamePrefix + getElementKey(child, ii++);
                    subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
                }
            } else if (type === "object") {
                // eslint-disable-next-line react-internal/safe-string-coercion
                var childrenString = String(children);
                throw new Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). " + "If you meant to render a collection of children, use an array " + "instead.");
            }
        }
        return subtreeCount;
    }
    /**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */ function mapChildren(children, func, context) {
        if (children == null) return children;
        var result = [];
        var count = 0;
        mapIntoArray(children, result, "", "", function(child) {
            return func.call(context, child, count++);
        });
        return result;
    }
    /**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */ function countChildren(children) {
        var n = 0;
        mapChildren(children, function() {
            n++; // Don't return anything
        });
        return n;
    }
    /**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */ function forEachChildren(children, forEachFunc, forEachContext) {
        mapChildren(children, function() {
            forEachFunc.apply(this, arguments); // Don't return anything.
        }, forEachContext);
    }
    /**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */ function toArray(children) {
        return mapChildren(children, function(child) {
            return child;
        }) || [];
    }
    /**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */ function onlyChild(children) {
        if (!isValidElement(children)) throw new Error("React.Children.only expected to receive a single React element child.");
        return children;
    }
    function createContext(defaultValue) {
        // TODO: Second argument used to be an optional `calculateChangedBits`
        // function. Warn to reserve for future use?
        var context = {
            $$typeof: REACT_CONTEXT_TYPE,
            // As a workaround to support multiple concurrent renderers, we categorize
            // some renderers as primary and others as secondary. We only expect
            // there to be two concurrent renderers at most: React Native (primary) and
            // Fabric (secondary); React DOM (primary) and React ART (secondary).
            // Secondary renderers store their context values on separate fields.
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            // Used to track how many concurrent renderers this context currently
            // supports within in a single renderer. Such as parallel server rendering.
            _threadCount: 0,
            // These are circular
            Provider: null,
            Consumer: null,
            // Add these to use same hidden class in VM as ServerContext
            _defaultValue: null,
            _globalName: null
        };
        context.Provider = {
            $$typeof: REACT_PROVIDER_TYPE,
            _context: context
        };
        var hasWarnedAboutUsingNestedContextConsumers = false;
        var hasWarnedAboutUsingConsumerProvider = false;
        var hasWarnedAboutDisplayNameOnConsumer = false;
        // A separate object, but proxies back to the original context object for
        // backwards compatibility. It has a different $$typeof, so we can properly
        // warn for the incorrect usage of Context as a Consumer.
        var Consumer = {
            $$typeof: REACT_CONTEXT_TYPE,
            _context: context
        }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here
        Object.defineProperties(Consumer, {
            Provider: {
                get: function() {
                    if (!hasWarnedAboutUsingConsumerProvider) {
                        hasWarnedAboutUsingConsumerProvider = true;
                        error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                    }
                    return context.Provider;
                },
                set: function(_Provider) {
                    context.Provider = _Provider;
                }
            },
            _currentValue: {
                get: function() {
                    return context._currentValue;
                },
                set: function(_currentValue) {
                    context._currentValue = _currentValue;
                }
            },
            _currentValue2: {
                get: function() {
                    return context._currentValue2;
                },
                set: function(_currentValue2) {
                    context._currentValue2 = _currentValue2;
                }
            },
            _threadCount: {
                get: function() {
                    return context._threadCount;
                },
                set: function(_threadCount) {
                    context._threadCount = _threadCount;
                }
            },
            Consumer: {
                get: function() {
                    if (!hasWarnedAboutUsingNestedContextConsumers) {
                        hasWarnedAboutUsingNestedContextConsumers = true;
                        error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                    }
                    return context.Consumer;
                }
            },
            displayName: {
                get: function() {
                    return context.displayName;
                },
                set: function(displayName) {
                    if (!hasWarnedAboutDisplayNameOnConsumer) {
                        warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                        hasWarnedAboutDisplayNameOnConsumer = true;
                    }
                }
            }
        }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty
        context.Consumer = Consumer;
        context._currentRenderer = null;
        context._currentRenderer2 = null;
        return context;
    }
    var Uninitialized = -1;
    var Pending = 0;
    var Resolved = 1;
    var Rejected = 2;
    function lazyInitializer(payload) {
        if (payload._status === Uninitialized) {
            var ctor = payload._result;
            var thenable = ctor(); // Transition to the next state.
            // This might throw either because it's missing or throws. If so, we treat it
            // as still uninitialized and try again next time. Which is the same as what
            // happens if the ctor or any wrappers processing the ctor throws. This might
            // end up fixing it if the resolution was a concurrency bug.
            thenable.then(function(moduleObject) {
                if (payload._status === Pending || payload._status === Uninitialized) {
                    // Transition to the next state.
                    var resolved = payload;
                    resolved._status = Resolved;
                    resolved._result = moduleObject;
                }
            }, function(error) {
                if (payload._status === Pending || payload._status === Uninitialized) {
                    // Transition to the next state.
                    var rejected = payload;
                    rejected._status = Rejected;
                    rejected._result = error;
                }
            });
            if (payload._status === Uninitialized) {
                // In case, we're still uninitialized, then we're waiting for the thenable
                // to resolve. Set it as pending in the meantime.
                var pending = payload;
                pending._status = Pending;
                pending._result = thenable;
            }
        }
        if (payload._status === Resolved) {
            var moduleObject = payload._result;
            if (moduleObject === undefined) error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", moduleObject);
            if (!("default" in moduleObject)) error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
            return moduleObject.default;
        } else throw payload._result;
    }
    function lazy(ctor) {
        var payload = {
            // We use these fields to store the result.
            _status: Uninitialized,
            _result: ctor
        };
        var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: payload,
            _init: lazyInitializer
        };
        // In production, this would just set it on the object.
        var defaultProps;
        var propTypes; // $FlowFixMe
        Object.defineProperties(lazyType, {
            defaultProps: {
                configurable: true,
                get: function() {
                    return defaultProps;
                },
                set: function(newDefaultProps) {
                    error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    defaultProps = newDefaultProps; // Match production behavior more closely:
                    // $FlowFixMe
                    Object.defineProperty(lazyType, "defaultProps", {
                        enumerable: true
                    });
                }
            },
            propTypes: {
                configurable: true,
                get: function() {
                    return propTypes;
                },
                set: function(newPropTypes) {
                    error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    propTypes = newPropTypes; // Match production behavior more closely:
                    // $FlowFixMe
                    Object.defineProperty(lazyType, "propTypes", {
                        enumerable: true
                    });
                }
            }
        });
        return lazyType;
    }
    function forwardRef(render) {
        if (render != null && render.$$typeof === REACT_MEMO_TYPE) error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
        else if (typeof render !== "function") error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
        else if (render.length !== 0 && render.length !== 2) error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
        if (render != null) {
            if (render.defaultProps != null || render.propTypes != null) error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        }
        var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render: render
        };
        var ownName;
        Object.defineProperty(elementType, "displayName", {
            enumerable: false,
            configurable: true,
            get: function() {
                return ownName;
            },
            set: function(name) {
                ownName = name; // The inner component shouldn't inherit this display name in most cases,
                // because the component may be used elsewhere.
                // But it's nice for anonymous functions to inherit the name,
                // so that our component-stack generation logic will display their frames.
                // An anonymous function generally suggests a pattern like:
                //   React.forwardRef((props, ref) => {...});
                // This kind of inner function is not used elsewhere so the side effect is okay.
                if (!render.name && !render.displayName) render.displayName = name;
            }
        });
        return elementType;
    }
    var REACT_MODULE_REFERENCE;
    REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
    function isValidElementType(type) {
        if (typeof type === "string" || typeof type === "function") return true;
         // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).
        if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) return true;
        if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) return true;
        }
        return false;
    }
    function memo(type, compare) {
        if (!isValidElementType(type)) error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
        var elementType = {
            $$typeof: REACT_MEMO_TYPE,
            type: type,
            compare: compare === undefined ? null : compare
        };
        var ownName;
        Object.defineProperty(elementType, "displayName", {
            enumerable: false,
            configurable: true,
            get: function() {
                return ownName;
            },
            set: function(name) {
                ownName = name; // The inner component shouldn't inherit this display name in most cases,
                // because the component may be used elsewhere.
                // But it's nice for anonymous functions to inherit the name,
                // so that our component-stack generation logic will display their frames.
                // An anonymous function generally suggests a pattern like:
                //   React.memo((props) => {...});
                // This kind of inner function is not used elsewhere so the side effect is okay.
                if (!type.name && !type.displayName) type.displayName = name;
            }
        });
        return elementType;
    }
    function resolveDispatcher() {
        var dispatcher = ReactCurrentDispatcher.current;
        if (dispatcher === null) error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
        // intentionally don't throw our own error because this is in a hot path.
        // Also helps ensure this is inlined.
        return dispatcher;
    }
    function useContext(Context) {
        var dispatcher = resolveDispatcher();
        // TODO: add a more generic warning for invalid values.
        if (Context._context !== undefined) {
            var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
            // and nobody should be using this in existing code.
            if (realContext.Consumer === Context) error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
            else if (realContext.Provider === Context) error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return dispatcher.useContext(Context);
    }
    function useState(initialState) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useState(initialState);
    }
    function useReducer(reducer, initialArg, init) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useReducer(reducer, initialArg, init);
    }
    function useRef(initialValue) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useRef(initialValue);
    }
    function useEffect(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useEffect(create, deps);
    }
    function useInsertionEffect(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useInsertionEffect(create, deps);
    }
    function useLayoutEffect(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useLayoutEffect(create, deps);
    }
    function useCallback(callback, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useCallback(callback, deps);
    }
    function useMemo(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useMemo(create, deps);
    }
    function useImperativeHandle(ref, create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useImperativeHandle(ref, create, deps);
    }
    function useDebugValue(value, formatterFn) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useDebugValue(value, formatterFn);
    }
    function useTransition() {
        var dispatcher = resolveDispatcher();
        return dispatcher.useTransition();
    }
    function useDeferredValue(value) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useDeferredValue(value);
    }
    function useId() {
        var dispatcher = resolveDispatcher();
        return dispatcher.useId();
    }
    function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    }
    // Helpers to patch console.logs to avoid logging during side-effect free
    // replaying on render function. This currently only patches the object
    // lazily which won't cover if the log function was extracted eagerly.
    // We could also eagerly patch the method.
    var disabledDepth = 0;
    var prevLog;
    var prevInfo;
    var prevWarn;
    var prevError;
    var prevGroup;
    var prevGroupCollapsed;
    var prevGroupEnd;
    function disabledLog() {}
    disabledLog.__reactDisabledLog = true;
    function disableLogs() {
        if (disabledDepth === 0) {
            /* eslint-disable react-internal/no-production-logging */ prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099
            var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
            }; // $FlowFixMe Flow thinks console is immutable.
            Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
            });
        /* eslint-enable react-internal/no-production-logging */ }
        disabledDepth++;
    }
    function reenableLogs() {
        disabledDepth--;
        if (disabledDepth === 0) {
            /* eslint-disable react-internal/no-production-logging */ var props = {
                configurable: true,
                enumerable: true,
                writable: true
            }; // $FlowFixMe Flow thinks console is immutable.
            Object.defineProperties(console, {
                log: assign({}, props, {
                    value: prevLog
                }),
                info: assign({}, props, {
                    value: prevInfo
                }),
                warn: assign({}, props, {
                    value: prevWarn
                }),
                error: assign({}, props, {
                    value: prevError
                }),
                group: assign({}, props, {
                    value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                    value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                    value: prevGroupEnd
                })
            });
        /* eslint-enable react-internal/no-production-logging */ }
        if (disabledDepth < 0) error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
    var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
    var prefix;
    function describeBuiltInComponentFrame(name, source, ownerFn) {
        if (prefix === undefined) // Extract the VM specific prefix used by each line.
        try {
            throw Error();
        } catch (x) {
            var match = x.stack.trim().match(/\n( *(at )?)/);
            prefix = match && match[1] || "";
        }
         // We use the prefix to ensure our stacks line up with native stack frames.
        return "\n" + prefix + name;
    }
    var reentry = false;
    var componentFrameCache;
    var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
    componentFrameCache = new PossiblyWeakMap();
    function describeNativeComponentFrame(fn, construct) {
        // If something asked for a stack inside a fake render, it should get ignored.
        if (!fn || reentry) return "";
        var frame = componentFrameCache.get(fn);
        if (frame !== undefined) return frame;
        var control;
        reentry = true;
        var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.
        Error.prepareStackTrace = undefined;
        var previousDispatcher;
        previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
        // for warnings.
        ReactCurrentDispatcher$1.current = null;
        disableLogs();
        try {
            // This should throw.
            if (construct) {
                // Something should be setting the props in the constructor.
                var Fake = function() {
                    throw Error();
                }; // $FlowFixMe
                Object.defineProperty(Fake.prototype, "props", {
                    set: function() {
                        // We use a throwing setter instead of frozen or non-writable props
                        // because that won't throw in a non-strict mode function.
                        throw Error();
                    }
                });
                if (typeof Reflect === "object" && Reflect.construct) {
                    // We construct a different control for this case to include any extra
                    // frames added by the construct call.
                    try {
                        Reflect.construct(Fake, []);
                    } catch (x) {
                        control = x;
                    }
                    Reflect.construct(fn, [], Fake);
                } else {
                    try {
                        Fake.call();
                    } catch (x) {
                        control = x;
                    }
                    fn.call(Fake.prototype);
                }
            } else {
                try {
                    throw Error();
                } catch (x) {
                    control = x;
                }
                fn();
            }
        } catch (sample) {
            // This is inlined manually because closure doesn't do it for us.
            if (sample && control && typeof sample.stack === "string") {
                // This extracts the first frame from the sample that isn't also in the control.
                // Skipping one frame that we assume is the frame that calls the two.
                var sampleLines = sample.stack.split("\n");
                var controlLines = control.stack.split("\n");
                var s = sampleLines.length - 1;
                var c = controlLines.length - 1;
                while(s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c])// We expect at least one stack frame to be shared.
                // Typically this will be the root most one. However, stack frames may be
                // cut off due to maximum stack limits. In this case, one maybe cut off
                // earlier than the other. We assume that the sample is longer or the same
                // and there for cut off earlier. So we should find the root most frame in
                // the sample somewhere in the control.
                c--;
                for(; s >= 1 && c >= 0; s--, c--)// Next we find the first one that isn't the same which should be the
                // frame that called our sample function and the control.
                if (sampleLines[s] !== controlLines[c]) {
                    // In V8, the first line is describing the message but other VMs don't.
                    // If we're about to return the first line, and the control is also on the same
                    // line, that's a pretty good indicator that our sample threw at same line as
                    // the control. I.e. before we entered the sample frame. So we ignore this result.
                    // This can happen if you passed a class to function component, or non-function.
                    if (s !== 1 || c !== 1) do {
                        s--;
                        c--; // We may still have similar intermediate frames from the construct call.
                        // The next one that isn't the same should be our match though.
                        if (c < 0 || sampleLines[s] !== controlLines[c]) {
                            // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                            var _frame = "\n" + sampleLines[s].replace(" at new ", " at "); // If our component frame is labeled "<anonymous>"
                            // but we have a user-provided "displayName"
                            // splice it in to make the stack more readable.
                            if (fn.displayName && _frame.includes("<anonymous>")) _frame = _frame.replace("<anonymous>", fn.displayName);
                            if (typeof fn === "function") componentFrameCache.set(fn, _frame);
                            return _frame;
                        }
                    }while (s >= 1 && c >= 0);
                    break;
                }
            }
        } finally{
            reentry = false;
            ReactCurrentDispatcher$1.current = previousDispatcher;
            reenableLogs();
            Error.prepareStackTrace = previousPrepareStackTrace;
        } // Fallback to just using the name if we couldn't make it throw.
        var name = fn ? fn.displayName || fn.name : "";
        var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
        if (typeof fn === "function") componentFrameCache.set(fn, syntheticFrame);
        return syntheticFrame;
    }
    function describeFunctionComponentFrame(fn, source, ownerFn) {
        return describeNativeComponentFrame(fn, false);
    }
    function shouldConstruct(Component) {
        var prototype = Component.prototype;
        return !!(prototype && prototype.isReactComponent);
    }
    function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
        if (type == null) return "";
        if (typeof type === "function") return describeNativeComponentFrame(type, shouldConstruct(type));
        if (typeof type === "string") return describeBuiltInComponentFrame(type);
        switch(type){
            case REACT_SUSPENSE_TYPE:
                return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame("SuspenseList");
        }
        if (typeof type === "object") switch(type.$$typeof){
            case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
            case REACT_MEMO_TYPE:
                // Memo may contain any component type so we recursively resolve it.
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
            case REACT_LAZY_TYPE:
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                    // Lazy may contain any component type so we recursively resolve it.
                    return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {}
        }
        return "";
    }
    var loggedTypeFailures = {};
    var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
    function setCurrentlyValidatingElement(element) {
        if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
        } else ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
    function checkPropTypes(typeSpecs, values, location, componentName, element) {
        // $FlowFixMe This is okay but Flow doesn't know it.
        var has = Function.call.bind(hasOwnProperty);
        for(var typeSpecName in typeSpecs)if (has(typeSpecs, typeSpecName)) {
            var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
            // fail the render phase where it didn't fail before. So we log it.
            // After these have been cleaned up, we'll let them throw.
            try {
                // This is intentionally an invariant that gets caught. It's the same
                // behavior as without this statement except with a better message.
                if (typeof typeSpecs[typeSpecName] !== "function") {
                    // eslint-disable-next-line react-internal/prod-error-codes
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; " + "it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`." + "This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                }
                error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ex) {
                error$1 = ex;
            }
            if (error$1 && !(error$1 instanceof Error)) {
                setCurrentlyValidatingElement(element);
                error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                setCurrentlyValidatingElement(null);
            }
            if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                // Only monitor this failure once because there tends to be a lot of the
                // same error.
                loggedTypeFailures[error$1.message] = true;
                setCurrentlyValidatingElement(element);
                error("Failed %s type: %s", location, error$1.message);
                setCurrentlyValidatingElement(null);
            }
        }
    }
    function setCurrentlyValidatingElement$1(element) {
        if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            setExtraStackFrame(stack);
        } else setExtraStackFrame(null);
    }
    var propTypesMisspellWarningShown;
    propTypesMisspellWarningShown = false;
    function getDeclarationErrorAddendum() {
        if (ReactCurrentOwner.current) {
            var name = getComponentNameFromType(ReactCurrentOwner.current.type);
            if (name) return "\n\nCheck the render method of `" + name + "`.";
        }
        return "";
    }
    function getSourceInfoErrorAddendum(source) {
        if (source !== undefined) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
            var lineNumber = source.lineNumber;
            return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
        }
        return "";
    }
    function getSourceInfoErrorAddendumForProps(elementProps) {
        if (elementProps !== null && elementProps !== undefined) return getSourceInfoErrorAddendum(elementProps.__source);
        return "";
    }
    /**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */ var ownerHasKeyUseWarning = {};
    function getCurrentComponentErrorInfo(parentType) {
        var info = getDeclarationErrorAddendum();
        if (!info) {
            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
            if (parentName) info = "\n\nCheck the top-level render call using <" + parentName + ">.";
        }
        return info;
    }
    /**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */ function validateExplicitKey(element, parentType) {
        if (!element._store || element._store.validated || element.key != null) return;
        element._store.validated = true;
        var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
        if (ownerHasKeyUseWarning[currentComponentErrorInfo]) return;
        ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
        // property, it may be the creator of the child that's responsible for
        // assigning it a key.
        var childOwner = "";
        if (element && element._owner && element._owner !== ReactCurrentOwner.current) // Give the component that originally created this child.
        childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
        setCurrentlyValidatingElement$1(element);
        error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
        setCurrentlyValidatingElement$1(null);
    }
    /**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */ function validateChildKeys(node, parentType) {
        if (typeof node !== "object") return;
        if (isArray(node)) for(var i = 0; i < node.length; i++){
            var child = node[i];
            if (isValidElement(child)) validateExplicitKey(child, parentType);
        }
        else if (isValidElement(node)) // This element was passed in a valid location.
        {
            if (node._store) node._store.validated = true;
        } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === "function") // Entry iterators used to provide implicit keys,
            // but now we print a separate warning for them later.
            {
                if (iteratorFn !== node.entries) {
                    var iterator = iteratorFn.call(node);
                    var step;
                    while(!(step = iterator.next()).done)if (isValidElement(step.value)) validateExplicitKey(step.value, parentType);
                }
            }
        }
    }
    /**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */ function validatePropTypes(element) {
        var type = element.type;
        if (type === null || type === undefined || typeof type === "string") return;
        var propTypes;
        if (typeof type === "function") propTypes = type.propTypes;
        else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        type.$$typeof === REACT_MEMO_TYPE)) propTypes = type.propTypes;
        else return;
        if (propTypes) {
            // Intentionally inside to avoid triggering lazy initializers:
            var name = getComponentNameFromType(type);
            checkPropTypes(propTypes, element.props, "prop", name, element);
        } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
            propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:
            var _name = getComponentNameFromType(type);
            error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
        }
        if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
    /**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */ function validateFragmentProps(fragment) {
        var keys = Object.keys(fragment.props);
        for(var i = 0; i < keys.length; i++){
            var key = keys[i];
            if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
            }
        }
        if (fragment.ref !== null) {
            setCurrentlyValidatingElement$1(fragment);
            error("Invalid attribute `ref` supplied to `React.Fragment`.");
            setCurrentlyValidatingElement$1(null);
        }
    }
    function createElementWithValidation(type, props, children) {
        var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
        // succeed and there will likely be errors in render.
        if (!validType) {
            var info = "";
            if (type === undefined || typeof type === "object" && type !== null && Object.keys(type).length === 0) info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            var sourceInfo = getSourceInfoErrorAddendumForProps(props);
            if (sourceInfo) info += sourceInfo;
            else info += getDeclarationErrorAddendum();
            var typeString;
            if (type === null) typeString = "null";
            else if (isArray(type)) typeString = "array";
            else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
            } else typeString = typeof type;
            error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
        }
        var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
        // TODO: Drop this when these are no longer allowed as the type argument.
        if (element == null) return element;
         // Skip key warning if the type isn't valid since our key validation logic
        // doesn't expect a non-string/function type and can throw confusing errors.
        // We don't want exception behavior to differ between dev and prod.
        // (Rendering will throw with a helpful message and as soon as the type is
        // fixed, the key warnings will appear.)
        if (validType) for(var i = 2; i < arguments.length; i++)validateChildKeys(arguments[i], type);
        if (type === REACT_FRAGMENT_TYPE) validateFragmentProps(element);
        else validatePropTypes(element);
        return element;
    }
    var didWarnAboutDeprecatedCreateFactory = false;
    function createFactoryWithValidation(type) {
        var validatedFactory = createElementWithValidation.bind(null, type);
        validatedFactory.type = type;
        if (!didWarnAboutDeprecatedCreateFactory) {
            didWarnAboutDeprecatedCreateFactory = true;
            warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
        } // Legacy hook: remove it
        Object.defineProperty(validatedFactory, "type", {
            enumerable: false,
            get: function() {
                warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                Object.defineProperty(this, "type", {
                    value: type
                });
                return type;
            }
        });
        return validatedFactory;
    }
    function cloneElementWithValidation(element, props, children) {
        var newElement = cloneElement.apply(this, arguments);
        for(var i = 2; i < arguments.length; i++)validateChildKeys(arguments[i], newElement.type);
        validatePropTypes(newElement);
        return newElement;
    }
    function startTransition(scope, options) {
        var prevTransition = ReactCurrentBatchConfig.transition;
        ReactCurrentBatchConfig.transition = {};
        var currentTransition = ReactCurrentBatchConfig.transition;
        ReactCurrentBatchConfig.transition._updatedFibers = new Set();
        try {
            scope();
        } finally{
            ReactCurrentBatchConfig.transition = prevTransition;
            if (prevTransition === null && currentTransition._updatedFibers) {
                var updatedFibersCount = currentTransition._updatedFibers.size;
                if (updatedFibersCount > 10) warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
                currentTransition._updatedFibers.clear();
            }
        }
    }
    var didWarnAboutMessageChannel = false;
    var enqueueTaskImpl = null;
    function enqueueTask(task) {
        if (enqueueTaskImpl === null) try {
            // read require off the module object to get around the bundlers.
            // we don't want them to detect a require and bundle a Node polyfill.
            var requireString = ("require" + Math.random()).slice(0, 7);
            var nodeRequire = module && module[requireString]; // assuming we're in node, let's try to get node's
            // version of setImmediate, bypassing fake timers if any.
            enqueueTaskImpl = nodeRequire.call(module, "timers").setImmediate;
        } catch (_err) {
            // we're in a browser
            // we can't use regular timers because they may still be faked
            // so we try MessageChannel+postMessage instead
            enqueueTaskImpl = function(callback) {
                if (didWarnAboutMessageChannel === false) {
                    didWarnAboutMessageChannel = true;
                    if (typeof MessageChannel === "undefined") error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.");
                }
                var channel = new MessageChannel();
                channel.port1.onmessage = callback;
                channel.port2.postMessage(undefined);
            };
        }
        return enqueueTaskImpl(task);
    }
    var actScopeDepth = 0;
    var didWarnNoAwaitAct = false;
    function act(callback) {
        // `act` calls can be nested, so we track the depth. This represents the
        // number of `act` scopes on the stack.
        var prevActScopeDepth = actScopeDepth;
        actScopeDepth++;
        if (ReactCurrentActQueue.current === null) // This is the outermost `act` scope. Initialize the queue. The reconciler
        // will detect the queue and use it instead of Scheduler.
        ReactCurrentActQueue.current = [];
        var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
        var result;
        try {
            // Used to reproduce behavior of `batchedUpdates` in legacy mode. Only
            // set to `true` while the given callback is executed, not for updates
            // triggered during an async event, because this is how the legacy
            // implementation of `act` behaved.
            ReactCurrentActQueue.isBatchingLegacy = true;
            result = callback(); // Replicate behavior of original `act` implementation in legacy mode,
            // which flushed updates immediately after the scope function exits, even
            // if it's an async function.
            if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
                var queue = ReactCurrentActQueue.current;
                if (queue !== null) {
                    ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                    flushActQueue(queue);
                }
            }
        } catch (error) {
            popActScope(prevActScopeDepth);
            throw error;
        } finally{
            ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
        }
        if (result !== null && typeof result === "object" && typeof result.then === "function") {
            var thenableResult = result; // The callback is an async function (i.e. returned a promise). Wait
            // for it to resolve before exiting the current scope.
            var wasAwaited = false;
            var thenable = {
                then: function(resolve, reject) {
                    wasAwaited = true;
                    thenableResult.then(function(returnValue) {
                        popActScope(prevActScopeDepth);
                        if (actScopeDepth === 0) // We've exited the outermost act scope. Recursively flush the
                        // queue until there's no remaining work.
                        recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                        else resolve(returnValue);
                    }, function(error) {
                        // The callback threw an error.
                        popActScope(prevActScopeDepth);
                        reject(error);
                    });
                }
            };
            if (!didWarnNoAwaitAct && typeof Promise !== "undefined") // eslint-disable-next-line no-undef
            Promise.resolve().then(function() {}).then(function() {
                if (!wasAwaited) {
                    didWarnNoAwaitAct = true;
                    error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);");
                }
            });
            return thenable;
        } else {
            var returnValue = result; // The callback is not an async function. Exit the current scope
            // immediately, without awaiting.
            popActScope(prevActScopeDepth);
            if (actScopeDepth === 0) {
                // Exiting the outermost act scope. Flush the queue.
                var _queue = ReactCurrentActQueue.current;
                if (_queue !== null) {
                    flushActQueue(_queue);
                    ReactCurrentActQueue.current = null;
                } // Return a thenable. If the user awaits it, we'll flush again in
                // case additional work was scheduled by a microtask.
                var _thenable = {
                    then: function(resolve, reject) {
                        // Confirm we haven't re-entered another `act` scope, in case
                        // the user does something weird like await the thenable
                        // multiple times.
                        if (ReactCurrentActQueue.current === null) {
                            // Recursively flush the queue until there's no remaining work.
                            ReactCurrentActQueue.current = [];
                            recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                        } else resolve(returnValue);
                    }
                };
                return _thenable;
            } else {
                // Since we're inside a nested `act` scope, the returned thenable
                // immediately resolves. The outer scope will flush the queue.
                var _thenable2 = {
                    then: function(resolve, reject) {
                        resolve(returnValue);
                    }
                };
                return _thenable2;
            }
        }
    }
    function popActScope(prevActScopeDepth) {
        if (prevActScopeDepth !== actScopeDepth - 1) error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
        actScopeDepth = prevActScopeDepth;
    }
    function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
        var queue = ReactCurrentActQueue.current;
        if (queue !== null) try {
            flushActQueue(queue);
            enqueueTask(function() {
                if (queue.length === 0) {
                    // No additional work was scheduled. Finish.
                    ReactCurrentActQueue.current = null;
                    resolve(returnValue);
                } else // Keep flushing work until there's none left.
                recursivelyFlushAsyncActWork(returnValue, resolve, reject);
            });
        } catch (error) {
            reject(error);
        }
        else resolve(returnValue);
    }
    var isFlushing = false;
    function flushActQueue(queue) {
        if (!isFlushing) {
            // Prevent re-entrance.
            isFlushing = true;
            var i = 0;
            try {
                for(; i < queue.length; i++){
                    var callback = queue[i];
                    do callback = callback(true);
                    while (callback !== null);
                }
                queue.length = 0;
            } catch (error) {
                // If something throws, leave the remaining callbacks on the queue.
                queue = queue.slice(i + 1);
                throw error;
            } finally{
                isFlushing = false;
            }
        }
    }
    var createElement$1 = createElementWithValidation;
    var cloneElement$1 = cloneElementWithValidation;
    var createFactory = createFactoryWithValidation;
    var Children = {
        map: mapChildren,
        forEach: forEachChildren,
        count: countChildren,
        toArray: toArray,
        only: onlyChild
    };
    exports.Children = Children;
    exports.Component = Component;
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.Profiler = REACT_PROFILER_TYPE;
    exports.PureComponent = PureComponent;
    exports.StrictMode = REACT_STRICT_MODE_TYPE;
    exports.Suspense = REACT_SUSPENSE_TYPE;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
    exports.cloneElement = cloneElement$1;
    exports.createContext = createContext;
    exports.createElement = createElement$1;
    exports.createFactory = createFactory;
    exports.createRef = createRef;
    exports.forwardRef = forwardRef;
    exports.isValidElement = isValidElement;
    exports.lazy = lazy;
    exports.memo = memo;
    exports.startTransition = startTransition;
    exports.unstable_act = act;
    exports.useCallback = useCallback;
    exports.useContext = useContext;
    exports.useDebugValue = useDebugValue;
    exports.useDeferredValue = useDeferredValue;
    exports.useEffect = useEffect;
    exports.useId = useId;
    exports.useImperativeHandle = useImperativeHandle;
    exports.useInsertionEffect = useInsertionEffect;
    exports.useLayoutEffect = useLayoutEffect;
    exports.useMemo = useMemo;
    exports.useReducer = useReducer;
    exports.useRef = useRef;
    exports.useState = useState;
    exports.useSyncExternalStore = useSyncExternalStore;
    exports.useTransition = useTransition;
    exports.version = ReactVersion;
    /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */ if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
})();

},{}],"sBX5e":[function(require,module,exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ReactIs = require("41fa203826c8c83a");
// By explicitly using `prop-types` you are opting into new development behavior.
// http://fb.me/prop-types-in-prod
var throwOnDirectAccess = true;
module.exports = require("7fda382be1df1feb")(ReactIs.isElement, throwOnDirectAccess);

},{"41fa203826c8c83a":"8dsRR","7fda382be1df1feb":"7KIGG"}],"8dsRR":[function(require,module,exports) {
"use strict";
module.exports = require("8deeca93eb29c18");

},{"8deeca93eb29c18":"2NNYL"}],"2NNYL":[function(require,module,exports) {
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
(function() {
    "use strict";
    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var hasSymbol = typeof Symbol === "function" && Symbol.for;
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
    // (unstable) APIs that have been removed. Can we remove the symbols?
    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 0xeacf;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 0xead8;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 0xead4;
    var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 0xead9;
    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 0xead5;
    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 0xead6;
    var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 0xead7;
    function isValidElementType(type) {
        return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
        type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
    }
    function typeOf(object) {
        if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch($$typeof){
                case REACT_ELEMENT_TYPE:
                    var type = object.type;
                    switch(type){
                        case REACT_ASYNC_MODE_TYPE:
                        case REACT_CONCURRENT_MODE_TYPE:
                        case REACT_FRAGMENT_TYPE:
                        case REACT_PROFILER_TYPE:
                        case REACT_STRICT_MODE_TYPE:
                        case REACT_SUSPENSE_TYPE:
                            return type;
                        default:
                            var $$typeofType = type && type.$$typeof;
                            switch($$typeofType){
                                case REACT_CONTEXT_TYPE:
                                case REACT_FORWARD_REF_TYPE:
                                case REACT_LAZY_TYPE:
                                case REACT_MEMO_TYPE:
                                case REACT_PROVIDER_TYPE:
                                    return $$typeofType;
                                default:
                                    return $$typeof;
                            }
                    }
                case REACT_PORTAL_TYPE:
                    return $$typeof;
            }
        }
        return undefined;
    } // AsyncMode is deprecated along with isAsyncMode
    var AsyncMode = REACT_ASYNC_MODE_TYPE;
    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated
    function isAsyncMode(object) {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint
            console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
        }
        return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
    }
    function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
    }
    function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
    }
    function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
    }
    function isElement(object) {
        return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }
    function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
    }
    function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
    }
    function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
    }
    function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
    }
    function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
    }
    function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }
    function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
    }
    exports.AsyncMode = AsyncMode;
    exports.ConcurrentMode = ConcurrentMode;
    exports.ContextConsumer = ContextConsumer;
    exports.ContextProvider = ContextProvider;
    exports.Element = Element;
    exports.ForwardRef = ForwardRef;
    exports.Fragment = Fragment;
    exports.Lazy = Lazy;
    exports.Memo = Memo;
    exports.Portal = Portal;
    exports.Profiler = Profiler;
    exports.StrictMode = StrictMode;
    exports.Suspense = Suspense;
    exports.isAsyncMode = isAsyncMode;
    exports.isConcurrentMode = isConcurrentMode;
    exports.isContextConsumer = isContextConsumer;
    exports.isContextProvider = isContextProvider;
    exports.isElement = isElement;
    exports.isForwardRef = isForwardRef;
    exports.isFragment = isFragment;
    exports.isLazy = isLazy;
    exports.isMemo = isMemo;
    exports.isPortal = isPortal;
    exports.isProfiler = isProfiler;
    exports.isStrictMode = isStrictMode;
    exports.isSuspense = isSuspense;
    exports.isValidElementType = isValidElementType;
    exports.typeOf = typeOf;
})();

},{}],"7KIGG":[function(require,module,exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
var ReactIs = require("a12f1e24f394e570");
var assign = require("d74134e0e14c06b1");
var ReactPropTypesSecret = require("f447e48a1b3b99c4");
var has = require("beefcd9be3e3b0b5");
var checkPropTypes = require("76bd79efafef057e");
var printWarning = function() {};
printWarning = function(text) {
    var message = "Warning: " + text;
    if (typeof console !== "undefined") console.error(message);
    try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
    } catch (x) {}
};
function emptyFunctionThatReturnsNull() {
    return null;
}
module.exports = function(isValidElement, throwOnDirectAccess) {
    /* global Symbol */ var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = "@@iterator"; // Before Symbol spec.
    /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */ function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") return iteratorFn;
    }
    /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */ var ANONYMOUS = "<<anonymous>>";
    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
    };
    /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */ /*eslint-disable no-self-compare*/ function is(x, y) {
        // SameValue algorithm
        if (x === y) // Steps 1-5, 7-10
        // Steps 6.b-6.e: +0 != -0
        return x !== 0 || 1 / x === 1 / y;
        else // Step 6.a: NaN == NaN
        return x !== x && y !== y;
    }
    /*eslint-enable no-self-compare*/ /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */ function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype;
    function createChainableTypeChecker(validate) {
        var manualPropTypeCallCache = {};
        var manualPropTypeWarningCount = 0;
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
            componentName = componentName || ANONYMOUS;
            propFullName = propFullName || propName;
            if (secret !== ReactPropTypesSecret) {
                if (throwOnDirectAccess) {
                    // New behavior only for users of `prop-types` package
                    var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
                    err.name = "Invariant Violation";
                    throw err;
                } else if (typeof console !== "undefined") {
                    // Old behavior for people using React.PropTypes
                    var cacheKey = componentName + ":" + propName;
                    if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
                    manualPropTypeWarningCount < 3) {
                        printWarning("You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated " + "and will throw in the standalone `prop-types` package. " + "You may be seeing this warning due to a third-party PropTypes " + "library. See https://fb.me/react-warning-dont-call-proptypes " + "for details.");
                        manualPropTypeCallCache[cacheKey] = true;
                        manualPropTypeWarningCount++;
                    }
                }
            }
            if (props[propName] == null) {
                if (isRequired) {
                    if (props[propName] === null) return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
                    return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
                }
                return null;
            } else return validate(props, propName, componentName, location, propFullName);
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
    }
    function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== expectedType) {
                // `propValue` being instance of, say, date/regexp, pass the 'object'
                // check, but we can offer a more precise error message here rather than
                // 'of type `object`'.
                var preciseType = getPreciseType(propValue);
                return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."), {
                    expectedType: expectedType
                });
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }
    function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== "function") return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
            var propValue = props[propName];
            if (!Array.isArray(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
            }
            for(var i = 0; i < propValue.length; i++){
                var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
                if (error instanceof Error) return error;
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!isValidElement(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!ReactIs.isValidElementType(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
            if (!(props[propName] instanceof expectedClass)) {
                var expectedClassName = expectedClass.name || ANONYMOUS;
                var actualClassName = getClassName(props[propName]);
                return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
            {
                if (arguments.length > 1) printWarning("Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. " + "A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).");
                else printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
            return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            for(var i = 0; i < expectedValues.length; i++){
                if (is(propValue, expectedValues[i])) return null;
            }
            var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
                var type = getPreciseType(value);
                if (type === "symbol") return String(value);
                return value;
            });
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
    }
    function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== "function") return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== "object") return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
            for(var key in propValue)if (has(propValue, key)) {
                var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                if (error instanceof Error) return error;
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
            printWarning("Invalid argument supplied to oneOfType, expected an instance of array.");
            return emptyFunctionThatReturnsNull;
        }
        for(var i = 0; i < arrayOfTypeCheckers.length; i++){
            var checker = arrayOfTypeCheckers[i];
            if (typeof checker !== "function") {
                printWarning("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + ".");
                return emptyFunctionThatReturnsNull;
            }
        }
        function validate(props, propName, componentName, location, propFullName) {
            var expectedTypes = [];
            for(var i = 0; i < arrayOfTypeCheckers.length; i++){
                var checker = arrayOfTypeCheckers[i];
                var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
                if (checkerResult == null) return null;
                if (checkerResult.data && has(checkerResult.data, "expectedType")) expectedTypes.push(checkerResult.data.expectedType);
            }
            var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
    }
    function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            if (!isNode(props[propName])) return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError((componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; " + "it must be a function, usually from the `prop-types` package, but received `" + type + "`.");
    }
    function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== "object") return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
            for(var key in shapeTypes){
                var checker = shapeTypes[key];
                if (typeof checker !== "function") return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                if (error) return error;
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== "object") return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
            // We need to check all keys in case some are required but missing from props.
            var allKeys = assign({}, props[propName], shapeTypes);
            for(var key in allKeys){
                var checker = shapeTypes[key];
                if (has(shapeTypes, key) && typeof checker !== "function") return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                if (!checker) return new PropTypeError("Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`." + "\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  "));
                var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                if (error) return error;
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function isNode(propValue) {
        switch(typeof propValue){
            case "number":
            case "string":
            case "undefined":
                return true;
            case "boolean":
                return !propValue;
            case "object":
                if (Array.isArray(propValue)) return propValue.every(isNode);
                if (propValue === null || isValidElement(propValue)) return true;
                var iteratorFn = getIteratorFn(propValue);
                if (iteratorFn) {
                    var iterator = iteratorFn.call(propValue);
                    var step;
                    if (iteratorFn !== propValue.entries) while(!(step = iterator.next()).done){
                        if (!isNode(step.value)) return false;
                    }
                    else // Iterator will provide entry [k,v] tuples rather than values.
                    while(!(step = iterator.next()).done){
                        var entry = step.value;
                        if (entry) {
                            if (!isNode(entry[1])) return false;
                        }
                    }
                } else return false;
                return true;
            default:
                return false;
        }
    }
    function isSymbol(propType, propValue) {
        // Native Symbol.
        if (propType === "symbol") return true;
        // falsy value can't be a Symbol
        if (!propValue) return false;
        // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
        if (propValue["@@toStringTag"] === "Symbol") return true;
        // Fallback for non-spec compliant Symbols which are polyfilled.
        if (typeof Symbol === "function" && propValue instanceof Symbol) return true;
        return false;
    }
    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) return "array";
        if (propValue instanceof RegExp) // Old webkits (at least until Android 4.0) return 'function' rather than
        // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
        // passes PropTypes.object.
        return "object";
        if (isSymbol(propType, propValue)) return "symbol";
        return propType;
    }
    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) return "" + propValue;
        var propType = getPropType(propValue);
        if (propType === "object") {
            if (propValue instanceof Date) return "date";
            else if (propValue instanceof RegExp) return "regexp";
        }
        return propType;
    }
    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch(type){
            case "array":
            case "object":
                return "an " + type;
            case "boolean":
            case "date":
            case "regexp":
                return "a " + type;
            default:
                return type;
        }
    }
    // Returns class name of the object, if any.
    function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) return ANONYMOUS;
        return propValue.constructor.name;
    }
    ReactPropTypes.checkPropTypes = checkPropTypes;
    ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
};

},{"a12f1e24f394e570":"8dsRR","d74134e0e14c06b1":"g5mmT","f447e48a1b3b99c4":"3drNE","beefcd9be3e3b0b5":"8UoRt","76bd79efafef057e":"jmhVZ"}],"g5mmT":[function(require,module,exports) {
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ "use strict";
/* eslint-disable no-unused-vars */ var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
    if (val === null || val === undefined) throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(val);
}
function shouldUseNative() {
    try {
        if (!Object.assign) return false;
        // Detect buggy property enumeration order in older V8 versions.
        // https://bugs.chromium.org/p/v8/issues/detail?id=4118
        var test1 = new String("abc"); // eslint-disable-line no-new-wrappers
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") return false;
        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test2 = {};
        for(var i = 0; i < 10; i++)test2["_" + String.fromCharCode(i)] = i;
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
            return test2[n];
        });
        if (order2.join("") !== "0123456789") return false;
        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
            test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") return false;
        return true;
    } catch (err) {
        // We don't expect any of the above to throw, but better to be safe.
        return false;
    }
}
module.exports = shouldUseNative() ? Object.assign : function(target, source) {
    var from;
    var to = toObject(target);
    var symbols;
    for(var s = 1; s < arguments.length; s++){
        from = Object(arguments[s]);
        for(var key in from)if (hasOwnProperty.call(from, key)) to[key] = from[key];
        if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for(var i = 0; i < symbols.length; i++)if (propIsEnumerable.call(from, symbols[i])) to[symbols[i]] = from[symbols[i]];
        }
    }
    return to;
};

},{}],"3drNE":[function(require,module,exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
module.exports = ReactPropTypesSecret;

},{}],"8UoRt":[function(require,module,exports) {
module.exports = Function.call.bind(Object.prototype.hasOwnProperty);

},{}],"jmhVZ":[function(require,module,exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
var printWarning = function() {};
var ReactPropTypesSecret = require("bbd10a3ce0793994");
var loggedTypeFailures = {};
var has = require("6e9df76f54fb4a31");
printWarning = function(text) {
    var message = "Warning: " + text;
    if (typeof console !== "undefined") console.error(message);
    try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
    } catch (x) {}
};
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */ function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    for(var typeSpecName in typeSpecs)if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
            // This is intentionally an invariant that gets caught. It's the same
            // behavior as without this statement except with a better message.
            if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; " + "it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`." + "This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                err.name = "Invariant Violation";
                throw err;
            }
            error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
            error = ex;
        }
        if (error && !(error instanceof Error)) printWarning((componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker " + "function must return `null` or an `Error` but returned a " + typeof error + ". " + "You may have forgotten to pass an argument to the type checker " + "creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and " + "shape all require an argument).");
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
            // Only monitor this failure once because there tends to be a lot of the
            // same error.
            loggedTypeFailures[error.message] = true;
            var stack = getStack ? getStack() : "";
            printWarning("Failed " + location + " type: " + error.message + (stack != null ? stack : ""));
        }
    }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */ checkPropTypes.resetWarningCache = function() {
    loggedTypeFailures = {};
};
module.exports = checkPropTypes;

},{"bbd10a3ce0793994":"3drNE","6e9df76f54fb4a31":"8UoRt"}],"7RLh3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clsx", ()=>clsx);
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) {
        if (Array.isArray(e)) for(t = 0; t < e.length; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
        else for(t in e)e[t] && (n && (n += " "), n += t);
    }
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = ""; f < arguments.length;)(e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
exports.default = clsx;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"1OlAz"}],"46ifv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Navigation);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _getUserLocale = require("get-user-locale");
var _datesJs = require("../shared/dates.js");
var _dateFormatterJs = require("../shared/dateFormatter.js");
"use client";
var className = "react-calendar__navigation";
function Navigation(_a) {
    var activeStartDate = _a.activeStartDate, drillUp = _a.drillUp, _b = _a.formatMonthYear, formatMonthYear = _b === void 0 ? (0, _dateFormatterJs.formatMonthYear) : _b, _c = _a.formatYear, formatYear = _c === void 0 ? (0, _dateFormatterJs.formatYear) : _c, locale = _a.locale, maxDate = _a.maxDate, minDate = _a.minDate, _d = _a.navigationAriaLabel, navigationAriaLabel = _d === void 0 ? "" : _d, navigationAriaLive = _a.navigationAriaLive, navigationLabel = _a.navigationLabel, _e = _a.next2AriaLabel, next2AriaLabel = _e === void 0 ? "" : _e, _f = _a.next2Label, next2Label = _f === void 0 ? "\xbb" : _f, _g = _a.nextAriaLabel, nextAriaLabel = _g === void 0 ? "" : _g, _h = _a.nextLabel, nextLabel = _h === void 0 ? "›" : _h, _j = _a.prev2AriaLabel, prev2AriaLabel = _j === void 0 ? "" : _j, _k = _a.prev2Label, prev2Label = _k === void 0 ? "\xab" : _k, _l = _a.prevAriaLabel, prevAriaLabel = _l === void 0 ? "" : _l, _m = _a.prevLabel, prevLabel = _m === void 0 ? "‹" : _m, setActiveStartDate = _a.setActiveStartDate, showDoubleView = _a.showDoubleView, view = _a.view, views = _a.views;
    var drillUpAvailable = views.indexOf(view) > 0;
    var shouldShowPrevNext2Buttons = view !== "century";
    var previousActiveStartDate = (0, _datesJs.getBeginPrevious)(view, activeStartDate);
    var previousActiveStartDate2 = shouldShowPrevNext2Buttons ? (0, _datesJs.getBeginPrevious2)(view, activeStartDate) : undefined;
    var nextActiveStartDate = (0, _datesJs.getBeginNext)(view, activeStartDate);
    var nextActiveStartDate2 = shouldShowPrevNext2Buttons ? (0, _datesJs.getBeginNext2)(view, activeStartDate) : undefined;
    var prevButtonDisabled = function() {
        if (previousActiveStartDate.getFullYear() < 0) return true;
        var previousActiveEndDate = (0, _datesJs.getEndPrevious)(view, activeStartDate);
        return minDate && minDate >= previousActiveEndDate;
    }();
    var prev2ButtonDisabled = shouldShowPrevNext2Buttons && function() {
        if (previousActiveStartDate2.getFullYear() < 0) return true;
        var previousActiveEndDate = (0, _datesJs.getEndPrevious2)(view, activeStartDate);
        return minDate && minDate >= previousActiveEndDate;
    }();
    var nextButtonDisabled = maxDate && maxDate < nextActiveStartDate;
    var next2ButtonDisabled = shouldShowPrevNext2Buttons && maxDate && maxDate < nextActiveStartDate2;
    function onClickPrevious() {
        setActiveStartDate(previousActiveStartDate, "prev");
    }
    function onClickPrevious2() {
        setActiveStartDate(previousActiveStartDate2, "prev2");
    }
    function onClickNext() {
        setActiveStartDate(nextActiveStartDate, "next");
    }
    function onClickNext2() {
        setActiveStartDate(nextActiveStartDate2, "next2");
    }
    function renderLabel(date) {
        var label = function() {
            switch(view){
                case "century":
                    return (0, _datesJs.getCenturyLabel)(locale, formatYear, date);
                case "decade":
                    return (0, _datesJs.getDecadeLabel)(locale, formatYear, date);
                case "year":
                    return formatYear(locale, date);
                case "month":
                    return formatMonthYear(locale, date);
                default:
                    throw new Error("Invalid view: ".concat(view, "."));
            }
        }();
        return navigationLabel ? navigationLabel({
            date: date,
            label: label,
            locale: locale || (0, _getUserLocale.getUserLocale)() || undefined,
            view: view
        }) : label;
    }
    function renderButton() {
        var labelClassName = "".concat(className, "__label");
        return (0, _reactDefault.default).createElement("button", {
            "aria-label": navigationAriaLabel,
            "aria-live": navigationAriaLive,
            className: labelClassName,
            disabled: !drillUpAvailable,
            onClick: drillUp,
            style: {
                flexGrow: 1
            },
            type: "button"
        }, (0, _reactDefault.default).createElement("span", {
            className: "".concat(labelClassName, "__labelText ").concat(labelClassName, "__labelText--from")
        }, renderLabel(activeStartDate)), showDoubleView ? (0, _reactDefault.default).createElement((0, _reactDefault.default).Fragment, null, (0, _reactDefault.default).createElement("span", {
            className: "".concat(labelClassName, "__divider")
        }, " – "), (0, _reactDefault.default).createElement("span", {
            className: "".concat(labelClassName, "__labelText ").concat(labelClassName, "__labelText--to")
        }, renderLabel(nextActiveStartDate))) : null);
    }
    return (0, _reactDefault.default).createElement("div", {
        className: className
    }, prev2Label !== null && shouldShowPrevNext2Buttons ? (0, _reactDefault.default).createElement("button", {
        "aria-label": prev2AriaLabel,
        className: "".concat(className, "__arrow ").concat(className, "__prev2-button"),
        disabled: prev2ButtonDisabled,
        onClick: onClickPrevious2,
        type: "button"
    }, prev2Label) : null, prevLabel !== null && (0, _reactDefault.default).createElement("button", {
        "aria-label": prevAriaLabel,
        className: "".concat(className, "__arrow ").concat(className, "__prev-button"),
        disabled: prevButtonDisabled,
        onClick: onClickPrevious,
        type: "button"
    }, prevLabel), renderButton(), nextLabel !== null && (0, _reactDefault.default).createElement("button", {
        "aria-label": nextAriaLabel,
        className: "".concat(className, "__arrow ").concat(className, "__next-button"),
        disabled: nextButtonDisabled,
        onClick: onClickNext,
        type: "button"
    }, nextLabel), next2Label !== null && shouldShowPrevNext2Buttons ? (0, _reactDefault.default).createElement("button", {
        "aria-label": next2AriaLabel,
        className: "".concat(className, "__arrow ").concat(className, "__next2-button"),
        disabled: next2ButtonDisabled,
        onClick: onClickNext2,
        type: "button"
    }, next2Label) : null);
}

},{"react":"k0IeW","get-user-locale":"hoyOT","../shared/dates.js":"jnNCe","../shared/dateFormatter.js":"an7bz","@parcel/transformer-js/src/esmodule-helpers.js":"1OlAz"}],"hoyOT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getUserLocales", ()=>getUserLocales);
parcelHelpers.export(exports, "getUserLocale", ()=>getUserLocale);
var _lodashMemoize = require("lodash.memoize");
var _lodashMemoizeDefault = parcelHelpers.interopDefault(_lodashMemoize);
function resolver(options) {
    return JSON.stringify(options);
}
function isString(el) {
    return typeof el === "string";
}
function isUnique(el, index, arr) {
    return arr.indexOf(el) === index;
}
function isAllLowerCase(el) {
    return el.toLowerCase() === el;
}
function fixCommas(el) {
    return el.indexOf(",") === -1 ? el : el.split(",");
}
function normalizeLocale(locale) {
    if (!locale) return locale;
    if (locale === "C" || locale === "posix" || locale === "POSIX") return "en-US";
    // If there's a dot (.) in the locale, it's likely in the format of "en-US.UTF-8", so we only take the first part
    if (locale.indexOf(".") !== -1) {
        var _a = locale.split(".")[0], actualLocale = _a === void 0 ? "" : _a;
        return normalizeLocale(actualLocale);
    }
    // If there's an at sign (@) in the locale, it's likely in the format of "en-US@posix", so we only take the first part
    if (locale.indexOf("@") !== -1) {
        var _b = locale.split("@")[0], actualLocale = _b === void 0 ? "" : _b;
        return normalizeLocale(actualLocale);
    }
    // If there's a dash (-) in the locale and it's not all lower case, it's already in the format of "en-US", so we return it
    if (locale.indexOf("-") === -1 || !isAllLowerCase(locale)) return locale;
    var _c = locale.split("-"), splitEl1 = _c[0], _d = _c[1], splitEl2 = _d === void 0 ? "" : _d;
    return "".concat(splitEl1, "-").concat(splitEl2.toUpperCase());
}
function getUserLocalesInternal(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.useFallbackLocale, useFallbackLocale = _c === void 0 ? true : _c, _d = _b.fallbackLocale, fallbackLocale = _d === void 0 ? "en-US" : _d;
    var languageList = [];
    if (typeof navigator !== "undefined") {
        var rawLanguages = navigator.languages || [];
        var languages = [];
        for(var _i = 0, rawLanguages_1 = rawLanguages; _i < rawLanguages_1.length; _i++){
            var rawLanguagesItem = rawLanguages_1[_i];
            languages = languages.concat(fixCommas(rawLanguagesItem));
        }
        var rawLanguage = navigator.language;
        var language = rawLanguage ? fixCommas(rawLanguage) : rawLanguage;
        languageList = languageList.concat(languages, language);
    }
    if (useFallbackLocale) languageList.push(fallbackLocale);
    return languageList.filter(isString).map(normalizeLocale).filter(isUnique);
}
var getUserLocales = (0, _lodashMemoizeDefault.default)(getUserLocalesInternal, resolver);
function getUserLocaleInternal(options) {
    return getUserLocales(options)[0] || null;
}
var getUserLocale = (0, _lodashMemoizeDefault.default)(getUserLocaleInternal, resolver);
exports.default = getUserLocale;

},{"lodash.memoize":"dr19N","@parcel/transformer-js/src/esmodule-helpers.js":"1OlAz"}],"dr19N":[function(require,module,exports) {
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ /** Used as the `TypeError` message for "Functions" methods. */ var global = arguments[3];
var FUNC_ERROR_TEXT = "Expected a function";
/** Used to stand-in for `undefined` hash values. */ var HASH_UNDEFINED = "__lodash_hash_undefined__";
/** `Object#toString` result references. */ var funcTag = "[object Function]", genTag = "[object GeneratorFunction]";
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */ var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */ var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Detect free variable `global` from Node.js. */ var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
/** Detect free variable `self`. */ var freeSelf = typeof self == "object" && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root = freeGlobal || freeSelf || Function("return this")();
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */ function getValue(object, key) {
    return object == null ? undefined : object[key];
}
/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */ function isHostObject(value) {
    // Many host objects are `Object` objects that can coerce to strings
    // despite having improperly defined `toString` methods.
    var result = false;
    if (value != null && typeof value.toString != "function") try {
        result = !!(value + "");
    } catch (e) {}
    return result;
}
/** Used for built-in method references. */ var arrayProto = Array.prototype, funcProto = Function.prototype, objectProto = Object.prototype;
/** Used to detect overreaching core-js shims. */ var coreJsData = root["__core-js_shared__"];
/** Used to detect methods masquerading as native. */ var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
}();
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var objectToString = objectProto.toString;
/** Used to detect if a method is native. */ var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
/** Built-in value references. */ var splice = arrayProto.splice;
/* Built-in method references that are verified to be native. */ var Map = getNative(root, "Map"), nativeCreate = getNative(Object, "create");
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function Hash(entries) {
    var index = -1, length = entries ? entries.length : 0;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */ function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
}
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function hashDelete(key) {
    return this.has(key) && delete this.__data__[key];
}
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */ function hashSet(key, value) {
    var data = this.__data__;
    data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
    return this;
}
// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function ListCache(entries) {
    var index = -1, length = entries ? entries.length : 0;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */ function listCacheClear() {
    this.__data__ = [];
}
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function listCacheDelete(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) return false;
    var lastIndex = data.length - 1;
    if (index == lastIndex) data.pop();
    else splice.call(data, index, 1);
    return true;
}
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function listCacheGet(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    return index < 0 ? undefined : data[index][1];
}
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
}
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */ function listCacheSet(key, value) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) data.push([
        key,
        value
    ]);
    else data[index][1] = value;
    return this;
}
// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function MapCache(entries) {
    var index = -1, length = entries ? entries.length : 0;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */ function mapCacheClear() {
    this.__data__ = {
        "hash": new Hash,
        "map": new (Map || ListCache),
        "string": new Hash
    };
}
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function mapCacheDelete(key) {
    return getMapData(this, key)["delete"](key);
}
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function mapCacheGet(key) {
    return getMapData(this, key).get(key);
}
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function mapCacheHas(key) {
    return getMapData(this, key).has(key);
}
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */ function mapCacheSet(key, value) {
    getMapData(this, key).set(key, value);
    return this;
}
// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */ function assocIndexOf(array, key) {
    var length = array.length;
    while(length--){
        if (eq(array[length][0], key)) return length;
    }
    return -1;
}
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */ function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) return false;
    var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
}
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */ function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */ function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
}
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */ function isKeyable(value) {
    var type = typeof value;
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */ function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
}
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */ function toSource(func) {
    if (func != null) {
        try {
            return funcToString.call(func);
        } catch (e) {}
        try {
            return func + "";
        } catch (e) {}
    }
    return "";
}
/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */ function memoize(func, resolver) {
    if (typeof func != "function" || resolver && typeof resolver != "function") throw new TypeError(FUNC_ERROR_TEXT);
    var memoized = function() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key)) return cache.get(key);
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result);
        return result;
    };
    memoized.cache = new (memoize.Cache || MapCache);
    return memoized;
}
// Assign cache to `_.memoize`.
memoize.Cache = MapCache;
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */ function eq(value, other) {
    return value === other || value !== value && other !== other;
}
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */ function isFunction(value) {
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 8-9 which returns 'object' for typed array and other constructors.
    var tag = isObject(value) ? objectToString.call(value) : "";
    return tag == funcTag || tag == genTag;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function isObject(value) {
    var type = typeof value;
    return !!value && (type == "object" || type == "function");
}
module.exports = memoize;

},{}],"jnNCe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* Simple getters - getting a property of a given point in time */ /**
 * Gets day of the week of a given date.
 * @param {Date} date Date.
 * @param {CalendarType} [calendarType="iso8601"] Calendar type.
 * @returns {number} Day of the week.
 */ parcelHelpers.export(exports, "getDayOfWeek", ()=>getDayOfWeek);
/**
 * Century
 */ /**
 * Gets the year of the beginning of a century of a given date.
 * @param {Date} date Date.
 * @returns {number} Year of the beginning of a century.
 */ parcelHelpers.export(exports, "getBeginOfCenturyYear", ()=>getBeginOfCenturyYear);
/**
 * Decade
 */ /**
 * Gets the year of the beginning of a decade of a given date.
 * @param {Date} date Date.
 * @returns {number} Year of the beginning of a decade.
 */ parcelHelpers.export(exports, "getBeginOfDecadeYear", ()=>getBeginOfDecadeYear);
/**
 * Week
 */ /**
 * Returns the beginning of a given week.
 *
 * @param {Date} date Date.
 * @param {CalendarType} [calendarType="iso8601"] Calendar type.
 * @returns {Date} Beginning of a given week.
 */ parcelHelpers.export(exports, "getBeginOfWeek", ()=>getBeginOfWeek);
/**
 * Gets week number according to ISO 8601 or US standard.
 * In ISO 8601, Arabic and Hebrew week 1 is the one with January 4.
 * In US calendar week 1 is the one with January 1.
 *
 * @param {Date} date Date.
 * @param {CalendarType} [calendarType="iso8601"] Calendar type.
 * @returns {number} Week number.
 */ parcelHelpers.export(exports, "getWeekNumber", ()=>getWeekNumber);
/**
 * Others
 */ /**
 * Returns the beginning of a given range.
 *
 * @param {RangeType} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 * @returns {Date} Beginning of a given range.
 */ parcelHelpers.export(exports, "getBegin", ()=>getBegin);
/**
 * Returns the beginning of a previous given range.
 *
 * @param {RangeType} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 * @returns {Date} Beginning of a previous given range.
 */ parcelHelpers.export(exports, "getBeginPrevious", ()=>getBeginPrevious);
/**
 * Returns the beginning of a next given range.
 *
 * @param {RangeType} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 * @returns {Date} Beginning of a next given range.
 */ parcelHelpers.export(exports, "getBeginNext", ()=>getBeginNext);
parcelHelpers.export(exports, "getBeginPrevious2", ()=>getBeginPrevious2);
parcelHelpers.export(exports, "getBeginNext2", ()=>getBeginNext2);
/**
 * Returns the end of a given range.
 *
 * @param {RangeType} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 * @returns {Date} End of a given range.
 */ parcelHelpers.export(exports, "getEnd", ()=>getEnd);
/**
 * Returns the end of a previous given range.
 *
 * @param {RangeType} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 * @returns {Date} End of a previous given range.
 */ parcelHelpers.export(exports, "getEndPrevious", ()=>getEndPrevious);
parcelHelpers.export(exports, "getEndPrevious2", ()=>getEndPrevious2);
/**
 * Returns an array with the beginning and the end of a given range.
 *
 * @param {RangeType} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 * @returns {Date[]} Beginning and end of a given range.
 */ parcelHelpers.export(exports, "getRange", ()=>getRange);
/**
 * Creates a range out of two values, ensuring they are in order and covering entire period ranges.
 *
 * @param {RangeType} rangeType Range type (e.g. 'day')
 * @param {Date} date1 First date.
 * @param {Date} date2 Second date.
 * @returns {Date[]} Beginning and end of a given range.
 */ parcelHelpers.export(exports, "getValueRange", ()=>getValueRange);
/**
 * @callback FormatYear
 * @param {string} locale Locale.
 * @param {Date} date Date.
 * @returns {string} Formatted year.
 */ /**
 * Returns a string labelling a century of a given date.
 * For example, for 2017 it will return 2001-2100.
 *
 * @param {string} locale Locale.
 * @param {FormatYear} formatYear Function to format a year.
 * @param {Date|string|number} date Date or a year as a string or as a number.
 * @returns {string} String labelling a century of a given date.
 */ parcelHelpers.export(exports, "getCenturyLabel", ()=>getCenturyLabel);
/**
 * Returns a string labelling a decade of a given date.
 * For example, for 2017 it will return 2011-2020.
 *
 * @param {string} locale Locale.
 * @param {FormatYear} formatYear Function to format a year.
 * @param {Date|string|number} date Date or a year as a string or as a number.
 * @returns {string} String labelling a decade of a given date.
 */ parcelHelpers.export(exports, "getDecadeLabel", ()=>getDecadeLabel);
/**
 * Returns a boolean determining whether a given date is the current day of the week.
 *
 * @param {Date} date Date.
 * @returns {boolean} Whether a given date is the current day of the week.
 */ parcelHelpers.export(exports, "isCurrentDayOfWeek", ()=>isCurrentDayOfWeek);
/**
 * Returns a boolean determining whether a given date is a weekend day.
 *
 * @param {Date} date Date.
 * @param {CalendarType} [calendarType="iso8601"] Calendar type.
 * @returns {boolean} Whether a given date is a weekend day.
 */ parcelHelpers.export(exports, "isWeekend", ()=>isWeekend);
var _dateUtils = require("@wojtekmaj/date-utils");
var _constJs = require("./const.js");
var _dateFormatterJs = require("./dateFormatter.js");
var SUNDAY = (0, _constJs.WEEKDAYS)[0];
var FRIDAY = (0, _constJs.WEEKDAYS)[5];
var SATURDAY = (0, _constJs.WEEKDAYS)[6];
function getDayOfWeek(date, calendarType) {
    if (calendarType === void 0) calendarType = (0, _constJs.CALENDAR_TYPES).ISO_8601;
    var weekday = date.getDay();
    switch(calendarType){
        case (0, _constJs.CALENDAR_TYPES).ISO_8601:
            // Shifts days of the week so that Monday is 0, Sunday is 6
            return (weekday + 6) % 7;
        case (0, _constJs.CALENDAR_TYPES).ISLAMIC:
            return (weekday + 1) % 7;
        case (0, _constJs.CALENDAR_TYPES).HEBREW:
        case (0, _constJs.CALENDAR_TYPES).GREGORY:
            return weekday;
        default:
            throw new Error("Unsupported calendar type.");
    }
}
function getBeginOfCenturyYear(date) {
    var beginOfCentury = (0, _dateUtils.getCenturyStart)(date);
    return (0, _dateUtils.getYear)(beginOfCentury);
}
function getBeginOfDecadeYear(date) {
    var beginOfDecade = (0, _dateUtils.getDecadeStart)(date);
    return (0, _dateUtils.getYear)(beginOfDecade);
}
function getBeginOfWeek(date, calendarType) {
    if (calendarType === void 0) calendarType = (0, _constJs.CALENDAR_TYPES).ISO_8601;
    var year = (0, _dateUtils.getYear)(date);
    var monthIndex = (0, _dateUtils.getMonth)(date);
    var day = date.getDate() - getDayOfWeek(date, calendarType);
    return new Date(year, monthIndex, day);
}
function getWeekNumber(date, calendarType) {
    if (calendarType === void 0) calendarType = (0, _constJs.CALENDAR_TYPES).ISO_8601;
    var calendarTypeForWeekNumber = calendarType === (0, _constJs.CALENDAR_TYPES).GREGORY ? (0, _constJs.CALENDAR_TYPES).GREGORY : (0, _constJs.CALENDAR_TYPES).ISO_8601;
    var beginOfWeek = getBeginOfWeek(date, calendarType);
    var year = (0, _dateUtils.getYear)(date) + 1;
    var dayInWeekOne;
    var beginOfFirstWeek;
    // Look for the first week one that does not come after a given date
    do {
        dayInWeekOne = new Date(year, 0, calendarTypeForWeekNumber === (0, _constJs.CALENDAR_TYPES).ISO_8601 ? 4 : 1);
        beginOfFirstWeek = getBeginOfWeek(dayInWeekOne, calendarType);
        year -= 1;
    }while (date < beginOfFirstWeek);
    return Math.round((beginOfWeek.getTime() - beginOfFirstWeek.getTime()) / (8.64e7 * 7)) + 1;
}
function getBegin(rangeType, date) {
    switch(rangeType){
        case "century":
            return (0, _dateUtils.getCenturyStart)(date);
        case "decade":
            return (0, _dateUtils.getDecadeStart)(date);
        case "year":
            return (0, _dateUtils.getYearStart)(date);
        case "month":
            return (0, _dateUtils.getMonthStart)(date);
        case "day":
            return (0, _dateUtils.getDayStart)(date);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
function getBeginPrevious(rangeType, date) {
    switch(rangeType){
        case "century":
            return (0, _dateUtils.getPreviousCenturyStart)(date);
        case "decade":
            return (0, _dateUtils.getPreviousDecadeStart)(date);
        case "year":
            return (0, _dateUtils.getPreviousYearStart)(date);
        case "month":
            return (0, _dateUtils.getPreviousMonthStart)(date);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
function getBeginNext(rangeType, date) {
    switch(rangeType){
        case "century":
            return (0, _dateUtils.getNextCenturyStart)(date);
        case "decade":
            return (0, _dateUtils.getNextDecadeStart)(date);
        case "year":
            return (0, _dateUtils.getNextYearStart)(date);
        case "month":
            return (0, _dateUtils.getNextMonthStart)(date);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
function getBeginPrevious2(rangeType, date) {
    switch(rangeType){
        case "decade":
            return (0, _dateUtils.getPreviousDecadeStart)(date, -100);
        case "year":
            return (0, _dateUtils.getPreviousYearStart)(date, -10);
        case "month":
            return (0, _dateUtils.getPreviousMonthStart)(date, -12);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
function getBeginNext2(rangeType, date) {
    switch(rangeType){
        case "decade":
            return (0, _dateUtils.getNextDecadeStart)(date, 100);
        case "year":
            return (0, _dateUtils.getNextYearStart)(date, 10);
        case "month":
            return (0, _dateUtils.getNextMonthStart)(date, 12);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
function getEnd(rangeType, date) {
    switch(rangeType){
        case "century":
            return (0, _dateUtils.getCenturyEnd)(date);
        case "decade":
            return (0, _dateUtils.getDecadeEnd)(date);
        case "year":
            return (0, _dateUtils.getYearEnd)(date);
        case "month":
            return (0, _dateUtils.getMonthEnd)(date);
        case "day":
            return (0, _dateUtils.getDayEnd)(date);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
function getEndPrevious(rangeType, date) {
    switch(rangeType){
        case "century":
            return (0, _dateUtils.getPreviousCenturyEnd)(date);
        case "decade":
            return (0, _dateUtils.getPreviousDecadeEnd)(date);
        case "year":
            return (0, _dateUtils.getPreviousYearEnd)(date);
        case "month":
            return (0, _dateUtils.getPreviousMonthEnd)(date);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
function getEndPrevious2(rangeType, date) {
    switch(rangeType){
        case "decade":
            return (0, _dateUtils.getPreviousDecadeEnd)(date, -100);
        case "year":
            return (0, _dateUtils.getPreviousYearEnd)(date, -10);
        case "month":
            return (0, _dateUtils.getPreviousMonthEnd)(date, -12);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
function getRange(rangeType, date) {
    switch(rangeType){
        case "century":
            return (0, _dateUtils.getCenturyRange)(date);
        case "decade":
            return (0, _dateUtils.getDecadeRange)(date);
        case "year":
            return (0, _dateUtils.getYearRange)(date);
        case "month":
            return (0, _dateUtils.getMonthRange)(date);
        case "day":
            return (0, _dateUtils.getDayRange)(date);
        default:
            throw new Error("Invalid rangeType: ".concat(rangeType));
    }
}
function getValueRange(rangeType, date1, date2) {
    var rawNextValue = [
        date1,
        date2
    ].sort(function(a, b) {
        return a.getTime() - b.getTime();
    });
    return [
        getBegin(rangeType, rawNextValue[0]),
        getEnd(rangeType, rawNextValue[1])
    ];
}
function toYearLabel(locale, formatYear, dates) {
    if (formatYear === void 0) formatYear = (0, _dateFormatterJs.formatYear);
    return dates.map(function(date) {
        return formatYear(locale, date);
    }).join(" – ");
}
function getCenturyLabel(locale, formatYear, date) {
    return toYearLabel(locale, formatYear, (0, _dateUtils.getCenturyRange)(date));
}
function getDecadeLabel(locale, formatYear, date) {
    return toYearLabel(locale, formatYear, (0, _dateUtils.getDecadeRange)(date));
}
function isCurrentDayOfWeek(date) {
    return date.getDay() === new Date().getDay();
}
function isWeekend(date, calendarType) {
    if (calendarType === void 0) calendarType = (0, _constJs.CALENDAR_TYPES).ISO_8601;
    var weekday = date.getDay();
    switch(calendarType){
        case (0, _constJs.CALENDAR_TYPES).ISLAMIC:
        case (0, _constJs.CALENDAR_TYPES).HEBREW:
            return weekday === FRIDAY || weekday === SATURDAY;
        case (0, _constJs.CALENDAR_TYPES).ISO_8601:
        case (0, _constJs.CALENDAR_TYPES).GREGORY:
            return weekday === SATURDAY || weekday === SUNDAY;
        default:
            throw new Error("Unsupported calendar type.");
    }
}

},{"@wojtekmaj/date-utils":"idgdZ","./const.js":"k2sgv","./dateFormatter.js":"an7bz","@parcel/transformer-js/src/esmodule-helpers.js":"1OlAz"}],"idgdZ":[function(require,module,exports) {
/**
 * Utils
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Simple getters - getting a property of a given point in time
 */ /**
 * Gets year from a given date.
 *
 * @param {DateLike} date Date to get year from
 * @returns {number} Year
 */ parcelHelpers.export(exports, "getYear", ()=>getYear);
/**
 * Gets month from a given date.
 *
 * @param {Date} date Date to get month from
 * @returns {number} Month
 */ parcelHelpers.export(exports, "getMonth", ()=>getMonth);
/**
 * Gets human-readable month from a given date.
 *
 * @param {Date} date Date to get human-readable month from
 * @returns {number} Human-readable month
 */ parcelHelpers.export(exports, "getMonthHuman", ()=>getMonthHuman);
/**
 * Gets day of the month from a given date.
 *
 * @param {Date} date Date to get day of the month from
 * @returns {number} Day of the month
 */ parcelHelpers.export(exports, "getDate", ()=>getDate);
/**
 * Gets hours from a given date.
 *
 * @param {Date | string} date Date to get hours from
 * @returns {number} Hours
 */ parcelHelpers.export(exports, "getHours", ()=>getHours);
/**
 * Gets minutes from a given date.
 *
 * @param {Date | string} date Date to get minutes from
 * @returns {number} Minutes
 */ parcelHelpers.export(exports, "getMinutes", ()=>getMinutes);
/**
 * Gets seconds from a given date.
 *
 * @param {Date | string} date Date to get seconds from
 * @returns {number} Seconds
 */ parcelHelpers.export(exports, "getSeconds", ()=>getSeconds);
/**
 * Gets milliseconds from a given date.
 *
 * @param {Date | string} date Date to get milliseconds from
 * @returns {number} Milliseconds
 */ parcelHelpers.export(exports, "getMilliseconds", ()=>getMilliseconds);
/**
 * Century
 */ /**
 * Gets century start date from a given date.
 *
 * @param {DateLike} date Date to get century start from
 * @returns {Date} Century start date
 */ parcelHelpers.export(exports, "getCenturyStart", ()=>getCenturyStart);
parcelHelpers.export(exports, "getPreviousCenturyStart", ()=>getPreviousCenturyStart);
parcelHelpers.export(exports, "getNextCenturyStart", ()=>getNextCenturyStart);
parcelHelpers.export(exports, "getCenturyEnd", ()=>getCenturyEnd);
parcelHelpers.export(exports, "getPreviousCenturyEnd", ()=>getPreviousCenturyEnd);
parcelHelpers.export(exports, "getNextCenturyEnd", ()=>getNextCenturyEnd);
parcelHelpers.export(exports, "getCenturyRange", ()=>getCenturyRange);
/**
 * Decade
 */ /**
 * Gets decade start date from a given date.
 *
 * @param {DateLike} date Date to get decade start from
 * @returns {Date} Decade start date
 */ parcelHelpers.export(exports, "getDecadeStart", ()=>getDecadeStart);
parcelHelpers.export(exports, "getPreviousDecadeStart", ()=>getPreviousDecadeStart);
parcelHelpers.export(exports, "getNextDecadeStart", ()=>getNextDecadeStart);
parcelHelpers.export(exports, "getDecadeEnd", ()=>getDecadeEnd);
parcelHelpers.export(exports, "getPreviousDecadeEnd", ()=>getPreviousDecadeEnd);
parcelHelpers.export(exports, "getNextDecadeEnd", ()=>getNextDecadeEnd);
parcelHelpers.export(exports, "getDecadeRange", ()=>getDecadeRange);
/**
 * Year
 */ /**
 * Gets year start date from a given date.
 *
 * @param {DateLike} date Date to get year start from
 * @returns {Date} Year start date
 */ parcelHelpers.export(exports, "getYearStart", ()=>getYearStart);
parcelHelpers.export(exports, "getPreviousYearStart", ()=>getPreviousYearStart);
parcelHelpers.export(exports, "getNextYearStart", ()=>getNextYearStart);
parcelHelpers.export(exports, "getYearEnd", ()=>getYearEnd);
parcelHelpers.export(exports, "getPreviousYearEnd", ()=>getPreviousYearEnd);
parcelHelpers.export(exports, "getNextYearEnd", ()=>getNextYearEnd);
parcelHelpers.export(exports, "getYearRange", ()=>getYearRange);
/**
 * Gets month start date from a given date.
 *
 * @param {DateLike} date Date to get month start from
 * @returns {Date} Month start date
 */ parcelHelpers.export(exports, "getMonthStart", ()=>getMonthStart);
parcelHelpers.export(exports, "getPreviousMonthStart", ()=>getPreviousMonthStart);
parcelHelpers.export(exports, "getNextMonthStart", ()=>getNextMonthStart);
parcelHelpers.export(exports, "getMonthEnd", ()=>getMonthEnd);
parcelHelpers.export(exports, "getPreviousMonthEnd", ()=>getPreviousMonthEnd);
parcelHelpers.export(exports, "getNextMonthEnd", ()=>getNextMonthEnd);
parcelHelpers.export(exports, "getMonthRange", ()=>getMonthRange);
/**
 * Gets day start date from a given date.
 *
 * @param {DateLike} date Date to get day start from
 * @returns {Date} Day start date
 */ parcelHelpers.export(exports, "getDayStart", ()=>getDayStart);
parcelHelpers.export(exports, "getPreviousDayStart", ()=>getPreviousDayStart);
parcelHelpers.export(exports, "getNextDayStart", ()=>getNextDayStart);
parcelHelpers.export(exports, "getDayEnd", ()=>getDayEnd);
parcelHelpers.export(exports, "getPreviousDayEnd", ()=>getPreviousDayEnd);
parcelHelpers.export(exports, "getNextDayEnd", ()=>getNextDayEnd);
parcelHelpers.export(exports, "getDayRange", ()=>getDayRange);
/**
 * Other
 */ /**
 * Returns a number of days in a month of a given date.
 *
 * @param {Date} date Date
 * @returns {number} Number of days in a month
 */ parcelHelpers.export(exports, "getDaysInMonth", ()=>getDaysInMonth);
/**
 * Returns local hours and minutes (hh:mm).
 *
 * @param {Date | string} date Date to get hours and minutes from
 * @returns {string} Local hours and minutes
 */ parcelHelpers.export(exports, "getHoursMinutes", ()=>getHoursMinutes);
/**
 * Returns local hours, minutes and seconds (hh:mm:ss).
 *
 * @param {Date | string} date Date to get hours, minutes and seconds from
 * @returns {string} Local hours, minutes and seconds
 */ parcelHelpers.export(exports, "getHoursMinutesSeconds", ()=>getHoursMinutesSeconds);
/**
 * Returns local month in ISO-like format (YYYY-MM).
 *
 * @param {Date} date Date to get month in ISO-like format from
 * @returns {string} Local month in ISO-like format
 */ parcelHelpers.export(exports, "getISOLocalMonth", ()=>getISOLocalMonth);
/**
 * Returns local date in ISO-like format (YYYY-MM-DD).
 *
 * @param {Date} date Date to get date in ISO-like format from
 * @returns {string} Local date in ISO-like format
 */ parcelHelpers.export(exports, "getISOLocalDate", ()=>getISOLocalDate);
/**
 * Returns local date & time in ISO-like format (YYYY-MM-DDThh:mm:ss).
 *
 * @param {Date} date Date to get date & time in ISO-like format from
 * @returns {string} Local date & time in ISO-like format
 */ parcelHelpers.export(exports, "getISOLocalDateTime", ()=>getISOLocalDateTime);
function makeGetEdgeOfNeighbor(getPeriod, getEdgeOfPeriod, defaultOffset) {
    return function makeGetEdgeOfNeighborInternal(date, offset) {
        if (offset === void 0) offset = defaultOffset;
        var previousPeriod = getPeriod(date) + offset;
        return getEdgeOfPeriod(previousPeriod);
    };
}
function makeGetEnd(getBeginOfNextPeriod) {
    return function makeGetEndInternal(date) {
        return new Date(getBeginOfNextPeriod(date).getTime() - 1);
    };
}
function makeGetRange(getStart, getEnd) {
    return function makeGetRangeInternal(date) {
        return [
            getStart(date),
            getEnd(date)
        ];
    };
}
function getYear(date) {
    if (date instanceof Date) return date.getFullYear();
    if (typeof date === "number") return date;
    var year = parseInt(date, 10);
    if (typeof date === "string" && !isNaN(year)) return year;
    throw new Error("Failed to get year from date: ".concat(date, "."));
}
function getMonth(date) {
    if (date instanceof Date) return date.getMonth();
    throw new Error("Failed to get month from date: ".concat(date, "."));
}
function getMonthHuman(date) {
    if (date instanceof Date) return date.getMonth() + 1;
    throw new Error("Failed to get human-readable month from date: ".concat(date, "."));
}
function getDate(date) {
    if (date instanceof Date) return date.getDate();
    throw new Error("Failed to get year from date: ".concat(date, "."));
}
function getHours(date) {
    if (date instanceof Date) return date.getHours();
    if (typeof date === "string") {
        var datePieces = date.split(":");
        if (datePieces.length >= 2) {
            var hoursString = datePieces[0];
            if (hoursString) {
                var hours = parseInt(hoursString, 10);
                if (!isNaN(hours)) return hours;
            }
        }
    }
    throw new Error("Failed to get hours from date: ".concat(date, "."));
}
function getMinutes(date) {
    if (date instanceof Date) return date.getMinutes();
    if (typeof date === "string") {
        var datePieces = date.split(":");
        if (datePieces.length >= 2) {
            var minutesString = datePieces[1] || "0";
            var minutes = parseInt(minutesString, 10);
            if (!isNaN(minutes)) return minutes;
        }
    }
    throw new Error("Failed to get minutes from date: ".concat(date, "."));
}
function getSeconds(date) {
    if (date instanceof Date) return date.getSeconds();
    if (typeof date === "string") {
        var datePieces = date.split(":");
        if (datePieces.length >= 2) {
            var secondsWithMillisecondsString = datePieces[2] || "0";
            var seconds = parseInt(secondsWithMillisecondsString, 10);
            if (!isNaN(seconds)) return seconds;
        }
    }
    throw new Error("Failed to get seconds from date: ".concat(date, "."));
}
function getMilliseconds(date) {
    if (date instanceof Date) return date.getMilliseconds();
    if (typeof date === "string") {
        var datePieces = date.split(":");
        if (datePieces.length >= 2) {
            var secondsWithMillisecondsString = datePieces[2] || "0";
            var millisecondsString = secondsWithMillisecondsString.split(".")[1] || "0";
            var milliseconds = parseInt(millisecondsString, 10);
            if (!isNaN(milliseconds)) return milliseconds;
        }
    }
    throw new Error("Failed to get seconds from date: ".concat(date, "."));
}
function getCenturyStart(date) {
    var year = getYear(date);
    var centuryStartYear = year + (-year + 1) % 100;
    var centuryStartDate = new Date();
    centuryStartDate.setFullYear(centuryStartYear, 0, 1);
    centuryStartDate.setHours(0, 0, 0, 0);
    return centuryStartDate;
}
var getPreviousCenturyStart = makeGetEdgeOfNeighbor(getYear, getCenturyStart, -100);
var getNextCenturyStart = makeGetEdgeOfNeighbor(getYear, getCenturyStart, 100);
var getCenturyEnd = makeGetEnd(getNextCenturyStart);
var getPreviousCenturyEnd = makeGetEdgeOfNeighbor(getYear, getCenturyEnd, -100);
var getNextCenturyEnd = makeGetEdgeOfNeighbor(getYear, getCenturyEnd, 100);
var getCenturyRange = makeGetRange(getCenturyStart, getCenturyEnd);
function getDecadeStart(date) {
    var year = getYear(date);
    var decadeStartYear = year + (-year + 1) % 10;
    var decadeStartDate = new Date();
    decadeStartDate.setFullYear(decadeStartYear, 0, 1);
    decadeStartDate.setHours(0, 0, 0, 0);
    return decadeStartDate;
}
var getPreviousDecadeStart = makeGetEdgeOfNeighbor(getYear, getDecadeStart, -10);
var getNextDecadeStart = makeGetEdgeOfNeighbor(getYear, getDecadeStart, 10);
var getDecadeEnd = makeGetEnd(getNextDecadeStart);
var getPreviousDecadeEnd = makeGetEdgeOfNeighbor(getYear, getDecadeEnd, -10);
var getNextDecadeEnd = makeGetEdgeOfNeighbor(getYear, getDecadeEnd, 10);
var getDecadeRange = makeGetRange(getDecadeStart, getDecadeEnd);
function getYearStart(date) {
    var year = getYear(date);
    var yearStartDate = new Date();
    yearStartDate.setFullYear(year, 0, 1);
    yearStartDate.setHours(0, 0, 0, 0);
    return yearStartDate;
}
var getPreviousYearStart = makeGetEdgeOfNeighbor(getYear, getYearStart, -1);
var getNextYearStart = makeGetEdgeOfNeighbor(getYear, getYearStart, 1);
var getYearEnd = makeGetEnd(getNextYearStart);
var getPreviousYearEnd = makeGetEdgeOfNeighbor(getYear, getYearEnd, -1);
var getNextYearEnd = makeGetEdgeOfNeighbor(getYear, getYearEnd, 1);
var getYearRange = makeGetRange(getYearStart, getYearEnd);
/**
 * Month
 */ function makeGetEdgeOfNeighborMonth(getEdgeOfPeriod, defaultOffset) {
    return function makeGetEdgeOfNeighborMonthInternal(date, offset) {
        if (offset === void 0) offset = defaultOffset;
        var year = getYear(date);
        var month = getMonth(date) + offset;
        var previousPeriod = new Date();
        previousPeriod.setFullYear(year, month, 1);
        previousPeriod.setHours(0, 0, 0, 0);
        return getEdgeOfPeriod(previousPeriod);
    };
}
function getMonthStart(date) {
    var year = getYear(date);
    var month = getMonth(date);
    var monthStartDate = new Date();
    monthStartDate.setFullYear(year, month, 1);
    monthStartDate.setHours(0, 0, 0, 0);
    return monthStartDate;
}
var getPreviousMonthStart = makeGetEdgeOfNeighborMonth(getMonthStart, -1);
var getNextMonthStart = makeGetEdgeOfNeighborMonth(getMonthStart, 1);
var getMonthEnd = makeGetEnd(getNextMonthStart);
var getPreviousMonthEnd = makeGetEdgeOfNeighborMonth(getMonthEnd, -1);
var getNextMonthEnd = makeGetEdgeOfNeighborMonth(getMonthEnd, 1);
var getMonthRange = makeGetRange(getMonthStart, getMonthEnd);
/**
 * Day
 */ function makeGetEdgeOfNeighborDay(getEdgeOfPeriod, defaultOffset) {
    return function makeGetEdgeOfNeighborDayInternal(date, offset) {
        if (offset === void 0) offset = defaultOffset;
        var year = getYear(date);
        var month = getMonth(date);
        var day = getDate(date) + offset;
        var previousPeriod = new Date();
        previousPeriod.setFullYear(year, month, day);
        previousPeriod.setHours(0, 0, 0, 0);
        return getEdgeOfPeriod(previousPeriod);
    };
}
function getDayStart(date) {
    var year = getYear(date);
    var month = getMonth(date);
    var day = getDate(date);
    var dayStartDate = new Date();
    dayStartDate.setFullYear(year, month, day);
    dayStartDate.setHours(0, 0, 0, 0);
    return dayStartDate;
}
var getPreviousDayStart = makeGetEdgeOfNeighborDay(getDayStart, -1);
var getNextDayStart = makeGetEdgeOfNeighborDay(getDayStart, 1);
var getDayEnd = makeGetEnd(getNextDayStart);
var getPreviousDayEnd = makeGetEdgeOfNeighborDay(getDayEnd, -1);
var getNextDayEnd = makeGetEdgeOfNeighborDay(getDayEnd, 1);
var getDayRange = makeGetRange(getDayStart, getDayEnd);
function getDaysInMonth(date) {
    return getDate(getMonthEnd(date));
}
function padStart(num, val) {
    if (val === void 0) val = 2;
    var numStr = "".concat(num);
    if (numStr.length >= val) return num;
    return "0000".concat(numStr).slice(-val);
}
function getHoursMinutes(date) {
    var hours = padStart(getHours(date));
    var minutes = padStart(getMinutes(date));
    return "".concat(hours, ":").concat(minutes);
}
function getHoursMinutesSeconds(date) {
    var hours = padStart(getHours(date));
    var minutes = padStart(getMinutes(date));
    var seconds = padStart(getSeconds(date));
    return "".concat(hours, ":").concat(minutes, ":").concat(seconds);
}
function getISOLocalMonth(date) {
    var year = padStart(getYear(date), 4);
    var month = padStart(getMonthHuman(date));
    return "".concat(year, "-").concat(month);
}
function getISOLocalDate(date) {
    var year = padStart(getYear(date), 4);
    var month = padStart(getMonthHuman(date));
    var day = padStart(getDate(date));
    return "".concat(year, "-").concat(month, "-").concat(day);
}
function getISOLocalDateTime(date) {
    return "".concat(getISOLocalDate(date), "T").concat(getHoursMinutesSeconds(date));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"1OlAz"}],"k2sgv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CALENDAR_TYPES", ()=>CALENDAR_TYPES);
parcelHelpers.export(exports, "DEPRECATED_CALENDAR_TYPES", ()=>DEPRECATED_CALENDAR_TYPES);
parcelHelpers.export(exports, "CALENDAR_TYPE_LOCALES", ()=>CALENDAR_TYPE_LOCALES);
parcelHelpers.export(exports, "WEEKDAYS", ()=>WEEKDAYS);
var _a;
var CALENDAR_TYPES = {
    GREGORY: "gregory",
    HEBREW: "hebrew",
    ISLAMIC: "islamic",
    ISO_8601: "iso8601"
};
var DEPRECATED_CALENDAR_TYPES = {
    ARABIC: "Arabic",
    HEBREW: "Hebrew",
    ISO_8601: "ISO 8601",
    US: "US"
};
var CALENDAR_TYPE_LOCALES = (_a = {}, _a[CALENDAR_TYPES.GREGORY] = [
    "en-CA",
    "en-US",
    "es-AR",
    "es-BO",
    "es-CL",
    "es-CO",
    "es-CR",
    "es-DO",
    "es-EC",
    "es-GT",
    "es-HN",
    "es-MX",
    "es-NI",
    "es-PA",
    "es-PE",
    "es-PR",
    "es-SV",
    "es-VE",
    "pt-BR"
], _a[CALENDAR_TYPES.HEBREW] = [
    "he",
    "he-IL"
], _a[CALENDAR_TYPES.ISLAMIC] = [
    // ar-LB, ar-MA intentionally missing
    "ar",
    "ar-AE",
    "ar-BH",
    "ar-DZ",
    "ar-EG",
    "ar-IQ",
    "ar-JO",
    "ar-KW",
    "ar-LY",
    "ar-OM",
    "ar-QA",
    "ar-SA",
    "ar-SD",
    "ar-SY",
    "ar-YE",
    "dv",
    "dv-MV",
    "ps",
    "ps-AR"
], _a);
var WEEKDAYS = [
    0,
    1,
    2,
    3,
    4,
    5,
    6
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"1OlAz"}],"an7bz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formatDate", ()=>formatDate);
parcelHelpers.export(exports, "formatDay", ()=>formatDay);
parcelHelpers.export(exports, "formatLongDate", ()=>formatLongDate);
parcelHelpers.export(exports, "formatMonth", ()=>formatMonth);
parcelHelpers.export(exports, "formatMonthYear", ()=>formatMonthYear);
parcelHelpers.export(exports, "formatShortWeekday", ()=>formatShortWeekday);
parcelHelpers.export(exports, "formatWeekday", ()=>formatWeekday);
parcelHelpers.export(exports, "formatYear", ()=>formatYear);
var _getUserLocale = require("get-user-locale");
var _getUserLocaleDefault = parcelHelpers.interopDefault(_getUserLocale);
var formatterCache = new Map();
function getFormatter(options) {
    return function formatter(locale, date) {
        var localeWithDefault = locale || (0, _getUserLocaleDefault.default)();
        if (!formatterCache.has(localeWithDefault)) formatterCache.set(localeWithDefault, new Map());
        var formatterCacheLocale = formatterCache.get(localeWithDefault);
        if (!formatterCacheLocale.has(options)) formatterCacheLocale.set(options, new Intl.DateTimeFormat(localeWithDefault || undefined, options).format);
        return formatterCacheLocale.get(options)(date);
    };
}
/**
 * Changes the hour in a Date to ensure right date formatting even if DST is messed up.
 * Workaround for bug in WebKit and Firefox with historical dates.
 * For more details, see:
 * https://bugs.chromium.org/p/chromium/issues/detail?id=750465
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1385643
 *
 * @param {Date} date Date.
 * @returns {Date} Date with hour set to 12.
 */ function toSafeHour(date) {
    var safeDate = new Date(date);
    return new Date(safeDate.setHours(12));
}
function getSafeFormatter(options) {
    return function(locale, date) {
        return getFormatter(options)(locale, toSafeHour(date));
    };
}
var formatDateOptions = {
    day: "numeric",
    month: "numeric",
    year: "numeric"
};
var formatDayOptions = {
    day: "numeric"
};
var formatLongDateOptions = {
    day: "numeric",
    month: "long",
    year: "numeric"
};
var formatMonthOptions = {
    month: "long"
};
var formatMonthYearOptions = {
    month: "long",
    year: "numeric"
};
var formatShortWeekdayOptions = {
    weekday: "short"
};
var formatWeekdayOptions = {
    weekday: "long"
};
var formatYearOptions = {
    year: "numeric"
};
var formatDate = getSafeFormatter(formatDateOptions);
var formatDay = getSafeFormatter(formatDayOptions);
var formatLongDate = getSafeFormatter(formatLongDateOptions);
var formatMonth = getSafeFormatter(formatMonthOptions);
var formatMonthYear = getSafeFormatter(formatMonthYearOptions);
var formatShortWeekday = getSafeFormatter(formatShortWeekdayOptions);
var formatWeekday = getSafeFormatter(formatWeekdayOptions);
var formatYear = getSafeFormatter(formatYearOptions);

},{"get-user-locale":"hoyOT","@parcel/transformer-js/src/esmodule-helpers.js":"1OlAz"}],"hKv9C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _decadesJs = require("./CenturyView/Decades.js");
var _decadesJsDefault = parcelHelpers.interopDefault(_decadesJs);
var _propTypesJs = require("./shared/propTypes.js");
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var CenturyView = function CenturyView(props) {
    function renderDecades() {
        return (0, _reactDefault.default).createElement((0, _decadesJsDefault.default), __assign({}, props));
    }
    return (0, _reactDefault.default).createElement("div", {
        className: "react-calendar__century-view"
    }, renderDecades());
};
CenturyView.propTypes = __assign({}, (0, _propTypesJs.tileGroupProps));
exports.default = CenturyView;

},{"react":"k0IeW","./CenturyView/Decades.js":"hvkvm","./shared/propTypes.js":"9We5O","@parcel/transformer-js/src/esmodule-helpers.js":"1OlAz"}],"hvkvm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Decades);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _dateUtils = require("@wojtekmaj/date-utils");
var _tileGroupJs = require("../TileGroup.js");
var _tileGroupJsDefault = parcelHelpers.interopDefault(_tileGroupJs);
var _decadeJs = require("./Decade.js");
var _decadeJsDefault = parcelHelpers.interopDefault(_decadeJs);
var _datesJs = require("../shared/dates.js");
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
function Decades(props) {
    var activeStartDate = props.activeStartDate, hover = props.hover, value = props.value, valueType = props.valueType, otherProps = __rest(props, [
        "activeStartDate",
        "hover",
        "value",
        "valueType"
    ]);
    var start = (0, _datesJs.getBeginOfCenturyYear)(activeStartDate);
    var end = start + 99;
    return (0, _reactDefault.default).createElement((0, _tileGroupJsDefault.default), {
        className: "react-calendar__century-view__decades",
        dateTransform: (0, _dateUtils.getDecadeStart),
        dateType: "decade",
        end: end,
        hover: hover,
        renderTile: function(_a) {
            var date = _a.date, otherTileProps = __rest(_a, [
                "date"
            ]);
            return (0, _reactDefault.default).createElement((0, _decadeJsDefault.default), __assign({
                key: date.getTime()
            }, otherProps, otherTileProps, {
                activeStartDate: activeStartDate,
                date: date
            }));
        },
        start: start,
        step: 10,
        value: value,
        valueType: valueType
    });
}

},{"react":"k0IeW","@wojtekmaj/date-utils":"idgdZ","../TileGroup.js":"lmxw9","./Decade.js":"jQXHl","../shared/dates.js":"jnNCe","@parcel/transformer-js/src/esmodule-helpers.js":"1OlAz"}],"lmxw9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>TileGroup);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _flexJs = require("./Flex.js");
var _flexJsDefault = parcelHelpers.interopDefault(_flexJs);
var _utilsJs = require("./shared/utils.js");
function TileGroup(_a) {
    var className = _a.className, _b = _a.count, count = _b === void 0 ? 3 : _b, dateTransform = _a.dateTransform, dateType = _a.dateType, end = _a.end, hover = _a.hover, offset = _a.offset, renderTile = _a.renderTile, start = _a.start, _c = _a.step, step = _c === void 0 ? 1 : _c, value = _a.value, valueType = _a.valueType;
    var tiles = [];
    for(var point = start; point <= end; point += step){
        var date = dateTransform(point);
        tiles.push(renderTile({
            classes: (0, _utilsJs.getTileClasses)({
                date: date,
                dateType: dateType,
                hover: hover,
                value: value,
                valueType: valueType
            }),
            date: date
        }));
    }
    return (0, _reactDefault.default).createElement((0, _flexJsDefault.default), {
        className: className,
        count: count,
        offset: offset,
        wrap: true
    }, tiles);
}

},{"react":"k0IeW","./Flex.js":"cY3q7","./shared/utils.js":"baU9K","@parcel/transformer-js/src/esmodule-helpers.js":"1OlAz"}],"cY3q7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Flex);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
function toPercent(num) {
    return "".concat(num, "%");
}
function Flex(_a) {
    var children = _a.children, className = _a.className, count = _a.count, direction = _a.direction, offset = _a.offset, style = _a.style, wrap = _a.wrap, otherProps = __rest(_a, [
        "children",
        "className",
        "count",
        "direction",
        "offset",
        "style",
        "wrap"
    ]);
    return (0, _reactDefault.default).createElement("div", __assign({
        className: className,
        style: __assign({
            display: "flex",
            flexDirection: direction,
            flexWrap: wrap ? "wrap" : "nowrap"
        }, style)
    }, otherProps), (0, _reactDefault.default).Children.map(children, function(child, index) {
        var marginInlineStart = offset && index === 0 ? toPercent(100 * offset / count) : null;
        return (0, _reactDefault.default).cloneElement(child, __assign(__assign({}, child.props), {
            style: {
                flexBasis: toPercent(100 / count),
                flexShrink: 0,
                flexGrow: 0,
                overflow: "hidden",
                marginLeft: marginInlineStart,
                marginInlineStart: marginInlineStart,
                marginInlineEnd: 0
            }
        }));
    }));
}

},{"react":"k0IeW","@parcel/transformer-js/src/esmodule-helpers.js":"1OlAz"}],"baU9K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Returns a value no smaller than min and no larger than max.
 *
 * @param {Date} value Value to return.
 * @param {Date} min Minimum return value.
 * @param {Date} max Maximum return value.
 * @returns {Date} Value between min and max.
 */ parcelHelpers.export(exports, "between", ()=>between);
parcelHelpers.export(exports, "isValueWithinRange", ()=>isValueWithinRange);
parcelHelpers.export(exports, "isRangeWithinRange", ()=>isRangeWithinRange);
parcelHelpers.export(exports, "doRangesOverlap", ()=>doRangesOverlap);
parcelHelpers.export(exports, "getTileClasses", ()=>getTileClasses);
parcelHelpers.export(exports, "mapCalendarType", ()=>mapCalendarType);
var _tinyWarning = require("tiny-warning");
var _tinyWarningDefault = parcelHelpers.interopDefault(_tinyWarning);
var _constJs = require("./const.js");
var _datesJs = require("./dates.js");
var _a;
function between(value, min, max) {
    if (min && min > value) return min;
    if (max && max < value) return max;
    return value;
}
function isValueWithinRange(value, range) {
    return range[0] <= value && range[1] >= value;
}
function isRangeWithinRange(greaterRange, smallerRange) {
    return greaterRange[0] <= smallerRange[0] && greaterRange[1] >= smallerRange[1];
}
function doRangesOverlap(range1, range2) {
    return isValueWithinRange(range1[0], range2) || isValueWithinRange(range1[1], range2);
}
function getRangeClassNames(valueRange, dateRange, baseClassName) {
    var isRange = doRangesOverlap(dateRange, valueRange);
    var classes = [];
    if (isRange) {
        classes.push(baseClassName);
        var isRangeStart = isValueWithinRange(valueRange[0], dateRange);
        var isRangeEnd = isValueWithinRange(valueRange[1], dateRange);
        if (isRangeStart) classes.push("".concat(baseClassName, "Start"));
        if (isRangeEnd) classes.push("".concat(baseClassName, "End"));
        if (isRangeStart && isRangeEnd) classes.push("".concat(baseClassName, "BothEnds"));
    }
    return classes;
}
function isCompleteValue(value) {
    if (Array.isArray(value)) return value[0] !== null && value[1] !== null;
    return value !== null;
}
function getTileClasses(args) {
    if (!args) throw new Error("args is required");
    var value = args.value, date = args.date, hover = args.hover;
    var className = "react-calendar__tile";
    var classes = [
        className
    ];
    if (!date) return classes;
    var now = new Date();
    var dateRange = function() {
        if (Array.isArray(date)) return date;
        var dateType = args.dateType;
        if (!dateType) throw new Error("dateType is required when date is not an array of two dates");
        return (0, _datesJs.getRange)(dateType, date);
    }();
    if (isValueWithinRange(now, dateRange)) classes.push("".concat(className, "--now"));
    if (!value || !isCompleteValue(value)) return classes;
    var valueRange = function() {
        if (Array.isArray(value)) return value;
        var valueType = args.valueType;
        if (!valueType) throw new Error("valueType is required when value is not an array of two dates");
        return (0, _datesJs.getRange)(valueType, value);
    }();
    if (isRangeWithinRange(valueRange, dateRange)) classes.push("".concat(className, "--active"));
    else if (doRangesOverlap(valueRange, dateRange)) classes.push("".concat(className, "--hasActive"));
    var valueRangeClassNames = getRangeClassNames(valueRange, dateRange, "".concat(className, "--range"));
    classes.push.apply(classes, valueRangeClassNames);
    var valueArray = Array.isArray(value) ? value : [
        value
    ];
    if (hover && valueArray.length === 1) {
        var hoverRange = hover > valueRange[0] ? [
            valueRange[0],
            hover
        ] : [
            hover,
            valueRange[0]
        ];
        var hoverRangeClassNames = getRangeClassNames(hoverRange, dateRange, "".concat(className, "--hover"));
        classes.push.apply(classes, hoverRangeClassNames);
    }
    return classes;
}
var calendarTypeMap = (_a = {}, _a[(0, _constJs.DEPRECATED_CALENDAR_TYPES).ARABIC] = (0, _constJs.CALENDAR_TYPES).ISLAMIC, _a[(0, _constJs.DEPRECATED_CALENDAR_TYPES).HEBREW] = (0, _constJs.CALENDAR_TYPES).HEBREW, _a[(0, _constJs.DEPRECATED_CALENDAR_TYPES).ISO_8601] = (0, _constJs.CALENDAR_TYPES).ISO_8601, _a[(0, _constJs.DEPRECATED_CALENDAR_TYPES).US] = (0, _constJs.CALENDAR_TYPES).GREGORY, _a);
function isDeprecatedCalendarType(calendarType) {
    return calendarType !== undefined && calendarType in (0, _constJs.DEPRECATED_CALENDAR_TYPES);
}
var warned = false;
function mapCalendarType(calendarTypeOrDeprecatedCalendarType) {
    if (isDeprecatedCalendarType(calendarTypeOrDeprecatedCalendarType)) {
        var calendarType = calendarTypeMap[calendarTypeOrDeprecatedCalendarType];
        (0, _tinyWarningDefault.default)(warned, 'Specifying calendarType="'.concat(calendarTypeOrDeprecatedCalendarType, '" is deprecated. Use calendarType="').concat(calendarType, '" instead.'));
        warned = true;
        return calendarType;
    }
    return calendarTypeOrDeprecatedCalendarType;
}

},{"tiny-warning":"f1EGi","./const.js":"k2sgv","./dates.js":"jnNCe","@parcel/transformer-js/src/esmodule-helpers.js":"1OlAz"}],"f1EGi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var isProduction = false;
function warning(condition, message) {
    if (!isProduction) {
        if (condition) return;
        var text = "Warning: " + message;
        if (typeof console !== "undefined") console.warn(text);
        try {
            throw Error(text);
        } catch (x) {}
    }
}
exports.default = warning;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"1OlAz"}],"jQXHl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Decade);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _dateUtils = require("@wojtekmaj/date-utils");
var _tileJs = require("../Tile.js");
var _tileJsDefault = parcelHelpers.interopDefault(_tileJs);
var _datesJs = require("../shared/dates.js");
var _dateFormatterJs = require("../shared/dateFormatter.js");
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
var __spreadArray = undefined && undefined.__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var className = "react-calendar__century-view__decades__decade";
function Decade(_a) {
    var _b = _a.classes, classes = _b === void 0 ? [] : _b, _c = _a.formatYear, formatYear = _c === void 0 ? (0, _dateFormatterJs.formatYear) : _c, otherProps = __rest(_a, [
        "classes",
        "formatYear"
    ]);
    var date = otherProps.date, locale = otherProps.locale;
    return (0, _reactDefault.default).createElement((0, _tileJsDefault.default), __assign({}, otherProps, {
        classes: __spreadArray(__spreadArray([], classes, true), [
            className
        ], false),
        maxDateTransform: (0, _dateUtils.getDecadeEnd),
        minDateTransform: (0, _dateUtils.getDecadeStart),
        view: "century"
    }), (0, _datesJs.getDecadeLabel)(locale, formatYear, date));
}

},{"react":"k0IeW","@wojtekmaj/date-utils":"idgdZ","../Tile.js":"dZ8cX","../shared/dates.js":"jnNCe","../shared/dateFormatter.js":"an7bz","@parcel/transformer-js/src/esmodule-helpers.js":"1OlAz"}],"dZ8cX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Tile);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _clsx = require("clsx");
var _clsxDefault = parcelHelpers.interopDefault(_clsx);
function Tile(props) {
    var activeStartDate = props.activeStartDate, children = props.children, classes = props.classes, date = props.date, formatAbbr = props.formatAbbr, locale = props.locale, maxDate = props.maxDate, maxDateTransform = props.maxDateTransform, minDate = props.minDate, minDateTransform = props.minDateTransform, onClick = props.onClick, onMouseOver = props.onMouseOver, style = props.style, tileClassNameProps = props.tileClassName, tileContentProps = props.tileContent, tileDisabled = props.tileDisabled, view = props.view;
    var tileClassName = (0, _react.useMemo)(function() {
        var args = {
            activeStartDate: activeStartDate,
            date: date,
            view: view
        };
        return typeof tileClassNameProps === "function" ? tileClassNameProps(args) : tileClassNameProps;
    }, [
        activeStartDate,
        date,
        tileClassNameProps,
        view
    ]);
    var tileContent = (0, _react.useMemo)(function() {
        var args = {
            activeStartDate: activeStartDate,
            date: date,
            view: view
        };
        return typeof tileContentProps === "function" ? tileContentProps(args) : tileContentProps;
    }, [
        activeStartDate,
        date,
        tileContentProps,
        view
    ]);
    return (0, _reactDefault.default).createElement("button", {
        className: (0, _clsxDefault.default)(classes, tileClassName),
        disabled: minDate && minDateTransform(minDate) > date || maxDate && maxDateTransform(maxDate) < date || tileDisabled && tileDisabled({
            activeStartDate: activeStartDate,
            date: date,
            view: view
        }),
        onClick: onClick ? function(event) {
            return onClick(date, event);
        } : undefined,
        onFocus: onMouseOver ? function() {
            return onMouseOver(date);
        } : undefined,
        onMouseOver: onMouseOver ? function() {
            return onMouseOver(date);
        } : undefined,
        style: style,
        type: "button"
    }, formatAbbr ? (0, _reactDefault.default).createElement("abbr", {
        "aria-label": formatAbbr(locale, date)
    }, children) : children, tileContent);
}

},{"react":"k0IeW","clsx":"7RLh3","@parcel/transformer-js/src/esmodule-helpers.js":"1OlAz"}],"9We5O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isCalendarType", ()=>isCalendarType);
parcelHelpers.export(exports, "isClassName", ()=>isClassName);
parcelHelpers.export(exports, "isMinDate", ()=>isMinDate);
parcelHelpers.export(exports, "isMaxDate", ()=>isMaxDate);
parcelHelpers.export(exports, "isRef", ()=>isRef);
parcelHelpers.export(exports, "isValue", ()=>isValue);
parcelHelpers.export(exports, "isViews", ()=>isViews);
parcelHelpers.export(exports, "isView", ()=>isView);
parcelHelpers.export(exports, "rangeOf", ()=>rangeOf);
parcelHelpers.export(exports, "tileGroupProps", ()=>tileGroupProps);
parcelHelpers.export(exports, "tileProps", ()=>tileProps);
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
var _constJs = require("./const.js");
var __spreadArray = undefined && undefined.__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var calendarTypes = Object.values((0, _constJs.CALENDAR_TYPES));
var deprecatedCalendarTypes = Object.values((0, _constJs.DEPRECATED_CALENDAR_TYPES));
var allViews = [
    "century",
    "decade",
    "year",
    "month"
];
var isCalendarType = (0, _propTypesDefault.default).oneOf(__spreadArray(__spreadArray([], calendarTypes, true), deprecatedCalendarTypes, true));
var isClassName = (0, _propTypesDefault.default).oneOfType([
    (0, _propTypesDefault.default).string,
    (0, _propTypesDefault.default).arrayOf((0, _propTypesDefault.default).string)
]);
var isMinDate = function isMinDate(props, propName, componentName) {
    var _a = props, _b = propName, minDate = _a[_b];
    if (!minDate) return null;
    if (!(minDate instanceof Date)) return new Error("Invalid prop `".concat(propName, "` of type `").concat(typeof minDate, "` supplied to `").concat(componentName, "`, expected instance of `Date`."));
    var maxDate = props.maxDate;
    if (maxDate && minDate > maxDate) return new Error("Invalid prop `".concat(propName, "` of type `").concat(typeof minDate, "` supplied to `").concat(componentName, "`, minDate cannot be larger than maxDate."));
    return null;
};
var isMaxDate = function isMaxDate(props, propName, componentName) {
    var _a = props, _b = propName, maxDate = _a[_b];
    if (!maxDate) return null;
    if (!(maxDate instanceof Date)) return new Error("Invalid prop `".concat(propName, "` of type `").concat(typeof maxDate, "` supplied to `").concat(componentName, "`, expected instance of `Date`."));
    var minDate = props.minDate;
    if (minDate && maxDate < minDate) return new Error("Invalid prop `".concat(propName, "` of type `").concat(typeof maxDate, "` supplied to `").concat(componentName, "`, maxDate cannot be smaller than minDate."));
    return null;
};
var isRef = (0, _propTypesDefault.default).oneOfType([
    (0, _propTypesDefault.default).func,
    (0, _propTypesDefault.default).exact({
        current: (0, _propTypesDefault.default).any
    })
]);
var isRange = (0, _propTypesDefault.default).arrayOf((0, _propTypesDefault.default).oneOfType([
    (0, _propTypesDefault.default).instanceOf(Date),
    (0, _propTypesDefault.default).oneOf([
        null
    ])
]).isRequired);
var isValue = (0, _propTypesDefault.default).oneOfType([
    (0, _propTypesDefault.default).instanceOf(Date),
    (0, _propTypesDefault.default).oneOf([
        null
    ]),
    isRange
]);
var isViews = (0, _propTypesDefault.default).arrayOf((0, _propTypesDefault.default).oneOf(allViews));
var isView = function isView(props, propName, componentName) {
    var _a = props, _b = propName, view = _a[_b];
    if (view !== undefined && (typeof view !== "string" || allViews.indexOf(view) === -1)) return new Error("Invalid prop `".concat(propName, "` of value `").concat(view, "` supplied to `").concat(componentName, "`, expected one of [").concat(allViews.map(function(a) {
        return '"'.concat(a, '"');
    }).join(", "), "]."));
    // Everything is fine
    return null;
};
isView.isRequired = function isViewIsRequired(props, propName, componentName, location, propFullName) {
    var _a = props, _b = propName, view = _a[_b];
    if (!view) return new Error("The prop `".concat(propName, "` is marked as required in `").concat(componentName, "`, but its value is `").concat(view, "`."));
    return isView(props, propName, componentName, location, propFullName);
};
var rangeOf = function(type) {
    return (0, _propTypesDefault.default).arrayOf(type);
};
var tileGroupProps = {
    activeStartDate: (0, _propTypesDefault.default).instanceOf(Date).isRequired,
    hover: (0, _propTypesDefault.default).instanceOf(Date),
    locale: (0, _propTypesDefault.default).string,
    maxDate: isMaxDate,
    minDate: isMinDate,
    onClick: (0, _propTypesDefault.default).func,
    onMouseOver: (0, _propTypesDefault.default).func,
    tileClassName: (0, _propTypesDefault.default).oneOfType([
        (0, _propTypesDefault.default).func,
        isClassName
    ]),
    tileContent: (0, _propTypesDefault.default).oneOfType([
        (0, _propTypesDefault.default).func,
        (0, _propTypesDefault.default).node
    ]),
    value: isValue,
    valueType: (0, _propTypesDefault.default).oneOf([
        "century",
        "decade",
        "year",
        "month",
        "day"
    ]).isRequired
};
var tileProps = {
    activeStartDate: (0, _propTypesDefault.default).instanceOf(Date).isRequired,
    classes: (0, _propTypesDefault.default).arrayOf((0, _propTypesDefault.default).string.isRequired).isRequired,
    date: (0, _propTypesDefault.default).instanceOf(Date).isRequired,
    locale: (0, _propTypesDefault.default).string,
    maxDate: isMaxDate,
    minDate: isMinDate,
    onClick: (0, _propTypesDefault.default).func,
    onMouseOver: (0, _propTypesDefault.default).func,
    style: (0, _propTypesDefault.default).objectOf((0, _propTypesDefault.default).oneOfType([
        (0, _propTypesDefault.default).string,
        (0, _propTypesDefault.default).number
    ])),
    tileClassName: (0, _propTypesDefault.default).oneOfType([
        (0, _propTypesDefault.default).func,
        isClassName
    ]),
    tileContent: (0, _propTypesDefault.default).oneOfType([
        (0, _propTypesDefault.default).func,
        (0, _propTypesDefault.default).node
    ]),
    tileDisabled: (0, _propTypesDefault.default).func
};

},{"prop-types":"sBX5e","./const.js":"k2sgv","@parcel/transformer-js/src/esmodule-helpers.js":"1OlAz"}],"j3o41":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _yearsJs = require("./DecadeView/Years.js");
var _yearsJsDefault = parcelHelpers.interopDefault(_yearsJs);
var _propTypesJs = require("./shared/propTypes.js");
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var DecadeView = function DecadeView(props) {
    function renderYears() {
        return (0, _reactDefault.default).createElement((0, _yearsJsDefault.default), __assign({}, props));
    }
    return (0, _reactDefault.default).createElement("div", {
        className: "react-calendar__decade-view"
    }, renderYears());
};
DecadeView.propTypes = __assign({}, (0, _propTypesJs.tileGroupProps));
exports.default = DecadeView;

},{"react":"k0IeW","./DecadeView/Years.js":"ddZln","./shared/propTypes.js":"9We5O","@parcel/transformer-js/src/esmodule-helpers.js":"1OlAz"}],"ddZln":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Years);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _dateUtils = require("@wojtekmaj/date-utils");
var _tileGroupJs = require("../TileGroup.js");
var _tileGroupJsDefault = parcelHelpers.interopDefault(_tileGroupJs);
var _yearJs = require("./Year.js");
var _yearJsDefault = parcelHelpers.interopDefault(_yearJs);
var _datesJs = require("../shared/dates.js");
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
function Years(props) {
    var activeStartDate = props.activeStartDate, hover = props.hover, value = props.value, valueType = props.valueType, otherProps = __rest(props, [
        "activeStartDate",
        "hover",
        "value",
        "valueType"
    ]);
    var start = (0, _datesJs.getBeginOfDecadeYear)(activeStartDate);
    var end = start + 9;
    return (0, _reactDefault.default).createElement((0, _tileGroupJsDefault.default), {
        className: "react-calendar__decade-view__years",
        dateTransform: (0, _dateUtils.getYearStart),
        dateType: "year",
        end: end,
        hover: hover,
        renderTile: function(_a) {
            var date = _a.date, otherTileProps = __rest(_a, [
                "date"
            ]);
            return (0, _reactDefault.default).createElement((0, _yearJsDefault.default), __assign({
                key: date.getTime()
            }, otherProps, otherTileProps, {
                activeStartDate: activeStartDate,
                date: date
            }));
        },
        start: start,
        value: value,
        valueType: valueType
    });
}

},{"react":"k0IeW","@wojtekmaj/date-utils":"idgdZ","../TileGroup.js":"lmxw9","./Year.js":"b1MPn","../shared/dates.js":"jnNCe","@parcel/transformer-js/src/esmodule-helpers.js":"1OlAz"}],"b1MPn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Year);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _dateUtils = require("@wojtekmaj/date-utils");
var _tileJs = require("../Tile.js");
var _tileJsDefault = parcelHelpers.interopDefault(_tileJs);
var _dateFormatterJs = require("../shared/dateFormatter.js");
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
var __spreadArray = undefined && undefined.__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var className = "react-calendar__decade-view__years__year";
function Year(_a) {
    var _b = _a.classes, classes = _b === void 0 ? [] : _b, _c = _a.formatYear, formatYear = _c === void 0 ? (0, _dateFormatterJs.formatYear) : _c, otherProps = __rest(_a, [
        "classes",
        "formatYear"
    ]);
    var date = otherProps.date, locale = otherProps.locale;
    return (0, _reactDefault.default).createElement((0, _tileJsDefault.default), __assign({}, otherProps, {
        classes: __spreadArray(__spreadArray([], classes, true), [
            className
        ], false),
        maxDateTransform: (0, _dateUtils.getYearEnd),
        minDateTransform: (0, _dateUtils.getYearStart),
        view: "decade"
    }), formatYear(locale, date));
}

},{"react":"k0IeW","@wojtekmaj/date-utils":"idgdZ","../Tile.js":"dZ8cX","../shared/dateFormatter.js":"an7bz","@parcel/transformer-js/src/esmodule-helpers.js":"1OlAz"}],"j4meB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _monthsJs = require("./YearView/Months.js");
var _monthsJsDefault = parcelHelpers.interopDefault(_monthsJs);
var _propTypesJs = require("./shared/propTypes.js");
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var YearView = function YearView(props) {
    function renderMonths() {
        return (0, _reactDefault.default).createElement((0, _monthsJsDefault.default), __assign({}, props));
    }
    return (0, _reactDefault.default).createElement("div", {
        className: "react-calendar__year-view"
    }, renderMonths());
};
YearView.propTypes = __assign({}, (0, _propTypesJs.tileGroupProps));
exports.default = YearView;

},{"react":"k0IeW","./YearView/Months.js":"aIPZo","./shared/propTypes.js":"9We5O","@parcel/transformer-js/src/esmodule-helpers.js":"1OlAz"}],"aIPZo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Months);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _dateUtils = require("@wojtekmaj/date-utils");
var _tileGroupJs = require("../TileGroup.js");
var _tileGroupJsDefault = parcelHelpers.interopDefault(_tileGroupJs);
var _monthJs = require("./Month.js");
var _monthJsDefault = parcelHelpers.interopDefault(_monthJs);
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
function Months(props) {
    var activeStartDate = props.activeStartDate, hover = props.hover, value = props.value, valueType = props.valueType, otherProps = __rest(props, [
        "activeStartDate",
        "hover",
        "value",
        "valueType"
    ]);
    var start = 0;
    var end = 11;
    var year = (0, _dateUtils.getYear)(activeStartDate);
    return (0, _reactDefault.default).createElement((0, _tileGroupJsDefault.default), {
        className: "react-calendar__year-view__months",
        dateTransform: function(monthIndex) {
            var date = new Date();
            date.setFullYear(year, monthIndex, 1);
            return (0, _dateUtils.getMonthStart)(date);
        },
        dateType: "month",
        end: end,
        hover: hover,
        renderTile: function(_a) {
            var date = _a.date, otherTileProps = __rest(_a, [
                "date"
            ]);
            return (0, _reactDefault.default).createElement((0, _monthJsDefault.default), __assign({
                key: date.getTime()
            }, otherProps, otherTileProps, {
                activeStartDate: activeStartDate,
                date: date
            }));
        },
        start: start,
        value: value,
        valueType: valueType
    });
}

},{"react":"k0IeW","@wojtekmaj/date-utils":"idgdZ","../TileGroup.js":"lmxw9","./Month.js":"PDgwM","@parcel/transformer-js/src/esmodule-helpers.js":"1OlAz"}],"PDgwM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Month);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _dateUtils = require("@wojtekmaj/date-utils");
var _tileJs = require("../Tile.js");
var _tileJsDefault = parcelHelpers.interopDefault(_tileJs);
var _dateFormatterJs = require("../shared/dateFormatter.js");
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
var __spreadArray = undefined && undefined.__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var className = "react-calendar__year-view__months__month";
function Month(_a) {
    var _b = _a.classes, classes = _b === void 0 ? [] : _b, _c = _a.formatMonth, formatMonth = _c === void 0 ? (0, _dateFormatterJs.formatMonth) : _c, _d = _a.formatMonthYear, formatMonthYear = _d === void 0 ? (0, _dateFormatterJs.formatMonthYear) : _d, otherProps = __rest(_a, [
        "classes",
        "formatMonth",
        "formatMonthYear"
    ]);
    var date = otherProps.date, locale = otherProps.locale;
    return (0, _reactDefault.default).createElement((0, _tileJsDefault.default), __assign({}, otherProps, {
        classes: __spreadArray(__spreadArray([], classes, true), [
            className
        ], false),
        formatAbbr: formatMonthYear,
        maxDateTransform: (0, _dateUtils.getMonthEnd),
        minDateTransform: (0, _dateUtils.getMonthStart),
        view: "year"
    }), formatMonth(locale, date));
}

},{"react":"k0IeW","@wojtekmaj/date-utils":"idgdZ","../Tile.js":"dZ8cX","../shared/dateFormatter.js":"an7bz","@parcel/transformer-js/src/esmodule-helpers.js":"1OlAz"}],"hGceO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
var _clsx = require("clsx");
var _clsxDefault = parcelHelpers.interopDefault(_clsx);
var _daysJs = require("./MonthView/Days.js");
var _daysJsDefault = parcelHelpers.interopDefault(_daysJs);
var _weekdaysJs = require("./MonthView/Weekdays.js");
var _weekdaysJsDefault = parcelHelpers.interopDefault(_weekdaysJs);
var _weekNumbersJs = require("./MonthView/WeekNumbers.js");
var _weekNumbersJsDefault = parcelHelpers.interopDefault(_weekNumbersJs);
var _constJs = require("./shared/const.js");
var _propTypesJs = require("./shared/propTypes.js");
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
function getCalendarTypeFromLocale(locale) {
    if (locale) for(var _i = 0, _a = Object.entries((0, _constJs.CALENDAR_TYPE_LOCALES)); _i < _a.length; _i++){
        var _b = _a[_i], calendarType = _b[0], locales = _b[1];
        if (locales.includes(locale)) return calendarType;
    }
    return (0, _constJs.CALENDAR_TYPES).ISO_8601;
}
var MonthView = function MonthView(props) {
    var activeStartDate = props.activeStartDate, locale = props.locale, onMouseLeave = props.onMouseLeave, showFixedNumberOfWeeks = props.showFixedNumberOfWeeks;
    var _a = props.calendarType, calendarType = _a === void 0 ? getCalendarTypeFromLocale(locale) : _a, formatShortWeekday = props.formatShortWeekday, formatWeekday = props.formatWeekday, onClickWeekNumber = props.onClickWeekNumber, showWeekNumbers = props.showWeekNumbers, childProps = __rest(props, [
        "calendarType",
        "formatShortWeekday",
        "formatWeekday",
        "onClickWeekNumber",
        "showWeekNumbers"
    ]);
    function renderWeekdays() {
        return (0, _reactDefault.default).createElement((0, _weekdaysJsDefault.default), {
            calendarType: calendarType,
            formatShortWeekday: formatShortWeekday,
            formatWeekday: formatWeekday,
            locale: locale,
            onMouseLeave: onMouseLeave
        });
    }
    function renderWeekNumbers() {
        if (!showWeekNumbers) return null;
        return (0, _reactDefault.default).createElement((0, _weekNumbersJsDefault.default), {
            activeStartDate: activeStartDate,
            calendarType: calendarType,
            onClickWeekNumber: onClickWeekNumber,
            onMouseLeave: onMouseLeave,
            showFixedNumberOfWeeks: showFixedNumberOfWeeks
        });
    }
    function renderDays() {
        return (0, _reactDefault.default).createElement((0, _daysJsDefault.default), __assign({
            calendarType: calendarType
        }, childProps));
    }
    var className = "react-calendar__month-view";
    return (0, _reactDefault.default).createElement("div", {
        className: (0, _clsxDefault.default)(className, showWeekNumbers ? "".concat(className, "--weekNumbers") : "")
    }, (0, _reactDefault.default).createElement("div", {
        style: {
            display: "flex",
            alignItems: "flex-end"
        }
    }, renderWeekNumbers(), (0, _reactDefault.default).createElement("div", {
        style: {
            flexGrow: 1,
            width: "100%"
        }
    }, renderWeekdays(), renderDays())));
};
MonthView.propTypes = __assign(__assign({}, (0, _propTypesJs.tileGroupProps)), {
    calendarType: (0, _propTypesJs.isCalendarType),
    formatDay: (0, _propTypesDefault.default).func,
    formatLongDate: (0, _propTypesDefault.default).func,
    formatShortWeekday: (0, _propTypesDefault.default).func,
    formatWeekday: (0, _propTypesDefault.default).func,
    onClickWeekNumber: (0, _propTypesDefault.default).func,
    onMouseLeave: (0, _propTypesDefault.default).func,
    showFixedNumberOfWeeks: (0, _propTypesDefault.default).bool,
    showNeighboringMonth: (0, _propTypesDefault.default).bool,
    showWeekNumbers: (0, _propTypesDefault.default).bool
});
exports.default = MonthView;

},{"react":"k0IeW","prop-types":"sBX5e","clsx":"7RLh3","./MonthView/Days.js":"ky0Pl","./MonthView/Weekdays.js":"7yexq","./MonthView/WeekNumbers.js":"lJ8Dr","./shared/const.js":"k2sgv","./shared/propTypes.js":"9We5O","@parcel/transformer-js/src/esmodule-helpers.js":"1OlAz"}],"ky0Pl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Days);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _dateUtils = require("@wojtekmaj/date-utils");
var _tileGroupJs = require("../TileGroup.js");
var _tileGroupJsDefault = parcelHelpers.interopDefault(_tileGroupJs);
var _dayJs = require("./Day.js");
var _dayJsDefault = parcelHelpers.interopDefault(_dayJs);
var _datesJs = require("../shared/dates.js");
var _utilsJs = require("../shared/utils.js");
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
function Days(props) {
    var activeStartDate = props.activeStartDate, calendarTypeOrDeprecatedCalendarType = props.calendarType, hover = props.hover, showFixedNumberOfWeeks = props.showFixedNumberOfWeeks, showNeighboringMonth = props.showNeighboringMonth, value = props.value, valueType = props.valueType, otherProps = __rest(props, [
        "activeStartDate",
        "calendarType",
        "hover",
        "showFixedNumberOfWeeks",
        "showNeighboringMonth",
        "value",
        "valueType"
    ]);
    var calendarType = (0, _utilsJs.mapCalendarType)(calendarTypeOrDeprecatedCalendarType);
    var year = (0, _dateUtils.getYear)(activeStartDate);
    var monthIndex = (0, _dateUtils.getMonth)(activeStartDate);
    var hasFixedNumberOfWeeks = showFixedNumberOfWeeks || showNeighboringMonth;
    var dayOfWeek = (0, _datesJs.getDayOfWeek)(activeStartDate, calendarType);
    var offset = hasFixedNumberOfWeeks ? 0 : dayOfWeek;
    /**
     * Defines on which day of the month the grid shall start. If we simply show current
     * month, we obviously start on day one, but if showNeighboringMonth is set to
     * true, we need to find the beginning of the week the first day of the month is in.
     */ var start = (hasFixedNumberOfWeeks ? -dayOfWeek : 0) + 1;
    /**
     * Defines on which day of the month the grid shall end. If we simply show current
     * month, we need to stop on the last day of the month, but if showNeighboringMonth
     * is set to true, we need to find the end of the week the last day of the month is in.
     */ var end = function() {
        if (showFixedNumberOfWeeks) // Always show 6 weeks
        return start + 42 - 1;
        var daysInMonth = (0, _dateUtils.getDaysInMonth)(activeStartDate);
        if (showNeighboringMonth) {
            var activeEndDate = new Date();
            activeEndDate.setFullYear(year, monthIndex, daysInMonth);
            activeEndDate.setHours(0, 0, 0, 0);
            var daysUntilEndOfTheWeek = 7 - (0, _datesJs.getDayOfWeek)(activeEndDate, calendarType) - 1;
            return daysInMonth + daysUntilEndOfTheWeek;
        }
        return daysInMonth;
    }();
    return (0, _reactDefault.default).createElement((0, _tileGroupJsDefault.default), {
        className: "react-calendar__month-view__days",
        count: 7,
        dateTransform: function(day) {
            var date = new Date();
            date.setFullYear(year, monthIndex, day);
            return (0, _dateUtils.getDayStart)(date);
        },
        dateType: "day",
        hover: hover,
        end: end,
        renderTile: function(_a) {
            var date = _a.date, otherTileProps = __rest(_a, [
                "date"
            ]);
            return (0, _reactDefault.default).createElement((0, _dayJsDefault.default), __assign({
                key: date.getTime()
            }, otherProps, otherTileProps, {
                activeStartDate: activeStartDate,
                currentMonthIndex: monthIndex,
                date: date
            }));
        },
        offset: offset,
        start: start,
        value: value,
        valueType: valueType
    });
}

},{"react":"k0IeW","@wojtekmaj/date-utils":"idgdZ","../TileGroup.js":"lmxw9","./Day.js":"8yosb","../shared/dates.js":"jnNCe","../shared/utils.js":"baU9K","@parcel/transformer-js/src/esmodule-helpers.js":"1OlAz"}],"8yosb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Day);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _dateUtils = require("@wojtekmaj/date-utils");
var _tileJs = require("../Tile.js");
var _tileJsDefault = parcelHelpers.interopDefault(_tileJs);
var _datesJs = require("../shared/dates.js");
var _dateFormatterJs = require("../shared/dateFormatter.js");
var _utilsJs = require("../shared/utils.js");
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
var className = "react-calendar__month-view__days__day";
function Day(_a) {
    var calendarTypeOrDeprecatedCalendarType = _a.calendarType, _b = _a.classes, classes = _b === void 0 ? [] : _b, currentMonthIndex = _a.currentMonthIndex, _c = _a.formatDay, formatDay = _c === void 0 ? (0, _dateFormatterJs.formatDay) : _c, _d = _a.formatLongDate, formatLongDate = _d === void 0 ? (0, _dateFormatterJs.formatLongDate) : _d, otherProps = __rest(_a, [
        "calendarType",
        "classes",
        "currentMonthIndex",
        "formatDay",
        "formatLongDate"
    ]);
    var calendarType = (0, _utilsJs.mapCalendarType)(calendarTypeOrDeprecatedCalendarType);
    var date = otherProps.date, locale = otherProps.locale;
    var classesProps = [];
    if (classes) classesProps.push.apply(classesProps, classes);
    if (className) classesProps.push(className);
    if ((0, _datesJs.isWeekend)(date, calendarType)) classesProps.push("".concat(className, "--weekend"));
    if (date.getMonth() !== currentMonthIndex) classesProps.push("".concat(className, "--neighboringMonth"));
    return (0, _reactDefault.default).createElement((0, _tileJsDefault.default), __assign({}, otherProps, {
        classes: classesProps,
        formatAbbr: formatLongDate,
        maxDateTransform: (0, _dateUtils.getDayEnd),
        minDateTransform: (0, _dateUtils.getDayStart),
        view: "month"
    }), formatDay(locale, date));
}

},{"react":"k0IeW","@wojtekmaj/date-utils":"idgdZ","../Tile.js":"dZ8cX","../shared/dates.js":"jnNCe","../shared/dateFormatter.js":"an7bz","../shared/utils.js":"baU9K","@parcel/transformer-js/src/esmodule-helpers.js":"1OlAz"}],"7yexq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Weekdays);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _clsx = require("clsx");
var _clsxDefault = parcelHelpers.interopDefault(_clsx);
var _dateUtils = require("@wojtekmaj/date-utils");
var _flexJs = require("../Flex.js");
var _flexJsDefault = parcelHelpers.interopDefault(_flexJs);
var _datesJs = require("../shared/dates.js");
var _dateFormatterJs = require("../shared/dateFormatter.js");
var _utilsJs = require("../shared/utils.js");
var className = "react-calendar__month-view__weekdays";
var weekdayClassName = "".concat(className, "__weekday");
function Weekdays(props) {
    var calendarTypeOrDeprecatedCalendarType = props.calendarType, _a = props.formatShortWeekday, formatShortWeekday = _a === void 0 ? (0, _dateFormatterJs.formatShortWeekday) : _a, _b = props.formatWeekday, formatWeekday = _b === void 0 ? (0, _dateFormatterJs.formatWeekday) : _b, locale = props.locale, onMouseLeave = props.onMouseLeave;
    var calendarType = (0, _utilsJs.mapCalendarType)(calendarTypeOrDeprecatedCalendarType);
    var anyDate = new Date();
    var beginOfMonth = (0, _dateUtils.getMonthStart)(anyDate);
    var year = (0, _dateUtils.getYear)(beginOfMonth);
    var monthIndex = (0, _dateUtils.getMonth)(beginOfMonth);
    var weekdays = [];
    for(var weekday = 1; weekday <= 7; weekday += 1){
        var weekdayDate = new Date(year, monthIndex, weekday - (0, _datesJs.getDayOfWeek)(beginOfMonth, calendarType));
        var abbr = formatWeekday(locale, weekdayDate);
        weekdays.push((0, _reactDefault.default).createElement("div", {
            key: weekday,
            className: (0, _clsxDefault.default)(weekdayClassName, (0, _datesJs.isCurrentDayOfWeek)(weekdayDate) && "".concat(weekdayClassName, "--current"), (0, _datesJs.isWeekend)(weekdayDate, calendarType) && "".concat(weekdayClassName, "--weekend"))
        }, (0, _reactDefault.default).createElement("abbr", {
            "aria-label": abbr,
            title: abbr
        }, formatShortWeekday(locale, weekdayDate).replace(".", ""))));
    }
    return (0, _reactDefault.default).createElement((0, _flexJsDefault.default), {
        className: className,
        count: 7,
        onFocus: onMouseLeave,
        onMouseOver: onMouseLeave
    }, weekdays);
}

},{"react":"k0IeW","clsx":"7RLh3","@wojtekmaj/date-utils":"idgdZ","../Flex.js":"cY3q7","../shared/dates.js":"jnNCe","../shared/dateFormatter.js":"an7bz","../shared/utils.js":"baU9K","@parcel/transformer-js/src/esmodule-helpers.js":"1OlAz"}],"lJ8Dr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>WeekNumbers);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _dateUtils = require("@wojtekmaj/date-utils");
var _weekNumberJs = require("./WeekNumber.js");
var _weekNumberJsDefault = parcelHelpers.interopDefault(_weekNumberJs);
var _flexJs = require("../Flex.js");
var _flexJsDefault = parcelHelpers.interopDefault(_flexJs);
var _datesJs = require("../shared/dates.js");
var _utilsJs = require("../shared/utils.js");
function WeekNumbers(props) {
    var activeStartDate = props.activeStartDate, calendarTypeOrDeprecatedCalendarType = props.calendarType, onClickWeekNumber = props.onClickWeekNumber, onMouseLeave = props.onMouseLeave, showFixedNumberOfWeeks = props.showFixedNumberOfWeeks;
    var calendarType = (0, _utilsJs.mapCalendarType)(calendarTypeOrDeprecatedCalendarType);
    var numberOfWeeks = function() {
        if (showFixedNumberOfWeeks) return 6;
        var numberOfDays = (0, _dateUtils.getDaysInMonth)(activeStartDate);
        var startWeekday = (0, _datesJs.getDayOfWeek)(activeStartDate, calendarType);
        var days = numberOfDays - (7 - startWeekday);
        return 1 + Math.ceil(days / 7);
    }();
    var dates = function() {
        var year = (0, _dateUtils.getYear)(activeStartDate);
        var monthIndex = (0, _dateUtils.getMonth)(activeStartDate);
        var day = (0, _dateUtils.getDate)(activeStartDate);
        var result = [];
        for(var index = 0; index < numberOfWeeks; index += 1)result.push((0, _datesJs.getBeginOfWeek)(new Date(year, monthIndex, day + index * 7), calendarType));
        return result;
    }();
    var weekNumbers = dates.map(function(date) {
        return (0, _datesJs.getWeekNumber)(date, calendarType);
    });
    return (0, _reactDefault.default).createElement((0, _flexJsDefault.default), {
        className: "react-calendar__month-view__weekNumbers",
        count: numberOfWeeks,
        direction: "column",
        onFocus: onMouseLeave,
        onMouseOver: onMouseLeave,
        style: {
            flexBasis: "calc(100% * (1 / 8)",
            flexShrink: 0
        }
    }, weekNumbers.map(function(weekNumber, weekIndex) {
        var date = dates[weekIndex];
        if (!date) throw new Error("date is not defined");
        return (0, _reactDefault.default).createElement((0, _weekNumberJsDefault.default), {
            key: weekNumber,
            date: date,
            onClickWeekNumber: onClickWeekNumber,
            weekNumber: weekNumber
        });
    }));
}

},{"react":"k0IeW","@wojtekmaj/date-utils":"idgdZ","./WeekNumber.js":"jsV0t","../Flex.js":"cY3q7","../shared/dates.js":"jnNCe","../shared/utils.js":"baU9K","@parcel/transformer-js/src/esmodule-helpers.js":"1OlAz"}],"jsV0t":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>WeekNumber);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
var className = "react-calendar__tile";
function WeekNumber(props) {
    var onClickWeekNumber = props.onClickWeekNumber, weekNumber = props.weekNumber;
    var children = (0, _reactDefault.default).createElement("span", null, weekNumber);
    if (onClickWeekNumber) {
        var date_1 = props.date, onClickWeekNumber_1 = props.onClickWeekNumber, weekNumber_1 = props.weekNumber, otherProps = __rest(props, [
            "date",
            "onClickWeekNumber",
            "weekNumber"
        ]);
        return (0, _reactDefault.default).createElement("button", __assign({}, otherProps, {
            className: className,
            onClick: function(event) {
                return onClickWeekNumber_1(weekNumber_1, date_1, event);
            },
            type: "button"
        }), children);
    } else {
        var date = props.date, onClickWeekNumber_2 = props.onClickWeekNumber, weekNumber_2 = props.weekNumber, otherProps = __rest(props, [
            "date",
            "onClickWeekNumber",
            "weekNumber"
        ]);
        return (0, _reactDefault.default).createElement("div", __assign({}, otherProps, {
            className: className
        }), children);
    }
}

},{"react":"k0IeW","@parcel/transformer-js/src/esmodule-helpers.js":"1OlAz"}]},["5L4Mo","7md93"], null, "parcelRequiref931")

//# sourceMappingURL=esm.68fb0cb1.js.map

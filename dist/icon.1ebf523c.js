// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/js/icon.js":[function(require,module,exports) {
var svgPlaceholder = document.createElement('div');
svgPlaceholder.style.height = 0;
svgPlaceholder.style.width = 0;
svgPlaceholder.style.position = "absolute";
svgPlaceholder.style.overflow = "hidden";
document.body.appendChild(svgPlaceholder);
svgPlaceholder.innerHTML = "\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg style=\"display:none\" width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch -->\n    <title>\u4E0B\u8F7D</title>\n    <desc>Created with Sketch.</desc>\n    <symbol id=\"icon-download\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" opacity=\"0.8\">\n        <g transform=\"translate(-116.000000, -499.000000)\" fill=\"#FD1BB8\">\n            <g transform=\"translate(116.000000, 499.000000)\">\n                <path d=\"M23.9976794,19.1885206 L23.9802265,19.1885206 C23.895261,18.5134181 23.3256733,17.9898552 22.6276755,17.9898552 C21.9296543,17.9898552 21.3600666,18.5134415 21.2752418,19.1885206 L21.257789,19.1885206 C21.257789,19.1885206 21.257789,21.2433857 19.2027597,21.2433856 L4.81825879,21.2433856 C2.76334685,21.2433856 2.76334685,19.1885206 2.76334685,19.1885206 L2.74624584,19.1885206 C2.66090503,18.5134181 2.09129382,17.9898552 1.39343683,17.9898552 C0.695415616,17.9898552 0.125851327,18.5134415 0.0404636008,19.1885206 L0.0234329706,19.1885206 C0.0234329706,19.1885206 0.0234329706,19.2343813 0.0278900196,19.3155231 C0.0275146849,19.3306771 0.0234329706,19.3447051 0.0234329706,19.3597418 C0.0234329706,19.4631688 0.0372029119,19.5631944 0.0587140509,19.6597483 C0.203544775,20.8673278 0.951907209,23.9832995 4.81823533,23.9832995 L19.2027597,23.9832995 C22.828712,23.9832995 23.7161579,21.0354759 23.9305656,19.7628 C23.9731435,19.6326027 23.9957711,19.4967111 23.9976794,19.3597418 C23.9976794,19.3364244 23.9918383,19.3145144 23.9908296,19.2915724 C23.99592,19.2262179 23.9976794,19.1885206 23.9976794,19.1885206 Z\" id=\"Path\"></path>\n                <path d=\"M3.59826991,11.5300391 L11.1350974,19.0384587 C11.3696628,19.2719338 11.6871777,19.4029616 12.0181332,19.4028579 C12.349078,19.4029425 12.6665786,19.2719172 12.9011455,19.0384587 L20.4383483,11.5302971 C20.9259497,11.0445254 20.9259497,10.2568471 20.4383483,9.77095808 C19.9506061,9.28509252 19.1599251,9.28509252 18.6723002,9.77095808 L13.2807455,15.1413066 L13.2807455,1.24253044 C13.2801817,0.912810944 13.148249,0.596908639 12.9141413,0.36472584 C12.6795289,0.131934872 12.3622214,0.00161079526 12.0317154,0.00229716634 C11.3420219,0.00229716634 10.7828965,0.557458145 10.7828965,1.24253044 L10.7828965,15.169644 L5.36403649,9.77095808 C5.05051811,9.44761071 4.58614023,9.31798088 4.14963067,9.43177644 C3.71298035,9.54561891 3.37206282,9.88526971 3.25779809,10.3202311 C3.1435099,10.7550751 3.27370272,11.2176936 3.59826991,11.5300391 Z\" id=\"Path\"></path>\n            </g>\n        </g>\n    </symbol>\n    <symbol id=\"icon-share\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" opacity=\"0.8\">\n        <g id=\"iPhone-8\" transform=\"translate(-176.000000, -500.000000)\" fill=\"#FD1BB8\">\n            <g id=\"\u5206\u4EAB\" transform=\"translate(176.000000, 500.000000)\">\n                <path d=\"M19.6276596,17.4468085 C18.656292,17.4460472 17.7351514,17.8783622 17.1150468,18.6260426 L6.54551489,12.7429447 C6.54932767,12.6770383 6.55531915,12.6116766 6.55531915,12.5446809 C6.55531915,12.4313872 6.54932767,12.319183 6.53788937,12.2086128 L17.4837957,5.74815319 C18.0772104,6.26749459 18.8390809,6.55358316 19.6276596,6.55319148 C21.4325731,6.55319148 22.8957447,5.09001994 22.8957447,3.28510637 C22.8957447,1.48019281 21.4325731,0.017021266 19.6276596,0.017021266 C17.822746,0.017021266 16.3595745,1.48019281 16.3595745,3.28510637 C16.3595745,3.67618723 16.432017,4.0492936 16.5578383,4.3968 L5.95181276,10.656817 C5.34044938,9.79134515 4.34685979,9.27667711 3.28723404,9.27659576 C1.48232048,9.27659576 0.0191489362,10.7397673 0.0191489362,12.5446809 C0.0191489362,14.3495944 1.48232048,15.812766 3.28723404,15.812766 C4.39344928,15.8129264 5.42439637,15.2525488 6.02588936,14.3241532 L16.4178553,20.1086638 C16.3796006,20.3084858 16.360089,20.5114435 16.3595745,20.7148936 C16.3595745,22.5198072 17.822746,23.9829787 19.6276596,23.9829787 C21.4325731,23.9829787 22.8957447,22.5198072 22.8957447,20.7148936 C22.8957447,18.9099801 21.4325731,17.4468085 19.6276596,17.4468085 Z\" id=\"Path\"></path>\n            </g>\n        </g>\n    </symbol>\n    <symbol id=\"icon-like\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" opacity=\"0.8\">\n        <g id=\"iPhone-8\" transform=\"translate(-60.000000, -502.000000)\" fill=\"#FD1BB8\">\n            <g id=\"\u559C\u6B22\" transform=\"translate(60.000000, 502.000000)\">\n                <path d=\"M17.4,0 C15.3,0 13.3227273,0.898561565 12,2.35709628 C10.6772727,0.898561565 8.7,8.22500989e-16 6.6,8.22500989e-16 C2.87727273,8.22500989e-16 0,2.6956847 0,6.1857499 C0,10.457173 4.07727273,13.882125 10.2545455,19.1693134 L12,20.6278481 L13.7454545,19.1693134 C19.9227273,13.882125 24,10.457173 24,6.1857499 C24,2.6956847 21.1227273,8.22500989e-16 17.4,0 Z\" id=\"Path\"></path>\n            </g>\n        </g>\n    </symbol>\n    <symbol id=\"icon-more\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" opacity=\"0.8\">\n        <g id=\"iPhone-8\" transform=\"translate(-288.000000, -509.000000)\" fill=\"#FD1BB8\" fill-rule=\"nonzero\">\n            <g id=\"\u66F4\u591A\" transform=\"translate(288.914894, 509.000000)\">\n                <path d=\"M2.25284281,0.0133779264 C1.01137124,0.0133779264 0.00535117057,1.08628763 0.00535117057,2.41070234 C0.00535117057,3.73511706 1.01137124,4.80802676 2.25284281,4.80802676 C3.49431438,4.80802676 4.50301003,3.73511706 4.50301003,2.41070234 C4.50301003,1.08628763 3.49431438,0.0133779264 2.25284281,0.0133779264 M12,0.0133779264 C10.7585284,0.0133779264 9.74983278,1.08628763 9.74983278,2.41070234 C9.74983278,3.73511706 10.7558528,4.80802676 12,4.80802676 C13.2414716,4.80802676 14.2474916,3.73511706 14.2474916,2.41070234 C14.2474916,1.08628763 13.2414716,0.0133779264 12,0.0133779264 M21.7337793,0.0133779264 C20.4923077,0.0133779264 19.483612,1.08628763 19.483612,2.41070234 C19.483612,3.73511706 20.4896321,4.80802676 21.7337793,4.80802676 C22.9752508,4.80802676 23.9812709,3.73511706 23.9812709,2.41070234 C23.9812709,1.08628763 22.9752508,0.0133779264 21.7337793,0.0133779264\" id=\"Shape\"></path>\n            </g>\n        </g>\n    </symbol>\n    <symbol id=\"icon-comment\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" opacity=\"0.8\">\n        <g id=\"iPhone-8\" transform=\"translate(-231.000000, -503.000000)\" fill=\"#FD1BB8\">\n            <g id=\"\u8BC4\u8BBA\" transform=\"translate(231.000000, 503.000000)\">\n                <path d=\"M23.529784,1.94060485 C22.9036092,0.688255224 21.7261283,0.000824188235 20.2151412,0.000824188235 L3.78485875,0.000824188235 C2.27387172,0.000824188235 1.09639082,0.688255224 0.470216024,1.94060485 C0.0346161412,2.81180459 0.0210036471,3.66939184 0.0210036471,3.76467929 L0.0210036471,13.803895 C0.0210036471,13.8991825 0.0346161412,14.7567697 0.470216024,15.6347757 C1.09639082,16.8871253 2.27387172,17.5745563 3.78485875,17.5745563 L4.35658358,17.5745563 L4.35658358,19.2284746 C4.35658358,19.4190495 4.38380856,20.1268993 4.90788967,20.6713991 C5.15291459,20.9232303 5.58851447,21.2227052 6.28275174,21.2227052 C7.03143901,21.2227052 7.69164506,20.6918179 7.90944499,20.4944367 L11.4555002,17.5745563 L20.2151412,17.5745563 C21.7261283,17.5745563 22.9036092,16.8871253 23.529784,15.6347757 C23.9653838,14.7567697 23.9789963,13.8991824 23.9789964,13.803895 L23.9789964,3.76467929 C23.9789964,3.66939181 23.9653839,2.81180459 23.529784,1.94060485 Z M21.9235095,13.803895 C21.9235095,13.8107012 21.909897,14.2735261 21.692097,14.7159322 C21.4198471,15.260432 20.950216,15.5190695 20.2151412,15.5190695 L11.0879628,15.5190695 C10.8497441,15.5190695 10.6183317,15.6007444 10.434563,15.7504819 L6.58222666,18.9221934 C6.56861416,18.9358059 6.55500167,18.9494184 6.53458292,18.9630309 C6.50735793,18.9902559 6.45290795,19.0310934 6.40526421,19.0651246 L6.40526421,17.0028315 C6.40526421,16.9143503 6.39165172,16.8258691 6.37123296,16.7441941 L6.37123296,16.7305816 C6.18065802,15.6075507 5.21417082,15.5190695 4.92150216,15.5190695 L3.78485875,15.5190695 C2.84559654,15.5190695 2.50528414,15.0902758 2.32832169,14.7635759 C2.09010301,14.3211698 2.06968428,13.8379262 2.06968428,13.803895 L2.06968428,3.76467929 C2.06968428,3.75787304 2.08329678,3.29504819 2.30109671,2.85264207 C2.57334661,2.30814224 3.04297774,2.04950482 3.77805252,2.04950482 L20.208335,2.04950482 C20.9434098,2.04950482 21.4130409,2.301336 21.6852908,2.85264207 C21.9030907,3.29504819 21.9167032,3.75787304 21.9167032,3.76467929 L21.9167032,13.803895 L21.9235095,13.803895 Z\" id=\"Shape\" fill-rule=\"nonzero\"></path>\n                <path d=\"M5.15972085,8.79449652 C5.15972083,9.38052132 5.47236134,9.92203058 5.97987371,10.215043 C6.48738608,10.5080554 7.1126671,10.5080554 7.62017947,10.215043 C8.12769184,9.92203058 8.44033234,9.38052132 8.44033233,8.79449652 C8.44033233,7.88858067 7.70594243,7.15419078 6.80002659,7.15419078 C5.89411074,7.15419078 5.15972085,7.88858067 5.15972085,8.79449652 Z\" id=\"Path\"></path>\n                <path d=\"M10.3596943,8.79449652 C10.3596942,9.38052133 10.6723347,9.92203059 11.1798471,10.215043 C11.6873595,10.5080554 12.3126405,10.5080554 12.8201529,10.215043 C13.3276653,9.92203059 13.6403058,9.38052133 13.6403057,8.79449652 C13.6403058,8.20847171 13.3276653,7.66696245 12.8201529,7.37395004 C12.3126405,7.08093763 11.6873595,7.08093763 11.1798471,7.37395004 C10.6723347,7.66696245 10.3596942,8.20847171 10.3596943,8.79449652 Z\" id=\"Path\"></path>\n                <path d=\"M15.5596677,8.79449652 C15.5596677,9.70041236 16.2940576,10.4348023 17.1999734,10.4348023 C18.1058893,10.4348023 18.8402792,9.70041236 18.8402792,8.79449652 C18.8402792,7.88858067 18.1058893,7.15419078 17.1999734,7.15419078 C16.2940576,7.15419078 15.5596677,7.88858067 15.5596677,8.79449652 Z\" id=\"Path\"></path>\n            </g>\n        </g>\n    </symbol>\n</svg>\n\n\n\n\n\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" hidden>\n<symbol id=\"list\" viewBox=\"0 0 120 120\"><defs><radialGradient fx=\"50%\" fy=\"50%\" gradientTransform=\"matrix(1 0 0 .99419 0 .003)\" id=\"a\"><stop stop-color=\"#AC2D73\" offset=\"0%\"/><stop stop-color=\"#120A82\" offset=\"92%\"/><stop stop-color=\"#07006B\" offset=\"100%\"/></radialGradient><linearGradient x1=\"90.507%\" y1=\"20.696%\" x2=\"9.494%\" y2=\"79.304%\" id=\"b\"><stop stop-color=\"#3B2EE8\" stop-opacity=\".2\" offset=\"0%\"/><stop stop-color=\"#FC429F\" offset=\"25%\"/><stop stop-color=\"#B639E5\" offset=\"87%\"/><stop stop-color=\"#FCFCFC\" offset=\"100%\"/></linearGradient><linearGradient x1=\"126.402%\" y1=\"13.504%\" x2=\"-24.159%\" y2=\"87.272%\" id=\"c\"><stop stop-color=\"#FC429F\" offset=\"0%\"/><stop stop-color=\"#3B2EE8\" offset=\"100%\"/></linearGradient><linearGradient x1=\"67.887%\" y1=\"30.969%\" x2=\"75.469%\" y2=\"21.162%\" id=\"d\"><stop stop-color=\"#FC57A9\" offset=\"0%\"/><stop stop-color=\"#FCFCFC\" offset=\"100%\"/></linearGradient><linearGradient x1=\"61.413%\" y1=\"33.894%\" x2=\"39.42%\" y2=\"71.487%\" id=\"e\"><stop stop-color=\"#B639E5\" offset=\"0%\"/><stop stop-color=\"#3B2EE8\" offset=\"100%\"/></linearGradient><linearGradient x1=\"92.215%\" y1=\"-4.639%\" x2=\"10.454%\" y2=\"110.071%\" id=\"f\"><stop stop-color=\"#FC429F\" offset=\"0%\"/><stop stop-color=\"#B639E5\" offset=\"100%\"/></linearGradient></defs><g fill=\"none\" fill-rule=\"evenodd\"><g><ellipse fill=\"url(#a)\" cx=\"60\" cy=\"60.328\" rx=\"56.066\" ry=\"56.393\"/><path d=\"M59.955 5.615c26.771-.025 49.58 19.55 53.772 46.147 4.193 26.597-11.478 52.308-36.944 60.615-25.466 8.307-53.155-3.26-65.277-27.271-12.123-24.01-5.074-53.324 16.617-69.108A54.071 54.071 0 0 1 59.955 5.615zm0-1.68c-25.987.027-48.55 18.011-54.517 43.453C-.53 72.83 11.665 99.062 34.9 110.769a56.302 56.302 0 0 0 25.138 5.952c21.055-.012 40.327-11.89 49.899-30.754 9.572-18.863 7.83-41.531-4.512-58.69C94.886 12.59 77.965 3.903 59.96 3.935h-.004z\" fill=\"url(#b)\" fill-rule=\"nonzero\"/><path d=\"M3.108 78.689c-8.463-25.236.77-53.02 22.662-68.197l3.082 4.464C8.922 28.739.52 54.02 8.244 76.968l-5.136 1.72z\" fill=\"url(#c)\"/><path d=\"M114.245 65.65c2.128-19.617-6.568-38.844-22.722-50.24C75.37 4.011 54.293 2.233 36.448 10.762l-2.35-4.887c19.623-9.38 42.8-7.425 60.565 5.107 17.764 12.531 27.327 33.674 24.989 55.247l-5.407-.58z\" fill=\"url(#d)\"/><path d=\"M54.625 120c-19.1-1.68-36.248-12.582-46.1-29.31l4.639-2.821c8.957 15.212 24.55 25.126 41.918 26.651l-.457 5.48z\" fill=\"url(#e)\"/><path d=\"M64.678 119.344l-.416-5.413c22.4-1.688 41.452-16.999 47.934-38.521l5.181 1.553c-7.118 23.672-28.064 40.518-52.699 42.381z\" fill=\"url(#f)\"/></g><path d=\"M82 45.527c0-3.53-1.422-6.353-3.792-8.235-2.843-2.118-6.398-2.824-9.952-1.883l-13.507 3.53c-6.872 1.882-12.323 8.706-12.323 15.53V71.41c-.947-.235-1.658-.47-2.843-.47-4.029 0-7.583 3.294-7.583 7.53C32 82.705 35.318 86 39.583 86c4.265 0 7.583-3.294 7.583-7.53V61.763l29.857-7.294v13.883c-.948-.235-1.658-.47-2.843-.47-4.029 0-7.583 3.294-7.583 7.53 0 4.235 3.317 7.529 7.583 7.529 4.265 0 7.583-3.294 7.583-7.53v-.47-.236L82 45.527c0-.08 0-.08 0 0zM40 82c-1.5 0-3-1.25-3-3s1.25-3 3-3 3 1.25 3 3-1.5 3-3 3zm7-25v-2.329c0-4.657 4.048-9.548 8.81-10.945l13.571-3.493c2.143-.466 4.048-.233 5.476.699 1.429.931 2.143 2.561 2.143 4.657v4.192L47 57zm27 22c-1.5 0-3-1.25-3-3s1.25-3 3-3 3 1.25 3 3-1.5 3-3 3z\" fill=\"#FFF\" fill-rule=\"nonzero\"/></g></symbol>\n<symbol id=\"repeat\" viewBox=\"0 0 120 120\"><defs><radialGradient fx=\"50%\" fy=\"50%\" gradientTransform=\"matrix(1 0 0 .99419 0 .003)\" id=\"a\"><stop stop-color=\"#AC2D73\" offset=\"0%\"/><stop stop-color=\"#120A82\" offset=\"92%\"/><stop stop-color=\"#07006B\" offset=\"100%\"/></radialGradient><linearGradient x1=\"90.507%\" y1=\"20.696%\" x2=\"9.494%\" y2=\"79.304%\" id=\"b\"><stop stop-color=\"#3B2EE8\" stop-opacity=\".2\" offset=\"0%\"/><stop stop-color=\"#FC429F\" offset=\"25%\"/><stop stop-color=\"#B639E5\" offset=\"87%\"/><stop stop-color=\"#FCFCFC\" offset=\"100%\"/></linearGradient><linearGradient x1=\"126.402%\" y1=\"13.504%\" x2=\"-24.159%\" y2=\"87.272%\" id=\"c\"><stop stop-color=\"#FC429F\" offset=\"0%\"/><stop stop-color=\"#3B2EE8\" offset=\"100%\"/></linearGradient><linearGradient x1=\"67.887%\" y1=\"30.969%\" x2=\"75.469%\" y2=\"21.162%\" id=\"d\"><stop stop-color=\"#FC57A9\" offset=\"0%\"/><stop stop-color=\"#FCFCFC\" offset=\"100%\"/></linearGradient><linearGradient x1=\"61.413%\" y1=\"33.894%\" x2=\"39.42%\" y2=\"71.487%\" id=\"e\"><stop stop-color=\"#B639E5\" offset=\"0%\"/><stop stop-color=\"#3B2EE8\" offset=\"100%\"/></linearGradient><linearGradient x1=\"92.215%\" y1=\"-4.639%\" x2=\"10.454%\" y2=\"110.071%\" id=\"f\"><stop stop-color=\"#FC429F\" offset=\"0%\"/><stop stop-color=\"#B639E5\" offset=\"100%\"/></linearGradient></defs><g fill=\"none\" fill-rule=\"evenodd\"><g><ellipse fill=\"url(#a)\" cx=\"60\" cy=\"60.328\" rx=\"56.066\" ry=\"56.393\"/><path d=\"M59.955 5.615c26.771-.025 49.58 19.55 53.772 46.147 4.193 26.597-11.478 52.308-36.944 60.615-25.466 8.307-53.155-3.26-65.277-27.271-12.123-24.01-5.074-53.324 16.617-69.108A54.071 54.071 0 0 1 59.955 5.615zm0-1.68c-25.987.027-48.55 18.011-54.517 43.453C-.53 72.83 11.665 99.062 34.9 110.769a56.302 56.302 0 0 0 25.138 5.952c21.055-.012 40.327-11.89 49.899-30.754 9.572-18.863 7.83-41.531-4.512-58.69C94.886 12.59 77.965 3.903 59.96 3.935h-.004z\" fill=\"url(#b)\" fill-rule=\"nonzero\"/><path d=\"M3.108 78.689c-8.463-25.236.77-53.02 22.662-68.197l3.082 4.464C8.922 28.739.52 54.02 8.244 76.968l-5.136 1.72z\" fill=\"url(#c)\"/><path d=\"M114.245 65.65c2.128-19.617-6.568-38.844-22.722-50.24C75.37 4.011 54.293 2.233 36.448 10.762l-2.35-4.887c19.623-9.38 42.8-7.425 60.565 5.107 17.764 12.531 27.327 33.674 24.989 55.247l-5.407-.58z\" fill=\"url(#d)\"/><path d=\"M54.625 120c-19.1-1.68-36.248-12.582-46.1-29.31l4.639-2.821c8.957 15.212 24.55 25.126 41.918 26.651l-.457 5.48z\" fill=\"url(#e)\"/><path d=\"M64.678 119.344l-.416-5.413c22.4-1.688 41.452-16.999 47.934-38.521l5.181 1.553c-7.118 23.672-28.064 40.518-52.699 42.381z\" fill=\"url(#f)\"/></g><path d=\"M80.757 41.734a.888.888 0 0 0-.278-.208.874.874 0 0 0-.964.153l-4.095 3.67c-5.318-5.364-13.327-7.722-21.087-5.456C43.055 43.187 36.581 55 39.873 66.28c3.294 11.28 15.107 17.752 26.385 14.459 7.313-2.135 12.606-7.849 14.525-14.678.066-.238.058-.504.058-.763a2.762 2.762 0 0 0-2.763-2.762 2.774 2.774 0 0 0-2.644 1.909c-1.371 5.052-5.26 9.292-10.655 10.866-8.242 2.407-16.874-2.324-19.28-10.567-2.407-8.243 2.325-16.876 10.567-19.283 5.525-1.613 11.228-.017 15.11 3.694l-4.208 3.768a.88.88 0 0 0-.258.942c.119.337.433.572.79.592l12.535 1.42a.892.892 0 0 0 .935-.838l.013-12.663a.88.88 0 0 0-.226-.64z\" fill=\"#FFF\"/></g></symbol>\n<symbol id=\"next\" viewBox=\"0 0 120 120\"><defs><radialGradient fx=\"50%\" fy=\"50%\" gradientTransform=\"matrix(1 0 0 .99419 0 .003)\" id=\"a\"><stop stop-color=\"#AC2D73\" offset=\"0%\"/><stop stop-color=\"#120A82\" offset=\"92%\"/><stop stop-color=\"#07006B\" offset=\"100%\"/></radialGradient><linearGradient x1=\"90.507%\" y1=\"20.696%\" x2=\"9.494%\" y2=\"79.304%\" id=\"b\"><stop stop-color=\"#3B2EE8\" stop-opacity=\".2\" offset=\"0%\"/><stop stop-color=\"#FC429F\" offset=\"25%\"/><stop stop-color=\"#B639E5\" offset=\"87%\"/><stop stop-color=\"#FCFCFC\" offset=\"100%\"/></linearGradient><linearGradient x1=\"126.402%\" y1=\"13.504%\" x2=\"-24.159%\" y2=\"87.272%\" id=\"c\"><stop stop-color=\"#FC429F\" offset=\"0%\"/><stop stop-color=\"#3B2EE8\" offset=\"100%\"/></linearGradient><linearGradient x1=\"67.887%\" y1=\"30.969%\" x2=\"75.469%\" y2=\"21.162%\" id=\"d\"><stop stop-color=\"#FC57A9\" offset=\"0%\"/><stop stop-color=\"#FCFCFC\" offset=\"100%\"/></linearGradient><linearGradient x1=\"61.413%\" y1=\"33.894%\" x2=\"39.42%\" y2=\"71.487%\" id=\"e\"><stop stop-color=\"#B639E5\" offset=\"0%\"/><stop stop-color=\"#3B2EE8\" offset=\"100%\"/></linearGradient><linearGradient x1=\"92.215%\" y1=\"-4.639%\" x2=\"10.454%\" y2=\"110.071%\" id=\"f\"><stop stop-color=\"#FC429F\" offset=\"0%\"/><stop stop-color=\"#B639E5\" offset=\"100%\"/></linearGradient></defs><g fill=\"none\" fill-rule=\"evenodd\"><ellipse fill=\"url(#a)\" cx=\"60\" cy=\"60.328\" rx=\"56.066\" ry=\"56.393\"/><path d=\"M59.955 5.615c26.771-.025 49.58 19.55 53.772 46.147 4.193 26.597-11.478 52.308-36.944 60.615-25.466 8.307-53.155-3.26-65.277-27.271-12.123-24.01-5.074-53.324 16.617-69.108A54.071 54.071 0 0 1 59.955 5.615zm0-1.68c-25.987.027-48.55 18.011-54.517 43.453C-.53 72.83 11.665 99.062 34.9 110.769a56.302 56.302 0 0 0 25.138 5.952c21.055-.012 40.327-11.89 49.899-30.754 9.572-18.863 7.83-41.531-4.512-58.69C94.886 12.59 77.965 3.903 59.96 3.935h-.004z\" fill=\"url(#b)\" fill-rule=\"nonzero\"/><path d=\"M3.108 78.689c-8.463-25.236.77-53.02 22.662-68.197l3.082 4.464C8.922 28.739.52 54.02 8.244 76.968l-5.136 1.72z\" fill=\"url(#c)\"/><path d=\"M114.245 65.65c2.128-19.617-6.568-38.844-22.722-50.24C75.37 4.011 54.293 2.233 36.448 10.762l-2.35-4.887c19.623-9.38 42.8-7.425 60.565 5.107 17.764 12.531 27.327 33.674 24.989 55.247l-5.407-.58z\" fill=\"url(#d)\"/><path d=\"M54.625 120c-19.1-1.68-36.248-12.582-46.1-29.31l4.639-2.821c8.957 15.212 24.55 25.126 41.918 26.651l-.457 5.48z\" fill=\"url(#e)\"/><path d=\"M64.678 119.344l-.416-5.413c22.4-1.688 41.452-16.999 47.934-38.521l5.181 1.553c-7.118 23.672-28.064 40.518-52.699 42.381z\" fill=\"url(#f)\"/><path d=\"M70.67 59.138c1.949 1.385 1.949 3.609 0 4.993L44.168 81.984c-1.95 1.385-3.513.44-3.513-2.077V43.362c0-2.517 1.582-3.44 3.513-2.077l26.5 17.853z\" fill=\"#FFF\"/><rect fill=\"#FFF\" fill-rule=\"nonzero\" x=\"77.377\" y=\"40.656\" width=\"6.557\" height=\"41.967\" rx=\"3.279\"/></g></symbol>\n<symbol id=\"pausing\" viewBox=\"0 0 120 120\"><defs><radialGradient fx=\"50%\" fy=\"50%\" id=\"a\"><stop stop-color=\"#AC2D73\" offset=\"0%\"/><stop stop-color=\"#120A82\" offset=\"92%\"/><stop stop-color=\"#07006B\" offset=\"100%\"/></radialGradient><linearGradient x1=\"90.507%\" y1=\"20.696%\" x2=\"9.494%\" y2=\"79.304%\" id=\"b\"><stop stop-color=\"#3B2EE8\" stop-opacity=\".2\" offset=\"0%\"/><stop stop-color=\"#FC429F\" offset=\"25%\"/><stop stop-color=\"#B639E5\" offset=\"87%\"/><stop stop-color=\"#FCFCFC\" offset=\"100%\"/></linearGradient><linearGradient x1=\"126.402%\" y1=\"13.504%\" x2=\"-24.159%\" y2=\"87.272%\" id=\"c\"><stop stop-color=\"#FC429F\" offset=\"0%\"/><stop stop-color=\"#3B2EE8\" offset=\"100%\"/></linearGradient><linearGradient x1=\"67.887%\" y1=\"30.969%\" x2=\"75.469%\" y2=\"21.162%\" id=\"d\"><stop stop-color=\"#FC57A9\" offset=\"0%\"/><stop stop-color=\"#FCFCFC\" offset=\"100%\"/></linearGradient><linearGradient x1=\"61.413%\" y1=\"33.894%\" x2=\"39.42%\" y2=\"71.487%\" id=\"e\"><stop stop-color=\"#B639E5\" offset=\"0%\"/><stop stop-color=\"#3B2EE8\" offset=\"100%\"/></linearGradient><linearGradient x1=\"92.215%\" y1=\"-4.639%\" x2=\"10.454%\" y2=\"110.071%\" id=\"f\"><stop stop-color=\"#FC429F\" offset=\"0%\"/><stop stop-color=\"#B639E5\" offset=\"100%\"/></linearGradient><linearGradient x1=\"-.012%\" y1=\"49.996%\" x2=\"99.988%\" y2=\"49.996%\" id=\"g\"><stop stop-color=\"#FC429F\" offset=\"0%\"/><stop stop-color=\"#3B2EE8\" stop-opacity=\".2\" offset=\"100%\"/></linearGradient><linearGradient x1=\"99.988%\" y1=\"50.004%\" x2=\"-.012%\" y2=\"50.004%\" id=\"h\"><stop stop-color=\"#FC429F\" offset=\"0%\"/><stop stop-color=\"#3B2EE8\" stop-opacity=\".2\" offset=\"100%\"/></linearGradient></defs><g fill=\"none\" fill-rule=\"evenodd\"><circle fill=\"url(#a)\" cx=\"60\" cy=\"60\" r=\"56.23\"/><path d=\"M59.955 5.445c26.85-.024 49.726 19.493 53.93 46.014 4.205 26.52-11.512 52.157-37.053 60.44-25.54 8.283-53.31-3.252-65.469-27.193C-.795 60.766 6.274 31.536 28.03 15.8A54.443 54.443 0 0 1 59.955 5.445zm0-1.675C33.89 3.797 11.262 21.73 5.278 47.097c-5.985 25.369 6.245 51.525 29.548 63.199a56.738 56.738 0 0 0 25.212 5.934 56.225 56.225 0 0 0 50.046-30.665 56.23 56.23 0 0 0-4.525-58.52 56.12 56.12 0 0 0-45.6-23.275h-.004z\" fill=\"url(#b)\" fill-rule=\"nonzero\"/><path d=\"M3.114 79.162c-8.478-25.34.77-53.241 22.7-68.481l3.087 4.482C8.936 29.003.52 54.392 8.258 77.435l-5.144 1.727z\" fill=\"url(#c)\"/><path d=\"M114.234 66.014a54.699 54.699 0 0 0-22.767-50.52 54.618 54.618 0 0 0-55.186-4.671l-2.354-4.914a60.062 60.062 0 0 1 60.685 5.135 60.15 60.15 0 0 1 25.04 55.553l-5.418-.583z\" fill=\"url(#d)\"/><path d=\"M54.825 120c-19.331-1.675-36.686-12.547-46.657-29.23l4.695-2.812c9.065 15.17 24.847 25.056 42.425 26.577L54.825 120z\" fill=\"url(#e)\"/><path d=\"M64.502 119.372l-.418-5.419c22.522-1.69 41.677-17.016 48.194-38.56l5.209 1.554c-7.157 23.697-28.217 40.56-52.985 42.425z\" fill=\"url(#f)\"/><path d=\"M110.563 60.314h-6.674c0-24.397-19.655-44.175-43.902-44.175-24.246 0-43.901 19.778-43.901 44.175H9.424c0-28.106 22.644-50.89 50.576-50.89 27.932 0 50.576 22.784 50.576 50.89h-.013z\" fill=\"url(#g)\"/><path d=\"M59.987 110.576c-27.915-.037-50.533-22.802-50.563-50.89h6.674c0 24.397 19.656 44.175 43.902 44.175 24.246 0 43.902-19.778 43.902-44.175h6.674c-.03 28.098-22.664 50.867-50.589 50.89z\" fill=\"url(#h)\"/><path d=\"M80.417 57.618c2.122 1.493 2.122 3.89 0 5.382L51.572 82.243c-2.122 1.493-3.823.475-3.823-2.238V40.614c0-2.714 1.722-3.709 3.823-2.239l28.845 19.243z\" fill=\"#FFF\"/></g></symbol>\n<symbol id=\"pre\" viewBox=\"0 0 120 120\"><defs><radialGradient fx=\"50%\" fy=\"50%\" gradientTransform=\"matrix(1 0 0 .99419 0 .003)\" id=\"a\"><stop stop-color=\"#AC2D73\" offset=\"0%\"/><stop stop-color=\"#120A82\" offset=\"92%\"/><stop stop-color=\"#07006B\" offset=\"100%\"/></radialGradient><linearGradient x1=\"90.507%\" y1=\"20.696%\" x2=\"9.494%\" y2=\"79.304%\" id=\"b\"><stop stop-color=\"#3B2EE8\" stop-opacity=\".2\" offset=\"0%\"/><stop stop-color=\"#FC429F\" offset=\"25%\"/><stop stop-color=\"#B639E5\" offset=\"87%\"/><stop stop-color=\"#FCFCFC\" offset=\"100%\"/></linearGradient><linearGradient x1=\"126.402%\" y1=\"13.504%\" x2=\"-24.159%\" y2=\"87.272%\" id=\"c\"><stop stop-color=\"#FC429F\" offset=\"0%\"/><stop stop-color=\"#3B2EE8\" offset=\"100%\"/></linearGradient><linearGradient x1=\"67.887%\" y1=\"30.969%\" x2=\"75.469%\" y2=\"21.162%\" id=\"d\"><stop stop-color=\"#FC57A9\" offset=\"0%\"/><stop stop-color=\"#FCFCFC\" offset=\"100%\"/></linearGradient><linearGradient x1=\"61.413%\" y1=\"33.894%\" x2=\"39.42%\" y2=\"71.487%\" id=\"e\"><stop stop-color=\"#B639E5\" offset=\"0%\"/><stop stop-color=\"#3B2EE8\" offset=\"100%\"/></linearGradient><linearGradient x1=\"92.215%\" y1=\"-4.639%\" x2=\"10.454%\" y2=\"110.071%\" id=\"f\"><stop stop-color=\"#FC429F\" offset=\"0%\"/><stop stop-color=\"#B639E5\" offset=\"100%\"/></linearGradient></defs><g fill=\"none\" fill-rule=\"evenodd\"><g><ellipse fill=\"url(#a)\" cx=\"60\" cy=\"60.328\" rx=\"56.066\" ry=\"56.393\"/><path d=\"M59.955 5.615c26.771-.025 49.58 19.55 53.772 46.147 4.193 26.597-11.478 52.308-36.944 60.615-25.466 8.307-53.155-3.26-65.277-27.271-12.123-24.01-5.074-53.324 16.617-69.108A54.071 54.071 0 0 1 59.955 5.615zm0-1.68c-25.987.027-48.55 18.011-54.517 43.453C-.53 72.83 11.665 99.062 34.9 110.769a56.302 56.302 0 0 0 25.138 5.952c21.055-.012 40.327-11.89 49.899-30.754 9.572-18.863 7.83-41.531-4.512-58.69C94.886 12.59 77.965 3.903 59.96 3.935h-.004z\" fill=\"url(#b)\" fill-rule=\"nonzero\"/><path d=\"M3.108 78.689c-8.463-25.236.77-53.02 22.662-68.197l3.082 4.464C8.922 28.739.52 54.02 8.244 76.968l-5.136 1.72z\" fill=\"url(#c)\"/><path d=\"M114.245 65.65c2.128-19.617-6.568-38.844-22.722-50.24C75.37 4.011 54.293 2.233 36.448 10.762l-2.35-4.887c19.623-9.38 42.8-7.425 60.565 5.107 17.764 12.531 27.327 33.674 24.989 55.247l-5.407-.58z\" fill=\"url(#d)\"/><path d=\"M54.625 120c-19.1-1.68-36.248-12.582-46.1-29.31l4.639-2.821c8.957 15.212 24.55 25.126 41.918 26.651l-.457 5.48z\" fill=\"url(#e)\"/><path d=\"M64.678 119.344l-.416-5.413c22.4-1.688 41.452-16.999 47.934-38.521l5.181 1.553c-7.118 23.672-28.064 40.518-52.699 42.381z\" fill=\"url(#f)\"/></g><g transform=\"matrix(-1 0 0 1 83.934 40.656)\" fill=\"#FFF\"><path d=\"M30.013 18.482c1.95 1.385 1.95 3.609 0 4.993l-26.5 17.853C1.563 42.713 0 41.768 0 39.251V2.706C0 .19 1.583-.734 3.513.63l26.5 17.852z\"/><rect fill-rule=\"nonzero\" x=\"36.721\" width=\"6.557\" height=\"41.967\" rx=\"3.279\"/></g></g></symbol>\n</svg>\n</svg>\n\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" hidden><symbol id=\"playing\" viewBox=\"0 0 120 120\"><defs><linearGradient x1=\"90.507%\" y1=\"20.696%\" x2=\"9.494%\" y2=\"79.304%\" id=\"a\"><stop stop-color=\"#3B2EE8\" stop-opacity=\".2\" offset=\"0%\"/><stop stop-color=\"#FC429F\" offset=\"25%\"/><stop stop-color=\"#B639E5\" offset=\"87%\"/><stop stop-color=\"#FCFCFC\" offset=\"100%\"/></linearGradient><linearGradient x1=\"126.402%\" y1=\"13.504%\" x2=\"-24.159%\" y2=\"87.272%\" id=\"b\"><stop stop-color=\"#FC429F\" offset=\"0%\"/><stop stop-color=\"#3B2EE8\" offset=\"100%\"/></linearGradient><linearGradient x1=\"67.887%\" y1=\"30.969%\" x2=\"75.469%\" y2=\"21.162%\" id=\"c\"><stop stop-color=\"#FC57A9\" offset=\"0%\"/><stop stop-color=\"#FCFCFC\" offset=\"100%\"/></linearGradient><linearGradient x1=\"61.413%\" y1=\"33.894%\" x2=\"39.42%\" y2=\"71.487%\" id=\"d\"><stop stop-color=\"#B639E5\" offset=\"0%\"/><stop stop-color=\"#3B2EE8\" offset=\"100%\"/></linearGradient><linearGradient x1=\"92.215%\" y1=\"-4.639%\" x2=\"10.454%\" y2=\"110.071%\" id=\"e\"><stop stop-color=\"#FC429F\" offset=\"0%\"/><stop stop-color=\"#B639E5\" offset=\"100%\"/></linearGradient><linearGradient x1=\"-.012%\" y1=\"49.996%\" x2=\"99.988%\" y2=\"49.996%\" id=\"f\"><stop stop-color=\"#FC429F\" offset=\"0%\"/><stop stop-color=\"#3B2EE8\" stop-opacity=\".2\" offset=\"100%\"/></linearGradient><linearGradient x1=\"99.988%\" y1=\"50.004%\" x2=\"-.012%\" y2=\"50.004%\" id=\"g\"><stop stop-color=\"#FC429F\" offset=\"0%\"/><stop stop-color=\"#3B2EE8\" stop-opacity=\".2\" offset=\"100%\"/></linearGradient></defs><g fill=\"none\" fill-rule=\"evenodd\"><circle fill=\"url(#a)\" cx=\"60\" cy=\"60\" r=\"56.23\"/><path d=\"M59.955 5.445c26.85-.024 49.726 19.493 53.93 46.014 4.205 26.52-11.512 52.157-37.053 60.44-25.54 8.283-53.31-3.252-65.469-27.193C-.795 60.766 6.274 31.536 28.03 15.8A54.443 54.443 0 0 1 59.955 5.445zm0-1.675C33.89 3.797 11.262 21.73 5.278 47.097c-5.985 25.369 6.245 51.525 29.548 63.199a56.738 56.738 0 0 0 25.212 5.934 56.225 56.225 0 0 0 50.046-30.665 56.23 56.23 0 0 0-4.525-58.52 56.12 56.12 0 0 0-45.6-23.275h-.004z\" fill=\"url(#a)\" fill-rule=\"nonzero\"/><path d=\"M3.114 79.162c-8.478-25.34.77-53.241 22.7-68.481l3.087 4.482C8.936 29.003.52 54.392 8.258 77.435l-5.144 1.727z\" fill=\"url(#b)\"/><path d=\"M114.234 66.014a54.699 54.699 0 0 0-22.767-50.52 54.618 54.618 0 0 0-55.186-4.671l-2.354-4.914a60.062 60.062 0 0 1 60.685 5.135 60.15 60.15 0 0 1 25.04 55.553l-5.418-.583z\" fill=\"url(#c)\"/><path d=\"M54.825 120c-19.331-1.675-36.686-12.547-46.657-29.23l4.695-2.812c9.065 15.17 24.847 25.056 42.425 26.577L54.825 120z\" fill=\"url(#d)\"/><path d=\"M64.502 119.372l-.418-5.419c22.522-1.69 41.677-17.016 48.194-38.56l5.209 1.554c-7.157 23.697-28.217 40.56-52.985 42.425z\" fill=\"url(#e)\"/><path d=\"M110.563 60.314h-6.674c0-24.397-19.655-44.175-43.902-44.175-24.246 0-43.901 19.778-43.901 44.175H9.424c0-28.106 22.644-50.89 50.576-50.89 27.932 0 50.576 22.784 50.576 50.89h-.013z\" fill=\"url(#f)\"/><path d=\"M59.987 110.576c-27.915-.037-50.533-22.802-50.563-50.89h6.674c0 24.397 19.656 44.175 43.902 44.175 24.246 0 43.902-19.778 43.902-44.175h6.674c-.03 28.098-22.664 50.867-50.589 50.89z\" fill=\"url(#g)\"/><g transform=\"translate(43 36)\" fill=\"#FFF\" fill-rule=\"nonzero\"><rect width=\"9\" height=\"48\" rx=\"4.5\"/><rect x=\"26\" width=\"9\" height=\"48\" rx=\"4.5\"/></g></g></symbol></svg>\n\n";
},{}],"C:/Users/datou/AppData/Roaming/npm-cache/_npx/11156/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59657" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/datou/AppData/Roaming/npm-cache/_npx/11156/node_modules/parcel/src/builtins/hmr-runtime.js","src/js/icon.js"], null)
//# sourceMappingURL=/icon.1ebf523c.js.map
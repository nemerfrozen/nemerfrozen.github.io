(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nhtml *{\n  -webkit-font-smoothing: antialiased;\n}\n.h6, h6 {\n  font-size: .75rem !important;\n  font-weight: 500;\n  font-family: Roboto,Helvetica,Arial,sans-serif;\n  line-height: 1.5em;\n  text-transform: uppercase;\n}\n.name h6 {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.navbar {\n  border: 0;\n  border-radius: 3px;\n  padding: .625rem 0;\n  margin-bottom: 20px;\n  color: #555;\n  background-color: #fff!important;\n  box-shadow: 0 4px 18px 0 rgba(0,0,0,.12), 0 7px 10px -5px rgba(0,0,0,.15) !important;\n  z-index: 1000 !important;\n  transition: all 150ms ease 0s;\n\n}\n.navbar.navbar-transparent {\n  z-index: 1030;\n  background-color: transparent!important;\n  box-shadow: none !important;\n  padding-top: 25px;\n  color: #fff;\n}\n.navbar .navbar-brand {\n  position: relative;\n  color: inherit;\n  height: 50px;\n  font-size: 1.125rem;\n  line-height: 30px;\n  padding: .625rem 0;\n  font-weight: 300;\n  -webkit-font-smoothing: antialiased;\n}\n.navbar .navbar-nav .nav-item .nav-link:not(.btn) .material-icons {\n  margin-top: -7px;\n  top: 3px;\n  position: relative;\n  margin-right: 3px;\n}\n.navbar .navbar-nav .nav-item .nav-link .material-icons {\n  font-size: 1.25rem;\n  max-width: 24px;\n  margin-top: -1.1em;\n}\n.navbar .navbar-nav .nav-item .nav-link .fa, .navbar .navbar-nav .nav-item .nav-link .material-icons {\n  font-size: 1.25rem;\n  max-width: 24px;\n  margin-top: 0px;\n}\n.navbar .navbar-nav .nav-item .nav-link {\n  position: relative;\n  color: inherit;\n  padding: .9375rem;\n  font-weight: 400;\n  font-size: 12px;\n  border-radius: 3px;\n  line-height: 20px;\n}\na .material-icons {\n  vertical-align: middle;\n}\n.fixed-top {\n  position: fixed;\n  z-index: 1030;\n  left: 0;\n  right: 0;\n}\n.profile-page .page-header {\n  height: 380px;\n  background-position:center;\n}\n.page-header {\n  height: 100vh;\n  background-size: cover;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  display: flex;\n  align-items: center;\n}\n.header-filter:after, .header-filter:before {\n  position: absolute;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  display: block;\n  left: 0;\n  top: 0;\n  content: \"\";\n}\n.header-filter::before {\n  background: rgba(0,0,0,.5);\n}\n.main-raised {\n  margin: -60px 30px 0;\n  border-radius: 6px;\n  box-shadow: 0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12), 0 8px 10px -5px rgba(0,0,0,.2);\n}\n.main {\n  background: #FFF;\n  position: relative;\n  z-index: 3;\n}\n.profile-page .profile {\n  text-align: center;\n}\n.profile-page .profile img {\n  max-width: 160px;\n  width: 100%;\n  margin: 0 auto;\n  transform: translate3d(0,-50%,0);\n}\n.img-raised {\n  box-shadow: 0 5px 15px -8px rgba(0,0,0,.24), 0 8px 10px -5px rgba(0,0,0,.2);\n}\n.rounded-circle {\n  border-radius: 50%!important;\n}\n.img-fluid, .img-thumbnail {\n  max-width: 100%;\n  height: auto;\n}\n.title {\n  margin-top: 30px;\n  margin-bottom: 25px;\n  min-height: 32px;\n  color: #3C4858;\n  font-weight: 700;\n  font-family: \"Roboto Slab\",\"Times New Roman\",serif;\n}\n.profile-page .description {\n  margin: 1.071rem auto 0;\n  max-width: 600px;\n  color: #999;\n  font-weight: 300;\n}\np {\n  font-size: 14px;\n  margin: 0 0 10px;\n}\n.profile-page .profile-tabs {\n  margin-top: 4.284rem;\n}\n.nav-pills, .nav-tabs {\n  border: 0;\n  border-radius: 3px;\n  padding: 0 15px;\n}\n.nav .nav-item {\n  position: relative;\n  margin: 0 2px;\n}\n.nav-pills.nav-pills-icons .nav-item .nav-link {\n  border-radius: 4px;\n}\n.nav-pills .nav-item .nav-link.active {\n  color: #fff;\n  background-color: #9c27b0;\n  box-shadow: 0 5px 20px 0 rgba(0,0,0,.2), 0 13px 24px -11px rgba(156,39,176,.6);\n}\n.nav-pills .nav-item .nav-link {\n  line-height: 24px;\n  font-size: 12px;\n  font-weight: 500;\n  min-width: 100px;\n  color: #555;\n  transition: all .3s;\n  border-radius: 30px;\n  padding: 10px 15px;\n  text-align: center;\n}\n.nav-pills .nav-item .nav-link:not(.active):hover {\n  background-color: rgba(200,200,200,.2);\n}\n.nav-pills .nav-item i {\n  display: block;\n  font-size: 30px;\n  padding: 15px 0;\n}\n.tab-space {\n  padding: 20px 0 50px;\n}\n.profile-page .gallery {\n  margin-top: 3.213rem;\n  padding-bottom: 50px;\n}\n.profile-page .gallery img {\n  width: 100%;\n  margin-bottom: 2.142rem;\n}\n.profile-page .profile .name{\n  margin-top: -80px;\n}\nimg.rounded {\n  border-radius: 6px!important;\n}\n.tab-content>.active {\n  display: block;\n}\n/*buttons*/\n.btn {\n  position: relative;\n  padding: 12px 30px;\n  margin: .3125rem 1px;\n  font-size: .75rem;\n  font-weight: 400;\n  line-height: 1.428571;\n  text-decoration: none;\n  text-transform: uppercase;\n  letter-spacing: 0;\n  border: 0;\n  border-radius: .2rem;\n  outline: 0;\n  transition: box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1);\n  will-change: box-shadow,transform;\n}\n.btn.btn-just-icon {\n  font-size: 20px;\n  height: 41px;\n  min-width: 41px;\n  width: 41px;\n  padding: 0;\n  overflow: hidden;\n  position: relative;\n  line-height: 41px;\n}\n.btn.btn-just-icon fa{\n  margin-top: 0;\n  position: absolute;\n  width: 100%;\n  transform: none;\n  left: 0;\n  top: 0;\n  height: 100%;\n  line-height: 41px;\n  font-size: 20px;\n}\n.btn.btn-link{\n  background-color: transparent;\n  color: #999;\n}\n/* dropdown */\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  float: left;\n  min-width: 11rem !important;\n  margin: .125rem 0 0;\n  font-size: 1rem;\n  color: #212529;\n  text-align: left;\n  background-color: #fff;\n  background-clip: padding-box;\n  border-radius: .25rem;\n  transition: transform .3s cubic-bezier(.4,0,.2,1),opacity .2s cubic-bezier(.4,0,.2,1);\n}\n.dropdown-menu.show{\n  transition: transform .3s cubic-bezier(.4,0,.2,1),opacity .2s cubic-bezier(.4,0,.2,1);\n}\n.dropdown-menu .dropdown-item:focus, .dropdown-menu .dropdown-item:hover, .dropdown-menu a:active, .dropdown-menu a:focus, .dropdown-menu a:hover {\n  box-shadow: 0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(156,39,176,.4);\n  background-color: #9c27b0;\n  color: #FFF;\n}\n.show .dropdown-toggle:after {\n  transform: rotate(180deg);\n}\n.dropdown-toggle:after {\n  will-change: transform;\n  transition: transform .15s linear;\n}\n.dropdown-menu .dropdown-item, .dropdown-menu li>a {\n  position: relative;\n  width: auto;\n  display: flex;\n  flex-flow: nowrap;\n  align-items: center;\n  color: #333;\n  font-weight: 400;\n  text-decoration: none;\n  font-size: .8125rem;\n  border-radius: .125rem;\n  margin: 0 .3125rem;\n  transition: all .15s linear;\n  min-width: 7rem;\n  padding: 0.625rem 1.25rem;\n  min-height: 1rem !important;\n  overflow: hidden;\n  line-height: 1.428571;\n  text-overflow: ellipsis;\n  word-wrap: break-word;\n}\n.dropdown-menu.dropdown-with-icons .dropdown-item {\n  padding: .75rem 1.25rem .75rem .75rem;\n}\n.dropdown-menu.dropdown-with-icons .dropdown-item .material-icons {\n  vertical-align: middle;\n  font-size: 24px;\n  position: relative;\n  margin-top: -4px;\n  top: 1px;\n  margin-right: 12px;\n  opacity: .5;\n}\n/* footer */\nfooter{\n  margin-top: 10px;\n  color: #555;\n  padding: 25px;\n  font-weight: 300;\n\n}\n.footer p{\n  margin-bottom: 0;\n  font-size: 14px;\n  margin: 0 0 10px;\n  font-weight: 300;\n}\nfooter p a{\n  color: #555;\n  font-weight: 400;\n}\nfooter p a:hover {\n  color: #9f26aa;\n  text-decoration: none;\n}\n", "",{"version":3,"sources":["styles.css"],"names":[],"mappings":"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","file":"styles.css","sourcesContent":["/* You can add global styles to this file, and also import other style files */\nhtml *{\n  -webkit-font-smoothing: antialiased;\n}\n\n.h6, h6 {\n  font-size: .75rem !important;\n  font-weight: 500;\n  font-family: Roboto,Helvetica,Arial,sans-serif;\n  line-height: 1.5em;\n  text-transform: uppercase;\n}\n\n.name h6 {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.navbar {\n  border: 0;\n  border-radius: 3px;\n  padding: .625rem 0;\n  margin-bottom: 20px;\n  color: #555;\n  background-color: #fff!important;\n  box-shadow: 0 4px 18px 0 rgba(0,0,0,.12), 0 7px 10px -5px rgba(0,0,0,.15) !important;\n  z-index: 1000 !important;\n  transition: all 150ms ease 0s;\n\n}\n\n.navbar.navbar-transparent {\n  z-index: 1030;\n  background-color: transparent!important;\n  box-shadow: none !important;\n  padding-top: 25px;\n  color: #fff;\n}\n\n.navbar .navbar-brand {\n  position: relative;\n  color: inherit;\n  height: 50px;\n  font-size: 1.125rem;\n  line-height: 30px;\n  padding: .625rem 0;\n  font-weight: 300;\n  -webkit-font-smoothing: antialiased;\n}\n\n.navbar .navbar-nav .nav-item .nav-link:not(.btn) .material-icons {\n  margin-top: -7px;\n  top: 3px;\n  position: relative;\n  margin-right: 3px;\n}\n\n.navbar .navbar-nav .nav-item .nav-link .material-icons {\n  font-size: 1.25rem;\n  max-width: 24px;\n  margin-top: -1.1em;\n}\n\n.navbar .navbar-nav .nav-item .nav-link .fa, .navbar .navbar-nav .nav-item .nav-link .material-icons {\n  font-size: 1.25rem;\n  max-width: 24px;\n  margin-top: 0px;\n}\n\n.navbar .navbar-nav .nav-item .nav-link {\n  position: relative;\n  color: inherit;\n  padding: .9375rem;\n  font-weight: 400;\n  font-size: 12px;\n  border-radius: 3px;\n  line-height: 20px;\n}\n\na .material-icons {\n  vertical-align: middle;\n}\n\n.fixed-top {\n  position: fixed;\n  z-index: 1030;\n  left: 0;\n  right: 0;\n}\n\n.profile-page .page-header {\n  height: 380px;\n  background-position:center;\n}\n\n.page-header {\n  height: 100vh;\n  background-size: cover;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  display: flex;\n  align-items: center;\n}\n\n.header-filter:after, .header-filter:before {\n  position: absolute;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  display: block;\n  left: 0;\n  top: 0;\n  content: \"\";\n}\n\n.header-filter::before {\n  background: rgba(0,0,0,.5);\n}\n\n.main-raised {\n  margin: -60px 30px 0;\n  border-radius: 6px;\n  box-shadow: 0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12), 0 8px 10px -5px rgba(0,0,0,.2);\n}\n\n.main {\n  background: #FFF;\n  position: relative;\n  z-index: 3;\n}\n\n.profile-page .profile {\n  text-align: center;\n}\n\n.profile-page .profile img {\n  max-width: 160px;\n  width: 100%;\n  margin: 0 auto;\n  -webkit-transform: translate3d(0,-50%,0);\n  -moz-transform: translate3d(0,-50%,0);\n  -o-transform: translate3d(0,-50%,0);\n  -ms-transform: translate3d(0,-50%,0);\n  transform: translate3d(0,-50%,0);\n}\n\n.img-raised {\n  box-shadow: 0 5px 15px -8px rgba(0,0,0,.24), 0 8px 10px -5px rgba(0,0,0,.2);\n}\n\n.rounded-circle {\n  border-radius: 50%!important;\n}\n\n.img-fluid, .img-thumbnail {\n  max-width: 100%;\n  height: auto;\n}\n\n.title {\n  margin-top: 30px;\n  margin-bottom: 25px;\n  min-height: 32px;\n  color: #3C4858;\n  font-weight: 700;\n  font-family: \"Roboto Slab\",\"Times New Roman\",serif;\n}\n\n.profile-page .description {\n  margin: 1.071rem auto 0;\n  max-width: 600px;\n  color: #999;\n  font-weight: 300;\n}\n\np {\n  font-size: 14px;\n  margin: 0 0 10px;\n}\n\n.profile-page .profile-tabs {\n  margin-top: 4.284rem;\n}\n\n.nav-pills, .nav-tabs {\n  border: 0;\n  border-radius: 3px;\n  padding: 0 15px;\n}\n\n.nav .nav-item {\n  position: relative;\n  margin: 0 2px;\n}\n\n.nav-pills.nav-pills-icons .nav-item .nav-link {\n  border-radius: 4px;\n}\n\n.nav-pills .nav-item .nav-link.active {\n  color: #fff;\n  background-color: #9c27b0;\n  box-shadow: 0 5px 20px 0 rgba(0,0,0,.2), 0 13px 24px -11px rgba(156,39,176,.6);\n}\n\n.nav-pills .nav-item .nav-link {\n  line-height: 24px;\n  font-size: 12px;\n  font-weight: 500;\n  min-width: 100px;\n  color: #555;\n  transition: all .3s;\n  border-radius: 30px;\n  padding: 10px 15px;\n  text-align: center;\n}\n\n.nav-pills .nav-item .nav-link:not(.active):hover {\n  background-color: rgba(200,200,200,.2);\n}\n\n\n.nav-pills .nav-item i {\n  display: block;\n  font-size: 30px;\n  padding: 15px 0;\n}\n\n.tab-space {\n  padding: 20px 0 50px;\n}\n\n.profile-page .gallery {\n  margin-top: 3.213rem;\n  padding-bottom: 50px;\n}\n\n.profile-page .gallery img {\n  width: 100%;\n  margin-bottom: 2.142rem;\n}\n\n.profile-page .profile .name{\n  margin-top: -80px;\n}\n\nimg.rounded {\n  border-radius: 6px!important;\n}\n\n.tab-content>.active {\n  display: block;\n}\n\n/*buttons*/\n.btn {\n  position: relative;\n  padding: 12px 30px;\n  margin: .3125rem 1px;\n  font-size: .75rem;\n  font-weight: 400;\n  line-height: 1.428571;\n  text-decoration: none;\n  text-transform: uppercase;\n  letter-spacing: 0;\n  border: 0;\n  border-radius: .2rem;\n  outline: 0;\n  transition: box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1);\n  will-change: box-shadow,transform;\n}\n\n.btn.btn-just-icon {\n  font-size: 20px;\n  height: 41px;\n  min-width: 41px;\n  width: 41px;\n  padding: 0;\n  overflow: hidden;\n  position: relative;\n  line-height: 41px;\n}\n\n.btn.btn-just-icon fa{\n  margin-top: 0;\n  position: absolute;\n  width: 100%;\n  transform: none;\n  left: 0;\n  top: 0;\n  height: 100%;\n  line-height: 41px;\n  font-size: 20px;\n}\n.btn.btn-link{\n  background-color: transparent;\n  color: #999;\n}\n\n/* dropdown */\n\n\n\n\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  float: left;\n  min-width: 11rem !important;\n  margin: .125rem 0 0;\n  font-size: 1rem;\n  color: #212529;\n  text-align: left;\n  background-color: #fff;\n  background-clip: padding-box;\n  border-radius: .25rem;\n  transition: transform .3s cubic-bezier(.4,0,.2,1),opacity .2s cubic-bezier(.4,0,.2,1);\n}\n\n.dropdown-menu.show{\n  transition: transform .3s cubic-bezier(.4,0,.2,1),opacity .2s cubic-bezier(.4,0,.2,1);\n}\n\n\n.dropdown-menu .dropdown-item:focus, .dropdown-menu .dropdown-item:hover, .dropdown-menu a:active, .dropdown-menu a:focus, .dropdown-menu a:hover {\n  box-shadow: 0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(156,39,176,.4);\n  background-color: #9c27b0;\n  color: #FFF;\n}\n.show .dropdown-toggle:after {\n  transform: rotate(180deg);\n}\n\n.dropdown-toggle:after {\n  will-change: transform;\n  transition: transform .15s linear;\n}\n\n\n.dropdown-menu .dropdown-item, .dropdown-menu li>a {\n  position: relative;\n  width: auto;\n  display: flex;\n  flex-flow: nowrap;\n  align-items: center;\n  color: #333;\n  font-weight: 400;\n  text-decoration: none;\n  font-size: .8125rem;\n  border-radius: .125rem;\n  margin: 0 .3125rem;\n  transition: all .15s linear;\n  min-width: 7rem;\n  padding: 0.625rem 1.25rem;\n  min-height: 1rem !important;\n  overflow: hidden;\n  line-height: 1.428571;\n  text-overflow: ellipsis;\n  word-wrap: break-word;\n}\n\n.dropdown-menu.dropdown-with-icons .dropdown-item {\n  padding: .75rem 1.25rem .75rem .75rem;\n}\n\n.dropdown-menu.dropdown-with-icons .dropdown-item .material-icons {\n  vertical-align: middle;\n  font-size: 24px;\n  position: relative;\n  margin-top: -4px;\n  top: 1px;\n  margin-right: 12px;\n  opacity: .5;\n}\n\n/* footer */\n\nfooter{\n  margin-top: 10px;\n  color: #555;\n  padding: 25px;\n  font-weight: 300;\n\n}\n.footer p{\n  margin-bottom: 0;\n  font-size: 14px;\n  margin: 0 0 10px;\n  font-weight: 300;\n}\nfooter p a{\n  color: #555;\n  font-weight: 400;\n}\n\nfooter p a:hover {\n  color: #9f26aa;\n  text-decoration: none;\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--13-1!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\githubpages\AngularProfile\src\styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map
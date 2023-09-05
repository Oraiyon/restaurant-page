/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*{\n    margin: 0;\n    padding: 0;\n    font-size: 1.1rem;\n    font-family: 'Roboto Slab', serif;\n    box-sizing: border-box;\n    --primary: rgb(70, 70, 70);\n    --secondary: rgb(219, 24, 24);\n    color: white;\n}\n\n.container{\n    display: flex;\n    flex-direction: column;\n}\n\n.header, .footer{\n    height: 60px;\n    background-color: var(--secondary);\n}\n\n.header{\n    display: flex;\n    justify-content: center;\n    gap: 20px;\n}\n\nbutton{\n    margin-top: 10px;\n    padding: 0px 20px;\n    border-radius: 8px 8px 0 0;\n    background-color: var(--primary);\n    border: none;\n}\n\n.home{\n    background-color: black;\n    color: var(--secondary);\n}\n\n.main{\n    background-color: black;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: fit-content;\n}\n\n.content{  \n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n}\n\n.mediumHome, .mediumMenu, .mediumContact{\n    background-color: var(--primary);\n    width: max(80%, 800px);\n    border-radius: 16px;\n    display: none;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 20px;\n    padding: 100px;\n    margin: 40px 0;\n}\n\n.mediumHome{\n    display: flex;\n    height: 100vh;\n}\n\n.name, .descriptionBox, .hoursBox, .locationBox, .drinks, .drinkBox, .foods, .foodBox, .contactBox{\n    width: max(100%, 750px);\n    background-color: black;\n    padding: 10px;\n    border-radius: 8px;\n    border: 10px solid var(--secondary);\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\nh1{\n    text-align: center;\n    font-size: 2.5rem;\n}\n\nh2{\n    font-size: 1.5rem;\n}\n\n.hoursBox div, .locationBox div{\n    text-align: center;\n    padding-bottom: 10px;\n}\n\nimg{\n    border-radius: 8px;\n}\n\n.mediumHome img{\n    height: 300px;\n    width: 500px;\n}\n\n.drinks, .foods{\n    width: max(50%, 375px);\n}\n\n.mediumMenu img {\n    width: 300px;\n    margin: 0 auto;\n    padding-bottom: 10px;\n}\n\n.mediumMenu .name{\n    margin-top: -39px;\n}\n\n.drinkBox, .foodBox{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: .1fr 1fr;\n}\n\n.drinkBox img, .foodBox img {\n    grid-column: 2;\n    grid-row: 1/3;\n    margin: 10px 0 0 40px;\n}\n\n.contactBox h2, .contactBox p{\n    text-align: center;\n}\n\n.mediumContact{\n    height: 100vh;\n}\n\n.mediumContact .name{\n    margin-top: -25px;\n}\n\n.footer{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mediumContact: () => (/* binding */ mediumContact),\n/* harmony export */   mediumHome: () => (/* binding */ mediumHome),\n/* harmony export */   mediumMenu: () => (/* binding */ mediumMenu)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _tabs_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs/home */ \"./src/tabs/home.js\");\n/* harmony import */ var _tabs_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs/menu */ \"./src/tabs/menu.js\");\n/* harmony import */ var _tabs_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs/contact */ \"./src/tabs/contact.js\");\n\n\n\n\n\nconst header= document.createElement(\"div\");\nheader.classList.add(\"header\");\ncontainer.appendChild(header);\n\nconst homeTab= document.createElement(\"button\");\nhomeTab.classList.add(\"home\");\nhomeTab.innerText= \"Home\";\nheader.appendChild(homeTab);\nconst menuTab= document.createElement(\"button\");\nmenuTab.classList.add(\"menu\");\nmenuTab.innerText= \"Menu\";\nheader.appendChild(menuTab);\nconst contactTab= document.createElement(\"button\");\ncontactTab.classList.add(\"contact\");\ncontactTab.innerText= \"Contact\";\nheader.appendChild(contactTab);\n\nconst main= document.createElement(\"div\");\nmain.classList.add(\"main\");\ncontainer.appendChild(main);\n\nconst content=document.createElement(\"div\");\ncontent.classList.add(\"content\");\nmain.appendChild(content);\n\nconst mediumHome=document.createElement(\"div\");\nmediumHome.classList.add(\"mediumHome\");\ncontent.appendChild(mediumHome);\nconst mediumMenu=document.createElement(\"div\");\nmediumMenu.classList.add(\"mediumMenu\");\ncontent.appendChild(mediumMenu);\nconst mediumContact=document.createElement(\"div\");\nmediumContact.classList.add(\"mediumContact\");\ncontent.appendChild(mediumContact);\n\nconst footer= document.createElement(\"div\");\nfooter.classList.add(\"footer\");\ncontainer.appendChild(footer);\nfooter.innerText= \"For The Odin Project\";\n\n(0,_tabs_home__WEBPACK_IMPORTED_MODULE_1__.displayHome)();\n(0,_tabs_menu__WEBPACK_IMPORTED_MODULE_2__.displayMenu)();\n(0,_tabs_contact__WEBPACK_IMPORTED_MODULE_3__.displayContact)();\n\nhomeTab.addEventListener(\"click\", () => {\n    mediumHome.setAttribute(\"style\", \"display:flex;\");\n    mediumMenu.setAttribute(\"style\", \"display:none;\");\n    mediumContact.setAttribute(\"style\", \"display:none;\");\n    homeTab.setAttribute(\"style\", \"background-color: black; color: var(--secondary);\");\n    menuTab.setAttribute(\"style\", \"background-color: var(--primary); color: white;\");\n    contactTab.setAttribute(\"style\", \"background-color: var(--primary); color: white;\");\n});\n\nmenuTab.addEventListener(\"click\", () => {\n    mediumHome.setAttribute(\"style\", \"display:none;\");\n    mediumMenu.setAttribute(\"style\", \"display:flex;\");\n    mediumContact.setAttribute(\"style\", \"display:none;\");\n    homeTab.setAttribute(\"style\", \"background-color: var(--primary); color: white;\");\n    menuTab.setAttribute(\"style\", \"background-color: black; color: var(--secondary);\");\n    contactTab.setAttribute(\"style\", \"background-color: var(--primary); color: white;\");\n});\n\ncontactTab.addEventListener(\"click\", () => {\n    mediumHome.setAttribute(\"style\", \"display:none;\");\n    mediumMenu.setAttribute(\"style\", \"display:none;\");\n    mediumContact.setAttribute(\"style\", \"display:flex;\");\n    homeTab.setAttribute(\"style\", \"background-color: var(--primary); color: white;\");\n    menuTab.setAttribute(\"style\", \"background-color: var(--primary); color: white;\");\n    contactTab.setAttribute(\"style\", \"background-color: black; color: var(--secondary);\");\n});\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/tabs/contact.js":
/*!*****************************!*\
  !*** ./src/tabs/contact.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayContact: () => (/* binding */ displayContact)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n\n\nconst displayContact = () => {\n    const name= document.createElement(\"h1\");\n    name.classList.add(\"name\");\n    name.innerText= \"Contact Us\";\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.mediumContact.appendChild(name);\n\n    const contactBox1 = document.createElement(\"div\");\n    contactBox1.classList.add(\"contactBox\");\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.mediumContact.appendChild(contactBox1);\n    \n    const contactRes= document.createElement(\"h2\");\n    contactRes.innerText= \"Contact Food Restaurant\";\n    contactBox1.appendChild(contactRes);\n\n    const contactInfo1= document.createElement(\"p\");\n    contactInfo1.innerText= \"Phone Number: 911\" + \"\\n\" + \"Email: FoodRestaurant@FoodRestaurant.gov\"\n    contactBox1.appendChild(contactInfo1);\n\n    const contactBox2 = document.createElement(\"div\");\n    contactBox2.classList.add(\"contactBox\");\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.mediumContact.appendChild(contactBox2);\n\n    const contactOwner= document.createElement(\"h2\");\n    contactOwner.innerText= \"Contact Owner\";\n    contactBox2.appendChild(contactOwner);\n    \n    const contactInfo2= document.createElement(\"p\");\n    contactInfo2.innerText= \"Phone Number: 000-000-0001\" + \"\\n\" + \"Email: FoodRestaurantOwner@FoodRestaurant.gov\"\n    contactBox2.appendChild(contactInfo2);\n\n    const contactBox3 = document.createElement(\"div\");\n    contactBox3.classList.add(\"contactBox\");\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.mediumContact.appendChild(contactBox3);\n\n    const contactChef= document.createElement(\"h2\");\n    contactChef.innerText= \"Contact Chef\";\n    contactBox3.appendChild(contactChef);\n    \n    const contactInfo3= document.createElement(\"p\");\n    contactInfo3.innerText= \"Phone Number: 000-000-0010\" + \"\\n\" + \"Email: FoodRestaurantChef@FoodRestaurant.gov\"\n    contactBox3.appendChild(contactInfo3);\n\n    const contactBox4 = document.createElement(\"div\");\n    contactBox4.classList.add(\"contactBox\");\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.mediumContact.appendChild(contactBox4);\n\n    const contactJanitor= document.createElement(\"h2\");\n    contactJanitor.innerText= \"Contact Janitor\";\n    contactBox4.appendChild(contactJanitor);\n    \n    const contactInfo4= document.createElement(\"p\");\n    contactInfo4.innerText= \"Phone Number: 000-000-0100\" + \"\\n\" + \"Email: FoodRestaurantJanitor@FoodRestaurant.gov\"\n    contactBox4.appendChild(contactInfo4);\n\n    const contactBox5 = document.createElement(\"div\");\n    contactBox5.classList.add(\"contactBox\");\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.mediumContact.appendChild(contactBox5);\n\n    const contactDriver= document.createElement(\"h2\");\n    contactDriver.innerText= \"Contact Driver\";\n    contactBox5.appendChild(contactDriver);\n    \n    const contactInfo5= document.createElement(\"p\");\n    contactInfo5.innerText= \"Phone Number: 000-000-1000\" + \"\\n\" + \"Email: FoodRestaurantDriver@FoodRestaurant.gov\"\n    contactBox5.appendChild(contactInfo5);\n\n    const contactBox6 = document.createElement(\"div\");\n    contactBox6.classList.add(\"contactBox\");\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.mediumContact.appendChild(contactBox6);\n\n    const contactMasseuse= document.createElement(\"h2\");\n    contactMasseuse.innerText= \"Contact Masseuse\";\n    contactBox6.appendChild(contactMasseuse);\n    \n    const contactInfo6= document.createElement(\"p\");\n    contactInfo6.innerText= \"Phone Number: 000-001-0000\" + \"\\n\" + \"Email: FoodRestaurantMasseuse@FoodRestaurant.gov\"\n    contactBox6.appendChild(contactInfo6);\n};\n\n//# sourceURL=webpack://restaurant-page/./src/tabs/contact.js?");

/***/ }),

/***/ "./src/tabs/home.js":
/*!**************************!*\
  !*** ./src/tabs/home.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayHome: () => (/* binding */ displayHome)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n/* harmony import */ var _assets_restaurant_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/restaurant.jpg */ \"./src/assets/restaurant.jpg\");\n\n\n\nconst displayHome= () => {\n    const name= document.createElement(\"h1\");\n    name.classList.add(\"name\");\n    name.innerText= \"Food Restaurant\";\n    _index__WEBPACK_IMPORTED_MODULE_0__.mediumHome.appendChild(name);\n\n    const descriptionBox= document.createElement(\"div\");\n    descriptionBox.classList.add(\"descriptionBox\");\n    _index__WEBPACK_IMPORTED_MODULE_0__.mediumHome.appendChild(descriptionBox);\n    const title1= document.createElement(\"h2\");\n    title1.innerText= \"Description\";\n    descriptionBox.appendChild(title1);\n    const description= document.createElement(\"div\");\n    description.innerText= \"This restaurant serves food! Our food, unlike most restaurants, can be eaten. Food eaten here will result in you eating food in this restaurant! The food in our restaurant will feed you food so you don't have to be hungry until the next time you need to eat food. Our food is made of 100% natural food. WOW!\";\n    descriptionBox.appendChild(description);\n\n    const hoursBox= document.createElement(\"div\");\n    hoursBox.classList.add(\"hoursBox\");\n    _index__WEBPACK_IMPORTED_MODULE_0__.mediumHome.appendChild(hoursBox);\n    const title2= document.createElement(\"h2\");\n    title2.innerText= \"Hours\";\n    hoursBox.appendChild(title2);\n    const hours= document.createElement(\"div\");\n    hours.innerText= \"Sunday: 4am - 5am\" + \"\\n\" + \"Monday: 4am - 5am\" + \"\\n\" + \"Tuesday: 4am - 5am\" + \"\\n\" + \"Wednesday: 4am - 5am\" + \"\\n\" + \"Thursday: 4am - 5am\" + \"\\n\" + \"Friday: 4am - 5am\" + \"\\n\" + \"Saturday: 4am - 5am\";\n    hoursBox.appendChild(hours);\n\n    const locationBox= document.createElement(\"div\");\n    locationBox.classList.add(\"locationBox\");\n    _index__WEBPACK_IMPORTED_MODULE_0__.mediumHome.appendChild(locationBox);\n    const title3= document.createElement(\"h2\");\n    title3.innerText=\"Location\";\n    locationBox.appendChild(title3);\n    const location= document.createElement(\"div\");\n    location.innerText= \"123 Unknown Street, Knowhere, Mars\";\n    locationBox.appendChild(location);\n\n    const restaurantImg= document.createElement(\"img\");\n    restaurantImg.src= _assets_restaurant_jpg__WEBPACK_IMPORTED_MODULE_1__;\n    _index__WEBPACK_IMPORTED_MODULE_0__.mediumHome.appendChild(restaurantImg);\n};\n\n//# sourceURL=webpack://restaurant-page/./src/tabs/home.js?");

/***/ }),

/***/ "./src/tabs/menu.js":
/*!**************************!*\
  !*** ./src/tabs/menu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayMenu: () => (/* binding */ displayMenu)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n/* harmony import */ var _assets_water_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/water.jpg */ \"./src/assets/water.jpg\");\n/* harmony import */ var _assets_pizza_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/pizza.jpg */ \"./src/assets/pizza.jpg\");\n\n\n\n\nconst displayMenu = () => {\n    const name= document.createElement(\"h1\");\n    name.classList.add(\"name\");\n    name.innerText= \"Menu\";\n    _index__WEBPACK_IMPORTED_MODULE_0__.mediumMenu.appendChild(name);\n\n    const drinks= document.createElement(\"h1\");\n    drinks.classList.add(\"drinks\");\n    drinks.innerText= \"Drinks\";\n    _index__WEBPACK_IMPORTED_MODULE_0__.mediumMenu.appendChild(drinks);\n\n    const drink1 = document.createElement(\"div\");\n    drink1.classList.add(\"drinkBox\");\n    _index__WEBPACK_IMPORTED_MODULE_0__.mediumMenu.appendChild(drink1);\n    const water= document.createElement(\"h2\");\n    water.innerText= \"Water: $50\";\n    drink1.appendChild(water);\n    const waterDescription= document.createElement(\"p\");\n    waterDescription.innerText= \"100% safe to drink water! Taken directly from the lost city of Atlantis, this cool and refreshing glass of water is proven to be safe to drink!\";\n    drink1.appendChild(waterDescription);\n    const waterImg= document.createElement(\"img\");\n    waterImg.src=_assets_water_jpg__WEBPACK_IMPORTED_MODULE_1__;\n    drink1.appendChild(waterImg);\n\n    const food= document.createElement(\"h1\");\n    food.classList.add(\"foods\");\n    food.innerText= \"Food\";\n    _index__WEBPACK_IMPORTED_MODULE_0__.mediumMenu.appendChild(food);\n    const food1= document.createElement(\"div\");\n    food1.classList.add(\"foodBox\");\n    _index__WEBPACK_IMPORTED_MODULE_0__.mediumMenu.appendChild(food1);\n    const grub= document.createElement(\"h2\");\n    grub.innerText= \"Good Food: $5\";\n    food1.appendChild(grub);\n    const grubDescription = document.createElement(\"p\");\n    grubDescription.innerText= \"Our best-selling dish! Good Food in this restaurant is good food! Made from the finest ingredients Good Food is sure to delight. Cooked to perfection, this dish will be the LAST dish you need!\";\n    food1.appendChild(grubDescription);\n    const pizzaImg= document.createElement(\"img\");\n    pizzaImg.src= _assets_pizza_jpg__WEBPACK_IMPORTED_MODULE_2__;\n    food1.appendChild(pizzaImg);\n};\n\n//# sourceURL=webpack://restaurant-page/./src/tabs/menu.js?");

/***/ }),

/***/ "./src/assets/pizza.jpg":
/*!******************************!*\
  !*** ./src/assets/pizza.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"pizza.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/pizza.jpg?");

/***/ }),

/***/ "./src/assets/restaurant.jpg":
/*!***********************************!*\
  !*** ./src/assets/restaurant.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"restaurant.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/restaurant.jpg?");

/***/ }),

/***/ "./src/assets/water.jpg":
/*!******************************!*\
  !*** ./src/assets/water.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"water.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/water.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/post/[slug]";
exports.ids = ["pages/post/[slug]"];
exports.modules = {

/***/ "./client.js":
/*!*******************!*\
  !*** ./client.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n// client.js\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({\n    projectId: \"yfsq9q8w\",\n    dataset: \"production\",\n    useCdn: true\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsRUFBWTtBQUM2QjtBQUV6QyxpRUFBZUEscURBQVksQ0FBQyxDQUFDO0lBQzNCQyxTQUFTLEVBQUUsQ0FBVTtJQUNyQkMsT0FBTyxFQUFFLENBQVk7SUFDckJDLE1BQU0sRUFBRSxJQUFJO0FBQ2QsQ0FBQyxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9jbGllbnQuanM/OTcxNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjbGllbnQuanNcbmltcG9ydCBzYW5pdHlDbGllbnQgZnJvbSBcIkBzYW5pdHkvY2xpZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IHNhbml0eUNsaWVudCh7XG4gIHByb2plY3RJZDogXCJ5ZnNxOXE4d1wiLCAvLyB5b3UgY2FuIGZpbmQgdGhpcyBpbiBzYW5pdHkuanNvblxuICBkYXRhc2V0OiBcInByb2R1Y3Rpb25cIiwgLy8gb3IgdGhlIG5hbWUgeW91IGNob3NlIGluIHN0ZXAgMVxuICB1c2VDZG46IHRydWUsIC8vIGBmYWxzZWAgaWYgeW91IHdhbnQgdG8gZW5zdXJlIGZyZXNoIGRhdGFcbn0pO1xuIl0sIm5hbWVzIjpbInNhbml0eUNsaWVudCIsInByb2plY3RJZCIsImRhdGFzZXQiLCJ1c2VDZG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client.js\n");

/***/ }),

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! groq */ \"groq\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../client */ \"./client.js\");\n\n// [slug].js\n\n\nconst Post = (props)=>{\n    const { title =\"Missing title\" , name =\"Missing name\" , categories  } = props;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"article\", {\n        __source: {\n            fileName: \"/Users/aubreykazdan/projects/blog-two/web/pages/post/[slug].js\",\n            lineNumber: 9,\n            columnNumber: 5\n        },\n        __self: undefined,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"/Users/aubreykazdan/projects/blog-two/web/pages/post/[slug].js\",\n                    lineNumber: 10,\n                    columnNumber: 7\n                },\n                __self: undefined,\n                children: title\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", {\n                __source: {\n                    fileName: \"/Users/aubreykazdan/projects/blog-two/web/pages/post/[slug].js\",\n                    lineNumber: 11,\n                    columnNumber: 7\n                },\n                __self: undefined,\n                children: [\n                    \"By \",\n                    name\n                ]\n            }),\n            categories && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"ul\", {\n                __source: {\n                    fileName: \"/Users/aubreykazdan/projects/blog-two/web/pages/post/[slug].js\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                },\n                __self: undefined,\n                children: [\n                    \"Posted in\",\n                    categories.map((category)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                            __source: {\n                                fileName: \"/Users/aubreykazdan/projects/blog-two/web/pages/post/[slug].js\",\n                                lineNumber: 16,\n                                columnNumber: 13\n                            },\n                            __self: undefined,\n                            children: category\n                        }, category)\n                    )\n                ]\n            })\n        ]\n    }));\n};\nconst query = (groq__WEBPACK_IMPORTED_MODULE_1___default())`*[_type == \"post\" && slug.current == $slug][0]{\n  title,\n  \"name\": author->name,\n  \"categories\": categories[]->title\n}`;\nPost.getInitialProps = async function(context) {\n    // It's important to default the slug so that it doesn't return \"undefined\"\n    const { slug =\"\"  } = context.query;\n    return await _client__WEBPACK_IMPORTED_MODULE_2__[\"default\"].fetch(query, {\n        slug\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0L1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsRUFBWTtBQUVXO0FBQ1U7QUFFakMsS0FBSyxDQUFDRSxJQUFJLElBQUlDLEtBQUssR0FBSyxDQUFDO0lBQ3ZCLEtBQUssQ0FBQyxDQUFDLENBQUNDLEtBQUssRUFBRyxDQUFlLGlCQUFFQyxJQUFJLEVBQUcsQ0FBYyxnQkFBRUMsVUFBVSxFQUFDLENBQUMsR0FBR0gsS0FBSztJQUM1RSxNQUFNLHVFQUNISSxDQUFPOzs7Ozs7OztpRkFDTEMsQ0FBRTs7Ozs7OzswQkFBRUosS0FBSzs7a0ZBQ1RLLENBQUk7Ozs7Ozs7O29CQUFDLENBQUc7b0JBQUNKLElBQUk7OztZQUNiQyxVQUFVLDBFQUNSSSxDQUFFOzs7Ozs7OztvQkFBQyxDQUVGO29CQUFDSixVQUFVLENBQUNLLEdBQUcsRUFBRUMsUUFBUSx3RUFDdEJDLENBQUU7Ozs7Ozs7c0NBQWlCRCxRQUFROzJCQUFuQkEsUUFBUTs7Ozs7O0FBTTdCLENBQUM7QUFFRCxLQUFLLENBQUNFLEtBQUssR0FBR2QsNkNBQUksQ0FBQztBQU1uQkUsSUFBSSxDQUFDYTtJQUNILEVBQTJFO0lBQzNFLEtBQUssQ0FBQyxDQUFDLENBQUNFLElBQUksRUFBRyxDQUFFLEdBQUMsQ0FBQyxHQUFHRCxPQUFPLENBQUNGOztRQUNLRyxJQUFJO0lBQUMsQ0FBQztBQUMzQyxDQUFDO0FBRUQsTUFBTSxTQUFTZixFQUFBQSxxREFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi8uL3BhZ2VzL3Bvc3QvW3NsdWddLmpzPzM0NWUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gW3NsdWddLmpzXG5cbmltcG9ydCBncm9xIGZyb20gXCJncm9xXCI7XG5pbXBvcnQgY2xpZW50IGZyb20gXCIuLi8uLi9jbGllbnRcIjtcblxuY29uc3QgUG9zdCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHRpdGxlID0gXCJNaXNzaW5nIHRpdGxlXCIsIG5hbWUgPSBcIk1pc3NpbmcgbmFtZVwiLCBjYXRlZ29yaWVzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8YXJ0aWNsZT5cbiAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgIDxzcGFuPkJ5IHtuYW1lfTwvc3Bhbj5cbiAgICAgIHtjYXRlZ29yaWVzICYmIChcbiAgICAgICAgPHVsPlxuICAgICAgICAgIFBvc3RlZCBpblxuICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2NhdGVnb3J5fT57Y2F0ZWdvcnl9PC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgICl9XG4gICAgPC9hcnRpY2xlPlxuICApO1xufTtcblxuY29uc3QgcXVlcnkgPSBncm9xYCpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgc2x1Zy5jdXJyZW50ID09ICRzbHVnXVswXXtcbiAgdGl0bGUsXG4gIFwibmFtZVwiOiBhdXRob3ItPm5hbWUsXG4gIFwiY2F0ZWdvcmllc1wiOiBjYXRlZ29yaWVzW10tPnRpdGxlXG59YDtcblxuUG9zdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoY29udGV4dCkge1xuICAvLyBJdCdzIGltcG9ydGFudCB0byBkZWZhdWx0IHRoZSBzbHVnIHNvIHRoYXQgaXQgZG9lc24ndCByZXR1cm4gXCJ1bmRlZmluZWRcIlxuICBjb25zdCB7IHNsdWcgPSBcIlwiIH0gPSBjb250ZXh0LnF1ZXJ5O1xuICByZXR1cm4gYXdhaXQgY2xpZW50LmZldGNoKHF1ZXJ5LCB7IHNsdWcgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuIl0sIm5hbWVzIjpbImdyb3EiLCJjbGllbnQiLCJQb3N0IiwicHJvcHMiLCJ0aXRsZSIsIm5hbWUiLCJjYXRlZ29yaWVzIiwiYXJ0aWNsZSIsImgxIiwic3BhbiIsInVsIiwibWFwIiwiY2F0ZWdvcnkiLCJsaSIsInF1ZXJ5IiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsInNsdWciLCJmZXRjaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n");

/***/ }),

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ "groq":
/*!***********************!*\
  !*** external "groq" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("groq");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/post/[slug].js"));
module.exports = __webpack_exports__;

})();
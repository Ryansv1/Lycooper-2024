"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@chakra-ui+react-use-callback-ref@2.1.0_react@18.2.0";
exports.ids = ["vendor-chunks/@chakra-ui+react-use-callback-ref@2.1.0_react@18.2.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@chakra-ui+react-use-callback-ref@2.1.0_react@18.2.0/node_modules/@chakra-ui/react-use-callback-ref/dist/index.mjs":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@chakra-ui+react-use-callback-ref@2.1.0_react@18.2.0/node_modules/@chakra-ui/react-use-callback-ref/dist/index.mjs ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useCallbackRef: () => (/* binding */ useCallbackRef)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@14.0.4_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* __next_internal_client_entry_do_not_use__ useCallbackRef auto */ // src/index.ts\n\nfunction useCallbackRef(callback, deps = []) {\n    const callbackRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(callback);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        callbackRef.current = callback;\n    });\n    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((...args)=>{\n        var _a;\n        return (_a = callbackRef.current) == null ? void 0 : _a.call(callbackRef, ...args);\n    }, deps);\n}\n //# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQGNoYWtyYS11aStyZWFjdC11c2UtY2FsbGJhY2stcmVmQDIuMS4wX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQGNoYWtyYS11aS9yZWFjdC11c2UtY2FsbGJhY2stcmVmL2Rpc3QvaW5kZXgubWpzIiwibWFwcGluZ3MiOiI7Ozs7O29FQUVBLGVBQWU7QUFDd0M7QUFDdkQsU0FBU0csZUFBZUMsUUFBUSxFQUFFQyxPQUFPLEVBQUU7SUFDekMsTUFBTUMsY0FBY0osNkNBQU1BLENBQUNFO0lBQzNCSCxnREFBU0EsQ0FBQztRQUNSSyxZQUFZQyxPQUFPLEdBQUdIO0lBQ3hCO0lBQ0EsT0FBT0osa0RBQVdBLENBQUMsQ0FBQyxHQUFHUTtRQUNyQixJQUFJQztRQUNKLE9BQU8sQ0FBQ0EsS0FBS0gsWUFBWUMsT0FBTyxLQUFLLE9BQU8sS0FBSyxJQUFJRSxHQUFHQyxJQUFJLENBQUNKLGdCQUFnQkU7SUFDL0UsR0FBR0g7QUFDTDtBQUdFLENBQ0Ysa0NBQWtDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbHljb29wZXItbmV4dC8uL25vZGVfbW9kdWxlcy8ucG5wbS9AY2hha3JhLXVpK3JlYWN0LXVzZS1jYWxsYmFjay1yZWZAMi4xLjBfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AY2hha3JhLXVpL3JlYWN0LXVzZS1jYWxsYmFjay1yZWYvZGlzdC9pbmRleC5tanM/YWMwMSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuLy8gc3JjL2luZGV4LnRzXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmZ1bmN0aW9uIHVzZUNhbGxiYWNrUmVmKGNhbGxiYWNrLCBkZXBzID0gW10pIHtcbiAgY29uc3QgY2FsbGJhY2tSZWYgPSB1c2VSZWYoY2FsbGJhY2spO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNhbGxiYWNrUmVmLmN1cnJlbnQgPSBjYWxsYmFjaztcbiAgfSk7XG4gIHJldHVybiB1c2VDYWxsYmFjaygoLi4uYXJncykgPT4ge1xuICAgIHZhciBfYTtcbiAgICByZXR1cm4gKF9hID0gY2FsbGJhY2tSZWYuY3VycmVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmNhbGwoY2FsbGJhY2tSZWYsIC4uLmFyZ3MpO1xuICB9LCBkZXBzKTtcbn1cbmV4cG9ydCB7XG4gIHVzZUNhbGxiYWNrUmVmXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcCJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZUNhbGxiYWNrUmVmIiwiY2FsbGJhY2siLCJkZXBzIiwiY2FsbGJhY2tSZWYiLCJjdXJyZW50IiwiYXJncyIsIl9hIiwiY2FsbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@chakra-ui+react-use-callback-ref@2.1.0_react@18.2.0/node_modules/@chakra-ui/react-use-callback-ref/dist/index.mjs\n");

/***/ })

};
;
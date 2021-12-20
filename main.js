/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/aboutUs.js":
/*!************************!*\
  !*** ./src/aboutUs.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "about": () => (/* binding */ about)
/* harmony export */ });
function about(){
    const footer = document.createElement('div');
    footer.innerHTML="<h1> ABOUT US </h1>"
    
    const list  = document.createElement('ul');
    const phone = document.createElement('li');
    const email = document.createElement('li');
    const review = document.createElement('li');

    phone.textContent = "Phone# 123-132-1234";
    email.textContent = "Email: asdf@asdf.com";
    review.textContent = "leave a review";
    list.appendChild(phone)
    list.appendChild(email);
    list.appendChild(review);

    footer.appendChild(list);

    return footer;

}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "home": () => (/* binding */ home)
/* harmony export */ });
function home(){
    const container = document.createElement('div');
    container.innerHTML = "<h1> WELCOME TO GREEN OLIVE </h1>"
    return container
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
function menu(){
    
    const container = document.createElement('div');
    const app = document.createElement('div');
    const bev = document.createElement('div');
    const meals = document.createElement('div');
    container.innerHTML = "<h1> MENU</h1>"

    app.textContent = "peanuts \n cucumber \n white bread with butter \n"



    container.appendChild(app);

    return container;

}

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _aboutUs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aboutUs */ "./src/aboutUs.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ "./src/home.js");




(() =>{
    const mother = document.getElementById('content')
    const container = document.createElement('div');
    
        const header = document.createElement('div');
        const title = document.createElement('div');
        const tabs = document.createElement('div');
        
        const home_button = document.createElement('button');
        const menu_button = document.createElement('button');
        const about_button = document.createElement('button');
        
        //add event listeners to button
        home_button.addEventListener('click',() =>{
            clearBoard();
            container.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_2__.home)())
        })
        menu_button.addEventListener('click',() =>{
            clearBoard(); 
            container.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_0__.menu)());
        })
        about_button.addEventListener('click',() =>{
            clearBoard();
            container.appendChild((0,_aboutUs__WEBPACK_IMPORTED_MODULE_1__.about)());
        })
        
        title.textContent = "Green Olive";
        home_button.textContent = "home";
        menu_button.textContent = "menu";
        about_button.textContent = "about us";
        
        tabs.appendChild(home_button)
        tabs.appendChild(menu_button)
        tabs.appendChild(about_button)
        
        header.appendChild(title);
        header.appendChild(tabs);
        
        mother.appendChild(header)
        mother.appendChild(container);

        function clearBoard(){
            container.innerHTML = "";
        }
        window.onload = () =>{
            container.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_2__.home)());
        }
        

})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEJPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7Ozs7O1VDaEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ044QjtBQUNBO0FBQ0c7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyw4Q0FBSTtBQUN0QyxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGtDQUFrQyw4Q0FBSTtBQUN0QyxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGtDQUFrQywrQ0FBSztBQUN2QyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDhDQUFJO0FBQ3RDO0FBQ0E7O0FBRUEsQ0FBQyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2Fib3V0VXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFib3V0KCl7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vdGVyLmlubmVySFRNTD1cIjxoMT4gQUJPVVQgVVMgPC9oMT5cIlxuICAgIFxuICAgIGNvbnN0IGxpc3QgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IHJldmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICBwaG9uZS50ZXh0Q29udGVudCA9IFwiUGhvbmUjIDEyMy0xMzItMTIzNFwiO1xuICAgIGVtYWlsLnRleHRDb250ZW50ID0gXCJFbWFpbDogYXNkZkBhc2RmLmNvbVwiO1xuICAgIHJldmlldy50ZXh0Q29udGVudCA9IFwibGVhdmUgYSByZXZpZXdcIjtcbiAgICBsaXN0LmFwcGVuZENoaWxkKHBob25lKVxuICAgIGxpc3QuYXBwZW5kQ2hpbGQoZW1haWwpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQocmV2aWV3KTtcblxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChsaXN0KTtcblxuICAgIHJldHVybiBmb290ZXI7XG5cbn1cblxuZXhwb3J0IHthYm91dH07IiwiZXhwb3J0IGZ1bmN0aW9uIGhvbWUoKXtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCI8aDE+IFdFTENPTUUgVE8gR1JFRU4gT0xJVkUgPC9oMT5cIlxuICAgIHJldHVybiBjb250YWluZXJcbn0iLCJleHBvcnQgZnVuY3Rpb24gbWVudSgpe1xuICAgIFxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGFwcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJldiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1lYWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiPGgxPiBNRU5VPC9oMT5cIlxuXG4gICAgYXBwLnRleHRDb250ZW50ID0gXCJwZWFudXRzIFxcbiBjdWN1bWJlciBcXG4gd2hpdGUgYnJlYWQgd2l0aCBidXR0ZXIgXFxuXCJcblxuXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYXBwKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG5cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7bWVudX0gZnJvbSAnLi9tZW51LmpzJ1xuaW1wb3J0e2Fib3V0fSBmcm9tICcuL2Fib3V0VXMnXG5pbXBvcnQgeyBob21lIH0gZnJvbSAnLi9ob21lLmpzJztcblxuKCgpID0+e1xuICAgIGNvbnN0IG1vdGhlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGhvbWVfYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IG1lbnVfYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGFib3V0X2J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBcbiAgICAgICAgLy9hZGQgZXZlbnQgbGlzdGVuZXJzIHRvIGJ1dHRvblxuICAgICAgICBob21lX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT57XG4gICAgICAgICAgICBjbGVhckJvYXJkKCk7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZSgpKVxuICAgICAgICB9KVxuICAgICAgICBtZW51X2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT57XG4gICAgICAgICAgICBjbGVhckJvYXJkKCk7IFxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnUoKSk7XG4gICAgICAgIH0pXG4gICAgICAgIGFib3V0X2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT57XG4gICAgICAgICAgICBjbGVhckJvYXJkKCk7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXQoKSk7XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiR3JlZW4gT2xpdmVcIjtcbiAgICAgICAgaG9tZV9idXR0b24udGV4dENvbnRlbnQgPSBcImhvbWVcIjtcbiAgICAgICAgbWVudV9idXR0b24udGV4dENvbnRlbnQgPSBcIm1lbnVcIjtcbiAgICAgICAgYWJvdXRfYnV0dG9uLnRleHRDb250ZW50ID0gXCJhYm91dCB1c1wiO1xuICAgICAgICBcbiAgICAgICAgdGFicy5hcHBlbmRDaGlsZChob21lX2J1dHRvbilcbiAgICAgICAgdGFicy5hcHBlbmRDaGlsZChtZW51X2J1dHRvbilcbiAgICAgICAgdGFicy5hcHBlbmRDaGlsZChhYm91dF9idXR0b24pXG4gICAgICAgIFxuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGFicyk7XG4gICAgICAgIFxuICAgICAgICBtb3RoZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuICAgICAgICBtb3RoZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgICAgICBmdW5jdGlvbiBjbGVhckJvYXJkKCl7XG4gICAgICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cub25sb2FkID0gKCkgPT57XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZSgpKTtcbiAgICAgICAgfVxuICAgICAgICBcblxufSkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
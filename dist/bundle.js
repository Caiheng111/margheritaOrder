/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/helpers/clearNode.js":
/*!**********************************!*\
  !*** ./src/helpers/clearNode.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return clearNode; });\n\n\n\n    function clearNode(node){\n      while (node.firstChild){\n        node.removeChild(node.firstChild);\n      }\n\n    }\n\n//# sourceURL=webpack:///./src/helpers/clearNode.js?");

/***/ }),

/***/ "./src/helpers/getTotal.js":
/*!*********************************!*\
  !*** ./src/helpers/getTotal.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getTotal; });\n\n\n\nfunction getTotal(state){\n    const {selectedToppings,selectedSize}=state;\n    let total=selectedSize ?+ selectedSize.price:0; \n    //选中pizza size换价格\n\n    selectedToppings.forEach(({price,amount}) => {\n        const selectedToppingTotal=price*amount;\n        total=total+selectedToppingTotal;\n    });\n    return total;\n}\n\n//# sourceURL=webpack:///./src/helpers/getTotal.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n\n\n\nfunction main(){\n    const toppings= [{\n        name:'Anchovy',\n        price:'0.69',\n        image:'./image/anchovy.svg',\n      },{\n         name:'Bacon',\n         price:'0.69',\n         image:'./image/bacon.svg',\n       },{\n         name:'Basil',\n         price:'0.69',\n         image:'./image/basil.svg',\n       },{ \n          name:'Chili',\n          price:'0.69',\n          image:'./image/chili.svg',\n       },{\n         name:'Mozzarella',\n         price:'0.69',\n         image:'./image/mozzarella.svg',\n       },{\n         name:'Mushroom',\n         price:'0.69',\n         image:'./image/mushroom.svg',\n       },{\n         name:'Olive',\n         price:'0.69',\n         image:'./image/olive.svg',\n       },{\n         name:'Onion',\n         price:'0.69',\n         image:'./image/onion.svg',\n       },{\n         name:'Pepper',\n         price:'0.69',\n         image:'./image/pepper.svg',\n       },{\n         name:'Peperion',\n         price:'0.69',\n         image:'./image/pepperoni.svg',\n       },{\n         name:'Sweetcorn',\n         price:'0.69',\n         image:'./image/sweetcorn.svg',\n       },{\n         name:'Tomato',\n         price:'0.69',\n         image:'./image/tomato.svg',\n       }];\n\n\n       const sizes=[{\n         name:'small',\n         inches:'9',\n         price:'8.99',\n         image:'./image/size-S.png'\n       },{\n         name:'medium',\n         inches:'11',\n         price:'10.99',\n         image:'./image/size-M.png'\n       },{\n         name:'large',\n         inches:'13',\n         price:'12.99',\n         image:'./image/size-L.png'\n       }];\n\n\n\n       const inputs=[{\n         label: 'Name',\n         value: 'John Smith'\n       }, {\n         label: 'Email',\n         value: 'Entail your Emial'\n       }, {\n         label: 'Confirm Email',\n         value: 'Confirm your email'\n       }, {\n         label: 'Address',\n         value: '44 Pizza Street'\n       }, {\n         label: 'Post Code',\n         value: '3053 VIC'\n       }, {\n         label: 'Contact Number',\n         value: '0435678633'\n       }];\n\n\n\n       const selectedToppings = [];\n       const state={\n          toppings,\n          selectedToppings,\n          sizes,\n          selectedSize:null,\n          isDisplayConfirmationModal:false,\n          inputs\n\n \n\n       };\n       window.state=state;\n\n\n      Object(_render__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state);\n\n\n\n       document.querySelector('button[type=\"submit\"]').onclick = () => {\n         state.isDisplayConfirmationModal = true;\n         Object(_render__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state);\n       }\n\n}\n\n  document.addEventListener('DOMContentLoaded',main);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return render; });\n/* harmony import */ var _renders_renderToppings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renders/renderToppings */ \"./src/renders/renderToppings.js\");\n/* harmony import */ var _renders_renderSummary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renders/renderSummary */ \"./src/renders/renderSummary.js\");\n/* harmony import */ var _renders_renderSizes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renders/renderSizes */ \"./src/renders/renderSizes.js\");\n/* harmony import */ var _renders_renderConfirmationModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renders/renderConfirmationModel */ \"./src/renders/renderConfirmationModel.js\");\n/* harmony import */ var _renders_renderTotal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renders/renderTotal */ \"./src/renders/renderTotal.js\");\n/* harmony import */ var _renders_renderDetailsForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./renders/renderDetailsForm */ \"./src/renders/renderDetailsForm.js\");\n/* harmony import */ var _helpers_clearNode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/clearNode */ \"./src/helpers/clearNode.js\");\n\n\n\n\n\n\n\n\n\n\n\nfunction render(state){\n   \n\n\n    const rootElement=document.querySelector('#app');\n    Object(_helpers_clearNode__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(rootElement);\n\n    const detailContainer=document.createElement('div');\n    detailContainer.classList.add('order-details');\n   \n\n    const pizzaViewer=document.createElement('div');\n    pizzaViewer.classList.add('pizza-viewer');\n\n    const tableSide=document.createElement('div');\n    tableSide.classList.add('table-side');\n\n    const table=document.createElement('div');\n    table.classList.add('table');\n    pizzaViewer.append(tableSide,table);\n    rootElement.append(detailContainer);\n  \n\n    \n\n\n    const pizzaForm=document.createElement('div');\n    pizzaForm.classList.add('pizza-form');\n  \n    const detailsContainer=document.createElement('div');\n    detailsContainer.classList.add('section');\n\n    const detailsH2=document.createElement('h2');\n    detailsH2.innerText='Enter Your Details';\n\n    const detailsRoot=document.createElement('div');\n    detailsRoot.classList.add('details');\n    detailsContainer.append(detailsH2,detailsRoot);\n   \n\n\n    const pizzaChooseContainer=document.createElement('div');\n    pizzaChooseContainer.classList.add('section');\n    pizzaForm.append(detailsContainer,pizzaChooseContainer);\n  \n\n    const pizzaH2=document.createElement('h2');\n    pizzaH2.innerText='Choose Your Pizzas';\n\n    const pizzacCreator=document.createElement('div');\n    pizzacCreator.classList.add('pizza-creator');\n    pizzaChooseContainer.append(pizzaH2,pizzacCreator)\n  \n\n    const pizzaHeader=document.createElement('div');\n    pizzaHeader.classList.add('pizza-header');\n    const title=document.createElement('span');\n    title.innerText='Pizza 1 *';\n\n    pizzaHeader.append(title);\n\n\n\n\n\n\n    const creatorDetails=document.createElement('div');\n    creatorDetails.classList.add('creator-details');\n\n    const DetailsH3=document.createElement('h3');\n    DetailsH3.innerText='Select the size *';\n\n    const sizeContainer=document.createElement('div');\n    sizeContainer.classList.add('container');\n\n    const sizes=document.createElement('div');\n    sizes.classList.add('sizes');\n    sizeContainer.append(sizes);\n\n    const toppingsH3=document.createElement('h3');\n    toppingsH3.innerText='Pick your toppings';\n\n    const toppingsRoot=document.createElement('div');\n    toppingsRoot.classList.add('toppings');\n\n    creatorDetails.append(DetailsH3,sizeContainer,toppingsH3,toppingsRoot);\n\n\n\n    const pizzaSummary=document.createElement('div');\n    pizzaSummary.classList.add('toppinpizza-sumarygs');\n\n    const summaryH2=document.createElement('h2');\n    summaryH2.innerText='Order Summary';\n\n    const SummaryUl=document.createElement('ul');\n    SummaryUl.classList.add('summary');\n    const hr=document.createElement('hr');\n    const br=document.createElement('br');\n   \n    const totalRoot=document.createElement('div');\n    totalRoot.classList.add('total');\n\n    pizzaSummary.append(summaryH2,SummaryUl,hr,br,totalRoot);\n\n\n\n\n    const SummaryBtn=document.createElement('div');\n    SummaryBtn.classList.add('sumary-button');\n\n    const button=document.createElement('button');\n    button.innerText='Place order';\n    button.type='submit';\n    SummaryBtn.append(button);\n    detailContainer.append(pizzaViewer,pizzaForm);\n    pizzacCreator.append(pizzaHeader,creatorDetails,pizzaSummary,SummaryBtn);\n\n\n    Object(_renders_renderToppings__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state);\n    Object(_renders_renderSummary__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(state);\n    Object(_renders_renderSizes__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(state);\n    Object(_renders_renderConfirmationModel__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(state);\n    Object(_renders_renderTotal__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(state);\n    Object(_renders_renderDetailsForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(state);\n\n\n\n    \n  }\n\n\n//# sourceURL=webpack:///./src/render.js?");

/***/ }),

/***/ "./src/renders/renderConfirmationModel.js":
/*!************************************************!*\
  !*** ./src/renders/renderConfirmationModel.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return renderConfirmationModal; });\n/* harmony import */ var _helpers_clearNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/clearNode */ \"./src/helpers/clearNode.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render */ \"./src/render.js\");\n\n\n\n\n\nfunction getToppingsString(toppings) {\n    let result = '';\n  \n    toppings.forEach(({ name, amount }, index) => {\n      result = index === 0 ? `${name} * ${amount}` : `${result}, ${name} * ${amount}`;\n    });\n  \n    return result;\n  }\n\n\n\n\n  function renderConfirmationModal(state){\n    const{isDisplayConfirmationModal,selectedToppings,selectedSize}=state;\n\n    const parentNode=document.querySelector('.confirmation-modal');\n  \n\n    if(!isDisplayConfirmationModal|| !selectedSize){\n\n        return;\n    }\n\n    const { name,price}=selectedSize;\n\n    const modalDiv=document.createElement('div');\n    modalDiv.classList.add('modal');\n\n    const modalBoxDiv=document.createElement('div');\n    modalBoxDiv.classList.add('modal-box');\n\n    modalDiv.append(modalBoxDiv);\n\n    const h1=document.createElement('h1');\n    h1.innerHTML='Your Order Details';\n\n    const addressDiv=document.createElement('div');\n    addressDiv.classList.add('address');\n\n    const nameP=document.createElement('p');\n\n    const nameStrong=document.createElement('strong');\n    nameStrong.innerHTML='CAI HENG';\n    nameP.append(nameStrong);\n\n    const streetP=document.createElement('p');\n    streetP.innerHTML='Rusell Street';\n\n    const cityP = document.createElement('p');\n    cityP.innerText = 'Melbourne 3000';\n\n    const numberP=document.createElement('p');\n    numberP.innerHTML='0416413665';\n\n    addressDiv.append(nameP,streetP,cityP,numberP);\n\n    const hr= document.createElement('hr');\n\n    const pizzasDiv=document.createElement('div');\n    pizzasDiv.classList.add('pizzas');\n\n    const pizzaDiv=document.createElement('div');\n    pizzaDiv.classList.add('pizza');\n\n    pizzasDiv.append(pizzaDiv);\n\n    const itemDiv=document.createElement('div');\n\n    const itemStrong=document.createElement('strong');\n    itemStrong.innerHTML=`${name} Pizza`;\n\n    const itemBr=document.createElement('br');\n\n    const itemSpan=document.createElement('span');\n    itemSpan.innerHTML = getToppingsString(selectedToppings); \n    // 调用顶部的function\n\n    itemDiv.append(itemStrong,itemBr,itemSpan);\n\n    const priceDiv=document.createElement('div');\n    const total= getTotal(state);\n    priceDiv.innerHTML=`$${total}`;\n    priceDiv.classList.add('price');\n\n    pizzaDiv.append(itemDiv, priceDiv);\n\n\n    const actionsDiv=document.createElement('div');\n    actionsDiv.classList.add('actions');\n\n    const cancelButton=document.createElement('button');\n    cancelButton.classList.add('cancel');\n    cancelButton.innerText='Cancel';\n    cancelButton.onclick=()=>{\n        state.isDisplayConfirmationModal=false;\n        Object(_render__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(state);\n    };\n\n    const confirmButton=document.createElement('button');\n    confirmButton.classList.add('confirm');\n    confirmButton.innerText='Confirm';\n\n    actionsDiv.append(cancelButton,confirmButton);\n\n    modalBoxDiv.append(h1,addressDiv,hr,pizzasDiv,actionsDiv);\n    parentNode.append(modalDiv);\n\n\n\n\n}\n\n//# sourceURL=webpack:///./src/renders/renderConfirmationModel.js?");

/***/ }),

/***/ "./src/renders/renderDetailsForm.js":
/*!******************************************!*\
  !*** ./src/renders/renderDetailsForm.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return renderDetailsForm; });\n/* harmony import */ var _helpers_clearNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/clearNode */ \"./src/helpers/clearNode.js\");\n\n\nfunction renderDetailsForm(state){\n \n    const {inputs}=state;\n\n    const parentNode=document.querySelector('.details');\n    Object(_helpers_clearNode__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(parentNode);\n\n\n    inputs.forEach(({label:formlabel,value}) => {\n       \n       \n        const formControlDiv=document.createElement('div');\n        formControlDiv.classList.add('form-control');\n    \n        const label=document.createElement('label');\n        label.innerText=formlabel;\n\n        const starSpan=document.createElement('span')\n        starSpan.innerText='*';\n        \n\n        label.append(starSpan);\n    \n        const input=document.createElement('input');\n        input.placeholder=value;\n        input.type='text';\n    \n        formControlDiv.append(label,input);\n\n        parentNode.append(formControlDiv);\n    \n        \n    });\n\n   \n    \n\n}\n\n//# sourceURL=webpack:///./src/renders/renderDetailsForm.js?");

/***/ }),

/***/ "./src/renders/renderSizes.js":
/*!************************************!*\
  !*** ./src/renders/renderSizes.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return renderSizes; });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render */ \"./src/render.js\");\n/* harmony import */ var _helpers_clearNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/clearNode */ \"./src/helpers/clearNode.js\");\n\n\n\n\n\nfunction renderSizes(state){\n    const {sizes,selectedSize}=state;\n \n    const parentNode=document.querySelector('.sizes');\n \n    \n    sizes.forEach((size) => {\n        \n        const {name,image,inches}=size;\n        const sizeDiv=document.createElement('div');\n        sizeDiv.classList.add('size');\n\n    \n        sizeDiv.onclick=()=>{\n            state.selectedSize=size;\n            Object(_render__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state);\n        }\n\n        if (selectedSize && name===selectedSize.name){\n            sizeDiv.classList.add('active');\n\n        }\n\n        const pizzaImg=document.createElement('img');\n        pizzaImg.src=image;\n        pizzaImg.classList.add('pizza');\n\n        const sizeSpan=document.createElement('span');\n        sizeSpan.innerHTML=`${name} (${inches}')`;\n\n        sizeDiv.append(pizzaImg,sizeSpan);\n        parentNode.append(sizeDiv);\n       \n        \n    });\n}\n\n//# sourceURL=webpack:///./src/renders/renderSizes.js?");

/***/ }),

/***/ "./src/renders/renderSummary.js":
/*!**************************************!*\
  !*** ./src/renders/renderSummary.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return renderSummary; });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render */ \"./src/render.js\");\n/* harmony import */ var _helpers_clearNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/clearNode */ \"./src/helpers/clearNode.js\");\n\n\n\n\n  \n  \n\nfunction onAddToppingClick(topping,state){\n    const {selectedToppings}=state;\n\n    const newSelectedToppings=selectedToppings.map(selectedTopping=>{\n      const {name}=selectedTopping;\n\n      if(name===topping.name){\n        const { amount } = topping;\n        const newAmount = amount + 1;\n       \n        return{\n          ...topping,\n          amount:newAmount,\n        }\n      }\n      return selectedTopping;\n    });\n\n    state .selectedToppings=newSelectedToppings;\n    Object(_render__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state);\n\n  }\n\n  function onMinusToppingClick(topping,state){\n    const {selectedToppings}=state;\n\n    const newSelectedToppings=selectedToppings.map(selectedTopping=>{\n      const {name}=selectedTopping;\n\n      if(name===topping.name){\n        const { amount } = topping;\n        const newAmount = amount -1;\n\n        if(newAmount===0){\n           return undefined;\n        }\n       \n        return{\n          ...topping,\n          amount:newAmount,\n        }\n      }\n      return selectedTopping;\n    });\n\n    state .selectedToppings=newSelectedToppings.filter(e=>!!e);\n    Object(_render__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state);\n\n  }\n  \n\n\n\n   function renderSummary(state){\n     const {selectedToppings,selectedSize}=state;\n  \n     const parentNode=document.querySelector('ul.summary');\n     Object(_helpers_clearNode__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(parentNode);\n\n\n     let price=0;\n    //  LARGE SIZE PIZZA\n     if (selectedSize){\n       \n      const {name,price}=selectedSize;\n      \n      const pizzaPriceLi=document.createElement('li');\n      const nameSpan=document.createElement('span');\n      nameSpan.innerText=`${name} Pizza`;\n\n      const priceSpan=document.createElement('span');\n      priceSpan.innerText=`$${price}`;\n\n      pizzaPriceLi.append(nameSpan,priceSpan);\n      parentNode.append(pizzaPriceLi);\n    }\n\n\n    // selectedToppings\n      const {name,amount}=selectedToppings;\n     selectedToppings.forEach(selectedTopping=>{\n      \n      const { name,amount,price}=selectedTopping;\n\n      const li=document.createElement('li');\n\n      const addButton=document.createElement('button');\n      addButton.innerHTML=`+`;\n      addButton.classList.add('amount');\n      addButton.onclick=()=>{\n        onAddToppingClick(selectedTopping,state);\n      }\n\n      const minusButton=document.createElement('button');\n      minusButton.classList.add('amount');\n      minusButton.innerHTML=`-`;\n      minusButton.onclick=()=>{\n        onMinusToppingClick(selectedTopping,state);\n      }\n\n      const nameSpan=document.createElement('span');\n      nameSpan.innerHTML=name;\n\n      const amountSpan=document.createElement('span');\n      amountSpan.innerHTML=`* ${amount}`;\n\n      const priceSpan=document.createElement('span');\n      priceSpan.innerHTML= `$ ${price}`;\n\n      const totalSpan=document.createElement('span');\n      totalSpan.innerHTML=`$ ${price*amount}`;\n\n\n      li.append(addButton,minusButton,nameSpan,amountSpan,totalSpan);\n      parentNode.append(li);\n\n\n\n\n      });\n    }\n\n\n\n//# sourceURL=webpack:///./src/renders/renderSummary.js?");

/***/ }),

/***/ "./src/renders/renderToppings.js":
/*!***************************************!*\
  !*** ./src/renders/renderToppings.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return renderToppings; });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render */ \"./src/render.js\");\n/* harmony import */ var _helpers_clearNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/clearNode */ \"./src/helpers/clearNode.js\");\n\n \n \n \n \n function onToppingClick(topping,state){\n    const {selectedToppings}=state;\n    const isExists= state.selectedToppings.find(({name})=>name===topping.name);\n \n    const newSelectedToppings= !isExists \n    ?[{...topping, amount:1}, ...selectedToppings]\n    :selectedToppings.filter(({name})=>name !==topping.name);\n\n\n    state.selectedToppings=newSelectedToppings;\n\n    Object(_render__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state);\n    \n\n }\n\n\nfunction renderToppings(state){\n    const {toppings,selectedToppings}= state;\n\n    const parentNode=document.querySelector('.toppings');\n    Object(_helpers_clearNode__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(parentNode);\n\n    toppings.forEach(topping => {\n       const {name:toppingName,image:toppingImg} =topping;\n       const container=document.createElement('div');\n       container.classList.add('topping');\n\n       if (selectedToppings.find(({name})=>name===topping.name)){\n         container.classList.add('active');\n       }\n\n       container.onclick=function(){\n          onToppingClick(topping,state);\n       };\n  \n       const imageContainer= document.createElement('div');\n       imageContainer.classList.add('img');\n \n       const image=document.createElement('img');\n       image.alt=toppingName;\n       image.src=toppingImg;\n \n       const name=document.createElement('span');\n       name.innerHTML=toppingName;\n \n       container.append(imageContainer,name);\n       imageContainer.append(image);\n       parentNode.append(container);\n\n       \n    });\n\n    \n   \n }\n\n//# sourceURL=webpack:///./src/renders/renderToppings.js?");

/***/ }),

/***/ "./src/renders/renderTotal.js":
/*!************************************!*\
  !*** ./src/renders/renderTotal.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return renderTotal; });\n/* harmony import */ var _helpers_clearNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/clearNode */ \"./src/helpers/clearNode.js\");\n/* harmony import */ var _helpers_getTotal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/getTotal */ \"./src/helpers/getTotal.js\");\n\n \n \n\n \n function renderTotal(state){\n    \n    const parentNode=document.querySelector('.total');\n    Object(_helpers_clearNode__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(parentNode);\n\n    const total =Object(_helpers_getTotal__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(state);\n\n    const totalSpan=document.createElement('span');\n    totalSpan.innerText=`Total:$${total}`;\n\n    parentNode.append(totalSpan);\n\n\n}\n\n//# sourceURL=webpack:///./src/renders/renderTotal.js?");

/***/ })

/******/ });
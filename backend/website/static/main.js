webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const platform_browser_dynamic_1 = __webpack_require__(1);
	const website_module_1 = __webpack_require__(23);
	const platform = platform_browser_dynamic_1.platformBrowserDynamic();
	platform.bootstrapModule(website_module_1.WebsiteModule);


/***/ },

/***/ 23:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const core_1 = __webpack_require__(3);
	const platform_browser_1 = __webpack_require__(21);
	const website_component_1 = __webpack_require__(24);
	let WebsiteModule = class WebsiteModule {
	};
	WebsiteModule = __decorate([
	    core_1.NgModule({
	        imports: [platform_browser_1.BrowserModule],
	        declarations: [website_component_1.WebsiteComponent],
	        bootstrap: [website_component_1.WebsiteComponent]
	    }), 
	    __metadata('design:paramtypes', [])
	], WebsiteModule);
	exports.WebsiteModule = WebsiteModule;


/***/ },

/***/ 24:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const core_1 = __webpack_require__(3);
	let WebsiteComponent = class WebsiteComponent {
	    constructor() {
	        this.title = "Welcome to my Website";
	    }
	};
	WebsiteComponent = __decorate([
	    core_1.Component({
	        selector: 'website',
	        template: '<h1>{{title}}</h1>'
	    }), 
	    __metadata('design:paramtypes', [])
	], WebsiteComponent);
	exports.WebsiteComponent = WebsiteComponent;


/***/ }

});
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("adm.@angular/common"),require("adm.rxjs/operators"),require("adm.shared"),require("adm.@angular/core")):"function"==typeof define&&define.amd?define(["adm.@angular/common","adm.rxjs/operators","adm.shared","adm.@angular/core"],t):"object"==typeof exports?exports.matrix=t(require("adm.@angular/common"),require("adm.rxjs/operators"),require("adm.shared"),require("adm.@angular/core")):e.matrix=t(e["adm.@angular/common"],e["adm.rxjs/operators"],e["adm.shared"],e["adm.@angular/core"])}("undefined"!=typeof self?self:this,function(e,t,r,n){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,(function(t){return e[t]}).bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/assets/plugins/matrix",r(r.s=0)}({0:function(e,t,r){e.exports=r("P+m1")},"0S4P":function(t,r){t.exports=e},"P+m1":function(e,t,r){"use strict";r.r(t),r.d(t,"MatrixModule",function(){return c});var n=r("cfyg"),o=r("aP7H"),u=r("vOrQ"),i=function(){function e(e){this.context=e}return e.prototype.ngOnInit=function(){this.context.update$.pipe(Object(o.takeUntil)(this.context.destroy$)).subscribe(function(e){})},e.\u0275fac=function(t){return new(t||e)(u["\u0275\u0275directiveInject"](n.PLUGIN_CONTEXT))},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["app-matrix"]],decls:1,vars:0,template:function(e,t){1&e&&u["\u0275\u0275text"](0,"matrix plugin created")},styles:[""]}),e}(),a=r("0S4P"),c=function(){function e(){}return e.entry=i,e.\u0275mod=u["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.CommonModule]]}),e}();t.default=c},aP7H:function(e,r){e.exports=t},cfyg:function(e,t){e.exports=r},vOrQ:function(e,t){e.exports=n}})});
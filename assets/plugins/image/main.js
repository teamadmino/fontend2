!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("adm.@angular/common"),require("adm.lodash"),require("adm.rxjs/operators"),require("adm.shared"),require("adm.@angular/platform-browser"),require("adm.@angular/core")):"function"==typeof define&&define.amd?define(["adm.@angular/common","adm.lodash","adm.rxjs/operators","adm.shared","adm.@angular/platform-browser","adm.@angular/core"],t):"object"==typeof exports?exports.image=t(require("adm.@angular/common"),require("adm.lodash"),require("adm.rxjs/operators"),require("adm.shared"),require("adm.@angular/platform-browser"),require("adm.@angular/core")):e.image=t(e["adm.@angular/common"],e["adm.lodash"],e["adm.rxjs/operators"],e["adm.shared"],e["adm.@angular/platform-browser"],e["adm.@angular/core"])}("undefined"!=typeof self?self:this,function(e,t,n,r,o,i){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,(function(t){return e[t]}).bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/assets/plugins/image",n(n.s=0)}({0:function(e,t,n){e.exports=n("P+m1")},"0S4P":function(t,n){t.exports=e},"P+m1":function(e,t,n){"use strict";n.r(t),n.d(t,"ImageModule",function(){return c});var r=n("0S4P"),o=n("vOrQ"),i=n("vG+p"),a=n("cfyg"),u=n("aP7H"),s=n("YLtl"),l=function(){function e(e,t,n){this.sanitizer=e,this.cd=t,this.context=n,this.width=null,this.height=null}return e.prototype.onLoad=function(e){},e.prototype.ngOnInit=function(){var e=this;this.context.update$.pipe(Object(u.takeUntil)(this.context.destroy$)).subscribe(function(t){e.updateConfig()}),this.updateConfig()},e.prototype.updateConfig=function(){var e,t,n=Object(s.cloneDeep)(null===(e=this.context.pluginConfig)||void 0===e?void 0:e.config.innerStyle),r=null===(t=this.context.pluginConfig)||void 0===t?void 0:t.config.sizing;this.style={},n&&(this.style=n),r&&(this.style["object-fit"]=r,this.style.width="100%",this.style.height="100%",this.width="100%",this.height="100%"),r||(this.width=null,this.height=null)},e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275directiveInject"](i.DomSanitizer),o["\u0275\u0275directiveInject"](o.ChangeDetectorRef),o["\u0275\u0275directiveInject"](a.PLUGIN_CONTEXT))},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["app-image"]],hostVars:4,hostBindings:function(e,t){2&e&&o["\u0275\u0275styleProp"]("width",t.width)("height",t.height)},decls:1,vars:2,consts:[["alt","",3,"ngStyle","src","load"]],template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"img",0),o["\u0275\u0275listener"]("load",function(e){return t.onLoad(e)}),o["\u0275\u0275elementEnd"]()),2&e&&o["\u0275\u0275property"]("ngStyle",t.style)("src",null==t.context.pluginConfig.config?null:t.context.pluginConfig.config.src,o["\u0275\u0275sanitizeUrl"])},directives:[r.NgStyle],styles:["[_nghost-%COMP%]{width:100%;height:100%}"]}),e}(),c=function(){function e(){}return e.entry=l,e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.CommonModule]]}),e}();t.default=c},YLtl:function(e,n){e.exports=t},aP7H:function(e,t){e.exports=n},cfyg:function(e,t){e.exports=r},"vG+p":function(e,t){e.exports=o},vOrQ:function(e,t){e.exports=i}})});
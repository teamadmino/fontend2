!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("adm.@angular/common"),require("adm.@angular/forms"),require("adm.@angular/material"),require("adm.rxjs/operators"),require("adm.shared"),require("adm.@angular/platform-browser"),require("adm.@angular/core")):"function"==typeof define&&define.amd?define(["adm.@angular/common","adm.@angular/forms","adm.@angular/material","adm.rxjs/operators","adm.shared","adm.@angular/platform-browser","adm.@angular/core"],t):"object"==typeof exports?exports.slidetoggle=t(require("adm.@angular/common"),require("adm.@angular/forms"),require("adm.@angular/material"),require("adm.rxjs/operators"),require("adm.shared"),require("adm.@angular/platform-browser"),require("adm.@angular/core")):e.slidetoggle=t(e["adm.@angular/common"],e["adm.@angular/forms"],e["adm.@angular/material"],e["adm.rxjs/operators"],e["adm.shared"],e["adm.@angular/platform-browser"],e["adm.@angular/core"])}("undefined"!=typeof self?self:this,function(e,t,r,n,o,i,a){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,(function(t){return e[t]}).bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/assets/plugins/slidetoggle",r(r.s=0)}({0:function(e,t,r){e.exports=r("P+m1")},"0S4P":function(t,r){t.exports=e},"3xDq":function(e,r){e.exports=t},"8ZSF":function(e,t){e.exports=r},"P+m1":function(e,t,r){"use strict";r.r(t),r.d(t,"SlidetoggleModule",function(){return s});var n=r("0S4P"),o=r("vOrQ"),i=r("vG+p"),a=r("cfyg"),l=r("aP7H"),u=r("8ZSF"),c=r("3xDq"),d=function(){function e(e,t,r){this.sanitizer=e,this.cd=t,this.context=r}return e.prototype.ngOnInit=function(){var e,t=this;this.sanitizedLabel=this.sanitizer.bypassSecurityTrustHtml(null===(e=this.context.pluginConfig.config)||void 0===e?void 0:e.label),this.context.update$.pipe(Object(l.takeUntil)(this.context.destroy$)).subscribe(function(e){var r;t.sanitizedLabel=t.sanitizer.bypassSecurityTrustHtml(null===(r=t.context.pluginConfig.config)||void 0===r?void 0:r.label)})},e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275directiveInject"](i.DomSanitizer),o["\u0275\u0275directiveInject"](o.ChangeDetectorRef),o["\u0275\u0275directiveInject"](a.PLUGIN_CONTEXT))},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["app-slidetoggle"]],decls:2,vars:5,consts:[[3,"formControl","color","checked","ngStyle"],[3,"innerHTML"]],template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"mat-slide-toggle",0),o["\u0275\u0275element"](1,"div",1),o["\u0275\u0275elementEnd"]()),2&e&&(o["\u0275\u0275property"]("formControl",t.context.control)("color",null==t.context.pluginConfig.config?null:t.context.pluginConfig.config.color)("checked",t.context.pluginConfig.value)("ngStyle",null==t.context.pluginConfig.config?null:t.context.pluginConfig.config.innerStyle),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("innerHTML",t.sanitizedLabel,o["\u0275\u0275sanitizeHtml"]))},directives:[u.MatSlideToggle,c.NgControlStatus,c.FormControlDirective,n.NgStyle],styles:["[_nghost-%COMP%]{width:100%}[_nghost-%COMP%]  .mat-slide-toggle-bar{background-color:rgba(var(--theme-foreground-400),.2)}[_nghost-%COMP%]  .mat-slide-toggle-label{margin-bottom:0}"]}),e}(),s=function(){function e(){}return e.entry=d,e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[n.CommonModule,u.MatSlideToggleModule,c.ReactiveFormsModule]]}),e}();t.default=s},aP7H:function(e,t){e.exports=n},cfyg:function(e,t){e.exports=o},"vG+p":function(e,t){e.exports=i},vOrQ:function(e,t){e.exports=a}})});
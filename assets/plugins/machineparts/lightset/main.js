!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("adm.@angular/common"),require("adm.rxjs"),require("adm.lodash"),require("adm.rxjs/operators"),require("adm.shared"),require("adm.@angular/core")):"function"==typeof define&&define.amd?define(["adm.@angular/common","adm.rxjs","adm.lodash","adm.rxjs/operators","adm.shared","adm.@angular/core"],t):"object"==typeof exports?exports["machineparts/lightset"]=t(require("adm.@angular/common"),require("adm.rxjs"),require("adm.lodash"),require("adm.rxjs/operators"),require("adm.shared"),require("adm.@angular/core")):e["machineparts/lightset"]=t(e["adm.@angular/common"],e["adm.rxjs"],e["adm.lodash"],e["adm.rxjs/operators"],e["adm.shared"],e["adm.@angular/core"])}("undefined"!=typeof self?self:this,function(e,t,n,r,o,i){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,(function(t){return e[t]}).bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/assets/plugins/machineparts/lightset/",n(n.s=0)}({0:function(e,t,n){e.exports=n("P+m1")},"0S4P":function(t,n){t.exports=e},"P+m1":function(e,t,n){"use strict";n.r(t),n.d(t,"MachinepartsLightsetModule",function(){return m});var r=n("vOrQ"),o=n("YLtl"),i=n("Vgaj"),a=n("aP7H"),c=n("cfyg"),s=n("0S4P"),l=function(e,t,n){return{active:e,"adm-light-warn":t,"adm-light-accent":n}},u=function(e){return[e]};function p(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"div",3),r["\u0275\u0275elementStart"](1,"div",4),r["\u0275\u0275element"](2,"div",5),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngClass",r["\u0275\u0275pureFunction3"](2,l,n.isActive,"warn"===n.color,"accent"===n.color)),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngClass",r["\u0275\u0275pureFunction1"](6,u,n.flickeringRate?"adm-flicker-"+n.flickeringRate:""))}}function d(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"div",6),r["\u0275\u0275elementStart"](1,"div",7),r["\u0275\u0275text"](2),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e){var n=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate1"](" ",null==n.context.pluginConfig.config?null:n.context.pluginConfig.config.label," ")}}var f=function(e){return{"grid-template-columns":e}},g=function(){function e(e,t,n){var r=this;this.el=e,this.context=t,this.renderer=n,this.ngUnsubscribe=new i.Subject,this.props=[],this.context.contentSizeChanged$.pipe(Object(a.takeUntil)(this.ngUnsubscribe)).subscribe(function(e){}),this.context.update$.pipe(Object(a.takeUntil)(this.context.destroy$)).subscribe(function(e){r.processProps()}),this.processProps()}return e.prototype.processProps=function(){var e,t=this;this.props=[];var n=null===(e=this.context.pluginConfig.config)||void 0===e?void 0:e.props;n&&Object.keys(n).forEach(function(e){var r=n[e],i=Object(o.cloneDeep)(r);i.id=e,t.props.push(i)}),this.props=this.props.sort(function(e,t){return e.index>t.index?1:e.index<t.index?-1:0})},e.prototype.ngOnInit=function(){},e.prototype.ngAfterViewInit=function(){},e.prototype.ngOnDestroy=function(){this.ngUnsubscribe.next(),this.ngUnsubscribe.complete()},e.prototype.trackByFn=function(e,t){return t.id},e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](r.ElementRef),r["\u0275\u0275directiveInject"](c.PLUGIN_CONTEXT),r["\u0275\u0275directiveInject"](r.Renderer2))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["app-machineparts-lightset"]],decls:3,vars:5,consts:[[1,"lgrid",3,"ngStyle"],["class","lwrap",4,"ngFor","ngForOf"],["class","adm-card-label",4,"ngIf"],[1,"lwrap"],[1,"adm-light",3,"ngClass"],[1,"adm-lightsource",3,"ngClass"],[1,"adm-card-label"],[1,"text"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"div",0),r["\u0275\u0275template"](1,p,3,8,"div",1),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](2,d,3,1,"div",2)),2&e&&(r["\u0275\u0275property"]("ngStyle",r["\u0275\u0275pureFunction1"](3,f,"repeat("+(null!=t.context.pluginConfig.config&&t.context.pluginConfig.config.columnNum?t.context.pluginConfig.config.columnNum:2)+" , 1fr)")),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngForOf",t.props),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",null==t.context.pluginConfig.config?null:t.context.pluginConfig.config.label))},directives:[s.NgStyle,s.NgForOf,s.NgIf,s.NgClass],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;align-items:center}[_nghost-%COMP%], [_nghost-%COMP%]   .lgrid[_ngcontent-%COMP%]{width:100%;position:relative}[_nghost-%COMP%]   .lgrid[_ngcontent-%COMP%]{flex:1;display:grid;grid-template-columns:repeat(2,1fr);grid-gap:5px}[_nghost-%COMP%]   .lgrid[_ngcontent-%COMP%]   .lwrap[_ngcontent-%COMP%]{position:relative}[_nghost-%COMP%]   .adm-card-label[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .adm-light[_ngcontent-%COMP%]{position:absolute;display:inline-block;top:50%;left:50%;transform:translateX(-50%) translateY(-50%)}"]}),e}(),m=function(){function e(){}return e.entry=g,e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[s.CommonModule]]}),e}();t.default=m},Vgaj:function(e,n){e.exports=t},YLtl:function(e,t){e.exports=n},aP7H:function(e,t){e.exports=r},cfyg:function(e,t){e.exports=o},vOrQ:function(e,t){e.exports=i}})});
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("adm.@angular/common"),require("adm.@angular/forms"),require("adm.@angular/material"),require("adm.rxjs/operators"),require("adm.shared"),require("adm.@angular/core")):"function"==typeof define&&define.amd?define(["adm.@angular/common","adm.@angular/forms","adm.@angular/material","adm.rxjs/operators","adm.shared","adm.@angular/core"],t):"object"==typeof exports?exports.daterange=t(require("adm.@angular/common"),require("adm.@angular/forms"),require("adm.@angular/material"),require("adm.rxjs/operators"),require("adm.shared"),require("adm.@angular/core")):e.daterange=t(e["adm.@angular/common"],e["adm.@angular/forms"],e["adm.@angular/material"],e["adm.rxjs/operators"],e["adm.shared"],e["adm.@angular/core"])}("undefined"!=typeof self?self:this,function(e,t,n,o,r,a){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,(function(t){return e[t]}).bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/assets/plugins/daterange",n(n.s=0)}({0:function(e,t,n){e.exports=n("P+m1")},"0S4P":function(t,n){t.exports=e},"3xDq":function(e,n){e.exports=t},EdK2:function(e,t){e.exports=n},"P+m1":function(e,t,n){"use strict";n.r(t),n.d(t,"DaterangeModule",function(){return d});var o=n("0S4P"),r=n("cfyg"),a=n("aP7H"),i=n("EdK2"),l=n("3xDq"),u=n("vOrQ"),c=function(){function e(e,t){this._adapter=e,this.context=t,this.range=new l.FormGroup({start:new l.FormControl,end:new l.FormControl}),this.inited=!1}return e.prototype.ngOnInit=function(){var e,t,n=this;this.context.pluginConfig.value?(this.setVal(this.context.pluginConfig.value.start,this.context.pluginConfig.value.end),this.inited=!0):this.inited=!0,(null===(e=this.context.pluginConfig.config)||void 0===e?void 0:e.locale)&&this._adapter.setLocale(null===(t=this.context.pluginConfig.config)||void 0===t?void 0:t.locale),this.context.update$.pipe(Object(a.takeUntil)(this.context.destroy$)).subscribe(function(e){var t,o;e.compareResult.diff.value&&n.setVal(n.context.pluginConfig.value.start,n.context.pluginConfig.value.end),(null===(t=n.context.pluginConfig.config)||void 0===t?void 0:t.locale)&&n._adapter.setLocale(null===(o=n.context.pluginConfig.config)||void 0===o?void 0:o.locale)}),this.range.valueChanges.pipe(Object(a.takeUntil)(this.context.destroy$),Object(a.debounceTime)(1)).subscribe(function(e){n.context.control.setValue({start:n.convertToJSON(e.start),end:n.convertToJSON(e.end)})})},e.prototype.setVal=function(e,t){this.range.get("start").setValue(e),this.range.get("end").setValue(t)},e.prototype.convertToJSON=function(e){if(e)return e.toJSON()},e.\u0275fac=function(t){return new(t||e)(u["\u0275\u0275directiveInject"](i.DateAdapter),u["\u0275\u0275directiveInject"](r.PLUGIN_CONTEXT))},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["app-daterange"]],features:[u["\u0275\u0275ProvidersFeature"]([{provide:i.DateAdapter,useClass:i.MomentDateAdapter,deps:[i.MAT_DATE_LOCALE,i.MAT_MOMENT_DATE_ADAPTER_OPTIONS]}])],decls:9,vars:10,consts:[[3,"appearance","ngStyle"],[3,"formGroup","rangePicker"],["matStartDate","","formControlName","start",3,"placeholder","readonly"],["matEndDate","","formControlName","end",3,"placeholder","readonly"],["matSuffix","",3,"for"],["picker",""]],template:function(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"mat-form-field",0),u["\u0275\u0275elementStart"](1,"mat-label"),u["\u0275\u0275text"](2),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](3,"mat-date-range-input",1),u["\u0275\u0275element"](4,"input",2),u["\u0275\u0275element"](5,"input",3),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](6,"mat-datepicker-toggle",4),u["\u0275\u0275element"](7,"mat-date-range-picker",null,5),u["\u0275\u0275elementEnd"]()),2&e){var n=u["\u0275\u0275reference"](8);u["\u0275\u0275property"]("appearance",null==t.context.pluginConfig.config?null:t.context.pluginConfig.config.appearance)("ngStyle",null==t.context.pluginConfig.config?null:t.context.pluginConfig.config.innerStyle),u["\u0275\u0275advance"](2),u["\u0275\u0275textInterpolate"](null==t.context.pluginConfig.config?null:t.context.pluginConfig.config.label),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("formGroup",t.range)("rangePicker",n),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("placeholder",null!=t.context.pluginConfig.config&&t.context.pluginConfig.config.placeholderStart?null==t.context.pluginConfig.config?null:t.context.pluginConfig.config.placeholderStart:"")("readonly",null==t.context.pluginConfig.config?null:t.context.pluginConfig.config.readonly),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("placeholder",null!=t.context.pluginConfig.config&&t.context.pluginConfig.config.placeholderEnd?null==t.context.pluginConfig.config?null:t.context.pluginConfig.config.placeholderEnd:"")("readonly",null==t.context.pluginConfig.config?null:t.context.pluginConfig.config.readonly),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("for",n)}},directives:[i.MatFormField,o.NgStyle,i.MatLabel,i.MatDateRangeInput,l.NgControlStatusGroup,l.FormGroupDirective,i.MatStartDate,l.DefaultValueAccessor,l.NgControlStatus,l.FormControlName,i.MatEndDate,i.MatDatepickerToggle,i.MatSuffix,i.MatDateRangePicker],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),e}(),d=function(){function e(){}return e.entry=c,e.\u0275mod=u["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.CommonModule,l.ReactiveFormsModule,i.MatMomentDateModule,i.MatFormFieldModule,i.MatDatepickerModule,i.MatInputModule]]}),e}();t.default=d},aP7H:function(e,t){e.exports=o},cfyg:function(e,t){e.exports=r},vOrQ:function(e,t){e.exports=a}})});
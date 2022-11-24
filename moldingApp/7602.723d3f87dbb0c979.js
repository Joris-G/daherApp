"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7602],{7602:(w,u,r)=>{r.r(u),r.d(u,{ion_picker_column_internal:()=>v});var b=r(5861),l=r(7205),I=r(5729),c=r(3756),p=r(7683),_=r(2854);const v=class{constructor(s){(0,l.r)(this,s),this.ionChange=(0,l.e)(this,"ionChange",7),this.isScrolling=!1,this.isColumnVisible=!1,this.isActive=!1,this.items=[],this.color="primary",this.numericInput=!1,this.centerPickerItemInView=(e,t=!0)=>{const{el:i,isColumnVisible:o}=this;if(o){const n=e.offsetTop-3*e.clientHeight+e.clientHeight/2;i.scrollTop!==n&&i.scroll({top:n,left:0,behavior:t?"smooth":void 0})}},this.inputModeChange=e=>{if(!this.numericInput)return;const{useInputMode:t,inputModeColumn:i}=e.detail;this.setInputModeActive(!(!t||void 0!==i&&i!==this.el))},this.setInputModeActive=e=>{this.isScrolling?this.scrollEndCallback=()=>{this.isActive=e}:this.isActive=e},this.initializeScrollListener=()=>{const{el:e}=this;let t,i=this.activeItem;const o=()=>{(0,c.r)(()=>{t&&(clearTimeout(t),t=void 0),this.isScrolling||((0,p.a)(),this.isScrolling=!0);const n=e.getBoundingClientRect(),d=e.shadowRoot.elementFromPoint(n.x+n.width/2,n.y+n.height/2);null!==i&&i.classList.remove(a),d!==i&&(0,p.b)(),i=d,d.classList.add(a),t=setTimeout(()=>{this.isScrolling=!1,(0,p.h)();const{scrollEndCallback:g}=this;g&&(g(),this.scrollEndCallback=void 0);const f=d.getAttribute("data-index");if(null===f)return;const x=parseInt(f,10),k=this.items[x];k.value!==this.value&&this.setValue(k.value)},250)})};(0,c.r)(()=>{e.addEventListener("scroll",o),this.destroyScrollListener=()=>{e.removeEventListener("scroll",o)}})}}valueChange(){this.isColumnVisible&&this.scrollActiveItemIntoView()}componentWillLoad(){new IntersectionObserver(t=>{var i;if(t[0].isIntersecting){this.isColumnVisible=!0;const n=(0,c.g)(this.el).querySelector(`.${a}`);null==n||n.classList.remove(a),this.scrollActiveItemIntoView(),null===(i=this.activeItem)||void 0===i||i.classList.add(a),this.initializeScrollListener()}else this.isColumnVisible=!1,this.destroyScrollListener&&(this.destroyScrollListener(),this.destroyScrollListener=void 0)},{threshold:.001}).observe(this.el);const e=this.el.closest("ion-picker-internal");null!==e&&e.addEventListener("ionInputModeChange",t=>this.inputModeChange(t))}componentDidRender(){var s;const{activeItem:e,items:t,isColumnVisible:i,value:o}=this;i&&(e?this.scrollActiveItemIntoView():(null===(s=t[0])||void 0===s?void 0:s.value)!==o&&this.setValue(t[0].value))}scrollActiveItemIntoView(){var s=this;return(0,b.Z)(function*(){const e=s.activeItem;e&&s.centerPickerItemInView(e,!1)})()}setValue(s){const{items:e}=this;this.value=s;const t=e.find(i=>i.value===s);t&&this.ionChange.emit(t)}get activeItem(){return(0,c.g)(this.el).querySelector(`.picker-item[data-value="${this.value}"]`)}render(){const{items:s,color:e,isActive:t,numericInput:i}=this,o=(0,I.b)(this);return(0,l.h)(l.H,{tabindex:0,class:(0,_.c)(e,{[o]:!0,"picker-column-active":t,"picker-column-numeric-input":i})},(0,l.h)("div",{class:"picker-item picker-item-empty"},"\xa0"),(0,l.h)("div",{class:"picker-item picker-item-empty"},"\xa0"),(0,l.h)("div",{class:"picker-item picker-item-empty"},"\xa0"),s.map((n,h)=>(0,l.h)("div",{class:"picker-item","data-value":n.value,"data-index":h,onClick:m=>{this.centerPickerItemInView(m.target)}},n.text)),(0,l.h)("div",{class:"picker-item picker-item-empty"},"\xa0"),(0,l.h)("div",{class:"picker-item picker-item-empty"},"\xa0"),(0,l.h)("div",{class:"picker-item picker-item-empty"},"\xa0"))}get el(){return(0,l.i)(this)}static get watchers(){return{value:["valueChange"]}}},a="picker-item-active";v.style={ios:":host{padding-left:16px;padding-right:16px;padding-top:0px;padding-bottom:0px;height:200px;outline:none;font-size:22px;-webkit-scroll-snap-type:y mandatory;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory;overflow-x:hidden;overflow-y:scroll;scrollbar-width:none;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host::-webkit-scrollbar{display:none}:host .picker-item{height:34px;line-height:34px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;scroll-snap-align:center}:host .picker-item-empty{scroll-snap-align:none}:host(.picker-column-active) .picker-item.picker-item-active{color:var(--ion-color-base)}@media (any-hover: hover){:host(:focus){outline:none;background:rgba(var(--ion-color-base-rgb), 0.2)}}",md:":host{padding-left:16px;padding-right:16px;padding-top:0px;padding-bottom:0px;height:200px;outline:none;font-size:22px;-webkit-scroll-snap-type:y mandatory;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory;overflow-x:hidden;overflow-y:scroll;scrollbar-width:none;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host::-webkit-scrollbar{display:none}:host .picker-item{height:34px;line-height:34px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;scroll-snap-align:center}:host .picker-item-empty{scroll-snap-align:none}:host(.picker-column-active) .picker-item.picker-item-active{color:var(--ion-color-base)}@media (any-hover: hover){:host(:focus){outline:none;background:rgba(var(--ion-color-base-rgb), 0.2)}}:host .picker-item-active{color:var(--ion-color-base)}"}}}]);
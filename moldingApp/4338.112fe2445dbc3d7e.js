"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4338],{4338:(m,n,s)=>{s.r(n),s.d(n,{ToolListPageModule:()=>f});var a=s(9808),c=s(3075),i=s(3349),u=s(8555),o=s(5e3),g=s(9973),T=s(2853);function d(t,r){1&t&&(o.TgZ(0,"ion-row",4),o.TgZ(1,"ion-col",2),o._uU(2,"Test"),o.qZA(),o.TgZ(3,"ion-col",2),o._uU(4,"Test"),o.qZA(),o.qZA())}const Z=[{path:"",component:(()=>{class t{constructor(e,l){this.toolRequestService=e,this.alertControleService=l}ngOnInit(){this.updateToolList()}updateToolList(){this.toolRequestService.getToolRequests().then(e=>{this.requestList=e}).catch(e=>{this.alertControleService.simpleAlert("Erreur","Mise \xe0 jour de la liste","La liste des requ\xeates ne s'est pas mise \xe0 jour correctement")})}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(g.C),o.Y36(T.c))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-tool-list"]],decls:12,vars:1,consts:[["fixed",""],[1,"header-row"],["size","6"],["class","request-row",4,"ngFor","ngForOf"],[1,"request-row"]],template:function(e,l){1&e&&(o.TgZ(0,"ion-header"),o.TgZ(1,"ion-toolbar"),o.TgZ(2,"ion-title"),o._uU(3,"toolList"),o.qZA(),o.qZA(),o.qZA(),o.TgZ(4,"ion-content"),o.TgZ(5,"ion-grid",0),o.TgZ(6,"ion-row",1),o.TgZ(7,"ion-col",2),o._uU(8,"header test"),o.qZA(),o.TgZ(9,"ion-col",2),o._uU(10,"header test"),o.qZA(),o.qZA(),o.YNc(11,d,5,0,"ion-row",3),o.qZA(),o.qZA()),2&e&&(o.xp6(11),o.Q6J("ngForOf",l.requestList))},directives:[i.Gu,i.sr,i.wd,i.W2,i.jY,i.Nd,i.wI,a.sg],styles:[""]}),t})()}];let L=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[u.Bz.forChild(Z)],u.Bz]}),t})(),f=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[a.ez,c.u5,i.Pc,L]]}),t})()}}]);
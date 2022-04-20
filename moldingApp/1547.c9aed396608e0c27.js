"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1547,6188],{8190:(Z,A,l)=>{l.d(A,{b:()=>d});var e=l(4762),c=l(3668),p=l(1704);let d=(()=>{class u{constructor(g){this.loadingController=g}startLoading(g){this.loadingController.create({cssClass:"my-custom-class",message:g}).then(C=>{C.present()})}stopLoading(){return(0,e.mG)(this,void 0,void 0,function*(){setTimeout(()=>{this.loadingController.dismiss()},100)})}}return u.\u0275fac=function(g){return new(g||u)(c.LFG(p.HT))},u.\u0275prov=c.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},3580:(Z,A,l)=>{l.d(A,{C:()=>C});var e=l(4762),c=l(8260),p=l(3668),d=l(3521),u=l(6188),v=l(7914),g=l(6607);let C=(()=>{class a{constructor(t,i,m,P){this.requestService=t,this.toolService=i,this.userService=m,this.authService=P}getType(t){return"string"==typeof t?t:t.controle?"controle":t.maintenance?"maintenance":void 0}createToolRequest(t){return this.requestService.createPostRequest(c.N.toolApi+"demandes",t)}createControlRequest(t){var i;const m={id:null!==(i=t.id)&&void 0!==i?i:null,outillage:t.outillage?this.toolService.getIri(t.outillage):"",dateBesoin:t.dateBesoin,userCreat:this.userService.getIri(this.authService.authUser),refPlan:t.refPlan,indPlan:t.indPlan,cheminCAO:t.cheminCAO,description:t.description,detailsControle:t.detailsControle,tolerances:t.tolerances,dispoOut:t.dispoOut,ligneBudgetaire:t.ligneBudgetaire,typeRapport:t.typeRapport};return this.requestService.createPostRequest(c.N.toolApi+"controles",m)}createAllMaintenaceItems(t){const i=[];return new Promise((m,P)=>{t.itemActionCorrective.forEach(T=>{this.requestService.createPostRequest(c.N.toolApi+"maintenance_items",T).then(q=>{i.push(`/api/maintenance_items/${q.id}`),console.log(i.length,t.itemActionCorrective.length),i.length===t.itemActionCorrective.length&&m(i)})})})}createMaintenanceRequest(t){return new Promise((i,m)=>{this.createAllMaintenaceItems(t).then(P=>{var T;console.log(P);const q={id:null!==(T=t.id)&&void 0!==T?T:null,outillage:t.outillage?this.toolService.getIri(t.outillage):"",dateBesoin:t.dateBesoin,userCreat:this.userService.getIri(this.authService.authUser),rep:t.rep,itemActionCorrective:P};console.log(q),this.requestService.createPostRequest(c.N.toolApi+"maintenances",q).then(R=>{i(R)})})})}updateRequest(t){const i={statut:t.statut,createdAt:t.createdAt,id:t.id};return this.requestService.createPutRequest(c.N.toolApi+"demandes/"+i.id,i)}updateControlRequest(t){var i;const m={id:null!==(i=t.controle.id)&&void 0!==i?i:null,outillage:t.controle.outillage?this.toolService.getIri(t.controle.outillage):"",dateBesoin:t.dateBesoin,userCreat:this.userService.getIri(t.controle.demandeur),refPlan:t.controle.refPlan,indPlan:t.controle.indPlan,cheminCAO:t.controle.cheminCAO,description:t.controle.description,detailsControle:t.controle.detailsControle,tolerances:t.controle.tolerances,dispoOut:t.controle.dispoOut,ligneBudgetaire:t.controle.ligneBudgetaire,interventionDate:t.controle.interventionDate,moyenMesure:t.controle.moyenMesure,infosComplementaire:t.controle.infosComplementaire,visaControleur:t.controle.visaControleur,typeRapport:t.controle.typeRapport};return console.log(m),this.requestService.createPutRequest(c.N.toolApi+"controles/"+m.id,m)}updateMaintenanceItems(t){return(0,e.mG)(this,void 0,void 0,function*(){const i=t.map(m=>m.id?this.requestService.createPutRequest(c.N.toolApi+"maintenance_items/"+m.id,m):this.requestService.createPostRequest(c.N.toolApi+"maintenance_items",m));return Promise.all(i)})}updateMainteanceRequest(t){return new Promise((i,m)=>{this.updateMaintenanceItems(t.maintenance.itemActionCorrective).then(P=>{var T;t.maintenance.itemActionCorrective=P,console.log(t.maintenance.itemActionCorrective);const q=t.maintenance.itemActionCorrective.map(M=>"/api/maintenance_items/"+M.id),R={id:null!==(T=t.maintenance.id)&&void 0!==T?T:null,outillage:t.maintenance.outillage?this.toolService.getIri(t.maintenance.outillage):"",dateBesoin:t.dateBesoin,userCreat:this.userService.getIri(t.maintenance.userCreat),itemActionCorrective:q};console.log(R),i(this.requestService.createPutRequest(c.N.toolApi+"maintenances/"+R.id,R))})})}getToolRequest(t){return this.requestService.createGetRequest(c.N.toolApi+"demandes/"+t)}getToolRequests(){return this.requestService.createGetRequest(c.N.toolApi+"demandes")}getControl(t){return this.requestService.createGetRequest(c.N.toolApi+"controles/"+t)}getMaintenance(t){return this.requestService.createGetRequest(c.N.toolApi+"maintenances/"+t)}removeRequest(t){return new Promise((i,m)=>{this.requestService.createDeleteRequest("demandes/"+t.id)})}}return a.\u0275fac=function(t){return new(t||a)(p.LFG(d.s),p.LFG(u.o),p.LFG(v.f),p.LFG(g.e))},a.\u0275prov=p.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},6188:(Z,A,l)=>{l.d(A,{o:()=>v});var e=l(4522),c=l(8260),p=l(3668),d=l(3521),u=l(5243);let v=(()=>{class g{constructor(a,_,t){this.http=a,this.requestService=_,this.alertService=t}getToolByInput(a){return new Promise((_,t)=>{switch(a.length){case 5:this.getToolByToolNumber(a).then(i=>{_(i)},i=>{this.alertService.simpleAlert("Erreur","Le serveur outillage \xe0 renvoy\xe9 une erreur :",i),t()}).catch(i=>{console.error(i)});break;case 7:break;case 8:a.startsWith("OT")&&this.getToolByToolNumber(a.substring(a.length-5)).then(i=>{_(i)},i=>{this.alertService.simpleAlert("Erreur","Le serveur outillage \xe0 renvoy\xe9 une erreur :",i),t()}).catch(i=>{console.error(i)});break;default:this.getToolByIdentification(a).then(i=>{_(i)},i=>{this.alertService.simpleAlert("Erreur","Le serveur outillage \xe0 renvoy\xe9 une erreur :",i),t()}).catch(i=>{console.error(i)})}})}getToolById(a){return this.requestService.createGetRequest(`${c.N.toolApi}tools/${a}`)}getToolByToolNumber(a){return new Promise((_,t)=>{this.requestService.createGetRequest(`${c.N.toolApi}tools?sapToolNumber=${a}`).then(i=>{1===i.length?_(i[0]):t(i.length>1?"Il y a plus d'un outillage correspondant en base de donn\xe9e":"aucun outillage trouv\xe9")},i=>{console.log(i),t("Pas de r\xe9ponse du serveur")})})}getToolByIdentification(a){return new Promise((_,t)=>{this.requestService.createGetRequest(`${c.N.toolApi}tools?identification=${a}`).then(i=>{1===i.length?_(i[0]):t(i.length>1?"Il y a plus d'un outillage correspondant en base de donn\xe9e":"aucun outillage trouv\xe9")},i=>{console.log(i),t("Pas de r\xe9ponse du serveur")})})}getAllTools(){return new Promise((a,_)=>{const t=(new e.WM).append("content-type","application/json");this.http.get(`${c.N.apiServer}molding_tools`,{headers:t}).subscribe(i=>{a(i)},i=>{console.log(i),_()})})}getIri(a){return`/api/tools/${a.id}`}createTool(a){const _=a;return _.sapToolNumber=parseInt(a.sapToolNumber.substring(2),10),this.requestService.createPostRequest(c.N.toolApi+"tools",_)}}return g.\u0275fac=function(a){return new(a||g)(p.LFG(e.eN),p.LFG(d.s),p.LFG(u.c))},g.\u0275prov=p.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()},1547:(Z,A,l)=>{l.r(A),l.d(A,{ToolRequestsPageModule:()=>oe});var e=l(3668),c=l(6019),p=l(9133),d=l(2899),u=l(1704),v=l(3050),g=l(4382),C=l(4762),a=l(9814),_=l(3580),t=l(5243),i=l(8190),m=l(1171);function P(n,r){if(1&n&&(e.TgZ(0,"ion-select-option",28),e._uU(1),e.qZA()),2&n){const o=r.$implicit;e.Q6J("value",o),e.xp6(1),e.Oqu(o)}}function T(n,r){if(1&n){const o=e.EpF();e.TgZ(0,"ion-item",25),e.TgZ(1,"ion-label"),e._uU(2),e.qZA(),e.TgZ(3,"ion-select",26),e.NdJ("ionChange",function(f){const S=e.CHM(o).$implicit;return e.oxw().filterChange(S,f)}),e.YNc(4,P,2,2,"ion-select-option",27),e.qZA(),e.qZA()}if(2&n){const o=r.$implicit;e.xp6(2),e.Oqu(o.name),e.xp6(1),e.Q6J("placeholder","Filtre "+o.name),e.xp6(1),e.Q6J("ngForOf",o.options)}}function q(n,r){1&n&&(e.TgZ(0,"th",29),e._uU(1," Statut "),e.qZA())}function R(n,r){if(1&n&&(e.TgZ(0,"td",30),e._uU(1),e.qZA()),2&n){const o=r.$implicit,s=e.oxw();e.Udp("border-left",s.getBorder(o)),e.xp6(1),e.hij(" ",o.statut,"")}}function M(n,r){1&n&&(e.TgZ(0,"th",29),e._uU(1," Num\xe9ro "),e.qZA())}function D(n,r){if(1&n&&(e.TgZ(0,"td",30),e._uU(1),e.qZA()),2&n){const o=r.$implicit;e.xp6(1),e.hij(" ",o.id," ")}}function O(n,r){1&n&&(e.TgZ(0,"th",29),e._uU(1," Outillage "),e.qZA())}function N(n,r){if(1&n&&(e.TgZ(0,"ion-label"),e._uU(1),e.qZA()),2&n){const o=e.oxw().$implicit;e.xp6(1),e.AsE("OT",o.controle.outillage.sapToolNumber," - ",o.controle.outillage.designation,"")}}function b(n,r){if(1&n&&(e.TgZ(0,"ion-label"),e._uU(1),e.qZA()),2&n){const o=e.oxw().$implicit;e.xp6(1),e.AsE("OT",o.maintenance.outillage.sapToolNumber," - ",o.maintenance.outillage.designation,"")}}function E(n,r){if(1&n&&(e.TgZ(0,"td",30),e.YNc(1,N,2,2,"ion-label",31),e.YNc(2,b,2,2,"ion-label",31),e.qZA()),2&n){const o=r.$implicit;e.xp6(1),e.Q6J("ngIf",o.controle),e.xp6(1),e.Q6J("ngIf",o.maintenance)}}function I(n,r){1&n&&(e.TgZ(0,"th",32),e._uU(1," Date demande "),e.qZA())}function B(n,r){if(1&n&&(e.TgZ(0,"td",30),e._uU(1),e.ALo(2,"date"),e.qZA()),2&n){const o=r.$implicit;e.xp6(1),e.hij(" ",e.Dn7(2,1,o.createdAt,"EE dd MMM yyyy","local")," ")}}function L(n,r){1&n&&(e.TgZ(0,"th",29),e._uU(1," Demandeur "),e.qZA())}function F(n,r){if(1&n&&(e.TgZ(0,"ion-label"),e._uU(1),e.qZA()),2&n){const o=e.oxw().$implicit;e.xp6(1),e.Oqu(o.controle.demandeur.username)}}function Y(n,r){if(1&n&&(e.TgZ(0,"ion-label"),e._uU(1),e.qZA()),2&n){const o=e.oxw().$implicit;e.xp6(1),e.Oqu(o.maintenance.demandeur.username)}}function w(n,r){if(1&n){const o=e.EpF();e.TgZ(0,"td",33),e.NdJ("click",function(){return e.CHM(o),e.oxw().userClick()}),e.YNc(1,F,2,1,"ion-label",31),e.YNc(2,Y,2,1,"ion-label",31),e.qZA()}if(2&n){const o=r.$implicit;e.xp6(1),e.Q6J("ngIf",o.controle),e.xp6(1),e.Q6J("ngIf",o.maintenance)}}function $(n,r){1&n&&(e.TgZ(0,"th",32),e._uU(1," Date Besoin "),e.qZA())}function J(n,r){if(1&n&&(e.TgZ(0,"ion-label"),e._uU(1),e.ALo(2,"date"),e.qZA()),2&n){const o=e.oxw().$implicit;e.xp6(1),e.hij(" ",e.Dn7(2,1,o.controle.dateBesoin,"dd MMMM yyyy","local"),"")}}function Q(n,r){if(1&n&&(e.TgZ(0,"ion-label"),e._uU(1),e.ALo(2,"date"),e.qZA()),2&n){const o=e.oxw().$implicit;e.xp6(1),e.hij(" ",e.Dn7(2,1,o.maintenance.dateBesoin,"dd MMMM yyyy","local"),"")}}function G(n,r){if(1&n&&(e.TgZ(0,"td",30),e.YNc(1,J,3,5,"ion-label",31),e.YNc(2,Q,3,5,"ion-label",31),e.qZA()),2&n){const o=r.$implicit;e.xp6(1),e.Q6J("ngIf",o.controle),e.xp6(1),e.Q6J("ngIf",o.maintenance)}}function U(n,r){1&n&&e._UZ(0,"th",29)}function k(n,r){if(1&n){const o=e.EpF();e.TgZ(0,"ion-button",35),e.NdJ("click",function(){e.CHM(o);const f=e.oxw().$implicit;return e.oxw().openControlClick(f)}),e._uU(1," Ouvrir "),e.qZA()}}function W(n,r){if(1&n){const o=e.EpF();e.TgZ(0,"ion-button",35),e.NdJ("click",function(){e.CHM(o);const f=e.oxw().$implicit;return e.oxw().openMaintenanceClick(f)}),e._uU(1," Ouvrir "),e.qZA()}}function K(n,r){if(1&n){const o=e.EpF();e.TgZ(0,"ion-button",35),e.NdJ("click",function(){e.CHM(o);const f=e.oxw().$implicit;return e.oxw().removeRequestClick(f)}),e._UZ(1,"ion-icon",36),e._uU(2," Delete "),e.qZA()}}function j(n,r){if(1&n&&(e.TgZ(0,"td",30),e.YNc(1,k,2,0,"ion-button",34),e.YNc(2,W,2,0,"ion-button",34),e.YNc(3,K,3,0,"ion-button",34),e.qZA()),2&n){const o=r.$implicit,s=e.oxw();e.xp6(1),e.Q6J("ngIf",o.controle),e.xp6(1),e.Q6J("ngIf",o.maintenance),e.xp6(1),e.Q6J("ngIf",s.isAdmin)}}function H(n,r){1&n&&e._UZ(0,"tr",37)}function z(n,r){1&n&&e._UZ(0,"tr",38),2&n&&e.Q6J("@openClose","EN COURS DE REALISATION"===r.$implicit.statut?"open":"")}const V=[{path:"",component:(()=>{class n{constructor(o,s,f,h,S){this.toolRequestService=o,this.alertControleService=s,this.navCtrl=f,this.loaderService=h,this.authGuard=S,this.displayedRequestColumns=["statut","id","tool","createdAt","userCreat","needDate","buttons"],this.tableRequestsDataSource=new d.by,this.isAdmin=!1,this.filterSelectObjects=[],this.filterValues={},this.activeFilters=[],this.filterSelectObjects=[{name:"Statut",columnProp:"statut",options:[]},{name:"Type de demande",columnProp:"type",options:[]}]}ionViewWillEnter(){this.updateRequestList(),this.isAdmin=this.authGuard.isRole(["ROLE_ADMIN"])}ngOnInit(){this.tableRequestsDataSource.filterPredicate=this.createFilter()}createFilter(){return(s,f)=>{const h=JSON.parse(f);let S=!1;for(const x in h)x&&(""!==h[x].toString()?S=!0:delete h[x]);let y=!1;if(S){for(const x in h)x&&h[x].trim().toLowerCase().split(" ").forEach(ne=>{-1!==s[x].toString().toLowerCase().indexOf(ne)&&S&&(y=!0)});return y}return!0}}resetFilters(){this.filterValues={},this.filterSelectObjects.forEach((o,s)=>{o.modelValue=void 0}),this.activeFilters.forEach(o=>{o.value=""}),this.tableRequestsDataSource.filter=""}getFilterObject(o,s){console.log(o,s);const f=[];return o.filter(h=>(f.includes(h[s])||f.push(h[s]),h)),f}updateRequestList(){return(0,C.mG)(this,void 0,void 0,function*(){this.loaderService.startLoading("Pateinter pendant le chargement des demandes"),this.toolRequestService.getToolRequests().then(o=>{this.tableRequestsDataSource.data=o,this.filterSelectObjects.filter(s=>{console.log(s),s.options=this.getFilterObject(this.tableRequestsDataSource.data,s.columnProp)})}).catch(o=>{console.error(o),this.alertControleService.simpleAlert("Erreur","Mise \xe0 jour de la liste","La liste des requ\xeates ne s'est pas mise \xe0 jour correctement ")}).finally(()=>{this.loaderService.stopLoading()})})}userClick(){}openControlClick(o){this.navCtrl.navigateForward("tooling/3D-tool/"+o.id)}openMaintenanceClick(o){this.navCtrl.navigateForward("tooling/repair-tool/"+o.id)}getBorder(o){return"controle"===this.toolRequestService.getType(o)?"4px lawngreen solid":"maintenance"===this.toolRequestService.getType(o)?"4px yellow solid":void 0}filterChange(o,s){console.log(o,s),this.activeFilters.push(s.target),this.filterValues[o.columnProp]=s.target.value.trim(),console.log(this.filterValues[o.columnProp]),console.log(JSON.stringify(this.filterValues)),this.tableRequestsDataSource.filter=JSON.stringify(this.filterValues)}filterRequestTypeChanged(o){this.tableRequestsDataSource.filter=o.target.value.trim().toLowerCase(),console.log(o)}filterRequestStatusChanged(o){this.tableRequestsDataSource.filter=o.target.value.trim().toLowerCase(),console.log(o)}removeRequestClick(o){this.toolRequestService.removeRequest(o).then(()=>{this.updateRequestList()})}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(_.C),e.Y36(t.c),e.Y36(u.SH),e.Y36(i.b),e.Y36(m.p))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-tool-requests"]],decls:44,vars:5,consts:[["color","dark"],["multi","",1,"example-headers-align"],["togglePosition","before"],["slot","start","name","filter-outline"],[1,"filter-toolbar"],["aria-expanded","true",1,"filters"],["class","filter-item ion-margin",4,"ngFor","ngForOf"],["slot","end",3,"click"],[1,"table","ion-justify-content-center","ion-align-items-center"],["mat-table","","fixedLayout","true","matSort","","matSortActive","needDate",1,"mat-elevation-z8",3,"dataSource"],["table",""],["matColumnDef","statut"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",3,"border-left",4,"matCellDef"],["matColumnDef","id"],["mat-cell","",4,"matCellDef"],["matColumnDef","tool"],["matColumnDef","createdAt"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","userCreat"],["mat-cell","",3,"click",4,"matCellDef"],["matColumnDef","needDate"],["matColumnDef","buttons"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"filter-item","ion-margin"],["multiple","false",1,"filter",3,"placeholder","ionChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["mat-header-cell",""],["mat-cell",""],[4,"ngIf"],["mat-header-cell","","mat-sort-header",""],["mat-cell","",3,"click"],["size","small",3,"click",4,"ngIf"],["size","small",3,"click"],["slot","end","name","trash-outline"],["mat-header-row",""],["mat-row",""]],template:function(o,s){1&o&&(e.TgZ(0,"ion-header"),e.TgZ(1,"ion-toolbar",0),e.TgZ(2,"ion-title"),e._uU(3,"Liste des demandes"),e.qZA(),e.qZA(),e.TgZ(4,"ion-toolbar"),e.TgZ(5,"mat-accordion",1),e.TgZ(6,"mat-expansion-panel",2),e.TgZ(7,"mat-expansion-panel-header"),e.TgZ(8,"mat-panel-title"),e._UZ(9,"ion-icon",3),e._uU(10," Filtres "),e.qZA(),e._UZ(11,"mat-panel-description"),e.qZA(),e.TgZ(12,"ion-toolbar",4),e.TgZ(13,"div",5),e.YNc(14,T,5,3,"ion-item",6),e.qZA(),e.TgZ(15,"ion-button",7),e.NdJ("click",function(){return s.resetFilters()}),e._uU(16," Supprimer les filtres "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(17,"ion-content"),e.TgZ(18,"div",8),e.TgZ(19,"table",9,10),e.ynx(21,11),e.YNc(22,q,2,0,"th",12),e.YNc(23,R,2,3,"td",13),e.BQk(),e.ynx(24,14),e.YNc(25,M,2,0,"th",12),e.YNc(26,D,2,1,"td",15),e.BQk(),e.ynx(27,16),e.YNc(28,O,2,0,"th",12),e.YNc(29,E,3,2,"td",15),e.BQk(),e.ynx(30,17),e.YNc(31,I,2,0,"th",18),e.YNc(32,B,3,5,"td",15),e.BQk(),e.ynx(33,19),e.YNc(34,L,2,0,"th",12),e.YNc(35,w,3,2,"td",20),e.BQk(),e.ynx(36,21),e.YNc(37,$,2,0,"th",18),e.YNc(38,G,3,2,"td",15),e.BQk(),e.ynx(39,22),e.YNc(40,U,1,0,"th",12),e.YNc(41,j,4,3,"td",15),e.BQk(),e.YNc(42,H,1,0,"tr",23),e.YNc(43,z,1,1,"tr",24),e.qZA(),e.qZA(),e.qZA()),2&o&&(e.xp6(14),e.Q6J("ngForOf",s.filterSelectObjects),e.xp6(5),e.Q6J("dataSource",s.tableRequestsDataSource),e.xp6(23),e.Q6J("matHeaderRowDef",s.displayedRequestColumns)("matHeaderRowDefSticky",!0),e.xp6(1),e.Q6J("matRowDefColumns",s.displayedRequestColumns))},directives:[u.Gu,u.sr,u.wd,v.pp,v.ib,v.yz,v.yK,u.gu,v.u4,c.sg,u.YG,u.W2,d.BZ,d.w1,d.fO,d.Dz,d.as,d.nj,u.Ie,u.Q$,u.t9,u.QI,u.n0,d.ge,d.ev,c.O5,d.XQ,d.Gk],pipes:[c.uU],styles:[".mat-row[_ngcontent-%COMP%]{height:auto}.mat-cell[_ngcontent-%COMP%]{padding:8px 16px 8px 0}.table[_ngcontent-%COMP%]{display:flex;padding:14px}.mat-table[_ngcontent-%COMP%]{width:100%}.mat-row[_ngcontent-%COMP%]:hover   .mat-cell[_ngcontent-%COMP%]{border-color:currentColor}.filter-item[_ngcontent-%COMP%]{width:auto}.filters[_ngcontent-%COMP%]{display:flex}"],data:{animation:[(0,a.X$)("openClose",[(0,a.SB)("open",(0,a.oB)({backgroundColor:"DarkOrange",opacity:"0.7"}))])]}}),n})()}];let X=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[g.Bz.forChild(V)],g.Bz]}),n})();var ee=l(9372),te=l(9749);let oe=(()=>{class n{constructor(){(0,c.qS)(te.Z)}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[{provide:e.soG,useValue:"fr-FR"}],imports:[[c.ez,p.u5,u.Pc,X,ee.A,d.p0,v.To]]}),n})()}}]);
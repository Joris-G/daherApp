"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5641],{5641:(G,g,s)=>{s.r(g),s.d(g,{MaintenanceReparationPageModule:()=>j});var m=s(6019),r=s(9133),a=s(1704),p=s(4382),_=s(3172),e=s(3668),q=s(3580),A=s(6607),Z=s(5243),h=s(8190),f=s(1171),T=s(7624),R=s(9667),v=s(4762);function M(o,i){1&o&&e._UZ(0,"ion-icon",19)}function I(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"ion-content"),e.TgZ(1,"ion-datetime",20,21),e.NdJ("ngModelChange",function(){e.CHM(t);const l=e.MAs(2),c=e.oxw();return c.maintenanceItem.delaiAction=c.dateValue(l.value)}),e.TgZ(3,"div",22),e._uU(4,"Date butoir demand\xe9e"),e.qZA(),e.qZA(),e.qZA()}}function C(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"ion-button",23),e.NdJ("click",function(){return e.CHM(t),e.oxw().validateItemClick()}),e._UZ(1,"ion-icon",24),e._uU(2," Valider Item "),e.qZA()}if(2&o){const t=e.oxw();e.Q6J("disabled",t.maintenanceItemForm.invalid)}}function U(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"ion-content"),e.TgZ(1,"ion-datetime",20,25),e.NdJ("ngModelChange",function(){e.CHM(t);const l=e.MAs(2),c=e.oxw(2);return c.maintenanceItem.dateReal=c.dateValue(l.value)}),e.TgZ(3,"div",22),e._uU(4,"Date de r\xe9alisation de la maintenance"),e.qZA(),e.qZA(),e.qZA()}}function w(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"ion-button",23),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).validateRealMaintClick()}),e._UZ(1,"ion-icon",24),e._uU(2," Effectu\xe9e "),e.qZA()}if(2&o){const t=e.oxw(2);e.Q6J("disabled",t.maintenanceItemForm.invalid)}}function x(o,i){if(1&o&&(e.TgZ(0,"ion-item-group"),e.TgZ(1,"ion-item-divider"),e.TgZ(2,"ion-label"),e._uU(3,"R\xe9alisation"),e.qZA(),e.qZA(),e.TgZ(4,"ion-item",10),e.TgZ(5,"ion-label"),e._uU(6,"Date de r\xe9alisation"),e.qZA(),e._UZ(7,"ion-icon",11),e.TgZ(8,"ion-text",12),e._uU(9),e.ALo(10,"date"),e.qZA(),e.TgZ(11,"ion-modal",13),e.YNc(12,U,5,0,"ng-template"),e.qZA(),e.qZA(),e.TgZ(13,"ion-buttons",14),e.YNc(14,w,3,1,"ion-button",15),e.qZA(),e.qZA()),2&o){const t=e.oxw();e.xp6(4),e.Q6J("id","open-date-real"+t.maintenanceItem.rep),e.xp6(5),e.hij(" ",e.xi3(10,4,t.maintenanceItem.dateReal,"dd/MM/yyyy"),""),e.xp6(2),e.Q6J("trigger","open-date-real"+t.maintenanceItem.rep),e.xp6(3),e.Q6J("ngIf",!t.maintenanceRealisee)}}let y=(()=>{class o{constructor(t,n){this.alertService=t,this.alertController=n,this.evValidateItem=new e.vpe,this.evRemoveItem=new e.vpe,this.validate=!1,this.maintenanceRealisee=!1}ngOnChanges(t){t.maintenanceItem&&console.log("onchange")}ionViewWillEnter(){}ngOnInit(){console.log("onInit"),this.validate=!!this.maintenanceItem.id,this.maintenanceRealisee=!!this.maintenanceItem.dateReal,this.maintenanceItemForm=new r.cw({nonConformite:new r.NI(this.maintenanceItem.nonConformite),actionsCorrectives:new r.NI(this.maintenanceItem.actionsCorrectives),delaiAction:new r.NI(this.maintenanceItem.delaiAction),dateReal:new r.NI(this.maintenanceItem.dateReal)})}dateValue(t){return new Date(t)}validateItemClick(){this.evValidateItem.emit(this.maintenanceItem),this.validate=!0}removeItemClick(){return(0,v.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({cssClass:"my-custom-class",header:"Alerte confirmation",message:"Message <strong>Et\xeas vous s\xfbr de vouloir supprimer cette maintenance?</strong>!!!",buttons:[{text:"Non",role:"cancel",cssClass:"secondary",id:"cancel-button",handler:()=>{}},{text:"OUI",id:"confirm-button",handler:n=>{this.confirmRemoveItem()}}]})).present()})}confirmRemoveItem(){this.evRemoveItem.emit(this.maintenanceItem),this.validate=!0}validateRealMaintClick(){this.maintenanceRealisee=!0}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(Z.c),e.Y36(a.Br))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-maintenance-item"]],inputs:{maintenanceItem:"maintenanceItem",canUpdate:"canUpdate"},outputs:{evValidateItem:"evValidateItem",evRemoveItem:"evRemoveItem"},features:[e.TTD],decls:39,vars:12,consts:[[1,"ion-margin-top",3,"color"],[1,"flex-row"],["color","secondary"],["name","checkmark","color","success","size","large",4,"ngIf"],[3,"formGroup"],["color","danger"],["autoGrow","","required","","type","text","formControlName","nonConformite",3,"change"],["nonConformite",""],["autoGrow","","required","","type","text","placeholder","","formControlName","actionsCorrectives",3,"change"],["actionsCorrectives",""],["button","",3,"id"],["slot","end","icon","calendar-outline"],["slot","end"],[3,"trigger"],["slot","primary"],["slot","start",3,"disabled","click",4,"ngIf"],["slot","end",3,"click"],["slot","start","name","trash-outline"],[4,"ngIf"],["name","checkmark","color","success","size","large"],["presentation","date","formControlName","delaiAction","display-format","DD.MM.YYYY",3,"ngModelChange"],["delaiAction",""],["slot","title"],["slot","start",3,"disabled","click"],["slot","start","name","checkmark"],["dateReal",""]],template:function(t,n){if(1&t){const l=e.EpF();e.TgZ(0,"ion-card",0),e.TgZ(1,"ion-card-header",1),e.TgZ(2,"ion-card-title",2),e._uU(3),e.qZA(),e.YNc(4,M,1,0,"ion-icon",3),e.qZA(),e.TgZ(5,"ion-card-content"),e.TgZ(6,"form",4),e.TgZ(7,"ion-item-divider"),e.TgZ(8,"ion-label"),e._uU(9,"Description"),e.qZA(),e.qZA(),e.TgZ(10,"ion-item"),e.TgZ(11,"ion-label"),e._uU(12,"Non conformit\xe9 "),e.TgZ(13,"ion-text",5),e._uU(14,"*"),e.qZA(),e.qZA(),e.TgZ(15,"ion-textarea",6,7),e.NdJ("change",function(){e.CHM(l);const u=e.MAs(16);return n.maintenanceItem.nonConformite=u.value}),e.qZA(),e.qZA(),e.TgZ(17,"ion-item"),e.TgZ(18,"ion-label"),e._uU(19,"Action corrective "),e.TgZ(20,"ion-text",5),e._uU(21,"*"),e.qZA(),e.qZA(),e.TgZ(22,"ion-textarea",8,9),e.NdJ("change",function(){e.CHM(l);const u=e.MAs(23);return n.maintenanceItem.actionsCorrectives=u.value}),e.qZA(),e.qZA(),e.TgZ(24,"ion-item",10),e.TgZ(25,"ion-label"),e._uU(26,"Date butoir demand\xe9e"),e.qZA(),e._UZ(27,"ion-icon",11),e.TgZ(28,"ion-text",12),e._uU(29),e.ALo(30,"date"),e.qZA(),e.TgZ(31,"ion-modal",13),e.YNc(32,I,5,0,"ng-template"),e.qZA(),e.qZA(),e.TgZ(33,"ion-buttons",14),e.YNc(34,C,3,1,"ion-button",15),e.TgZ(35,"ion-button",16),e.NdJ("click",function(){return n.removeItemClick()}),e._UZ(36,"ion-icon",17),e._uU(37," Supprimer Item "),e.qZA(),e.qZA(),e.YNc(38,x,15,7,"ion-item-group",18),e.qZA(),e.qZA(),e.qZA()}2&t&&(e.Q6J("color",n.maintenanceRealisee?"success":""),e.xp6(3),e.hij("Maintenance n\xb0",n.maintenanceItem.rep," "),e.xp6(1),e.Q6J("ngIf",n.validate),e.xp6(2),e.Q6J("formGroup",n.maintenanceItemForm),e.xp6(18),e.Q6J("id","open-date-butoir"+n.maintenanceItem.rep),e.xp6(5),e.hij(" ",e.xi3(30,9,n.maintenanceItem.delaiAction,"dd/MM/yyyy"),""),e.xp6(2),e.Q6J("trigger","open-date-butoir"+n.maintenanceItem.rep),e.xp6(3),e.Q6J("ngIf",!n.validate),e.xp6(4),e.Q6J("ngIf",n.canUpdate))},directives:[a.PM,a.Zi,a.Dq,m.O5,a.FN,r._Y,r.JL,r.sg,a.rH,a.Q$,a.Ie,a.yW,a.g2,a.j9,r.Q7,r.JJ,r.u,a.gu,a.ki,a.Sm,a.YG,a.W2,a.x4,a.QI,a.Ub],pipes:[m.uU],styles:[".flex-row[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between}ion-card[_ngcontent-%COMP%]{width:100%}"]}),o})();const E=["groupTest"];function N(o,i){if(1&o&&(e.TgZ(0,"ion-row"),e.TgZ(1,"ion-col",9),e._uU(2),e.qZA(),e.TgZ(3,"ion-col",7),e._uU(4),e.qZA(),e.TgZ(5,"ion-col",7),e._uU(6),e.qZA(),e.TgZ(7,"ion-col",9),e._uU(8),e.qZA(),e.TgZ(9,"ion-col",9),e._uU(10),e.ALo(11,"date"),e.qZA(),e.TgZ(12,"ion-col",9),e._uU(13),e.ALo(14,"date"),e.qZA(),e.TgZ(15,"ion-col",9),e._uU(16),e.qZA(),e.qZA()),2&o){const t=i.$implicit;e.xp6(2),e.Oqu(t.rep),e.xp6(2),e.Oqu(t.nonConformite),e.xp6(2),e.Oqu(t.actionsCorrectives),e.xp6(2),e.Oqu(t.respo),e.xp6(2),e.Oqu(e.xi3(11,7,t.delaiAction,"dd/MM/yy")),e.xp6(3),e.Oqu(e.xi3(14,10,t.dateReal,"dd/MM/yy")),e.xp6(3),e.Oqu(t.userReal)}}let S=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-spec-maintenance-reparation"]],viewQuery:function(t,n){if(1&t&&e.Gf(E,5),2&t){let l;e.iGM(l=e.CRH())&&(n.groupTest=l.first)}},inputs:{toolRequest:"toolRequest"},decls:91,vars:9,consts:[["id","toExport",1,"pdf","page"],["fixed",""],["size","8",1,"border"],["size","2",1,"border"],["fixed","",1,"table"],["size","7",1,"border"],["size","12"],["size","3",1,"border"],["size","6"],["size","1",1,"border"],[4,"ngFor","ngForOf"],["fixed","",1,"border","footer"],["size","4"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"ion-header"),e.TgZ(2,"ion-grid",1),e.TgZ(3,"ion-row"),e.TgZ(4,"ion-col",2),e._uU(5,"CAUSE DE LA DEMANDE : cocher la case correspondante"),e.qZA(),e.qZA(),e.TgZ(6,"ion-row"),e.TgZ(7,"ion-col",3),e._uU(8,"Qualit\xe9"),e.qZA(),e.TgZ(9,"ion-col",3),e._uU(10,"Arr\xeat de chaine"),e.qZA(),e.TgZ(11,"ion-col",3),e._uU(12,"D\xe9v"),e.qZA(),e.TgZ(13,"ion-col",3),e._uU(14,"amelio continue"),e.qZA(),e.qZA(),e.TgZ(15,"ion-row"),e._UZ(16,"ion-col",3),e._UZ(17,"ion-col",3),e._UZ(18,"ion-col",3),e._UZ(19,"ion-col",3),e.qZA(),e.qZA(),e.TgZ(20,"ion-grid",4),e.TgZ(21,"ion-row"),e.TgZ(22,"ion-col",3),e._uU(23,"Direction Qualit\xe9"),e.qZA(),e.TgZ(24,"ion-col",5),e.TgZ(25,"ion-row"),e._UZ(26,"ion-col",6),e.qZA(),e.TgZ(27,"ion-row"),e.TgZ(28,"ion-col",6),e._uU(29," DEMANDE D'ACTION CORRECTIVE/REPARATION OUTILLAGE"),e.qZA(),e.qZA(),e.TgZ(30,"ion-row"),e._UZ(31,"ion-col",6),e.qZA(),e.TgZ(32,"ion-row"),e.TgZ(33,"ion-col",6),e._uU(34),e.qZA(),e.qZA(),e.TgZ(35,"ion-row"),e.TgZ(36,"ion-col",6),e._uU(37),e.qZA(),e.qZA(),e.qZA(),e.TgZ(38,"ion-col",7),e.TgZ(39,"ion-row"),e.TgZ(40,"ion-col",6),e._uU(41,"Diffusion: Service outillage"),e.qZA(),e.qZA(),e.TgZ(42,"ion-row"),e._UZ(43,"ion-col",6),e.qZA(),e.TgZ(44,"ion-row"),e.TgZ(45,"ion-col",6),e._uU(46),e.qZA(),e.qZA(),e.TgZ(47,"ion-row"),e.TgZ(48,"ion-col",8),e._uU(49),e.qZA(),e.TgZ(50,"ion-col",8),e._uU(51,"Sigle : "),e.qZA(),e.qZA(),e.TgZ(52,"ion-row"),e.TgZ(53,"ion-col",6),e._uU(54),e.ALo(55,"date"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(56,"ion-content"),e.TgZ(57,"ion-grid",4),e.TgZ(58,"ion-row"),e.TgZ(59,"ion-col",9),e._uU(60,"Rep."),e.qZA(),e.TgZ(61,"ion-col",7),e._uU(62,"NON CONFORMITES"),e.qZA(),e.TgZ(63,"ion-col",7),e._uU(64,"ACTIONS CORRECTIVES"),e.qZA(),e.TgZ(65,"ion-col",9),e._uU(66,"Responsable A.C."),e.qZA(),e.TgZ(67,"ion-col",9),e._uU(68,"D\xe9lai A.C."),e.qZA(),e.TgZ(69,"ion-col",7),e.TgZ(70,"ion-row"),e.TgZ(71,"ion-col",6),e._uU(72,"R\xe9alisation"),e.qZA(),e.qZA(),e.TgZ(73,"ion-row"),e.TgZ(74,"ion-col",8),e._uU(75,"Date"),e.qZA(),e.TgZ(76,"ion-col",8),e._uU(77,"Visa"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.YNc(78,N,17,13,"ion-row",10),e.qZA(),e.qZA(),e.TgZ(79,"ion-footer"),e.TgZ(80,"ion-grid",11),e.TgZ(81,"ion-row"),e.TgZ(82,"ion-col",12),e._uU(83,"Attestation de conformit\xe9 : Visa Qualit\xe9 "),e.qZA(),e.TgZ(84,"ion-col",12),e._uU(85,"Date :"),e.qZA(),e.TgZ(86,"ion-col",12),e._uU(87,"Archivage : Ligne Outillage"),e.qZA(),e.qZA(),e.TgZ(88,"ion-row"),e.TgZ(89,"ion-col",6),e._uU(90,"Apr\xe8s r\xe9alisation des travaux, attestation de conformit\xe9 et archivage DIAE/RO, retour au demandeur"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(34),e.hij(" D\xe9signation outillage: ",null==n.toolRequest.maintenance||null==n.toolRequest.maintenance.outillage?null:n.toolRequest.maintenance.outillage.designation,""),e.xp6(3),e.hij(" R\xe9f\xe9rence outillage: ",null==n.toolRequest.maintenance||null==n.toolRequest.maintenance.outillage?null:n.toolRequest.maintenance.outillage.identification,""),e.xp6(9),e.hij("N\xb0 d'OT SAP : OT",null==n.toolRequest.maintenance||null==n.toolRequest.maintenance.outillage?null:n.toolRequest.maintenance.outillage.sapToolNumber,""),e.xp6(3),e.hij("Emetteur : ",n.toolRequest.maintenance.userCreat.username,""),e.xp6(5),e.hij("Le : ",e.xi3(55,6,n.toolRequest.createdAt,"dd/MM/yyyy"),""),e.xp6(24),e.Q6J("ngForOf",n.toolRequest.maintenance.itemActionCorrective))},directives:[a.Gu,a.jY,a.Nd,a.wI,a.W2,m.sg,a.fr],pipes:[m.uU],styles:[".page[_ngcontent-%COMP%]{width:297mm;height:210mm;background-color:#fff;font-feature-settings:normal;font-variant-numeric:normal}.border[_ngcontent-%COMP%]{border:solid 1px}ion-grid[_ngcontent-%COMP%]{width:100%}"]}),o})();const b=["statut"];function D(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"app-maintenance-item",18),e.NdJ("evValidateItem",function(l){const u=e.CHM(t).$implicit;return e.oxw().onValidateItem(l,u)})("evRemoveItem",function(l){const u=e.CHM(t).$implicit;return e.oxw().onRemoveItem(l,u)}),e.qZA()}if(2&o){const t=i.$implicit,n=e.oxw();e.Q6J("maintenanceItem",t)("canUpdate",n.canUpDate)}}function O(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"ion-content"),e.TgZ(1,"ion-datetime",19,20),e.NdJ("ngModelChange",function(){e.CHM(t);const l=e.MAs(2),c=e.oxw();return c.toolRequest.maintenance.dateBesoin=c.dateValue(l.value)}),e.TgZ(3,"div",21),e._uU(4,"Date butoir demand\xe9e"),e.qZA(),e.qZA(),e.qZA()}}function P(o,i){if(1&o&&e._UZ(0,"app-spec-maintenance-reparation",22),2&o){const t=e.oxw();e.Q6J("toolRequest",t.toolRequest)}}const J=[{path:"",component:(()=>{class o{constructor(t,n,l,c,u,d,z){this.toolRequestService=t,this.authService=n,this.alertService=l,this.navCtrl=c,this.loadingService=u,this.roleGuard=d,this.activatedRoute=z,this.canUpDate=!1,this.page={title:"Maintenance et R\xe9paration"}}ionViewWillEnter(){const t=this.activatedRoute.snapshot.paramMap.get("id");t?(this.loadingService.startLoading("Patienter pendant le chargement"),this.loadMaintenanceData(t)):this.canUpDate=!1}ngOnInit(){this.maintRepForm=new r.cw({outillage:new r.NI,needDate:new r.NI,equipment:new r.NI,image:new r.NI,fichier:new r.NI,sigle:new r.NI,userValideur:new r.NI,dateValid:new r.NI}),this.toolRequest={createdAt:new Date,dateBesoin:new Date,demandeur:this.authService.authUser,toolSAP:null,type:_.x.maintenance,maintenance:{dateBesoin:null,userCreat:this.authService.authUser,outillage:null,equipement:null,image:"",fichier:"",sigle:"",userValideur:null,dateValid:new Date,itemActionCorrective:[],rep:[]}}}loadMaintenanceData(t){this.toolRequest=null,this.toolRequestService.getToolRequest(t).then(n=>{this.toolRequestService.getMaintenance(n.maintenance.id).then(l=>{this.toolRequest=n,this.toolRequest.maintenance=l,this.toolRequest.maintenance.itemActionCorrective.map((c,u)=>c.rep=u+1),this.maintRepForm.patchValue({outillage:this.toolRequest.maintenance.outillage,needDate:this.toolRequest.maintenance.dateBesoin,equipment:this.toolRequest.maintenance.equipement,image:this.toolRequest.maintenance.image,fichier:this.toolRequest.maintenance.fichier,sigle:this.toolRequest.maintenance.sigle,userValideur:this.toolRequest.maintenance.userReal,dateValid:this.toolRequest.maintenance.dateValid}),this.page.title="Modification demande de maintenance : ID "+this.toolRequest.id,"NOUVELLE"===this.toolRequest.statut?(this.canUpDate=!0,console.log(this.canUpDate),this.canManage=this.roleGuard.isRole(["ROLE_RESP_OUTIL","ROLE_ADMIN"])):(this.canUpDate=this.roleGuard.isRole(["ROLE_RESP_OUTIL","ROLE_ADMIN"]),this.canManage=this.canUpDate,console.log(this.canUpDate)),this.loadingService.stopLoading()})},()=>{this.navCtrl.back()}).catch(n=>{console.error(n)})}dateValue(t){return new Date(t)}onValidateItem(t,n){console.log(this.toolRequest.maintenance.itemActionCorrective)}onRemoveItem(t,n){this.toolRequest.maintenance.itemActionCorrective.splice(n.rep-1,1),console.log(this.toolRequest.maintenance.itemActionCorrective)}upDateSpec(){this.toolRequest.maintenance.dateBesoin=this.maintRepForm.controls.dateBesoin.value,this.toolRequest.maintenance.image=this.maintRepForm.controls.image.value,this.toolRequest.maintenance.fichier=this.maintRepForm.controls.fichier.value}addMaintenanceItem(){this.toolRequest.maintenance.itemActionCorrective.push({rep:this.toolRequest.maintenance.itemActionCorrective.length+1}),console.log(this.toolRequest.maintenance.itemActionCorrective)}submitMaintenanceForm(){this.toolRequestService.createMaintenanceRequest(this.toolRequest.maintenance).then(()=>{this.maintRepForm.reset(),this.alertService.simpleAlert("Message de l'application","Cr\xe9ation d'une demande","La demande a bien \xe9t\xe9 cr\xe9\xe9e. Vous allez \xeatre redirig\xe9 vers la liste des demandes").then(()=>{this.navCtrl.navigateForward("tooling/tool-request-list")})},()=>{console.log("reject")}).catch(t=>{console.error(t)})}updateForm(){this.loadingService.startLoading("Patienter pendant la mise \xe0 jour de la demande"),this.toolRequestService.updateRequest(this.toolRequest).then(t=>{console.log(t),this.toolRequestService.updateMainteanceRequest(this.toolRequest).then(()=>{this.maintRepForm.reset(),this.loadingService.stopLoading(),this.alertService.simpleAlert("Message de l'application","Mise \xe0 jour d'une demande","La demande a bien \xe9t\xe9 modifi\xe9e. Vous allez \xeatre redirig\xe9 vers la liste des demandes").then(()=>{this.navCtrl.navigateForward("tooling/tool-request-list")})}).catch(n=>{this.alertService.simpleAlert("Erreur","Mise \xe0 jour d'une demande","La demande n'a pas pu \xeatre modifi\xe9e. V\xe9rifiez les donn\xe9es"),console.error(n)})})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(q.C),e.Y36(A.e),e.Y36(Z.c),e.Y36(a.SH),e.Y36(h.b),e.Y36(f.p),e.Y36(p.gz))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-maintenance-reparation"]],viewQuery:function(t,n){if(1&t&&e.Gf(b,5),2&t){let l;e.iGM(l=e.CRH())&&(n.ctrlStatut=l.first)}},decls:34,vars:13,consts:[["color","dark"],["scrollY","false",3,"fullscreen"],[1,"content"],[1,"main-form",3,"formGroup"],["color","light","padding",""],[1,"ion-text-uppercase"],[3,"tool","evOnToolChange"],["color","light"],["color","light",1,"flex-row"],["size","small",3,"click"],["slot","start","name","add"],[3,"maintenanceItem","canUpdate","evValidateItem","evRemoveItem",4,"ngFor","ngForOf"],["button","","id","open-date-besoin"],["slot","end","icon","calendar-outline"],["slot","end"],["trigger","open-date-besoin"],[3,"toolRequest",4,"ngIf"],[3,"canManage","canUpdate","form","evStatusChange","evSubmit","evUpdate","evAffectationChange"],[3,"maintenanceItem","canUpdate","evValidateItem","evRemoveItem"],["presentation","date","formControlName","needDate","display-format","DD.MM.YYYY",3,"ngModelChange"],["popoverDatetime2",""],["slot","title"],[3,"toolRequest"]],template:function(t,n){1&t&&(e.TgZ(0,"ion-header"),e.TgZ(1,"ion-toolbar",0),e.TgZ(2,"ion-title"),e._uU(3),e.qZA(),e.qZA(),e.qZA(),e.TgZ(4,"ion-content",1),e.TgZ(5,"div",2),e.TgZ(6,"form",3),e.TgZ(7,"ion-card",4),e.TgZ(8,"ion-card-header"),e.TgZ(9,"ion-card-title",5),e._uU(10,"L'outillage"),e.qZA(),e.qZA(),e.TgZ(11,"app-tool-input",6),e.NdJ("evOnToolChange",function(c){return n.toolRequest.maintenance.outillage=c}),e.qZA(),e.qZA(),e.TgZ(12,"ion-card",7),e.TgZ(13,"ion-card-header",8),e.TgZ(14,"ion-title",5),e._uU(15,"La maintenance"),e.qZA(),e.TgZ(16,"ion-button",9),e.NdJ("click",function(){return n.addMaintenanceItem()}),e._UZ(17,"ion-icon",10),e._uU(18," Ajouter maintenance "),e.qZA(),e.qZA(),e.TgZ(19,"ion-card-content"),e.YNc(20,D,1,2,"app-maintenance-item",11),e.qZA(),e.qZA(),e.TgZ(21,"ion-card"),e.TgZ(22,"ion-item",12),e.TgZ(23,"ion-label"),e._uU(24,"Date butoir demand\xe9e"),e.qZA(),e._UZ(25,"ion-icon",13),e.TgZ(26,"ion-text",14),e._uU(27),e.ALo(28,"date"),e.qZA(),e.TgZ(29,"ion-modal",15),e.YNc(30,O,5,0,"ng-template"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.YNc(31,P,1,1,"app-spec-maintenance-reparation",16),e.qZA(),e.qZA(),e.TgZ(32,"ion-footer"),e.TgZ(33,"app-tool-request-footer",17),e.NdJ("evStatusChange",function(c){return n.toolRequest.statut=c})("evSubmit",function(){return n.submitMaintenanceForm()})("evUpdate",function(){return n.updateForm()})("evAffectationChange",function(c){return n.toolRequest.groupeAffectation=c}),e.qZA(),e.qZA()),2&t&&(e.xp6(3),e.Oqu(n.page.title),e.xp6(1),e.Q6J("fullscreen",!1),e.xp6(2),e.Q6J("formGroup",n.maintRepForm),e.xp6(5),e.Q6J("tool",null==n.toolRequest||null==n.toolRequest.maintenance?null:n.toolRequest.maintenance.outillage),e.xp6(9),e.Q6J("ngForOf",null==n.toolRequest||null==n.toolRequest.maintenance?null:n.toolRequest.maintenance.itemActionCorrective),e.xp6(7),e.hij(" ",e.xi3(28,10,null==n.toolRequest||null==n.toolRequest.maintenance?null:n.toolRequest.maintenance.dateBesoin,"dd/MM/yyyy"),""),e.xp6(4),e.Q6J("ngIf",n.toolRequest),e.xp6(2),e.Q6J("canManage",n.canManage)("canUpdate",n.canUpDate)("form",n.maintRepForm))},directives:[a.Gu,a.sr,a.wd,a.W2,r._Y,r.JL,r.sg,a.PM,a.Zi,a.Dq,T.b,a.YG,a.gu,a.FN,m.sg,a.Ie,a.Q$,a.yW,a.ki,m.O5,a.fr,R.Z,y,a.x4,a.QI,r.JJ,r.u,S],pipes:[m.uU],styles:[".flex-row[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between}.content[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-evenly;overflow:hidden}.main-form[_ngcontent-%COMP%]{overflow-y:auto}"]}),o})()}];let F=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[p.Bz.forChild(J)],p.Bz]}),o})(),V=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[m.ez,r.u5,a.Pc,r.UX]]}),o})(),Q=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[m.ez,a.Pc]]}),o})();var Y=s(1444),L=s(6112);let j=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[m.ez,r.u5,r.UX,a.Pc,F,V,Q,Y.O,L.y]]}),o})()}}]);
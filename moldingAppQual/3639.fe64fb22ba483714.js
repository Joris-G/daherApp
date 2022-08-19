"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3639],{3639:(Ce,f,l)=>{l.r(f),l.d(f,{AdminModule:()=>Ue});var u=l(780),A=l(5786),e=l(5e3),o=l(9928),C=l(3919),Z=l(520),T=l(8393);let v=(()=>{class t{constructor(n,s){this.socket=n,this.http=s,this.httpHeaders=(new Z.WM).append("Access-Control-Allow-Origin","*"),Notification.requestPermission().then(a=>{console.log(a),"granted"===a&&this.socket.on("notification",c=>{new Notification("Notification depuis le serveur",{body:c.message,icon:"assets/icons/icon-72x72.png"})})})}newNotif(){this.http.post("http://localhost:3000/send-notification",{message:"testmessage"},{headers:this.httpHeaders}).subscribe(n=>{})}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(T.sk),e.LFG(Z.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),b=(()=>{class t{constructor(n,s,a,c){this.authService=n,this.router=s,this.notificationsService=a,this.socket=c}ngOnDestroy(){this.socket.disconnect()}ionViewDidLeave(){console.log("view did leave"),this.socket.disconnect()}ngOnInit(){this.user=this.authService.authUser}logoutClick(){this.authService.logout().subscribe(()=>{this.router.navigate(["/login"])})}navigateHome(){this.router.navigate(["/home"])}notifyClick(){console.log("notify click"),this.notificationsService.newNotif()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(C.e),e.Y36(u.F0),e.Y36(v),e.Y36(T.sk))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-shared-admin-header"]],decls:17,vars:2,consts:[[3,"translucent"],["color","primary"],["slot","start"],["color","light"],["src","assets/images/logoDaherFondBleu.png",1,"ion-hide-sm-down","logo",3,"click"],[1,"ion-text-uppercase","ion-text-center"],["id","button-profil","color","light","slot","end","outline","",1,"ion-margin-end"],["name","person-circle-outline"],["slot","end","color","danger",1,"ion-hide-sm-down",3,"click"],["slot","end","name","log-out-outline"],[1,"ion-hide-md-down"],["slot","end",3,"click"]],template:function(n,s){1&n&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),e._UZ(3,"ion-menu-button",3),e.TgZ(4,"ion-img",4),e.NdJ("click",function(){return s.navigateHome()}),e.qZA()(),e.TgZ(5,"ion-title",5),e._uU(6,"Administration"),e.qZA(),e.TgZ(7,"ion-chip",6),e._UZ(8,"ion-icon",7),e.TgZ(9,"ion-label",3),e._uU(10),e.qZA()(),e.TgZ(11,"ion-button",8),e.NdJ("click",function(){return s.logoutClick()}),e._UZ(12,"ion-icon",9),e.TgZ(13,"ion-label",10),e._uU(14,"D\xe9connexion"),e.qZA()(),e.TgZ(15,"ion-button",11),e.NdJ("click",function(){return s.notifyClick()}),e._uU(16," Notify "),e.qZA()()()),2&n&&(e.Q6J("translucent",!1),e.xp6(10),e.Oqu(null==s.user?null:s.user.username))},dependencies:[o.YG,o.Sm,o.hM,o.Gu,o.gu,o.Xz,o.Q$,o.fG,o.sr,o.wd],styles:[".logo[_ngcontent-%COMP%]{width:100px}"]}),t})();const x=["menuAdmin"];let y=(()=>{class t{constructor(n){this.navCtrl=n}ionViewWillEnter(){this.menuAdmin.open()}navigate(n){this.navCtrl.navigateForward(n)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(o.SH))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-admin"]],viewQuery:function(n,s){if(1&n&&e.Gf(x,5),2&n){let a;e.iGM(a=e.CRH())&&(s.menuAdmin=a.first)}},decls:24,vars:1,consts:[["color","medium",3,"fullscreen"],["side","start","type","push","contentId","admin-content","open","true"],["menuAdmin",""],["color","danger"],["auto-hide","true"],[3,"click"],["slot","end"],["id","admin-content"]],template:function(n,s){1&n&&(e._UZ(0,"app-shared-admin-header"),e.TgZ(1,"ion-content",0)(2,"ion-menu",1,2)(4,"ion-header")(5,"ion-toolbar",3)(6,"ion-title"),e._uU(7,"Menu de l'admnistration"),e.qZA()()(),e.TgZ(8,"ion-content")(9,"ion-list")(10,"ion-menu-toggle",4)(11,"ion-item",5),e.NdJ("click",function(){return s.navigate("admin/admin-user")}),e.TgZ(12,"ion-label"),e._uU(13,"Utilisateurs"),e.qZA(),e.TgZ(14,"ion-badge",6),e._uU(15,"11"),e.qZA()()(),e.TgZ(16,"ion-item"),e._uU(17,"Outillages"),e.qZA(),e.TgZ(18,"ion-menu-toggle",4)(19,"ion-item",5),e.NdJ("click",function(){return s.navigate("admin/admin-molding")}),e._uU(20,"Moulages"),e.qZA()(),e.TgZ(21,"ion-item"),e._uU(22,"Kits"),e.qZA()()()(),e._UZ(23,"ion-router-outlet",7),e.qZA()),2&n&&(e.xp6(1),e.Q6J("fullscreen",!1))},dependencies:[o.yp,o.W2,o.Gu,o.Ie,o.Q$,o.q_,o.z0,o.zc,o.sr,o.wd,o.jP,b]}),t})();var S=l(388),r=l(8402),m=l(9808);function M(t,i){1&t&&e._UZ(0,"ion-spinner",3)}function w(t,i){1&t&&e._UZ(0,"th",17)}function D(t,i){if(1&t&&(e.TgZ(0,"td",18),e._UZ(1,"ion-icon",19),e.qZA()),2&t){const n=i.$implicit;e.xp6(1),e.Q6J("color",n.status?"danger":"success")}}function N(t,i){1&t&&(e.TgZ(0,"th",17),e._uU(1," ID "),e.qZA())}function k(t,i){if(1&t&&(e.TgZ(0,"td",18),e._uU(1),e.qZA()),2&t){const n=i.$implicit;e.xp6(1),e.hij(" ",n.id," ")}}function q(t,i){1&t&&(e.TgZ(0,"th",17),e._uU(1," Date du moulage "),e.qZA())}function Y(t,i){if(1&t&&(e.TgZ(0,"td",18),e._uU(1),e.ALo(2,"date"),e.qZA()),2&t){const n=i.$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,n.moldingDay,"dd/MM/yyyy")," ")}}function L(t,i){1&t&&(e.TgZ(0,"th",17),e._uU(1," Cr\xe9\xe9 par "),e.qZA())}function Q(t,i){if(1&t&&(e.TgZ(0,"td",18),e._uU(1),e.qZA()),2&t){const n=i.$implicit;e.xp6(1),e.hij(" ",n.userCreat.username," ")}}function P(t,i){1&t&&(e.TgZ(0,"th",17),e._uU(1," Outillage "),e.qZA())}function E(t,i){if(1&t&&(e.TgZ(0,"td",18),e._uU(1),e.qZA()),2&t){const n=i.$implicit;e.xp6(1),e.AsE(" ",n.OT.sapToolNumber," - ",n.OT.designation,"")}}function J(t,i){1&t&&e._UZ(0,"th",17)}function H(t,i){if(1&t&&(e.TgZ(0,"td",18)(1,"ion-button",20),e._uU(2," Editer "),e.qZA()()),2&t){const n=i.$implicit;e.xp6(1),e.Q6J("routerLink","/molding/create-molding/"+n.id)}}function O(t,i){1&t&&e._UZ(0,"tr",21)}function I(t,i){1&t&&e._UZ(0,"tr",22)}function B(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"div",4)(1,"ion-input",5),e.NdJ("ionInput",function(a){e.CHM(n);const c=e.oxw();return e.KtG(c.applyFilter(a))}),e.qZA(),e.TgZ(2,"table",6),e.ynx(3,7),e.YNc(4,w,1,0,"th",8),e.YNc(5,D,2,1,"td",9),e.BQk(),e.ynx(6,10),e.YNc(7,N,2,0,"th",8),e.YNc(8,k,2,1,"td",9),e.BQk(),e.ynx(9,11),e.YNc(10,q,2,0,"th",8),e.YNc(11,Y,3,4,"td",9),e.BQk(),e.ynx(12,12),e.YNc(13,L,2,0,"th",8),e.YNc(14,Q,2,1,"td",9),e.BQk(),e.ynx(15,13),e.YNc(16,P,2,0,"th",8),e.YNc(17,E,2,2,"td",9),e.BQk(),e.ynx(18,14),e.YNc(19,J,1,0,"th",8),e.YNc(20,H,3,1,"td",9),e.BQk(),e.YNc(21,O,1,0,"tr",15),e.YNc(22,I,1,0,"tr",16),e.qZA()()}if(2&t){const n=e.oxw();e.xp6(2),e.Q6J("dataSource",n.dataSource),e.xp6(19),e.Q6J("matHeaderRowDef",n.displayedMoldingColumns),e.xp6(1),e.Q6J("matRowDefColumns",n.displayedMoldingColumns)}}let G=(()=>{class t{constructor(){this.moldingListLoading=!1,this.dataSource=new r.by,this.displayedMoldingColumns=["status","id","moldingDay","createdBy","outillage","commands"]}ngOnChanges(n){this.dataSource.data=this.moldings}ngOnc(){this.dataSource.data=this.moldings}applyFilter(n){this.dataSource.filter=n.target.value.trim().toLowerCase()}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-admin-molding-list"]],inputs:{moldings:"moldings"},features:[e.TTD],decls:8,vars:2,consts:[[1,"ion-no-margin"],["slot","end","name","circles",4,"ngIf"],["class","moldings-table",4,"ngIf"],["slot","end","name","circles"],[1,"moldings-table"],["type","text","placeholder","Num\xe9ro d'OT",3,"ionInput"],["mat-table","","fixedLayout","true",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","status"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","id"],["matColumnDef","moldingDay"],["matColumnDef","createdBy"],["matColumnDef","outillage"],["matColumnDef","commands"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["name","ellipse",3,"color"],["size","small","expand","block","fill","solid","shape","round",3,"routerLink"],["mat-header-row",""],["mat-row",""]],template:function(n,s){1&n&&(e.TgZ(0,"ion-card")(1,"ion-card-header")(2,"ion-toolbar",0)(3,"ion-card-title"),e._uU(4,"Liste des moulages"),e.qZA(),e.YNc(5,M,1,0,"ion-spinner",1),e.qZA()(),e.TgZ(6,"ion-card-content"),e.YNc(7,B,23,3,"div",2),e.qZA()()),2&n&&(e.xp6(5),e.Q6J("ngIf",s.moldingListLoading),e.xp6(2),e.Q6J("ngIf",s.dataSource.data.length>0))},dependencies:[m.O5,o.YG,o.PM,o.FN,o.Zi,o.Dq,o.gu,o.pK,o.PQ,o.sr,o.j9,o.YI,u.rH,r.BZ,r.fO,r.as,r.w1,r.Dz,r.nj,r.ge,r.ev,r.XQ,r.Gk,m.uU],styles:["mat-table[_ngcontent-%COMP%], table[_ngcontent-%COMP%]{width:100%}"]}),t})(),R=(()=>{class t{constructor(n){this.moldingService=n,this.moldingsError=!1}ngOnInit(){this.moldings$=this.moldingService.getMoldings()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(S.s))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-admin-molding"]],decls:28,vars:3,consts:[["color","light"],["size","8"],[3,"moldings"],["size","4"]],template:function(n,s){1&n&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"Administration des moulages"),e.qZA()()(),e.TgZ(4,"ion-content",0)(5,"ion-grid")(6,"ion-row")(7,"ion-col",1),e._UZ(8,"app-admin-molding-list",2),e.ALo(9,"async"),e.qZA(),e.TgZ(10,"ion-col",3)(11,"ion-card")(12,"ion-card-header")(13,"ion-card-title"),e._uU(14,"Tableau de bord"),e.qZA()(),e.TgZ(15,"ion-card-content")(16,"ion-card")(17,"ion-card-header")(18,"ion-card-subtitle"),e._uU(19,"Nouveaux moulages"),e.qZA()(),e.TgZ(20,"ion-card-content"),e._uU(21," GRAPHIQUE ICI "),e.qZA()(),e.TgZ(22,"ion-card")(23,"ion-card-header")(24,"ion-card-subtitle"),e._uU(25,"Nombre de connexions par jour"),e.qZA()(),e.TgZ(26,"ion-card-content"),e._uU(27," GRAPHIQUE ICI "),e.qZA()()()()()()()()),2&n&&(e.xp6(8),e.Q6J("moldings",e.lcZ(9,1,s.moldings$)))},dependencies:[o.PM,o.FN,o.Zi,o.tO,o.Dq,o.wI,o.W2,o.jY,o.Gu,o.Nd,o.sr,o.wd,G,m.Ov]}),t})();var j=l(9356),p=l(8),g=l(4501),_=l(512),F=l(714);function $(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e._uU(3),e.qZA(),e.TgZ(4,"ion-icon",1),e.NdJ("click",function(){e.CHM(n);const a=e.oxw();return e.KtG(a.userState=!1)}),e.qZA()()(),e.TgZ(5,"ion-content")(6,"ion-item")(7,"ion-label"),e._uU(8,"Nom"),e.qZA(),e._UZ(9,"ion-input",2),e.qZA(),e.TgZ(10,"ion-item")(11,"ion-label"),e._uU(12,"Pr\xe9nom"),e.qZA(),e._UZ(13,"ion-input",2),e.qZA(),e.TgZ(14,"ion-item")(15,"ion-label"),e._uU(16,"Matricule"),e.qZA(),e._UZ(17,"ion-input",3)(18,"ion-icon",4),e.qZA(),e.TgZ(19,"ion-item")(20,"ion-label"),e._uU(21,"E-Mail"),e.qZA(),e._UZ(22,"ion-input",3)(23,"ion-icon",4),e.qZA(),e.TgZ(24,"ion-item")(25,"ion-label"),e._uU(26,"T\xe9l\xe9phone"),e.qZA(),e._UZ(27,"ion-input",2),e.qZA(),e.TgZ(28,"ion-item")(29,"ion-label"),e._uU(30,"Date de cr\xe9ation"),e.qZA(),e._UZ(31,"ion-input",3),e.ALo(32,"date"),e._UZ(33,"ion-icon",4),e.qZA()(),e.TgZ(34,"ion-footer")(35,"ion-toolbar")(36,"ion-buttons")(37,"ion-button",5),e.NdJ("click",function(){e.CHM(n);const a=e.oxw();return e.KtG(a.updateUserClick())}),e.TgZ(38,"label"),e._uU(39,"Enregistrer"),e.qZA(),e._UZ(40,"ion-icon",6),e.qZA(),e.TgZ(41,"ion-button",5),e.NdJ("click",function(){e.CHM(n);const a=e.oxw();return e.KtG(a.deleteUserClick())}),e._UZ(42,"ion-icon",7),e.qZA()()()()}if(2&t){const n=e.oxw();e.xp6(3),e.AsE(" Fiche utilisateur : ",n.user.nom," ",n.user.prenom,""),e.xp6(6),e.Q6J("value",n.user.nom),e.xp6(4),e.Q6J("value",n.user.prenom),e.xp6(4),e.Q6J("value",n.user.matricule),e.xp6(5),e.Q6J("value",n.user.mail),e.xp6(5),e.Q6J("value",n.user.tel),e.xp6(4),e.Q6J("value",e.lcZ(32,8,n.user.createdAt))}}let z=(()=>{class t{constructor(n,s,a){this.loadingService=n,this.alertService=s,this.userService=a,this.userState=!1,this.stateChangeEv=new e.vpe}updateUserClick(){this.loadingService.startLoading("Mise \xe0 jour de l'utilisateur"),this.userService.updateUser(this.user).subscribe(n=>{console.log(n),this.loadingService.stopLoading()},n=>{console.error(n),this.loadingService.stopLoading(),this.alertService.simpleAlert("Erreur serveur","Probl\xe8me lors de la mise \xe0 jour","L'utilisateur n'a pas \xe9t\xe9 modifi\xe9. Veuillez recommencer.")})}deleteUserClick(){this.loadingService.startLoading("Suppression de l'utilisateur"),this.userService.deleteUser(this.user.id).subscribe(()=>{this.loadingService.stopLoading()},n=>{this.alertService.simpleAlert("Erreur","Suppression d'un utilisateur","Une erreur est survenue pendant la suppression de l'utilisateur. "+n.message),this.loadingService.stopLoading()})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(g.b),e.Y36(_.c),e.Y36(p.f))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-user-sheet"]],inputs:{user:"user",userState:"userState"},outputs:{stateChangeEv:"stateChangeEv"},decls:2,vars:1,consts:[["trigger","trigger-button",3,"isOpen","ionModalDidDismiss"],["button","","slot","end","name","close-outline","size","large",3,"click"],["type","text",3,"value"],["disabled","true","type","text",3,"value"],["slot","end","name","lock-closed-outline"],["slot","end","size","small",3,"click"],["slot","start","name","sync-outline"],["slot","icon-only","name","trash-outline"]],template:function(n,s){1&n&&(e.TgZ(0,"ion-modal",0),e.NdJ("ionModalDidDismiss",function(){return s.userState=!1,s.stateChangeEv.emit(!1)}),e.YNc(1,$,43,10,"ng-template"),e.qZA()),2&n&&e.Q6J("isOpen",s.userState)},dependencies:[o.YG,o.Sm,o.W2,o.fr,o.Gu,o.gu,o.pK,o.Ie,o.Q$,o.ki,o.sr,o.wd,o.j9,m.uU],styles:["ion-content[_ngcontent-%COMP%]{height:50%}"]}),t})();function W(t,i){1&t&&(e.TgZ(0,"th",15),e._uU(1," Id "),e.qZA())}function X(t,i){if(1&t&&(e.TgZ(0,"td",16),e._uU(1),e.qZA()),2&t){const n=i.$implicit;e.xp6(1),e.hij(" ",n.id," ")}}function K(t,i){1&t&&(e.TgZ(0,"th",15),e._uU(1," UserName "),e.qZA())}function V(t,i){if(1&t&&(e.TgZ(0,"td",16),e._uU(1),e.qZA()),2&t){const n=i.$implicit;e.xp6(1),e.hij(" ",n.username," ")}}function ee(t,i){1&t&&(e.TgZ(0,"th",15),e._uU(1," Nom "),e.qZA())}function te(t,i){if(1&t&&(e.TgZ(0,"td",16),e._uU(1),e.qZA()),2&t){const n=i.$implicit;e.xp6(1),e.hij(" ",n.nom," ")}}function ne(t,i){1&t&&(e.TgZ(0,"th",15),e._uU(1," Pr\xe9nom "),e.qZA())}function ie(t,i){if(1&t&&(e.TgZ(0,"td",16),e._uU(1),e.qZA()),2&t){const n=i.$implicit;e.xp6(1),e.hij(" ",n.prenom," ")}}function oe(t,i){1&t&&(e.TgZ(0,"th",15),e._uU(1," Matricule "),e.qZA())}function se(t,i){if(1&t&&(e.TgZ(0,"td",16),e._uU(1),e.qZA()),2&t){const n=i.$implicit;e.xp6(1),e.hij(" ",n.matricule," ")}}function ae(t,i){1&t&&(e.TgZ(0,"th",15),e._uU(1," Mail "),e.qZA())}function re(t,i){if(1&t&&(e.TgZ(0,"td",16),e._uU(1),e.qZA()),2&t){const n=i.$implicit;e.xp6(1),e.hij(" ",n.mail," ")}}function le(t,i){1&t&&(e.TgZ(0,"th",15),e._uU(1," Roles "),e.qZA())}function ce(t,i){if(1&t&&(e.TgZ(0,"td",16),e._uU(1),e.qZA()),2&t){const n=i.$implicit;e.xp6(1),e.hij(" ",n.roles," ")}}function de(t,i){1&t&&e._UZ(0,"th",15)}function me(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"td",17)(1,"ion-segment",18),e.NdJ("ionChange",function(a){const d=e.CHM(n).$implicit,h=e.oxw();return e.KtG(h.statusChanged(a,d))}),e.TgZ(2,"ion-segment-button",19),e._UZ(3,"ion-icon",20),e.qZA(),e.TgZ(4,"ion-segment-button",21),e._UZ(5,"ion-icon",22),e.qZA()()()}if(2&t){const n=i.$implicit;e.xp6(1),e.Q6J("value",n.isActive)}}function ue(t,i){1&t&&e._UZ(0,"tr",23)}function pe(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"tr",24),e.NdJ("click",function(){const c=e.CHM(n).$implicit,d=e.oxw();return e.KtG(d.onSelectUser(c))}),e.qZA()}}let ge=(()=>{class t{constructor(n,s,a){this.userService=n,this.loadingService=s,this.alertService=a,this.isUserSelected=!1,this.displayedUserColumns=["id","username","nom","prenom","matricule","roles","commands"]}ngOnInit(){this.users$=this.userService.getUsers()}statusChanged(n,s){this.confirmUser(s,n.detail.value)}onSelectUser(n){console.log(n),this.isUserSelected=!0,this.selectedUser=n}confirmUser(n,s){this.loadingService.startLoading("Mise \xe0 jour de l'utilisateur"),this.userService.confirmUser(n.id,s).subscribe(a=>{this.loadingService.stopLoading()},a=>{this.loadingService.stopLoading(),this.alertService.simpleAlert("Erreur","Le serveur \xe0 renvoy\xe9 une erreur",`${a}`)})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(p.f),e.Y36(g.b),e.Y36(_.c))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-admin-user-table"]],decls:28,vars:6,consts:[["mat-table","",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","username"],["matColumnDef","nom"],["matColumnDef","prenom"],["matColumnDef","matricule"],["matColumnDef","mail"],["matColumnDef","roles"],["matColumnDef","commands"],["mat-cell","","class","commands",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],[3,"user","userState","stateChangeEv"],["mat-header-cell",""],["mat-cell",""],["mat-cell","",1,"commands"],[3,"value","ionChange"],["value","true"],["color","success","name","checkmark-outline"],["value","false"],["color","danger","name","close-outline"],["mat-header-row",""],["mat-row","",3,"click"]],template:function(n,s){1&n&&(e.TgZ(0,"table",0),e.ynx(1,1),e.YNc(2,W,2,0,"th",2),e.YNc(3,X,2,1,"td",3),e.BQk(),e.ynx(4,4),e.YNc(5,K,2,0,"th",2),e.YNc(6,V,2,1,"td",3),e.BQk(),e.ynx(7,5),e.YNc(8,ee,2,0,"th",2),e.YNc(9,te,2,1,"td",3),e.BQk(),e.ynx(10,6),e.YNc(11,ne,2,0,"th",2),e.YNc(12,ie,2,1,"td",3),e.BQk(),e.ynx(13,7),e.YNc(14,oe,2,0,"th",2),e.YNc(15,se,2,1,"td",3),e.BQk(),e.ynx(16,8),e.YNc(17,ae,2,0,"th",2),e.YNc(18,re,2,1,"td",3),e.BQk(),e.ynx(19,9),e.YNc(20,le,2,0,"th",2),e.YNc(21,ce,2,1,"td",3),e.BQk(),e.ynx(22,10),e.YNc(23,de,1,0,"th",2),e.YNc(24,me,6,1,"td",11),e.BQk(),e.YNc(25,ue,1,0,"tr",12),e.YNc(26,pe,1,0,"tr",13),e.qZA(),e.TgZ(27,"app-user-sheet",14),e.NdJ("stateChangeEv",function(c){return s.isUserSelected=c}),e.qZA()),2&n&&(e.Q6J("dataSource",s.users$),e.xp6(25),e.Q6J("matHeaderRowDef",s.displayedUserColumns)("matHeaderRowDefSticky",!0),e.xp6(1),e.Q6J("matRowDefColumns",s.displayedUserColumns),e.xp6(1),e.Q6J("user",s.selectedUser)("userState",s.isUserSelected))},dependencies:[o.gu,o.cJ,o.GO,o.QI,r.BZ,r.fO,r.as,r.w1,r.Dz,r.nj,r.ge,r.ev,r.XQ,r.Gk,z]}),t})();const _e=["newUsers"],he=[{path:"",component:y,children:[{path:"admin-user",component:(()=>{class t{constructor(n,s,a,c,d){this.userService=n,this.datePipe=s,this.loadingService=a,this.alertService=c,this.serviceService=d,this.weeklyLabels=[],this.weeklyUsers=[]}ngOnInit(){this.users=[],this.loadingService.startLoading(),this.serviceService.getServices().subscribe(n=>{n.forEach(s=>{s.users.forEach(a=>this.users.push(a))}),this.weeklyLabels=this.createWeeklyLabel(),this.weeklyUsers=this.createWeeklyUserData(),this.lineChart=new j.Z(this.newUsersCanvas.nativeElement,{type:"line",data:{labels:this.weeklyLabels,datasets:[{label:"Evolution du nombre d'inscription",fill:!1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:this.weeklyUsers,spanGaps:!1}]}}),this.lineChart.update(),this.loadingService.stopLoading()})}createWeeklyLabel(){const n=new Date,s=new Date(2022,0,1),a=[];for(;s<n;)a.push(this.datePipe.transform(s,"dd/MM")),s.setDate(s.getDate()+7);return a}createWeeklyUserData(){const n=new Date;let s=new Date(2022,0,1);const a=[];for(;s<n;){const c=new Date(s);c.setDate(c.getDate()+7);const h=this.users.filter(U=>new Date(U.createdAt)>s&&new Date(U.createdAt)<=c).length;a.push(h),s=c}return a}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(p.f),e.Y36(m.uU),e.Y36(g.b),e.Y36(_.c),e.Y36(F.z))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-admin-user"]],viewQuery:function(n,s){if(1&n&&e.Gf(_e,5),2&n){let a;e.iGM(a=e.CRH())&&(s.newUsersCanvas=a.first)}},decls:30,vars:0,consts:[["color","light"],["false",""],["size","8"],[1,"table-card-content"],["size","4"],["newUsers",""]],template:function(n,s){1&n&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"Administration des utilisateurs"),e.qZA()()(),e.TgZ(4,"ion-content",0)(5,"ion-grid",1)(6,"ion-row")(7,"ion-col",2)(8,"ion-card")(9,"ion-card-content",3),e._UZ(10,"app-admin-user-table"),e.qZA()()(),e.TgZ(11,"ion-col",4)(12,"ion-card")(13,"ion-card-header")(14,"ion-card-title"),e._uU(15,"Tableau de bord"),e.qZA()(),e.TgZ(16,"ion-card-content")(17,"ion-card")(18,"ion-card-header")(19,"ion-card-subtitle"),e._uU(20,"Nouveaux inscrits"),e.qZA()(),e.TgZ(21,"ion-card-content"),e._UZ(22,"canvas",null,5),e.qZA()(),e.TgZ(24,"ion-card")(25,"ion-card-header")(26,"ion-card-subtitle"),e._uU(27,"Nombre de connexions par jour"),e.qZA()(),e.TgZ(28,"ion-card-content"),e._uU(29," GRAPHIQUE ICI "),e.qZA()()()()()()()())},dependencies:[o.PM,o.FN,o.Zi,o.tO,o.Dq,o.wI,o.W2,o.jY,o.Gu,o.Nd,o.sr,o.wd,ge],styles:["mat-cell[_ngcontent-%COMP%]{padding:100px!important}table[_ngcontent-%COMP%]{width:100%}.commands[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around}ion-card[_ngcontent-%COMP%]{max-height:100%;flex-grow:1}.table-card-content[_ngcontent-%COMP%]{width:100%;height:100%;overflow:auto}.table-card-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}"]}),t})(),canActivate:[A.p],data:{expectedRole:["ROLE_ADMIN"]}},{path:"admin-molding",canActivate:[A.p],data:{expectedRole:["ROLE_ADMIN"]},component:R}]}];let fe=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.Bz.forChild(he),u.Bz]}),t})();var Ae=l(6015),Ze=l(8576);let Te=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[Ae.e],imports:[Ze.o]}),t})(),Ue=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[Te,fe]}),t})()}}]);
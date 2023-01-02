"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2477],{2477:(v,g,s)=>{s.d(g,{Q:()=>a});var m=s(655),e=s(2340),c=s(4147),p=s(6862),n=s(5e3),t=s(8779),d=s(2177),Z=s(8943);let U=(()=>{class l{constructor(i,r,u,h){this.navCtrl=i,this.authService=r,this.loadingService=u,this.modalCtrl=h,this.version=c.i8}ngOnInit(){}navigate(i){this.navCtrl.navigateRoot(i)}editProfilClick(){return(0,m.mG)(this,void 0,void 0,function*(){(yield this.modalCtrl.create({component:p.A,componentProps:{user:this.authService.authUser},animated:!0,backdropDismiss:!1})).present()})}logoutClick(){this.loadingService.startLoading("D\xe9connexion"),this.authService.logout().subscribe(()=>{this.loadingService.stopLoading(),this.navCtrl.navigateRoot("/login")})}}return l.\u0275fac=function(i){return new(i||l)(n.Y36(t.SH),n.Y36(d.e),n.Y36(Z.b),n.Y36(t.IN))},l.\u0275cmp=n.Xpm({type:l,selectors:[["app-user-popover"]],decls:19,vars:1,consts:[["button","","id","trigger-button",3,"click"],["name","settings-outline","slot","start"],["button","",3,"click"],["name","construct-outline","slot","start"],["color","danger",1,"ion-hide-sm-up",3,"click"],["slot","start","name","log-out-outline"]],template:function(i,r){1&i&&(n.TgZ(0,"ion-list")(1,"ion-item",0),n.NdJ("click",function(){return r.editProfilClick()}),n.TgZ(2,"ion-label"),n._uU(3,"Profil"),n.qZA()(),n.TgZ(4,"ion-item")(5,"ion-label"),n._uU(6,"Pr\xe9f\xe9rences"),n.qZA(),n._UZ(7,"ion-icon",1),n.qZA(),n.TgZ(8,"ion-item",2),n.NdJ("click",function(){return r.navigate("admin")}),n.TgZ(9,"ion-label"),n._uU(10,"Administration"),n.qZA(),n._UZ(11,"ion-icon",3),n.qZA(),n.TgZ(12,"ion-item",4),n.NdJ("click",function(){return r.logoutClick()}),n._UZ(13,"ion-icon",5),n.TgZ(14,"ion-label"),n._uU(15,"D\xe9connexion"),n.qZA()(),n.TgZ(16,"ion-item")(17,"ion-label"),n._uU(18),n.qZA()()()),2&i&&(n.xp6(18),n.hij(" Version : ",r.version," "))},dependencies:[t.gu,t.Ie,t.Q$,t.q_]}),l})();var _=s(7153),C=s(9808);function f(l,o){1&l&&n._UZ(0,"ion-menu-button",14)}let a=(()=>{class l{constructor(i,r,u,h,S){this.authService=i,this.loadingService=r,this.navCtrl=u,this.popoverCtrl=h,this.titleService=S,this.user=this.authService.authUser,this.title$=this.titleService.title.asObservable()}ngOnInit(){this.envMode=e.N.name,this.title$.subscribe(i=>{this.title=i})}logoutClick(){this.authService.logout().subscribe(()=>{this.loadingService.stopLoading(),this.navCtrl.navigateRoot("/login")})}triggerUserPopover(i){return(0,m.mG)(this,void 0,void 0,function*(){i.preventDefault(),(yield this.popoverCtrl.create({component:U,reference:"trigger",showBackdrop:!0,backdropDismiss:!0,animated:!0,dismissOnSelect:!0})).present()})}navigate(i){this.navCtrl.navigateRoot(i)}}return l.\u0275fac=function(i){return new(i||l)(n.Y36(d.e),n.Y36(Z.b),n.Y36(t.SH),n.Y36(t.Dh),n.Y36(_.y))},l.\u0275cmp=n.Xpm({type:l,selectors:[["app-shared-user-header"]],inputs:{title:"title",hideMenuIcon:"hideMenuIcon"},decls:18,vars:5,consts:[[3,"translucent"],["color","primary"],["slot","start"],["autoHide","false","color","light","menu","main-menu",4,"ngIf"],["src","assets/images/logoDaherFondBleu.png",1,"ion-hide-sm-down","logo",3,"click"],[1,"ion-text-uppercase","ion-text-center"],["slot","end",1,"dev","ion-hide-sm-down"],["color","light","slot","end","outline","",1,"ion-margin-end",3,"click"],["buttonProfil",""],["name","person-circle-outline"],["color","light"],["slot","end","color","danger",1,"ion-hide-sm-down","margin",3,"click"],["slot","end","name","log-out-outline"],[1,"ion-hide-md-down"],["autoHide","false","color","light","menu","main-menu"]],template:function(i,r){1&i&&(n.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),n.YNc(3,f,1,0,"ion-menu-button",3),n.TgZ(4,"ion-img",4),n.NdJ("click",function(){return r.navigate("home")}),n.qZA()(),n.TgZ(5,"ion-title",5),n._uU(6),n.qZA(),n.TgZ(7,"ion-label",6),n._uU(8),n.qZA(),n.TgZ(9,"ion-chip",7,8),n.NdJ("click",function(h){return r.triggerUserPopover(h)}),n._UZ(11,"ion-icon",9),n.TgZ(12,"ion-label",10),n._uU(13),n.qZA()(),n.TgZ(14,"ion-button",11),n.NdJ("click",function(){return r.logoutClick()}),n._UZ(15,"ion-icon",12),n.TgZ(16,"ion-label",13),n._uU(17,"D\xe9connexion"),n.qZA()()()()),2&i&&(n.Q6J("translucent",!0),n.xp6(3),n.Q6J("ngIf",!r.hideMenuIcon),n.xp6(3),n.Oqu(r.title),n.xp6(2),n.Oqu(r.envMode),n.xp6(5),n.Oqu(null==r.user?null:r.user.username))},dependencies:[C.O5,t.YG,t.Sm,t.hM,t.Gu,t.gu,t.Xz,t.Q$,t.fG,t.wd,t.sr],styles:[".margin[_ngcontent-%COMP%]{margin-right:10px}.logo[_ngcontent-%COMP%]{width:100px}@media print{[_nghost-%COMP%]{display:none}}.dev[_ngcontent-%COMP%]{color:red;text-transform:uppercase;font-size:large;font-weight:700;padding-right:100px}"]}),l})()},6862:(v,g,s)=>{s.d(g,{A:()=>f});var m=s(655),e=s(5e3),c=s(3075),p=s(453),n=s(2177),t=s(8779);let d=(()=>{class a{constructor(o,i,r){this.fb=o,this.userService=i,this.authService=r,this.changePasswordForm=this.fb.group({newPassword:["",c.kI.required]})}confirmChangePasswordClick(){const o=this.authService.authUser;o.password=this.changePasswordForm.get("newPassword").value,this.userService.updateUser(o)}onSubmit(){}}return a.\u0275fac=function(o){return new(o||a)(e.Y36(c.qu),e.Y36(p.f),e.Y36(n.e))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-change-password"]],decls:22,vars:2,consts:[[3,"formGroup","ngSubmit"],["color","dark"],["formControlName","newPassword","type","password",3,"value"],["slot","end","name","checkmark-outline"],["formControlName","password","type","password",3,"value"],["color","success","slot","end","name","checkmark-done-outline"],["color","light"],["slot","end"],["fill","solid",3,"disabled","click"],["slot","end","name","airplane"]],template:function(o,i){1&o&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return i.onSubmit()}),e.TgZ(1,"ion-header")(2,"ion-toolbar",1)(3,"ion-title"),e._uU(4,"Changement du mot de passe"),e.qZA()()(),e.TgZ(5,"ion-content")(6,"ion-item")(7,"ion-label"),e._uU(8,"Nouveau mot de passe"),e.qZA(),e._UZ(9,"ion-input",2)(10,"ion-icon",3),e.qZA(),e.TgZ(11,"ion-item")(12,"ion-label"),e._uU(13,"Confirmer mot de passe"),e.qZA(),e._UZ(14,"ion-input",4)(15,"ion-icon",5),e.qZA()(),e.TgZ(16,"ion-footer")(17,"ion-toolbar",6)(18,"ion-buttons",7)(19,"ion-button",8),e.NdJ("click",function(){return i.confirmChangePasswordClick()}),e._UZ(20,"ion-icon",9),e._uU(21," Confirmer "),e.qZA()()()()()),2&o&&(e.Q6J("formGroup",i.changePasswordForm),e.xp6(19),e.Q6J("disabled",i.changePasswordForm.invalid))},dependencies:[t.YG,t.Sm,t.W2,t.fr,t.Gu,t.gu,t.pK,t.Ie,t.Q$,t.wd,t.sr,t.j9,c._Y,c.JJ,c.JL,c.sg,c.u]}),a})();var Z=s(8943),U=s(4722),_=s(9808);function C(a,l){if(1&a){const o=e.EpF();e.ynx(0),e.TgZ(1,"ion-content")(2,"ion-item")(3,"ion-label"),e._uU(4,"Nom"),e.qZA(),e._UZ(5,"ion-input",4),e.qZA(),e.TgZ(6,"ion-item")(7,"ion-label"),e._uU(8,"Pr\xe9nom"),e.qZA(),e._UZ(9,"ion-input",4),e.qZA(),e.TgZ(10,"ion-item")(11,"ion-label"),e._uU(12,"Matricule"),e.qZA(),e._UZ(13,"ion-input",5)(14,"ion-icon",6),e.qZA(),e.TgZ(15,"ion-item")(16,"ion-label"),e._uU(17,"E-Mail"),e.qZA(),e._UZ(18,"ion-input",5)(19,"ion-icon",6),e.qZA(),e.TgZ(20,"ion-item")(21,"ion-label"),e._uU(22,"T\xe9l\xe9phone"),e.qZA(),e._UZ(23,"ion-input",4),e.qZA(),e.TgZ(24,"ion-item")(25,"ion-label"),e._uU(26,"Date de cr\xe9ation"),e.qZA(),e._UZ(27,"ion-input",5),e.ALo(28,"date"),e._UZ(29,"ion-icon",6),e.qZA(),e.TgZ(30,"ion-item")(31,"ion-label"),e._uU(32,"Date de derni\xe8re connexion"),e.qZA(),e._UZ(33,"ion-input",5),e.ALo(34,"date"),e._UZ(35,"ion-icon",6),e.qZA(),e.TgZ(36,"ion-item")(37,"ion-label"),e._uU(38,"Site"),e.qZA(),e.TgZ(39,"ion-label"),e._uU(40),e.qZA(),e._UZ(41,"ion-icon",6),e.qZA(),e.TgZ(42,"ion-item")(43,"ion-label"),e._uU(44,"Service"),e.qZA(),e.TgZ(45,"ion-label"),e._uU(46),e.qZA(),e._UZ(47,"ion-icon",6),e.qZA(),e.TgZ(48,"ion-item")(49,"ion-label"),e._uU(50,"Division"),e.qZA(),e.TgZ(51,"ion-label"),e._uU(52),e.qZA(),e._UZ(53,"ion-icon",6),e.qZA()(),e.TgZ(54,"ion-footer")(55,"ion-toolbar")(56,"ion-buttons",1)(57,"ion-button",7),e.NdJ("click",function(){e.CHM(o);const r=e.oxw();return e.KtG(r.updatePasswordClick())}),e.TgZ(58,"label"),e._uU(59,"Changer mot de passe"),e.qZA(),e._UZ(60,"ion-icon",8),e.qZA()(),e.TgZ(61,"ion-buttons",9)(62,"ion-button",7),e.NdJ("click",function(){e.CHM(o);const r=e.oxw();return e.KtG(r.updateUserClick())}),e.TgZ(63,"label"),e._uU(64,"Enregistrer"),e.qZA(),e._UZ(65,"ion-icon",10),e.qZA()()()(),e.BQk()}if(2&a){const o=e.oxw();e.xp6(5),e.Q6J("value",o.user.nom),e.xp6(4),e.Q6J("value",o.user.prenom),e.xp6(4),e.Q6J("value",o.user.matricule),e.xp6(5),e.Q6J("value",o.user.mail),e.xp6(5),e.Q6J("value",o.user.tel),e.xp6(4),e.Q6J("value",e.lcZ(28,10,o.user.createdAt)),e.xp6(6),e.Q6J("value",e.lcZ(34,12,o.user.lastCon)),e.xp6(7),e.Oqu(o.user.site.nom),e.xp6(6),e.Oqu(o.user.service.nom),e.xp6(6),e.Oqu(o.user.unite.nom)}}let f=(()=>{class a{constructor(o,i,r,u){this.loadingService=o,this.alertService=i,this.userService=r,this.modalCtrl=u,this.stateChangeEv=new e.vpe}updateUserClick(){this.loadingService.startLoading("Mise \xe0 jour de l'utilisateur"),this.userService.updateUser(this.user).subscribe(o=>{console.log(o),this.loadingService.stopLoading()},o=>{console.error(o),this.loadingService.stopLoading(),this.alertService.simpleAlert("Erreur serveur","Probl\xe8me lors de la mise \xe0 jour","L'utilisateur n'a pas \xe9t\xe9 modifi\xe9. Veuillez recommencer.")})}deleteUserClick(){this.loadingService.startLoading("Suppression de l'utilisateur"),this.userService.deleteUser(this.user.id).subscribe(()=>{this.loadingService.stopLoading()},o=>{this.alertService.simpleAlert("Erreur","Suppression d'un utilisateur","Une erreur est survenue pendant la suppression de l'utilisateur. "+o.message),this.loadingService.stopLoading()})}closeUserSheetClick(){this.modalCtrl.dismiss()}updatePasswordClick(){return(0,m.mG)(this,void 0,void 0,function*(){(yield this.modalCtrl.create({component:d,cssClass:"modal-adjusted"})).present()})}}return a.\u0275fac=function(o){return new(o||a)(e.Y36(Z.b),e.Y36(U.c),e.Y36(p.f),e.Y36(t.IN))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-user-sheet"]],inputs:{user:"user"},outputs:{stateChangeEv:"stateChangeEv"},decls:6,vars:1,consts:[["color","dark"],["slot","start"],["slot","end","name","close-circle","size","large",3,"click"],[4,"ngIf"],["type","text",3,"value"],["disabled","true","type","text",3,"value"],["slot","end","name","lock-closed-outline"],["slot","end","size","small",3,"click"],["slot","start","name","key-outline"],["slot","end"],["slot","start","name","save-outline"]],template:function(o,i){1&o&&(e.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-title",1),e._uU(3," Fiche utilisateur"),e.qZA(),e.TgZ(4,"ion-icon",2),e.NdJ("click",function(){return i.closeUserSheetClick()}),e.qZA()()(),e.YNc(5,C,66,14,"ng-container",3)),2&o&&(e.xp6(5),e.Q6J("ngIf",i.user))},dependencies:[_.O5,t.YG,t.Sm,t.W2,t.fr,t.Gu,t.gu,t.pK,t.Ie,t.Q$,t.wd,t.sr,t.j9,_.uU],styles:["ion-content[_ngcontent-%COMP%]{height:50%}"]}),a})()},7153:(v,g,s)=>{s.d(g,{y:()=>p});var m=s(591),e=s(5e3),c=s(2313);let p=(()=>{class n{constructor(d){this.titleService=d,this.title=new m.X("")}setTitle(d){this.titleService.setTitle(d),this.title.next(this.getTitle())}getTitle(){return this.titleService.getTitle()}}return n.\u0275fac=function(d){return new(d||n)(e.LFG(c.Dx))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},4147:v=>{v.exports={i8:"1.6.1"}}}]);
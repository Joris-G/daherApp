"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7875],{512:(m,d,n)=>{n.d(d,{c:()=>e});var v=n(655),i=n(5e3),u=n(9928);let e=(()=>{class r{constructor(o,a){this.alertController=o,this.toastController=a}simpleAlert(o,a,p){return(0,v.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({cssClass:"simple-alert",header:o,subHeader:a,message:p,buttons:[{text:"Fermer",role:"cancel",id:"cancel-button"}]})).present()})}presentAlertConfirm(o,a){return(0,v.mG)(this,void 0,void 0,function*(){return new Promise((p,_)=>{this.alertController.create({cssClass:"my-custom-class",header:o,message:a,buttons:[{text:"Non",role:"cancel",cssClass:["ion-color-primary","ion-button"],id:"cancel-button",handler:()=>{console.log("Response false"),p(!1)}},{text:"Oui",id:"confirm-button",cssClass:"ion-color-danger",handler:()=>{console.log("Response true"),p(!0)}}]}).then(S=>{S.present()})})})}presentToast(o){return(0,v.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:o,duration:1e3,position:"bottom",translucent:!0,animated:!0})).present()})}}return r.\u0275fac=function(o){return new(o||r)(i.LFG(u.Br),i.LFG(u.yF))},r.\u0275prov=i.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},4501:(m,d,n)=>{n.d(d,{b:()=>e});var v=n(655),i=n(5e3),u=n(9928);let e=(()=>{class r{constructor(o){this.loadingController=o}startLoading(o="Chargement ..."){this.loadingController.create({spinner:"lines",cssClass:"my-custom-class",message:o}).then(a=>{a.present()})}stopLoading(){return(0,v.mG)(this,void 0,void 0,function*(){setTimeout(()=>{this.loadingController.dismiss()},100)})}}return r.\u0275fac=function(o){return new(o||r)(i.LFG(u.HT))},r.\u0275prov=i.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},2996:(m,d,n)=>{n.d(d,{W:()=>e});var v=n(2340),i=n(5e3),u=n(6322);let e=(()=>{class r{constructor(o){this.requestService=o}getPrograms(){return this.requestService.createGetRequest(`${v.N.usineApi}programme_avions`)}getIri(o){return"string"==typeof o?o:`/api/programme_avions/${o.id}`}}return r.\u0275fac=function(o){return new(o||r)(i.LFG(u.s))},r.\u0275prov=i.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},5786:(m,d,n)=>{n.d(d,{p:()=>r});var v=n(5e3),i=n(3919),u=n(512),e=n(780);let r=(()=>{class s{constructor(a,p,_){this.auth=a,this.alerteService=p,this.router=_}canActivate(a){const _=this.isRole(a.data.expectedRole);return _||(this.alerteService.simpleAlert("Alerte de l'application","Autorisation","Vous n'avez pas acc\xe8s \xe0 cette page"),this.router.navigate(["home"])),this.auth.isAuth&&_&&this.auth.authUser.isActive}isRole(a){return!!this.auth.authUser&&a.some(p=>this.auth.authUser.roles.includes(p))}}return s.\u0275fac=function(a){return new(a||s)(v.LFG(i.e),v.LFG(u.c),v.LFG(e.F0))},s.\u0275prov=v.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},9841:(m,d,n)=>{n.d(d,{N:()=>r});var v=n(2340),i=n(5e3),u=n(6322);let r=(()=>{class s{constructor(a){this.requestService=a}getRoles(){return this.requestService.createGetRequest(`${v.N.usineApi}postes`)}getIri(a){return"string"==typeof a?a:`/api/postes/${a.id}`}}return s.\u0275fac=function(a){return new(a||s)(i.LFG(u.s))},s.\u0275prov=i.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},714:(m,d,n)=>{n.d(d,{z:()=>e});var v=n(2340),i=n(5e3),u=n(6322);let e=(()=>{class r{constructor(o){this.requestService=o}getServices(){return this.requestService.createGetRequest(`${v.N.usineApi}services`)}getIri(o){return"string"==typeof o?o:`/api/services/${o.id}`}}return r.\u0275fac=function(o){return new(o||r)(i.LFG(u.s))},r.\u0275prov=i.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},3040:(m,d,n)=>{n.d(d,{W:()=>e});var v=n(2340),i=n(5e3),u=n(6322);let e=(()=>{class r{constructor(o){this.requestService=o}getUnites(){return this.requestService.createGetRequest(`${v.N.usineApi}divisions`)}getIri(o){return"string"==typeof o?o:`/api/services/${o.id}`}}return r.\u0275fac=function(o){return new(o||r)(i.LFG(u.s))},r.\u0275prov=i.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},8:(m,d,n)=>{n.d(d,{f:()=>S});var v=n(655),i=n(2340),u=n(5e3),e=n(6322),r=n(9841),s=n(714),o=n(2996),a=n(3040);let p=(()=>{class c{constructor(){}getIri(t){return"string"==typeof t?t:`/api/services/${t.id}`}}return c.\u0275fac=function(t){return new(t||c)},c.\u0275prov=u.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})(),S=(()=>{class c{constructor(t,l,g,f,E,U){this.requestService=t,this.roleService=l,this.serviceService=g,this.programService=f,this.uniteService=E,this.usineService=U}getUserById(t){return this.requestService.createGetRequest(i.N.usineApi+`users/${t}`)}getUsers(t){return this.requestService.createGetRequest(i.N.usineApi+"users")}registerUser(t){return this.requestService.createPostRequest(i.N.usineApi+"users",t)}getIri(t){return"string"==typeof t?t:`/api/users/${t.id}`}getGroups(){return this.requestService.createGetRequest(`${i.N.usineApi}groupe_affectations`)}createGroup(t){return this.requestService.createPostRequest(`${i.N.usineApi}groupe_affectations`,t)}updateUser(t){const l={matricule:t.matricule,nom:t.nom,prenom:t.prenom,poste:this.roleService.getIri(t.poste),service:this.serviceService.getIri(t.service),programmeAvion:t.programmeAvion.map(g=>this.programService.getIri(g)),unite:this.uniteService.getIri(t.unite),site:this.usineService.getIri(t.site),tel:t.tel};return this.requestService.createPatchRequest(`${i.N.usineApi}users/${t.id}`,l)}addUserToGroup(t){return new Promise((l,g)=>(0,v.mG)(this,void 0,void 0,function*(){for(const f of t.groupeAffectations){const E={libelle:f.libelle,population:f.population.map(U=>this.getIri(U))};E.population.push(this.getIri(t)),yield this.requestService.createPatchRequest(`${i.N.usineApi}groupe_affectations/$${f.id}/addUsers`,{population:E.population}).subscribe(U=>{t.groupeAffectations=U})}l(t)}))}getUsersByService(t){return this.requestService.createGetRequest(`${i.N.usineApi}services/${t}`)}deleteUser(t){return this.requestService.createDeleteRequest(`${i.N.usineApi}users/${t}`)}confirmUser(t,l){return this.requestService.createPatchRequest(`${i.N.usineApi}users/${t}`,{isActive:l})}}return c.\u0275fac=function(t){return new(t||c)(u.LFG(e.s),u.LFG(r.N),u.LFG(s.z),u.LFG(o.W),u.LFG(a.W),u.LFG(p))},c.\u0275prov=u.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},2477:(m,d,n)=>{n.d(d,{Q:()=>S});var v=n(655),i=n(2340),u=n(4147),e=n(5e3),r=n(9928),s=n(3919),o=n(4501);let a=(()=>{class c{constructor(t,l,g){this.navCtrl=t,this.authService=l,this.loadingService=g,this.isUserOpen=!1,this.version=u.i8}ngOnInit(){}navigate(t){this.navCtrl.navigateRoot(t)}logoutClick(){this.loadingService.startLoading("D\xe9connexion"),this.authService.logout().subscribe(()=>{this.loadingService.stopLoading(),this.navCtrl.navigateRoot("/login")})}}return c.\u0275fac=function(t){return new(t||c)(e.Y36(r.SH),e.Y36(s.e),e.Y36(o.b))},c.\u0275cmp=e.Xpm({type:c,selectors:[["app-user-popover"]],decls:19,vars:1,consts:[["button","","id","trigger-button",3,"click"],["name","settings-outline","slot","start"],["button","",3,"click"],["name","construct-outline","slot","start"],["color","danger",1,"ion-hide-sm-up",3,"click"],["slot","start","name","log-out-outline"]],template:function(t,l){1&t&&(e.TgZ(0,"ion-list")(1,"ion-item",0),e.NdJ("click",function(){return l.isUserOpen=!0}),e.TgZ(2,"ion-label"),e._uU(3,"Profil"),e.qZA()(),e.TgZ(4,"ion-item")(5,"ion-label"),e._uU(6,"Pr\xe9f\xe9rences"),e.qZA(),e._UZ(7,"ion-icon",1),e.qZA(),e.TgZ(8,"ion-item",2),e.NdJ("click",function(){return l.navigate("admin")}),e.TgZ(9,"ion-label"),e._uU(10,"Administration"),e.qZA(),e._UZ(11,"ion-icon",3),e.qZA(),e.TgZ(12,"ion-item",4),e.NdJ("click",function(){return l.logoutClick()}),e._UZ(13,"ion-icon",5),e.TgZ(14,"ion-label"),e._uU(15,"D\xe9connexion"),e.qZA()(),e.TgZ(16,"ion-item")(17,"ion-label"),e._uU(18),e.qZA()()()),2&t&&(e.xp6(18),e.hij(" Version : ",l.version," "))},dependencies:[r.gu,r.Ie,r.Q$,r.q_]}),c})();var p=n(9808);function _(c,h){1&c&&e._UZ(0,"ion-menu-button",14)}let S=(()=>{class c{constructor(t,l,g,f){this.authService=t,this.loadingService=l,this.navCtrl=g,this.popoverCtrl=f,this.user=this.authService.authUser}ngOnDestroy(){console.log("destroy header")}ngOnInit(){this.envMode=i.N.name}logoutClick(){this.loadingService.startLoading("D\xe9connexion"),this.authService.logout().subscribe(()=>{this.loadingService.stopLoading(),this.navCtrl.navigateRoot("/login")})}triggerUserPopover(t){return(0,v.mG)(this,void 0,void 0,function*(){t.preventDefault(),(yield this.popoverCtrl.create({component:a,reference:"trigger",showBackdrop:!0,backdropDismiss:!0,animated:!0,dismissOnSelect:!0})).present()})}navigate(t){this.navCtrl.navigateRoot(t)}}return c.\u0275fac=function(t){return new(t||c)(e.Y36(s.e),e.Y36(o.b),e.Y36(r.SH),e.Y36(r.Dh))},c.\u0275cmp=e.Xpm({type:c,selectors:[["app-shared-user-header"]],inputs:{title:"title",hideMenuIcon:"hideMenuIcon"},decls:18,vars:5,consts:[[3,"translucent"],["color","primary"],["slot","start"],["autoHide","false","color","light",4,"ngIf"],["src","assets/images/logoDaherFondBleu.png",1,"ion-hide-sm-down","logo",3,"click"],[1,"ion-text-uppercase","ion-text-center"],["slot","end",1,"dev","ion-hide-sm-down"],["color","light","slot","end","outline","",1,"ion-margin-end",3,"contextmenu"],["buttonProfil",""],["name","person-circle-outline"],["color","light"],["slot","end","color","danger",1,"ion-hide-sm-down","margin",3,"click"],["slot","end","name","log-out-outline"],[1,"ion-hide-md-down"],["autoHide","false","color","light"]],template:function(t,l){1&t&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),e.YNc(3,_,1,0,"ion-menu-button",3),e.TgZ(4,"ion-img",4),e.NdJ("click",function(){return l.navigate("home")}),e.qZA()(),e.TgZ(5,"ion-title",5),e._uU(6),e.qZA(),e.TgZ(7,"ion-label",6),e._uU(8),e.qZA(),e.TgZ(9,"ion-chip",7,8),e.NdJ("contextmenu",function(f){return l.triggerUserPopover(f)}),e._UZ(11,"ion-icon",9),e.TgZ(12,"ion-label",10),e._uU(13),e.qZA()(),e.TgZ(14,"ion-button",11),e.NdJ("click",function(){return l.logoutClick()}),e._UZ(15,"ion-icon",12),e.TgZ(16,"ion-label",13),e._uU(17,"D\xe9connexion"),e.qZA()()()()),2&t&&(e.Q6J("translucent",!0),e.xp6(3),e.Q6J("ngIf",!l.hideMenuIcon),e.xp6(3),e.Oqu(l.title),e.xp6(2),e.Oqu(l.envMode),e.xp6(5),e.Oqu(null==l.user?null:l.user.username))},dependencies:[p.O5,r.YG,r.Sm,r.hM,r.Gu,r.gu,r.Xz,r.Q$,r.fG,r.sr,r.wd],styles:[".margin[_ngcontent-%COMP%]{margin-right:10px}.logo[_ngcontent-%COMP%]{width:100px}@media print{[_nghost-%COMP%]{display:none}}.dev[_ngcontent-%COMP%]{color:red;text-transform:uppercase;font-size:large;font-weight:700;padding-right:100px}"]}),c})()},4147:m=>{m.exports={i8:"1.5.7"}}}]);
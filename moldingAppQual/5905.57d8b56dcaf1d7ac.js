"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5905],{512:(f,m,o)=>{o.d(m,{c:()=>e});var g=o(655),d=o(5e3),v=o(9928);let e=(()=>{class t{constructor(l,s){this.alertController=l,this.toastController=s}simpleAlert(l,s,p){return(0,g.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({cssClass:"simple-alert",header:l,subHeader:s,message:p,buttons:[{text:"Fermer",role:"cancel",id:"cancel-button"}]})).present()})}presentAlertConfirm(l,s){return(0,g.mG)(this,void 0,void 0,function*(){return new Promise((p,n)=>{this.alertController.create({cssClass:"my-custom-class",header:l,message:s,buttons:[{text:"Non",role:"cancel",cssClass:["ion-color-primary","ion-button"],id:"cancel-button",handler:()=>{console.log("Response false"),p(!1)}},{text:"Oui",id:"confirm-button",cssClass:"ion-color-danger",handler:()=>{console.log("Response true"),p(!0)}}]}).then(c=>{c.present()})})})}presentToast(l){return(0,g.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:l,duration:1e3,position:"bottom",translucent:!0,animated:!0})).present()})}}return t.\u0275fac=function(l){return new(l||t)(d.LFG(v.Br),d.LFG(v.yF))},t.\u0275prov=d.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},4501:(f,m,o)=>{o.d(m,{b:()=>e});var g=o(655),d=o(5e3),v=o(9928);let e=(()=>{class t{constructor(l){this.loadingController=l}startLoading(l="Chargement ..."){this.loadingController.create({spinner:"lines",cssClass:"my-custom-class",message:l}).then(s=>{s.present()})}stopLoading(){return(0,g.mG)(this,void 0,void 0,function*(){setTimeout(()=>{this.loadingController.dismiss()},100)})}}return t.\u0275fac=function(l){return new(l||t)(d.LFG(v.HT))},t.\u0275prov=d.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},5786:(f,m,o)=>{o.d(m,{p:()=>t});var g=o(5e3),d=o(3919),v=o(512),e=o(780);let t=(()=>{class h{constructor(s,p,n){this.auth=s,this.alerteService=p,this.router=n}canActivate(s){const n=this.isRole(s.data.expectedRole);return n||(this.alerteService.simpleAlert("Alerte de l'application","Autorisation","Vous n'avez pas acc\xe8s \xe0 cette page"),this.router.navigate(["home"])),this.auth.isAuth&&n&&this.auth.authUser.isActive}isRole(s){return!!this.auth.authUser&&s.some(p=>this.auth.authUser.roles.includes(p))}}return h.\u0275fac=function(s){return new(s||h)(g.LFG(d.e),g.LFG(v.c),g.LFG(e.F0))},h.\u0275prov=g.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})()},2477:(f,m,o)=>{o.d(m,{Q:()=>c});var g=o(655),d=o(2340),v=o(4147),e=o(5e3),t=o(9928),h=o(3919),l=o(4501);let s=(()=>{class i{constructor(a,u,_){this.navCtrl=a,this.authService=u,this.loadingService=_,this.isUserOpen=!1,this.version=v.i8}ngOnInit(){}navigate(a){this.navCtrl.navigateRoot(a)}logoutClick(){this.loadingService.startLoading("D\xe9connexion"),this.authService.logout().subscribe(()=>{this.loadingService.stopLoading(),this.navCtrl.navigateRoot("/login")})}}return i.\u0275fac=function(a){return new(a||i)(e.Y36(t.SH),e.Y36(h.e),e.Y36(l.b))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-user-popover"]],decls:19,vars:1,consts:[["button","","id","trigger-button",3,"click"],["name","settings-outline","slot","start"],["button","",3,"click"],["name","construct-outline","slot","start"],["color","danger",1,"ion-hide-sm-up",3,"click"],["slot","start","name","log-out-outline"]],template:function(a,u){1&a&&(e.TgZ(0,"ion-list")(1,"ion-item",0),e.NdJ("click",function(){return u.isUserOpen=!0}),e.TgZ(2,"ion-label"),e._uU(3,"Profil"),e.qZA()(),e.TgZ(4,"ion-item")(5,"ion-label"),e._uU(6,"Pr\xe9f\xe9rences"),e.qZA(),e._UZ(7,"ion-icon",1),e.qZA(),e.TgZ(8,"ion-item",2),e.NdJ("click",function(){return u.navigate("admin")}),e.TgZ(9,"ion-label"),e._uU(10,"Administration"),e.qZA(),e._UZ(11,"ion-icon",3),e.qZA(),e.TgZ(12,"ion-item",4),e.NdJ("click",function(){return u.logoutClick()}),e._UZ(13,"ion-icon",5),e.TgZ(14,"ion-label"),e._uU(15,"D\xe9connexion"),e.qZA()(),e.TgZ(16,"ion-item")(17,"ion-label"),e._uU(18),e.qZA()()()),2&a&&(e.xp6(18),e.hij(" Version : ",u.version," "))},dependencies:[t.gu,t.Ie,t.Q$,t.q_]}),i})();var p=o(9808);function n(i,r){1&i&&e._UZ(0,"ion-menu-button",14)}let c=(()=>{class i{constructor(a,u,_,C){this.authService=a,this.loadingService=u,this.navCtrl=_,this.popoverCtrl=C,this.user=this.authService.authUser}ngOnDestroy(){console.log("destroy header")}ngOnInit(){this.envMode=d.N.name}logoutClick(){this.loadingService.startLoading("D\xe9connexion"),this.authService.logout().subscribe(()=>{this.loadingService.stopLoading(),this.navCtrl.navigateRoot("/login")})}triggerUserPopover(a){return(0,g.mG)(this,void 0,void 0,function*(){a.preventDefault(),(yield this.popoverCtrl.create({component:s,reference:"trigger",showBackdrop:!0,backdropDismiss:!0,animated:!0,dismissOnSelect:!0})).present()})}navigate(a){this.navCtrl.navigateRoot(a)}}return i.\u0275fac=function(a){return new(a||i)(e.Y36(h.e),e.Y36(l.b),e.Y36(t.SH),e.Y36(t.Dh))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-shared-user-header"]],inputs:{title:"title",hideMenuIcon:"hideMenuIcon"},decls:18,vars:5,consts:[[3,"translucent"],["color","primary"],["slot","start"],["autoHide","false","color","light",4,"ngIf"],["src","assets/images/logoDaherFondBleu.png",1,"ion-hide-sm-down","logo",3,"click"],[1,"ion-text-uppercase","ion-text-center"],["slot","end",1,"dev","ion-hide-sm-down"],["color","light","slot","end","outline","",1,"ion-margin-end",3,"contextmenu"],["buttonProfil",""],["name","person-circle-outline"],["color","light"],["slot","end","color","danger",1,"ion-hide-sm-down","margin",3,"click"],["slot","end","name","log-out-outline"],[1,"ion-hide-md-down"],["autoHide","false","color","light"]],template:function(a,u){1&a&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),e.YNc(3,n,1,0,"ion-menu-button",3),e.TgZ(4,"ion-img",4),e.NdJ("click",function(){return u.navigate("home")}),e.qZA()(),e.TgZ(5,"ion-title",5),e._uU(6),e.qZA(),e.TgZ(7,"ion-label",6),e._uU(8),e.qZA(),e.TgZ(9,"ion-chip",7,8),e.NdJ("contextmenu",function(C){return u.triggerUserPopover(C)}),e._UZ(11,"ion-icon",9),e.TgZ(12,"ion-label",10),e._uU(13),e.qZA()(),e.TgZ(14,"ion-button",11),e.NdJ("click",function(){return u.logoutClick()}),e._UZ(15,"ion-icon",12),e.TgZ(16,"ion-label",13),e._uU(17,"D\xe9connexion"),e.qZA()()()()),2&a&&(e.Q6J("translucent",!0),e.xp6(3),e.Q6J("ngIf",!u.hideMenuIcon),e.xp6(3),e.Oqu(u.title),e.xp6(2),e.Oqu(u.envMode),e.xp6(5),e.Oqu(null==u.user?null:u.user.username))},dependencies:[p.O5,t.YG,t.Sm,t.hM,t.Gu,t.gu,t.Xz,t.Q$,t.fG,t.sr,t.wd],styles:[".margin[_ngcontent-%COMP%]{margin-right:10px}.logo[_ngcontent-%COMP%]{width:100px}@media print{[_nghost-%COMP%]{display:none}}.dev[_ngcontent-%COMP%]{color:red;text-transform:uppercase;font-size:large;font-weight:700;padding-right:100px}"]}),i})()},2644:(f,m,o)=>{o.d(m,{o:()=>l});var g=o(520),d=o(2340),v=o(4850),e=o(5e3),t=o(6322),h=o(512);let l=(()=>{class s{constructor(n,c,i){this.http=n,this.requestService=c,this.alertService=i}getToolByInput(n){return new Promise((c,i)=>{switch(n.length){case 5:this.getToolByToolNumber(n).subscribe(r=>{c(r)},r=>{this.alertService.simpleAlert("Erreur","Le serveur outillage \xe0 renvoy\xe9 une erreur :",r),i()});break;case 7:break;case 8:n.startsWith("OT")&&this.getToolByToolNumber(n.substring(n.length-5)).subscribe(r=>{c(r)},r=>{this.alertService.simpleAlert("Erreur","Le serveur outillage \xe0 renvoy\xe9 une erreur :",r),i()});break;default:this.getToolByIdentification(n).then(r=>{c(r)},r=>{this.alertService.simpleAlert("Erreur","Le serveur outillage \xe0 renvoy\xe9 une erreur :",r),i()}).catch(r=>{console.error(r)})}})}getToolById(n){return this.requestService.createGetRequest(`${d.N.toolApi}tools/${n}`)}getToolByToolNumber(n){return this.requestService.createGetRequest(`${d.N.toolApi}tools?sapToolNumber=${n}`).pipe((0,v.U)(c=>1===c.length?c[0]:c.length>1?void console.error("Il y a plus d'un outillage correspondant en base de donn\xe9e"):void console.error("aucun outillage trouv\xe9")))}getToolByIdentification(n){return new Promise((c,i)=>{this.requestService.createGetRequest(`${d.N.toolApi}tools?identification=${n}`).subscribe(r=>{1===r.length?c(r[0]):i(r.length>1?"Il y a plus d'un outillage correspondant en base de donn\xe9e":"aucun outillage trouv\xe9")},r=>{console.log(r),i("Pas de r\xe9ponse du serveur")})})}getAllTools(){return new Promise((n,c)=>{const i=(new g.WM).append("content-type","application/json");this.http.get(`${d.N.apiServer}molding_tools`,{headers:i}).subscribe(r=>{n(r)},r=>{console.log(r),c()})})}getIri(n){return`/api/tools/${n.id}`}createTool(n){const c=n;return c.sapToolNumber=parseInt(n.sapToolNumber.substring(2),10),this.requestService.createPostRequest(`${d.N.toolApi}tools`,c)}}return s.\u0275fac=function(n){return new(n||s)(e.LFG(g.eN),e.LFG(t.s),e.LFG(h.c))},s.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},4147:f=>{f.exports={i8:"1.5.6"}}}]);
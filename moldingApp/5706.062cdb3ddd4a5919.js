"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5706],{5706:(v,s,i)=>{i.r(s),i.d(s,{AdminPageModule:()=>T});var u=i(9808),c=i(3075),t=i(3349),r=i(8555),m=i(2833),n=i(5e3),g=i(7704);let A=(()=>{class e{constructor(o,a){this.authService=o,this.router=a}ngOnInit(){this.user=this.authService.authUser}logoutClick(){this.authService.logout().then(()=>{this.router.navigate(["/login"])})}navigateHome(){this.router.navigate(["/home"])}}return e.\u0275fac=function(o){return new(o||e)(n.Y36(g.e),n.Y36(r.F0))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-shared-admin-header"]],decls:15,vars:2,consts:[[3,"translucent"],["color","primary"],["slot","start"],["color","light"],["src","assets/images/logoDaherFondBleu.png",1,"ion-hide-sm-down","logo",3,"click"],[1,"ion-text-uppercase","ion-text-center"],["id","button-profil","color","light","slot","end","outline","",1,"ion-margin-end"],["name","person-circle-outline"],["slot","end","color","danger",1,"ion-hide-sm-down",3,"click"],["slot","end","name","log-out-outline"],[1,"ion-hide-md-down"]],template:function(o,a){1&o&&(n.TgZ(0,"ion-header",0),n.TgZ(1,"ion-toolbar",1),n.TgZ(2,"ion-buttons",2),n._UZ(3,"ion-menu-button",3),n.TgZ(4,"ion-img",4),n.NdJ("click",function(){return a.navigateHome()}),n.qZA(),n.qZA(),n.TgZ(5,"ion-title",5),n._uU(6,"Administration"),n.qZA(),n.TgZ(7,"ion-chip",6),n._UZ(8,"ion-icon",7),n.TgZ(9,"ion-label",3),n._uU(10),n.qZA(),n.qZA(),n.TgZ(11,"ion-button",8),n.NdJ("click",function(){return a.logoutClick()}),n._UZ(12,"ion-icon",9),n.TgZ(13,"ion-label",10),n._uU(14,"D\xe9connexion"),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&o&&(n.Q6J("translucent",!1),n.xp6(10),n.Oqu(null==a.user?null:a.user.username))},directives:[t.Gu,t.sr,t.Sm,t.fG,t.Xz,t.wd,t.hM,t.gu,t.Q$,t.YG],styles:[".logo[_ngcontent-%COMP%]{width:100px}"]}),e})();const h=["menuAdmin"],Z=[{path:"",component:(()=>{class e{constructor(o){this.navCtrl=o}ngOnInit(){}ionViewWillEnter(){this.menuAdmin.open()}navigate(o){this.navCtrl.navigateRoot(o).then(()=>{}).catch(a=>{console.error(a)})}}return e.\u0275fac=function(o){return new(o||e)(n.Y36(t.SH))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-admin"]],viewQuery:function(o,a){if(1&o&&n.Gf(h,5),2&o){let l;n.iGM(l=n.CRH())&&(a.menuAdmin=l.first)}},decls:24,vars:1,consts:[["color","medium",3,"fullscreen"],["side","start","type","push","contentId","admin-content","open","true"],["menuAdmin",""],["color","danger"],["auto-hide","true"],["routerDirection","forward",3,"click"],["slot","end"],["id","admin-content"]],template:function(o,a){1&o&&(n._UZ(0,"app-shared-admin-header"),n.TgZ(1,"ion-content",0),n.TgZ(2,"ion-menu",1,2),n.TgZ(4,"ion-header"),n.TgZ(5,"ion-toolbar",3),n.TgZ(6,"ion-title"),n._uU(7,"Menu de l'admnistration"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(8,"ion-content"),n.TgZ(9,"ion-list"),n.TgZ(10,"ion-menu-toggle",4),n.TgZ(11,"ion-item",5),n.NdJ("click",function(){return a.navigate("admin/admin-user")}),n.TgZ(12,"ion-label"),n._uU(13,"Utilisateurs"),n.qZA(),n.TgZ(14,"ion-badge",6),n._uU(15,"11"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(16,"ion-item"),n._uU(17,"Outillages"),n.qZA(),n.TgZ(18,"ion-menu-toggle",4),n.TgZ(19,"ion-item",5),n.NdJ("click",function(){return a.navigate("admin/admin-molding")}),n._uU(20,"Moulages"),n.qZA(),n.qZA(),n.TgZ(21,"ion-item"),n._uU(22,"Kits"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n._UZ(23,"ion-router-outlet",7),n.qZA()),2&o&&(n.xp6(1),n.Q6J("fullscreen",!1))},directives:[A,t.W2,t.z0,t.Gu,t.sr,t.wd,t.q_,t.zc,t.Ie,t.Q$,t.yp,t.jP],styles:[""]}),e})(),canActivate:[m.p],data:{expectedRole:["ROLE_ADMIN"]},children:[{path:"admin-user",loadChildren:()=>Promise.all([i.e(741),i.e(5419),i.e(9356),i.e(8227)]).then(i.bind(i,8227)).then(e=>e.AdminUserPageModule),canActivate:[m.p],data:{expectedRole:["ROLE_ADMIN"]}},{path:"admin-molding",canActivate:[m.p],data:{expectedRole:["ROLE_ADMIN"]},loadChildren:()=>Promise.all([i.e(741),i.e(5419),i.e(9110),i.e(6256)]).then(i.bind(i,6256)).then(e=>e.AdminMoldingPageModule)}]}];let p=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[r.Bz.forChild(Z)],r.Bz]}),e})(),f=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[u.ez,c.u5,t.Pc]]}),e})(),T=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[u.ez,c.u5,t.Pc,p,f]]}),e})()}}]);
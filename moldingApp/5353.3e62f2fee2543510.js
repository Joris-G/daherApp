"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5353],{5353:(Ce,h,r)=>{r.r(h),r.d(h,{AdminPageModule:()=>Ue});var m=r(9808),_=r(4182),l=r(8402),o=r(9928),u=r(4406),f=r(2833),e=r(5e3),A=r(9528);function y(t,i){1&t&&e._UZ(0,"ion-spinner",9)}function x(t,i){1&t&&(e.TgZ(0,"div",10)(1,"ion-label"),e._uU(2,"Pas de moulage \xe0 afficher"),e.qZA()())}function w(t,i){1&t&&e._UZ(0,"th",24)}function D(t,i){if(1&t&&(e.TgZ(0,"td",25),e._UZ(1,"ion-icon",26),e.qZA()),2&t){const n=i.$implicit;e.xp6(1),e.Q6J("color",n.status?"danger":"success")}}function M(t,i){1&t&&(e.TgZ(0,"th",24),e._uU(1," ID "),e.qZA())}function N(t,i){if(1&t&&(e.TgZ(0,"td",25),e._uU(1),e.qZA()),2&t){const n=i.$implicit;e.xp6(1),e.hij(" ",n.id," ")}}function P(t,i){1&t&&(e.TgZ(0,"th",24),e._uU(1," Date du moulage "),e.qZA())}function S(t,i){if(1&t&&(e.TgZ(0,"td",25),e._uU(1),e.ALo(2,"date"),e.qZA()),2&t){const n=i.$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,n.moldingDay,"dd/MM/yyyy")," ")}}function k(t,i){1&t&&(e.TgZ(0,"th",24),e._uU(1," Cr\xe9\xe9 par "),e.qZA())}function Y(t,i){if(1&t&&(e.TgZ(0,"td",25),e._uU(1),e.qZA()),2&t){const n=i.$implicit;e.xp6(1),e.hij(" ",n.userCreat.username," ")}}function q(t,i){1&t&&(e.TgZ(0,"th",24),e._uU(1," Outillage "),e.qZA())}function Q(t,i){if(1&t&&(e.TgZ(0,"td",25),e._uU(1),e.qZA()),2&t){const n=i.$implicit;e.xp6(1),e.AsE(" ",n.OT.sapToolNumber," - ",n.OT.designation,"")}}function H(t,i){1&t&&e._UZ(0,"th",24)}function L(t,i){if(1&t&&(e.TgZ(0,"td",25)(1,"ion-button",27),e._uU(2," Editer "),e.qZA()()),2&t){const n=i.$implicit;e.xp6(1),e.Q6J("routerLink","/molding/create-molding/"+n.id)}}function I(t,i){1&t&&e._UZ(0,"tr",28)}function E(t,i){1&t&&e._UZ(0,"tr",29)}function O(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"div",11)(1,"ion-input",12),e.NdJ("ionInput",function(s){e.CHM(n);const d=e.oxw();return e.KtG(d.applyFilter(s))}),e.qZA(),e.TgZ(2,"table",13),e.ynx(3,14),e.YNc(4,w,1,0,"th",15),e.YNc(5,D,2,1,"td",16),e.BQk(),e.ynx(6,17),e.YNc(7,M,2,0,"th",15),e.YNc(8,N,2,1,"td",16),e.BQk(),e.ynx(9,18),e.YNc(10,P,2,0,"th",15),e.YNc(11,S,3,4,"td",16),e.BQk(),e.ynx(12,19),e.YNc(13,k,2,0,"th",15),e.YNc(14,Y,2,1,"td",16),e.BQk(),e.ynx(15,20),e.YNc(16,q,2,0,"th",15),e.YNc(17,Q,2,2,"td",16),e.BQk(),e.ynx(18,21),e.YNc(19,H,1,0,"th",15),e.YNc(20,L,3,1,"td",16),e.BQk(),e.YNc(21,I,1,0,"tr",22),e.YNc(22,E,1,0,"tr",23),e.qZA()()}if(2&t){const n=e.oxw();e.xp6(2),e.Q6J("dataSource",n.dataSource),e.xp6(19),e.Q6J("matHeaderRowDef",n.displayedMoldingColumns),e.xp6(1),e.Q6J("matRowDefColumns",n.displayedMoldingColumns)}}let B=(()=>{class t{constructor(n){this.moldingService=n,this.moldingListLoading=!1,this.moldingsError=!1,this.displayedMoldingColumns=["status","id","moldingDay","createdBy","outillage","commands"]}ngAfterViewChecked(){}ngOnDestroy(){}ionViewDidEnter(){this.getMoldings()}ngOnInit(){}getMoldings(){this.moldingListLoading=!0,this.moldingService.getMoldings().subscribe(n=>{this.moldings=n,this.moldingListLoading=!1,this.moldingsError=!1,this.moldings.forEach(a=>{a.status=!1}),this.dataSource=new l.by(this.moldings)},n=>{console.error(n),this.moldingListLoading=!1,this.moldingsError=!0})}applyFilter(n){this.dataSource.filter=n.target.value.trim().toLowerCase()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(A.s))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-admin-molding"]],decls:37,vars:3,consts:[["color","light"],["size","8"],[1,"ion-no-margin"],["slot","end","name","circles",4,"ngIf"],["size","small","slot","end",3,"click"],["size","small","slot","icon-only","name","refresh"],["class","error",4,"ngIf"],["class","moldings-table",4,"ngIf"],["size","4"],["slot","end","name","circles"],[1,"error"],[1,"moldings-table"],["type","text","placeholder","Num\xe9ro d'OT",3,"ionInput"],["mat-table","","fixedLayout","true",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","status"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","id"],["matColumnDef","moldingDay"],["matColumnDef","createdBy"],["matColumnDef","outillage"],["matColumnDef","commands"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["name","ellipse",3,"color"],["size","small","expand","block","fill","solid","shape","round",3,"routerLink"],["mat-header-row",""],["mat-row",""]],template:function(n,a){1&n&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"Administration des moulages"),e.qZA()()(),e.TgZ(4,"ion-content",0)(5,"ion-grid")(6,"ion-row")(7,"ion-col",1)(8,"ion-card")(9,"ion-card-header")(10,"ion-toolbar",2)(11,"ion-card-title"),e._uU(12,"Liste des moulages"),e.qZA(),e.YNc(13,y,1,0,"ion-spinner",3),e.TgZ(14,"ion-button",4),e.NdJ("click",function(){return a.getMoldings()}),e._UZ(15,"ion-icon",5),e.qZA()()(),e.TgZ(16,"ion-card-content"),e.YNc(17,x,3,0,"div",6),e.YNc(18,O,23,3,"div",7),e.qZA()()(),e.TgZ(19,"ion-col",8)(20,"ion-card")(21,"ion-card-header")(22,"ion-card-title"),e._uU(23,"Tableau de bord"),e.qZA()(),e.TgZ(24,"ion-card-content")(25,"ion-card")(26,"ion-card-header")(27,"ion-card-subtitle"),e._uU(28,"Nouveaux moulages"),e.qZA()(),e.TgZ(29,"ion-card-content"),e._uU(30," GRAPHIQUE ICI "),e.qZA()(),e.TgZ(31,"ion-card")(32,"ion-card-header")(33,"ion-card-subtitle"),e._uU(34,"Nombre de connexions par jour"),e.qZA()(),e.TgZ(35,"ion-card-content"),e._uU(36," GRAPHIQUE ICI "),e.qZA()()()()()()()()),2&n&&(e.xp6(13),e.Q6J("ngIf",a.moldingListLoading),e.xp6(4),e.Q6J("ngIf",a.moldingsError&&!a.moldingListLoading),e.xp6(1),e.Q6J("ngIf",a.moldings))},dependencies:[m.O5,o.YG,o.PM,o.FN,o.Zi,o.tO,o.Dq,o.wI,o.W2,o.jY,o.Gu,o.gu,o.pK,o.Q$,o.Nd,o.PQ,o.sr,o.wd,o.j9,o.YI,l.BZ,l.fO,l.as,l.w1,l.Dz,l.nj,l.ge,l.ev,l.XQ,l.Gk,u.rH,m.uU],styles:["mat-table[_ngcontent-%COMP%], table[_ngcontent-%COMP%]{width:100%}"]}),t})();var J=r(9356),g=r(1377),Z=r(9172),T=r(2853),v=r(4337),R=r(2361);function j(t,i){1&t&&(e.TgZ(0,"th",15),e._uU(1," Id "),e.qZA())}function G(t,i){if(1&t&&(e.TgZ(0,"td",16),e._uU(1),e.qZA()),2&t){const n=i.$implicit;e.xp6(1),e.hij(" ",n.id," ")}}function $(t,i){1&t&&(e.TgZ(0,"th",15),e._uU(1," UserName "),e.qZA())}function F(t,i){if(1&t&&(e.TgZ(0,"td",16),e._uU(1),e.qZA()),2&t){const n=i.$implicit;e.xp6(1),e.hij(" ",n.username," ")}}function z(t,i){1&t&&(e.TgZ(0,"th",15),e._uU(1," Nom "),e.qZA())}function W(t,i){if(1&t&&(e.TgZ(0,"td",16),e._uU(1),e.qZA()),2&t){const n=i.$implicit;e.xp6(1),e.hij(" ",n.nom," ")}}function X(t,i){1&t&&(e.TgZ(0,"th",15),e._uU(1," Pr\xe9nom "),e.qZA())}function K(t,i){if(1&t&&(e.TgZ(0,"td",16),e._uU(1),e.qZA()),2&t){const n=i.$implicit;e.xp6(1),e.hij(" ",n.prenom," ")}}function V(t,i){1&t&&(e.TgZ(0,"th",15),e._uU(1," Matricule "),e.qZA())}function ee(t,i){if(1&t&&(e.TgZ(0,"td",16),e._uU(1),e.qZA()),2&t){const n=i.$implicit;e.xp6(1),e.hij(" ",n.matricule," ")}}function te(t,i){1&t&&(e.TgZ(0,"th",15),e._uU(1," Mail "),e.qZA())}function ne(t,i){if(1&t&&(e.TgZ(0,"td",16),e._uU(1),e.qZA()),2&t){const n=i.$implicit;e.xp6(1),e.hij(" ",n.mail," ")}}function ie(t,i){1&t&&(e.TgZ(0,"th",15),e._uU(1," Roles "),e.qZA())}function oe(t,i){if(1&t&&(e.TgZ(0,"td",16),e._uU(1),e.qZA()),2&t){const n=i.$implicit;e.xp6(1),e.hij(" ",n.roles," ")}}function ae(t,i){1&t&&e._UZ(0,"th",15)}function se(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"td",17)(1,"ion-segment",18),e.NdJ("ionChange",function(s){const c=e.CHM(n).$implicit,p=e.oxw();return e.KtG(p.statusChanged(s,c))}),e.TgZ(2,"ion-segment-button",19),e._UZ(3,"ion-icon",20),e.qZA(),e.TgZ(4,"ion-segment-button",21),e._UZ(5,"ion-icon",22),e.qZA()()()}if(2&t){const n=i.$implicit;e.xp6(1),e.Q6J("value",n.isActive)}}function re(t,i){1&t&&e._UZ(0,"tr",23)}function le(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"tr",24),e.NdJ("click",function(){const d=e.CHM(n).$implicit,c=e.oxw();return e.KtG(c.onSelectUser(d))}),e.qZA()}}let de=(()=>{class t{constructor(n,a,s){this.userService=n,this.loadingService=a,this.alertService=s,this.isUserSelected=!1,this.displayedUserColumns=["id","username","nom","prenom","matricule","roles","commands"]}ngOnInit(){this.users$=this.userService.getUsers()}statusChanged(n,a){this.confirmUser(a,n.detail.value)}onSelectUser(n){console.log(n),this.isUserSelected=!0,this.selectedUser=n}confirmUser(n,a){this.loadingService.startLoading("Mise \xe0 jour de l'utilisateur"),this.userService.confirmUser(n.id,a).subscribe(s=>{this.loadingService.stopLoading()},s=>{this.loadingService.stopLoading(),this.alertService.simpleAlert("Erreur","Le serveur \xe0 renvoy\xe9 une erreur",`${s}`)})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(g.f),e.Y36(Z.b),e.Y36(T.c))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-admin-user-table"]],decls:28,vars:6,consts:[["mat-table","",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","username"],["matColumnDef","nom"],["matColumnDef","prenom"],["matColumnDef","matricule"],["matColumnDef","mail"],["matColumnDef","roles"],["matColumnDef","commands"],["mat-cell","","class","commands",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],[3,"user","userState","stateChangeEv"],["mat-header-cell",""],["mat-cell",""],["mat-cell","",1,"commands"],[3,"value","ionChange"],["value","true"],["color","success","name","checkmark-outline"],["value","false"],["color","danger","name","close-outline"],["mat-header-row",""],["mat-row","",3,"click"]],template:function(n,a){1&n&&(e.TgZ(0,"table",0),e.ynx(1,1),e.YNc(2,j,2,0,"th",2),e.YNc(3,G,2,1,"td",3),e.BQk(),e.ynx(4,4),e.YNc(5,$,2,0,"th",2),e.YNc(6,F,2,1,"td",3),e.BQk(),e.ynx(7,5),e.YNc(8,z,2,0,"th",2),e.YNc(9,W,2,1,"td",3),e.BQk(),e.ynx(10,6),e.YNc(11,X,2,0,"th",2),e.YNc(12,K,2,1,"td",3),e.BQk(),e.ynx(13,7),e.YNc(14,V,2,0,"th",2),e.YNc(15,ee,2,1,"td",3),e.BQk(),e.ynx(16,8),e.YNc(17,te,2,0,"th",2),e.YNc(18,ne,2,1,"td",3),e.BQk(),e.ynx(19,9),e.YNc(20,ie,2,0,"th",2),e.YNc(21,oe,2,1,"td",3),e.BQk(),e.ynx(22,10),e.YNc(23,ae,1,0,"th",2),e.YNc(24,se,6,1,"td",11),e.BQk(),e.YNc(25,re,1,0,"tr",12),e.YNc(26,le,1,0,"tr",13),e.qZA(),e.TgZ(27,"app-user-sheet",14),e.NdJ("stateChangeEv",function(d){return a.isUserSelected=d}),e.qZA()),2&n&&(e.Q6J("dataSource",a.users$),e.xp6(25),e.Q6J("matHeaderRowDef",a.displayedUserColumns)("matHeaderRowDefSticky",!0),e.xp6(1),e.Q6J("matRowDefColumns",a.displayedUserColumns),e.xp6(1),e.Q6J("user",a.selectedUser)("userState",a.isUserSelected))},dependencies:[o.gu,o.cJ,o.GO,o.QI,l.BZ,l.fO,l.as,l.w1,l.Dz,l.nj,l.ge,l.ev,l.XQ,l.Gk,R.A]}),t})();const ce=["newUsers"];let me=(()=>{class t{constructor(n,a,s,d,c){this.userService=n,this.datePipe=a,this.loadingService=s,this.alertService=d,this.serviceService=c,this.weeklyLabels=[],this.weeklyUsers=[]}ngOnInit(){this.users=[],this.loadingService.startLoading(),this.serviceService.getServices().subscribe(n=>{n.forEach(a=>{a.users.forEach(s=>this.users.push(s))}),this.weeklyLabels=this.createWeeklyLabel(),this.weeklyUsers=this.createWeeklyUserData(),this.lineChart=new J.Z(this.newUsersCanvas.nativeElement,{type:"line",data:{labels:this.weeklyLabels,datasets:[{label:"Evolution du nombre d'inscription",fill:!1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:this.weeklyUsers,spanGaps:!1}]}}),this.lineChart.update(),this.loadingService.stopLoading()})}createWeeklyLabel(){const n=new Date,a=new Date(2022,0,1),s=[];for(;a<n;)s.push(this.datePipe.transform(a,"dd/MM")),a.setDate(a.getDate()+7);return s}createWeeklyUserData(){const n=new Date;let a=new Date(2022,0,1);const s=[];for(;a<n;){const d=new Date(a);d.setDate(d.getDate()+7);const p=this.users.filter(b=>new Date(b.createdAt)>a&&new Date(b.createdAt)<=d).length;s.push(p),a=d}return s}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(g.f),e.Y36(m.uU),e.Y36(Z.b),e.Y36(T.c),e.Y36(v.z))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-admin-user"]],viewQuery:function(n,a){if(1&n&&e.Gf(ce,5),2&n){let s;e.iGM(s=e.CRH())&&(a.newUsersCanvas=s.first)}},decls:30,vars:0,consts:[["color","light"],["false",""],["size","8"],[1,"table-card-content"],["size","4"],["newUsers",""]],template:function(n,a){1&n&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"Administration des utilisateurs"),e.qZA()()(),e.TgZ(4,"ion-content",0)(5,"ion-grid",1)(6,"ion-row")(7,"ion-col",2)(8,"ion-card")(9,"ion-card-content",3),e._UZ(10,"app-admin-user-table"),e.qZA()()(),e.TgZ(11,"ion-col",4)(12,"ion-card")(13,"ion-card-header")(14,"ion-card-title"),e._uU(15,"Tableau de bord"),e.qZA()(),e.TgZ(16,"ion-card-content")(17,"ion-card")(18,"ion-card-header")(19,"ion-card-subtitle"),e._uU(20,"Nouveaux inscrits"),e.qZA()(),e.TgZ(21,"ion-card-content"),e._UZ(22,"canvas",null,5),e.qZA()(),e.TgZ(24,"ion-card")(25,"ion-card-header")(26,"ion-card-subtitle"),e._uU(27,"Nombre de connexions par jour"),e.qZA()(),e.TgZ(28,"ion-card-content"),e._uU(29," GRAPHIQUE ICI "),e.qZA()()()()()()()())},dependencies:[o.PM,o.FN,o.Zi,o.tO,o.Dq,o.wI,o.W2,o.jY,o.Gu,o.Nd,o.sr,o.wd,de],styles:["mat-cell[_ngcontent-%COMP%]{padding:100px!important}table[_ngcontent-%COMP%]{width:100%}.commands[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around}ion-card[_ngcontent-%COMP%]{max-height:100%;flex-grow:1}.table-card-content[_ngcontent-%COMP%]{width:100%;height:100%;overflow:auto}.table-card-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}"]}),t})();var ue=r(7704),U=r(520),C=r(8393);let ge=(()=>{class t{constructor(n,a){this.socket=n,this.http=a,this.httpHeaders=(new U.WM).append("Access-Control-Allow-Origin","*"),Notification.requestPermission().then(s=>{console.log(s),"granted"===s&&this.socket.on("notification",d=>{new Notification("Notification depuis le serveur",{body:d.message,icon:"assets/icons/icon-72x72.png"})})})}newNotif(){this.http.post("http://localhost:3000/send-notification",{message:"testmessage"},{headers:this.httpHeaders}).subscribe(n=>{})}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(C.sk),e.LFG(U.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),pe=(()=>{class t{constructor(n,a,s,d){this.authService=n,this.router=a,this.notificationsService=s,this.socket=d}ngOnDestroy(){this.socket.disconnect()}ionViewDidLeave(){console.log("view did leave"),this.socket.disconnect()}ngOnInit(){this.user=this.authService.authUser}logoutClick(){this.authService.logout().subscribe(()=>{this.router.navigate(["/login"])})}navigateHome(){this.router.navigate(["/home"])}notifyClick(){console.log("notify click"),this.notificationsService.newNotif()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(ue.e),e.Y36(u.F0),e.Y36(ge),e.Y36(C.sk))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-shared-admin-header"]],decls:17,vars:2,consts:[[3,"translucent"],["color","primary"],["slot","start"],["color","light"],["src","assets/images/logoDaherFondBleu.png",1,"ion-hide-sm-down","logo",3,"click"],[1,"ion-text-uppercase","ion-text-center"],["id","button-profil","color","light","slot","end","outline","",1,"ion-margin-end"],["name","person-circle-outline"],["slot","end","color","danger",1,"ion-hide-sm-down",3,"click"],["slot","end","name","log-out-outline"],[1,"ion-hide-md-down"],["slot","end",3,"click"]],template:function(n,a){1&n&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),e._UZ(3,"ion-menu-button",3),e.TgZ(4,"ion-img",4),e.NdJ("click",function(){return a.navigateHome()}),e.qZA()(),e.TgZ(5,"ion-title",5),e._uU(6,"Administration"),e.qZA(),e.TgZ(7,"ion-chip",6),e._UZ(8,"ion-icon",7),e.TgZ(9,"ion-label",3),e._uU(10),e.qZA()(),e.TgZ(11,"ion-button",8),e.NdJ("click",function(){return a.logoutClick()}),e._UZ(12,"ion-icon",9),e.TgZ(13,"ion-label",10),e._uU(14,"D\xe9connexion"),e.qZA()(),e.TgZ(15,"ion-button",11),e.NdJ("click",function(){return a.notifyClick()}),e._uU(16," Notify "),e.qZA()()()),2&n&&(e.Q6J("translucent",!1),e.xp6(10),e.Oqu(null==a.user?null:a.user.username))},dependencies:[o.YG,o.Sm,o.hM,o.Gu,o.gu,o.Xz,o.Q$,o.fG,o.sr,o.wd],styles:[".logo[_ngcontent-%COMP%]{width:100px}"]}),t})();const he=["menuAdmin"],_e=[{path:"",component:(()=>{class t{constructor(n){this.navCtrl=n}ionViewWillEnter(){this.menuAdmin.open()}navigate(n){this.navCtrl.navigateForward(n)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(o.SH))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-admin"]],viewQuery:function(n,a){if(1&n&&e.Gf(he,5),2&n){let s;e.iGM(s=e.CRH())&&(a.menuAdmin=s.first)}},decls:24,vars:1,consts:[["color","medium",3,"fullscreen"],["side","start","type","push","contentId","admin-content","open","true"],["menuAdmin",""],["color","danger"],["auto-hide","true"],[3,"click"],["slot","end"],["id","admin-content"]],template:function(n,a){1&n&&(e._UZ(0,"app-shared-admin-header"),e.TgZ(1,"ion-content",0)(2,"ion-menu",1,2)(4,"ion-header")(5,"ion-toolbar",3)(6,"ion-title"),e._uU(7,"Menu de l'admnistration"),e.qZA()()(),e.TgZ(8,"ion-content")(9,"ion-list")(10,"ion-menu-toggle",4)(11,"ion-item",5),e.NdJ("click",function(){return a.navigate("admin/admin-user")}),e.TgZ(12,"ion-label"),e._uU(13,"Utilisateurs"),e.qZA(),e.TgZ(14,"ion-badge",6),e._uU(15,"11"),e.qZA()()(),e.TgZ(16,"ion-item"),e._uU(17,"Outillages"),e.qZA(),e.TgZ(18,"ion-menu-toggle",4)(19,"ion-item",5),e.NdJ("click",function(){return a.navigate("admin/admin-molding")}),e._uU(20,"Moulages"),e.qZA()(),e.TgZ(21,"ion-item"),e._uU(22,"Kits"),e.qZA()()()(),e._UZ(23,"ion-router-outlet",7),e.qZA()),2&n&&(e.xp6(1),e.Q6J("fullscreen",!1))},dependencies:[o.yp,o.W2,o.Gu,o.Ie,o.Q$,o.q_,o.z0,o.zc,o.sr,o.wd,o.jP,pe]}),t})(),children:[{path:"admin-user",component:me,canActivate:[f.p],data:{expectedRole:["ROLE_ADMIN"]}},{path:"admin-molding",canActivate:[f.p],data:{expectedRole:["ROLE_ADMIN"]},component:B}]},{path:"**",redirectTo:"home"}];let fe=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.Bz.forChild(_e),u.Bz]}),t})(),Ae=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[m.ez,_.u5,o.Pc]}),t})();var Ze=r(5375),Te=r(2396),ve=r(2666);let Ue=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[m.uU,Ze.e,A.s,g.f,v.z],imports:[m.ez,_.u5,o.Pc,l.p0,fe,Ae,Te.D,ve.Z]}),t})()}}]);
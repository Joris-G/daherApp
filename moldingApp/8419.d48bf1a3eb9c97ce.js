"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8419],{8419:(H,u,r)=>{r.r(u),r.d(u,{ManageTeamPageModule:()=>z});var e=r(5e3),g=r(9808),m=r(3075),i=r(3349),_=r(8555),p=r(678),d=r(449),l=r(8402),f=r(1377),T=r(8627);function Z(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"ion-content"),e._uU(1,"Cr\xe9er un groupe"),e.qZA(),e._UZ(2,"ion-input",26,27),e.TgZ(4,"ion-button",28),e.NdJ("click",function(){e.CHM(n);const c=e.MAs(3);return e.oxw().addGroupClick(c.value.toString())}),e._uU(5," Ajouter "),e.qZA()}}function h(t,o){if(1&t&&(e.TgZ(0,"ion-item"),e.TgZ(1,"ion-label"),e._uU(2),e.qZA(),e.qZA()),2&t){const n=o.$implicit;e.xp6(2),e.hij(" ",n.libelle," ")}}function M(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"ion-button",29),e.NdJ("click",function(){e.CHM(n);const c=e.oxw();return c.removeUsersOfTeam(c.selection.selected)}),e._uU(1," Faire sortir de l'\xe9quipe "),e.qZA()}}function P(t,o){1&t&&(e.TgZ(0,"th",30),e._uU(1," Nom "),e.qZA())}function x(t,o){if(1&t&&(e.TgZ(0,"td",31),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.xp6(1),e.hij(" ",n.nom," ")}}function A(t,o){1&t&&(e.TgZ(0,"th",30),e._uU(1," Pr\xe9nom "),e.qZA())}function C(t,o){if(1&t&&(e.TgZ(0,"td",31),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.xp6(1),e.hij(" ",n.prenom," ")}}function v(t,o){1&t&&(e.TgZ(0,"th",30),e._uU(1," Groupe "),e.qZA())}function U(t,o){if(1&t&&(e.TgZ(0,"ion-label"),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.xp6(1),e.hij(" ",n.libelle," ")}}function b(t,o){if(1&t&&(e.TgZ(0,"ion-list"),e.YNc(1,U,2,1,"ion-label",7),e.qZA()),2&t){const n=e.oxw().$implicit;e.xp6(1),e.Q6J("ngForOf",n.groupeAffected)}}function q(t,o){if(1&t&&(e.TgZ(0,"ion-select-option",39),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.Q6J("value",n),e.xp6(1),e.hij(" ",n.libelle,"")}}function O(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"ion-select",36,37),e.NdJ("ionChange",function(){e.CHM(n);const c=e.MAs(1),s=e.oxw(2).$implicit;return e.oxw().addGroupToUser(c.value,s)}),e.YNc(2,q,2,2,"ion-select-option",38),e.qZA()}if(2&t){const n=e.oxw(3);e.xp6(2),e.Q6J("ngForOf",n.groups)}}function N(t,o){if(1&t&&(e.TgZ(0,"ion-item",34),e.YNc(1,O,3,1,"ion-select",35),e.qZA()),2&t){const n=e.oxw().$implicit;e.xp6(1),e.Q6J("ngIf",0===n.groupeAffected.length)}}function w(t,o){if(1&t&&(e.TgZ(0,"td",31),e.YNc(1,b,2,1,"ion-list",32),e.YNc(2,N,2,1,"ion-item",33),e.qZA()),2&t){const n=o.$implicit;e.xp6(1),e.Q6J("ngIf",n.groupeAffected.length>0),e.xp6(1),e.Q6J("ngIf",0===n.groupeAffected.length)}}function y(t,o){1&t&&(e.TgZ(0,"th",30),e._uU(1," Programme avion "),e.qZA())}function Y(t,o){if(1&t&&(e.TgZ(0,"td",31),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.xp6(1),e.hij(" ",n.programmeAvion," ")}}function k(t,o){1&t&&(e.TgZ(0,"th",30),e._uU(1," Derni\xe8re connexion "),e.qZA())}function Q(t,o){if(1&t&&(e.TgZ(0,"td",31),e._uU(1),e.ALo(2,"date"),e.qZA()),2&t){const n=o.$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,n.lastCon,"EEE dd/MM/yy")," ")}}function S(t,o){1&t&&e._UZ(0,"th",30)}function J(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"ion-button",42),e.NdJ("click",function(){e.CHM(n);const c=e.oxw().$implicit;return e.oxw().updateUser(c)}),e._UZ(1,"ion-icon",43),e.qZA()}}function D(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"ion-button",44),e.NdJ("click",function(){return e.CHM(n),e.oxw().$implicit.isActive=!0}),e._uU(1," Accepter "),e.qZA()}}function F(t,o){if(1&t&&(e.TgZ(0,"td",31),e.YNc(1,J,2,0,"ion-button",40),e.YNc(2,D,2,0,"ion-button",41),e.qZA()),2&t){const n=o.$implicit;e.xp6(1),e.Q6J("ngIf",n.isUpdated),e.xp6(1),e.Q6J("ngIf",!n.isActive)}}function G(t,o){1&t&&e._UZ(0,"tr",45)}function $(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"tr",46),e.NdJ("click",function(){const s=e.CHM(n).$implicit;return e.oxw().selection.toggle(s)}),e.qZA()}if(2&t){const n=o.$implicit,a=e.oxw();e.Tol(a.selection.isSelected(n)?"row-selected":"")}}const E=[{path:"",component:(()=>{class t{constructor(n,a){this.userService=n,this.programService=a,this.page={title:"G\xe9rer l'\xe9quipe"},this.toolsUserDataSource=new l.by,this.selection=new d.Ov(!0,[]),this.displayedColumns=["nom","prenom","groupeAffectation","lastCon","buttons"]}ngOnInit(){this.getGroups(),this.getToolUsers()}getToolUsers(){this.userService.getUsers().then(n=>{n.map(a=>{}),this.toolsUserDataSource.data=n})}getPrograms(){return new Promise((n,a)=>{this.programService.getPrograms().then(c=>{this.programs=c,n()})})}getGroups(){this.userService.getGroups().then(n=>{this.groups=n})}addGroupClick(n){n&&this.userService.createGroup({libelle:n}).then(()=>{this.getGroups()})}addGroupToUser(n,a){a.groupeAffectations=n,a.isUpdated=!0}updateUser(n){this.userService.addUserToGroup(n).then(a=>{n=a,this.getToolUsers()})}removeUsersOfTeam(n){n.forEach(a=>{this.userService.addUserToGroup(a).then(c=>{a=c,this.getToolUsers()})})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(f.f),e.Y36(T.W))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-manage-team"]],decls:52,vars:8,consts:[["color","dark"],[1,"content",3,"fullscreen"],["trigger","trigger-button","triggerAction","click","side","top","alignment","center","component","toolInputComponent"],[1,"content"],["color","light"],["slot","end","size","small","id","trigger-button"],["slot","start","name","add"],[4,"ngFor","ngForOf"],[1,"table-card"],[1,"table-card-content"],[1,"table"],["slot","end"],["size","small"],["slot","end","size","small","color","success","fill","solid",3,"click",4,"ngIf"],["mat-table","",1,"ion-margin",3,"dataSource"],["table",""],["matColumnDef","nom"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","prenom"],["matColumnDef","groupeAffectation"],["matColumnDef","progAvion"],["matColumnDef","lastCon"],["matColumnDef","buttons"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",3,"class","click",4,"matRowDef","matRowDefColumns"],["type","text","placeholder","Nom du groupe"],["inputGroup",""],["expand","block","color","primary",3,"click"],["slot","end","size","small","color","success","fill","solid",3,"click"],["mat-header-cell",""],["mat-cell",""],[4,"ngIf"],["lines","none","color","light",4,"ngIf"],["lines","none","color","light"],["multiple","true","placeholder","Selectionner un groupe",3,"ionChange",4,"ngIf"],["multiple","true","placeholder","Selectionner un groupe",3,"ionChange"],["select",""],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["size","small","color","secondary",3,"click",4,"ngIf"],["size","small",3,"click",4,"ngIf"],["size","small","color","secondary",3,"click"],["slot","icon-only","name","save-outline"],["size","small",3,"click"],["mat-header-row",""],["mat-row","",3,"click"]],template:function(n,a){1&n&&(e.TgZ(0,"ion-header"),e.TgZ(1,"ion-toolbar",0),e.TgZ(2,"ion-title"),e._uU(3),e.qZA(),e.qZA(),e.qZA(),e.TgZ(4,"ion-content",1),e.TgZ(5,"ion-popover",2),e.YNc(6,Z,6,0,"ng-template"),e.qZA(),e.TgZ(7,"div",3),e.TgZ(8,"ion-card"),e.TgZ(9,"ion-card-header",4),e.TgZ(10,"ion-card-title"),e._uU(11,"Groupes d'affectations "),e.qZA(),e.qZA(),e.TgZ(12,"ion-card-content"),e.TgZ(13,"ion-toolbar"),e.TgZ(14,"ion-button",5),e._UZ(15,"ion-icon",6),e._uU(16," Cr\xe9er "),e.qZA(),e.qZA(),e.TgZ(17,"ion-list"),e.YNc(18,h,3,1,"ion-item",7),e.qZA(),e.qZA(),e.qZA(),e.TgZ(19,"ion-card",8),e.TgZ(20,"ion-card-header",4),e.TgZ(21,"ion-card-title"),e._uU(22,"Liste des utilisateurs"),e.qZA(),e.qZA(),e.TgZ(23,"ion-card-content",9),e.TgZ(24,"div",10),e.TgZ(25,"ion-toolbar"),e.TgZ(26,"ion-buttons",11),e.TgZ(27,"ion-button",12),e._uU(28," Tout "),e.qZA(),e.YNc(29,M,2,0,"ion-button",13),e.qZA(),e.qZA(),e.TgZ(30,"table",14,15),e.ynx(32,16),e.YNc(33,P,2,0,"th",17),e.YNc(34,x,2,1,"td",18),e.BQk(),e.ynx(35,19),e.YNc(36,A,2,0,"th",17),e.YNc(37,C,2,1,"td",18),e.BQk(),e.ynx(38,20),e.YNc(39,v,2,0,"th",17),e.YNc(40,w,3,2,"td",18),e.BQk(),e.ynx(41,21),e.YNc(42,y,2,0,"th",17),e.YNc(43,Y,2,1,"td",18),e.BQk(),e.ynx(44,22),e.YNc(45,k,2,0,"th",17),e.YNc(46,Q,3,4,"td",18),e.BQk(),e.ynx(47,23),e.YNc(48,S,1,0,"th",17),e.YNc(49,F,3,2,"td",18),e.BQk(),e.YNc(50,G,1,0,"tr",24),e.YNc(51,$,1,2,"tr",25),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.xp6(3),e.Oqu(a.page.title),e.xp6(1),e.Q6J("fullscreen",!1),e.xp6(14),e.Q6J("ngForOf",a.groups),e.xp6(11),e.Q6J("ngIf",!a.selection.isEmpty()),e.xp6(1),e.Q6J("dataSource",a.toolsUserDataSource),e.xp6(20),e.Q6J("matHeaderRowDef",a.displayedColumns)("matHeaderRowDefSticky",!0),e.xp6(1),e.Q6J("matRowDefColumns",a.displayedColumns))},directives:[i.Gu,i.sr,i.wd,i.W2,i.d8,i.PM,i.Zi,i.Dq,i.FN,i.YG,i.gu,i.q_,g.sg,i.Sm,g.O5,l.BZ,l.w1,l.fO,l.Dz,l.as,l.nj,i.pK,i.j9,i.Ie,i.Q$,l.ge,l.ev,i.t9,i.QI,i.n0,l.XQ,l.Gk],pipes:[g.uU],styles:[".content[_ngcontent-%COMP%]{display:flex;flex-direction:row;height:100%}.content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{max-height:100%;flex-grow:1}.content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .table-card-content[_ngcontent-%COMP%]{width:100%;height:100%;overflow:auto}.content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .table-card-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}.content[_ngcontent-%COMP%]   .table-card[_ngcontent-%COMP%]{flex-grow:4}.row-selected[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]{color:var(--ion-color-danger)}tr[_ngcontent-%COMP%]:hover > td[_ngcontent-%COMP%]{color:var(--ion-color-danger)}"]}),t})()},{path:"**",component:p.U}];let I=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[_.Bz.forChild(E)],_.Bz]}),t})();var j=r(6076);let z=(()=>{class t{constructor(){(0,g.qS)(j.Z)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[{provide:e.soG,useValue:"fr-FR"}],imports:[[g.ez,m.u5,i.Pc,I,l.p0]]}),t})()}}]);
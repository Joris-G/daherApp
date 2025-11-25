// src/app/_interfaces/tooling/tool-request-types.ts
var RequestType;
(function(RequestType2) {
  RequestType2["SBO"] = "sbo";
  RequestType2["MAINTENANCE"] = "maintenance";
  RequestType2["CONTROLE"] = "controle";
})(RequestType || (RequestType = {}));
var RequestStatus;
(function(RequestStatus2) {
  RequestStatus2["DRAFT"] = "Brouillon";
  RequestStatus2["SUBMITTED"] = "Nouvelle";
  RequestStatus2["IN_PROGRESS"] = "En cours";
  RequestStatus2["COMPLETED"] = "Finalis\xE9e";
  RequestStatus2["RETURNED"] = "Retourn\xE9e";
  RequestStatus2["CANCELLED"] = "Annul\xE9e";
  RequestStatus2["STANDBY"] = "En attente";
})(RequestStatus || (RequestStatus = {}));
var TypeRapport;
(function(TypeRapport2) {
  TypeRapport2["MAIL"] = "Mail";
  TypeRapport2["DQRC"] = "DQRC";
  TypeRapport2["PV_IDENTIFICATION"] = "PV d`identification ou de contr\xF4le";
})(TypeRapport || (TypeRapport = {}));
var MoyenMesure;
(function(MoyenMesure2) {
  MoyenMesure2["BRAS"] = "Bras";
  MoyenMesure2["LASER"] = "Laser";
  MoyenMesure2["LASER_TPROBE"] = "laser + TProbe";
})(MoyenMesure || (MoyenMesure = {}));
var ToolRequest = class {
  id;
  type;
  typeData;
  demandeur;
  bloquantProd;
  createdAt;
  dateBesoin;
  outillage;
  groupeAffectation;
  affectation;
  dateAffectation;
  datePlanif;
  statut;
  dateReal;
  userReal;
  toolingNote;
};

export {
  RequestType,
  RequestStatus,
  TypeRapport,
  MoyenMesure,
  ToolRequest
};
//# sourceMappingURL=chunk-WS32T5JK.js.map

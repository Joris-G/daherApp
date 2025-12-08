// src/app/tooling/tool-request-types.ts
var RequestType;
(function(RequestType2) {
  RequestType2["SBO"] = "SBO";
  RequestType2["MAINTENANCE"] = "MAINTENANCE";
  RequestType2["CONTROLE"] = "CONTROLE";
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

export {
  RequestType,
  RequestStatus,
  TypeRapport,
  MoyenMesure
};
//# sourceMappingURL=chunk-HG2UKUY7.js.map

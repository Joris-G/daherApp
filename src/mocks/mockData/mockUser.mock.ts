import { User } from "src/app/_interfaces/user";

export const mockUsers: User[] = [
  { id: 1, isActive: false, nom: 'admin', prenom: 'admin', password: ' ', matricule: 111, email: 'admin.admin@daher.com', roles: [], createdAt: new Date(2025, 11, 3), lastCon: new Date(), poste: null, groupeAffected: [], programmeAvion: [], service: null, site: null, tel: ['1324'], unite: null },
  { id: 2, isActive: true, nom: 'tooling', prenom: 'operateur', matricule: 112, email: 'tooling.operateur@daher.com', roles: [], createdAt: new Date(2025, 11, 3), lastCon: new Date(), poste: null, groupeAffected: [], programmeAvion: [], service: null, site: null, tel: ['1324'], unite: null, password: 'test' },
  { id: 3, isActive: true, nom: 'tooling', prenom: "chef d'équipe", matricule: 113, email: 'tooling.chef@daher.com', roles: [], createdAt: new Date(2025, 11, 3), lastCon: new Date(), poste: null, groupeAffected: [], programmeAvion: [], service: null, site: null, tel: ['1324'], unite: null, password: 'test' },
  { id: 4, isActive: true, nom: 'methode', prenom: 'operateur', matricule: 114, email: 'methode.operateur@daher.com', roles: [], createdAt: new Date(2025, 11, 3), lastCon: new Date(), poste: null, groupeAffected: [], programmeAvion: [], service: null, site: null, tel: ['1324'], unite: null, password: 'test' },
];

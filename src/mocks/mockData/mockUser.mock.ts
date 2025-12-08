import { User } from "src/app/_interfaces/user";

export const mockUsers: User[] = [
  { id: 1, nom: 'admin', prenom: 'admin', username: 'test', password: ' ', matricule: 111, mail: 'admin.admin@daher.com', roles: [], apiToken: 'dzdzdzdzdzdzd', createdAt: new Date(2025, 11, 3), lastCon: new Date(), poste: null, groupeAffected: [], programmeAvion: [], service: null, site: null, tel: ['1324'], unite: null },
  { id: 2, nom: 'tooling', prenom: 'operateur', matricule: 112, mail: 'tooling.operateur@daher.com', roles: [], apiToken: 'dzdzdzdzdzdzd', createdAt: new Date(2025, 11, 3), lastCon: new Date(), poste: null, groupeAffected: [], programmeAvion: [], service: null, site: null, tel: ['1324'], unite: null, password: 'test', username: 'nduhiuyfez' },
  { id: 3, nom: 'tooling', prenom: "chef d'équipe", matricule: 113, mail: 'tooling.chef@daher.com', roles: [], apiToken: 'dzdzdzdzdzdzd', createdAt: new Date(2025, 11, 3), lastCon: new Date(), poste: null, groupeAffected: [], programmeAvion: [], service: null, site: null, tel: ['1324'], unite: null, password: 'test', username: 'nduhiuyfez' },
  { id: 4, nom: 'methode', prenom: 'operateur', matricule: 114, mail: 'methode.operateur@daher.com', roles: [], apiToken: 'dzdzdzdzdzdzd', createdAt: new Date(2025, 11, 3), lastCon: new Date(), poste: null, groupeAffected: [], programmeAvion: [], service: null, site: null, tel: ['1324'], unite: null, password: 'test', username: 'nduhiuyfez' },
];

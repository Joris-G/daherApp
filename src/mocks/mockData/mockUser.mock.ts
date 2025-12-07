import { User } from "src/app/_interfaces/user";

export const mockUsers: User[] = [
  { id: 1, nom: 'admin', prenom:'admin', matricule:111, mail: 'admin.admin@daher.com' ,isActive:true,roles:[]},
  { id: 2, nom: 'tooling', prenom: 'operateur',  matricule:112, mail: 'tooling.operateur@daher.com',isActive:true,roles:[] },
  { id: 3, nom: 'tooling', prenom: "chef d'équipe", matricule: 113, mail: 'tooling.chef@daher.com',isActive:true,roles:[] },
  { id: 4, nom: 'methode', prenom: 'operateur', matricule: 114, mail: 'methode.operateur@daher.com',isActive:true,roles:[] },
];

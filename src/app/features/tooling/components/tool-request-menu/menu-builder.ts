import { MenuItem } from "primeng/api";
export const buildMenu = (isManager:boolean):MenuItem[]=> {
const toolRequestMenuItems: MenuItem[] = [
            // {
            //     separator: true
            // },
            {
                label: 'Faire une demande',
                items: [
                    {
                        label: 'Nouvel outillage (SBO)',
                        icon: 'pi pi-plus',
                        shortcut: '⌘+N',
                        routerLink:"/tooling/new-tool"
                    },
                    {
                        label: 'Maintenance et réparation',
                        icon: 'pi pi-plus',
                        shortcut: '',
                        routerLink:"/tooling/repair"
                    },
                    {
                        label: 'Contrôle 3D',
                        icon: 'pi pi-plus',
                        shortcut: '',
                        routerLink:"/tooling/3d",
                    },
                ],
                badge:'1',
                visible:true
            },
            {separator:true},
            {
                items: [
                    {
                        label: 'Liste des demandes',
                        icon: 'pi pi-inbox',
                        shortcut: 'Ctrl+O',
                        badge: '2'
                    },
                    {
                        label: 'Liste des outillages',
                        icon: 'pi pi-wrench',
                        
                    },
                ]
            },
            {
                label:'Manager',
                visible:isManager,
                items:[
                    {
                        label:"Gestion de l'équipe",
                        routerLink:"/manage-tool-team"
                    },
                         {
                        label:"Indicateurs",
                        routerLink:"/tool-indicators"
                    },

                ]
            },

            // {
            //     separator: true
            // }
        ];
 return toolRequestMenuItems
}

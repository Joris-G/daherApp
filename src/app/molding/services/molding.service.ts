import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BehaviorSubject, forkJoin, Observable, Subject } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

import { IMoldingStatus, Molding, MoldingIri, MoldingStatus } from 'src/app/_interfaces/molding/molding';
import { environment } from 'src/environments/environment';
import { KitService } from './kit.service';
import { ToolService } from 'src/app/tooling/services/tool.service';
import { Kit } from 'src/app/_interfaces/molding/composite-material-types';
import { CoreService } from './core.service';
import { Tool } from 'src/app/_interfaces/tooling/tool';
import { OtherMaterialsService } from './other-materials.service';
import { AlertService } from 'src/app/shared/services/divers/alert.service';
import { LoadingService } from 'src/app/shared/services/divers/loading.service';
import { RequestService } from 'src/app/shared/services/request.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 * Service de gestion des moulages
 *
 * @export
 * @class MoldingService
 */
@Injectable({ providedIn: 'root' })
export class MoldingService {
	public molding: Molding = new Molding();
	public molding$: BehaviorSubject<Molding> = new BehaviorSubject(this.molding);
	public toolStatus: Subject<boolean> = new Subject();
	public moldingStatus$: Observable<IMoldingStatus>;
	private moldingStatus: MoldingStatus = new MoldingStatus();


	constructor(
		private kitService: KitService,
		private matService: OtherMaterialsService,
		private toolService: ToolService,
		private requestService: RequestService,
		private coreService: CoreService,
		private alertService: AlertService,
		private navCtrl: NavController,
		private loadingService: LoadingService,
		private http: HttpClient,
	) {
		this.moldingStatus$ = this.moldingStatus.moldingStatus.asObservable();
	}

	/**
	 *Initilalise un nouveau moulage
	 *
	 * @memberof MoldingService
	 */
	initMolding() {
		const newMolding = new Molding();
		this.updateMoldings(newMolding);
	}

	setToolStatus(status?: boolean): void {
		let toolStatus: boolean;
		if (status) {
			toolStatus = status;
		} else {
			toolStatus = (!!this.molding.OT);
		}
		this.moldingStatus.setToolStatus(toolStatus);
	}
	setKitStatus(): void {
		const kitStatus = (this.molding.kits.length > 0);
		this.moldingStatus.setKitStatus(kitStatus);
	}



	removeKit(index: number) {
		this.molding.kits.splice(index, 1);
		this.updateDates();
		this.updateMoldings();
	}


	/**
	 *: Observable<Molding>
	 *
	 * @param moldingObject
	 * @return un observable
	 * @memberof MoldingService
	 */
	saveMolding(print: boolean) {
		// const check$: Observable<void> = this.checkMoldingDatas();
		// const savingOtherMat$: Observable<any[]> = this.saveOtherMaterials();
		// // const saveMolding: Observable<void>;
		// //TODO check les additionnal materials
		// savingOtherMat$
		//   .subscribe(
		//     (resp: AdditionalMaterial[]) => {
		//       console.log(resp);
		//       this.molding.materialSupplementary = resp;
		// resp.subscribe(() => {



		this.loadingService.startLoading('Sauvegarde du moulage en cours');
		const saveMethod = (this.molding.id) ? this.patchMolding() : this.postMolding();
		saveMethod
			.subscribe({
				next: (val) => {
					this.loadingService.stopLoading();
					this.molding = val;
				},
				error: (err) => {
					this.loadingService.stopLoading();
				}
			});
	}


	/**
	 *
	 *
	 * Charge un id de moulage.
	 *
	 * @param moldingId
	 * @memberof MoldingService
	 */
	loadMolding(moldingId: string): void {
		this.loadingService.startLoading('Patienter pendant le chargement du moulage');
		// TODO à rebrancher qqp this.molding.updatedAt = new Date();
		this.getMoldingById(moldingId)
			.subscribe(
				(molding) => {
					this.updateMoldings(molding);
					this.loadingService.stopLoading();
				},
				(error) => {
					console.error(error);
					this.loadingService.stopLoading();
					this.alertService.simpleAlert(
						'Erreur moulage',
						`Erreur de récupération du moulage`,
						`Le moulage <strong>${moldingId}</strong> n'existe pas`,
					);
				}
			);
	}

	/**
	 * Recalcul le kit le plus défavorable
	 *
	 * @todo supprimer les lignes commentées
	 * @param molding
	 * @memberof MoldingService
	 */
	updateDates(): void {
		// REINITIALISATION
		this.molding.aCuireAv = null;
		this.molding.aDraperAv = null;
		// PAS DE KIT PAS DE CALCUL
		if (this.molding.kits.length <= 0) { return; }

		// IDENTIFIER MATIERES DEFAVORABLES
		// 1. Matière défavaroble pour la poly
		this.molding.matPolym = this.molding.kits.reduce(
			(defPolym, kit) => {
				if (defPolym.aCuirAv > kit.aCuirAv) {
					return kit;
				} else {
					return defPolym;
				}
			});
		// 2. Matière défavorable pour le drapage
		this.molding.matDrap = this.molding.kits.reduce(
			(defDrap, kit) => (defDrap.aDrapAv > kit.aDrapAv && !kit.layupDate) ? kit : defDrap);


		// RESULTATS DATE LIMITES EN PRENANT EN COMPTE LA POSSIBILITE DE DEPASSEMENT DE LA DATE A -18°C
		const smallest18Kit = this.molding.kits.reduce((previousKit, kit) => {
			if (previousKit.peremptionMoins18 > kit.peremptionMoins18) {
				return kit;
			}
			return previousKit;
		});

		// A POLYMERIER AVANT LE :
		if (this.molding.matPolym.aCuirAv < smallest18Kit.peremptionMoins18) {
			this.molding.aCuireAv = this.molding.matPolym.aCuirAv;
		} else {
			this.molding.aCuireAv = smallest18Kit.peremptionMoins18;
		}

		// A DRAPER AVANT LE :
		if (this.molding.matDrap.aDrapAv < smallest18Kit.peremptionMoins18) {
			this.molding.aDraperAv = this.molding.matDrap.aDrapAv;
		} else {
			this.molding.aDraperAv = smallest18Kit.peremptionMoins18;
		}
	}


	/**
	 * Construit un objet molding depuis le serveur.
	 *
	 * @param id id du mouage. C'est l'id qui est encodé sur le code barre de la fiche de moulage
	 * @return
	 * @memberof MoldingService
	 */
	getMoldingById(id: string): Observable<Molding> {
		return this.requestService.createGetRequest(`${environment.moldingApi}moldings/${id}`)
			.pipe(
				map((returnsData: any) => {
					returnsData.kits = this.moldingServerToMoldingObject(returnsData);
					return returnsData;
				})
			);
	}




	addKit(kit: Kit) {
		const kitIsInKits = this.kitService.kitIsInKits(kit, this.molding.kits);
		if (!kitIsInKits) {
			this.molding.kits.push(kit);
			this.updateDates();
			this.updateMoldings();
		} else {
			this.alertService.presentToast('Le kit a déjà été scanné');
			console.error('kit en doublon');
		}
	}

	addNida(material) {
		this.molding.materialSupplementary.push(material);
		this.updateMoldings();
	}

	/**
	 * On  traite une entrée d'un Tool
	 *
	 * @private
	 * @param toolObj
	 * @memberof CreateMoldingPage
	 */
	addTool(responseTool: Tool) {
		this.molding.OT = responseTool;
		this.alertService.presentToast('Outillage associé !');
		this.setToolStatus(true);
		this.updateMoldings();
	}

	updateMoldings(updatedMolding?: Molding) {
		if (updatedMolding) { this.molding = updatedMolding; }
		this.updateDates();
		this.setKitStatus();
		this.setToolStatus();
		this.molding$.next(this.molding);
	}

	async cancelMolding() {
		const confirm = await this.alertService.presentAlertConfirm(
			`Vous allez annuler ce moulage`,
			`Etes vous sur ?`
		);
		if (confirm) {
			this.molding.isActive = false;
			this.updateMoldings();
		}
	}


	private saveOtherMaterials(): Observable<any[]> {
		return forkJoin(this.molding.materialSupplementary.map(mat => this.matService.addOne(mat)));
	}

	private postMolding(): Observable<Molding> {
		const moldingIri = this.toIri();
		return this.requestService.createPostRequest(`${environment.moldingApi}moldings`, moldingIri, true);
		// .pipe(
		//   map((response: any) => {
		//       response.kits = this.moldingServerToMoldingObject(response);
		//       return response;
		//     })
		//     );
	}

	/**
	 *
	 *
	 * @param moldingObject
	 * @return observable
	 * @memberof MoldingService
	 */
	private patchMolding(): Observable<Molding> {
		const moldingIri = this.toIri();
		const url = `${environment.moldingApi}moldings/${moldingIri.id}`;
		return this.requestService.createPatchRequest(url, moldingIri)
			.pipe(
				finalize(() => this.loadingService.stopLoading())
			);
	}


	private toIri(): MoldingIri {
		const molding = this.molding;
		return {
			id: molding.id,
			kits: molding.kits.map((kit: Kit) => this.kitService.getIri(kit)),
			materialSupplementary: molding.materialSupplementary.map((mat: any) => this.coreService.getIri(mat)),
			moldingDay: molding.moldingDay,
			// createdBy: this.userService.getIri(molding.createdBy),
			outillage: (molding.OT) ? this.toolService.getIri(molding.OT) : null,
			aCuireAv: molding.aCuireAv,
			aDraperAv: molding.aDraperAv,
			matPolym: this.kitService.getIri(molding.matPolym),
			matDrap: this.kitService.getIri(molding.matDrap),
		};
	}

	//TODO à supprimer
	/**
	 * Cette fonction sera à détruire une fois l'issue gitHub #23 sera résolue
	 * https://github.com/Joris-G/daherApp/issues/23
	 *
	 * @param moldingToTransform
	 * @return objet moulage converti depuis la donnée reçue du serveur
	 * @memberof MoldingService
	 */
	private moldingServerToMoldingObject(moldingToTransform: any): Kit[] {
		return moldingToTransform.kits.map((kitApi: any) => {
			const kit: Kit = {
				aCuirAv: kitApi.ACuirAv,
				aDrapAv: kitApi.ADrapAv,
				createdAt: kitApi.createdAt,
				decongel: kitApi.Decongel,
				designationSAP: kitApi.DesignationSAP,
				id: kitApi.id,
				idMM: kitApi.idMM,
				lotSAP: kitApi.LotSAP,
				peremptionMoins18: kitApi.PeremptionMoins18,
				referenceSAP: kitApi.ReferenceSAP,
				status: kitApi.status,
				tackLife: kitApi.TackLife,
				timeOut: kitApi.TimeOut
			};
			return kit;
		});
	}

	/**
	 * Navigue vers l'impression des moulages
	 *
	 * @private
	 * @memberof CreateMoldingPage
	 */
	private printMolding() {
		this.navCtrl.navigateForward(['molding/print-molding-sheet', this.molding.id]);
	}
}

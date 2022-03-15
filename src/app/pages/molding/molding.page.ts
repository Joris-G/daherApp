import { AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInput } from '@ionic/angular';

const MENU_ITEMS = [
  {
    title: 'Nouveau moulage',
    path: 'create-molding',
    type: 'button',
  },
  {
    title: 'Modifier moulage',
    path: null,
    type: 'normal',
    options: {
      qualityOnly: true,
      input: true,
    }
  },
  // {
  //   title: 'Mes moulages'
  // },
  // {
  //   title: 'Liste des moulages'
  // },
  // {
  //   title: 'Entretien B15 - Frekote'
  // }
];
@Component({
  selector: 'app-molding',
  templateUrl: './molding.page.html',
  styleUrls: ['./molding.page.scss'],
})
export class MoldingPage implements OnInit, AfterViewInit, AfterViewChecked {
  @ViewChild('inputIdMolding') inputIdMolding: IonInput;
  public page: any;
  constructor(
    public router: Router,
  ) {
  }

  ionViewDidLoad() {
    console.log('test DID LOAD');
    this.page = {
      pageTitle: 'MODULE MOULAGE',
      menuTitle: 'Menu Moulage',
      menuItems: MENU_ITEMS,
      contentId: 'molding-content'
    };
  }

  ngAfterViewChecked(): void {
    console.log('after view checked molding page');
    this.page = {
      pageTitle: 'MODULE MOULAGE',
      menuTitle: 'Menu Moulage',
      menuItems: MENU_ITEMS,
      contentId: 'molding-content'
    };
  }

  ngAfterViewInit(): void {
    console.log('after view INIT molding page');
  }
  ngOnInit(): void {
    console.log('INIT molding page');
    this.page = {
      pageTitle: 'MODULE MOULAGE',
      menuTitle: 'Menu Moulage',
      menuItems: MENU_ITEMS,
      contentId: 'molding-content'
    };
  }


  idMoldingInputChange() {
    if (this.inputIdMolding.value !== '') {
      console.log(this.inputIdMolding.value);
      this.router.navigate([`/create-molding`, this.inputIdMolding.value]);
    }
  }

}

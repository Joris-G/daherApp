import { AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInput, IonMenu, NavController } from '@ionic/angular';
@Component({
  selector: 'app-molding',
  templateUrl: './molding.page.html',
  styleUrls: ['./molding.page.scss'],
})
export class MoldingPage implements OnInit, AfterViewChecked {
  @ViewChild('inputIdMolding') inputIdMolding: IonInput;
  @ViewChild('menu') menu: IonMenu;
  public page: any;
  constructor(
    public router: Router,
    public navCtrl: NavController,
  ) {
  }
  ngAfterViewChecked(): void {
    // console.log('after view checked molding page');
    this.page = {
      pageTitle: 'MODULE MOULAGE',
      menuTitle: 'Menu Moulage',
      contentId: 'molding-content'
    };
  }

  ngOnInit(): void {
    console.log('INIT molding page');
    this.page = {
      pageTitle: 'MODULE MOULAGE',
      menuTitle: 'Menu Moulage',
      contentId: 'molding-content'
    };
  }


  idMoldingInputChange() {
    if (this.inputIdMolding.value !== '') {
      console.log(this.inputIdMolding.value);
      this.menu.close();
      this.router.navigate([`molding/create-molding`, this.inputIdMolding.value]);
    }
  }
  navigate(url: string) {
    this.navCtrl.navigateRoot(url);
  }

}

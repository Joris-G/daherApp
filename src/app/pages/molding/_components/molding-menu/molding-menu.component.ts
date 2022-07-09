import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInput, IonMenu, NavController } from '@ionic/angular';

@Component({
  selector: 'app-molding-menu',
  templateUrl: './molding-menu.component.html',
  styleUrls: ['./molding-menu.component.scss'],
})
export class MoldingMenuComponent implements AfterViewInit {
  @ViewChild('inputIdMolding') inputIdMolding: IonInput;
  @ViewChild('menu') menu: IonMenu;
  constructor(
    public router: Router,
    public navCtrl: NavController,
  ) { }

  ngAfterViewInit(): void {
    this.menu.open();
  }

  navigate(url: string) {
    this.navCtrl.navigateForward(url);
  }

  idMoldingInputChange() {
    if (this.inputIdMolding.value !== '') {
      this.menu.close();
      this.router.navigate([`molding/create-molding`, this.inputIdMolding.value])
        .then((isNavigated) => {
          if (isNavigated) {
            this.inputIdMolding.value = '';
          }
        });
    }
  }
}

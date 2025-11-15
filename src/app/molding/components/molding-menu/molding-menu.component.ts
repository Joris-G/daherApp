import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInput, IonMenu, NavController, IonicModule } from '@ionic/angular';
import { ScanService } from 'src/app/molding/services/scan.service';

@Component({
    selector: 'app-molding-menu',
    templateUrl: './molding-menu.component.html',
    styleUrls: ['./molding-menu.component.scss'],
    standalone: true,
    imports: [IonicModule],
})
export class MoldingMenuComponent implements AfterViewInit {
  @ViewChild('inputIdMolding') inputIdMolding: IonInput;
  @ViewChild('menu') menu: IonMenu;
  constructor(
    private router: Router,
    private navCtrl: NavController,
    private scanService: ScanService
  ) { }

  ngAfterViewInit(): void {
    this.menu.open();
    this.menu.ionDidClose.subscribe(() => {
      this.scanService.focusState$.next(true);
    });
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

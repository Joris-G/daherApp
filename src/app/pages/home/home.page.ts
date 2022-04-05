import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/_services/users/auth.service';

const MENU_ITEMS = [
  {
    title: 'Moulage',
    path: '/molding',
    type: 'button',
  },
  {
    title: 'Outillage',
    path: '/tooling',
    type: 'button',
  }
];

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public page: any;
  public menuItems: any;
  constructor(
    public router: Router,
    public navCtrl: NavController,
    public authService: AuthService) {
  }


  ionViewWillEnter() {
    this.page = {
      pageTitle: 'ACCUEIL',
      menuItems: MENU_ITEMS,
      contentId: 'home-content'
    };
  }

  ngOnInit(): void {
    this.page = {
      pageTitle: 'ACCUEIL',
      menuItems: MENU_ITEMS,
      contentId: 'home-content'
    };
  }
}

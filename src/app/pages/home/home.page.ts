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
export class HomePage implements OnInit, AfterViewInit {
  public page: any;
  public menuItems: any;
  constructor(
    public router: Router,
    public navCtrl: NavController,
    public authService: AuthService) {
  }
  // ngAfterViewChecked(): void {
  //   console.log('after view checked home page');
  //   this.page = {
  //     pageTitle: 'ACCUEIL',
  //     menuItems: MENU_ITEMS,
  //     contentId: 'home-content'
  //   };
  // }
  ngAfterViewInit(): void {
    console.log('after view init home page');
    this.page = {
      pageTitle: 'ACCUEIL',
      menuItems: MENU_ITEMS,
      contentId: 'home-content'
    };
  }

  ngOnInit(): void {
    console.log('init home page');
    this.page = {
      pageTitle: 'ACCUEIL',
      menuItems: MENU_ITEMS,
      contentId: 'home-content'
    };
  }
}

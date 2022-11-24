import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private titleService: Title,
  ) { }
  ngOnInit(): void {
    this.initTitle();
  }

  private initTitle() {
    if (environment.name === 'QUAL') {
      const newTitle = `QUAL - ${this.titleService.getTitle()}`;
      this.titleService.setTitle(newTitle);
    }
  }

}

import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  public title: BehaviorSubject<string> = new BehaviorSubject('');
  constructor(
    private titleService: Title
  ) { }

  setTitle(newTitle: string): void {
    const prefixe: string = (environment.name === '') ? '' : `${environment.name} - `;
    const title: string = `${prefixe}${newTitle}`;
    this.titleService.setTitle(title);
    this.title.next(newTitle);
  }

  getTitle(): string {
    return this.titleService.getTitle();
  }
}

import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  public title: BehaviorSubject<string> = new BehaviorSubject('');
  constructor(
    private titleService: Title
  ) { }

  setTitle(newTitle: string): void {
    this.titleService.setTitle(newTitle);
    this.title.next(this.getTitle());
  }

  getTitle(): string {
    return this.titleService.getTitle();
  }
}

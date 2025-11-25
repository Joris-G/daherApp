import {
  BehaviorSubject,
  Injectable,
  Title,
  __decorate,
  environment
} from "./chunk-BEQVXJQK.js";

// src/app/shared/services/title.service.ts
var TitleService = class TitleService2 {
  titleService;
  title = new BehaviorSubject("");
  constructor(titleService) {
    this.titleService = titleService;
  }
  setTitle(newTitle) {
    const prefixe = environment.name === "" ? "" : `${environment.name} - `;
    const title = `${prefixe}${newTitle}`;
    this.titleService.setTitle(title);
    this.title.next(newTitle);
  }
  getTitle() {
    return this.titleService.getTitle();
  }
  static ctorParameters = () => [
    { type: Title }
  ];
};
TitleService = __decorate([
  Injectable({
    providedIn: "root"
  })
], TitleService);

export {
  TitleService
};
//# sourceMappingURL=chunk-FHAETXHK.js.map

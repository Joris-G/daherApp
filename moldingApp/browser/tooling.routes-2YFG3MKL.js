import {
  DataRowDirective,
  HeaderRowDirective,
  auto_default
} from "./chunk-4SM47LUF.js";
import {
  AnimationCurves,
  AnimationDurations,
  AriaDescriber,
  ENTER,
  FocusMonitor,
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatCommonModule,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource,
  SPACE,
  SelectionModel
} from "./chunk-LYGF4RF7.js";
import {
  RoleGuard,
  ToolService
} from "./chunk-H3Z2WW5W.js";
import {
  MoyenMesure,
  RequestType,
  ToolRequest,
  TypeRapport
} from "./chunk-WS32T5JK.js";
import {
  EditorComponent,
  IonAccordion,
  IonAccordionGroup,
  IonBadge,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonDatetime,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonItemDivider,
  IonItemGroup,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonModal,
  IonNote,
  IonRouterOutlet,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonText,
  IonTitle,
  IonToggle,
  IonToolbar,
  SharedUserHeaderComponent,
  animate,
  animateChild,
  keyframes,
  query,
  state,
  style,
  transition,
  trigger
} from "./chunk-BHBJXH5H.js";
import {
  ProgramsService,
  UsersService
} from "./chunk-WEPZBWS4.js";
import {
  TitleService
} from "./chunk-FHAETXHK.js";
import {
  ActivatedRoute,
  AlertController,
  AlertService,
  ApplicationRef,
  AsyncPipe,
  AuthStore,
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CheckboxControlValueAccessor,
  CommonModule,
  Component,
  DatePipe,
  DefaultValueAccessor,
  DestroyRef,
  Directive,
  DomSanitizer,
  EMPTY,
  ElementRef,
  EventEmitter,
  FactoryTarget,
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  HostBinding,
  HostListener,
  HttpClient,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  IonicModule,
  JsonPipe,
  KeyValuePipe,
  LoadingService,
  NG_VALUE_ACCESSOR,
  NavController,
  NgClass,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  NgModule,
  NgStyle,
  NgTemplateOutlet,
  Observable,
  Optional,
  Output,
  Pipe,
  ReactiveFormsModule,
  Renderer2,
  ReplaySubject,
  RequestService,
  Router,
  RouterLink,
  SkipSelf,
  Subject,
  Validators,
  ViewChild,
  ViewEncapsulation$1,
  __decorate,
  assertInInjectionContext,
  asyncScheduler,
  booleanAttribute,
  catchError,
  computed,
  concatMap,
  core_exports,
  createComponent,
  effect,
  environment,
  finalize,
  forkJoin,
  forwardRef,
  fromEvent,
  inject,
  input,
  isObservable,
  map,
  merge,
  of,
  output,
  share,
  signal,
  switchMap,
  takeUntil,
  tap,
  throttleTime,
  throwError,
  ɵNgNoValidate,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareComponent,
  ɵɵngDeclareDirective,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule,
  ɵɵngDeclarePipe
} from "./chunk-BEQVXJQK.js";
import "./chunk-RBMTPJHM.js";
import "./chunk-H7W7X3R4.js";
import "./chunk-TDOPS5CM.js";
import "./chunk-X6EMILF7.js";
import "./chunk-MQYPXGMY.js";
import "./chunk-ZXVPTCFE.js";
import "./chunk-V7TQOFPO.js";
import "./chunk-KQEJHESJ.js";
import "./chunk-N62YNSN6.js";
import "./chunk-7NJN3V7Z.js";
import "./chunk-MRNFMTOE.js";
import "./chunk-Y3MEIMOS.js";
import "./chunk-TIFPZGYV.js";
import "./chunk-LQHD5MTS.js";
import "./chunk-7NA53B7M.js";
import "./chunk-J5JVDPFK.js";
import "./chunk-ADHYLI4F.js";
import "./chunk-YSZWGYJT.js";
import "./chunk-AQO6FLE6.js";
import "./chunk-ZDAGMJPI.js";
import "./chunk-YAWL7G5N.js";
import "./chunk-NQLFRXVY.js";
import "./chunk-MC7HW2GL.js";
import "./chunk-XXAR46UN.js";
import "./chunk-LHYYZWFK.js";
import "./chunk-MA6SXHYC.js";
import "./chunk-2MUWEPR2.js";
import "./chunk-Q74C7PYH.js";
import "./chunk-EV4ZQC67.js";
import "./chunk-7OBOYUXW.js";
import "./chunk-34HBWEZ3.js";
import {
  __async,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-B3DYXOBH.js";

// angular:jit:template:file:src\app\tooling\pages\tooling.page.html
var tooling_page_default = '<app-shared-user-header title="OUTILLAGE"></app-shared-user-header>\r\n<ion-content color=medium>\r\n  <app-tool-request-menu></app-tool-request-menu>\r\n  <ion-router-outlet id="tooling-content"></ion-router-outlet>\r\n  </ion-content>';

// angular:jit:style:file:src\app\tooling\pages\tooling.page.scss
var tooling_page_default2 = "/* src/app/tooling/pages/tooling.page.scss */\n/*# sourceMappingURL=tooling.page.css.map */\n";

// angular:jit:template:file:src\app\tooling\components\tool-request-menu\tool-request-menu.component.html
var tool_request_menu_component_default = `<ion-menu menuId="main-menu" open=true #menuTool side="start" type="push" contentId="tooling-content">\r
  <ion-header>\r
    <ion-toolbar color="succes">\r
      <ion-title>\r
        Menu outillage\r
      </ion-title>\r
    </ion-toolbar>\r
  </ion-header>\r
  <ion-content>\r
    <ion-list>\r
      <ion-item-divider>\r
        <ion-label color=secondary>Faire une demande</ion-label>\r
      </ion-item-divider>\r
      <ion-menu-toggle auto-hide="true">\r
        <ion-item [disabled]="false" button routerLink="/tooling/new-tool"\r
          [style.boder-right]="'solid 4px yellow'">\r
          <ion-label>\r
            Nouvel outillage (SBO)\r
          </ion-label>\r
        </ion-item>\r
      </ion-menu-toggle>\r
      <ion-menu-toggle auto-hide="true">\r
        <ion-item button routerLink="/tooling/repair">\r
          <ion-label>\r
            Maintenance et r\xE9paration\r
          </ion-label>\r
        </ion-item>\r
      </ion-menu-toggle>\r
      <ion-menu-toggle auto-hide="true">\r
        <ion-item button routerLink="/tooling/3d">\r
          <ion-label>\r
            Contr\xF4le 3D\r
          </ion-label>\r
        </ion-item>\r
      </ion-menu-toggle>\r
\r
\r
      <ion-item-divider>\r
        <ion-label color=secondary>Suivi</ion-label>\r
      </ion-item-divider>\r
\r
\r
      <ion-menu-toggle auto-hide="true">\r
        <ion-item [button]="true" routerLink="/tooling/requests">\r
          <ion-label>\r
            Liste des demandes outillages\r
          </ion-label>\r
          <ion-badge *ngIf="(newRequests && isManager)" color="danger">New {{newRequests}}</ion-badge>\r
        </ion-item>\r
      </ion-menu-toggle>\r
      <ion-menu-toggle auto-hide="true">\r
        <ion-item [disabled]="true" [button]="true" [routerLink]="'tool-list'" routerDirection="forward">\r
          <ion-label>\r
            Liste des outillages\r
          </ion-label>\r
        </ion-item>\r
      </ion-menu-toggle>\r
\r
\r
\r
      <ion-item-group *ngIf="isManager">\r
\r
        <ion-item-divider>\r
          <ion-label color=secondary>L'\xE9quipe</ion-label>\r
        </ion-item-divider>\r
\r
\r
        <ion-menu-toggle auto-hide="true">\r
          <ion-item [button]="true" routerDirection="forward" [routerLink]="'manage-tool-team'">\r
            <ion-label>\r
              Gestion de l'\xE9quipe\r
            </ion-label>\r
            <ion-badge *ngIf="newUsers$ | async as newUsers" color="danger">New {{newUsers.length}}</ion-badge>\r
          </ion-item>\r
        </ion-menu-toggle>\r
        <ion-menu-toggle auto-hide="true">\r
          <ion-item [button]="true"\r
            [routerLink]="'tool-indicators'" routerDirection="forward">\r
            <ion-label>\r
              Indicateurs\r
            </ion-label>\r
          </ion-item>\r
        </ion-menu-toggle>\r
      </ion-item-group>\r
    </ion-list>\r
\r
  </ion-content>\r
</ion-menu>`;

// angular:jit:style:file:src\app\tooling\components\tool-request-menu\tool-request-menu.component.css
var tool_request_menu_component_default2 = "/* src/app/tooling/components/tool-request-menu/tool-request-menu.component.css */\n/*# sourceMappingURL=tool-request-menu.component.css.map */\n";

// src/app/tooling/components/tool-request-menu/tool-request-menu.component.ts
var ToolRequestMenuComponent = class ToolRequestMenuComponent2 {
  ////////////////////////////////////////////////////
  //INJECTION DEPENDANCES
  ////////////////////////////////////////////////////
  userService = inject(UsersService);
  authStore = inject(AuthStore);
  roleGuard = inject(RoleGuard);
  menu;
  ////////////////////////////////////////////////////
  //PROPRIETES
  ////////////////////////////////////////////////////
  newRequests;
  isManager = false;
  newUsers$;
  ngOnInit() {
    this.buildManagerPage();
  }
  loadIndicators() {
    this.newUsers$ = this.userService.getUsersByService("5");
  }
  buildManagerPage() {
    this.isManager = this.roleGuard.isRole(["ROLE_ADMIN", "ROLE_RESP_OUTIL", "ROLE_CE_OUTIL"]) && this.authStore.user().isActive;
    if (this.isManager) {
      this.loadIndicators();
    }
    ;
  }
  static propDecorators = {
    menu: [{ type: ViewChild, args: ["menuTool"] }]
  };
};
ToolRequestMenuComponent = __decorate([
  Component({
    selector: "app-tool-request-menu",
    template: tool_request_menu_component_default,
    standalone: true,
    imports: [IonList, IonMenu, IonContent, RouterLink, NgIf, AsyncPipe, IonHeader, IonToolbar, IonTitle, IonItemDivider, IonLabel, IonMenuToggle, IonBadge, IonItem, IonItemGroup],
    styles: [tool_request_menu_component_default2]
  })
], ToolRequestMenuComponent);

// src/app/tooling/pages/tooling.page.ts
var ToolingPage = class ToolingPage2 {
  titleService = inject(TitleService);
  ionViewWillEnter() {
    this.titleService.setTitle("MODULE OUTILLAGE");
  }
};
ToolingPage = __decorate([
  Component({
    selector: "app-tooling",
    template: tooling_page_default,
    standalone: true,
    imports: [
      IonContent,
      IonRouterOutlet,
      SharedUserHeaderComponent,
      ToolRequestMenuComponent
    ],
    styles: [tooling_page_default2]
  })
], ToolingPage);

// angular:jit:template:file:src\app\tooling\components\new-tool\new-tool.page.html
var new_tool_page_default = `<!-- <app-shared-user-header [page]="page"></app-shared-user-header> -->\r
\r
<ion-content color=light>\r
  <ion-accordion-group [multiple]="true">\r
    <ion-accordion color>\r
      <ion-item slot="header">\r
        <ion-label>\r
          D\xE9finition\r
        </ion-label>\r
        <ion-text>\r
          Cr\xE9er ou s\xE9lectionner l'outillage\r
        </ion-text>\r
        </ion-item>\r
        <ion-item slot="content">\r
      <form [formGroup]="newToolForm">\r
        <ion-item-group>\r
          <ion-item>\r
            <ion-label position="floating">Num\xE9ro d'OT SAP\r
              <ion-text color="danger">*</ion-text>\r
            </ion-label>\r
            <ion-input required formControlName="sapToolNumber" type="text" placeholder="ex. OT095999"></ion-input>\r
          </ion-item>\r
          <ion-item>\r
            <ion-label position="floating">Num\xE9ro d'identification\r
              <ion-text color="danger">*</ion-text>\r
            </ion-label>\r
            <ion-input required formControlName="identification" type="text" placeholder="ex. 19900Z01-T700P5522000123">\r
            </ion-input>\r
          </ion-item>\r
          <ion-item>\r
            <ion-label position="floating">D\xE9signation\r
              <ion-text color="danger">*</ion-text>\r
            </ion-label>\r
            <ion-input required formControlName="designation" type="text"></ion-input>\r
          </ion-item>\r
        </ion-item-group>\r
        <ion-toolbar>\r
          <ion-button slot=end (click)="onCreateTool()" expand="block" color=primary>\r
            Cr\xE9er l'OT\r
          </ion-button>\r
        </ion-toolbar>\r
      </form>\r
      </ion-item>\r
      </ion-accordion>\r
      <ion-accordion>\r
        <ion-item slot="header">\r
          <ion-label>\r
          Descritpion\r
        </ion-label>\r
        </ion-item>\r
        <ion-item slot="content">\r
      <form [formGroup]="newToolRequestForm">\r
        <ion-item-group>\r
          <ion-item>\r
            <ion-label>Programme avion</ion-label>\r
            <ion-select formControlName="aircraftProgram" multiple="true" placeholder="S\xE9lectionner le programme avion">\r
              <ion-select-option *ngFor="let program of programs()" [value]="program.id">\r
                {{program.designation}}\r
              </ion-select-option>\r
            </ion-select>\r
          </ion-item>\r
          </ion-item-group>\r
          <ion-item-group formGroupName="typeData">\r
          <ion-item>\r
            <ion-label>Titre\r
              <ion-text color="danger">*</ion-text>\r
            </ion-label>\r
            <ion-input required formControlName="title"></ion-input>\r
          </ion-item>\r
          <ion-item>\r
            <ion-label>Description\r
              <ion-text color="danger">*</ion-text>\r
            </ion-label>\r
            <div class="NgxEditor__Wrapper">\r
                            <ngx-editor-menu [editor]="editor"> </ngx-editor-menu>\r
                            <ngx-editor [editor]="editor" formControlName="description"\r
                              [placeholder]="'Taper la description ici'"></ngx-editor>\r
                            </div>\r
          </ion-item>\r
\r
          <ion-item>\r
            <ion-label>Date\r
              <ion-text color="danger">*</ion-text>\r
            </ion-label>\r
            <ion-datetime display-format="DD.MM.YYYY HH:mm" formControlName="dateBesoin"></ion-datetime>\r
          </ion-item>\r
        </ion-item-group>\r
      </form>\r
      </ion-item>\r
      </ion-accordion>\r
      </ion-accordion-group>\r
  <!-- <app-sbo [spec]="newToolRequestForm" [tool]="newToolForm"></app-sbo> -->\r
  <div>\r
    {{newToolRequestForm.value | json}}\r
  </div>\r
</ion-content>\r
<ion-footer>\r
  <ion-toolbar color="light">\r
    <ion-button [disabled]="newToolRequestForm.invalid" (click)="onCreateToolRequest()" slot=end expand="block"\r
      color=primary>\r
      Cr\xE9er la demande\r
    </ion-button>\r
  </ion-toolbar>\r
</ion-footer>\r
`;

// angular:jit:style:file:src\app\tooling\components\new-tool\new-tool.page.scss
var new_tool_page_default2 = "/* src/app/tooling/components/new-tool/new-tool.page.scss */\n/*# sourceMappingURL=new-tool.page.css.map */\n";

// node_modules/ngx-editor/fesm2022/ngx-editor-utils.mjs
var isNil = (val) => {
  return typeof val === "undefined" || val === null;
};
var camelToDashed = (str) => {
  return str.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
};
var cleanObject = (obj) => {
  const cleanObj = {};
  Object.keys(obj).forEach((prop) => {
    if (obj[prop]) {
      cleanObj[prop] = obj[prop];
    }
  });
  return cleanObj;
};
var toStyleString = (obj) => {
  const styles = cleanObject(obj);
  return Object.entries(styles).map(([k, v]) => `${camelToDashed(k)}:${v}`).join(";");
};
var NgxEditorError = class extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
};
var uniq = () => {
  const timeStamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 7);
  return `${timeStamp}${random}`;
};
var clamp = (value, min2, max2) => {
  return Math.min(Math.max(value, min2), max2);
};

// node_modules/orderedmap/dist/index.js
function OrderedMap(content) {
  this.content = content;
}
OrderedMap.prototype = {
  constructor: OrderedMap,
  find: function(key) {
    for (var i = 0; i < this.content.length; i += 2) if (this.content[i] === key) return i;
    return -1;
  },
  // :: (string) → ?any
  // Retrieve the value stored under `key`, or return undefined when
  // no such key exists.
  get: function(key) {
    var found2 = this.find(key);
    return found2 == -1 ? void 0 : this.content[found2 + 1];
  },
  // :: (string, any, ?string) → OrderedMap
  // Create a new map by replacing the value of `key` with a new
  // value, or adding a binding to the end of the map. If `newKey` is
  // given, the key of the binding will be replaced with that key.
  update: function(key, value, newKey) {
    var self = newKey && newKey != key ? this.remove(newKey) : this;
    var found2 = self.find(key), content = self.content.slice();
    if (found2 == -1) {
      content.push(newKey || key, value);
    } else {
      content[found2 + 1] = value;
      if (newKey) content[found2] = newKey;
    }
    return new OrderedMap(content);
  },
  // :: (string) → OrderedMap
  // Return a map with the given key removed, if it existed.
  remove: function(key) {
    var found2 = this.find(key);
    if (found2 == -1) return this;
    var content = this.content.slice();
    content.splice(found2, 2);
    return new OrderedMap(content);
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the start of the map.
  addToStart: function(key, value) {
    return new OrderedMap([key, value].concat(this.remove(key).content));
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the end of the map.
  addToEnd: function(key, value) {
    var content = this.remove(key).content.slice();
    content.push(key, value);
    return new OrderedMap(content);
  },
  // :: (string, string, any) → OrderedMap
  // Add a key after the given key. If `place` is not found, the new
  // key is added to the end.
  addBefore: function(place, key, value) {
    var without = this.remove(key), content = without.content.slice();
    var found2 = without.find(place);
    content.splice(found2 == -1 ? content.length : found2, 0, key, value);
    return new OrderedMap(content);
  },
  // :: ((key: string, value: any))
  // Call the given function for each key/value pair in the map, in
  // order.
  forEach: function(f) {
    for (var i = 0; i < this.content.length; i += 2) f(this.content[i], this.content[i + 1]);
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by prepending the keys in this map that don't
  // appear in `map` before the keys in `map`.
  prepend: function(map3) {
    map3 = OrderedMap.from(map3);
    if (!map3.size) return this;
    return new OrderedMap(map3.content.concat(this.subtract(map3).content));
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by appending the keys in this map that don't
  // appear in `map` after the keys in `map`.
  append: function(map3) {
    map3 = OrderedMap.from(map3);
    if (!map3.size) return this;
    return new OrderedMap(this.subtract(map3).content.concat(map3.content));
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a map containing all the keys in this map that don't
  // appear in `map`.
  subtract: function(map3) {
    var result = this;
    map3 = OrderedMap.from(map3);
    for (var i = 0; i < map3.content.length; i += 2) result = result.remove(map3.content[i]);
    return result;
  },
  // :: () → Object
  // Turn ordered map into a plain object.
  toObject: function() {
    var result = {};
    this.forEach(function(key, value) {
      result[key] = value;
    });
    return result;
  },
  // :: number
  // The amount of keys in this map.
  get size() {
    return this.content.length >> 1;
  }
};
OrderedMap.from = function(value) {
  if (value instanceof OrderedMap) return value;
  var content = [];
  if (value) for (var prop in value) content.push(prop, value[prop]);
  return new OrderedMap(content);
};
var dist_default = OrderedMap;

// node_modules/prosemirror-model/dist/index.js
function findDiffStart(a, b, pos) {
  for (let i = 0; ; i++) {
    if (i == a.childCount || i == b.childCount) return a.childCount == b.childCount ? null : pos;
    let childA = a.child(i), childB = b.child(i);
    if (childA == childB) {
      pos += childA.nodeSize;
      continue;
    }
    if (!childA.sameMarkup(childB)) return pos;
    if (childA.isText && childA.text != childB.text) {
      for (let j = 0; childA.text[j] == childB.text[j]; j++) pos++;
      return pos;
    }
    if (childA.content.size || childB.content.size) {
      let inner = findDiffStart(childA.content, childB.content, pos + 1);
      if (inner != null) return inner;
    }
    pos += childA.nodeSize;
  }
}
function findDiffEnd(a, b, posA, posB) {
  for (let iA = a.childCount, iB = b.childCount; ; ) {
    if (iA == 0 || iB == 0) return iA == iB ? null : {
      a: posA,
      b: posB
    };
    let childA = a.child(--iA), childB = b.child(--iB), size2 = childA.nodeSize;
    if (childA == childB) {
      posA -= size2;
      posB -= size2;
      continue;
    }
    if (!childA.sameMarkup(childB)) return {
      a: posA,
      b: posB
    };
    if (childA.isText && childA.text != childB.text) {
      let same = 0, minSize = Math.min(childA.text.length, childB.text.length);
      while (same < minSize && childA.text[childA.text.length - same - 1] == childB.text[childB.text.length - same - 1]) {
        same++;
        posA--;
        posB--;
      }
      return {
        a: posA,
        b: posB
      };
    }
    if (childA.content.size || childB.content.size) {
      let inner = findDiffEnd(childA.content, childB.content, posA - 1, posB - 1);
      if (inner) return inner;
    }
    posA -= size2;
    posB -= size2;
  }
}
var Fragment = class _Fragment {
  /**
  @internal
  */
  constructor(content, size2) {
    this.content = content;
    this.size = size2 || 0;
    if (size2 == null) for (let i = 0; i < content.length; i++) this.size += content[i].nodeSize;
  }
  /**
  Invoke a callback for all descendant nodes between the given two
  positions (relative to start of this fragment). Doesn't descend
  into a node when the callback returns `false`.
  */
  nodesBetween(from2, to, f, nodeStart = 0, parent) {
    for (let i = 0, pos = 0; pos < to; i++) {
      let child = this.content[i], end = pos + child.nodeSize;
      if (end > from2 && f(child, nodeStart + pos, parent || null, i) !== false && child.content.size) {
        let start = pos + 1;
        child.nodesBetween(Math.max(0, from2 - start), Math.min(child.content.size, to - start), f, nodeStart + start);
      }
      pos = end;
    }
  }
  /**
  Call the given callback for every descendant node. `pos` will be
  relative to the start of the fragment. The callback may return
  `false` to prevent traversal of a given node's children.
  */
  descendants(f) {
    this.nodesBetween(0, this.size, f);
  }
  /**
  Extract the text between `from` and `to`. See the same method on
  [`Node`](https://prosemirror.net/docs/ref/#model.Node.textBetween).
  */
  textBetween(from2, to, blockSeparator, leafText) {
    let text2 = "", first = true;
    this.nodesBetween(from2, to, (node, pos) => {
      let nodeText = node.isText ? node.text.slice(Math.max(from2, pos) - pos, to - pos) : !node.isLeaf ? "" : leafText ? typeof leafText === "function" ? leafText(node) : leafText : node.type.spec.leafText ? node.type.spec.leafText(node) : "";
      if (node.isBlock && (node.isLeaf && nodeText || node.isTextblock) && blockSeparator) {
        if (first) first = false;
        else text2 += blockSeparator;
      }
      text2 += nodeText;
    }, 0);
    return text2;
  }
  /**
  Create a new fragment containing the combined content of this
  fragment and the other.
  */
  append(other) {
    if (!other.size) return this;
    if (!this.size) return other;
    let last = this.lastChild, first = other.firstChild, content = this.content.slice(), i = 0;
    if (last.isText && last.sameMarkup(first)) {
      content[content.length - 1] = last.withText(last.text + first.text);
      i = 1;
    }
    for (; i < other.content.length; i++) content.push(other.content[i]);
    return new _Fragment(content, this.size + other.size);
  }
  /**
  Cut out the sub-fragment between the two given positions.
  */
  cut(from2, to = this.size) {
    if (from2 == 0 && to == this.size) return this;
    let result = [], size2 = 0;
    if (to > from2) for (let i = 0, pos = 0; pos < to; i++) {
      let child = this.content[i], end = pos + child.nodeSize;
      if (end > from2) {
        if (pos < from2 || end > to) {
          if (child.isText) child = child.cut(Math.max(0, from2 - pos), Math.min(child.text.length, to - pos));
          else child = child.cut(Math.max(0, from2 - pos - 1), Math.min(child.content.size, to - pos - 1));
        }
        result.push(child);
        size2 += child.nodeSize;
      }
      pos = end;
    }
    return new _Fragment(result, size2);
  }
  /**
  @internal
  */
  cutByIndex(from2, to) {
    if (from2 == to) return _Fragment.empty;
    if (from2 == 0 && to == this.content.length) return this;
    return new _Fragment(this.content.slice(from2, to));
  }
  /**
  Create a new fragment in which the node at the given index is
  replaced by the given node.
  */
  replaceChild(index, node) {
    let current = this.content[index];
    if (current == node) return this;
    let copy2 = this.content.slice();
    let size2 = this.size + node.nodeSize - current.nodeSize;
    copy2[index] = node;
    return new _Fragment(copy2, size2);
  }
  /**
  Create a new fragment by prepending the given node to this
  fragment.
  */
  addToStart(node) {
    return new _Fragment([node].concat(this.content), this.size + node.nodeSize);
  }
  /**
  Create a new fragment by appending the given node to this
  fragment.
  */
  addToEnd(node) {
    return new _Fragment(this.content.concat(node), this.size + node.nodeSize);
  }
  /**
  Compare this fragment to another one.
  */
  eq(other) {
    if (this.content.length != other.content.length) return false;
    for (let i = 0; i < this.content.length; i++) if (!this.content[i].eq(other.content[i])) return false;
    return true;
  }
  /**
  The first child of the fragment, or `null` if it is empty.
  */
  get firstChild() {
    return this.content.length ? this.content[0] : null;
  }
  /**
  The last child of the fragment, or `null` if it is empty.
  */
  get lastChild() {
    return this.content.length ? this.content[this.content.length - 1] : null;
  }
  /**
  The number of child nodes in this fragment.
  */
  get childCount() {
    return this.content.length;
  }
  /**
  Get the child node at the given index. Raise an error when the
  index is out of range.
  */
  child(index) {
    let found2 = this.content[index];
    if (!found2) throw new RangeError("Index " + index + " out of range for " + this);
    return found2;
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(index) {
    return this.content[index] || null;
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(f) {
    for (let i = 0, p = 0; i < this.content.length; i++) {
      let child = this.content[i];
      f(child, p, i);
      p += child.nodeSize;
    }
  }
  /**
  Find the first position at which this fragment and another
  fragment differ, or `null` if they are the same.
  */
  findDiffStart(other, pos = 0) {
    return findDiffStart(this, other, pos);
  }
  /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */
  findDiffEnd(other, pos = this.size, otherPos = other.size) {
    return findDiffEnd(this, other, pos, otherPos);
  }
  /**
  Find the index and inner offset corresponding to a given relative
  position in this fragment. The result object will be reused
  (overwritten) the next time the function is called. @internal
  */
  findIndex(pos) {
    if (pos == 0) return retIndex(0, pos);
    if (pos == this.size) return retIndex(this.content.length, pos);
    if (pos > this.size || pos < 0) throw new RangeError(`Position ${pos} outside of fragment (${this})`);
    for (let i = 0, curPos = 0; ; i++) {
      let cur = this.child(i), end = curPos + cur.nodeSize;
      if (end >= pos) {
        if (end == pos) return retIndex(i + 1, end);
        return retIndex(i, curPos);
      }
      curPos = end;
    }
  }
  /**
  Return a debugging string that describes this fragment.
  */
  toString() {
    return "<" + this.toStringInner() + ">";
  }
  /**
  @internal
  */
  toStringInner() {
    return this.content.join(", ");
  }
  /**
  Create a JSON-serializeable representation of this fragment.
  */
  toJSON() {
    return this.content.length ? this.content.map((n) => n.toJSON()) : null;
  }
  /**
  Deserialize a fragment from its JSON representation.
  */
  static fromJSON(schema2, value) {
    if (!value) return _Fragment.empty;
    if (!Array.isArray(value)) throw new RangeError("Invalid input for Fragment.fromJSON");
    return new _Fragment(value.map(schema2.nodeFromJSON));
  }
  /**
  Build a fragment from an array of nodes. Ensures that adjacent
  text nodes with the same marks are joined together.
  */
  static fromArray(array) {
    if (!array.length) return _Fragment.empty;
    let joined, size2 = 0;
    for (let i = 0; i < array.length; i++) {
      let node = array[i];
      size2 += node.nodeSize;
      if (i && node.isText && array[i - 1].sameMarkup(node)) {
        if (!joined) joined = array.slice(0, i);
        joined[joined.length - 1] = node.withText(joined[joined.length - 1].text + node.text);
      } else if (joined) {
        joined.push(node);
      }
    }
    return new _Fragment(joined || array, size2);
  }
  /**
  Create a fragment from something that can be interpreted as a
  set of nodes. For `null`, it returns the empty fragment. For a
  fragment, the fragment itself. For a node or array of nodes, a
  fragment containing those nodes.
  */
  static from(nodes2) {
    if (!nodes2) return _Fragment.empty;
    if (nodes2 instanceof _Fragment) return nodes2;
    if (Array.isArray(nodes2)) return this.fromArray(nodes2);
    if (nodes2.attrs) return new _Fragment([nodes2], nodes2.nodeSize);
    throw new RangeError("Can not convert " + nodes2 + " to a Fragment" + (nodes2.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
  }
};
Fragment.empty = new Fragment([], 0);
var found = {
  index: 0,
  offset: 0
};
function retIndex(index, offset3) {
  found.index = index;
  found.offset = offset3;
  return found;
}
function compareDeep(a, b) {
  if (a === b) return true;
  if (!(a && typeof a == "object") || !(b && typeof b == "object")) return false;
  let array = Array.isArray(a);
  if (Array.isArray(b) != array) return false;
  if (array) {
    if (a.length != b.length) return false;
    for (let i = 0; i < a.length; i++) if (!compareDeep(a[i], b[i])) return false;
  } else {
    for (let p in a) if (!(p in b) || !compareDeep(a[p], b[p])) return false;
    for (let p in b) if (!(p in a)) return false;
  }
  return true;
}
var Mark = class _Mark {
  /**
  @internal
  */
  constructor(type, attrs) {
    this.type = type;
    this.attrs = attrs;
  }
  /**
  Given a set of marks, create a new set which contains this one as
  well, in the right position. If this mark is already in the set,
  the set itself is returned. If any marks that are set to be
  [exclusive](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) with this mark are present,
  those are replaced by this one.
  */
  addToSet(set) {
    let copy2, placed = false;
    for (let i = 0; i < set.length; i++) {
      let other = set[i];
      if (this.eq(other)) return set;
      if (this.type.excludes(other.type)) {
        if (!copy2) copy2 = set.slice(0, i);
      } else if (other.type.excludes(this.type)) {
        return set;
      } else {
        if (!placed && other.type.rank > this.type.rank) {
          if (!copy2) copy2 = set.slice(0, i);
          copy2.push(this);
          placed = true;
        }
        if (copy2) copy2.push(other);
      }
    }
    if (!copy2) copy2 = set.slice();
    if (!placed) copy2.push(this);
    return copy2;
  }
  /**
  Remove this mark from the given set, returning a new set. If this
  mark is not in the set, the set itself is returned.
  */
  removeFromSet(set) {
    for (let i = 0; i < set.length; i++) if (this.eq(set[i])) return set.slice(0, i).concat(set.slice(i + 1));
    return set;
  }
  /**
  Test whether this mark is in the given set of marks.
  */
  isInSet(set) {
    for (let i = 0; i < set.length; i++) if (this.eq(set[i])) return true;
    return false;
  }
  /**
  Test whether this mark has the same type and attributes as
  another mark.
  */
  eq(other) {
    return this == other || this.type == other.type && compareDeep(this.attrs, other.attrs);
  }
  /**
  Convert this mark to a JSON-serializeable representation.
  */
  toJSON() {
    let obj = {
      type: this.type.name
    };
    for (let _ in this.attrs) {
      obj.attrs = this.attrs;
      break;
    }
    return obj;
  }
  /**
  Deserialize a mark from JSON.
  */
  static fromJSON(schema2, json) {
    if (!json) throw new RangeError("Invalid input for Mark.fromJSON");
    let type = schema2.marks[json.type];
    if (!type) throw new RangeError(`There is no mark type ${json.type} in this schema`);
    let mark = type.create(json.attrs);
    type.checkAttrs(mark.attrs);
    return mark;
  }
  /**
  Test whether two sets of marks are identical.
  */
  static sameSet(a, b) {
    if (a == b) return true;
    if (a.length != b.length) return false;
    for (let i = 0; i < a.length; i++) if (!a[i].eq(b[i])) return false;
    return true;
  }
  /**
  Create a properly sorted mark set from null, a single mark, or an
  unsorted array of marks.
  */
  static setFrom(marks2) {
    if (!marks2 || Array.isArray(marks2) && marks2.length == 0) return _Mark.none;
    if (marks2 instanceof _Mark) return [marks2];
    let copy2 = marks2.slice();
    copy2.sort((a, b) => a.type.rank - b.type.rank);
    return copy2;
  }
};
Mark.none = [];
var ReplaceError = class extends Error {
};
var Slice = class _Slice {
  /**
  Create a slice. When specifying a non-zero open depth, you must
  make sure that there are nodes of at least that depth at the
  appropriate side of the fragment—i.e. if the fragment is an
  empty paragraph node, `openStart` and `openEnd` can't be greater
  than 1.
  
  It is not necessary for the content of open nodes to conform to
  the schema's content constraints, though it should be a valid
  start/end/middle for such a node, depending on which sides are
  open.
  */
  constructor(content, openStart, openEnd) {
    this.content = content;
    this.openStart = openStart;
    this.openEnd = openEnd;
  }
  /**
  The size this slice would add when inserted into a document.
  */
  get size() {
    return this.content.size - this.openStart - this.openEnd;
  }
  /**
  @internal
  */
  insertAt(pos, fragment) {
    let content = insertInto(this.content, pos + this.openStart, fragment);
    return content && new _Slice(content, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(from2, to) {
    return new _Slice(removeRange(this.content, from2 + this.openStart, to + this.openStart), this.openStart, this.openEnd);
  }
  /**
  Tests whether this slice is equal to another slice.
  */
  eq(other) {
    return this.content.eq(other.content) && this.openStart == other.openStart && this.openEnd == other.openEnd;
  }
  /**
  @internal
  */
  toString() {
    return this.content + "(" + this.openStart + "," + this.openEnd + ")";
  }
  /**
  Convert a slice to a JSON-serializable representation.
  */
  toJSON() {
    if (!this.content.size) return null;
    let json = {
      content: this.content.toJSON()
    };
    if (this.openStart > 0) json.openStart = this.openStart;
    if (this.openEnd > 0) json.openEnd = this.openEnd;
    return json;
  }
  /**
  Deserialize a slice from its JSON representation.
  */
  static fromJSON(schema2, json) {
    if (!json) return _Slice.empty;
    let openStart = json.openStart || 0, openEnd = json.openEnd || 0;
    if (typeof openStart != "number" || typeof openEnd != "number") throw new RangeError("Invalid input for Slice.fromJSON");
    return new _Slice(Fragment.fromJSON(schema2, json.content), openStart, openEnd);
  }
  /**
  Create a slice from a fragment by taking the maximum possible
  open value on both side of the fragment.
  */
  static maxOpen(fragment, openIsolating = true) {
    let openStart = 0, openEnd = 0;
    for (let n = fragment.firstChild; n && !n.isLeaf && (openIsolating || !n.type.spec.isolating); n = n.firstChild) openStart++;
    for (let n = fragment.lastChild; n && !n.isLeaf && (openIsolating || !n.type.spec.isolating); n = n.lastChild) openEnd++;
    return new _Slice(fragment, openStart, openEnd);
  }
};
Slice.empty = new Slice(Fragment.empty, 0, 0);
function removeRange(content, from2, to) {
  let {
    index,
    offset: offset3
  } = content.findIndex(from2), child = content.maybeChild(index);
  let {
    index: indexTo,
    offset: offsetTo
  } = content.findIndex(to);
  if (offset3 == from2 || child.isText) {
    if (offsetTo != to && !content.child(indexTo).isText) throw new RangeError("Removing non-flat range");
    return content.cut(0, from2).append(content.cut(to));
  }
  if (index != indexTo) throw new RangeError("Removing non-flat range");
  return content.replaceChild(index, child.copy(removeRange(child.content, from2 - offset3 - 1, to - offset3 - 1)));
}
function insertInto(content, dist, insert, parent) {
  let {
    index,
    offset: offset3
  } = content.findIndex(dist), child = content.maybeChild(index);
  if (offset3 == dist || child.isText) {
    if (parent && !parent.canReplace(index, index, insert)) return null;
    return content.cut(0, dist).append(insert).append(content.cut(dist));
  }
  let inner = insertInto(child.content, dist - offset3 - 1, insert, child);
  return inner && content.replaceChild(index, child.copy(inner));
}
function replace($from, $to, slice2) {
  if (slice2.openStart > $from.depth) throw new ReplaceError("Inserted content deeper than insertion position");
  if ($from.depth - slice2.openStart != $to.depth - slice2.openEnd) throw new ReplaceError("Inconsistent open depths");
  return replaceOuter($from, $to, slice2, 0);
}
function replaceOuter($from, $to, slice2, depth) {
  let index = $from.index(depth), node = $from.node(depth);
  if (index == $to.index(depth) && depth < $from.depth - slice2.openStart) {
    let inner = replaceOuter($from, $to, slice2, depth + 1);
    return node.copy(node.content.replaceChild(index, inner));
  } else if (!slice2.content.size) {
    return close(node, replaceTwoWay($from, $to, depth));
  } else if (!slice2.openStart && !slice2.openEnd && $from.depth == depth && $to.depth == depth) {
    let parent = $from.parent, content = parent.content;
    return close(parent, content.cut(0, $from.parentOffset).append(slice2.content).append(content.cut($to.parentOffset)));
  } else {
    let {
      start,
      end
    } = prepareSliceForReplace(slice2, $from);
    return close(node, replaceThreeWay($from, start, end, $to, depth));
  }
}
function checkJoin(main, sub2) {
  if (!sub2.type.compatibleContent(main.type)) throw new ReplaceError("Cannot join " + sub2.type.name + " onto " + main.type.name);
}
function joinable($before, $after, depth) {
  let node = $before.node(depth);
  checkJoin(node, $after.node(depth));
  return node;
}
function addNode(child, target) {
  let last = target.length - 1;
  if (last >= 0 && child.isText && child.sameMarkup(target[last])) target[last] = child.withText(target[last].text + child.text);
  else target.push(child);
}
function addRange($start, $end, depth, target) {
  let node = ($end || $start).node(depth);
  let startIndex = 0, endIndex = $end ? $end.index(depth) : node.childCount;
  if ($start) {
    startIndex = $start.index(depth);
    if ($start.depth > depth) {
      startIndex++;
    } else if ($start.textOffset) {
      addNode($start.nodeAfter, target);
      startIndex++;
    }
  }
  for (let i = startIndex; i < endIndex; i++) addNode(node.child(i), target);
  if ($end && $end.depth == depth && $end.textOffset) addNode($end.nodeBefore, target);
}
function close(node, content) {
  node.type.checkContent(content);
  return node.copy(content);
}
function replaceThreeWay($from, $start, $end, $to, depth) {
  let openStart = $from.depth > depth && joinable($from, $start, depth + 1);
  let openEnd = $to.depth > depth && joinable($end, $to, depth + 1);
  let content = [];
  addRange(null, $from, depth, content);
  if (openStart && openEnd && $start.index(depth) == $end.index(depth)) {
    checkJoin(openStart, openEnd);
    addNode(close(openStart, replaceThreeWay($from, $start, $end, $to, depth + 1)), content);
  } else {
    if (openStart) addNode(close(openStart, replaceTwoWay($from, $start, depth + 1)), content);
    addRange($start, $end, depth, content);
    if (openEnd) addNode(close(openEnd, replaceTwoWay($end, $to, depth + 1)), content);
  }
  addRange($to, null, depth, content);
  return new Fragment(content);
}
function replaceTwoWay($from, $to, depth) {
  let content = [];
  addRange(null, $from, depth, content);
  if ($from.depth > depth) {
    let type = joinable($from, $to, depth + 1);
    addNode(close(type, replaceTwoWay($from, $to, depth + 1)), content);
  }
  addRange($to, null, depth, content);
  return new Fragment(content);
}
function prepareSliceForReplace(slice2, $along) {
  let extra = $along.depth - slice2.openStart, parent = $along.node(extra);
  let node = parent.copy(slice2.content);
  for (let i = extra - 1; i >= 0; i--) node = $along.node(i).copy(Fragment.from(node));
  return {
    start: node.resolveNoCache(slice2.openStart + extra),
    end: node.resolveNoCache(node.content.size - slice2.openEnd - extra)
  };
}
var ResolvedPos = class _ResolvedPos {
  /**
  @internal
  */
  constructor(pos, path, parentOffset) {
    this.pos = pos;
    this.path = path;
    this.parentOffset = parentOffset;
    this.depth = path.length / 3 - 1;
  }
  /**
  @internal
  */
  resolveDepth(val) {
    if (val == null) return this.depth;
    if (val < 0) return this.depth + val;
    return val;
  }
  /**
  The parent node that the position points into. Note that even if
  a position points into a text node, that node is not considered
  the parent—text nodes are ‘flat’ in this model, and have no content.
  */
  get parent() {
    return this.node(this.depth);
  }
  /**
  The root node in which the position was resolved.
  */
  get doc() {
    return this.node(0);
  }
  /**
  The ancestor node at the given level. `p.node(p.depth)` is the
  same as `p.parent`.
  */
  node(depth) {
    return this.path[this.resolveDepth(depth) * 3];
  }
  /**
  The index into the ancestor at the given level. If this points
  at the 3rd node in the 2nd paragraph on the top level, for
  example, `p.index(0)` is 1 and `p.index(1)` is 2.
  */
  index(depth) {
    return this.path[this.resolveDepth(depth) * 3 + 1];
  }
  /**
  The index pointing after this position into the ancestor at the
  given level.
  */
  indexAfter(depth) {
    depth = this.resolveDepth(depth);
    return this.index(depth) + (depth == this.depth && !this.textOffset ? 0 : 1);
  }
  /**
  The (absolute) position at the start of the node at the given
  level.
  */
  start(depth) {
    depth = this.resolveDepth(depth);
    return depth == 0 ? 0 : this.path[depth * 3 - 1] + 1;
  }
  /**
  The (absolute) position at the end of the node at the given
  level.
  */
  end(depth) {
    depth = this.resolveDepth(depth);
    return this.start(depth) + this.node(depth).content.size;
  }
  /**
  The (absolute) position directly before the wrapping node at the
  given level, or, when `depth` is `this.depth + 1`, the original
  position.
  */
  before(depth) {
    depth = this.resolveDepth(depth);
    if (!depth) throw new RangeError("There is no position before the top-level node");
    return depth == this.depth + 1 ? this.pos : this.path[depth * 3 - 1];
  }
  /**
  The (absolute) position directly after the wrapping node at the
  given level, or the original position when `depth` is `this.depth + 1`.
  */
  after(depth) {
    depth = this.resolveDepth(depth);
    if (!depth) throw new RangeError("There is no position after the top-level node");
    return depth == this.depth + 1 ? this.pos : this.path[depth * 3 - 1] + this.path[depth * 3].nodeSize;
  }
  /**
  When this position points into a text node, this returns the
  distance between the position and the start of the text node.
  Will be zero for positions that point between nodes.
  */
  get textOffset() {
    return this.pos - this.path[this.path.length - 1];
  }
  /**
  Get the node directly after the position, if any. If the position
  points into a text node, only the part of that node after the
  position is returned.
  */
  get nodeAfter() {
    let parent = this.parent, index = this.index(this.depth);
    if (index == parent.childCount) return null;
    let dOff = this.pos - this.path[this.path.length - 1], child = parent.child(index);
    return dOff ? parent.child(index).cut(dOff) : child;
  }
  /**
  Get the node directly before the position, if any. If the
  position points into a text node, only the part of that node
  before the position is returned.
  */
  get nodeBefore() {
    let index = this.index(this.depth);
    let dOff = this.pos - this.path[this.path.length - 1];
    if (dOff) return this.parent.child(index).cut(0, dOff);
    return index == 0 ? null : this.parent.child(index - 1);
  }
  /**
  Get the position at the given index in the parent node at the
  given depth (which defaults to `this.depth`).
  */
  posAtIndex(index, depth) {
    depth = this.resolveDepth(depth);
    let node = this.path[depth * 3], pos = depth == 0 ? 0 : this.path[depth * 3 - 1] + 1;
    for (let i = 0; i < index; i++) pos += node.child(i).nodeSize;
    return pos;
  }
  /**
  Get the marks at this position, factoring in the surrounding
  marks' [`inclusive`](https://prosemirror.net/docs/ref/#model.MarkSpec.inclusive) property. If the
  position is at the start of a non-empty node, the marks of the
  node after it (if any) are returned.
  */
  marks() {
    let parent = this.parent, index = this.index();
    if (parent.content.size == 0) return Mark.none;
    if (this.textOffset) return parent.child(index).marks;
    let main = parent.maybeChild(index - 1), other = parent.maybeChild(index);
    if (!main) {
      let tmp = main;
      main = other;
      other = tmp;
    }
    let marks2 = main.marks;
    for (var i = 0; i < marks2.length; i++) if (marks2[i].type.spec.inclusive === false && (!other || !marks2[i].isInSet(other.marks))) marks2 = marks2[i--].removeFromSet(marks2);
    return marks2;
  }
  /**
  Get the marks after the current position, if any, except those
  that are non-inclusive and not present at position `$end`. This
  is mostly useful for getting the set of marks to preserve after a
  deletion. Will return `null` if this position is at the end of
  its parent node or its parent node isn't a textblock (in which
  case no marks should be preserved).
  */
  marksAcross($end) {
    let after = this.parent.maybeChild(this.index());
    if (!after || !after.isInline) return null;
    let marks2 = after.marks, next = $end.parent.maybeChild($end.index());
    for (var i = 0; i < marks2.length; i++) if (marks2[i].type.spec.inclusive === false && (!next || !marks2[i].isInSet(next.marks))) marks2 = marks2[i--].removeFromSet(marks2);
    return marks2;
  }
  /**
  The depth up to which this position and the given (non-resolved)
  position share the same parent nodes.
  */
  sharedDepth(pos) {
    for (let depth = this.depth; depth > 0; depth--) if (this.start(depth) <= pos && this.end(depth) >= pos) return depth;
    return 0;
  }
  /**
  Returns a range based on the place where this position and the
  given position diverge around block content. If both point into
  the same textblock, for example, a range around that textblock
  will be returned. If they point into different blocks, the range
  around those blocks in their shared ancestor is returned. You can
  pass in an optional predicate that will be called with a parent
  node to see if a range into that parent is acceptable.
  */
  blockRange(other = this, pred) {
    if (other.pos < this.pos) return other.blockRange(this);
    for (let d = this.depth - (this.parent.inlineContent || this.pos == other.pos ? 1 : 0); d >= 0; d--) if (other.pos <= this.end(d) && (!pred || pred(this.node(d)))) return new NodeRange(this, other, d);
    return null;
  }
  /**
  Query whether the given position shares the same parent node.
  */
  sameParent(other) {
    return this.pos - this.parentOffset == other.pos - other.parentOffset;
  }
  /**
  Return the greater of this and the given position.
  */
  max(other) {
    return other.pos > this.pos ? other : this;
  }
  /**
  Return the smaller of this and the given position.
  */
  min(other) {
    return other.pos < this.pos ? other : this;
  }
  /**
  @internal
  */
  toString() {
    let str = "";
    for (let i = 1; i <= this.depth; i++) str += (str ? "/" : "") + this.node(i).type.name + "_" + this.index(i - 1);
    return str + ":" + this.parentOffset;
  }
  /**
  @internal
  */
  static resolve(doc4, pos) {
    if (!(pos >= 0 && pos <= doc4.content.size)) throw new RangeError("Position " + pos + " out of range");
    let path = [];
    let start = 0, parentOffset = pos;
    for (let node = doc4; ; ) {
      let {
        index,
        offset: offset3
      } = node.content.findIndex(parentOffset);
      let rem = parentOffset - offset3;
      path.push(node, index, start + offset3);
      if (!rem) break;
      node = node.child(index);
      if (node.isText) break;
      parentOffset = rem - 1;
      start += offset3 + 1;
    }
    return new _ResolvedPos(pos, path, parentOffset);
  }
  /**
  @internal
  */
  static resolveCached(doc4, pos) {
    let cache = resolveCache.get(doc4);
    if (cache) {
      for (let i = 0; i < cache.elts.length; i++) {
        let elt = cache.elts[i];
        if (elt.pos == pos) return elt;
      }
    } else {
      resolveCache.set(doc4, cache = new ResolveCache());
    }
    let result = cache.elts[cache.i] = _ResolvedPos.resolve(doc4, pos);
    cache.i = (cache.i + 1) % resolveCacheSize;
    return result;
  }
};
var ResolveCache = class {
  constructor() {
    this.elts = [];
    this.i = 0;
  }
};
var resolveCacheSize = 12;
var resolveCache = /* @__PURE__ */ new WeakMap();
var NodeRange = class {
  /**
  Construct a node range. `$from` and `$to` should point into the
  same node until at least the given `depth`, since a node range
  denotes an adjacent set of nodes in a single parent node.
  */
  constructor($from, $to, depth) {
    this.$from = $from;
    this.$to = $to;
    this.depth = depth;
  }
  /**
  The position at the start of the range.
  */
  get start() {
    return this.$from.before(this.depth + 1);
  }
  /**
  The position at the end of the range.
  */
  get end() {
    return this.$to.after(this.depth + 1);
  }
  /**
  The parent node that the range points into.
  */
  get parent() {
    return this.$from.node(this.depth);
  }
  /**
  The start index of the range in the parent node.
  */
  get startIndex() {
    return this.$from.index(this.depth);
  }
  /**
  The end index of the range in the parent node.
  */
  get endIndex() {
    return this.$to.indexAfter(this.depth);
  }
};
var emptyAttrs = /* @__PURE__ */ Object.create(null);
var Node2 = class _Node {
  /**
  @internal
  */
  constructor(type, attrs, content, marks2 = Mark.none) {
    this.type = type;
    this.attrs = attrs;
    this.marks = marks2;
    this.content = content || Fragment.empty;
  }
  /**
  The array of this node's child nodes.
  */
  get children() {
    return this.content.content;
  }
  /**
  The size of this node, as defined by the integer-based [indexing
  scheme](https://prosemirror.net/docs/guide/#doc.indexing). For text nodes, this is the
  amount of characters. For other leaf nodes, it is one. For
  non-leaf nodes, it is the size of the content plus two (the
  start and end token).
  */
  get nodeSize() {
    return this.isLeaf ? 1 : 2 + this.content.size;
  }
  /**
  The number of children that the node has.
  */
  get childCount() {
    return this.content.childCount;
  }
  /**
  Get the child node at the given index. Raises an error when the
  index is out of range.
  */
  child(index) {
    return this.content.child(index);
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(index) {
    return this.content.maybeChild(index);
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(f) {
    this.content.forEach(f);
  }
  /**
  Invoke a callback for all descendant nodes recursively between
  the given two positions that are relative to start of this
  node's content. The callback is invoked with the node, its
  position relative to the original node (method receiver),
  its parent node, and its child index. When the callback returns
  false for a given node, that node's children will not be
  recursed over. The last parameter can be used to specify a
  starting position to count from.
  */
  nodesBetween(from2, to, f, startPos = 0) {
    this.content.nodesBetween(from2, to, f, startPos, this);
  }
  /**
  Call the given callback for every descendant node. Doesn't
  descend into a node when the callback returns `false`.
  */
  descendants(f) {
    this.nodesBetween(0, this.content.size, f);
  }
  /**
  Concatenates all the text nodes found in this fragment and its
  children.
  */
  get textContent() {
    return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
  }
  /**
  Get all text between positions `from` and `to`. When
  `blockSeparator` is given, it will be inserted to separate text
  from different block nodes. If `leafText` is given, it'll be
  inserted for every non-text leaf node encountered, otherwise
  [`leafText`](https://prosemirror.net/docs/ref/#model.NodeSpec.leafText) will be used.
  */
  textBetween(from2, to, blockSeparator, leafText) {
    return this.content.textBetween(from2, to, blockSeparator, leafText);
  }
  /**
  Returns this node's first child, or `null` if there are no
  children.
  */
  get firstChild() {
    return this.content.firstChild;
  }
  /**
  Returns this node's last child, or `null` if there are no
  children.
  */
  get lastChild() {
    return this.content.lastChild;
  }
  /**
  Test whether two nodes represent the same piece of document.
  */
  eq(other) {
    return this == other || this.sameMarkup(other) && this.content.eq(other.content);
  }
  /**
  Compare the markup (type, attributes, and marks) of this node to
  those of another. Returns `true` if both have the same markup.
  */
  sameMarkup(other) {
    return this.hasMarkup(other.type, other.attrs, other.marks);
  }
  /**
  Check whether this node's markup correspond to the given type,
  attributes, and marks.
  */
  hasMarkup(type, attrs, marks2) {
    return this.type == type && compareDeep(this.attrs, attrs || type.defaultAttrs || emptyAttrs) && Mark.sameSet(this.marks, marks2 || Mark.none);
  }
  /**
  Create a new node with the same markup as this node, containing
  the given content (or empty, if no content is given).
  */
  copy(content = null) {
    if (content == this.content) return this;
    return new _Node(this.type, this.attrs, content, this.marks);
  }
  /**
  Create a copy of this node, with the given set of marks instead
  of the node's own marks.
  */
  mark(marks2) {
    return marks2 == this.marks ? this : new _Node(this.type, this.attrs, this.content, marks2);
  }
  /**
  Create a copy of this node with only the content between the
  given positions. If `to` is not given, it defaults to the end of
  the node.
  */
  cut(from2, to = this.content.size) {
    if (from2 == 0 && to == this.content.size) return this;
    return this.copy(this.content.cut(from2, to));
  }
  /**
  Cut out the part of the document between the given positions, and
  return it as a `Slice` object.
  */
  slice(from2, to = this.content.size, includeParents = false) {
    if (from2 == to) return Slice.empty;
    let $from = this.resolve(from2), $to = this.resolve(to);
    let depth = includeParents ? 0 : $from.sharedDepth(to);
    let start = $from.start(depth), node = $from.node(depth);
    let content = node.content.cut($from.pos - start, $to.pos - start);
    return new Slice(content, $from.depth - depth, $to.depth - depth);
  }
  /**
  Replace the part of the document between the given positions with
  the given slice. The slice must 'fit', meaning its open sides
  must be able to connect to the surrounding content, and its
  content nodes must be valid children for the node they are placed
  into. If any of this is violated, an error of type
  [`ReplaceError`](https://prosemirror.net/docs/ref/#model.ReplaceError) is thrown.
  */
  replace(from2, to, slice2) {
    return replace(this.resolve(from2), this.resolve(to), slice2);
  }
  /**
  Find the node directly after the given position.
  */
  nodeAt(pos) {
    for (let node = this; ; ) {
      let {
        index,
        offset: offset3
      } = node.content.findIndex(pos);
      node = node.maybeChild(index);
      if (!node) return null;
      if (offset3 == pos || node.isText) return node;
      pos -= offset3 + 1;
    }
  }
  /**
  Find the (direct) child node after the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childAfter(pos) {
    let {
      index,
      offset: offset3
    } = this.content.findIndex(pos);
    return {
      node: this.content.maybeChild(index),
      index,
      offset: offset3
    };
  }
  /**
  Find the (direct) child node before the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childBefore(pos) {
    if (pos == 0) return {
      node: null,
      index: 0,
      offset: 0
    };
    let {
      index,
      offset: offset3
    } = this.content.findIndex(pos);
    if (offset3 < pos) return {
      node: this.content.child(index),
      index,
      offset: offset3
    };
    let node = this.content.child(index - 1);
    return {
      node,
      index: index - 1,
      offset: offset3 - node.nodeSize
    };
  }
  /**
  Resolve the given position in the document, returning an
  [object](https://prosemirror.net/docs/ref/#model.ResolvedPos) with information about its context.
  */
  resolve(pos) {
    return ResolvedPos.resolveCached(this, pos);
  }
  /**
  @internal
  */
  resolveNoCache(pos) {
    return ResolvedPos.resolve(this, pos);
  }
  /**
  Test whether a given mark or mark type occurs in this document
  between the two given positions.
  */
  rangeHasMark(from2, to, type) {
    let found2 = false;
    if (to > from2) this.nodesBetween(from2, to, (node) => {
      if (type.isInSet(node.marks)) found2 = true;
      return !found2;
    });
    return found2;
  }
  /**
  True when this is a block (non-inline node)
  */
  get isBlock() {
    return this.type.isBlock;
  }
  /**
  True when this is a textblock node, a block node with inline
  content.
  */
  get isTextblock() {
    return this.type.isTextblock;
  }
  /**
  True when this node allows inline content.
  */
  get inlineContent() {
    return this.type.inlineContent;
  }
  /**
  True when this is an inline node (a text node or a node that can
  appear among text).
  */
  get isInline() {
    return this.type.isInline;
  }
  /**
  True when this is a text node.
  */
  get isText() {
    return this.type.isText;
  }
  /**
  True when this is a leaf node.
  */
  get isLeaf() {
    return this.type.isLeaf;
  }
  /**
  True when this is an atom, i.e. when it does not have directly
  editable content. This is usually the same as `isLeaf`, but can
  be configured with the [`atom` property](https://prosemirror.net/docs/ref/#model.NodeSpec.atom)
  on a node's spec (typically used when the node is displayed as
  an uneditable [node view](https://prosemirror.net/docs/ref/#view.NodeView)).
  */
  get isAtom() {
    return this.type.isAtom;
  }
  /**
  Return a string representation of this node for debugging
  purposes.
  */
  toString() {
    if (this.type.spec.toDebugString) return this.type.spec.toDebugString(this);
    let name = this.type.name;
    if (this.content.size) name += "(" + this.content.toStringInner() + ")";
    return wrapMarks(this.marks, name);
  }
  /**
  Get the content match in this node at the given index.
  */
  contentMatchAt(index) {
    let match = this.type.contentMatch.matchFragment(this.content, 0, index);
    if (!match) throw new Error("Called contentMatchAt on a node with invalid content");
    return match;
  }
  /**
  Test whether replacing the range between `from` and `to` (by
  child index) with the given replacement fragment (which defaults
  to the empty fragment) would leave the node's content valid. You
  can optionally pass `start` and `end` indices into the
  replacement fragment.
  */
  canReplace(from2, to, replacement = Fragment.empty, start = 0, end = replacement.childCount) {
    let one = this.contentMatchAt(from2).matchFragment(replacement, start, end);
    let two = one && one.matchFragment(this.content, to);
    if (!two || !two.validEnd) return false;
    for (let i = start; i < end; i++) if (!this.type.allowsMarks(replacement.child(i).marks)) return false;
    return true;
  }
  /**
  Test whether replacing the range `from` to `to` (by index) with
  a node of the given type would leave the node's content valid.
  */
  canReplaceWith(from2, to, type, marks2) {
    if (marks2 && !this.type.allowsMarks(marks2)) return false;
    let start = this.contentMatchAt(from2).matchType(type);
    let end = start && start.matchFragment(this.content, to);
    return end ? end.validEnd : false;
  }
  /**
  Test whether the given node's content could be appended to this
  node. If that node is empty, this will only return true if there
  is at least one node type that can appear in both nodes (to avoid
  merging completely incompatible nodes).
  */
  canAppend(other) {
    if (other.content.size) return this.canReplace(this.childCount, this.childCount, other.content);
    else return this.type.compatibleContent(other.type);
  }
  /**
  Check whether this node and its descendants conform to the
  schema, and raise an exception when they do not.
  */
  check() {
    this.type.checkContent(this.content);
    this.type.checkAttrs(this.attrs);
    let copy2 = Mark.none;
    for (let i = 0; i < this.marks.length; i++) {
      let mark = this.marks[i];
      mark.type.checkAttrs(mark.attrs);
      copy2 = mark.addToSet(copy2);
    }
    if (!Mark.sameSet(copy2, this.marks)) throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((m) => m.type.name)}`);
    this.content.forEach((node) => node.check());
  }
  /**
  Return a JSON-serializeable representation of this node.
  */
  toJSON() {
    let obj = {
      type: this.type.name
    };
    for (let _ in this.attrs) {
      obj.attrs = this.attrs;
      break;
    }
    if (this.content.size) obj.content = this.content.toJSON();
    if (this.marks.length) obj.marks = this.marks.map((n) => n.toJSON());
    return obj;
  }
  /**
  Deserialize a node from its JSON representation.
  */
  static fromJSON(schema2, json) {
    if (!json) throw new RangeError("Invalid input for Node.fromJSON");
    let marks2 = void 0;
    if (json.marks) {
      if (!Array.isArray(json.marks)) throw new RangeError("Invalid mark data for Node.fromJSON");
      marks2 = json.marks.map(schema2.markFromJSON);
    }
    if (json.type == "text") {
      if (typeof json.text != "string") throw new RangeError("Invalid text node in JSON");
      return schema2.text(json.text, marks2);
    }
    let content = Fragment.fromJSON(schema2, json.content);
    let node = schema2.nodeType(json.type).create(json.attrs, content, marks2);
    node.type.checkAttrs(node.attrs);
    return node;
  }
};
Node2.prototype.text = void 0;
var TextNode = class _TextNode extends Node2 {
  /**
  @internal
  */
  constructor(type, attrs, content, marks2) {
    super(type, attrs, null, marks2);
    if (!content) throw new RangeError("Empty text nodes are not allowed");
    this.text = content;
  }
  toString() {
    if (this.type.spec.toDebugString) return this.type.spec.toDebugString(this);
    return wrapMarks(this.marks, JSON.stringify(this.text));
  }
  get textContent() {
    return this.text;
  }
  textBetween(from2, to) {
    return this.text.slice(from2, to);
  }
  get nodeSize() {
    return this.text.length;
  }
  mark(marks2) {
    return marks2 == this.marks ? this : new _TextNode(this.type, this.attrs, this.text, marks2);
  }
  withText(text2) {
    if (text2 == this.text) return this;
    return new _TextNode(this.type, this.attrs, text2, this.marks);
  }
  cut(from2 = 0, to = this.text.length) {
    if (from2 == 0 && to == this.text.length) return this;
    return this.withText(this.text.slice(from2, to));
  }
  eq(other) {
    return this.sameMarkup(other) && this.text == other.text;
  }
  toJSON() {
    let base2 = super.toJSON();
    base2.text = this.text;
    return base2;
  }
};
function wrapMarks(marks2, str) {
  for (let i = marks2.length - 1; i >= 0; i--) str = marks2[i].type.name + "(" + str + ")";
  return str;
}
var ContentMatch = class _ContentMatch {
  /**
  @internal
  */
  constructor(validEnd) {
    this.validEnd = validEnd;
    this.next = [];
    this.wrapCache = [];
  }
  /**
  @internal
  */
  static parse(string, nodeTypes) {
    let stream = new TokenStream(string, nodeTypes);
    if (stream.next == null) return _ContentMatch.empty;
    let expr = parseExpr(stream);
    if (stream.next) stream.err("Unexpected trailing text");
    let match = dfa(nfa(expr));
    checkForDeadEnds(match, stream);
    return match;
  }
  /**
  Match a node type, returning a match after that node if
  successful.
  */
  matchType(type) {
    for (let i = 0; i < this.next.length; i++) if (this.next[i].type == type) return this.next[i].next;
    return null;
  }
  /**
  Try to match a fragment. Returns the resulting match when
  successful.
  */
  matchFragment(frag, start = 0, end = frag.childCount) {
    let cur = this;
    for (let i = start; cur && i < end; i++) cur = cur.matchType(frag.child(i).type);
    return cur;
  }
  /**
  @internal
  */
  get inlineContent() {
    return this.next.length != 0 && this.next[0].type.isInline;
  }
  /**
  Get the first matching node type at this match position that can
  be generated.
  */
  get defaultType() {
    for (let i = 0; i < this.next.length; i++) {
      let {
        type
      } = this.next[i];
      if (!(type.isText || type.hasRequiredAttrs())) return type;
    }
    return null;
  }
  /**
  @internal
  */
  compatible(other) {
    for (let i = 0; i < this.next.length; i++) for (let j = 0; j < other.next.length; j++) if (this.next[i].type == other.next[j].type) return true;
    return false;
  }
  /**
  Try to match the given fragment, and if that fails, see if it can
  be made to match by inserting nodes in front of it. When
  successful, return a fragment of inserted nodes (which may be
  empty if nothing had to be inserted). When `toEnd` is true, only
  return a fragment if the resulting match goes to the end of the
  content expression.
  */
  fillBefore(after, toEnd = false, startIndex = 0) {
    let seen = [this];
    function search(match, types) {
      let finished = match.matchFragment(after, startIndex);
      if (finished && (!toEnd || finished.validEnd)) return Fragment.from(types.map((tp) => tp.createAndFill()));
      for (let i = 0; i < match.next.length; i++) {
        let {
          type,
          next
        } = match.next[i];
        if (!(type.isText || type.hasRequiredAttrs()) && seen.indexOf(next) == -1) {
          seen.push(next);
          let found2 = search(next, types.concat(type));
          if (found2) return found2;
        }
      }
      return null;
    }
    return search(this, []);
  }
  /**
  Find a set of wrapping node types that would allow a node of the
  given type to appear at this position. The result may be empty
  (when it fits directly) and will be null when no such wrapping
  exists.
  */
  findWrapping(target) {
    for (let i = 0; i < this.wrapCache.length; i += 2) if (this.wrapCache[i] == target) return this.wrapCache[i + 1];
    let computed2 = this.computeWrapping(target);
    this.wrapCache.push(target, computed2);
    return computed2;
  }
  /**
  @internal
  */
  computeWrapping(target) {
    let seen = /* @__PURE__ */ Object.create(null), active = [{
      match: this,
      type: null,
      via: null
    }];
    while (active.length) {
      let current = active.shift(), match = current.match;
      if (match.matchType(target)) {
        let result = [];
        for (let obj = current; obj.type; obj = obj.via) result.push(obj.type);
        return result.reverse();
      }
      for (let i = 0; i < match.next.length; i++) {
        let {
          type,
          next
        } = match.next[i];
        if (!type.isLeaf && !type.hasRequiredAttrs() && !(type.name in seen) && (!current.type || next.validEnd)) {
          active.push({
            match: type.contentMatch,
            type,
            via: current
          });
          seen[type.name] = true;
        }
      }
    }
    return null;
  }
  /**
  The number of outgoing edges this node has in the finite
  automaton that describes the content expression.
  */
  get edgeCount() {
    return this.next.length;
  }
  /**
  Get the _n_​th outgoing edge from this node in the finite
  automaton that describes the content expression.
  */
  edge(n) {
    if (n >= this.next.length) throw new RangeError(`There's no ${n}th edge in this content match`);
    return this.next[n];
  }
  /**
  @internal
  */
  toString() {
    let seen = [];
    function scan(m) {
      seen.push(m);
      for (let i = 0; i < m.next.length; i++) if (seen.indexOf(m.next[i].next) == -1) scan(m.next[i].next);
    }
    scan(this);
    return seen.map((m, i) => {
      let out = i + (m.validEnd ? "*" : " ") + " ";
      for (let i2 = 0; i2 < m.next.length; i2++) out += (i2 ? ", " : "") + m.next[i2].type.name + "->" + seen.indexOf(m.next[i2].next);
      return out;
    }).join("\n");
  }
};
ContentMatch.empty = new ContentMatch(true);
var TokenStream = class {
  constructor(string, nodeTypes) {
    this.string = string;
    this.nodeTypes = nodeTypes;
    this.inline = null;
    this.pos = 0;
    this.tokens = string.split(/\s*(?=\b|\W|$)/);
    if (this.tokens[this.tokens.length - 1] == "") this.tokens.pop();
    if (this.tokens[0] == "") this.tokens.shift();
  }
  get next() {
    return this.tokens[this.pos];
  }
  eat(tok) {
    return this.next == tok && (this.pos++ || true);
  }
  err(str) {
    throw new SyntaxError(str + " (in content expression '" + this.string + "')");
  }
};
function parseExpr(stream) {
  let exprs = [];
  do {
    exprs.push(parseExprSeq(stream));
  } while (stream.eat("|"));
  return exprs.length == 1 ? exprs[0] : {
    type: "choice",
    exprs
  };
}
function parseExprSeq(stream) {
  let exprs = [];
  do {
    exprs.push(parseExprSubscript(stream));
  } while (stream.next && stream.next != ")" && stream.next != "|");
  return exprs.length == 1 ? exprs[0] : {
    type: "seq",
    exprs
  };
}
function parseExprSubscript(stream) {
  let expr = parseExprAtom(stream);
  for (; ; ) {
    if (stream.eat("+")) expr = {
      type: "plus",
      expr
    };
    else if (stream.eat("*")) expr = {
      type: "star",
      expr
    };
    else if (stream.eat("?")) expr = {
      type: "opt",
      expr
    };
    else if (stream.eat("{")) expr = parseExprRange(stream, expr);
    else break;
  }
  return expr;
}
function parseNum(stream) {
  if (/\D/.test(stream.next)) stream.err("Expected number, got '" + stream.next + "'");
  let result = Number(stream.next);
  stream.pos++;
  return result;
}
function parseExprRange(stream, expr) {
  let min2 = parseNum(stream), max2 = min2;
  if (stream.eat(",")) {
    if (stream.next != "}") max2 = parseNum(stream);
    else max2 = -1;
  }
  if (!stream.eat("}")) stream.err("Unclosed braced range");
  return {
    type: "range",
    min: min2,
    max: max2,
    expr
  };
}
function resolveName(stream, name) {
  let types = stream.nodeTypes, type = types[name];
  if (type) return [type];
  let result = [];
  for (let typeName in types) {
    let type2 = types[typeName];
    if (type2.isInGroup(name)) result.push(type2);
  }
  if (result.length == 0) stream.err("No node type or group '" + name + "' found");
  return result;
}
function parseExprAtom(stream) {
  if (stream.eat("(")) {
    let expr = parseExpr(stream);
    if (!stream.eat(")")) stream.err("Missing closing paren");
    return expr;
  } else if (!/\W/.test(stream.next)) {
    let exprs = resolveName(stream, stream.next).map((type) => {
      if (stream.inline == null) stream.inline = type.isInline;
      else if (stream.inline != type.isInline) stream.err("Mixing inline and block content");
      return {
        type: "name",
        value: type
      };
    });
    stream.pos++;
    return exprs.length == 1 ? exprs[0] : {
      type: "choice",
      exprs
    };
  } else {
    stream.err("Unexpected token '" + stream.next + "'");
  }
}
function nfa(expr) {
  let nfa2 = [[]];
  connect(compile(expr, 0), node());
  return nfa2;
  function node() {
    return nfa2.push([]) - 1;
  }
  function edge(from2, to, term) {
    let edge2 = {
      term,
      to
    };
    nfa2[from2].push(edge2);
    return edge2;
  }
  function connect(edges, to) {
    edges.forEach((edge2) => edge2.to = to);
  }
  function compile(expr2, from2) {
    if (expr2.type == "choice") {
      return expr2.exprs.reduce((out, expr3) => out.concat(compile(expr3, from2)), []);
    } else if (expr2.type == "seq") {
      for (let i = 0; ; i++) {
        let next = compile(expr2.exprs[i], from2);
        if (i == expr2.exprs.length - 1) return next;
        connect(next, from2 = node());
      }
    } else if (expr2.type == "star") {
      let loop = node();
      edge(from2, loop);
      connect(compile(expr2.expr, loop), loop);
      return [edge(loop)];
    } else if (expr2.type == "plus") {
      let loop = node();
      connect(compile(expr2.expr, from2), loop);
      connect(compile(expr2.expr, loop), loop);
      return [edge(loop)];
    } else if (expr2.type == "opt") {
      return [edge(from2)].concat(compile(expr2.expr, from2));
    } else if (expr2.type == "range") {
      let cur = from2;
      for (let i = 0; i < expr2.min; i++) {
        let next = node();
        connect(compile(expr2.expr, cur), next);
        cur = next;
      }
      if (expr2.max == -1) {
        connect(compile(expr2.expr, cur), cur);
      } else {
        for (let i = expr2.min; i < expr2.max; i++) {
          let next = node();
          edge(cur, next);
          connect(compile(expr2.expr, cur), next);
          cur = next;
        }
      }
      return [edge(cur)];
    } else if (expr2.type == "name") {
      return [edge(from2, void 0, expr2.value)];
    } else {
      throw new Error("Unknown expr type");
    }
  }
}
function cmp(a, b) {
  return b - a;
}
function nullFrom(nfa2, node) {
  let result = [];
  scan(node);
  return result.sort(cmp);
  function scan(node2) {
    let edges = nfa2[node2];
    if (edges.length == 1 && !edges[0].term) return scan(edges[0].to);
    result.push(node2);
    for (let i = 0; i < edges.length; i++) {
      let {
        term,
        to
      } = edges[i];
      if (!term && result.indexOf(to) == -1) scan(to);
    }
  }
}
function dfa(nfa2) {
  let labeled = /* @__PURE__ */ Object.create(null);
  return explore(nullFrom(nfa2, 0));
  function explore(states) {
    let out = [];
    states.forEach((node) => {
      nfa2[node].forEach(({
        term,
        to
      }) => {
        if (!term) return;
        let set;
        for (let i = 0; i < out.length; i++) if (out[i][0] == term) set = out[i][1];
        nullFrom(nfa2, to).forEach((node2) => {
          if (!set) out.push([term, set = []]);
          if (set.indexOf(node2) == -1) set.push(node2);
        });
      });
    });
    let state2 = labeled[states.join(",")] = new ContentMatch(states.indexOf(nfa2.length - 1) > -1);
    for (let i = 0; i < out.length; i++) {
      let states2 = out[i][1].sort(cmp);
      state2.next.push({
        type: out[i][0],
        next: labeled[states2.join(",")] || explore(states2)
      });
    }
    return state2;
  }
}
function checkForDeadEnds(match, stream) {
  for (let i = 0, work = [match]; i < work.length; i++) {
    let state2 = work[i], dead = !state2.validEnd, nodes2 = [];
    for (let j = 0; j < state2.next.length; j++) {
      let {
        type,
        next
      } = state2.next[j];
      nodes2.push(type.name);
      if (dead && !(type.isText || type.hasRequiredAttrs())) dead = false;
      if (work.indexOf(next) == -1) work.push(next);
    }
    if (dead) stream.err("Only non-generatable nodes (" + nodes2.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
  }
}
function defaultAttrs(attrs) {
  let defaults2 = /* @__PURE__ */ Object.create(null);
  for (let attrName in attrs) {
    let attr = attrs[attrName];
    if (!attr.hasDefault) return null;
    defaults2[attrName] = attr.default;
  }
  return defaults2;
}
function computeAttrs(attrs, value) {
  let built = /* @__PURE__ */ Object.create(null);
  for (let name in attrs) {
    let given = value && value[name];
    if (given === void 0) {
      let attr = attrs[name];
      if (attr.hasDefault) given = attr.default;
      else throw new RangeError("No value supplied for attribute " + name);
    }
    built[name] = given;
  }
  return built;
}
function checkAttrs(attrs, values, type, name) {
  for (let name2 in values) if (!(name2 in attrs)) throw new RangeError(`Unsupported attribute ${name2} for ${type} of type ${name2}`);
  for (let name2 in attrs) {
    let attr = attrs[name2];
    if (attr.validate) attr.validate(values[name2]);
  }
}
function initAttrs(typeName, attrs) {
  let result = /* @__PURE__ */ Object.create(null);
  if (attrs) for (let name in attrs) result[name] = new Attribute(typeName, name, attrs[name]);
  return result;
}
var NodeType = class _NodeType {
  /**
  @internal
  */
  constructor(name, schema2, spec) {
    this.name = name;
    this.schema = schema2;
    this.spec = spec;
    this.markSet = null;
    this.groups = spec.group ? spec.group.split(" ") : [];
    this.attrs = initAttrs(name, spec.attrs);
    this.defaultAttrs = defaultAttrs(this.attrs);
    this.contentMatch = null;
    this.inlineContent = null;
    this.isBlock = !(spec.inline || name == "text");
    this.isText = name == "text";
  }
  /**
  True if this is an inline type.
  */
  get isInline() {
    return !this.isBlock;
  }
  /**
  True if this is a textblock type, a block that contains inline
  content.
  */
  get isTextblock() {
    return this.isBlock && this.inlineContent;
  }
  /**
  True for node types that allow no content.
  */
  get isLeaf() {
    return this.contentMatch == ContentMatch.empty;
  }
  /**
  True when this node is an atom, i.e. when it does not have
  directly editable content.
  */
  get isAtom() {
    return this.isLeaf || !!this.spec.atom;
  }
  /**
  Return true when this node type is part of the given
  [group](https://prosemirror.net/docs/ref/#model.NodeSpec.group).
  */
  isInGroup(group) {
    return this.groups.indexOf(group) > -1;
  }
  /**
  The node type's [whitespace](https://prosemirror.net/docs/ref/#model.NodeSpec.whitespace) option.
  */
  get whitespace() {
    return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
  }
  /**
  Tells you whether this node type has any required attributes.
  */
  hasRequiredAttrs() {
    for (let n in this.attrs) if (this.attrs[n].isRequired) return true;
    return false;
  }
  /**
  Indicates whether this node allows some of the same content as
  the given node type.
  */
  compatibleContent(other) {
    return this == other || this.contentMatch.compatible(other.contentMatch);
  }
  /**
  @internal
  */
  computeAttrs(attrs) {
    if (!attrs && this.defaultAttrs) return this.defaultAttrs;
    else return computeAttrs(this.attrs, attrs);
  }
  /**
  Create a `Node` of this type. The given attributes are
  checked and defaulted (you can pass `null` to use the type's
  defaults entirely, if no required attributes exist). `content`
  may be a `Fragment`, a node, an array of nodes, or
  `null`. Similarly `marks` may be `null` to default to the empty
  set of marks.
  */
  create(attrs = null, content, marks2) {
    if (this.isText) throw new Error("NodeType.create can't construct text nodes");
    return new Node2(this, this.computeAttrs(attrs), Fragment.from(content), Mark.setFrom(marks2));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
  against the node type's content restrictions, and throw an error
  if it doesn't match.
  */
  createChecked(attrs = null, content, marks2) {
    content = Fragment.from(content);
    this.checkContent(content);
    return new Node2(this, this.computeAttrs(attrs), content, Mark.setFrom(marks2));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but see if it is
  necessary to add nodes to the start or end of the given fragment
  to make it fit the node. If no fitting wrapping can be found,
  return null. Note that, due to the fact that required nodes can
  always be created, this will always succeed if you pass null or
  `Fragment.empty` as content.
  */
  createAndFill(attrs = null, content, marks2) {
    attrs = this.computeAttrs(attrs);
    content = Fragment.from(content);
    if (content.size) {
      let before = this.contentMatch.fillBefore(content);
      if (!before) return null;
      content = before.append(content);
    }
    let matched = this.contentMatch.matchFragment(content);
    let after = matched && matched.fillBefore(Fragment.empty, true);
    if (!after) return null;
    return new Node2(this, attrs, content.append(after), Mark.setFrom(marks2));
  }
  /**
  Returns true if the given fragment is valid content for this node
  type.
  */
  validContent(content) {
    let result = this.contentMatch.matchFragment(content);
    if (!result || !result.validEnd) return false;
    for (let i = 0; i < content.childCount; i++) if (!this.allowsMarks(content.child(i).marks)) return false;
    return true;
  }
  /**
  Throws a RangeError if the given fragment is not valid content for this
  node type.
  @internal
  */
  checkContent(content) {
    if (!this.validContent(content)) throw new RangeError(`Invalid content for node ${this.name}: ${content.toString().slice(0, 50)}`);
  }
  /**
  @internal
  */
  checkAttrs(attrs) {
    checkAttrs(this.attrs, attrs, "node", this.name);
  }
  /**
  Check whether the given mark type is allowed in this node.
  */
  allowsMarkType(markType) {
    return this.markSet == null || this.markSet.indexOf(markType) > -1;
  }
  /**
  Test whether the given set of marks are allowed in this node.
  */
  allowsMarks(marks2) {
    if (this.markSet == null) return true;
    for (let i = 0; i < marks2.length; i++) if (!this.allowsMarkType(marks2[i].type)) return false;
    return true;
  }
  /**
  Removes the marks that are not allowed in this node from the given set.
  */
  allowedMarks(marks2) {
    if (this.markSet == null) return marks2;
    let copy2;
    for (let i = 0; i < marks2.length; i++) {
      if (!this.allowsMarkType(marks2[i].type)) {
        if (!copy2) copy2 = marks2.slice(0, i);
      } else if (copy2) {
        copy2.push(marks2[i]);
      }
    }
    return !copy2 ? marks2 : copy2.length ? copy2 : Mark.none;
  }
  /**
  @internal
  */
  static compile(nodes2, schema2) {
    let result = /* @__PURE__ */ Object.create(null);
    nodes2.forEach((name, spec) => result[name] = new _NodeType(name, schema2, spec));
    let topType = schema2.spec.topNode || "doc";
    if (!result[topType]) throw new RangeError("Schema is missing its top node type ('" + topType + "')");
    if (!result.text) throw new RangeError("Every schema needs a 'text' type");
    for (let _ in result.text.attrs) throw new RangeError("The text node type should not have attributes");
    return result;
  }
};
function validateType(typeName, attrName, type) {
  let types = type.split("|");
  return (value) => {
    let name = value === null ? "null" : typeof value;
    if (types.indexOf(name) < 0) throw new RangeError(`Expected value of type ${types} for attribute ${attrName} on type ${typeName}, got ${name}`);
  };
}
var Attribute = class {
  constructor(typeName, attrName, options) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(options, "default");
    this.default = options.default;
    this.validate = typeof options.validate == "string" ? validateType(typeName, attrName, options.validate) : options.validate;
  }
  get isRequired() {
    return !this.hasDefault;
  }
};
var MarkType = class _MarkType {
  /**
  @internal
  */
  constructor(name, rank, schema2, spec) {
    this.name = name;
    this.rank = rank;
    this.schema = schema2;
    this.spec = spec;
    this.attrs = initAttrs(name, spec.attrs);
    this.excluded = null;
    let defaults2 = defaultAttrs(this.attrs);
    this.instance = defaults2 ? new Mark(this, defaults2) : null;
  }
  /**
  Create a mark of this type. `attrs` may be `null` or an object
  containing only some of the mark's attributes. The others, if
  they have defaults, will be added.
  */
  create(attrs = null) {
    if (!attrs && this.instance) return this.instance;
    return new Mark(this, computeAttrs(this.attrs, attrs));
  }
  /**
  @internal
  */
  static compile(marks2, schema2) {
    let result = /* @__PURE__ */ Object.create(null), rank = 0;
    marks2.forEach((name, spec) => result[name] = new _MarkType(name, rank++, schema2, spec));
    return result;
  }
  /**
  When there is a mark of this type in the given set, a new set
  without it is returned. Otherwise, the input set is returned.
  */
  removeFromSet(set) {
    for (var i = 0; i < set.length; i++) if (set[i].type == this) {
      set = set.slice(0, i).concat(set.slice(i + 1));
      i--;
    }
    return set;
  }
  /**
  Tests whether there is a mark of this type in the given set.
  */
  isInSet(set) {
    for (let i = 0; i < set.length; i++) if (set[i].type == this) return set[i];
  }
  /**
  @internal
  */
  checkAttrs(attrs) {
    checkAttrs(this.attrs, attrs, "mark", this.name);
  }
  /**
  Queries whether a given mark type is
  [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
  */
  excludes(other) {
    return this.excluded.indexOf(other) > -1;
  }
};
var Schema = class {
  /**
  Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
  */
  constructor(spec) {
    this.linebreakReplacement = null;
    this.cached = /* @__PURE__ */ Object.create(null);
    let instanceSpec = this.spec = {};
    for (let prop in spec) instanceSpec[prop] = spec[prop];
    instanceSpec.nodes = dist_default.from(spec.nodes), instanceSpec.marks = dist_default.from(spec.marks || {}), this.nodes = NodeType.compile(this.spec.nodes, this);
    this.marks = MarkType.compile(this.spec.marks, this);
    let contentExprCache = /* @__PURE__ */ Object.create(null);
    for (let prop in this.nodes) {
      if (prop in this.marks) throw new RangeError(prop + " can not be both a node and a mark");
      let type = this.nodes[prop], contentExpr = type.spec.content || "", markExpr = type.spec.marks;
      type.contentMatch = contentExprCache[contentExpr] || (contentExprCache[contentExpr] = ContentMatch.parse(contentExpr, this.nodes));
      type.inlineContent = type.contentMatch.inlineContent;
      if (type.spec.linebreakReplacement) {
        if (this.linebreakReplacement) throw new RangeError("Multiple linebreak nodes defined");
        if (!type.isInline || !type.isLeaf) throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
        this.linebreakReplacement = type;
      }
      type.markSet = markExpr == "_" ? null : markExpr ? gatherMarks(this, markExpr.split(" ")) : markExpr == "" || !type.inlineContent ? [] : null;
    }
    for (let prop in this.marks) {
      let type = this.marks[prop], excl = type.spec.excludes;
      type.excluded = excl == null ? [type] : excl == "" ? [] : gatherMarks(this, excl.split(" "));
    }
    this.nodeFromJSON = (json) => Node2.fromJSON(this, json);
    this.markFromJSON = (json) => Mark.fromJSON(this, json);
    this.topNodeType = this.nodes[this.spec.topNode || "doc"];
    this.cached.wrappings = /* @__PURE__ */ Object.create(null);
  }
  /**
  Create a node in this schema. The `type` may be a string or a
  `NodeType` instance. Attributes will be extended with defaults,
  `content` may be a `Fragment`, `null`, a `Node`, or an array of
  nodes.
  */
  node(type, attrs = null, content, marks2) {
    if (typeof type == "string") type = this.nodeType(type);
    else if (!(type instanceof NodeType)) throw new RangeError("Invalid node type: " + type);
    else if (type.schema != this) throw new RangeError("Node type from different schema used (" + type.name + ")");
    return type.createChecked(attrs, content, marks2);
  }
  /**
  Create a text node in the schema. Empty text nodes are not
  allowed.
  */
  text(text2, marks2) {
    let type = this.nodes.text;
    return new TextNode(type, type.defaultAttrs, text2, Mark.setFrom(marks2));
  }
  /**
  Create a mark with the given type and attributes.
  */
  mark(type, attrs) {
    if (typeof type == "string") type = this.marks[type];
    return type.create(attrs);
  }
  /**
  @internal
  */
  nodeType(name) {
    let found2 = this.nodes[name];
    if (!found2) throw new RangeError("Unknown node type: " + name);
    return found2;
  }
};
function gatherMarks(schema2, marks2) {
  let found2 = [];
  for (let i = 0; i < marks2.length; i++) {
    let name = marks2[i], mark = schema2.marks[name], ok = mark;
    if (mark) {
      found2.push(mark);
    } else {
      for (let prop in schema2.marks) {
        let mark2 = schema2.marks[prop];
        if (name == "_" || mark2.spec.group && mark2.spec.group.split(" ").indexOf(name) > -1) found2.push(ok = mark2);
      }
    }
    if (!ok) throw new SyntaxError("Unknown mark type: '" + marks2[i] + "'");
  }
  return found2;
}
function isTagRule(rule) {
  return rule.tag != null;
}
function isStyleRule(rule) {
  return rule.style != null;
}
var DOMParser = class _DOMParser {
  /**
  Create a parser that targets the given schema, using the given
  parsing rules.
  */
  constructor(schema2, rules) {
    this.schema = schema2;
    this.rules = rules;
    this.tags = [];
    this.styles = [];
    let matchedStyles = this.matchedStyles = [];
    rules.forEach((rule) => {
      if (isTagRule(rule)) {
        this.tags.push(rule);
      } else if (isStyleRule(rule)) {
        let prop = /[^=]*/.exec(rule.style)[0];
        if (matchedStyles.indexOf(prop) < 0) matchedStyles.push(prop);
        this.styles.push(rule);
      }
    });
    this.normalizeLists = !this.tags.some((r) => {
      if (!/^(ul|ol)\b/.test(r.tag) || !r.node) return false;
      let node = schema2.nodes[r.node];
      return node.contentMatch.matchType(node);
    });
  }
  /**
  Parse a document from the content of a DOM node.
  */
  parse(dom, options = {}) {
    let context = new ParseContext(this, options, false);
    context.addAll(dom, Mark.none, options.from, options.to);
    return context.finish();
  }
  /**
  Parses the content of the given DOM node, like
  [`parse`](https://prosemirror.net/docs/ref/#model.DOMParser.parse), and takes the same set of
  options. But unlike that method, which produces a whole node,
  this one returns a slice that is open at the sides, meaning that
  the schema constraints aren't applied to the start of nodes to
  the left of the input and the end of nodes at the end.
  */
  parseSlice(dom, options = {}) {
    let context = new ParseContext(this, options, true);
    context.addAll(dom, Mark.none, options.from, options.to);
    return Slice.maxOpen(context.finish());
  }
  /**
  @internal
  */
  matchTag(dom, context, after) {
    for (let i = after ? this.tags.indexOf(after) + 1 : 0; i < this.tags.length; i++) {
      let rule = this.tags[i];
      if (matches(dom, rule.tag) && (rule.namespace === void 0 || dom.namespaceURI == rule.namespace) && (!rule.context || context.matchesContext(rule.context))) {
        if (rule.getAttrs) {
          let result = rule.getAttrs(dom);
          if (result === false) continue;
          rule.attrs = result || void 0;
        }
        return rule;
      }
    }
  }
  /**
  @internal
  */
  matchStyle(prop, value, context, after) {
    for (let i = after ? this.styles.indexOf(after) + 1 : 0; i < this.styles.length; i++) {
      let rule = this.styles[i], style2 = rule.style;
      if (style2.indexOf(prop) != 0 || rule.context && !context.matchesContext(rule.context) || // Test that the style string either precisely matches the prop,
      // or has an '=' sign after the prop, followed by the given
      // value.
      style2.length > prop.length && (style2.charCodeAt(prop.length) != 61 || style2.slice(prop.length + 1) != value)) continue;
      if (rule.getAttrs) {
        let result = rule.getAttrs(value);
        if (result === false) continue;
        rule.attrs = result || void 0;
      }
      return rule;
    }
  }
  /**
  @internal
  */
  static schemaRules(schema2) {
    let result = [];
    function insert(rule) {
      let priority = rule.priority == null ? 50 : rule.priority, i = 0;
      for (; i < result.length; i++) {
        let next = result[i], nextPriority = next.priority == null ? 50 : next.priority;
        if (nextPriority < priority) break;
      }
      result.splice(i, 0, rule);
    }
    for (let name in schema2.marks) {
      let rules = schema2.marks[name].spec.parseDOM;
      if (rules) rules.forEach((rule) => {
        insert(rule = copy(rule));
        if (!(rule.mark || rule.ignore || rule.clearMark)) rule.mark = name;
      });
    }
    for (let name in schema2.nodes) {
      let rules = schema2.nodes[name].spec.parseDOM;
      if (rules) rules.forEach((rule) => {
        insert(rule = copy(rule));
        if (!(rule.node || rule.ignore || rule.mark)) rule.node = name;
      });
    }
    return result;
  }
  /**
  Construct a DOM parser using the parsing rules listed in a
  schema's [node specs](https://prosemirror.net/docs/ref/#model.NodeSpec.parseDOM), reordered by
  [priority](https://prosemirror.net/docs/ref/#model.GenericParseRule.priority).
  */
  static fromSchema(schema2) {
    return schema2.cached.domParser || (schema2.cached.domParser = new _DOMParser(schema2, _DOMParser.schemaRules(schema2)));
  }
};
var blockTags = {
  address: true,
  article: true,
  aside: true,
  blockquote: true,
  canvas: true,
  dd: true,
  div: true,
  dl: true,
  fieldset: true,
  figcaption: true,
  figure: true,
  footer: true,
  form: true,
  h1: true,
  h2: true,
  h3: true,
  h4: true,
  h5: true,
  h6: true,
  header: true,
  hgroup: true,
  hr: true,
  li: true,
  noscript: true,
  ol: true,
  output: true,
  p: true,
  pre: true,
  section: true,
  table: true,
  tfoot: true,
  ul: true
};
var ignoreTags = {
  head: true,
  noscript: true,
  object: true,
  script: true,
  style: true,
  title: true
};
var listTags = {
  ol: true,
  ul: true
};
var OPT_PRESERVE_WS = 1;
var OPT_PRESERVE_WS_FULL = 2;
var OPT_OPEN_LEFT = 4;
function wsOptionsFor(type, preserveWhitespace, base2) {
  if (preserveWhitespace != null) return (preserveWhitespace ? OPT_PRESERVE_WS : 0) | (preserveWhitespace === "full" ? OPT_PRESERVE_WS_FULL : 0);
  return type && type.whitespace == "pre" ? OPT_PRESERVE_WS | OPT_PRESERVE_WS_FULL : base2 & ~OPT_OPEN_LEFT;
}
var NodeContext = class {
  constructor(type, attrs, marks2, solid, match, options) {
    this.type = type;
    this.attrs = attrs;
    this.marks = marks2;
    this.solid = solid;
    this.options = options;
    this.content = [];
    this.activeMarks = Mark.none;
    this.match = match || (options & OPT_OPEN_LEFT ? null : type.contentMatch);
  }
  findWrapping(node) {
    if (!this.match) {
      if (!this.type) return [];
      let fill = this.type.contentMatch.fillBefore(Fragment.from(node));
      if (fill) {
        this.match = this.type.contentMatch.matchFragment(fill);
      } else {
        let start = this.type.contentMatch, wrap2;
        if (wrap2 = start.findWrapping(node.type)) {
          this.match = start;
          return wrap2;
        } else {
          return null;
        }
      }
    }
    return this.match.findWrapping(node.type);
  }
  finish(openEnd) {
    if (!(this.options & OPT_PRESERVE_WS)) {
      let last = this.content[this.content.length - 1], m;
      if (last && last.isText && (m = /[ \t\r\n\u000c]+$/.exec(last.text))) {
        let text2 = last;
        if (last.text.length == m[0].length) this.content.pop();
        else this.content[this.content.length - 1] = text2.withText(text2.text.slice(0, text2.text.length - m[0].length));
      }
    }
    let content = Fragment.from(this.content);
    if (!openEnd && this.match) content = content.append(this.match.fillBefore(Fragment.empty, true));
    return this.type ? this.type.create(this.attrs, content, this.marks) : content;
  }
  inlineContext(node) {
    if (this.type) return this.type.inlineContent;
    if (this.content.length) return this.content[0].isInline;
    return node.parentNode && !blockTags.hasOwnProperty(node.parentNode.nodeName.toLowerCase());
  }
};
var ParseContext = class {
  constructor(parser, options, isOpen) {
    this.parser = parser;
    this.options = options;
    this.isOpen = isOpen;
    this.open = 0;
    this.localPreserveWS = false;
    let topNode = options.topNode, topContext;
    let topOptions = wsOptionsFor(null, options.preserveWhitespace, 0) | (isOpen ? OPT_OPEN_LEFT : 0);
    if (topNode) topContext = new NodeContext(topNode.type, topNode.attrs, Mark.none, true, options.topMatch || topNode.type.contentMatch, topOptions);
    else if (isOpen) topContext = new NodeContext(null, null, Mark.none, true, null, topOptions);
    else topContext = new NodeContext(parser.schema.topNodeType, null, Mark.none, true, null, topOptions);
    this.nodes = [topContext];
    this.find = options.findPositions;
    this.needsBlock = false;
  }
  get top() {
    return this.nodes[this.open];
  }
  // Add a DOM node to the content. Text is inserted as text node,
  // otherwise, the node is passed to `addElement` or, if it has a
  // `style` attribute, `addElementWithStyles`.
  addDOM(dom, marks2) {
    if (dom.nodeType == 3) this.addTextNode(dom, marks2);
    else if (dom.nodeType == 1) this.addElement(dom, marks2);
  }
  addTextNode(dom, marks2) {
    let value = dom.nodeValue;
    let top = this.top, preserveWS = top.options & OPT_PRESERVE_WS_FULL ? "full" : this.localPreserveWS || (top.options & OPT_PRESERVE_WS) > 0;
    let {
      schema: schema2
    } = this.parser;
    if (preserveWS === "full" || top.inlineContext(dom) || /[^ \t\r\n\u000c]/.test(value)) {
      if (!preserveWS) {
        value = value.replace(/[ \t\r\n\u000c]+/g, " ");
        if (/^[ \t\r\n\u000c]/.test(value) && this.open == this.nodes.length - 1) {
          let nodeBefore = top.content[top.content.length - 1];
          let domNodeBefore = dom.previousSibling;
          if (!nodeBefore || domNodeBefore && domNodeBefore.nodeName == "BR" || nodeBefore.isText && /[ \t\r\n\u000c]$/.test(nodeBefore.text)) value = value.slice(1);
        }
      } else if (preserveWS === "full") {
        value = value.replace(/\r\n?/g, "\n");
      } else if (schema2.linebreakReplacement && /[\r\n]/.test(value) && this.top.findWrapping(schema2.linebreakReplacement.create())) {
        let lines = value.split(/\r?\n|\r/);
        for (let i = 0; i < lines.length; i++) {
          if (i) this.insertNode(schema2.linebreakReplacement.create(), marks2, true);
          if (lines[i]) this.insertNode(schema2.text(lines[i]), marks2, !/\S/.test(lines[i]));
        }
        value = "";
      } else {
        value = value.replace(/\r?\n|\r/g, " ");
      }
      if (value) this.insertNode(schema2.text(value), marks2, !/\S/.test(value));
      this.findInText(dom);
    } else {
      this.findInside(dom);
    }
  }
  // Try to find a handler for the given tag and use that to parse. If
  // none is found, the element's content nodes are added directly.
  addElement(dom, marks2, matchAfter) {
    let outerWS = this.localPreserveWS, top = this.top;
    if (dom.tagName == "PRE" || /pre/.test(dom.style && dom.style.whiteSpace)) this.localPreserveWS = true;
    let name = dom.nodeName.toLowerCase(), ruleID;
    if (listTags.hasOwnProperty(name) && this.parser.normalizeLists) normalizeList(dom);
    let rule = this.options.ruleFromNode && this.options.ruleFromNode(dom) || (ruleID = this.parser.matchTag(dom, this, matchAfter));
    out: if (rule ? rule.ignore : ignoreTags.hasOwnProperty(name)) {
      this.findInside(dom);
      this.ignoreFallback(dom, marks2);
    } else if (!rule || rule.skip || rule.closeParent) {
      if (rule && rule.closeParent) this.open = Math.max(0, this.open - 1);
      else if (rule && rule.skip.nodeType) dom = rule.skip;
      let sync, oldNeedsBlock = this.needsBlock;
      if (blockTags.hasOwnProperty(name)) {
        if (top.content.length && top.content[0].isInline && this.open) {
          this.open--;
          top = this.top;
        }
        sync = true;
        if (!top.type) this.needsBlock = true;
      } else if (!dom.firstChild) {
        this.leafFallback(dom, marks2);
        break out;
      }
      let innerMarks = rule && rule.skip ? marks2 : this.readStyles(dom, marks2);
      if (innerMarks) this.addAll(dom, innerMarks);
      if (sync) this.sync(top);
      this.needsBlock = oldNeedsBlock;
    } else {
      let innerMarks = this.readStyles(dom, marks2);
      if (innerMarks) this.addElementByRule(dom, rule, innerMarks, rule.consuming === false ? ruleID : void 0);
    }
    this.localPreserveWS = outerWS;
  }
  // Called for leaf DOM nodes that would otherwise be ignored
  leafFallback(dom, marks2) {
    if (dom.nodeName == "BR" && this.top.type && this.top.type.inlineContent) this.addTextNode(dom.ownerDocument.createTextNode("\n"), marks2);
  }
  // Called for ignored nodes
  ignoreFallback(dom, marks2) {
    if (dom.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent)) this.findPlace(this.parser.schema.text("-"), marks2, true);
  }
  // Run any style parser associated with the node's styles. Either
  // return an updated array of marks, or null to indicate some of the
  // styles had a rule with `ignore` set.
  readStyles(dom, marks2) {
    let styles = dom.style;
    if (styles && styles.length) for (let i = 0; i < this.parser.matchedStyles.length; i++) {
      let name = this.parser.matchedStyles[i], value = styles.getPropertyValue(name);
      if (value) for (let after = void 0; ; ) {
        let rule = this.parser.matchStyle(name, value, this, after);
        if (!rule) break;
        if (rule.ignore) return null;
        if (rule.clearMark) marks2 = marks2.filter((m) => !rule.clearMark(m));
        else marks2 = marks2.concat(this.parser.schema.marks[rule.mark].create(rule.attrs));
        if (rule.consuming === false) after = rule;
        else break;
      }
    }
    return marks2;
  }
  // Look up a handler for the given node. If none are found, return
  // false. Otherwise, apply it, use its return value to drive the way
  // the node's content is wrapped, and return true.
  addElementByRule(dom, rule, marks2, continueAfter) {
    let sync, nodeType;
    if (rule.node) {
      nodeType = this.parser.schema.nodes[rule.node];
      if (!nodeType.isLeaf) {
        let inner = this.enter(nodeType, rule.attrs || null, marks2, rule.preserveWhitespace);
        if (inner) {
          sync = true;
          marks2 = inner;
        }
      } else if (!this.insertNode(nodeType.create(rule.attrs), marks2, dom.nodeName == "BR")) {
        this.leafFallback(dom, marks2);
      }
    } else {
      let markType = this.parser.schema.marks[rule.mark];
      marks2 = marks2.concat(markType.create(rule.attrs));
    }
    let startIn = this.top;
    if (nodeType && nodeType.isLeaf) {
      this.findInside(dom);
    } else if (continueAfter) {
      this.addElement(dom, marks2, continueAfter);
    } else if (rule.getContent) {
      this.findInside(dom);
      rule.getContent(dom, this.parser.schema).forEach((node) => this.insertNode(node, marks2, false));
    } else {
      let contentDOM = dom;
      if (typeof rule.contentElement == "string") contentDOM = dom.querySelector(rule.contentElement);
      else if (typeof rule.contentElement == "function") contentDOM = rule.contentElement(dom);
      else if (rule.contentElement) contentDOM = rule.contentElement;
      this.findAround(dom, contentDOM, true);
      this.addAll(contentDOM, marks2);
      this.findAround(dom, contentDOM, false);
    }
    if (sync && this.sync(startIn)) this.open--;
  }
  // Add all child nodes between `startIndex` and `endIndex` (or the
  // whole node, if not given). If `sync` is passed, use it to
  // synchronize after every block element.
  addAll(parent, marks2, startIndex, endIndex) {
    let index = startIndex || 0;
    for (let dom = startIndex ? parent.childNodes[startIndex] : parent.firstChild, end = endIndex == null ? null : parent.childNodes[endIndex]; dom != end; dom = dom.nextSibling, ++index) {
      this.findAtPoint(parent, index);
      this.addDOM(dom, marks2);
    }
    this.findAtPoint(parent, index);
  }
  // Try to find a way to fit the given node type into the current
  // context. May add intermediate wrappers and/or leave non-solid
  // nodes that we're in.
  findPlace(node, marks2, cautious) {
    let route, sync;
    for (let depth = this.open, penalty = 0; depth >= 0; depth--) {
      let cx = this.nodes[depth];
      let found2 = cx.findWrapping(node);
      if (found2 && (!route || route.length > found2.length + penalty)) {
        route = found2;
        sync = cx;
        if (!found2.length) break;
      }
      if (cx.solid) {
        if (cautious) break;
        penalty += 2;
      }
    }
    if (!route) return null;
    this.sync(sync);
    for (let i = 0; i < route.length; i++) marks2 = this.enterInner(route[i], null, marks2, false);
    return marks2;
  }
  // Try to insert the given node, adjusting the context when needed.
  insertNode(node, marks2, cautious) {
    if (node.isInline && this.needsBlock && !this.top.type) {
      let block = this.textblockFromContext();
      if (block) marks2 = this.enterInner(block, null, marks2);
    }
    let innerMarks = this.findPlace(node, marks2, cautious);
    if (innerMarks) {
      this.closeExtra();
      let top = this.top;
      if (top.match) top.match = top.match.matchType(node.type);
      let nodeMarks = Mark.none;
      for (let m of innerMarks.concat(node.marks)) if (top.type ? top.type.allowsMarkType(m.type) : markMayApply(m.type, node.type)) nodeMarks = m.addToSet(nodeMarks);
      top.content.push(node.mark(nodeMarks));
      return true;
    }
    return false;
  }
  // Try to start a node of the given type, adjusting the context when
  // necessary.
  enter(type, attrs, marks2, preserveWS) {
    let innerMarks = this.findPlace(type.create(attrs), marks2, false);
    if (innerMarks) innerMarks = this.enterInner(type, attrs, marks2, true, preserveWS);
    return innerMarks;
  }
  // Open a node of the given type
  enterInner(type, attrs, marks2, solid = false, preserveWS) {
    this.closeExtra();
    let top = this.top;
    top.match = top.match && top.match.matchType(type);
    let options = wsOptionsFor(type, preserveWS, top.options);
    if (top.options & OPT_OPEN_LEFT && top.content.length == 0) options |= OPT_OPEN_LEFT;
    let applyMarks = Mark.none;
    marks2 = marks2.filter((m) => {
      if (top.type ? top.type.allowsMarkType(m.type) : markMayApply(m.type, type)) {
        applyMarks = m.addToSet(applyMarks);
        return false;
      }
      return true;
    });
    this.nodes.push(new NodeContext(type, attrs, applyMarks, solid, null, options));
    this.open++;
    return marks2;
  }
  // Make sure all nodes above this.open are finished and added to
  // their parents
  closeExtra(openEnd = false) {
    let i = this.nodes.length - 1;
    if (i > this.open) {
      for (; i > this.open; i--) this.nodes[i - 1].content.push(this.nodes[i].finish(openEnd));
      this.nodes.length = this.open + 1;
    }
  }
  finish() {
    this.open = 0;
    this.closeExtra(this.isOpen);
    return this.nodes[0].finish(!!(this.isOpen || this.options.topOpen));
  }
  sync(to) {
    for (let i = this.open; i >= 0; i--) {
      if (this.nodes[i] == to) {
        this.open = i;
        return true;
      } else if (this.localPreserveWS) {
        this.nodes[i].options |= OPT_PRESERVE_WS;
      }
    }
    return false;
  }
  get currentPos() {
    this.closeExtra();
    let pos = 0;
    for (let i = this.open; i >= 0; i--) {
      let content = this.nodes[i].content;
      for (let j = content.length - 1; j >= 0; j--) pos += content[j].nodeSize;
      if (i) pos++;
    }
    return pos;
  }
  findAtPoint(parent, offset3) {
    if (this.find) for (let i = 0; i < this.find.length; i++) {
      if (this.find[i].node == parent && this.find[i].offset == offset3) this.find[i].pos = this.currentPos;
    }
  }
  findInside(parent) {
    if (this.find) for (let i = 0; i < this.find.length; i++) {
      if (this.find[i].pos == null && parent.nodeType == 1 && parent.contains(this.find[i].node)) this.find[i].pos = this.currentPos;
    }
  }
  findAround(parent, content, before) {
    if (parent != content && this.find) for (let i = 0; i < this.find.length; i++) {
      if (this.find[i].pos == null && parent.nodeType == 1 && parent.contains(this.find[i].node)) {
        let pos = content.compareDocumentPosition(this.find[i].node);
        if (pos & (before ? 2 : 4)) this.find[i].pos = this.currentPos;
      }
    }
  }
  findInText(textNode) {
    if (this.find) for (let i = 0; i < this.find.length; i++) {
      if (this.find[i].node == textNode) this.find[i].pos = this.currentPos - (textNode.nodeValue.length - this.find[i].offset);
    }
  }
  // Determines whether the given context string matches this context.
  matchesContext(context) {
    if (context.indexOf("|") > -1) return context.split(/\s*\|\s*/).some(this.matchesContext, this);
    let parts = context.split("/");
    let option = this.options.context;
    let useRoot = !this.isOpen && (!option || option.parent.type == this.nodes[0].type);
    let minDepth = -(option ? option.depth + 1 : 0) + (useRoot ? 0 : 1);
    let match = (i, depth) => {
      for (; i >= 0; i--) {
        let part = parts[i];
        if (part == "") {
          if (i == parts.length - 1 || i == 0) continue;
          for (; depth >= minDepth; depth--) if (match(i - 1, depth)) return true;
          return false;
        } else {
          let next = depth > 0 || depth == 0 && useRoot ? this.nodes[depth].type : option && depth >= minDepth ? option.node(depth - minDepth).type : null;
          if (!next || next.name != part && !next.isInGroup(part)) return false;
          depth--;
        }
      }
      return true;
    };
    return match(parts.length - 1, this.open);
  }
  textblockFromContext() {
    let $context = this.options.context;
    if ($context) for (let d = $context.depth; d >= 0; d--) {
      let deflt = $context.node(d).contentMatchAt($context.indexAfter(d)).defaultType;
      if (deflt && deflt.isTextblock && deflt.defaultAttrs) return deflt;
    }
    for (let name in this.parser.schema.nodes) {
      let type = this.parser.schema.nodes[name];
      if (type.isTextblock && type.defaultAttrs) return type;
    }
  }
};
function normalizeList(dom) {
  for (let child = dom.firstChild, prevItem = null; child; child = child.nextSibling) {
    let name = child.nodeType == 1 ? child.nodeName.toLowerCase() : null;
    if (name && listTags.hasOwnProperty(name) && prevItem) {
      prevItem.appendChild(child);
      child = prevItem;
    } else if (name == "li") {
      prevItem = child;
    } else if (name) {
      prevItem = null;
    }
  }
}
function matches(dom, selector) {
  return (dom.matches || dom.msMatchesSelector || dom.webkitMatchesSelector || dom.mozMatchesSelector).call(dom, selector);
}
function copy(obj) {
  let copy2 = {};
  for (let prop in obj) copy2[prop] = obj[prop];
  return copy2;
}
function markMayApply(markType, nodeType) {
  let nodes2 = nodeType.schema.nodes;
  for (let name in nodes2) {
    let parent = nodes2[name];
    if (!parent.allowsMarkType(markType)) continue;
    let seen = [], scan = (match) => {
      seen.push(match);
      for (let i = 0; i < match.edgeCount; i++) {
        let {
          type,
          next
        } = match.edge(i);
        if (type == nodeType) return true;
        if (seen.indexOf(next) < 0 && scan(next)) return true;
      }
    };
    if (scan(parent.contentMatch)) return true;
  }
}
var DOMSerializer = class _DOMSerializer {
  /**
  Create a serializer. `nodes` should map node names to functions
  that take a node and return a description of the corresponding
  DOM. `marks` does the same for mark names, but also gets an
  argument that tells it whether the mark's content is block or
  inline content (for typical use, it'll always be inline). A mark
  serializer may be `null` to indicate that marks of that type
  should not be serialized.
  */
  constructor(nodes2, marks2) {
    this.nodes = nodes2;
    this.marks = marks2;
  }
  /**
  Serialize the content of this fragment to a DOM fragment. When
  not in the browser, the `document` option, containing a DOM
  document, should be passed so that the serializer can create
  nodes.
  */
  serializeFragment(fragment, options = {}, target) {
    if (!target) target = doc(options).createDocumentFragment();
    let top = target, active = [];
    fragment.forEach((node) => {
      if (active.length || node.marks.length) {
        let keep = 0, rendered = 0;
        while (keep < active.length && rendered < node.marks.length) {
          let next = node.marks[rendered];
          if (!this.marks[next.type.name]) {
            rendered++;
            continue;
          }
          if (!next.eq(active[keep][0]) || next.type.spec.spanning === false) break;
          keep++;
          rendered++;
        }
        while (keep < active.length) top = active.pop()[1];
        while (rendered < node.marks.length) {
          let add = node.marks[rendered++];
          let markDOM = this.serializeMark(add, node.isInline, options);
          if (markDOM) {
            active.push([add, top]);
            top.appendChild(markDOM.dom);
            top = markDOM.contentDOM || markDOM.dom;
          }
        }
      }
      top.appendChild(this.serializeNodeInner(node, options));
    });
    return target;
  }
  /**
  @internal
  */
  serializeNodeInner(node, options) {
    let {
      dom,
      contentDOM
    } = renderSpec(doc(options), this.nodes[node.type.name](node), null, node.attrs);
    if (contentDOM) {
      if (node.isLeaf) throw new RangeError("Content hole not allowed in a leaf node spec");
      this.serializeFragment(node.content, options, contentDOM);
    }
    return dom;
  }
  /**
  Serialize this node to a DOM node. This can be useful when you
  need to serialize a part of a document, as opposed to the whole
  document. To serialize a whole document, use
  [`serializeFragment`](https://prosemirror.net/docs/ref/#model.DOMSerializer.serializeFragment) on
  its [content](https://prosemirror.net/docs/ref/#model.Node.content).
  */
  serializeNode(node, options = {}) {
    let dom = this.serializeNodeInner(node, options);
    for (let i = node.marks.length - 1; i >= 0; i--) {
      let wrap2 = this.serializeMark(node.marks[i], node.isInline, options);
      if (wrap2) {
        (wrap2.contentDOM || wrap2.dom).appendChild(dom);
        dom = wrap2.dom;
      }
    }
    return dom;
  }
  /**
  @internal
  */
  serializeMark(mark, inline2, options = {}) {
    let toDOM = this.marks[mark.type.name];
    return toDOM && renderSpec(doc(options), toDOM(mark, inline2), null, mark.attrs);
  }
  static renderSpec(doc4, structure, xmlNS = null, blockArraysIn) {
    return renderSpec(doc4, structure, xmlNS, blockArraysIn);
  }
  /**
  Build a serializer using the [`toDOM`](https://prosemirror.net/docs/ref/#model.NodeSpec.toDOM)
  properties in a schema's node and mark specs.
  */
  static fromSchema(schema2) {
    return schema2.cached.domSerializer || (schema2.cached.domSerializer = new _DOMSerializer(this.nodesFromSchema(schema2), this.marksFromSchema(schema2)));
  }
  /**
  Gather the serializers in a schema's node specs into an object.
  This can be useful as a base to build a custom serializer from.
  */
  static nodesFromSchema(schema2) {
    let result = gatherToDOM(schema2.nodes);
    if (!result.text) result.text = (node) => node.text;
    return result;
  }
  /**
  Gather the serializers in a schema's mark specs into an object.
  */
  static marksFromSchema(schema2) {
    return gatherToDOM(schema2.marks);
  }
};
function gatherToDOM(obj) {
  let result = {};
  for (let name in obj) {
    let toDOM = obj[name].spec.toDOM;
    if (toDOM) result[name] = toDOM;
  }
  return result;
}
function doc(options) {
  return options.document || window.document;
}
var suspiciousAttributeCache = /* @__PURE__ */ new WeakMap();
function suspiciousAttributes(attrs) {
  let value = suspiciousAttributeCache.get(attrs);
  if (value === void 0) suspiciousAttributeCache.set(attrs, value = suspiciousAttributesInner(attrs));
  return value;
}
function suspiciousAttributesInner(attrs) {
  let result = null;
  function scan(value) {
    if (value && typeof value == "object") {
      if (Array.isArray(value)) {
        if (typeof value[0] == "string") {
          if (!result) result = [];
          result.push(value);
        } else {
          for (let i = 0; i < value.length; i++) scan(value[i]);
        }
      } else {
        for (let prop in value) scan(value[prop]);
      }
    }
  }
  scan(attrs);
  return result;
}
function renderSpec(doc4, structure, xmlNS, blockArraysIn) {
  if (typeof structure == "string") return {
    dom: doc4.createTextNode(structure)
  };
  if (structure.nodeType != null) return {
    dom: structure
  };
  if (structure.dom && structure.dom.nodeType != null) return structure;
  let tagName = structure[0], suspicious;
  if (typeof tagName != "string") throw new RangeError("Invalid array passed to renderSpec");
  if (blockArraysIn && (suspicious = suspiciousAttributes(blockArraysIn)) && suspicious.indexOf(structure) > -1) throw new RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");
  let space = tagName.indexOf(" ");
  if (space > 0) {
    xmlNS = tagName.slice(0, space);
    tagName = tagName.slice(space + 1);
  }
  let contentDOM;
  let dom = xmlNS ? doc4.createElementNS(xmlNS, tagName) : doc4.createElement(tagName);
  let attrs = structure[1], start = 1;
  if (attrs && typeof attrs == "object" && attrs.nodeType == null && !Array.isArray(attrs)) {
    start = 2;
    for (let name in attrs) if (attrs[name] != null) {
      let space2 = name.indexOf(" ");
      if (space2 > 0) dom.setAttributeNS(name.slice(0, space2), name.slice(space2 + 1), attrs[name]);
      else if (name == "style" && dom.style) dom.style.cssText = attrs[name];
      else dom.setAttribute(name, attrs[name]);
    }
  }
  for (let i = start; i < structure.length; i++) {
    let child = structure[i];
    if (child === 0) {
      if (i < structure.length - 1 || i > start) throw new RangeError("Content hole must be the only child of its parent node");
      return {
        dom,
        contentDOM: dom
      };
    } else {
      let {
        dom: inner,
        contentDOM: innerContent
      } = renderSpec(doc4, child, xmlNS, blockArraysIn);
      dom.appendChild(inner);
      if (innerContent) {
        if (contentDOM) throw new RangeError("Multiple content holes");
        contentDOM = innerContent;
      }
    }
  }
  return {
    dom,
    contentDOM
  };
}

// node_modules/prosemirror-transform/dist/index.js
var lower16 = 65535;
var factor16 = Math.pow(2, 16);
function makeRecover(index, offset3) {
  return index + offset3 * factor16;
}
function recoverIndex(value) {
  return value & lower16;
}
function recoverOffset(value) {
  return (value - (value & lower16)) / factor16;
}
var DEL_BEFORE = 1;
var DEL_AFTER = 2;
var DEL_ACROSS = 4;
var DEL_SIDE = 8;
var MapResult = class {
  /**
  @internal
  */
  constructor(pos, delInfo, recover) {
    this.pos = pos;
    this.delInfo = delInfo;
    this.recover = recover;
  }
  /**
  Tells you whether the position was deleted, that is, whether the
  step removed the token on the side queried (via the `assoc`)
  argument from the document.
  */
  get deleted() {
    return (this.delInfo & DEL_SIDE) > 0;
  }
  /**
  Tells you whether the token before the mapped position was deleted.
  */
  get deletedBefore() {
    return (this.delInfo & (DEL_BEFORE | DEL_ACROSS)) > 0;
  }
  /**
  True when the token after the mapped position was deleted.
  */
  get deletedAfter() {
    return (this.delInfo & (DEL_AFTER | DEL_ACROSS)) > 0;
  }
  /**
  Tells whether any of the steps mapped through deletes across the
  position (including both the token before and after the
  position).
  */
  get deletedAcross() {
    return (this.delInfo & DEL_ACROSS) > 0;
  }
};
var StepMap = class _StepMap {
  /**
  Create a position map. The modifications to the document are
  represented as an array of numbers, in which each group of three
  represents a modified chunk as `[start, oldSize, newSize]`.
  */
  constructor(ranges, inverted = false) {
    this.ranges = ranges;
    this.inverted = inverted;
    if (!ranges.length && _StepMap.empty) return _StepMap.empty;
  }
  /**
  @internal
  */
  recover(value) {
    let diff = 0, index = recoverIndex(value);
    if (!this.inverted) for (let i = 0; i < index; i++) diff += this.ranges[i * 3 + 2] - this.ranges[i * 3 + 1];
    return this.ranges[index * 3] + diff + recoverOffset(value);
  }
  mapResult(pos, assoc = 1) {
    return this._map(pos, assoc, false);
  }
  map(pos, assoc = 1) {
    return this._map(pos, assoc, true);
  }
  /**
  @internal
  */
  _map(pos, assoc, simple) {
    let diff = 0, oldIndex = this.inverted ? 2 : 1, newIndex = this.inverted ? 1 : 2;
    for (let i = 0; i < this.ranges.length; i += 3) {
      let start = this.ranges[i] - (this.inverted ? diff : 0);
      if (start > pos) break;
      let oldSize = this.ranges[i + oldIndex], newSize = this.ranges[i + newIndex], end = start + oldSize;
      if (pos <= end) {
        let side = !oldSize ? assoc : pos == start ? -1 : pos == end ? 1 : assoc;
        let result = start + diff + (side < 0 ? 0 : newSize);
        if (simple) return result;
        let recover = pos == (assoc < 0 ? start : end) ? null : makeRecover(i / 3, pos - start);
        let del2 = pos == start ? DEL_AFTER : pos == end ? DEL_BEFORE : DEL_ACROSS;
        if (assoc < 0 ? pos != start : pos != end) del2 |= DEL_SIDE;
        return new MapResult(result, del2, recover);
      }
      diff += newSize - oldSize;
    }
    return simple ? pos + diff : new MapResult(pos + diff, 0, null);
  }
  /**
  @internal
  */
  touches(pos, recover) {
    let diff = 0, index = recoverIndex(recover);
    let oldIndex = this.inverted ? 2 : 1, newIndex = this.inverted ? 1 : 2;
    for (let i = 0; i < this.ranges.length; i += 3) {
      let start = this.ranges[i] - (this.inverted ? diff : 0);
      if (start > pos) break;
      let oldSize = this.ranges[i + oldIndex], end = start + oldSize;
      if (pos <= end && i == index * 3) return true;
      diff += this.ranges[i + newIndex] - oldSize;
    }
    return false;
  }
  /**
  Calls the given function on each of the changed ranges included in
  this map.
  */
  forEach(f) {
    let oldIndex = this.inverted ? 2 : 1, newIndex = this.inverted ? 1 : 2;
    for (let i = 0, diff = 0; i < this.ranges.length; i += 3) {
      let start = this.ranges[i], oldStart = start - (this.inverted ? diff : 0), newStart = start + (this.inverted ? 0 : diff);
      let oldSize = this.ranges[i + oldIndex], newSize = this.ranges[i + newIndex];
      f(oldStart, oldStart + oldSize, newStart, newStart + newSize);
      diff += newSize - oldSize;
    }
  }
  /**
  Create an inverted version of this map. The result can be used to
  map positions in the post-step document to the pre-step document.
  */
  invert() {
    return new _StepMap(this.ranges, !this.inverted);
  }
  /**
  @internal
  */
  toString() {
    return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
  }
  /**
  Create a map that moves all positions by offset `n` (which may be
  negative). This can be useful when applying steps meant for a
  sub-document to a larger document, or vice-versa.
  */
  static offset(n) {
    return n == 0 ? _StepMap.empty : new _StepMap(n < 0 ? [0, -n, 0] : [0, 0, n]);
  }
};
StepMap.empty = new StepMap([]);
var Mapping = class _Mapping {
  /**
  Create a new mapping with the given position maps.
  */
  constructor(maps, mirror, from2 = 0, to = maps ? maps.length : 0) {
    this.mirror = mirror;
    this.from = from2;
    this.to = to;
    this._maps = maps || [];
    this.ownData = !(maps || mirror);
  }
  /**
  The step maps in this mapping.
  */
  get maps() {
    return this._maps;
  }
  /**
  Create a mapping that maps only through a part of this one.
  */
  slice(from2 = 0, to = this.maps.length) {
    return new _Mapping(this._maps, this.mirror, from2, to);
  }
  /**
  Add a step map to the end of this mapping. If `mirrors` is
  given, it should be the index of the step map that is the mirror
  image of this one.
  */
  appendMap(map3, mirrors) {
    if (!this.ownData) {
      this._maps = this._maps.slice();
      this.mirror = this.mirror && this.mirror.slice();
      this.ownData = true;
    }
    this.to = this._maps.push(map3);
    if (mirrors != null) this.setMirror(this._maps.length - 1, mirrors);
  }
  /**
  Add all the step maps in a given mapping to this one (preserving
  mirroring information).
  */
  appendMapping(mapping) {
    for (let i = 0, startSize = this._maps.length; i < mapping._maps.length; i++) {
      let mirr = mapping.getMirror(i);
      this.appendMap(mapping._maps[i], mirr != null && mirr < i ? startSize + mirr : void 0);
    }
  }
  /**
  Finds the offset of the step map that mirrors the map at the
  given offset, in this mapping (as per the second argument to
  `appendMap`).
  */
  getMirror(n) {
    if (this.mirror) {
      for (let i = 0; i < this.mirror.length; i++) if (this.mirror[i] == n) return this.mirror[i + (i % 2 ? -1 : 1)];
    }
  }
  /**
  @internal
  */
  setMirror(n, m) {
    if (!this.mirror) this.mirror = [];
    this.mirror.push(n, m);
  }
  /**
  Append the inverse of the given mapping to this one.
  */
  appendMappingInverted(mapping) {
    for (let i = mapping.maps.length - 1, totalSize = this._maps.length + mapping._maps.length; i >= 0; i--) {
      let mirr = mapping.getMirror(i);
      this.appendMap(mapping._maps[i].invert(), mirr != null && mirr > i ? totalSize - mirr - 1 : void 0);
    }
  }
  /**
  Create an inverted version of this mapping.
  */
  invert() {
    let inverse = new _Mapping();
    inverse.appendMappingInverted(this);
    return inverse;
  }
  /**
  Map a position through this mapping.
  */
  map(pos, assoc = 1) {
    if (this.mirror) return this._map(pos, assoc, true);
    for (let i = this.from; i < this.to; i++) pos = this._maps[i].map(pos, assoc);
    return pos;
  }
  /**
  Map a position through this mapping, returning a mapping
  result.
  */
  mapResult(pos, assoc = 1) {
    return this._map(pos, assoc, false);
  }
  /**
  @internal
  */
  _map(pos, assoc, simple) {
    let delInfo = 0;
    for (let i = this.from; i < this.to; i++) {
      let map3 = this._maps[i], result = map3.mapResult(pos, assoc);
      if (result.recover != null) {
        let corr = this.getMirror(i);
        if (corr != null && corr > i && corr < this.to) {
          i = corr;
          pos = this._maps[corr].recover(result.recover);
          continue;
        }
      }
      delInfo |= result.delInfo;
      pos = result.pos;
    }
    return simple ? pos : new MapResult(pos, delInfo, null);
  }
};
var stepsByID = /* @__PURE__ */ Object.create(null);
var Step = class {
  /**
  Get the step map that represents the changes made by this step,
  and which can be used to transform between positions in the old
  and the new document.
  */
  getMap() {
    return StepMap.empty;
  }
  /**
  Try to merge this step with another one, to be applied directly
  after it. Returns the merged step when possible, null if the
  steps can't be merged.
  */
  merge(other) {
    return null;
  }
  /**
  Deserialize a step from its JSON representation. Will call
  through to the step class' own implementation of this method.
  */
  static fromJSON(schema2, json) {
    if (!json || !json.stepType) throw new RangeError("Invalid input for Step.fromJSON");
    let type = stepsByID[json.stepType];
    if (!type) throw new RangeError(`No step type ${json.stepType} defined`);
    return type.fromJSON(schema2, json);
  }
  /**
  To be able to serialize steps to JSON, each step needs a string
  ID to attach to its JSON representation. Use this method to
  register an ID for your step classes. Try to pick something
  that's unlikely to clash with steps from other modules.
  */
  static jsonID(id, stepClass) {
    if (id in stepsByID) throw new RangeError("Duplicate use of step JSON ID " + id);
    stepsByID[id] = stepClass;
    stepClass.prototype.jsonID = id;
    return stepClass;
  }
};
var StepResult = class _StepResult {
  /**
  @internal
  */
  constructor(doc4, failed) {
    this.doc = doc4;
    this.failed = failed;
  }
  /**
  Create a successful step result.
  */
  static ok(doc4) {
    return new _StepResult(doc4, null);
  }
  /**
  Create a failed step result.
  */
  static fail(message) {
    return new _StepResult(null, message);
  }
  /**
  Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
  arguments. Create a successful result if it succeeds, and a
  failed one if it throws a `ReplaceError`.
  */
  static fromReplace(doc4, from2, to, slice2) {
    try {
      return _StepResult.ok(doc4.replace(from2, to, slice2));
    } catch (e) {
      if (e instanceof ReplaceError) return _StepResult.fail(e.message);
      throw e;
    }
  }
};
function mapFragment(fragment, f, parent) {
  let mapped = [];
  for (let i = 0; i < fragment.childCount; i++) {
    let child = fragment.child(i);
    if (child.content.size) child = child.copy(mapFragment(child.content, f, child));
    if (child.isInline) child = f(child, parent, i);
    mapped.push(child);
  }
  return Fragment.fromArray(mapped);
}
var AddMarkStep = class _AddMarkStep extends Step {
  /**
  Create a mark step.
  */
  constructor(from2, to, mark) {
    super();
    this.from = from2;
    this.to = to;
    this.mark = mark;
  }
  apply(doc4) {
    let oldSlice = doc4.slice(this.from, this.to), $from = doc4.resolve(this.from);
    let parent = $from.node($from.sharedDepth(this.to));
    let slice2 = new Slice(mapFragment(oldSlice.content, (node, parent2) => {
      if (!node.isAtom || !parent2.type.allowsMarkType(this.mark.type)) return node;
      return node.mark(this.mark.addToSet(node.marks));
    }, parent), oldSlice.openStart, oldSlice.openEnd);
    return StepResult.fromReplace(doc4, this.from, this.to, slice2);
  }
  invert() {
    return new RemoveMarkStep(this.from, this.to, this.mark);
  }
  map(mapping) {
    let from2 = mapping.mapResult(this.from, 1), to = mapping.mapResult(this.to, -1);
    if (from2.deleted && to.deleted || from2.pos >= to.pos) return null;
    return new _AddMarkStep(from2.pos, to.pos, this.mark);
  }
  merge(other) {
    if (other instanceof _AddMarkStep && other.mark.eq(this.mark) && this.from <= other.to && this.to >= other.from) return new _AddMarkStep(Math.min(this.from, other.from), Math.max(this.to, other.to), this.mark);
    return null;
  }
  toJSON() {
    return {
      stepType: "addMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(schema2, json) {
    if (typeof json.from != "number" || typeof json.to != "number") throw new RangeError("Invalid input for AddMarkStep.fromJSON");
    return new _AddMarkStep(json.from, json.to, schema2.markFromJSON(json.mark));
  }
};
Step.jsonID("addMark", AddMarkStep);
var RemoveMarkStep = class _RemoveMarkStep extends Step {
  /**
  Create a mark-removing step.
  */
  constructor(from2, to, mark) {
    super();
    this.from = from2;
    this.to = to;
    this.mark = mark;
  }
  apply(doc4) {
    let oldSlice = doc4.slice(this.from, this.to);
    let slice2 = new Slice(mapFragment(oldSlice.content, (node) => {
      return node.mark(this.mark.removeFromSet(node.marks));
    }, doc4), oldSlice.openStart, oldSlice.openEnd);
    return StepResult.fromReplace(doc4, this.from, this.to, slice2);
  }
  invert() {
    return new AddMarkStep(this.from, this.to, this.mark);
  }
  map(mapping) {
    let from2 = mapping.mapResult(this.from, 1), to = mapping.mapResult(this.to, -1);
    if (from2.deleted && to.deleted || from2.pos >= to.pos) return null;
    return new _RemoveMarkStep(from2.pos, to.pos, this.mark);
  }
  merge(other) {
    if (other instanceof _RemoveMarkStep && other.mark.eq(this.mark) && this.from <= other.to && this.to >= other.from) return new _RemoveMarkStep(Math.min(this.from, other.from), Math.max(this.to, other.to), this.mark);
    return null;
  }
  toJSON() {
    return {
      stepType: "removeMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(schema2, json) {
    if (typeof json.from != "number" || typeof json.to != "number") throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
    return new _RemoveMarkStep(json.from, json.to, schema2.markFromJSON(json.mark));
  }
};
Step.jsonID("removeMark", RemoveMarkStep);
var AddNodeMarkStep = class _AddNodeMarkStep extends Step {
  /**
  Create a node mark step.
  */
  constructor(pos, mark) {
    super();
    this.pos = pos;
    this.mark = mark;
  }
  apply(doc4) {
    let node = doc4.nodeAt(this.pos);
    if (!node) return StepResult.fail("No node at mark step's position");
    let updated = node.type.create(node.attrs, null, this.mark.addToSet(node.marks));
    return StepResult.fromReplace(doc4, this.pos, this.pos + 1, new Slice(Fragment.from(updated), 0, node.isLeaf ? 0 : 1));
  }
  invert(doc4) {
    let node = doc4.nodeAt(this.pos);
    if (node) {
      let newSet = this.mark.addToSet(node.marks);
      if (newSet.length == node.marks.length) {
        for (let i = 0; i < node.marks.length; i++) if (!node.marks[i].isInSet(newSet)) return new _AddNodeMarkStep(this.pos, node.marks[i]);
        return new _AddNodeMarkStep(this.pos, this.mark);
      }
    }
    return new RemoveNodeMarkStep(this.pos, this.mark);
  }
  map(mapping) {
    let pos = mapping.mapResult(this.pos, 1);
    return pos.deletedAfter ? null : new _AddNodeMarkStep(pos.pos, this.mark);
  }
  toJSON() {
    return {
      stepType: "addNodeMark",
      pos: this.pos,
      mark: this.mark.toJSON()
    };
  }
  /**
  @internal
  */
  static fromJSON(schema2, json) {
    if (typeof json.pos != "number") throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
    return new _AddNodeMarkStep(json.pos, schema2.markFromJSON(json.mark));
  }
};
Step.jsonID("addNodeMark", AddNodeMarkStep);
var RemoveNodeMarkStep = class _RemoveNodeMarkStep extends Step {
  /**
  Create a mark-removing step.
  */
  constructor(pos, mark) {
    super();
    this.pos = pos;
    this.mark = mark;
  }
  apply(doc4) {
    let node = doc4.nodeAt(this.pos);
    if (!node) return StepResult.fail("No node at mark step's position");
    let updated = node.type.create(node.attrs, null, this.mark.removeFromSet(node.marks));
    return StepResult.fromReplace(doc4, this.pos, this.pos + 1, new Slice(Fragment.from(updated), 0, node.isLeaf ? 0 : 1));
  }
  invert(doc4) {
    let node = doc4.nodeAt(this.pos);
    if (!node || !this.mark.isInSet(node.marks)) return this;
    return new AddNodeMarkStep(this.pos, this.mark);
  }
  map(mapping) {
    let pos = mapping.mapResult(this.pos, 1);
    return pos.deletedAfter ? null : new _RemoveNodeMarkStep(pos.pos, this.mark);
  }
  toJSON() {
    return {
      stepType: "removeNodeMark",
      pos: this.pos,
      mark: this.mark.toJSON()
    };
  }
  /**
  @internal
  */
  static fromJSON(schema2, json) {
    if (typeof json.pos != "number") throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
    return new _RemoveNodeMarkStep(json.pos, schema2.markFromJSON(json.mark));
  }
};
Step.jsonID("removeNodeMark", RemoveNodeMarkStep);
var ReplaceStep = class _ReplaceStep extends Step {
  /**
  The given `slice` should fit the 'gap' between `from` and
  `to`—the depths must line up, and the surrounding nodes must be
  able to be joined with the open sides of the slice. When
  `structure` is true, the step will fail if the content between
  from and to is not just a sequence of closing and then opening
  tokens (this is to guard against rebased replace steps
  overwriting something they weren't supposed to).
  */
  constructor(from2, to, slice2, structure = false) {
    super();
    this.from = from2;
    this.to = to;
    this.slice = slice2;
    this.structure = structure;
  }
  apply(doc4) {
    if (this.structure && contentBetween(doc4, this.from, this.to)) return StepResult.fail("Structure replace would overwrite content");
    return StepResult.fromReplace(doc4, this.from, this.to, this.slice);
  }
  getMap() {
    return new StepMap([this.from, this.to - this.from, this.slice.size]);
  }
  invert(doc4) {
    return new _ReplaceStep(this.from, this.from + this.slice.size, doc4.slice(this.from, this.to));
  }
  map(mapping) {
    let from2 = mapping.mapResult(this.from, 1), to = mapping.mapResult(this.to, -1);
    if (from2.deletedAcross && to.deletedAcross) return null;
    return new _ReplaceStep(from2.pos, Math.max(from2.pos, to.pos), this.slice, this.structure);
  }
  merge(other) {
    if (!(other instanceof _ReplaceStep) || other.structure || this.structure) return null;
    if (this.from + this.slice.size == other.from && !this.slice.openEnd && !other.slice.openStart) {
      let slice2 = this.slice.size + other.slice.size == 0 ? Slice.empty : new Slice(this.slice.content.append(other.slice.content), this.slice.openStart, other.slice.openEnd);
      return new _ReplaceStep(this.from, this.to + (other.to - other.from), slice2, this.structure);
    } else if (other.to == this.from && !this.slice.openStart && !other.slice.openEnd) {
      let slice2 = this.slice.size + other.slice.size == 0 ? Slice.empty : new Slice(other.slice.content.append(this.slice.content), other.slice.openStart, this.slice.openEnd);
      return new _ReplaceStep(other.from, this.to, slice2, this.structure);
    } else {
      return null;
    }
  }
  toJSON() {
    let json = {
      stepType: "replace",
      from: this.from,
      to: this.to
    };
    if (this.slice.size) json.slice = this.slice.toJSON();
    if (this.structure) json.structure = true;
    return json;
  }
  /**
  @internal
  */
  static fromJSON(schema2, json) {
    if (typeof json.from != "number" || typeof json.to != "number") throw new RangeError("Invalid input for ReplaceStep.fromJSON");
    return new _ReplaceStep(json.from, json.to, Slice.fromJSON(schema2, json.slice), !!json.structure);
  }
};
Step.jsonID("replace", ReplaceStep);
var ReplaceAroundStep = class _ReplaceAroundStep extends Step {
  /**
  Create a replace-around step with the given range and gap.
  `insert` should be the point in the slice into which the content
  of the gap should be moved. `structure` has the same meaning as
  it has in the [`ReplaceStep`](https://prosemirror.net/docs/ref/#transform.ReplaceStep) class.
  */
  constructor(from2, to, gapFrom, gapTo, slice2, insert, structure = false) {
    super();
    this.from = from2;
    this.to = to;
    this.gapFrom = gapFrom;
    this.gapTo = gapTo;
    this.slice = slice2;
    this.insert = insert;
    this.structure = structure;
  }
  apply(doc4) {
    if (this.structure && (contentBetween(doc4, this.from, this.gapFrom) || contentBetween(doc4, this.gapTo, this.to))) return StepResult.fail("Structure gap-replace would overwrite content");
    let gap = doc4.slice(this.gapFrom, this.gapTo);
    if (gap.openStart || gap.openEnd) return StepResult.fail("Gap is not a flat range");
    let inserted = this.slice.insertAt(this.insert, gap.content);
    if (!inserted) return StepResult.fail("Content does not fit in gap");
    return StepResult.fromReplace(doc4, this.from, this.to, inserted);
  }
  getMap() {
    return new StepMap([this.from, this.gapFrom - this.from, this.insert, this.gapTo, this.to - this.gapTo, this.slice.size - this.insert]);
  }
  invert(doc4) {
    let gap = this.gapTo - this.gapFrom;
    return new _ReplaceAroundStep(this.from, this.from + this.slice.size + gap, this.from + this.insert, this.from + this.insert + gap, doc4.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  }
  map(mapping) {
    let from2 = mapping.mapResult(this.from, 1), to = mapping.mapResult(this.to, -1);
    let gapFrom = this.from == this.gapFrom ? from2.pos : mapping.map(this.gapFrom, -1);
    let gapTo = this.to == this.gapTo ? to.pos : mapping.map(this.gapTo, 1);
    if (from2.deletedAcross && to.deletedAcross || gapFrom < from2.pos || gapTo > to.pos) return null;
    return new _ReplaceAroundStep(from2.pos, to.pos, gapFrom, gapTo, this.slice, this.insert, this.structure);
  }
  toJSON() {
    let json = {
      stepType: "replaceAround",
      from: this.from,
      to: this.to,
      gapFrom: this.gapFrom,
      gapTo: this.gapTo,
      insert: this.insert
    };
    if (this.slice.size) json.slice = this.slice.toJSON();
    if (this.structure) json.structure = true;
    return json;
  }
  /**
  @internal
  */
  static fromJSON(schema2, json) {
    if (typeof json.from != "number" || typeof json.to != "number" || typeof json.gapFrom != "number" || typeof json.gapTo != "number" || typeof json.insert != "number") throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
    return new _ReplaceAroundStep(json.from, json.to, json.gapFrom, json.gapTo, Slice.fromJSON(schema2, json.slice), json.insert, !!json.structure);
  }
};
Step.jsonID("replaceAround", ReplaceAroundStep);
function contentBetween(doc4, from2, to) {
  let $from = doc4.resolve(from2), dist = to - from2, depth = $from.depth;
  while (dist > 0 && depth > 0 && $from.indexAfter(depth) == $from.node(depth).childCount) {
    depth--;
    dist--;
  }
  if (dist > 0) {
    let next = $from.node(depth).maybeChild($from.indexAfter(depth));
    while (dist > 0) {
      if (!next || next.isLeaf) return true;
      next = next.firstChild;
      dist--;
    }
  }
  return false;
}
function addMark(tr, from2, to, mark) {
  let removed = [], added = [];
  let removing, adding;
  tr.doc.nodesBetween(from2, to, (node, pos, parent) => {
    if (!node.isInline) return;
    let marks2 = node.marks;
    if (!mark.isInSet(marks2) && parent.type.allowsMarkType(mark.type)) {
      let start = Math.max(pos, from2), end = Math.min(pos + node.nodeSize, to);
      let newSet = mark.addToSet(marks2);
      for (let i = 0; i < marks2.length; i++) {
        if (!marks2[i].isInSet(newSet)) {
          if (removing && removing.to == start && removing.mark.eq(marks2[i])) removing.to = end;
          else removed.push(removing = new RemoveMarkStep(start, end, marks2[i]));
        }
      }
      if (adding && adding.to == start) adding.to = end;
      else added.push(adding = new AddMarkStep(start, end, mark));
    }
  });
  removed.forEach((s2) => tr.step(s2));
  added.forEach((s2) => tr.step(s2));
}
function removeMark(tr, from2, to, mark) {
  let matched = [], step = 0;
  tr.doc.nodesBetween(from2, to, (node, pos) => {
    if (!node.isInline) return;
    step++;
    let toRemove = null;
    if (mark instanceof MarkType) {
      let set = node.marks, found2;
      while (found2 = mark.isInSet(set)) {
        (toRemove || (toRemove = [])).push(found2);
        set = found2.removeFromSet(set);
      }
    } else if (mark) {
      if (mark.isInSet(node.marks)) toRemove = [mark];
    } else {
      toRemove = node.marks;
    }
    if (toRemove && toRemove.length) {
      let end = Math.min(pos + node.nodeSize, to);
      for (let i = 0; i < toRemove.length; i++) {
        let style2 = toRemove[i], found2;
        for (let j = 0; j < matched.length; j++) {
          let m = matched[j];
          if (m.step == step - 1 && style2.eq(matched[j].style)) found2 = m;
        }
        if (found2) {
          found2.to = end;
          found2.step = step;
        } else {
          matched.push({
            style: style2,
            from: Math.max(pos, from2),
            to: end,
            step
          });
        }
      }
    }
  });
  matched.forEach((m) => tr.step(new RemoveMarkStep(m.from, m.to, m.style)));
}
function clearIncompatible(tr, pos, parentType, match = parentType.contentMatch, clearNewlines = true) {
  let node = tr.doc.nodeAt(pos);
  let replSteps = [], cur = pos + 1;
  for (let i = 0; i < node.childCount; i++) {
    let child = node.child(i), end = cur + child.nodeSize;
    let allowed = match.matchType(child.type);
    if (!allowed) {
      replSteps.push(new ReplaceStep(cur, end, Slice.empty));
    } else {
      match = allowed;
      for (let j = 0; j < child.marks.length; j++) if (!parentType.allowsMarkType(child.marks[j].type)) tr.step(new RemoveMarkStep(cur, end, child.marks[j]));
      if (clearNewlines && child.isText && parentType.whitespace != "pre") {
        let m, newline = /\r?\n|\r/g, slice2;
        while (m = newline.exec(child.text)) {
          if (!slice2) slice2 = new Slice(Fragment.from(parentType.schema.text(" ", parentType.allowedMarks(child.marks))), 0, 0);
          replSteps.push(new ReplaceStep(cur + m.index, cur + m.index + m[0].length, slice2));
        }
      }
    }
    cur = end;
  }
  if (!match.validEnd) {
    let fill = match.fillBefore(Fragment.empty, true);
    tr.replace(cur, cur, new Slice(fill, 0, 0));
  }
  for (let i = replSteps.length - 1; i >= 0; i--) tr.step(replSteps[i]);
}
function canCut(node, start, end) {
  return (start == 0 || node.canReplace(start, node.childCount)) && (end == node.childCount || node.canReplace(0, end));
}
function liftTarget(range) {
  let parent = range.parent;
  let content = parent.content.cutByIndex(range.startIndex, range.endIndex);
  for (let depth = range.depth, contentBefore = 0, contentAfter = 0; ; --depth) {
    let node = range.$from.node(depth);
    let index = range.$from.index(depth) + contentBefore, endIndex = range.$to.indexAfter(depth) - contentAfter;
    if (depth < range.depth && node.canReplace(index, endIndex, content)) return depth;
    if (depth == 0 || node.type.spec.isolating || !canCut(node, index, endIndex)) break;
    if (index) contentBefore = 1;
    if (endIndex < node.childCount) contentAfter = 1;
  }
  return null;
}
function lift(tr, range, target) {
  let {
    $from,
    $to,
    depth
  } = range;
  let gapStart = $from.before(depth + 1), gapEnd = $to.after(depth + 1);
  let start = gapStart, end = gapEnd;
  let before = Fragment.empty, openStart = 0;
  for (let d = depth, splitting = false; d > target; d--) if (splitting || $from.index(d) > 0) {
    splitting = true;
    before = Fragment.from($from.node(d).copy(before));
    openStart++;
  } else {
    start--;
  }
  let after = Fragment.empty, openEnd = 0;
  for (let d = depth, splitting = false; d > target; d--) if (splitting || $to.after(d + 1) < $to.end(d)) {
    splitting = true;
    after = Fragment.from($to.node(d).copy(after));
    openEnd++;
  } else {
    end++;
  }
  tr.step(new ReplaceAroundStep(start, end, gapStart, gapEnd, new Slice(before.append(after), openStart, openEnd), before.size - openStart, true));
}
function findWrapping(range, nodeType, attrs = null, innerRange = range) {
  let around = findWrappingOutside(range, nodeType);
  let inner = around && findWrappingInside(innerRange, nodeType);
  if (!inner) return null;
  return around.map(withAttrs).concat({
    type: nodeType,
    attrs
  }).concat(inner.map(withAttrs));
}
function withAttrs(type) {
  return {
    type,
    attrs: null
  };
}
function findWrappingOutside(range, type) {
  let {
    parent,
    startIndex,
    endIndex
  } = range;
  let around = parent.contentMatchAt(startIndex).findWrapping(type);
  if (!around) return null;
  let outer = around.length ? around[0] : type;
  return parent.canReplaceWith(startIndex, endIndex, outer) ? around : null;
}
function findWrappingInside(range, type) {
  let {
    parent,
    startIndex,
    endIndex
  } = range;
  let inner = parent.child(startIndex);
  let inside = type.contentMatch.findWrapping(inner.type);
  if (!inside) return null;
  let lastType = inside.length ? inside[inside.length - 1] : type;
  let innerMatch = lastType.contentMatch;
  for (let i = startIndex; innerMatch && i < endIndex; i++) innerMatch = innerMatch.matchType(parent.child(i).type);
  if (!innerMatch || !innerMatch.validEnd) return null;
  return inside;
}
function wrap(tr, range, wrappers) {
  let content = Fragment.empty;
  for (let i = wrappers.length - 1; i >= 0; i--) {
    if (content.size) {
      let match = wrappers[i].type.contentMatch.matchFragment(content);
      if (!match || !match.validEnd) throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
    }
    content = Fragment.from(wrappers[i].type.create(wrappers[i].attrs, content));
  }
  let start = range.start, end = range.end;
  tr.step(new ReplaceAroundStep(start, end, start, end, new Slice(content, 0, 0), wrappers.length, true));
}
function setBlockType(tr, from2, to, type, attrs) {
  if (!type.isTextblock) throw new RangeError("Type given to setBlockType should be a textblock");
  let mapFrom = tr.steps.length;
  tr.doc.nodesBetween(from2, to, (node, pos) => {
    let attrsHere = typeof attrs == "function" ? attrs(node) : attrs;
    if (node.isTextblock && !node.hasMarkup(type, attrsHere) && canChangeType(tr.doc, tr.mapping.slice(mapFrom).map(pos), type)) {
      let convertNewlines = null;
      if (type.schema.linebreakReplacement) {
        let pre = type.whitespace == "pre", supportLinebreak = !!type.contentMatch.matchType(type.schema.linebreakReplacement);
        if (pre && !supportLinebreak) convertNewlines = false;
        else if (!pre && supportLinebreak) convertNewlines = true;
      }
      if (convertNewlines === false) replaceLinebreaks(tr, node, pos, mapFrom);
      clearIncompatible(tr, tr.mapping.slice(mapFrom).map(pos, 1), type, void 0, convertNewlines === null);
      let mapping = tr.mapping.slice(mapFrom);
      let startM = mapping.map(pos, 1), endM = mapping.map(pos + node.nodeSize, 1);
      tr.step(new ReplaceAroundStep(startM, endM, startM + 1, endM - 1, new Slice(Fragment.from(type.create(attrsHere, null, node.marks)), 0, 0), 1, true));
      if (convertNewlines === true) replaceNewlines(tr, node, pos, mapFrom);
      return false;
    }
  });
}
function replaceNewlines(tr, node, pos, mapFrom) {
  node.forEach((child, offset3) => {
    if (child.isText) {
      let m, newline = /\r?\n|\r/g;
      while (m = newline.exec(child.text)) {
        let start = tr.mapping.slice(mapFrom).map(pos + 1 + offset3 + m.index);
        tr.replaceWith(start, start + 1, node.type.schema.linebreakReplacement.create());
      }
    }
  });
}
function replaceLinebreaks(tr, node, pos, mapFrom) {
  node.forEach((child, offset3) => {
    if (child.type == child.type.schema.linebreakReplacement) {
      let start = tr.mapping.slice(mapFrom).map(pos + 1 + offset3);
      tr.replaceWith(start, start + 1, node.type.schema.text("\n"));
    }
  });
}
function canChangeType(doc4, pos, type) {
  let $pos = doc4.resolve(pos), index = $pos.index();
  return $pos.parent.canReplaceWith(index, index + 1, type);
}
function setNodeMarkup(tr, pos, type, attrs, marks2) {
  let node = tr.doc.nodeAt(pos);
  if (!node) throw new RangeError("No node at given position");
  if (!type) type = node.type;
  let newNode = type.create(attrs, null, marks2 || node.marks);
  if (node.isLeaf) return tr.replaceWith(pos, pos + node.nodeSize, newNode);
  if (!type.validContent(node.content)) throw new RangeError("Invalid content for node type " + type.name);
  tr.step(new ReplaceAroundStep(pos, pos + node.nodeSize, pos + 1, pos + node.nodeSize - 1, new Slice(Fragment.from(newNode), 0, 0), 1, true));
}
function canSplit(doc4, pos, depth = 1, typesAfter) {
  let $pos = doc4.resolve(pos), base2 = $pos.depth - depth;
  let innerType = typesAfter && typesAfter[typesAfter.length - 1] || $pos.parent;
  if (base2 < 0 || $pos.parent.type.spec.isolating || !$pos.parent.canReplace($pos.index(), $pos.parent.childCount) || !innerType.type.validContent($pos.parent.content.cutByIndex($pos.index(), $pos.parent.childCount))) return false;
  for (let d = $pos.depth - 1, i = depth - 2; d > base2; d--, i--) {
    let node = $pos.node(d), index2 = $pos.index(d);
    if (node.type.spec.isolating) return false;
    let rest = node.content.cutByIndex(index2, node.childCount);
    let overrideChild = typesAfter && typesAfter[i + 1];
    if (overrideChild) rest = rest.replaceChild(0, overrideChild.type.create(overrideChild.attrs));
    let after = typesAfter && typesAfter[i] || node;
    if (!node.canReplace(index2 + 1, node.childCount) || !after.type.validContent(rest)) return false;
  }
  let index = $pos.indexAfter(base2);
  let baseType = typesAfter && typesAfter[0];
  return $pos.node(base2).canReplaceWith(index, index, baseType ? baseType.type : $pos.node(base2 + 1).type);
}
function split(tr, pos, depth = 1, typesAfter) {
  let $pos = tr.doc.resolve(pos), before = Fragment.empty, after = Fragment.empty;
  for (let d = $pos.depth, e = $pos.depth - depth, i = depth - 1; d > e; d--, i--) {
    before = Fragment.from($pos.node(d).copy(before));
    let typeAfter = typesAfter && typesAfter[i];
    after = Fragment.from(typeAfter ? typeAfter.type.create(typeAfter.attrs, after) : $pos.node(d).copy(after));
  }
  tr.step(new ReplaceStep(pos, pos, new Slice(before.append(after), depth, depth), true));
}
function canJoin(doc4, pos) {
  let $pos = doc4.resolve(pos), index = $pos.index();
  return joinable2($pos.nodeBefore, $pos.nodeAfter) && $pos.parent.canReplace(index, index + 1);
}
function canAppendWithSubstitutedLinebreaks(a, b) {
  if (!b.content.size) a.type.compatibleContent(b.type);
  let match = a.contentMatchAt(a.childCount);
  let {
    linebreakReplacement
  } = a.type.schema;
  for (let i = 0; i < b.childCount; i++) {
    let child = b.child(i);
    let type = child.type == linebreakReplacement ? a.type.schema.nodes.text : child.type;
    match = match.matchType(type);
    if (!match) return false;
    if (!a.type.allowsMarks(child.marks)) return false;
  }
  return match.validEnd;
}
function joinable2(a, b) {
  return !!(a && b && !a.isLeaf && canAppendWithSubstitutedLinebreaks(a, b));
}
function join(tr, pos, depth) {
  let convertNewlines = null;
  let {
    linebreakReplacement
  } = tr.doc.type.schema;
  let $before = tr.doc.resolve(pos - depth), beforeType = $before.node().type;
  if (linebreakReplacement && beforeType.inlineContent) {
    let pre = beforeType.whitespace == "pre";
    let supportLinebreak = !!beforeType.contentMatch.matchType(linebreakReplacement);
    if (pre && !supportLinebreak) convertNewlines = false;
    else if (!pre && supportLinebreak) convertNewlines = true;
  }
  let mapFrom = tr.steps.length;
  if (convertNewlines === false) {
    let $after = tr.doc.resolve(pos + depth);
    replaceLinebreaks(tr, $after.node(), $after.before(), mapFrom);
  }
  if (beforeType.inlineContent) clearIncompatible(tr, pos + depth - 1, beforeType, $before.node().contentMatchAt($before.index()), convertNewlines == null);
  let mapping = tr.mapping.slice(mapFrom), start = mapping.map(pos - depth);
  tr.step(new ReplaceStep(start, mapping.map(pos + depth, -1), Slice.empty, true));
  if (convertNewlines === true) {
    let $full = tr.doc.resolve(start);
    replaceNewlines(tr, $full.node(), $full.before(), tr.steps.length);
  }
  return tr;
}
function insertPoint(doc4, pos, nodeType) {
  let $pos = doc4.resolve(pos);
  if ($pos.parent.canReplaceWith($pos.index(), $pos.index(), nodeType)) return pos;
  if ($pos.parentOffset == 0) for (let d = $pos.depth - 1; d >= 0; d--) {
    let index = $pos.index(d);
    if ($pos.node(d).canReplaceWith(index, index, nodeType)) return $pos.before(d + 1);
    if (index > 0) return null;
  }
  if ($pos.parentOffset == $pos.parent.content.size) for (let d = $pos.depth - 1; d >= 0; d--) {
    let index = $pos.indexAfter(d);
    if ($pos.node(d).canReplaceWith(index, index, nodeType)) return $pos.after(d + 1);
    if (index < $pos.node(d).childCount) return null;
  }
  return null;
}
function dropPoint(doc4, pos, slice2) {
  let $pos = doc4.resolve(pos);
  if (!slice2.content.size) return pos;
  let content = slice2.content;
  for (let i = 0; i < slice2.openStart; i++) content = content.firstChild.content;
  for (let pass = 1; pass <= (slice2.openStart == 0 && slice2.size ? 2 : 1); pass++) {
    for (let d = $pos.depth; d >= 0; d--) {
      let bias = d == $pos.depth ? 0 : $pos.pos <= ($pos.start(d + 1) + $pos.end(d + 1)) / 2 ? -1 : 1;
      let insertPos = $pos.index(d) + (bias > 0 ? 1 : 0);
      let parent = $pos.node(d), fits = false;
      if (pass == 1) {
        fits = parent.canReplace(insertPos, insertPos, content);
      } else {
        let wrapping = parent.contentMatchAt(insertPos).findWrapping(content.firstChild.type);
        fits = wrapping && parent.canReplaceWith(insertPos, insertPos, wrapping[0]);
      }
      if (fits) return bias == 0 ? $pos.pos : bias < 0 ? $pos.before(d + 1) : $pos.after(d + 1);
    }
  }
  return null;
}
function replaceStep(doc4, from2, to = from2, slice2 = Slice.empty) {
  if (from2 == to && !slice2.size) return null;
  let $from = doc4.resolve(from2), $to = doc4.resolve(to);
  if (fitsTrivially($from, $to, slice2)) return new ReplaceStep(from2, to, slice2);
  return new Fitter($from, $to, slice2).fit();
}
function fitsTrivially($from, $to, slice2) {
  return !slice2.openStart && !slice2.openEnd && $from.start() == $to.start() && $from.parent.canReplace($from.index(), $to.index(), slice2.content);
}
var Fitter = class {
  constructor($from, $to, unplaced) {
    this.$from = $from;
    this.$to = $to;
    this.unplaced = unplaced;
    this.frontier = [];
    this.placed = Fragment.empty;
    for (let i = 0; i <= $from.depth; i++) {
      let node = $from.node(i);
      this.frontier.push({
        type: node.type,
        match: node.contentMatchAt($from.indexAfter(i))
      });
    }
    for (let i = $from.depth; i > 0; i--) this.placed = Fragment.from($from.node(i).copy(this.placed));
  }
  get depth() {
    return this.frontier.length - 1;
  }
  fit() {
    while (this.unplaced.size) {
      let fit = this.findFittable();
      if (fit) this.placeNodes(fit);
      else this.openMore() || this.dropNode();
    }
    let moveInline = this.mustMoveInline(), placedSize = this.placed.size - this.depth - this.$from.depth;
    let $from = this.$from, $to = this.close(moveInline < 0 ? this.$to : $from.doc.resolve(moveInline));
    if (!$to) return null;
    let content = this.placed, openStart = $from.depth, openEnd = $to.depth;
    while (openStart && openEnd && content.childCount == 1) {
      content = content.firstChild.content;
      openStart--;
      openEnd--;
    }
    let slice2 = new Slice(content, openStart, openEnd);
    if (moveInline > -1) return new ReplaceAroundStep($from.pos, moveInline, this.$to.pos, this.$to.end(), slice2, placedSize);
    if (slice2.size || $from.pos != this.$to.pos)
      return new ReplaceStep($from.pos, $to.pos, slice2);
    return null;
  }
  // Find a position on the start spine of `this.unplaced` that has
  // content that can be moved somewhere on the frontier. Returns two
  // depths, one for the slice and one for the frontier.
  findFittable() {
    let startDepth = this.unplaced.openStart;
    for (let cur = this.unplaced.content, d = 0, openEnd = this.unplaced.openEnd; d < startDepth; d++) {
      let node = cur.firstChild;
      if (cur.childCount > 1) openEnd = 0;
      if (node.type.spec.isolating && openEnd <= d) {
        startDepth = d;
        break;
      }
      cur = node.content;
    }
    for (let pass = 1; pass <= 2; pass++) {
      for (let sliceDepth = pass == 1 ? startDepth : this.unplaced.openStart; sliceDepth >= 0; sliceDepth--) {
        let fragment, parent = null;
        if (sliceDepth) {
          parent = contentAt(this.unplaced.content, sliceDepth - 1).firstChild;
          fragment = parent.content;
        } else {
          fragment = this.unplaced.content;
        }
        let first = fragment.firstChild;
        for (let frontierDepth = this.depth; frontierDepth >= 0; frontierDepth--) {
          let {
            type,
            match
          } = this.frontier[frontierDepth], wrap2, inject2 = null;
          if (pass == 1 && (first ? match.matchType(first.type) || (inject2 = match.fillBefore(Fragment.from(first), false)) : parent && type.compatibleContent(parent.type))) return {
            sliceDepth,
            frontierDepth,
            parent,
            inject: inject2
          };
          else if (pass == 2 && first && (wrap2 = match.findWrapping(first.type))) return {
            sliceDepth,
            frontierDepth,
            parent,
            wrap: wrap2
          };
          if (parent && match.matchType(parent.type)) break;
        }
      }
    }
  }
  openMore() {
    let {
      content,
      openStart,
      openEnd
    } = this.unplaced;
    let inner = contentAt(content, openStart);
    if (!inner.childCount || inner.firstChild.isLeaf) return false;
    this.unplaced = new Slice(content, openStart + 1, Math.max(openEnd, inner.size + openStart >= content.size - openEnd ? openStart + 1 : 0));
    return true;
  }
  dropNode() {
    let {
      content,
      openStart,
      openEnd
    } = this.unplaced;
    let inner = contentAt(content, openStart);
    if (inner.childCount <= 1 && openStart > 0) {
      let openAtEnd = content.size - openStart <= openStart + inner.size;
      this.unplaced = new Slice(dropFromFragment(content, openStart - 1, 1), openStart - 1, openAtEnd ? openStart - 1 : openEnd);
    } else {
      this.unplaced = new Slice(dropFromFragment(content, openStart, 1), openStart, openEnd);
    }
  }
  // Move content from the unplaced slice at `sliceDepth` to the
  // frontier node at `frontierDepth`. Close that frontier node when
  // applicable.
  placeNodes({
    sliceDepth,
    frontierDepth,
    parent,
    inject: inject2,
    wrap: wrap2
  }) {
    while (this.depth > frontierDepth) this.closeFrontierNode();
    if (wrap2) for (let i = 0; i < wrap2.length; i++) this.openFrontierNode(wrap2[i]);
    let slice2 = this.unplaced, fragment = parent ? parent.content : slice2.content;
    let openStart = slice2.openStart - sliceDepth;
    let taken = 0, add = [];
    let {
      match,
      type
    } = this.frontier[frontierDepth];
    if (inject2) {
      for (let i = 0; i < inject2.childCount; i++) add.push(inject2.child(i));
      match = match.matchFragment(inject2);
    }
    let openEndCount = fragment.size + sliceDepth - (slice2.content.size - slice2.openEnd);
    while (taken < fragment.childCount) {
      let next = fragment.child(taken), matches2 = match.matchType(next.type);
      if (!matches2) break;
      taken++;
      if (taken > 1 || openStart == 0 || next.content.size) {
        match = matches2;
        add.push(closeNodeStart(next.mark(type.allowedMarks(next.marks)), taken == 1 ? openStart : 0, taken == fragment.childCount ? openEndCount : -1));
      }
    }
    let toEnd = taken == fragment.childCount;
    if (!toEnd) openEndCount = -1;
    this.placed = addToFragment(this.placed, frontierDepth, Fragment.from(add));
    this.frontier[frontierDepth].match = match;
    if (toEnd && openEndCount < 0 && parent && parent.type == this.frontier[this.depth].type && this.frontier.length > 1) this.closeFrontierNode();
    for (let i = 0, cur = fragment; i < openEndCount; i++) {
      let node = cur.lastChild;
      this.frontier.push({
        type: node.type,
        match: node.contentMatchAt(node.childCount)
      });
      cur = node.content;
    }
    this.unplaced = !toEnd ? new Slice(dropFromFragment(slice2.content, sliceDepth, taken), slice2.openStart, slice2.openEnd) : sliceDepth == 0 ? Slice.empty : new Slice(dropFromFragment(slice2.content, sliceDepth - 1, 1), sliceDepth - 1, openEndCount < 0 ? slice2.openEnd : sliceDepth - 1);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock) return -1;
    let top = this.frontier[this.depth], level;
    if (!top.type.isTextblock || !contentAfterFits(this.$to, this.$to.depth, top.type, top.match, false) || this.$to.depth == this.depth && (level = this.findCloseLevel(this.$to)) && level.depth == this.depth) return -1;
    let {
      depth
    } = this.$to, after = this.$to.after(depth);
    while (depth > 1 && after == this.$to.end(--depth)) ++after;
    return after;
  }
  findCloseLevel($to) {
    scan: for (let i = Math.min(this.depth, $to.depth); i >= 0; i--) {
      let {
        match,
        type
      } = this.frontier[i];
      let dropInner = i < $to.depth && $to.end(i + 1) == $to.pos + ($to.depth - (i + 1));
      let fit = contentAfterFits($to, i, type, match, dropInner);
      if (!fit) continue;
      for (let d = i - 1; d >= 0; d--) {
        let {
          match: match2,
          type: type2
        } = this.frontier[d];
        let matches2 = contentAfterFits($to, d, type2, match2, true);
        if (!matches2 || matches2.childCount) continue scan;
      }
      return {
        depth: i,
        fit,
        move: dropInner ? $to.doc.resolve($to.after(i + 1)) : $to
      };
    }
  }
  close($to) {
    let close2 = this.findCloseLevel($to);
    if (!close2) return null;
    while (this.depth > close2.depth) this.closeFrontierNode();
    if (close2.fit.childCount) this.placed = addToFragment(this.placed, close2.depth, close2.fit);
    $to = close2.move;
    for (let d = close2.depth + 1; d <= $to.depth; d++) {
      let node = $to.node(d), add = node.type.contentMatch.fillBefore(node.content, true, $to.index(d));
      this.openFrontierNode(node.type, node.attrs, add);
    }
    return $to;
  }
  openFrontierNode(type, attrs = null, content) {
    let top = this.frontier[this.depth];
    top.match = top.match.matchType(type);
    this.placed = addToFragment(this.placed, this.depth, Fragment.from(type.create(attrs, content)));
    this.frontier.push({
      type,
      match: type.contentMatch
    });
  }
  closeFrontierNode() {
    let open = this.frontier.pop();
    let add = open.match.fillBefore(Fragment.empty, true);
    if (add.childCount) this.placed = addToFragment(this.placed, this.frontier.length, add);
  }
};
function dropFromFragment(fragment, depth, count) {
  if (depth == 0) return fragment.cutByIndex(count, fragment.childCount);
  return fragment.replaceChild(0, fragment.firstChild.copy(dropFromFragment(fragment.firstChild.content, depth - 1, count)));
}
function addToFragment(fragment, depth, content) {
  if (depth == 0) return fragment.append(content);
  return fragment.replaceChild(fragment.childCount - 1, fragment.lastChild.copy(addToFragment(fragment.lastChild.content, depth - 1, content)));
}
function contentAt(fragment, depth) {
  for (let i = 0; i < depth; i++) fragment = fragment.firstChild.content;
  return fragment;
}
function closeNodeStart(node, openStart, openEnd) {
  if (openStart <= 0) return node;
  let frag = node.content;
  if (openStart > 1) frag = frag.replaceChild(0, closeNodeStart(frag.firstChild, openStart - 1, frag.childCount == 1 ? openEnd - 1 : 0));
  if (openStart > 0) {
    frag = node.type.contentMatch.fillBefore(frag).append(frag);
    if (openEnd <= 0) frag = frag.append(node.type.contentMatch.matchFragment(frag).fillBefore(Fragment.empty, true));
  }
  return node.copy(frag);
}
function contentAfterFits($to, depth, type, match, open) {
  let node = $to.node(depth), index = open ? $to.indexAfter(depth) : $to.index(depth);
  if (index == node.childCount && !type.compatibleContent(node.type)) return null;
  let fit = match.fillBefore(node.content, true, index);
  return fit && !invalidMarks(type, node.content, index) ? fit : null;
}
function invalidMarks(type, fragment, start) {
  for (let i = start; i < fragment.childCount; i++) if (!type.allowsMarks(fragment.child(i).marks)) return true;
  return false;
}
function definesContent(type) {
  return type.spec.defining || type.spec.definingForContent;
}
function replaceRange(tr, from2, to, slice2) {
  if (!slice2.size) return tr.deleteRange(from2, to);
  let $from = tr.doc.resolve(from2), $to = tr.doc.resolve(to);
  if (fitsTrivially($from, $to, slice2)) return tr.step(new ReplaceStep(from2, to, slice2));
  let targetDepths = coveredDepths($from, $to);
  if (targetDepths[targetDepths.length - 1] == 0) targetDepths.pop();
  let preferredTarget = -($from.depth + 1);
  targetDepths.unshift(preferredTarget);
  for (let d = $from.depth, pos = $from.pos - 1; d > 0; d--, pos--) {
    let spec = $from.node(d).type.spec;
    if (spec.defining || spec.definingAsContext || spec.isolating) break;
    if (targetDepths.indexOf(d) > -1) preferredTarget = d;
    else if ($from.before(d) == pos) targetDepths.splice(1, 0, -d);
  }
  let preferredTargetIndex = targetDepths.indexOf(preferredTarget);
  let leftNodes = [], preferredDepth = slice2.openStart;
  for (let content = slice2.content, i = 0; ; i++) {
    let node = content.firstChild;
    leftNodes.push(node);
    if (i == slice2.openStart) break;
    content = node.content;
  }
  for (let d = preferredDepth - 1; d >= 0; d--) {
    let leftNode = leftNodes[d], def = definesContent(leftNode.type);
    if (def && !leftNode.sameMarkup($from.node(Math.abs(preferredTarget) - 1))) preferredDepth = d;
    else if (def || !leftNode.type.isTextblock) break;
  }
  for (let j = slice2.openStart; j >= 0; j--) {
    let openDepth = (j + preferredDepth + 1) % (slice2.openStart + 1);
    let insert = leftNodes[openDepth];
    if (!insert) continue;
    for (let i = 0; i < targetDepths.length; i++) {
      let targetDepth = targetDepths[(i + preferredTargetIndex) % targetDepths.length], expand = true;
      if (targetDepth < 0) {
        expand = false;
        targetDepth = -targetDepth;
      }
      let parent = $from.node(targetDepth - 1), index = $from.index(targetDepth - 1);
      if (parent.canReplaceWith(index, index, insert.type, insert.marks)) return tr.replace($from.before(targetDepth), expand ? $to.after(targetDepth) : to, new Slice(closeFragment(slice2.content, 0, slice2.openStart, openDepth), openDepth, slice2.openEnd));
    }
  }
  let startSteps = tr.steps.length;
  for (let i = targetDepths.length - 1; i >= 0; i--) {
    tr.replace(from2, to, slice2);
    if (tr.steps.length > startSteps) break;
    let depth = targetDepths[i];
    if (depth < 0) continue;
    from2 = $from.before(depth);
    to = $to.after(depth);
  }
}
function closeFragment(fragment, depth, oldOpen, newOpen, parent) {
  if (depth < oldOpen) {
    let first = fragment.firstChild;
    fragment = fragment.replaceChild(0, first.copy(closeFragment(first.content, depth + 1, oldOpen, newOpen, first)));
  }
  if (depth > newOpen) {
    let match = parent.contentMatchAt(0);
    let start = match.fillBefore(fragment).append(fragment);
    fragment = start.append(match.matchFragment(start).fillBefore(Fragment.empty, true));
  }
  return fragment;
}
function replaceRangeWith(tr, from2, to, node) {
  if (!node.isInline && from2 == to && tr.doc.resolve(from2).parent.content.size) {
    let point = insertPoint(tr.doc, from2, node.type);
    if (point != null) from2 = to = point;
  }
  tr.replaceRange(from2, to, new Slice(Fragment.from(node), 0, 0));
}
function deleteRange(tr, from2, to) {
  let $from = tr.doc.resolve(from2), $to = tr.doc.resolve(to);
  let covered = coveredDepths($from, $to);
  for (let i = 0; i < covered.length; i++) {
    let depth = covered[i], last = i == covered.length - 1;
    if (last && depth == 0 || $from.node(depth).type.contentMatch.validEnd) return tr.delete($from.start(depth), $to.end(depth));
    if (depth > 0 && (last || $from.node(depth - 1).canReplace($from.index(depth - 1), $to.indexAfter(depth - 1)))) return tr.delete($from.before(depth), $to.after(depth));
  }
  for (let d = 1; d <= $from.depth && d <= $to.depth; d++) {
    if (from2 - $from.start(d) == $from.depth - d && to > $from.end(d) && $to.end(d) - to != $to.depth - d && $from.start(d - 1) == $to.start(d - 1) && $from.node(d - 1).canReplace($from.index(d - 1), $to.index(d - 1))) return tr.delete($from.before(d), to);
  }
  tr.delete(from2, to);
}
function coveredDepths($from, $to) {
  let result = [], minDepth = Math.min($from.depth, $to.depth);
  for (let d = minDepth; d >= 0; d--) {
    let start = $from.start(d);
    if (start < $from.pos - ($from.depth - d) || $to.end(d) > $to.pos + ($to.depth - d) || $from.node(d).type.spec.isolating || $to.node(d).type.spec.isolating) break;
    if (start == $to.start(d) || d == $from.depth && d == $to.depth && $from.parent.inlineContent && $to.parent.inlineContent && d && $to.start(d - 1) == start - 1) result.push(d);
  }
  return result;
}
var AttrStep = class _AttrStep extends Step {
  /**
  Construct an attribute step.
  */
  constructor(pos, attr, value) {
    super();
    this.pos = pos;
    this.attr = attr;
    this.value = value;
  }
  apply(doc4) {
    let node = doc4.nodeAt(this.pos);
    if (!node) return StepResult.fail("No node at attribute step's position");
    let attrs = /* @__PURE__ */ Object.create(null);
    for (let name in node.attrs) attrs[name] = node.attrs[name];
    attrs[this.attr] = this.value;
    let updated = node.type.create(attrs, null, node.marks);
    return StepResult.fromReplace(doc4, this.pos, this.pos + 1, new Slice(Fragment.from(updated), 0, node.isLeaf ? 0 : 1));
  }
  getMap() {
    return StepMap.empty;
  }
  invert(doc4) {
    return new _AttrStep(this.pos, this.attr, doc4.nodeAt(this.pos).attrs[this.attr]);
  }
  map(mapping) {
    let pos = mapping.mapResult(this.pos, 1);
    return pos.deletedAfter ? null : new _AttrStep(pos.pos, this.attr, this.value);
  }
  toJSON() {
    return {
      stepType: "attr",
      pos: this.pos,
      attr: this.attr,
      value: this.value
    };
  }
  static fromJSON(schema2, json) {
    if (typeof json.pos != "number" || typeof json.attr != "string") throw new RangeError("Invalid input for AttrStep.fromJSON");
    return new _AttrStep(json.pos, json.attr, json.value);
  }
};
Step.jsonID("attr", AttrStep);
var DocAttrStep = class _DocAttrStep extends Step {
  /**
  Construct an attribute step.
  */
  constructor(attr, value) {
    super();
    this.attr = attr;
    this.value = value;
  }
  apply(doc4) {
    let attrs = /* @__PURE__ */ Object.create(null);
    for (let name in doc4.attrs) attrs[name] = doc4.attrs[name];
    attrs[this.attr] = this.value;
    let updated = doc4.type.create(attrs, doc4.content, doc4.marks);
    return StepResult.ok(updated);
  }
  getMap() {
    return StepMap.empty;
  }
  invert(doc4) {
    return new _DocAttrStep(this.attr, doc4.attrs[this.attr]);
  }
  map(mapping) {
    return this;
  }
  toJSON() {
    return {
      stepType: "docAttr",
      attr: this.attr,
      value: this.value
    };
  }
  static fromJSON(schema2, json) {
    if (typeof json.attr != "string") throw new RangeError("Invalid input for DocAttrStep.fromJSON");
    return new _DocAttrStep(json.attr, json.value);
  }
};
Step.jsonID("docAttr", DocAttrStep);
var TransformError = class extends Error {
};
TransformError = function TransformError2(message) {
  let err = Error.call(this, message);
  err.__proto__ = TransformError2.prototype;
  return err;
};
TransformError.prototype = Object.create(Error.prototype);
TransformError.prototype.constructor = TransformError;
TransformError.prototype.name = "TransformError";
var Transform = class {
  /**
  Create a transform that starts with the given document.
  */
  constructor(doc4) {
    this.doc = doc4;
    this.steps = [];
    this.docs = [];
    this.mapping = new Mapping();
  }
  /**
  The starting document.
  */
  get before() {
    return this.docs.length ? this.docs[0] : this.doc;
  }
  /**
  Apply a new step in this transform, saving the result. Throws an
  error when the step fails.
  */
  step(step) {
    let result = this.maybeStep(step);
    if (result.failed) throw new TransformError(result.failed);
    return this;
  }
  /**
  Try to apply a step in this transformation, ignoring it if it
  fails. Returns the step result.
  */
  maybeStep(step) {
    let result = step.apply(this.doc);
    if (!result.failed) this.addStep(step, result.doc);
    return result;
  }
  /**
  True when the document has been changed (when there are any
  steps).
  */
  get docChanged() {
    return this.steps.length > 0;
  }
  /**
  @internal
  */
  addStep(step, doc4) {
    this.docs.push(this.doc);
    this.steps.push(step);
    this.mapping.appendMap(step.getMap());
    this.doc = doc4;
  }
  /**
  Replace the part of the document between `from` and `to` with the
  given `slice`.
  */
  replace(from2, to = from2, slice2 = Slice.empty) {
    let step = replaceStep(this.doc, from2, to, slice2);
    if (step) this.step(step);
    return this;
  }
  /**
  Replace the given range with the given content, which may be a
  fragment, node, or array of nodes.
  */
  replaceWith(from2, to, content) {
    return this.replace(from2, to, new Slice(Fragment.from(content), 0, 0));
  }
  /**
  Delete the content between the given positions.
  */
  delete(from2, to) {
    return this.replace(from2, to, Slice.empty);
  }
  /**
  Insert the given content at the given position.
  */
  insert(pos, content) {
    return this.replaceWith(pos, pos, content);
  }
  /**
  Replace a range of the document with a given slice, using
  `from`, `to`, and the slice's
  [`openStart`](https://prosemirror.net/docs/ref/#model.Slice.openStart) property as hints, rather
  than fixed start and end points. This method may grow the
  replaced area or close open nodes in the slice in order to get a
  fit that is more in line with WYSIWYG expectations, by dropping
  fully covered parent nodes of the replaced region when they are
  marked [non-defining as
  context](https://prosemirror.net/docs/ref/#model.NodeSpec.definingAsContext), or including an
  open parent node from the slice that _is_ marked as [defining
  its content](https://prosemirror.net/docs/ref/#model.NodeSpec.definingForContent).
  
  This is the method, for example, to handle paste. The similar
  [`replace`](https://prosemirror.net/docs/ref/#transform.Transform.replace) method is a more
  primitive tool which will _not_ move the start and end of its given
  range, and is useful in situations where you need more precise
  control over what happens.
  */
  replaceRange(from2, to, slice2) {
    replaceRange(this, from2, to, slice2);
    return this;
  }
  /**
  Replace the given range with a node, but use `from` and `to` as
  hints, rather than precise positions. When from and to are the same
  and are at the start or end of a parent node in which the given
  node doesn't fit, this method may _move_ them out towards a parent
  that does allow the given node to be placed. When the given range
  completely covers a parent node, this method may completely replace
  that parent node.
  */
  replaceRangeWith(from2, to, node) {
    replaceRangeWith(this, from2, to, node);
    return this;
  }
  /**
  Delete the given range, expanding it to cover fully covered
  parent nodes until a valid replace is found.
  */
  deleteRange(from2, to) {
    deleteRange(this, from2, to);
    return this;
  }
  /**
  Split the content in the given range off from its parent, if there
  is sibling content before or after it, and move it up the tree to
  the depth specified by `target`. You'll probably want to use
  [`liftTarget`](https://prosemirror.net/docs/ref/#transform.liftTarget) to compute `target`, to make
  sure the lift is valid.
  */
  lift(range, target) {
    lift(this, range, target);
    return this;
  }
  /**
  Join the blocks around the given position. If depth is 2, their
  last and first siblings are also joined, and so on.
  */
  join(pos, depth = 1) {
    join(this, pos, depth);
    return this;
  }
  /**
  Wrap the given [range](https://prosemirror.net/docs/ref/#model.NodeRange) in the given set of wrappers.
  The wrappers are assumed to be valid in this position, and should
  probably be computed with [`findWrapping`](https://prosemirror.net/docs/ref/#transform.findWrapping).
  */
  wrap(range, wrappers) {
    wrap(this, range, wrappers);
    return this;
  }
  /**
  Set the type of all textblocks (partly) between `from` and `to` to
  the given node type with the given attributes.
  */
  setBlockType(from2, to = from2, type, attrs = null) {
    setBlockType(this, from2, to, type, attrs);
    return this;
  }
  /**
  Change the type, attributes, and/or marks of the node at `pos`.
  When `type` isn't given, the existing node type is preserved,
  */
  setNodeMarkup(pos, type, attrs = null, marks2) {
    setNodeMarkup(this, pos, type, attrs, marks2);
    return this;
  }
  /**
  Set a single attribute on a given node to a new value.
  The `pos` addresses the document content. Use `setDocAttribute`
  to set attributes on the document itself.
  */
  setNodeAttribute(pos, attr, value) {
    this.step(new AttrStep(pos, attr, value));
    return this;
  }
  /**
  Set a single attribute on the document to a new value.
  */
  setDocAttribute(attr, value) {
    this.step(new DocAttrStep(attr, value));
    return this;
  }
  /**
  Add a mark to the node at position `pos`.
  */
  addNodeMark(pos, mark) {
    this.step(new AddNodeMarkStep(pos, mark));
    return this;
  }
  /**
  Remove a mark (or all marks of the given type) from the node at
  position `pos`.
  */
  removeNodeMark(pos, mark) {
    let node = this.doc.nodeAt(pos);
    if (!node) throw new RangeError("No node at position " + pos);
    if (mark instanceof Mark) {
      if (mark.isInSet(node.marks)) this.step(new RemoveNodeMarkStep(pos, mark));
    } else {
      let set = node.marks, found2, steps = [];
      while (found2 = mark.isInSet(set)) {
        steps.push(new RemoveNodeMarkStep(pos, found2));
        set = found2.removeFromSet(set);
      }
      for (let i = steps.length - 1; i >= 0; i--) this.step(steps[i]);
    }
    return this;
  }
  /**
  Split the node at the given position, and optionally, if `depth` is
  greater than one, any number of nodes above that. By default, the
  parts split off will inherit the node type of the original node.
  This can be changed by passing an array of types and attributes to
  use after the split (with the outermost nodes coming first).
  */
  split(pos, depth = 1, typesAfter) {
    split(this, pos, depth, typesAfter);
    return this;
  }
  /**
  Add the given mark to the inline content between `from` and `to`.
  */
  addMark(from2, to, mark) {
    addMark(this, from2, to, mark);
    return this;
  }
  /**
  Remove marks from inline nodes between `from` and `to`. When
  `mark` is a single mark, remove precisely that mark. When it is
  a mark type, remove all marks of that type. When it is null,
  remove all marks of any type.
  */
  removeMark(from2, to, mark) {
    removeMark(this, from2, to, mark);
    return this;
  }
  /**
  Removes all marks and nodes from the content of the node at
  `pos` that don't match the given new parent node type. Accepts
  an optional starting [content match](https://prosemirror.net/docs/ref/#model.ContentMatch) as
  third argument.
  */
  clearIncompatible(pos, parentType, match) {
    clearIncompatible(this, pos, parentType, match);
    return this;
  }
};

// node_modules/prosemirror-state/dist/index.js
var classesById = /* @__PURE__ */ Object.create(null);
var Selection = class {
  /**
  Initialize a selection with the head and anchor and ranges. If no
  ranges are given, constructs a single range across `$anchor` and
  `$head`.
  */
  constructor($anchor, $head, ranges) {
    this.$anchor = $anchor;
    this.$head = $head;
    this.ranges = ranges || [new SelectionRange($anchor.min($head), $anchor.max($head))];
  }
  /**
  The selection's anchor, as an unresolved position.
  */
  get anchor() {
    return this.$anchor.pos;
  }
  /**
  The selection's head.
  */
  get head() {
    return this.$head.pos;
  }
  /**
  The lower bound of the selection's main range.
  */
  get from() {
    return this.$from.pos;
  }
  /**
  The upper bound of the selection's main range.
  */
  get to() {
    return this.$to.pos;
  }
  /**
  The resolved lower  bound of the selection's main range.
  */
  get $from() {
    return this.ranges[0].$from;
  }
  /**
  The resolved upper bound of the selection's main range.
  */
  get $to() {
    return this.ranges[0].$to;
  }
  /**
  Indicates whether the selection contains any content.
  */
  get empty() {
    let ranges = this.ranges;
    for (let i = 0; i < ranges.length; i++) if (ranges[i].$from.pos != ranges[i].$to.pos) return false;
    return true;
  }
  /**
  Get the content of this selection as a slice.
  */
  content() {
    return this.$from.doc.slice(this.from, this.to, true);
  }
  /**
  Replace the selection with a slice or, if no slice is given,
  delete the selection. Will append to the given transaction.
  */
  replace(tr, content = Slice.empty) {
    let lastNode = content.content.lastChild, lastParent = null;
    for (let i = 0; i < content.openEnd; i++) {
      lastParent = lastNode;
      lastNode = lastNode.lastChild;
    }
    let mapFrom = tr.steps.length, ranges = this.ranges;
    for (let i = 0; i < ranges.length; i++) {
      let {
        $from,
        $to
      } = ranges[i], mapping = tr.mapping.slice(mapFrom);
      tr.replaceRange(mapping.map($from.pos), mapping.map($to.pos), i ? Slice.empty : content);
      if (i == 0) selectionToInsertionEnd(tr, mapFrom, (lastNode ? lastNode.isInline : lastParent && lastParent.isTextblock) ? -1 : 1);
    }
  }
  /**
  Replace the selection with the given node, appending the changes
  to the given transaction.
  */
  replaceWith(tr, node) {
    let mapFrom = tr.steps.length, ranges = this.ranges;
    for (let i = 0; i < ranges.length; i++) {
      let {
        $from,
        $to
      } = ranges[i], mapping = tr.mapping.slice(mapFrom);
      let from2 = mapping.map($from.pos), to = mapping.map($to.pos);
      if (i) {
        tr.deleteRange(from2, to);
      } else {
        tr.replaceRangeWith(from2, to, node);
        selectionToInsertionEnd(tr, mapFrom, node.isInline ? -1 : 1);
      }
    }
  }
  /**
  Find a valid cursor or leaf node selection starting at the given
  position and searching back if `dir` is negative, and forward if
  positive. When `textOnly` is true, only consider cursor
  selections. Will return null when no valid selection position is
  found.
  */
  static findFrom($pos, dir, textOnly = false) {
    let inner = $pos.parent.inlineContent ? new TextSelection($pos) : findSelectionIn($pos.node(0), $pos.parent, $pos.pos, $pos.index(), dir, textOnly);
    if (inner) return inner;
    for (let depth = $pos.depth - 1; depth >= 0; depth--) {
      let found2 = dir < 0 ? findSelectionIn($pos.node(0), $pos.node(depth), $pos.before(depth + 1), $pos.index(depth), dir, textOnly) : findSelectionIn($pos.node(0), $pos.node(depth), $pos.after(depth + 1), $pos.index(depth) + 1, dir, textOnly);
      if (found2) return found2;
    }
    return null;
  }
  /**
  Find a valid cursor or leaf node selection near the given
  position. Searches forward first by default, but if `bias` is
  negative, it will search backwards first.
  */
  static near($pos, bias = 1) {
    return this.findFrom($pos, bias) || this.findFrom($pos, -bias) || new AllSelection($pos.node(0));
  }
  /**
  Find the cursor or leaf node selection closest to the start of
  the given document. Will return an
  [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) if no valid position
  exists.
  */
  static atStart(doc4) {
    return findSelectionIn(doc4, doc4, 0, 0, 1) || new AllSelection(doc4);
  }
  /**
  Find the cursor or leaf node selection closest to the end of the
  given document.
  */
  static atEnd(doc4) {
    return findSelectionIn(doc4, doc4, doc4.content.size, doc4.childCount, -1) || new AllSelection(doc4);
  }
  /**
  Deserialize the JSON representation of a selection. Must be
  implemented for custom classes (as a static class method).
  */
  static fromJSON(doc4, json) {
    if (!json || !json.type) throw new RangeError("Invalid input for Selection.fromJSON");
    let cls = classesById[json.type];
    if (!cls) throw new RangeError(`No selection type ${json.type} defined`);
    return cls.fromJSON(doc4, json);
  }
  /**
  To be able to deserialize selections from JSON, custom selection
  classes must register themselves with an ID string, so that they
  can be disambiguated. Try to pick something that's unlikely to
  clash with classes from other modules.
  */
  static jsonID(id, selectionClass) {
    if (id in classesById) throw new RangeError("Duplicate use of selection JSON ID " + id);
    classesById[id] = selectionClass;
    selectionClass.prototype.jsonID = id;
    return selectionClass;
  }
  /**
  Get a [bookmark](https://prosemirror.net/docs/ref/#state.SelectionBookmark) for this selection,
  which is a value that can be mapped without having access to a
  current document, and later resolved to a real selection for a
  given document again. (This is used mostly by the history to
  track and restore old selections.) The default implementation of
  this method just converts the selection to a text selection and
  returns the bookmark for that.
  */
  getBookmark() {
    return TextSelection.between(this.$anchor, this.$head).getBookmark();
  }
};
Selection.prototype.visible = true;
var SelectionRange = class {
  /**
  Create a range.
  */
  constructor($from, $to) {
    this.$from = $from;
    this.$to = $to;
  }
};
var warnedAboutTextSelection = false;
function checkTextSelection($pos) {
  if (!warnedAboutTextSelection && !$pos.parent.inlineContent) {
    warnedAboutTextSelection = true;
    console["warn"]("TextSelection endpoint not pointing into a node with inline content (" + $pos.parent.type.name + ")");
  }
}
var TextSelection = class _TextSelection extends Selection {
  /**
  Construct a text selection between the given points.
  */
  constructor($anchor, $head = $anchor) {
    checkTextSelection($anchor);
    checkTextSelection($head);
    super($anchor, $head);
  }
  /**
  Returns a resolved position if this is a cursor selection (an
  empty text selection), and null otherwise.
  */
  get $cursor() {
    return this.$anchor.pos == this.$head.pos ? this.$head : null;
  }
  map(doc4, mapping) {
    let $head = doc4.resolve(mapping.map(this.head));
    if (!$head.parent.inlineContent) return Selection.near($head);
    let $anchor = doc4.resolve(mapping.map(this.anchor));
    return new _TextSelection($anchor.parent.inlineContent ? $anchor : $head, $head);
  }
  replace(tr, content = Slice.empty) {
    super.replace(tr, content);
    if (content == Slice.empty) {
      let marks2 = this.$from.marksAcross(this.$to);
      if (marks2) tr.ensureMarks(marks2);
    }
  }
  eq(other) {
    return other instanceof _TextSelection && other.anchor == this.anchor && other.head == this.head;
  }
  getBookmark() {
    return new TextBookmark(this.anchor, this.head);
  }
  toJSON() {
    return {
      type: "text",
      anchor: this.anchor,
      head: this.head
    };
  }
  /**
  @internal
  */
  static fromJSON(doc4, json) {
    if (typeof json.anchor != "number" || typeof json.head != "number") throw new RangeError("Invalid input for TextSelection.fromJSON");
    return new _TextSelection(doc4.resolve(json.anchor), doc4.resolve(json.head));
  }
  /**
  Create a text selection from non-resolved positions.
  */
  static create(doc4, anchor, head = anchor) {
    let $anchor = doc4.resolve(anchor);
    return new this($anchor, head == anchor ? $anchor : doc4.resolve(head));
  }
  /**
  Return a text selection that spans the given positions or, if
  they aren't text positions, find a text selection near them.
  `bias` determines whether the method searches forward (default)
  or backwards (negative number) first. Will fall back to calling
  [`Selection.near`](https://prosemirror.net/docs/ref/#state.Selection^near) when the document
  doesn't contain a valid text position.
  */
  static between($anchor, $head, bias) {
    let dPos = $anchor.pos - $head.pos;
    if (!bias || dPos) bias = dPos >= 0 ? 1 : -1;
    if (!$head.parent.inlineContent) {
      let found2 = Selection.findFrom($head, bias, true) || Selection.findFrom($head, -bias, true);
      if (found2) $head = found2.$head;
      else return Selection.near($head, bias);
    }
    if (!$anchor.parent.inlineContent) {
      if (dPos == 0) {
        $anchor = $head;
      } else {
        $anchor = (Selection.findFrom($anchor, -bias, true) || Selection.findFrom($anchor, bias, true)).$anchor;
        if ($anchor.pos < $head.pos != dPos < 0) $anchor = $head;
      }
    }
    return new _TextSelection($anchor, $head);
  }
};
Selection.jsonID("text", TextSelection);
var TextBookmark = class _TextBookmark {
  constructor(anchor, head) {
    this.anchor = anchor;
    this.head = head;
  }
  map(mapping) {
    return new _TextBookmark(mapping.map(this.anchor), mapping.map(this.head));
  }
  resolve(doc4) {
    return TextSelection.between(doc4.resolve(this.anchor), doc4.resolve(this.head));
  }
};
var NodeSelection = class _NodeSelection extends Selection {
  /**
  Create a node selection. Does not verify the validity of its
  argument.
  */
  constructor($pos) {
    let node = $pos.nodeAfter;
    let $end = $pos.node(0).resolve($pos.pos + node.nodeSize);
    super($pos, $end);
    this.node = node;
  }
  map(doc4, mapping) {
    let {
      deleted,
      pos
    } = mapping.mapResult(this.anchor);
    let $pos = doc4.resolve(pos);
    if (deleted) return Selection.near($pos);
    return new _NodeSelection($pos);
  }
  content() {
    return new Slice(Fragment.from(this.node), 0, 0);
  }
  eq(other) {
    return other instanceof _NodeSelection && other.anchor == this.anchor;
  }
  toJSON() {
    return {
      type: "node",
      anchor: this.anchor
    };
  }
  getBookmark() {
    return new NodeBookmark(this.anchor);
  }
  /**
  @internal
  */
  static fromJSON(doc4, json) {
    if (typeof json.anchor != "number") throw new RangeError("Invalid input for NodeSelection.fromJSON");
    return new _NodeSelection(doc4.resolve(json.anchor));
  }
  /**
  Create a node selection from non-resolved positions.
  */
  static create(doc4, from2) {
    return new _NodeSelection(doc4.resolve(from2));
  }
  /**
  Determines whether the given node may be selected as a node
  selection.
  */
  static isSelectable(node) {
    return !node.isText && node.type.spec.selectable !== false;
  }
};
NodeSelection.prototype.visible = false;
Selection.jsonID("node", NodeSelection);
var NodeBookmark = class _NodeBookmark {
  constructor(anchor) {
    this.anchor = anchor;
  }
  map(mapping) {
    let {
      deleted,
      pos
    } = mapping.mapResult(this.anchor);
    return deleted ? new TextBookmark(pos, pos) : new _NodeBookmark(pos);
  }
  resolve(doc4) {
    let $pos = doc4.resolve(this.anchor), node = $pos.nodeAfter;
    if (node && NodeSelection.isSelectable(node)) return new NodeSelection($pos);
    return Selection.near($pos);
  }
};
var AllSelection = class _AllSelection extends Selection {
  /**
  Create an all-selection over the given document.
  */
  constructor(doc4) {
    super(doc4.resolve(0), doc4.resolve(doc4.content.size));
  }
  replace(tr, content = Slice.empty) {
    if (content == Slice.empty) {
      tr.delete(0, tr.doc.content.size);
      let sel = Selection.atStart(tr.doc);
      if (!sel.eq(tr.selection)) tr.setSelection(sel);
    } else {
      super.replace(tr, content);
    }
  }
  toJSON() {
    return {
      type: "all"
    };
  }
  /**
  @internal
  */
  static fromJSON(doc4) {
    return new _AllSelection(doc4);
  }
  map(doc4) {
    return new _AllSelection(doc4);
  }
  eq(other) {
    return other instanceof _AllSelection;
  }
  getBookmark() {
    return AllBookmark;
  }
};
Selection.jsonID("all", AllSelection);
var AllBookmark = {
  map() {
    return this;
  },
  resolve(doc4) {
    return new AllSelection(doc4);
  }
};
function findSelectionIn(doc4, node, pos, index, dir, text2 = false) {
  if (node.inlineContent) return TextSelection.create(doc4, pos);
  for (let i = index - (dir > 0 ? 0 : 1); dir > 0 ? i < node.childCount : i >= 0; i += dir) {
    let child = node.child(i);
    if (!child.isAtom) {
      let inner = findSelectionIn(doc4, child, pos + dir, dir < 0 ? child.childCount : 0, dir, text2);
      if (inner) return inner;
    } else if (!text2 && NodeSelection.isSelectable(child)) {
      return NodeSelection.create(doc4, pos - (dir < 0 ? child.nodeSize : 0));
    }
    pos += child.nodeSize * dir;
  }
  return null;
}
function selectionToInsertionEnd(tr, startLen, bias) {
  let last = tr.steps.length - 1;
  if (last < startLen) return;
  let step = tr.steps[last];
  if (!(step instanceof ReplaceStep || step instanceof ReplaceAroundStep)) return;
  let map3 = tr.mapping.maps[last], end;
  map3.forEach((_from, _to, _newFrom, newTo) => {
    if (end == null) end = newTo;
  });
  tr.setSelection(Selection.near(tr.doc.resolve(end), bias));
}
var UPDATED_SEL = 1;
var UPDATED_MARKS = 2;
var UPDATED_SCROLL = 4;
var Transaction = class extends Transform {
  /**
  @internal
  */
  constructor(state2) {
    super(state2.doc);
    this.curSelectionFor = 0;
    this.updated = 0;
    this.meta = /* @__PURE__ */ Object.create(null);
    this.time = Date.now();
    this.curSelection = state2.selection;
    this.storedMarks = state2.storedMarks;
  }
  /**
  The transaction's current selection. This defaults to the editor
  selection [mapped](https://prosemirror.net/docs/ref/#state.Selection.map) through the steps in the
  transaction, but can be overwritten with
  [`setSelection`](https://prosemirror.net/docs/ref/#state.Transaction.setSelection).
  */
  get selection() {
    if (this.curSelectionFor < this.steps.length) {
      this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor));
      this.curSelectionFor = this.steps.length;
    }
    return this.curSelection;
  }
  /**
  Update the transaction's current selection. Will determine the
  selection that the editor gets when the transaction is applied.
  */
  setSelection(selection) {
    if (selection.$from.doc != this.doc) throw new RangeError("Selection passed to setSelection must point at the current document");
    this.curSelection = selection;
    this.curSelectionFor = this.steps.length;
    this.updated = (this.updated | UPDATED_SEL) & ~UPDATED_MARKS;
    this.storedMarks = null;
    return this;
  }
  /**
  Whether the selection was explicitly updated by this transaction.
  */
  get selectionSet() {
    return (this.updated & UPDATED_SEL) > 0;
  }
  /**
  Set the current stored marks.
  */
  setStoredMarks(marks2) {
    this.storedMarks = marks2;
    this.updated |= UPDATED_MARKS;
    return this;
  }
  /**
  Make sure the current stored marks or, if that is null, the marks
  at the selection, match the given set of marks. Does nothing if
  this is already the case.
  */
  ensureMarks(marks2) {
    if (!Mark.sameSet(this.storedMarks || this.selection.$from.marks(), marks2)) this.setStoredMarks(marks2);
    return this;
  }
  /**
  Add a mark to the set of stored marks.
  */
  addStoredMark(mark) {
    return this.ensureMarks(mark.addToSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Remove a mark or mark type from the set of stored marks.
  */
  removeStoredMark(mark) {
    return this.ensureMarks(mark.removeFromSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Whether the stored marks were explicitly set for this transaction.
  */
  get storedMarksSet() {
    return (this.updated & UPDATED_MARKS) > 0;
  }
  /**
  @internal
  */
  addStep(step, doc4) {
    super.addStep(step, doc4);
    this.updated = this.updated & ~UPDATED_MARKS;
    this.storedMarks = null;
  }
  /**
  Update the timestamp for the transaction.
  */
  setTime(time) {
    this.time = time;
    return this;
  }
  /**
  Replace the current selection with the given slice.
  */
  replaceSelection(slice2) {
    this.selection.replace(this, slice2);
    return this;
  }
  /**
  Replace the selection with the given node. When `inheritMarks` is
  true and the content is inline, it inherits the marks from the
  place where it is inserted.
  */
  replaceSelectionWith(node, inheritMarks = true) {
    let selection = this.selection;
    if (inheritMarks) node = node.mark(this.storedMarks || (selection.empty ? selection.$from.marks() : selection.$from.marksAcross(selection.$to) || Mark.none));
    selection.replaceWith(this, node);
    return this;
  }
  /**
  Delete the selection.
  */
  deleteSelection() {
    this.selection.replace(this);
    return this;
  }
  /**
  Replace the given range, or the selection if no range is given,
  with a text node containing the given string.
  */
  insertText(text2, from2, to) {
    let schema2 = this.doc.type.schema;
    if (from2 == null) {
      if (!text2) return this.deleteSelection();
      return this.replaceSelectionWith(schema2.text(text2), true);
    } else {
      if (to == null) to = from2;
      if (!text2) return this.deleteRange(from2, to);
      let marks2 = this.storedMarks;
      if (!marks2) {
        let $from = this.doc.resolve(from2);
        marks2 = to == from2 ? $from.marks() : $from.marksAcross(this.doc.resolve(to));
      }
      this.replaceRangeWith(from2, to, schema2.text(text2, marks2));
      if (!this.selection.empty && this.selection.to == from2 + text2.length) this.setSelection(Selection.near(this.selection.$to));
      return this;
    }
  }
  /**
  Store a metadata property in this transaction, keyed either by
  name or by plugin.
  */
  setMeta(key, value) {
    this.meta[typeof key == "string" ? key : key.key] = value;
    return this;
  }
  /**
  Retrieve a metadata property for a given name or plugin.
  */
  getMeta(key) {
    return this.meta[typeof key == "string" ? key : key.key];
  }
  /**
  Returns true if this transaction doesn't contain any metadata,
  and can thus safely be extended.
  */
  get isGeneric() {
    for (let _ in this.meta) return false;
    return true;
  }
  /**
  Indicate that the editor should scroll the selection into view
  when updated to the state produced by this transaction.
  */
  scrollIntoView() {
    this.updated |= UPDATED_SCROLL;
    return this;
  }
  /**
  True when this transaction has had `scrollIntoView` called on it.
  */
  get scrolledIntoView() {
    return (this.updated & UPDATED_SCROLL) > 0;
  }
};
function bind(f, self) {
  return !self || !f ? f : f.bind(self);
}
var FieldDesc = class {
  constructor(name, desc, self) {
    this.name = name;
    this.init = bind(desc.init, self);
    this.apply = bind(desc.apply, self);
  }
};
var baseFields = [new FieldDesc("doc", {
  init(config) {
    return config.doc || config.schema.topNodeType.createAndFill();
  },
  apply(tr) {
    return tr.doc;
  }
}), new FieldDesc("selection", {
  init(config, instance) {
    return config.selection || Selection.atStart(instance.doc);
  },
  apply(tr) {
    return tr.selection;
  }
}), new FieldDesc("storedMarks", {
  init(config) {
    return config.storedMarks || null;
  },
  apply(tr, _marks, _old, state2) {
    return state2.selection.$cursor ? tr.storedMarks : null;
  }
}), new FieldDesc("scrollToSelection", {
  init() {
    return 0;
  },
  apply(tr, prev) {
    return tr.scrolledIntoView ? prev + 1 : prev;
  }
})];
var Configuration = class {
  constructor(schema2, plugins) {
    this.schema = schema2;
    this.plugins = [];
    this.pluginsByKey = /* @__PURE__ */ Object.create(null);
    this.fields = baseFields.slice();
    if (plugins) plugins.forEach((plugin) => {
      if (this.pluginsByKey[plugin.key]) throw new RangeError("Adding different instances of a keyed plugin (" + plugin.key + ")");
      this.plugins.push(plugin);
      this.pluginsByKey[plugin.key] = plugin;
      if (plugin.spec.state) this.fields.push(new FieldDesc(plugin.key, plugin.spec.state, plugin));
    });
  }
};
var EditorState = class _EditorState {
  /**
  @internal
  */
  constructor(config) {
    this.config = config;
  }
  /**
  The schema of the state's document.
  */
  get schema() {
    return this.config.schema;
  }
  /**
  The plugins that are active in this state.
  */
  get plugins() {
    return this.config.plugins;
  }
  /**
  Apply the given transaction to produce a new state.
  */
  apply(tr) {
    return this.applyTransaction(tr).state;
  }
  /**
  @internal
  */
  filterTransaction(tr, ignore = -1) {
    for (let i = 0; i < this.config.plugins.length; i++) if (i != ignore) {
      let plugin = this.config.plugins[i];
      if (plugin.spec.filterTransaction && !plugin.spec.filterTransaction.call(plugin, tr, this)) return false;
    }
    return true;
  }
  /**
  Verbose variant of [`apply`](https://prosemirror.net/docs/ref/#state.EditorState.apply) that
  returns the precise transactions that were applied (which might
  be influenced by the [transaction
  hooks](https://prosemirror.net/docs/ref/#state.PluginSpec.filterTransaction) of
  plugins) along with the new state.
  */
  applyTransaction(rootTr) {
    if (!this.filterTransaction(rootTr)) return {
      state: this,
      transactions: []
    };
    let trs = [rootTr], newState = this.applyInner(rootTr), seen = null;
    for (; ; ) {
      let haveNew = false;
      for (let i = 0; i < this.config.plugins.length; i++) {
        let plugin = this.config.plugins[i];
        if (plugin.spec.appendTransaction) {
          let n = seen ? seen[i].n : 0, oldState = seen ? seen[i].state : this;
          let tr = n < trs.length && plugin.spec.appendTransaction.call(plugin, n ? trs.slice(n) : trs, oldState, newState);
          if (tr && newState.filterTransaction(tr, i)) {
            tr.setMeta("appendedTransaction", rootTr);
            if (!seen) {
              seen = [];
              for (let j = 0; j < this.config.plugins.length; j++) seen.push(j < i ? {
                state: newState,
                n: trs.length
              } : {
                state: this,
                n: 0
              });
            }
            trs.push(tr);
            newState = newState.applyInner(tr);
            haveNew = true;
          }
          if (seen) seen[i] = {
            state: newState,
            n: trs.length
          };
        }
      }
      if (!haveNew) return {
        state: newState,
        transactions: trs
      };
    }
  }
  /**
  @internal
  */
  applyInner(tr) {
    if (!tr.before.eq(this.doc)) throw new RangeError("Applying a mismatched transaction");
    let newInstance = new _EditorState(this.config), fields = this.config.fields;
    for (let i = 0; i < fields.length; i++) {
      let field = fields[i];
      newInstance[field.name] = field.apply(tr, this[field.name], this, newInstance);
    }
    return newInstance;
  }
  /**
  Accessor that constructs and returns a new [transaction](https://prosemirror.net/docs/ref/#state.Transaction) from this state.
  */
  get tr() {
    return new Transaction(this);
  }
  /**
  Create a new state.
  */
  static create(config) {
    let $config = new Configuration(config.doc ? config.doc.type.schema : config.schema, config.plugins);
    let instance = new _EditorState($config);
    for (let i = 0; i < $config.fields.length; i++) instance[$config.fields[i].name] = $config.fields[i].init(config, instance);
    return instance;
  }
  /**
  Create a new state based on this one, but with an adjusted set
  of active plugins. State fields that exist in both sets of
  plugins are kept unchanged. Those that no longer exist are
  dropped, and those that are new are initialized using their
  [`init`](https://prosemirror.net/docs/ref/#state.StateField.init) method, passing in the new
  configuration object..
  */
  reconfigure(config) {
    let $config = new Configuration(this.schema, config.plugins);
    let fields = $config.fields, instance = new _EditorState($config);
    for (let i = 0; i < fields.length; i++) {
      let name = fields[i].name;
      instance[name] = this.hasOwnProperty(name) ? this[name] : fields[i].init(config, instance);
    }
    return instance;
  }
  /**
  Serialize this state to JSON. If you want to serialize the state
  of plugins, pass an object mapping property names to use in the
  resulting JSON object to plugin objects. The argument may also be
  a string or number, in which case it is ignored, to support the
  way `JSON.stringify` calls `toString` methods.
  */
  toJSON(pluginFields) {
    let result = {
      doc: this.doc.toJSON(),
      selection: this.selection.toJSON()
    };
    if (this.storedMarks) result.storedMarks = this.storedMarks.map((m) => m.toJSON());
    if (pluginFields && typeof pluginFields == "object") for (let prop in pluginFields) {
      if (prop == "doc" || prop == "selection") throw new RangeError("The JSON fields `doc` and `selection` are reserved");
      let plugin = pluginFields[prop], state2 = plugin.spec.state;
      if (state2 && state2.toJSON) result[prop] = state2.toJSON.call(plugin, this[plugin.key]);
    }
    return result;
  }
  /**
  Deserialize a JSON representation of a state. `config` should
  have at least a `schema` field, and should contain array of
  plugins to initialize the state with. `pluginFields` can be used
  to deserialize the state of plugins, by associating plugin
  instances with the property names they use in the JSON object.
  */
  static fromJSON(config, json, pluginFields) {
    if (!json) throw new RangeError("Invalid input for EditorState.fromJSON");
    if (!config.schema) throw new RangeError("Required config field 'schema' missing");
    let $config = new Configuration(config.schema, config.plugins);
    let instance = new _EditorState($config);
    $config.fields.forEach((field) => {
      if (field.name == "doc") {
        instance.doc = Node2.fromJSON(config.schema, json.doc);
      } else if (field.name == "selection") {
        instance.selection = Selection.fromJSON(instance.doc, json.selection);
      } else if (field.name == "storedMarks") {
        if (json.storedMarks) instance.storedMarks = json.storedMarks.map(config.schema.markFromJSON);
      } else {
        if (pluginFields) for (let prop in pluginFields) {
          let plugin = pluginFields[prop], state2 = plugin.spec.state;
          if (plugin.key == field.name && state2 && state2.fromJSON && Object.prototype.hasOwnProperty.call(json, prop)) {
            instance[field.name] = state2.fromJSON.call(plugin, config, json[prop], instance);
            return;
          }
        }
        instance[field.name] = field.init(config, instance);
      }
    });
    return instance;
  }
};
function bindProps(obj, self, target) {
  for (let prop in obj) {
    let val = obj[prop];
    if (val instanceof Function) val = val.bind(self);
    else if (prop == "handleDOMEvents") val = bindProps(val, self, {});
    target[prop] = val;
  }
  return target;
}
var Plugin = class {
  /**
  Create a plugin.
  */
  constructor(spec) {
    this.spec = spec;
    this.props = {};
    if (spec.props) bindProps(spec.props, this, this.props);
    this.key = spec.key ? spec.key.key : createKey("plugin");
  }
  /**
  Extract the plugin's state field from an editor state.
  */
  getState(state2) {
    return state2[this.key];
  }
};
var keys = /* @__PURE__ */ Object.create(null);
function createKey(name) {
  if (name in keys) return name + "$" + ++keys[name];
  keys[name] = 0;
  return name + "$";
}
var PluginKey = class {
  /**
  Create a plugin key.
  */
  constructor(name = "key") {
    this.key = createKey(name);
  }
  /**
  Get the active plugin with this key, if any, from an editor
  state.
  */
  get(state2) {
    return state2.config.pluginsByKey[this.key];
  }
  /**
  Get the plugin's state from an editor state.
  */
  getState(state2) {
    return state2[this.key];
  }
};

// node_modules/prosemirror-view/dist/index.js
var domIndex = function(node) {
  for (var index = 0; ; index++) {
    node = node.previousSibling;
    if (!node) return index;
  }
};
var parentNode = function(node) {
  let parent = node.assignedSlot || node.parentNode;
  return parent && parent.nodeType == 11 ? parent.host : parent;
};
var reusedRange = null;
var textRange = function(node, from2, to) {
  let range = reusedRange || (reusedRange = document.createRange());
  range.setEnd(node, to == null ? node.nodeValue.length : to);
  range.setStart(node, from2 || 0);
  return range;
};
var clearReusedRange = function() {
  reusedRange = null;
};
var isEquivalentPosition = function(node, off, targetNode, targetOff) {
  return targetNode && (scanFor(node, off, targetNode, targetOff, -1) || scanFor(node, off, targetNode, targetOff, 1));
};
var atomElements = /^(img|br|input|textarea|hr)$/i;
function scanFor(node, off, targetNode, targetOff, dir) {
  var _a;
  for (; ; ) {
    if (node == targetNode && off == targetOff) return true;
    if (off == (dir < 0 ? 0 : nodeSize(node))) {
      let parent = node.parentNode;
      if (!parent || parent.nodeType != 1 || hasBlockDesc(node) || atomElements.test(node.nodeName) || node.contentEditable == "false") return false;
      off = domIndex(node) + (dir < 0 ? 0 : 1);
      node = parent;
    } else if (node.nodeType == 1) {
      let child = node.childNodes[off + (dir < 0 ? -1 : 0)];
      if (child.nodeType == 1 && child.contentEditable == "false") {
        if ((_a = child.pmViewDesc) === null || _a === void 0 ? void 0 : _a.ignoreForSelection) off += dir;
        else return false;
      } else {
        node = child;
        off = dir < 0 ? nodeSize(node) : 0;
      }
    } else {
      return false;
    }
  }
}
function nodeSize(node) {
  return node.nodeType == 3 ? node.nodeValue.length : node.childNodes.length;
}
function textNodeBefore$1(node, offset3) {
  for (; ; ) {
    if (node.nodeType == 3 && offset3) return node;
    if (node.nodeType == 1 && offset3 > 0) {
      if (node.contentEditable == "false") return null;
      node = node.childNodes[offset3 - 1];
      offset3 = nodeSize(node);
    } else if (node.parentNode && !hasBlockDesc(node)) {
      offset3 = domIndex(node);
      node = node.parentNode;
    } else {
      return null;
    }
  }
}
function textNodeAfter$1(node, offset3) {
  for (; ; ) {
    if (node.nodeType == 3 && offset3 < node.nodeValue.length) return node;
    if (node.nodeType == 1 && offset3 < node.childNodes.length) {
      if (node.contentEditable == "false") return null;
      node = node.childNodes[offset3];
      offset3 = 0;
    } else if (node.parentNode && !hasBlockDesc(node)) {
      offset3 = domIndex(node) + 1;
      node = node.parentNode;
    } else {
      return null;
    }
  }
}
function isOnEdge(node, offset3, parent) {
  for (let atStart = offset3 == 0, atEnd = offset3 == nodeSize(node); atStart || atEnd; ) {
    if (node == parent) return true;
    let index = domIndex(node);
    node = node.parentNode;
    if (!node) return false;
    atStart = atStart && index == 0;
    atEnd = atEnd && index == nodeSize(node);
  }
}
function hasBlockDesc(dom) {
  let desc;
  for (let cur = dom; cur; cur = cur.parentNode) if (desc = cur.pmViewDesc) break;
  return desc && desc.node && desc.node.isBlock && (desc.dom == dom || desc.contentDOM == dom);
}
var selectionCollapsed = function(domSel) {
  return domSel.focusNode && isEquivalentPosition(domSel.focusNode, domSel.focusOffset, domSel.anchorNode, domSel.anchorOffset);
};
function keyEvent(keyCode, key) {
  let event = document.createEvent("Event");
  event.initEvent("keydown", true, true);
  event.keyCode = keyCode;
  event.key = event.code = key;
  return event;
}
function deepActiveElement(doc4) {
  let elt = doc4.activeElement;
  while (elt && elt.shadowRoot) elt = elt.shadowRoot.activeElement;
  return elt;
}
function caretFromPoint(doc4, x, y) {
  if (doc4.caretPositionFromPoint) {
    try {
      let pos = doc4.caretPositionFromPoint(x, y);
      if (pos) return {
        node: pos.offsetNode,
        offset: Math.min(nodeSize(pos.offsetNode), pos.offset)
      };
    } catch (_) {
    }
  }
  if (doc4.caretRangeFromPoint) {
    let range = doc4.caretRangeFromPoint(x, y);
    if (range) return {
      node: range.startContainer,
      offset: Math.min(nodeSize(range.startContainer), range.startOffset)
    };
  }
}
var nav = typeof navigator != "undefined" ? navigator : null;
var doc2 = typeof document != "undefined" ? document : null;
var agent = nav && nav.userAgent || "";
var ie_edge = /Edge\/(\d+)/.exec(agent);
var ie_upto10 = /MSIE \d/.exec(agent);
var ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(agent);
var ie = !!(ie_upto10 || ie_11up || ie_edge);
var ie_version = ie_upto10 ? document.documentMode : ie_11up ? +ie_11up[1] : ie_edge ? +ie_edge[1] : 0;
var gecko = !ie && /gecko\/(\d+)/i.test(agent);
gecko && +(/Firefox\/(\d+)/.exec(agent) || [0, 0])[1];
var _chrome = !ie && /Chrome\/(\d+)/.exec(agent);
var chrome = !!_chrome;
var chrome_version = _chrome ? +_chrome[1] : 0;
var safari = !ie && !!nav && /Apple Computer/.test(nav.vendor);
var ios = safari && (/Mobile\/\w+/.test(agent) || !!nav && nav.maxTouchPoints > 2);
var mac = ios || (nav ? /Mac/.test(nav.platform) : false);
var windows = nav ? /Win/.test(nav.platform) : false;
var android = /Android \d/.test(agent);
var webkit = !!doc2 && "webkitFontSmoothing" in doc2.documentElement.style;
var webkit_version = webkit ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function windowRect(doc4) {
  let vp = doc4.defaultView && doc4.defaultView.visualViewport;
  if (vp) return {
    left: 0,
    right: vp.width,
    top: 0,
    bottom: vp.height
  };
  return {
    left: 0,
    right: doc4.documentElement.clientWidth,
    top: 0,
    bottom: doc4.documentElement.clientHeight
  };
}
function getSide(value, side) {
  return typeof value == "number" ? value : value[side];
}
function clientRect(node) {
  let rect = node.getBoundingClientRect();
  let scaleX = rect.width / node.offsetWidth || 1;
  let scaleY = rect.height / node.offsetHeight || 1;
  return {
    left: rect.left,
    right: rect.left + node.clientWidth * scaleX,
    top: rect.top,
    bottom: rect.top + node.clientHeight * scaleY
  };
}
function scrollRectIntoView(view, rect, startDOM) {
  let scrollThreshold = view.someProp("scrollThreshold") || 0, scrollMargin = view.someProp("scrollMargin") || 5;
  let doc4 = view.dom.ownerDocument;
  for (let parent = startDOM || view.dom; ; ) {
    if (!parent) break;
    if (parent.nodeType != 1) {
      parent = parentNode(parent);
      continue;
    }
    let elt = parent;
    let atTop = elt == doc4.body;
    let bounding = atTop ? windowRect(doc4) : clientRect(elt);
    let moveX = 0, moveY = 0;
    if (rect.top < bounding.top + getSide(scrollThreshold, "top")) moveY = -(bounding.top - rect.top + getSide(scrollMargin, "top"));
    else if (rect.bottom > bounding.bottom - getSide(scrollThreshold, "bottom")) moveY = rect.bottom - rect.top > bounding.bottom - bounding.top ? rect.top + getSide(scrollMargin, "top") - bounding.top : rect.bottom - bounding.bottom + getSide(scrollMargin, "bottom");
    if (rect.left < bounding.left + getSide(scrollThreshold, "left")) moveX = -(bounding.left - rect.left + getSide(scrollMargin, "left"));
    else if (rect.right > bounding.right - getSide(scrollThreshold, "right")) moveX = rect.right - bounding.right + getSide(scrollMargin, "right");
    if (moveX || moveY) {
      if (atTop) {
        doc4.defaultView.scrollBy(moveX, moveY);
      } else {
        let startX = elt.scrollLeft, startY = elt.scrollTop;
        if (moveY) elt.scrollTop += moveY;
        if (moveX) elt.scrollLeft += moveX;
        let dX = elt.scrollLeft - startX, dY = elt.scrollTop - startY;
        rect = {
          left: rect.left - dX,
          top: rect.top - dY,
          right: rect.right - dX,
          bottom: rect.bottom - dY
        };
      }
    }
    let pos = atTop ? "fixed" : getComputedStyle(parent).position;
    if (/^(fixed|sticky)$/.test(pos)) break;
    parent = pos == "absolute" ? parent.offsetParent : parentNode(parent);
  }
}
function storeScrollPos(view) {
  let rect = view.dom.getBoundingClientRect(), startY = Math.max(0, rect.top);
  let refDOM, refTop;
  for (let x = (rect.left + rect.right) / 2, y = startY + 1; y < Math.min(innerHeight, rect.bottom); y += 5) {
    let dom = view.root.elementFromPoint(x, y);
    if (!dom || dom == view.dom || !view.dom.contains(dom)) continue;
    let localRect = dom.getBoundingClientRect();
    if (localRect.top >= startY - 20) {
      refDOM = dom;
      refTop = localRect.top;
      break;
    }
  }
  return {
    refDOM,
    refTop,
    stack: scrollStack(view.dom)
  };
}
function scrollStack(dom) {
  let stack = [], doc4 = dom.ownerDocument;
  for (let cur = dom; cur; cur = parentNode(cur)) {
    stack.push({
      dom: cur,
      top: cur.scrollTop,
      left: cur.scrollLeft
    });
    if (dom == doc4) break;
  }
  return stack;
}
function resetScrollPos({
  refDOM,
  refTop,
  stack
}) {
  let newRefTop = refDOM ? refDOM.getBoundingClientRect().top : 0;
  restoreScrollStack(stack, newRefTop == 0 ? 0 : newRefTop - refTop);
}
function restoreScrollStack(stack, dTop) {
  for (let i = 0; i < stack.length; i++) {
    let {
      dom,
      top,
      left
    } = stack[i];
    if (dom.scrollTop != top + dTop) dom.scrollTop = top + dTop;
    if (dom.scrollLeft != left) dom.scrollLeft = left;
  }
}
var preventScrollSupported = null;
function focusPreventScroll(dom) {
  if (dom.setActive) return dom.setActive();
  if (preventScrollSupported) return dom.focus(preventScrollSupported);
  let stored = scrollStack(dom);
  dom.focus(preventScrollSupported == null ? {
    get preventScroll() {
      preventScrollSupported = {
        preventScroll: true
      };
      return true;
    }
  } : void 0);
  if (!preventScrollSupported) {
    preventScrollSupported = false;
    restoreScrollStack(stored, 0);
  }
}
function findOffsetInNode(node, coords) {
  let closest, dxClosest = 2e8, coordsClosest, offset3 = 0;
  let rowBot = coords.top, rowTop = coords.top;
  let firstBelow, coordsBelow;
  for (let child = node.firstChild, childIndex = 0; child; child = child.nextSibling, childIndex++) {
    let rects;
    if (child.nodeType == 1) rects = child.getClientRects();
    else if (child.nodeType == 3) rects = textRange(child).getClientRects();
    else continue;
    for (let i = 0; i < rects.length; i++) {
      let rect = rects[i];
      if (rect.top <= rowBot && rect.bottom >= rowTop) {
        rowBot = Math.max(rect.bottom, rowBot);
        rowTop = Math.min(rect.top, rowTop);
        let dx = rect.left > coords.left ? rect.left - coords.left : rect.right < coords.left ? coords.left - rect.right : 0;
        if (dx < dxClosest) {
          closest = child;
          dxClosest = dx;
          coordsClosest = dx && closest.nodeType == 3 ? {
            left: rect.right < coords.left ? rect.right : rect.left,
            top: coords.top
          } : coords;
          if (child.nodeType == 1 && dx) offset3 = childIndex + (coords.left >= (rect.left + rect.right) / 2 ? 1 : 0);
          continue;
        }
      } else if (rect.top > coords.top && !firstBelow && rect.left <= coords.left && rect.right >= coords.left) {
        firstBelow = child;
        coordsBelow = {
          left: Math.max(rect.left, Math.min(rect.right, coords.left)),
          top: rect.top
        };
      }
      if (!closest && (coords.left >= rect.right && coords.top >= rect.top || coords.left >= rect.left && coords.top >= rect.bottom)) offset3 = childIndex + 1;
    }
  }
  if (!closest && firstBelow) {
    closest = firstBelow;
    coordsClosest = coordsBelow;
    dxClosest = 0;
  }
  if (closest && closest.nodeType == 3) return findOffsetInText(closest, coordsClosest);
  if (!closest || dxClosest && closest.nodeType == 1) return {
    node,
    offset: offset3
  };
  return findOffsetInNode(closest, coordsClosest);
}
function findOffsetInText(node, coords) {
  let len = node.nodeValue.length;
  let range = document.createRange();
  for (let i = 0; i < len; i++) {
    range.setEnd(node, i + 1);
    range.setStart(node, i);
    let rect = singleRect(range, 1);
    if (rect.top == rect.bottom) continue;
    if (inRect(coords, rect)) return {
      node,
      offset: i + (coords.left >= (rect.left + rect.right) / 2 ? 1 : 0)
    };
  }
  return {
    node,
    offset: 0
  };
}
function inRect(coords, rect) {
  return coords.left >= rect.left - 1 && coords.left <= rect.right + 1 && coords.top >= rect.top - 1 && coords.top <= rect.bottom + 1;
}
function targetKludge(dom, coords) {
  let parent = dom.parentNode;
  if (parent && /^li$/i.test(parent.nodeName) && coords.left < dom.getBoundingClientRect().left) return parent;
  return dom;
}
function posFromElement(view, elt, coords) {
  let {
    node,
    offset: offset3
  } = findOffsetInNode(elt, coords), bias = -1;
  if (node.nodeType == 1 && !node.firstChild) {
    let rect = node.getBoundingClientRect();
    bias = rect.left != rect.right && coords.left > (rect.left + rect.right) / 2 ? 1 : -1;
  }
  return view.docView.posFromDOM(node, offset3, bias);
}
function posFromCaret(view, node, offset3, coords) {
  let outsideBlock = -1;
  for (let cur = node, sawBlock = false; ; ) {
    if (cur == view.dom) break;
    let desc = view.docView.nearestDesc(cur, true), rect;
    if (!desc) return null;
    if (desc.dom.nodeType == 1 && (desc.node.isBlock && desc.parent || !desc.contentDOM) && // Ignore elements with zero-size bounding rectangles
    ((rect = desc.dom.getBoundingClientRect()).width || rect.height)) {
      if (desc.node.isBlock && desc.parent && !/^T(R|BODY|HEAD|FOOT)$/.test(desc.dom.nodeName)) {
        if (!sawBlock && rect.left > coords.left || rect.top > coords.top) outsideBlock = desc.posBefore;
        else if (!sawBlock && rect.right < coords.left || rect.bottom < coords.top) outsideBlock = desc.posAfter;
        sawBlock = true;
      }
      if (!desc.contentDOM && outsideBlock < 0 && !desc.node.isText) {
        let before = desc.node.isBlock ? coords.top < (rect.top + rect.bottom) / 2 : coords.left < (rect.left + rect.right) / 2;
        return before ? desc.posBefore : desc.posAfter;
      }
    }
    cur = desc.dom.parentNode;
  }
  return outsideBlock > -1 ? outsideBlock : view.docView.posFromDOM(node, offset3, -1);
}
function elementFromPoint(element, coords, box) {
  let len = element.childNodes.length;
  if (len && box.top < box.bottom) {
    for (let startI = Math.max(0, Math.min(len - 1, Math.floor(len * (coords.top - box.top) / (box.bottom - box.top)) - 2)), i = startI; ; ) {
      let child = element.childNodes[i];
      if (child.nodeType == 1) {
        let rects = child.getClientRects();
        for (let j = 0; j < rects.length; j++) {
          let rect = rects[j];
          if (inRect(coords, rect)) return elementFromPoint(child, coords, rect);
        }
      }
      if ((i = (i + 1) % len) == startI) break;
    }
  }
  return element;
}
function posAtCoords(view, coords) {
  let doc4 = view.dom.ownerDocument, node, offset3 = 0;
  let caret = caretFromPoint(doc4, coords.left, coords.top);
  if (caret) ({
    node,
    offset: offset3
  } = caret);
  let elt = (view.root.elementFromPoint ? view.root : doc4).elementFromPoint(coords.left, coords.top);
  let pos;
  if (!elt || !view.dom.contains(elt.nodeType != 1 ? elt.parentNode : elt)) {
    let box = view.dom.getBoundingClientRect();
    if (!inRect(coords, box)) return null;
    elt = elementFromPoint(view.dom, coords, box);
    if (!elt) return null;
  }
  if (safari) {
    for (let p = elt; node && p; p = parentNode(p)) if (p.draggable) node = void 0;
  }
  elt = targetKludge(elt, coords);
  if (node) {
    if (gecko && node.nodeType == 1) {
      offset3 = Math.min(offset3, node.childNodes.length);
      if (offset3 < node.childNodes.length) {
        let next = node.childNodes[offset3], box;
        if (next.nodeName == "IMG" && (box = next.getBoundingClientRect()).right <= coords.left && box.bottom > coords.top) offset3++;
      }
    }
    let prev;
    if (webkit && offset3 && node.nodeType == 1 && (prev = node.childNodes[offset3 - 1]).nodeType == 1 && prev.contentEditable == "false" && prev.getBoundingClientRect().top >= coords.top) offset3--;
    if (node == view.dom && offset3 == node.childNodes.length - 1 && node.lastChild.nodeType == 1 && coords.top > node.lastChild.getBoundingClientRect().bottom) pos = view.state.doc.content.size;
    else if (offset3 == 0 || node.nodeType != 1 || node.childNodes[offset3 - 1].nodeName != "BR") pos = posFromCaret(view, node, offset3, coords);
  }
  if (pos == null) pos = posFromElement(view, elt, coords);
  let desc = view.docView.nearestDesc(elt, true);
  return {
    pos,
    inside: desc ? desc.posAtStart - desc.border : -1
  };
}
function nonZero(rect) {
  return rect.top < rect.bottom || rect.left < rect.right;
}
function singleRect(target, bias) {
  let rects = target.getClientRects();
  if (rects.length) {
    let first = rects[bias < 0 ? 0 : rects.length - 1];
    if (nonZero(first)) return first;
  }
  return Array.prototype.find.call(rects, nonZero) || target.getBoundingClientRect();
}
var BIDI = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function coordsAtPos(view, pos, side) {
  let {
    node,
    offset: offset3,
    atom
  } = view.docView.domFromPos(pos, side < 0 ? -1 : 1);
  let supportEmptyRange = webkit || gecko;
  if (node.nodeType == 3) {
    if (supportEmptyRange && (BIDI.test(node.nodeValue) || (side < 0 ? !offset3 : offset3 == node.nodeValue.length))) {
      let rect = singleRect(textRange(node, offset3, offset3), side);
      if (gecko && offset3 && /\s/.test(node.nodeValue[offset3 - 1]) && offset3 < node.nodeValue.length) {
        let rectBefore = singleRect(textRange(node, offset3 - 1, offset3 - 1), -1);
        if (rectBefore.top == rect.top) {
          let rectAfter = singleRect(textRange(node, offset3, offset3 + 1), -1);
          if (rectAfter.top != rect.top) return flattenV(rectAfter, rectAfter.left < rectBefore.left);
        }
      }
      return rect;
    } else {
      let from2 = offset3, to = offset3, takeSide = side < 0 ? 1 : -1;
      if (side < 0 && !offset3) {
        to++;
        takeSide = -1;
      } else if (side >= 0 && offset3 == node.nodeValue.length) {
        from2--;
        takeSide = 1;
      } else if (side < 0) {
        from2--;
      } else {
        to++;
      }
      return flattenV(singleRect(textRange(node, from2, to), takeSide), takeSide < 0);
    }
  }
  let $dom = view.state.doc.resolve(pos - (atom || 0));
  if (!$dom.parent.inlineContent) {
    if (atom == null && offset3 && (side < 0 || offset3 == nodeSize(node))) {
      let before = node.childNodes[offset3 - 1];
      if (before.nodeType == 1) return flattenH(before.getBoundingClientRect(), false);
    }
    if (atom == null && offset3 < nodeSize(node)) {
      let after = node.childNodes[offset3];
      if (after.nodeType == 1) return flattenH(after.getBoundingClientRect(), true);
    }
    return flattenH(node.getBoundingClientRect(), side >= 0);
  }
  if (atom == null && offset3 && (side < 0 || offset3 == nodeSize(node))) {
    let before = node.childNodes[offset3 - 1];
    let target = before.nodeType == 3 ? textRange(before, nodeSize(before) - (supportEmptyRange ? 0 : 1)) : before.nodeType == 1 && (before.nodeName != "BR" || !before.nextSibling) ? before : null;
    if (target) return flattenV(singleRect(target, 1), false);
  }
  if (atom == null && offset3 < nodeSize(node)) {
    let after = node.childNodes[offset3];
    while (after.pmViewDesc && after.pmViewDesc.ignoreForCoords) after = after.nextSibling;
    let target = !after ? null : after.nodeType == 3 ? textRange(after, 0, supportEmptyRange ? 0 : 1) : after.nodeType == 1 ? after : null;
    if (target) return flattenV(singleRect(target, -1), true);
  }
  return flattenV(singleRect(node.nodeType == 3 ? textRange(node) : node, -side), side >= 0);
}
function flattenV(rect, left) {
  if (rect.width == 0) return rect;
  let x = left ? rect.left : rect.right;
  return {
    top: rect.top,
    bottom: rect.bottom,
    left: x,
    right: x
  };
}
function flattenH(rect, top) {
  if (rect.height == 0) return rect;
  let y = top ? rect.top : rect.bottom;
  return {
    top: y,
    bottom: y,
    left: rect.left,
    right: rect.right
  };
}
function withFlushedState(view, state2, f) {
  let viewState = view.state, active = view.root.activeElement;
  if (viewState != state2) view.updateState(state2);
  if (active != view.dom) view.focus();
  try {
    return f();
  } finally {
    if (viewState != state2) view.updateState(viewState);
    if (active != view.dom && active) active.focus();
  }
}
function endOfTextblockVertical(view, state2, dir) {
  let sel = state2.selection;
  let $pos = dir == "up" ? sel.$from : sel.$to;
  return withFlushedState(view, state2, () => {
    let {
      node: dom
    } = view.docView.domFromPos($pos.pos, dir == "up" ? -1 : 1);
    for (; ; ) {
      let nearest = view.docView.nearestDesc(dom, true);
      if (!nearest) break;
      if (nearest.node.isBlock) {
        dom = nearest.contentDOM || nearest.dom;
        break;
      }
      dom = nearest.dom.parentNode;
    }
    let coords = coordsAtPos(view, $pos.pos, 1);
    for (let child = dom.firstChild; child; child = child.nextSibling) {
      let boxes;
      if (child.nodeType == 1) boxes = child.getClientRects();
      else if (child.nodeType == 3) boxes = textRange(child, 0, child.nodeValue.length).getClientRects();
      else continue;
      for (let i = 0; i < boxes.length; i++) {
        let box = boxes[i];
        if (box.bottom > box.top + 1 && (dir == "up" ? coords.top - box.top > (box.bottom - coords.top) * 2 : box.bottom - coords.bottom > (coords.bottom - box.top) * 2)) return false;
      }
    }
    return true;
  });
}
var maybeRTL = /[\u0590-\u08ac]/;
function endOfTextblockHorizontal(view, state2, dir) {
  let {
    $head
  } = state2.selection;
  if (!$head.parent.isTextblock) return false;
  let offset3 = $head.parentOffset, atStart = !offset3, atEnd = offset3 == $head.parent.content.size;
  let sel = view.domSelection();
  if (!sel) return $head.pos == $head.start() || $head.pos == $head.end();
  if (!maybeRTL.test($head.parent.textContent) || !sel.modify) return dir == "left" || dir == "backward" ? atStart : atEnd;
  return withFlushedState(view, state2, () => {
    let {
      focusNode: oldNode,
      focusOffset: oldOff,
      anchorNode,
      anchorOffset
    } = view.domSelectionRange();
    let oldBidiLevel = sel.caretBidiLevel;
    sel.modify("move", dir, "character");
    let parentDOM = $head.depth ? view.docView.domAfterPos($head.before()) : view.dom;
    let {
      focusNode: newNode,
      focusOffset: newOff
    } = view.domSelectionRange();
    let result = newNode && !parentDOM.contains(newNode.nodeType == 1 ? newNode : newNode.parentNode) || oldNode == newNode && oldOff == newOff;
    try {
      sel.collapse(anchorNode, anchorOffset);
      if (oldNode && (oldNode != anchorNode || oldOff != anchorOffset) && sel.extend) sel.extend(oldNode, oldOff);
    } catch (_) {
    }
    if (oldBidiLevel != null) sel.caretBidiLevel = oldBidiLevel;
    return result;
  });
}
var cachedState = null;
var cachedDir = null;
var cachedResult = false;
function endOfTextblock(view, state2, dir) {
  if (cachedState == state2 && cachedDir == dir) return cachedResult;
  cachedState = state2;
  cachedDir = dir;
  return cachedResult = dir == "up" || dir == "down" ? endOfTextblockVertical(view, state2, dir) : endOfTextblockHorizontal(view, state2, dir);
}
var NOT_DIRTY = 0;
var CHILD_DIRTY = 1;
var CONTENT_DIRTY = 2;
var NODE_DIRTY = 3;
var ViewDesc = class {
  constructor(parent, children, dom, contentDOM) {
    this.parent = parent;
    this.children = children;
    this.dom = dom;
    this.contentDOM = contentDOM;
    this.dirty = NOT_DIRTY;
    dom.pmViewDesc = this;
  }
  // Used to check whether a given description corresponds to a
  // widget/mark/node.
  matchesWidget(widget) {
    return false;
  }
  matchesMark(mark) {
    return false;
  }
  matchesNode(node, outerDeco, innerDeco) {
    return false;
  }
  matchesHack(nodeName) {
    return false;
  }
  // When parsing in-editor content (in domchange.js), we allow
  // descriptions to determine the parse rules that should be used to
  // parse them.
  parseRule() {
    return null;
  }
  // Used by the editor's event handler to ignore events that come
  // from certain descs.
  stopEvent(event) {
    return false;
  }
  // The size of the content represented by this desc.
  get size() {
    let size2 = 0;
    for (let i = 0; i < this.children.length; i++) size2 += this.children[i].size;
    return size2;
  }
  // For block nodes, this represents the space taken up by their
  // start/end tokens.
  get border() {
    return 0;
  }
  destroy() {
    this.parent = void 0;
    if (this.dom.pmViewDesc == this) this.dom.pmViewDesc = void 0;
    for (let i = 0; i < this.children.length; i++) this.children[i].destroy();
  }
  posBeforeChild(child) {
    for (let i = 0, pos = this.posAtStart; ; i++) {
      let cur = this.children[i];
      if (cur == child) return pos;
      pos += cur.size;
    }
  }
  get posBefore() {
    return this.parent.posBeforeChild(this);
  }
  get posAtStart() {
    return this.parent ? this.parent.posBeforeChild(this) + this.border : 0;
  }
  get posAfter() {
    return this.posBefore + this.size;
  }
  get posAtEnd() {
    return this.posAtStart + this.size - 2 * this.border;
  }
  localPosFromDOM(dom, offset3, bias) {
    if (this.contentDOM && this.contentDOM.contains(dom.nodeType == 1 ? dom : dom.parentNode)) {
      if (bias < 0) {
        let domBefore, desc;
        if (dom == this.contentDOM) {
          domBefore = dom.childNodes[offset3 - 1];
        } else {
          while (dom.parentNode != this.contentDOM) dom = dom.parentNode;
          domBefore = dom.previousSibling;
        }
        while (domBefore && !((desc = domBefore.pmViewDesc) && desc.parent == this)) domBefore = domBefore.previousSibling;
        return domBefore ? this.posBeforeChild(desc) + desc.size : this.posAtStart;
      } else {
        let domAfter, desc;
        if (dom == this.contentDOM) {
          domAfter = dom.childNodes[offset3];
        } else {
          while (dom.parentNode != this.contentDOM) dom = dom.parentNode;
          domAfter = dom.nextSibling;
        }
        while (domAfter && !((desc = domAfter.pmViewDesc) && desc.parent == this)) domAfter = domAfter.nextSibling;
        return domAfter ? this.posBeforeChild(desc) : this.posAtEnd;
      }
    }
    let atEnd;
    if (dom == this.dom && this.contentDOM) {
      atEnd = offset3 > domIndex(this.contentDOM);
    } else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM)) {
      atEnd = dom.compareDocumentPosition(this.contentDOM) & 2;
    } else if (this.dom.firstChild) {
      if (offset3 == 0) for (let search = dom; ; search = search.parentNode) {
        if (search == this.dom) {
          atEnd = false;
          break;
        }
        if (search.previousSibling) break;
      }
      if (atEnd == null && offset3 == dom.childNodes.length) for (let search = dom; ; search = search.parentNode) {
        if (search == this.dom) {
          atEnd = true;
          break;
        }
        if (search.nextSibling) break;
      }
    }
    return (atEnd == null ? bias > 0 : atEnd) ? this.posAtEnd : this.posAtStart;
  }
  nearestDesc(dom, onlyNodes = false) {
    for (let first = true, cur = dom; cur; cur = cur.parentNode) {
      let desc = this.getDesc(cur), nodeDOM;
      if (desc && (!onlyNodes || desc.node)) {
        if (first && (nodeDOM = desc.nodeDOM) && !(nodeDOM.nodeType == 1 ? nodeDOM.contains(dom.nodeType == 1 ? dom : dom.parentNode) : nodeDOM == dom)) first = false;
        else return desc;
      }
    }
  }
  getDesc(dom) {
    let desc = dom.pmViewDesc;
    for (let cur = desc; cur; cur = cur.parent) if (cur == this) return desc;
  }
  posFromDOM(dom, offset3, bias) {
    for (let scan = dom; scan; scan = scan.parentNode) {
      let desc = this.getDesc(scan);
      if (desc) return desc.localPosFromDOM(dom, offset3, bias);
    }
    return -1;
  }
  // Find the desc for the node after the given pos, if any. (When a
  // parent node overrode rendering, there might not be one.)
  descAt(pos) {
    for (let i = 0, offset3 = 0; i < this.children.length; i++) {
      let child = this.children[i], end = offset3 + child.size;
      if (offset3 == pos && end != offset3) {
        while (!child.border && child.children.length) {
          for (let i2 = 0; i2 < child.children.length; i2++) {
            let inner = child.children[i2];
            if (inner.size) {
              child = inner;
              break;
            }
          }
        }
        return child;
      }
      if (pos < end) return child.descAt(pos - offset3 - child.border);
      offset3 = end;
    }
  }
  domFromPos(pos, side) {
    if (!this.contentDOM) return {
      node: this.dom,
      offset: 0,
      atom: pos + 1
    };
    let i = 0, offset3 = 0;
    for (let curPos = 0; i < this.children.length; i++) {
      let child = this.children[i], end = curPos + child.size;
      if (end > pos || child instanceof TrailingHackViewDesc) {
        offset3 = pos - curPos;
        break;
      }
      curPos = end;
    }
    if (offset3) return this.children[i].domFromPos(offset3 - this.children[i].border, side);
    for (let prev; i && !(prev = this.children[i - 1]).size && prev instanceof WidgetViewDesc && prev.side >= 0; i--) {
    }
    if (side <= 0) {
      let prev, enter = true;
      for (; ; i--, enter = false) {
        prev = i ? this.children[i - 1] : null;
        if (!prev || prev.dom.parentNode == this.contentDOM) break;
      }
      if (prev && side && enter && !prev.border && !prev.domAtom) return prev.domFromPos(prev.size, side);
      return {
        node: this.contentDOM,
        offset: prev ? domIndex(prev.dom) + 1 : 0
      };
    } else {
      let next, enter = true;
      for (; ; i++, enter = false) {
        next = i < this.children.length ? this.children[i] : null;
        if (!next || next.dom.parentNode == this.contentDOM) break;
      }
      if (next && enter && !next.border && !next.domAtom) return next.domFromPos(0, side);
      return {
        node: this.contentDOM,
        offset: next ? domIndex(next.dom) : this.contentDOM.childNodes.length
      };
    }
  }
  // Used to find a DOM range in a single parent for a given changed
  // range.
  parseRange(from2, to, base2 = 0) {
    if (this.children.length == 0) return {
      node: this.contentDOM,
      from: from2,
      to,
      fromOffset: 0,
      toOffset: this.contentDOM.childNodes.length
    };
    let fromOffset = -1, toOffset = -1;
    for (let offset3 = base2, i = 0; ; i++) {
      let child = this.children[i], end = offset3 + child.size;
      if (fromOffset == -1 && from2 <= end) {
        let childBase = offset3 + child.border;
        if (from2 >= childBase && to <= end - child.border && child.node && child.contentDOM && this.contentDOM.contains(child.contentDOM)) return child.parseRange(from2, to, childBase);
        from2 = offset3;
        for (let j = i; j > 0; j--) {
          let prev = this.children[j - 1];
          if (prev.size && prev.dom.parentNode == this.contentDOM && !prev.emptyChildAt(1)) {
            fromOffset = domIndex(prev.dom) + 1;
            break;
          }
          from2 -= prev.size;
        }
        if (fromOffset == -1) fromOffset = 0;
      }
      if (fromOffset > -1 && (end > to || i == this.children.length - 1)) {
        to = end;
        for (let j = i + 1; j < this.children.length; j++) {
          let next = this.children[j];
          if (next.size && next.dom.parentNode == this.contentDOM && !next.emptyChildAt(-1)) {
            toOffset = domIndex(next.dom);
            break;
          }
          to += next.size;
        }
        if (toOffset == -1) toOffset = this.contentDOM.childNodes.length;
        break;
      }
      offset3 = end;
    }
    return {
      node: this.contentDOM,
      from: from2,
      to,
      fromOffset,
      toOffset
    };
  }
  emptyChildAt(side) {
    if (this.border || !this.contentDOM || !this.children.length) return false;
    let child = this.children[side < 0 ? 0 : this.children.length - 1];
    return child.size == 0 || child.emptyChildAt(side);
  }
  domAfterPos(pos) {
    let {
      node,
      offset: offset3
    } = this.domFromPos(pos, 0);
    if (node.nodeType != 1 || offset3 == node.childNodes.length) throw new RangeError("No node after pos " + pos);
    return node.childNodes[offset3];
  }
  // View descs are responsible for setting any selection that falls
  // entirely inside of them, so that custom implementations can do
  // custom things with the selection. Note that this falls apart when
  // a selection starts in such a node and ends in another, in which
  // case we just use whatever domFromPos produces as a best effort.
  setSelection(anchor, head, view, force = false) {
    let from2 = Math.min(anchor, head), to = Math.max(anchor, head);
    for (let i = 0, offset3 = 0; i < this.children.length; i++) {
      let child = this.children[i], end = offset3 + child.size;
      if (from2 > offset3 && to < end) return child.setSelection(anchor - offset3 - child.border, head - offset3 - child.border, view, force);
      offset3 = end;
    }
    let anchorDOM = this.domFromPos(anchor, anchor ? -1 : 1);
    let headDOM = head == anchor ? anchorDOM : this.domFromPos(head, head ? -1 : 1);
    let domSel = view.root.getSelection();
    let selRange = view.domSelectionRange();
    let brKludge = false;
    if ((gecko || safari) && anchor == head) {
      let {
        node,
        offset: offset3
      } = anchorDOM;
      if (node.nodeType == 3) {
        brKludge = !!(offset3 && node.nodeValue[offset3 - 1] == "\n");
        if (brKludge && offset3 == node.nodeValue.length) {
          for (let scan = node, after; scan; scan = scan.parentNode) {
            if (after = scan.nextSibling) {
              if (after.nodeName == "BR") anchorDOM = headDOM = {
                node: after.parentNode,
                offset: domIndex(after) + 1
              };
              break;
            }
            let desc = scan.pmViewDesc;
            if (desc && desc.node && desc.node.isBlock) break;
          }
        }
      } else {
        let prev = node.childNodes[offset3 - 1];
        brKludge = prev && (prev.nodeName == "BR" || prev.contentEditable == "false");
      }
    }
    if (gecko && selRange.focusNode && selRange.focusNode != headDOM.node && selRange.focusNode.nodeType == 1) {
      let after = selRange.focusNode.childNodes[selRange.focusOffset];
      if (after && after.contentEditable == "false") force = true;
    }
    if (!(force || brKludge && safari) && isEquivalentPosition(anchorDOM.node, anchorDOM.offset, selRange.anchorNode, selRange.anchorOffset) && isEquivalentPosition(headDOM.node, headDOM.offset, selRange.focusNode, selRange.focusOffset)) return;
    let domSelExtended = false;
    if ((domSel.extend || anchor == head) && !(brKludge && gecko)) {
      domSel.collapse(anchorDOM.node, anchorDOM.offset);
      try {
        if (anchor != head) domSel.extend(headDOM.node, headDOM.offset);
        domSelExtended = true;
      } catch (_) {
      }
    }
    if (!domSelExtended) {
      if (anchor > head) {
        let tmp = anchorDOM;
        anchorDOM = headDOM;
        headDOM = tmp;
      }
      let range = document.createRange();
      range.setEnd(headDOM.node, headDOM.offset);
      range.setStart(anchorDOM.node, anchorDOM.offset);
      domSel.removeAllRanges();
      domSel.addRange(range);
    }
  }
  ignoreMutation(mutation) {
    return !this.contentDOM && mutation.type != "selection";
  }
  get contentLost() {
    return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM);
  }
  // Remove a subtree of the element tree that has been touched
  // by a DOM change, so that the next update will redraw it.
  markDirty(from2, to) {
    for (let offset3 = 0, i = 0; i < this.children.length; i++) {
      let child = this.children[i], end = offset3 + child.size;
      if (offset3 == end ? from2 <= end && to >= offset3 : from2 < end && to > offset3) {
        let startInside = offset3 + child.border, endInside = end - child.border;
        if (from2 >= startInside && to <= endInside) {
          this.dirty = from2 == offset3 || to == end ? CONTENT_DIRTY : CHILD_DIRTY;
          if (from2 == startInside && to == endInside && (child.contentLost || child.dom.parentNode != this.contentDOM)) child.dirty = NODE_DIRTY;
          else child.markDirty(from2 - startInside, to - startInside);
          return;
        } else {
          child.dirty = child.dom == child.contentDOM && child.dom.parentNode == this.contentDOM && !child.children.length ? CONTENT_DIRTY : NODE_DIRTY;
        }
      }
      offset3 = end;
    }
    this.dirty = CONTENT_DIRTY;
  }
  markParentsDirty() {
    let level = 1;
    for (let node = this.parent; node; node = node.parent, level++) {
      let dirty = level == 1 ? CONTENT_DIRTY : CHILD_DIRTY;
      if (node.dirty < dirty) node.dirty = dirty;
    }
  }
  get domAtom() {
    return false;
  }
  get ignoreForCoords() {
    return false;
  }
  get ignoreForSelection() {
    return false;
  }
  isText(text2) {
    return false;
  }
};
var WidgetViewDesc = class extends ViewDesc {
  constructor(parent, widget, view, pos) {
    let self, dom = widget.type.toDOM;
    if (typeof dom == "function") dom = dom(view, () => {
      if (!self) return pos;
      if (self.parent) return self.parent.posBeforeChild(self);
    });
    if (!widget.type.spec.raw) {
      if (dom.nodeType != 1) {
        let wrap2 = document.createElement("span");
        wrap2.appendChild(dom);
        dom = wrap2;
      }
      dom.contentEditable = "false";
      dom.classList.add("ProseMirror-widget");
    }
    super(parent, [], dom, null);
    this.widget = widget;
    this.widget = widget;
    self = this;
  }
  matchesWidget(widget) {
    return this.dirty == NOT_DIRTY && widget.type.eq(this.widget.type);
  }
  parseRule() {
    return {
      ignore: true
    };
  }
  stopEvent(event) {
    let stop = this.widget.spec.stopEvent;
    return stop ? stop(event) : false;
  }
  ignoreMutation(mutation) {
    return mutation.type != "selection" || this.widget.spec.ignoreSelection;
  }
  destroy() {
    this.widget.type.destroy(this.dom);
    super.destroy();
  }
  get domAtom() {
    return true;
  }
  get ignoreForSelection() {
    return !!this.widget.type.spec.relaxedSide;
  }
  get side() {
    return this.widget.type.side;
  }
};
var CompositionViewDesc = class extends ViewDesc {
  constructor(parent, dom, textDOM, text2) {
    super(parent, [], dom, null);
    this.textDOM = textDOM;
    this.text = text2;
  }
  get size() {
    return this.text.length;
  }
  localPosFromDOM(dom, offset3) {
    if (dom != this.textDOM) return this.posAtStart + (offset3 ? this.size : 0);
    return this.posAtStart + offset3;
  }
  domFromPos(pos) {
    return {
      node: this.textDOM,
      offset: pos
    };
  }
  ignoreMutation(mut) {
    return mut.type === "characterData" && mut.target.nodeValue == mut.oldValue;
  }
};
var MarkViewDesc = class _MarkViewDesc extends ViewDesc {
  constructor(parent, mark, dom, contentDOM, spec) {
    super(parent, [], dom, contentDOM);
    this.mark = mark;
    this.spec = spec;
  }
  static create(parent, mark, inline2, view) {
    let custom = view.nodeViews[mark.type.name];
    let spec = custom && custom(mark, view, inline2);
    if (!spec || !spec.dom) spec = DOMSerializer.renderSpec(document, mark.type.spec.toDOM(mark, inline2), null, mark.attrs);
    return new _MarkViewDesc(parent, mark, spec.dom, spec.contentDOM || spec.dom, spec);
  }
  parseRule() {
    if (this.dirty & NODE_DIRTY || this.mark.type.spec.reparseInView) return null;
    return {
      mark: this.mark.type.name,
      attrs: this.mark.attrs,
      contentElement: this.contentDOM
    };
  }
  matchesMark(mark) {
    return this.dirty != NODE_DIRTY && this.mark.eq(mark);
  }
  markDirty(from2, to) {
    super.markDirty(from2, to);
    if (this.dirty != NOT_DIRTY) {
      let parent = this.parent;
      while (!parent.node) parent = parent.parent;
      if (parent.dirty < this.dirty) parent.dirty = this.dirty;
      this.dirty = NOT_DIRTY;
    }
  }
  slice(from2, to, view) {
    let copy2 = _MarkViewDesc.create(this.parent, this.mark, true, view);
    let nodes2 = this.children, size2 = this.size;
    if (to < size2) nodes2 = replaceNodes(nodes2, to, size2, view);
    if (from2 > 0) nodes2 = replaceNodes(nodes2, 0, from2, view);
    for (let i = 0; i < nodes2.length; i++) nodes2[i].parent = copy2;
    copy2.children = nodes2;
    return copy2;
  }
  ignoreMutation(mutation) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(mutation) : super.ignoreMutation(mutation);
  }
  destroy() {
    if (this.spec.destroy) this.spec.destroy();
    super.destroy();
  }
};
var NodeViewDesc = class _NodeViewDesc extends ViewDesc {
  constructor(parent, node, outerDeco, innerDeco, dom, contentDOM, nodeDOM, view, pos) {
    super(parent, [], dom, contentDOM);
    this.node = node;
    this.outerDeco = outerDeco;
    this.innerDeco = innerDeco;
    this.nodeDOM = nodeDOM;
  }
  // By default, a node is rendered using the `toDOM` method from the
  // node type spec. But client code can use the `nodeViews` spec to
  // supply a custom node view, which can influence various aspects of
  // the way the node works.
  //
  // (Using subclassing for this was intentionally decided against,
  // since it'd require exposing a whole slew of finicky
  // implementation details to the user code that they probably will
  // never need.)
  static create(parent, node, outerDeco, innerDeco, view, pos) {
    let custom = view.nodeViews[node.type.name], descObj;
    let spec = custom && custom(node, view, () => {
      if (!descObj) return pos;
      if (descObj.parent) return descObj.parent.posBeforeChild(descObj);
    }, outerDeco, innerDeco);
    let dom = spec && spec.dom, contentDOM = spec && spec.contentDOM;
    if (node.isText) {
      if (!dom) dom = document.createTextNode(node.text);
      else if (dom.nodeType != 3) throw new RangeError("Text must be rendered as a DOM text node");
    } else if (!dom) {
      let spec2 = DOMSerializer.renderSpec(document, node.type.spec.toDOM(node), null, node.attrs);
      ({
        dom,
        contentDOM
      } = spec2);
    }
    if (!contentDOM && !node.isText && dom.nodeName != "BR") {
      if (!dom.hasAttribute("contenteditable")) dom.contentEditable = "false";
      if (node.type.spec.draggable) dom.draggable = true;
    }
    let nodeDOM = dom;
    dom = applyOuterDeco(dom, outerDeco, node);
    if (spec) return descObj = new CustomNodeViewDesc(parent, node, outerDeco, innerDeco, dom, contentDOM || null, nodeDOM, spec, view, pos + 1);
    else if (node.isText) return new TextViewDesc(parent, node, outerDeco, innerDeco, dom, nodeDOM, view);
    else return new _NodeViewDesc(parent, node, outerDeco, innerDeco, dom, contentDOM || null, nodeDOM, view, pos + 1);
  }
  parseRule() {
    if (this.node.type.spec.reparseInView) return null;
    let rule = {
      node: this.node.type.name,
      attrs: this.node.attrs
    };
    if (this.node.type.whitespace == "pre") rule.preserveWhitespace = "full";
    if (!this.contentDOM) {
      rule.getContent = () => this.node.content;
    } else if (!this.contentLost) {
      rule.contentElement = this.contentDOM;
    } else {
      for (let i = this.children.length - 1; i >= 0; i--) {
        let child = this.children[i];
        if (this.dom.contains(child.dom.parentNode)) {
          rule.contentElement = child.dom.parentNode;
          break;
        }
      }
      if (!rule.contentElement) rule.getContent = () => Fragment.empty;
    }
    return rule;
  }
  matchesNode(node, outerDeco, innerDeco) {
    return this.dirty == NOT_DIRTY && node.eq(this.node) && sameOuterDeco(outerDeco, this.outerDeco) && innerDeco.eq(this.innerDeco);
  }
  get size() {
    return this.node.nodeSize;
  }
  get border() {
    return this.node.isLeaf ? 0 : 1;
  }
  // Syncs `this.children` to match `this.node.content` and the local
  // decorations, possibly introducing nesting for marks. Then, in a
  // separate step, syncs the DOM inside `this.contentDOM` to
  // `this.children`.
  updateChildren(view, pos) {
    let inline2 = this.node.inlineContent, off = pos;
    let composition = view.composing ? this.localCompositionInfo(view, pos) : null;
    let localComposition = composition && composition.pos > -1 ? composition : null;
    let compositionInChild = composition && composition.pos < 0;
    let updater = new ViewTreeUpdater(this, localComposition && localComposition.node, view);
    iterDeco(this.node, this.innerDeco, (widget, i, insideNode) => {
      if (widget.spec.marks) updater.syncToMarks(widget.spec.marks, inline2, view);
      else if (widget.type.side >= 0 && !insideNode) updater.syncToMarks(i == this.node.childCount ? Mark.none : this.node.child(i).marks, inline2, view);
      updater.placeWidget(widget, view, off);
    }, (child, outerDeco, innerDeco, i) => {
      updater.syncToMarks(child.marks, inline2, view);
      let compIndex;
      if (updater.findNodeMatch(child, outerDeco, innerDeco, i)) ;
      else if (compositionInChild && view.state.selection.from > off && view.state.selection.to < off + child.nodeSize && (compIndex = updater.findIndexWithChild(composition.node)) > -1 && updater.updateNodeAt(child, outerDeco, innerDeco, compIndex, view)) ;
      else if (updater.updateNextNode(child, outerDeco, innerDeco, view, i, off)) ;
      else {
        updater.addNode(child, outerDeco, innerDeco, view, off);
      }
      off += child.nodeSize;
    });
    updater.syncToMarks([], inline2, view);
    if (this.node.isTextblock) updater.addTextblockHacks();
    updater.destroyRest();
    if (updater.changed || this.dirty == CONTENT_DIRTY) {
      if (localComposition) this.protectLocalComposition(view, localComposition);
      renderDescs(this.contentDOM, this.children, view);
      if (ios) iosHacks(this.dom);
    }
  }
  localCompositionInfo(view, pos) {
    let {
      from: from2,
      to
    } = view.state.selection;
    if (!(view.state.selection instanceof TextSelection) || from2 < pos || to > pos + this.node.content.size) return null;
    let textNode = view.input.compositionNode;
    if (!textNode || !this.dom.contains(textNode.parentNode)) return null;
    if (this.node.inlineContent) {
      let text2 = textNode.nodeValue;
      let textPos = findTextInFragment(this.node.content, text2, from2 - pos, to - pos);
      return textPos < 0 ? null : {
        node: textNode,
        pos: textPos,
        text: text2
      };
    } else {
      return {
        node: textNode,
        pos: -1,
        text: ""
      };
    }
  }
  protectLocalComposition(view, {
    node,
    pos,
    text: text2
  }) {
    if (this.getDesc(node)) return;
    let topNode = node;
    for (; ; topNode = topNode.parentNode) {
      if (topNode.parentNode == this.contentDOM) break;
      while (topNode.previousSibling) topNode.parentNode.removeChild(topNode.previousSibling);
      while (topNode.nextSibling) topNode.parentNode.removeChild(topNode.nextSibling);
      if (topNode.pmViewDesc) topNode.pmViewDesc = void 0;
    }
    let desc = new CompositionViewDesc(this, topNode, node, text2);
    view.input.compositionNodes.push(desc);
    this.children = replaceNodes(this.children, pos, pos + text2.length, view, desc);
  }
  // If this desc must be updated to match the given node decoration,
  // do so and return true.
  update(node, outerDeco, innerDeco, view) {
    if (this.dirty == NODE_DIRTY || !node.sameMarkup(this.node)) return false;
    this.updateInner(node, outerDeco, innerDeco, view);
    return true;
  }
  updateInner(node, outerDeco, innerDeco, view) {
    this.updateOuterDeco(outerDeco);
    this.node = node;
    this.innerDeco = innerDeco;
    if (this.contentDOM) this.updateChildren(view, this.posAtStart);
    this.dirty = NOT_DIRTY;
  }
  updateOuterDeco(outerDeco) {
    if (sameOuterDeco(outerDeco, this.outerDeco)) return;
    let needsWrap = this.nodeDOM.nodeType != 1;
    let oldDOM = this.dom;
    this.dom = patchOuterDeco(this.dom, this.nodeDOM, computeOuterDeco(this.outerDeco, this.node, needsWrap), computeOuterDeco(outerDeco, this.node, needsWrap));
    if (this.dom != oldDOM) {
      oldDOM.pmViewDesc = void 0;
      this.dom.pmViewDesc = this;
    }
    this.outerDeco = outerDeco;
  }
  // Mark this node as being the selected node.
  selectNode() {
    if (this.nodeDOM.nodeType == 1) {
      this.nodeDOM.classList.add("ProseMirror-selectednode");
      if (this.contentDOM || !this.node.type.spec.draggable) this.nodeDOM.draggable = true;
    }
  }
  // Remove selected node marking from this node.
  deselectNode() {
    if (this.nodeDOM.nodeType == 1) {
      this.nodeDOM.classList.remove("ProseMirror-selectednode");
      if (this.contentDOM || !this.node.type.spec.draggable) this.nodeDOM.removeAttribute("draggable");
    }
  }
  get domAtom() {
    return this.node.isAtom;
  }
};
function docViewDesc(doc4, outerDeco, innerDeco, dom, view) {
  applyOuterDeco(dom, outerDeco, doc4);
  let docView = new NodeViewDesc(void 0, doc4, outerDeco, innerDeco, dom, dom, dom, view, 0);
  if (docView.contentDOM) docView.updateChildren(view, 0);
  return docView;
}
var TextViewDesc = class _TextViewDesc extends NodeViewDesc {
  constructor(parent, node, outerDeco, innerDeco, dom, nodeDOM, view) {
    super(parent, node, outerDeco, innerDeco, dom, null, nodeDOM, view, 0);
  }
  parseRule() {
    let skip = this.nodeDOM.parentNode;
    while (skip && skip != this.dom && !skip.pmIsDeco) skip = skip.parentNode;
    return {
      skip: skip || true
    };
  }
  update(node, outerDeco, innerDeco, view) {
    if (this.dirty == NODE_DIRTY || this.dirty != NOT_DIRTY && !this.inParent() || !node.sameMarkup(this.node)) return false;
    this.updateOuterDeco(outerDeco);
    if ((this.dirty != NOT_DIRTY || node.text != this.node.text) && node.text != this.nodeDOM.nodeValue) {
      this.nodeDOM.nodeValue = node.text;
      if (view.trackWrites == this.nodeDOM) view.trackWrites = null;
    }
    this.node = node;
    this.dirty = NOT_DIRTY;
    return true;
  }
  inParent() {
    let parentDOM = this.parent.contentDOM;
    for (let n = this.nodeDOM; n; n = n.parentNode) if (n == parentDOM) return true;
    return false;
  }
  domFromPos(pos) {
    return {
      node: this.nodeDOM,
      offset: pos
    };
  }
  localPosFromDOM(dom, offset3, bias) {
    if (dom == this.nodeDOM) return this.posAtStart + Math.min(offset3, this.node.text.length);
    return super.localPosFromDOM(dom, offset3, bias);
  }
  ignoreMutation(mutation) {
    return mutation.type != "characterData" && mutation.type != "selection";
  }
  slice(from2, to, view) {
    let node = this.node.cut(from2, to), dom = document.createTextNode(node.text);
    return new _TextViewDesc(this.parent, node, this.outerDeco, this.innerDeco, dom, dom, view);
  }
  markDirty(from2, to) {
    super.markDirty(from2, to);
    if (this.dom != this.nodeDOM && (from2 == 0 || to == this.nodeDOM.nodeValue.length)) this.dirty = NODE_DIRTY;
  }
  get domAtom() {
    return false;
  }
  isText(text2) {
    return this.node.text == text2;
  }
};
var TrailingHackViewDesc = class extends ViewDesc {
  parseRule() {
    return {
      ignore: true
    };
  }
  matchesHack(nodeName) {
    return this.dirty == NOT_DIRTY && this.dom.nodeName == nodeName;
  }
  get domAtom() {
    return true;
  }
  get ignoreForCoords() {
    return this.dom.nodeName == "IMG";
  }
};
var CustomNodeViewDesc = class extends NodeViewDesc {
  constructor(parent, node, outerDeco, innerDeco, dom, contentDOM, nodeDOM, spec, view, pos) {
    super(parent, node, outerDeco, innerDeco, dom, contentDOM, nodeDOM, view, pos);
    this.spec = spec;
  }
  // A custom `update` method gets to decide whether the update goes
  // through. If it does, and there's a `contentDOM` node, our logic
  // updates the children.
  update(node, outerDeco, innerDeco, view) {
    if (this.dirty == NODE_DIRTY) return false;
    if (this.spec.update && (this.node.type == node.type || this.spec.multiType)) {
      let result = this.spec.update(node, outerDeco, innerDeco);
      if (result) this.updateInner(node, outerDeco, innerDeco, view);
      return result;
    } else if (!this.contentDOM && !node.isLeaf) {
      return false;
    } else {
      return super.update(node, outerDeco, innerDeco, view);
    }
  }
  selectNode() {
    this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
  }
  deselectNode() {
    this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode();
  }
  setSelection(anchor, head, view, force) {
    this.spec.setSelection ? this.spec.setSelection(anchor, head, view.root) : super.setSelection(anchor, head, view, force);
  }
  destroy() {
    if (this.spec.destroy) this.spec.destroy();
    super.destroy();
  }
  stopEvent(event) {
    return this.spec.stopEvent ? this.spec.stopEvent(event) : false;
  }
  ignoreMutation(mutation) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(mutation) : super.ignoreMutation(mutation);
  }
};
function renderDescs(parentDOM, descs, view) {
  let dom = parentDOM.firstChild, written = false;
  for (let i = 0; i < descs.length; i++) {
    let desc = descs[i], childDOM = desc.dom;
    if (childDOM.parentNode == parentDOM) {
      while (childDOM != dom) {
        dom = rm(dom);
        written = true;
      }
      dom = dom.nextSibling;
    } else {
      written = true;
      parentDOM.insertBefore(childDOM, dom);
    }
    if (desc instanceof MarkViewDesc) {
      let pos = dom ? dom.previousSibling : parentDOM.lastChild;
      renderDescs(desc.contentDOM, desc.children, view);
      dom = pos ? pos.nextSibling : parentDOM.firstChild;
    }
  }
  while (dom) {
    dom = rm(dom);
    written = true;
  }
  if (written && view.trackWrites == parentDOM) view.trackWrites = null;
}
var OuterDecoLevel = function(nodeName) {
  if (nodeName) this.nodeName = nodeName;
};
OuterDecoLevel.prototype = /* @__PURE__ */ Object.create(null);
var noDeco = [new OuterDecoLevel()];
function computeOuterDeco(outerDeco, node, needsWrap) {
  if (outerDeco.length == 0) return noDeco;
  let top = needsWrap ? noDeco[0] : new OuterDecoLevel(), result = [top];
  for (let i = 0; i < outerDeco.length; i++) {
    let attrs = outerDeco[i].type.attrs;
    if (!attrs) continue;
    if (attrs.nodeName) result.push(top = new OuterDecoLevel(attrs.nodeName));
    for (let name in attrs) {
      let val = attrs[name];
      if (val == null) continue;
      if (needsWrap && result.length == 1) result.push(top = new OuterDecoLevel(node.isInline ? "span" : "div"));
      if (name == "class") top.class = (top.class ? top.class + " " : "") + val;
      else if (name == "style") top.style = (top.style ? top.style + ";" : "") + val;
      else if (name != "nodeName") top[name] = val;
    }
  }
  return result;
}
function patchOuterDeco(outerDOM, nodeDOM, prevComputed, curComputed) {
  if (prevComputed == noDeco && curComputed == noDeco) return nodeDOM;
  let curDOM = nodeDOM;
  for (let i = 0; i < curComputed.length; i++) {
    let deco = curComputed[i], prev = prevComputed[i];
    if (i) {
      let parent;
      if (prev && prev.nodeName == deco.nodeName && curDOM != outerDOM && (parent = curDOM.parentNode) && parent.nodeName.toLowerCase() == deco.nodeName) {
        curDOM = parent;
      } else {
        parent = document.createElement(deco.nodeName);
        parent.pmIsDeco = true;
        parent.appendChild(curDOM);
        prev = noDeco[0];
        curDOM = parent;
      }
    }
    patchAttributes(curDOM, prev || noDeco[0], deco);
  }
  return curDOM;
}
function patchAttributes(dom, prev, cur) {
  for (let name in prev) if (name != "class" && name != "style" && name != "nodeName" && !(name in cur)) dom.removeAttribute(name);
  for (let name in cur) if (name != "class" && name != "style" && name != "nodeName" && cur[name] != prev[name]) dom.setAttribute(name, cur[name]);
  if (prev.class != cur.class) {
    let prevList = prev.class ? prev.class.split(" ").filter(Boolean) : [];
    let curList = cur.class ? cur.class.split(" ").filter(Boolean) : [];
    for (let i = 0; i < prevList.length; i++) if (curList.indexOf(prevList[i]) == -1) dom.classList.remove(prevList[i]);
    for (let i = 0; i < curList.length; i++) if (prevList.indexOf(curList[i]) == -1) dom.classList.add(curList[i]);
    if (dom.classList.length == 0) dom.removeAttribute("class");
  }
  if (prev.style != cur.style) {
    if (prev.style) {
      let prop = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g, m;
      while (m = prop.exec(prev.style)) dom.style.removeProperty(m[1]);
    }
    if (cur.style) dom.style.cssText += cur.style;
  }
}
function applyOuterDeco(dom, deco, node) {
  return patchOuterDeco(dom, dom, noDeco, computeOuterDeco(deco, node, dom.nodeType != 1));
}
function sameOuterDeco(a, b) {
  if (a.length != b.length) return false;
  for (let i = 0; i < a.length; i++) if (!a[i].type.eq(b[i].type)) return false;
  return true;
}
function rm(dom) {
  let next = dom.nextSibling;
  dom.parentNode.removeChild(dom);
  return next;
}
var ViewTreeUpdater = class {
  constructor(top, lock, view) {
    this.lock = lock;
    this.view = view;
    this.index = 0;
    this.stack = [];
    this.changed = false;
    this.top = top;
    this.preMatch = preMatch(top.node.content, top);
  }
  // Destroy and remove the children between the given indices in
  // `this.top`.
  destroyBetween(start, end) {
    if (start == end) return;
    for (let i = start; i < end; i++) this.top.children[i].destroy();
    this.top.children.splice(start, end - start);
    this.changed = true;
  }
  // Destroy all remaining children in `this.top`.
  destroyRest() {
    this.destroyBetween(this.index, this.top.children.length);
  }
  // Sync the current stack of mark descs with the given array of
  // marks, reusing existing mark descs when possible.
  syncToMarks(marks2, inline2, view) {
    let keep = 0, depth = this.stack.length >> 1;
    let maxKeep = Math.min(depth, marks2.length);
    while (keep < maxKeep && (keep == depth - 1 ? this.top : this.stack[keep + 1 << 1]).matchesMark(marks2[keep]) && marks2[keep].type.spec.spanning !== false) keep++;
    while (keep < depth) {
      this.destroyRest();
      this.top.dirty = NOT_DIRTY;
      this.index = this.stack.pop();
      this.top = this.stack.pop();
      depth--;
    }
    while (depth < marks2.length) {
      this.stack.push(this.top, this.index + 1);
      let found2 = -1;
      for (let i = this.index; i < Math.min(this.index + 3, this.top.children.length); i++) {
        let next = this.top.children[i];
        if (next.matchesMark(marks2[depth]) && !this.isLocked(next.dom)) {
          found2 = i;
          break;
        }
      }
      if (found2 > -1) {
        if (found2 > this.index) {
          this.changed = true;
          this.destroyBetween(this.index, found2);
        }
        this.top = this.top.children[this.index];
      } else {
        let markDesc = MarkViewDesc.create(this.top, marks2[depth], inline2, view);
        this.top.children.splice(this.index, 0, markDesc);
        this.top = markDesc;
        this.changed = true;
      }
      this.index = 0;
      depth++;
    }
  }
  // Try to find a node desc matching the given data. Skip over it and
  // return true when successful.
  findNodeMatch(node, outerDeco, innerDeco, index) {
    let found2 = -1, targetDesc;
    if (index >= this.preMatch.index && (targetDesc = this.preMatch.matches[index - this.preMatch.index]).parent == this.top && targetDesc.matchesNode(node, outerDeco, innerDeco)) {
      found2 = this.top.children.indexOf(targetDesc, this.index);
    } else {
      for (let i = this.index, e = Math.min(this.top.children.length, i + 5); i < e; i++) {
        let child = this.top.children[i];
        if (child.matchesNode(node, outerDeco, innerDeco) && !this.preMatch.matched.has(child)) {
          found2 = i;
          break;
        }
      }
    }
    if (found2 < 0) return false;
    this.destroyBetween(this.index, found2);
    this.index++;
    return true;
  }
  updateNodeAt(node, outerDeco, innerDeco, index, view) {
    let child = this.top.children[index];
    if (child.dirty == NODE_DIRTY && child.dom == child.contentDOM) child.dirty = CONTENT_DIRTY;
    if (!child.update(node, outerDeco, innerDeco, view)) return false;
    this.destroyBetween(this.index, index);
    this.index++;
    return true;
  }
  findIndexWithChild(domNode) {
    for (; ; ) {
      let parent = domNode.parentNode;
      if (!parent) return -1;
      if (parent == this.top.contentDOM) {
        let desc = domNode.pmViewDesc;
        if (desc) for (let i = this.index; i < this.top.children.length; i++) {
          if (this.top.children[i] == desc) return i;
        }
        return -1;
      }
      domNode = parent;
    }
  }
  // Try to update the next node, if any, to the given data. Checks
  // pre-matches to avoid overwriting nodes that could still be used.
  updateNextNode(node, outerDeco, innerDeco, view, index, pos) {
    for (let i = this.index; i < this.top.children.length; i++) {
      let next = this.top.children[i];
      if (next instanceof NodeViewDesc) {
        let preMatch2 = this.preMatch.matched.get(next);
        if (preMatch2 != null && preMatch2 != index) return false;
        let nextDOM = next.dom, updated;
        let locked = this.isLocked(nextDOM) && !(node.isText && next.node && next.node.isText && next.nodeDOM.nodeValue == node.text && next.dirty != NODE_DIRTY && sameOuterDeco(outerDeco, next.outerDeco));
        if (!locked && next.update(node, outerDeco, innerDeco, view)) {
          this.destroyBetween(this.index, i);
          if (next.dom != nextDOM) this.changed = true;
          this.index++;
          return true;
        } else if (!locked && (updated = this.recreateWrapper(next, node, outerDeco, innerDeco, view, pos))) {
          this.destroyBetween(this.index, i);
          this.top.children[this.index] = updated;
          if (updated.contentDOM) {
            updated.dirty = CONTENT_DIRTY;
            updated.updateChildren(view, pos + 1);
            updated.dirty = NOT_DIRTY;
          }
          this.changed = true;
          this.index++;
          return true;
        }
        break;
      }
    }
    return false;
  }
  // When a node with content is replaced by a different node with
  // identical content, move over its children.
  recreateWrapper(next, node, outerDeco, innerDeco, view, pos) {
    if (next.dirty || node.isAtom || !next.children.length || !next.node.content.eq(node.content) || !sameOuterDeco(outerDeco, next.outerDeco) || !innerDeco.eq(next.innerDeco)) return null;
    let wrapper = NodeViewDesc.create(this.top, node, outerDeco, innerDeco, view, pos);
    if (wrapper.contentDOM) {
      wrapper.children = next.children;
      next.children = [];
      for (let ch of wrapper.children) ch.parent = wrapper;
    }
    next.destroy();
    return wrapper;
  }
  // Insert the node as a newly created node desc.
  addNode(node, outerDeco, innerDeco, view, pos) {
    let desc = NodeViewDesc.create(this.top, node, outerDeco, innerDeco, view, pos);
    if (desc.contentDOM) desc.updateChildren(view, pos + 1);
    this.top.children.splice(this.index++, 0, desc);
    this.changed = true;
  }
  placeWidget(widget, view, pos) {
    let next = this.index < this.top.children.length ? this.top.children[this.index] : null;
    if (next && next.matchesWidget(widget) && (widget == next.widget || !next.widget.type.toDOM.parentNode)) {
      this.index++;
    } else {
      let desc = new WidgetViewDesc(this.top, widget, view, pos);
      this.top.children.splice(this.index++, 0, desc);
      this.changed = true;
    }
  }
  // Make sure a textblock looks and behaves correctly in
  // contentEditable.
  addTextblockHacks() {
    let lastChild = this.top.children[this.index - 1], parent = this.top;
    while (lastChild instanceof MarkViewDesc) {
      parent = lastChild;
      lastChild = parent.children[parent.children.length - 1];
    }
    if (!lastChild || // Empty textblock
    !(lastChild instanceof TextViewDesc) || /\n$/.test(lastChild.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(lastChild.node.text)) {
      if ((safari || chrome) && lastChild && lastChild.dom.contentEditable == "false") this.addHackNode("IMG", parent);
      this.addHackNode("BR", this.top);
    }
  }
  addHackNode(nodeName, parent) {
    if (parent == this.top && this.index < parent.children.length && parent.children[this.index].matchesHack(nodeName)) {
      this.index++;
    } else {
      let dom = document.createElement(nodeName);
      if (nodeName == "IMG") {
        dom.className = "ProseMirror-separator";
        dom.alt = "";
      }
      if (nodeName == "BR") dom.className = "ProseMirror-trailingBreak";
      let hack = new TrailingHackViewDesc(this.top, [], dom, null);
      if (parent != this.top) parent.children.push(hack);
      else parent.children.splice(this.index++, 0, hack);
      this.changed = true;
    }
  }
  isLocked(node) {
    return this.lock && (node == this.lock || node.nodeType == 1 && node.contains(this.lock.parentNode));
  }
};
function preMatch(frag, parentDesc) {
  let curDesc = parentDesc, descI = curDesc.children.length;
  let fI = frag.childCount, matched = /* @__PURE__ */ new Map(), matches2 = [];
  outer: while (fI > 0) {
    let desc;
    for (; ; ) {
      if (descI) {
        let next = curDesc.children[descI - 1];
        if (next instanceof MarkViewDesc) {
          curDesc = next;
          descI = next.children.length;
        } else {
          desc = next;
          descI--;
          break;
        }
      } else if (curDesc == parentDesc) {
        break outer;
      } else {
        descI = curDesc.parent.children.indexOf(curDesc);
        curDesc = curDesc.parent;
      }
    }
    let node = desc.node;
    if (!node) continue;
    if (node != frag.child(fI - 1)) break;
    --fI;
    matched.set(desc, fI);
    matches2.push(desc);
  }
  return {
    index: fI,
    matched,
    matches: matches2.reverse()
  };
}
function compareSide(a, b) {
  return a.type.side - b.type.side;
}
function iterDeco(parent, deco, onWidget, onNode) {
  let locals = deco.locals(parent), offset3 = 0;
  if (locals.length == 0) {
    for (let i = 0; i < parent.childCount; i++) {
      let child = parent.child(i);
      onNode(child, locals, deco.forChild(offset3, child), i);
      offset3 += child.nodeSize;
    }
    return;
  }
  let decoIndex = 0, active = [], restNode = null;
  for (let parentIndex = 0; ; ) {
    let widget, widgets;
    while (decoIndex < locals.length && locals[decoIndex].to == offset3) {
      let next = locals[decoIndex++];
      if (next.widget) {
        if (!widget) widget = next;
        else (widgets || (widgets = [widget])).push(next);
      }
    }
    if (widget) {
      if (widgets) {
        widgets.sort(compareSide);
        for (let i = 0; i < widgets.length; i++) onWidget(widgets[i], parentIndex, !!restNode);
      } else {
        onWidget(widget, parentIndex, !!restNode);
      }
    }
    let child, index;
    if (restNode) {
      index = -1;
      child = restNode;
      restNode = null;
    } else if (parentIndex < parent.childCount) {
      index = parentIndex;
      child = parent.child(parentIndex++);
    } else {
      break;
    }
    for (let i = 0; i < active.length; i++) if (active[i].to <= offset3) active.splice(i--, 1);
    while (decoIndex < locals.length && locals[decoIndex].from <= offset3 && locals[decoIndex].to > offset3) active.push(locals[decoIndex++]);
    let end = offset3 + child.nodeSize;
    if (child.isText) {
      let cutAt = end;
      if (decoIndex < locals.length && locals[decoIndex].from < cutAt) cutAt = locals[decoIndex].from;
      for (let i = 0; i < active.length; i++) if (active[i].to < cutAt) cutAt = active[i].to;
      if (cutAt < end) {
        restNode = child.cut(cutAt - offset3);
        child = child.cut(0, cutAt - offset3);
        end = cutAt;
        index = -1;
      }
    } else {
      while (decoIndex < locals.length && locals[decoIndex].to < end) decoIndex++;
    }
    let outerDeco = child.isInline && !child.isLeaf ? active.filter((d) => !d.inline) : active.slice();
    onNode(child, outerDeco, deco.forChild(offset3, child), index);
    offset3 = end;
  }
}
function iosHacks(dom) {
  if (dom.nodeName == "UL" || dom.nodeName == "OL") {
    let oldCSS = dom.style.cssText;
    dom.style.cssText = oldCSS + "; list-style: square !important";
    window.getComputedStyle(dom).listStyle;
    dom.style.cssText = oldCSS;
  }
}
function findTextInFragment(frag, text2, from2, to) {
  for (let i = 0, pos = 0; i < frag.childCount && pos <= to; ) {
    let child = frag.child(i++), childStart = pos;
    pos += child.nodeSize;
    if (!child.isText) continue;
    let str = child.text;
    while (i < frag.childCount) {
      let next = frag.child(i++);
      pos += next.nodeSize;
      if (!next.isText) break;
      str += next.text;
    }
    if (pos >= from2) {
      if (pos >= to && str.slice(to - text2.length - childStart, to - childStart) == text2) return to - text2.length;
      let found2 = childStart < to ? str.lastIndexOf(text2, to - childStart - 1) : -1;
      if (found2 >= 0 && found2 + text2.length + childStart >= from2) return childStart + found2;
      if (from2 == to && str.length >= to + text2.length - childStart && str.slice(to - childStart, to - childStart + text2.length) == text2) return to;
    }
  }
  return -1;
}
function replaceNodes(nodes2, from2, to, view, replacement) {
  let result = [];
  for (let i = 0, off = 0; i < nodes2.length; i++) {
    let child = nodes2[i], start = off, end = off += child.size;
    if (start >= to || end <= from2) {
      result.push(child);
    } else {
      if (start < from2) result.push(child.slice(0, from2 - start, view));
      if (replacement) {
        result.push(replacement);
        replacement = void 0;
      }
      if (end > to) result.push(child.slice(to - start, child.size, view));
    }
  }
  return result;
}
function selectionFromDOM(view, origin = null) {
  let domSel = view.domSelectionRange(), doc4 = view.state.doc;
  if (!domSel.focusNode) return null;
  let nearestDesc = view.docView.nearestDesc(domSel.focusNode), inWidget = nearestDesc && nearestDesc.size == 0;
  let head = view.docView.posFromDOM(domSel.focusNode, domSel.focusOffset, 1);
  if (head < 0) return null;
  let $head = doc4.resolve(head), anchor, selection;
  if (selectionCollapsed(domSel)) {
    anchor = head;
    while (nearestDesc && !nearestDesc.node) nearestDesc = nearestDesc.parent;
    let nearestDescNode = nearestDesc.node;
    if (nearestDesc && nearestDescNode.isAtom && NodeSelection.isSelectable(nearestDescNode) && nearestDesc.parent && !(nearestDescNode.isInline && isOnEdge(domSel.focusNode, domSel.focusOffset, nearestDesc.dom))) {
      let pos = nearestDesc.posBefore;
      selection = new NodeSelection(head == pos ? $head : doc4.resolve(pos));
    }
  } else {
    if (domSel instanceof view.dom.ownerDocument.defaultView.Selection && domSel.rangeCount > 1) {
      let min2 = head, max2 = head;
      for (let i = 0; i < domSel.rangeCount; i++) {
        let range = domSel.getRangeAt(i);
        min2 = Math.min(min2, view.docView.posFromDOM(range.startContainer, range.startOffset, 1));
        max2 = Math.max(max2, view.docView.posFromDOM(range.endContainer, range.endOffset, -1));
      }
      if (min2 < 0) return null;
      [anchor, head] = max2 == view.state.selection.anchor ? [max2, min2] : [min2, max2];
      $head = doc4.resolve(head);
    } else {
      anchor = view.docView.posFromDOM(domSel.anchorNode, domSel.anchorOffset, 1);
    }
    if (anchor < 0) return null;
  }
  let $anchor = doc4.resolve(anchor);
  if (!selection) {
    let bias = origin == "pointer" || view.state.selection.head < $head.pos && !inWidget ? 1 : -1;
    selection = selectionBetween(view, $anchor, $head, bias);
  }
  return selection;
}
function editorOwnsSelection(view) {
  return view.editable ? view.hasFocus() : hasSelection(view) && document.activeElement && document.activeElement.contains(view.dom);
}
function selectionToDOM(view, force = false) {
  let sel = view.state.selection;
  syncNodeSelection(view, sel);
  if (!editorOwnsSelection(view)) return;
  if (!force && view.input.mouseDown && view.input.mouseDown.allowDefault && chrome) {
    let domSel = view.domSelectionRange(), curSel = view.domObserver.currentSelection;
    if (domSel.anchorNode && curSel.anchorNode && isEquivalentPosition(domSel.anchorNode, domSel.anchorOffset, curSel.anchorNode, curSel.anchorOffset)) {
      view.input.mouseDown.delayedSelectionSync = true;
      view.domObserver.setCurSelection();
      return;
    }
  }
  view.domObserver.disconnectSelection();
  if (view.cursorWrapper) {
    selectCursorWrapper(view);
  } else {
    let {
      anchor,
      head
    } = sel, resetEditableFrom, resetEditableTo;
    if (brokenSelectBetweenUneditable && !(sel instanceof TextSelection)) {
      if (!sel.$from.parent.inlineContent) resetEditableFrom = temporarilyEditableNear(view, sel.from);
      if (!sel.empty && !sel.$from.parent.inlineContent) resetEditableTo = temporarilyEditableNear(view, sel.to);
    }
    view.docView.setSelection(anchor, head, view, force);
    if (brokenSelectBetweenUneditable) {
      if (resetEditableFrom) resetEditable(resetEditableFrom);
      if (resetEditableTo) resetEditable(resetEditableTo);
    }
    if (sel.visible) {
      view.dom.classList.remove("ProseMirror-hideselection");
    } else {
      view.dom.classList.add("ProseMirror-hideselection");
      if ("onselectionchange" in document) removeClassOnSelectionChange(view);
    }
  }
  view.domObserver.setCurSelection();
  view.domObserver.connectSelection();
}
var brokenSelectBetweenUneditable = safari || chrome && chrome_version < 63;
function temporarilyEditableNear(view, pos) {
  let {
    node,
    offset: offset3
  } = view.docView.domFromPos(pos, 0);
  let after = offset3 < node.childNodes.length ? node.childNodes[offset3] : null;
  let before = offset3 ? node.childNodes[offset3 - 1] : null;
  if (safari && after && after.contentEditable == "false") return setEditable(after);
  if ((!after || after.contentEditable == "false") && (!before || before.contentEditable == "false")) {
    if (after) return setEditable(after);
    else if (before) return setEditable(before);
  }
}
function setEditable(element) {
  element.contentEditable = "true";
  if (safari && element.draggable) {
    element.draggable = false;
    element.wasDraggable = true;
  }
  return element;
}
function resetEditable(element) {
  element.contentEditable = "false";
  if (element.wasDraggable) {
    element.draggable = true;
    element.wasDraggable = null;
  }
}
function removeClassOnSelectionChange(view) {
  let doc4 = view.dom.ownerDocument;
  doc4.removeEventListener("selectionchange", view.input.hideSelectionGuard);
  let domSel = view.domSelectionRange();
  let node = domSel.anchorNode, offset3 = domSel.anchorOffset;
  doc4.addEventListener("selectionchange", view.input.hideSelectionGuard = () => {
    if (domSel.anchorNode != node || domSel.anchorOffset != offset3) {
      doc4.removeEventListener("selectionchange", view.input.hideSelectionGuard);
      setTimeout(() => {
        if (!editorOwnsSelection(view) || view.state.selection.visible) view.dom.classList.remove("ProseMirror-hideselection");
      }, 20);
    }
  });
}
function selectCursorWrapper(view) {
  let domSel = view.domSelection();
  if (!domSel) return;
  let node = view.cursorWrapper.dom, img = node.nodeName == "IMG";
  if (img) domSel.collapse(node.parentNode, domIndex(node) + 1);
  else domSel.collapse(node, 0);
  if (!img && !view.state.selection.visible && ie && ie_version <= 11) {
    node.disabled = true;
    node.disabled = false;
  }
}
function syncNodeSelection(view, sel) {
  if (sel instanceof NodeSelection) {
    let desc = view.docView.descAt(sel.from);
    if (desc != view.lastSelectedViewDesc) {
      clearNodeSelection(view);
      if (desc) desc.selectNode();
      view.lastSelectedViewDesc = desc;
    }
  } else {
    clearNodeSelection(view);
  }
}
function clearNodeSelection(view) {
  if (view.lastSelectedViewDesc) {
    if (view.lastSelectedViewDesc.parent) view.lastSelectedViewDesc.deselectNode();
    view.lastSelectedViewDesc = void 0;
  }
}
function selectionBetween(view, $anchor, $head, bias) {
  return view.someProp("createSelectionBetween", (f) => f(view, $anchor, $head)) || TextSelection.between($anchor, $head, bias);
}
function hasFocusAndSelection(view) {
  if (view.editable && !view.hasFocus()) return false;
  return hasSelection(view);
}
function hasSelection(view) {
  let sel = view.domSelectionRange();
  if (!sel.anchorNode) return false;
  try {
    return view.dom.contains(sel.anchorNode.nodeType == 3 ? sel.anchorNode.parentNode : sel.anchorNode) && (view.editable || view.dom.contains(sel.focusNode.nodeType == 3 ? sel.focusNode.parentNode : sel.focusNode));
  } catch (_) {
    return false;
  }
}
function anchorInRightPlace(view) {
  let anchorDOM = view.docView.domFromPos(view.state.selection.anchor, 0);
  let domSel = view.domSelectionRange();
  return isEquivalentPosition(anchorDOM.node, anchorDOM.offset, domSel.anchorNode, domSel.anchorOffset);
}
function moveSelectionBlock(state2, dir) {
  let {
    $anchor,
    $head
  } = state2.selection;
  let $side = dir > 0 ? $anchor.max($head) : $anchor.min($head);
  let $start = !$side.parent.inlineContent ? $side : $side.depth ? state2.doc.resolve(dir > 0 ? $side.after() : $side.before()) : null;
  return $start && Selection.findFrom($start, dir);
}
function apply(view, sel) {
  view.dispatch(view.state.tr.setSelection(sel).scrollIntoView());
  return true;
}
function selectHorizontally(view, dir, mods) {
  let sel = view.state.selection;
  if (sel instanceof TextSelection) {
    if (mods.indexOf("s") > -1) {
      let {
        $head
      } = sel, node = $head.textOffset ? null : dir < 0 ? $head.nodeBefore : $head.nodeAfter;
      if (!node || node.isText || !node.isLeaf) return false;
      let $newHead = view.state.doc.resolve($head.pos + node.nodeSize * (dir < 0 ? -1 : 1));
      return apply(view, new TextSelection(sel.$anchor, $newHead));
    } else if (!sel.empty) {
      return false;
    } else if (view.endOfTextblock(dir > 0 ? "forward" : "backward")) {
      let next = moveSelectionBlock(view.state, dir);
      if (next && next instanceof NodeSelection) return apply(view, next);
      return false;
    } else if (!(mac && mods.indexOf("m") > -1)) {
      let $head = sel.$head, node = $head.textOffset ? null : dir < 0 ? $head.nodeBefore : $head.nodeAfter, desc;
      if (!node || node.isText) return false;
      let nodePos = dir < 0 ? $head.pos - node.nodeSize : $head.pos;
      if (!(node.isAtom || (desc = view.docView.descAt(nodePos)) && !desc.contentDOM)) return false;
      if (NodeSelection.isSelectable(node)) {
        return apply(view, new NodeSelection(dir < 0 ? view.state.doc.resolve($head.pos - node.nodeSize) : $head));
      } else if (webkit) {
        return apply(view, new TextSelection(view.state.doc.resolve(dir < 0 ? nodePos : nodePos + node.nodeSize)));
      } else {
        return false;
      }
    }
  } else if (sel instanceof NodeSelection && sel.node.isInline) {
    return apply(view, new TextSelection(dir > 0 ? sel.$to : sel.$from));
  } else {
    let next = moveSelectionBlock(view.state, dir);
    if (next) return apply(view, next);
    return false;
  }
}
function nodeLen(node) {
  return node.nodeType == 3 ? node.nodeValue.length : node.childNodes.length;
}
function isIgnorable(dom, dir) {
  let desc = dom.pmViewDesc;
  return desc && desc.size == 0 && (dir < 0 || dom.nextSibling || dom.nodeName != "BR");
}
function skipIgnoredNodes(view, dir) {
  return dir < 0 ? skipIgnoredNodesBefore(view) : skipIgnoredNodesAfter(view);
}
function skipIgnoredNodesBefore(view) {
  let sel = view.domSelectionRange();
  let node = sel.focusNode, offset3 = sel.focusOffset;
  if (!node) return;
  let moveNode, moveOffset, force = false;
  if (gecko && node.nodeType == 1 && offset3 < nodeLen(node) && isIgnorable(node.childNodes[offset3], -1)) force = true;
  for (; ; ) {
    if (offset3 > 0) {
      if (node.nodeType != 1) {
        break;
      } else {
        let before = node.childNodes[offset3 - 1];
        if (isIgnorable(before, -1)) {
          moveNode = node;
          moveOffset = --offset3;
        } else if (before.nodeType == 3) {
          node = before;
          offset3 = node.nodeValue.length;
        } else break;
      }
    } else if (isBlockNode(node)) {
      break;
    } else {
      let prev = node.previousSibling;
      while (prev && isIgnorable(prev, -1)) {
        moveNode = node.parentNode;
        moveOffset = domIndex(prev);
        prev = prev.previousSibling;
      }
      if (!prev) {
        node = node.parentNode;
        if (node == view.dom) break;
        offset3 = 0;
      } else {
        node = prev;
        offset3 = nodeLen(node);
      }
    }
  }
  if (force) setSelFocus(view, node, offset3);
  else if (moveNode) setSelFocus(view, moveNode, moveOffset);
}
function skipIgnoredNodesAfter(view) {
  let sel = view.domSelectionRange();
  let node = sel.focusNode, offset3 = sel.focusOffset;
  if (!node) return;
  let len = nodeLen(node);
  let moveNode, moveOffset;
  for (; ; ) {
    if (offset3 < len) {
      if (node.nodeType != 1) break;
      let after = node.childNodes[offset3];
      if (isIgnorable(after, 1)) {
        moveNode = node;
        moveOffset = ++offset3;
      } else break;
    } else if (isBlockNode(node)) {
      break;
    } else {
      let next = node.nextSibling;
      while (next && isIgnorable(next, 1)) {
        moveNode = next.parentNode;
        moveOffset = domIndex(next) + 1;
        next = next.nextSibling;
      }
      if (!next) {
        node = node.parentNode;
        if (node == view.dom) break;
        offset3 = len = 0;
      } else {
        node = next;
        offset3 = 0;
        len = nodeLen(node);
      }
    }
  }
  if (moveNode) setSelFocus(view, moveNode, moveOffset);
}
function isBlockNode(dom) {
  let desc = dom.pmViewDesc;
  return desc && desc.node && desc.node.isBlock;
}
function textNodeAfter(node, offset3) {
  while (node && offset3 == node.childNodes.length && !hasBlockDesc(node)) {
    offset3 = domIndex(node) + 1;
    node = node.parentNode;
  }
  while (node && offset3 < node.childNodes.length) {
    let next = node.childNodes[offset3];
    if (next.nodeType == 3) return next;
    if (next.nodeType == 1 && next.contentEditable == "false") break;
    node = next;
    offset3 = 0;
  }
}
function textNodeBefore(node, offset3) {
  while (node && !offset3 && !hasBlockDesc(node)) {
    offset3 = domIndex(node);
    node = node.parentNode;
  }
  while (node && offset3) {
    let next = node.childNodes[offset3 - 1];
    if (next.nodeType == 3) return next;
    if (next.nodeType == 1 && next.contentEditable == "false") break;
    node = next;
    offset3 = node.childNodes.length;
  }
}
function setSelFocus(view, node, offset3) {
  if (node.nodeType != 3) {
    let before, after;
    if (after = textNodeAfter(node, offset3)) {
      node = after;
      offset3 = 0;
    } else if (before = textNodeBefore(node, offset3)) {
      node = before;
      offset3 = before.nodeValue.length;
    }
  }
  let sel = view.domSelection();
  if (!sel) return;
  if (selectionCollapsed(sel)) {
    let range = document.createRange();
    range.setEnd(node, offset3);
    range.setStart(node, offset3);
    sel.removeAllRanges();
    sel.addRange(range);
  } else if (sel.extend) {
    sel.extend(node, offset3);
  }
  view.domObserver.setCurSelection();
  let {
    state: state2
  } = view;
  setTimeout(() => {
    if (view.state == state2) selectionToDOM(view);
  }, 50);
}
function findDirection(view, pos) {
  let $pos = view.state.doc.resolve(pos);
  if (!(chrome || windows) && $pos.parent.inlineContent) {
    let coords = view.coordsAtPos(pos);
    if (pos > $pos.start()) {
      let before = view.coordsAtPos(pos - 1);
      let mid = (before.top + before.bottom) / 2;
      if (mid > coords.top && mid < coords.bottom && Math.abs(before.left - coords.left) > 1) return before.left < coords.left ? "ltr" : "rtl";
    }
    if (pos < $pos.end()) {
      let after = view.coordsAtPos(pos + 1);
      let mid = (after.top + after.bottom) / 2;
      if (mid > coords.top && mid < coords.bottom && Math.abs(after.left - coords.left) > 1) return after.left > coords.left ? "ltr" : "rtl";
    }
  }
  let computed2 = getComputedStyle(view.dom).direction;
  return computed2 == "rtl" ? "rtl" : "ltr";
}
function selectVertically(view, dir, mods) {
  let sel = view.state.selection;
  if (sel instanceof TextSelection && !sel.empty || mods.indexOf("s") > -1) return false;
  if (mac && mods.indexOf("m") > -1) return false;
  let {
    $from,
    $to
  } = sel;
  if (!$from.parent.inlineContent || view.endOfTextblock(dir < 0 ? "up" : "down")) {
    let next = moveSelectionBlock(view.state, dir);
    if (next && next instanceof NodeSelection) return apply(view, next);
  }
  if (!$from.parent.inlineContent) {
    let side = dir < 0 ? $from : $to;
    let beyond = sel instanceof AllSelection ? Selection.near(side, dir) : Selection.findFrom(side, dir);
    return beyond ? apply(view, beyond) : false;
  }
  return false;
}
function stopNativeHorizontalDelete(view, dir) {
  if (!(view.state.selection instanceof TextSelection)) return true;
  let {
    $head,
    $anchor,
    empty: empty2
  } = view.state.selection;
  if (!$head.sameParent($anchor)) return true;
  if (!empty2) return false;
  if (view.endOfTextblock(dir > 0 ? "forward" : "backward")) return true;
  let nextNode = !$head.textOffset && (dir < 0 ? $head.nodeBefore : $head.nodeAfter);
  if (nextNode && !nextNode.isText) {
    let tr = view.state.tr;
    if (dir < 0) tr.delete($head.pos - nextNode.nodeSize, $head.pos);
    else tr.delete($head.pos, $head.pos + nextNode.nodeSize);
    view.dispatch(tr);
    return true;
  }
  return false;
}
function switchEditable(view, node, state2) {
  view.domObserver.stop();
  node.contentEditable = state2;
  view.domObserver.start();
}
function safariDownArrowBug(view) {
  if (!safari || view.state.selection.$head.parentOffset > 0) return false;
  let {
    focusNode,
    focusOffset
  } = view.domSelectionRange();
  if (focusNode && focusNode.nodeType == 1 && focusOffset == 0 && focusNode.firstChild && focusNode.firstChild.contentEditable == "false") {
    let child = focusNode.firstChild;
    switchEditable(view, child, "true");
    setTimeout(() => switchEditable(view, child, "false"), 20);
  }
  return false;
}
function getMods(event) {
  let result = "";
  if (event.ctrlKey) result += "c";
  if (event.metaKey) result += "m";
  if (event.altKey) result += "a";
  if (event.shiftKey) result += "s";
  return result;
}
function captureKeyDown(view, event) {
  let code3 = event.keyCode, mods = getMods(event);
  if (code3 == 8 || mac && code3 == 72 && mods == "c") {
    return stopNativeHorizontalDelete(view, -1) || skipIgnoredNodes(view, -1);
  } else if (code3 == 46 && !event.shiftKey || mac && code3 == 68 && mods == "c") {
    return stopNativeHorizontalDelete(view, 1) || skipIgnoredNodes(view, 1);
  } else if (code3 == 13 || code3 == 27) {
    return true;
  } else if (code3 == 37 || mac && code3 == 66 && mods == "c") {
    let dir = code3 == 37 ? findDirection(view, view.state.selection.from) == "ltr" ? -1 : 1 : -1;
    return selectHorizontally(view, dir, mods) || skipIgnoredNodes(view, dir);
  } else if (code3 == 39 || mac && code3 == 70 && mods == "c") {
    let dir = code3 == 39 ? findDirection(view, view.state.selection.from) == "ltr" ? 1 : -1 : 1;
    return selectHorizontally(view, dir, mods) || skipIgnoredNodes(view, dir);
  } else if (code3 == 38 || mac && code3 == 80 && mods == "c") {
    return selectVertically(view, -1, mods) || skipIgnoredNodes(view, -1);
  } else if (code3 == 40 || mac && code3 == 78 && mods == "c") {
    return safariDownArrowBug(view) || selectVertically(view, 1, mods) || skipIgnoredNodes(view, 1);
  } else if (mods == (mac ? "m" : "c") && (code3 == 66 || code3 == 73 || code3 == 89 || code3 == 90)) {
    return true;
  }
  return false;
}
function serializeForClipboard(view, slice2) {
  view.someProp("transformCopied", (f) => {
    slice2 = f(slice2, view);
  });
  let context = [], {
    content,
    openStart,
    openEnd
  } = slice2;
  while (openStart > 1 && openEnd > 1 && content.childCount == 1 && content.firstChild.childCount == 1) {
    openStart--;
    openEnd--;
    let node = content.firstChild;
    context.push(node.type.name, node.attrs != node.type.defaultAttrs ? node.attrs : null);
    content = node.content;
  }
  let serializer = view.someProp("clipboardSerializer") || DOMSerializer.fromSchema(view.state.schema);
  let doc4 = detachedDoc(), wrap2 = doc4.createElement("div");
  wrap2.appendChild(serializer.serializeFragment(content, {
    document: doc4
  }));
  let firstChild = wrap2.firstChild, needsWrap, wrappers = 0;
  while (firstChild && firstChild.nodeType == 1 && (needsWrap = wrapMap[firstChild.nodeName.toLowerCase()])) {
    for (let i = needsWrap.length - 1; i >= 0; i--) {
      let wrapper = doc4.createElement(needsWrap[i]);
      while (wrap2.firstChild) wrapper.appendChild(wrap2.firstChild);
      wrap2.appendChild(wrapper);
      wrappers++;
    }
    firstChild = wrap2.firstChild;
  }
  if (firstChild && firstChild.nodeType == 1) firstChild.setAttribute("data-pm-slice", `${openStart} ${openEnd}${wrappers ? ` -${wrappers}` : ""} ${JSON.stringify(context)}`);
  let text2 = view.someProp("clipboardTextSerializer", (f) => f(slice2, view)) || slice2.content.textBetween(0, slice2.content.size, "\n\n");
  return {
    dom: wrap2,
    text: text2,
    slice: slice2
  };
}
function parseFromClipboard(view, text2, html, plainText, $context) {
  let inCode = $context.parent.type.spec.code;
  let dom, slice2;
  if (!html && !text2) return null;
  let asText = !!text2 && (plainText || inCode || !html);
  if (asText) {
    view.someProp("transformPastedText", (f) => {
      text2 = f(text2, inCode || plainText, view);
    });
    if (inCode) {
      slice2 = new Slice(Fragment.from(view.state.schema.text(text2.replace(/\r\n?/g, "\n"))), 0, 0);
      view.someProp("transformPasted", (f) => {
        slice2 = f(slice2, view, true);
      });
      return slice2;
    }
    let parsed = view.someProp("clipboardTextParser", (f) => f(text2, $context, plainText, view));
    if (parsed) {
      slice2 = parsed;
    } else {
      let marks2 = $context.marks();
      let {
        schema: schema2
      } = view.state, serializer = DOMSerializer.fromSchema(schema2);
      dom = document.createElement("div");
      text2.split(/(?:\r\n?|\n)+/).forEach((block) => {
        let p = dom.appendChild(document.createElement("p"));
        if (block) p.appendChild(serializer.serializeNode(schema2.text(block, marks2)));
      });
    }
  } else {
    view.someProp("transformPastedHTML", (f) => {
      html = f(html, view);
    });
    dom = readHTML(html);
    if (webkit) restoreReplacedSpaces(dom);
  }
  let contextNode = dom && dom.querySelector("[data-pm-slice]");
  let sliceData = contextNode && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(contextNode.getAttribute("data-pm-slice") || "");
  if (sliceData && sliceData[3]) for (let i = +sliceData[3]; i > 0; i--) {
    let child = dom.firstChild;
    while (child && child.nodeType != 1) child = child.nextSibling;
    if (!child) break;
    dom = child;
  }
  if (!slice2) {
    let parser = view.someProp("clipboardParser") || view.someProp("domParser") || DOMParser.fromSchema(view.state.schema);
    slice2 = parser.parseSlice(dom, {
      preserveWhitespace: !!(asText || sliceData),
      context: $context,
      ruleFromNode(dom2) {
        if (dom2.nodeName == "BR" && !dom2.nextSibling && dom2.parentNode && !inlineParents.test(dom2.parentNode.nodeName)) return {
          ignore: true
        };
        return null;
      }
    });
  }
  if (sliceData) {
    slice2 = addContext(closeSlice(slice2, +sliceData[1], +sliceData[2]), sliceData[4]);
  } else {
    slice2 = Slice.maxOpen(normalizeSiblings(slice2.content, $context), true);
    if (slice2.openStart || slice2.openEnd) {
      let openStart = 0, openEnd = 0;
      for (let node = slice2.content.firstChild; openStart < slice2.openStart && !node.type.spec.isolating; openStart++, node = node.firstChild) {
      }
      for (let node = slice2.content.lastChild; openEnd < slice2.openEnd && !node.type.spec.isolating; openEnd++, node = node.lastChild) {
      }
      slice2 = closeSlice(slice2, openStart, openEnd);
    }
  }
  view.someProp("transformPasted", (f) => {
    slice2 = f(slice2, view, asText);
  });
  return slice2;
}
var inlineParents = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function normalizeSiblings(fragment, $context) {
  if (fragment.childCount < 2) return fragment;
  for (let d = $context.depth; d >= 0; d--) {
    let parent = $context.node(d);
    let match = parent.contentMatchAt($context.index(d));
    let lastWrap, result = [];
    fragment.forEach((node) => {
      if (!result) return;
      let wrap2 = match.findWrapping(node.type), inLast;
      if (!wrap2) return result = null;
      if (inLast = result.length && lastWrap.length && addToSibling(wrap2, lastWrap, node, result[result.length - 1], 0)) {
        result[result.length - 1] = inLast;
      } else {
        if (result.length) result[result.length - 1] = closeRight(result[result.length - 1], lastWrap.length);
        let wrapped = withWrappers(node, wrap2);
        result.push(wrapped);
        match = match.matchType(wrapped.type);
        lastWrap = wrap2;
      }
    });
    if (result) return Fragment.from(result);
  }
  return fragment;
}
function withWrappers(node, wrap2, from2 = 0) {
  for (let i = wrap2.length - 1; i >= from2; i--) node = wrap2[i].create(null, Fragment.from(node));
  return node;
}
function addToSibling(wrap2, lastWrap, node, sibling, depth) {
  if (depth < wrap2.length && depth < lastWrap.length && wrap2[depth] == lastWrap[depth]) {
    let inner = addToSibling(wrap2, lastWrap, node, sibling.lastChild, depth + 1);
    if (inner) return sibling.copy(sibling.content.replaceChild(sibling.childCount - 1, inner));
    let match = sibling.contentMatchAt(sibling.childCount);
    if (match.matchType(depth == wrap2.length - 1 ? node.type : wrap2[depth + 1])) return sibling.copy(sibling.content.append(Fragment.from(withWrappers(node, wrap2, depth + 1))));
  }
}
function closeRight(node, depth) {
  if (depth == 0) return node;
  let fragment = node.content.replaceChild(node.childCount - 1, closeRight(node.lastChild, depth - 1));
  let fill = node.contentMatchAt(node.childCount).fillBefore(Fragment.empty, true);
  return node.copy(fragment.append(fill));
}
function closeRange(fragment, side, from2, to, depth, openEnd) {
  let node = side < 0 ? fragment.firstChild : fragment.lastChild, inner = node.content;
  if (fragment.childCount > 1) openEnd = 0;
  if (depth < to - 1) inner = closeRange(inner, side, from2, to, depth + 1, openEnd);
  if (depth >= from2) inner = side < 0 ? node.contentMatchAt(0).fillBefore(inner, openEnd <= depth).append(inner) : inner.append(node.contentMatchAt(node.childCount).fillBefore(Fragment.empty, true));
  return fragment.replaceChild(side < 0 ? 0 : fragment.childCount - 1, node.copy(inner));
}
function closeSlice(slice2, openStart, openEnd) {
  if (openStart < slice2.openStart) slice2 = new Slice(closeRange(slice2.content, -1, openStart, slice2.openStart, 0, slice2.openEnd), openStart, slice2.openEnd);
  if (openEnd < slice2.openEnd) slice2 = new Slice(closeRange(slice2.content, 1, openEnd, slice2.openEnd, 0, 0), slice2.openStart, openEnd);
  return slice2;
}
var wrapMap = {
  thead: ["table"],
  tbody: ["table"],
  tfoot: ["table"],
  caption: ["table"],
  colgroup: ["table"],
  col: ["table", "colgroup"],
  tr: ["table", "tbody"],
  td: ["table", "tbody", "tr"],
  th: ["table", "tbody", "tr"]
};
var _detachedDoc = null;
function detachedDoc() {
  return _detachedDoc || (_detachedDoc = document.implementation.createHTMLDocument("title"));
}
var _policy = null;
function maybeWrapTrusted(html) {
  let trustedTypes = window.trustedTypes;
  if (!trustedTypes) return html;
  if (!_policy) _policy = trustedTypes.defaultPolicy || trustedTypes.createPolicy("ProseMirrorClipboard", {
    createHTML: (s2) => s2
  });
  return _policy.createHTML(html);
}
function readHTML(html) {
  let metas = /^(\s*<meta [^>]*>)*/.exec(html);
  if (metas) html = html.slice(metas[0].length);
  let elt = detachedDoc().createElement("div");
  let firstTag = /<([a-z][^>\s]+)/i.exec(html), wrap2;
  if (wrap2 = firstTag && wrapMap[firstTag[1].toLowerCase()]) html = wrap2.map((n) => "<" + n + ">").join("") + html + wrap2.map((n) => "</" + n + ">").reverse().join("");
  elt.innerHTML = maybeWrapTrusted(html);
  if (wrap2) for (let i = 0; i < wrap2.length; i++) elt = elt.querySelector(wrap2[i]) || elt;
  return elt;
}
function restoreReplacedSpaces(dom) {
  let nodes2 = dom.querySelectorAll(chrome ? "span:not([class]):not([style])" : "span.Apple-converted-space");
  for (let i = 0; i < nodes2.length; i++) {
    let node = nodes2[i];
    if (node.childNodes.length == 1 && node.textContent == "\xA0" && node.parentNode) node.parentNode.replaceChild(dom.ownerDocument.createTextNode(" "), node);
  }
}
function addContext(slice2, context) {
  if (!slice2.size) return slice2;
  let schema2 = slice2.content.firstChild.type.schema, array;
  try {
    array = JSON.parse(context);
  } catch (e) {
    return slice2;
  }
  let {
    content,
    openStart,
    openEnd
  } = slice2;
  for (let i = array.length - 2; i >= 0; i -= 2) {
    let type = schema2.nodes[array[i]];
    if (!type || type.hasRequiredAttrs()) break;
    content = Fragment.from(type.create(array[i + 1], content));
    openStart++;
    openEnd++;
  }
  return new Slice(content, openStart, openEnd);
}
var handlers = {};
var editHandlers = {};
var passiveHandlers = {
  touchstart: true,
  touchmove: true
};
var InputState = class {
  constructor() {
    this.shiftKey = false;
    this.mouseDown = null;
    this.lastKeyCode = null;
    this.lastKeyCodeTime = 0;
    this.lastClick = {
      time: 0,
      x: 0,
      y: 0,
      type: "",
      button: 0
    };
    this.lastSelectionOrigin = null;
    this.lastSelectionTime = 0;
    this.lastIOSEnter = 0;
    this.lastIOSEnterFallbackTimeout = -1;
    this.lastFocus = 0;
    this.lastTouch = 0;
    this.lastChromeDelete = 0;
    this.composing = false;
    this.compositionNode = null;
    this.composingTimeout = -1;
    this.compositionNodes = [];
    this.compositionEndedAt = -2e8;
    this.compositionID = 1;
    this.compositionPendingChanges = 0;
    this.domChangeCount = 0;
    this.eventHandlers = /* @__PURE__ */ Object.create(null);
    this.hideSelectionGuard = null;
  }
};
function initInput(view) {
  for (let event in handlers) {
    let handler = handlers[event];
    view.dom.addEventListener(event, view.input.eventHandlers[event] = (event2) => {
      if (eventBelongsToView(view, event2) && !runCustomHandler(view, event2) && (view.editable || !(event2.type in editHandlers))) handler(view, event2);
    }, passiveHandlers[event] ? {
      passive: true
    } : void 0);
  }
  if (safari) view.dom.addEventListener("input", () => null);
  ensureListeners(view);
}
function setSelectionOrigin(view, origin) {
  view.input.lastSelectionOrigin = origin;
  view.input.lastSelectionTime = Date.now();
}
function destroyInput(view) {
  view.domObserver.stop();
  for (let type in view.input.eventHandlers) view.dom.removeEventListener(type, view.input.eventHandlers[type]);
  clearTimeout(view.input.composingTimeout);
  clearTimeout(view.input.lastIOSEnterFallbackTimeout);
}
function ensureListeners(view) {
  view.someProp("handleDOMEvents", (currentHandlers) => {
    for (let type in currentHandlers) if (!view.input.eventHandlers[type]) view.dom.addEventListener(type, view.input.eventHandlers[type] = (event) => runCustomHandler(view, event));
  });
}
function runCustomHandler(view, event) {
  return view.someProp("handleDOMEvents", (handlers2) => {
    let handler = handlers2[event.type];
    return handler ? handler(view, event) || event.defaultPrevented : false;
  });
}
function eventBelongsToView(view, event) {
  if (!event.bubbles) return true;
  if (event.defaultPrevented) return false;
  for (let node = event.target; node != view.dom; node = node.parentNode) if (!node || node.nodeType == 11 || node.pmViewDesc && node.pmViewDesc.stopEvent(event)) return false;
  return true;
}
function dispatchEvent(view, event) {
  if (!runCustomHandler(view, event) && handlers[event.type] && (view.editable || !(event.type in editHandlers))) handlers[event.type](view, event);
}
editHandlers.keydown = (view, _event) => {
  let event = _event;
  view.input.shiftKey = event.keyCode == 16 || event.shiftKey;
  if (inOrNearComposition(view, event)) return;
  view.input.lastKeyCode = event.keyCode;
  view.input.lastKeyCodeTime = Date.now();
  if (android && chrome && event.keyCode == 13) return;
  if (event.keyCode != 229) view.domObserver.forceFlush();
  if (ios && event.keyCode == 13 && !event.ctrlKey && !event.altKey && !event.metaKey) {
    let now = Date.now();
    view.input.lastIOSEnter = now;
    view.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
      if (view.input.lastIOSEnter == now) {
        view.someProp("handleKeyDown", (f) => f(view, keyEvent(13, "Enter")));
        view.input.lastIOSEnter = 0;
      }
    }, 200);
  } else if (view.someProp("handleKeyDown", (f) => f(view, event)) || captureKeyDown(view, event)) {
    event.preventDefault();
  } else {
    setSelectionOrigin(view, "key");
  }
};
editHandlers.keyup = (view, event) => {
  if (event.keyCode == 16) view.input.shiftKey = false;
};
editHandlers.keypress = (view, _event) => {
  let event = _event;
  if (inOrNearComposition(view, event) || !event.charCode || event.ctrlKey && !event.altKey || mac && event.metaKey) return;
  if (view.someProp("handleKeyPress", (f) => f(view, event))) {
    event.preventDefault();
    return;
  }
  let sel = view.state.selection;
  if (!(sel instanceof TextSelection) || !sel.$from.sameParent(sel.$to)) {
    let text2 = String.fromCharCode(event.charCode);
    let deflt = () => view.state.tr.insertText(text2).scrollIntoView();
    if (!/[\r\n]/.test(text2) && !view.someProp("handleTextInput", (f) => f(view, sel.$from.pos, sel.$to.pos, text2, deflt))) view.dispatch(deflt());
    event.preventDefault();
  }
};
function eventCoords(event) {
  return {
    left: event.clientX,
    top: event.clientY
  };
}
function isNear(event, click) {
  let dx = click.x - event.clientX, dy = click.y - event.clientY;
  return dx * dx + dy * dy < 100;
}
function runHandlerOnContext(view, propName, pos, inside, event) {
  if (inside == -1) return false;
  let $pos = view.state.doc.resolve(inside);
  for (let i = $pos.depth + 1; i > 0; i--) {
    if (view.someProp(propName, (f) => i > $pos.depth ? f(view, pos, $pos.nodeAfter, $pos.before(i), event, true) : f(view, pos, $pos.node(i), $pos.before(i), event, false))) return true;
  }
  return false;
}
function updateSelection(view, selection, origin) {
  if (!view.focused) view.focus();
  if (view.state.selection.eq(selection)) return;
  let tr = view.state.tr.setSelection(selection);
  if (origin == "pointer") tr.setMeta("pointer", true);
  view.dispatch(tr);
}
function selectClickedLeaf(view, inside) {
  if (inside == -1) return false;
  let $pos = view.state.doc.resolve(inside), node = $pos.nodeAfter;
  if (node && node.isAtom && NodeSelection.isSelectable(node)) {
    updateSelection(view, new NodeSelection($pos), "pointer");
    return true;
  }
  return false;
}
function selectClickedNode(view, inside) {
  if (inside == -1) return false;
  let sel = view.state.selection, selectedNode, selectAt;
  if (sel instanceof NodeSelection) selectedNode = sel.node;
  let $pos = view.state.doc.resolve(inside);
  for (let i = $pos.depth + 1; i > 0; i--) {
    let node = i > $pos.depth ? $pos.nodeAfter : $pos.node(i);
    if (NodeSelection.isSelectable(node)) {
      if (selectedNode && sel.$from.depth > 0 && i >= sel.$from.depth && $pos.before(sel.$from.depth + 1) == sel.$from.pos) selectAt = $pos.before(sel.$from.depth);
      else selectAt = $pos.before(i);
      break;
    }
  }
  if (selectAt != null) {
    updateSelection(view, NodeSelection.create(view.state.doc, selectAt), "pointer");
    return true;
  } else {
    return false;
  }
}
function handleSingleClick(view, pos, inside, event, selectNode) {
  return runHandlerOnContext(view, "handleClickOn", pos, inside, event) || view.someProp("handleClick", (f) => f(view, pos, event)) || (selectNode ? selectClickedNode(view, inside) : selectClickedLeaf(view, inside));
}
function handleDoubleClick(view, pos, inside, event) {
  return runHandlerOnContext(view, "handleDoubleClickOn", pos, inside, event) || view.someProp("handleDoubleClick", (f) => f(view, pos, event));
}
function handleTripleClick(view, pos, inside, event) {
  return runHandlerOnContext(view, "handleTripleClickOn", pos, inside, event) || view.someProp("handleTripleClick", (f) => f(view, pos, event)) || defaultTripleClick(view, inside, event);
}
function defaultTripleClick(view, inside, event) {
  if (event.button != 0) return false;
  let doc4 = view.state.doc;
  if (inside == -1) {
    if (doc4.inlineContent) {
      updateSelection(view, TextSelection.create(doc4, 0, doc4.content.size), "pointer");
      return true;
    }
    return false;
  }
  let $pos = doc4.resolve(inside);
  for (let i = $pos.depth + 1; i > 0; i--) {
    let node = i > $pos.depth ? $pos.nodeAfter : $pos.node(i);
    let nodePos = $pos.before(i);
    if (node.inlineContent) updateSelection(view, TextSelection.create(doc4, nodePos + 1, nodePos + 1 + node.content.size), "pointer");
    else if (NodeSelection.isSelectable(node)) updateSelection(view, NodeSelection.create(doc4, nodePos), "pointer");
    else continue;
    return true;
  }
}
function forceDOMFlush(view) {
  return endComposition(view);
}
var selectNodeModifier = mac ? "metaKey" : "ctrlKey";
handlers.mousedown = (view, _event) => {
  let event = _event;
  view.input.shiftKey = event.shiftKey;
  let flushed = forceDOMFlush(view);
  let now = Date.now(), type = "singleClick";
  if (now - view.input.lastClick.time < 500 && isNear(event, view.input.lastClick) && !event[selectNodeModifier] && view.input.lastClick.button == event.button) {
    if (view.input.lastClick.type == "singleClick") type = "doubleClick";
    else if (view.input.lastClick.type == "doubleClick") type = "tripleClick";
  }
  view.input.lastClick = {
    time: now,
    x: event.clientX,
    y: event.clientY,
    type,
    button: event.button
  };
  let pos = view.posAtCoords(eventCoords(event));
  if (!pos) return;
  if (type == "singleClick") {
    if (view.input.mouseDown) view.input.mouseDown.done();
    view.input.mouseDown = new MouseDown(view, pos, event, !!flushed);
  } else if ((type == "doubleClick" ? handleDoubleClick : handleTripleClick)(view, pos.pos, pos.inside, event)) {
    event.preventDefault();
  } else {
    setSelectionOrigin(view, "pointer");
  }
};
var MouseDown = class {
  constructor(view, pos, event, flushed) {
    this.view = view;
    this.pos = pos;
    this.event = event;
    this.flushed = flushed;
    this.delayedSelectionSync = false;
    this.mightDrag = null;
    this.startDoc = view.state.doc;
    this.selectNode = !!event[selectNodeModifier];
    this.allowDefault = event.shiftKey;
    let targetNode, targetPos;
    if (pos.inside > -1) {
      targetNode = view.state.doc.nodeAt(pos.inside);
      targetPos = pos.inside;
    } else {
      let $pos = view.state.doc.resolve(pos.pos);
      targetNode = $pos.parent;
      targetPos = $pos.depth ? $pos.before() : 0;
    }
    const target = flushed ? null : event.target;
    const targetDesc = target ? view.docView.nearestDesc(target, true) : null;
    this.target = targetDesc && targetDesc.nodeDOM.nodeType == 1 ? targetDesc.nodeDOM : null;
    let {
      selection
    } = view.state;
    if (event.button == 0 && targetNode.type.spec.draggable && targetNode.type.spec.selectable !== false || selection instanceof NodeSelection && selection.from <= targetPos && selection.to > targetPos) this.mightDrag = {
      node: targetNode,
      pos: targetPos,
      addAttr: !!(this.target && !this.target.draggable),
      setUneditable: !!(this.target && gecko && !this.target.hasAttribute("contentEditable"))
    };
    if (this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable)) {
      this.view.domObserver.stop();
      if (this.mightDrag.addAttr) this.target.draggable = true;
      if (this.mightDrag.setUneditable) setTimeout(() => {
        if (this.view.input.mouseDown == this) this.target.setAttribute("contentEditable", "false");
      }, 20);
      this.view.domObserver.start();
    }
    view.root.addEventListener("mouseup", this.up = this.up.bind(this));
    view.root.addEventListener("mousemove", this.move = this.move.bind(this));
    setSelectionOrigin(view, "pointer");
  }
  done() {
    this.view.root.removeEventListener("mouseup", this.up);
    this.view.root.removeEventListener("mousemove", this.move);
    if (this.mightDrag && this.target) {
      this.view.domObserver.stop();
      if (this.mightDrag.addAttr) this.target.removeAttribute("draggable");
      if (this.mightDrag.setUneditable) this.target.removeAttribute("contentEditable");
      this.view.domObserver.start();
    }
    if (this.delayedSelectionSync) setTimeout(() => selectionToDOM(this.view));
    this.view.input.mouseDown = null;
  }
  up(event) {
    this.done();
    if (!this.view.dom.contains(event.target)) return;
    let pos = this.pos;
    if (this.view.state.doc != this.startDoc) pos = this.view.posAtCoords(eventCoords(event));
    this.updateAllowDefault(event);
    if (this.allowDefault || !pos) {
      setSelectionOrigin(this.view, "pointer");
    } else if (handleSingleClick(this.view, pos.pos, pos.inside, event, this.selectNode)) {
      event.preventDefault();
    } else if (event.button == 0 && (this.flushed || // Safari ignores clicks on draggable elements
    safari && this.mightDrag && !this.mightDrag.node.isAtom || // Chrome will sometimes treat a node selection as a
    // cursor, but still report that the node is selected
    // when asked through getSelection. You'll then get a
    // situation where clicking at the point where that
    // (hidden) cursor is doesn't change the selection, and
    // thus doesn't get a reaction from ProseMirror. This
    // works around that.
    chrome && !this.view.state.selection.visible && Math.min(Math.abs(pos.pos - this.view.state.selection.from), Math.abs(pos.pos - this.view.state.selection.to)) <= 2)) {
      updateSelection(this.view, Selection.near(this.view.state.doc.resolve(pos.pos)), "pointer");
      event.preventDefault();
    } else {
      setSelectionOrigin(this.view, "pointer");
    }
  }
  move(event) {
    this.updateAllowDefault(event);
    setSelectionOrigin(this.view, "pointer");
    if (event.buttons == 0) this.done();
  }
  updateAllowDefault(event) {
    if (!this.allowDefault && (Math.abs(this.event.x - event.clientX) > 4 || Math.abs(this.event.y - event.clientY) > 4)) this.allowDefault = true;
  }
};
handlers.touchstart = (view) => {
  view.input.lastTouch = Date.now();
  forceDOMFlush(view);
  setSelectionOrigin(view, "pointer");
};
handlers.touchmove = (view) => {
  view.input.lastTouch = Date.now();
  setSelectionOrigin(view, "pointer");
};
handlers.contextmenu = (view) => forceDOMFlush(view);
function inOrNearComposition(view, event) {
  if (view.composing) return true;
  if (safari && Math.abs(event.timeStamp - view.input.compositionEndedAt) < 500) {
    view.input.compositionEndedAt = -2e8;
    return true;
  }
  return false;
}
var timeoutComposition = android ? 5e3 : -1;
editHandlers.compositionstart = editHandlers.compositionupdate = (view) => {
  if (!view.composing) {
    view.domObserver.flush();
    let {
      state: state2
    } = view, $pos = state2.selection.$to;
    if (state2.selection instanceof TextSelection && (state2.storedMarks || !$pos.textOffset && $pos.parentOffset && $pos.nodeBefore.marks.some((m) => m.type.spec.inclusive === false))) {
      view.markCursor = view.state.storedMarks || $pos.marks();
      endComposition(view, true);
      view.markCursor = null;
    } else {
      endComposition(view, !state2.selection.empty);
      if (gecko && state2.selection.empty && $pos.parentOffset && !$pos.textOffset && $pos.nodeBefore.marks.length) {
        let sel = view.domSelectionRange();
        for (let node = sel.focusNode, offset3 = sel.focusOffset; node && node.nodeType == 1 && offset3 != 0; ) {
          let before = offset3 < 0 ? node.lastChild : node.childNodes[offset3 - 1];
          if (!before) break;
          if (before.nodeType == 3) {
            let sel2 = view.domSelection();
            if (sel2) sel2.collapse(before, before.nodeValue.length);
            break;
          } else {
            node = before;
            offset3 = -1;
          }
        }
      }
    }
    view.input.composing = true;
  }
  scheduleComposeEnd(view, timeoutComposition);
};
editHandlers.compositionend = (view, event) => {
  if (view.composing) {
    view.input.composing = false;
    view.input.compositionEndedAt = event.timeStamp;
    view.input.compositionPendingChanges = view.domObserver.pendingRecords().length ? view.input.compositionID : 0;
    view.input.compositionNode = null;
    if (view.input.compositionPendingChanges) Promise.resolve().then(() => view.domObserver.flush());
    view.input.compositionID++;
    scheduleComposeEnd(view, 20);
  }
};
function scheduleComposeEnd(view, delay) {
  clearTimeout(view.input.composingTimeout);
  if (delay > -1) view.input.composingTimeout = setTimeout(() => endComposition(view), delay);
}
function clearComposition(view) {
  if (view.composing) {
    view.input.composing = false;
    view.input.compositionEndedAt = timestampFromCustomEvent();
  }
  while (view.input.compositionNodes.length > 0) view.input.compositionNodes.pop().markParentsDirty();
}
function findCompositionNode(view) {
  let sel = view.domSelectionRange();
  if (!sel.focusNode) return null;
  let textBefore = textNodeBefore$1(sel.focusNode, sel.focusOffset);
  let textAfter = textNodeAfter$1(sel.focusNode, sel.focusOffset);
  if (textBefore && textAfter && textBefore != textAfter) {
    let descAfter = textAfter.pmViewDesc, lastChanged = view.domObserver.lastChangedTextNode;
    if (textBefore == lastChanged || textAfter == lastChanged) return lastChanged;
    if (!descAfter || !descAfter.isText(textAfter.nodeValue)) {
      return textAfter;
    } else if (view.input.compositionNode == textAfter) {
      let descBefore = textBefore.pmViewDesc;
      if (!(!descBefore || !descBefore.isText(textBefore.nodeValue))) return textAfter;
    }
  }
  return textBefore || textAfter;
}
function timestampFromCustomEvent() {
  let event = document.createEvent("Event");
  event.initEvent("event", true, true);
  return event.timeStamp;
}
function endComposition(view, restarting = false) {
  if (android && view.domObserver.flushingSoon >= 0) return;
  view.domObserver.forceFlush();
  clearComposition(view);
  if (restarting || view.docView && view.docView.dirty) {
    let sel = selectionFromDOM(view), cur = view.state.selection;
    if (sel && !sel.eq(cur)) view.dispatch(view.state.tr.setSelection(sel));
    else if ((view.markCursor || restarting) && !cur.$from.node(cur.$from.sharedDepth(cur.to)).inlineContent) view.dispatch(view.state.tr.deleteSelection());
    else view.updateState(view.state);
    return true;
  }
  return false;
}
function captureCopy(view, dom) {
  if (!view.dom.parentNode) return;
  let wrap2 = view.dom.parentNode.appendChild(document.createElement("div"));
  wrap2.appendChild(dom);
  wrap2.style.cssText = "position: fixed; left: -10000px; top: 10px";
  let sel = getSelection(), range = document.createRange();
  range.selectNodeContents(dom);
  view.dom.blur();
  sel.removeAllRanges();
  sel.addRange(range);
  setTimeout(() => {
    if (wrap2.parentNode) wrap2.parentNode.removeChild(wrap2);
    view.focus();
  }, 50);
}
var brokenClipboardAPI = ie && ie_version < 15 || ios && webkit_version < 604;
handlers.copy = editHandlers.cut = (view, _event) => {
  let event = _event;
  let sel = view.state.selection, cut = event.type == "cut";
  if (sel.empty) return;
  let data = brokenClipboardAPI ? null : event.clipboardData;
  let slice2 = sel.content(), {
    dom,
    text: text2
  } = serializeForClipboard(view, slice2);
  if (data) {
    event.preventDefault();
    data.clearData();
    data.setData("text/html", dom.innerHTML);
    data.setData("text/plain", text2);
  } else {
    captureCopy(view, dom);
  }
  if (cut) view.dispatch(view.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function sliceSingleNode(slice2) {
  return slice2.openStart == 0 && slice2.openEnd == 0 && slice2.content.childCount == 1 ? slice2.content.firstChild : null;
}
function capturePaste(view, event) {
  if (!view.dom.parentNode) return;
  let plainText = view.input.shiftKey || view.state.selection.$from.parent.type.spec.code;
  let target = view.dom.parentNode.appendChild(document.createElement(plainText ? "textarea" : "div"));
  if (!plainText) target.contentEditable = "true";
  target.style.cssText = "position: fixed; left: -10000px; top: 10px";
  target.focus();
  let plain = view.input.shiftKey && view.input.lastKeyCode != 45;
  setTimeout(() => {
    view.focus();
    if (target.parentNode) target.parentNode.removeChild(target);
    if (plainText) doPaste(view, target.value, null, plain, event);
    else doPaste(view, target.textContent, target.innerHTML, plain, event);
  }, 50);
}
function doPaste(view, text2, html, preferPlain, event) {
  let slice2 = parseFromClipboard(view, text2, html, preferPlain, view.state.selection.$from);
  if (view.someProp("handlePaste", (f) => f(view, event, slice2 || Slice.empty))) return true;
  if (!slice2) return false;
  let singleNode = sliceSingleNode(slice2);
  let tr = singleNode ? view.state.tr.replaceSelectionWith(singleNode, preferPlain) : view.state.tr.replaceSelection(slice2);
  view.dispatch(tr.scrollIntoView().setMeta("paste", true).setMeta("uiEvent", "paste"));
  return true;
}
function getText(clipboardData) {
  let text2 = clipboardData.getData("text/plain") || clipboardData.getData("Text");
  if (text2) return text2;
  let uris = clipboardData.getData("text/uri-list");
  return uris ? uris.replace(/\r?\n/g, " ") : "";
}
editHandlers.paste = (view, _event) => {
  let event = _event;
  if (view.composing && !android) return;
  let data = brokenClipboardAPI ? null : event.clipboardData;
  let plain = view.input.shiftKey && view.input.lastKeyCode != 45;
  if (data && doPaste(view, getText(data), data.getData("text/html"), plain, event)) event.preventDefault();
  else capturePaste(view, event);
};
var Dragging = class {
  constructor(slice2, move, node) {
    this.slice = slice2;
    this.move = move;
    this.node = node;
  }
};
var dragCopyModifier = mac ? "altKey" : "ctrlKey";
function dragMoves(view, event) {
  let moves = view.someProp("dragCopies", (test) => !test(event));
  return moves != null ? moves : !event[dragCopyModifier];
}
handlers.dragstart = (view, _event) => {
  let event = _event;
  let mouseDown = view.input.mouseDown;
  if (mouseDown) mouseDown.done();
  if (!event.dataTransfer) return;
  let sel = view.state.selection;
  let pos = sel.empty ? null : view.posAtCoords(eventCoords(event));
  let node;
  if (pos && pos.pos >= sel.from && pos.pos <= (sel instanceof NodeSelection ? sel.to - 1 : sel.to)) ;
  else if (mouseDown && mouseDown.mightDrag) {
    node = NodeSelection.create(view.state.doc, mouseDown.mightDrag.pos);
  } else if (event.target && event.target.nodeType == 1) {
    let desc = view.docView.nearestDesc(event.target, true);
    if (desc && desc.node.type.spec.draggable && desc != view.docView) node = NodeSelection.create(view.state.doc, desc.posBefore);
  }
  let draggedSlice = (node || view.state.selection).content();
  let {
    dom,
    text: text2,
    slice: slice2
  } = serializeForClipboard(view, draggedSlice);
  if (!event.dataTransfer.files.length || !chrome || chrome_version > 120) event.dataTransfer.clearData();
  event.dataTransfer.setData(brokenClipboardAPI ? "Text" : "text/html", dom.innerHTML);
  event.dataTransfer.effectAllowed = "copyMove";
  if (!brokenClipboardAPI) event.dataTransfer.setData("text/plain", text2);
  view.dragging = new Dragging(slice2, dragMoves(view, event), node);
};
handlers.dragend = (view) => {
  let dragging = view.dragging;
  window.setTimeout(() => {
    if (view.dragging == dragging) view.dragging = null;
  }, 50);
};
editHandlers.dragover = editHandlers.dragenter = (_, e) => e.preventDefault();
editHandlers.drop = (view, _event) => {
  let event = _event;
  let dragging = view.dragging;
  view.dragging = null;
  if (!event.dataTransfer) return;
  let eventPos = view.posAtCoords(eventCoords(event));
  if (!eventPos) return;
  let $mouse = view.state.doc.resolve(eventPos.pos);
  let slice2 = dragging && dragging.slice;
  if (slice2) {
    view.someProp("transformPasted", (f) => {
      slice2 = f(slice2, view, false);
    });
  } else {
    slice2 = parseFromClipboard(view, getText(event.dataTransfer), brokenClipboardAPI ? null : event.dataTransfer.getData("text/html"), false, $mouse);
  }
  let move = !!(dragging && dragMoves(view, event));
  if (view.someProp("handleDrop", (f) => f(view, event, slice2 || Slice.empty, move))) {
    event.preventDefault();
    return;
  }
  if (!slice2) return;
  event.preventDefault();
  let insertPos = slice2 ? dropPoint(view.state.doc, $mouse.pos, slice2) : $mouse.pos;
  if (insertPos == null) insertPos = $mouse.pos;
  let tr = view.state.tr;
  if (move) {
    let {
      node
    } = dragging;
    if (node) node.replace(tr);
    else tr.deleteSelection();
  }
  let pos = tr.mapping.map(insertPos);
  let isNode2 = slice2.openStart == 0 && slice2.openEnd == 0 && slice2.content.childCount == 1;
  let beforeInsert = tr.doc;
  if (isNode2) tr.replaceRangeWith(pos, pos, slice2.content.firstChild);
  else tr.replaceRange(pos, pos, slice2);
  if (tr.doc.eq(beforeInsert)) return;
  let $pos = tr.doc.resolve(pos);
  if (isNode2 && NodeSelection.isSelectable(slice2.content.firstChild) && $pos.nodeAfter && $pos.nodeAfter.sameMarkup(slice2.content.firstChild)) {
    tr.setSelection(new NodeSelection($pos));
  } else {
    let end = tr.mapping.map(insertPos);
    tr.mapping.maps[tr.mapping.maps.length - 1].forEach((_from, _to, _newFrom, newTo) => end = newTo);
    tr.setSelection(selectionBetween(view, $pos, tr.doc.resolve(end)));
  }
  view.focus();
  view.dispatch(tr.setMeta("uiEvent", "drop"));
};
handlers.focus = (view) => {
  view.input.lastFocus = Date.now();
  if (!view.focused) {
    view.domObserver.stop();
    view.dom.classList.add("ProseMirror-focused");
    view.domObserver.start();
    view.focused = true;
    setTimeout(() => {
      if (view.docView && view.hasFocus() && !view.domObserver.currentSelection.eq(view.domSelectionRange())) selectionToDOM(view);
    }, 20);
  }
};
handlers.blur = (view, _event) => {
  let event = _event;
  if (view.focused) {
    view.domObserver.stop();
    view.dom.classList.remove("ProseMirror-focused");
    view.domObserver.start();
    if (event.relatedTarget && view.dom.contains(event.relatedTarget)) view.domObserver.currentSelection.clear();
    view.focused = false;
  }
};
handlers.beforeinput = (view, _event) => {
  let event = _event;
  if (chrome && android && event.inputType == "deleteContentBackward") {
    view.domObserver.flushSoon();
    let {
      domChangeCount
    } = view.input;
    setTimeout(() => {
      if (view.input.domChangeCount != domChangeCount) return;
      view.dom.blur();
      view.focus();
      if (view.someProp("handleKeyDown", (f) => f(view, keyEvent(8, "Backspace")))) return;
      let {
        $cursor
      } = view.state.selection;
      if ($cursor && $cursor.pos > 0) view.dispatch(view.state.tr.delete($cursor.pos - 1, $cursor.pos).scrollIntoView());
    }, 50);
  }
};
for (let prop in editHandlers) handlers[prop] = editHandlers[prop];
function compareObjs(a, b) {
  if (a == b) return true;
  for (let p in a) if (a[p] !== b[p]) return false;
  for (let p in b) if (!(p in a)) return false;
  return true;
}
var WidgetType = class _WidgetType {
  constructor(toDOM, spec) {
    this.toDOM = toDOM;
    this.spec = spec || noSpec;
    this.side = this.spec.side || 0;
  }
  map(mapping, span, offset3, oldOffset) {
    let {
      pos,
      deleted
    } = mapping.mapResult(span.from + oldOffset, this.side < 0 ? -1 : 1);
    return deleted ? null : new Decoration(pos - offset3, pos - offset3, this);
  }
  valid() {
    return true;
  }
  eq(other) {
    return this == other || other instanceof _WidgetType && (this.spec.key && this.spec.key == other.spec.key || this.toDOM == other.toDOM && compareObjs(this.spec, other.spec));
  }
  destroy(node) {
    if (this.spec.destroy) this.spec.destroy(node);
  }
};
var InlineType = class _InlineType {
  constructor(attrs, spec) {
    this.attrs = attrs;
    this.spec = spec || noSpec;
  }
  map(mapping, span, offset3, oldOffset) {
    let from2 = mapping.map(span.from + oldOffset, this.spec.inclusiveStart ? -1 : 1) - offset3;
    let to = mapping.map(span.to + oldOffset, this.spec.inclusiveEnd ? 1 : -1) - offset3;
    return from2 >= to ? null : new Decoration(from2, to, this);
  }
  valid(_, span) {
    return span.from < span.to;
  }
  eq(other) {
    return this == other || other instanceof _InlineType && compareObjs(this.attrs, other.attrs) && compareObjs(this.spec, other.spec);
  }
  static is(span) {
    return span.type instanceof _InlineType;
  }
  destroy() {
  }
};
var NodeType2 = class _NodeType {
  constructor(attrs, spec) {
    this.attrs = attrs;
    this.spec = spec || noSpec;
  }
  map(mapping, span, offset3, oldOffset) {
    let from2 = mapping.mapResult(span.from + oldOffset, 1);
    if (from2.deleted) return null;
    let to = mapping.mapResult(span.to + oldOffset, -1);
    if (to.deleted || to.pos <= from2.pos) return null;
    return new Decoration(from2.pos - offset3, to.pos - offset3, this);
  }
  valid(node, span) {
    let {
      index,
      offset: offset3
    } = node.content.findIndex(span.from), child;
    return offset3 == span.from && !(child = node.child(index)).isText && offset3 + child.nodeSize == span.to;
  }
  eq(other) {
    return this == other || other instanceof _NodeType && compareObjs(this.attrs, other.attrs) && compareObjs(this.spec, other.spec);
  }
  destroy() {
  }
};
var Decoration = class _Decoration {
  /**
  @internal
  */
  constructor(from2, to, type) {
    this.from = from2;
    this.to = to;
    this.type = type;
  }
  /**
  @internal
  */
  copy(from2, to) {
    return new _Decoration(from2, to, this.type);
  }
  /**
  @internal
  */
  eq(other, offset3 = 0) {
    return this.type.eq(other.type) && this.from + offset3 == other.from && this.to + offset3 == other.to;
  }
  /**
  @internal
  */
  map(mapping, offset3, oldOffset) {
    return this.type.map(mapping, this, offset3, oldOffset);
  }
  /**
  Creates a widget decoration, which is a DOM node that's shown in
  the document at the given position. It is recommended that you
  delay rendering the widget by passing a function that will be
  called when the widget is actually drawn in a view, but you can
  also directly pass a DOM node. `getPos` can be used to find the
  widget's current document position.
  */
  static widget(pos, toDOM, spec) {
    return new _Decoration(pos, pos, new WidgetType(toDOM, spec));
  }
  /**
  Creates an inline decoration, which adds the given attributes to
  each inline node between `from` and `to`.
  */
  static inline(from2, to, attrs, spec) {
    return new _Decoration(from2, to, new InlineType(attrs, spec));
  }
  /**
  Creates a node decoration. `from` and `to` should point precisely
  before and after a node in the document. That node, and only that
  node, will receive the given attributes.
  */
  static node(from2, to, attrs, spec) {
    return new _Decoration(from2, to, new NodeType2(attrs, spec));
  }
  /**
  The spec provided when creating this decoration. Can be useful
  if you've stored extra information in that object.
  */
  get spec() {
    return this.type.spec;
  }
  /**
  @internal
  */
  get inline() {
    return this.type instanceof InlineType;
  }
  /**
  @internal
  */
  get widget() {
    return this.type instanceof WidgetType;
  }
};
var none = [];
var noSpec = {};
var DecorationSet = class _DecorationSet {
  /**
  @internal
  */
  constructor(local, children) {
    this.local = local.length ? local : none;
    this.children = children.length ? children : none;
  }
  /**
  Create a set of decorations, using the structure of the given
  document. This will consume (modify) the `decorations` array, so
  you must make a copy if you want need to preserve that.
  */
  static create(doc4, decorations) {
    return decorations.length ? buildTree(decorations, doc4, 0, noSpec) : empty;
  }
  /**
  Find all decorations in this set which touch the given range
  (including decorations that start or end directly at the
  boundaries) and match the given predicate on their spec. When
  `start` and `end` are omitted, all decorations in the set are
  considered. When `predicate` isn't given, all decorations are
  assumed to match.
  */
  find(start, end, predicate) {
    let result = [];
    this.findInner(start == null ? 0 : start, end == null ? 1e9 : end, result, 0, predicate);
    return result;
  }
  findInner(start, end, result, offset3, predicate) {
    for (let i = 0; i < this.local.length; i++) {
      let span = this.local[i];
      if (span.from <= end && span.to >= start && (!predicate || predicate(span.spec))) result.push(span.copy(span.from + offset3, span.to + offset3));
    }
    for (let i = 0; i < this.children.length; i += 3) {
      if (this.children[i] < end && this.children[i + 1] > start) {
        let childOff = this.children[i] + 1;
        this.children[i + 2].findInner(start - childOff, end - childOff, result, offset3 + childOff, predicate);
      }
    }
  }
  /**
  Map the set of decorations in response to a change in the
  document.
  */
  map(mapping, doc4, options) {
    if (this == empty || mapping.maps.length == 0) return this;
    return this.mapInner(mapping, doc4, 0, 0, options || noSpec);
  }
  /**
  @internal
  */
  mapInner(mapping, node, offset3, oldOffset, options) {
    let newLocal;
    for (let i = 0; i < this.local.length; i++) {
      let mapped = this.local[i].map(mapping, offset3, oldOffset);
      if (mapped && mapped.type.valid(node, mapped)) (newLocal || (newLocal = [])).push(mapped);
      else if (options.onRemove) options.onRemove(this.local[i].spec);
    }
    if (this.children.length) return mapChildren(this.children, newLocal || [], mapping, node, offset3, oldOffset, options);
    else return newLocal ? new _DecorationSet(newLocal.sort(byPos), none) : empty;
  }
  /**
  Add the given array of decorations to the ones in the set,
  producing a new set. Consumes the `decorations` array. Needs
  access to the current document to create the appropriate tree
  structure.
  */
  add(doc4, decorations) {
    if (!decorations.length) return this;
    if (this == empty) return _DecorationSet.create(doc4, decorations);
    return this.addInner(doc4, decorations, 0);
  }
  addInner(doc4, decorations, offset3) {
    let children, childIndex = 0;
    doc4.forEach((childNode, childOffset) => {
      let baseOffset = childOffset + offset3, found2;
      if (!(found2 = takeSpansForNode(decorations, childNode, baseOffset))) return;
      if (!children) children = this.children.slice();
      while (childIndex < children.length && children[childIndex] < childOffset) childIndex += 3;
      if (children[childIndex] == childOffset) children[childIndex + 2] = children[childIndex + 2].addInner(childNode, found2, baseOffset + 1);
      else children.splice(childIndex, 0, childOffset, childOffset + childNode.nodeSize, buildTree(found2, childNode, baseOffset + 1, noSpec));
      childIndex += 3;
    });
    let local = moveSpans(childIndex ? withoutNulls(decorations) : decorations, -offset3);
    for (let i = 0; i < local.length; i++) if (!local[i].type.valid(doc4, local[i])) local.splice(i--, 1);
    return new _DecorationSet(local.length ? this.local.concat(local).sort(byPos) : this.local, children || this.children);
  }
  /**
  Create a new set that contains the decorations in this set, minus
  the ones in the given array.
  */
  remove(decorations) {
    if (decorations.length == 0 || this == empty) return this;
    return this.removeInner(decorations, 0);
  }
  removeInner(decorations, offset3) {
    let children = this.children, local = this.local;
    for (let i = 0; i < children.length; i += 3) {
      let found2;
      let from2 = children[i] + offset3, to = children[i + 1] + offset3;
      for (let j = 0, span; j < decorations.length; j++) if (span = decorations[j]) {
        if (span.from > from2 && span.to < to) {
          decorations[j] = null;
          (found2 || (found2 = [])).push(span);
        }
      }
      if (!found2) continue;
      if (children == this.children) children = this.children.slice();
      let removed = children[i + 2].removeInner(found2, from2 + 1);
      if (removed != empty) {
        children[i + 2] = removed;
      } else {
        children.splice(i, 3);
        i -= 3;
      }
    }
    if (local.length) {
      for (let i = 0, span; i < decorations.length; i++) if (span = decorations[i]) {
        for (let j = 0; j < local.length; j++) if (local[j].eq(span, offset3)) {
          if (local == this.local) local = this.local.slice();
          local.splice(j--, 1);
        }
      }
    }
    if (children == this.children && local == this.local) return this;
    return local.length || children.length ? new _DecorationSet(local, children) : empty;
  }
  forChild(offset3, node) {
    if (this == empty) return this;
    if (node.isLeaf) return _DecorationSet.empty;
    let child, local;
    for (let i = 0; i < this.children.length; i += 3) if (this.children[i] >= offset3) {
      if (this.children[i] == offset3) child = this.children[i + 2];
      break;
    }
    let start = offset3 + 1, end = start + node.content.size;
    for (let i = 0; i < this.local.length; i++) {
      let dec = this.local[i];
      if (dec.from < end && dec.to > start && dec.type instanceof InlineType) {
        let from2 = Math.max(start, dec.from) - start, to = Math.min(end, dec.to) - start;
        if (from2 < to) (local || (local = [])).push(dec.copy(from2, to));
      }
    }
    if (local) {
      let localSet = new _DecorationSet(local.sort(byPos), none);
      return child ? new DecorationGroup([localSet, child]) : localSet;
    }
    return child || empty;
  }
  /**
  @internal
  */
  eq(other) {
    if (this == other) return true;
    if (!(other instanceof _DecorationSet) || this.local.length != other.local.length || this.children.length != other.children.length) return false;
    for (let i = 0; i < this.local.length; i++) if (!this.local[i].eq(other.local[i])) return false;
    for (let i = 0; i < this.children.length; i += 3) if (this.children[i] != other.children[i] || this.children[i + 1] != other.children[i + 1] || !this.children[i + 2].eq(other.children[i + 2])) return false;
    return true;
  }
  /**
  @internal
  */
  locals(node) {
    return removeOverlap(this.localsInner(node));
  }
  /**
  @internal
  */
  localsInner(node) {
    if (this == empty) return none;
    if (node.inlineContent || !this.local.some(InlineType.is)) return this.local;
    let result = [];
    for (let i = 0; i < this.local.length; i++) {
      if (!(this.local[i].type instanceof InlineType)) result.push(this.local[i]);
    }
    return result;
  }
  forEachSet(f) {
    f(this);
  }
};
DecorationSet.empty = new DecorationSet([], []);
DecorationSet.removeOverlap = removeOverlap;
var empty = DecorationSet.empty;
var DecorationGroup = class _DecorationGroup {
  constructor(members) {
    this.members = members;
  }
  map(mapping, doc4) {
    const mappedDecos = this.members.map((member) => member.map(mapping, doc4, noSpec));
    return _DecorationGroup.from(mappedDecos);
  }
  forChild(offset3, child) {
    if (child.isLeaf) return DecorationSet.empty;
    let found2 = [];
    for (let i = 0; i < this.members.length; i++) {
      let result = this.members[i].forChild(offset3, child);
      if (result == empty) continue;
      if (result instanceof _DecorationGroup) found2 = found2.concat(result.members);
      else found2.push(result);
    }
    return _DecorationGroup.from(found2);
  }
  eq(other) {
    if (!(other instanceof _DecorationGroup) || other.members.length != this.members.length) return false;
    for (let i = 0; i < this.members.length; i++) if (!this.members[i].eq(other.members[i])) return false;
    return true;
  }
  locals(node) {
    let result, sorted = true;
    for (let i = 0; i < this.members.length; i++) {
      let locals = this.members[i].localsInner(node);
      if (!locals.length) continue;
      if (!result) {
        result = locals;
      } else {
        if (sorted) {
          result = result.slice();
          sorted = false;
        }
        for (let j = 0; j < locals.length; j++) result.push(locals[j]);
      }
    }
    return result ? removeOverlap(sorted ? result : result.sort(byPos)) : none;
  }
  // Create a group for the given array of decoration sets, or return
  // a single set when possible.
  static from(members) {
    switch (members.length) {
      case 0:
        return empty;
      case 1:
        return members[0];
      default:
        return new _DecorationGroup(members.every((m) => m instanceof DecorationSet) ? members : members.reduce((r, m) => r.concat(m instanceof DecorationSet ? m : m.members), []));
    }
  }
  forEachSet(f) {
    for (let i = 0; i < this.members.length; i++) this.members[i].forEachSet(f);
  }
};
function mapChildren(oldChildren, newLocal, mapping, node, offset3, oldOffset, options) {
  let children = oldChildren.slice();
  for (let i = 0, baseOffset = oldOffset; i < mapping.maps.length; i++) {
    let moved = 0;
    mapping.maps[i].forEach((oldStart, oldEnd, newStart, newEnd) => {
      let dSize = newEnd - newStart - (oldEnd - oldStart);
      for (let i2 = 0; i2 < children.length; i2 += 3) {
        let end = children[i2 + 1];
        if (end < 0 || oldStart > end + baseOffset - moved) continue;
        let start = children[i2] + baseOffset - moved;
        if (oldEnd >= start) {
          children[i2 + 1] = oldStart <= start ? -2 : -1;
        } else if (oldStart >= baseOffset && dSize) {
          children[i2] += dSize;
          children[i2 + 1] += dSize;
        }
      }
      moved += dSize;
    });
    baseOffset = mapping.maps[i].map(baseOffset, -1);
  }
  let mustRebuild = false;
  for (let i = 0; i < children.length; i += 3) if (children[i + 1] < 0) {
    if (children[i + 1] == -2) {
      mustRebuild = true;
      children[i + 1] = -1;
      continue;
    }
    let from2 = mapping.map(oldChildren[i] + oldOffset), fromLocal = from2 - offset3;
    if (fromLocal < 0 || fromLocal >= node.content.size) {
      mustRebuild = true;
      continue;
    }
    let to = mapping.map(oldChildren[i + 1] + oldOffset, -1), toLocal = to - offset3;
    let {
      index,
      offset: childOffset
    } = node.content.findIndex(fromLocal);
    let childNode = node.maybeChild(index);
    if (childNode && childOffset == fromLocal && childOffset + childNode.nodeSize == toLocal) {
      let mapped = children[i + 2].mapInner(mapping, childNode, from2 + 1, oldChildren[i] + oldOffset + 1, options);
      if (mapped != empty) {
        children[i] = fromLocal;
        children[i + 1] = toLocal;
        children[i + 2] = mapped;
      } else {
        children[i + 1] = -2;
        mustRebuild = true;
      }
    } else {
      mustRebuild = true;
    }
  }
  if (mustRebuild) {
    let decorations = mapAndGatherRemainingDecorations(children, oldChildren, newLocal, mapping, offset3, oldOffset, options);
    let built = buildTree(decorations, node, 0, options);
    newLocal = built.local;
    for (let i = 0; i < children.length; i += 3) if (children[i + 1] < 0) {
      children.splice(i, 3);
      i -= 3;
    }
    for (let i = 0, j = 0; i < built.children.length; i += 3) {
      let from2 = built.children[i];
      while (j < children.length && children[j] < from2) j += 3;
      children.splice(j, 0, built.children[i], built.children[i + 1], built.children[i + 2]);
    }
  }
  return new DecorationSet(newLocal.sort(byPos), children);
}
function moveSpans(spans, offset3) {
  if (!offset3 || !spans.length) return spans;
  let result = [];
  for (let i = 0; i < spans.length; i++) {
    let span = spans[i];
    result.push(new Decoration(span.from + offset3, span.to + offset3, span.type));
  }
  return result;
}
function mapAndGatherRemainingDecorations(children, oldChildren, decorations, mapping, offset3, oldOffset, options) {
  function gather(set, oldOffset2) {
    for (let i = 0; i < set.local.length; i++) {
      let mapped = set.local[i].map(mapping, offset3, oldOffset2);
      if (mapped) decorations.push(mapped);
      else if (options.onRemove) options.onRemove(set.local[i].spec);
    }
    for (let i = 0; i < set.children.length; i += 3) gather(set.children[i + 2], set.children[i] + oldOffset2 + 1);
  }
  for (let i = 0; i < children.length; i += 3) if (children[i + 1] == -1) gather(children[i + 2], oldChildren[i] + oldOffset + 1);
  return decorations;
}
function takeSpansForNode(spans, node, offset3) {
  if (node.isLeaf) return null;
  let end = offset3 + node.nodeSize, found2 = null;
  for (let i = 0, span; i < spans.length; i++) {
    if ((span = spans[i]) && span.from > offset3 && span.to < end) {
      (found2 || (found2 = [])).push(span);
      spans[i] = null;
    }
  }
  return found2;
}
function withoutNulls(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) if (array[i] != null) result.push(array[i]);
  return result;
}
function buildTree(spans, node, offset3, options) {
  let children = [], hasNulls = false;
  node.forEach((childNode, localStart) => {
    let found2 = takeSpansForNode(spans, childNode, localStart + offset3);
    if (found2) {
      hasNulls = true;
      let subtree = buildTree(found2, childNode, offset3 + localStart + 1, options);
      if (subtree != empty) children.push(localStart, localStart + childNode.nodeSize, subtree);
    }
  });
  let locals = moveSpans(hasNulls ? withoutNulls(spans) : spans, -offset3).sort(byPos);
  for (let i = 0; i < locals.length; i++) if (!locals[i].type.valid(node, locals[i])) {
    if (options.onRemove) options.onRemove(locals[i].spec);
    locals.splice(i--, 1);
  }
  return locals.length || children.length ? new DecorationSet(locals, children) : empty;
}
function byPos(a, b) {
  return a.from - b.from || a.to - b.to;
}
function removeOverlap(spans) {
  let working = spans;
  for (let i = 0; i < working.length - 1; i++) {
    let span = working[i];
    if (span.from != span.to) for (let j = i + 1; j < working.length; j++) {
      let next = working[j];
      if (next.from == span.from) {
        if (next.to != span.to) {
          if (working == spans) working = spans.slice();
          working[j] = next.copy(next.from, span.to);
          insertAhead(working, j + 1, next.copy(span.to, next.to));
        }
        continue;
      } else {
        if (next.from < span.to) {
          if (working == spans) working = spans.slice();
          working[i] = span.copy(span.from, next.from);
          insertAhead(working, j, span.copy(next.from, span.to));
        }
        break;
      }
    }
  }
  return working;
}
function insertAhead(array, i, deco) {
  while (i < array.length && byPos(deco, array[i]) > 0) i++;
  array.splice(i, 0, deco);
}
function viewDecorations(view) {
  let found2 = [];
  view.someProp("decorations", (f) => {
    let result = f(view.state);
    if (result && result != empty) found2.push(result);
  });
  if (view.cursorWrapper) found2.push(DecorationSet.create(view.state.doc, [view.cursorWrapper.deco]));
  return DecorationGroup.from(found2);
}
var observeOptions = {
  childList: true,
  characterData: true,
  characterDataOldValue: true,
  attributes: true,
  attributeOldValue: true,
  subtree: true
};
var useCharData = ie && ie_version <= 11;
var SelectionState = class {
  constructor() {
    this.anchorNode = null;
    this.anchorOffset = 0;
    this.focusNode = null;
    this.focusOffset = 0;
  }
  set(sel) {
    this.anchorNode = sel.anchorNode;
    this.anchorOffset = sel.anchorOffset;
    this.focusNode = sel.focusNode;
    this.focusOffset = sel.focusOffset;
  }
  clear() {
    this.anchorNode = this.focusNode = null;
  }
  eq(sel) {
    return sel.anchorNode == this.anchorNode && sel.anchorOffset == this.anchorOffset && sel.focusNode == this.focusNode && sel.focusOffset == this.focusOffset;
  }
};
var DOMObserver = class {
  constructor(view, handleDOMChange) {
    this.view = view;
    this.handleDOMChange = handleDOMChange;
    this.queue = [];
    this.flushingSoon = -1;
    this.observer = null;
    this.currentSelection = new SelectionState();
    this.onCharData = null;
    this.suppressingSelectionUpdates = false;
    this.lastChangedTextNode = null;
    this.observer = window.MutationObserver && new window.MutationObserver((mutations) => {
      for (let i = 0; i < mutations.length; i++) this.queue.push(mutations[i]);
      if (ie && ie_version <= 11 && mutations.some((m) => m.type == "childList" && m.removedNodes.length || m.type == "characterData" && m.oldValue.length > m.target.nodeValue.length)) this.flushSoon();
      else this.flush();
    });
    if (useCharData) {
      this.onCharData = (e) => {
        this.queue.push({
          target: e.target,
          type: "characterData",
          oldValue: e.prevValue
        });
        this.flushSoon();
      };
    }
    this.onSelectionChange = this.onSelectionChange.bind(this);
  }
  flushSoon() {
    if (this.flushingSoon < 0) this.flushingSoon = window.setTimeout(() => {
      this.flushingSoon = -1;
      this.flush();
    }, 20);
  }
  forceFlush() {
    if (this.flushingSoon > -1) {
      window.clearTimeout(this.flushingSoon);
      this.flushingSoon = -1;
      this.flush();
    }
  }
  start() {
    if (this.observer) {
      this.observer.takeRecords();
      this.observer.observe(this.view.dom, observeOptions);
    }
    if (this.onCharData) this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData);
    this.connectSelection();
  }
  stop() {
    if (this.observer) {
      let take = this.observer.takeRecords();
      if (take.length) {
        for (let i = 0; i < take.length; i++) this.queue.push(take[i]);
        window.setTimeout(() => this.flush(), 20);
      }
      this.observer.disconnect();
    }
    if (this.onCharData) this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData);
    this.disconnectSelection();
  }
  connectSelection() {
    this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
  }
  disconnectSelection() {
    this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
  }
  suppressSelectionUpdates() {
    this.suppressingSelectionUpdates = true;
    setTimeout(() => this.suppressingSelectionUpdates = false, 50);
  }
  onSelectionChange() {
    if (!hasFocusAndSelection(this.view)) return;
    if (this.suppressingSelectionUpdates) return selectionToDOM(this.view);
    if (ie && ie_version <= 11 && !this.view.state.selection.empty) {
      let sel = this.view.domSelectionRange();
      if (sel.focusNode && isEquivalentPosition(sel.focusNode, sel.focusOffset, sel.anchorNode, sel.anchorOffset)) return this.flushSoon();
    }
    this.flush();
  }
  setCurSelection() {
    this.currentSelection.set(this.view.domSelectionRange());
  }
  ignoreSelectionChange(sel) {
    if (!sel.focusNode) return true;
    let ancestors = /* @__PURE__ */ new Set(), container;
    for (let scan = sel.focusNode; scan; scan = parentNode(scan)) ancestors.add(scan);
    for (let scan = sel.anchorNode; scan; scan = parentNode(scan)) if (ancestors.has(scan)) {
      container = scan;
      break;
    }
    let desc = container && this.view.docView.nearestDesc(container);
    if (desc && desc.ignoreMutation({
      type: "selection",
      target: container.nodeType == 3 ? container.parentNode : container
    })) {
      this.setCurSelection();
      return true;
    }
  }
  pendingRecords() {
    if (this.observer) for (let mut of this.observer.takeRecords()) this.queue.push(mut);
    return this.queue;
  }
  flush() {
    let {
      view
    } = this;
    if (!view.docView || this.flushingSoon > -1) return;
    let mutations = this.pendingRecords();
    if (mutations.length) this.queue = [];
    let sel = view.domSelectionRange();
    let newSel = !this.suppressingSelectionUpdates && !this.currentSelection.eq(sel) && hasFocusAndSelection(view) && !this.ignoreSelectionChange(sel);
    let from2 = -1, to = -1, typeOver = false, added = [];
    if (view.editable) {
      for (let i = 0; i < mutations.length; i++) {
        let result = this.registerMutation(mutations[i], added);
        if (result) {
          from2 = from2 < 0 ? result.from : Math.min(result.from, from2);
          to = to < 0 ? result.to : Math.max(result.to, to);
          if (result.typeOver) typeOver = true;
        }
      }
    }
    if (gecko && added.length) {
      let brs = added.filter((n) => n.nodeName == "BR");
      if (brs.length == 2) {
        let [a, b] = brs;
        if (a.parentNode && a.parentNode.parentNode == b.parentNode) b.remove();
        else a.remove();
      } else {
        let {
          focusNode
        } = this.currentSelection;
        for (let br of brs) {
          let parent = br.parentNode;
          if (parent && parent.nodeName == "LI" && (!focusNode || blockParent(view, focusNode) != parent)) br.remove();
        }
      }
    }
    let readSel = null;
    if (from2 < 0 && newSel && view.input.lastFocus > Date.now() - 200 && Math.max(view.input.lastTouch, view.input.lastClick.time) < Date.now() - 300 && selectionCollapsed(sel) && (readSel = selectionFromDOM(view)) && readSel.eq(Selection.near(view.state.doc.resolve(0), 1))) {
      view.input.lastFocus = 0;
      selectionToDOM(view);
      this.currentSelection.set(sel);
      view.scrollToSelection();
    } else if (from2 > -1 || newSel) {
      if (from2 > -1) {
        view.docView.markDirty(from2, to);
        checkCSS(view);
      }
      this.handleDOMChange(from2, to, typeOver, added);
      if (view.docView && view.docView.dirty) view.updateState(view.state);
      else if (!this.currentSelection.eq(sel)) selectionToDOM(view);
      this.currentSelection.set(sel);
    }
  }
  registerMutation(mut, added) {
    if (added.indexOf(mut.target) > -1) return null;
    let desc = this.view.docView.nearestDesc(mut.target);
    if (mut.type == "attributes" && (desc == this.view.docView || mut.attributeName == "contenteditable" || // Firefox sometimes fires spurious events for null/empty styles
    mut.attributeName == "style" && !mut.oldValue && !mut.target.getAttribute("style"))) return null;
    if (!desc || desc.ignoreMutation(mut)) return null;
    if (mut.type == "childList") {
      for (let i = 0; i < mut.addedNodes.length; i++) {
        let node = mut.addedNodes[i];
        added.push(node);
        if (node.nodeType == 3) this.lastChangedTextNode = node;
      }
      if (desc.contentDOM && desc.contentDOM != desc.dom && !desc.contentDOM.contains(mut.target)) return {
        from: desc.posBefore,
        to: desc.posAfter
      };
      let prev = mut.previousSibling, next = mut.nextSibling;
      if (ie && ie_version <= 11 && mut.addedNodes.length) {
        for (let i = 0; i < mut.addedNodes.length; i++) {
          let {
            previousSibling,
            nextSibling
          } = mut.addedNodes[i];
          if (!previousSibling || Array.prototype.indexOf.call(mut.addedNodes, previousSibling) < 0) prev = previousSibling;
          if (!nextSibling || Array.prototype.indexOf.call(mut.addedNodes, nextSibling) < 0) next = nextSibling;
        }
      }
      let fromOffset = prev && prev.parentNode == mut.target ? domIndex(prev) + 1 : 0;
      let from2 = desc.localPosFromDOM(mut.target, fromOffset, -1);
      let toOffset = next && next.parentNode == mut.target ? domIndex(next) : mut.target.childNodes.length;
      let to = desc.localPosFromDOM(mut.target, toOffset, 1);
      return {
        from: from2,
        to
      };
    } else if (mut.type == "attributes") {
      return {
        from: desc.posAtStart - desc.border,
        to: desc.posAtEnd + desc.border
      };
    } else {
      this.lastChangedTextNode = mut.target;
      return {
        from: desc.posAtStart,
        to: desc.posAtEnd,
        // An event was generated for a text change that didn't change
        // any text. Mark the dom change to fall back to assuming the
        // selection was typed over with an identical value if it can't
        // find another change.
        typeOver: mut.target.nodeValue == mut.oldValue
      };
    }
  }
};
var cssChecked = /* @__PURE__ */ new WeakMap();
var cssCheckWarned = false;
function checkCSS(view) {
  if (cssChecked.has(view)) return;
  cssChecked.set(view, null);
  if (["normal", "nowrap", "pre-line"].indexOf(getComputedStyle(view.dom).whiteSpace) !== -1) {
    view.requiresGeckoHackNode = gecko;
    if (cssCheckWarned) return;
    console["warn"]("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package.");
    cssCheckWarned = true;
  }
}
function rangeToSelectionRange(view, range) {
  let anchorNode = range.startContainer, anchorOffset = range.startOffset;
  let focusNode = range.endContainer, focusOffset = range.endOffset;
  let currentAnchor = view.domAtPos(view.state.selection.anchor);
  if (isEquivalentPosition(currentAnchor.node, currentAnchor.offset, focusNode, focusOffset)) [anchorNode, anchorOffset, focusNode, focusOffset] = [focusNode, focusOffset, anchorNode, anchorOffset];
  return {
    anchorNode,
    anchorOffset,
    focusNode,
    focusOffset
  };
}
function safariShadowSelectionRange(view, selection) {
  if (selection.getComposedRanges) {
    let range = selection.getComposedRanges(view.root)[0];
    if (range) return rangeToSelectionRange(view, range);
  }
  let found2;
  function read(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    found2 = event.getTargetRanges()[0];
  }
  view.dom.addEventListener("beforeinput", read, true);
  document.execCommand("indent");
  view.dom.removeEventListener("beforeinput", read, true);
  return found2 ? rangeToSelectionRange(view, found2) : null;
}
function blockParent(view, node) {
  for (let p = node.parentNode; p && p != view.dom; p = p.parentNode) {
    let desc = view.docView.nearestDesc(p, true);
    if (desc && desc.node.isBlock) return p;
  }
  return null;
}
function parseBetween(view, from_, to_) {
  let {
    node: parent,
    fromOffset,
    toOffset,
    from: from2,
    to
  } = view.docView.parseRange(from_, to_);
  let domSel = view.domSelectionRange();
  let find;
  let anchor = domSel.anchorNode;
  if (anchor && view.dom.contains(anchor.nodeType == 1 ? anchor : anchor.parentNode)) {
    find = [{
      node: anchor,
      offset: domSel.anchorOffset
    }];
    if (!selectionCollapsed(domSel)) find.push({
      node: domSel.focusNode,
      offset: domSel.focusOffset
    });
  }
  if (chrome && view.input.lastKeyCode === 8) {
    for (let off = toOffset; off > fromOffset; off--) {
      let node = parent.childNodes[off - 1], desc = node.pmViewDesc;
      if (node.nodeName == "BR" && !desc) {
        toOffset = off;
        break;
      }
      if (!desc || desc.size) break;
    }
  }
  let startDoc = view.state.doc;
  let parser = view.someProp("domParser") || DOMParser.fromSchema(view.state.schema);
  let $from = startDoc.resolve(from2);
  let sel = null, doc4 = parser.parse(parent, {
    topNode: $from.parent,
    topMatch: $from.parent.contentMatchAt($from.index()),
    topOpen: true,
    from: fromOffset,
    to: toOffset,
    preserveWhitespace: $from.parent.type.whitespace == "pre" ? "full" : true,
    findPositions: find,
    ruleFromNode,
    context: $from
  });
  if (find && find[0].pos != null) {
    let anchor2 = find[0].pos, head = find[1] && find[1].pos;
    if (head == null) head = anchor2;
    sel = {
      anchor: anchor2 + from2,
      head: head + from2
    };
  }
  return {
    doc: doc4,
    sel,
    from: from2,
    to
  };
}
function ruleFromNode(dom) {
  let desc = dom.pmViewDesc;
  if (desc) {
    return desc.parseRule();
  } else if (dom.nodeName == "BR" && dom.parentNode) {
    if (safari && /^(ul|ol)$/i.test(dom.parentNode.nodeName)) {
      let skip = document.createElement("div");
      skip.appendChild(document.createElement("li"));
      return {
        skip
      };
    } else if (dom.parentNode.lastChild == dom || safari && /^(tr|table)$/i.test(dom.parentNode.nodeName)) {
      return {
        ignore: true
      };
    }
  } else if (dom.nodeName == "IMG" && dom.getAttribute("mark-placeholder")) {
    return {
      ignore: true
    };
  }
  return null;
}
var isInline = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|img|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
function readDOMChange(view, from2, to, typeOver, addedNodes) {
  let compositionID = view.input.compositionPendingChanges || (view.composing ? view.input.compositionID : 0);
  view.input.compositionPendingChanges = 0;
  if (from2 < 0) {
    let origin = view.input.lastSelectionTime > Date.now() - 50 ? view.input.lastSelectionOrigin : null;
    let newSel = selectionFromDOM(view, origin);
    if (newSel && !view.state.selection.eq(newSel)) {
      if (chrome && android && view.input.lastKeyCode === 13 && Date.now() - 100 < view.input.lastKeyCodeTime && view.someProp("handleKeyDown", (f) => f(view, keyEvent(13, "Enter")))) return;
      let tr = view.state.tr.setSelection(newSel);
      if (origin == "pointer") tr.setMeta("pointer", true);
      else if (origin == "key") tr.scrollIntoView();
      if (compositionID) tr.setMeta("composition", compositionID);
      view.dispatch(tr);
    }
    return;
  }
  let $before = view.state.doc.resolve(from2);
  let shared = $before.sharedDepth(to);
  from2 = $before.before(shared + 1);
  to = view.state.doc.resolve(to).after(shared + 1);
  let sel = view.state.selection;
  let parse = parseBetween(view, from2, to);
  let doc4 = view.state.doc, compare = doc4.slice(parse.from, parse.to);
  let preferredPos, preferredSide;
  if (view.input.lastKeyCode === 8 && Date.now() - 100 < view.input.lastKeyCodeTime) {
    preferredPos = view.state.selection.to;
    preferredSide = "end";
  } else {
    preferredPos = view.state.selection.from;
    preferredSide = "start";
  }
  view.input.lastKeyCode = null;
  let change = findDiff(compare.content, parse.doc.content, parse.from, preferredPos, preferredSide);
  if (change) view.input.domChangeCount++;
  if ((ios && view.input.lastIOSEnter > Date.now() - 225 || android) && addedNodes.some((n) => n.nodeType == 1 && !isInline.test(n.nodeName)) && (!change || change.endA >= change.endB) && view.someProp("handleKeyDown", (f) => f(view, keyEvent(13, "Enter")))) {
    view.input.lastIOSEnter = 0;
    return;
  }
  if (!change) {
    if (typeOver && sel instanceof TextSelection && !sel.empty && sel.$head.sameParent(sel.$anchor) && !view.composing && !(parse.sel && parse.sel.anchor != parse.sel.head)) {
      change = {
        start: sel.from,
        endA: sel.to,
        endB: sel.to
      };
    } else {
      if (parse.sel) {
        let sel2 = resolveSelection(view, view.state.doc, parse.sel);
        if (sel2 && !sel2.eq(view.state.selection)) {
          let tr = view.state.tr.setSelection(sel2);
          if (compositionID) tr.setMeta("composition", compositionID);
          view.dispatch(tr);
        }
      }
      return;
    }
  }
  if (view.state.selection.from < view.state.selection.to && change.start == change.endB && view.state.selection instanceof TextSelection) {
    if (change.start > view.state.selection.from && change.start <= view.state.selection.from + 2 && view.state.selection.from >= parse.from) {
      change.start = view.state.selection.from;
    } else if (change.endA < view.state.selection.to && change.endA >= view.state.selection.to - 2 && view.state.selection.to <= parse.to) {
      change.endB += view.state.selection.to - change.endA;
      change.endA = view.state.selection.to;
    }
  }
  if (ie && ie_version <= 11 && change.endB == change.start + 1 && change.endA == change.start && change.start > parse.from && parse.doc.textBetween(change.start - parse.from - 1, change.start - parse.from + 1) == " \xA0") {
    change.start--;
    change.endA--;
    change.endB--;
  }
  let $from = parse.doc.resolveNoCache(change.start - parse.from);
  let $to = parse.doc.resolveNoCache(change.endB - parse.from);
  let $fromA = doc4.resolve(change.start);
  let inlineChange = $from.sameParent($to) && $from.parent.inlineContent && $fromA.end() >= change.endA;
  if ((ios && view.input.lastIOSEnter > Date.now() - 225 && (!inlineChange || addedNodes.some((n) => n.nodeName == "DIV" || n.nodeName == "P")) || !inlineChange && $from.pos < parse.doc.content.size && (!$from.sameParent($to) || !$from.parent.inlineContent) && $from.pos < $to.pos && !/\S/.test(parse.doc.textBetween($from.pos, $to.pos, "", ""))) && view.someProp("handleKeyDown", (f) => f(view, keyEvent(13, "Enter")))) {
    view.input.lastIOSEnter = 0;
    return;
  }
  if (view.state.selection.anchor > change.start && looksLikeBackspace(doc4, change.start, change.endA, $from, $to) && view.someProp("handleKeyDown", (f) => f(view, keyEvent(8, "Backspace")))) {
    if (android && chrome) view.domObserver.suppressSelectionUpdates();
    return;
  }
  if (chrome && change.endB == change.start) view.input.lastChromeDelete = Date.now();
  if (android && !inlineChange && $from.start() != $to.start() && $to.parentOffset == 0 && $from.depth == $to.depth && parse.sel && parse.sel.anchor == parse.sel.head && parse.sel.head == change.endA) {
    change.endB -= 2;
    $to = parse.doc.resolveNoCache(change.endB - parse.from);
    setTimeout(() => {
      view.someProp("handleKeyDown", function(f) {
        return f(view, keyEvent(13, "Enter"));
      });
    }, 20);
  }
  let chFrom = change.start, chTo = change.endA;
  let mkTr = (base2) => {
    let tr = base2 || view.state.tr.replace(chFrom, chTo, parse.doc.slice(change.start - parse.from, change.endB - parse.from));
    if (parse.sel) {
      let sel2 = resolveSelection(view, tr.doc, parse.sel);
      if (sel2 && !(chrome && view.composing && sel2.empty && (change.start != change.endB || view.input.lastChromeDelete < Date.now() - 100) && (sel2.head == chFrom || sel2.head == tr.mapping.map(chTo) - 1) || ie && sel2.empty && sel2.head == chFrom)) tr.setSelection(sel2);
    }
    if (compositionID) tr.setMeta("composition", compositionID);
    return tr.scrollIntoView();
  };
  let markChange;
  if (inlineChange) {
    if ($from.pos == $to.pos) {
      if (ie && ie_version <= 11 && $from.parentOffset == 0) {
        view.domObserver.suppressSelectionUpdates();
        setTimeout(() => selectionToDOM(view), 20);
      }
      let tr = mkTr(view.state.tr.delete(chFrom, chTo));
      let marks2 = doc4.resolve(change.start).marksAcross(doc4.resolve(change.endA));
      if (marks2) tr.ensureMarks(marks2);
      view.dispatch(tr);
    } else if (
      // Adding or removing a mark
      change.endA == change.endB && (markChange = isMarkChange($from.parent.content.cut($from.parentOffset, $to.parentOffset), $fromA.parent.content.cut($fromA.parentOffset, change.endA - $fromA.start())))
    ) {
      let tr = mkTr(view.state.tr);
      if (markChange.type == "add") tr.addMark(chFrom, chTo, markChange.mark);
      else tr.removeMark(chFrom, chTo, markChange.mark);
      view.dispatch(tr);
    } else if ($from.parent.child($from.index()).isText && $from.index() == $to.index() - ($to.textOffset ? 0 : 1)) {
      let text2 = $from.parent.textBetween($from.parentOffset, $to.parentOffset);
      let deflt = () => mkTr(view.state.tr.insertText(text2, chFrom, chTo));
      if (!view.someProp("handleTextInput", (f) => f(view, chFrom, chTo, text2, deflt))) view.dispatch(deflt());
    } else {
      view.dispatch(mkTr());
    }
  } else {
    view.dispatch(mkTr());
  }
}
function resolveSelection(view, doc4, parsedSel) {
  if (Math.max(parsedSel.anchor, parsedSel.head) > doc4.content.size) return null;
  return selectionBetween(view, doc4.resolve(parsedSel.anchor), doc4.resolve(parsedSel.head));
}
function isMarkChange(cur, prev) {
  let curMarks = cur.firstChild.marks, prevMarks = prev.firstChild.marks;
  let added = curMarks, removed = prevMarks, type, mark, update;
  for (let i = 0; i < prevMarks.length; i++) added = prevMarks[i].removeFromSet(added);
  for (let i = 0; i < curMarks.length; i++) removed = curMarks[i].removeFromSet(removed);
  if (added.length == 1 && removed.length == 0) {
    mark = added[0];
    type = "add";
    update = (node) => node.mark(mark.addToSet(node.marks));
  } else if (added.length == 0 && removed.length == 1) {
    mark = removed[0];
    type = "remove";
    update = (node) => node.mark(mark.removeFromSet(node.marks));
  } else {
    return null;
  }
  let updated = [];
  for (let i = 0; i < prev.childCount; i++) updated.push(update(prev.child(i)));
  if (Fragment.from(updated).eq(cur)) return {
    mark,
    type
  };
}
function looksLikeBackspace(old, start, end, $newStart, $newEnd) {
  if (
    // The content must have shrunk
    end - start <= $newEnd.pos - $newStart.pos || // newEnd must point directly at or after the end of the block that newStart points into
    skipClosingAndOpening($newStart, true, false) < $newEnd.pos
  ) return false;
  let $start = old.resolve(start);
  if (!$newStart.parent.isTextblock) {
    let after = $start.nodeAfter;
    return after != null && end == start + after.nodeSize;
  }
  if ($start.parentOffset < $start.parent.content.size || !$start.parent.isTextblock) return false;
  let $next = old.resolve(skipClosingAndOpening($start, true, true));
  if (!$next.parent.isTextblock || $next.pos > end || skipClosingAndOpening($next, true, false) < end) return false;
  return $newStart.parent.content.cut($newStart.parentOffset).eq($next.parent.content);
}
function skipClosingAndOpening($pos, fromEnd, mayOpen) {
  let depth = $pos.depth, end = fromEnd ? $pos.end() : $pos.pos;
  while (depth > 0 && (fromEnd || $pos.indexAfter(depth) == $pos.node(depth).childCount)) {
    depth--;
    end++;
    fromEnd = false;
  }
  if (mayOpen) {
    let next = $pos.node(depth).maybeChild($pos.indexAfter(depth));
    while (next && !next.isLeaf) {
      next = next.firstChild;
      end++;
    }
  }
  return end;
}
function findDiff(a, b, pos, preferredPos, preferredSide) {
  let start = a.findDiffStart(b, pos);
  if (start == null) return null;
  let {
    a: endA,
    b: endB
  } = a.findDiffEnd(b, pos + a.size, pos + b.size);
  if (preferredSide == "end") {
    let adjust = Math.max(0, start - Math.min(endA, endB));
    preferredPos -= endA + adjust - start;
  }
  if (endA < start && a.size < b.size) {
    let move = preferredPos <= start && preferredPos >= endA ? start - preferredPos : 0;
    start -= move;
    if (start && start < b.size && isSurrogatePair(b.textBetween(start - 1, start + 1))) start += move ? 1 : -1;
    endB = start + (endB - endA);
    endA = start;
  } else if (endB < start) {
    let move = preferredPos <= start && preferredPos >= endB ? start - preferredPos : 0;
    start -= move;
    if (start && start < a.size && isSurrogatePair(a.textBetween(start - 1, start + 1))) start += move ? 1 : -1;
    endA = start + (endA - endB);
    endB = start;
  }
  return {
    start,
    endA,
    endB
  };
}
function isSurrogatePair(str) {
  if (str.length != 2) return false;
  let a = str.charCodeAt(0), b = str.charCodeAt(1);
  return a >= 56320 && a <= 57343 && b >= 55296 && b <= 56319;
}
var EditorView = class {
  /**
  Create a view. `place` may be a DOM node that the editor should
  be appended to, a function that will place it into the document,
  or an object whose `mount` property holds the node to use as the
  document container. If it is `null`, the editor will not be
  added to the document.
  */
  constructor(place, props) {
    this._root = null;
    this.focused = false;
    this.trackWrites = null;
    this.mounted = false;
    this.markCursor = null;
    this.cursorWrapper = null;
    this.lastSelectedViewDesc = void 0;
    this.input = new InputState();
    this.prevDirectPlugins = [];
    this.pluginViews = [];
    this.requiresGeckoHackNode = false;
    this.dragging = null;
    this._props = props;
    this.state = props.state;
    this.directPlugins = props.plugins || [];
    this.directPlugins.forEach(checkStateComponent);
    this.dispatch = this.dispatch.bind(this);
    this.dom = place && place.mount || document.createElement("div");
    if (place) {
      if (place.appendChild) place.appendChild(this.dom);
      else if (typeof place == "function") place(this.dom);
      else if (place.mount) this.mounted = true;
    }
    this.editable = getEditable(this);
    updateCursorWrapper(this);
    this.nodeViews = buildNodeViews(this);
    this.docView = docViewDesc(this.state.doc, computeDocDeco(this), viewDecorations(this), this.dom, this);
    this.domObserver = new DOMObserver(this, (from2, to, typeOver, added) => readDOMChange(this, from2, to, typeOver, added));
    this.domObserver.start();
    initInput(this);
    this.updatePluginViews();
  }
  /**
  Holds `true` when a
  [composition](https://w3c.github.io/uievents/#events-compositionevents)
  is active.
  */
  get composing() {
    return this.input.composing;
  }
  /**
  The view's current [props](https://prosemirror.net/docs/ref/#view.EditorProps).
  */
  get props() {
    if (this._props.state != this.state) {
      let prev = this._props;
      this._props = {};
      for (let name in prev) this._props[name] = prev[name];
      this._props.state = this.state;
    }
    return this._props;
  }
  /**
  Update the view's props. Will immediately cause an update to
  the DOM.
  */
  update(props) {
    if (props.handleDOMEvents != this._props.handleDOMEvents) ensureListeners(this);
    let prevProps = this._props;
    this._props = props;
    if (props.plugins) {
      props.plugins.forEach(checkStateComponent);
      this.directPlugins = props.plugins;
    }
    this.updateStateInner(props.state, prevProps);
  }
  /**
  Update the view by updating existing props object with the object
  given as argument. Equivalent to `view.update(Object.assign({},
  view.props, props))`.
  */
  setProps(props) {
    let updated = {};
    for (let name in this._props) updated[name] = this._props[name];
    updated.state = this.state;
    for (let name in props) updated[name] = props[name];
    this.update(updated);
  }
  /**
  Update the editor's `state` prop, without touching any of the
  other props.
  */
  updateState(state2) {
    this.updateStateInner(state2, this._props);
  }
  updateStateInner(state2, prevProps) {
    var _a;
    let prev = this.state, redraw = false, updateSel = false;
    if (state2.storedMarks && this.composing) {
      clearComposition(this);
      updateSel = true;
    }
    this.state = state2;
    let pluginsChanged = prev.plugins != state2.plugins || this._props.plugins != prevProps.plugins;
    if (pluginsChanged || this._props.plugins != prevProps.plugins || this._props.nodeViews != prevProps.nodeViews) {
      let nodeViews = buildNodeViews(this);
      if (changedNodeViews(nodeViews, this.nodeViews)) {
        this.nodeViews = nodeViews;
        redraw = true;
      }
    }
    if (pluginsChanged || prevProps.handleDOMEvents != this._props.handleDOMEvents) {
      ensureListeners(this);
    }
    this.editable = getEditable(this);
    updateCursorWrapper(this);
    let innerDeco = viewDecorations(this), outerDeco = computeDocDeco(this);
    let scroll = prev.plugins != state2.plugins && !prev.doc.eq(state2.doc) ? "reset" : state2.scrollToSelection > prev.scrollToSelection ? "to selection" : "preserve";
    let updateDoc = redraw || !this.docView.matchesNode(state2.doc, outerDeco, innerDeco);
    if (updateDoc || !state2.selection.eq(prev.selection)) updateSel = true;
    let oldScrollPos = scroll == "preserve" && updateSel && this.dom.style.overflowAnchor == null && storeScrollPos(this);
    if (updateSel) {
      this.domObserver.stop();
      let forceSelUpdate = updateDoc && (ie || chrome) && !this.composing && !prev.selection.empty && !state2.selection.empty && selectionContextChanged(prev.selection, state2.selection);
      if (updateDoc) {
        let chromeKludge = chrome ? this.trackWrites = this.domSelectionRange().focusNode : null;
        if (this.composing) this.input.compositionNode = findCompositionNode(this);
        if (redraw || !this.docView.update(state2.doc, outerDeco, innerDeco, this)) {
          this.docView.updateOuterDeco(outerDeco);
          this.docView.destroy();
          this.docView = docViewDesc(state2.doc, outerDeco, innerDeco, this.dom, this);
        }
        if (chromeKludge && !this.trackWrites) forceSelUpdate = true;
      }
      if (forceSelUpdate || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && anchorInRightPlace(this))) {
        selectionToDOM(this, forceSelUpdate);
      } else {
        syncNodeSelection(this, state2.selection);
        this.domObserver.setCurSelection();
      }
      this.domObserver.start();
    }
    this.updatePluginViews(prev);
    if (((_a = this.dragging) === null || _a === void 0 ? void 0 : _a.node) && !prev.doc.eq(state2.doc)) this.updateDraggedNode(this.dragging, prev);
    if (scroll == "reset") {
      this.dom.scrollTop = 0;
    } else if (scroll == "to selection") {
      this.scrollToSelection();
    } else if (oldScrollPos) {
      resetScrollPos(oldScrollPos);
    }
  }
  /**
  @internal
  */
  scrollToSelection() {
    let startDOM = this.domSelectionRange().focusNode;
    if (!startDOM || !this.dom.contains(startDOM.nodeType == 1 ? startDOM : startDOM.parentNode)) ;
    else if (this.someProp("handleScrollToSelection", (f) => f(this))) ;
    else if (this.state.selection instanceof NodeSelection) {
      let target = this.docView.domAfterPos(this.state.selection.from);
      if (target.nodeType == 1) scrollRectIntoView(this, target.getBoundingClientRect(), startDOM);
    } else {
      scrollRectIntoView(this, this.coordsAtPos(this.state.selection.head, 1), startDOM);
    }
  }
  destroyPluginViews() {
    let view;
    while (view = this.pluginViews.pop()) if (view.destroy) view.destroy();
  }
  updatePluginViews(prevState) {
    if (!prevState || prevState.plugins != this.state.plugins || this.directPlugins != this.prevDirectPlugins) {
      this.prevDirectPlugins = this.directPlugins;
      this.destroyPluginViews();
      for (let i = 0; i < this.directPlugins.length; i++) {
        let plugin = this.directPlugins[i];
        if (plugin.spec.view) this.pluginViews.push(plugin.spec.view(this));
      }
      for (let i = 0; i < this.state.plugins.length; i++) {
        let plugin = this.state.plugins[i];
        if (plugin.spec.view) this.pluginViews.push(plugin.spec.view(this));
      }
    } else {
      for (let i = 0; i < this.pluginViews.length; i++) {
        let pluginView = this.pluginViews[i];
        if (pluginView.update) pluginView.update(this, prevState);
      }
    }
  }
  updateDraggedNode(dragging, prev) {
    let sel = dragging.node, found2 = -1;
    if (this.state.doc.nodeAt(sel.from) == sel.node) {
      found2 = sel.from;
    } else {
      let movedPos = sel.from + (this.state.doc.content.size - prev.doc.content.size);
      let moved = movedPos > 0 && this.state.doc.nodeAt(movedPos);
      if (moved == sel.node) found2 = movedPos;
    }
    this.dragging = new Dragging(dragging.slice, dragging.move, found2 < 0 ? void 0 : NodeSelection.create(this.state.doc, found2));
  }
  someProp(propName, f) {
    let prop = this._props && this._props[propName], value;
    if (prop != null && (value = f ? f(prop) : prop)) return value;
    for (let i = 0; i < this.directPlugins.length; i++) {
      let prop2 = this.directPlugins[i].props[propName];
      if (prop2 != null && (value = f ? f(prop2) : prop2)) return value;
    }
    let plugins = this.state.plugins;
    if (plugins) for (let i = 0; i < plugins.length; i++) {
      let prop2 = plugins[i].props[propName];
      if (prop2 != null && (value = f ? f(prop2) : prop2)) return value;
    }
  }
  /**
  Query whether the view has focus.
  */
  hasFocus() {
    if (ie) {
      let node = this.root.activeElement;
      if (node == this.dom) return true;
      if (!node || !this.dom.contains(node)) return false;
      while (node && this.dom != node && this.dom.contains(node)) {
        if (node.contentEditable == "false") return false;
        node = node.parentElement;
      }
      return true;
    }
    return this.root.activeElement == this.dom;
  }
  /**
  Focus the editor.
  */
  focus() {
    this.domObserver.stop();
    if (this.editable) focusPreventScroll(this.dom);
    selectionToDOM(this);
    this.domObserver.start();
  }
  /**
  Get the document root in which the editor exists. This will
  usually be the top-level `document`, but might be a [shadow
  DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM)
  root if the editor is inside one.
  */
  get root() {
    let cached = this._root;
    if (cached == null) for (let search = this.dom.parentNode; search; search = search.parentNode) {
      if (search.nodeType == 9 || search.nodeType == 11 && search.host) {
        if (!search.getSelection) Object.getPrototypeOf(search).getSelection = () => search.ownerDocument.getSelection();
        return this._root = search;
      }
    }
    return cached || document;
  }
  /**
  When an existing editor view is moved to a new document or
  shadow tree, call this to make it recompute its root.
  */
  updateRoot() {
    this._root = null;
  }
  /**
  Given a pair of viewport coordinates, return the document
  position that corresponds to them. May return null if the given
  coordinates aren't inside of the editor. When an object is
  returned, its `pos` property is the position nearest to the
  coordinates, and its `inside` property holds the position of the
  inner node that the position falls inside of, or -1 if it is at
  the top level, not in any node.
  */
  posAtCoords(coords) {
    return posAtCoords(this, coords);
  }
  /**
  Returns the viewport rectangle at a given document position.
  `left` and `right` will be the same number, as this returns a
  flat cursor-ish rectangle. If the position is between two things
  that aren't directly adjacent, `side` determines which element
  is used. When < 0, the element before the position is used,
  otherwise the element after.
  */
  coordsAtPos(pos, side = 1) {
    return coordsAtPos(this, pos, side);
  }
  /**
  Find the DOM position that corresponds to the given document
  position. When `side` is negative, find the position as close as
  possible to the content before the position. When positive,
  prefer positions close to the content after the position. When
  zero, prefer as shallow a position as possible.
  
  Note that you should **not** mutate the editor's internal DOM,
  only inspect it (and even that is usually not necessary).
  */
  domAtPos(pos, side = 0) {
    return this.docView.domFromPos(pos, side);
  }
  /**
  Find the DOM node that represents the document node after the
  given position. May return `null` when the position doesn't point
  in front of a node or if the node is inside an opaque node view.
  
  This is intended to be able to call things like
  `getBoundingClientRect` on that DOM node. Do **not** mutate the
  editor DOM directly, or add styling this way, since that will be
  immediately overriden by the editor as it redraws the node.
  */
  nodeDOM(pos) {
    let desc = this.docView.descAt(pos);
    return desc ? desc.nodeDOM : null;
  }
  /**
  Find the document position that corresponds to a given DOM
  position. (Whenever possible, it is preferable to inspect the
  document structure directly, rather than poking around in the
  DOM, but sometimes—for example when interpreting an event
  target—you don't have a choice.)
  
  The `bias` parameter can be used to influence which side of a DOM
  node to use when the position is inside a leaf node.
  */
  posAtDOM(node, offset3, bias = -1) {
    let pos = this.docView.posFromDOM(node, offset3, bias);
    if (pos == null) throw new RangeError("DOM position not inside the editor");
    return pos;
  }
  /**
  Find out whether the selection is at the end of a textblock when
  moving in a given direction. When, for example, given `"left"`,
  it will return true if moving left from the current cursor
  position would leave that position's parent textblock. Will apply
  to the view's current state by default, but it is possible to
  pass a different state.
  */
  endOfTextblock(dir, state2) {
    return endOfTextblock(this, state2 || this.state, dir);
  }
  /**
  Run the editor's paste logic with the given HTML string. The
  `event`, if given, will be passed to the
  [`handlePaste`](https://prosemirror.net/docs/ref/#view.EditorProps.handlePaste) hook.
  */
  pasteHTML(html, event) {
    return doPaste(this, "", html, false, event || new ClipboardEvent("paste"));
  }
  /**
  Run the editor's paste logic with the given plain-text input.
  */
  pasteText(text2, event) {
    return doPaste(this, text2, null, true, event || new ClipboardEvent("paste"));
  }
  /**
  Serialize the given slice as it would be if it was copied from
  this editor. Returns a DOM element that contains a
  representation of the slice as its children, a textual
  representation, and the transformed slice (which can be
  different from the given input due to hooks like
  [`transformCopied`](https://prosemirror.net/docs/ref/#view.EditorProps.transformCopied)).
  */
  serializeForClipboard(slice2) {
    return serializeForClipboard(this, slice2);
  }
  /**
  Removes the editor from the DOM and destroys all [node
  views](https://prosemirror.net/docs/ref/#view.NodeView).
  */
  destroy() {
    if (!this.docView) return;
    destroyInput(this);
    this.destroyPluginViews();
    if (this.mounted) {
      this.docView.update(this.state.doc, [], viewDecorations(this), this);
      this.dom.textContent = "";
    } else if (this.dom.parentNode) {
      this.dom.parentNode.removeChild(this.dom);
    }
    this.docView.destroy();
    this.docView = null;
    clearReusedRange();
  }
  /**
  This is true when the view has been
  [destroyed](https://prosemirror.net/docs/ref/#view.EditorView.destroy) (and thus should not be
  used anymore).
  */
  get isDestroyed() {
    return this.docView == null;
  }
  /**
  Used for testing.
  */
  dispatchEvent(event) {
    return dispatchEvent(this, event);
  }
  /**
  @internal
  */
  domSelectionRange() {
    let sel = this.domSelection();
    if (!sel) return {
      focusNode: null,
      focusOffset: 0,
      anchorNode: null,
      anchorOffset: 0
    };
    return safari && this.root.nodeType === 11 && deepActiveElement(this.dom.ownerDocument) == this.dom && safariShadowSelectionRange(this, sel) || sel;
  }
  /**
  @internal
  */
  domSelection() {
    return this.root.getSelection();
  }
};
EditorView.prototype.dispatch = function(tr) {
  let dispatchTransaction = this._props.dispatchTransaction;
  if (dispatchTransaction) dispatchTransaction.call(this, tr);
  else this.updateState(this.state.apply(tr));
};
function computeDocDeco(view) {
  let attrs = /* @__PURE__ */ Object.create(null);
  attrs.class = "ProseMirror";
  attrs.contenteditable = String(view.editable);
  view.someProp("attributes", (value) => {
    if (typeof value == "function") value = value(view.state);
    if (value) for (let attr in value) {
      if (attr == "class") attrs.class += " " + value[attr];
      else if (attr == "style") attrs.style = (attrs.style ? attrs.style + ";" : "") + value[attr];
      else if (!attrs[attr] && attr != "contenteditable" && attr != "nodeName") attrs[attr] = String(value[attr]);
    }
  });
  if (!attrs.translate) attrs.translate = "no";
  return [Decoration.node(0, view.state.doc.content.size, attrs)];
}
function updateCursorWrapper(view) {
  if (view.markCursor) {
    let dom = document.createElement("img");
    dom.className = "ProseMirror-separator";
    dom.setAttribute("mark-placeholder", "true");
    dom.setAttribute("alt", "");
    view.cursorWrapper = {
      dom,
      deco: Decoration.widget(view.state.selection.from, dom, {
        raw: true,
        marks: view.markCursor
      })
    };
  } else {
    view.cursorWrapper = null;
  }
}
function getEditable(view) {
  return !view.someProp("editable", (value) => value(view.state) === false);
}
function selectionContextChanged(sel1, sel2) {
  let depth = Math.min(sel1.$anchor.sharedDepth(sel1.head), sel2.$anchor.sharedDepth(sel2.head));
  return sel1.$anchor.start(depth) != sel2.$anchor.start(depth);
}
function buildNodeViews(view) {
  let result = /* @__PURE__ */ Object.create(null);
  function add(obj) {
    for (let prop in obj) if (!Object.prototype.hasOwnProperty.call(result, prop)) result[prop] = obj[prop];
  }
  view.someProp("nodeViews", add);
  view.someProp("markViews", add);
  return result;
}
function changedNodeViews(a, b) {
  let nA = 0, nB = 0;
  for (let prop in a) {
    if (a[prop] != b[prop]) return true;
    nA++;
  }
  for (let _ in b) nB++;
  return nA != nB;
}
function checkStateComponent(plugin) {
  if (plugin.spec.state || plugin.spec.filterTransaction || plugin.spec.appendTransaction) throw new RangeError("Plugins passed directly to the view must not have a state component");
}

// node_modules/prosemirror-schema-list/dist/index.js
var olDOM = ["ol", 0];
var ulDOM = ["ul", 0];
var liDOM = ["li", 0];
var orderedList = {
  attrs: {
    order: {
      default: 1,
      validate: "number"
    }
  },
  parseDOM: [{
    tag: "ol",
    getAttrs(dom) {
      return {
        order: dom.hasAttribute("start") ? +dom.getAttribute("start") : 1
      };
    }
  }],
  toDOM(node) {
    return node.attrs.order == 1 ? olDOM : ["ol", {
      start: node.attrs.order
    }, 0];
  }
};
var bulletList = {
  parseDOM: [{
    tag: "ul"
  }],
  toDOM() {
    return ulDOM;
  }
};
var listItem = {
  parseDOM: [{
    tag: "li"
  }],
  toDOM() {
    return liDOM;
  },
  defining: true
};
function wrapInList(listType, attrs = null) {
  return function(state2, dispatch) {
    let {
      $from,
      $to
    } = state2.selection;
    let range = $from.blockRange($to);
    if (!range) return false;
    let tr = dispatch ? state2.tr : null;
    if (!wrapRangeInList(tr, range, listType, attrs)) return false;
    if (dispatch) dispatch(tr.scrollIntoView());
    return true;
  };
}
function wrapRangeInList(tr, range, listType, attrs = null) {
  let doJoin = false, outerRange = range, doc4 = range.$from.doc;
  if (range.depth >= 2 && range.$from.node(range.depth - 1).type.compatibleContent(listType) && range.startIndex == 0) {
    if (range.$from.index(range.depth - 1) == 0) return false;
    let $insert = doc4.resolve(range.start - 2);
    outerRange = new NodeRange($insert, $insert, range.depth);
    if (range.endIndex < range.parent.childCount) range = new NodeRange(range.$from, doc4.resolve(range.$to.end(range.depth)), range.depth);
    doJoin = true;
  }
  let wrap2 = findWrapping(outerRange, listType, attrs, range);
  if (!wrap2) return false;
  if (tr) doWrapInList(tr, range, wrap2, doJoin, listType);
  return true;
}
function doWrapInList(tr, range, wrappers, joinBefore, listType) {
  let content = Fragment.empty;
  for (let i = wrappers.length - 1; i >= 0; i--) content = Fragment.from(wrappers[i].type.create(wrappers[i].attrs, content));
  tr.step(new ReplaceAroundStep(range.start - (joinBefore ? 2 : 0), range.end, range.start, range.end, new Slice(content, 0, 0), wrappers.length, true));
  let found2 = 0;
  for (let i = 0; i < wrappers.length; i++) if (wrappers[i].type == listType) found2 = i + 1;
  let splitDepth = wrappers.length - found2;
  let splitPos = range.start + wrappers.length - (joinBefore ? 2 : 0), parent = range.parent;
  for (let i = range.startIndex, e = range.endIndex, first = true; i < e; i++, first = false) {
    if (!first && canSplit(tr.doc, splitPos, splitDepth)) {
      tr.split(splitPos, splitDepth);
      splitPos += 2 * splitDepth;
    }
    splitPos += parent.child(i).nodeSize;
  }
  return tr;
}
function splitListItem(itemType, itemAttrs) {
  return function(state2, dispatch) {
    let {
      $from,
      $to,
      node
    } = state2.selection;
    if (node && node.isBlock || $from.depth < 2 || !$from.sameParent($to)) return false;
    let grandParent = $from.node(-1);
    if (grandParent.type != itemType) return false;
    if ($from.parent.content.size == 0 && $from.node(-1).childCount == $from.indexAfter(-1)) {
      if ($from.depth == 3 || $from.node(-3).type != itemType || $from.index(-2) != $from.node(-2).childCount - 1) return false;
      if (dispatch) {
        let wrap2 = Fragment.empty;
        let depthBefore = $from.index(-1) ? 1 : $from.index(-2) ? 2 : 3;
        for (let d = $from.depth - depthBefore; d >= $from.depth - 3; d--) wrap2 = Fragment.from($from.node(d).copy(wrap2));
        let depthAfter = $from.indexAfter(-1) < $from.node(-2).childCount ? 1 : $from.indexAfter(-2) < $from.node(-3).childCount ? 2 : 3;
        wrap2 = wrap2.append(Fragment.from(itemType.createAndFill()));
        let start = $from.before($from.depth - (depthBefore - 1));
        let tr2 = state2.tr.replace(start, $from.after(-depthAfter), new Slice(wrap2, 4 - depthBefore, 0));
        let sel = -1;
        tr2.doc.nodesBetween(start, tr2.doc.content.size, (node2, pos) => {
          if (sel > -1) return false;
          if (node2.isTextblock && node2.content.size == 0) sel = pos + 1;
        });
        if (sel > -1) tr2.setSelection(Selection.near(tr2.doc.resolve(sel)));
        dispatch(tr2.scrollIntoView());
      }
      return true;
    }
    let nextType = $to.pos == $from.end() ? grandParent.contentMatchAt(0).defaultType : null;
    let tr = state2.tr.delete($from.pos, $to.pos);
    let types = nextType ? [itemAttrs ? {
      type: itemType,
      attrs: itemAttrs
    } : null, {
      type: nextType
    }] : void 0;
    if (!canSplit(tr.doc, $from.pos, 2, types)) return false;
    if (dispatch) dispatch(tr.split($from.pos, 2, types).scrollIntoView());
    return true;
  };
}
function liftListItem(itemType) {
  return function(state2, dispatch) {
    let {
      $from,
      $to
    } = state2.selection;
    let range = $from.blockRange($to, (node) => node.childCount > 0 && node.firstChild.type == itemType);
    if (!range) return false;
    if (!dispatch) return true;
    if ($from.node(range.depth - 1).type == itemType)
      return liftToOuterList(state2, dispatch, itemType, range);
    else
      return liftOutOfList(state2, dispatch, range);
  };
}
function liftToOuterList(state2, dispatch, itemType, range) {
  let tr = state2.tr, end = range.end, endOfList = range.$to.end(range.depth);
  if (end < endOfList) {
    tr.step(new ReplaceAroundStep(end - 1, endOfList, end, endOfList, new Slice(Fragment.from(itemType.create(null, range.parent.copy())), 1, 0), 1, true));
    range = new NodeRange(tr.doc.resolve(range.$from.pos), tr.doc.resolve(endOfList), range.depth);
  }
  const target = liftTarget(range);
  if (target == null) return false;
  tr.lift(range, target);
  let $after = tr.doc.resolve(tr.mapping.map(end, -1) - 1);
  if (canJoin(tr.doc, $after.pos) && $after.nodeBefore.type == $after.nodeAfter.type) tr.join($after.pos);
  dispatch(tr.scrollIntoView());
  return true;
}
function liftOutOfList(state2, dispatch, range) {
  let tr = state2.tr, list = range.parent;
  for (let pos = range.end, i = range.endIndex - 1, e = range.startIndex; i > e; i--) {
    pos -= list.child(i).nodeSize;
    tr.delete(pos - 1, pos + 1);
  }
  let $start = tr.doc.resolve(range.start), item = $start.nodeAfter;
  if (tr.mapping.map(range.end) != range.start + $start.nodeAfter.nodeSize) return false;
  let atStart = range.startIndex == 0, atEnd = range.endIndex == list.childCount;
  let parent = $start.node(-1), indexBefore = $start.index(-1);
  if (!parent.canReplace(indexBefore + (atStart ? 0 : 1), indexBefore + 1, item.content.append(atEnd ? Fragment.empty : Fragment.from(list)))) return false;
  let start = $start.pos, end = start + item.nodeSize;
  tr.step(new ReplaceAroundStep(start - (atStart ? 1 : 0), end + (atEnd ? 1 : 0), start + 1, end - 1, new Slice((atStart ? Fragment.empty : Fragment.from(list.copy(Fragment.empty))).append(atEnd ? Fragment.empty : Fragment.from(list.copy(Fragment.empty))), atStart ? 0 : 1, atEnd ? 0 : 1), atStart ? 0 : 1));
  dispatch(tr.scrollIntoView());
  return true;
}
function sinkListItem(itemType) {
  return function(state2, dispatch) {
    let {
      $from,
      $to
    } = state2.selection;
    let range = $from.blockRange($to, (node) => node.childCount > 0 && node.firstChild.type == itemType);
    if (!range) return false;
    let startIndex = range.startIndex;
    if (startIndex == 0) return false;
    let parent = range.parent, nodeBefore = parent.child(startIndex - 1);
    if (nodeBefore.type != itemType) return false;
    if (dispatch) {
      let nestedBefore = nodeBefore.lastChild && nodeBefore.lastChild.type == parent.type;
      let inner = Fragment.from(nestedBefore ? itemType.create() : null);
      let slice2 = new Slice(Fragment.from(itemType.create(null, Fragment.from(parent.type.create(null, inner)))), nestedBefore ? 3 : 1, 0);
      let before = range.start, after = range.end;
      dispatch(state2.tr.step(new ReplaceAroundStep(before - (nestedBefore ? 3 : 1), after, before, after, slice2, 1, true)).scrollIntoView());
    }
    return true;
  };
}

// node_modules/ngx-editor/fesm2022/ngx-editor-schema.mjs
var link = {
  attrs: {
    href: {},
    title: {
      default: null
    },
    target: {
      default: "_blank"
    }
  },
  inclusive: false,
  parseDOM: [{
    tag: "a[href]",
    getAttrs(dom) {
      return {
        href: dom.getAttribute("href"),
        title: dom.getAttribute("title"),
        target: dom.getAttribute("target")
      };
    }
  }],
  toDOM(node) {
    const {
      href,
      title,
      target
    } = node.attrs;
    return ["a", {
      href,
      title,
      target
    }, 0];
  }
};
var em = {
  parseDOM: [{
    tag: "i"
  }, {
    tag: "em"
  }, {
    style: "font-style=italic"
  }],
  toDOM() {
    return ["em", 0];
  }
};
var strong = {
  parseDOM: [
    {
      tag: "strong"
    },
    // This works around a Google Docs misbehavior where
    // pasted content will be inexplicably wrapped in `<b>`
    // tags with a font-weight normal.
    {
      tag: "b",
      getAttrs: (dom) => {
        return dom.style.fontWeight !== "normal" && null;
      }
    },
    {
      style: "font-weight",
      getAttrs: (value) => {
        return /^(?:bold(?:er)?|[5-9]\d{2,})$/.test(value) && null;
      }
    }
  ],
  toDOM() {
    return ["strong", 0];
  }
};
var code = {
  parseDOM: [{
    tag: "code"
  }],
  toDOM() {
    return ["code", 0];
  }
};
var u = {
  parseDOM: [{
    tag: "u"
  }, {
    style: "text-decoration=underline",
    consuming: false
  }],
  toDOM() {
    return ["u", 0];
  }
};
var s = {
  parseDOM: [{
    tag: "s"
  }, {
    tag: "strike"
  }, {
    style: "text-decoration=line-through"
  }],
  toDOM() {
    return ["s", 0];
  }
};
var textColor = {
  attrs: {
    color: {
      default: null
    }
  },
  parseDOM: [{
    style: "color",
    getAttrs: (value) => {
      return {
        color: value
      };
    }
  }],
  toDOM(mark) {
    const {
      color
    } = mark.attrs;
    return ["span", {
      style: `color:${color};`
    }, 0];
  }
};
var textBackgroundColor = {
  attrs: {
    backgroundColor: {
      default: null
    }
  },
  parseDOM: [{
    style: "background-color",
    getAttrs: (value) => {
      return {
        backgroundColor: value
      };
    }
  }],
  toDOM(mark) {
    const {
      backgroundColor
    } = mark.attrs;
    return ["span", {
      style: `background-color:${backgroundColor};`
    }, 0];
  }
};
var sup = {
  attrs: {},
  parseDOM: [{
    tag: "sup"
  }, {
    style: "vertical-align=super"
  }],
  toDOM() {
    return ["sup", 0];
  }
};
var sub = {
  attrs: {},
  parseDOM: [{
    tag: "sub"
  }, {
    style: "vertical-align=sub"
  }],
  toDOM() {
    return ["sub", 0];
  }
};
var marks = {
  link,
  em,
  strong,
  code,
  u,
  s,
  text_color: textColor,
  text_background_color: textBackgroundColor,
  sup,
  sub
};
var doc3 = {
  content: "block+"
};
var text = {
  group: "inline"
};
var paragraph = {
  content: "inline*",
  group: "block",
  attrs: {
    align: {
      default: null
    },
    indent: {
      default: null
    }
  },
  parseDOM: [{
    tag: "p",
    getAttrs(dom) {
      const {
        textAlign
      } = dom.style;
      const align = dom.getAttribute("align") || textAlign || null;
      const indent2 = dom.getAttribute("data-indent") || null;
      return {
        align,
        indent: parseInt(indent2, 10) || null
      };
    }
  }],
  toDOM(node) {
    const {
      align,
      indent: indent2
    } = node.attrs;
    const styles = {
      textAlign: align !== "left" ? align : null,
      marginLeft: indent2 !== null ? `${indent2 * 40}px` : null
    };
    const style2 = toStyleString(styles) || null;
    const attrs = {
      style: style2,
      "data-indent": indent2 ?? null
    };
    return ["p", attrs, 0];
  }
};
var blockquote = {
  content: "block+",
  group: "block",
  defining: true,
  attrs: {
    indent: {
      default: null
    }
  },
  parseDOM: [{
    tag: "blockquote",
    getAttrs(dom) {
      const indent2 = dom.getAttribute("data-indent") || null;
      return {
        indent: parseInt(indent2, 10) || null
      };
    }
  }],
  toDOM(node) {
    const {
      indent: indent2
    } = node.attrs;
    const styles = {
      marginLeft: indent2 !== null ? `${indent2 * 40}px` : null
    };
    const style2 = toStyleString(styles) || null;
    const attrs = {
      style: style2,
      "data-indent": indent2 ?? null
    };
    return ["blockquote", attrs, 0];
  }
};
var horizontalRule = {
  group: "block",
  parseDOM: [{
    tag: "hr"
  }],
  toDOM() {
    return ["hr"];
  }
};
var heading = {
  attrs: {
    level: {
      default: 1
    },
    align: {
      default: null
    },
    indent: {
      default: null
    }
  },
  content: "inline*",
  group: "block",
  defining: true,
  parseDOM: [{
    tag: "h1",
    getAttrs(dom) {
      const {
        textAlign
      } = dom.style;
      const align = dom.getAttribute("align") || textAlign || null;
      const indent2 = dom.getAttribute("data-indent") || null;
      return {
        level: 1,
        align,
        indent: parseInt(indent2, 10) || null
      };
    }
  }, {
    tag: "h2",
    getAttrs(dom) {
      const {
        textAlign
      } = dom.style;
      const align = dom.getAttribute("align") || textAlign || null;
      const indent2 = dom.getAttribute("data-indent") || null;
      return {
        level: 2,
        align,
        indent: parseInt(indent2, 10) || null
      };
    }
  }, {
    tag: "h3",
    getAttrs(dom) {
      const {
        textAlign
      } = dom.style;
      const align = dom.getAttribute("align") || textAlign || null;
      const indent2 = dom.getAttribute("data-indent") || null;
      return {
        level: 3,
        align,
        indent: parseInt(indent2, 10) || null
      };
    }
  }, {
    tag: "h4",
    getAttrs(dom) {
      const {
        textAlign
      } = dom.style;
      const align = dom.getAttribute("align") || textAlign || null;
      const indent2 = dom.getAttribute("data-indent") || null;
      return {
        level: 4,
        align,
        indent: parseInt(indent2, 10) || null
      };
    }
  }, {
    tag: "h5",
    getAttrs(dom) {
      const {
        textAlign
      } = dom.style;
      const align = dom.getAttribute("align") || textAlign || null;
      const indent2 = dom.getAttribute("data-indent") || null;
      return {
        level: 5,
        align,
        indent: parseInt(indent2, 10) || null
      };
    }
  }, {
    tag: "h6",
    getAttrs(dom) {
      const {
        textAlign
      } = dom.style;
      const align = dom.getAttribute("align") || textAlign || null;
      const indent2 = dom.getAttribute("data-indent") || null;
      return {
        level: 6,
        align,
        indent: parseInt(indent2, 10) || null
      };
    }
  }],
  toDOM(node) {
    const {
      level,
      align,
      indent: indent2
    } = node.attrs;
    const styles = {
      textAlign: align !== "left" ? align : null,
      marginLeft: indent2 !== null ? `${indent2 * 40}px` : null
    };
    const style2 = toStyleString(styles) || null;
    const attrs = {
      style: style2,
      "data-indent": indent2 ?? null
    };
    return [`h${level}`, attrs, 0];
  }
};
var codeBlock = {
  content: "text*",
  marks: "",
  group: "block",
  code: true,
  defining: true,
  parseDOM: [{
    tag: "pre",
    preserveWhitespace: "full"
  }],
  toDOM() {
    return ["pre", ["code", 0]];
  }
};
var hardBreak = {
  inline: true,
  group: "inline",
  selectable: false,
  parseDOM: [{
    tag: "br"
  }],
  toDOM() {
    return ["br"];
  }
};
var image = {
  inline: true,
  attrs: {
    src: {},
    alt: {
      default: null
    },
    title: {
      default: null
    },
    width: {
      default: null
    }
  },
  group: "inline",
  draggable: true,
  parseDOM: [{
    tag: "img[src]",
    getAttrs(dom) {
      return {
        src: dom.getAttribute("src"),
        title: dom.getAttribute("title"),
        alt: dom.getAttribute("alt"),
        width: dom.getAttribute("width")
      };
    }
  }],
  toDOM(node) {
    const {
      src,
      alt,
      title,
      width
    } = node.attrs;
    return ["img", {
      src,
      alt,
      title,
      width
    }];
  }
};
var listItem2 = __spreadProps(__spreadValues({}, listItem), {
  content: "paragraph block*"
});
var orderedList2 = __spreadProps(__spreadValues({}, orderedList), {
  content: "list_item+",
  group: "block"
});
var bulletList2 = __spreadProps(__spreadValues({}, bulletList), {
  content: "list_item+",
  group: "block"
});
var nodes = {
  doc: doc3,
  text,
  paragraph,
  blockquote,
  horizontal_rule: horizontalRule,
  heading,
  hard_break: hardBreak,
  code_block: codeBlock,
  image,
  list_item: listItem2,
  ordered_list: orderedList2,
  bullet_list: bulletList2
};
var schema = new Schema({
  marks,
  nodes
});

// node_modules/prosemirror-commands/dist/index.js
var deleteSelection = (state2, dispatch) => {
  if (state2.selection.empty) return false;
  if (dispatch) dispatch(state2.tr.deleteSelection().scrollIntoView());
  return true;
};
function atBlockStart(state2, view) {
  let {
    $cursor
  } = state2.selection;
  if (!$cursor || (view ? !view.endOfTextblock("backward", state2) : $cursor.parentOffset > 0)) return null;
  return $cursor;
}
var joinBackward = (state2, dispatch, view) => {
  let $cursor = atBlockStart(state2, view);
  if (!$cursor) return false;
  let $cut = findCutBefore($cursor);
  if (!$cut) {
    let range = $cursor.blockRange(), target = range && liftTarget(range);
    if (target == null) return false;
    if (dispatch) dispatch(state2.tr.lift(range, target).scrollIntoView());
    return true;
  }
  let before = $cut.nodeBefore;
  if (deleteBarrier(state2, $cut, dispatch, -1)) return true;
  if ($cursor.parent.content.size == 0 && (textblockAt(before, "end") || NodeSelection.isSelectable(before))) {
    for (let depth = $cursor.depth; ; depth--) {
      let delStep = replaceStep(state2.doc, $cursor.before(depth), $cursor.after(depth), Slice.empty);
      if (delStep && delStep.slice.size < delStep.to - delStep.from) {
        if (dispatch) {
          let tr = state2.tr.step(delStep);
          tr.setSelection(textblockAt(before, "end") ? Selection.findFrom(tr.doc.resolve(tr.mapping.map($cut.pos, -1)), -1) : NodeSelection.create(tr.doc, $cut.pos - before.nodeSize));
          dispatch(tr.scrollIntoView());
        }
        return true;
      }
      if (depth == 1 || $cursor.node(depth - 1).childCount > 1) break;
    }
  }
  if (before.isAtom && $cut.depth == $cursor.depth - 1) {
    if (dispatch) dispatch(state2.tr.delete($cut.pos - before.nodeSize, $cut.pos).scrollIntoView());
    return true;
  }
  return false;
};
function textblockAt(node, side, only = false) {
  for (let scan = node; scan; scan = side == "start" ? scan.firstChild : scan.lastChild) {
    if (scan.isTextblock) return true;
    if (only && scan.childCount != 1) return false;
  }
  return false;
}
var selectNodeBackward = (state2, dispatch, view) => {
  let {
    $head,
    empty: empty2
  } = state2.selection, $cut = $head;
  if (!empty2) return false;
  if ($head.parent.isTextblock) {
    if (view ? !view.endOfTextblock("backward", state2) : $head.parentOffset > 0) return false;
    $cut = findCutBefore($head);
  }
  let node = $cut && $cut.nodeBefore;
  if (!node || !NodeSelection.isSelectable(node)) return false;
  if (dispatch) dispatch(state2.tr.setSelection(NodeSelection.create(state2.doc, $cut.pos - node.nodeSize)).scrollIntoView());
  return true;
};
function findCutBefore($pos) {
  if (!$pos.parent.type.spec.isolating) for (let i = $pos.depth - 1; i >= 0; i--) {
    if ($pos.index(i) > 0) return $pos.doc.resolve($pos.before(i + 1));
    if ($pos.node(i).type.spec.isolating) break;
  }
  return null;
}
function atBlockEnd(state2, view) {
  let {
    $cursor
  } = state2.selection;
  if (!$cursor || (view ? !view.endOfTextblock("forward", state2) : $cursor.parentOffset < $cursor.parent.content.size)) return null;
  return $cursor;
}
var joinForward = (state2, dispatch, view) => {
  let $cursor = atBlockEnd(state2, view);
  if (!$cursor) return false;
  let $cut = findCutAfter($cursor);
  if (!$cut) return false;
  let after = $cut.nodeAfter;
  if (deleteBarrier(state2, $cut, dispatch, 1)) return true;
  if ($cursor.parent.content.size == 0 && (textblockAt(after, "start") || NodeSelection.isSelectable(after))) {
    let delStep = replaceStep(state2.doc, $cursor.before(), $cursor.after(), Slice.empty);
    if (delStep && delStep.slice.size < delStep.to - delStep.from) {
      if (dispatch) {
        let tr = state2.tr.step(delStep);
        tr.setSelection(textblockAt(after, "start") ? Selection.findFrom(tr.doc.resolve(tr.mapping.map($cut.pos)), 1) : NodeSelection.create(tr.doc, tr.mapping.map($cut.pos)));
        dispatch(tr.scrollIntoView());
      }
      return true;
    }
  }
  if (after.isAtom && $cut.depth == $cursor.depth - 1) {
    if (dispatch) dispatch(state2.tr.delete($cut.pos, $cut.pos + after.nodeSize).scrollIntoView());
    return true;
  }
  return false;
};
var selectNodeForward = (state2, dispatch, view) => {
  let {
    $head,
    empty: empty2
  } = state2.selection, $cut = $head;
  if (!empty2) return false;
  if ($head.parent.isTextblock) {
    if (view ? !view.endOfTextblock("forward", state2) : $head.parentOffset < $head.parent.content.size) return false;
    $cut = findCutAfter($head);
  }
  let node = $cut && $cut.nodeAfter;
  if (!node || !NodeSelection.isSelectable(node)) return false;
  if (dispatch) dispatch(state2.tr.setSelection(NodeSelection.create(state2.doc, $cut.pos)).scrollIntoView());
  return true;
};
function findCutAfter($pos) {
  if (!$pos.parent.type.spec.isolating) for (let i = $pos.depth - 1; i >= 0; i--) {
    let parent = $pos.node(i);
    if ($pos.index(i) + 1 < parent.childCount) return $pos.doc.resolve($pos.after(i + 1));
    if (parent.type.spec.isolating) break;
  }
  return null;
}
var lift2 = (state2, dispatch) => {
  let {
    $from,
    $to
  } = state2.selection;
  let range = $from.blockRange($to), target = range && liftTarget(range);
  if (target == null) return false;
  if (dispatch) dispatch(state2.tr.lift(range, target).scrollIntoView());
  return true;
};
var newlineInCode = (state2, dispatch) => {
  let {
    $head,
    $anchor
  } = state2.selection;
  if (!$head.parent.type.spec.code || !$head.sameParent($anchor)) return false;
  if (dispatch) dispatch(state2.tr.insertText("\n").scrollIntoView());
  return true;
};
function defaultBlockAt(match) {
  for (let i = 0; i < match.edgeCount; i++) {
    let {
      type
    } = match.edge(i);
    if (type.isTextblock && !type.hasRequiredAttrs()) return type;
  }
  return null;
}
var exitCode = (state2, dispatch) => {
  let {
    $head,
    $anchor
  } = state2.selection;
  if (!$head.parent.type.spec.code || !$head.sameParent($anchor)) return false;
  let above = $head.node(-1), after = $head.indexAfter(-1), type = defaultBlockAt(above.contentMatchAt(after));
  if (!type || !above.canReplaceWith(after, after, type)) return false;
  if (dispatch) {
    let pos = $head.after(), tr = state2.tr.replaceWith(pos, pos, type.createAndFill());
    tr.setSelection(Selection.near(tr.doc.resolve(pos), 1));
    dispatch(tr.scrollIntoView());
  }
  return true;
};
var createParagraphNear = (state2, dispatch) => {
  let sel = state2.selection, {
    $from,
    $to
  } = sel;
  if (sel instanceof AllSelection || $from.parent.inlineContent || $to.parent.inlineContent) return false;
  let type = defaultBlockAt($to.parent.contentMatchAt($to.indexAfter()));
  if (!type || !type.isTextblock) return false;
  if (dispatch) {
    let side = (!$from.parentOffset && $to.index() < $to.parent.childCount ? $from : $to).pos;
    let tr = state2.tr.insert(side, type.createAndFill());
    tr.setSelection(TextSelection.create(tr.doc, side + 1));
    dispatch(tr.scrollIntoView());
  }
  return true;
};
var liftEmptyBlock = (state2, dispatch) => {
  let {
    $cursor
  } = state2.selection;
  if (!$cursor || $cursor.parent.content.size) return false;
  if ($cursor.depth > 1 && $cursor.after() != $cursor.end(-1)) {
    let before = $cursor.before();
    if (canSplit(state2.doc, before)) {
      if (dispatch) dispatch(state2.tr.split(before).scrollIntoView());
      return true;
    }
  }
  let range = $cursor.blockRange(), target = range && liftTarget(range);
  if (target == null) return false;
  if (dispatch) dispatch(state2.tr.lift(range, target).scrollIntoView());
  return true;
};
function splitBlockAs(splitNode) {
  return (state2, dispatch) => {
    let {
      $from,
      $to
    } = state2.selection;
    if (state2.selection instanceof NodeSelection && state2.selection.node.isBlock) {
      if (!$from.parentOffset || !canSplit(state2.doc, $from.pos)) return false;
      if (dispatch) dispatch(state2.tr.split($from.pos).scrollIntoView());
      return true;
    }
    if (!$from.depth) return false;
    let types = [];
    let splitDepth, deflt, atEnd = false, atStart = false;
    for (let d = $from.depth; ; d--) {
      let node = $from.node(d);
      if (node.isBlock) {
        atEnd = $from.end(d) == $from.pos + ($from.depth - d);
        atStart = $from.start(d) == $from.pos - ($from.depth - d);
        deflt = defaultBlockAt($from.node(d - 1).contentMatchAt($from.indexAfter(d - 1)));
        let splitType = splitNode && splitNode($to.parent, atEnd, $from);
        types.unshift(splitType || (atEnd && deflt ? {
          type: deflt
        } : null));
        splitDepth = d;
        break;
      } else {
        if (d == 1) return false;
        types.unshift(null);
      }
    }
    let tr = state2.tr;
    if (state2.selection instanceof TextSelection || state2.selection instanceof AllSelection) tr.deleteSelection();
    let splitPos = tr.mapping.map($from.pos);
    let can = canSplit(tr.doc, splitPos, types.length, types);
    if (!can) {
      types[0] = deflt ? {
        type: deflt
      } : null;
      can = canSplit(tr.doc, splitPos, types.length, types);
    }
    if (!can) return false;
    tr.split(splitPos, types.length, types);
    if (!atEnd && atStart && $from.node(splitDepth).type != deflt) {
      let first = tr.mapping.map($from.before(splitDepth)), $first = tr.doc.resolve(first);
      if (deflt && $from.node(splitDepth - 1).canReplaceWith($first.index(), $first.index() + 1, deflt)) tr.setNodeMarkup(tr.mapping.map($from.before(splitDepth)), deflt);
    }
    if (dispatch) dispatch(tr.scrollIntoView());
    return true;
  };
}
var splitBlock = splitBlockAs();
var selectAll = (state2, dispatch) => {
  if (dispatch) dispatch(state2.tr.setSelection(new AllSelection(state2.doc)));
  return true;
};
function joinMaybeClear(state2, $pos, dispatch) {
  let before = $pos.nodeBefore, after = $pos.nodeAfter, index = $pos.index();
  if (!before || !after || !before.type.compatibleContent(after.type)) return false;
  if (!before.content.size && $pos.parent.canReplace(index - 1, index)) {
    if (dispatch) dispatch(state2.tr.delete($pos.pos - before.nodeSize, $pos.pos).scrollIntoView());
    return true;
  }
  if (!$pos.parent.canReplace(index, index + 1) || !(after.isTextblock || canJoin(state2.doc, $pos.pos))) return false;
  if (dispatch) dispatch(state2.tr.join($pos.pos).scrollIntoView());
  return true;
}
function deleteBarrier(state2, $cut, dispatch, dir) {
  let before = $cut.nodeBefore, after = $cut.nodeAfter, conn, match;
  let isolated = before.type.spec.isolating || after.type.spec.isolating;
  if (!isolated && joinMaybeClear(state2, $cut, dispatch)) return true;
  let canDelAfter = !isolated && $cut.parent.canReplace($cut.index(), $cut.index() + 1);
  if (canDelAfter && (conn = (match = before.contentMatchAt(before.childCount)).findWrapping(after.type)) && match.matchType(conn[0] || after.type).validEnd) {
    if (dispatch) {
      let end = $cut.pos + after.nodeSize, wrap2 = Fragment.empty;
      for (let i = conn.length - 1; i >= 0; i--) wrap2 = Fragment.from(conn[i].create(null, wrap2));
      wrap2 = Fragment.from(before.copy(wrap2));
      let tr = state2.tr.step(new ReplaceAroundStep($cut.pos - 1, end, $cut.pos, end, new Slice(wrap2, 1, 0), conn.length, true));
      let $joinAt = tr.doc.resolve(end + 2 * conn.length);
      if ($joinAt.nodeAfter && $joinAt.nodeAfter.type == before.type && canJoin(tr.doc, $joinAt.pos)) tr.join($joinAt.pos);
      dispatch(tr.scrollIntoView());
    }
    return true;
  }
  let selAfter = after.type.spec.isolating || dir > 0 && isolated ? null : Selection.findFrom($cut, 1);
  let range = selAfter && selAfter.$from.blockRange(selAfter.$to), target = range && liftTarget(range);
  if (target != null && target >= $cut.depth) {
    if (dispatch) dispatch(state2.tr.lift(range, target).scrollIntoView());
    return true;
  }
  if (canDelAfter && textblockAt(after, "start", true) && textblockAt(before, "end")) {
    let at = before, wrap2 = [];
    for (; ; ) {
      wrap2.push(at);
      if (at.isTextblock) break;
      at = at.lastChild;
    }
    let afterText = after, afterDepth = 1;
    for (; !afterText.isTextblock; afterText = afterText.firstChild) afterDepth++;
    if (at.canReplace(at.childCount, at.childCount, afterText.content)) {
      if (dispatch) {
        let end = Fragment.empty;
        for (let i = wrap2.length - 1; i >= 0; i--) end = Fragment.from(wrap2[i].copy(end));
        let tr = state2.tr.step(new ReplaceAroundStep($cut.pos - wrap2.length, $cut.pos + after.nodeSize, $cut.pos + afterDepth, $cut.pos + after.nodeSize - afterDepth, new Slice(end, wrap2.length, 0), 0, true));
        dispatch(tr.scrollIntoView());
      }
      return true;
    }
  }
  return false;
}
function selectTextblockSide(side) {
  return function(state2, dispatch) {
    let sel = state2.selection, $pos = side < 0 ? sel.$from : sel.$to;
    let depth = $pos.depth;
    while ($pos.node(depth).isInline) {
      if (!depth) return false;
      depth--;
    }
    if (!$pos.node(depth).isTextblock) return false;
    if (dispatch) dispatch(state2.tr.setSelection(TextSelection.create(state2.doc, side < 0 ? $pos.start(depth) : $pos.end(depth))));
    return true;
  };
}
var selectTextblockStart = selectTextblockSide(-1);
var selectTextblockEnd = selectTextblockSide(1);
function wrapIn(nodeType, attrs = null) {
  return function(state2, dispatch) {
    let {
      $from,
      $to
    } = state2.selection;
    let range = $from.blockRange($to), wrapping = range && findWrapping(range, nodeType, attrs);
    if (!wrapping) return false;
    if (dispatch) dispatch(state2.tr.wrap(range, wrapping).scrollIntoView());
    return true;
  };
}
function setBlockType2(nodeType, attrs = null) {
  return function(state2, dispatch) {
    let applicable = false;
    for (let i = 0; i < state2.selection.ranges.length && !applicable; i++) {
      let {
        $from: {
          pos: from2
        },
        $to: {
          pos: to
        }
      } = state2.selection.ranges[i];
      state2.doc.nodesBetween(from2, to, (node, pos) => {
        if (applicable) return false;
        if (!node.isTextblock || node.hasMarkup(nodeType, attrs)) return;
        if (node.type == nodeType) {
          applicable = true;
        } else {
          let $pos = state2.doc.resolve(pos), index = $pos.index();
          applicable = $pos.parent.canReplaceWith(index, index + 1, nodeType);
        }
      });
    }
    if (!applicable) return false;
    if (dispatch) {
      let tr = state2.tr;
      for (let i = 0; i < state2.selection.ranges.length; i++) {
        let {
          $from: {
            pos: from2
          },
          $to: {
            pos: to
          }
        } = state2.selection.ranges[i];
        tr.setBlockType(from2, to, nodeType, attrs);
      }
      dispatch(tr.scrollIntoView());
    }
    return true;
  };
}
function markApplies(doc4, ranges, type, enterAtoms) {
  for (let i = 0; i < ranges.length; i++) {
    let {
      $from,
      $to
    } = ranges[i];
    let can = $from.depth == 0 ? doc4.inlineContent && doc4.type.allowsMarkType(type) : false;
    doc4.nodesBetween($from.pos, $to.pos, (node, pos) => {
      if (can || !enterAtoms && node.isAtom && node.isInline && pos >= $from.pos && pos + node.nodeSize <= $to.pos) return false;
      can = node.inlineContent && node.type.allowsMarkType(type);
    });
    if (can) return true;
  }
  return false;
}
function removeInlineAtoms(ranges) {
  let result = [];
  for (let i = 0; i < ranges.length; i++) {
    let {
      $from,
      $to
    } = ranges[i];
    $from.doc.nodesBetween($from.pos, $to.pos, (node, pos) => {
      if (node.isAtom && node.content.size && node.isInline && pos >= $from.pos && pos + node.nodeSize <= $to.pos) {
        if (pos + 1 > $from.pos) result.push(new SelectionRange($from, $from.doc.resolve(pos + 1)));
        $from = $from.doc.resolve(pos + 1 + node.content.size);
        return false;
      }
    });
    if ($from.pos < $to.pos) result.push(new SelectionRange($from, $to));
  }
  return result;
}
function toggleMark(markType, attrs = null, options) {
  let removeWhenPresent = (options && options.removeWhenPresent) !== false;
  let enterAtoms = (options && options.enterInlineAtoms) !== false;
  let dropSpace = !(options && options.includeWhitespace);
  return function(state2, dispatch) {
    let {
      empty: empty2,
      $cursor,
      ranges
    } = state2.selection;
    if (empty2 && !$cursor || !markApplies(state2.doc, ranges, markType, enterAtoms)) return false;
    if (dispatch) {
      if ($cursor) {
        if (markType.isInSet(state2.storedMarks || $cursor.marks())) dispatch(state2.tr.removeStoredMark(markType));
        else dispatch(state2.tr.addStoredMark(markType.create(attrs)));
      } else {
        let add, tr = state2.tr;
        if (!enterAtoms) ranges = removeInlineAtoms(ranges);
        if (removeWhenPresent) {
          add = !ranges.some((r) => state2.doc.rangeHasMark(r.$from.pos, r.$to.pos, markType));
        } else {
          add = !ranges.every((r) => {
            let missing = false;
            tr.doc.nodesBetween(r.$from.pos, r.$to.pos, (node, pos, parent) => {
              if (missing) return false;
              missing = !markType.isInSet(node.marks) && !!parent && parent.type.allowsMarkType(markType) && !(node.isText && /^\s*$/.test(node.textBetween(Math.max(0, r.$from.pos - pos), Math.min(node.nodeSize, r.$to.pos - pos))));
            });
            return !missing;
          });
        }
        for (let i = 0; i < ranges.length; i++) {
          let {
            $from,
            $to
          } = ranges[i];
          if (!add) {
            tr.removeMark($from.pos, $to.pos, markType);
          } else {
            let from2 = $from.pos, to = $to.pos, start = $from.nodeAfter, end = $to.nodeBefore;
            let spaceStart = dropSpace && start && start.isText ? /^\s*/.exec(start.text)[0].length : 0;
            let spaceEnd = dropSpace && end && end.isText ? /\s*$/.exec(end.text)[0].length : 0;
            if (from2 + spaceStart < to) {
              from2 += spaceStart;
              to -= spaceEnd;
            }
            tr.addMark(from2, to, markType.create(attrs));
          }
        }
        dispatch(tr.scrollIntoView());
      }
    }
    return true;
  };
}
function chainCommands(...commands) {
  return function(state2, dispatch, view) {
    for (let i = 0; i < commands.length; i++) if (commands[i](state2, dispatch, view)) return true;
    return false;
  };
}
var backspace = chainCommands(deleteSelection, joinBackward, selectNodeBackward);
var del = chainCommands(deleteSelection, joinForward, selectNodeForward);
var pcBaseKeymap = {
  "Enter": chainCommands(newlineInCode, createParagraphNear, liftEmptyBlock, splitBlock),
  "Mod-Enter": exitCode,
  "Backspace": backspace,
  "Mod-Backspace": backspace,
  "Shift-Backspace": backspace,
  "Delete": del,
  "Mod-Delete": del,
  "Mod-a": selectAll
};
var macBaseKeymap = {
  "Ctrl-h": pcBaseKeymap["Backspace"],
  "Alt-Backspace": pcBaseKeymap["Mod-Backspace"],
  "Ctrl-d": pcBaseKeymap["Delete"],
  "Ctrl-Alt-Backspace": pcBaseKeymap["Mod-Delete"],
  "Alt-Delete": pcBaseKeymap["Mod-Delete"],
  "Alt-d": pcBaseKeymap["Mod-Delete"],
  "Ctrl-a": selectTextblockStart,
  "Ctrl-e": selectTextblockEnd
};
for (let key in pcBaseKeymap) macBaseKeymap[key] = pcBaseKeymap[key];
var mac2 = typeof navigator != "undefined" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os != "undefined" && os.platform ? os.platform() == "darwin" : false;
var baseKeymap = mac2 ? macBaseKeymap : pcBaseKeymap;

// node_modules/prosemirror-inputrules/dist/index.js
var InputRule = class {
  /**
  Create an input rule. The rule applies when the user typed
  something and the text directly in front of the cursor matches
  `match`, which should end with `$`.
  
  The `handler` can be a string, in which case the matched text, or
  the first matched group in the regexp, is replaced by that
  string.
  
  Or a it can be a function, which will be called with the match
  array produced by
  [`RegExp.exec`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec),
  as well as the start and end of the matched range, and which can
  return a [transaction](https://prosemirror.net/docs/ref/#state.Transaction) that describes the
  rule's effect, or null to indicate the input was not handled.
  */
  constructor(match, handler, options = {}) {
    this.match = match;
    this.match = match;
    this.handler = typeof handler == "string" ? stringHandler(handler) : handler;
    this.undoable = options.undoable !== false;
    this.inCode = options.inCode || false;
    this.inCodeMark = options.inCodeMark !== false;
  }
};
function stringHandler(string) {
  return function(state2, match, start, end) {
    let insert = string;
    if (match[1]) {
      let offset3 = match[0].lastIndexOf(match[1]);
      insert += match[0].slice(offset3 + match[1].length);
      start += offset3;
      let cutOff = start - end;
      if (cutOff > 0) {
        insert = match[0].slice(offset3 - cutOff, offset3) + insert;
        start = end;
      }
    }
    return state2.tr.insertText(insert, start, end);
  };
}
var MAX_MATCH = 500;
function inputRules({
  rules
}) {
  let plugin = new Plugin({
    state: {
      init() {
        return null;
      },
      apply(tr, prev) {
        let stored = tr.getMeta(this);
        if (stored) return stored;
        return tr.selectionSet || tr.docChanged ? null : prev;
      }
    },
    props: {
      handleTextInput(view, from2, to, text2) {
        return run(view, from2, to, text2, rules, plugin);
      },
      handleDOMEvents: {
        compositionend: (view) => {
          setTimeout(() => {
            let {
              $cursor
            } = view.state.selection;
            if ($cursor) run(view, $cursor.pos, $cursor.pos, "", rules, plugin);
          });
        }
      }
    },
    isInputRules: true
  });
  return plugin;
}
function run(view, from2, to, text2, rules, plugin) {
  if (view.composing) return false;
  let state2 = view.state, $from = state2.doc.resolve(from2);
  let textBefore = $from.parent.textBetween(Math.max(0, $from.parentOffset - MAX_MATCH), $from.parentOffset, null, "\uFFFC") + text2;
  for (let i = 0; i < rules.length; i++) {
    let rule = rules[i];
    if (!rule.inCodeMark && $from.marks().some((m) => m.type.spec.code)) continue;
    if ($from.parent.type.spec.code) {
      if (!rule.inCode) continue;
    } else if (rule.inCode === "only") {
      continue;
    }
    let match = rule.match.exec(textBefore);
    if (!match || match[0].length < text2.length) continue;
    let startPos = from2 - (match[0].length - text2.length);
    if (!rule.inCodeMark) {
      let hasMark = false;
      state2.doc.nodesBetween(startPos, $from.pos, (node) => {
        if (node.isInline && node.marks.some((m) => m.type.spec.code)) hasMark = true;
      });
      if (hasMark) continue;
    }
    let tr = rule.handler(state2, match, startPos, to);
    if (!tr) continue;
    if (rule.undoable) tr.setMeta(plugin, {
      transform: tr,
      from: from2,
      to,
      text: text2
    });
    view.dispatch(tr);
    return true;
  }
  return false;
}
var emDash = new InputRule(/--$/, "\u2014", {
  inCodeMark: false
});
var ellipsis = new InputRule(/\.\.\.$/, "\u2026", {
  inCodeMark: false
});
var openDoubleQuote = new InputRule(/(?:^|[\s\{\[\(\<'"\u2018\u201C])(")$/, "\u201C", {
  inCodeMark: false
});
var closeDoubleQuote = new InputRule(/"$/, "\u201D", {
  inCodeMark: false
});
var openSingleQuote = new InputRule(/(?:^|[\s\{\[\(\<'"\u2018\u201C])(')$/, "\u2018", {
  inCodeMark: false
});
var closeSingleQuote = new InputRule(/'$/, "\u2019", {
  inCodeMark: false
});
var smartQuotes = [openDoubleQuote, closeDoubleQuote, openSingleQuote, closeSingleQuote];
function wrappingInputRule(regexp, nodeType, getAttrs = null, joinPredicate) {
  return new InputRule(regexp, (state2, match, start, end) => {
    let attrs = getAttrs instanceof Function ? getAttrs(match) : getAttrs;
    let tr = state2.tr.delete(start, end);
    let $start = tr.doc.resolve(start), range = $start.blockRange(), wrapping = range && findWrapping(range, nodeType, attrs);
    if (!wrapping) return null;
    tr.wrap(range, wrapping);
    let before = tr.doc.resolve(start - 1).nodeBefore;
    if (before && before.type == nodeType && canJoin(tr.doc, start - 1) && (!joinPredicate || joinPredicate(match, before))) tr.join(start - 1);
    return tr;
  });
}
function textblockTypeInputRule(regexp, nodeType, getAttrs = null) {
  return new InputRule(regexp, (state2, match, start, end) => {
    let $start = state2.doc.resolve(start);
    let attrs = getAttrs instanceof Function ? getAttrs(match) : getAttrs;
    if (!$start.node(-1).canReplaceWith($start.index(-1), $start.indexAfter(-1), nodeType)) return null;
    return state2.tr.delete(start, end).setBlockType(start, start, nodeType, attrs);
  });
}

// node_modules/ngx-editor/fesm2022/ngx-editor-helpers.mjs
var isMarkActive = (state2, type) => {
  const {
    from: from2,
    $from,
    to,
    empty: empty2
  } = state2.selection;
  if (empty2) {
    return Boolean(type.isInSet(state2.storedMarks || $from.marks()));
  }
  return state2.doc.rangeHasMark(from2, to, type);
};
var findNodeType = (type, $from) => {
  for (let i = $from.depth; i > 0; i -= 1) {
    if ($from.node(i).type === type) {
      return $from.node(i).type;
    }
  }
  return null;
};
var isNodeActive = (state2, type, attrs = {}) => {
  const {
    selection
  } = state2;
  const {
    $from,
    to
  } = selection;
  const node = findNodeType(type, $from);
  if (!Object.entries(attrs).length || !node) {
    return Boolean(node);
  }
  return to <= $from.end() && $from.parent.hasMarkup(type, attrs);
};
var getSelectionMarks = (state2) => {
  let marks2 = [];
  const {
    selection,
    storedMarks
  } = state2;
  const {
    from: from2,
    to,
    empty: empty2,
    $from
  } = selection;
  if (empty2) {
    marks2 = storedMarks || $from.marks();
  } else {
    state2.doc.nodesBetween(from2, to, (node) => {
      marks2 = [...marks2, ...node.marks];
    });
  }
  return marks2;
};
var getSelectionNodes = (state2) => {
  const nodes2 = [];
  const {
    selection: {
      from: from2,
      to
    }
  } = state2;
  state2.doc.nodesBetween(from2, to, (node) => {
    nodes2.push(node);
  });
  return nodes2;
};
var markApplies2 = (doc4, ranges, type) => {
  for (const range of ranges) {
    const {
      $from,
      $to
    } = range;
    let canApply = $from.depth === 0 ? doc4.type.allowsMarkType(type) : false;
    doc4.nodesBetween($from.pos, $to.pos, (node) => {
      if (canApply) {
        return false;
      }
      canApply = node.inlineContent && node.type.allowsMarkType(type);
      return true;
    });
    if (canApply) {
      return true;
    }
  }
  return false;
};
var markInputRule = (regexp, markType, attrs) => {
  return new InputRule(regexp, (state2, match, start, end) => {
    const {
      tr
    } = state2;
    const from2 = start;
    let to = end;
    const [fullMatch, , content] = match;
    const noOfStartSpaces = fullMatch.search(/\S/);
    if (content) {
      const textStart = start + fullMatch.indexOf(content);
      const textEnd = textStart + content.length;
      if (textEnd < end) {
        tr.delete(textEnd, end);
      }
      if (textStart > start) {
        tr.delete(start + noOfStartSpaces, textStart);
      }
      to = start + content.length + noOfStartSpaces;
    }
    tr.addMark(from2, to, markType.create(attrs));
    tr.removeStoredMark(markType);
    return tr;
  });
};
var canInsert = (state2, nodeType) => {
  const {
    $from
  } = state2.selection;
  for (let d = $from.depth; d >= 0; d -= 1) {
    const index = $from.index(d);
    if ($from.node(d).canReplaceWith(index, index, nodeType)) {
      return true;
    }
  }
  return false;
};

// node_modules/ngx-editor/fesm2022/ngx-editor-commands.mjs
var removeLink = () => {
  return (state2, dispatch) => {
    const {
      doc: doc4,
      selection,
      tr,
      schema: schema2
    } = state2;
    const {
      $head: {
        pos
      },
      from: from2,
      to
    } = selection;
    const linkMark = schema2.marks["link"];
    if (from2 === to) {
      const $pos = doc4.resolve(pos);
      const linkStart = pos - $pos.textOffset;
      const linkEnd = linkStart + $pos.parent.child($pos.index()).nodeSize;
      tr.removeMark(linkStart, linkEnd, linkMark);
    } else {
      tr.removeMark(from2, to, linkMark);
    }
    if (!tr.docChanged) {
      return false;
    }
    dispatch?.(tr);
    return true;
  };
};
var applyMark = (type, attrs = {}) => {
  return (state2, dispatch) => {
    const {
      tr,
      selection
    } = state2;
    const {
      empty: empty2,
      ranges,
      $from,
      $to
    } = selection;
    if (empty2 && selection instanceof TextSelection) {
      const {
        $cursor
      } = selection;
      if (!$cursor || !markApplies2(state2.doc, ranges, type)) {
        return false;
      }
      tr.addStoredMark(type.create(attrs));
      if (!tr.storedMarksSet) {
        return false;
      }
      dispatch?.(tr);
    } else {
      tr.addMark($from.pos, $to.pos, type.create(attrs));
      if (!tr.docChanged) {
        return false;
      }
      dispatch?.(tr.scrollIntoView());
    }
    return true;
  };
};
var removeMark2 = (type) => {
  return (state2, dispatch) => {
    const {
      tr,
      selection,
      storedMarks,
      doc: doc4
    } = state2;
    const {
      empty: empty2,
      ranges
    } = selection;
    if (empty2 && selection instanceof TextSelection) {
      const {
        $cursor
      } = selection;
      if (!$cursor || !markApplies2(state2.doc, ranges, type)) {
        return false;
      }
      if (type.isInSet(storedMarks || $cursor.marks())) {
        tr.removeStoredMark(type);
        dispatch?.(tr);
        return true;
      }
    } else {
      for (const range of ranges) {
        const {
          $from,
          $to
        } = range;
        const hasMark = doc4.rangeHasMark($from.pos, $to.pos, type);
        if (hasMark) {
          tr.removeMark($from.pos, $to.pos, type);
        }
      }
      if (!tr.docChanged) {
        return false;
      }
      dispatch?.(tr.scrollIntoView());
    }
    return false;
  };
};

// node_modules/rope-sequence/dist/index.js
var GOOD_LEAF_SIZE = 200;
var RopeSequence = function RopeSequence2() {
};
RopeSequence.prototype.append = function append(other) {
  if (!other.length) {
    return this;
  }
  other = RopeSequence.from(other);
  return !this.length && other || other.length < GOOD_LEAF_SIZE && this.leafAppend(other) || this.length < GOOD_LEAF_SIZE && other.leafPrepend(this) || this.appendInner(other);
};
RopeSequence.prototype.prepend = function prepend(other) {
  if (!other.length) {
    return this;
  }
  return RopeSequence.from(other).append(this);
};
RopeSequence.prototype.appendInner = function appendInner(other) {
  return new Append(this, other);
};
RopeSequence.prototype.slice = function slice(from2, to) {
  if (from2 === void 0) from2 = 0;
  if (to === void 0) to = this.length;
  if (from2 >= to) {
    return RopeSequence.empty;
  }
  return this.sliceInner(Math.max(0, from2), Math.min(this.length, to));
};
RopeSequence.prototype.get = function get(i) {
  if (i < 0 || i >= this.length) {
    return void 0;
  }
  return this.getInner(i);
};
RopeSequence.prototype.forEach = function forEach(f, from2, to) {
  if (from2 === void 0) from2 = 0;
  if (to === void 0) to = this.length;
  if (from2 <= to) {
    this.forEachInner(f, from2, to, 0);
  } else {
    this.forEachInvertedInner(f, from2, to, 0);
  }
};
RopeSequence.prototype.map = function map2(f, from2, to) {
  if (from2 === void 0) from2 = 0;
  if (to === void 0) to = this.length;
  var result = [];
  this.forEach(function(elt, i) {
    return result.push(f(elt, i));
  }, from2, to);
  return result;
};
RopeSequence.from = function from(values) {
  if (values instanceof RopeSequence) {
    return values;
  }
  return values && values.length ? new Leaf(values) : RopeSequence.empty;
};
var Leaf = /* @__PURE__ */ function(RopeSequence3) {
  function Leaf2(values) {
    RopeSequence3.call(this);
    this.values = values;
  }
  if (RopeSequence3) Leaf2.__proto__ = RopeSequence3;
  Leaf2.prototype = Object.create(RopeSequence3 && RopeSequence3.prototype);
  Leaf2.prototype.constructor = Leaf2;
  var prototypeAccessors = {
    length: {
      configurable: true
    },
    depth: {
      configurable: true
    }
  };
  Leaf2.prototype.flatten = function flatten() {
    return this.values;
  };
  Leaf2.prototype.sliceInner = function sliceInner(from2, to) {
    if (from2 == 0 && to == this.length) {
      return this;
    }
    return new Leaf2(this.values.slice(from2, to));
  };
  Leaf2.prototype.getInner = function getInner(i) {
    return this.values[i];
  };
  Leaf2.prototype.forEachInner = function forEachInner(f, from2, to, start) {
    for (var i = from2; i < to; i++) {
      if (f(this.values[i], start + i) === false) {
        return false;
      }
    }
  };
  Leaf2.prototype.forEachInvertedInner = function forEachInvertedInner(f, from2, to, start) {
    for (var i = from2 - 1; i >= to; i--) {
      if (f(this.values[i], start + i) === false) {
        return false;
      }
    }
  };
  Leaf2.prototype.leafAppend = function leafAppend(other) {
    if (this.length + other.length <= GOOD_LEAF_SIZE) {
      return new Leaf2(this.values.concat(other.flatten()));
    }
  };
  Leaf2.prototype.leafPrepend = function leafPrepend(other) {
    if (this.length + other.length <= GOOD_LEAF_SIZE) {
      return new Leaf2(other.flatten().concat(this.values));
    }
  };
  prototypeAccessors.length.get = function() {
    return this.values.length;
  };
  prototypeAccessors.depth.get = function() {
    return 0;
  };
  Object.defineProperties(Leaf2.prototype, prototypeAccessors);
  return Leaf2;
}(RopeSequence);
RopeSequence.empty = new Leaf([]);
var Append = /* @__PURE__ */ function(RopeSequence3) {
  function Append2(left, right) {
    RopeSequence3.call(this);
    this.left = left;
    this.right = right;
    this.length = left.length + right.length;
    this.depth = Math.max(left.depth, right.depth) + 1;
  }
  if (RopeSequence3) Append2.__proto__ = RopeSequence3;
  Append2.prototype = Object.create(RopeSequence3 && RopeSequence3.prototype);
  Append2.prototype.constructor = Append2;
  Append2.prototype.flatten = function flatten() {
    return this.left.flatten().concat(this.right.flatten());
  };
  Append2.prototype.getInner = function getInner(i) {
    return i < this.left.length ? this.left.get(i) : this.right.get(i - this.left.length);
  };
  Append2.prototype.forEachInner = function forEachInner(f, from2, to, start) {
    var leftLen = this.left.length;
    if (from2 < leftLen && this.left.forEachInner(f, from2, Math.min(to, leftLen), start) === false) {
      return false;
    }
    if (to > leftLen && this.right.forEachInner(f, Math.max(from2 - leftLen, 0), Math.min(this.length, to) - leftLen, start + leftLen) === false) {
      return false;
    }
  };
  Append2.prototype.forEachInvertedInner = function forEachInvertedInner(f, from2, to, start) {
    var leftLen = this.left.length;
    if (from2 > leftLen && this.right.forEachInvertedInner(f, from2 - leftLen, Math.max(to, leftLen) - leftLen, start + leftLen) === false) {
      return false;
    }
    if (to < leftLen && this.left.forEachInvertedInner(f, Math.min(from2, leftLen), to, start) === false) {
      return false;
    }
  };
  Append2.prototype.sliceInner = function sliceInner(from2, to) {
    if (from2 == 0 && to == this.length) {
      return this;
    }
    var leftLen = this.left.length;
    if (to <= leftLen) {
      return this.left.slice(from2, to);
    }
    if (from2 >= leftLen) {
      return this.right.slice(from2 - leftLen, to - leftLen);
    }
    return this.left.slice(from2, leftLen).append(this.right.slice(0, to - leftLen));
  };
  Append2.prototype.leafAppend = function leafAppend(other) {
    var inner = this.right.leafAppend(other);
    if (inner) {
      return new Append2(this.left, inner);
    }
  };
  Append2.prototype.leafPrepend = function leafPrepend(other) {
    var inner = this.left.leafPrepend(other);
    if (inner) {
      return new Append2(inner, this.right);
    }
  };
  Append2.prototype.appendInner = function appendInner2(other) {
    if (this.left.depth >= Math.max(this.right.depth, other.depth) + 1) {
      return new Append2(this.left, new Append2(this.right, other));
    }
    return new Append2(this, other);
  };
  return Append2;
}(RopeSequence);
var dist_default2 = RopeSequence;

// node_modules/prosemirror-history/dist/index.js
var max_empty_items = 500;
var Branch = class _Branch {
  constructor(items, eventCount) {
    this.items = items;
    this.eventCount = eventCount;
  }
  // Pop the latest event off the branch's history and apply it
  // to a document transform.
  popEvent(state2, preserveItems) {
    if (this.eventCount == 0) return null;
    let end = this.items.length;
    for (; ; end--) {
      let next = this.items.get(end - 1);
      if (next.selection) {
        --end;
        break;
      }
    }
    let remap, mapFrom;
    if (preserveItems) {
      remap = this.remapping(end, this.items.length);
      mapFrom = remap.maps.length;
    }
    let transform = state2.tr;
    let selection, remaining;
    let addAfter = [], addBefore = [];
    this.items.forEach((item, i) => {
      if (!item.step) {
        if (!remap) {
          remap = this.remapping(end, i + 1);
          mapFrom = remap.maps.length;
        }
        mapFrom--;
        addBefore.push(item);
        return;
      }
      if (remap) {
        addBefore.push(new Item(item.map));
        let step = item.step.map(remap.slice(mapFrom)), map3;
        if (step && transform.maybeStep(step).doc) {
          map3 = transform.mapping.maps[transform.mapping.maps.length - 1];
          addAfter.push(new Item(map3, void 0, void 0, addAfter.length + addBefore.length));
        }
        mapFrom--;
        if (map3) remap.appendMap(map3, mapFrom);
      } else {
        transform.maybeStep(item.step);
      }
      if (item.selection) {
        selection = remap ? item.selection.map(remap.slice(mapFrom)) : item.selection;
        remaining = new _Branch(this.items.slice(0, end).append(addBefore.reverse().concat(addAfter)), this.eventCount - 1);
        return false;
      }
    }, this.items.length, 0);
    return {
      remaining,
      transform,
      selection
    };
  }
  // Create a new branch with the given transform added.
  addTransform(transform, selection, histOptions, preserveItems) {
    let newItems = [], eventCount = this.eventCount;
    let oldItems = this.items, lastItem = !preserveItems && oldItems.length ? oldItems.get(oldItems.length - 1) : null;
    for (let i = 0; i < transform.steps.length; i++) {
      let step = transform.steps[i].invert(transform.docs[i]);
      let item = new Item(transform.mapping.maps[i], step, selection), merged;
      if (merged = lastItem && lastItem.merge(item)) {
        item = merged;
        if (i) newItems.pop();
        else oldItems = oldItems.slice(0, oldItems.length - 1);
      }
      newItems.push(item);
      if (selection) {
        eventCount++;
        selection = void 0;
      }
      if (!preserveItems) lastItem = item;
    }
    let overflow = eventCount - histOptions.depth;
    if (overflow > DEPTH_OVERFLOW) {
      oldItems = cutOffEvents(oldItems, overflow);
      eventCount -= overflow;
    }
    return new _Branch(oldItems.append(newItems), eventCount);
  }
  remapping(from2, to) {
    let maps = new Mapping();
    this.items.forEach((item, i) => {
      let mirrorPos = item.mirrorOffset != null && i - item.mirrorOffset >= from2 ? maps.maps.length - item.mirrorOffset : void 0;
      maps.appendMap(item.map, mirrorPos);
    }, from2, to);
    return maps;
  }
  addMaps(array) {
    if (this.eventCount == 0) return this;
    return new _Branch(this.items.append(array.map((map3) => new Item(map3))), this.eventCount);
  }
  // When the collab module receives remote changes, the history has
  // to know about those, so that it can adjust the steps that were
  // rebased on top of the remote changes, and include the position
  // maps for the remote changes in its array of items.
  rebased(rebasedTransform, rebasedCount) {
    if (!this.eventCount) return this;
    let rebasedItems = [], start = Math.max(0, this.items.length - rebasedCount);
    let mapping = rebasedTransform.mapping;
    let newUntil = rebasedTransform.steps.length;
    let eventCount = this.eventCount;
    this.items.forEach((item) => {
      if (item.selection) eventCount--;
    }, start);
    let iRebased = rebasedCount;
    this.items.forEach((item) => {
      let pos = mapping.getMirror(--iRebased);
      if (pos == null) return;
      newUntil = Math.min(newUntil, pos);
      let map3 = mapping.maps[pos];
      if (item.step) {
        let step = rebasedTransform.steps[pos].invert(rebasedTransform.docs[pos]);
        let selection = item.selection && item.selection.map(mapping.slice(iRebased + 1, pos));
        if (selection) eventCount++;
        rebasedItems.push(new Item(map3, step, selection));
      } else {
        rebasedItems.push(new Item(map3));
      }
    }, start);
    let newMaps = [];
    for (let i = rebasedCount; i < newUntil; i++) newMaps.push(new Item(mapping.maps[i]));
    let items = this.items.slice(0, start).append(newMaps).append(rebasedItems);
    let branch = new _Branch(items, eventCount);
    if (branch.emptyItemCount() > max_empty_items) branch = branch.compress(this.items.length - rebasedItems.length);
    return branch;
  }
  emptyItemCount() {
    let count = 0;
    this.items.forEach((item) => {
      if (!item.step) count++;
    });
    return count;
  }
  // Compressing a branch means rewriting it to push the air (map-only
  // items) out. During collaboration, these naturally accumulate
  // because each remote change adds one. The `upto` argument is used
  // to ensure that only the items below a given level are compressed,
  // because `rebased` relies on a clean, untouched set of items in
  // order to associate old items with rebased steps.
  compress(upto = this.items.length) {
    let remap = this.remapping(0, upto), mapFrom = remap.maps.length;
    let items = [], events = 0;
    this.items.forEach((item, i) => {
      if (i >= upto) {
        items.push(item);
        if (item.selection) events++;
      } else if (item.step) {
        let step = item.step.map(remap.slice(mapFrom)), map3 = step && step.getMap();
        mapFrom--;
        if (map3) remap.appendMap(map3, mapFrom);
        if (step) {
          let selection = item.selection && item.selection.map(remap.slice(mapFrom));
          if (selection) events++;
          let newItem = new Item(map3.invert(), step, selection), merged, last = items.length - 1;
          if (merged = items.length && items[last].merge(newItem)) items[last] = merged;
          else items.push(newItem);
        }
      } else if (item.map) {
        mapFrom--;
      }
    }, this.items.length, 0);
    return new _Branch(dist_default2.from(items.reverse()), events);
  }
};
Branch.empty = new Branch(dist_default2.empty, 0);
function cutOffEvents(items, n) {
  let cutPoint;
  items.forEach((item, i) => {
    if (item.selection && n-- == 0) {
      cutPoint = i;
      return false;
    }
  });
  return items.slice(cutPoint);
}
var Item = class _Item {
  constructor(map3, step, selection, mirrorOffset) {
    this.map = map3;
    this.step = step;
    this.selection = selection;
    this.mirrorOffset = mirrorOffset;
  }
  merge(other) {
    if (this.step && other.step && !other.selection) {
      let step = other.step.merge(this.step);
      if (step) return new _Item(step.getMap().invert(), step, this.selection);
    }
  }
};
var HistoryState = class {
  constructor(done, undone, prevRanges, prevTime, prevComposition) {
    this.done = done;
    this.undone = undone;
    this.prevRanges = prevRanges;
    this.prevTime = prevTime;
    this.prevComposition = prevComposition;
  }
};
var DEPTH_OVERFLOW = 20;
function applyTransaction(history2, state2, tr, options) {
  let historyTr = tr.getMeta(historyKey), rebased;
  if (historyTr) return historyTr.historyState;
  if (tr.getMeta(closeHistoryKey)) history2 = new HistoryState(history2.done, history2.undone, null, 0, -1);
  let appended = tr.getMeta("appendedTransaction");
  if (tr.steps.length == 0) {
    return history2;
  } else if (appended && appended.getMeta(historyKey)) {
    if (appended.getMeta(historyKey).redo) return new HistoryState(history2.done.addTransform(tr, void 0, options, mustPreserveItems(state2)), history2.undone, rangesFor(tr.mapping.maps), history2.prevTime, history2.prevComposition);
    else return new HistoryState(history2.done, history2.undone.addTransform(tr, void 0, options, mustPreserveItems(state2)), null, history2.prevTime, history2.prevComposition);
  } else if (tr.getMeta("addToHistory") !== false && !(appended && appended.getMeta("addToHistory") === false)) {
    let composition = tr.getMeta("composition");
    let newGroup = history2.prevTime == 0 || !appended && history2.prevComposition != composition && (history2.prevTime < (tr.time || 0) - options.newGroupDelay || !isAdjacentTo(tr, history2.prevRanges));
    let prevRanges = appended ? mapRanges(history2.prevRanges, tr.mapping) : rangesFor(tr.mapping.maps);
    return new HistoryState(history2.done.addTransform(tr, newGroup ? state2.selection.getBookmark() : void 0, options, mustPreserveItems(state2)), Branch.empty, prevRanges, tr.time, composition == null ? history2.prevComposition : composition);
  } else if (rebased = tr.getMeta("rebased")) {
    return new HistoryState(history2.done.rebased(tr, rebased), history2.undone.rebased(tr, rebased), mapRanges(history2.prevRanges, tr.mapping), history2.prevTime, history2.prevComposition);
  } else {
    return new HistoryState(history2.done.addMaps(tr.mapping.maps), history2.undone.addMaps(tr.mapping.maps), mapRanges(history2.prevRanges, tr.mapping), history2.prevTime, history2.prevComposition);
  }
}
function isAdjacentTo(transform, prevRanges) {
  if (!prevRanges) return false;
  if (!transform.docChanged) return true;
  let adjacent = false;
  transform.mapping.maps[0].forEach((start, end) => {
    for (let i = 0; i < prevRanges.length; i += 2) if (start <= prevRanges[i + 1] && end >= prevRanges[i]) adjacent = true;
  });
  return adjacent;
}
function rangesFor(maps) {
  let result = [];
  for (let i = maps.length - 1; i >= 0 && result.length == 0; i--) maps[i].forEach((_from, _to, from2, to) => result.push(from2, to));
  return result;
}
function mapRanges(ranges, mapping) {
  if (!ranges) return null;
  let result = [];
  for (let i = 0; i < ranges.length; i += 2) {
    let from2 = mapping.map(ranges[i], 1), to = mapping.map(ranges[i + 1], -1);
    if (from2 <= to) result.push(from2, to);
  }
  return result;
}
function histTransaction(history2, state2, redo3) {
  let preserveItems = mustPreserveItems(state2);
  let histOptions = historyKey.get(state2).spec.config;
  let pop = (redo3 ? history2.undone : history2.done).popEvent(state2, preserveItems);
  if (!pop) return null;
  let selection = pop.selection.resolve(pop.transform.doc);
  let added = (redo3 ? history2.done : history2.undone).addTransform(pop.transform, state2.selection.getBookmark(), histOptions, preserveItems);
  let newHist = new HistoryState(redo3 ? added : pop.remaining, redo3 ? pop.remaining : added, null, 0, -1);
  return pop.transform.setSelection(selection).setMeta(historyKey, {
    redo: redo3,
    historyState: newHist
  });
}
var cachedPreserveItems = false;
var cachedPreserveItemsPlugins = null;
function mustPreserveItems(state2) {
  let plugins = state2.plugins;
  if (cachedPreserveItemsPlugins != plugins) {
    cachedPreserveItems = false;
    cachedPreserveItemsPlugins = plugins;
    for (let i = 0; i < plugins.length; i++) if (plugins[i].spec.historyPreserveItems) {
      cachedPreserveItems = true;
      break;
    }
  }
  return cachedPreserveItems;
}
var historyKey = new PluginKey("history");
var closeHistoryKey = new PluginKey("closeHistory");
function history(config = {}) {
  config = {
    depth: config.depth || 100,
    newGroupDelay: config.newGroupDelay || 500
  };
  return new Plugin({
    key: historyKey,
    state: {
      init() {
        return new HistoryState(Branch.empty, Branch.empty, null, 0, -1);
      },
      apply(tr, hist, state2) {
        return applyTransaction(hist, state2, tr, config);
      }
    },
    config,
    props: {
      handleDOMEvents: {
        beforeinput(view, e) {
          let inputType = e.inputType;
          let command = inputType == "historyUndo" ? undo : inputType == "historyRedo" ? redo : null;
          if (!command || !view.editable) return false;
          e.preventDefault();
          return command(view.state, view.dispatch);
        }
      }
    }
  });
}
function buildCommand(redo3, scroll) {
  return (state2, dispatch) => {
    let hist = historyKey.getState(state2);
    if (!hist || (redo3 ? hist.undone : hist.done).eventCount == 0) return false;
    if (dispatch) {
      let tr = histTransaction(hist, state2, redo3);
      if (tr) dispatch(scroll ? tr.scrollIntoView() : tr);
    }
    return true;
  };
}
var undo = buildCommand(false, true);
var redo = buildCommand(true, true);
var undoNoScroll = buildCommand(false, false);
var redoNoScroll = buildCommand(true, false);

// node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var sides = ["top", "right", "bottom", "left"];
var alignments = ["start", "end"];
var placements = /* @__PURE__ */ sides.reduce((acc, side) => acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), []);
var min = Math.min;
var max = Math.max;
var round = Math.round;
var createCoords = (v) => ({
  x: v,
  y: v
});
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
var oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide2(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
var yAxisSides = /* @__PURE__ */ new Set(["top", "bottom"]);
function getSideAxis(placement) {
  return yAxisSides.has(getSide2(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return __spreadValues({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }, padding);
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}

// node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide2(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
var computePosition = (reference, floating, config) => __async(void 0, null, function* () {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = yield platform2.isRTL == null ? void 0 : platform2.isRTL(floating);
  let rects = yield platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = yield fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = __spreadProps(__spreadValues({}, middlewareData), {
      [name]: __spreadValues(__spreadValues({}, middlewareData[name]), data)
    });
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? yield platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
});
function detectOverflow(state2, options) {
  return __async(this, null, function* () {
    var _await$platform$isEle;
    if (options === void 0) {
      options = {};
    }
    const {
      x,
      y,
      platform: platform2,
      rects,
      elements,
      strategy
    } = state2;
    const {
      boundary = "clippingAncestors",
      rootBoundary = "viewport",
      elementContext = "floating",
      altBoundary = false,
      padding = 0
    } = evaluate(options, state2);
    const paddingObject = getPaddingObject(padding);
    const altContext = elementContext === "floating" ? "reference" : "floating";
    const element = elements[altBoundary ? altContext : elementContext];
    const clippingClientRect = rectToClientRect(yield platform2.getClippingRect({
      element: ((_await$platform$isEle = yield platform2.isElement == null ? void 0 : platform2.isElement(element)) != null ? _await$platform$isEle : true) ? element : element.contextElement || (yield platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
      boundary,
      rootBoundary,
      strategy
    }));
    const rect = elementContext === "floating" ? {
      x,
      y,
      width: rects.floating.width,
      height: rects.floating.height
    } : rects.reference;
    const offsetParent = yield platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating);
    const offsetScale = (yield platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? (yield platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
      x: 1,
      y: 1
    } : {
      x: 1,
      y: 1
    };
    const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? yield platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
      elements,
      rect,
      offsetParent,
      strategy
    }) : rect);
    return {
      top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
      bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
      left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
      right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
    };
  });
}
function getPlacementList(alignment, autoAlignment, allowedPlacements) {
  const allowedPlacementsSortedByAlignment = alignment ? [...allowedPlacements.filter((placement) => getAlignment(placement) === alignment), ...allowedPlacements.filter((placement) => getAlignment(placement) !== alignment)] : allowedPlacements.filter((placement) => getSide2(placement) === placement);
  return allowedPlacementsSortedByAlignment.filter((placement) => {
    if (alignment) {
      return getAlignment(placement) === alignment || (autoAlignment ? getOppositeAlignmentPlacement(placement) !== placement : false);
    }
    return true;
  });
}
var autoPlacement = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "autoPlacement",
    options,
    fn(state2) {
      return __async(this, null, function* () {
        var _middlewareData$autoP, _middlewareData$autoP2, _placementsThatFitOnE;
        const {
          rects,
          middlewareData,
          placement,
          platform: platform2,
          elements
        } = state2;
        const _a2 = evaluate(options, state2), {
          crossAxis = false,
          alignment,
          allowedPlacements = placements,
          autoAlignment = true
        } = _a2, detectOverflowOptions = __objRest(_a2, [
          "crossAxis",
          "alignment",
          "allowedPlacements",
          "autoAlignment"
        ]);
        const placements$1 = alignment !== void 0 || allowedPlacements === placements ? getPlacementList(alignment || null, autoAlignment, allowedPlacements) : allowedPlacements;
        const overflow = yield detectOverflow(state2, detectOverflowOptions);
        const currentIndex = ((_middlewareData$autoP = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP.index) || 0;
        const currentPlacement = placements$1[currentIndex];
        if (currentPlacement == null) {
          return {};
        }
        const alignmentSides = getAlignmentSides(currentPlacement, rects, yield platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
        if (placement !== currentPlacement) {
          return {
            reset: {
              placement: placements$1[0]
            }
          };
        }
        const currentOverflows = [overflow[getSide2(currentPlacement)], overflow[alignmentSides[0]], overflow[alignmentSides[1]]];
        const allOverflows = [...((_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.overflows) || [], {
          placement: currentPlacement,
          overflows: currentOverflows
        }];
        const nextPlacement = placements$1[currentIndex + 1];
        if (nextPlacement) {
          return {
            data: {
              index: currentIndex + 1,
              overflows: allOverflows
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        const placementsSortedByMostSpace = allOverflows.map((d) => {
          const alignment2 = getAlignment(d.placement);
          return [d.placement, alignment2 && crossAxis ? (
            // Check along the mainAxis and main crossAxis side.
            d.overflows.slice(0, 2).reduce((acc, v) => acc + v, 0)
          ) : (
            // Check only the mainAxis.
            d.overflows[0]
          ), d.overflows];
        }).sort((a, b) => a[1] - b[1]);
        const placementsThatFitOnEachSide = placementsSortedByMostSpace.filter((d) => d[2].slice(
          0,
          // Aligned placements should not check their opposite crossAxis
          // side.
          getAlignment(d[0]) ? 2 : 3
        ).every((v) => v <= 0));
        const resetPlacement = ((_placementsThatFitOnE = placementsThatFitOnEachSide[0]) == null ? void 0 : _placementsThatFitOnE[0]) || placementsSortedByMostSpace[0][0];
        if (resetPlacement !== placement) {
          return {
            data: {
              index: currentIndex + 1,
              overflows: allOverflows
            },
            reset: {
              placement: resetPlacement
            }
          };
        }
        return {};
      });
    }
  };
};
var originSides = /* @__PURE__ */ new Set(["left", "top"]);
function convertValueToCoords(state2, options) {
  return __async(this, null, function* () {
    const {
      placement,
      platform: platform2,
      elements
    } = state2;
    const rtl = yield platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating);
    const side = getSide2(placement);
    const alignment = getAlignment(placement);
    const isVertical = getSideAxis(placement) === "y";
    const mainAxisMulti = originSides.has(side) ? -1 : 1;
    const crossAxisMulti = rtl && isVertical ? -1 : 1;
    const rawValue = evaluate(options, state2);
    let {
      mainAxis,
      crossAxis,
      alignmentAxis
    } = typeof rawValue === "number" ? {
      mainAxis: rawValue,
      crossAxis: 0,
      alignmentAxis: null
    } : {
      mainAxis: rawValue.mainAxis || 0,
      crossAxis: rawValue.crossAxis || 0,
      alignmentAxis: rawValue.alignmentAxis
    };
    if (alignment && typeof alignmentAxis === "number") {
      crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
    }
    return isVertical ? {
      x: crossAxis * crossAxisMulti,
      y: mainAxis * mainAxisMulti
    } : {
      x: mainAxis * mainAxisMulti,
      y: crossAxis * crossAxisMulti
    };
  });
}
var offset = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    fn(state2) {
      return __async(this, null, function* () {
        var _middlewareData$offse, _middlewareData$arrow;
        const {
          x,
          y,
          placement,
          middlewareData
        } = state2;
        const diffCoords = yield convertValueToCoords(state2, options);
        if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
          return {};
        }
        return {
          x: x + diffCoords.x,
          y: y + diffCoords.y,
          data: __spreadProps(__spreadValues({}, diffCoords), {
            placement
          })
        };
      });
    }
  };
};

// node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function hasWindow() {
  return typeof window !== "undefined";
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
var invalidOverflowDisplayValues = /* @__PURE__ */ new Set(["inline", "contents"]);
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle2(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !invalidOverflowDisplayValues.has(display);
}
var tableElements = /* @__PURE__ */ new Set(["table", "td", "th"]);
function isTableElement(element) {
  return tableElements.has(getNodeName(element));
}
var topLayerSelectors = [":popover-open", ":modal"];
function isTopLayer(element) {
  return topLayerSelectors.some((selector) => {
    try {
      return element.matches(selector);
    } catch (_e) {
      return false;
    }
  });
}
var transformProperties = ["transform", "translate", "scale", "rotate", "perspective"];
var willChangeValues = ["transform", "translate", "scale", "rotate", "perspective", "filter"];
var containValues = ["paint", "layout", "strict", "content"];
function isContainingBlock(elementOrCss) {
  const webkit2 = isWebKit();
  const css = isElement(elementOrCss) ? getComputedStyle2(elementOrCss) : elementOrCss;
  return transformProperties.some((value) => css[value] ? css[value] !== "none" : false) || (css.containerType ? css.containerType !== "normal" : false) || !webkit2 && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit2 && (css.filter ? css.filter !== "none" : false) || willChangeValues.some((value) => (css.willChange || "").includes(value)) || containValues.some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports) return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
var lastTraversableNodeNames = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function isLastTraversableNode(node) {
  return lastTraversableNodeNames.has(getNodeName(node));
}
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode2 = getParentNode(node);
  if (isLastTraversableNode(parentNode2)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode2) && isOverflowElement(parentNode2)) {
    return parentNode2;
  }
  return getNearestOverflowAncestor(parentNode2);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}

// node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css = getComputedStyle2(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
var noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect2 = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect2.left + visualOffsets.x) / scale.x;
  let y = (clientRect2.top + visualOffsets.y) / scale.y;
  let width = clientRect2.width / scale.x;
  let height = clientRect2.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle2(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}
function getWindowScrollBarX(element, rect) {
  const leftScroll = getNodeScroll(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll) {
  const htmlRect = documentElement.getBoundingClientRect();
  const x = htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect);
  const y = htmlRect.top + scroll.scrollTop;
  return {
    x,
    y
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle2(body).direction === "rtl") {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
var SCROLLBAR_MAX = 25;
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  const windowScrollbarX = getWindowScrollBarX(html);
  if (windowScrollbarX <= 0) {
    const doc4 = html.ownerDocument;
    const body = doc4.body;
    const bodyStyles = getComputedStyle(body);
    const bodyMarginInline = doc4.compatMode === "CSS1Compat" ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
    const clippingStableScrollbarWidth = Math.abs(html.clientWidth - body.clientWidth - bodyMarginInline);
    if (clippingStableScrollbarWidth <= SCROLLBAR_MAX) {
      width -= clippingStableScrollbarWidth;
    }
  } else if (windowScrollbarX <= SCROLLBAR_MAX) {
    width += windowScrollbarX;
  }
  return {
    width,
    height,
    x,
    y
  };
}
var absoluteOrFixed = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function getInnerBoundingClientRect(element, strategy) {
  const clientRect2 = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect2.top + element.clientTop;
  const left = clientRect2.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode2 = getParentNode(element);
  if (parentNode2 === stopNode || !isElement(parentNode2) || isLastTraversableNode(parentNode2)) {
    return false;
  }
  return getComputedStyle2(parentNode2).position === "fixed" || hasFixedPositionAncestor(parentNode2, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult2 = cache.get(element);
  if (cachedResult2) {
    return cachedResult2;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle2(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle2(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && absoluteOrFixed.has(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  function setLeftRTLScrollbarOffset() {
    offsets.x = getWindowScrollBarX(documentElement);
  }
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      setLeftRTLScrollbarOffset();
    }
  }
  if (isFixed && !isOffsetParentAnElement && documentElement) {
    setLeftRTLScrollbarOffset();
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element) {
  return getComputedStyle2(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;
  if (getDocumentElement(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}
var getElementRects = function(data) {
  return __async(this, null, function* () {
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    const floatingDimensions = yield getDimensionsFn(data.floating);
    return {
      reference: getRectRelativeToOffsetParent(data.reference, yield getOffsetParentFn(data.floating), data.strategy),
      floating: {
        x: 0,
        y: 0,
        width: floatingDimensions.width,
        height: floatingDimensions.height
      }
    };
  });
};
function isRTL(element) {
  return getComputedStyle2(element).direction === "rtl";
}
var platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
var detectOverflow2 = detectOverflow;
var offset2 = offset;
var autoPlacement2 = autoPlacement;
var computePosition2 = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = __spreadValues({
    platform
  }, options);
  const platformWithCache = __spreadProps(__spreadValues({}, mergedOptions.platform), {
    _c: cache
  });
  return computePosition(reference, floating, __spreadProps(__spreadValues({}, mergedOptions), {
    platform: platformWithCache
  }));
};

// node_modules/w3c-keyname/index.js
var base = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
};
var shift2 = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
};
var mac3 = typeof navigator != "undefined" && /Mac/.test(navigator.platform);
var ie2 = typeof navigator != "undefined" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (i = 0; i < 10; i++) base[48 + i] = base[96 + i] = String(i);
var i;
for (i = 1; i <= 24; i++) base[i + 111] = "F" + i;
var i;
for (i = 65; i <= 90; i++) {
  base[i] = String.fromCharCode(i + 32);
  shift2[i] = String.fromCharCode(i);
}
var i;
for (code3 in base) if (!shift2.hasOwnProperty(code3)) shift2[code3] = base[code3];
var code3;
function keyName(event) {
  var ignoreKey = mac3 && event.metaKey && event.shiftKey && !event.ctrlKey && !event.altKey || ie2 && event.shiftKey && event.key && event.key.length == 1 || event.key == "Unidentified";
  var name = !ignoreKey && event.key || (event.shiftKey ? shift2 : base)[event.keyCode] || event.key || "Unidentified";
  if (name == "Esc") name = "Escape";
  if (name == "Del") name = "Delete";
  if (name == "Left") name = "ArrowLeft";
  if (name == "Up") name = "ArrowUp";
  if (name == "Right") name = "ArrowRight";
  if (name == "Down") name = "ArrowDown";
  return name;
}

// node_modules/prosemirror-keymap/dist/index.js
var mac4 = typeof navigator != "undefined" && /Mac|iP(hone|[oa]d)/.test(navigator.platform);
var windows2 = typeof navigator != "undefined" && /Win/.test(navigator.platform);
function normalizeKeyName(name) {
  let parts = name.split(/-(?!$)/), result = parts[parts.length - 1];
  if (result == "Space") result = " ";
  let alt, ctrl, shift3, meta;
  for (let i = 0; i < parts.length - 1; i++) {
    let mod = parts[i];
    if (/^(cmd|meta|m)$/i.test(mod)) meta = true;
    else if (/^a(lt)?$/i.test(mod)) alt = true;
    else if (/^(c|ctrl|control)$/i.test(mod)) ctrl = true;
    else if (/^s(hift)?$/i.test(mod)) shift3 = true;
    else if (/^mod$/i.test(mod)) {
      if (mac4) meta = true;
      else ctrl = true;
    } else throw new Error("Unrecognized modifier name: " + mod);
  }
  if (alt) result = "Alt-" + result;
  if (ctrl) result = "Ctrl-" + result;
  if (meta) result = "Meta-" + result;
  if (shift3) result = "Shift-" + result;
  return result;
}
function normalize(map3) {
  let copy2 = /* @__PURE__ */ Object.create(null);
  for (let prop in map3) copy2[normalizeKeyName(prop)] = map3[prop];
  return copy2;
}
function modifiers(name, event, shift3 = true) {
  if (event.altKey) name = "Alt-" + name;
  if (event.ctrlKey) name = "Ctrl-" + name;
  if (event.metaKey) name = "Meta-" + name;
  if (shift3 && event.shiftKey) name = "Shift-" + name;
  return name;
}
function keymap(bindings) {
  return new Plugin({
    props: {
      handleKeyDown: keydownHandler(bindings)
    }
  });
}
function keydownHandler(bindings) {
  let map3 = normalize(bindings);
  return function(view, event) {
    let name = keyName(event), baseName, direct = map3[modifiers(name, event)];
    if (direct && direct(view.state, view.dispatch, view)) return true;
    if (name.length == 1 && name != " ") {
      if (event.shiftKey) {
        let noShift = map3[modifiers(name, event, false)];
        if (noShift && noShift(view.state, view.dispatch, view)) return true;
      }
      if ((event.altKey || event.metaKey || event.ctrlKey) && // Ctrl-Alt may be used for AltGr on Windows
      !(windows2 && event.ctrlKey && event.altKey) && (baseName = base[event.keyCode]) && baseName != name) {
        let fromCode = map3[modifiers(baseName, event)];
        if (fromCode && fromCode(view.state, view.dispatch, view)) return true;
      }
    }
    return false;
  };
}

// node_modules/ngx-editor/fesm2022/ngx-editor.mjs
var editablePlugin = (editable = true) => {
  return new Plugin({
    key: new PluginKey("editable"),
    state: {
      init() {
        return editable;
      },
      apply(tr, previousVal) {
        return tr.getMeta("UPDATE_EDITABLE") ?? previousVal;
      }
    },
    props: {
      editable(state2) {
        return this.getState(state2);
      },
      attributes(state2) {
        const isEnabled = this.getState(state2);
        if (isEnabled) {
          return null;
        }
        return {
          class: "NgxEditor__Content--Disabled"
        };
      }
    }
  });
};
var PLACEHOLDER_CLASSNAME = "NgxEditor__Placeholder";
var placeholderPlugin = (text2) => {
  return new Plugin({
    key: new PluginKey("placeholder"),
    state: {
      init() {
        return text2 ?? "";
      },
      apply(tr, previousVal) {
        const placeholder = tr.getMeta("UPDATE_PLACEHOLDER") ?? previousVal;
        return placeholder;
      }
    },
    props: {
      decorations(state2) {
        const {
          doc: doc4
        } = state2;
        const {
          textContent,
          childCount
        } = doc4;
        const placeholder = this.getState(state2);
        if (!placeholder || childCount > 1) {
          return DecorationSet.empty;
        }
        const decorations = [];
        const decorate = (node, pos) => {
          if (node.type.isBlock && node.childCount === 0 && textContent.length === 0) {
            const from2 = pos;
            const to = pos + node.nodeSize;
            const placeholderNode = Decoration.node(from2, to, {
              "class": PLACEHOLDER_CLASSNAME,
              "data-placeholder": placeholder,
              "data-align": node.attrs["align"] ?? null
            });
            decorations.push(placeholderNode);
          }
          return false;
        };
        doc4.descendants(decorate);
        return DecorationSet.create(doc4, decorations);
      }
    }
  });
};
var attributesPlugin = (attributes = {}) => {
  return new Plugin({
    key: new PluginKey("attributes"),
    props: {
      attributes
    }
  });
};
var focusPlugin = (cb) => {
  return new Plugin({
    key: new PluginKey("focus"),
    props: {
      handleDOMEvents: {
        focus: () => {
          cb();
          return false;
        }
      }
    }
  });
};
var blurPlugin = (cb) => {
  return new Plugin({
    key: new PluginKey("blur"),
    props: {
      handleDOMEvents: {
        blur: () => {
          cb();
          return false;
        }
      }
    }
  });
};
var ImageViewComponent = class _ImageViewComponent {
  src;
  alt = "";
  title = "";
  outerWidth = "";
  selected = false;
  view;
  imageResize = new EventEmitter();
  imgEl;
  startResizing(e, direction) {
    e.preventDefault();
    this.resizeImage(e, direction);
  }
  resizeImage(evt, direction) {
    const startX = evt.pageX;
    const startWidth = this.imgEl.nativeElement.clientWidth;
    const isLeftResize = direction === "left";
    const {
      width
    } = window.getComputedStyle(this.view.dom);
    const editorWidth = parseInt(width, 10);
    const onMouseMove = (e) => {
      const currentX = e.pageX;
      const diffInPx = currentX - startX;
      const computedWidth = isLeftResize ? startWidth - diffInPx : startWidth + diffInPx;
      if (computedWidth > editorWidth || computedWidth < 20) {
        return;
      }
      this.outerWidth = `${computedWidth}px`;
    };
    const onMouseUp = (e) => {
      e.preventDefault();
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
      this.imageResize.emit();
    };
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  }
  static \u0275fac = \u0275\u0275ngDeclareFactory({
    minVersion: "12.0.0",
    version: "18.2.2",
    ngImport: core_exports,
    type: _ImageViewComponent,
    deps: [],
    target: FactoryTarget.Component
  });
  static \u0275cmp = \u0275\u0275ngDeclareComponent({
    minVersion: "14.0.0",
    version: "18.2.2",
    type: _ImageViewComponent,
    selector: "ngx-image-view",
    inputs: {
      src: "src",
      alt: "alt",
      title: "title",
      outerWidth: "outerWidth",
      selected: "selected",
      view: "view"
    },
    outputs: {
      imageResize: "imageResize"
    },
    viewQueries: [{
      propertyName: "imgEl",
      first: true,
      predicate: ["imgEl"],
      descendants: true,
      static: true
    }],
    ngImport: core_exports,
    template: `<span class="NgxEditor__ImageWrapper" [ngClass]="{ 'NgxEditor__Resizer--Active': selected }" [style.width]="outerWidth">
  <span class="NgxEditor__ResizeHandle" *ngIf="selected">
    <span class="NgxEditor__ResizeHandle--TL" (mousedown)="startResizing($event, 'left')"></span>
    <span class="NgxEditor__ResizeHandle--TR" (mousedown)="startResizing($event, 'right')"></span>
    <span class="NgxEditor__ResizeHandle--BL" (mousedown)="startResizing($event, 'left')"></span>
    <span class="NgxEditor__ResizeHandle--BR" (mousedown)="startResizing($event, 'right')"></span>
  </span>
  <img [src]="src" [alt]="alt" [title]="title" #imgEl />
</span>
`,
    styles: ["*,*:before,*:after{box-sizing:border-box}img{width:100%;height:100%}.NgxEditor__ImageWrapper{position:relative;display:inline-block;line-height:0;padding:2px}.NgxEditor__ImageWrapper.NgxEditor__Resizer--Active{padding:1px;border:1px solid #1a73e8}.NgxEditor__ImageWrapper .NgxEditor__ResizeHandle{position:absolute;height:100%;width:100%}.NgxEditor__ImageWrapper .NgxEditor__ResizeHandle .NgxEditor__ResizeHandle--TL,.NgxEditor__ImageWrapper .NgxEditor__ResizeHandle .NgxEditor__ResizeHandle--BL,.NgxEditor__ImageWrapper .NgxEditor__ResizeHandle .NgxEditor__ResizeHandle--TR,.NgxEditor__ImageWrapper .NgxEditor__ResizeHandle .NgxEditor__ResizeHandle--BR{position:absolute;width:7px;height:7px;background-color:#1a73e8;border:1px solid white}.NgxEditor__ImageWrapper .NgxEditor__ResizeHandle .NgxEditor__ResizeHandle--BR{bottom:-5px;right:-5px;cursor:se-resize}.NgxEditor__ImageWrapper .NgxEditor__ResizeHandle .NgxEditor__ResizeHandle--TR{top:-5px;right:-5px;cursor:ne-resize}.NgxEditor__ImageWrapper .NgxEditor__ResizeHandle .NgxEditor__ResizeHandle--TL{top:-5px;left:-5px;cursor:nw-resize}.NgxEditor__ImageWrapper .NgxEditor__ResizeHandle .NgxEditor__ResizeHandle--BL{bottom:-5px;left:-5px;cursor:sw-resize}\n"],
    dependencies: [{
      kind: "directive",
      type: NgClass,
      selector: "[ngClass]",
      inputs: ["class", "ngClass"]
    }, {
      kind: "directive",
      type: NgIf,
      selector: "[ngIf]",
      inputs: ["ngIf", "ngIfThen", "ngIfElse"]
    }]
  });
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.2",
  ngImport: core_exports,
  type: ImageViewComponent,
  decorators: [{
    type: Component,
    args: [{
      selector: "ngx-image-view",
      template: `<span class="NgxEditor__ImageWrapper" [ngClass]="{ 'NgxEditor__Resizer--Active': selected }" [style.width]="outerWidth">
  <span class="NgxEditor__ResizeHandle" *ngIf="selected">
    <span class="NgxEditor__ResizeHandle--TL" (mousedown)="startResizing($event, 'left')"></span>
    <span class="NgxEditor__ResizeHandle--TR" (mousedown)="startResizing($event, 'right')"></span>
    <span class="NgxEditor__ResizeHandle--BL" (mousedown)="startResizing($event, 'left')"></span>
    <span class="NgxEditor__ResizeHandle--BR" (mousedown)="startResizing($event, 'right')"></span>
  </span>
  <img [src]="src" [alt]="alt" [title]="title" #imgEl />
</span>
`,
      styles: ["*,*:before,*:after{box-sizing:border-box}img{width:100%;height:100%}.NgxEditor__ImageWrapper{position:relative;display:inline-block;line-height:0;padding:2px}.NgxEditor__ImageWrapper.NgxEditor__Resizer--Active{padding:1px;border:1px solid #1a73e8}.NgxEditor__ImageWrapper .NgxEditor__ResizeHandle{position:absolute;height:100%;width:100%}.NgxEditor__ImageWrapper .NgxEditor__ResizeHandle .NgxEditor__ResizeHandle--TL,.NgxEditor__ImageWrapper .NgxEditor__ResizeHandle .NgxEditor__ResizeHandle--BL,.NgxEditor__ImageWrapper .NgxEditor__ResizeHandle .NgxEditor__ResizeHandle--TR,.NgxEditor__ImageWrapper .NgxEditor__ResizeHandle .NgxEditor__ResizeHandle--BR{position:absolute;width:7px;height:7px;background-color:#1a73e8;border:1px solid white}.NgxEditor__ImageWrapper .NgxEditor__ResizeHandle .NgxEditor__ResizeHandle--BR{bottom:-5px;right:-5px;cursor:se-resize}.NgxEditor__ImageWrapper .NgxEditor__ResizeHandle .NgxEditor__ResizeHandle--TR{top:-5px;right:-5px;cursor:ne-resize}.NgxEditor__ImageWrapper .NgxEditor__ResizeHandle .NgxEditor__ResizeHandle--TL{top:-5px;left:-5px;cursor:nw-resize}.NgxEditor__ImageWrapper .NgxEditor__ResizeHandle .NgxEditor__ResizeHandle--BL{bottom:-5px;left:-5px;cursor:sw-resize}\n"]
    }]
  }],
  propDecorators: {
    src: [{
      type: Input
    }],
    alt: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    outerWidth: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    view: [{
      type: Input
    }],
    imageResize: [{
      type: Output
    }],
    imgEl: [{
      type: ViewChild,
      args: ["imgEl", {
        static: true
      }]
    }]
  }
});
var ImageRezieView = class {
  dom;
  view;
  getPos;
  applicationRef;
  imageComponentRef;
  resizeSubscription;
  node;
  updating = false;
  constructor(node, view, getPos, injector) {
    this.applicationRef = injector.get(ApplicationRef);
    this.imageComponentRef = createComponent(ImageViewComponent, {
      environmentInjector: this.applicationRef.injector
    });
    this.applicationRef.attachView(this.imageComponentRef.hostView);
    this.setNodeAttributes(node.attrs);
    this.imageComponentRef.instance.view = view;
    this.dom = this.imageComponentRef.location.nativeElement;
    this.view = view;
    this.node = node;
    this.getPos = getPos;
    this.resizeSubscription = this.imageComponentRef.instance.imageResize.subscribe(() => {
      this.handleResize();
    });
  }
  computeChanges(prevAttrs, newAttrs) {
    return JSON.stringify(prevAttrs) === JSON.stringify(newAttrs);
  }
  setNodeAttributes(attrs) {
    this.imageComponentRef.instance.src = attrs["src"];
    this.imageComponentRef.instance.alt = attrs["alt"];
    this.imageComponentRef.instance.title = attrs["title"];
    this.imageComponentRef.instance.outerWidth = attrs["width"];
  }
  handleResize = () => {
    if (this.updating) {
      return;
    }
    const {
      state: state2,
      dispatch
    } = this.view;
    const {
      tr
    } = state2;
    const transaction = tr.setNodeMarkup(this.getPos(), void 0, __spreadProps(__spreadValues({}, this.node.attrs), {
      width: this.imageComponentRef.instance.outerWidth
    }));
    const resolvedPos = transaction.doc.resolve(this.getPos());
    const newSelection = new NodeSelection(resolvedPos);
    transaction.setSelection(newSelection);
    dispatch(transaction);
  };
  update(node) {
    if (node.type !== this.node.type) {
      return false;
    }
    this.node = node;
    const changed = this.computeChanges(this.node.attrs, node.attrs);
    if (changed) {
      this.updating = true;
      this.setNodeAttributes(node.attrs);
      this.updating = false;
    }
    return true;
  }
  ignoreMutation() {
    return true;
  }
  selectNode() {
    this.imageComponentRef.instance.selected = true;
  }
  deselectNode() {
    this.imageComponentRef.instance.selected = false;
  }
  destroy() {
    this.resizeSubscription.unsubscribe();
    this.applicationRef.detachView(this.imageComponentRef.hostView);
  }
};
var imageResizePlugin = (injector) => {
  return new Plugin({
    key: new PluginKey("image-resize"),
    props: {
      nodeViews: {
        image: (node, view, getPos) => {
          return new ImageRezieView(node, view, getPos, injector);
        }
      }
    }
  });
};
var HTTP_LINK_REGEX = /(?:https?:\/\/)?[\w-]+(?:\.[\w-]+)+\.?(?:\d+)?(?:\/\S*)?$/;
var linkify = (fragment) => {
  const linkified = [];
  fragment.forEach((child) => {
    if (child.isText) {
      const text2 = child.text;
      let pos = 0;
      const match = HTTP_LINK_REGEX.exec(text2);
      if (match) {
        const start = match.index;
        const end = start + match[0].length;
        const {
          link: link3
        } = child.type.schema.marks;
        if (start > 0) {
          linkified.push(child.cut(pos, start));
        }
        const urlText = text2.slice(start, end);
        linkified.push(child.cut(start, end).mark(link3.create({
          href: urlText
        }).addToSet(child.marks)));
        pos = end;
      }
      if (pos < text2.length) {
        linkified.push(child.cut(pos));
      }
    } else {
      linkified.push(child.copy(linkify(child.content)));
    }
  });
  return Fragment.fromArray(linkified);
};
var linkifyPlugin = () => {
  return new Plugin({
    key: new PluginKey("linkify"),
    props: {
      transformPasted: (slice2) => {
        return new Slice(linkify(slice2.content), slice2.openStart, slice2.openEnd);
      }
    }
  });
};
var isString = (value) => {
  return typeof value === "string";
};
var getTrustedTypes = () => {
  return window.trustedTypes;
};
var isTrustedHtml = (value) => {
  return getTrustedTypes()?.isHTML(value) ?? false;
};
var isHtml = (value) => {
  return isString(value) || isTrustedHtml(value);
};
var emptyDoc = {
  type: "doc",
  content: [{
    type: "paragraph"
  }]
};
var toHTML = (json, inputSchema) => {
  const schema$1 = inputSchema ?? schema;
  const contentNode = schema$1.nodeFromJSON(json);
  const html = DOMSerializer.fromSchema(schema$1).serializeFragment(contentNode.content);
  const div = document.createElement("div");
  div.appendChild(html);
  return div.innerHTML;
};
var toDoc = (html, inputSchema, options) => {
  const schema$1 = inputSchema ?? schema;
  const el = document.createElement("div");
  el.innerHTML = html;
  return DOMParser.fromSchema(schema$1).parse(el, options).toJSON();
};
var parseContent = (value, schema2, options) => {
  if (!value) {
    return schema2.nodeFromJSON(emptyDoc);
  }
  if (!isHtml(value)) {
    return schema2.nodeFromJSON(value);
  }
  const docJson = toDoc(value, schema2, options);
  return schema2.nodeFromJSON(docJson);
};
var NgxEditorComponent = class _NgxEditorComponent {
  renderer;
  injector;
  elementRef;
  constructor(renderer, injector, elementRef) {
    this.renderer = renderer;
    this.injector = injector;
    this.elementRef = elementRef;
  }
  ngxEditor;
  editor;
  outputFormat;
  placeholder = "Type Here...";
  focusOut = new EventEmitter();
  focusIn = new EventEmitter();
  unsubscribe = new Subject();
  onChange = () => {
  };
  onTouched = () => {
  };
  writeValue(value) {
    if (!this.outputFormat && isHtml(value)) {
      this.outputFormat = "html";
    }
    this.editor.setContent(value ?? emptyDoc);
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.setMeta("UPDATE_EDITABLE", !isDisabled);
    this.renderer.setProperty(this.elementRef.nativeElement, "disabled", isDisabled);
  }
  handleChange(jsonDoc) {
    if (this.outputFormat === "html") {
      const html = toHTML(jsonDoc, this.editor.schema);
      this.onChange(html);
      return;
    }
    this.onChange(jsonDoc);
  }
  setMeta(key, value) {
    const {
      dispatch,
      state: {
        tr
      }
    } = this.editor.view;
    dispatch(tr.setMeta(key, value));
  }
  setPlaceholder(placeholder) {
    this.setMeta("UPDATE_PLACEHOLDER", placeholder);
  }
  registerPlugins() {
    this.editor.registerPlugin(editablePlugin());
    this.editor.registerPlugin(placeholderPlugin(this.placeholder));
    this.editor.registerPlugin(attributesPlugin({
      class: "NgxEditor__Content"
    }));
    this.editor.registerPlugin(focusPlugin(() => {
      this.focusIn.emit();
    }));
    this.editor.registerPlugin(blurPlugin(() => {
      this.focusOut.emit();
      this.onTouched();
    }));
    if (this.editor.features.resizeImage) {
      this.editor.registerPlugin(imageResizePlugin(this.injector));
    }
    if (this.editor.features.linkOnPaste) {
      this.editor.registerPlugin(linkifyPlugin());
    }
  }
  ngOnInit() {
    if (!this.editor) {
      throw new NgxEditorError("Required editor instance for initializing editor component");
    }
    this.registerPlugins();
    this.renderer.appendChild(this.ngxEditor.nativeElement, this.editor.view.dom);
    this.editor.valueChanges.pipe(takeUntil(this.unsubscribe)).subscribe((jsonDoc) => {
      this.handleChange(jsonDoc);
    });
  }
  ngOnChanges(changes) {
    if (changes["placeholder"] && !changes["placeholder"].isFirstChange()) {
      this.setPlaceholder(changes["placeholder"].currentValue);
    }
  }
  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
  static \u0275fac = \u0275\u0275ngDeclareFactory({
    minVersion: "12.0.0",
    version: "18.2.2",
    ngImport: core_exports,
    type: _NgxEditorComponent,
    deps: [{
      token: Renderer2
    }, {
      token: Injector
    }, {
      token: ElementRef
    }],
    target: FactoryTarget.Component
  });
  static \u0275cmp = \u0275\u0275ngDeclareComponent({
    minVersion: "14.0.0",
    version: "18.2.2",
    type: _NgxEditorComponent,
    selector: "ngx-editor",
    inputs: {
      editor: "editor",
      outputFormat: "outputFormat",
      placeholder: "placeholder"
    },
    outputs: {
      focusOut: "focusOut",
      focusIn: "focusIn"
    },
    providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _NgxEditorComponent),
      multi: true
    }],
    viewQueries: [{
      propertyName: "ngxEditor",
      first: true,
      predicate: ["ngxEditor"],
      descendants: true,
      static: true
    }],
    usesOnChanges: true,
    ngImport: core_exports,
    template: '<div class="NgxEditor" #ngxEditor>\n  <ng-content></ng-content>\n</div>\n',
    styles: [':root{--ngx-editor-border-radius: 4px;--ngx-editor-background-color: #fff;--ngx-editor-text-color: #000;--ngx-editor-placeholder-color: #6c757d;--ngx-editor-border-color: rgba(0, 0, 0, .2);--ngx-editor-wrapper-border-color: rgba(0, 0, 0, .2);--ngx-editor-menubar-bg-color: #fff;--ngx-editor-menubar-padding: 3px;--ngx-editor-menubar-height: 30px;--ngx-editor-blockquote-color: #ddd;--ngx-editor-blockquote-border-width: 3px;--ngx-editor-icon-size: 30px;--ngx-editor-popup-bg-color: #fff;--ngx-editor-popup-border-radius: 4px;--ngx-editor-popup-shadow: rgba(60, 64, 67, .15) 0px 2px 6px 2px;--ngx-editor-menu-item-border-radius: 2px;--ngx-editor-menu-item-active-color: #1a73e8;--ngx-editor-menu-item-hover-bg-color: #f1f1f1;--ngx-editor-menu-item-active-bg-color: #e8f0fe;--ngx-editor-seperator-color: #ccc;--ngx-editor-bubble-bg-color: #000;--ngx-editor-bubble-text-color: #fff;--ngx-editor-bubble-item-hover-color: #636262;--ngx-editor-bubble-seperator-color: #fff;--ngx-editor-focus-ring-color: #5e9ed6;--ngx-editor-error-color: red;--ngx-editor-click-pointer: default}.NgxEditor{background:var(--ngx-editor-background-color);color:var(--ngx-editor-text-color);background-clip:padding-box;border-radius:var(--ngx-editor-border-radius);border:1px solid var(--ngx-editor-border-color);position:relative}.NgxEditor--Disabled{opacity:.5!important;pointer-events:none!important}.NgxEditor__Placeholder:before{color:var(--ngx-editor-placeholder-color);opacity:1;-webkit-user-select:none;user-select:none;position:absolute;cursor:text;content:attr(data-placeholder)}.NgxEditor__Placeholder[data-align=right]:before{position:relative}.NgxEditor__Content{padding:8px;white-space:pre-wrap;outline:none;font-variant-ligatures:none;font-feature-settings:"liga" 0}.NgxEditor__Content p{margin:0 0 10px}.NgxEditor__Content blockquote{padding-left:16px;border-left:var(--ngx-editor-blockquote-border-width) solid var(--ngx-editor-blockquote-color);margin-left:0;margin-right:0}.NgxEditor__Content--Disabled{-webkit-user-select:none;user-select:none;pointer-events:none}.NgxEditor__Wrapper{border:1px solid var(--ngx-editor-wrapper-border-color);border-radius:var(--ngx-editor-border-radius)}.NgxEditor__Wrapper .NgxEditor__MenuBar{border-top-left-radius:var(--ngx-editor-border-radius);border-top-right-radius:var(--ngx-editor-border-radius);border-bottom:1px solid var(--ngx-editor-border-color)}.NgxEditor__Wrapper .NgxEditor{border-top-left-radius:0;border-top-right-radius:0;border:none}.NgxEditor__MenuBar{display:flex;flex-wrap:wrap;padding:var(--ngx-editor-menubar-padding);background-color:var(--ngx-editor-menubar-bg-color);gap:.25rem .1rem}.NgxEditor__MenuBar button:not(:disabled),.NgxEditor__MenuBar [role=button]:not(:disabled){cursor:var(--ngx-editor-click-pointer, default)}.NgxEditor__MenuItem{display:flex;align-items:center;justify-content:center;position:relative;flex-shrink:0}.NgxEditor__MenuItem.NgxEditor__MenuItem--IconContainer{display:flex;align-items:center;justify-content:center}.NgxEditor__MenuItem .NgxEditor__MenuItem--Icon{all:unset;appearance:none;height:var(--ngx-editor-icon-size);width:var(--ngx-editor-icon-size);transition:.2s ease-in-out;display:inline-flex;align-items:center;justify-content:center;border-radius:var(--ngx-editor-menu-item-border-radius)}.NgxEditor__MenuItem .NgxEditor__MenuItem--Icon+.NgxEditor__MenuItem--Icon{margin-left:2px}.NgxEditor__MenuItem .NgxEditor__MenuItem--Icon:focus-visible{outline:1px solid var(--ngx-editor-focus-ring-color)}.NgxEditor__MenuItem .NgxEditor__MenuItem--Icon:hover{background-color:var(--ngx-editor-menu-item-hover-bg-color)}.NgxEditor__MenuItem.NgxEditor__MenuItem--Text{padding:0 5px}.NgxEditor__MenuItem.NgxEditor__MenuItem--Active,.NgxEditor__MenuItem .NgxEditor__MenuItem--Active{background-color:var(--ngx-editor-menu-item-active-bg-color);color:var(--ngx-editor-menu-item-active-color)}.NgxEditor__Dropdown{min-width:64px;position:relative;display:flex;align-items:center;flex-shrink:0}.NgxEditor__Dropdown:hover{background-color:var(--ngx-editor-menu-item-hover-bg-color)}.NgxEditor__Dropdown .NgxEditor__Dropdown--Text{all:unset;appearance:none;display:flex;align-items:center;justify-content:center;padding:0 5px;height:100%;width:100%}.NgxEditor__Dropdown .NgxEditor__Dropdown--Text:focus-visible{outline:1px solid var(--ngx-editor-focus-ring-color)}.NgxEditor__Dropdown .NgxEditor__Dropdown--Text:after{display:inline-block;content:"";margin-left:24px;vertical-align:4px;border-top:4px solid;border-right:4px solid transparent;border-bottom:0;border-left:4px solid transparent}.NgxEditor__Dropdown .NgxEditor__Dropdown--DropdownMenu{position:absolute;left:0;box-shadow:var(--ngx-editor-popup-shadow);border-radius:var(--ngx-editor-popup-border-radius);background-color:var(--ngx-editor-popup-bg-color);z-index:10;width:100%;top:calc(var(--ngx-editor-menubar-height) + 2px);display:flex;flex-direction:column}.NgxEditor__Dropdown .NgxEditor__Dropdown--Item{all:unset;appearance:none;padding:8px;white-space:nowrap;color:inherit}.NgxEditor__Dropdown .NgxEditor__Dropdown--Item:focus-visible{outline:1px solid var(--ngx-editor-focus-ring-color)}.NgxEditor__Dropdown .NgxEditor__Dropdown--Item:hover{background-color:var(--ngx-editor-menu-item-hover-bg-color)}.NgxEditor__Dropdown .NgxEditor__Dropdown--Selected,.NgxEditor__Dropdown .NgxEditor__Dropdown--Open{color:var(--ngx-editor-menu-item-active-color);background-color:var(--ngx-editor-menu-item-active-bg-color)}.NgxEditor__Dropdown .NgxEditor__Dropdown--Active{background-color:var(--ngx-editor-menu-item-active-bg-color)}.NgxEditor__Dropdown .NgxEditor__Dropdown--Active:hover{background-color:var(--ngx-editor-menu-item-hover-bg-color)}.NgxEditor__MenuBar--Reverse .NgxEditor__Dropdown--DropdownMenu{top:unset;bottom:calc(var(--ngx-editor-menubar-height) + 2px)}.NgxEditor__MenuBar--Reverse .NgxEditor__Dropdown--Text:after{transform:rotate(180deg)}.NgxEditor__MenuBar--Reverse .NgxEditor__Popup{top:unset;bottom:calc(var(--ngx-editor-menubar-height) + 2px)}.NgxEditor__Popup{position:absolute;top:calc(var(--ngx-editor-menubar-height) + 2px);box-shadow:var(--ngx-editor-popup-shadow);border-radius:var(--ngx-editor-popup-border-radius);background-color:var(--ngx-editor-popup-bg-color);z-index:10;min-width:192px;padding:8px}.NgxEditor__Popup .NgxEditor__Popup--FormGroup{margin-bottom:8px}.NgxEditor__Popup .NgxEditor__Popup--FormGroup label{margin-bottom:3px}.NgxEditor__Popup .NgxEditor__Popup--FormGroup input[type=text],.NgxEditor__Popup .NgxEditor__Popup--FormGroup input[type=url]{padding:2px 4px}.NgxEditor__Popup .NgxEditor__Popup--Col{display:flex;flex-direction:column;position:relative}.NgxEditor__Popup .NgxEditor__Popup--Label{font-size:85%}.NgxEditor__Seperator{border-left:1px solid var(--ngx-editor-seperator-color);margin:0 5px}.NgxEditor__HelpText{font-size:80%}.NgxEditor__HelpText.NgxEditor__HelpText--Error{color:var(--ngx-editor-error-color)}\n'],
    encapsulation: ViewEncapsulation$1.None
  });
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.2",
  ngImport: core_exports,
  type: NgxEditorComponent,
  decorators: [{
    type: Component,
    args: [{
      selector: "ngx-editor",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NgxEditorComponent),
        multi: true
      }],
      encapsulation: ViewEncapsulation$1.None,
      template: '<div class="NgxEditor" #ngxEditor>\n  <ng-content></ng-content>\n</div>\n',
      styles: [':root{--ngx-editor-border-radius: 4px;--ngx-editor-background-color: #fff;--ngx-editor-text-color: #000;--ngx-editor-placeholder-color: #6c757d;--ngx-editor-border-color: rgba(0, 0, 0, .2);--ngx-editor-wrapper-border-color: rgba(0, 0, 0, .2);--ngx-editor-menubar-bg-color: #fff;--ngx-editor-menubar-padding: 3px;--ngx-editor-menubar-height: 30px;--ngx-editor-blockquote-color: #ddd;--ngx-editor-blockquote-border-width: 3px;--ngx-editor-icon-size: 30px;--ngx-editor-popup-bg-color: #fff;--ngx-editor-popup-border-radius: 4px;--ngx-editor-popup-shadow: rgba(60, 64, 67, .15) 0px 2px 6px 2px;--ngx-editor-menu-item-border-radius: 2px;--ngx-editor-menu-item-active-color: #1a73e8;--ngx-editor-menu-item-hover-bg-color: #f1f1f1;--ngx-editor-menu-item-active-bg-color: #e8f0fe;--ngx-editor-seperator-color: #ccc;--ngx-editor-bubble-bg-color: #000;--ngx-editor-bubble-text-color: #fff;--ngx-editor-bubble-item-hover-color: #636262;--ngx-editor-bubble-seperator-color: #fff;--ngx-editor-focus-ring-color: #5e9ed6;--ngx-editor-error-color: red;--ngx-editor-click-pointer: default}.NgxEditor{background:var(--ngx-editor-background-color);color:var(--ngx-editor-text-color);background-clip:padding-box;border-radius:var(--ngx-editor-border-radius);border:1px solid var(--ngx-editor-border-color);position:relative}.NgxEditor--Disabled{opacity:.5!important;pointer-events:none!important}.NgxEditor__Placeholder:before{color:var(--ngx-editor-placeholder-color);opacity:1;-webkit-user-select:none;user-select:none;position:absolute;cursor:text;content:attr(data-placeholder)}.NgxEditor__Placeholder[data-align=right]:before{position:relative}.NgxEditor__Content{padding:8px;white-space:pre-wrap;outline:none;font-variant-ligatures:none;font-feature-settings:"liga" 0}.NgxEditor__Content p{margin:0 0 10px}.NgxEditor__Content blockquote{padding-left:16px;border-left:var(--ngx-editor-blockquote-border-width) solid var(--ngx-editor-blockquote-color);margin-left:0;margin-right:0}.NgxEditor__Content--Disabled{-webkit-user-select:none;user-select:none;pointer-events:none}.NgxEditor__Wrapper{border:1px solid var(--ngx-editor-wrapper-border-color);border-radius:var(--ngx-editor-border-radius)}.NgxEditor__Wrapper .NgxEditor__MenuBar{border-top-left-radius:var(--ngx-editor-border-radius);border-top-right-radius:var(--ngx-editor-border-radius);border-bottom:1px solid var(--ngx-editor-border-color)}.NgxEditor__Wrapper .NgxEditor{border-top-left-radius:0;border-top-right-radius:0;border:none}.NgxEditor__MenuBar{display:flex;flex-wrap:wrap;padding:var(--ngx-editor-menubar-padding);background-color:var(--ngx-editor-menubar-bg-color);gap:.25rem .1rem}.NgxEditor__MenuBar button:not(:disabled),.NgxEditor__MenuBar [role=button]:not(:disabled){cursor:var(--ngx-editor-click-pointer, default)}.NgxEditor__MenuItem{display:flex;align-items:center;justify-content:center;position:relative;flex-shrink:0}.NgxEditor__MenuItem.NgxEditor__MenuItem--IconContainer{display:flex;align-items:center;justify-content:center}.NgxEditor__MenuItem .NgxEditor__MenuItem--Icon{all:unset;appearance:none;height:var(--ngx-editor-icon-size);width:var(--ngx-editor-icon-size);transition:.2s ease-in-out;display:inline-flex;align-items:center;justify-content:center;border-radius:var(--ngx-editor-menu-item-border-radius)}.NgxEditor__MenuItem .NgxEditor__MenuItem--Icon+.NgxEditor__MenuItem--Icon{margin-left:2px}.NgxEditor__MenuItem .NgxEditor__MenuItem--Icon:focus-visible{outline:1px solid var(--ngx-editor-focus-ring-color)}.NgxEditor__MenuItem .NgxEditor__MenuItem--Icon:hover{background-color:var(--ngx-editor-menu-item-hover-bg-color)}.NgxEditor__MenuItem.NgxEditor__MenuItem--Text{padding:0 5px}.NgxEditor__MenuItem.NgxEditor__MenuItem--Active,.NgxEditor__MenuItem .NgxEditor__MenuItem--Active{background-color:var(--ngx-editor-menu-item-active-bg-color);color:var(--ngx-editor-menu-item-active-color)}.NgxEditor__Dropdown{min-width:64px;position:relative;display:flex;align-items:center;flex-shrink:0}.NgxEditor__Dropdown:hover{background-color:var(--ngx-editor-menu-item-hover-bg-color)}.NgxEditor__Dropdown .NgxEditor__Dropdown--Text{all:unset;appearance:none;display:flex;align-items:center;justify-content:center;padding:0 5px;height:100%;width:100%}.NgxEditor__Dropdown .NgxEditor__Dropdown--Text:focus-visible{outline:1px solid var(--ngx-editor-focus-ring-color)}.NgxEditor__Dropdown .NgxEditor__Dropdown--Text:after{display:inline-block;content:"";margin-left:24px;vertical-align:4px;border-top:4px solid;border-right:4px solid transparent;border-bottom:0;border-left:4px solid transparent}.NgxEditor__Dropdown .NgxEditor__Dropdown--DropdownMenu{position:absolute;left:0;box-shadow:var(--ngx-editor-popup-shadow);border-radius:var(--ngx-editor-popup-border-radius);background-color:var(--ngx-editor-popup-bg-color);z-index:10;width:100%;top:calc(var(--ngx-editor-menubar-height) + 2px);display:flex;flex-direction:column}.NgxEditor__Dropdown .NgxEditor__Dropdown--Item{all:unset;appearance:none;padding:8px;white-space:nowrap;color:inherit}.NgxEditor__Dropdown .NgxEditor__Dropdown--Item:focus-visible{outline:1px solid var(--ngx-editor-focus-ring-color)}.NgxEditor__Dropdown .NgxEditor__Dropdown--Item:hover{background-color:var(--ngx-editor-menu-item-hover-bg-color)}.NgxEditor__Dropdown .NgxEditor__Dropdown--Selected,.NgxEditor__Dropdown .NgxEditor__Dropdown--Open{color:var(--ngx-editor-menu-item-active-color);background-color:var(--ngx-editor-menu-item-active-bg-color)}.NgxEditor__Dropdown .NgxEditor__Dropdown--Active{background-color:var(--ngx-editor-menu-item-active-bg-color)}.NgxEditor__Dropdown .NgxEditor__Dropdown--Active:hover{background-color:var(--ngx-editor-menu-item-hover-bg-color)}.NgxEditor__MenuBar--Reverse .NgxEditor__Dropdown--DropdownMenu{top:unset;bottom:calc(var(--ngx-editor-menubar-height) + 2px)}.NgxEditor__MenuBar--Reverse .NgxEditor__Dropdown--Text:after{transform:rotate(180deg)}.NgxEditor__MenuBar--Reverse .NgxEditor__Popup{top:unset;bottom:calc(var(--ngx-editor-menubar-height) + 2px)}.NgxEditor__Popup{position:absolute;top:calc(var(--ngx-editor-menubar-height) + 2px);box-shadow:var(--ngx-editor-popup-shadow);border-radius:var(--ngx-editor-popup-border-radius);background-color:var(--ngx-editor-popup-bg-color);z-index:10;min-width:192px;padding:8px}.NgxEditor__Popup .NgxEditor__Popup--FormGroup{margin-bottom:8px}.NgxEditor__Popup .NgxEditor__Popup--FormGroup label{margin-bottom:3px}.NgxEditor__Popup .NgxEditor__Popup--FormGroup input[type=text],.NgxEditor__Popup .NgxEditor__Popup--FormGroup input[type=url]{padding:2px 4px}.NgxEditor__Popup .NgxEditor__Popup--Col{display:flex;flex-direction:column;position:relative}.NgxEditor__Popup .NgxEditor__Popup--Label{font-size:85%}.NgxEditor__Seperator{border-left:1px solid var(--ngx-editor-seperator-color);margin:0 5px}.NgxEditor__HelpText{font-size:80%}.NgxEditor__HelpText.NgxEditor__HelpText--Error{color:var(--ngx-editor-error-color)}\n']
    }]
  }],
  ctorParameters: () => [{
    type: Renderer2
  }, {
    type: Injector
  }, {
    type: ElementRef
  }],
  propDecorators: {
    ngxEditor: [{
      type: ViewChild,
      args: ["ngxEditor", {
        static: true
      }]
    }],
    editor: [{
      type: Input
    }],
    outputFormat: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    focusOut: [{
      type: Output
    }],
    focusIn: [{
      type: Output
    }]
  }
});
var MenuService = class _MenuService {
  editor;
  customMenuRefChange = new Subject();
  setCustomMenuRef(c) {
    this.customMenuRefChange.next(c);
  }
  static \u0275fac = \u0275\u0275ngDeclareFactory({
    minVersion: "12.0.0",
    version: "18.2.2",
    ngImport: core_exports,
    type: _MenuService,
    deps: [],
    target: FactoryTarget.Injectable
  });
  static \u0275prov = \u0275\u0275ngDeclareInjectable({
    minVersion: "12.0.0",
    version: "18.2.2",
    ngImport: core_exports,
    type: _MenuService,
    providedIn: "root"
  });
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.2",
  ngImport: core_exports,
  type: MenuService,
  decorators: [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }]
});
var Mark2 = class {
  name;
  constructor(name) {
    this.name = name;
  }
  apply() {
    return (state2, dispatch) => {
      const {
        schema: schema2
      } = state2;
      const type = schema2.marks[this.name];
      if (!type) {
        return false;
      }
      return applyMark(type)(state2, dispatch);
    };
  }
  toggle() {
    return (state2, dispatch) => {
      const {
        schema: schema2
      } = state2;
      const type = schema2.marks[this.name];
      if (!type) {
        return false;
      }
      return toggleMark(type)(state2, dispatch);
    };
  }
  isActive(state2) {
    const {
      schema: schema2
    } = state2;
    const type = schema2.marks[this.name];
    if (!type) {
      return false;
    }
    return isMarkActive(state2, type);
  }
  canExecute(state2) {
    return this.toggle()(state2);
  }
};
var Blockqote = class {
  toggle() {
    return (state2, dispatch) => {
      const {
        schema: schema2
      } = state2;
      const type = schema2.nodes["blockquote"];
      if (!type) {
        return false;
      }
      if (this.isActive(state2)) {
        return lift2(state2, dispatch);
      }
      return wrapIn(type)(state2, dispatch);
    };
  }
  isActive(state2) {
    const {
      schema: schema2
    } = state2;
    const type = schema2.nodes["blockquote"];
    if (!type) {
      return false;
    }
    return isNodeActive(state2, type);
  }
  canExecute(state2) {
    return this.toggle()(state2);
  }
};
var HorizontalRule = class {
  insert() {
    return (state2, dispatch) => {
      const {
        schema: schema2,
        tr
      } = state2;
      const type = schema2.nodes["horizontal_rule"];
      if (!type) {
        return false;
      }
      dispatch(tr.replaceSelectionWith(type.create()).scrollIntoView());
      return true;
    };
  }
  canExecute(state2) {
    return canInsert(state2, state2.schema.nodes["horizontal_rule"]);
  }
};
var ListItem = class {
  isBulletList = false;
  constructor(isBulletList = false) {
    this.isBulletList = isBulletList;
  }
  getType(schema2) {
    return this.isBulletList ? schema2.nodes["bullet_list"] : schema2.nodes["ordered_list"];
  }
  toggle() {
    return (state2, dispatch) => {
      const {
        schema: schema2
      } = state2;
      const type = this.getType(schema2);
      if (!type) {
        return false;
      }
      if (this.isActive(state2)) {
        return liftListItem(schema2.nodes["list_item"])(state2, dispatch);
      }
      return wrapInList(type)(state2, dispatch);
    };
  }
  isActive(state2) {
    const {
      schema: schema2
    } = state2;
    const type = this.getType(schema2);
    if (!type) {
      return false;
    }
    return isNodeActive(state2, type);
  }
  canExecute(state2) {
    return this.toggle()(state2);
  }
};
var Heading = class {
  level;
  constructor(level) {
    this.level = level;
  }
  apply() {
    return (state2, dispatch) => {
      const {
        schema: schema2
      } = state2;
      const type = schema2.nodes["heading"];
      if (!type) {
        return false;
      }
      return setBlockType2(type)(state2, dispatch);
    };
  }
  toggle() {
    return (state2, dispatch) => {
      const {
        schema: schema2,
        selection,
        doc: doc4
      } = state2;
      const type = schema2.nodes["heading"];
      if (!type) {
        return false;
      }
      const nodePos = selection.$from.before(1);
      const node = doc4.nodeAt(nodePos);
      const attrs = node?.attrs ?? {};
      if (this.isActive(state2)) {
        return setBlockType2(schema2.nodes["paragraph"], attrs)(state2, dispatch);
      }
      return setBlockType2(type, __spreadProps(__spreadValues({}, attrs), {
        level: this.level
      }))(state2, dispatch);
    };
  }
  isActive(state2) {
    const {
      schema: schema2
    } = state2;
    const nodesInSelection = getSelectionNodes(state2);
    const type = schema2.nodes["heading"];
    if (!type) {
      return false;
    }
    const supportedNodes = [type, schema2.nodes["text"], schema2.nodes["blockquote"]];
    const nodes2 = nodesInSelection.filter((node) => {
      return supportedNodes.includes(node.type);
    });
    const acitveNode = nodes2.find((node) => {
      return node.attrs["level"] === this.level;
    });
    return Boolean(acitveNode);
  }
  canExecute(state2) {
    return this.toggle()(state2);
  }
};
var TextAlign = class {
  align;
  constructor(align) {
    this.align = align;
  }
  toggle() {
    return (state2, dispatch) => {
      const {
        doc: doc4,
        selection,
        tr,
        schema: schema2
      } = state2;
      const {
        from: from2,
        to
      } = selection;
      let applicable = false;
      doc4.nodesBetween(from2, to, (node, pos) => {
        const nodeType = node.type;
        if ([schema2.nodes["paragraph"], schema2.nodes["heading"]].includes(nodeType)) {
          applicable = true;
          const align = node.attrs["align"] === this.align ? null : this.align;
          tr.setNodeMarkup(pos, nodeType, __spreadProps(__spreadValues({}, node.attrs), {
            align
          }));
        }
        return true;
      });
      if (!applicable) {
        return false;
      }
      if (tr.docChanged) {
        dispatch?.(tr);
      }
      return true;
    };
  }
  isActive(state2) {
    const nodes2 = getSelectionNodes(state2);
    const active = nodes2.find((node) => {
      return node.attrs["align"] === this.align;
    });
    return Boolean(active);
  }
  canExecute(state2) {
    return this.toggle()(state2);
  }
};
var defaultOptions = {
  strict: true
};
var Link$1 = class Link {
  update(attrs) {
    return (state2, dispatch) => {
      const {
        schema: schema2,
        selection
      } = state2;
      const type = schema2.marks["link"];
      if (!type) {
        return false;
      }
      if (selection.empty) {
        return false;
      }
      return toggleMark(type, attrs)(state2, dispatch);
    };
  }
  insert(text2, attrs) {
    return (state2, dispatch) => {
      const {
        schema: schema2,
        tr
      } = state2;
      const type = schema2.marks["link"];
      if (!type) {
        return false;
      }
      const linkAttrs = {
        href: attrs.href,
        title: attrs.title ?? text2,
        target: attrs.target ?? "_blank"
      };
      const node = schema2.text(text2, [schema2.marks["link"].create(linkAttrs)]);
      tr.replaceSelectionWith(node, false).scrollIntoView();
      if (tr.docChanged) {
        dispatch?.(tr);
        return true;
      }
      return false;
    };
  }
  isActive(state2, options = defaultOptions) {
    if (options.strict) {
      return true;
    }
    const {
      schema: schema2
    } = state2;
    const type = schema2.marks["link"];
    if (!type) {
      return false;
    }
    return isMarkActive(state2, type);
  }
  remove(state2, dispatch) {
    return removeLink()(state2, dispatch);
  }
  canExecute(state2) {
    const testAttrs = {
      href: ""
    };
    return this.insert("Exec", testAttrs)(state2) || this.update(testAttrs)(state2);
  }
};
var Image$1 = class Image {
  insert(src, attrs) {
    return (state2, dispatch) => {
      const {
        schema: schema2,
        tr,
        selection
      } = state2;
      const type = schema2.nodes["image"];
      if (!type) {
        return false;
      }
      const imageAttrs = __spreadValues({
        width: null,
        src
      }, attrs);
      if (!imageAttrs.width && selection instanceof NodeSelection && selection.node.type === type) {
        imageAttrs.width = selection.node.attrs["width"];
      }
      tr.replaceSelectionWith(type.createAndFill(imageAttrs));
      const resolvedPos = tr.doc.resolve(tr.selection.anchor - tr.selection.$anchor.nodeBefore.nodeSize);
      tr.setSelection(new NodeSelection(resolvedPos)).scrollIntoView();
      if (tr.docChanged) {
        dispatch?.(tr);
        return true;
      }
      return false;
    };
  }
  isActive(state2) {
    const {
      selection
    } = state2;
    if (selection instanceof NodeSelection) {
      return selection.node.type.name === "image";
    }
    return false;
  }
};
var TextColor$1 = class TextColor {
  name;
  attrName;
  constructor(name, attrName = "color") {
    this.name = name;
    this.attrName = attrName;
  }
  apply(attrs) {
    return (state2, dispatch) => {
      const {
        schema: schema2,
        selection,
        doc: doc4
      } = state2;
      const type = schema2.marks[this.name];
      if (!type) {
        return false;
      }
      const {
        from: from2,
        to,
        empty: empty2
      } = selection;
      if (!empty2 && from2 + 1 === to) {
        const node = doc4.nodeAt(from2);
        if (node?.isAtom && !node.isText && node.isLeaf) {
          return false;
        }
      }
      return applyMark(type, attrs)(state2, dispatch);
    };
  }
  isActive(state2) {
    const {
      schema: schema2
    } = state2;
    const type = schema2.marks[this.name];
    if (!type) {
      return false;
    }
    return isMarkActive(state2, type);
  }
  getActiveColors(state2) {
    if (!this.isActive(state2)) {
      return [];
    }
    const {
      schema: schema2
    } = state2;
    const marks2 = getSelectionMarks(state2);
    const colors = marks2.filter((mark) => mark.type === schema2.marks[this.name]).map((mark) => {
      return mark.attrs[this.attrName];
    }).filter(Boolean);
    return colors;
  }
  remove() {
    return (state2, dispatch) => {
      const {
        schema: schema2
      } = state2;
      const type = schema2.marks[this.name];
      if (!type) {
        return false;
      }
      return removeMark2(type)(state2, dispatch);
    };
  }
  canExecute(state2) {
    const attrs = this.name === "text_color" ? {
      color: ""
    } : {
      backgroundColor: ""
    };
    return this.apply(attrs)(state2);
  }
};
var SAFE_MARKS = ["link"];
var FormatClear = class {
  insert() {
    return (state2, dispatch) => {
      const {
        tr
      } = state2;
      const {
        ranges,
        empty: empty2
      } = tr.selection;
      if (empty2) {
        return true;
      }
      Object.entries(state2.schema.marks).forEach(([markType, mark]) => {
        if (SAFE_MARKS.includes(markType)) {
          return;
        }
        ranges.forEach((range) => {
          tr.removeMark(range.$from.pos, range.$to.pos, mark);
        });
      });
      dispatch(tr);
      return true;
    };
  }
  canExecute() {
    return true;
  }
};
var indentNodeTypes = ["paragraph", "heading", "blockquote"];
var minIndent = 0;
var maxIndent = 10;
var udpateIndentLevel = (tr, pos, method) => {
  const node = tr.doc.nodeAt(pos);
  if (!node) {
    return false;
  }
  const nodeIndent = node.attrs["indent"] ?? 0;
  const newIndent = clamp(nodeIndent + (method === "increase" ? 1 : -1), minIndent, maxIndent);
  if (newIndent === nodeIndent || newIndent < minIndent || newIndent > maxIndent) {
    return false;
  }
  const attrs = __spreadProps(__spreadValues({}, node.attrs), {
    indent: newIndent
  });
  tr.setNodeMarkup(pos, node.type, attrs);
  return true;
};
var Indent = class {
  method = "increase";
  constructor(method) {
    this.method = method;
  }
  insert() {
    return (state2, dispatch) => {
      const {
        tr,
        doc: doc4
      } = state2;
      const {
        from: from2,
        to
      } = tr.selection;
      let applicable = false;
      doc4.nodesBetween(from2, to, (node, pos) => {
        const nodeType = node.type;
        if (indentNodeTypes.includes(nodeType.name)) {
          applicable = udpateIndentLevel(tr, pos, this.method);
          return false;
        } else if (node.type.name.includes("list")) {
          return false;
        }
        return true;
      });
      if (!applicable) {
        return false;
      }
      if (tr.docChanged) {
        dispatch?.(tr);
      }
      return true;
    };
  }
  canExecute(state2) {
    return this.insert()(state2);
  }
};
var History = class {
  mode = "undo";
  constructor(mode) {
    this.mode = mode;
  }
  insert() {
    return (state2, dispatch) => {
      if (this.mode === "undo") {
        return undo(state2, dispatch);
      }
      return redo(state2, dispatch);
    };
  }
  canExecute(state2) {
    return this.insert()(state2);
  }
};
var STRONG = new Mark2("strong");
var EM = new Mark2("em");
var CODE = new Mark2("code");
var UNDERLINE = new Mark2("u");
var STRIKE = new Mark2("s");
var BLOCKQUOTE = new Blockqote();
var HORIZONTAL_RULE = new HorizontalRule();
var FORMAT_CLEAR = new FormatClear();
var UL = new ListItem(true);
var OL = new ListItem(false);
var H1 = new Heading(1);
var H2 = new Heading(2);
var H3 = new Heading(3);
var H4 = new Heading(4);
var H5 = new Heading(5);
var H6 = new Heading(6);
var ALIGN_LEFT = new TextAlign("left");
var ALIGN_CENTER = new TextAlign("center");
var ALIGN_RIGHT = new TextAlign("right");
var ALIGN_JUSTIFY = new TextAlign("justify");
var LINK = new Link$1();
var IMAGE = new Image$1();
var TEXT_COLOR = new TextColor$1("text_color", "color");
var TEXT_BACKGROUND_COLOR = new TextColor$1("text_background_color", "backgroundColor");
var INDENT = new Indent("increase");
var OUTDENT = new Indent("decrease");
var SUPERSCRIPT = new Mark2("sup");
var SUBSCRIPT = new Mark2("sub");
var UNDO = new History("undo");
var REDO = new History("redo");
var ToggleCommands = {
  bold: STRONG,
  italic: EM,
  code: CODE,
  underline: UNDERLINE,
  strike: STRIKE,
  blockquote: BLOCKQUOTE,
  bullet_list: UL,
  ordered_list: OL,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  align_left: ALIGN_LEFT,
  align_center: ALIGN_CENTER,
  align_right: ALIGN_RIGHT,
  align_justify: ALIGN_JUSTIFY,
  superscript: SUPERSCRIPT,
  subscript: SUBSCRIPT
};
var InsertCommands = {
  horizontal_rule: HORIZONTAL_RULE,
  format_clear: FORMAT_CLEAR,
  indent: INDENT,
  outdent: OUTDENT,
  undo: UNDO,
  redo: REDO
};
var Link2 = LINK;
var Image2 = IMAGE;
var TextColor2 = TEXT_COLOR;
var TextBackgroundColor = TEXT_BACKGROUND_COLOR;
var defaults = {
  // menu
  bold: "Bold",
  italic: "Italic",
  code: "Code",
  underline: "Underline",
  strike: "Strike",
  blockquote: "Blockquote",
  bullet_list: "Bullet List",
  ordered_list: "Ordered List",
  heading: "Heading",
  h1: "Header 1",
  h2: "Header 2",
  h3: "Header 3",
  h4: "Header 4",
  h5: "Header 5",
  h6: "Header 6",
  align_left: "Left Align",
  align_center: "Center Align",
  align_right: "Right Align",
  align_justify: "Justify",
  text_color: "Text Color",
  background_color: "Background Color",
  horizontal_rule: "Horizontal rule",
  format_clear: "Clear Formatting",
  insertLink: "Insert Link",
  removeLink: "Remove Link",
  insertImage: "Insert Image",
  indent: "Increase Indent",
  outdent: "Decrease Indent",
  superscript: "Superscript",
  subscript: "Subscript",
  undo: "Undo",
  redo: "Redo",
  // pupups, forms, others...
  url: "URL",
  text: "Text",
  openInNewTab: "Open in new tab",
  insert: "Insert",
  altText: "Alt Text",
  title: "Title",
  remove: "Remove",
  enterValidUrl: "Please enter a valid URL"
};
var Locals = class {
  locals = defaults;
  constructor(newLocals = {}) {
    this.locals = __spreadValues(__spreadValues({}, defaults), newLocals);
  }
  get = (key) => {
    const value = this.locals[key];
    if (value) {
      return isObservable(value) ? value : of(value);
    }
    return of("");
  };
};
var bold = `
  <path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z" />
`;
var italic = `
  <path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z" />
`;
var code2 = `
<path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
`;
var underline = `
<path d="M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z"/>
`;
var strike = `
<path d="M6.85,7.08C6.85,4.37,9.45,3,12.24,3c1.64,0,3,0.49,3.9,1.28c0.77,0.65,1.46,1.73,1.46,3.24h-3.01 c0-0.31-0.05-0.59-0.15-0.85c-0.29-0.86-1.2-1.28-2.25-1.28c-1.86,0-2.34,1.02-2.34,1.7c0,0.48,0.25,0.88,0.74,1.21 C10.97,8.55,11.36,8.78,12,9H7.39C7.18,8.66,6.85,8.11,6.85,7.08z M21,12v-2H3v2h9.62c1.15,0.45,1.96,0.75,1.96,1.97 c0,1-0.81,1.67-2.28,1.67c-1.54,0-2.93-0.54-2.93-2.51H6.4c0,0.55,0.08,1.13,0.24,1.58c0.81,2.29,3.29,3.3,5.67,3.3 c2.27,0,5.3-0.89,5.3-4.05c0-0.3-0.01-1.16-0.48-1.94H21V12z"/>
`;
var orderedList3 = `
<path d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z"/>
`;
var bulletList3 = `
<path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"/>
`;
var quote = `
<path d="M0 0h24v24H0z" fill="none"/><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
`;
var link2 = `
<path d="M0 0h24v24H0z" fill="none"/><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
`;
var unlink = `
<path d="M17 7h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1 0 1.43-.98 2.63-2.31 2.98l1.46 1.46C20.88 15.61 22 13.95 22 12c0-2.76-2.24-5-5-5zm-1 4h-2.19l2 2H16zM2 4.27l3.11 3.11C3.29 8.12 2 9.91 2 12c0 2.76 2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1 0-1.59 1.21-2.9 2.76-3.07L8.73 11H8v2h2.73L13 15.27V17h1.73l4.01 4L20 19.74 3.27 3 2 4.27z"/>
`;
var image2 = `
<path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
`;
var alignLeft = `
<path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"/>
`;
var alignCenter = `
<path d="M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z"/>
`;
var alignRight = `
<path d="M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z"/>
`;
var alignJustify = `
<path d="M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z"/>
`;
var textColor2 = `
<path d="M2,20h20v4H2V20z M5.49,17h2.42l1.27-3.58h5.65L16.09,17h2.42L13.25,3h-2.5L5.49,17z M9.91,11.39l2.03-5.79h0.12l2.03,5.79 H9.91z"/>
`;
var colorFill = `
<path d="M16.56,8.94L7.62,0L6.21,1.41l2.38,2.38L3.44,8.94c-0.59,0.59-0.59,1.54,0,2.12l5.5,5.5C9.23,16.85,9.62,17,10,17 s0.77-0.15,1.06-0.44l5.5-5.5C17.15,10.48,17.15,9.53,16.56,8.94z M5.21,10L10,5.21L14.79,10H5.21z M19,11.5c0,0-2,2.17-2,3.5 c0,1.1,0.9,2,2,2s2-0.9,2-2C21,13.67,19,11.5,19,11.5z M2,20h20v4H2V20z"/>
`;
var horizontalRule2 = `
  <g>
    <rect fill="none" fill-rule="evenodd" height="24" width="24"/>
    <rect fill-rule="evenodd" height="2" width="16" x="4" y="11"/>
  </g>
`;
var formatClear = `
<path d="M0 0h24v24H0z" fill="none"/><path d="M3.27 5L2 6.27l6.97 6.97L6.5 19h3l1.57-3.66L16.73 21 18 19.73 3.55 5.27 3.27 5zM6 5v.18L8.82 8h2.4l-.72 1.68 2.1 2.1L14.21 8H20V5H6z"/>
`;
var indent = '<path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 21h18v-2H3v2zM3 8v8l4-4-4-4zm8 9h10v-2H11v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z"/>';
var outdent = '<path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 17h10v-2H11v2zm-8-5l4 4V8l-4 4zm0 9h18v-2H3v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z"/>';
var superscript = '<g><rect fill="none" height="20" width="20"/><path d="M17,6l-1,0v1h2v1l-3,0V6c0-0.55,0.45-1,1-1l1,0l0-1h-2V3l2,0c0.55,0,1,0.45,1,1v1C18,5.55,17.55,6,17,6z M5.63,16h1.9 l2.43-3.87h0.08L12.47,16h1.9l-3.32-5.2l3.1-4.8h-1.91l-2.19,3.56H9.96L7.75,6h-1.9l3.09,4.8L5.63,16z"/></g>';
var subscript = '<g><rect fill="none" height="20" width="20"/><path d="M17,15l-1,0v1h2v1h-3v-2c0-0.55,0.45-1,1-1l1,0l0-1h-2v-1l2,0c0.55,0,1,0.45,1,1v1C18,14.55,17.55,15,17,15z M5.63,14h1.9 l2.43-3.87h0.08L12.47,14h1.9l-3.32-5.2l3.1-4.8h-1.91l-2.19,3.56H9.96L7.75,4h-1.9l3.09,4.8L5.63,14z"/></g>';
var undo2 = '<path d="M0 0h24v24H0V0z" fill="none"/><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"/>';
var redo2 = '<path d="M0 0h24v24H0V0z" fill="none"/><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"/>';
var DEFAULT_ICON_HEIGHT = 20;
var DEFAULT_ICON_WIDTH = 20;
var DEFAULT_ICON_FILL = "currentColor";
var icons = {
  bold,
  italic,
  code: code2,
  underline,
  strike,
  ordered_list: orderedList3,
  bullet_list: bulletList3,
  blockquote: quote,
  link: link2,
  unlink,
  image: image2,
  align_left: alignLeft,
  align_center: alignCenter,
  align_right: alignRight,
  align_justify: alignJustify,
  text_color: textColor2,
  color_fill: colorFill,
  horizontal_rule: horizontalRule2,
  format_clear: formatClear,
  indent,
  outdent,
  superscript,
  subscript,
  undo: undo2,
  redo: redo2,
  path: "<path></path>"
};
var Icon = class {
  static get(name, fill = DEFAULT_ICON_FILL) {
    const fullPath = icons[name];
    if (fullPath && (fullPath.includes("<path") || fullPath.includes("<g"))) {
      return `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill=${fill}
          height=${DEFAULT_ICON_HEIGHT}
          width=${DEFAULT_ICON_WIDTH}
        >
          ${fullPath}
        </svg>
      `;
    }
    return fullPath;
  }
};
var NgxEditorServiceConfig = class _NgxEditorServiceConfig {
  locals = {};
  icons = {};
  static \u0275fac = \u0275\u0275ngDeclareFactory({
    minVersion: "12.0.0",
    version: "18.2.2",
    ngImport: core_exports,
    type: _NgxEditorServiceConfig,
    deps: [],
    target: FactoryTarget.Injectable
  });
  static \u0275prov = \u0275\u0275ngDeclareInjectable({
    minVersion: "12.0.0",
    version: "18.2.2",
    ngImport: core_exports,
    type: _NgxEditorServiceConfig,
    providedIn: "root"
  });
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.2",
  ngImport: core_exports,
  type: NgxEditorServiceConfig,
  decorators: [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }]
});
var NgxEditorService = class _NgxEditorService {
  config;
  constructor(config) {
    this.config = config;
  }
  get locals() {
    return new Locals(this.config.locals);
  }
  getIcon(icon) {
    return this.config.icons[icon] ? this.config.icons[icon] : Icon.get(icon);
  }
  static \u0275fac = \u0275\u0275ngDeclareFactory({
    minVersion: "12.0.0",
    version: "18.2.2",
    ngImport: core_exports,
    type: _NgxEditorService,
    deps: [{
      token: NgxEditorServiceConfig,
      optional: true
    }],
    target: FactoryTarget.Injectable
  });
  static \u0275prov = \u0275\u0275ngDeclareInjectable({
    minVersion: "12.0.0",
    version: "18.2.2",
    ngImport: core_exports,
    type: _NgxEditorService,
    providedIn: "root"
  });
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.2",
  ngImport: core_exports,
  type: NgxEditorService,
  decorators: [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }],
  ctorParameters: () => [{
    type: NgxEditorServiceConfig,
    decorators: [{
      type: Optional
    }]
  }]
});
var provideMyServiceOptions = (config) => {
  return {
    locals: config.locals ?? {},
    icons: config.icons ?? {}
  };
};
var SanitizeHtmlPipe = class _SanitizeHtmlPipe {
  sanitizer;
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  transform(value) {
    if (isTrustedHtml(value)) {
      return value;
    }
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
  static \u0275fac = \u0275\u0275ngDeclareFactory({
    minVersion: "12.0.0",
    version: "18.2.2",
    ngImport: core_exports,
    type: _SanitizeHtmlPipe,
    deps: [{
      token: DomSanitizer
    }],
    target: FactoryTarget.Pipe
  });
  static \u0275pipe = \u0275\u0275ngDeclarePipe({
    minVersion: "14.0.0",
    version: "18.2.2",
    ngImport: core_exports,
    type: _SanitizeHtmlPipe,
    name: "sanitizeHtml"
  });
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.2",
  ngImport: core_exports,
  type: SanitizeHtmlPipe,
  decorators: [{
    type: Pipe,
    args: [{
      name: "sanitizeHtml"
    }]
  }],
  ctorParameters: () => [{
    type: DomSanitizer
  }]
});
var ToggleCommandComponent = class _ToggleCommandComponent {
  ngxeService;
  menuService;
  toolbarItem;
  get name() {
    return this.toolbarItem;
  }
  html;
  editorView;
  isActive = false;
  disabled = false;
  updateSubscription;
  constructor(ngxeService, menuService) {
    this.ngxeService = ngxeService;
    this.menuService = menuService;
  }
  toggle() {
    const {
      state: state2,
      dispatch
    } = this.editorView;
    const command = ToggleCommands[this.name];
    command.toggle()(state2, dispatch);
  }
  onMouseClick(e) {
    e.preventDefault();
    if (e.button !== 0) {
      return;
    }
    this.toggle();
  }
  onKeydown() {
    this.toggle();
  }
  update = (view) => {
    const {
      state: state2
    } = view;
    const command = ToggleCommands[this.name];
    this.isActive = command.isActive(state2);
    this.disabled = !command.canExecute(state2);
  };
  getTitle(name) {
    return this.ngxeService.locals.get(name);
  }
  ngOnInit() {
    this.html = this.ngxeService.getIcon(this.name);
    this.editorView = this.menuService.editor.view;
    this.updateSubscription = this.menuService.editor.update.subscribe((view) => {
      this.update(view);
    });
  }
  ngOnDestroy() {
    this.updateSubscription.unsubscribe();
  }
  static \u0275fac = \u0275\u0275ngDeclareFactory({
    minVersion: "12.0.0",
    version: "18.2.2",
    ngImport: core_exports,
    type: _ToggleCommandComponent,
    deps: [{
      token: NgxEditorService
    }, {
      token: MenuService
    }],
    target: FactoryTarget.Component
  });
  static \u0275cmp = \u0275\u0275ngDeclareComponent({
    minVersion: "14.0.0",
    version: "18.2.2",
    type: _ToggleCommandComponent,
    selector: "ngx-toggle-command",
    inputs: {
      toolbarItem: "toolbarItem"
    },
    ngImport: core_exports,
    template: '<button\n  type="button"\n  class="NgxEditor__MenuItem--Icon"\n  [class.NgxEditor__MenuItem--Active]="isActive"\n  [class.NgxEditor--Disabled]="disabled"\n  [disabled]="disabled"\n  [innerHTML]="html | sanitizeHtml"\n  (mousedown)="onMouseClick($event)"\n  (keydown.enter)="onKeydown()"\n  (keydown.space)="onKeydown()"\n  [title]="getTitle(name) | async"\n  [ariaLabel]="getTitle(name) | async"\n></button>\n',
    styles: [""],
    dependencies: [{
      kind: "pipe",
      type: AsyncPipe,
      name: "async"
    }, {
      kind: "pipe",
      type: SanitizeHtmlPipe,
      name: "sanitizeHtml"
    }]
  });
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.2",
  ngImport: core_exports,
  type: ToggleCommandComponent,
  decorators: [{
    type: Component,
    args: [{
      selector: "ngx-toggle-command",
      template: '<button\n  type="button"\n  class="NgxEditor__MenuItem--Icon"\n  [class.NgxEditor__MenuItem--Active]="isActive"\n  [class.NgxEditor--Disabled]="disabled"\n  [disabled]="disabled"\n  [innerHTML]="html | sanitizeHtml"\n  (mousedown)="onMouseClick($event)"\n  (keydown.enter)="onKeydown()"\n  (keydown.space)="onKeydown()"\n  [title]="getTitle(name) | async"\n  [ariaLabel]="getTitle(name) | async"\n></button>\n'
    }]
  }],
  ctorParameters: () => [{
    type: NgxEditorService
  }, {
    type: MenuService
  }],
  propDecorators: {
    toolbarItem: [{
      type: Input
    }]
  }
});
var InsertCommandComponent = class _InsertCommandComponent {
  ngxeService;
  menuService;
  toolbarItem;
  get name() {
    return this.toolbarItem;
  }
  html;
  editorView;
  disabled = false;
  updateSubscription;
  constructor(ngxeService, menuService) {
    this.ngxeService = ngxeService;
    this.menuService = menuService;
  }
  onMouseClick(e) {
    e.preventDefault();
    if (e.button !== 0) {
      return;
    }
    this.insert();
  }
  onKeydown() {
    this.insert();
  }
  insert() {
    const {
      state: state2,
      dispatch
    } = this.editorView;
    const command = InsertCommands[this.name];
    command.insert()(state2, dispatch);
  }
  update = (view) => {
    const {
      state: state2
    } = view;
    const command = InsertCommands[this.name];
    this.disabled = !command.canExecute(state2);
  };
  getTitle(name) {
    return this.ngxeService.locals.get(name);
  }
  ngOnInit() {
    this.html = this.ngxeService.getIcon(this.name);
    this.editorView = this.menuService.editor.view;
    this.updateSubscription = this.menuService.editor.update.subscribe((view) => {
      this.update(view);
    });
  }
  ngOnDestroy() {
    this.updateSubscription.unsubscribe();
  }
  static \u0275fac = \u0275\u0275ngDeclareFactory({
    minVersion: "12.0.0",
    version: "18.2.2",
    ngImport: core_exports,
    type: _InsertCommandComponent,
    deps: [{
      token: NgxEditorService
    }, {
      token: MenuService
    }],
    target: FactoryTarget.Component
  });
  static \u0275cmp = \u0275\u0275ngDeclareComponent({
    minVersion: "14.0.0",
    version: "18.2.2",
    type: _InsertCommandComponent,
    selector: "ngx-insert-command",
    inputs: {
      toolbarItem: "toolbarItem"
    },
    ngImport: core_exports,
    template: '<button\n  class="NgxEditor__MenuItem--Icon"\n  [disabled]="disabled"\n  [class.NgxEditor--Disabled]="disabled"\n  [innerHTML]="html | sanitizeHtml"\n  (mousedown)="onMouseClick($event)"\n  (keydown.enter)="onKeydown()"\n  (keydown.space)="onKeydown()"\n  [title]="getTitle(name) | async"\n  [ariaLabel]="getTitle(name) | async"\n></button>\n',
    styles: [""],
    dependencies: [{
      kind: "pipe",
      type: AsyncPipe,
      name: "async"
    }, {
      kind: "pipe",
      type: SanitizeHtmlPipe,
      name: "sanitizeHtml"
    }]
  });
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.2",
  ngImport: core_exports,
  type: InsertCommandComponent,
  decorators: [{
    type: Component,
    args: [{
      selector: "ngx-insert-command",
      template: '<button\n  class="NgxEditor__MenuItem--Icon"\n  [disabled]="disabled"\n  [class.NgxEditor--Disabled]="disabled"\n  [innerHTML]="html | sanitizeHtml"\n  (mousedown)="onMouseClick($event)"\n  (keydown.enter)="onKeydown()"\n  (keydown.space)="onKeydown()"\n  [title]="getTitle(name) | async"\n  [ariaLabel]="getTitle(name) | async"\n></button>\n'
    }]
  }],
  ctorParameters: () => [{
    type: NgxEditorService
  }, {
    type: MenuService
  }],
  propDecorators: {
    toolbarItem: [{
      type: Input
    }]
  }
});
var DEFAULT_LINK_OPTIONS = {
  showOpenInNewTab: true
};
var LinkComponent = class _LinkComponent {
  el;
  ngxeService;
  menuService;
  options = DEFAULT_LINK_OPTIONS;
  showPopup = false;
  isActive = false;
  canExecute = true;
  componentId = uniq();
  form;
  editorView;
  updateSubscription;
  constructor(el, ngxeService, menuService) {
    this.el = el;
    this.ngxeService = ngxeService;
    this.menuService = menuService;
  }
  get icon() {
    return this.ngxeService.getIcon(this.isActive ? "unlink" : "link");
  }
  get title() {
    return this.ngxeService.locals.get(this.isActive ? "removeLink" : "insertLink");
  }
  get href() {
    return this.form.get("href");
  }
  get text() {
    return this.form.get("text");
  }
  onDocumentClick(e) {
    if (!this.el.nativeElement.contains(e.target) && this.showPopup) {
      this.hidePopup();
    }
  }
  getId(name) {
    return `${name}-${this.componentId}`;
  }
  getLabel(key) {
    return this.ngxeService.locals.get(key);
  }
  hidePopup() {
    this.showPopup = false;
    this.form.reset({
      href: "",
      text: "",
      openInNewTab: true
    });
    this.text.enable();
  }
  togglePopup() {
    const {
      state: state2,
      dispatch
    } = this.editorView;
    if (this.isActive) {
      Link2.remove(state2, dispatch);
      return;
    }
    this.showPopup = !this.showPopup;
    if (this.showPopup) {
      this.setText();
    }
  }
  onTogglePopupMouseClick(e) {
    if (e.button !== 0) {
      return;
    }
    this.togglePopup();
  }
  onTogglePopupKeydown() {
    this.togglePopup();
  }
  setText = () => {
    const {
      state: {
        selection,
        doc: doc4
      }
    } = this.editorView;
    const {
      empty: empty2,
      from: from2,
      to
    } = selection;
    const selectedText = !empty2 ? doc4.textBetween(from2, to) : "";
    if (selectedText) {
      this.text.patchValue(selectedText);
      this.text.disable();
    }
  };
  update = (view) => {
    const {
      state: state2
    } = view;
    this.isActive = Link2.isActive(state2, {
      strict: false
    });
    this.canExecute = Link2.canExecute(state2);
  };
  insertLink(e) {
    e.preventDefault();
    const {
      text: text2,
      href,
      openInNewTab
    } = this.form.getRawValue();
    const {
      dispatch,
      state: state2
    } = this.editorView;
    const {
      selection
    } = state2;
    let target;
    if (this.options.showOpenInNewTab) {
      target = openInNewTab ? "_blank" : "_self";
    }
    const attrs = {
      title: href,
      href,
      target
    };
    if (selection.empty) {
      Link2.insert(text2, attrs)(state2, dispatch);
      this.editorView.focus();
    } else {
      Link2.update(attrs)(state2, dispatch);
    }
    this.hidePopup();
  }
  ngOnInit() {
    this.editorView = this.menuService.editor.view;
    this.form = new FormGroup({
      href: new FormControl("", [Validators.required, Validators.pattern(this.menuService.editor.linkValidationPattern)]),
      text: new FormControl("", [Validators.required]),
      openInNewTab: new FormControl(true)
    });
    this.updateSubscription = this.menuService.editor.update.subscribe((view) => {
      this.update(view);
    });
  }
  ngOnDestroy() {
    this.updateSubscription.unsubscribe();
  }
  static \u0275fac = \u0275\u0275ngDeclareFactory({
    minVersion: "12.0.0",
    version: "18.2.2",
    ngImport: core_exports,
    type: _LinkComponent,
    deps: [{
      token: ElementRef
    }, {
      token: NgxEditorService
    }, {
      token: MenuService
    }],
    target: FactoryTarget.Component
  });
  static \u0275cmp = \u0275\u0275ngDeclareComponent({
    minVersion: "16.1.0",
    version: "18.2.2",
    type: _LinkComponent,
    selector: "ngx-link",
    inputs: {
      options: ["options", "options", (value) => __spreadValues(__spreadValues({}, DEFAULT_LINK_OPTIONS), value)]
    },
    host: {
      listeners: {
        "document:mousedown": "onDocumentClick($event)"
      }
    },
    ngImport: core_exports,
    template: `<button
  type="button"
  class="NgxEditor__MenuItem--Icon"
  [class.NgxEditor__MenuItem--Active]="isActive || showPopup"
  [class.NgxEditor--Disabled]="!canExecute"
  [disabled]="!canExecute"
  [innerHTML]="icon | sanitizeHtml"
  (mousedown)="onTogglePopupMouseClick($event)"
  (keydown.enter)="onTogglePopupKeydown()"
  (keydown.space)="onTogglePopupKeydown()"
  [title]="title | async"
  [ariaLabel]="title | async"
  aria-haspopup="dialog"
  [ariaExpanded]="showPopup"
></button>

<!-- popup -->
<div *ngIf="showPopup" class="NgxEditor__Popup">
  <form class="NgxEditor__Popup--Form" [formGroup]="form" (ngSubmit)="insertLink($event)">
    <div class="NgxEditor__Popup--FormGroup">
      <div class="NgxEditor__Popup--Col">
        <label class="NgxEditor__Popup--Label" [htmlFor]="getId('link-popup-url')">{{ getLabel('url') | async }}</label>
        <input type="url" [id]="getId('link-popup-url')" formControlName="href" autocomplete="off" />
        <div *ngIf="href.touched && href.invalid" class="NgxEditor__HelpText NgxEditor__HelpText--Error">
          {{ href.errors?.['pattern'] && getLabel('enterValidUrl') | async }}
        </div>
      </div>
    </div>

    <div class="NgxEditor__Popup--FormGroup">
      <div class="NgxEditor__Popup--Col">
        <label class="NgxEditor__Popup--Label" [htmlFor]="getId('link-popup-label')">{{
          getLabel('text') | async
        }}</label>
        <input type="text" [id]="getId('link-popup-label')" formControlName="text" autocomplete="off" />
        <div *ngIf="text.touched && text.invalid" class="NgxEditor__HelpText NgxEditor__HelpText--Error">
          {{ text.errors?.['required'] && 'This is required' }}
        </div>
      </div>
    </div>

    <div class="NgxEditor__Popup--FormGroup" *ngIf="this.options.showOpenInNewTab">
      <div class="NgxEditor__Popup--Col">
        <label>
          <input type="checkbox" formControlName="openInNewTab" />
          {{ getLabel('openInNewTab') | async }}
        </label>
      </div>
    </div>

    <button type="submit" [disabled]="!form.valid">{{ getLabel('insert') | async }}</button>
  </form>
</div>
`,
    styles: [""],
    dependencies: [{
      kind: "directive",
      type: NgIf,
      selector: "[ngIf]",
      inputs: ["ngIf", "ngIfThen", "ngIfElse"]
    }, {
      kind: "directive",
      type: \u0275NgNoValidate,
      selector: "form:not([ngNoForm]):not([ngNativeValidate])"
    }, {
      kind: "directive",
      type: DefaultValueAccessor,
      selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]"
    }, {
      kind: "directive",
      type: CheckboxControlValueAccessor,
      selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]"
    }, {
      kind: "directive",
      type: NgControlStatus,
      selector: "[formControlName],[ngModel],[formControl]"
    }, {
      kind: "directive",
      type: NgControlStatusGroup,
      selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]"
    }, {
      kind: "directive",
      type: FormGroupDirective,
      selector: "[formGroup]",
      inputs: ["formGroup"],
      outputs: ["ngSubmit"],
      exportAs: ["ngForm"]
    }, {
      kind: "directive",
      type: FormControlName,
      selector: "[formControlName]",
      inputs: ["formControlName", "disabled", "ngModel"],
      outputs: ["ngModelChange"]
    }, {
      kind: "pipe",
      type: AsyncPipe,
      name: "async"
    }, {
      kind: "pipe",
      type: SanitizeHtmlPipe,
      name: "sanitizeHtml"
    }]
  });
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.2",
  ngImport: core_exports,
  type: LinkComponent,
  decorators: [{
    type: Component,
    args: [{
      selector: "ngx-link",
      template: `<button
  type="button"
  class="NgxEditor__MenuItem--Icon"
  [class.NgxEditor__MenuItem--Active]="isActive || showPopup"
  [class.NgxEditor--Disabled]="!canExecute"
  [disabled]="!canExecute"
  [innerHTML]="icon | sanitizeHtml"
  (mousedown)="onTogglePopupMouseClick($event)"
  (keydown.enter)="onTogglePopupKeydown()"
  (keydown.space)="onTogglePopupKeydown()"
  [title]="title | async"
  [ariaLabel]="title | async"
  aria-haspopup="dialog"
  [ariaExpanded]="showPopup"
></button>

<!-- popup -->
<div *ngIf="showPopup" class="NgxEditor__Popup">
  <form class="NgxEditor__Popup--Form" [formGroup]="form" (ngSubmit)="insertLink($event)">
    <div class="NgxEditor__Popup--FormGroup">
      <div class="NgxEditor__Popup--Col">
        <label class="NgxEditor__Popup--Label" [htmlFor]="getId('link-popup-url')">{{ getLabel('url') | async }}</label>
        <input type="url" [id]="getId('link-popup-url')" formControlName="href" autocomplete="off" />
        <div *ngIf="href.touched && href.invalid" class="NgxEditor__HelpText NgxEditor__HelpText--Error">
          {{ href.errors?.['pattern'] && getLabel('enterValidUrl') | async }}
        </div>
      </div>
    </div>

    <div class="NgxEditor__Popup--FormGroup">
      <div class="NgxEditor__Popup--Col">
        <label class="NgxEditor__Popup--Label" [htmlFor]="getId('link-popup-label')">{{
          getLabel('text') | async
        }}</label>
        <input type="text" [id]="getId('link-popup-label')" formControlName="text" autocomplete="off" />
        <div *ngIf="text.touched && text.invalid" class="NgxEditor__HelpText NgxEditor__HelpText--Error">
          {{ text.errors?.['required'] && 'This is required' }}
        </div>
      </div>
    </div>

    <div class="NgxEditor__Popup--FormGroup" *ngIf="this.options.showOpenInNewTab">
      <div class="NgxEditor__Popup--Col">
        <label>
          <input type="checkbox" formControlName="openInNewTab" />
          {{ getLabel('openInNewTab') | async }}
        </label>
      </div>
    </div>

    <button type="submit" [disabled]="!form.valid">{{ getLabel('insert') | async }}</button>
  </form>
</div>
`
    }]
  }],
  ctorParameters: () => [{
    type: ElementRef
  }, {
    type: NgxEditorService
  }, {
    type: MenuService
  }],
  propDecorators: {
    options: [{
      type: Input,
      args: [{
        transform: (value) => __spreadValues(__spreadValues({}, DEFAULT_LINK_OPTIONS), value)
      }]
    }],
    onDocumentClick: [{
      type: HostListener,
      args: ["document:mousedown", ["$event"]]
    }]
  }
});
var DropdownComponent = class _DropdownComponent {
  ngxeService;
  menuService;
  el;
  editorView;
  updateSubscription;
  group;
  items;
  isDropdownOpen = false;
  disabledItems = [];
  activeItem;
  constructor(ngxeService, menuService, el) {
    this.ngxeService = ngxeService;
    this.menuService = menuService;
    this.el = el;
  }
  get isSelected() {
    return Boolean(this.activeItem || this.isDropdownOpen);
  }
  get isDropdownDisabled() {
    return this.disabledItems.length === this.items.length;
  }
  onDocumentClick(target) {
    if (!this.el.nativeElement.contains(target) && this.isDropdownOpen) {
      this.isDropdownOpen = false;
    }
  }
  getName(key) {
    return this.ngxeService.locals.get(key);
  }
  getIsDropdownActive(item) {
    return this.activeItem === item;
  }
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  onToggleDropdownMouseClick(e) {
    e.preventDefault();
    if (e.button !== 0) {
      return;
    }
    this.toggleDropdown();
  }
  onToggleDropdownKeydown() {
    this.toggleDropdown();
  }
  trackByIndex(index) {
    return index;
  }
  selectItem(item) {
    const command = ToggleCommands[item];
    const {
      state: state2,
      dispatch
    } = this.editorView;
    command.toggle()(state2, dispatch);
    this.isDropdownOpen = false;
  }
  onDropdownItemMouseClick(e, item) {
    e.preventDefault();
    if (e.button !== 0) {
      return;
    }
    this.selectItem(item);
  }
  onDropdownItemKeydown(event, item) {
    const e = event;
    e.preventDefault();
    this.selectItem(item);
  }
  update = (view) => {
    const {
      state: state2
    } = view;
    this.disabledItems = [];
    const activeItems = [];
    this.items.forEach((item) => {
      const command = ToggleCommands[item];
      const isActive = command.isActive(state2);
      if (isActive) {
        activeItems.push(item);
      }
      if (!command.canExecute(state2)) {
        this.disabledItems.push(item);
      }
    });
    if (activeItems.length === 1) {
      [this.activeItem] = activeItems;
    } else {
      this.activeItem = null;
    }
  };
  ngOnInit() {
    this.editorView = this.menuService.editor.view;
    this.updateSubscription = this.menuService.editor.update.subscribe((view) => {
      this.update(view);
    });
  }
  ngOnDestroy() {
    this.updateSubscription.unsubscribe();
  }
  static \u0275fac = \u0275\u0275ngDeclareFactory({
    minVersion: "12.0.0",
    version: "18.2.2",
    ngImport: core_exports,
    type: _DropdownComponent,
    deps: [{
      token: NgxEditorService
    }, {
      token: MenuService
    }, {
      token: ElementRef
    }],
    target: FactoryTarget.Component
  });
  static \u0275cmp = \u0275\u0275ngDeclareComponent({
    minVersion: "14.0.0",
    version: "18.2.2",
    type: _DropdownComponent,
    selector: "ngx-dropdown",
    inputs: {
      group: "group",
      items: "items"
    },
    host: {
      listeners: {
        "document:mousedown": "onDocumentClick($event.target)"
      }
    },
    ngImport: core_exports,
    template: `<button
  type="button"
  class="NgxEditor__Dropdown--Text"
  [class.NgxEditor__Dropdown--Selected]="isSelected"
  [disabled]="isDropdownDisabled"
  [class.NgxEditor--Disabled]="isDropdownDisabled"
  (mousedown)="onToggleDropdownMouseClick($event)"
  (keydown.enter)="onToggleDropdownKeydown()"
  (keydown.space)="onToggleDropdownKeydown()"
  [ariaLabel]="getName(activeItem || group) | async"
  aria-haspopup="listbox"
  [ariaExpanded]="isDropdownOpen"
>
  {{ getName(activeItem || group) | async }}
</button>

<div class="NgxEditor__Dropdown--DropdownMenu" *ngIf="isDropdownOpen" role="listbox">
  <button
    type="button"
    class="NgxEditor__Dropdown--Item"
    *ngFor="let item of items; trackBy: trackByIndex"
    (mousedown)="onDropdownItemMouseClick($event, item)"
    (keydown.enter)="onDropdownItemKeydown($event, item)"
    (keydown.space)="onDropdownItemKeydown($event, item)"
    [ngClass]="{
      'NgxEditor__Dropdown--Active': item === activeItem,
      'NgxEditor--Disabled': disabledItems.includes(item)
    }"
    [ariaLabel]="getName(item) | async"
    role="option"
    [attr.aria-selected]="item === activeItem"
  >
    {{ getName(item) | async }}
  </button>
</div>
`,
    styles: [""],
    dependencies: [{
      kind: "directive",
      type: NgClass,
      selector: "[ngClass]",
      inputs: ["class", "ngClass"]
    }, {
      kind: "directive",
      type: NgForOf,
      selector: "[ngFor][ngForOf]",
      inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"]
    }, {
      kind: "directive",
      type: NgIf,
      selector: "[ngIf]",
      inputs: ["ngIf", "ngIfThen", "ngIfElse"]
    }, {
      kind: "pipe",
      type: AsyncPipe,
      name: "async"
    }]
  });
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.2",
  ngImport: core_exports,
  type: DropdownComponent,
  decorators: [{
    type: Component,
    args: [{
      selector: "ngx-dropdown",
      template: `<button
  type="button"
  class="NgxEditor__Dropdown--Text"
  [class.NgxEditor__Dropdown--Selected]="isSelected"
  [disabled]="isDropdownDisabled"
  [class.NgxEditor--Disabled]="isDropdownDisabled"
  (mousedown)="onToggleDropdownMouseClick($event)"
  (keydown.enter)="onToggleDropdownKeydown()"
  (keydown.space)="onToggleDropdownKeydown()"
  [ariaLabel]="getName(activeItem || group) | async"
  aria-haspopup="listbox"
  [ariaExpanded]="isDropdownOpen"
>
  {{ getName(activeItem || group) | async }}
</button>

<div class="NgxEditor__Dropdown--DropdownMenu" *ngIf="isDropdownOpen" role="listbox">
  <button
    type="button"
    class="NgxEditor__Dropdown--Item"
    *ngFor="let item of items; trackBy: trackByIndex"
    (mousedown)="onDropdownItemMouseClick($event, item)"
    (keydown.enter)="onDropdownItemKeydown($event, item)"
    (keydown.space)="onDropdownItemKeydown($event, item)"
    [ngClass]="{
      'NgxEditor__Dropdown--Active': item === activeItem,
      'NgxEditor--Disabled': disabledItems.includes(item)
    }"
    [ariaLabel]="getName(item) | async"
    role="option"
    [attr.aria-selected]="item === activeItem"
  >
    {{ getName(item) | async }}
  </button>
</div>
`
    }]
  }],
  ctorParameters: () => [{
    type: NgxEditorService
  }, {
    type: MenuService
  }, {
    type: ElementRef
  }],
  propDecorators: {
    group: [{
      type: Input
    }],
    items: [{
      type: Input
    }],
    onDocumentClick: [{
      type: HostListener,
      args: ["document:mousedown", ["$event.target"]]
    }]
  }
});
var ImageComponent = class _ImageComponent {
  el;
  ngxeService;
  menuService;
  showPopup = false;
  isActive = false;
  componentId = uniq();
  updateSubscription;
  form = new FormGroup({
    src: new FormControl("", [Validators.required, Validators.pattern("(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/??([^#\n\r]*)?#?([^\n\r]*)")]),
    alt: new FormControl(""),
    title: new FormControl("")
  });
  editorView;
  constructor(el, ngxeService, menuService) {
    this.el = el;
    this.ngxeService = ngxeService;
    this.menuService = menuService;
  }
  get icon() {
    return this.ngxeService.getIcon("image");
  }
  get src() {
    return this.form.get("src");
  }
  onDocumentClick(e) {
    if (!this.el.nativeElement.contains(e.target) && this.showPopup) {
      this.hideForm();
    }
  }
  getId(name) {
    return `${name}-${this.componentId}`;
  }
  getLabel(key) {
    return this.ngxeService.locals.get(key);
  }
  hideForm() {
    this.showPopup = false;
    this.form.reset({
      src: "",
      alt: "",
      title: ""
    });
  }
  togglePopup() {
    this.showPopup = !this.showPopup;
    if (this.showPopup) {
      this.fillForm();
    }
  }
  onTogglePopupMouseClick(e) {
    if (e.button !== 0) {
      return;
    }
    this.togglePopup();
  }
  onTogglePopupKeydown() {
    this.togglePopup();
  }
  fillForm() {
    const {
      state: state2
    } = this.editorView;
    const {
      selection
    } = state2;
    if (selection instanceof NodeSelection && this.isActive) {
      const {
        src,
        alt = "",
        title = ""
      } = selection.node.attrs;
      this.form.setValue({
        src,
        alt,
        title
      });
    }
  }
  update = (view) => {
    const {
      state: state2
    } = view;
    this.isActive = Image2.isActive(state2);
  };
  insertLink(e) {
    e.preventDefault();
    const {
      src,
      alt,
      title
    } = this.form.getRawValue();
    const {
      dispatch,
      state: state2
    } = this.editorView;
    const attrs = {
      alt,
      title
    };
    Image2.insert(src, attrs)(state2, dispatch);
    this.editorView.focus();
    this.hideForm();
  }
  ngOnInit() {
    this.editorView = this.menuService.editor.view;
    this.updateSubscription = this.menuService.editor.update.subscribe((view) => {
      this.update(view);
    });
  }
  ngOnDestroy() {
    this.updateSubscription.unsubscribe();
  }
  static \u0275fac = \u0275\u0275ngDeclareFactory({
    minVersion: "12.0.0",
    version: "18.2.2",
    ngImport: core_exports,
    type: _ImageComponent,
    deps: [{
      token: ElementRef
    }, {
      token: NgxEditorService
    }, {
      token: MenuService
    }],
    target: FactoryTarget.Component
  });
  static \u0275cmp = \u0275\u0275ngDeclareComponent({
    minVersion: "14.0.0",
    version: "18.2.2",
    type: _ImageComponent,
    selector: "ngx-image",
    host: {
      listeners: {
        "document:mousedown": "onDocumentClick($event)"
      }
    },
    ngImport: core_exports,
    template: `<button
  type="button"
  class="NgxEditor__MenuItem--Icon"
  [class.NgxEditor__MenuItem--Active]="isActive || showPopup"
  [innerHTML]="icon | sanitizeHtml"
  (mousedown)="onTogglePopupMouseClick($event)"
  (keydown.enter)="onTogglePopupKeydown()"
  (keydown.space)="onTogglePopupKeydown()"
  [title]="getLabel('insertImage') | async"
  [ariaLabel]="getLabel('insertImage') | async"
  aria-haspopup="dialog"
  [ariaExpanded]="showPopup"
></button>

<!-- popup -->
<div *ngIf="showPopup" class="NgxEditor__Popup">
  <form class="NgxEditor__Popup--Form" [formGroup]="form" (ngSubmit)="insertLink($event)">
    <div class="NgxEditor__Popup--FormGroup">
      <div class="NgxEditor__Popup--Col">
        <label class="NgxEditor__Popup--Label" [htmlFor]="getId('image-popup-url')">{{
          getLabel('url') | async
        }}</label>
        <input type="url" [id]="getId('image-popup-url')" formControlName="src" autocomplete="off" />
        <div *ngIf="src.touched && src.invalid" class="NgxEditor__HelpText NgxEditor__HelpText--Error">
          {{ src.errors?.['pattern'] && getLabel('enterValidUrl') | async }}
        </div>
      </div>
    </div>

    <div class="NgxEditor__Popup--FormGroup">
      <div class="NgxEditor__Popup--Col">
        <label class="NgxEditor__Popup--Label" [htmlFor]="getId('image-popup-label')">{{
          getLabel('altText') | async
        }}</label>
        <input type="text" [id]="getId('image-popup-label')" formControlName="alt" autocomplete="off" />
      </div>
    </div>

    <div class="NgxEditor__Popup--FormGroup">
      <div class="NgxEditor__Popup--Col">
        <label class="NgxEditor__Popup--Label" [htmlFor]="getId('image-popup-title')">{{
          getLabel('title') | async
        }}</label>
        <input type="text" [id]="getId('image-popup-title')" formControlName="title" autocomplete="off" />
      </div>
    </div>

    <button type="submit" [disabled]="!form.valid || !form.dirty">{{ getLabel('insert') | async }}</button>
  </form>
</div>
`,
    styles: [""],
    dependencies: [{
      kind: "directive",
      type: NgIf,
      selector: "[ngIf]",
      inputs: ["ngIf", "ngIfThen", "ngIfElse"]
    }, {
      kind: "directive",
      type: \u0275NgNoValidate,
      selector: "form:not([ngNoForm]):not([ngNativeValidate])"
    }, {
      kind: "directive",
      type: DefaultValueAccessor,
      selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]"
    }, {
      kind: "directive",
      type: NgControlStatus,
      selector: "[formControlName],[ngModel],[formControl]"
    }, {
      kind: "directive",
      type: NgControlStatusGroup,
      selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]"
    }, {
      kind: "directive",
      type: FormGroupDirective,
      selector: "[formGroup]",
      inputs: ["formGroup"],
      outputs: ["ngSubmit"],
      exportAs: ["ngForm"]
    }, {
      kind: "directive",
      type: FormControlName,
      selector: "[formControlName]",
      inputs: ["formControlName", "disabled", "ngModel"],
      outputs: ["ngModelChange"]
    }, {
      kind: "pipe",
      type: AsyncPipe,
      name: "async"
    }, {
      kind: "pipe",
      type: SanitizeHtmlPipe,
      name: "sanitizeHtml"
    }]
  });
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.2",
  ngImport: core_exports,
  type: ImageComponent,
  decorators: [{
    type: Component,
    args: [{
      selector: "ngx-image",
      template: `<button
  type="button"
  class="NgxEditor__MenuItem--Icon"
  [class.NgxEditor__MenuItem--Active]="isActive || showPopup"
  [innerHTML]="icon | sanitizeHtml"
  (mousedown)="onTogglePopupMouseClick($event)"
  (keydown.enter)="onTogglePopupKeydown()"
  (keydown.space)="onTogglePopupKeydown()"
  [title]="getLabel('insertImage') | async"
  [ariaLabel]="getLabel('insertImage') | async"
  aria-haspopup="dialog"
  [ariaExpanded]="showPopup"
></button>

<!-- popup -->
<div *ngIf="showPopup" class="NgxEditor__Popup">
  <form class="NgxEditor__Popup--Form" [formGroup]="form" (ngSubmit)="insertLink($event)">
    <div class="NgxEditor__Popup--FormGroup">
      <div class="NgxEditor__Popup--Col">
        <label class="NgxEditor__Popup--Label" [htmlFor]="getId('image-popup-url')">{{
          getLabel('url') | async
        }}</label>
        <input type="url" [id]="getId('image-popup-url')" formControlName="src" autocomplete="off" />
        <div *ngIf="src.touched && src.invalid" class="NgxEditor__HelpText NgxEditor__HelpText--Error">
          {{ src.errors?.['pattern'] && getLabel('enterValidUrl') | async }}
        </div>
      </div>
    </div>

    <div class="NgxEditor__Popup--FormGroup">
      <div class="NgxEditor__Popup--Col">
        <label class="NgxEditor__Popup--Label" [htmlFor]="getId('image-popup-label')">{{
          getLabel('altText') | async
        }}</label>
        <input type="text" [id]="getId('image-popup-label')" formControlName="alt" autocomplete="off" />
      </div>
    </div>

    <div class="NgxEditor__Popup--FormGroup">
      <div class="NgxEditor__Popup--Col">
        <label class="NgxEditor__Popup--Label" [htmlFor]="getId('image-popup-title')">{{
          getLabel('title') | async
        }}</label>
        <input type="text" [id]="getId('image-popup-title')" formControlName="title" autocomplete="off" />
      </div>
    </div>

    <button type="submit" [disabled]="!form.valid || !form.dirty">{{ getLabel('insert') | async }}</button>
  </form>
</div>
`
    }]
  }],
  ctorParameters: () => [{
    type: ElementRef
  }, {
    type: NgxEditorService
  }, {
    type: MenuService
  }],
  propDecorators: {
    onDocumentClick: [{
      type: HostListener,
      args: ["document:mousedown", ["$event"]]
    }]
  }
});
var ColorPickerComponent = class _ColorPickerComponent {
  el;
  menuService;
  ngxeService;
  presets;
  type;
  constructor(el, menuService, ngxeService) {
    this.el = el;
    this.menuService = menuService;
    this.ngxeService = ngxeService;
  }
  get title() {
    return this.getLabel(this.type === "text_color" ? "text_color" : "background_color");
  }
  get icon() {
    return this.ngxeService.getIcon(this.type === "text_color" ? "text_color" : "color_fill");
  }
  get command() {
    return this.type === "text_color" ? TextColor2 : TextBackgroundColor;
  }
  updateSubscription;
  editorView;
  showPopup = false;
  isActive = false;
  activeColors = [];
  canExecute = true;
  getContrastYIQ(hexcolor) {
    const color = hexcolor.replace("#", "");
    const r = parseInt(color.substring(0, 2), 16);
    const g = parseInt(color.substring(2, 4), 16);
    const b = parseInt(color.substring(4, 6), 16);
    const yiq = (r * 299 + g * 587 + b * 114) / 1e3;
    return yiq >= 128 ? "black" : "white";
  }
  onDocumentClick(e) {
    if (!this.el.nativeElement.contains(e.target) && this.showPopup) {
      this.hidePopup();
    }
  }
  hidePopup() {
    this.showPopup = false;
  }
  togglePopup() {
    this.showPopup = !this.showPopup;
  }
  onTogglePopupMouseClick(e) {
    e.preventDefault();
    if (e.button !== 0) {
      return;
    }
    this.togglePopup();
  }
  onTogglePopupKeydown() {
    this.togglePopup();
  }
  remove() {
    const {
      state: state2,
      dispatch
    } = this.editorView;
    this.command.remove()(state2, dispatch);
    this.hidePopup();
  }
  onRemoveMouseClick(e) {
    e.preventDefault();
    if (e.button !== 0) {
      return;
    }
    e.preventDefault();
    this.remove();
  }
  onRemoveKeydown() {
    this.remove();
  }
  trackByIndex(index) {
    return index;
  }
  selectColor(color) {
    const {
      state: state2,
      dispatch
    } = this.editorView;
    if (this.type === "text_color") {
      const attrs = {
        color
      };
      this.command.apply(attrs)(state2, dispatch);
    } else {
      const attrs = {
        backgroundColor: color
      };
      this.command.apply(attrs)(state2, dispatch);
    }
    if (!this.editorView.hasFocus()) {
      this.editorView.focus();
    }
    this.hidePopup();
  }
  onColorSelectMouseClick(e, color) {
    e.preventDefault();
    if (e.button !== 0) {
      return;
    }
    this.selectColor(color);
  }
  onColorSelectKeydown(color) {
    this.selectColor(color);
  }
  update = (view) => {
    const {
      state: state2
    } = view;
    this.canExecute = this.command.canExecute(state2);
    this.isActive = this.command.isActive(state2);
    this.activeColors = [];
    if (this.isActive) {
      this.activeColors = this.command.getActiveColors(state2);
    }
  };
  getLabel(key) {
    return this.ngxeService.locals.get(key);
  }
  ngOnInit() {
    this.editorView = this.menuService.editor.view;
    this.updateSubscription = this.menuService.editor.update.subscribe((view) => {
      this.update(view);
    });
  }
  ngOnDestroy() {
    this.updateSubscription.unsubscribe();
  }
  static \u0275fac = \u0275\u0275ngDeclareFactory({
    minVersion: "12.0.0",
    version: "18.2.2",
    ngImport: core_exports,
    type: _ColorPickerComponent,
    deps: [{
      token: ElementRef
    }, {
      token: MenuService
    }, {
      token: NgxEditorService
    }],
    target: FactoryTarget.Component
  });
  static \u0275cmp = \u0275\u0275ngDeclareComponent({
    minVersion: "14.0.0",
    version: "18.2.2",
    type: _ColorPickerComponent,
    selector: "ngx-color-picker",
    inputs: {
      presets: "presets",
      type: "type"
    },
    host: {
      listeners: {
        "document:mousedown": "onDocumentClick($event)"
      }
    },
    ngImport: core_exports,
    template: `<button
  type="button"
  class="NgxEditor__MenuItem--Icon"
  [class.NgxEditor__MenuItem--Active]="isActive || showPopup"
  [class.NgxEditor--Disabled]="!canExecute"
  [disabled]="!canExecute"
  [innerHTML]="icon | sanitizeHtml"
  (mousedown)="onTogglePopupMouseClick($event)"
  (keydown.enter)="onTogglePopupKeydown()"
  (keydown.space)="onTogglePopupKeydown()"
  [title]="title | async"
  [ariaLabel]="title | async"
></button>

<div *ngIf="showPopup" class="NgxEditor__Popup">
  <div *ngFor="let colorGroup of presets; trackBy: trackByIndex" class="NgxEditor__ColorContainer">
    <button
      class="NgxEditor__Color"
      *ngFor="let color of colorGroup; trackBy: trackByIndex"
      [ngStyle]="{ backgroundColor: color, color: getContrastYIQ(color) }"
      [title]="color"
      (mousedown)="onColorSelectMouseClick($event, color)"
      (keydown.enter)="onColorSelectKeydown(color)"
      (keydown.space)="onColorSelectKeydown(color)"
      [ngClass]="{ 'NgxEditor__Color--Active': activeColors.includes(color) }"
    ></button>
  </div>

  <button
    class="NgxEditor__MenuItem--Button"
    (mousedown)="onRemoveMouseClick($event)"
    (keydown.enter)="onRemoveKeydown()"
    (keydown.space)="onRemoveKeydown()"
    [disabled]="!isActive"
  >
    {{ getLabel('remove') | async }}
  </button>
</div>
`,
    styles: ['@charset "UTF-8";.NgxEditor__Popup{width:230px}.NgxEditor__ColorContainer{display:flex;justify-content:space-between}.NgxEditor__ColorContainer+.NgxEditor__ColorContainer{margin-top:5px}.NgxEditor__Color{border:none;outline:none;border-radius:6px;width:24px;height:24px;flex-shrink:0}.NgxEditor__Color:focus-visible{outline:1px solid var(--ngx-editor-focus-ring-color);outline-offset:1px}.NgxEditor__Color--Active:after{content:"\\2714";font-size:90%}.NgxEditor__MenuItem--Button{margin-top:5px}\n'],
    dependencies: [{
      kind: "directive",
      type: NgClass,
      selector: "[ngClass]",
      inputs: ["class", "ngClass"]
    }, {
      kind: "directive",
      type: NgForOf,
      selector: "[ngFor][ngForOf]",
      inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"]
    }, {
      kind: "directive",
      type: NgIf,
      selector: "[ngIf]",
      inputs: ["ngIf", "ngIfThen", "ngIfElse"]
    }, {
      kind: "directive",
      type: NgStyle,
      selector: "[ngStyle]",
      inputs: ["ngStyle"]
    }, {
      kind: "pipe",
      type: AsyncPipe,
      name: "async"
    }, {
      kind: "pipe",
      type: SanitizeHtmlPipe,
      name: "sanitizeHtml"
    }]
  });
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.2",
  ngImport: core_exports,
  type: ColorPickerComponent,
  decorators: [{
    type: Component,
    args: [{
      selector: "ngx-color-picker",
      template: `<button
  type="button"
  class="NgxEditor__MenuItem--Icon"
  [class.NgxEditor__MenuItem--Active]="isActive || showPopup"
  [class.NgxEditor--Disabled]="!canExecute"
  [disabled]="!canExecute"
  [innerHTML]="icon | sanitizeHtml"
  (mousedown)="onTogglePopupMouseClick($event)"
  (keydown.enter)="onTogglePopupKeydown()"
  (keydown.space)="onTogglePopupKeydown()"
  [title]="title | async"
  [ariaLabel]="title | async"
></button>

<div *ngIf="showPopup" class="NgxEditor__Popup">
  <div *ngFor="let colorGroup of presets; trackBy: trackByIndex" class="NgxEditor__ColorContainer">
    <button
      class="NgxEditor__Color"
      *ngFor="let color of colorGroup; trackBy: trackByIndex"
      [ngStyle]="{ backgroundColor: color, color: getContrastYIQ(color) }"
      [title]="color"
      (mousedown)="onColorSelectMouseClick($event, color)"
      (keydown.enter)="onColorSelectKeydown(color)"
      (keydown.space)="onColorSelectKeydown(color)"
      [ngClass]="{ 'NgxEditor__Color--Active': activeColors.includes(color) }"
    ></button>
  </div>

  <button
    class="NgxEditor__MenuItem--Button"
    (mousedown)="onRemoveMouseClick($event)"
    (keydown.enter)="onRemoveKeydown()"
    (keydown.space)="onRemoveKeydown()"
    [disabled]="!isActive"
  >
    {{ getLabel('remove') | async }}
  </button>
</div>
`,
      styles: ['@charset "UTF-8";.NgxEditor__Popup{width:230px}.NgxEditor__ColorContainer{display:flex;justify-content:space-between}.NgxEditor__ColorContainer+.NgxEditor__ColorContainer{margin-top:5px}.NgxEditor__Color{border:none;outline:none;border-radius:6px;width:24px;height:24px;flex-shrink:0}.NgxEditor__Color:focus-visible{outline:1px solid var(--ngx-editor-focus-ring-color);outline-offset:1px}.NgxEditor__Color--Active:after{content:"\\2714";font-size:90%}.NgxEditor__MenuItem--Button{margin-top:5px}\n']
    }]
  }],
  ctorParameters: () => [{
    type: ElementRef
  }, {
    type: MenuService
  }, {
    type: NgxEditorService
  }],
  propDecorators: {
    presets: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    onDocumentClick: [{
      type: HostListener,
      args: ["document:mousedown", ["$event"]]
    }]
  }
});
var TOOLBAR_MINIMAL = [["bold", "italic"], [{
  heading: ["h1", "h2", "h3", "h4", "h5", "h6"]
}], ["link", "image"], ["text_color", "background_color"]];
var DEFAULT_COLOR_PRESETS = ["#b60205", "#d93f0b", "#fbca04", "#0e8a16", "#006b75", "#1d76db", "#0052cc", "#5319e7", "#e99695", "#f9d0c4", "#fef2c0", "#c2e0c6", "#bfdadc", "#c5def5", "#bfd4f2", "#d4c5f9"];
var MenuComponent = class _MenuComponent {
  menuService;
  toolbar = TOOLBAR_MINIMAL;
  colorPresets = DEFAULT_COLOR_PRESETS;
  disabled = false;
  editor;
  customMenuRef = null;
  dropdownPlacement = "bottom";
  toggleCommands = ["bold", "italic", "underline", "strike", "code", "blockquote", "ordered_list", "bullet_list", "align_left", "align_center", "align_right", "align_justify", "superscript", "subscript"];
  insertCommands = ["horizontal_rule", "format_clear", "indent", "outdent", "undo", "redo"];
  iconContainerClass = ["NgxEditor__MenuItem", "NgxEditor__MenuItem--IconContainer"];
  dropdownContainerClass = ["NgxEditor__Dropdown"];
  seperatorClass = ["NgxEditor__Seperator"];
  constructor(menuService) {
    this.menuService = menuService;
  }
  get presets() {
    const col = 8;
    const colors = [];
    this.colorPresets.forEach((color, index) => {
      const row = Math.floor(index / col);
      if (!colors[row]) {
        colors.push([]);
      }
      colors[row].push(color);
    });
    return colors;
  }
  trackByIndex(index) {
    return index;
  }
  isDropDown(item) {
    if (item?.heading) {
      return true;
    }
    return false;
  }
  getDropdownItems(item) {
    return item;
  }
  isLinkItem(item) {
    if (item === "link") {
      return true;
    }
    return typeof item === "object" && typeof item?.link === "object";
  }
  isLinkWithOptions(item) {
    return typeof item === "object" && typeof item?.link === "object";
  }
  getLinkOptions(item) {
    return item?.link;
  }
  ngOnInit() {
    if (!this.editor) {
      throw new NgxEditorError("Required editor instance to initialize menu component");
    }
    this.menuService.editor = this.editor;
  }
  static \u0275fac = \u0275\u0275ngDeclareFactory({
    minVersion: "12.0.0",
    version: "18.2.2",
    ngImport: core_exports,
    type: _MenuComponent,
    deps: [{
      token: MenuService
    }],
    target: FactoryTarget.Component
  });
  static \u0275cmp = \u0275\u0275ngDeclareComponent({
    minVersion: "14.0.0",
    version: "18.2.2",
    type: _MenuComponent,
    selector: "ngx-editor-menu",
    inputs: {
      toolbar: "toolbar",
      colorPresets: "colorPresets",
      disabled: "disabled",
      editor: "editor",
      customMenuRef: "customMenuRef",
      dropdownPlacement: "dropdownPlacement"
    },
    providers: [MenuService],
    ngImport: core_exports,
    template: `<div
  class="NgxEditor__MenuBar"
  [ngClass]="{ 'NgxEditor--Disabled': disabled, 'NgxEditor__MenuBar--Reverse': dropdownPlacement === 'top' }"
>
  <ng-container *ngFor="let toolbarItem of toolbar; let lastToolbarItem = last; trackBy: trackByIndex">
    <ng-container *ngFor="let item of toolbarItem; let lastItem = last; trackBy: trackByIndex">
      <!-- toggle icons -->
      <ngx-toggle-command [toolbarItem]="item" [class]="iconContainerClass" *ngIf="toggleCommands.includes(item)">
      </ngx-toggle-command>

      <ngx-insert-command [toolbarItem]="item" [class]="iconContainerClass" *ngIf="insertCommands.includes(item)">
      </ngx-insert-command>

      <!-- link -->
      <ng-container *ngIf="isLinkItem(item)">
        <ngx-link [class]="iconContainerClass" [options]="getLinkOptions(item)"></ngx-link>
      </ng-container>

      <!-- image -->
      <ngx-image [class]="iconContainerClass" *ngIf="item === 'image'"> </ngx-image>

      <!-- dropdown -->
      <ng-container *ngIf="isDropDown(item)">
        <ngx-dropdown
          *ngFor="let dropdownItem of getDropdownItems(item) | keyvalue; trackBy: trackByIndex"
          [class]="dropdownContainerClass"
          [group]="dropdownItem.key"
          [items]="dropdownItem.value"
        >
        </ngx-dropdown>
      </ng-container>

      <!-- text color picker -->
      <ngx-color-picker
        [class]="iconContainerClass"
        *ngIf="item === 'text_color'"
        type="text_color"
        [presets]="presets"
      >
      </ngx-color-picker>
      <!-- background color picker -->
      <ngx-color-picker
        [class]="iconContainerClass"
        *ngIf="item === 'background_color'"
        type="background_color"
        [presets]="presets"
      >
      </ngx-color-picker>

      <!-- seperator -->
      <div [class]="seperatorClass" *ngIf="lastItem && !lastToolbarItem"></div>
    </ng-container>
  </ng-container>

  <!-- custom menu -->
  <ng-container *ngIf="customMenuRef">
    <ng-container [ngTemplateOutlet]="customMenuRef"></ng-container>
  </ng-container>
</div>
`,
    styles: [""],
    dependencies: [{
      kind: "directive",
      type: NgClass,
      selector: "[ngClass]",
      inputs: ["class", "ngClass"]
    }, {
      kind: "directive",
      type: NgForOf,
      selector: "[ngFor][ngForOf]",
      inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"]
    }, {
      kind: "directive",
      type: NgIf,
      selector: "[ngIf]",
      inputs: ["ngIf", "ngIfThen", "ngIfElse"]
    }, {
      kind: "directive",
      type: NgTemplateOutlet,
      selector: "[ngTemplateOutlet]",
      inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"]
    }, {
      kind: "component",
      type: ToggleCommandComponent,
      selector: "ngx-toggle-command",
      inputs: ["toolbarItem"]
    }, {
      kind: "component",
      type: InsertCommandComponent,
      selector: "ngx-insert-command",
      inputs: ["toolbarItem"]
    }, {
      kind: "component",
      type: LinkComponent,
      selector: "ngx-link",
      inputs: ["options"]
    }, {
      kind: "component",
      type: DropdownComponent,
      selector: "ngx-dropdown",
      inputs: ["group", "items"]
    }, {
      kind: "component",
      type: ImageComponent,
      selector: "ngx-image"
    }, {
      kind: "component",
      type: ColorPickerComponent,
      selector: "ngx-color-picker",
      inputs: ["presets", "type"]
    }, {
      kind: "pipe",
      type: KeyValuePipe,
      name: "keyvalue"
    }]
  });
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.2",
  ngImport: core_exports,
  type: MenuComponent,
  decorators: [{
    type: Component,
    args: [{
      selector: "ngx-editor-menu",
      providers: [MenuService],
      template: `<div
  class="NgxEditor__MenuBar"
  [ngClass]="{ 'NgxEditor--Disabled': disabled, 'NgxEditor__MenuBar--Reverse': dropdownPlacement === 'top' }"
>
  <ng-container *ngFor="let toolbarItem of toolbar; let lastToolbarItem = last; trackBy: trackByIndex">
    <ng-container *ngFor="let item of toolbarItem; let lastItem = last; trackBy: trackByIndex">
      <!-- toggle icons -->
      <ngx-toggle-command [toolbarItem]="item" [class]="iconContainerClass" *ngIf="toggleCommands.includes(item)">
      </ngx-toggle-command>

      <ngx-insert-command [toolbarItem]="item" [class]="iconContainerClass" *ngIf="insertCommands.includes(item)">
      </ngx-insert-command>

      <!-- link -->
      <ng-container *ngIf="isLinkItem(item)">
        <ngx-link [class]="iconContainerClass" [options]="getLinkOptions(item)"></ngx-link>
      </ng-container>

      <!-- image -->
      <ngx-image [class]="iconContainerClass" *ngIf="item === 'image'"> </ngx-image>

      <!-- dropdown -->
      <ng-container *ngIf="isDropDown(item)">
        <ngx-dropdown
          *ngFor="let dropdownItem of getDropdownItems(item) | keyvalue; trackBy: trackByIndex"
          [class]="dropdownContainerClass"
          [group]="dropdownItem.key"
          [items]="dropdownItem.value"
        >
        </ngx-dropdown>
      </ng-container>

      <!-- text color picker -->
      <ngx-color-picker
        [class]="iconContainerClass"
        *ngIf="item === 'text_color'"
        type="text_color"
        [presets]="presets"
      >
      </ngx-color-picker>
      <!-- background color picker -->
      <ngx-color-picker
        [class]="iconContainerClass"
        *ngIf="item === 'background_color'"
        type="background_color"
        [presets]="presets"
      >
      </ngx-color-picker>

      <!-- seperator -->
      <div [class]="seperatorClass" *ngIf="lastItem && !lastToolbarItem"></div>
    </ng-container>
  </ng-container>

  <!-- custom menu -->
  <ng-container *ngIf="customMenuRef">
    <ng-container [ngTemplateOutlet]="customMenuRef"></ng-container>
  </ng-container>
</div>
`
    }]
  }],
  ctorParameters: () => [{
    type: MenuService
  }],
  propDecorators: {
    toolbar: [{
      type: Input
    }],
    colorPresets: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    editor: [{
      type: Input
    }],
    customMenuRef: [{
      type: Input
    }],
    dropdownPlacement: [{
      type: Input
    }]
  }
});
var BubbleComponent = class _BubbleComponent {
  sanitizeHTML;
  ngxeService;
  constructor(sanitizeHTML, ngxeService) {
    this.sanitizeHTML = sanitizeHTML;
    this.ngxeService = ngxeService;
  }
  get view() {
    return this.editor.view;
  }
  editor;
  updateSubscription;
  execulableItems = [];
  activeItems = [];
  toolbar = [["bold", "italic", "underline", "strike"], ["ordered_list", "bullet_list", "blockquote", "code"], ["align_left", "align_center", "align_right", "align_justify"]];
  toggleCommands = ["bold", "italic", "underline", "strike", "ordered_list", "bullet_list", "blockquote", "code", "align_left", "align_center", "align_right", "align_justify"];
  getIcon(name) {
    return this.sanitizeHTML.transform(this.ngxeService.getIcon(name));
  }
  getTitle(name) {
    return this.ngxeService.locals.get(name);
  }
  trackByIndex(index) {
    return index;
  }
  onClick(e, commandName) {
    e.preventDefault();
    e.stopPropagation();
    if (e.button !== 0) {
      return;
    }
    const {
      state: state2,
      dispatch
    } = this.view;
    const command = ToggleCommands[commandName];
    command.toggle()(state2, dispatch);
  }
  update(view) {
    this.activeItems = [];
    this.execulableItems = [];
    const {
      state: state2
    } = view;
    this.toggleCommands.forEach((toolbarItem) => {
      const command = ToggleCommands[toolbarItem];
      const isActive = command.isActive(state2);
      if (isActive) {
        this.activeItems.push(toolbarItem);
      }
      const canExecute = command.canExecute(state2);
      if (canExecute) {
        this.execulableItems.push(toolbarItem);
      }
    });
  }
  ngOnInit() {
    this.updateSubscription = this.editor.update.subscribe((view) => {
      this.update(view);
    });
  }
  ngOnDestroy() {
    this.updateSubscription.unsubscribe();
  }
  static \u0275fac = \u0275\u0275ngDeclareFactory({
    minVersion: "12.0.0",
    version: "18.2.2",
    ngImport: core_exports,
    type: _BubbleComponent,
    deps: [{
      token: SanitizeHtmlPipe
    }, {
      token: NgxEditorService
    }],
    target: FactoryTarget.Component
  });
  static \u0275cmp = \u0275\u0275ngDeclareComponent({
    minVersion: "14.0.0",
    version: "18.2.2",
    type: _BubbleComponent,
    selector: "ngx-bubble",
    inputs: {
      editor: "editor"
    },
    ngImport: core_exports,
    template: `<ng-container *ngFor="let toolbarItem of toolbar; let lastToolbarItem = last; trackBy: trackByIndex">
  <ng-container *ngFor="let item of toolbarItem; let lastItem = last; trackBy: trackByIndex">
    <button
      type="button"
      class="NgxBubbleMenu__Icon"
      *ngIf="toggleCommands.includes(item)"
      [ngClass]="{
        'NgxBubbleMenu__Icon--Active': this.activeItems.includes(item),
        'NgxEditor--Disabled': !this.execulableItems.includes(item)
      }"
      (mousedown)="onClick($event, item)"
      [title]="getTitle(item) | async"
      [innerHTML]="getIcon(item)"
    ></button>
    <div class="NgxBubbleMenu__Seperator" *ngIf="lastItem && !lastToolbarItem"></div>
  </ng-container>
</ng-container>
`,
    styles: ["*,*:before,*:after{box-sizing:border-box}:host{display:flex;flex-wrap:wrap;background-color:var(--ngx-editor-bubble-bg-color);color:var(--ngx-editor-bubble-text-color);padding:5px;border-radius:4px}.NgxBubbleMenu__Icon{all:unset;appearance:none;height:var(--ngx-editor-icon-size);width:var(--ngx-editor-icon-size);transition:.2s ease-in-out;border-radius:var(--ngx-editor-menu-item-border-radius);display:flex;align-items:center;justify-content:center;color:#fff}.NgxBubbleMenu__Icon:hover{background-color:var(--ngx-editor-bubble-item-hover-color)}.NgxBubbleMenu__Icon+.NgxBubbleMenu__Icon{margin-left:5px}.NgxBubbleMenu__Icon.NgxBubbleMenu__Icon--Active{background-color:var(--ngx-editor-bubble-text-color);color:var(--ngx-editor-bubble-bg-color)}.NgxBubbleMenu__Seperator{border-left:1px solid var(--ngx-editor-seperator-color);margin:0 5px}\n"],
    dependencies: [{
      kind: "directive",
      type: NgClass,
      selector: "[ngClass]",
      inputs: ["class", "ngClass"]
    }, {
      kind: "directive",
      type: NgForOf,
      selector: "[ngFor][ngForOf]",
      inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"]
    }, {
      kind: "directive",
      type: NgIf,
      selector: "[ngIf]",
      inputs: ["ngIf", "ngIfThen", "ngIfElse"]
    }, {
      kind: "pipe",
      type: AsyncPipe,
      name: "async"
    }]
  });
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.2",
  ngImport: core_exports,
  type: BubbleComponent,
  decorators: [{
    type: Component,
    args: [{
      selector: "ngx-bubble",
      template: `<ng-container *ngFor="let toolbarItem of toolbar; let lastToolbarItem = last; trackBy: trackByIndex">
  <ng-container *ngFor="let item of toolbarItem; let lastItem = last; trackBy: trackByIndex">
    <button
      type="button"
      class="NgxBubbleMenu__Icon"
      *ngIf="toggleCommands.includes(item)"
      [ngClass]="{
        'NgxBubbleMenu__Icon--Active': this.activeItems.includes(item),
        'NgxEditor--Disabled': !this.execulableItems.includes(item)
      }"
      (mousedown)="onClick($event, item)"
      [title]="getTitle(item) | async"
      [innerHTML]="getIcon(item)"
    ></button>
    <div class="NgxBubbleMenu__Seperator" *ngIf="lastItem && !lastToolbarItem"></div>
  </ng-container>
</ng-container>
`,
      styles: ["*,*:before,*:after{box-sizing:border-box}:host{display:flex;flex-wrap:wrap;background-color:var(--ngx-editor-bubble-bg-color);color:var(--ngx-editor-bubble-text-color);padding:5px;border-radius:4px}.NgxBubbleMenu__Icon{all:unset;appearance:none;height:var(--ngx-editor-icon-size);width:var(--ngx-editor-icon-size);transition:.2s ease-in-out;border-radius:var(--ngx-editor-menu-item-border-radius);display:flex;align-items:center;justify-content:center;color:#fff}.NgxBubbleMenu__Icon:hover{background-color:var(--ngx-editor-bubble-item-hover-color)}.NgxBubbleMenu__Icon+.NgxBubbleMenu__Icon{margin-left:5px}.NgxBubbleMenu__Icon.NgxBubbleMenu__Icon--Active{background-color:var(--ngx-editor-bubble-text-color);color:var(--ngx-editor-bubble-bg-color)}.NgxBubbleMenu__Seperator{border-left:1px solid var(--ngx-editor-seperator-color);margin:0 5px}\n"]
    }]
  }],
  ctorParameters: () => [{
    type: SanitizeHtmlPipe
  }, {
    type: NgxEditorService
  }],
  propDecorators: {
    editor: [{
      type: Input
    }]
  }
});
var FloatingMenuComponent = class _FloatingMenuComponent {
  el;
  constructor(el) {
    this.el = el;
  }
  get display() {
    return {
      visibility: this.showMenu ? "visible" : "hidden",
      opacity: this.showMenu ? "1" : "0",
      top: `${this.posTop}px`,
      left: `${this.posLeft}px`
    };
  }
  get view() {
    return this.editor.view;
  }
  editor;
  autoPlace = false;
  posLeft = 0;
  posTop = 0;
  showMenu = false;
  updateSubscription;
  dragging = false;
  resizeSubscription;
  onMouseDown(e) {
    const target = e.target;
    if (this.el.nativeElement.contains(target) && target.nodeName !== "INPUT") {
      e.preventDefault();
      return;
    }
    this.dragging = true;
  }
  onKeyDown(e) {
    const target = e.target;
    if (target.nodeName === "INPUT") {
      return;
    }
    this.dragging = true;
    this.hide();
  }
  onMouseUp(e) {
    const target = e.target;
    if (this.el.nativeElement.contains(target) || target.nodeName === "INPUT") {
      e.preventDefault();
      return;
    }
    this.dragging = false;
    this.useUpdate();
  }
  onKeyUp(e) {
    const target = e.target;
    if (target.nodeName === "INPUT") {
      return;
    }
    this.dragging = false;
    this.useUpdate();
  }
  useUpdate() {
    if (!this.view) {
      return;
    }
    this.update(this.view);
  }
  hide() {
    this.showMenu = false;
  }
  show() {
    this.showMenu = true;
  }
  calculateBubblePosition(view) {
    return __async(this, null, function* () {
      const {
        state: {
          selection
        }
      } = view;
      const {
        from: from2,
        to
      } = selection;
      const start = view.coordsAtPos(from2);
      const end = view.coordsAtPos(to);
      const selectionElement = {
        getBoundingClientRect() {
          if (selection instanceof NodeSelection) {
            const node = view.nodeDOM(from2);
            return node.getBoundingClientRect();
          }
          const {
            top: top2,
            left: left2
          } = start;
          const {
            bottom,
            right
          } = end;
          return {
            x: left2,
            y: top2,
            top: top2,
            bottom,
            left: left2,
            right,
            width: right - left2,
            height: bottom - top2
          };
        }
      };
      const bubbleEl = this.el.nativeElement;
      const {
        x: left,
        y: top
      } = yield computePosition2(selectionElement, bubbleEl, {
        placement: "top",
        middleware: [offset2(5), this.autoPlace && autoPlacement2({
          boundary: view.dom,
          padding: 5,
          allowedPlacements: ["top", "bottom"]
        }), {
          // prevent overflow on right and left side
          // since only top and bottom placements are allowed
          // autoplacement can't handle overflows on the right and left
          name: "overflowMiddleware",
          fn(middlewareArgs) {
            return __async(this, null, function* () {
              const overflow = yield detectOverflow2(middlewareArgs, {
                boundary: view.dom,
                padding: 5
              });
              if (overflow.left > 0) {
                return {
                  x: middlewareArgs.x + overflow.left
                };
              }
              if (overflow.right > 0) {
                return {
                  x: middlewareArgs.x - overflow.right
                };
              }
              return {};
            });
          }
        }].filter(Boolean)
      });
      return {
        left,
        top
      };
    });
  }
  canShowMenu(view) {
    const {
      state: state2
    } = view;
    const {
      selection
    } = state2;
    const {
      empty: empty2
    } = selection;
    if (selection instanceof NodeSelection) {
      if (selection.node.type.name === "image") {
        return false;
      }
    }
    const hasFocus = this.view.hasFocus();
    if (!hasFocus || empty2 || this.dragging) {
      this.hide();
      return false;
    }
    return true;
  }
  update(view) {
    const canShowMenu = this.canShowMenu(view);
    if (!canShowMenu) {
      this.hide();
      return;
    }
    this.calculateBubblePosition(this.view).then(({
      top,
      left
    }) => {
      if (!this.canShowMenu) {
        this.hide();
        return;
      }
      this.posLeft = left;
      this.posTop = top;
      this.show();
    });
  }
  ngOnInit() {
    if (!this.editor) {
      throw new NgxEditorError("Required editor instance to initialize floating menu component");
    }
    this.updateSubscription = this.editor.update.subscribe((view) => {
      this.update(view);
    });
    this.resizeSubscription = fromEvent(window, "resize").pipe(throttleTime(500, asyncScheduler, {
      leading: true,
      trailing: true
    })).subscribe(() => {
      this.useUpdate();
    });
  }
  ngOnDestroy() {
    this.updateSubscription.unsubscribe();
    this.resizeSubscription.unsubscribe();
  }
  static \u0275fac = \u0275\u0275ngDeclareFactory({
    minVersion: "12.0.0",
    version: "18.2.2",
    ngImport: core_exports,
    type: _FloatingMenuComponent,
    deps: [{
      token: ElementRef
    }],
    target: FactoryTarget.Component
  });
  static \u0275cmp = \u0275\u0275ngDeclareComponent({
    minVersion: "14.0.0",
    version: "18.2.2",
    type: _FloatingMenuComponent,
    selector: "ngx-editor-floating-menu",
    inputs: {
      editor: "editor",
      autoPlace: "autoPlace"
    },
    host: {
      listeners: {
        "document:mousedown": "onMouseDown($event)",
        "document:keydown": "onKeyDown($event)",
        "document:mouseup": "onMouseUp($event)",
        "document:keyup": "onKeyUp($event)"
      },
      properties: {
        "style": "this.display"
      }
    },
    ngImport: core_exports,
    template: '<div #ref>\n  <ng-content></ng-content>\n</div>\n<ng-container *ngIf="ref.children.length === 0">\n  <ngx-bubble [editor]="editor"></ngx-bubble>\n</ng-container>\n',
    styles: ["*,*:before,*:after{box-sizing:border-box}:host{position:absolute;z-index:20;margin-bottom:5px;visibility:hidden;opacity:0}\n"],
    dependencies: [{
      kind: "directive",
      type: NgIf,
      selector: "[ngIf]",
      inputs: ["ngIf", "ngIfThen", "ngIfElse"]
    }, {
      kind: "component",
      type: BubbleComponent,
      selector: "ngx-bubble",
      inputs: ["editor"]
    }]
  });
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.2",
  ngImport: core_exports,
  type: FloatingMenuComponent,
  decorators: [{
    type: Component,
    args: [{
      selector: "ngx-editor-floating-menu",
      template: '<div #ref>\n  <ng-content></ng-content>\n</div>\n<ng-container *ngIf="ref.children.length === 0">\n  <ngx-bubble [editor]="editor"></ngx-bubble>\n</ng-container>\n',
      styles: ["*,*:before,*:after{box-sizing:border-box}:host{position:absolute;z-index:20;margin-bottom:5px;visibility:hidden;opacity:0}\n"]
    }]
  }],
  ctorParameters: () => [{
    type: ElementRef
  }],
  propDecorators: {
    display: [{
      type: HostBinding,
      args: ["style"]
    }],
    editor: [{
      type: Input
    }],
    autoPlace: [{
      type: Input
    }],
    onMouseDown: [{
      type: HostListener,
      args: ["document:mousedown", ["$event"]]
    }],
    onKeyDown: [{
      type: HostListener,
      args: ["document:keydown", ["$event"]]
    }],
    onMouseUp: [{
      type: HostListener,
      args: ["document:mouseup", ["$event"]]
    }],
    onKeyUp: [{
      type: HostListener,
      args: ["document:keyup", ["$event"]]
    }]
  }
});
var MenuModule = class _MenuModule {
  static \u0275fac = \u0275\u0275ngDeclareFactory({
    minVersion: "12.0.0",
    version: "18.2.2",
    ngImport: core_exports,
    type: _MenuModule,
    deps: [],
    target: FactoryTarget.NgModule
  });
  static \u0275mod = \u0275\u0275ngDeclareNgModule({
    minVersion: "14.0.0",
    version: "18.2.2",
    ngImport: core_exports,
    type: _MenuModule,
    declarations: [
      // pipes
      SanitizeHtmlPipe,
      // components
      MenuComponent,
      ToggleCommandComponent,
      InsertCommandComponent,
      LinkComponent,
      DropdownComponent,
      ImageComponent,
      ColorPickerComponent,
      FloatingMenuComponent,
      BubbleComponent
    ],
    imports: [CommonModule, ReactiveFormsModule],
    exports: [MenuComponent, FloatingMenuComponent]
  });
  static \u0275inj = \u0275\u0275ngDeclareInjector({
    minVersion: "12.0.0",
    version: "18.2.2",
    ngImport: core_exports,
    type: _MenuModule,
    providers: [SanitizeHtmlPipe],
    imports: [CommonModule, ReactiveFormsModule]
  });
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.2",
  ngImport: core_exports,
  type: MenuModule,
  decorators: [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ReactiveFormsModule],
      declarations: [
        // pipes
        SanitizeHtmlPipe,
        // components
        MenuComponent,
        ToggleCommandComponent,
        InsertCommandComponent,
        LinkComponent,
        DropdownComponent,
        ImageComponent,
        ColorPickerComponent,
        FloatingMenuComponent,
        BubbleComponent
      ],
      providers: [SanitizeHtmlPipe],
      exports: [MenuComponent, FloatingMenuComponent]
    }]
  }]
});
var NGX_EDITOR_CONFIG_TOKEN = new InjectionToken("NgxEditorConfig");
var defaultConfig = {
  locals: defaults,
  icons
};
var NgxEditorModule = class _NgxEditorModule {
  static forRoot(config = defaultConfig) {
    return {
      ngModule: _NgxEditorModule,
      providers: [{
        provide: NGX_EDITOR_CONFIG_TOKEN,
        useValue: config
      }, {
        provide: NgxEditorServiceConfig,
        useFactory: provideMyServiceOptions,
        deps: [NGX_EDITOR_CONFIG_TOKEN]
      }]
    };
  }
  static forChild(config = defaultConfig) {
    return {
      ngModule: _NgxEditorModule,
      providers: [{
        provide: NGX_EDITOR_CONFIG_TOKEN,
        useValue: config
      }, {
        provide: NgxEditorServiceConfig,
        useFactory: provideMyServiceOptions,
        deps: [NGX_EDITOR_CONFIG_TOKEN]
      }, NgxEditorService]
    };
  }
  static \u0275fac = \u0275\u0275ngDeclareFactory({
    minVersion: "12.0.0",
    version: "18.2.2",
    ngImport: core_exports,
    type: _NgxEditorModule,
    deps: [],
    target: FactoryTarget.NgModule
  });
  static \u0275mod = \u0275\u0275ngDeclareNgModule({
    minVersion: "14.0.0",
    version: "18.2.2",
    ngImport: core_exports,
    type: _NgxEditorModule,
    declarations: [NgxEditorComponent, ImageViewComponent],
    imports: [CommonModule, MenuModule],
    exports: [NgxEditorComponent, MenuComponent, FloatingMenuComponent]
  });
  static \u0275inj = \u0275\u0275ngDeclareInjector({
    minVersion: "12.0.0",
    version: "18.2.2",
    ngImport: core_exports,
    type: _NgxEditorModule,
    imports: [CommonModule, MenuModule]
  });
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.2",
  ngImport: core_exports,
  type: NgxEditorModule,
  decorators: [{
    type: NgModule,
    args: [{
      imports: [CommonModule, MenuModule],
      providers: [],
      declarations: [NgxEditorComponent, ImageViewComponent],
      exports: [NgxEditorComponent, MenuComponent, FloatingMenuComponent]
    }]
  }]
});
var execMark = (name, toggle = false) => {
  return (state2, dispatch) => {
    const command = new Mark2(name);
    if (!toggle) {
      return command.apply()(state2, dispatch);
    }
    return command.toggle()(state2, dispatch);
  };
};
var EditorCommands = class {
  view;
  state;
  tr;
  constructor(view) {
    if (!view) {
      throw new NgxEditorError("Required view to initialize commands.");
    }
    this.view = view;
    this.state = view.state;
    this.tr = this.view.state.tr;
  }
  applyTrx = (tr) => {
    this.state = this.state.apply(tr ?? this.tr);
    this.tr = this.state.tr;
    this.tr.setMeta("APPLIED_TRX", true);
  };
  dispatch = (tr) => {
    this.applyTrx(tr);
  };
  exec() {
    if (!this.tr.getMeta("APPLIED_TRX")) {
      return false;
    }
    const forceEmit = !this.view.state.doc.eq(this.state.doc);
    this.view.updateState(this.state);
    const tr = this.tr.setMeta("FORCE_EMIT", forceEmit);
    this.view.dispatch(tr);
    return true;
  }
  focus(position = "end") {
    const selection = position === "start" ? Selection.atStart(this.state.doc) : Selection.atEnd(this.state.doc);
    this.tr.setSelection(selection);
    this.applyTrx();
    this.view.focus();
    return this;
  }
  scrollIntoView() {
    this.tr.scrollIntoView();
    this.applyTrx();
    return this;
  }
  insertText(text2) {
    this.tr.insertText(text2);
    this.applyTrx();
    return this;
  }
  insertNewLine() {
    const newLineCommands = [newlineInCode, createParagraphNear, liftEmptyBlock, splitBlock];
    chainCommands(...newLineCommands)(this.state, this.dispatch);
    return this;
  }
  applyMark(name) {
    execMark(name, false)(this.state, this.dispatch);
    return this;
  }
  toggleMark(name) {
    execMark(name, true)(this.state, this.dispatch);
    return this;
  }
  bold() {
    execMark("strong")(this.state, this.dispatch);
    return this;
  }
  toggleBold() {
    execMark("strong", true)(this.state, this.dispatch);
    return this;
  }
  italics() {
    execMark("em")(this.state, this.dispatch);
    return this;
  }
  toggleItalics() {
    execMark("em", true)(this.state, this.dispatch);
    return this;
  }
  underline() {
    execMark("u")(this.state, this.dispatch);
    return this;
  }
  toggleUnderline() {
    execMark("u", true)(this.state, this.dispatch);
    return this;
  }
  strike() {
    execMark("s")(this.state, this.dispatch);
    return this;
  }
  toggleStrike() {
    execMark("s", true)(this.state, this.dispatch);
    return this;
  }
  code() {
    execMark("code")(this.state, this.dispatch);
    return this;
  }
  toggleCode() {
    execMark("code", true)(this.state, this.dispatch);
    return this;
  }
  superscript() {
    execMark("sup")(this.state, this.dispatch);
    return this;
  }
  subscript() {
    execMark("sub")(this.state, this.dispatch);
    return this;
  }
  toggleOrderedList() {
    const command = new ListItem(false);
    command.toggle()(this.state, this.dispatch);
    return this;
  }
  toggleBulletList() {
    const command = new ListItem(true);
    command.toggle()(this.state, this.dispatch);
    return this;
  }
  toggleHeading(level) {
    const command = new Heading(level);
    command.toggle()(this.state, this.dispatch);
    return this;
  }
  insertLink(text2, attrs) {
    const command = new Link$1();
    command.insert(text2, attrs)(this.state, this.dispatch);
    return this;
  }
  updateLink(attrs) {
    const command = new Link$1();
    command.update(attrs)(this.state, this.dispatch);
    return this;
  }
  insertImage(src, attrs = {}) {
    const command = new Image$1();
    command.insert(src, attrs)(this.state, this.dispatch);
    return this;
  }
  textColor(color) {
    const command = new TextColor$1("text_color");
    command.apply({
      color
    })(this.state, this.dispatch);
    return this;
  }
  backgroundColor(color) {
    const command = new TextColor$1("text_background_color");
    command.apply({
      backgroundColor: color
    })(this.state, this.dispatch);
    return this;
  }
  removeTextColor() {
    const command = new TextColor$1("text_color");
    command.remove()(this.state, this.dispatch);
    return this;
  }
  removeBackgroundColor() {
    const command = new TextColor$1("text_background_color");
    command.remove()(this.state, this.dispatch);
    return this;
  }
  align(p) {
    const command = new TextAlign(p);
    command.toggle()(this.state, this.dispatch);
    return this;
  }
  insertHTML(html) {
    const {
      selection,
      schema: schema2,
      tr
    } = this.state;
    const {
      from: from2,
      to
    } = selection;
    const element = document.createElement("div");
    element.innerHTML = isString(html) ? html.trim() : html;
    const slice2 = DOMParser.fromSchema(schema2).parseSlice(element);
    const transaction = tr.replaceRange(from2, to, slice2);
    this.applyTrx(transaction);
    return this;
  }
  indent() {
    const command = new Indent("increase");
    command.insert()(this.state, this.dispatch);
    return this;
  }
  outdent() {
    const command = new Indent("decrease");
    command.insert()(this.state, this.dispatch);
    return this;
  }
};
var isMacOs = typeof navigator !== "undefined" ? /Mac/.test(navigator.platform) : false;
var blockQuoteRule = (nodeType) => {
  return wrappingInputRule(/^\s*>\s$/, nodeType);
};
var orderedListRule = (nodeType) => {
  return wrappingInputRule(/^(?:\d+)\.\s$/, nodeType, (match) => ({
    order: Number(match[1])
  }), (match, node) => node.childCount + node.attrs["order"] === Number(match[1]));
};
var bulletListRule = (nodeType) => {
  return wrappingInputRule(/^\s*(?:[-+*])\s$/, nodeType);
};
var codeBlockRule = (nodeType) => {
  return textblockTypeInputRule(/^```$/, nodeType);
};
var headingRule = (nodeType, maxLevel) => {
  return textblockTypeInputRule(new RegExp(`^(#{1,${maxLevel}})\\s$`), nodeType, (match) => ({
    level: match[1].length
  }));
};
var boldRule = (markType) => {
  return markInputRule(/(?:^|\s)(?:(\*\*|__)(?:([^*_]+))(\*\*|__))$/, markType);
};
var emRule = (markType) => {
  return markInputRule(/(?:^|\s)(?:(\*|_)(?:([^*_]+))(\*|_))$/, markType);
};
var buildInputRules = (schema2) => {
  const rules = smartQuotes.concat(ellipsis, emDash);
  rules.push(boldRule(schema2.marks["strong"]));
  rules.push(emRule(schema2.marks["em"]));
  rules.push(blockQuoteRule(schema2.nodes["blockquote"]));
  rules.push(orderedListRule(schema2.nodes["ordered_list"]));
  rules.push(bulletListRule(schema2.nodes["bullet_list"]));
  rules.push(codeBlockRule(schema2.nodes["code_block"]));
  rules.push(headingRule(schema2.nodes["heading"], 6));
  return inputRules({
    rules
  });
};
var getKeyboardShortcuts = (schema2, options) => {
  const historyKeyMap = {};
  historyKeyMap["Mod-z"] = undo;
  if (isMacOs) {
    historyKeyMap["Shift-Mod-z"] = redo;
  } else {
    historyKeyMap["Mod-y"] = redo;
  }
  const plugins = [keymap({
    "Mod-b": toggleMark(schema2.marks["strong"]),
    "Mod-i": toggleMark(schema2.marks["em"]),
    "Mod-u": toggleMark(schema2.marks["u"]),
    "Mod-`": toggleMark(schema2.marks["code"])
  }), keymap({
    "Enter": splitListItem(schema2.nodes["list_item"]),
    "Shift-Enter": chainCommands(exitCode, (state2, dispatch) => {
      const {
        tr
      } = state2;
      const br = schema2.nodes["hard_break"];
      dispatch(tr.replaceSelectionWith(br.create()).scrollIntoView());
      return true;
    }),
    "Mod-[": liftListItem(schema2.nodes["list_item"]),
    "Mod-]": sinkListItem(schema2.nodes["list_item"]),
    "Tab": sinkListItem(schema2.nodes["list_item"])
  }), keymap(baseKeymap)];
  if (options.history) {
    plugins.push(keymap(historyKeyMap));
  }
  return plugins;
};
var getDefaultPlugins = (schema2, options) => {
  const plugins = [];
  if (options.keyboardShortcuts) {
    plugins.push(...getKeyboardShortcuts(schema2, {
      history: options.history
    }));
  }
  if (options.history) {
    plugins.push(history());
  }
  if (options.inputRules) {
    plugins.push(buildInputRules(schema2));
  }
  return plugins;
};
var defaultFeatures = {
  linkOnPaste: true,
  resizeImage: true
};
var DEFAULT_OPTIONS = {
  content: null,
  history: true,
  keyboardShortcuts: true,
  inputRules: true,
  schema,
  plugins: [],
  nodeViews: {},
  attributes: {},
  features: defaultFeatures,
  handleScrollToSelection: null,
  linkValidationPattern: "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/??([^#\n\r]*)?#?([^\n\r]*)|(mailto:.*[@].*)"
};
var Editor = class {
  options;
  view;
  constructor(options = DEFAULT_OPTIONS) {
    this.options = __spreadValues(__spreadValues({}, DEFAULT_OPTIONS), options);
    this.createEditor();
  }
  valueChangesSubject = new Subject();
  updateSubject = new Subject();
  get valueChanges() {
    return this.valueChangesSubject.asObservable();
  }
  get update() {
    return this.updateSubject.asObservable();
  }
  get schema() {
    return this.options.schema || schema;
  }
  get linkValidationPattern() {
    return this.options.linkValidationPattern;
  }
  get commands() {
    return new EditorCommands(this.view);
  }
  get features() {
    return __spreadValues(__spreadValues({}, defaultFeatures), this.options.features);
  }
  handleTransactions(tr) {
    const state2 = this.view.state.apply(tr);
    this.view.updateState(state2);
    this.updateSubject.next(this.view);
    if (!tr.docChanged && !tr.getMeta("FORCE_EMIT")) {
      return;
    }
    const json = state2.doc.toJSON();
    this.valueChangesSubject.next(json);
  }
  createEditor() {
    const {
      options,
      schema: schema2
    } = this;
    const {
      content = null,
      nodeViews
    } = options;
    const {
      history: history2 = true,
      keyboardShortcuts = true,
      inputRules: inputRules2 = true
    } = options;
    const doc4 = parseContent(content, schema2, options.parseOptions);
    const plugins = options.plugins ?? [];
    const attributes = options.attributes ?? {};
    const defaultPlugins = getDefaultPlugins(schema2, {
      history: history2,
      keyboardShortcuts,
      inputRules: inputRules2
    });
    this.view = new EditorView(null, {
      state: EditorState.create({
        doc: doc4,
        schema: schema2,
        plugins: [...defaultPlugins, ...plugins]
      }),
      nodeViews,
      dispatchTransaction: this.handleTransactions.bind(this),
      attributes,
      handleScrollToSelection: options.handleScrollToSelection
    });
  }
  setContent(content) {
    if (isNil(content)) {
      return;
    }
    const {
      state: state2
    } = this.view;
    const {
      tr,
      doc: doc4
    } = state2;
    const newDoc = parseContent(content, this.schema, this.options.parseOptions);
    tr.replaceWith(0, state2.doc.content.size, newDoc);
    if (doc4.eq(tr.doc)) {
      return;
    }
    if (!tr.docChanged) {
      return;
    }
    this.view.dispatch(tr);
  }
  registerPlugin(plugin) {
    const {
      state: state2
    } = this.view;
    const plugins = [...state2.plugins, plugin];
    const newState = state2.reconfigure({
      plugins
    });
    this.view.updateState(newState);
  }
  destroy() {
    this.view.destroy();
  }
};

// src/app/tooling/services/tool-request.service.ts
var ToolRequestService = class ToolRequestService2 {
  ////////////////////////////////////////////////////
  //INJECTION DEPENDANCES
  ////////////////////////////////////////////////////
  http = inject(HttpClient);
  loaderService = inject(LoadingService);
  ////////////////////////////////////////////////////
  //PROPRIETES
  ////////////////////////////////////////////////////
  toolRequestList = signal([]);
  constructor() {
    console.log("hello toolRequestService");
    this.initializeToolRequests();
  }
  /**
     * Initialise les toolRequests au chargement du service
     */
  initializeToolRequests() {
    this.getToolRequests().subscribe({
      next: (requests) => {
        this.toolRequestList.set(requests);
        console.log("ToolRequests initialis\xE9es:", requests);
      },
      error: (error) => {
        console.error("Erreur lors de l'initialisation des toolRequests:", error);
        this.toolRequestList.set([]);
      }
    });
  }
  /**
    * Méthode publique pour recharger les toolRequests si nécessaire
    */
  refreshToolRequests() {
    this.initializeToolRequests();
  }
  // initToolRequest(): void {
  //   const requestType: string = this.getToolRequestType();
  //   const id = this.activatedRoute.snapshot.paramMap.get('id');
  //   switch (requestType) {
  //     case "3D-tool":
  //       this.toolRequest$ = this.ctrlRequestService.getControlData(id)
  //       break;
  //     default:
  //       break;
  //   }
  // }
  //       this.page.title = 'Modification demande de contrôle 3D : ID ' + this.toolRequestForm.value.id;
  updateToolRequest(toolRequestToUpdate) {
    return this.http.patch(`${environment.toolApi}demandes/${toolRequestToUpdate.id}`, toolRequestToUpdate).pipe(tap(() => {
      this.refreshToolRequests();
    }));
  }
  getType(request) {
    if (typeof request === "string") {
      return request;
    }
    if (request.type === RequestType.CONTROLE) {
      return "controle";
    } else if (request.type === RequestType.MAINTENANCE) {
      return "maintenance";
    }
  }
  createToolRequest(toolRequestToCreate) {
    return this.http.post(`api/tools/request`, toolRequestToCreate);
  }
  getToolRequest(id) {
    console.log("get ToolRequest ", id);
    return !id ? of(new ToolRequest()) : this.http.get(`api/tools/request/${id}`);
  }
  getToolRequests() {
    this.loaderService.startLoading("Chargement des demandes");
    return this.http.get(`api/tools/request`).pipe(share(), catchError((error) => {
      console.error("Erreur lors du chargement des demandes:", error);
      return of([]);
    }), finalize(() => this.loaderService.stopLoading()));
  }
  removeRequest(request) {
    return this.http.delete(`demandes/${request.id}`).pipe(tap(() => {
      this.refreshToolRequests();
    }));
  }
  static ctorParameters = () => [];
};
ToolRequestService = __decorate([
  Injectable({
    providedIn: "root"
  })
], ToolRequestService);

// angular:jit:template:file:src\app\tooling\components\sbo\sbo.component.html
var sbo_component_default = `<div class="header">\r
    <ion-grid fixed>\r
        <ion-row>\r
            <ion-col size="2">\r
                <ion-img class="ion-hide-sm-down logo" src="assets/images/logoDaher.png"> </ion-img>\r
            </ion-col>\r
            <ion-col size="7">\r
                <h3 class="doc-title">\r
                    Processus \xAB D\xE9velopper modifier une a\xE9rostructure \xBB\r
                </h3>\r
            </ion-col>\r
            <ion-col size="3">\r
                <div class="doc-codif">\r
                    F0381#A <br> Doc de rattachement : P0087\r
                </div>\r
            </ion-col>\r
        </ion-row>\r
        <ion-row>\r
            <ion-col size="3">\r
                <div class="aircraft-type">\r
                    Type avion : {{spec.aircraftProgram}}\r
                </div>\r
            </ion-col>\r
            <ion-col size="9">\r
                <div class="sbo-title">\r
                    SPECIFICATION DE BESOIN OUTILLAGE / TOOL REQUIREMENT SPECIFICATION\r
                </div>\r
            </ion-col>\r
        </ion-row>\r
        <ion-row>\r
            <ion-col size="4">\r
                <div class="interch">\r
                    Interchangeabilit\xE9 : Cocher la case correspondante : Interchangeability: Check off the appropriate box:\r
                </div>\r
            </ion-col>\r
            <ion-col size="8">\r
                <ion-row class="table">\r
                    <ion-col size="4">OT SAP : {{tool.controls.sapToolNumber.value}}</ion-col>\r
                    <ion-col size="4">N\xB0 OT Client : </ion-col>\r
                    <ion-col size="4">OI : DAE-0022-2-4-1</ion-col>\r
                </ion-row>\r
            </ion-col>\r
        </ion-row>\r
    </ion-grid>\r
\r
\r
</div>\r
<div class="sbo">\r
    <ion-grid fixed class="data-grid">\r
        <ion-row class="header-row">\r
            <ion-col size="1">Ind</ion-col>\r
            <ion-col size="1">Date</ion-col>\r
            <ion-col size="2">Nom / Name</ion-col>\r
            <ion-col size="4">Texte / Text</ion-col>\r
            <ion-col size="3" class="ion-no-padding ion-no-border">\r
                <ion-row>\r
                    <ion-col size="12">Temps allou\xE9 / Time allowed</ion-col>\r
                </ion-row>\r
                <ion-row>\r
                    <ion-col size="4">Etude Design\r
                    </ion-col>\r
                    <ion-col size="4">Prep OT WO preparation\r
                    </ion-col>\r
                    <ion-col size="4">R\xE9al OT WO execution\r
                    </ion-col>\r
                </ion-row>\r
            </ion-col>\r
            <ion-col size="1">D\xE9lai utilisation Shelf life\r
            </ion-col>\r
        </ion-row>\r
        <ion-row class="data-row">\r
            <ion-col size="1"></ion-col>\r
            <ion-col size="1"></ion-col>\r
            <ion-col size="2"></ion-col>\r
            <ion-col size="4">\r
                <div class="title"> {{spec.title}}</div>\r
                <div class="content">{{spec.description}}</div>\r
            </ion-col>\r
            <ion-col size="1"></ion-col>\r
            <ion-col size="1"></ion-col>\r
            <ion-col size="1"></ion-col>\r
            <ion-col size="1">{{spec.dateBesoin| date: 'dd/MM/yyyy'}}</ion-col>\r
        </ion-row>\r
    </ion-grid>\r
</div>\r
<div class="footer">\r
    <div class="norm">Num\xE9rotation outillage suivant normes / Tool numbering as per : NFL 09.101 - NO.OO.OO1 et NO.01 001</div>\r
    <div class="toolnfl">{{tool.controls.identification.value}}</div>\r
</div>`;

// angular:jit:style:file:src\app\tooling\components\sbo\sbo.component.scss
var sbo_component_default2 = "/* src/app/tooling/components/sbo/sbo.component.scss */\n.logo {\n  width: 100px;\n}\n.sbo-title {\n  font-weight: bold;\n}\n.table > * {\n  border: solid 1px;\n}\n.interch {\n  font-size: small;\n}\n.data-grid .header-row * {\n  border: solid 1px;\n}\n.data-grid .data-row * {\n  border: solid 1px;\n}\n/*# sourceMappingURL=sbo.component.css.map */\n";

// src/app/tooling/components/sbo/sbo.component.ts
var SboComponent = class SboComponent2 {
  spec;
  tool;
  constructor() {
  }
  ngOnInit() {
  }
  static ctorParameters = () => [];
  static propDecorators = {
    spec: [{ type: Input }],
    tool: [{ type: Input }]
  };
};
SboComponent = __decorate([
  Component({
    selector: "app-sbo",
    template: sbo_component_default,
    standalone: true,
    imports: [IonicModule, DatePipe],
    styles: [sbo_component_default2]
  })
], SboComponent);

// src/app/shared/services/toolRequestFormBuilder/tool-request-form-builder.ts
var ToolRequestFormBuilder = class ToolRequestFormBuilder2 {
  fb = inject(FormBuilder);
  // ==========================================================================
  // TOOL REQUEST PRINCIPAL
  // ==========================================================================
  createToolRequestForm(initialValue) {
    return this.fb.group({
      type: [initialValue?.type ?? RequestType.SBO, Validators.required],
      bloquantProd: [initialValue?.bloquantProd ?? false, Validators.required],
      // dateBesoin: [initialValue?.dateBesoin ?? null, Validators.required],
      aircraftProgram: [initialValue?.aircraftProgram ?? ""],
      groupeAffectation: [initialValue?.groupeAffectation ?? null],
      toolingNote: [initialValue?.toolingNote ?? ""],
      typeData: initialValue?.typeData ?? null
    });
  }
  // ==========================================================================
  // OUTILLAGE SANS REF SAP
  // ==========================================================================
  createOutillNoRefSAPForm(initialValue) {
    return this.fb.group({
      identification: [initialValue?.identification ?? "", Validators.required],
      description: [initialValue?.description ?? "", Validators.required],
      localisation: [initialValue?.localisation ?? "", Validators.required]
    });
  }
  // ==========================================================================
  // SPÉCIFICATIONS CONTRÔLE
  // ==========================================================================
  createSpecCtrlForm(initialValue) {
    return this.fb.group({
      // Informations plan
      refPlan: [initialValue?.refPlan ?? "", Validators.required],
      indPlan: [initialValue?.indPlan ?? "", Validators.required],
      cheminCAO: [initialValue?.cheminCAO ?? ""],
      // Description
      description: [initialValue?.description ?? "", Validators.required],
      detailsControle: [initialValue?.detailsControle ?? ""],
      tolerances: [initialValue?.tolerances ?? ""],
      // Dates
      dateBesoin: [initialValue?.dateBesoin ?? null, Validators.required],
      dispoOut: [initialValue?.dispoOut ?? null],
      // Type de contrôle
      typeRapport: [initialValue?.typeRapport ?? null],
      moyenMesure: [initialValue?.moyenMesure ?? null],
      // Informations complémentaires
      infosComplementaire: [initialValue?.infosComplementaire ?? ""],
      ligneBudgetaire: [initialValue?.ligneBudgetaire ?? "", Validators.required],
      visaControleur: [initialValue?.visaControleur ?? ""],
      // Outillage
      outillage: [initialValue?.outillage ?? null],
      outillNoRefSAP: this.createOutillNoRefSAPForm(initialValue?.outillNoRefSAP),
      // Options
      bloquantProd: [initialValue?.bloquantProd ?? false],
      immobilisationOutillage: [initialValue?.immobilisationOutillage ?? false]
    });
  }
  // ==========================================================================
  // MAINTENANCE ITEM (ligne d'action corrective)
  // ==========================================================================
  createMaintenanceItemForm(rep, initialValue) {
    return this.fb.group({
      rep: [{ value: rep, disabled: true }],
      nonConformite: [initialValue?.nonConformite ?? "", Validators.required],
      actionsCorrectives: [initialValue?.actionsCorrectives ?? "", Validators.required],
      respo: [initialValue?.respo ?? ""],
      delaiAction: [initialValue?.delaiAction ?? null, Validators.required],
      userReal: [initialValue?.userReal ?? ""],
      dateReal: [initialValue?.dateReal ?? null]
    });
  }
  // ==========================================================================
  // SPÉCIFICATIONS MAINTENANCE (avec FormArray)
  // ==========================================================================
  createSpecMaintenanceForm(initialValue) {
    const itemsArray = this.fb.array(initialValue?.itemActionCorrective?.length ? initialValue.itemActionCorrective.map((item, index) => this.createMaintenanceItemForm(index + 1, item)) : [this.createMaintenanceItemForm(1)]);
    return this.fb.group({
      outillage: [initialValue?.outillage ?? null],
      outillNoRefSAP: this.createOutillNoRefSAPForm(initialValue?.outillNoRefSAP),
      dateBesoin: [initialValue?.dateBesoin ?? null],
      image: [initialValue?.image ?? ""],
      fichier: [initialValue?.fichier ?? ""],
      sigle: [initialValue?.sigle ?? ""],
      userValideur: [initialValue?.userValideur ?? null],
      dateValid: [initialValue?.dateValid ?? null],
      itemActionCorrective: itemsArray
    });
  }
  // Ajouter un item de maintenance
  addMaintenanceItem(form) {
    const itemsArray = form.get("itemActionCorrective");
    const newRep = itemsArray.length + 1;
    itemsArray.push(this.createMaintenanceItemForm(newRep));
  }
  // Supprimer un item de maintenance
  removeMaintenanceItem(form, index) {
    const itemsArray = form.get("itemActionCorrective");
    if (itemsArray.length > 1) {
      itemsArray.removeAt(index);
      itemsArray.controls.forEach((control, idx) => {
        control.get("rep")?.setValue(idx + 1);
      });
    }
  }
  // ==========================================================================
  // SPÉCIFICATIONS SBO (Nouvelle demande outillage)
  // ==========================================================================
  createSpecSBOForm(initialValue) {
    return this.fb.group({
      title: [initialValue?.title ?? "", Validators.required],
      description: [initialValue?.description ?? "", Validators.required],
      dateBesoin: [initialValue?.dateBesoin ?? null, Validators.required]
      // aircraftProgram: [initialValue?.aircraftProgram ?? '', Validators.required]
    });
  }
  // ==========================================================================
  // NOUVEAU TOOL (création d'outillage)
  // ==========================================================================
  createNewToolForm(initialValue) {
    return this.fb.group({
      sapToolNumber: [initialValue?.sapToolNumber ?? "", Validators.required],
      identification: [initialValue?.identification ?? "", Validators.required],
      designation: [initialValue?.designation ?? "", Validators.required]
    });
  }
  // ==========================================================================
  // FORMULAIRE COMPLET NEW TOOL REQUEST (combiné)
  // ==========================================================================
  createNewToolRequestForm() {
    return this.fb.group({
      tool: this.createNewToolForm(),
      toolRequest: this.createToolRequestForm(),
      specSbo: this.createSpecSBOForm()
    });
  }
};
ToolRequestFormBuilder = __decorate([
  Injectable({
    providedIn: "root"
  })
], ToolRequestFormBuilder);

// src/app/tooling/components/new-tool/new-tool.page.ts
var MENU_ITEMS = [
  {
    title: "Nouvelle demande outillage",
    path: "new-tool",
    type: "button"
  },
  {
    title: "Liste des demandes outillages",
    path: "/tool-requests",
    type: "button"
  }
];
var NewToolPage = class NewToolPage2 {
  // ============================================================================
  // INJECTION DE DÉPENDANCES
  // ============================================================================
  authStore = inject(AuthStore);
  formBuilderService = inject(ToolRequestFormBuilder);
  programService = inject(ProgramsService);
  toolService = inject(ToolService);
  toolRequestService = inject(ToolRequestService);
  router = inject(Router);
  // ============================================================================
  // PROPRIÉTÉS
  // ============================================================================
  // Configuration de la page
  page = {
    pageTitle: "Cr\xE9ation d'une demande",
    menuTitle: "Menu outillage",
    menuItems: MENU_ITEMS,
    contentId: "tooling-content"
  };
  // Formulaires typés
  newToolForm;
  newToolRequestForm;
  specSboForm;
  // Données
  programs = signal([]);
  createdTool = signal(null);
  // États de chargement
  isCreatingTool = signal(false);
  isCreatingRequest = signal(false);
  // Enum pour le template
  RequestType = RequestType;
  editor;
  // public html: '';
  // private newTool: Tool;
  // ============================================================================
  // LIFECYCLE
  // ============================================================================
  ngOnInit() {
    this.initializeForms();
    this.loadPrograms();
    this.editor = new Editor();
  }
  // ============================================================================
  // INITIALISATION DES FORMULAIRES
  // ============================================================================
  initializeForms() {
    this.newToolForm = this.formBuilderService.createNewToolForm();
    this.specSboForm = this.formBuilderService.createSpecSBOForm();
    this.newToolRequestForm = this.formBuilderService.createToolRequestForm({
      type: RequestType.SBO,
      typeData: this.specSboForm
    });
    this.specSboForm.get("dateBesoin")?.valueChanges.subscribe((date) => {
      this.newToolRequestForm.get("dateBesoin")?.setValue(date, { emitEvent: false });
    });
  }
  // ============================================================================
  // CHARGEMENT DES DONNÉES
  // ============================================================================
  loadPrograms() {
    this.programService.getPrograms().subscribe({
      next: (programList) => {
        this.programs.set(programList);
      },
      error: (error) => {
        console.error("Erreur lors du chargement des programmes:", error);
      }
    });
  }
  // ============================================================================
  // ACTIONS
  // ============================================================================
  /**
   * Créer un nouvel outil en base de données
   */
  onCreateTool() {
    if (this.newToolForm.invalid) {
      this.newToolForm.markAllAsTouched();
      return;
    }
    this.isCreatingTool.set(true);
    const toolData = this.newToolForm.value;
    this.toolService.createTool(toolData).subscribe({
      next: (tool) => {
        console.log("Outil cr\xE9\xE9:", tool);
        this.createdTool.set(tool);
        this.isCreatingTool.set(false);
      },
      error: (error) => {
        console.error("Erreur lors de la cr\xE9ation de l'outil:", error);
        this.isCreatingTool.set(false);
      }
    });
  }
  /**
  * Créer une demande d'outillage complète
  */
  onCreateToolRequest() {
    if (!this.createdTool()) {
      console.error("Aucun outil cr\xE9\xE9");
      return;
    }
    if (this.newToolRequestForm.invalid || this.specSboForm.invalid) {
      this.newToolRequestForm.markAllAsTouched();
      this.specSboForm.markAllAsTouched();
      return;
    }
    this.isCreatingRequest.set(true);
    const toolRequest = {
      type: RequestType.SBO,
      createdAt: /* @__PURE__ */ new Date(),
      bloquantProd: this.newToolRequestForm.value.bloquantProd,
      dateBesoin: this.newToolRequestForm.value.dateBesoin,
      demandeur: this.authStore.user(),
      outillage: this.createdTool(),
      toolingNote: this.newToolRequestForm.value.toolingNote,
      typeData: this.specSboForm.value
    };
    this.toolRequestService.createToolRequest(toolRequest).subscribe({
      next: () => {
        console.log("Demande cr\xE9\xE9e avec succ\xE8s");
        this.isCreatingRequest.set(false);
        this.resetForms();
        this.router.navigate(["/tool-requests"]);
      },
      error: (error) => {
        console.error("Erreur lors de la cr\xE9ation de la demande:", error);
        this.isCreatingRequest.set(false);
      }
    });
  }
  /**
  * Réinitialiser tous les formulaires
  */
  resetForms() {
    this.newToolForm.reset();
    this.newToolRequestForm.reset({
      type: RequestType.SBO,
      bloquantProd: false
    });
    this.specSboForm.reset();
    this.createdTool.set(null);
  }
  // ============================================================================
  // GETTERS POUR LE TEMPLATE
  // ============================================================================
  get canCreateTool() {
    return this.newToolForm.valid && !this.isCreatingTool();
  }
  get canCreateRequest() {
    return this.createdTool() !== null && this.newToolRequestForm.valid && this.specSboForm.valid && !this.isCreatingRequest();
  }
};
NewToolPage = __decorate([
  Component({
    selector: "app-new-tool",
    template: new_tool_page_default,
    standalone: true,
    imports: [
      IonItem,
      IonAccordion,
      IonContent,
      IonAccordionGroup,
      IonItemGroup,
      IonLabel,
      IonText,
      IonFooter,
      IonToolbar,
      IonInput,
      IonButton,
      IonDatetime,
      IonSelect,
      IonSelectOption,
      ReactiveFormsModule,
      NgForOf,
      SboComponent,
      NgxEditorModule,
      JsonPipe
    ],
    styles: [new_tool_page_default2]
  })
], NewToolPage);

// angular:jit:template:file:src\app\tooling\components\tool-requests\tool-requests.page.html
var tool_requests_page_default = '<ion-header>\r\n  <ion-toolbar color=dark>\r\n    <ion-title>Liste des demandes</ion-title>\r\n    <ion-button color=secondary slot=end (click)="nextClick()" expand="block" fill="outline">\r\n      Charger plus de demandes\r\n    </ion-button>\r\n    <ion-button color=secondary slot=end (click)="reloadClick()">\r\n      <ion-icon slot="start" name="refresh-circle-outline"></ion-icon>\r\n      Recharger\r\n    </ion-button>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n<ion-content [fullscreen]="false" id="tool-request-content">\r\n\r\n<ng-container>\r\n    <!-- <app-table [datas]="toolRequests"></app-table> -->\r\n    <ion-grid class="ion-no-padding">\r\n      <ion-row>\r\n        <ion-col size="4">\r\n          <app-tool-request-filters [toolRequestFilters]="toolRequestFilters()"\r\n            (onFilterChange)="filterChange($event)"></app-tool-request-filters>\r\n        </ion-col>\r\n        <ion-col size="8">\r\n          <app-tool-request-table [toolRequestList]="filteredToolRequestList()"></app-tool-request-table>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ng-container>\r\n</ion-content>';

// angular:jit:style:file:src\app\tooling\components\tool-requests\tool-requests.page.scss
var tool_requests_page_default2 = "/* src/app/tooling/components/tool-requests/tool-requests.page.scss */\nion-grid {\n  height: 100%;\n}\nion-grid ion-row {\n  height: 100%;\n}\nion-grid ion-row ion-col:first-child {\n  border-right: 2px solid var(--ion-color-medium);\n}\n/*# sourceMappingURL=tool-requests.page.css.map */\n";

// angular:jit:template:file:src\app\tooling\components\tool-requests\tool-requests-components\tool-request-filters\tool-request-filters.component.html
var tool_request_filters_component_default = `<ion-toolbar>\r
  <ion-title>\r
    <ion-icon slot="start" name="filter-outline"></ion-icon>\r
    Filtres\r
  </ion-title>\r
</ion-toolbar>\r
\r
<ion-list>\r
  @for (filterItem of toolRequestFilters(); track $index) {\r
  <ion-item class="filter-item ion-margin">\r
    <ion-label>{{filterItem.name}}</ion-label>\r
    <ion-select class="filter" multiple="true" [placeholder]="'Filtre ' + filterItem.name"\r
      (ionChange)="filterChange(filterItem,$event)">\r
      <ion-select-option *ngFor="let filter of filterItem.options" [value]="filter">{{filter}}\r
      </ion-select-option>\r
    </ion-select>\r
  </ion-item>\r
}\r
</ion-list>\r
\r
\r
<ion-toolbar>\r
  <ion-buttons slot="start">\r
    <ion-button fill="solid" slot=end color="primary" slot=end (click)="resetFiltersClick()">\r
      Supprimer les filtres\r
    </ion-button>\r
  </ion-buttons>\r
</ion-toolbar>`;

// angular:jit:style:file:src\app\tooling\components\tool-requests\tool-requests-components\tool-request-filters\tool-request-filters.component.scss
var tool_request_filters_component_default2 = "/* src/app/tooling/components/tool-requests/tool-requests-components/tool-request-filters/tool-request-filters.component.scss */\n.filters {\n  display: flex;\n  max-width: 100%;\n  flex-wrap: wrap;\n  width: max-content;\n}\n.filters .filter-item {\n  width: auto;\n}\n.filters ion-item {\n  margin: 0;\n}\n/*# sourceMappingURL=tool-request-filters.component.css.map */\n";

// src/app/tooling/components/tool-requests/tool-requests-components/tool-request-filters/tool-request-filters.component.ts
var ToolRequestFiltersComponent = class ToolRequestFiltersComponent2 {
  toolRequestFilters = input([]);
  onFilterChange = output();
  ////////////////////////////////////////////////////
  //PROPRIETES
  ////////////////////////////////////////////////////
  activeFilters = [];
  resetFiltersClick() {
    this.activeFilters.forEach((filter) => {
      filter.value = null;
    });
    this.activeFilters = [];
    this.onFilterChange.emit({ columnProp: "reset", selectedValues: [] });
  }
  /**
    * Called on Filter change
    *
    * @param filter
    * @param event
    * @memberof ToolRequestsPage
    */
  filterChange(filter, event) {
    const selectedValues = event.detail.value;
    if (event.target && !this.activeFilters.includes(event.target)) {
      this.activeFilters.push(event.target);
    }
    this.onFilterChange.emit({
      columnProp: filter.columnProp,
      selectedValues: Array.isArray(selectedValues) ? selectedValues : [selectedValues]
    });
  }
  static propDecorators = {
    toolRequestFilters: [{ type: Input, args: [{ isSignal: true, alias: "toolRequestFilters", required: false, transform: void 0 }] }],
    onFilterChange: [{ type: Output, args: ["onFilterChange"] }]
  };
};
ToolRequestFiltersComponent = __decorate([
  Component({
    selector: "app-tool-request-filters",
    template: tool_request_filters_component_default,
    standalone: true,
    imports: [IonicModule, NgForOf],
    styles: [tool_request_filters_component_default2]
  })
], ToolRequestFiltersComponent);

// angular:jit:template:file:src\app\tooling\components\tool-requests\tool-requests-components\tool-request-table\tool-request-table.component.html
var tool_request_table_component_default = '<ng-container>\r\n  <ion-menu-toggle menu="tool-request-menu">\r\n    <ion-button>Click to open the menu</ion-button>\r\n  </ion-menu-toggle>\r\n  <ion-grid [fixed]="false">\r\n    <ion-row appHeaderRow>\r\n      <ion-col size="1"></ion-col>\r\n      <ion-col size="2">Statut</ion-col>\r\n      <ion-col size="8">Outillage</ion-col>\r\n      <ion-col size="4">Date de la demande</ion-col>\r\n      <ion-col size="3">Demandeur</ion-col>\r\n      <!-- <ion-col size="3" sort="">Date de besoin</ion-col> -->\r\n    </ion-row>\r\n    @for (toolRequest of toolRequestList(); track $index) {\r\n    <ion-row appDataRow [isUrgent]="toolRequest.bloquantProd" (click)="openRequestClick(toolRequest)">\r\n      <ion-col size="1">\r\n          <div class="circle" [style.border]="getBorder(toolRequest)">\r\n            {{toolRequest.id}}\r\n          </div>\r\n          </ion-col>\r\n        <ion-col size="2">{{ toolRequest.statut }}</ion-col>\r\n        <ion-col size="8">\r\n        <ion-label>OT{{toolRequest.outillage.sapToolNumber}} -\r\n          {{toolRequest.outillage.designation}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size="4"> {{toolRequest.createdAt | date :"EE dd MMM yyyy":"local" }}</ion-col>\r\n        <ion-col size="3" (click)="userClick()">\r\n          <ion-label>{{toolRequest.demandeur.nom}}</ion-label>\r\n          </ion-col>\r\n          <!-- <ion-col size="3"> -->\r\n          <!-- <ion-label *ngIf="request.controle"> {{request.controle.dateBesoin| date :"dd MMMM yyyy":"local"}}</ion-label>\r\n                            <ion-label *ngIf="request.maintenance"> {{request.maintenance.dateBesoin| date :"dd MMMM yyyy":"local"}}\r\n                            </ion-label> -->\r\n          <!-- </ion-col> -->\r\n          </ion-row>\r\n    }\r\n  </ion-grid>\r\n</ng-container>';

// angular:jit:style:file:src\app\tooling\components\tool-requests\tool-requests-components\tool-request-table\tool-request-table.component.scss
var tool_request_table_component_default2 = "/* src/app/tooling/components/tool-requests/tool-requests-components/tool-request-table/tool-request-table.component.scss */\n:host {\n  height: 100%;\n  overflow: hidden;\n}\nion-grid {\n  --ion-grid-columns: 18;\n}\nion-grid ion-row > ion-col {\n  padding: 10px 0;\n}\nion-grid ion-row > ion-col:first-child {\n  justify-content: center !important;\n}\n.circle {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=tool-request-table.component.css.map */\n";

// node_modules/@angular/material/fesm2022/sort.mjs
function getSortDuplicateSortableIdError(id) {
  return Error(`Cannot have two MatSortables with the same id (${id}).`);
}
function getSortHeaderNotContainedWithinSortError() {
  return Error(`MatSortHeader must be placed within a parent element with the MatSort directive.`);
}
function getSortHeaderMissingIdError() {
  return Error(`MatSortHeader must be provided with a unique id.`);
}
function getSortInvalidDirectionError(direction) {
  return Error(`${direction} is not a valid sort direction ('asc' or 'desc').`);
}
var MAT_SORT_DEFAULT_OPTIONS = new InjectionToken("MAT_SORT_DEFAULT_OPTIONS");
var MatSort = class _MatSort {
  /** The sort direction of the currently active MatSortable. */
  get direction() {
    return this._direction;
  }
  set direction(direction) {
    if (direction && direction !== "asc" && direction !== "desc" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getSortInvalidDirectionError(direction);
    }
    this._direction = direction;
  }
  constructor(_defaultOptions) {
    this._defaultOptions = _defaultOptions;
    this._initializedStream = new ReplaySubject(1);
    this.sortables = /* @__PURE__ */ new Map();
    this._stateChanges = new Subject();
    this.start = "asc";
    this._direction = "";
    this.disabled = false;
    this.sortChange = new EventEmitter();
    this.initialized = this._initializedStream;
  }
  /**
   * Register function to be used by the contained MatSortables. Adds the MatSortable to the
   * collection of MatSortables.
   */
  register(sortable) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!sortable.id) {
        throw getSortHeaderMissingIdError();
      }
      if (this.sortables.has(sortable.id)) {
        throw getSortDuplicateSortableIdError(sortable.id);
      }
    }
    this.sortables.set(sortable.id, sortable);
  }
  /**
   * Unregister function to be used by the contained MatSortables. Removes the MatSortable from the
   * collection of contained MatSortables.
   */
  deregister(sortable) {
    this.sortables.delete(sortable.id);
  }
  /** Sets the active sort id and determines the new sort direction. */
  sort(sortable) {
    if (this.active != sortable.id) {
      this.active = sortable.id;
      this.direction = sortable.start ? sortable.start : this.start;
    } else {
      this.direction = this.getNextSortDirection(sortable);
    }
    this.sortChange.emit({
      active: this.active,
      direction: this.direction
    });
  }
  /** Returns the next sort direction of the active sortable, checking for potential overrides. */
  getNextSortDirection(sortable) {
    if (!sortable) {
      return "";
    }
    const disableClear = sortable?.disableClear ?? this.disableClear ?? !!this._defaultOptions?.disableClear;
    let sortDirectionCycle = getSortDirectionCycle(sortable.start || this.start, disableClear);
    let nextDirectionIndex = sortDirectionCycle.indexOf(this.direction) + 1;
    if (nextDirectionIndex >= sortDirectionCycle.length) {
      nextDirectionIndex = 0;
    }
    return sortDirectionCycle[nextDirectionIndex];
  }
  ngOnInit() {
    this._initializedStream.next();
  }
  ngOnChanges() {
    this._stateChanges.next();
  }
  ngOnDestroy() {
    this._stateChanges.complete();
    this._initializedStream.complete();
  }
  static {
    this.\u0275fac = \u0275\u0275ngDeclareFactory({
      minVersion: "12.0.0",
      version: "18.2.0-next.2",
      ngImport: core_exports,
      type: _MatSort,
      deps: [{
        token: MAT_SORT_DEFAULT_OPTIONS,
        optional: true
      }],
      target: FactoryTarget.Directive
    });
  }
  static {
    this.\u0275dir = \u0275\u0275ngDeclareDirective({
      minVersion: "16.1.0",
      version: "18.2.0-next.2",
      type: _MatSort,
      isStandalone: true,
      selector: "[matSort]",
      inputs: {
        active: ["matSortActive", "active"],
        start: ["matSortStart", "start"],
        direction: ["matSortDirection", "direction"],
        disableClear: ["matSortDisableClear", "disableClear", booleanAttribute],
        disabled: ["matSortDisabled", "disabled", booleanAttribute]
      },
      outputs: {
        sortChange: "matSortChange"
      },
      host: {
        classAttribute: "mat-sort"
      },
      exportAs: ["matSort"],
      usesOnChanges: true,
      ngImport: core_exports
    });
  }
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: MatSort,
  decorators: [{
    type: Directive,
    args: [{
      selector: "[matSort]",
      exportAs: "matSort",
      host: {
        "class": "mat-sort"
      },
      standalone: true
    }]
  }],
  ctorParameters: () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_SORT_DEFAULT_OPTIONS]
    }]
  }],
  propDecorators: {
    active: [{
      type: Input,
      args: ["matSortActive"]
    }],
    start: [{
      type: Input,
      args: ["matSortStart"]
    }],
    direction: [{
      type: Input,
      args: ["matSortDirection"]
    }],
    disableClear: [{
      type: Input,
      args: [{
        alias: "matSortDisableClear",
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        alias: "matSortDisabled",
        transform: booleanAttribute
      }]
    }],
    sortChange: [{
      type: Output,
      args: ["matSortChange"]
    }]
  }
});
function getSortDirectionCycle(start, disableClear) {
  let sortOrder = ["asc", "desc"];
  if (start == "desc") {
    sortOrder.reverse();
  }
  if (!disableClear) {
    sortOrder.push("");
  }
  return sortOrder;
}
var SORT_ANIMATION_TRANSITION = AnimationDurations.ENTERING + " " + AnimationCurves.STANDARD_CURVE;
var matSortAnimations = {
  /** Animation that moves the sort indicator. */
  indicator: trigger("indicator", [
    state("active-asc, asc", style({
      transform: "translateY(0px)"
    })),
    // 10px is the height of the sort indicator, minus the width of the pointers
    state("active-desc, desc", style({
      transform: "translateY(10px)"
    })),
    transition("active-asc <=> active-desc", animate(SORT_ANIMATION_TRANSITION))
  ]),
  /** Animation that rotates the left pointer of the indicator based on the sorting direction. */
  leftPointer: trigger("leftPointer", [state("active-asc, asc", style({
    transform: "rotate(-45deg)"
  })), state("active-desc, desc", style({
    transform: "rotate(45deg)"
  })), transition("active-asc <=> active-desc", animate(SORT_ANIMATION_TRANSITION))]),
  /** Animation that rotates the right pointer of the indicator based on the sorting direction. */
  rightPointer: trigger("rightPointer", [state("active-asc, asc", style({
    transform: "rotate(45deg)"
  })), state("active-desc, desc", style({
    transform: "rotate(-45deg)"
  })), transition("active-asc <=> active-desc", animate(SORT_ANIMATION_TRANSITION))]),
  /** Animation that controls the arrow opacity. */
  arrowOpacity: trigger("arrowOpacity", [
    state("desc-to-active, asc-to-active, active", style({
      opacity: 1
    })),
    state("desc-to-hint, asc-to-hint, hint", style({
      opacity: 0.54
    })),
    state("hint-to-desc, active-to-desc, desc, hint-to-asc, active-to-asc, asc, void", style({
      opacity: 0
    })),
    // Transition between all states except for immediate transitions
    transition("* => asc, * => desc, * => active, * => hint, * => void", animate("0ms")),
    transition("* <=> *", animate(SORT_ANIMATION_TRANSITION))
  ]),
  /**
   * Animation for the translation of the arrow as a whole. States are separated into two
   * groups: ones with animations and others that are immediate. Immediate states are asc, desc,
   * peek, and active. The other states define a specific animation (source-to-destination)
   * and are determined as a function of their prev user-perceived state and what the next state
   * should be.
   */
  arrowPosition: trigger("arrowPosition", [
    // Hidden Above => Hint Center
    transition("* => desc-to-hint, * => desc-to-active", animate(SORT_ANIMATION_TRANSITION, keyframes([style({
      transform: "translateY(-25%)"
    }), style({
      transform: "translateY(0)"
    })]))),
    // Hint Center => Hidden Below
    transition("* => hint-to-desc, * => active-to-desc", animate(SORT_ANIMATION_TRANSITION, keyframes([style({
      transform: "translateY(0)"
    }), style({
      transform: "translateY(25%)"
    })]))),
    // Hidden Below => Hint Center
    transition("* => asc-to-hint, * => asc-to-active", animate(SORT_ANIMATION_TRANSITION, keyframes([style({
      transform: "translateY(25%)"
    }), style({
      transform: "translateY(0)"
    })]))),
    // Hint Center => Hidden Above
    transition("* => hint-to-asc, * => active-to-asc", animate(SORT_ANIMATION_TRANSITION, keyframes([style({
      transform: "translateY(0)"
    }), style({
      transform: "translateY(-25%)"
    })]))),
    state("desc-to-hint, asc-to-hint, hint, desc-to-active, asc-to-active, active", style({
      transform: "translateY(0)"
    })),
    state("hint-to-desc, active-to-desc, desc", style({
      transform: "translateY(-25%)"
    })),
    state("hint-to-asc, active-to-asc, asc", style({
      transform: "translateY(25%)"
    }))
  ]),
  /** Necessary trigger that calls animate on children animations. */
  allowChildren: trigger("allowChildren", [transition("* <=> *", [query("@*", animateChild(), {
    optional: true
  })])])
};
var MatSortHeaderIntl = class _MatSortHeaderIntl {
  constructor() {
    this.changes = new Subject();
  }
  static {
    this.\u0275fac = \u0275\u0275ngDeclareFactory({
      minVersion: "12.0.0",
      version: "18.2.0-next.2",
      ngImport: core_exports,
      type: _MatSortHeaderIntl,
      deps: [],
      target: FactoryTarget.Injectable
    });
  }
  static {
    this.\u0275prov = \u0275\u0275ngDeclareInjectable({
      minVersion: "12.0.0",
      version: "18.2.0-next.2",
      ngImport: core_exports,
      type: _MatSortHeaderIntl,
      providedIn: "root"
    });
  }
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: MatSortHeaderIntl,
  decorators: [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }]
});
function MAT_SORT_HEADER_INTL_PROVIDER_FACTORY(parentIntl) {
  return parentIntl || new MatSortHeaderIntl();
}
var MAT_SORT_HEADER_INTL_PROVIDER = {
  // If there is already an MatSortHeaderIntl available, use that. Otherwise, provide a new one.
  provide: MatSortHeaderIntl,
  deps: [[new Optional(), new SkipSelf(), MatSortHeaderIntl]],
  useFactory: MAT_SORT_HEADER_INTL_PROVIDER_FACTORY
};
var MatSortHeader = class _MatSortHeader {
  /**
   * Description applied to MatSortHeader's button element with aria-describedby. This text should
   * describe the action that will occur when the user clicks the sort header.
   */
  get sortActionDescription() {
    return this._sortActionDescription;
  }
  set sortActionDescription(value) {
    this._updateSortActionDescription(value);
  }
  constructor(_intl, _changeDetectorRef, _sort, _columnDef, _focusMonitor, _elementRef, _ariaDescriber, defaultOptions2) {
    this._intl = _intl;
    this._changeDetectorRef = _changeDetectorRef;
    this._sort = _sort;
    this._columnDef = _columnDef;
    this._focusMonitor = _focusMonitor;
    this._elementRef = _elementRef;
    this._ariaDescriber = _ariaDescriber;
    this._showIndicatorHint = false;
    this._viewState = {};
    this._arrowDirection = "";
    this._disableViewStateAnimation = false;
    this.arrowPosition = "after";
    this.disabled = false;
    this._sortActionDescription = "Sort";
    if (!_sort && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getSortHeaderNotContainedWithinSortError();
    }
    if (defaultOptions2?.arrowPosition) {
      this.arrowPosition = defaultOptions2?.arrowPosition;
    }
    this._handleStateChanges();
  }
  ngOnInit() {
    if (!this.id && this._columnDef) {
      this.id = this._columnDef.name;
    }
    this._updateArrowDirection();
    this._setAnimationTransitionState({
      toState: this._isSorted() ? "active" : this._arrowDirection
    });
    this._sort.register(this);
    this._sortButton = this._elementRef.nativeElement.querySelector(".mat-sort-header-container");
    this._updateSortActionDescription(this._sortActionDescription);
  }
  ngAfterViewInit() {
    this._focusMonitor.monitor(this._elementRef, true).subscribe((origin) => {
      const newState = !!origin;
      if (newState !== this._showIndicatorHint) {
        this._setIndicatorHintVisible(newState);
        this._changeDetectorRef.markForCheck();
      }
    });
  }
  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
    this._sort.deregister(this);
    this._rerenderSubscription.unsubscribe();
    if (this._sortButton) {
      this._ariaDescriber?.removeDescription(this._sortButton, this._sortActionDescription);
    }
  }
  /**
   * Sets the "hint" state such that the arrow will be semi-transparently displayed as a hint to the
   * user showing what the active sort will become. If set to false, the arrow will fade away.
   */
  _setIndicatorHintVisible(visible) {
    if (this._isDisabled() && visible) {
      return;
    }
    this._showIndicatorHint = visible;
    if (!this._isSorted()) {
      this._updateArrowDirection();
      if (this._showIndicatorHint) {
        this._setAnimationTransitionState({
          fromState: this._arrowDirection,
          toState: "hint"
        });
      } else {
        this._setAnimationTransitionState({
          fromState: "hint",
          toState: this._arrowDirection
        });
      }
    }
  }
  /**
   * Sets the animation transition view state for the arrow's position and opacity. If the
   * `disableViewStateAnimation` flag is set to true, the `fromState` will be ignored so that
   * no animation appears.
   */
  _setAnimationTransitionState(viewState) {
    this._viewState = viewState || {};
    if (this._disableViewStateAnimation) {
      this._viewState = {
        toState: viewState.toState
      };
    }
  }
  /** Triggers the sort on this sort header and removes the indicator hint. */
  _toggleOnInteraction() {
    this._sort.sort(this);
    if (this._viewState.toState === "hint" || this._viewState.toState === "active") {
      this._disableViewStateAnimation = true;
    }
  }
  _handleClick() {
    if (!this._isDisabled()) {
      this._sort.sort(this);
    }
  }
  _handleKeydown(event) {
    if (!this._isDisabled() && (event.keyCode === SPACE || event.keyCode === ENTER)) {
      event.preventDefault();
      this._toggleOnInteraction();
    }
  }
  /** Whether this MatSortHeader is currently sorted in either ascending or descending order. */
  _isSorted() {
    return this._sort.active == this.id && (this._sort.direction === "asc" || this._sort.direction === "desc");
  }
  /** Returns the animation state for the arrow direction (indicator and pointers). */
  _getArrowDirectionState() {
    return `${this._isSorted() ? "active-" : ""}${this._arrowDirection}`;
  }
  /** Returns the arrow position state (opacity, translation). */
  _getArrowViewState() {
    const fromState = this._viewState.fromState;
    return (fromState ? `${fromState}-to-` : "") + this._viewState.toState;
  }
  /**
   * Updates the direction the arrow should be pointing. If it is not sorted, the arrow should be
   * facing the start direction. Otherwise if it is sorted, the arrow should point in the currently
   * active sorted direction. The reason this is updated through a function is because the direction
   * should only be changed at specific times - when deactivated but the hint is displayed and when
   * the sort is active and the direction changes. Otherwise the arrow's direction should linger
   * in cases such as the sort becoming deactivated but we want to animate the arrow away while
   * preserving its direction, even though the next sort direction is actually different and should
   * only be changed once the arrow displays again (hint or activation).
   */
  _updateArrowDirection() {
    this._arrowDirection = this._isSorted() ? this._sort.direction : this.start || this._sort.start;
  }
  _isDisabled() {
    return this._sort.disabled || this.disabled;
  }
  /**
   * Gets the aria-sort attribute that should be applied to this sort header. If this header
   * is not sorted, returns null so that the attribute is removed from the host element. Aria spec
   * says that the aria-sort property should only be present on one header at a time, so removing
   * ensures this is true.
   */
  _getAriaSortAttribute() {
    if (!this._isSorted()) {
      return "none";
    }
    return this._sort.direction == "asc" ? "ascending" : "descending";
  }
  /** Whether the arrow inside the sort header should be rendered. */
  _renderArrow() {
    return !this._isDisabled() || this._isSorted();
  }
  _updateSortActionDescription(newDescription) {
    if (this._sortButton) {
      this._ariaDescriber?.removeDescription(this._sortButton, this._sortActionDescription);
      this._ariaDescriber?.describe(this._sortButton, newDescription);
    }
    this._sortActionDescription = newDescription;
  }
  /** Handles changes in the sorting state. */
  _handleStateChanges() {
    this._rerenderSubscription = merge(this._sort.sortChange, this._sort._stateChanges, this._intl.changes).subscribe(() => {
      if (this._isSorted()) {
        this._updateArrowDirection();
        if (this._viewState.toState === "hint" || this._viewState.toState === "active") {
          this._disableViewStateAnimation = true;
        }
        this._setAnimationTransitionState({
          fromState: this._arrowDirection,
          toState: "active"
        });
        this._showIndicatorHint = false;
      }
      if (!this._isSorted() && this._viewState && this._viewState.toState === "active") {
        this._disableViewStateAnimation = false;
        this._setAnimationTransitionState({
          fromState: "active",
          toState: this._arrowDirection
        });
      }
      this._changeDetectorRef.markForCheck();
    });
  }
  static {
    this.\u0275fac = \u0275\u0275ngDeclareFactory({
      minVersion: "12.0.0",
      version: "18.2.0-next.2",
      ngImport: core_exports,
      type: _MatSortHeader,
      deps: [{
        token: MatSortHeaderIntl
      }, {
        token: ChangeDetectorRef
      }, {
        token: MatSort,
        optional: true
      }, {
        token: "MAT_SORT_HEADER_COLUMN_DEF",
        optional: true
      }, {
        token: FocusMonitor
      }, {
        token: ElementRef
      }, {
        token: AriaDescriber,
        optional: true
      }, {
        token: MAT_SORT_DEFAULT_OPTIONS,
        optional: true
      }],
      target: FactoryTarget.Component
    });
  }
  static {
    this.\u0275cmp = \u0275\u0275ngDeclareComponent({
      minVersion: "17.0.0",
      version: "18.2.0-next.2",
      type: _MatSortHeader,
      isStandalone: true,
      selector: "[mat-sort-header]",
      inputs: {
        id: ["mat-sort-header", "id"],
        arrowPosition: "arrowPosition",
        start: "start",
        disabled: ["disabled", "disabled", booleanAttribute],
        sortActionDescription: "sortActionDescription",
        disableClear: ["disableClear", "disableClear", booleanAttribute]
      },
      host: {
        listeners: {
          "click": "_handleClick()",
          "keydown": "_handleKeydown($event)",
          "mouseenter": "_setIndicatorHintVisible(true)",
          "mouseleave": "_setIndicatorHintVisible(false)"
        },
        properties: {
          "attr.aria-sort": "_getAriaSortAttribute()",
          "class.mat-sort-header-disabled": "_isDisabled()"
        },
        classAttribute: "mat-sort-header"
      },
      exportAs: ["matSortHeader"],
      ngImport: core_exports,
      template: '<!--\n  We set the `tabindex` on an element inside the table header, rather than the header itself,\n  because of a bug in NVDA where having a `tabindex` on a `th` breaks keyboard navigation in the\n  table (see https://github.com/nvaccess/nvda/issues/7718). This allows for the header to both\n  be focusable, and have screen readers read out its `aria-sort` state. We prefer this approach\n  over having a button with an `aria-label` inside the header, because the button\'s `aria-label`\n  will be read out as the user is navigating the table\'s cell (see #13012).\n\n  The approach is based off of: https://dequeuniversity.com/library/aria/tables/sf-sortable-grid\n-->\n<div class="mat-sort-header-container mat-focus-indicator"\n     [class.mat-sort-header-sorted]="_isSorted()"\n     [class.mat-sort-header-position-before]="arrowPosition === \'before\'"\n     [attr.tabindex]="_isDisabled() ? null : 0"\n     [attr.role]="_isDisabled() ? null : \'button\'">\n\n  <!--\n    TODO(crisbeto): this div isn\'t strictly necessary, but we have to keep it due to a large\n    number of screenshot diff failures. It should be removed eventually. Note that the difference\n    isn\'t visible with a shorter header, but once it breaks up into multiple lines, this element\n    causes it to be center-aligned, whereas removing it will keep the text to the left.\n  -->\n  <div class="mat-sort-header-content">\n    <ng-content></ng-content>\n  </div>\n\n  <!-- Disable animations while a current animation is running -->\n  @if (_renderArrow()) {\n    <div class="mat-sort-header-arrow"\n        [@arrowOpacity]="_getArrowViewState()"\n        [@arrowPosition]="_getArrowViewState()"\n        [@allowChildren]="_getArrowDirectionState()"\n        (@arrowPosition.start)="_disableViewStateAnimation = true"\n        (@arrowPosition.done)="_disableViewStateAnimation = false">\n      <div class="mat-sort-header-stem"></div>\n      <div class="mat-sort-header-indicator" [@indicator]="_getArrowDirectionState()">\n        <div class="mat-sort-header-pointer-left" [@leftPointer]="_getArrowDirectionState()"></div>\n        <div class="mat-sort-header-pointer-right" [@rightPointer]="_getArrowDirectionState()"></div>\n        <div class="mat-sort-header-pointer-middle"></div>\n      </div>\n    </div>\n  }\n</div>\n',
      styles: [".mat-sort-header-container{display:flex;cursor:pointer;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-container::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-sort-header-content{text-align:center;display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;color:var(--mat-sort-arrow-color, var(--mat-app-on-surface));opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}"],
      animations: [matSortAnimations.indicator, matSortAnimations.leftPointer, matSortAnimations.rightPointer, matSortAnimations.arrowOpacity, matSortAnimations.arrowPosition, matSortAnimations.allowChildren],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None
    });
  }
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: MatSortHeader,
  decorators: [{
    type: Component,
    args: [{
      selector: "[mat-sort-header]",
      exportAs: "matSortHeader",
      host: {
        "class": "mat-sort-header",
        "(click)": "_handleClick()",
        "(keydown)": "_handleKeydown($event)",
        "(mouseenter)": "_setIndicatorHintVisible(true)",
        "(mouseleave)": "_setIndicatorHintVisible(false)",
        "[attr.aria-sort]": "_getAriaSortAttribute()",
        "[class.mat-sort-header-disabled]": "_isDisabled()"
      },
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [matSortAnimations.indicator, matSortAnimations.leftPointer, matSortAnimations.rightPointer, matSortAnimations.arrowOpacity, matSortAnimations.arrowPosition, matSortAnimations.allowChildren],
      standalone: true,
      template: '<!--\n  We set the `tabindex` on an element inside the table header, rather than the header itself,\n  because of a bug in NVDA where having a `tabindex` on a `th` breaks keyboard navigation in the\n  table (see https://github.com/nvaccess/nvda/issues/7718). This allows for the header to both\n  be focusable, and have screen readers read out its `aria-sort` state. We prefer this approach\n  over having a button with an `aria-label` inside the header, because the button\'s `aria-label`\n  will be read out as the user is navigating the table\'s cell (see #13012).\n\n  The approach is based off of: https://dequeuniversity.com/library/aria/tables/sf-sortable-grid\n-->\n<div class="mat-sort-header-container mat-focus-indicator"\n     [class.mat-sort-header-sorted]="_isSorted()"\n     [class.mat-sort-header-position-before]="arrowPosition === \'before\'"\n     [attr.tabindex]="_isDisabled() ? null : 0"\n     [attr.role]="_isDisabled() ? null : \'button\'">\n\n  <!--\n    TODO(crisbeto): this div isn\'t strictly necessary, but we have to keep it due to a large\n    number of screenshot diff failures. It should be removed eventually. Note that the difference\n    isn\'t visible with a shorter header, but once it breaks up into multiple lines, this element\n    causes it to be center-aligned, whereas removing it will keep the text to the left.\n  -->\n  <div class="mat-sort-header-content">\n    <ng-content></ng-content>\n  </div>\n\n  <!-- Disable animations while a current animation is running -->\n  @if (_renderArrow()) {\n    <div class="mat-sort-header-arrow"\n        [@arrowOpacity]="_getArrowViewState()"\n        [@arrowPosition]="_getArrowViewState()"\n        [@allowChildren]="_getArrowDirectionState()"\n        (@arrowPosition.start)="_disableViewStateAnimation = true"\n        (@arrowPosition.done)="_disableViewStateAnimation = false">\n      <div class="mat-sort-header-stem"></div>\n      <div class="mat-sort-header-indicator" [@indicator]="_getArrowDirectionState()">\n        <div class="mat-sort-header-pointer-left" [@leftPointer]="_getArrowDirectionState()"></div>\n        <div class="mat-sort-header-pointer-right" [@rightPointer]="_getArrowDirectionState()"></div>\n        <div class="mat-sort-header-pointer-middle"></div>\n      </div>\n    </div>\n  }\n</div>\n',
      styles: [".mat-sort-header-container{display:flex;cursor:pointer;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-container::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-sort-header-content{text-align:center;display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;color:var(--mat-sort-arrow-color, var(--mat-app-on-surface));opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}"]
    }]
  }],
  ctorParameters: () => [{
    type: MatSortHeaderIntl
  }, {
    type: ChangeDetectorRef
  }, {
    type: MatSort,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: ["MAT_SORT_HEADER_COLUMN_DEF"]
    }, {
      type: Optional
    }]
  }, {
    type: FocusMonitor
  }, {
    type: ElementRef
  }, {
    type: AriaDescriber,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_SORT_DEFAULT_OPTIONS]
    }]
  }],
  propDecorators: {
    id: [{
      type: Input,
      args: ["mat-sort-header"]
    }],
    arrowPosition: [{
      type: Input
    }],
    start: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    sortActionDescription: [{
      type: Input
    }],
    disableClear: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  }
});
var MatSortModule = class _MatSortModule {
  static {
    this.\u0275fac = \u0275\u0275ngDeclareFactory({
      minVersion: "12.0.0",
      version: "18.2.0-next.2",
      ngImport: core_exports,
      type: _MatSortModule,
      deps: [],
      target: FactoryTarget.NgModule
    });
  }
  static {
    this.\u0275mod = \u0275\u0275ngDeclareNgModule({
      minVersion: "14.0.0",
      version: "18.2.0-next.2",
      ngImport: core_exports,
      type: _MatSortModule,
      imports: [MatCommonModule, MatSort, MatSortHeader],
      exports: [MatSort, MatSortHeader]
    });
  }
  static {
    this.\u0275inj = \u0275\u0275ngDeclareInjector({
      minVersion: "12.0.0",
      version: "18.2.0-next.2",
      ngImport: core_exports,
      type: _MatSortModule,
      providers: [MAT_SORT_HEADER_INTL_PROVIDER],
      imports: [MatCommonModule]
    });
  }
};
\u0275\u0275ngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "18.2.0-next.2",
  ngImport: core_exports,
  type: MatSortModule,
  decorators: [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatSort, MatSortHeader],
      exports: [MatSort, MatSortHeader],
      providers: [MAT_SORT_HEADER_INTL_PROVIDER]
    }]
  }]
});

// src/app/tooling/components/tool-requests/tool-requests-data/tool-requests.service.ts
var ToolRequestsService = class ToolRequestsService2 {
  ////////////////////////////////////////////////////////////////
  // INJECTION DE DEPENDANCES
  ////////////////////////////////////////////////////////////////
  http = inject(HttpClient);
  requestsAreLoading;
  filtersList = new Subject();
  allToolRequests = new BehaviorSubject([]);
  filters = new BehaviorSubject([]);
  toolRequestsList = [];
  pageCounter = new BehaviorSubject(1);
  constructor() {
  }
  getAllToolRequests() {
    return this.http.get(`${environment.toolApi}demandes`).pipe(share());
  }
  getToolRequests(page = 1, itemsPerPage = 25) {
    return this.http.get(`api/tools/request`, { params: { page, itemsPerPage } }).pipe(share());
  }
  getNextPage() {
    let currentPage = this.pageCounter.getValue();
    this.pageCounter.next(currentPage + 1);
  }
  addFilter(filterToAdd) {
    const previousFilters = this.filters.getValue();
    const duplicateFilterIndex = previousFilters.findIndex((filterToTest) => filterToTest.data === filterToAdd.data);
    if (duplicateFilterIndex !== -1) {
      previousFilters[duplicateFilterIndex] = filterToAdd;
    } else {
      previousFilters.push(filterToAdd);
    }
    this.filters.next(previousFilters);
  }
  resetFilters() {
    this.filters.next([]);
  }
  static ctorParameters = () => [];
};
ToolRequestsService = __decorate([
  Injectable({ providedIn: "root" })
], ToolRequestsService);

// src/app/tooling/components/tool-requests/tool-requests-components/tool-request-table/tool-request-table.component.ts
var ToolRequestTableComponent = class ToolRequestTableComponent2 {
  navCtrl;
  authGuard;
  toolRequestsService;
  toolRequestList = input([]);
  //TYPE
  RequestType = RequestType;
  sort;
  newToolRequestsList$;
  displayedRequestColumns = ["statut", "id", "tool", "createdAt", "userCreat", "needDate", "buttons"];
  isAdmin = false;
  constructor(navCtrl, authGuard, toolRequestsService) {
    this.navCtrl = navCtrl;
    this.authGuard = authGuard;
    this.toolRequestsService = toolRequestsService;
    this.newToolRequestsList$ = this.toolRequestsService.filtersList.asObservable();
  }
  openRequestClick(requestToOpen) {
    if (requestToOpen.type === RequestType.CONTROLE) {
      this.navCtrl.navigateForward("tooling/3d/" + requestToOpen.id);
    }
    if (requestToOpen.type === RequestType.MAINTENANCE) {
      this.navCtrl.navigateForward("tooling/repair/" + requestToOpen.id);
    }
  }
  ngOnInit() {
    this.isAdmin = this.authGuard.isRole(["ROLE_ADMIN"]);
  }
  userClick() {
  }
  // TODO créer une directive plus propre plutot que ce code cela permettre d'enlever
  // les IF du template pour choisir entre maintenance et controle
  openControlClick(request) {
    this.navCtrl.navigateForward("tooling/3D-tool/" + request.id);
  }
  openMaintenanceClick(request) {
    this.navCtrl.navigateForward("tooling/repair-tool/" + request.id);
  }
  removeRequestClick(request) {
  }
  // TODO Créer une directive pour la bordure
  getBorder(request) {
    if (this.getType(request) === "controle") {
      return "solid 2px lawngreen";
    } else if (this.getType(request) === "maintenance") {
      return "solid 2px yellow";
    }
  }
  getType(request) {
    if (typeof request === "string") {
      return request;
    }
    if (request.type === RequestType.CONTROLE) {
      return "controle";
    } else if (request.type === RequestType.MAINTENANCE) {
      return "maintenance";
    }
  }
  static ctorParameters = () => [
    { type: NavController },
    { type: RoleGuard },
    { type: ToolRequestsService }
  ];
  static propDecorators = {
    toolRequestList: [{ type: Input, args: [{ isSignal: true, alias: "toolRequestList", required: false, transform: void 0 }] }],
    sort: [{ type: ViewChild, args: [MatSort] }]
  };
};
ToolRequestTableComponent = __decorate([
  Component({
    selector: "app-tool-request-table",
    template: tool_request_table_component_default,
    animations: [
      trigger("openClose", [
        // animation triggers go here
        state("open", style({
          backgroundColor: "DarkOrange",
          opacity: "0.7"
        }))
      ])
    ],
    standalone: true,
    imports: [IonicModule, HeaderRowDirective, DataRowDirective, DatePipe],
    styles: [tool_request_table_component_default2]
  })
], ToolRequestTableComponent);

// src/app/_interfaces/tooling/tool-request-filters.ts
var filterSelectObjects = [
  {
    name: "Statut",
    columnProp: "statut",
    options: []
  },
  {
    name: "Type de demande",
    columnProp: "type",
    options: []
  },
  {
    name: "Demandeur",
    columnProp: "demandeur",
    options: []
  },
  {
    name: "Outillage",
    columnProp: "outillage",
    options: []
  }
];

// src/app/tooling/components/tool-requests/tool-requests-components/tool-request-filters/tool-request-filters.service.ts
var ToolRequestFilterService = class ToolRequestFilterService2 {
  ////////////////////////////////////////////////////
  //INJECTION DEPENDANCES
  ////////////////////////////////////////////////////
  toolRequestService = inject(ToolRequestService);
  ////////////////////////////////////////////////////
  //PROPRIETES
  ////////////////////////////////////////////////////
  _filters = filterSelectObjects;
  filters = computed(() => {
    const filteredList = this.filteredToolRequestList();
    const activeFilters = this.selectedFilters();
    return this._filters.map((filter) => {
      const updatedFilter = __spreadProps(__spreadValues({}, filter), {
        options: []
      });
      const uniqueOptions = /* @__PURE__ */ new Set();
      filteredList.forEach((toolRequest) => {
        const compareElement = this.getCompareElement(filter.columnProp, toolRequest);
        if (compareElement) {
          uniqueOptions.add(compareElement);
        }
      });
      updatedFilter.options = Array.from(uniqueOptions).sort();
      const currentSelection = activeFilters[filter.columnProp];
      if (currentSelection) {
        currentSelection.forEach((selectedValue) => {
          if (!uniqueOptions.has(selectedValue)) {
            uniqueOptions.add(selectedValue);
          }
        });
        updatedFilter.options = Array.from(uniqueOptions).sort();
      }
      return updatedFilter;
    });
  });
  filteredToolRequestList = computed(() => {
    const allRequests = this.toolRequestService.toolRequestList();
    const activeFilters = this.selectedFilters();
    if (Object.keys(activeFilters).length === 0) {
      return allRequests;
    }
    return allRequests.filter((request) => {
      return Object.entries(activeFilters).every(([key, selectedValues]) => {
        if (!selectedValues || selectedValues.length === 0)
          return true;
        const prop = key;
        const compareElement = this.getCompareElement(prop, request);
        return selectedValues.includes(compareElement || "");
      });
    });
  });
  // ============================================================================
  // FILTRES APPLIQUÉS
  // ============================================================================
  selectedFilters = signal({});
  constructor() {
    console.log("hello toolRequestFilterService");
  }
  // ============================================================================
  // MÉTHODES PUBLIQUES
  // ============================================================================
  updateFilter(columnProp, selectedValues) {
    const currentFilters = __spreadValues({}, this.selectedFilters());
    if (selectedValues.length === 0) {
      delete currentFilters[columnProp];
    } else {
      currentFilters[columnProp] = selectedValues;
    }
    this.selectedFilters.set(currentFilters);
  }
  resetFilters() {
    this.selectedFilters.set({});
  }
  // ============================================================================
  // MÉTHODE PRIVÉE
  // ============================================================================
  getCompareElement(filterProp, toolRequest) {
    if (filterProp === "outillage") {
      return toolRequest.outillage.sapToolNumber;
    }
    if (filterProp === "demandeur") {
      return toolRequest.demandeur.nom;
    }
    return toolRequest[filterProp];
  }
  static ctorParameters = () => [];
};
ToolRequestFilterService = __decorate([
  Injectable({ providedIn: "root" })
], ToolRequestFilterService);

// src/app/tooling/components/tool-requests/tool-requests.page.ts
var ToolRequestsPage = class ToolRequestsPage2 {
  // ============================================================================
  // INJECTION DE DÉPENDANCES
  // ============================================================================
  toolRequestFilterService = inject(ToolRequestFilterService);
  // ============================================================================
  // PROPRIÉTÉS
  // ============================================================================
  filteredToolRequestList = this.toolRequestFilterService.filteredToolRequestList;
  toolRequestFilters = this.toolRequestFilterService.filters;
  isAdmin = false;
  constructor() {
    console.log("hello toolRequestPage");
  }
  /**
     * Gère les changements de filtres venant du composant enfant
     */
  filterChange(event) {
    if (event.columnProp === "reset") {
      this.toolRequestFilterService.resetFilters();
    } else {
      this.toolRequestFilterService.updateFilter(event.columnProp, event.selectedValues);
    }
  }
  reloadClick() {
  }
  nextClick() {
  }
  static ctorParameters = () => [];
};
ToolRequestsPage = __decorate([
  Component({
    template: tool_requests_page_default,
    standalone: true,
    imports: [
      IonHeader,
      IonToolbar,
      IonTitle,
      IonButton,
      IonIcon,
      IonContent,
      IonGrid,
      IonRow,
      IonCol,
      ToolRequestFiltersComponent,
      ToolRequestTableComponent
    ],
    styles: [tool_requests_page_default2]
  })
  /* TODO créer un observable pour écouter tout mouvement de demandes
  * => l'ordinateur qui affiche les datas stats ou listes des demandes seront màj automatiquement
  */
], ToolRequestsPage);

// angular:jit:template:file:src\app\tooling\components\tool-list\tool-list.page.html
var tool_list_page_default = '<ion-header>\r\n    <ion-toolbar>\r\n        <ion-title>toolList</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-grid fixed>\r\n        <ion-row class="header-row">\r\n            <ion-col size="6">header test</ion-col>\r\n            <ion-col size="6">header test</ion-col>\r\n        </ion-row>\r\n        <ion-row class="request-row" *ngFor="let request of requestList">\r\n            <ion-col size="6">Test</ion-col>\r\n            <ion-col size="6">Test</ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n</ion-content>\r\n';

// angular:jit:style:file:src\app\tooling\components\tool-list\tool-list.page.scss
var tool_list_page_default2 = "/* src/app/tooling/components/tool-list/tool-list.page.scss */\n/*# sourceMappingURL=tool-list.page.css.map */\n";

// src/app/tooling/components/tool-list/tool-list.page.ts
var ToolListPage = class ToolListPage2 {
  toolRequestService;
  alertControleService;
  requestList;
  constructor(toolRequestService, alertControleService) {
    this.toolRequestService = toolRequestService;
    this.alertControleService = alertControleService;
  }
  ngOnInit() {
    this.updateToolList();
  }
  updateToolList() {
  }
  static ctorParameters = () => [
    { type: ToolRequestService },
    { type: AlertService }
  ];
};
ToolListPage = __decorate([
  Component({
    selector: "app-tool-list",
    template: tool_list_page_default,
    standalone: true,
    imports: [IonicModule, NgForOf],
    styles: [tool_list_page_default2]
  })
], ToolListPage);

// angular:jit:template:file:src\app\tooling\components\maintenance-reparation\maintenance-reparation.page.html
var maintenance_reparation_page_default = '<ion-header>\r\n  <ion-toolbar color=dark>\r\n    <ion-title>{{pageTitle()}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]="true">\r\n  <div class="content-container">\r\n    <!-- <form class="main-form" style="display:flex;" [formGroup]=""> -->\r\n    <div class="left-side">\r\n      <app-maint-repair-form [(maintForm)]="maintenanceForm" [(toolRequestForm)]="toolRequestForm">\r\n      </app-maint-repair-form>\r\n    </div>\r\n    <!-- </form> -->\r\n    <!-- <app-spec-maintenance-reparation *ngIf="toolRequest" [toolRequest]="toolRequest"></app-spec-maintenance-reparation> -->\r\n  </div>\r\n\r\n</ion-content>\r\n<ion-footer>\r\n  <app-tool-request-footer (evStatusChange)="onStatutChange($event)" (evSubmit)="onSubmitCreate()"\r\n    (evUpdate)="onSubmitUpdate()" (evAffectationChange)="onAffectationChange($event.id)"\r\n    [canManage]="requestState().canManage" [canUpdate]="requestState().canUpdate"></app-tool-request-footer>\r\n</ion-footer>';

// angular:jit:style:file:src\app\tooling\components\maintenance-reparation\maintenance-reparation.page.scss
var maintenance_reparation_page_default2 = "/* src/app/tooling/components/maintenance-reparation/maintenance-reparation.page.scss */\n.flex-row {\n  display: flex;\n  flex-direction: column;\n}\n.flex-row ion-button {\n  align-items: center;\n}\n.content-container {\n  display: flex;\n  height: 100%;\n  overflow: hidden;\n}\n.main-form {\n  overflow-y: auto;\n}\n.left-side {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-content: stretch;\n}\n.left-side > * {\n  height: 100%;\n}\n/*# sourceMappingURL=maintenance-reparation.page.css.map */\n";

// src/app/tooling/services/maintenance-tool-request.service.ts
var MaintenanceToolRequestService = class MaintenanceToolRequestService2 {
  // ============================================================================
  // INJECTION DE DÉPENDANCES
  // ============================================================================
  http = inject(HttpClient);
  loaderService = inject(LoadingService);
  toolReqService = inject(ToolRequestService);
  // URLs API
  maintenanceUrl = `${environment.toolApi}maintenances`;
  maintenanceItemUrl = `${environment.toolApi}maintenance_items`;
  // ============================================================================
  // CRÉATION DE DEMANDE DE MAINTENANCE
  // ============================================================================
  /**
   * Crée une nouvelle demande de maintenance complète
   * 1. Crée tous les items de maintenance
   * 2. Crée la demande de maintenance avec les références des items
   */
  createMaintenanceRequest(maintenanceSpec) {
    this.loaderService.startLoading("Cr\xE9ation de la demande de maintenance...");
    return this.createAllMaintenanceItems(maintenanceSpec.itemActionCorrective).pipe(switchMap((createdItems) => {
      const payload = this.buildMaintenancePayload(maintenanceSpec, createdItems);
      return this.http.post(this.maintenanceUrl, payload);
    }), tap((response) => {
      console.log("\u2705 Demande de maintenance cr\xE9\xE9e:", response);
    }), catchError((error) => {
      console.error("\u274C Erreur lors de la cr\xE9ation de la maintenance:", error);
      return throwError(() => new Error("\xC9chec de la cr\xE9ation de la demande de maintenance"));
    }), finalize(() => this.loaderService.stopLoading()));
  }
  // ============================================================================
  // MISE À JOUR DE DEMANDE DE MAINTENANCE
  // ============================================================================
  /**
   * Met à jour une demande de maintenance existante
   * 1. Met à jour ou crée les items de maintenance
   * 2. Met à jour la demande de maintenance
   */
  updateMaintenanceRequest(maintenanceSpec) {
    if (!maintenanceSpec.id) {
      return throwError(() => new Error("ID de maintenance manquant pour la mise \xE0 jour"));
    }
    this.loaderService.startLoading("Mise \xE0 jour de la demande de maintenance...");
    return this.updateOrCreateMaintenanceItems(maintenanceSpec.itemActionCorrective).pipe(switchMap((updatedItems) => {
      const payload = this.buildMaintenancePayload(maintenanceSpec, updatedItems);
      return this.http.put(`${this.maintenanceUrl}/${maintenanceSpec.id}`, payload);
    }), tap((response) => {
      console.log("\u2705 Demande de maintenance mise \xE0 jour:", response);
    }), catchError((error) => {
      console.error("\u274C Erreur lors de la mise \xE0 jour de la maintenance:", error);
      return throwError(() => new Error("\xC9chec de la mise \xE0 jour de la demande de maintenance"));
    }), finalize(() => this.loaderService.stopLoading()));
  }
  // ============================================================================
  // CHARGEMENT DE DONNÉES DE MAINTENANCE
  // ============================================================================
  /**
   * Charge les données complètes d'une demande de maintenance
   * Retourne à la fois la ToolRequest et la SpecMaintenance
   */
  loadMaintenanceData(toolRequestId) {
    this.loaderService.startLoading("Chargement de la demande de maintenance...");
    return this.toolReqService.getToolRequest(toolRequestId).pipe(concatMap((toolRequest) => {
      if (!toolRequest.typeData.id) {
        return throwError(() => new Error("Aucune maintenance associ\xE9e \xE0 cette demande"));
      }
      return this.getMaintenance(toolRequest.typeData.id).pipe(map((specMaintenance) => ({
        toolRequest,
        specMaintenance
      })));
    }), tap((data) => {
      console.log("\u2705 Donn\xE9es de maintenance charg\xE9es:", data);
    }), catchError((error) => {
      console.error("\u274C Erreur lors du chargement de la maintenance:", error);
      return throwError(() => error);
    }), finalize(() => this.loaderService.stopLoading()));
  }
  /**
   * Charge uniquement les données de maintenance (sans la ToolRequest)
   */
  getMaintenance(maintenanceId) {
    if (!maintenanceId) {
      return of(this.createEmptyMaintenance());
    }
    return this.http.get(`${this.maintenanceUrl}/${maintenanceId}`).pipe(catchError((error) => {
      console.error("\u274C Erreur lors du chargement de la maintenance:", error);
      return of(this.createEmptyMaintenance());
    }));
  }
  // ============================================================================
  // GESTION DES ITEMS DE MAINTENANCE
  // ============================================================================
  /**
   * Crée tous les items de maintenance en parallèle
   * Utilise forkJoin pour attendre que tous soient créés
   */
  createAllMaintenanceItems(items) {
    if (!items || items.length === 0) {
      return of([]);
    }
    const createRequests = items.map((item) => this.http.post(this.maintenanceItemUrl, this.cleanMaintenanceItem(item)).pipe(tap((response) => {
      console.log(`\u2705 Item de maintenance cr\xE9\xE9: #${response.id}`);
    }), catchError((error) => {
      console.error("\u274C Erreur cr\xE9ation item:", error);
      return throwError(() => error);
    })));
    return forkJoin(createRequests);
  }
  /**
   * Met à jour les items existants ou crée les nouveaux
   */
  updateOrCreateMaintenanceItems(items) {
    if (!items || items.length === 0) {
      return of([]);
    }
    const requests = items.map((item) => {
      const cleanedItem = this.cleanMaintenanceItem(item);
      if (item.id) {
        return this.http.put(`${this.maintenanceItemUrl}/${item.id}`, cleanedItem).pipe(tap((response) => {
          console.log(`\u2705 Item de maintenance mis \xE0 jour: #${response.id}`);
        }));
      } else {
        return this.http.post(this.maintenanceItemUrl, cleanedItem).pipe(tap((response) => {
          console.log(`\u2705 Nouvel item de maintenance cr\xE9\xE9: #${response.id}`);
        }));
      }
    });
    return forkJoin(requests).pipe(catchError((error) => {
      console.error("\u274C Erreur lors de la gestion des items:", error);
      return throwError(() => error);
    }));
  }
  /**
   * Supprime un item de maintenance
   */
  deleteMaintenanceItem(itemId) {
    return this.http.delete(`${this.maintenanceItemUrl}/${itemId}`).pipe(tap(() => {
      console.log(`\u2705 Item de maintenance supprim\xE9: #${itemId}`);
    }), catchError((error) => {
      console.error("\u274C Erreur suppression item:", error);
      return throwError(() => error);
    }));
  }
  // ============================================================================
  // HELPERS PRIVÉS
  // ============================================================================
  /**
   * Construit le payload pour l'API de maintenance
   */
  buildMaintenancePayload(maintenanceSpec, items) {
    return __spreadProps(__spreadValues({}, maintenanceSpec), {
      itemActionCorrective: items.map((item) => `/api/maintenance_items/${item.id}`),
      // Convertir les références d'objets en IRIs si nécessaire
      outillage: maintenanceSpec.outillage ? typeof maintenanceSpec.outillage === "string" ? maintenanceSpec.outillage : `/api/tools/${maintenanceSpec.outillage.id}` : null,
      userCreat: maintenanceSpec.userCreat ? typeof maintenanceSpec.userCreat === "string" ? maintenanceSpec.userCreat : `/api/users/${maintenanceSpec.userCreat.id}` : null
    });
  }
  /**
   * Nettoie un item de maintenance pour l'envoi à l'API
   * Supprime les propriétés calculées ou temporaires
   */
  cleanMaintenanceItem(item) {
    const cleaned = __spreadValues({}, item);
    delete cleaned.id;
    if (cleaned.delaiAction) {
      cleaned.delaiAction = new Date(cleaned.delaiAction).toISOString();
    }
    if (cleaned.dateReal) {
      cleaned.dateReal = new Date(cleaned.dateReal).toISOString();
    }
    return cleaned;
  }
  /**
   * Crée un objet de maintenance vide
   */
  createEmptyMaintenance() {
    return {
      itemActionCorrective: [],
      rep: [],
      outillNoRefSAP: {
        description: "",
        identification: "",
        localisation: ""
      }
    };
  }
  /**
   * Convertit les items de maintenance en IRIs
   */
  itemsToIris(items) {
    return items.map((item) => `/api/maintenance_items/${item.id}`);
  }
};
MaintenanceToolRequestService = __decorate([
  Injectable({ providedIn: "root" })
], MaintenanceToolRequestService);

// src/app/tooling/services/tool-request-manager.service.ts
var RequestState = class {
  canUpdate = false;
  canManage = false;
  canEdit = false;
};
var ToolRequestManager = class ToolRequestManager2 {
  roleGuard;
  getStatus(statut) {
    const isNouvelle = statut === "NOUVELLE";
    const isManager = this.roleGuard.isRole(["ROLE_RESP_OUTIL", "ROLE_ADMIN"]);
    return isNouvelle ? {
      canUpdate: true,
      canManage: isManager,
      canEdit: true
    } : {
      canUpdate: isManager,
      canManage: isManager,
      canEdit: isManager
    };
  }
  constructor(roleGuard) {
    this.roleGuard = roleGuard;
  }
  static ctorParameters = () => [
    { type: RoleGuard }
  ];
};
ToolRequestManager = __decorate([
  Injectable({
    providedIn: "root"
  })
], ToolRequestManager);

// angular:jit:template:file:src\app\tooling\components\maintenance-reparation\maint-repair-form\maint-repair-form.component.html
var maint_repair_form_component_default = `<form class="main-form" [formGroup]="maintForm">\r
  <ion-grid>\r
    <ion-row>\r
      <ion-col size="6">\r
        <!-- ******************************* -->\r
        <!-- *******   L'OUTILLAGE   ******* -->\r
        <!-- ******************************* -->\r
        <ion-card>\r
          <ion-card-header color=light>\r
            <ion-card-title class="ion-text-uppercase">L'outillage</ion-card-title>\r
          </ion-card-header>\r
          <ion-card-content>\r
            <ion-list lines="none">\r
              <ion-list-header>\r
                <ion-label>Avec n\xB0OT</ion-label>\r
              </ion-list-header>\r
              <app-tool-input formControlName="outillage">\r
              </app-tool-input>\r
              <ng-container *ngIf="!maintForm.controls.outillage.value" formGroupName="outillNoRefSAP">\r
                <ion-list-header>\r
                  <ion-label>Sans n\xB0OT</ion-label>\r
                </ion-list-header>\r
                <ion-item>\r
                  <ion-label>Programme avion</ion-label>\r
                  <ion-input formControlName="identification" type="text" placeholder="Renseigner le programme">\r
                  </ion-input>\r
                </ion-item>\r
                <ion-item>\r
                  <ion-label>Description outillage (texte libre)</ion-label>\r
                  <ion-input formControlName="description" type="text" placeholder="Description de l'outillage">\r
                  </ion-input>\r
                </ion-item>\r
                <ion-item>\r
                  <ion-label>Localisation (texte libre)</ion-label>\r
                  <ion-input formControlName="localisation" type="text" placeholder="Description de l'outillage">\r
                  </ion-input>\r
                </ion-item>\r
              </ng-container>\r
            </ion-list>\r
            <ion-item>\r
              <ion-label>Bloquant Prod</ion-label>\r
              <ion-toggle formControlName="bloquantProd" slot="end"></ion-toggle>\r
            </ion-item>\r
          </ion-card-content>\r
        </ion-card>\r
        <!-- ************************************ -->\r
        <!-- ****   LISTE DES MAINTENANCES   **** -->\r
        <!-- ************************************ -->\r
        <ion-card color="light" class="maintenance-list">\r
          <ion-card-header class="flex-row" color=light>\r
            <ion-card-title class="ion-text-uppercase">La maintenance</ion-card-title>\r
            <!-- ****   BOUTONS   **** -->\r
            <ion-button (click)="addMaintenanceItemClick()" size=small>\r
              <ion-icon slot="start" name="add"></ion-icon>\r
              Ajouter maintenance\r
            </ion-button>\r
          </ion-card-header>\r
          <ion-card-content>\r
            <!-- ****   LISTE   **** -->\r
            <ion-list>\r
              <ion-list-header>\r
                <ion-label>Liste des maitenances</ion-label>\r
              </ion-list-header>\r
              <!-- TODO Ajouter une directive pour hilight hover -->\r
              <ng-container *ngIf="maintForm.controls.itemActionCorrective">\r
\r
                <ion-item button lines="full"\r
                  *ngFor="let maintenanceItem of maintForm.controls.itemActionCorrective.value.reverse()"\r
                  (click)="selectedItem = maintenanceItem">\r
                  <ion-label>{{maintenanceItem.rep}}</ion-label>\r
                </ion-item>\r
              </ng-container>\r
            </ion-list>\r
            <!-- <app-maintenance-item *ngFor="let maintenanceItem of maintRepForm.value.itemActionCorrective?.reverse()"\r
            [maintenanceItem]="maintenanceItem" (evValidateItem)="onValidateItem($event,maintenanceItem)"\r
            (evRemoveItem)="onRemoveItem($event,maintenanceItem)" [canUpdate]="canUpDate"></app-maintenance-item> -->\r
          </ion-card-content>\r
        </ion-card>\r
      </ion-col>\r
\r
      <ion-col size="6">\r
        <ng-container *ngIf="selectedItem" class="righSide">\r
          <!-- ************************************ -->\r
          <!-- ****   MAINTENANCE ITEM   **** -->\r
          <!-- ************************************ -->\r
          <ion-card color="light">\r
            <ion-card-header class="flex-row" color=light>\r
              <ion-card-title class="ion-text-uppercase">DETAIL MAINTENANCE</ion-card-title>\r
              <!-- ****   BOUTONS   **** -->\r
            </ion-card-header>\r
            <ion-card-content>\r
\r
              <app-maintenance-item [maintenanceItem]="selectedItem" (evRemoveItem)="onRemoveItem($event,selectedItem)"\r
                [canUpdate]="requestState.canUpdate"></app-maintenance-item>\r
            </ion-card-content>\r
          </ion-card>\r
        </ng-container>\r
      </ion-col>\r
    </ion-row>\r
  </ion-grid>\r
</form>`;

// angular:jit:style:file:src\app\tooling\components\maintenance-reparation\maint-repair-form\maint-repair-form.component.scss
var maint_repair_form_component_default2 = "/* src/app/tooling/components/maintenance-reparation/maint-repair-form/maint-repair-form.component.scss */\n/*# sourceMappingURL=maint-repair-form.component.css.map */\n";

// angular:jit:template:file:src\app\tooling\components\tool-input\tool-input.component.html
var tool_input_component_default = `<ion-item>\r
  <ion-label>Outillage SAP : </ion-label>\r
  <!-- <ion-label *ngIf="tool"> {{(tool.sapToolNumber.length > 5) ? ' OT' : ' OT0'}}</ion-label> -->\r
  <ion-input toolInput placeholder="n\xB0OT SAP ou n\xB0 Equipement SAP">\r
  </ion-input>\r
  <ng-container *ngIf="!tool">\r
    <ion-icon slot="end" name="close-outline" color=danger></ion-icon>\r
  </ng-container>\r
  <ion-icon *ngIf="tool" slot="end" name="checkmark" color=success></ion-icon>\r
</ion-item>\r
<ng-container *ngIf="tool">\r
  <ion-item>\r
    <ion-label>\r
      D\xE9signation outillage\r
    </ion-label>\r
    <ion-input type="text" disabled="true" [value]="tool.designation"></ion-input>\r
  </ion-item>\r
  <ion-item>\r
    <ion-label>Programme avion</ion-label>\r
    <ion-input type="text" disabled="true" [value]="tool.programme.designation"></ion-input>\r
  </ion-item>\r
\r
</ng-container>`;

// angular:jit:style:file:src\app\tooling\components\tool-input\tool-input.component.scss
var tool_input_component_default2 = "/* src/app/tooling/components/tool-input/tool-input.component.scss */\n/*# sourceMappingURL=tool-input.component.css.map */\n";

// src/app/tooling/components/tool-input/tool-input.service.ts
var ToolInputService = class ToolInputService2 {
  ngOnInit() {
    this.inputTool$.pipe(share());
  }
  toolInput = new Subject();
  inputTool$ = this.toolInput.asObservable();
  emitTool(tool) {
    this.toolInput.next(tool);
  }
};
ToolInputService = __decorate([
  Injectable({ providedIn: "root" })
], ToolInputService);

// src/app/tooling/components/tool-input/tool-input.directive.ts
var ToolInputDirective = class ToolInputDirective2 {
  toolService;
  toolInputService;
  onChangeToolInput(eventTarget) {
    this.inputToolAction(eventTarget.value);
  }
  toolInputValue;
  constructor(toolService, toolInputService) {
    this.toolService = toolService;
    this.toolInputService = toolInputService;
  }
  inputToolAction(toolInput) {
    this.toolService.getToolByInput(toolInput).then((responseTool) => {
      this.toolInputService.emitTool(responseTool);
    });
  }
  static ctorParameters = () => [
    { type: ToolService },
    { type: ToolInputService }
  ];
  static propDecorators = {
    onChangeToolInput: [{ type: HostListener, args: ["change", ["$event.target"]] }],
    toolInputValue: [{ type: HostBinding, args: ["value"] }]
  };
};
ToolInputDirective = __decorate([
  Directive({
    selector: "[toolInput]",
    standalone: true
  })
], ToolInputDirective);

// src/app/tooling/components/tool-input/tool-input.component.ts
var ToolInputComponent = class ToolInputComponent2 {
  toolInputService;
  disabled = false;
  tool;
  constructor(toolInputService) {
    this.toolInputService = toolInputService;
  }
  ngOnInit() {
    this.toolInputService.inputTool$.subscribe((tool) => {
      this.tool = tool;
      this.onChange(tool);
    });
  }
  // onInputChange() {
  //   const value = this.inputElementRef.nativeElement.value;
  //   this.onChange(value);
  // }
  onChange = (tool) => {
  };
  onTouched = () => {
  };
  writeValue(tool) {
    this.tool = tool;
  }
  registerOnChange(onChange) {
    this.onChange = onChange;
  }
  registerOnTouched(onTouched) {
    this.onTouched = onTouched;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  static ctorParameters = () => [
    { type: ToolInputService }
  ];
};
ToolInputComponent = __decorate([
  Component({
    selector: "app-tool-input",
    template: tool_input_component_default,
    providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        multi: true,
        useExisting: ToolInputComponent
      }
    ],
    standalone: true,
    imports: [IonicModule, ToolInputDirective, NgIf],
    styles: [tool_input_component_default2]
  })
], ToolInputComponent);

// angular:jit:template:file:src\app\tooling\components\maintenance-reparation\maintenance-item\maintenance-item.component.html
var maintenance_item_component_default = `<ion-card class="ion-margin-top" [color]="(maintenanceRealisee)? 'success' : ''">\r
  <ion-card-header class="flex-row">\r
    <ion-card-title color=secondary>Maintenance n\xB0{{maintenanceItem.rep}}\r
    </ion-card-title>\r
    <ion-icon name="checkmark" color=success size="large" *ngIf="maintenanceRealisee"></ion-icon>\r
  </ion-card-header>\r
  <ion-card-content>\r
   <app-maintenance-item-form></app-maintenance-item-form>\r
  </ion-card-content>\r
</ion-card>`;

// angular:jit:style:file:src\app\tooling\components\maintenance-reparation\maintenance-item\maintenance-item.component.scss
var maintenance_item_component_default2 = "/* src/app/tooling/components/maintenance-reparation/maintenance-item/maintenance-item.component.scss */\n.flex-row {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\nion-card {\n  width: 100%;\n}\n/*# sourceMappingURL=maintenance-item.component.css.map */\n";

// src/app/shared/services/upload-file.service.ts
var UploadFileService = class UploadFileService2 {
  requestService;
  uploadFile(file) {
    const formData = new FormData();
    formData.append("file", file, file.name);
    return this.requestService.createPostRequest("file/img/tooling", formData);
  }
  constructor(requestService) {
    this.requestService = requestService;
  }
  static ctorParameters = () => [
    { type: RequestService }
  ];
};
UploadFileService = __decorate([
  Injectable({
    providedIn: "root"
  })
], UploadFileService);

// angular:jit:template:file:src\app\tooling\components\maintenance-reparation\maintenance-item-form\maintenance-item-form.component.html
var maintenance_item_form_component_default = `<form [formGroup]="maintenanceItemForm">\r
  <ion-item>\r
    <ion-label>Non conformit\xE9\r
      <ion-text color="danger">*</ion-text>\r
    </ion-label>\r
    <ion-textarea autoGrow required type="text" #nonConformite formControlName="nonConformite"\r
      (change)="maintenanceItem.nonConformite = nonConformite.value">\r
    </ion-textarea>\r
  </ion-item>\r
  <ion-item>\r
    <ion-label>Action corrective\r
      <ion-text color="danger">*</ion-text>\r
    </ion-label>\r
    <ion-textarea autoGrow required type="text" #actionsCorrectives formControlName="actionsCorrectives"\r
      (change)="maintenanceItem.actionsCorrectives = actionsCorrectives.value">\r
    </ion-textarea>\r
  </ion-item>\r
\r
  <ion-item lines="full" button>\r
    <ion-icon name="image" slot="start"></ion-icon>\r
    <ion-input type="file" (change)="uploadImage($event)"></ion-input>\r
    <ion-label>Joindre une image</ion-label>\r
  </ion-item>\r
  <ion-item lines="full" button>\r
    <ion-label>Joindre une image</ion-label>\r
\r
    <a class="item" href="file:///T:/Tarbes/DIAE-C-MC/DONNEES TECHNIQUES PREPARATION SERIE">Lien\r
      test vers r\xE9seau DAHER</a>\r
  </ion-item>\r
\r
  <ion-buttons slot="primary">\r
    <!-- <ion-button *ngIf="!validate" slot="start" (click)="validateItemClick()"\r
      [disabled]="maintenanceItemForm.invalid">\r
      <ion-icon slot="start" name="checkmark"></ion-icon>\r
     Valider Item\r
    </ion-button> -->\r
    <ion-button slot="end" (click)="removeItemClick()">\r
      <ion-icon slot="start" name="trash-outline"></ion-icon>\r
      Supprimer Item\r
    </ion-button>\r
  </ion-buttons>\r
  <!-- <ion-item-group *ngIf="canUpdate"> -->\r
  <ion-item-group>\r
    <ion-item-divider>\r
      <ion-label>R\xE9alisation</ion-label>\r
    </ion-item-divider>\r
    <ion-item button [id]="'open-date-real' + maintenanceItem.rep">\r
      <ion-label>Date de r\xE9alisation</ion-label>\r
      <ion-icon slot=end icon="calendar-outline"></ion-icon>\r
      <ion-text slot="end">\r
        {{maintenanceItem.dateReal | date:"dd/MM/yyyy"}}</ion-text>\r
      <ion-modal [trigger]="'open-date-real' + maintenanceItem.rep">\r
        <ng-template>\r
          <ion-content>\r
            <ion-datetime #dateReal presentation="date" formControlName="delaiAction" display-format="DD.MM.YYYY"\r
              (ionChange)="maintenanceItem.dateReal =maintenanceItemForm.controls.delaiAction.value">\r
              <div slot="title">Date de r\xE9alisation de la maintenance</div>\r
            </ion-datetime>\r
          </ion-content>\r
        </ng-template>\r
      </ion-modal>\r
    </ion-item>\r
    <ion-buttons slot="primary">\r
      <ion-button *ngIf="!maintenanceItem.dateReal" slot="start" (click)="validateMaintenance()"\r
        [disabled]="maintenanceItemForm.invalid">\r
        <ion-icon slot="start" name="checkmark"></ion-icon>\r
        Effectu\xE9e\r
      </ion-button>\r
    </ion-buttons>\r
  </ion-item-group>\r
</form>`;

// angular:jit:style:file:src\app\tooling\components\maintenance-reparation\maintenance-item-form\maintenance-item-form.component.scss
var maintenance_item_form_component_default2 = "/* src/app/tooling/components/maintenance-reparation/maintenance-item-form/maintenance-item-form.component.scss */\n/*# sourceMappingURL=maintenance-item-form.component.css.map */\n";

// src/app/tooling/components/maintenance-reparation/maintenance-item-form/maintenance-item-form.component.ts
var MaintenanceItemFormComponent = class MaintenanceItemFormComponent2 {
  uploadImage($event) {
    throw new Error("Method not implemented.");
  }
  maintenanceItem;
  evRemoveItem = new EventEmitter();
  validate = false;
  maintenanceItemForm = new FormGroup({
    nonConformite: new FormControl(),
    rep: new FormControl(),
    actionsCorrectives: new FormControl(),
    delaiAction: new FormControl(/* @__PURE__ */ new Date()),
    dateReal: new FormControl()
  });
  alertController = inject(AlertController);
  removeItemClick() {
    return __async(this, null, function* () {
      const alert = yield this.alertController.create({
        cssClass: "my-custom-class",
        header: "Alerte confirmation",
        message: "Message <strong>Et\xEAs vous s\xFBr de vouloir supprimer cette maintenance?</strong>!!!",
        buttons: [
          {
            text: "Non",
            role: "cancel",
            cssClass: "secondary",
            id: "cancel-button",
            handler: () => {
            }
          },
          {
            text: "OUI",
            id: "confirm-button",
            handler: (value) => {
              this.confirmRemoveItem();
            }
          }
        ]
      });
      yield alert.present();
    });
  }
  confirmRemoveItem() {
    this.evRemoveItem.emit(this.maintenanceItem);
  }
  validateMaintenance() {
  }
  static propDecorators = {
    maintenanceItem: [{ type: Input }],
    evRemoveItem: [{ type: Output }]
  };
};
MaintenanceItemFormComponent = __decorate([
  Component({
    selector: "app-maintenance-item-form",
    template: maintenance_item_form_component_default,
    standalone: true,
    imports: [
      ReactiveFormsModule,
      IonicModule,
      NgIf,
      DatePipe
    ],
    styles: [maintenance_item_form_component_default2]
  })
], MaintenanceItemFormComponent);

// src/app/tooling/components/maintenance-reparation/maintenance-item/maintenance-item.component.ts
var MaintenanceItemComponent = class MaintenanceItemComponent2 {
  uploadFileService;
  maintenanceItem;
  canUpdate;
  evValidateItem = new EventEmitter();
  evRemoveItem = new EventEmitter();
  maintenanceRealisee = false;
  constructor(uploadFileService) {
    this.uploadFileService = uploadFileService;
  }
  ngOnChanges(changes) {
  }
  ionViewWillEnter() {
  }
  ngOnInit() {
    console.log("onInit");
  }
  dateValue(dateValue) {
    return new Date(dateValue);
  }
  // validateItemClick() {
  //   this.evValidateItem.emit(this.maintenanceItemForm.value);
  //   this.validate = true;
  // }
  validateRealMaintClick() {
    this.maintenanceRealisee = true;
  }
  uploadImage(ev) {
    console.log(ev);
    const file = ev.target.files[0];
    if (file) {
      this.uploadFileService.uploadFile(file).subscribe({
        next: (resp) => {
        }
      });
    }
  }
  static ctorParameters = () => [
    { type: UploadFileService }
  ];
  static propDecorators = {
    maintenanceItem: [{ type: Input }],
    canUpdate: [{ type: Input }],
    evValidateItem: [{ type: Output }],
    evRemoveItem: [{ type: Output }]
  };
};
MaintenanceItemComponent = __decorate([
  Component({
    selector: "app-maintenance-item",
    template: maintenance_item_component_default,
    standalone: true,
    imports: [
      IonicModule,
      NgIf,
      MaintenanceItemFormComponent
    ],
    styles: [maintenance_item_component_default2]
  })
], MaintenanceItemComponent);

// src/app/tooling/components/maintenance-reparation/maint-repair-form/maint-repair-form.component.ts
var MaintRepairFormComponent = class MaintRepairFormComponent2 {
  requestState = { canManage: false, canUpdate: false, canEdit: false };
  toolRequestForm;
  toolRequestFormChange = new EventEmitter();
  maintForm;
  maintFormChange = new EventEmitter();
  selectedItem;
  constructor() {
  }
  ngOnInit() {
  }
  ngOnChanges(changes) {
    console.log(changes);
    if (changes.maintForm) {
      this.maintFormChange.emit(this.maintForm);
    }
    if (changes.toolRequestForm) {
      this.toolRequestFormChange.emit(this.toolRequestForm);
    }
  }
  addMaintenanceItemClick() {
  }
  onRemoveItem(ev, item) {
  }
  static ctorParameters = () => [];
  static propDecorators = {
    requestState: [{ type: Input }],
    toolRequestForm: [{ type: Input }],
    toolRequestFormChange: [{ type: Output }],
    maintForm: [{ type: Input }],
    maintFormChange: [{ type: Output }]
  };
};
MaintRepairFormComponent = __decorate([
  Component({
    selector: "app-maint-repair-form",
    template: maint_repair_form_component_default,
    standalone: true,
    imports: [
      ReactiveFormsModule,
      IonicModule,
      ToolInputComponent,
      NgIf,
      NgForOf,
      MaintenanceItemComponent
    ],
    styles: [maint_repair_form_component_default2]
  })
], MaintRepairFormComponent);

// angular:jit:template:file:src\app\tooling\components\tool-request-footer\tool-request-footer.component.html
var tool_request_footer_component_default = '<ion-toolbar>\r\n    <ion-item *ngIf="canManage">\r\n        <ion-label>Affecter</ion-label>\r\n        <ion-select multiple="true" placeholder="S\xE9l\xE9ctionner une personne" (ionChange)="affectationChange($event)">\r\n            <ion-select-option *ngFor="let affectationGroup of affectationGroups" [value]="affectationGroup">\r\n                {{affectationGroup.libelle}}</ion-select-option>\r\n        </ion-select>\r\n    </ion-item>\r\n    <ion-item *ngIf="canManage">\r\n        <ion-label>Changer le statut</ion-label>\r\n        <!-- <ion-select #statut multiple="false" placeholder="S\xE9l\xE9ctionner un statut" (ionChange)="toolRequest.statut = statut.value"> -->\r\n        <ion-select #statut multiple="false" placeholder="S\xE9l\xE9ctionner un statut" (ionChange)="statusChange($event)">\r\n            <ion-select-option value="NOUVELLE">Nouvelle</ion-select-option>\r\n            <ion-select-option value="REFUSEE">Refuser</ion-select-option>\r\n            <ion-select-option value="ACCEPTEE">Accepter</ion-select-option>\r\n            <ion-select-option value="ANNULEE">Annuler</ion-select-option>\r\n            <ion-select-option value="EN COURS DE REALISATION">En cours de r\xE9alisation</ion-select-option>\r\n            <ion-select-option value="TERMINEE">Termin\xE9e</ion-select-option>\r\n            <ion-select-option value="CLOTUREE">Cloturer</ion-select-option>\r\n            <ion-select-option value="ATTENTE FOURNITURE EXT">Attente de fourniture ext\xE9rieure</ion-select-option>\r\n            <ion-select-option value="DEM EXT">Demande externalis\xE9e</ion-select-option>\r\n        </ion-select>\r\n    </ion-item>\r\n    <ion-button slot=end (click)="pdfExportClick()">\r\n        <ion-icon slot="end" name="document-attach-outline"></ion-icon>\r\n        Exporter pdf\r\n    </ion-button>\r\n    <ion-button slot=end block color="success" *ngIf="!canUpdate" (click)="submitClick()">\r\n        <ion-icon slot="end" name="send-outline"></ion-icon>\r\n        Envoyer\r\n    </ion-button>\r\n    <ion-button slot=end block color="success" *ngIf="canUpdate" (click)="updateClick()">\r\n        <ion-icon slot="end" name="send-outline"></ion-icon>\r\n        Mettre \xE0 jour\r\n    </ion-button>\r\n</ion-toolbar>';

// angular:jit:style:file:src\app\tooling\components\tool-request-footer\tool-request-footer.component.scss
var tool_request_footer_component_default2 = "/* src/app/tooling/components/tool-request-footer/tool-request-footer.component.scss */\n/*# sourceMappingURL=tool-request-footer.component.css.map */\n";

// src/app/shared/services/divers/pdf.service.ts
var PdfService = class PdfService2 {
  constructor() {
  }
  // createPdf(divToConvert: HTMLElement) {
  //   const options: PDFGeneratorOptions = {
  //     documentSize: 'A4',
  //     landscape: 'portrait',
  //   };
  //   const pngOptions: Options = {
  //   };
  //   const doc = new JSPDF('p', 'mm', 'a4');
  //   // this.pdfGenerator.fromData(divToConvert.innerHTML, options);
  //   domtoimage.toPng(divToConvert, pngOptions)
  //     .then((fileUrl) => {
  //       doc.addImage(fileUrl, 'PNG', 10, 10, 240, 180);
  //       const docRes = doc.output();
  //       const buffer = new ArrayBuffer(docRes.length);
  //       const array = new Uint8Array(buffer);
  //       for (let i = 0; i < docRes.length; i++) {
  //         array[i] = docRes.charCodeAt(i);
  //       }
  //       // this.file.dataDirectory = `C:/Users/j.grangier/Desktop/TRAVAIL/Appli-MOULAGE`;
  //       const directory = `C:/Users/j.grangier/Desktop/TRAVAIL/Appli-MOULAGE/`;
  //       console.log(directory);
  //       const fileName = 'user-data.pdf';
  //       const optionsWriteFile: IWriteOptions = {
  //         replace: true
  //       };
  //       console.log(this.file);
  //       // this.file.checkFile(directory, fileName)
  //       // .then(() => {
  //       Filesystem.writeFile({
  //         path: fileName,
  //         directory: Directory.ExternalStorage,
  //         data: docRes,
  //       })
  //         .then((res) => {
  //           console.log('File generated' + JSON.stringify(res));
  //           Filesystem.readFile({
  //             path: fileName,
  //             directory: Directory.ExternalStorage,
  //             encoding: Encoding.UTF8
  //           })
  //             .then((resFile) => {
  //               console.log(resFile);
  //             })
  //           //             this.fileOpener.open(this.file.dataDirectory + fileName, 'application/pdf')
  //           //               .then(() => console.log('File is exported'))
  //           //               .catch(e => console.log(e));
  //         }).catch((error) => {
  //           console.log(JSON.stringify(error));
  //         });
  //       // })
  //       // .catch(() => {
  //       //         this.file.writeFile(directory, fileName, buffer).then((res) => {
  //       //           console.log('File generated' + JSON.stringify(res));
  //       //           this.fileOpener.open(this.file.dataDirectory + fileName, 'application/pdf')
  //       //             .then(() => console.log('File exported'))
  //       //             .catch(e => console.log(e));
  //       //         })
  //       //           .catch((error) => {
  //       //             console.log(JSON.stringify(error));
  //       //           });
  //       // });
  //     })
  //     .catch((erro) => {
  //       console.error(erro);
  //     });
  // }
  makePdf(divToConvert) {
  }
  openPDF(divToConvert, fileName) {
  }
  static ctorParameters = () => [];
};
PdfService = __decorate([
  Injectable({
    providedIn: "root"
  })
], PdfService);

// src/app/tooling/components/tool-request-footer/tool-request-footer.component.ts
var ToolRequestFooterComponent = class ToolRequestFooterComponent2 {
  userService;
  pdfService;
  canManage;
  canUpdate;
  evStatusChange = new EventEmitter();
  evAffectationChange = new EventEmitter();
  evSubmit = new EventEmitter();
  evUpdate = new EventEmitter();
  /**
   *
   *
   * @type {User[]}
   * @memberof ToolRequestFooterComponent
   */
  userList;
  /**
   *
   *
   * @type {GroupeAffectation[]}
   * @memberof ToolRequestFooterComponent
   */
  affectationGroups;
  constructor(userService, pdfService) {
    this.userService = userService;
    this.pdfService = pdfService;
  }
  ngOnInit() {
    this.loadUsers();
    this.loadAffectationGroups();
  }
  loadUsers() {
    this.userService.getUsers().subscribe((responseUsers) => {
      this.userList = responseUsers;
    });
  }
  loadAffectationGroups() {
    this.userService.getGroups().subscribe((responseGroups) => {
      this.affectationGroups = responseGroups;
    });
  }
  affectationChange(affectationGroup) {
    this.evAffectationChange.emit(affectationGroup.target.value);
  }
  statusChange(status) {
    this.evStatusChange.emit(status.target.value);
  }
  pdfExportClick() {
    console.log(document.getElementById("toExport"));
    this.pdfService.openPDF(document.getElementById("toExport"), "test impression");
  }
  submitClick() {
    this.evSubmit.emit(null);
  }
  updateClick() {
    this.evUpdate.emit(null);
  }
  static ctorParameters = () => [
    { type: UsersService },
    { type: PdfService }
  ];
  static propDecorators = {
    canManage: [{ type: Input }],
    canUpdate: [{ type: Input }],
    evStatusChange: [{ type: Output }],
    evAffectationChange: [{ type: Output }],
    evSubmit: [{ type: Output }],
    evUpdate: [{ type: Output }]
  };
};
ToolRequestFooterComponent = __decorate([
  Component({
    selector: "app-tool-request-footer",
    template: tool_request_footer_component_default,
    standalone: true,
    imports: [
      IonicModule,
      NgIf,
      NgForOf
    ],
    styles: [tool_request_footer_component_default2]
  })
], ToolRequestFooterComponent);

// src/app/tooling/components/maintenance-reparation/maintenance-reparation.page.ts
var MaintenanceReparationPage = class MaintenanceReparationPage2 {
  // ============================================================================
  // INJECTION DE DÉPENDANCES
  // ============================================================================
  route = inject(ActivatedRoute);
  router = inject(Router);
  navCtrl = inject(NavController);
  formBuilder = inject(ToolRequestFormBuilder);
  maintenanceService = inject(MaintenanceToolRequestService);
  toolRequestService = inject(ToolRequestService);
  alertService = inject(AlertService);
  toolRequestManager = inject(ToolRequestManager);
  // ============================================================================
  // ÉTAT DU COMPOSANT (SIGNALS)
  // ============================================================================
  // Mode du composant
  mode = signal("create");
  // Données chargées
  toolRequest = signal(null);
  maintenance = signal(null);
  requestState = signal(null);
  // États de chargement/soumission
  isLoading = signal(true);
  isSubmitting = signal(false);
  errorMessage = signal(null);
  // ID de la demande (en mode édition)
  toolRequestId = null;
  // ============================================================================
  // FORMULAIRES
  // ============================================================================
  toolRequestForm;
  maintenanceForm;
  // ============================================================================
  // COMPUTED PROPERTIES
  // ============================================================================
  pageTitle = computed(() => {
    const mode = this.mode();
    const id = this.toolRequest()?.id;
    if (mode === "create") {
      return "Nouvelle demande Maintenance et R\xE9paration";
    }
    if (mode === "edit") {
      return `Modification demande de maintenance : ID ${id}`;
    }
    return `Demande de maintenance : ID ${id}`;
  });
  canEdit = computed(() => {
    const state2 = this.requestState();
    const mode = this.mode();
    if (mode === "create")
      return true;
    return state2?.canEdit ?? false;
  });
  canManage = computed(() => {
    const state2 = this.requestState();
    return state2?.canManage ?? false;
  });
  canSubmit = computed(() => {
    return !this.isSubmitting() && this.toolRequestForm?.valid && this.maintenanceForm?.valid;
  });
  // ============================================================================
  // LIFECYCLE
  // ============================================================================
  ngOnInit() {
    this.toolRequestId = this.route.snapshot.paramMap.get("id");
    if (this.toolRequestId) {
      this.mode.set("edit");
      this.loadMaintenanceData(this.toolRequestId);
    } else {
      this.mode.set("create");
      this.initializeFormsForCreation();
      this.isLoading.set(false);
    }
  }
  // ============================================================================
  // INITIALISATION DES FORMULAIRES
  // ============================================================================
  /**
   * Initialise les formulaires pour la création
   */
  initializeFormsForCreation() {
    this.toolRequestForm = this.formBuilder.createToolRequestForm({
      bloquantProd: false
    });
    this.maintenanceForm = this.formBuilder.createSpecMaintenanceForm();
  }
  /**
   * Initialise les formulaires avec des données existantes (édition)
   */
  initializeFormsForEdition(toolRequest, maintenance) {
    this.toolRequestForm = this.formBuilder.createToolRequestForm({
      type: toolRequest.type,
      bloquantProd: toolRequest.bloquantProd,
      dateBesoin: toolRequest.dateBesoin,
      groupeAffectation: toolRequest.groupeAffectation?.id,
      toolingNote: toolRequest.toolingNote
    });
    this.maintenanceForm = this.formBuilder.createSpecMaintenanceForm({
      outillage: maintenance.outillage?.id,
      outillNoRefSAP: maintenance.outillNoRefSAP,
      sigle: maintenance.sigle,
      dateValid: maintenance.dateValid,
      userValideur: maintenance.userValideur?.id,
      itemActionCorrective: maintenance.itemActionCorrective
    });
    this.toolRequest.set(toolRequest);
    this.maintenance.set(maintenance);
  }
  // ============================================================================
  // CHARGEMENT DES DONNÉES
  // ============================================================================
  loadMaintenanceData(id) {
    this.isLoading.set(true);
    this.errorMessage.set(null);
    this.maintenanceService.loadMaintenanceData(id).pipe(tap((data) => {
      console.log("\u2705 Donn\xE9es charg\xE9es:", data);
      const state2 = this.toolRequestManager.getStatus(data.toolRequest.statut);
      this.requestState.set(state2);
      this.initializeFormsForEdition(data.toolRequest, data.specMaintenance);
    }), catchError((error) => {
      console.error("\u274C Erreur chargement:", error);
      this.errorMessage.set("Impossible de charger la demande de maintenance");
      this.alertService.simpleAlert("Erreur", "Chargement", "Impossible de charger la demande. Retour \xE0 la liste.").then(() => {
        this.navigateToList();
      });
      return EMPTY;
    })).subscribe(() => {
      this.isLoading.set(false);
    });
  }
  // ============================================================================
  // ACTIONS - CRÉATION
  // ============================================================================
  onSubmitCreate() {
    if (!this.canSubmit()) {
      this.toolRequestForm.markAllAsTouched();
      this.maintenanceForm.markAllAsTouched();
      this.errorMessage.set("Veuillez remplir tous les champs obligatoires");
      return;
    }
    this.isSubmitting.set(true);
    this.errorMessage.set(null);
    const maintenanceData = this.buildMaintenanceFromForm();
    this.maintenanceService.createMaintenanceRequest(maintenanceData).pipe(tap((response) => {
      console.log("\u2705 Demande cr\xE9\xE9e:", response);
    }), catchError((error) => {
      console.error("\u274C Erreur cr\xE9ation:", error);
      this.errorMessage.set("Erreur lors de la cr\xE9ation de la demande");
      this.isSubmitting.set(false);
      return EMPTY;
    })).subscribe((response) => {
      this.isSubmitting.set(false);
      this.alertService.simpleAlert("Succ\xE8s", "Cr\xE9ation d'une demande", "La demande a bien \xE9t\xE9 cr\xE9\xE9e. Vous allez \xEAtre redirig\xE9 vers la liste des demandes").then(() => {
        this.navigateToList();
      });
    });
  }
  // ============================================================================
  // ACTIONS - MISE À JOUR
  // ============================================================================
  onSubmitUpdate() {
    if (!this.canSubmit() || !this.toolRequestId) {
      this.toolRequestForm.markAllAsTouched();
      this.maintenanceForm.markAllAsTouched();
      this.errorMessage.set("Veuillez remplir tous les champs obligatoires");
      return;
    }
    this.isSubmitting.set(true);
    this.errorMessage.set(null);
    const toolRequestData = __spreadValues(__spreadValues({}, this.toolRequest()), this.toolRequestForm.value);
    const maintenanceData = __spreadValues(__spreadValues({}, this.maintenance()), this.buildMaintenanceFromForm());
    this.toolRequestService.updateToolRequest(toolRequestData).pipe(
      // Puis mettre à jour la maintenance
      switchMap(() => this.maintenanceService.updateMaintenanceRequest(maintenanceData)),
      tap((response) => {
        console.log("\u2705 Demande mise \xE0 jour:", response);
      }),
      catchError((error) => {
        console.error("\u274C Erreur mise \xE0 jour:", error);
        this.errorMessage.set("Erreur lors de la mise \xE0 jour de la demande");
        this.isSubmitting.set(false);
        this.alertService.simpleAlert("Erreur", "Mise \xE0 jour d'une demande", "La demande n'a pas pu \xEAtre modifi\xE9e. V\xE9rifiez les donn\xE9es");
        return EMPTY;
      })
    ).subscribe(() => {
      this.isSubmitting.set(false);
      this.alertService.simpleAlert("Succ\xE8s", "Mise \xE0 jour d'une demande", "La demande a bien \xE9t\xE9 modifi\xE9e. Vous allez \xEAtre redirig\xE9 vers la liste des demandes").then(() => {
        this.navigateToList();
      });
    });
  }
  // ============================================================================
  // GESTION DES CHANGEMENTS
  // ============================================================================
  onStatutChange(newStatut) {
    this.toolRequestForm.patchValue({ statut: newStatut });
  }
  onAffectationChange(groupeAffectationId) {
    this.toolRequestForm.patchValue({ groupeAffectation: groupeAffectationId });
  }
  // ============================================================================
  // NAVIGATION
  // ============================================================================
  onCancel() {
    this.alertService.presentAlertConfirm("Confirmation", "\xCAtes-vous s\xFBr de vouloir annuler ? Les modifications seront perdues.").then((confirmed) => {
      if (confirmed) {
        this.navigateToList();
      }
    });
  }
  navigateToList() {
    this.navCtrl.navigateForward("tooling/tool-request-list");
  }
  // ============================================================================
  // HELPERS PRIVÉS
  // ============================================================================
  /**
   * Construit l'objet SpecMaintenance depuis les formulaires
   */
  buildMaintenanceFromForm() {
    const maintenanceFormValue = this.maintenanceForm.getRawValue();
    return {
      outillage: maintenanceFormValue.outillage,
      outillNoRefSAP: maintenanceFormValue.outillNoRefSAP,
      itemActionCorrective: maintenanceFormValue.itemActionCorrective,
      sigle: maintenanceFormValue.sigle,
      dateValid: maintenanceFormValue.dateValid,
      userValideur: maintenanceFormValue.userValideur,
      rep: maintenanceFormValue.rep
    };
  }
  /**
   * Formatte une date pour l'affichage
   */
  formatDate(date) {
    if (!date)
      return "-";
    const d = new Date(date);
    return d.toLocaleDateString("fr-FR");
  }
};
MaintenanceReparationPage = __decorate([
  Component({
    selector: "app-maintenance-reparation",
    template: maintenance_reparation_page_default,
    standalone: true,
    imports: [
      IonicModule,
      MaintRepairFormComponent,
      ToolRequestFooterComponent
    ],
    styles: [maintenance_reparation_page_default2]
  })
], MaintenanceReparationPage);

// angular:jit:template:file:src\app\tooling\components\control3-d\control.page.html
var control_page_default = '<!-- ******************************* -->\r\n<!-- **********   HEADER   *********** -->\r\n<!-- ******************************* -->\r\n<ion-header>\r\n  <ion-toolbar color=dark no-padding>\r\n    <ion-title>{{pageTitle()}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<!-- ******************************* -->\r\n<!-- **********   CONTENT   *********** -->\r\n<!-- ******************************* -->\r\n<ion-content color=light>\r\n  <!-- TODO Revoir la mise en page scroll partie droite -->\r\n  <div class="content-container">\r\n    <div class="control-form">\r\n\r\n      <!-- **********   FORM   *********** -->\r\n      <app-control3-dform [toolRequest]="toolRequest()" [requestState]="requestState()" (submit)="onSubmit($event)"\r\n        (update)="onUpdate($event)" (statusChange)="onStatusChange($event)" />\r\n    </div>\r\n    <!-- <div class="print-preview">\r\n      <app-controleddd [toolRequest]="toolRequest"></app-controleddd>\r\n    </div> -->\r\n  </div>\r\n</ion-content>\r\n<!-- ******************************* -->\r\n<!-- **********   FOOTER   *********** -->\r\n<!-- ******************************* -->\r\n<ion-footer>\r\n  <app-tool-request-footer [canManage]="requestState().canManage" [canUpdate]="requestState().canUpdate"\r\n    (evStatusChange)="onStatusChange($event)" (evSubmit)="onSubmit($event)" (evUpdate)="onUpdate($event)" />\r\n</ion-footer>';

// angular:jit:style:file:src\app\tooling\components\control3-d\control.page.scss
var control_page_default2 = "/* src/app/tooling/components/control3-d/control.page.scss */\n.main-form {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n.main-form .left-side {\n  max-width: 30%;\n}\n.main-form > * {\n  width: auto;\n  height: auto;\n}\n.flex-row {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.print-preview {\n  overflow-y: auto;\n}\n.vertical {\n  display: flex;\n  flex-direction: column;\n}\n.vertical *[contentEditable=true]:focus,\n.vertical *[contentEditable=true]:hover {\n  outline: 2px solid #1976d2;\n}\n/*# sourceMappingURL=control.page.css.map */\n";

// angular:jit:template:file:src\app\tooling\components\control3-d\control3-dform\control3-dform.component.html
var control3_dform_component_default = `<form class="main-form" [formGroup]="controlForm">\r
  <ion-grid>\r
    <ion-row>\r
      <ion-col size="6">\r
\r
        <!-- ******************************* -->\r
        <!-- *******   L'OUTILLAGE   ******* -->\r
        <!-- ******************************* -->\r
        <ion-card>\r
          <ion-card-header color=light>\r
            <ion-card-title class="ion-text-uppercase">L'outillage</ion-card-title>\r
          </ion-card-header>\r
          <ion-card-content>\r
\r
            <!-- ******************************* -->\r
            <!-- **********   TOOL   *********** -->\r
            <!-- ******************************* -->\r
            <ion-list lines="none">\r
              <ion-list-header>\r
                <ion-label>Avec n\xB0OT</ion-label>\r
              </ion-list-header>\r
              <app-tool-input formControlName="outillage">\r
              </app-tool-input>\r
              <ng-container *ngIf="!controlForm.controls.outillage.value" formGroupName="outillNoRefSAP">\r
                <ion-list-header>\r
                  <ion-label>Sans n\xB0OT</ion-label>\r
                </ion-list-header>\r
                <ion-item>\r
                  <ion-label>Programme avion</ion-label>\r
                  <ion-input formControlName="identification" type="text" placeholder="Renseigner le programme">\r
                  </ion-input>\r
                </ion-item>\r
                <ion-item>\r
                  <ion-label>Description outillage (texte libre)</ion-label>\r
                  <ion-input formControlName="description" type="text" placeholder="Description de l'outillage">\r
                  </ion-input>\r
                </ion-item>\r
                <ion-item>\r
                  <ion-label>Localisation (texte libre)</ion-label>\r
                  <ion-input formControlName="localisation" type="text" placeholder="Description de l'outillage">\r
                  </ion-input>\r
                </ion-item>\r
              </ng-container>\r
            </ion-list>\r
          </ion-card-content>\r
        </ion-card>\r
        <ion-card>\r
          <ion-card-header color=light>\r
            <ion-card-title class="ion-text-uppercase">Compl\xE9ment</ion-card-title>\r
          </ion-card-header>\r
          <ion-card-content>\r
\r
            <ion-item>\r
              <ion-label>Bloquant Prod</ion-label>\r
              <ion-toggle slot="end" formControlName="bloquantProd"></ion-toggle>\r
            </ion-item>\r
\r
            <!-- ******************************* -->\r
            <!-- ****   DATE MISE A DISPO   **** -->\r
            <!-- ******************************* -->\r
            <ion-item button id="open-modal">\r
              <ion-label>Date de mise \xE0 disposition au service outillage</ion-label>\r
              <ion-text slot="end">\r
                {{controlForm.value.dispoOut | date:"dd/MM/yyyy"}}</ion-text>\r
\r
              <ion-icon slot=end icon="calendar-outline"></ion-icon>\r
              <ion-modal trigger="open-modal">\r
                <ng-template>\r
                  <ion-content>\r
                    <ion-datetime #dispoOut presentation="date" formControlName="dispoOut"\r
                      display-format="EEEE DD.MMMM.YYYY"\r
                      (ionChange)="controlForm.value.dispoOut= dispoOut.value">\r
                      <div slot="title">Date de mise \xE0 disposition au service outillage</div>\r
                    </ion-datetime>\r
                  </ion-content>\r
                </ng-template>\r
              </ion-modal>\r
            </ion-item>\r
\r
\r
            <!-- ******************************* -->\r
            <!-- ********   LA PIECE   ********* -->\r
            <!-- ******************************* -->\r
            <div class="flex-row">\r
\r
              <!-- ******************************* -->\r
              <!-- ********   reference   ******** -->\r
              <!-- ******************************* -->\r
\r
\r
              <ion-item>\r
                <ion-label position="floating">R\xE9f\xE9rence pi\xE8ce\r
                  <ion-text color="danger">*</ion-text>\r
                </ion-label>\r
                <ion-input required #refPlan formControlName="refPlan" type="text" placeholder="indiquer n\xB0 de plan">\r
                </ion-input>\r
              </ion-item>\r
\r
              <!-- ******************************* -->\r
              <!-- ********   INDICE   *********** -->\r
              <!-- ******************************* -->\r
\r
\r
              <ion-item>\r
                <ion-label position="floating">Indice plan\r
                  <ion-text color="danger">*</ion-text>\r
                </ion-label>\r
                <ion-input required #indPlan formControlName="indPlan" type="text"\r
                  placeholder="indiquer l 'indice du plan">\r
                </ion-input>\r
              </ion-item>\r
            </div>\r
\r
\r
            <!-- ******************************* -->\r
            <!-- *******   CHEMIN CAO   ******** -->\r
            <!-- ******************************* -->\r
\r
\r
            <ion-item>\r
              <ion-label position="floating">Format du mod\xE8le 3D fourni si n\xE9cessaire\r
                <!-- <ion-text color="danger">*</ion-text> -->\r
              </ion-label>\r
              <ion-input #caoPath formControlName="cheminCAO" type="text"\r
                placeholder="Fournir CAO et / ou chemin d\u2019acc\xE8s">\r
              </ion-input>\r
            </ion-item>\r
          </ion-card-content>\r
        </ion-card>\r
\r
\r
        <!-- ******************************* -->\r
        <!-- *******   LE RAPPORT   ******** -->\r
        <!-- ******************************* -->\r
        <ion-card>\r
          <ion-card-header color=light>\r
            <ion-card-title class="ion-text-uppercase">Le rapport</ion-card-title>\r
          </ion-card-header>\r
          <!-- ******************************* -->\r
          <!-- *******   DATE BUTOIR   ******* -->\r
          <!-- ******************************* -->\r
\r
\r
          <ion-item button id="open-date-butoir">\r
            <ion-label>Date butoir demand\xE9e</ion-label>\r
            <ion-icon slot=end icon="calendar-outline"></ion-icon>\r
            <ion-text slot="end">\r
              {{controlForm.value.dateBesoin | date:"dd/MM/yyyy"}}</ion-text>\r
            <!-- <ion-button id="open-modal">Open Datetime Modal</ion-button> -->\r
            <ion-modal trigger="open-date-butoir">\r
              <ng-template>\r
                <ion-content>\r
                  <ion-datetime #needDate presentation="date" formControlName="dateBesoin"\r
                    display-format="EEEE DD.MMMM.YYYY">\r
                    <div slot="title">Date butoir demand\xE9e</div>\r
                  </ion-datetime>\r
                </ion-content>\r
              </ng-template>\r
            </ion-modal>\r
          </ion-item>\r
\r
\r
          <!-- ******************************* -->\r
          <!-- *********   OI eOTP   ********* -->\r
          <!-- ******************************* -->\r
\r
\r
          <ion-item>\r
            <ion-label>Oi ou Eotp\r
              <ion-text color="danger">*</ion-text>\r
            </ion-label>\r
            <ion-input #ligneBudgetaire required formControlName="ligneBudgetaire" type="text"\r
              placeholder="Indiquez le n\xB0 pour imputation"></ion-input>\r
          </ion-item>\r
\r
          <!-- ******************************* -->\r
          <!-- ******   TYPE RAPPORT   ******* -->\r
          <!-- ******************************* -->\r
\r
\r
          <ion-item>\r
            <ion-label>Types de rapport</ion-label>\r
            <ion-select required #typeRapportSelect formControlName="typeRapport">\r
              <ion-select-option *ngFor="let type of typeRapport| keyvalue" [value]="type.value">{{type.value}}\r
              </ion-select-option>\r
            </ion-select>\r
          </ion-item>\r
        </ion-card>\r
\r
\r
      </ion-col>\r
      <ion-col size="6">\r
        <!-- ******************************* -->\r
        <!-- ******   LE CONTROLE   ******** -->\r
        <!-- ******************************* -->\r
        <ion-card>\r
          <ion-card-header color=light>\r
            <ion-card-title class="ion-text-uppercase">Le contr\xF4le</ion-card-title>\r
          </ion-card-header>\r
          <ion-card-content>\r
            <!-- ******************************* -->\r
            <!-- ******   DESCRIPTION   ******** -->\r
            <!-- ******************************* -->\r
            <div class="vertical">\r
              <ion-item lines="none">\r
                <ion-label>But du contr\xF4le, de l'essai ou de l 'expertise\r
                  <ion-text color="danger">*</ion-text>\r
                </ion-label>\r
              </ion-item>\r
              <!-- base_url: '/tinymce',\r
          suffix: '.min', -->\r
              <editor #ctrlReasons slot="" formControlName="description" [init]="{\r
            plugins: 'lists link image table wordcount',\r
            toolbar:'bold italic underline strikethrough forecolor fontsize styles | alignleft aligncenter alignright alignjustify | bullist numlist | h1 h2 h3 |',\r
            menubar: false,\r
            statusbar:false,\r
            object_resizing: true,\r
            placeholder:'Descriptif de la mesure demand\xE9e (contr\xF4le r\xE9ception, suite \xE0 choc, d\xE9m\xE9nagement d\u2019outillage ou autre)',\r
            height:150,\r
            inline: false\r
          }"></editor>\r
              <!-- <ion-textarea autoGrow required #ctrlReasons formControlName=" ctrlReasons " type="text " (ionChange)="test() "></ion-textarea> -->\r
              <!-- <ion-note></ion-note> -->\r
            </div>\r
\r
\r
            <!-- ******************************* -->\r
            <!-- *********   DETAIL   ********** -->\r
            <!-- ******************************* -->\r
            <div class="vertical">\r
              <ion-item lines="none">\r
                <ion-label>D\xE9tails de la mesure\r
                  <ion-text color="danger">*</ion-text>\r
                </ion-label>\r
              </ion-item>\r
              <editor #ctrlReasons slot="" formControlName="detailsControle" [init]="{\r
            plugins: 'lists link image table wordcount',\r
            menubar: false,\r
            statusbar:false,\r
            placeholder:'lieux, r\xE9f\xE9rentiel...',\r
            height:150\r
          }"></editor>\r
              <!-- <ion-textarea autoGrow required #ctrlDetails formControlName="ctrlDetails" type="text"\r
            placeholder="lieux, r\xE9f\xE9rentiel..."></ion-textarea> -->\r
            </div>\r
\r
            <!-- ******************************* -->\r
            <!-- **  PRECISION / TOLERANCES   ** -->\r
            <!-- ******************************* -->\r
            <div class="vertical">\r
              <ion-item lines="none">\r
                <ion-label>Pr\xE9cision demand\xE9e et attendue\r
                  <ion-text color="danger">*</ion-text>\r
                </ion-label>\r
              </ion-item>\r
              <editor #ctrlReasons slot="" formControlName="tolerances" [init]="{\r
              plugins: 'lists link image table wordcount',\r
              menubar: false,\r
              statusbar:false,\r
              placeholder:'IT plans et sp\xE9cifications de d\xE9finition',\r
              height:150\r
            }"></editor>\r
              <!-- <ion-textarea autoGrow required #tolerance formControlName="precisionTolerances" type="text"\r
              placeholder="IT plans et sp\xE9cifications de d\xE9finition"></ion-textarea> -->\r
            </div>\r
          </ion-card-content>\r
        </ion-card>\r
\r
      </ion-col>\r
    </ion-row>\r
    <ion-row>\r
      <ion-col size="12">\r
        <!-- *********************************************************************************************** -->\r
        <!-- *********************************************************************************************** -->\r
        <!-- ******************************* -->\r
        <!-- *******   LA MESURE   ********* -->\r
        <!-- ******************************* -->\r
        <ion-card *ngIf="requestState">\r
          <ion-card-header color=light>\r
            <ion-card-title class="ion-text-uppercase">La Mesure</ion-card-title>\r
          </ion-card-header>\r
          <ion-item>\r
            <ion-label position="stacked">Dur\xE9e d'immobilisation estim\xE9e de l'outillage</ion-label>\r
            <ion-input type="number" formControlName="immobilisationOutillage"></ion-input>\r
            <ion-note slot="end">en jours</ion-note>\r
          </ion-item>\r
\r
          <!-- Datetime in overlay -->\r
          <ion-item button id="open-date-interv">\r
            <ion-label>Date d'intervention</ion-label>\r
            <ion-icon slot=end icon="calendar-outline"></ion-icon>\r
            <ion-text slot="end">\r
              {{controlForm.value.interventionDate | date:"dd/MM/yyyy"}}</ion-text>\r
            <!-- TODO intervention -->\r
            <!-- <ion-text slot="end " *ngIf="toolRequest?.controle?.interventionDate">\r
          {{toolRequest?.controle?.interventionDate | date:"dd/MM/yyyy"}}</ion-text> -->\r
            <!-- <ion-button id="open-modal ">Open Datetime Modal</ion-button> -->\r
            <ion-modal trigger="open-date-interv">\r
              <ng-template>\r
                <ion-content>\r
                  <ion-datetime #interventionDate presentation="date" formControlName="interventionDate"\r
                    display-format="EEEE DD.MMMM.YYYY">\r
                    <div slot="title">Date d'intervention</div>\r
                  </ion-datetime>\r
                </ion-content>\r
              </ng-template>\r
            </ion-modal>\r
          </ion-item>\r
\r
          <div class="vertical">\r
\r
            <ion-item>\r
              <ion-label>Informations compl\xE9mentaires\r
                <ion-text color="danger">*</ion-text>\r
              </ion-label>\r
              <!-- <ion-input #infosComplementaire formControlName="infosComplementaire" type="text"\r
            placeholder="Information compl\xE9mentaire"></ion-input> -->\r
            </ion-item>\r
            <editor #infosComplementaire slot="" formControlName="infosComplementaire" [init]="{\r
            plugins: 'lists link image table wordcount',\r
            menubar: false,\r
            statusbar:false,\r
            placeholder:'Information compl\xE9mentaire',\r
            height:150\r
          }"></editor>\r
          </div>\r
\r
          <ion-item>\r
            <ion-label>Moyen de mesure</ion-label>\r
            <ion-select #moyenMesureSelect formControlName="moyenMesure">\r
              <ion-select-option *ngFor="let moyen of moyenMesure | keyvalue" [value]="moyen.value">{{moyen.value}}\r
              </ion-select-option>\r
            </ion-select>\r
          </ion-item>\r
        </ion-card>\r
      </ion-col>\r
    </ion-row>\r
  </ion-grid>\r
</form>`;

// angular:jit:style:file:src\app\tooling\components\control3-d\control3-dform\control3-dform.component.scss
var control3_dform_component_default2 = '/* src/app/tooling/components/control3-d/control3-dform/control3-dform.component.scss */\nion-list-header > ion-label {\n  color: var(--ion-color-primary);\n  font-weight: bold;\n  text-decoration: underline;\n}\nion-list-header > ion-label::after {\n  content: " :";\n}\n/*# sourceMappingURL=control3-dform.component.css.map */\n';

// src/app/tooling/components/control3-d/control3-dform/control3-dform.component.ts
var Control3DFormComponent = class Control3DFormComponent2 {
  // ============================================================================
  // INJECTION DEPENDANCES
  // ============================================================================
  fb = inject(FormBuilder);
  toolRequest = input(null);
  requestState = input({
    canManage: false,
    canUpdate: false,
    canEdit: false
  });
  submit = output();
  update = output();
  statusChange = output();
  // ============================================================================
  // PROPRIETES
  // ============================================================================
  moyenMesure = MoyenMesure;
  typeRapport = TypeRapport;
  // Formulaires
  toolRequestForm;
  controlForm;
  outillNoRefSAPForm;
  // État du formulaire
  isEditMode = computed(() => !!this.toolRequest()?.id);
  formValid = signal(false);
  // Configuration TinyMCE
  editorConfig = {
    plugins: "lists link image table wordcount",
    toolbar: "bold italic underline strikethrough forecolor fontsize styles | alignleft aligncenter alignright alignjustify | bullist numlist | h1 h2 h3",
    menubar: false,
    statusbar: false,
    object_resizing: true,
    height: 150,
    inline: false
  };
  // ============================================================================
  // CONSTRUCTOR
  // ============================================================================
  constructor() {
    this.outillNoRefSAPForm = this.fb.group({
      identification: [""],
      description: [""],
      localisation: [""]
    });
    this.toolRequestForm = this.fb.group({
      id: [null],
      statut: [""]
      // Ajouter les autres champs nécessaires
    });
    this.controlForm = this.fb.group({
      id: [null],
      outillage: [null],
      outillNoRefSAP: [this.outillNoRefSAPForm],
      bloquantProd: [false],
      dispoOut: [null],
      refPlan: ["", Validators.required],
      indPlan: ["", Validators.required],
      cheminCAO: [""],
      dateBesoin: [null],
      ligneBudgetaire: ["", Validators.required],
      typeRapport: [""],
      description: ["", Validators.required],
      detailsControle: ["", Validators.required],
      tolerances: ["", Validators.required],
      immobilisationOutillage: [null],
      interventionDate: [null],
      infosComplementaire: [""],
      moyenMesure: [""],
      visaControleur: [""]
    });
    effect(() => {
      console.log("hello from effect ctrl3D");
      const toolReq = this.toolRequest();
      const ctrlReq = toolReq.typeData;
      if (toolReq) {
        this.toolRequestForm.patchValue(toolReq, { emitEvent: false });
      }
      if (ctrlReq) {
        this.controlForm.patchValue(ctrlReq, { emitEvent: false });
      }
    });
    effect(() => {
      this.formValid.set(this.controlForm.valid && this.toolRequestForm.valid);
    });
  }
  // ============================================================================
  // MÉTHODES PUBLIQUES
  // ============================================================================
  onToolSelected(tool) {
    this.controlForm.patchValue({ outillage: tool });
  }
  formatDate(dateValue) {
    return new Date(dateValue);
  }
  handleSubmit() {
    if (this.controlForm.valid) {
      const data = __spreadProps(__spreadValues({}, this.toolRequestForm.value), {
        typeData: this.controlForm.value
      });
      if (this.isEditMode()) {
        this.update.emit(data);
      } else {
        this.submit.emit(data);
      }
    }
  }
  handleStatusChange(newStatus) {
    this.statusChange.emit(newStatus);
    this.toolRequestForm.patchValue({ statut: newStatus });
  }
  static ctorParameters = () => [];
  static propDecorators = {
    toolRequest: [{ type: Input, args: [{ isSignal: true, alias: "toolRequest", required: false, transform: void 0 }] }],
    requestState: [{ type: Input, args: [{ isSignal: true, alias: "requestState", required: false, transform: void 0 }] }],
    submit: [{ type: Output, args: ["submit"] }],
    update: [{ type: Output, args: ["update"] }],
    statusChange: [{ type: Output, args: ["statusChange"] }]
  };
};
Control3DFormComponent = __decorate([
  Component({
    selector: "app-control3-dform",
    template: control3_dform_component_default,
    standalone: true,
    imports: [
      IonCardTitle,
      ReactiveFormsModule,
      ToolInputComponent,
      NgIf,
      NgForOf,
      EditorComponent,
      DatePipe,
      KeyValuePipe,
      IonGrid,
      IonRow,
      IonCol,
      IonInput,
      IonCard,
      IonCardHeader,
      IonCardContent,
      IonList,
      IonListHeader,
      IonLabel,
      IonItem,
      IonText,
      IonIcon,
      IonModal,
      IonContent,
      IonSelectOption,
      IonNote,
      IonSelect,
      IonSelectOption,
      IonToggle,
      IonDatetime
    ],
    styles: [control3_dform_component_default2]
  })
], Control3DFormComponent);

// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
function takeUntilDestroyed(destroyRef) {
  if (!destroyRef) {
    assertInInjectionContext(takeUntilDestroyed);
    destroyRef = inject(DestroyRef);
  }
  const destroyed$ = new Observable((observer) => {
    const unregisterFn = destroyRef.onDestroy(observer.next.bind(observer));
    return unregisterFn;
  });
  return (source) => {
    return source.pipe(takeUntil(destroyed$));
  };
}

// src/app/tooling/components/control3-d/control.page.ts
var Control3DPage = class Control3DPage2 {
  ////////////////////////////////////////////////////
  //INJECTION DEPENDANCES
  ////////////////////////////////////////////////////
  toolRequestService = inject(ToolRequestService);
  toolRequestManager = inject(ToolRequestManager);
  loaderService = inject(LoadingService);
  alertService = inject(AlertService);
  navCtrl = inject(NavController);
  route = inject(ActivatedRoute);
  // ============================================================================
  // SIGNALS (État réactif)
  // ============================================================================
  toolRequest = signal(null);
  // protected readonly controlRequest = signal<ControlRequest | null>(null);
  requestState = signal(new RequestState());
  pageTitle = signal("Nouvelle demande de contr\xF4le 3D");
  toolRequestId;
  // controlForm: FormGroup
  // toolRequestForm: FormGroup
  // outillNoRefSAPForm: FormGroup;
  // ============================================================================
  // LIFECYCLE HOOKS
  // ============================================================================
  constructor() {
    this.toolRequestId = this.route.snapshot.paramMap.get("id");
    effect(() => {
      const tool = this.toolRequest();
      if (tool?.id) {
        this.pageTitle.set(`Modification demande de contr\xF4le 3D : ID ${tool.id}`);
      }
    });
  }
  ionViewCanEnter() {
    this.toolRequestService.getToolRequest(this.toolRequestId).pipe(takeUntilDestroyed()).subscribe({
      next: (toolRequest) => {
        this.toolRequest.set(toolRequest);
        this.requestState.set(this.toolRequestManager.getStatus(toolRequest.statut));
      },
      error: (error) => this.handleError("Chargement de la demande", error)
    });
  }
  // ============================================================================
  // HANDLERS D'ÉVÉNEMENTS
  // ============================================================================
  onSubmit(toolRequest) {
    this.loaderService.startLoading("Cr\xE9ation de la demande");
    this.toolRequestService.createToolRequest(toolRequest).subscribe({
      next: () => {
        this.alertService.simpleAlert("Succ\xE8s", "Cr\xE9ation d'une demande", "La demande a bien \xE9t\xE9 cr\xE9\xE9e. Vous allez \xEAtre redirig\xE9 vers la liste des demandes").then(() => {
          this.navCtrl.navigateRoot("tooling/tool-request-list");
        });
      },
      error: (error) => this.handleError("Cr\xE9ation de la demande", error),
      complete: () => this.loaderService.stopLoading()
    });
  }
  onUpdate(toolRequest) {
    this.loaderService.startLoading("Mise \xE0 jour de la demande");
    this.toolRequestService.updateToolRequest(toolRequest).subscribe({
      next: () => {
        this.alertService.simpleAlert("Succ\xE8s", "Mise \xE0 jour d'une demande", "La demande a bien \xE9t\xE9 modifi\xE9e. Vous allez \xEAtre redirig\xE9 vers la liste des demandes").then(() => {
          this.navCtrl.navigateRoot("tooling/tool-request-list");
        });
      },
      error: (error) => this.handleError("Mise \xE0 jour de la demande", error),
      complete: () => this.loaderService.stopLoading()
    });
  }
  onStatusChange(newStatus) {
    const currentToolRequest = this.toolRequest();
    if (currentToolRequest) {
      this.toolRequest.set(__spreadProps(__spreadValues({}, currentToolRequest), { statut: newStatus }));
    }
  }
  // ============================================================================
  // MÉTHODES PRIVÉES
  // ============================================================================
  handleError(operation, error) {
    console.error(`[Control3DPage] ${operation}:`, error);
    this.alertService.simpleAlert("Erreur", operation, "Une erreur est survenue. Veuillez v\xE9rifier les donn\xE9es et r\xE9essayer.");
    this.loaderService.stopLoading();
  }
  static ctorParameters = () => [];
};
Control3DPage = __decorate([
  Component({
    selector: "app-control",
    template: control_page_default,
    standalone: true,
    imports: [
      Control3DFormComponent,
      ToolRequestFooterComponent,
      IonHeader,
      IonToolbar,
      IonTitle,
      IonContent,
      IonFooter
    ],
    styles: [control_page_default2]
  })
], Control3DPage);

// angular:jit:template:file:src\app\tooling\components\manage-team\manage-team.page.html
var manage_team_page_default = `<ion-header>\r
  <ion-toolbar color=dark>\r
    <ion-title>{{page.title}}</ion-title>\r
  </ion-toolbar>\r
</ion-header>\r
\r
<ion-content [fullscreen]="false" class="content">\r
  <ion-popover trigger="trigger-button" triggerAction="click" side="top" alignment="center"\r
    component="toolInputComponent">\r
    <ng-template>\r
      <ion-content>Cr\xE9er un groupe</ion-content>\r
      <ion-input #inputGroup type="text" placeholder="Nom du groupe"></ion-input>\r
      <ion-button (click)="addGroupClick(inputGroup.value.toString())" expand="block" color=primary>\r
        Ajouter\r
      </ion-button>\r
    </ng-template>\r
  </ion-popover>\r
  <div class="content">\r
    <ion-card>\r
      <ion-card-header color="light">\r
        <ion-card-title>Groupes d'affectations\r
        </ion-card-title>\r
      </ion-card-header>\r
      <ion-card-content>\r
        <ion-toolbar>\r
          <ion-button slot=end size=small id="trigger-button">\r
            <ion-icon slot="start" name="add"></ion-icon>\r
            Cr\xE9er\r
          </ion-button>\r
        </ion-toolbar>\r
        <ion-list>\r
          <ion-item *ngFor="let group of groups">\r
            <ion-label>\r
              {{group.libelle}}\r
            </ion-label>\r
          </ion-item>\r
        </ion-list>\r
      </ion-card-content>\r
    </ion-card>\r
    <ion-card class="table-card">\r
      <ion-card-header color="light">\r
        <ion-card-title>Liste des utilisateurs</ion-card-title>\r
      </ion-card-header>\r
      <ion-card-content class="table-card-content">\r
        <div class="table">\r
          <ion-toolbar>\r
            <ion-buttons slot="end">\r
              <ion-button size=small>\r
                Tout\r
              </ion-button>\r
              <ion-button slot=end *ngIf="!selection.isEmpty()" size=small\r
                (click)="removeUsersOfTeam(this.selection.selected)" color=success fill=solid>\r
                Faire sortir de l'\xE9quipe\r
              </ion-button>\r
            </ion-buttons>\r
          </ion-toolbar>\r
          <table mat-table class="ion-margin" #table [dataSource]="toolsUserDataSource">\r
            <ng-container matColumnDef="nom">\r
              <th mat-header-cell *matHeaderCellDef> Nom </th>\r
              <td mat-cell *matCellDef="let user"> {{user.nom}} </td>\r
            </ng-container>\r
            <ng-container matColumnDef="prenom">\r
              <th mat-header-cell *matHeaderCellDef> Pr\xE9nom </th>\r
              <td mat-cell *matCellDef="let user"> {{user.prenom}} </td>\r
            </ng-container>\r
            <ng-container matColumnDef="groupeAffectation">\r
              <th mat-header-cell *matHeaderCellDef> Groupe </th>\r
              <td mat-cell *matCellDef="let user">\r
                <ion-list *ngIf="user.groupeAffected.length > 0">\r
                  <ion-label *ngFor="let group of user.groupeAffected">\r
                    {{group.libelle}}\r
                  </ion-label>\r
                </ion-list>\r
                <ion-item lines="none" color="light" *ngIf="user.groupeAffected.length === 0">\r
                  <ion-select *ngIf="user.groupeAffected.length === 0" #select multiple="true"\r
                    placeholder="Selectionner un groupe" (ionChange)="addGroupToUser(select.value, user)">\r
                    <ion-select-option *ngFor="let group of groups" [value]="group">\r
                      {{group.libelle}}</ion-select-option>\r
                  </ion-select>\r
                </ion-item>\r
              </td>\r
            </ng-container>\r
            <ng-container matColumnDef="progAvion">\r
              <th mat-header-cell *matHeaderCellDef> Programme avion </th>\r
              <td mat-cell *matCellDef="let user"> {{user.programmeAvion}} </td>\r
            </ng-container>\r
            <ng-container matColumnDef="lastCon">\r
              <th mat-header-cell *matHeaderCellDef> Derni\xE8re connexion </th>\r
              <td mat-cell *matCellDef="let user"> {{user.lastCon | date:"EEE dd/MM/yy"}} </td>\r
            </ng-container>\r
            <ng-container matColumnDef="buttons">\r
              <th mat-header-cell *matHeaderCellDef> </th>\r
              <td mat-cell *matCellDef="let user">\r
                <ion-button *ngIf="user.isUpdated" size=small (click)="updateUser(user)" color=secondary>\r
                  <ion-icon slot="icon-only" name="save-outline"></ion-icon>\r
                </ion-button>\r
                <ion-button *ngIf="!user.isActive" size=small (click)="user.isActive=true">\r
                  Accepter\r
                </ion-button>\r
              </td>\r
            </ng-container>\r
            <tr mat-header-row *matHeaderRowDef="displayedColumns; sticky: true"></tr>\r
            <tr mat-row *matRowDef="let row; columns: displayedColumns" (click)="selection.toggle(row)"\r
              [class]="selection.isSelected(row) ? 'row-selected' : ''"></tr>\r
          </table>\r
        </div>\r
      </ion-card-content>\r
    </ion-card>\r
  </div>\r
\r
\r
</ion-content>\r
`;

// angular:jit:style:file:src\app\tooling\components\manage-team\manage-team.page.scss
var manage_team_page_default2 = "/* src/app/tooling/components/manage-team/manage-team.page.scss */\n.content {\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n}\n.content ion-card {\n  max-height: 100%;\n  flex-grow: 1;\n}\n.content ion-card .table,\n.content ion-card .table-card-content {\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n}\n.content ion-card .table table,\n.content ion-card .table-card-content table {\n  width: 100%;\n}\n.content .table-card {\n  flex-grow: 4;\n}\n.row-selected > td {\n  color: var(--ion-color-danger);\n}\ntr:hover > td {\n  color: var(--ion-color-danger);\n}\n/*# sourceMappingURL=manage-team.page.css.map */\n";

// src/app/tooling/components/manage-team/manage-team.page.ts
var ManageTeamPage = class ManageTeamPage2 {
  userService;
  programService;
  page = {
    title: "G\xE9rer l'\xE9quipe"
  };
  toolsUserDataSource = new MatTableDataSource();
  selection = new SelectionModel(true, []);
  displayedColumns = ["nom", "prenom", "groupeAffectation", "lastCon", "buttons"];
  groups;
  programs;
  constructor(userService, programService) {
    this.userService = userService;
    this.programService = programService;
  }
  ngOnInit() {
    this.getGroups();
    this.getToolUsers();
  }
  getToolUsers() {
    return this.userService.getUsers({ service: "OUTILLAGE" }).subscribe((responseUsers) => this.toolsUserDataSource.data = responseUsers.filter((user) => user.service.nom === "OUTILLAGE"));
  }
  getPrograms() {
    return new Promise((resolve, reject) => {
      this.programService.getPrograms().subscribe((responsePrograms) => {
        this.programs = responsePrograms;
        resolve();
      });
    });
  }
  getGroups() {
    this.userService.getGroups().subscribe((responseGroups) => {
      this.groups = responseGroups;
    });
  }
  addGroupClick(inputGroup) {
    if (inputGroup) {
      const affectGroup = {
        libelle: inputGroup
      };
      this.userService.createGroup(affectGroup).subscribe((responseGroup) => {
        this.groups.push(responseGroup);
      });
    }
  }
  addGroupToUser(selectOpt, user) {
    user.groupeAffected = selectOpt;
    user.isUpdated = true;
  }
  updateUser(user) {
  }
  removeUsersOfTeam(users) {
  }
  static ctorParameters = () => [
    { type: UsersService },
    { type: ProgramsService }
  ];
};
ManageTeamPage = __decorate([
  Component({
    selector: "app-manage-team",
    template: manage_team_page_default,
    standalone: true,
    imports: [
      IonicModule,
      NgForOf,
      NgIf,
      MatTable,
      MatColumnDef,
      MatHeaderCellDef,
      MatHeaderCell,
      MatCellDef,
      MatCell,
      MatHeaderRowDef,
      MatHeaderRow,
      MatRowDef,
      MatRow,
      DatePipe
    ],
    styles: [manage_team_page_default2]
  })
], ManageTeamPage);

// angular:jit:template:file:src\app\tooling\components\indicators\indicators.page.html
var indicators_page_default = `<!-- <ion-header>\r
    <ion-toolbar>\r
        <ion-title>Indicateurs</ion-title>\r
    </ion-toolbar>\r
</ion-header> -->\r
\r
<ion-content [fullscreen]="true">\r
    <div class="graph">\r
        <app-indicator-graph *ngIf="requestTypeDistribution" [indicator]="{name: 'R\xE9partition', repartitionObj: requestTypeDistribution}"></app-indicator-graph>\r
        <app-indicator-number [indicator]="{name : 'En cours', value: onGoingRequestCount}"></app-indicator-number>\r
        <app-indicator-number [indicator]="{name : 'Ouvertes', value: openRequestCount}"></app-indicator-number>\r
    </div>\r
</ion-content>`;

// angular:jit:style:file:src\app\tooling\components\indicators\indicators.page.scss
var indicators_page_default2 = "/* src/app/tooling/components/indicators/indicators.page.scss */\n.graph {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  overflow: hidden;\n}\n.graph > * {\n  min-width: 25%;\n  max-width: 50%;\n  max-height: 50%;\n  min-height: 1/3;\n}\n/*# sourceMappingURL=indicators.page.css.map */\n";

// angular:jit:template:file:src\app\shared\indicators\indicator-graph\indicator-graph.component.html
var indicator_graph_component_default = '<ion-card color=primary class="ion-no-padding">\r\n  <ion-card-header>\r\n    <ion-card-subtitle>\r\n      {{indicator.name}}\r\n    </ion-card-subtitle>\r\n  </ion-card-header>\r\n  <ion-card-content>\r\n    <canvas #canvas></canvas>\r\n  </ion-card-content>\r\n</ion-card>\r\n';

// angular:jit:style:file:src\app\shared\indicators\indicator-graph\indicator-graph.component.scss
var indicator_graph_component_default2 = "/* src/app/shared/indicators/indicator-graph/indicator-graph.component.scss */\n/*# sourceMappingURL=indicator-graph.component.css.map */\n";

// src/app/shared/indicators/indicator-graph/indicator-graph.component.ts
var IndicatorGraphComponent = class IndicatorGraphComponent2 {
  indicator;
  canvas;
  pieChart;
  constructor() {
  }
  ngAfterViewInit() {
    console.log(this.indicator);
    this.pieChart = new auto_default(this.canvas.nativeElement, {
      type: "pie",
      data: {
        labels: Object.entries(this.indicator.repartitionObj).map((test) => test[0]),
        datasets: [
          {
            label: `Prefix-${this.indicator.name}`,
            backgroundColor: ["#505F69", "#6EB4CD"],
            borderColor: "#E1E1D7",
            borderWidth: 1,
            borderJoinStyle: "miter",
            data: Object.entries(this.indicator.repartitionObj).map((test) => test[1])
          }
        ]
      },
      options: {
        plugins: {}
      }
    });
    this.pieChart.update();
  }
  ngOnInit() {
    console.log("init", this.indicator);
  }
  static ctorParameters = () => [];
  static propDecorators = {
    indicator: [{ type: Input }],
    canvas: [{ type: ViewChild, args: ["canvas"] }]
  };
};
IndicatorGraphComponent = __decorate([
  Component({
    selector: "app-indicator-graph",
    template: indicator_graph_component_default,
    standalone: true,
    imports: [IonicModule],
    styles: [indicator_graph_component_default2]
  })
], IndicatorGraphComponent);

// angular:jit:template:file:src\app\shared\indicators\indicator-number\indicator-number.component.html
var indicator_number_component_default = "<ion-card color=primary>\r\n    <ion-card-header>\r\n        <ion-card-subtitle>{{indicator.name}}</ion-card-subtitle>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n        <ion-text>\r\n            {{indicator.value}}\r\n        </ion-text>\r\n\r\n    </ion-card-content>\r\n</ion-card>\r\n";

// angular:jit:style:file:src\app\shared\indicators\indicator-number\indicator-number.component.scss
var indicator_number_component_default2 = "/* src/app/shared/indicators/indicator-number/indicator-number.component.scss */\nion-text {\n  font-size: 500%;\n  color: var(--ion-color-primary-contrast);\n}\nion-card-content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=indicator-number.component.css.map */\n";

// src/app/shared/indicators/indicator-number/indicator-number.component.ts
var IndicatorNumberComponent = class IndicatorNumberComponent2 {
  indicator;
  constructor() {
  }
  ngOnInit() {
  }
  static ctorParameters = () => [];
  static propDecorators = {
    indicator: [{ type: Input }]
  };
};
IndicatorNumberComponent = __decorate([
  Component({
    selector: "app-indicator-number",
    template: indicator_number_component_default,
    standalone: true,
    imports: [IonicModule],
    styles: [indicator_number_component_default2]
  })
], IndicatorNumberComponent);

// src/app/tooling/components/indicators/indicators.page.ts
var IndicatorsPage = class IndicatorsPage2 {
  toolRequestService;
  repartitionDemandesCanvas;
  openRequestCount = 0;
  onGoingRequestCount = 0;
  requestTypeDistribution;
  constructor(toolRequestService) {
    this.toolRequestService = toolRequestService;
  }
  ngOnInit() {
  }
  ionViewWillEnter() {
  }
  static ctorParameters = () => [
    { type: ToolRequestService }
  ];
  static propDecorators = {
    repartitionDemandesCanvas: [{ type: ViewChild, args: ["repartitionDemandesCanvas"] }]
  };
};
IndicatorsPage = __decorate([
  Component({
    selector: "app-indicators",
    template: indicators_page_default,
    standalone: true,
    imports: [
      IonicModule,
      NgIf,
      IndicatorGraphComponent,
      IndicatorNumberComponent
    ],
    styles: [indicators_page_default2]
  })
], IndicatorsPage);

// src/app/tooling/tooling.routes.ts
var TOOLING_ROUTES = [
  {
    path: "",
    component: ToolingPage,
    children: [
      { path: "new-tool", component: NewToolPage },
      { path: "requests", component: ToolRequestsPage },
      {
        path: "list",
        canActivate: [RoleGuard],
        data: { expectedRole: ["ROLE_ADMIN", "ROLE_RESP_OUTIL"] },
        component: ToolListPage
      },
      { path: "repair", component: MaintenanceReparationPage },
      { path: "repair/:id", component: MaintenanceReparationPage },
      { path: "3d", component: Control3DPage },
      { path: "3d/:id", component: Control3DPage },
      {
        path: "manage-team",
        canActivate: [RoleGuard],
        data: { expectedRole: ["ROLE_ADMIN", "ROLE_RESP_OUTIL", "ROLE_CE_OUTIL"] },
        component: ManageTeamPage
      },
      {
        path: "indicators",
        canActivate: [RoleGuard],
        data: { expectedRole: ["ROLE_ADMIN", "ROLE_RESP_OUTIL", "ROLE_CE_OUTIL"] },
        component: IndicatorsPage
      }
    ]
  }
];
export {
  TOOLING_ROUTES
};
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
  (**
   * @license Angular v18.2.14
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=tooling.routes-2YFG3MKL.js.map

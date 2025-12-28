import { Component, input, OnInit, output } from '@angular/core';
import { IonButton, IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-request-header',
  templateUrl: './request-header.component.html',
  styleUrls: ['./request-header.component.scss'],
  standalone:true,
  imports:[
        IonHeader,
        IonToolbar,
        IonTitle,
        IonIcon,
        IonButton
  ]
})
export class RequestHeaderComponent {
toggleEditMode(arg0: boolean) {
 this.onEditModeChange.emit(arg0);
}
  public readonly title = input.required<string>();
  public readonly isLocked = input<boolean | null>();
  public readonly canEdit = input<boolean | null>();
  public readonly onEditModeChange = output<boolean>();
}

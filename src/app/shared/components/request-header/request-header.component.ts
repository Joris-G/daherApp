import { Component, input, OnInit, output } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
@Component({
  standalone: true,
    selector: 'app-request-header',
    templateUrl: './request-header.component.html',
    styleUrls: ['./request-header.component.scss'],
    imports: [
      ToolbarModule, ButtonModule
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

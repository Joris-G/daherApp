import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToolRequestTableComponent } from './tool-request-table.component';

describe('ToolRequestTableComponent', () => {
  let component: ToolRequestTableComponent;
  let fixture: ComponentFixture<ToolRequestTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [IonicModule.forRoot(), ToolRequestTableComponent]
}).compileComponents();

    fixture = TestBed.createComponent(ToolRequestTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

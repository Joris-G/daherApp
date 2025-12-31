import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToolFormComponent } from './tool-form.component';

describe('ToolFormComponent', () => {
  let component: ToolFormComponent;
  let fixture: ComponentFixture<ToolFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [IonicModule.forRoot(), ToolFormComponent]
}).compileComponents();

    fixture = TestBed.createComponent(ToolFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

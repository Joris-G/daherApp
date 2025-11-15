import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaintenanceItemFormComponent } from './maintenance-item-form.component';

describe('MaintenanceItemFormComponent', () => {
  let component: MaintenanceItemFormComponent;
  let fixture: ComponentFixture<MaintenanceItemFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [IonicModule.forRoot(), MaintenanceItemFormComponent]
}).compileComponents();

    fixture = TestBed.createComponent(MaintenanceItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaintenanceItemComponent } from './maintenance-item.component';

describe('MaintenanceItemComponent', () => {
  let component: MaintenanceItemComponent;
  let fixture: ComponentFixture<MaintenanceItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [IonicModule.forRoot(), MaintenanceItemComponent]
}).compileComponents();

    fixture = TestBed.createComponent(MaintenanceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaintenanceReparationPage } from './maintenance-reparation.page';

describe('MaintenanceReparationPage', () => {
  let component: MaintenanceReparationPage;
  let fixture: ComponentFixture<MaintenanceReparationPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [IonicModule.forRoot(), MaintenanceReparationPage]
}).compileComponents();

    fixture = TestBed.createComponent(MaintenanceReparationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

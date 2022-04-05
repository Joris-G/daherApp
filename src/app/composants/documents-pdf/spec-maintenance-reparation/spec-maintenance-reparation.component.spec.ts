import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpecMaintenanceReparationComponent } from './spec-maintenance-reparation.component';

describe('SpecMaintenanceReparationComponent', () => {
  let component: SpecMaintenanceReparationComponent;
  let fixture: ComponentFixture<SpecMaintenanceReparationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecMaintenanceReparationComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpecMaintenanceReparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

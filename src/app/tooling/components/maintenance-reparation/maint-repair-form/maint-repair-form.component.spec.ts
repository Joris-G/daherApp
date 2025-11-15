import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaintRepairFormComponent } from './maint-repair-form.component';

describe('MaintRepairFormComponent', () => {
  let component: MaintRepairFormComponent;
  let fixture: ComponentFixture<MaintRepairFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [IonicModule.forRoot(), MaintRepairFormComponent]
}).compileComponents();

    fixture = TestBed.createComponent(MaintRepairFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

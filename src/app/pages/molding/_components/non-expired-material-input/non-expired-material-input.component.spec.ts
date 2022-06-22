import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NonExpiredMaterialInputComponent } from './non-expired-material-input.component';

describe('NonExpiredMaterialInputComponent', () => {
  let component: NonExpiredMaterialInputComponent;
  let fixture: ComponentFixture<NonExpiredMaterialInputComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NonExpiredMaterialInputComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NonExpiredMaterialInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

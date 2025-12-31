import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SboFormComponent } from './sbo-form.component';

describe('SboFormComponent', () => {
  let component: SboFormComponent;
  let fixture: ComponentFixture<SboFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [IonicModule.forRoot(), SboFormComponent]
}).compileComponents();

    fixture = TestBed.createComponent(SboFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KitDetailsComponent } from './kit-details.component';

describe('KitDetailsComponent', () => {
  let component: KitDetailsComponent;
  let fixture: ComponentFixture<KitDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [IonicModule.forRoot(), KitDetailsComponent]
}).compileComponents();

    fixture = TestBed.createComponent(KitDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

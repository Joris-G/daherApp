import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndicatorsPage } from './indicators.page';

describe('IndicatorsPage', () => {
  let component: IndicatorsPage;
  let fixture: ComponentFixture<IndicatorsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [IonicModule.forRoot(), IndicatorsPage]
}).compileComponents();

    fixture = TestBed.createComponent(IndicatorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

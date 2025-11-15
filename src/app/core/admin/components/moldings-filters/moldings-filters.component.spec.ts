import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoldingsFiltersComponent } from './moldings-filters.component';

describe('MoldingsFiltersComponent', () => {
  let component: MoldingsFiltersComponent;
  let fixture: ComponentFixture<MoldingsFiltersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [IonicModule.forRoot(), MoldingsFiltersComponent]
}).compileComponents();

    fixture = TestBed.createComponent(MoldingsFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

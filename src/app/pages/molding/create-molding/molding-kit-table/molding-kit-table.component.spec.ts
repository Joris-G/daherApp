import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoldingKitTableComponent } from './molding-kit-table.component';

describe('MoldingKitTableComponent', () => {
  let component: MoldingKitTableComponent;
  let fixture: ComponentFixture<MoldingKitTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MoldingKitTableComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MoldingKitTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

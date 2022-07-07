import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoldingMaterialsTableComponent } from './molding-materials-table.component';

describe('MoldingMaterialsTableComponent', () => {
  let component: MoldingMaterialsTableComponent;
  let fixture: ComponentFixture<MoldingMaterialsTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MoldingMaterialsTableComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MoldingMaterialsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

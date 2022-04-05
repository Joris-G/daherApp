import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Control3DPage } from './control.page';

describe('Control3DPage', () => {
  let component: Control3DPage;
  let fixture: ComponentFixture<Control3DPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Control3DPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Control3DPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

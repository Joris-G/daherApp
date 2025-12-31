import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RequestHeaderComponent } from './request-header.component';

describe('RequestHeaderComponent', () => {
  let component: RequestHeaderComponent;
  let fixture: ComponentFixture<RequestHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [IonicModule.forRoot(), RequestHeaderComponent]
}).compileComponents();

    fixture = TestBed.createComponent(RequestHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToolRequestsPage } from './tool-requests.page';

describe('ToolRequestsPage', () => {
  let component: ToolRequestsPage;
  let fixture: ComponentFixture<ToolRequestsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [IonicModule.forRoot(), ToolRequestsPage]
}).compileComponents();

    fixture = TestBed.createComponent(ToolRequestsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

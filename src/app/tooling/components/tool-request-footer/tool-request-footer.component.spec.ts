import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToolRequestFooterComponent } from './tool-request-footer.component';

describe('ToolRequestFooterComponent', () => {
  let component: ToolRequestFooterComponent;
  let fixture: ComponentFixture<ToolRequestFooterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [IonicModule.forRoot(), ToolRequestFooterComponent]
}).compileComponents();

    fixture = TestBed.createComponent(ToolRequestFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

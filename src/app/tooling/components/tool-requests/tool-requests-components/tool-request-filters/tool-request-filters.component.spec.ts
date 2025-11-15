import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToolRequestFiltersComponent } from './tool-request-filters.component';

describe('ToolRequestFiltersComponent', () => {
  let component: ToolRequestFiltersComponent;
  let fixture: ComponentFixture<ToolRequestFiltersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [IonicModule.forRoot(), ToolRequestFiltersComponent]
}).compileComponents();

    fixture = TestBed.createComponent(ToolRequestFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

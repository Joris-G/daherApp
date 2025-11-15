import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManageTeamPage } from './manage-team.page';

describe('ManageTeamPage', () => {
  let component: ManageTeamPage;
  let fixture: ComponentFixture<ManageTeamPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [IonicModule.forRoot(), ManageTeamPage]
}).compileComponents();

    fixture = TestBed.createComponent(ManageTeamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

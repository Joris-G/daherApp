import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NidaComponent } from './nida.component';

describe('NidaComponent', () => {
  let component: NidaComponent;
  let fixture: ComponentFixture<NidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

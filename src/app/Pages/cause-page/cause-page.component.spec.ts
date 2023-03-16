import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CausePageComponent } from './cause-page.component';

describe('CausePageComponent', () => {
  let component: CausePageComponent;
  let fixture: ComponentFixture<CausePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CausePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CausePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

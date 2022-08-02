import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamheaderComponent } from './examheader.component';

describe('ExamheaderComponent', () => {
  let component: ExamheaderComponent;
  let fixture: ComponentFixture<ExamheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

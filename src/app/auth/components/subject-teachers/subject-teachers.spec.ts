import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectTeachers } from './subject-teachers';

describe('SubjectTeachers', () => {
  let component: SubjectTeachers;
  let fixture: ComponentFixture<SubjectTeachers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectTeachers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectTeachers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

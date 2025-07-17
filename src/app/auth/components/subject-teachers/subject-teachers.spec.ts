import { ComponentFixture, TestBed } from '@angular/core/testing';

// If SubjectTeachers is a default export:
import { SubjectTeachers } from './subject-teachers';

// If SubjectTeachers is not the default export but is exported with a different name, use:
// import { ActualExportedName } from './subject-teachers';

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

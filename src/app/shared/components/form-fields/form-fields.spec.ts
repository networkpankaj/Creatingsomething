import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFields } from './form-fields';

describe('FormFields', () => {
  let component: FormFields;
  let fixture: ComponentFixture<FormFields>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFields]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormFields);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

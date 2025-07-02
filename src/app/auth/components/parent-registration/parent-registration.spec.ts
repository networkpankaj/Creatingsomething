import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentRegistration } from './parent-registration';

describe('ParentRegistration', () => {
  let component: ParentRegistration;
  let fixture: ComponentFixture<ParentRegistration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentRegistration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentRegistration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

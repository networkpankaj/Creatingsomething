import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentProfiles } from './parent-profiles';

describe('ParentProfiles', () => {
  let component: ParentProfiles;
  let fixture: ComponentFixture<ParentProfiles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentProfiles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentProfiles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

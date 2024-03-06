import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursefeatureComponent } from './coursefeature.component';

describe('CoursefeatureComponent', () => {
  let component: CoursefeatureComponent;
  let fixture: ComponentFixture<CoursefeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursefeatureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoursefeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

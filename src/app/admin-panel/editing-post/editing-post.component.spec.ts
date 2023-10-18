import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditingPostComponent } from './editing-post.component';

describe('EditingPostComponent', () => {
  let component: EditingPostComponent;
  let fixture: ComponentFixture<EditingPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditingPostComponent]
    });
    fixture = TestBed.createComponent(EditingPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

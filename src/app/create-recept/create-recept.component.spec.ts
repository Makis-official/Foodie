import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReceptComponent } from './create-recept.component';

describe('CreateReceptComponent', () => {
  let component: CreateReceptComponent;
  let fixture: ComponentFixture<CreateReceptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateReceptComponent]
    });
    fixture = TestBed.createComponent(CreateReceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

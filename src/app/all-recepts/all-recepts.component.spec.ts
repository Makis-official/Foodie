import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllReceptsComponent } from './all-recepts.component';

describe('AllReceptsComponent', () => {
  let component: AllReceptsComponent;
  let fixture: ComponentFixture<AllReceptsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllReceptsComponent]
    });
    fixture = TestBed.createComponent(AllReceptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

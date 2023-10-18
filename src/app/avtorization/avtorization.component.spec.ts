import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvtorizationComponent } from './avtorization.component';

describe('AvtorizationComponent', () => {
  let component: AvtorizationComponent;
  let fixture: ComponentFixture<AvtorizationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvtorizationComponent]
    });
    fixture = TestBed.createComponent(AvtorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneReceptComponent } from './one-recept.component';

describe('OneReceptComponent', () => {
  let component: OneReceptComponent;
  let fixture: ComponentFixture<OneReceptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneReceptComponent]
    });
    fixture = TestBed.createComponent(OneReceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

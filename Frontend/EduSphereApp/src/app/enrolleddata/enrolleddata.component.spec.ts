import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolleddataComponent } from './enrolleddata.component';

describe('EnrolleddataComponent', () => {
  let component: EnrolleddataComponent;
  let fixture: ComponentFixture<EnrolleddataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnrolleddataComponent]
    });
    fixture = TestBed.createComponent(EnrolleddataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LucaFormComponent } from './luca-form.component';

describe('LucaFormComponent', () => {
  let component: LucaFormComponent;
  let fixture: ComponentFixture<LucaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LucaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LucaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

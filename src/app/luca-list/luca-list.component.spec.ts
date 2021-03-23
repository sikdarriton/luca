import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LucaListComponent } from './luca-list.component';

describe('LucaListComponent', () => {
  let component: LucaListComponent;
  let fixture: ComponentFixture<LucaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LucaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LucaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

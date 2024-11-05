import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PolitiquePriveePage } from './politique-privee.page';

describe('PolitiquePriveePage', () => {
  let component: PolitiquePriveePage;
  let fixture: ComponentFixture<PolitiquePriveePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PolitiquePriveePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

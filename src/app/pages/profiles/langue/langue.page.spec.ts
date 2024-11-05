import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguePage } from './langue.page';

describe('LanguePage', () => {
  let component: LanguePage;
  let fixture: ComponentFixture<LanguePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

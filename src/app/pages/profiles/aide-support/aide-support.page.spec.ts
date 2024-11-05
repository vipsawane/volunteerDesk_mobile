import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AideSupportPage } from './aide-support.page';

describe('AideSupportPage', () => {
  let component: AideSupportPage;
  let fixture: ComponentFixture<AideSupportPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AideSupportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

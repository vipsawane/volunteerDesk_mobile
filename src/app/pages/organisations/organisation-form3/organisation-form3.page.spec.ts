import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrganisationForm3Page } from './organisation-form3.page';

describe('OrganisationForm3Page', () => {
  let component: OrganisationForm3Page;
  let fixture: ComponentFixture<OrganisationForm3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisationForm3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

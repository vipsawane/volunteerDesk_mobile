import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrganisationForm2Page } from './organisation-form2.page';

describe('OrganisationForm2Page', () => {
  let component: OrganisationForm2Page;
  let fixture: ComponentFixture<OrganisationForm2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisationForm2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

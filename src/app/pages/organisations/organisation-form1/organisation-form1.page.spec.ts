import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrganisationForm1Page } from './organisation-form1.page';

describe('OrganisationForm1Page', () => {
  let component: OrganisationForm1Page;
  let fixture: ComponentFixture<OrganisationForm1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisationForm1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

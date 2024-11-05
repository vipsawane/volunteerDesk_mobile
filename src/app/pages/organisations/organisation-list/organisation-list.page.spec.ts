import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrganisationListPage } from './organisation-list.page';

describe('OrganisationListPage', () => {
  let component: OrganisationListPage;
  let fixture: ComponentFixture<OrganisationListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisationListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

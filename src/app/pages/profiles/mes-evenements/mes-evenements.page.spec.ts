import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MesEvenementsPage } from './mes-evenements.page';

describe('MesEvenementsPage', () => {
  let component: MesEvenementsPage;
  let fixture: ComponentFixture<MesEvenementsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MesEvenementsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

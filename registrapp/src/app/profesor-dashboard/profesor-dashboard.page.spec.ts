import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfesorDashboardPage } from './profesor-dashboard.page';

describe('ProfesorDashboardPage', () => {
  let component: ProfesorDashboardPage;
  let fixture: ComponentFixture<ProfesorDashboardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesorDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

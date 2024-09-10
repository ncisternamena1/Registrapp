import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlumnosListPage } from './alumnos-list.page';

describe('AlumnosListPage', () => {
  let component: AlumnosListPage;
  let fixture: ComponentFixture<AlumnosListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnosListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

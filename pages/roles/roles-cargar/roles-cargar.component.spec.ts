import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesCargarComponent } from './roles-cargar.component';

describe('RolesCargarComponent', () => {
  let component: RolesCargarComponent;
  let fixture: ComponentFixture<RolesCargarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RolesCargarComponent]
    });
    fixture = TestBed.createComponent(RolesCargarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

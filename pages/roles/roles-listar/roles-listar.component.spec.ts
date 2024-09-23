import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesListarComponent } from './roles-listar.component';

describe('RolesListarComponent', () => {
  let component: RolesListarComponent;
  let fixture: ComponentFixture<RolesListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RolesListarComponent]
    });
    fixture = TestBed.createComponent(RolesListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

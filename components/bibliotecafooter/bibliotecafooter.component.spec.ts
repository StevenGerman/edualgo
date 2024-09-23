import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecafooterComponent } from './bibliotecafooter.component';

describe('BibliotecafooterComponent', () => {
  let component: BibliotecafooterComponent;
  let fixture: ComponentFixture<BibliotecafooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BibliotecafooterComponent]
    });
    fixture = TestBed.createComponent(BibliotecafooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

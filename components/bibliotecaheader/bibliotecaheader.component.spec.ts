import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecaheaderComponent } from './bibliotecaheader.component';

describe('BibliotecaheaderComponent', () => {
  let component: BibliotecaheaderComponent;
  let fixture: ComponentFixture<BibliotecaheaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BibliotecaheaderComponent]
    });
    fixture = TestBed.createComponent(BibliotecaheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

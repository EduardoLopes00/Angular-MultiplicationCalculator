import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloMultiComponent } from './modulo-multi.component';

describe('ModuloMultiComponent', () => {
  let component: ModuloMultiComponent;
  let fixture: ComponentFixture<ModuloMultiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuloMultiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloMultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

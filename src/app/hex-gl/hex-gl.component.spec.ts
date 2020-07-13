import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HexGLComponent } from './hex-gl.component';

describe('HexGLComponent', () => {
  let component: HexGLComponent;
  let fixture: ComponentFixture<HexGLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HexGLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HexGLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

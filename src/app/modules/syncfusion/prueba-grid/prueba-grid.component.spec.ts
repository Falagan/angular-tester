import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaGridComponent } from '@src/app/modules/syncfusion/prueba-grid/prueba-grid.component';

describe('PruebaGridComponent', () => {
  let component: PruebaGridComponent;
  let fixture: ComponentFixture<PruebaGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebaGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

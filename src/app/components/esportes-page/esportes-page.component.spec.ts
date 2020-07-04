import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsportesPageComponent } from './esportes-page.component';

describe('EsportesPageComponent', () => {
  let component: EsportesPageComponent;
  let fixture: ComponentFixture<EsportesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsportesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsportesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

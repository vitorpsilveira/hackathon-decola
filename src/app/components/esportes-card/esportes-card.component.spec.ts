import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsportesCardComponent } from './esportes-card.component';

describe('EsportesCardComponent', () => {
  let component: EsportesCardComponent;
  let fixture: ComponentFixture<EsportesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsportesCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsportesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

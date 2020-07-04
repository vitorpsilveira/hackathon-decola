import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NatacaoPageComponent } from './natacao-page.component';

describe('NatacaoPageComponent', () => {
  let component: NatacaoPageComponent;
  let fixture: ComponentFixture<NatacaoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NatacaoPageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NatacaoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

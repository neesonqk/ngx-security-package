import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourZeroThreeComponent } from './four-zero-three.component';

describe('FourZeroThreeComponent', () => {
  let component: FourZeroThreeComponent;
  let fixture: ComponentFixture<FourZeroThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourZeroThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourZeroThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

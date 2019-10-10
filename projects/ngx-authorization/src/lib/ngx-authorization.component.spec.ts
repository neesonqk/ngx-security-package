import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAuthorizationComponent } from './ngx-authorization.component';

describe('NgxAuthorizationComponent', () => {
  let component: NgxAuthorizationComponent;
  let fixture: ComponentFixture<NgxAuthorizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxAuthorizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

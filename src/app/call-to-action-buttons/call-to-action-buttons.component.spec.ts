import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallToActionButtonsComponent } from './call-to-action-buttons.component';

describe('CallToActionButtonsComponent', () => {
  let component: CallToActionButtonsComponent;
  let fixture: ComponentFixture<CallToActionButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallToActionButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallToActionButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

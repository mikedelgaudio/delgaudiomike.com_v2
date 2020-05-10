import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativeWorkPageComponent } from './creative-work-page.component';

describe('CreativeWorkPageComponent', () => {
  let component: CreativeWorkPageComponent;
  let fixture: ComponentFixture<CreativeWorkPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreativeWorkPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreativeWorkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

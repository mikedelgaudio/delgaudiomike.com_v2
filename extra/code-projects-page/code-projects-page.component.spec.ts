import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeProjectsPageComponent } from './code-projects-page.component';

describe('CodeProjectsPageComponent', () => {
  let component: CodeProjectsPageComponent;
  let fixture: ComponentFixture<CodeProjectsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeProjectsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeProjectsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

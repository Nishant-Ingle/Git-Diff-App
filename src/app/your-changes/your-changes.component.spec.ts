import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourChangesComponent } from './your-changes.component';

describe('YourChangesComponent', () => {
  let component: YourChangesComponent;
  let fixture: ComponentFixture<YourChangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourChangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

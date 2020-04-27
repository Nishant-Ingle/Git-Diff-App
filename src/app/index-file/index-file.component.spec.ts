import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexFileComponent } from './index-file.component';

describe('IndexFileComponent', () => {
  let component: IndexFileComponent;
  let fixture: ComponentFixture<IndexFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

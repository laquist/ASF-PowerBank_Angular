import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteFormContentComponent } from './note-form-content.component';

describe('NoteFormContentComponent', () => {
  let component: NoteFormContentComponent;
  let fixture: ComponentFixture<NoteFormContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteFormContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteFormContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

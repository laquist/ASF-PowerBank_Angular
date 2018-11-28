import { Component, OnInit } from '@angular/core';
import { MockNotes } from '../mock-notes';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  // Temp test
  noteCount: Number = 1;

  // Data object
  data: Object = {
    notes: MockNotes,
    energy: {
        startTime: new Date(0),
        endTime: new Date(0),
        interval: 0
    }
  };

  constructor() { }

  ngOnInit() {
  }

}

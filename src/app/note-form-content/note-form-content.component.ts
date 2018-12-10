import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-note-form-content',
  templateUrl: './note-form-content.component.html',
  styleUrls: ['./note-form-content.component.scss']
})
export class NoteFormContentComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}

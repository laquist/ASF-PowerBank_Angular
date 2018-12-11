import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data.service';
import { Note } from '../note';
import { Smiley } from '../smiley';

@Component({
  selector: 'app-note-form-content',
  templateUrl: './note-form-content.component.html',
  styleUrls: ['./note-form-content.component.scss']
})
export class NoteFormContentComponent implements OnInit {

  smileys: Smiley[] = this.dataService.getAllSmileys();

  constructor(
    public activeModal: NgbActiveModal,
    private dataService: DataService
  ) { }

  ngOnInit() {

  }

  // create(): Note {

  // }

  save(): void {

  }
}

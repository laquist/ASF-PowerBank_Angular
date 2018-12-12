import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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

  noteFormGroup = new FormGroup({
    title: new FormControl(''),
    energy: new FormControl(0),
    desc: new FormControl('')
    });

  smileys: Smiley[] = this.dataService.getAllSmileys();

  constructor(
    public activeModal: NgbActiveModal,
    private dataService: DataService
  ) { }

  ngOnInit() {

  }

  onSubmit(): void {
    console.warn(this.noteFormGroup.value);
  }

  // create(): Note {

  // }

  // save(): void {

  // }

  // checkValidTest(form, event: any): void {
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();

  //     console.log('Not valid!');
  //   }
  //   form.classList.add('was-validated');

  //   // const result = form.checkValidity() ? true : false;
  // }
}

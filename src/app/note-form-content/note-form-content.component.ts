import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
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

  noteFormGroup = this.formBuilder.group({
    'title': ['', Validators.required],
    'energy': ['', Validators.required],
    'desc': ['', Validators.required]
  });

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) { }

  ngOnInit() {
  }

  onSubmit(): void {
    // console.warn(this.noteFormGroup.value);
    // console.log(this.noteFormGroup.value.title);
    this.dataService.addNote(this.createNote());
    console.log('Submitted');
  }

  createNote(): Note {
    const newNote = new Note(
      this.noteFormGroup.value.title,
      this.noteFormGroup.value.energy,
      this.noteFormGroup.value.desc,
      new Date()
    );

    return newNote;
  }

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

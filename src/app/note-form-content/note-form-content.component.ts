import { Component, OnInit } from '@angular/core';
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

    // Creates Note object from FormGroup
    const newNote = this.createNote();

    // Saves the note in storage
    this.saveNote(newNote);

    // Temp
    console.log('Submitted');

    // Closes the modal
    this.activeModal.close();

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

  saveNote(note: Note): void {

    this.dataService.addNote(note);

  }
}

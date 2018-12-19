import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Note } from '../note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  // Properties
  // notes: Note[] = this.dataService.getNotes();

  notesTest: Note[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getNotes();
  }

  getNotes(): void {
    this.dataService.getNotesTest()
      .subscribe(notes => this.notesTest = notes);
  }

/** Gets the img path that belongs to the energy */
  getSmileyImgPath(energy: number): string {

    return this.dataService.getSmileyFromEnergy(energy).imgPath;

  }

  /** Creates a Date string in the correct format */
  createDateString(date: Date): string {

    const currentDate = new Date();
    let dateString;
    // Saves dateTime and makes sure that the time is in 4 digits, instead of it only showing one zero character (15:00 vs 15:0)
    const dateTime = ('0' + date.getHours()).slice(-2) + '.' + ('0' + date.getMinutes()).slice(-2);

    // Checks if the day is today
    if (date.getFullYear() === currentDate.getFullYear()
    && date.getMonth() === currentDate.getMonth()
    && date.getDate() === currentDate.getDate()) {
        dateString = 'I dag kl. ';
    } else {
        // Rounding up to full day (so calculating from time 00:00:00)
        // let
        const newDate = new Date(date);
        newDate.setHours(0, 0, 0, 0);

        // let
        const newCurrentDate = new Date(currentDate);
        newCurrentDate.setHours(0, 0, 0, 0);

        // Gets Milliseconds since Epoch time
        const difference = newCurrentDate.getTime() - newDate.getTime();
        const days = difference / 1000 / 60 / 60 / 24;

        if (days === 1) {
            dateString = days + ' dag siden kl. ';
        } else {
            dateString = days + ' dage siden kl. ';
        }
    }

    return dateString + dateTime;

  }
}

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

  getSmileyImgPath (energy): String {
    let path;

    if (energy === 25) {
      path = 'assets/img/happy.svg';
    } else if (energy === 10) {
        path = 'assets/img/happy-real.svg';
    } else if (energy === 0) {
        path = 'assets/img/neutral.svg';
    } else if (energy === -10) {
        path = 'assets/img/Sad.svg';
    } else if (energy === -25) {
        path = 'assets/img/vomited.svg';
    }

    return path;
  }

  createDateString (date): String {
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

import { Injectable } from '@angular/core';
import { Data } from './data';
import { Energy } from './energy';
import { MockNotes } from './mock-notes';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Data object
  data: Data;

  constructor() { }

  /** Loads data from LocalStorage */
  loadData() {
    let dataString;

    // Sets dataString, if data exists in LocalStorage
    try {
      if (localStorage['powerbank']) {
        dataString = localStorage['powerbank'];
      }
    } catch (e) {
      console.log('ERROR when loading from Local Storage!\n' + e);
    }

    // If any data exists in LocalStorage
    if (dataString) {
      const noteArray = [];
      let energyObj;

      // Formats JSON to JS objects
      const dataTable = JSON.parse(dataString);

      // Formats the date for posts
      dataTable.notes.forEach(item => {
        item.date = new Date(item.date);
      });

      // If this.data object is already instantiated
      if (this.data) {
        // Checks for matching results in data.posts and dataTable.posts, to prevent adding duplicates
        dataTable.notes.forEach(item => {
          if (!this.checkForMatch(this.data.notes, 'id', item.id)) {
            // Creates Note instance of all notes, that dosnt match an already existing Note
            const newNote = new Note(item.title, item.energy, item.desc, new Date(item.date));
            newNote.id = item.id;

            // Adds to the data.notes array
            this.data.notes.push(newNote);
          }
        });

        // Formats the date for energy dayStart and dayEnd
        this.data.energy.startTime = new Date(dataTable.energy.startTime);
        this.data.energy.endTime = new Date(dataTable.energy.endTime);

        // Sets interval
        this.data.energy.interval = dataTable.energy.interval;

      } else {
        dataTable.notes.forEach(item => {
          // Creates Note instance of all notes
          const newNote = new Note(item.title, item.energy, item.desc, new Date(item.date));
          newNote.id = item.id;

          // Adds to temporary array
          noteArray.push(newNote);
        });

        // Creates Energy instance of energy info
        energyObj = new Energy(new Date(dataTable.energy.startTime), new Date(dataTable.energy.endTime), dataTable.energy.interval);

        // Creates Data instance
        const newDataObj = new Data(noteArray, energyObj);

        // Sets this.data to the new Data instance
        this.data = newDataObj;
      }
    }
  }

  /** Saves data in LocalStorage */
  saveData(): void {
    let dataString;

    try {
      // Formats from JS to JSON string
      dataString = JSON.stringify(this.data);

      // Saves the JSON string in LocalStorage
      localStorage['powerbank'] = dataString;

      console.log('Successfully saved to Local Storage!');
    } catch (e) {
      console.log('ERROR when writing to Local Storage!\n' + e);
    }
  }

  getNotes(): Note[] {
    return this.data.notes;
  }

  checkForMatch (array, propertyToMatch, valueToMatch): Boolean {
    for (let i = 0; i < array.length; i++) {
      if (array[i][propertyToMatch] === valueToMatch) {
        return true;
      }
    }
    return false;
  }

  generateTestData(): void {
    this.data = new Data(
      MockNotes,
      new Energy(
        new Date(0),
        new Date(0),
        0
      )
    );

    console.log('TestData created');
  }
}

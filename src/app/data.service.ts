import { Injectable } from '@angular/core';
import { Data } from './data';
import { Note } from './note';
import { Energy } from './energy';

import { MockNotes } from './mock-notes';

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

  /** Returns Notes */
  getNotes(): Note[] {
    return this.data.notes;
  }

  /** Returns Energy Object with starttime, endtime, and interval */
  getEnergyInfo(): Energy {
    return this.data.energy;
  }

  /** Sets new interval and if success then saves data to LocalStorage */
  setEnergyInterval(interval: Number): void {
    if (this.data.energy.interval = interval) {
      console.log('Interval updated');

      this.saveData();
    } else {
      console.log('Error while setting interval');
    }
  }

  /** Checks elements in an array for having a property with same value as the value you send as parameter */
  checkForMatch(array, propertyToMatch, valueToMatch): Boolean {
    for (let i = 0; i < array.length; i++) {
      if (array[i][propertyToMatch] === valueToMatch) {
        return true;
      }
    }
    return false;
  }

  /** Generates TestData from the Mock-notes.ts file */
  generateTestData(): void {
    const startTime = new Date(0);
    startTime.setHours(7, 0, 0, 0);

    const endTime = new Date(0);
    endTime.setHours(23, 0, 0, 0);

    this.data = new Data(
      MockNotes,
      new Energy(
        startTime,
        endTime,
        0
      )
    );

    console.log('TestData created');
  }
}

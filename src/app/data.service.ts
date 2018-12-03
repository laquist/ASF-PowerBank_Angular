import { Injectable } from '@angular/core';
import { Data } from './data';
import { Energy } from './energy';
import { MockNotes } from './mock-notes';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Data object
  data: Data;

  constructor() { }

  generateTestData() {
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

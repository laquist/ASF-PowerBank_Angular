import { Component, OnInit } from '@angular/core';

// ** TEMP
import { MockNotes } from '../mock-notes';
import { Note } from '../note';

@Component({
  selector: 'app-energy',
  templateUrl: './energy.component.html',
  styleUrls: ['./energy.component.scss']
})
export class EnergyComponent implements OnInit {

  // ** TEMP
  // Data object
  // data = {
  //   notes: MockNotes,
  //   energy: {
  //     startTime: new Date(0),
  //     endTime: new Date(0),
  //     interval: 0
  //   }
  // };

  constructor() { }

  ngOnInit() {
  }

//   calcEnergyPercent () {
//     // ANY??? Date type virker ikke
//     const currentTime: any = new Date();

//     // Checks if currentTime is between the startTime & endTime
//     if (currentTime.getHours() >= this.data.energy.startTime.getHours()
//     && currentTime.getHours() < this.data.energy.endTime.getHours()) {

//         // Time difference from startTime to now
//         const difference = currentTime - this.data.energy.startTime;

//         // Current energy based on the normal "uncharge"
//         // let energy = difference / data.energy.interval;
//         let energy = 100 - (difference / this.data.energy.interval);

//         // Calculates energy from personal posts
//         this.data.notes.forEach(item => {
//             // Checks if item's date is today
//             if (item.date.getFullYear() === currentTime.getFullYear()
//             && item.date.getMonth() === currentTime.getMonth()
//             && item.date.getDate() === currentTime.getDate()) {
//                 // Limits the value to between 0-100
//                 if (energy + item.energy >= 100) {
//                     energy = 100;
//                 } else if (energy + item.energy <= 0) {
//                     energy = 0;
//                 } else {
//                     energy += item.energy;
//                 }
//             }
//         });

//         return energy;
//     } else {
//         // 0% Energy after endTime until next startTime
//         return 0;
//     }
// }

// calcInterval () {
//     if (this.data.energy.startTime !== new Date(0)
//     && this.data.energy.endTime !== new Date(0)) {
//         // Calculates time interval for 1%
//         this.data.energy.interval = (this.data.energy.endTime - this.data.energy.startTime) / 100;
//     } else {
//         console.log('ERROR calculating energy interval!');
//     }
// }

// calcNextTimer () {
//     // Calculates millisecs from startTime to now
//     const currentEnergy = this.calcEnergyPercent() * this.data.energy.interval;

//     // Calculates millisecs from startTime and to the next percent
//     const nextUpdate = (Math.floor(this.calcEnergyPercent()) + 1) * this.data.energy.interval;

//     // Calculates millisecs from now to next percent
//     const timeForNextUpdate = nextUpdate - currentEnergy;

//     return timeForNextUpdate;
// }

}

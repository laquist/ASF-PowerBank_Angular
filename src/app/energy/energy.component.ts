import { Component, OnInit } from '@angular/core';
import { Observable, observable, interval } from 'rxjs';
import { DataService } from '../data.service';
import { Energy } from '../energy';
// import { Note } from '../note';

@Component({
  selector: 'app-energy',
  templateUrl: './energy.component.html',
  styleUrls: ['./energy.component.scss']
})
export class EnergyComponent implements OnInit {

  energyPercent: number;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // Calculates interval (milisecs) between 1 percent
    this.calcInterval();

    // Updates energyPercent and sets new timer
    this.updateEnergyPercent();
  }

  /** Calculates the energy percent */
  calcEnergyPercent(): number {
    const currentTime: Date = new Date();

    // Checks if currentTime is between the startTime & endTime
    if (currentTime.getHours() >= this.dataService.data.energy.startTime.getHours()
    && currentTime.getHours() < this.dataService.data.energy.endTime.getHours()) {
      // Time difference from startTime to now
      const difference = currentTime.getTime() - this.dataService.data.energy.startTime.getTime();

      // Test
      console.log('difference');
      console.log(difference);

      // Test
      console.log('difference - interval');
      console.log(difference - this.dataService.data.energy.interval);

      // Current energy based on the normal "uncharge"
      let energy = 100 - (difference / this.dataService.data.energy.interval);

      // Test
      console.log('hallo');
      console.log(energy);

      // Gets notes
      const notes = this.dataService.getNotes();

      // Calculates energy from notes
      notes.forEach(item => {
        // Checks if item's date is today
        if (item.date.getFullYear() === currentTime.getFullYear()
        && item.date.getMonth() === currentTime.getMonth()
        && item.date.getDate() === currentTime.getDate()) {
          // Limits the value to between 0-100
          if (energy + item.energy >= 100) {
            energy = 100;
          } else if (energy + item.energy <= 0) {
            energy = 0;
          } else {
            energy += item.energy;
          }
        }
      });

      return energy;
    } else {
      // 0% Energy after endTime until next startTime
      return 0;
    }
  }

  /** Gets the Energy Percent in rounded numbers (no decimals) */
  getRoundedEnergyPercent(): number {
    return Math.floor(this.calcEnergyPercent());
  }

  /** Calculates and saves the interval (in milisecs) of 1 percent */
  calcInterval(): void {
    if (this.dataService.data.energy.startTime !== new Date(0)
    && this.dataService.data.energy.endTime !== new Date(0)) {

      const startTime = this.dataService.data.energy.startTime.getTime();
      const endTime = this.dataService.data.energy.endTime.getTime();

      // Calculates time interval for 1%
      const newInterval = (endTime - startTime) / 100;

      // Saves the interval
      this.dataService.setEnergyInterval(newInterval);

    } else {
      console.log('ERROR calculating energy interval!');
    }
  }

  /** Calculates and returns the time until next energy update, in milisecs */
  calcNextTimer(): number {
    // Calculates millisecs from startTime to now
    const currentEnergy = this.calcEnergyPercent() * this.dataService.data.energy.interval;

    // Calculates millisecs from startTime and to the next percent
    const nextUpdate = (Math.floor(this.calcEnergyPercent()) + 1) * this.dataService.data.energy.interval;

    // Calculates millisecs from now to next percent
    const timeForNextUpdate = nextUpdate - currentEnergy;

    return timeForNextUpdate;
  }

  /** Updates energyPercent and sets a new timer for next update */
  updateEnergyPercent() {
    // Sets the energyPercent
    this.energyPercent = this.getRoundedEnergyPercent();

    // Sets new timer
    this.setEnergyTimer();
  }

  /** Sets timer for next update */
  setEnergyTimer() {
    setTimeout(this.updateEnergyPercent, this.calcNextTimer());
  }

}

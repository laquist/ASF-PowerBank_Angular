import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { EnergyService } from '../energy.service';

@Component({
  selector: 'app-energy',
  templateUrl: './energy.component.html',
  styleUrls: ['./energy.component.scss']
})
export class EnergyComponent implements OnInit {

  // energyPercent: number;
  energyPercent: number = this.energyService.getEnergyPercent();

  constructor(
    private dataService: DataService,
    private energyService: EnergyService
  ) { }

  ngOnInit() {

    // Calculates interval (milisecs) between 1 percent
    // this.calcInterval();

    // Updates energyPercent and sets new timer
    // this.updateEnergyPercent();

    // this.update();
    // this.getNotes();

  }

  // getNotes(): void {
  //   this.dataService.getNotesTest()
  //     .subscribe(notes => this.testUpdate(notes));
  // }

  // testUpdate(notes): void {

  //   this.energyService.getNotes();

  //   this.update();

  // }

  // // Test
  // update() {

  //   this.energyService.calcInterval();
  //   this.energyService.updateEnergyPercent();
  //   this.energyPercent = this.energyService.energyPercent;

  // }

}

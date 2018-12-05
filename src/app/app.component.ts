import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ASF-PowerBank';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.loadData();
    // Er det bad practice at have AppComponent implement OnInit og køre ngOnInit() og loade min data?
    // Gør det bare for at loade data en enkelt gang, i stedet for igen og igen, i hvert enkelt component
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../../core/services/test-data/test-data';
import { TestDataService } from '../../core/services/test-data/test-data.service';

@Component({
  selector: 'city-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  eventsToday$: Observable<Event[]>;

  constructor(private testDataService: TestDataService) {
    this.eventsToday$ = testDataService.getEventsToday();
  }

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { TestDataService } from 'apps/dev-crm/src/app/core/services/test-data/test-data.service';

@Component({
  selector: 'city-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
  view: CalendarView = CalendarView.Week;
  viewDate = new Date();
  events$: Observable<CalendarEvent[]>;

  constructor(private testDataService: TestDataService) {
    this.events$ = this.testDataService.getEvents().pipe(
      tap((d) => console.log(d)),
      map((data) =>
        data.map((event) => ({
          title: event.title,
          start: event.date,
        }))
      )
    );

    this.events$.subscribe((data) => console.log(data));
  }

  ngOnInit(): void {}

  setCalendarView(view: string) {
    switch (view) {
      case 'month':
        this.view = CalendarView.Month;
        break;
      case 'week':
        this.view = CalendarView.Week;
        break;
    }
  }
}

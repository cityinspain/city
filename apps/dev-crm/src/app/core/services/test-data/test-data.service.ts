import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { TEST_EVENTS, Event } from './test-data';

import { isToday } from 'date-fns';

@Injectable({ providedIn: 'root' })
export class TestDataService {
  constructor() {}

  getEvents(): Observable<Event[]> {
    return of(TEST_EVENTS);
  }

  getEventsToday(): Observable<Event[]> {
    return of(TEST_EVENTS).pipe(
      map((events) => events.filter((e) => isToday(e.date)))
    );
  }
}

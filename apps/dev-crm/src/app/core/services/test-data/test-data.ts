export type Event = {
  title: string;
  date: Date;
};

export const TEST_EVENTS: Event[] = [
  {
    title: 'Interview',
    date: new Date('2021-08-23T14:30:00'),
  },
  {
    title: 'bar',
    date: new Date(2021, 7, 24),
  },
  {
    title: 'baz',
    date: new Date(2021, 7, 28),
  },
];

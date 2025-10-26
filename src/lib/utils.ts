import type { TDailySchedule, TRestaurant } from '@/api/restaurant';
import { nowIsWithinWindow } from './time';

export const weekdayNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export function capitalize<S extends string>(s: S): Capitalize<S> {
  if (!s) return s as Capitalize<S>;
  return (s.charAt(0).toUpperCase() +
    s.slice(1).toLowerCase()) as Capitalize<S>;
}

export function isRestaurantOpen(restaurant: TRestaurant): boolean {
  if (restaurant.openingStatusOverride == 'OPEN') return true;
  if (restaurant.openingStatusOverride == 'CLOSED') return false;
  return isNowWithinSchedule(restaurant.openingHours);
}

function isNowWithinSchedule(schedule: TDailySchedule[]): boolean {
  const currentDate = new Date();
  let currentDayOfWeek = currentDate.getUTCDay();
  // Convert Sunday 0 in js to Sunday 7 in java
  if (currentDayOfWeek == 0) {
    currentDayOfWeek = 7;
  }
  for (let i = 0; i < schedule.length; i++) {
    if (
      Number(schedule[i].dayOfWeek) == currentDayOfWeek &&
      schedule[i].closedAllDay != true &&
      nowIsWithinWindow(schedule[i].timeFrom, schedule[i].timeTo, currentDate)
    ) {
      return true;
    }
  }
  return false;
}

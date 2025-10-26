function timeStringToSeconds(t: string): number {
  const [hh, mm, ss] = t.split(':').map(Number);
  return hh * 3600 + mm * 60 + ss;
}

export function nowIsWithinWindow(
  timeFrom: string,
  timeTo: string,
  now = new Date()
): boolean {
  const nowSeconds =
    now.getUTCHours() * 3600 + now.getUTCMinutes() * 60 + now.getUTCSeconds();
  const fromSec = timeStringToSeconds(timeFrom);
  const toSec = timeStringToSeconds(timeTo);

  if (fromSec <= toSec) {
    // same-day window
    return nowSeconds >= fromSec && nowSeconds < toSec;
  } else {
    // window crossyes midnight: true if >= from OR < to
    return nowSeconds >= fromSec || nowSeconds < toSec;
  }
}

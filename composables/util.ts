import { DateTime } from 'luxon'
import { Buffer } from 'buffer'
import { RRule } from 'rrule/dist/esm'

/**
 *
 * @param dateIsoString
 * @returns
 */
export function getUtcDate(dateIsoString: string): Date {
  // return DateTime.fromISO(dateIsoString).toUTC().toJSDate()
  const [date, time] = dateIsoString.split('T')
  const [year, month, day] = date.split('-').map((x) => parseInt(x))
  const [hour, minute] = time?.split(':').map((x) => parseInt(x)) || [0, 0]
  return new Date(Date.UTC(year, month - 1, day, hour, minute, 0))
}

/**
 *
 * @param date
 * @returns
 */
export function keepLocalTZ(date: Date): Date {
  return DateTime.fromJSDate(date)
    .toUTC()
    .setZone('local', { keepLocalTime: true })
    .toJSDate()
}

/**
 *
 * @param date
 * @returns
 */
export function dateTimeLocalValue(date: Date): string {
  return new Date(date.getTime() - date.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, -1)
}

/**
 *
 * @param str
 * @returns
 */
export function base64encode(str: string) {
  return Buffer.from(str).toString('base64')
}

/**
 *
 * @param str
 * @returns
 */
export function base64decode(str: string) {
  return Buffer.from(str, 'base64').toString()
}

/**
 *
 * @returns
 */
export const useFieldHelpers = () => {
  const frequencies = [
    { value: RRule.YEARLY, label: 'Year(s)' },
    { value: RRule.MONTHLY, label: 'Month(s)' },
    { value: RRule.WEEKLY, label: 'Week(s)' },
    { value: RRule.DAILY, label: 'Days(s)' },
    { value: RRule.HOURLY, label: 'Hour(s)' },
  ]

  const weekdays = [
    { value: RRule.MO.weekday, label: 'Monday' },
    { value: RRule.TU.weekday, label: 'Tuesday' },
    { value: RRule.WE.weekday, label: 'Wednesday' },
    { value: RRule.TH.weekday, label: 'Thursday' },
    { value: RRule.FR.weekday, label: 'Friday' },
    { value: RRule.SA.weekday, label: 'Saturday' },
    { value: RRule.SU.weekday, label: 'Sunday' },
  ]

  const months = [
    { value: 1, label: 'January' },
    { value: 2, label: 'February' },
    { value: 3, label: 'March' },
    { value: 4, label: 'April' },
    { value: 5, label: 'May' },
    { value: 6, label: 'June' },
    { value: 7, label: 'July' },
    { value: 8, label: 'August' },
    { value: 9, label: 'September' },
    { value: 10, label: 'October' },
    { value: 11, label: 'November' },
    { value: 12, label: 'December' },
  ]

  return { frequencies, weekdays, months }
}

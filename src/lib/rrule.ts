import { computed, reactive } from 'vue'
import { RRule, RRuleSet, Frequency, Weekday } from 'rrule'
import { DateTime } from 'luxon'

export interface IReactiveRRule {
  // rrule properties
  freq: Frequency
  dtstart: string | null
  until: string | undefined
  count: number | undefined
  interval: number
  byweekday: Weekday[]
  bymonth: number[]
  bysetpos: number | undefined
  //
  dtend: string | null
  limitByCount: boolean
}

export const rrule = reactive<IReactiveRRule>({
  freq: Frequency.WEEKLY,
  dtstart: null,
  until: undefined,
  count: 5,
  interval: 1,
  byweekday: [],
  bymonth: [],
  bysetpos: undefined,
  //
  dtend: null,
  limitByCount: true,
})

function getUtcDate(dateIsoString: string): Date {
  const [date, time] = dateIsoString.split('T')
  const [year, month, day] = date.split('-').map((x) => parseInt(x))
  const [hour, minute] = time?.split(':').map((x) => parseInt(x)) || [0, 0]
  return new Date(Date.UTC(year, month - 1, day, hour, minute, 0))
}

export const eventDurationMilliseconds = computed<number>(() => {
  if (!rrule.dtend || !rrule.dtstart) return 0
  return (
    getUtcDate(rrule.dtend!).valueOf() - getUtcDate(rrule.dtstart!).valueOf()
  )
})

export const rule = computed<RRule | undefined>(() => {
  if (!rrule.dtstart) return

  return new RRule({
    // tzid: 'America/New_York',
    freq: rrule.freq,
    dtstart: getUtcDate(rrule.dtstart),
    interval: rrule.interval ?? undefined,
    count: rrule.limitByCount ? rrule.count : undefined,
    until:
      !rrule.limitByCount && rrule.until ? new Date(rrule.until) : undefined,
    byweekday: rrule.byweekday.length ? rrule.byweekday : undefined,
    bymonth: rrule.bymonth.length ? rrule.bymonth : undefined,
    bysetpos: rrule.bysetpos,
  })
})

export const ruleSet = computed<RRuleSet | undefined>(() => {
  if (!rule.value) return
  const rruleSet = new RRuleSet()
  rruleSet.rrule(rule.value)
  return rruleSet
})

export const keepLocalTZ = (date: Date) =>
  DateTime.fromJSDate(date)
    .toUTC()
    .setZone('local', { keepLocalTime: true })
    .toJSDate()

export const frequencies = [
  { value: RRule.YEARLY, label: 'Yearly' },
  { value: RRule.MONTHLY, label: 'Monthly' },
  { value: RRule.WEEKLY, label: 'Weekly' },
  { value: RRule.DAILY, label: 'Daily' },
  { value: RRule.HOURLY, label: 'Hourly' },
]

export const weekdays = [
  { value: RRule.MO.weekday, label: 'Monday' },
  { value: RRule.TU.weekday, label: 'Tuesday' },
  { value: RRule.WE.weekday, label: 'Wednesday' },
  { value: RRule.TH.weekday, label: 'Thursday' },
  { value: RRule.FR.weekday, label: 'Friday' },
  { value: RRule.SA.weekday, label: 'Saturday' },
  { value: RRule.SU.weekday, label: 'Sunday' },
]

export const months = [
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

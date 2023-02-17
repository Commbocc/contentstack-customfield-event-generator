import { RRule, RRuleSet } from 'rrule/dist/esm'

/**
 *
 * @returns
 */
export const useRRule = (rule: IRRuleFields) => {
  // const { $dev } = useNuxtApp()
  const { extensionField } = useContentstackExtension()

  const rrule = computed<RRule | undefined>(() => {
    if (!rule.dtstart) return

    return new RRule({
      dtstart: getUtcDate(rule.dtstart),

      freq: rule.freq,
      interval: rule.interval ?? undefined,
      count: rule.limitByCount ? rule.count : undefined,
      until:
        !rule.limitByCount && rule.until ? new Date(rule.until) : undefined,
      byweekday: rule.byweekday?.length ? rule.byweekday : undefined,
      bymonth: rule.bymonth?.length ? rule.bymonth : undefined,
      bysetpos: rule.bysetpos,

      tzid: extensionField.config.timezone,
    })
  })

  const eventDurationMilliseconds = computed<number>(() => {
    if (!rule.dtend || !rule.dtstart) return 0
    return new Date(rule.dtend!).valueOf() - new Date(rule.dtstart!).valueOf()
  })

  return {
    rrule,
    eventDurationMilliseconds,
  }
}

/**
 *
 * @returns
 */
export const useRRuleSets = () => {
  const { extensionField } = useContentstackExtension()

  const sets = computed(() => {
    const sets: { uuid: string; rruleSet: RRuleSet }[] = []

    for (const ruleSet of extensionField.fieldData.ruleSets) {
      const { rrule } = useRRule(ruleSet.fields)
      if (!rrule.value) continue

      const rruleSet = new RRuleSet()
      rruleSet.rrule(rrule.value)

      sets.push({ uuid: ruleSet.uuid, rruleSet })
    }

    return sets
  })

  /**
   *
   */

  const setsWithExceptions = computed(() => {
    const sets: { uuid: string; rruleSet: RRuleSet }[] = []

    for (const ruleSet of extensionField.fieldData.ruleSets) {
      const { rrule } = useRRule(ruleSet.fields)
      if (!rrule.value) continue

      const rruleSet = new RRuleSet()
      rruleSet.rrule(rrule.value)

      for (const [key, value] of Object.entries(ruleSet.exceptions)) {
        rruleSet.exdate(new Date(base64decode(key)))
      }

      sets.push({ uuid: ruleSet.uuid, rruleSet })
    }

    return sets
  })

  return { sets, setsWithExceptions }
}

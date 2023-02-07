interface IConfig {
  timezone?: string
}

interface IExtensionField {
  stack: any
  eventEntry: any
  config: IConfig
  fieldData: ICustomRulesFieldData
}

interface ICustomRulesFieldData {
  ruleSets: IRuleSet[]
  timezone: string
}

interface IRuleSet {
  uuid: string
  fields: IRRuleFields
  exceptions: Record<
    string,
    undefined | 'Disabled' | 'Cancelled' | 'Rescheduled'
  >
  rdates: Record<string, { start: string; end?: string }>
  ruleString: string
}

interface IRRuleFields {
  // rrule properties
  dtstart?: string
  freq: Frequency
  until?: string
  count?: number
  interval?: number
  byweekday: Weekday[]
  bymonth: number[]
  bysetpos?: number

  //
  dtend?: string
  limitByCount?: boolean
}

interface IRRuleSetInstace {
  setUuid: string
  date: Date
}

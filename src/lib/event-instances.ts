import { computed, Ref, ref } from 'vue'
import { extensionField, createEventInstanceEntry } from './'
import { ruleSet, keepLocalTZ, eventDurationMilliseconds } from './rrule'

export class EventInstance {
  active: boolean
  start_time: Date
  saved: boolean | undefined

  constructor(start_time: Date) {
    this.active = true
    this.start_time = start_time
  }

  get key(): string {
    return this.start_time.toISOString()
  }

  get end_time(): Date {
    return new Date(this.start_time.valueOf() + eventDurationMilliseconds.value)
  }

  get range(): string {
    const sameDay: boolean =
      this.start_time.toLocaleDateString() ===
      this.end_time.toLocaleDateString()
    return [
      this.start_time.toLocaleString(),
      sameDay
        ? this.end_time.toLocaleTimeString()
        : this.end_time.toLocaleString(),
    ].join(' - ')
  }

  toEntry() {
    const { uid } = extensionField.eventEntry
    const start_time = this.start_time.toISOString()

    return {
      title: [uid, start_time].join('-'),
      url: `/events/${uid}/${start_time}`,
      start_time,
      end_time: this.end_time.toISOString(),
      event: [
        {
          uid,
          _content_type_uid: 'event',
        },
      ],
    }
  }
}

export const instances = ref<EventInstance[] | null>()

export const generateInstances = () => {
  extensionField.createConfirmation = false

  instances.value =
    ruleSet.value
      ?.all((d, i) => i < extensionField.instanceLimit)
      .map((d) => new EventInstance(keepLocalTZ(d))) || null
}

export const activeInstances = computed<EventInstance[]>(() => {
  return instances.value?.filter((ei: EventInstance) => ei.active) || []
})

export const createInstanceEntries = async () => {
  const promises = activeInstances.value.map(createEventInstanceEntry)

  await Promise.allSettled(promises)
  extensionField.createConfirmation = false
  // instances.value = null
}

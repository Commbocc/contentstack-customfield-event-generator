import { computed, reactive, watch } from 'vue'
import CS from '@contentstack/ui-extensions-sdk'
import { rrule } from './rrule'
import { instances, EventInstance } from './event-instances'

export interface IExtensionField {
  stack: any
  eventEntry: any
  instanceLimit: number
  createConfirmation: boolean
}

let extension: any

export const extensionField = reactive<IExtensionField>({
  stack: null,
  eventEntry: null,
  instanceLimit: 20,
  createConfirmation: false,
})

export async function init() {
  try {
    extension = await CS.init()
    extension.window.enableAutoResizing()

    extensionField.instanceLimit = extension.config.instanceLimit || 20
    extensionField.stack = extension.stack?._data
    extensionField.eventEntry = extension.entry?._data

    //  field values
    Object.assign(rrule, extension.field.getData())

    watch(rrule, async () => {
      instances.value = null
      await extension.field.setData(rrule)
    })
  } catch (error) {
    console.warn(`Unable to load ContentStack extension.`)
  }
}

export async function createEventInstanceEntry(
  instance: EventInstance
): Promise<void> {
  try {
    const instaneEntry = await extension.stack
      .ContentType('event_instance')
      .Entry.create({
        entry: instance.toEntry(),
      })

    console.log(instaneEntry)

    instance.saved = true
  } catch (error) {
    instance.saved = false
  }
}

export const referenceLink = computed<string | null>(() => {
  try {
    const { api_key } = extensionField.stack
    const { uid, locale } = extensionField.eventEntry

    const params = new URLSearchParams({
      query: JSON.stringify({
        queryObject: { _content_type_uid: { $in: ['event_instance'] } },
        searchText: uid,
      }),
    })

    return `https://app.contentstack.com/#!/stack/${api_key}/entries?${params.toString()}`
  } catch (error) {
    return null
  }
})

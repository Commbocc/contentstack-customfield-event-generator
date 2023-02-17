import CS from '@contentstack/app-sdk'
import { DateTime } from 'luxon'

export const extensionField = reactive<IExtensionField>({
  stack: null,
  eventEntry: null,
  config: {
    timezone: DateTime.local().zoneName,
  },
  fieldData: {
    ruleSets: [],
    timezone: DateTime.local().zoneName,
  },
})

const configIsValid = computed<boolean>(() => {
  for (const key of [
    // required config keys go here
    'timezone',
  ]) {
    if (!extensionField.config.hasOwnProperty(key)) return false
  }

  return true
})

export const useContentstackExtension = () => {
  async function init() {
    try {
      const extension = await CS.init()
      console.log(extension)

      // enable iframe rezise
      extension.location.CustomField?.frame.enableAutoResizing()

      // assign config
      Object.assign(
        extensionField.config,
        extension.location.CustomField?.fieldConfig
      )

      //
      extensionField.stack = extension.stack._data
      extensionField.eventEntry = extension.location.CustomField?.entry._data

      // assign field data
      Object.assign(
        extensionField.fieldData,
        extension.location.CustomField?.field.getData()
      )

      // set changes to fieldData to contentstack field
      watch(
        () => extensionField.fieldData,
        async () => {
          const { setsWithExceptions } = useRRuleSets()

          // computed field data
          for (const set of extensionField.fieldData.ruleSets) {
            const setsWithException = setsWithExceptions.value.find(
              (s) => s.uuid === set.uuid
            )
            set.ruleString = setsWithException!.rruleSet!.toString()
          }

          await extension.location.CustomField?.field.setData(
            extensionField.fieldData
          )
        },
        { deep: true }
      )
    } catch (error) {
      console.warn(`Unable to load ContentStack extension.`)
    }
  }

  return { init, extensionField, configIsValid }
}

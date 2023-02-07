<script setup lang="ts">
const props = defineProps<{ ruleSet: IRuleSet; dateKey: string }>()

const date = computed(() => new Date(base64decode(props.dateKey)))

const { eventDurationMilliseconds } = useRRule(props.ruleSet.fields)

onBeforeMount(() => {
  if (props.ruleSet.rdates[props.dateKey]) return

  props.ruleSet.rdates[props.dateKey] = {
    start: dateTimeLocalValue(keepLocalTZ(date.value)),
    end:
      eventDurationMilliseconds.value > 0
        ? dateTimeLocalValue(
            keepLocalTZ(
              new Date(date.value.valueOf() + eventDurationMilliseconds.value)
            )
          )
        : undefined,
  }
})

onBeforeUnmount(() => {
  if (props.ruleSet.exceptions[props.dateKey] === 'Rescheduled') return
  delete props.ruleSet.rdates[props.dateKey]
})
</script>

<template>
  <div class="grid">
    <input
      type="datetime-local"
      v-model="ruleSet.rdates[props.dateKey].start"
    />
    <input type="datetime-local" v-model="ruleSet.rdates[props.dateKey].end" />
  </div>
</template>

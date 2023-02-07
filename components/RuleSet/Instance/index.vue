<script setup lang="ts">
const props = defineProps<{ instance: IRRuleSetInstace }>()
const hash = useRoute().hash
const { extensionField } = useContentstackExtension()

const key = computed(() => base64encode(props.instance.date.toISOString()))

const ruleSet = computed(
  () =>
    extensionField.fieldData.ruleSets.find(
      (s) => s.uuid === props.instance.setUuid
    )!
)
</script>

<template>
  <tr :id="key" :class="{ highlight: `#${key}` === hash }">
    <th>
      <strong>
        {{ keepLocalTZ(instance.date).toLocaleString() }}
      </strong>
      <br />
      <small>
        {{ keepLocalTZ(instance.date) }}
      </small>

      <RuleSetInstanceChangeDate
        v-if="ruleSet.exceptions[key] === 'Rescheduled'"
        :rule-set="ruleSet"
        :date-key="key"
      />
    </th>

    <td>
      <select v-model="ruleSet.exceptions[key]">
        <option :value="undefined">Enabled</option>
        <option value="Disabled">Disabled</option>
        <option value="Cancelled">Cancelled</option>
        <option value="Rescheduled">Rescheduled</option>
      </select>
    </td>
  </tr>
</template>

<style>
.highlight {
  background-color: var(--mark-background-color) !important;
  /* color: var(--mark-color); */
}
</style>

<script setup lang="ts">
const props = defineProps<{ ruleSet: IRuleSet }>()
const { rrule } = useRRule(props.ruleSet.fields)
</script>

<template>
  <details style="--border-width: 0">
    <summary class="secondary">
      {{ rrule?.toText() || 'Undefined Rule' }}
    </summary>

    <RuleSetForm :fields="ruleSet.fields" />
    <RuleSetExceptions :rule-set="ruleSet" />
  </details>
</template>

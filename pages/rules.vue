<script setup lang="ts">
import { v4 as uuid } from 'uuid'
const { extensionField } = useContentstackExtension()

const addRule = () => {
  extensionField.fieldData.ruleSets.push({
    uuid: uuid(),
    fields: {
      interval: 1,
      freq: 1,
      limitByCount: true,
      count: 1,
      byweekday: [],
      bymonth: [],
    },
    exceptions: {},
    rdates: {},
    ruleString: '',
  })
}

const removeRule = (rs: IRuleSet) => {
  useConfirmationDialog(() => {
    const index = extensionField.fieldData.ruleSets.indexOf(rs)
    extensionField.fieldData.ruleSets.splice(index, 1)
  })
}
</script>

<template>
  <div class="grid">
    <button @click="addRule">Add Rule</button>
  </div>

  <article v-for="rs in extensionField.fieldData.ruleSets">
    <RuleSet :rule-set="rs" />

    <footer>
      <div class="grid">
        <div></div>

        <button
          @click.prevent="removeRule(rs)"
          class="secondary outline"
          style="--spacing: 0; --line-height: 0.5"
        >
          Remove Rule
        </button>
      </div>
    </footer>
  </article>
</template>

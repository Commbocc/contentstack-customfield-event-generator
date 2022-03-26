<script setup lang="ts">
import { init, extensionField, referenceLink } from './lib'
import RRuleForm from './components/RRuleForm.vue'
import InstancesForm from './components/InstancesForm.vue'

init()
</script>

<template>
  <div v-if="!extensionField.eventEntry">
    Must be used as a ContentStack extension
  </div>

  <div v-else-if="!extensionField.eventEntry?.uid">
    Save the event before creating instances
  </div>

  <aside v-else>
    <details open class="card my-3">
      <summary class="card-header">Reoccurrence Rules</summary>
      <RRuleForm />
    </details>

    <details open class="card my-3">
      <summary class="card-header">Generated Instances</summary>
      <InstancesForm />
    </details>

    <hr />

    <a v-if="referenceLink" :href="referenceLink" target="_blank">
      Find Instances of this Event
    </a>
  </aside>
</template>

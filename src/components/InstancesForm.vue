<script setup lang="ts">
import { extensionField } from '../lib'
import {
  instances,
  activeInstances,
  createInstanceEntries,
} from '../lib/event-instances'
</script>

<template>
  <div v-if="!instances" class="card-body">
    Use the "Reoccurrence Rules" form above to generate instances of this event.
  </div>

  <form v-else @submit.prevent>
    <ul class="list-group list-group-flush mb-3">
      <li
        v-for="instance in instances"
        :key="instance.key"
        class="
          list-group-item
          d-flex
          justify-content-between
          align-items-center
        "
        :class="{
          'text-muted bg-light': !instance.active,
          'list-group-item-success': instance.saved,
          'list-group-item-danger': instance.saved === false,
        }"
      >
        <div>
          {{ instance.range }}
          <br />
          <small>
            {{ instance.start_time }}
          </small>
          <!-- <pre>{{ instance }}</pre> -->
        </div>

        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            :id="`instance-${instance.key}`"
            v-model="instance.active"
          />
          <label class="form-check-label" :for="`instance-${instance.key}`">
            Include
          </label>
        </div>
      </li>
    </ul>

    <div class="card-footer d-flex justify-content-between align-items-center">
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          id="confirmation"
          v-model="extensionField.createConfirmation"
        />
        <label class="form-check-label" for="confirmation">
          Confirm creation of {{ activeInstances.length }} instance(s) of this
          event?
        </label>
      </div>

      <button
        type="button"
        class="btn btn-warning"
        :disabled="!extensionField.createConfirmation"
        @click.prevent="createInstanceEntries"
      >
        Create Instances
      </button>
    </div>

    <!-- <pre>{{ instances }}</pre> -->
  </form>
</template>

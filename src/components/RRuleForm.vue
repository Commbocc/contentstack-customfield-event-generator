<script setup lang="ts">
import { ref } from 'vue'
import { extensionField } from '../lib'
import { generateInstances } from '../lib/event-instances'
import { rrule, rule, frequencies, weekdays, months } from '../lib/rrule'

const form = ref()

const generate = () => {
  if (!form.value.reportValidity()) return
  generateInstances()
}
</script>

<template>
  <form ref="form">
    <div class="card-body">
      <!-- freq -->
      <label class="form-label">Frequency</label>
      <div class="mb-3">
        <div
          v-for="{ value, label } in frequencies"
          :key="value"
          class="form-check form-check-inline"
        >
          <input
            class="form-check-input"
            type="radio"
            name="freqOptioins"
            :id="`freq-${value}`"
            :value="value"
            v-model="rrule.freq"
          />
          <label
            class="form-check-label"
            :for="`freq-${value}`"
            v-text="label"
          ></label>
        </div>
      </div>

      <!-- dtstart -->
      <label class="form-label">Start Date/Time</label>
      <div class="w-75 mb-3">
        <input
          type="datetime-local"
          class="form-control"
          v-model="rrule.dtstart"
          :max="rrule.dtend ?? undefined"
          :required="!rrule.dtstart ?? undefined"
        />
      </div>

      <!-- end -->
      <label class="form-label">End Date/Time</label>
      <div class="w-75 mb-3">
        <input
          type="datetime-local"
          class="form-control"
          v-model="rrule.dtend"
          :min="rrule.dtstart ?? undefined"
          :required="!rrule.dtend ?? undefined"
        />
      </div>

      <label class="form-label">Limit Occurrences</label>
      <div class="w-75 mb-3">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="limitOptions"
            :id="`limit-count`"
            :value="true"
            v-model="rrule.limitByCount"
          />
          <label class="form-check-label" :for="`limit-count`">By Count</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="limitOptions"
            id="limit-date"
            :value="false"
            v-model="rrule.limitByCount"
          />
          <label class="form-check-label" for="limit-date">Until Date</label>
        </div>

        <!-- count -->
        <div v-if="rrule.limitByCount">
          <input
            type="number"
            min="1"
            required
            :max="extensionField.instanceLimit"
            v-model="rrule.count"
            class="form-control"
          />
        </div>

        <!-- until -->
        <div v-else>
          <input
            type="date"
            class="form-control"
            required
            v-model="rrule.until"
          />
        </div>

        <div class="form-text">
          This generator is limited to creating
          {{ extensionField.instanceLimit }} instances at a time.
        </div>
      </div>

      <!-- interval -->
      <label class="form-label">Interval</label>
      <div class="w-75 mb-3">
        <input
          type="number"
          v-model="rrule.interval"
          class="form-control"
          min="1"
          required
        />
      </div>

      <!-- by week day -->
      <label class="form-label">By Week Day</label>
      <div class="mb-3">
        <div
          v-for="{ value, label } in weekdays"
          :key="value"
          class="form-check form-check-inline"
        >
          <input
            class="form-check-input"
            type="checkbox"
            :id="`weekday-${value}`"
            :value="value"
            v-model="rrule.byweekday"
          />
          <label
            class="form-check-label"
            :for="`weekday-${value}`"
            v-text="label"
          ></label>
        </div>
      </div>

      <!-- by month -->
      <label class="form-label">By Month</label>
      <div class="mb-3">
        <div
          v-for="{ value, label } in months"
          :key="value"
          class="form-check form-check-inline"
        >
          <input
            class="form-check-input"
            type="checkbox"
            :id="`month-${value}`"
            :value="value"
            v-model="rrule.bymonth"
          />
          <label
            class="form-check-label"
            :for="`month-${value}`"
            v-text="label"
          ></label>
        </div>
      </div>

      <!-- set position -->
      <div class="mb-3 w-75">
        <label for="">Set Posiiton</label>
        <input type="number" class="form-control" v-model="rrule.bysetpos" />
        <div class="form-text">
          Corresponds to the nth occurence (i.e. 3 for third, -2 for second to
          last)
        </div>
      </div>
    </div>

    <footer
      class="card-footer d-flex justify-content-between align-items-center"
    >
      <span>
        {{ rule?.toText() }}
      </span>

      <button
        type="button"
        @click.prevent="generate"
        class="btn btn-primary btn-sm"
      >
        Generate Instances
      </button>
    </footer>
  </form>

  <!-- <pre>{{ rrule }}</pre> -->
</template>

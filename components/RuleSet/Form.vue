<script setup lang="ts">
const { frequencies, weekdays, months } = useFieldHelpers()

const props = defineProps<{
  fields: IRRuleFields
}>()

const form = ref()

onMounted(() => {
  watch(
    () => props.fields,
    () => form.value.reportValidity()
    // { deep: true }
  )
})
</script>

<template>
  <form ref="form">
    <!--  -->
    <label>Starting</label>
    <div class="grid">
      <!-- dtstart -->
      <input
        type="datetime-local"
        v-model="fields.dtstart"
        :max="fields.dtend ?? undefined"
        :required="!fields.dtstart ?? undefined"
      />

      <!-- end -->
      <input
        type="datetime-local"
        v-model="fields.dtend"
        :min="fields.dtstart ?? undefined"
        :required="!fields.dtend ?? undefined"
      />
    </div>

    <!-- every -->
    <label>Every</label>
    <div class="grid">
      <!-- interval -->
      <input type="number" v-model="fields.interval" min="1" required />

      <!-- freq -->
      <select id="frequency" v-model="fields.freq" required>
        <option v-for="{ value, label } in frequencies" :value="value">
          {{ label }}
        </option>
      </select>
    </div>

    <!-- interval -->
    <label>Interval</label>
    <div class="grid">
      <!-- by week day -->
      <details role="list">
        <summary aria-haspopup="listbox">By Week Day</summary>
        <ul role="listbox">
          <li v-for="{ value, label } in weekdays">
            <label>
              <input
                type="checkbox"
                :value="value"
                v-model="fields.byweekday"
              />

              {{ label }}
            </label>
          </li>
        </ul>
      </details>

      <!-- by month -->
      <details role="list">
        <summary aria-haspopup="listbox">By Month</summary>
        <ul role="listbox">
          <li v-for="{ value, label } in months">
            <label>
              <input type="checkbox" :value="value" v-model="fields.bymonth" />

              {{ label }}
            </label>
          </li>
        </ul>
      </details>
    </div>

    <!--  -->
    <label>Limit Occurrences</label>

    <div class="grid">
      <!-- limit count -->
      <select id="limit-count" v-model="fields.limitByCount" required>
        <option :value="true">By Count</option>
        <option :value="false">Until Date</option>
      </select>

      <!-- count -->
      <input
        v-if="fields.limitByCount"
        type="number"
        :min="1"
        v-model="fields.count"
      />

      <!-- until -->
      <input v-else type="date" required v-model="fields.until" />
    </div>

    <!-- set position -->
    <div class="mb-3 w-75">
      <label>Set Posiiton</label>
      <input type="number" v-model="fields.bysetpos" />
      <small>
        Corresponds to the nth occurence (i.e. 3 for third, -2 for second to
        last)
      </small>
    </div>

    <!-- <button
      type="button"
      @click.prevent="generate"
      class="btn btn-primary btn-sm"
    >
      Generate Instances
    </button> -->
  </form>
</template>

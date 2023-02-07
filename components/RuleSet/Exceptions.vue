<script setup lang="ts">
const props = defineProps<{
  ruleSet: IRuleSet
}>()

const decode = (str: string) => new Date(base64decode(str))

const sortDates = (a: string, b: string) =>
  decode(a).valueOf() - decode(b).valueOf()

const sortedExceptions = computed(() =>
  Object.keys(props.ruleSet.exceptions)
    .filter((k) => props.ruleSet.exceptions?.[k] !== undefined)
    .sort(sortDates)
)

const removeException = (key: string) => {
  useConfirmationDialog(() => {
    delete props.ruleSet.exceptions?.[key]
    delete props.ruleSet.rdates?.[key]
  })
}
</script>

<template>
  <details v-if="sortedExceptions.length" style="--border-width: 0">
    <summary role="button" class="secondary">Exceptions</summary>
    <figure>
      <table role="grid">
        <tbody>
          <tr v-for="key in sortedExceptions">
            <th>
              <NuxtLink
                :to="`/?year=${keepLocalTZ(decode(key)).getFullYear()}#${key}`"
              >
                {{ keepLocalTZ(decode(key)) }}
              </NuxtLink>
            </th>
            <td>
              {{ ruleSet.exceptions?.[key] }}
            </td>
            <td>
              <a
                @click.prevent="removeException(key)"
                href="#"
                class="contrast"
              >
                Remove
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </figure>
  </details>
</template>

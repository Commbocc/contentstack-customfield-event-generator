<script setup lang="ts">
const { sets } = useRRuleSets()

const { year } = useRoute().query

const viewYear = ref<number>(
  year ? parseInt(year.toString()) : new Date().getFullYear()
)

const instances = computed<IRRuleSetInstace[]>(() => {
  const start = new Date(Date.UTC(viewYear.value, 0, 0))
  const end = new Date(Date.UTC(viewYear.value, 12, 1))

  return sets.value
    ?.flatMap((rset) =>
      rset.rruleSet.between(start, end).map<IRRuleSetInstace>((date) => {
        return { date, setUuid: rset.uuid }
      })
    )
    .sort((a: any, b: any) => {
      if (a.date.valueOf() < b.date.valueOf()) return -1
      if (a.date.valueOf() > b.date.valueOf()) return 1
      return 0
    })
})
</script>

<template>
  <div class="grid">
    <button @click.prevent="viewYear--" class="secondary">&lsaquo;</button>
    <input type="number" v-model="viewYear" style="text-align: center" />
    <button @click.prevent="viewYear++" class="secondary">&rsaquo;</button>
  </div>

  <article v-if="!instances?.length">
    There are no instances of this event in {{ viewYear }},
    <NuxtLink to="/rules">adjust the rules</NuxtLink>.
  </article>

  <figure v-else>
    <table role="grid">
      <tbody>
        <RuleSetInstance v-for="instance in instances" :instance="instance" />
      </tbody>
    </table>
  </figure>
</template>

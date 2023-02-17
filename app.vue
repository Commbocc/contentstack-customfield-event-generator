<script setup lang="ts">
const { init, extensionField, configIsValid } = useContentstackExtension()
onMounted(async () => {
  await init()
})
</script>

<template>
  <Html data-theme="dark">
    <Body class="container">
      <!--  -->
      <div v-if="!$dev && !extensionField.eventEntry">
        Must be used as a ContentStack extension
      </div>

      <!-- config check -->
      <div v-else-if="!configIsValid">Invalid Configuration</div>

      <!-- app -->
      <template v-else>
        <nav>
          <ul></ul>
          <ul>
            <li>
              <NuxtLink to="/" active-class="contrast"> Instances </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/rules" active-class="contrast"> Rules </NuxtLink>
            </li>
          </ul>
        </nav>

        <NuxtPage />
      </template>

      <ConfirmatonDialog />

      <!-- <pre>{{ extensionField.fieldData }}</pre> -->
    </Body>
  </Html>
</template>

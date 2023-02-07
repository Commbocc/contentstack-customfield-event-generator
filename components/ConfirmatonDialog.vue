<script setup lang="ts"></script>

<template>
  <dialog :open="confirmationDialog.open">
    <article class="container">
      <header>
        <a
          aria-label="Close"
          class="close"
          @click.prevent="confirmationDialog.open = false"
        ></a>
        Are you sure?
      </header>

      <div class="grid">
        <button @click.prevent="confirmationDialog.callback">Confirm</button>
        <button
          class="contrast"
          @click.prevent="confirmationDialog.open = false"
        >
          Cancel
        </button>
      </div>
    </article>
  </dialog>
</template>

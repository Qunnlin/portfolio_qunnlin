<script setup lang="ts">
const visible = ref(false);

</script>

<template lang="pug">
div.card.flex.justify-content-center
  button(label="Show" icon="pi pi-external-link" @click="visible = true")
  Dialog(v-model('visible')="visible" modal header="Header" :style="{ width: '50vw' }")
    p Test

</template>

<style scoped>

</style>

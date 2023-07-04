<script setup lang="ts">

</script>

<template lang="pug">
div.container
  slot
  nav-dock
</template>

<style scoped>
.container {
  position: relative;
  min-height: 100vh;
  padding-bottom: 70px; /* Height of the footer */
}
nav-dock {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 70px;
}
</style>

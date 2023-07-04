<script setup lang="ts">

const navItems = ref([
  {
    label: 'Home',
    url: '/',
    icon: 'pi pi-fw pi-home',
  },
  {
    label: 'Projects',
    url: '/projects',
    icon: 'pi pi-fw pi-briefcase',
  },
  {
    label: 'Blog',
    url: '/blog',
    icon: 'pi pi-fw pi-pencil',
  },
  {
    label: 'About',
    url: '/about',
    icon: 'pi pi-fw pi-user',
  },
  {
    label: 'Contact',
    url: '/contact',
    icon: 'pi pi-fw pi-envelope',
  },
  {
    label: 'Shut Down',
    url: '/logout',
    icon: 'pi pi-fw pi-power-off',
  }
])

</script>

<template lang="pug">
menubar(
  :model="navItems"
  )
</template>

<style scoped>
</style>

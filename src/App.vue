<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <main>
    <section>
      <RouterView name="helper" />
      <RouterView />
      <RouterView name="fooder" />
    </section>

  </main>
</template>

<style scoped ></style>

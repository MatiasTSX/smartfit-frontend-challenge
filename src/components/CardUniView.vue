<script setup lang="ts">
defineProps({
  units: Array,
});

const sanitizeHTML = (html: string) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
};
</script>

<template>
  <main class="container">
    <section class="card-units">
      <section v-for="(unit, index) in units" :key="index" class="card-unit">
        <span v-if="unit.opened == true" class="open">Aberto</span>
        <span v-if="unit.opened == false" class="closed">Fechado</span>
        <h2>{{ unit.title }}</h2>
        <div
          class="adress"
          v-if="unit.content"
          v-html="sanitizeHTML(unit.content)"
        ></div>
        <hr />
        <h3>{{ unit.schedules[0].weekdays }}</h3>
        <span>{{ unit.schedules[0].hour }}</span>
      </section>
    </section>
  </main>
</template>

<style scoped lang="scss">
@import "../styles/colorVariables.module.scss";

.card-units {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 680px) {
    display: block;
  }
}
.card-unit {
  width: calc(25% - 20px);
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid $lightGrey;
  border-radius: 8px;
  box-sizing: border-box $lightGrey;

  .open {
    color: $green;
  }

  .closed {
    color: $red;
  }
  .adress {
    font-size: 0.9rem;
    color: $lightGrey;
    padding: 10px 0;
  }

  h2,
  h3 {
    padding: 8px 0;
    color: $darkGrey;
  }

  @media (max-width: 680px) {
    width: 100%;
  }
}
</style>

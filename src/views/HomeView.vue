<script setup lang="ts">
import ReaberturaView from "@/components/ReaberturaView.vue";
import UnidadesFilterView from "@/components/UnidadesFilterView.vue";
import SectionIconView from "@/components/SectionIconView.vue";
import CardUniView from "@/components/CardUniView.vue";
import { ref } from "vue";
import findUnits from "@/services/FindUnits";


const unitsResult = ref<any[]>([]);
const title = ref<string>("");

const handleFilterSubmit = async (selectedValue: string) => {
  try {
    const result = await findUnits(selectedValue);
    unitsResult.value = result;
    title.value = selectedValue;
    console.log(unitsResult);
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <main class="container">
    <section>
      <ReaberturaView />
      <UnidadesFilterView :onFilterSubmit="handleFilterSubmit" />
      <SectionIconView></SectionIconView>

      <CardUniView :units="unitsResult"></CardUniView>

      
    </section>
  </main>
</template>

<style scoped></style>

<script setup lang="ts">
import findUnits from "@/services/FindUnits";
import CardUniView from "./CardUniView.vue";
import { ref } from "vue";

const radioGroup = ref<string>("");
const unitsResult = ref<any[]>([]);

const { onFilterSubmit } = defineProps(["onFilterSubmit"]);



const handleSubmit = (event: Event) => {
  event.preventDefault();
  onFilterSubmit(radioGroup.value);
};
</script>

<template>
  <main class="container">
    <section class="training-schedule-card">
      <div class="schedule-grid">
        <form @submit="handleSubmit">
          <div class="radio-time-slots">
            <div class="radio-group">
              <div class="flex-items-start">
                <input
                  type="radio"
                  id="Manha"
                  name="turno"
                  value="Manhã"
                  class="custom-radio"
                  v-model="radioGroup"
                />
                <label for="Manha" class="input-label-container">
                  <span>Manhã</span>
                </label>
                <div class="spacer"></div>
                <p class="time-slot">06:00 às 12:00</p>
              </div>

              <div class="flex-items-start">
                <input
                  type="radio"
                  id="Noite"
                  name="turno"
                  value="Tarde"
                  class="custom-radio"
                  v-model="radioGroup"
                />
                <label for="Tarde" class="input-label-container">
                  <span>Tarde</span>
                </label>
                <div class="spacer"></div>
                <p class="time-slot">12:00 às 18:00</p>
              </div>

              <div class="flex-items-start">
                <input
                  type="radio"
                  id="Noite"
                  name="turno"
                  value="Noite"
                  class="custom-radio"
                  v-model="radioGroup"
                />
                <label for="Noite" class="input-label-container">
                  <span>Noite</span>
                </label>
                <div class="spacer"></div>
                <p class="time-slot">18:00 às 23:00</p>
              </div>
            </div>
          </div>

          <section class="find-units">
            <button>Encontrar unidade</button>
          </section>
        </form>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
@import "../styles/colorVariables.module.scss";

.radio-time-slots {
  display: flex;
  justify-content: space-between;

  .radio-group {
    width: 100%;
  }

  .flex-items-start {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 4px;
    margin: 20px 0;
  }

  .custom-radio {
    width: 18px;
    height: 18px;
  }

  .input-label-container {
    margin-right: 10px;
  }

  .spacer {
    flex-grow: 1;
  }
}

.find-units {
  width: 300px;
  margin: 20px 0;
  font-weight: bold;

  button {
    text-transform: uppercase;
    font-weight: bold;
    width: 100%;
    padding: 16px 0;
    cursor: pointer;
    border: none;
    background-color: $yellow;
  }
}
</style>

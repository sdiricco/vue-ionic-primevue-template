<template>
  <div class="p-6 text-color">
    <Card class="mb-6">
      <template #content>
        <div class="flex align-items-center justify-content-center pb-6">
          <span class="mr-2">Toggle theme</span>
          <InputSwitch :model-value="isDark" @update:model-value="onchange" />
        </div>

        <div class="flex gap-4 align-items-center justify-content-center">
          <Button aria-label="Filter" @click="decrement">
            <template #icon>
              <Icon icon="ic:baseline-minus" />
            </template>
          </Button>
          <div>
            Count
            <span>
              {{ count }}
            </span>
          </div>

          <Button aria-label="Filter" @click="increment">
            <template #icon>
              <Icon icon="ic:baseline-plus" />
            </template>
          </Button>
        </div>
      </template>
    </Card>

    <Card class="mb-6">
      <template #header>
        <div class="text-xl p-4">PrimeVue basic form</div>
      </template>
      <template #content>
        <InputText aria-describedby="username-help" class="block w-full mb-6" />
      </template>

    </Card>

    <Card>
      <template #header>
        <div class="text-xl p-4">Ionic basic form</div>
      </template>
      <template #content>

        <ion-input label="Outline input" label-placement="floating" fill="outline" placeholder="Enter text"
          class="mb-6"></ion-input>
      </template>

    </Card>
  </div>
</template>

<script setup lang="ts">
import { IonInput } from '@ionic/vue';

import { useCounterStore } from "@/store/main";
import { storeToRefs } from "pinia";
import useTheme from "@/composables/useTheme";

const counter = useCounterStore();
const { count } = storeToRefs(counter);
const { increment, decrement } = counter;

const { isDark, toggleTheme } = useTheme();


function onchange() {
  toggleTheme()
}

defineProps({
  name: String,
});
</script>

<style scoped></style>

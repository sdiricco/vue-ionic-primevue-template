<template>
  <div class="p-6">
    <div class="flex align-items-center justify-content-center pb-6">
      <span class="mr-2">Toggle theme</span>
      <InputSwitch v-model:model-value="isDark" />
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
  </div>
</template>

<script setup lang="ts">
import { useDark } from "@vueuse/core";
import { useCounterStore } from "@/store/main";
import { storeToRefs } from "pinia";

const counter = useCounterStore();
const { count } = storeToRefs(counter);
const { increment, decrement } = counter;

const isDark = useDark({
  selector: "body",
  valueDark: "dark",
});

defineProps({
  name: String,
});
</script>

<style scoped></style>

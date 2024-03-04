<template>
  <div class="p-6 text-color">
    <Card>
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
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from "@/store/main";
import { storeToRefs } from "pinia";
import useTheme from "@/composables/useTheme";

const counter = useCounterStore();
const { count } = storeToRefs(counter);
const { increment, decrement } = counter;

const {isDark, toggleTheme} = useTheme();


function onchange(){
  toggleTheme()
}

defineProps({
  name: String,
});
</script>

<style scoped></style>

<template>
  <div class="p-6">
    <div class="flex align-items-center justify-content-center">
      <span class="mr-2">Toggle theme</span>
      <InputSwitch v-model:model-value="isDark" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark({
  selector: "body",
  valueDark: "dark",
});

defineProps({
  name: String,
});
</script>

<style scoped></style>

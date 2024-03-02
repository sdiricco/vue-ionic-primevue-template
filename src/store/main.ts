import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  /**
   * STATE
   */
  const count = ref(0);
  const name = ref("Eduardo");

  /**
   * COMPUTED
   */
  const doubleCount = computed(() => count.value * 2);

  /**
   * ACTIONS
   */
  function increment() {
    count.value += 1;
  }

  function decrement() {
    count.value -= 1;
  }

  return { count, name, doubleCount, increment, decrement };
});

import { computed, watch } from "vue";
import { useDark } from "@vueuse/core";
import { usePrimeVue } from "primevue/config";

export default function useTheme() {
  const primevueLightTheme = "/theme/primevue/light/theme.css";
  const primevueDarkTheme = "/theme/primevue/dark/theme.css";
  const PrimeVue = usePrimeVue();

  const _isDark = useDark({
    selector: "body",
    valueDark: "dark",
    valueLight: "light",
  });

  const isDark = computed<boolean>(()=> _isDark.value)

  function initializeTheme(){
    applyPrimeVueTheme(isDark.value)
  }

  function toggleTheme(){
    const newTheme = !isDark.value
    _isDark.value = newTheme;
    applyPrimeVueTheme(newTheme)
  }

  function applyPrimeVueTheme(isDark: boolean){
    const currentTheme = isDark ? primevueLightTheme : primevueDarkTheme;
    const nextTheme = isDark ? primevueDarkTheme : primevueLightTheme;
    PrimeVue.changeTheme(currentTheme, nextTheme, "primevuetheme-link");
  }


  return {
    isDark,
    toggleTheme,
    initializeTheme
  };
}

import { computed, watch } from "vue";
import { useDark } from "@vueuse/core";
import { usePrimeVue } from "primevue/config";
import { StatusBar, Style } from '@capacitor/status-bar';

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

  async function initializeTheme(){
    await StatusBar.setOverlaysWebView({overlay: true})
    applyPrimeVueTheme(isDark.value)
    await applyStatusBarTheme(isDark.value)
  }

  async function toggleTheme(){
    const newTheme = !isDark.value
    _isDark.value = newTheme;
    applyPrimeVueTheme(newTheme)
    await applyStatusBarTheme(isDark.value)
  }

  function applyPrimeVueTheme(isDark: boolean){
    const currentTheme = isDark ? primevueLightTheme : primevueDarkTheme;
    const nextTheme = isDark ? primevueDarkTheme : primevueLightTheme;
    PrimeVue.changeTheme(currentTheme, nextTheme, "primevuetheme-link");
  }

  async function applyStatusBarTheme(isDark:boolean){
    const style = isDark ? Style.Dark : Style.Light;
    await StatusBar.setStyle({ style });
  }


  return {
    isDark,
    toggleTheme,
    initializeTheme
  };
}

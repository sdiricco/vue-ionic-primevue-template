## Theme toggle

You have to change ionic, primevue and status bar theme. 

```js
import { watch } from "vue";
import { useDark } from "@vueuse/core";
import { usePrimeVue } from "primevue/config";
const PrimeVue = usePrimeVue();

//to change ionic theme
const isDark = useDark({
  selector: "body",
  valueDark: "dark",
});

//to change primevue theme
PrimeVue.changeTheme(
  "/theme/primevue/light/theme.css",
  "/theme/primevue/dark/theme.css",
  "primevuetheme-link",
  () => {}
);

//to change status bar theme according to theme
await StatusBar.setOverlaysWebView({overlay: true})
const style = isDark ? Style.Dark : Style.Light;
await StatusBar.setStyle({ style });
```

The composable `useDark` store in `localstorage` the color schema, so you can uset it to read the user preference. 

### Warning status bar overlay

If you set `overlay: true` in `StatusBar` you will able to control the background status bar color directly from `html` but you have to set an extra `margin-top` to the app

**App.vue**
```html
<template>
  <ion-app class="app">
    ...
  </ion-app>
</template>

<script setup lang="ts">
...
</script>

<style scoped>
.app{
  margin-top: 48px;
}
</style>
```

### Composable useTheme

In order to synch ionic, primevue and StatusBar theme, I created a composables `useTheme` that resolve this problem for you. You can find an example in `ExploreContainer`. Following code is a basic usage:

```html
<template>
  <InputSwitch :model-value="isDark" @update:model-value="toggleTheme" />
</template>

<script setup lang="ts">
import useTheme from "@/composables/useTheme";
const {isDark, toggleTheme} = useTheme();
</script>
```

You have also to initialize themes when app start, in `App.vue`

```html
//app.vue
<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import useTheme from './composables/useTheme';
const {initializeTheme} = useTheme()
initializeTheme();
</script>

<style scoped>
.app{
  margin-top: 48px;
}
</style>
```

## About fonts

Do not use fonts from primevue theme, so delete `font-face` and related imports if needed from prime vue scss/css file.
Create a `index.css` with `font-face` rules

```css
@font-face {
  font-family: "Inter var";
  font-weight: 100 900;
  font-display: swap;
  font-style: normal;
  font-named-instance: "Regular";
  src: url("./fonts/Inter-roman.var.woff2?v=3.19") format("woff2");
}
@font-face {
  font-family: "Inter var";
  font-weight: 100 900;
  font-display: swap;
  font-style: italic;
  font-named-instance: "Italic";
  src: url("./fonts/Inter-italic.var.woff2?v=3.19") format("woff2");
}
```

and then link to `html` file as css asset.

Now link the local font to ionic theme, `variables.css`

```css
html {
  /* For more information on dynamic font scaling, visit the documentation: 
  https://ionicframework.com/docs/layout/dynamic-font-scaling */
  --ion-dynamic-font: var(--ion-default-dynamic-font);
  --ion-font-family: "Inter var", sans-serif !important;
  --ion-default-font: "Inter var", sans-serif !important

}
```
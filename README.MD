# Theming

## Setup 

Place theme under `public` folder. You have to put ionic `variables.css` and primevue `theme.css` into `public` folder and link them to `index.html` file.

```html
<link id="primevuetheme-link" rel="stylesheet" href="/theme/primevue/light/theme.css">
<link id="ionictheme-link" rel="stylesheet" href="/theme/ionic/variables.css">
```

Now, **remove css files** from ionic in order to apply css styles from primevue. 

```ts
/* Basic CSS for apps built with Ionic */
// import '@ionic/vue/css/normalize.css';   
// import '@ionic/vue/css/structure.css';
// import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
// import '@ionic/vue/css/padding.css';
// import '@ionic/vue/css/float-elements.css';
// import '@ionic/vue/css/text-alignment.css';
// import '@ionic/vue/css/text-transformation.css';
// import '@ionic/vue/css/flex-utils.css';
// import '@ionic/vue/css/display.css';
```

## Theme toggle

You have to change both ionic and primevue theme

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
```

The composable `useDark` store in `localstorage` the color schema, so you can uset it to read the user preference. 

In order to synch both systems (ionic and primevue) I created a composables `useTheme` that resolve this problem for you. You can find an example in `ExploreContainer`. Following code is a basic usage:

```js
<template>
  <InputSwitch :model-value="isDark" @update:model-value="toggleTheme" />
</template>

<script setup lang="ts">
import useTheme from "@/composables/useTheme";
const {isDark, toggleTheme} = useTheme();
</script>
```

You have also to initialize themes when app start, in `App.vue`

```js
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
```
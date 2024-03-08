# Theming

## Prerequisites

- Install Android studio: See [capacitor guide](https://capacitorjs.com/docs/getting-started/environment-setup). If you use linux install Android studio from  [snap store](https://snapcraft.io/android-studio) and then install SDK. To install SDK, go to `Tools/SDK Manager` and choose `Edit` from Android SDK Location panel, then install SDK packages.
- Install `ionic` globally
```sh
npm install -g @ionic/cli
```
- Set `CAPACITOR_ANDROID_STUDIO_PATH` environment variable

From terminal launch `which android-studio`, you should see the path of android studio.

```sh
which android-studio

/snap/bin/android-studio
```

Now set the right path

```sh
export CAPACITOR_ANDROID_STUDIO_PATH=/snap/bin/android-studio
```

## Installation
Use `npm` and install all packages.

```sh
npm i
```

## Build

Follow official guide, [Deploying to iOS and Android](https://ionicframework.com/docs/vue/your-first-app/deploying-mobile).

Build application with: 

```sh
ionic build
```

Add android project 

```sh
ionic cap add android
```

Every time you perform a build (e.g. ionic build) that updates your web directory (default: build), you'll need to copy those changes into your native projects:

```sh
ionic cap copy
```

Note: After making updates to the native portion of the code (such as adding a new plugin), use the sync command:


```sh
ionic cap sync
```

## Open Android project with android studio

```sh
ionic cap open android
```

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
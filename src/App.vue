<template>
  <ion-app class="app">
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

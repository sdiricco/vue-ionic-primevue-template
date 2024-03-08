import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'

import { VitePWA } from "vite-plugin-pwa";
import type { VitePWAOptions } from "vite-plugin-pwa";

import dotenv from "dotenv";

//load env variables
dotenv.config();

//load IS_BETA env variables
const IS_BETA = process.env.IS_BETA === 'true'
console.log("IS_BETA", IS_BETA);

//vitePwaOptions variables
const name = IS_BETA ? "Aics Lucca - campionati (beta)" : "Aics Lucca - campionati ";
const short_name = IS_BETA ? "AicsL (beta)" : "AicsL";
const theme_color = IS_BETA ? "#ff0000" : "#ffffff";

const vitePwaOptions: Partial<VitePWAOptions> = {
  registerType: "autoUpdate",
  devOptions: {
    enabled: true,
  },
  injectRegister: "auto",
  includeAssets: ["futbol-regular-2.ico", "pwa-assets/ios/180.png"],
  manifest: {
    name: name,
    short_name: short_name,
    description: "",
    theme_color: theme_color,
    icons: [
      {
        src: "pwa-assets/android/android-launchericon-192-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "pwa-assets/android/android-launchericon-512-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), VitePWA(vitePwaOptions)
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }
})

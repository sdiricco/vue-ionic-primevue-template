## Basic Setup 

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
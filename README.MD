# Vue 3 - ionic template

- [Prerequisites](./docs/prerequisites.md)
- [Basic setup](./docs/project-setup.md)
- [Theme toggle setup](./docs/theme-toggle-setup.md)
- [Advance setup: keyboard](./docs/keyboard-setup.md)

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




## Prerequisites

- Install Android studio
- Install Ionic cli 
- Set capacitor / android studio env variable

## Android studio installation

See [capacitor guide](https://capacitorjs.com/docs/getting-started/environment-setup).

If you use linux install Android studio from  [snap store](https://snapcraft.io/android-studio) and then install SDK.

To install SDK, go to `Tools/SDK Manager` and choose `Edit` from Android SDK Location panel, then install SDK packages.

## Ionic installation

Install `ionic` globally throw `npm`
```sh
npm install -g @ionic/cli
```

## Set env variables

Set `CAPACITOR_ANDROID_STUDIO_PATH` environment variable

From terminal digit `which android-studio`, you should see the path of android studio installation.

```sh
which android-studio

/snap/bin/android-studio
```

Now set the right path

```sh
export CAPACITOR_ANDROID_STUDIO_PATH=/snap/bin/android-studio
```
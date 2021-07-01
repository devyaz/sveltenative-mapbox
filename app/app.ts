/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

import { svelteNative } from 'svelte-native'
import { registerNativeViewElement } from 'svelte-native/dom'

registerNativeViewElement("mapBox", () => require("@nativescript-community/ui-mapbox").MapboxView);//registering the plugin before use
import App from './views/App.svelte'
svelteNative(App, {})

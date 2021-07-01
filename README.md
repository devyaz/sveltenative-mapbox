# sveltenative-mapbox
opengl maps the svelte way ;) 
WARNING

As we switched to a community managed plugin we upgraded the version of the Mapbox SDKs. Though starting from iOS SDK 6.0 and android SDK 9.0 they need special handling for downloading the SDK: iOS

Android

On android the plugin default to 8.x. You can change it by creating a ``before-plugins.gradle`` in ``App_Resources/Android`` with (showing current versions):
```
ext {
    okHttpVersion = "3.12.10"
    def mapboxVersion =  "8.6.6"
    def mapboxTelemetryVersion =  "6.1.0"
    def mapboxPluginsVersion =  "v9"
    def mapboxAnnotationPluginVersion =  "0.9.0"
    def mapboxGesturesVersion =  "0.7.0"
}
```
On iOS we dont force anything so it will get the latest one. If you want to change it create a ``Podfile ``in ``App_Resources/iOS`` with (see demo app):

```pod 'Mapbox-iOS-SDK', '~> 5.1.1'```

Before you begin - Prerequisites

You either need your own tile server such as the one provided by openmaptiles.org or a Mapbox API access token (they have a free Starter plan!), so sign up with Mapbox. Once you've registered go to your Account > Apps > New token. The 'Default Secret Token' is what you'll need.

You will also need to set up your development environment. Please refer to the NativeScript documentation.
Installation

```$ ns plugin install @nativescript-community/ui-mapbox```

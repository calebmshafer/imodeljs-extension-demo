# iModel.js Webinar Extension

## About this repository

This repository contains the source code for both the iTwin Viewer and the Extension implemented during the "Using iTwin Extensions to Customize Digital Twin Workflows".

> Once the webinar is posted to YouTube, a link will be added to it.

## Building an running the sample

### Build iTwin Viewer

1. Update current directory to `demo-app` directory
    * `cd demo-app`
1. Run `npm install`
1. Run `npm start` to start the demo-app

### Build Extension

1. In a separate terminal, cd into the `my-extension` directory
    * `cd my-extension`
1. Run `npm install`
1. Run `npm run build`

### Loading Extension into the Viewer

The following will copy the Extension to the `build` directory of the Viewer.  (See below for instruction another way to serve the Extension)

1. Create a new folder in the demo app to host the extension
    * `mkdir -p ../demo-app/build/imjs_extensions/sample`
1. Copy the Extension contents into the demo app
    * `cp -r ./lib/extension/ ../demo-app/build/imjs_extensions/sample/`
1. Reload the running demo-app to see the Extension loaded

### Loading Extension using a separate webserver

1. `mkdir -p ./lib/imjs_extensions/sample`
1. `cp -r ./lib/extension/ ./lib/imjs_extensions/sample/`
1. `npx serve --cors ./lib`
1. Update `demo-app/src/App.tsx` and switch the url defined in the `extensions` variable to `http://localhost:5000` into of the root of the application (currently set as `http://localhost:3000`)

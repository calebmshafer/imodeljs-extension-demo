# iModel.js Webinar Extension

## About this repository

This repository contains all the source code for the Extension and the iTwin Viewer implemented during the "iTwin Viewer Webinar".

> Once the webinar is posted to YouTube there will be a link to it.

## Building an running the sample

1. Update current directory to `demo-app` directory
    * `cd demo-app`
1. Run `npm install`
1. Run `npm start`, to start the demo-app
1. Create another terminal and move to the `my-extension` directory
    * `cd my-extension`
1. Run `npm install`
1. Run `npm run build`
1. Create a new folder in the demo app to host the extension
    * `mkdir ../demo-app/build/imjs_extensions/sample`
1. Copy the Extension contents into the demo app
    * `cp -r ./lib/extension/ ../demo-app/build/imjs_extensions/sample/`
1. Reload the running demo-app to see the Extension loaded

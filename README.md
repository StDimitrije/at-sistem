Create your HubSpot Developer Sandbox account [here.](https://offers.hubspot.com/free-cms-developer-sandbox)

# Hubspot Tech In Motion

Project for Tech in Motion.

### Install

Run `yarn` or `npm install` to install dependencies

### Scripts
- `start` : Builds project with webpack, uploads to the defined `dest` specified in `webpack.config.js` and watches for changes via [`@hubspot/webpack-cms-plugins/HubSpotAutoUploadPlugin`](https://www.npmjs.com/package/@hubspot/webpack-cms-plugins).
- `deploy` : Clears `/dist` contents, builds project into `/dist`, and uploads to the defined `dest` specified in `webpack.config.js` via [`@hubspot/cms-cli`](https://www.npmjs.com/package/@hubspot/cms-cli).
- `upload`: Uploads the `/dist` contents to your `dest` specified in `webpack.config.js`.
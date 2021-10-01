# Wolfie

Simple wrapper for Wolfram Alpha's API.

- Download from NPM: https://npmjs.org/wolfie
- Source, bugs and pull requests: https://github.com/jerryjappinen/wolfie

### Usage

This package requires you to have your own App ID. You can get this by signing up for Wolfram Alpha's developer portal and creating an ID.

Once you have the ID, you're ready to load Wolfie:

```sh
npm install wolfie
```

```js
import getWolfieClient from 'wolfie'

const wolfie = getWolfieClient('YOUR_WOLFRAM_ALPHA_APP_ID')

wolfie.fetch('What is the capital of Germany')
```

### Alternative builds

If you cannot use the version on NPM, try the AMD module built by bundle.run.

```js
const createWolfieClient = require('https://bundle.run/wolfie').default
```

You can use this package on [observablehq.com](https://observablehq.com/):

```js
// Load Wolfie asynchronously, and initialise it with an environment secret
wolfie = (await require('https://bundle.run/wolfie@0.0.5')).default(Secret("myAppIdInObservableSettings"))
```

# Development

### Commands

```sh
# Build src/ and inject into root (this will be done upon install)
npm run build

# Clean root of built files
npm run clean
```

### Running tests

Tests require a valid app ID from Wolfram Alpha Developers. The spec files make requests to the API, which will fail without this.

Make sure you have a `.env` file in your project root. This will be ignored by git. Enter your app ID like this:

```
SPEC_APP_ID=ABCDEF-123456GHIJ
```

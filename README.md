# Wolfie

Simple wrapper for Wolfram Alpha's API.

Wolfram Alpha's API documentation: https://products.wolframalpha.com/api/

### Usage

```js
import getWolfieClient from 'wolfie'

const wolfie = getWolfieClient('YOUR_WOLFRAM_ALPHA_APP_ID')

wolfie.fetch('What is the capital of Germany')
```

# Development

### Running tests

Tests require a valid app ID from Wolfram Alpha Developers. The spec files make requests to the API, which will fail without this.

Make sure you have a `.env` file in your project root. This will be ignored by git. Enter your app ID like this:

```
SPEC_APP_ID=ABCDEF-123456GHIJ
```

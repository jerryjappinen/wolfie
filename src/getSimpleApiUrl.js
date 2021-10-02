import axios from 'axios'

import getAxiosConfig from './getAxiosConfig'

// See available options:
// https://products.wolframalpha.com/simple-api/explorer/
export default (appId, apiBaseUrl, input, options) => {
  return axios.getUri(getAxiosConfig(appId, apiBaseUrl, 'simpleApi', input, options))
}

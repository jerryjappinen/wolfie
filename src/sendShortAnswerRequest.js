import axios from 'axios'

import getAxiosConfig from './getAxiosConfig'

// See available options:
// https://products.wolframalpha.com/simple-api/explorer/
export default (appId, input, options) => {
  return axios(getAxiosConfig(appId, 'shortAnswer', input, options))
}

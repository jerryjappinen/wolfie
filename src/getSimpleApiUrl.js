import axios from 'axios'

import getAxiosConfig from './util/getAxiosConfig'

// See available options:
// https://products.wolframalpha.com/simple-api/explorer/
export default (appId, input, options) => {
  return axios.getUri(getAxiosConfig(appId, input, options))
}

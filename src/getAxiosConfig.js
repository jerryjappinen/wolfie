import { simpleApiUrl } from './config'

// See available options:
// https://products.wolframalpha.com/simple-api/explorer/
export default (appId, input, options) => {
  return {
    url: simpleApiUrl,
    method: 'get',
    params: {
      ...options,
      i: input,
      appid: appId
    }
  }
}

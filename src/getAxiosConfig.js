import { apiUrls } from './config'

// See available options:
// https://products.wolframalpha.com/simple-api/explorer/
export default (appId, apiBaseUrl, endpoint, input, options) => {
  return {
    url: apiBaseUrl + apiUrls[endpoint],
    method: 'get',
    params: {
      ...options,
      i: input,
      appid: appId
    }
  }
}

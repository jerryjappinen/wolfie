import { apiUrls } from './config'

// See available options:
// https://products.wolframalpha.com/simple-api/explorer/
export default (appId, endpoint, input, options) => {
  return {
    url: apiUrls[endpoint],
    method: 'get',
    params: {
      ...options,
      i: input,
      appid: appId
    }
  }
}

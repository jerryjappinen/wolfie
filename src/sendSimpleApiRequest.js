import axios from 'axios'

const baseUrl = 'https://api.wolframalpha.com/v1/'
const simpleApiUrl = baseUrl + 'simple'

// See available options:
// https://products.wolframalpha.com/simple-api/explorer/
export default (wolframAlphaDeveloperAppId, input, options) => {
  return axios.get(simpleApiUrl, {
    params: {
      ...options,
      i: input,
      appid: wolframAlphaDeveloperAppId
    }
  })
}

import { defaultApiBaseUrl } from './config'

import getClientUrl from './getClientUrl'

import getShortAnswerUrl from './getShortAnswerUrl'
import getSimpleApiUrl from './getSimpleApiUrl'

import sendShortAnswerRequest from './sendShortAnswerRequest'
import sendSimpleApiRequest from './sendSimpleApiRequest'

// Simple createClient function
export default (appId, customApiBaseUrl) => {
  const apiBaseUrl = customApiBaseUrl || defaultApiBaseUrl

  return {

    getClientUrl (...args) {
      return getClientUrl(...args)
    },

    // Short answer API: get a quick, simple response

    fetch (...args) {
      return sendShortAnswerRequest(appId, apiBaseUrl, ...args)
    },

    getUrl (...args) {
      return getShortAnswerUrl(appId, apiBaseUrl, ...args)
    },

    // Simple API: return image

    fetchImage (...args) {
      return sendSimpleApiRequest(appId, apiBaseUrl, ...args)
    },

    getImageUrl (...args) {
      return getSimpleApiUrl(appId, apiBaseUrl, ...args)
    }

  }
}

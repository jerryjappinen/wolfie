import getClientUrl from './getClientUrl'

import getShortAnswerUrl from './getShortAnswerUrl'
import getSimpleApiUrl from './getSimpleApiUrl'

import sendShortAnswerRequest from './sendShortAnswerRequest'
import sendSimpleApiRequest from './sendSimpleApiRequest'

// Simple createClient function
export default (appId) => {
  return {

    getClientUrl (...args) {
      return getClientUrl(...args)
    },

    // Short answer API: get a quick, simple response

    fetch (...args) {
      return sendShortAnswerRequest(appId, ...args)
    },

    getUrl (...args) {
      return getShortAnswerUrl(appId, ...args)
    },

    // Simple API: return image

    fetchImage (...args) {
      return sendSimpleApiRequest(appId, ...args)
    },

    getImageUrl (...args) {
      return getSimpleApiUrl(appId, ...args)
    }

  }
}

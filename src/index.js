import getClientUrl from './getClientUrl'

import getShortAnswerUrl from './getShortAnswerUrl'
import getSimpleApiUrl from './getSimpleApiUrl'

import sendShortAnswerRequest from './sendShortAnswerRequest'
import sendSimpleApiRequest from './sendSimpleApiRequest'

// Simple createClient function
export default (appId) => {
  return {

    fetch (...args) {
      return sendShortAnswerRequest(appId, ...args)
    },

    fetchImage (...args) {
      return sendSimpleApiRequest(appId, ...args)
    },

    getClientUrl (...args) {
      return getClientUrl(...args)
    },

    getUrl (...args) {
      return getShortAnswerUrl(appId, ...args)
    },

    getImageUrl (...args) {
      return getSimpleApiUrl(appId, ...args)
    }

  }
}

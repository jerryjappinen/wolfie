import getClientUrl from './getClientUrl'
import getSimpleApiUrl from './getSimpleApiUrl'
import sendSimpleApiRequest from './sendSimpleApiRequest'

// Simple createClient function
export default (appId) => {
  return {

    fetch (...args) {
      return sendSimpleApiRequest(appId, ...args)
    },

    getClientUrl (...args) {
      return getClientUrl(...args)
    },

    getUrl (...args) {
      return getSimpleApiUrl(appId, ...args)
    }

  }
}

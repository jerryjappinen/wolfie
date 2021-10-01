import getSimpleApiRequestUrl from './getSimpleApiRequestUrl'
import sendSimpleApiRequest from './sendSimpleApiRequest'

// Simple createClient function
export default (appId) => {
  return {

    fetch (...args) {
      return sendSimpleApiRequest(appId, ...args)
    },

    getUrl (...args) {
      return getSimpleApiRequestUrl(appId, ...args)
    }

  }
}

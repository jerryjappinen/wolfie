import sendSimpleApiRequest from './sendSimpleApiRequest'

// Simple createClient function
export default (apiAppId) => {
  return {
    fetch (...args) {
      return sendSimpleApiRequest(apiAppId, ...args)
    }
  }
}

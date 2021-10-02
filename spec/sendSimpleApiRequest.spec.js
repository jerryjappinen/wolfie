import { defaultApiBaseUrl } from '../src/config'

import sendSimpleApiRequest from '../src/sendSimpleApiRequest'

// NOTE: this test will fail without a valid app ID in environment
const validAppId = process.env.SPEC_APP_ID

// Gracious timeout, as the Wolfram Alpha API is not very fast
jest.setTimeout(30 * 1000) // 30 s

describe('sendSimpleApiRequest', () => {
  it('should return valid response', async () => {
    const response = await sendSimpleApiRequest(validAppId, defaultApiBaseUrl, 'What is the capital of Berlin?')

    expect(response).toBeTruthy()
  })
})

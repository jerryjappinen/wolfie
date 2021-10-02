import { defaultApiBaseUrl } from '../src/config'

import sendShortAnswerRequest from '../src/sendShortAnswerRequest'

// NOTE: this test will fail without a valid app ID in environment
const validAppId = process.env.SPEC_APP_ID

// Gracious timeout, as the Wolfram Alpha API is not very fast
jest.setTimeout(30 * 1000) // 30 s

describe('sendShortAnswerRequest', () => {
  it('should return answer endpoint for question', async () => {
    const { data } = await sendShortAnswerRequest(validAppId, defaultApiBaseUrl, 'What is the capital of Berlin?')

    console.log(data)

    expect(data).toBeTruthy()
  })

  it('should return answer endpoint for solve', async () => {
    const { data } = await sendShortAnswerRequest(validAppId, defaultApiBaseUrl, 'solve(x^2 / 20 = 2400^4, x)')

    console.log(data)

    expect(data).toBeTruthy()
  })
})

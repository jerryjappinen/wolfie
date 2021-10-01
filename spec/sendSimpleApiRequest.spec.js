import sendSimpleApiRequest from '../src/sendSimpleApiRequest'

// NOTE: this test will fail without a valid app ID in environment
const validAppId = process.env.SPEC_APP_ID

describe('sendSimpleApiRequest', () => {
  it('should query valid endpoint', async () => {
    jest.setTimeout(5000)

    const response = await sendSimpleApiRequest(validAppId, 'What is the capital of')

    expect(response).toBeTruthy()
  })
})

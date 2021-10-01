import isString from 'lodash/isString'

import getSimpleApiRequestUrl from '../src/getSimpleApiRequestUrl'

// NOTE: this test will fail without a valid app ID in environment
const validAppId = process.env.SPEC_APP_ID

// Gracious timeout, as the Wolfram Alpha API is not very fast
jest.setTimeout(30 * 1000) // 30 s

describe('getSimpleApiRequestUrl', () => {
  it('should return a string', () => {
    const url = getSimpleApiRequestUrl(validAppId, 'What is the capital of Berlin?')

    expect(isString(url)).toBeTruthy()
  })
})

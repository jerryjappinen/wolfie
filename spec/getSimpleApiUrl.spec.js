import isString from 'lodash/isString'

import getSimpleApiUrl from '../src/getSimpleApiUrl'

// NOTE: this test will fail without a valid app ID in environment
const validAppId = process.env.SPEC_APP_ID

describe('getSimpleApiUrl', () => {
  it('should return a string', () => {
    const url = getSimpleApiUrl(validAppId, 'solve(x^2 / 20 = 2400^4, x)')

    expect(isString(url)).toBeTruthy()
  })
})

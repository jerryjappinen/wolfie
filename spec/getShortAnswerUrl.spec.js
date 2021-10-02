import isString from 'lodash/isString'

import getShortAnswerUrl from '../src/getShortAnswerUrl'

// NOTE: this test will fail without a valid app ID in environment
const validAppId = process.env.SPEC_APP_ID

describe('getShortAnswerUrl', () => {
  it('should return a string', () => {
    const url = getShortAnswerUrl(validAppId, 'solve(x^2 / 20 = 2400^4, x)')

    console.log(url)

    expect(isString(url)).toBeTruthy()
  })
})

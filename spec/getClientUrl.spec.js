import isString from 'lodash/isString'

import getClientUrl from '../src/getClientUrl'

describe('getClientUrl', () => {
  it('should return a string', () => {
    const url = getClientUrl('solve(x^2 / 20 = 2400^4, x)')

    console.log(url)

    expect(isString(url)).toBeTruthy()
  })
})

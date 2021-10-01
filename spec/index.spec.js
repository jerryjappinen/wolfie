import isPlainObject from 'lodash/isPlainObject'

import createWolfieClient from '../src'

const sampleAppId = 'SAMPLE_APP_ID'

describe('index', () => {
  const wolfie = createWolfieClient(sampleAppId)

  it('should return object', async () => {
    expect(isPlainObject(wolfie)).toBeTruthy()
  })

  it('should return fetch', async () => {
    expect(wolfie.fetch).toBeTruthy()
  })
})

import { CONFIG } from '../config'
import { Api } from './api'
import { ContentType, GenericErrorModel, HttpResponse } from './httpClient'

export const limit = 10

export const api = new Api({
  baseUrl: `${CONFIG.API_HOST}/api`,
  securityWorker: token => token ? { headers: { authorization: `Bearer ${token}` } } : {},
  baseApiParams: {
    headers: {
      'content-type': ContentType.Json,
    },
    format: 'json',
  },
})

export function pageToOffset (page = 1, localLimit = limit) {
  const offset = (page - 1) * localLimit
  return { limit: localLimit, offset }
}

export function isFetchError (e) {
  return e instanceof Object && 'error' in e
}


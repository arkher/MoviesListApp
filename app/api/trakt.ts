import axios, { AxiosInstance, AxiosPromise } from "axios"
import { stringify } from "qs"

export type EndpointConfig = {
  method: string
  path: string
  data?: unknown
  headers?: unknown
  params?: unknown
  responseType?: string
}

// default headers
const DefaultHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "trakt-api-version": 2,
  "trakt-api-key": "f627c47d425df2e5b5495b5a986af98e13c03a44767f68eb7780ec4b44eb9d87",
}

let axiosInstance: AxiosInstance | undefined

export const getAxiosInstance = (): AxiosInstance => {
  if (axiosInstance) {
    return axiosInstance
  }
  axiosInstance = axios.create({
    baseURL: "https://api.trakt.tv",
    headers: { ...DefaultHeaders },
    paramsSerializer(params: unknown) {
      return stringify(params, { arrayFormat: "repeat" })
    },
  })

  return axiosInstance
}
/**
 *
 * @param config configurações da requisição
 * @template T: Define um tipo de retorno
 */
export const requestApi = async <T>(config: EndpointConfig): Promise<AxiosPromise<T>> => {
  const { data, path, headers, params, method, responseType } = config

  const requestPromise = data
    ? getAxiosInstance()?.[method.toLowerCase()]<T>(path, data, {
        headers,
        params,
        responseType,
      })
    : getAxiosInstance()?.[method.toLowerCase()]<T>(path, {
        headers,
        params,
        responseType,
      })

  return requestPromise
}

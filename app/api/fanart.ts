import axios, { AxiosPromise } from "axios"

export type EndpointConfig = {
  method: string
  path: string
  data?: unknown
  headers?: unknown
  params?: unknown
  responseType?: string
}

const apiFanart = axios.create({
  baseURL: "https://webservice.fanart.tv/v3",
})

/**
 *
 * @param config configurações da requisição
 * @template T: Define um tipo de retorno
 */
export const requestFanartApi = async <T>(config: EndpointConfig): Promise<AxiosPromise<T>> => {
  const { data, path, headers, params, method, responseType } = config
  const requestPromise = data
    ? apiFanart?.[method.toLowerCase()](path, data, {
        headers,
        params,
        responseType,
      })
    : apiFanart?.[method.toLowerCase()](path, {
        headers,
        params,
        responseType,
      })

  return requestPromise
}

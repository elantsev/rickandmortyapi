import { BASE_URL } from './params';
import axios, {
  AxiosRequestConfig,
  Canceler,
  AxiosPromise,
  Method,
  AxiosError,
} from 'axios';

export interface CancellableAxiosPromise<T = any> extends AxiosPromise<T> {
  cancel?: Canceler;
}

export type RequestConfig = Pick<AxiosRequestConfig, 'timeout'>;

interface APIAxiosRequestConfig extends AxiosRequestConfig {
  authRequired?: boolean;
  ignoreFlashMessage?: boolean;
  errorMessage?: string | ((error: AxiosError) => string | undefined);
}

const API = {
  request<T = any>(
    method: Method,
    url: string,
    config?: APIAxiosRequestConfig
  ): CancellableAxiosPromise<T> {
    // make it cancellable
    const source = axios.CancelToken.source();

    const response: CancellableAxiosPromise = axios({
      method,
      url,
      baseURL: BASE_URL,
      ...config,
    });
    response.cancel = source.cancel;

    return response;
  },

  get<T = any>(
    url: string,
    data?: any,
    config?: APIAxiosRequestConfig
  ): CancellableAxiosPromise<T> {
    return API.request<T>('GET', url, { params: data, ...config });
  },
  post<T = any>(
    url: string,
    data: any,
    config?: APIAxiosRequestConfig
  ): CancellableAxiosPromise<T> {
    return API.request<T>('POST', url, { data, ...config });
  },
  put<T = any>(
    url: string,
    data: any,
    config?: APIAxiosRequestConfig
  ): CancellableAxiosPromise<T> {
    return API.request<T>('PUT', url, { data, ...config });
  },
  delete<T = any>(
    url: string,
    data: any,
    config?: APIAxiosRequestConfig
  ): CancellableAxiosPromise<T> {
    return API.request<T>('DELETE', url, { data, ...config });
  },
};

export default API;

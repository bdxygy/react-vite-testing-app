/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { HttpClient } from "./http.lib";

export class HttpClientImpl extends HttpClient {
  private static instance: AxiosInstance;
  constructor() {
    super();
    HttpClientImpl.instance = axios.create({
      baseURL: "/",
    });
  }
  request<R, T>(params: AxiosRequestConfig<T>): Promise<R> {
    return HttpClientImpl.instance.request(params);
  }

  secureRequest<R, T>(params: AxiosRequestConfig<T>): Promise<R> {
    HttpClientImpl.instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    return HttpClientImpl.instance.request(params);
  }
}

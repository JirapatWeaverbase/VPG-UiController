import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const BASE_URL = 'http://203.151.152.87:1880'; 

const responseBody = (response: AxiosResponse) => response.data;

class ApiClient {
  static get(url: string, params?: any): Promise<any> {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: `${BASE_URL}${url}`,
      params: params,
      headers: {}
    };
    return axios
      .request(config)
      .then(responseBody);
  }

}

export { ApiClient };

import axios from "axios";
import * as data from "../assets/constants-file.json";

const IP_CONFIG = data.BACK_END_CONFIG;
class HTTPClient {
  constructor(host) {
    this.axiosInstance = axios.create({ baseURL: host });
  }

  get(path) {
    return this.axiosInstance.get(path);
  }

  post(path, ...args) {
    return this.axiosInstance.post(path, ...args);
  }

  put(path, ...args) {
    return this.axiosInstance.put(path, ...args);
  }

  delete(path) {
    return this.axiosInstance.delete(path);
  }

  attachResponseInterceptors(...interceptors) {
    this.axiosInstance.interceptors.response.use(...interceptors);
  }
}

const httpClient = new HTTPClient(
  `${IP_CONFIG.PRODUCTS_SERVER.IP}:${IP_CONFIG.PRODUCTS_SERVER.PORT}`
);

httpClient.attachResponseInterceptors(
  (response) => response,
  (error) => {
    if (axios.isCancel(error)) {
      return Promise.reject();
    }

    const { response = {} } = error;

    return Promise.reject(response);
  }
);

export default httpClient;

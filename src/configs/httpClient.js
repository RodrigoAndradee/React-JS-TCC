import axios from "axios";

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

const httpClient = new HTTPClient("http://192.168.15.200:8081");

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

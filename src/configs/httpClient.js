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

  attachResponseInterceptors(...interceptors) {
    this.axiosInstance.interceptors.response.use(...interceptors);
  }
}

const httpClient = new HTTPClient("http://177.68.174.37:8081");

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

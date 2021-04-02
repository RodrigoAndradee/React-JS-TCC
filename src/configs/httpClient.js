import axios from "axios";

class HTTPClient {
  constructor(host, prefix) {
    this.prefix = prefix;
    this.axiosInstance = axios.create({ baseURL: host });
  }

  get(path) {
    return this.axiosInstance.get(path);
  }

  post(path, ...args) {
    return this.axiosInstance.post(path, ...args);
  }

  attachResponseInterceptors(...interceptors) {
    this.axiosInstance.interceptors.response.use(...interceptors);
  }
}

const httpClient = new HTTPClient("localhost:8081", "/");

httpClient.attachResponseInterceptors(
  (response) => response,
  (error) => {
    // console.log(error);
  }
);

export default httpClient;

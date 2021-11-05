import axios from "axios";

class OrdersClient {
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

const ordersClient = new OrdersClient("http://201.92.148.235:8082");

ordersClient.attachResponseInterceptors(
  (response) => response,
  (error) => {
    if (axios.isCancel(error)) {
      return Promise.reject();
    }

    const { response = {} } = error;

    return Promise.reject(response);
  }
);

export default ordersClient;

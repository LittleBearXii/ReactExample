import axios from "axios";

const Axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_UTL,
  headers: {
    "Content-type": "application/json"
  }
});

Axios.interceptors.request.use(
  request => {

    if (!request.headers) {
      request.headers = {};
    }

    request.headers['Content-type'] = "application/json";

    return request;
  },
  error => Promise.reject(error),
);

Axios.interceptors.response.use(
  response => response,
  async error => {
    return error.response;
  },
);

export default Axios;
import axios from 'axios';
import qs from 'qs';

const axiosClient = axios.create({
  baseURL: 'http://duyndph12801.cf:8787',
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params) =>
    qs.stringify(params, { encodeValuesOnly: true }),
});

axiosClient.interceptors.request.use((config) => {
  config.headers = {
    Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0OTM0NzAxOSwiZXhwIjoxNjQ5NDMzNDE5fQ._5W0V3lnshC19HwGNxcDi3fO7V3Z2a9ZnQFlJN0-DrrKVyz12K6sspYBPW5b0YuBi6seNhuvyIn_0vUFkBvp8g`,
  };
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    console.error(error.response);
    return error.response;
  },
);
export default axiosClient;

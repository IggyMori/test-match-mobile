// @ts-ignore
import axios from "react-native-axios";
import queryString from 'query-string';
import Config from 'react-native-config';

export const httpClient = axios.create({
  withCredentials: false,
  baseURL: Config.APP_API_URL,
  timeout: 2 * 60 * 1000,
  paramsSerializer: {
    ...axios.defaults.paramsSerializer,
// @ts-ignore
    serialize: params => queryString.stringify(params, { arrayFormat: 'comma' }),
  },
});

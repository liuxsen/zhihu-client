/**
 * Created by liuxsen on 2017/10/13.
 */
import axios from 'axios'
import store from '@/store/index.js'

let instance = axios.create();
const postHttp = function (url, param) {
  instance.defaults.headers.common['token'] = localStorage.getItem("token");
// Add a request interceptor
  instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    store.commit('open');
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
  instance.interceptors.response.use(function (response) {
    // Do something with response data
    store.commit('close');
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });
  return instance.post(url, param);
};

export default postHttp;
import { authKey } from "@/constants/storageKey";
import { IResponseErrorResponse, ResponseSuccessType } from "@/interfaces";
import { getFromLocalStorage } from "@/utils/local-storage";
import axios from "axios";

const instance = axios.create();

instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 6000;

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const accesstoken = getFromLocalStorage(authKey);
    if (accesstoken) {
      config.headers.Authorization = accesstoken;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    const customResponse: ResponseSuccessType = {
      data: response?.data?.data,
      meta: response.data?.meta,
    };

    return customResponse as any;
  },
  function (error) {
    const customError:IResponseErrorResponse = {
      statusCode: error.response?.data?.statusCode || 500,
      message: error.response?.data?.message || 'something went wrong!',
      errorMessages: error.response?.data?.errorMessages,
    };
    return Promise.reject(customError);
  }
);

export { instance };

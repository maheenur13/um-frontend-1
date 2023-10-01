import { authKey } from "@/constants/storageKey";
import { decodedToken } from "@/utils/jwt";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";

type IParamType = {
  accessToken: string;
};

export const storeUserInfo = ({ accessToken }: IParamType) => {
  setToLocalStorage(authKey, accessToken);
};

export const getUserInfo = () => {
  const authLocalStorageData = getFromLocalStorage(authKey);
  if (authLocalStorageData) {
    return decodedToken(authLocalStorageData);
  } else {
    return {};
  }
};

export const isLoggedInUser = () => {
  const authLocalStorageData = getFromLocalStorage(authKey);
  return !!authLocalStorageData;
};

export const removeUserInfo = () => {
  return localStorage.removeItem(authKey);

};

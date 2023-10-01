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
   if(authLocalStorageData) {
    const decodedData = decodedToken(authLocalStorageData);
    console.log({decodedData});
    
   }
    

}

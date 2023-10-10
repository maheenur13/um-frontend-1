export interface IMeta {
  limit: number;
  page: number;
  total: number;
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};
export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export type IResponseErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages?: IGenericErrorMessage;
};

export type IDepartment = {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  _v: number;
};

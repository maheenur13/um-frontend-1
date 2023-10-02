export interface IMeta {
    limit:number;
    page:number;
    size:number;
}

export type ResponseSuccessType = {
    data:any;
    meta?:IMeta;
}
export type IGenericErrorMessage = {
    path: string | number;
    message:string;
}

export type IResponseErrorResponse = {
    statusCode:number;
    message:string;
    errorMessages?:IGenericErrorMessage
}


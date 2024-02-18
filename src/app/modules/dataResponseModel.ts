import { ResponseModel } from "./responseModel";

export interface DataResponseModel<TData> extends ResponseModel{
    data:TData[]
}
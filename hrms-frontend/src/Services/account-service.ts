import type { ILoginRequestModel, ILoginResponseModel } from "../Model/account/accountM";
import type { ApiResponseModel } from "./api";
import type { AxiosResponse } from "axios";
import httpService from "./httpService";

const endPointBaseURL = `auth`;
const loginUser = async (requestBody: ILoginRequestModel): Promise<AxiosResponse<ApiResponseModel<ILoginResponseModel>>> =>
    httpService.post<ApiResponseModel<ILoginResponseModel>>(`${endPointBaseURL}/employeeLogin`, requestBody);

const readPermission = async (): Promise<AxiosResponse<ApiResponseModel<any>>> =>
    httpService.get<ApiResponseModel<any>>(`${endPointBaseURL}/readPermission`);

export default {
    loginUser,
    readPermission,
};
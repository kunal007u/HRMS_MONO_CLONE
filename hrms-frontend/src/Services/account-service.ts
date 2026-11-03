import type { ILoginRequestModel, ILoginResponseModel } from "../Model/account/accountM";
import type { ApiResponseModel } from "./api";
import type { AxiosResponse } from "axios";
import httpService from "./httpService";

const endPointBaseURL = `auth`;
const loginUser = async (requestBody: ILoginRequestModel): Promise<AxiosResponse<ApiResponseModel<ILoginResponseModel>>> =>
    httpService.post<ApiResponseModel<ILoginResponseModel>>(`${endPointBaseURL}/employeeLogin`, requestBody);

export default {
    loginUser,
};
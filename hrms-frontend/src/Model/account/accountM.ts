// Login Model
export interface ILoginResponseModel {
    id?: number
    email?: string
    name?: string
    phone?: string
    role?: string
    profilePicture?: string
    token?: string
}

export interface ILoginRequestModel {
    email: string;
    password: string;
}

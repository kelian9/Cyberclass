import axios, { AxiosResponse } from 'axios';
import { environment } from './environment/environment';
import { AuthResponse, RegisterResponse } from './models/response/auth.response';

export const AuthAPI = {
    auth(login:string, password:string):Promise<AxiosResponse<AuthResponse>> {
        return axios.post(`${environment.apiEndPoint}/Account/AuthUser`, {
            login: login,
            password: password
        })
    },

    register(phone:string, password:string, email:string, nickName:string):Promise<AxiosResponse<RegisterResponse>> {
        return axios.post(`${environment.apiEndPoint}/Account/RegisterUser`, {
            phoneNumber: phone,
            password: password,
            email: email,
            nickName: nickName
        })
    },

    sendActivationCode(login:string):Promise<AxiosResponse> {
        return axios.get(`${environment.apiEndPoint}/Code/SendActivationCode`, {
            params: {
                login: login
            } 
        })
    },

    checkCode(login:string, code:string):Promise<AxiosResponse> {
        return axios.post(`${environment.apiEndPoint}/Account/CheckCode`, {},{
            params: {
                login: login,
                code: code
            }
        })
    },

    subscribeToNews(email:string):Promise<AxiosResponse<RegisterResponse>> {
        return axios.post(`${environment.apiEndPoint}/Sub/CreateSub`, {
            email: email
        })
    },
}
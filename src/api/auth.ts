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

    register(phone:string, password:string):Promise<AxiosResponse<RegisterResponse>> {
        return axios.post(`${environment.apiEndPoint}/Account/RegisterUser`, {
            phoneNumber: phone,
            password: password
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
        return axios.get(`${environment.apiEndPoint}/Code/CheckCode`, {
            params: {
                code: code,
                login: login
            } 
        })
    }
}
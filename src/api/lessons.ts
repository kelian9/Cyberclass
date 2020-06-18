import { environment } from './environment/environment';
import axios, { AxiosResponse } from "axios"
import { MaterialsResponse } from './models/response/materials.response';
import { LessonsResponse } from './models/response/lessons.response';


export const LessonsAPI = {
    getLessons(materialID:number):Promise<AxiosResponse<LessonsResponse[]>> {
        return axios.get(`${environment.apiEndPoint}/Lesson/GetLessons`, {
            params: {
                matId: materialID
            },
            headers: {
                'Authorization' : `Bearer ${JSON.parse(localStorage.getItem('token')).token}`
            }
        })
    },

    getPaidLessons():Promise<AxiosResponse<LessonsResponse[]>> {
        return axios.get(`${environment.apiEndPoint}/Lesson/GetPaidLessons`, {
            headers: {
                'Authorization' : `Bearer ${JSON.parse(localStorage.getItem('token')).token}`
            }
        })
    },

    getNotAuthorizeLessons(materialID:number):Promise<AxiosResponse<LessonsResponse[]>> {
        return axios.get(`${environment.apiEndPoint}/NotAutorize/GetLessonsNotAutarize`, {
            params: {
                matId: materialID
            }
        })
    },

    getMaterials():Promise<AxiosResponse<MaterialsResponse[]>> {
        return axios.get(`${environment.apiEndPoint}/Lesson/GetMaterials`, {
            headers: {
                'Authorization' : `Bearer ${JSON.parse(localStorage.getItem('token')).token}`
            }
        })
    },

    getNotAuthorizeMaterials():Promise<AxiosResponse<MaterialsResponse[]>> {
        return axios.get(`${environment.apiEndPoint}/NotAutorize/GetMaterialsNotAutorize`)
    }
}
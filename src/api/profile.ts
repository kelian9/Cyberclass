import { ProfileResponse } from './models/response/profile.response';
import { EditProfileRequest } from './models/request/profile-request';
import { AxiosResponse } from 'axios';
import axios from 'axios';
import { environment } from './environment/environment';


export const ProfileAPI = {
    getProfileData():Promise<AxiosResponse<ProfileResponse>> {
        return axios.get(`${environment.apiEndPoint}/Profile/GetMyProfile`, {
            headers: {
                'Authorization' : `Bearer ${JSON.parse(localStorage.getItem('token')).token}`
            }
        })
    },
    
    editProfileData(profile:EditProfileRequest):Promise<AxiosResponse> {
        return axios.post(`${environment.apiEndPoint}/Profile/EditMyProfile`, {
            ...profile
        }, 
        {
            headers: {
                'Authorization' : `Bearer ${JSON.parse(localStorage.getItem('token')).token}`
            }
        })
    },

    setAvatar(avatar:FormData):Promise<AxiosResponse<ProfileResponse>> {
        return axios.post(`${environment.apiEndPoint}/Profile/SetAvatar`, avatar, {
            headers: {
                'Authorization' : `Bearer ${JSON.parse(localStorage.getItem('token')).token}`,
                'content-type': 'multipart/form-data'
            }
        })
    }
}
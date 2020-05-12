import axios from 'axios';
import { environment } from './environment/environment';


export const RatingAPI = {
    rateMaterial(id:number, ratingType:number) {
        return axios.post(`${environment.apiEndPoint}/Rating/CreateRating`, {
            materialId: id,
            ratingType: ratingType
        }, {
            headers: {
                'Authorization' : `Bearer ${JSON.parse(localStorage.getItem('token')).token}`
            }
        })
    }
}
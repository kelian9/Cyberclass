import axios from 'axios';
import { environment } from './environment/environment';


export const OrderAPI = {
    createOrder(id:number) {
        return axios.post(`${environment.apiEndPoint}/Order/CreateOrder`, {
            materialID: id
        }, {
            headers: {
                'Authorization' : `Bearer ${JSON.parse(localStorage.getItem('token')).token}`
            }
        })
    }
}
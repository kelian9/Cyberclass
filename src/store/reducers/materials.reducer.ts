import { ActionsConstants } from './../models/actions-constants.model';
import { MaterialsResponse } from "../../api/models/response/materials.response";


export const MaterialsReducer = (state:MaterialsResponse[]=null, action) => {
    switch (action.type) {
        case ActionsConstants.SET_MATERIALS:
            return [...action.materials]
        case ActionsConstants.RATE_MATERIAL:
            return state.map(item => {
                if(item.id === action.id) {
                    item.likeCount++;
                    action.ratingType === 0 ? item.myLike = true : item.myDislike = true;
                    return item;
                }
                return item;
            })
    
        default:
            return state;
    }
}
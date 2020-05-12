import { ActionsConstants } from './../models/actions-constants.model';
import { MaterialsResponse } from "../../api/models/response/materials.response";

export const setMaterials = (action:MaterialsResponse[]) => ({
    type: ActionsConstants.SET_MATERIALS,
    materials: [...action]
})

export const rateMaterialState = (action:{id:number, ratingType:number}) => ({
    type: ActionsConstants.RATE_MATERIAL,
    id: action.id,
    ratingtype: action.ratingType
})
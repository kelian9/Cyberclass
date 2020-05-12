import { User } from "../../api/models/response/auth.response";
import { ActionsConstants } from "../models/actions-constants.model";

export const UserReducer = (state:User={
        userID: NaN,
        person: { name: '' },
        userType: NaN
    }, action:any) => {
        switch (action.type) {
            case ActionsConstants.SET_USER:
                return {
                    userID: action.userID,
                    person: action.person,
                    userType: action.userType
                }
        
            default:
                return state
        }
}
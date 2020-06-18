import { User } from "../../api/models/response/auth.response";
import { ActionsConstants } from "../models/actions-constants.model";

export const UserReducer = (state:User={
        userID: NaN,
        person: { phoneNumber: '' },
        userType: NaN,
        nickName: '',
        avatar: ''
    }, action:any) => {
        switch (action.type) {
            case ActionsConstants.SET_USER:
                return {
                    userID: action.userID,
                    person: action.person,
                    userType: action.userType
                }

            case ActionsConstants.SET_AVATAR:
                return {
                    userID: state.userID,
                    person: state.person,
                    userType: state.userType,
                    nickName: state.nickName,
                    avatar: action.avatar
                }
        
            default:
                return state
        }
}
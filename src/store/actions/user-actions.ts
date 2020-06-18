import { ActionsConstants } from "../models/actions-constants.model";
import { User } from "../../api/models/response/auth.response";

export const setUser = (action:User) => ({
    type: ActionsConstants.SET_USER,
    ...action
})

export const setAvatar = (action:{avatar:string}) => ({
    type: ActionsConstants.SET_AVATAR,
    ...action
})
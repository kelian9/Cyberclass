import { ActionsConstants } from "../models/actions-constants.model";
import { User } from "../../api/models/response/auth.response";

export const setUser = (action:User) => ({
    type: ActionsConstants.SET_USER,
    ...action
})
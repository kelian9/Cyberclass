import { ActionsConstants } from "../models/actions-constants.model";
import { LessonsResponse } from "../../api/models/response/lessons.response";


export const LessonsReducer = (state:LessonsResponse[]=[], action:any) => {
    switch (action.type) {
        case ActionsConstants.SET_LESSONS:
            return action.lessons
        default:
            return state
    }
}
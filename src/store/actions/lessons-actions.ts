import { ActionsConstants } from "../models/actions-constants.model"

export const setLessons = (action) => {
    return {
        type: ActionsConstants.SET_LESSONS,
        lessons: action
    }
}
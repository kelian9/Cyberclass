import { MaterialsReducer } from './reducers/materials.reducer';
import { UserReducer } from './reducers/user.reducer';
import { LessonsReducer } from './reducers/lessons.reducer';
import { createStore, combineReducers } from "redux";

const getStore = () => createStore(
    combineReducers({LessonsReducer, UserReducer, MaterialsReducer})
)

export default getStore;
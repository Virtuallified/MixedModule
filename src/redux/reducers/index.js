import { combineReducers } from "redux";
import alertReducer from "./alertReducer";
import authReducer from "./authReducer";
import taskReducer from "./taskReducer";

export default combineReducers({
    alertReducer,
    authReducer,
    taskReducer,
});
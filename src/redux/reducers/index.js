import { combineReducers } from "redux";
import alertReducer from "./alertReducer";
import taskReducer from "./taskReducer";

export default combineReducers({
    alertReducer,
    taskReducer
});
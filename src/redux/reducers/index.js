import { combineReducers } from "redux";
import alertReducer from "./alert.reducer";
import authReducer from "./auth.reducer";
import taskReducer from "./task.reducer";

export default combineReducers({
    alertReducer,
    authReducer,
    taskReducer,
});
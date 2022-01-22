import { SET_ALERT, REM_ALERT } from "../actions/constants"

const initialData = []

export default function (state = initialData, action) {

    const { type, payload } = action;

    switch(type) {
        case SET_ALERT:
            return [...state, payload]
        case REM_ALERT:
            return state.filter(alert => alert.id !== payload)
        default:
            return state;
    }
}
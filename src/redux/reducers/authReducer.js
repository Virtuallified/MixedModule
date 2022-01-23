import { REG_SUCC, REG_FAIL, LOG_SUCC, LOG_FAIL, LOAD_USR, AUTH_ERR, LOG_OUT } from "../utils/constants"

const initialData = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
}

export default function (state = initialData, action) {

    const {type, payload} = action; 
    
    switch (type) {
        case LOAD_USR:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            }
        case REG_SUCC:
        case LOG_SUCC:
            localStorage.setItem('token', payload)
            // console.log(payload);
            return {
                ...state,
                token: payload,
                isAuthenticated: true,
                loading: false
            }
        case REG_FAIL:
        case LOG_FAIL:
        case AUTH_ERR:
        case LOG_OUT:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null
            }
        default:
            return state;
    }
}

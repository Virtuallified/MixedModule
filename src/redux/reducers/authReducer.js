import { REG_SUCC, REG_FAIL } from "../actions/constants"

const initialData = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
}

export default function (state = initialData, action) {

    const {type, payload} = action; 
    
    switch (type) {
        case REG_SUCC:
            localStorage.setItem('token', payload)
            // console.log(payload);
            return {
                ...state,
                token: payload,
                isAuthenticated: true,
                loading: false
            }
        case REG_FAIL:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            }
        default:
            return state;
    }
}

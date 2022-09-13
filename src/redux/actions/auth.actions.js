import {REG_SUCC, REG_FAIL, LOG_SUCC, LOG_FAIL, LOAD_USR, AUTH_ERR, LOG_OUT} from "../actionTypes/constants"
import axios from "axios";
import { setAlert } from '../../redux/actions/alert.action';
import { setAuthToken } from "../utils/setAuthToken"

// Load User
export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token)
    }
    try {
        // let id = localStorage.token.slice(-1); // Get the last Character of a String
        let id = localStorage.token.substring(localStorage.token.indexOf('7X') + 2); // Get the substring after a specific Character
        // API Call
        let res = await axios.get(`https://reqres.in/api/users/${id}`)
        dispatch({
            type: LOAD_USR,
            payload: res.data
        })
        // localStorage.setItem('user', res.data.user.data)
    } catch (err) {
        dispatch({
            type: AUTH_ERR
        });
    }
}

// Register User
export const doRegister = ({ name, email, password }) => async dispatch => {
    let newUser = { email, password }
    let config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    let data = JSON.stringify(newUser)
    try {
        // API Call
        let res = await axios.post('https://reqres.in/api/register', data, config)
        // console.info(res)
        dispatch(setAlert(JSON.stringify(res.data), "success", 10000))
        dispatch({
            type: REG_SUCC,
            payload: res.data.token
        })
        dispatch(loadUser())
    } catch (err) {
        // console.log(err.response.data)
        // printing each errors
        let errors = err.response.data
        if (errors) {
            Object.entries(errors).forEach(([key, value]) => dispatch(setAlert(value, 'danger')))
        }
        dispatch({
            type: REG_FAIL
        });
    }
}

// Login User
export const doLogin = ( email, password ) => async dispatch => {
    let config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    let data = JSON.stringify({ email, password })
    try {
        // API Call
        let res = await axios.post('https://reqres.in/api/login', data, config)
        // console.info(res)
        dispatch({
            type: LOG_SUCC,
            payload: res.data.token
        })
        dispatch(loadUser())
        // dispatch(setAlert("Loggedin successfully", 'primary'))
    } catch (err) {
        // console.log(err.response.data)
        // printing each errors
        let errors = err.response.data
        if (errors) {
            Object.entries(errors).forEach(([key, value]) => dispatch(setAlert(value, 'danger')))
        }
        dispatch({
            type: LOG_FAIL
        });
    }
}

export const doLogout = () => dispatch => {
    dispatch({ type: LOG_OUT });
}
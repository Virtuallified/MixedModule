import { REG_SUCC, REG_FAIL } from "./constants"
import axios from "axios";
import { setAlert } from '../../redux/actions/alertAction';

// register user
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
                const res = await axios.post('https://reqres.in/api/register', data, config)
                // console.info(res)
                dispatch(setAlert(JSON.stringify(res.data), "success", 10000))
                dispatch({
                    type: REG_SUCC,
                    payload: res.data.token
                })
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
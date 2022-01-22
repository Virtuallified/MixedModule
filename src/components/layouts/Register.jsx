import axios from 'axios';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { setAlert } from '../../redux/actions/alertAction';
import { connect } from 'react-redux';
import Alert from '../reusable/Alerts'

const Register = ({ setAlert }) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        rpassword: ''
    })
    const { name, email, password, rpassword } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = async e => {
        e.preventDefault()
        if (password !== rpassword) {
            // console.log("Password not matched")
            setAlert("Password not matched", "danger")
        } else {
            // console.log(formData)
            const newUser = { email, password }
            try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };
                const data = JSON.stringify(newUser)
                // API Call
                const res = await axios.post('https://reqres.in/api/register', data, config)
                // console.info(res)
                setAlert(JSON.stringify(res.data), "success", 10000)
            } catch (error) {
                console.log(error.response.data)
            }
        }
    }

    return (
        <>
            <div className="container p-5">
                <h2>Register API form via [POST]</h2>
                <details>
                    <summary>Data</summary>
                    <p>
                        email: eve.holt@reqres.in,
                        password: pistol
                    </p>
                </details>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <label htmlFor="email">Name:</label>
                        <input type="text" className="form-control" id="name" value={name} onChange={e => onChange(e)} placeholder="Enter Name" name="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="form-control" id="email" value={email} onChange={e => onChange(e)} placeholder="Enter email" name="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Password:</label>
                        <input type="password" className="form-control" id="pwd" value={password} onChange={e => onChange(e)} placeholder="Enter password" name="password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Retype Password:</label>
                        <input type="password" className="form-control" id="pwd2" value={rpassword} onChange={e => onChange(e)} placeholder="Enter password" name="rpassword" />
                    </div>
                    <Alert />
                    <button type="submit" className="btn btn-primary float-right">Register</button>
                </form>
            </div>
        </>
    )
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
}

export default connect(null, { setAlert })(Register)
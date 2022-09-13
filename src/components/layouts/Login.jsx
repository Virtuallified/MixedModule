import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { setAlert } from '../../redux/actions/alert.action';
import { doLogin } from '../../redux/actions/auth.actions';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Login = ({ setAlert, doLogin, isAuthenticated, userDetails }) => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = async e => {
        e.preventDefault()
        doLogin(email, password)
        setAlert(JSON.stringify(userDetails), 'primary')
    }

    if (isAuthenticated) {
        return (
            <Navigate to="/dashboard" replace={true} />
        )
    }
    return (
        <>
            <div className="container p-5">
                <h2>Login API form via [POST]</h2>
                <details>
                    <summary>Data</summary>
                    <p>
                        email: rachel.howell@reqres.in,
                        password: 12345
                    </p>
                </details>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="form-control" id="email" value={email} onChange={e => onChange(e)} placeholder="Enter email" name="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Password:</label>
                        <input type="password" className="form-control" id="pwd" value={password} onChange={e => onChange(e)} placeholder="Enter password" name="password" />
                    </div>
                    <button type="submit" className="btn btn-primary float-right">Login</button>
                </form>
            </div>
        </>
    )
}

Login.propTypes = {
    setAlert: PropTypes.func.isRequired,
    doLogin: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    userDetails: PropTypes.object
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.authReducer.isAuthenticated,
    userDetails: state.authReducer.user
});

export default connect(mapStateToProps, { setAlert, doLogin })(Login)

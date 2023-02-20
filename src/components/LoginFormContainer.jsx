import React from 'react'
import { connect } from 'react-redux'
import { httpRequest } from '../store/actions/actions'
import LoginForm from './pure/LoginForm'



const mapStateToProps = (state) => {
    return {
        logged: state.userState.logged,
        fetching: state.userState.fetching
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (email, password) => {
            const data = {
                email,
                password
            };
            const method = 'post';
            const url = 'https://reqres.in/api/login';
            dispatch(httpRequest(method, url, data));
        }
    }
}
const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm);
export default LoginFormContainer;
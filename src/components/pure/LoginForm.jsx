import React from 'react'
import PropTypes from 'prop-types';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';

const loginSchema = yup.object().shape({
    email: yup.string().email('Invalid email format').required('Emailis required'),
    password: yup.string().required('Password is required'),
})

const LoginForm = ({logged, fetching, onLogin}) => {

    const initialCredentials = {
        email: '',
        password: ''
    }
    

  return (
    <Formik
    initialValues={initialCredentials}
    validationSchema={loginSchema}
    onSubmit={async (values) => {
        onLogin(values.email, values.password)

    }}
>
    {({ values, touched, errors, isSubmitting, handleChange, handleBlur }) => (
        <Form>

            <label htmlFor="email">Email</label>
            <Field
                id="email"
                name="email"
                placeholder="jane@acme.com"
                type="email"
            />
            {
                errors.email && touched.email && (
                    /*<div className='error'>
                        <p>{errors.email}</p>
                    </div>*/
                    <ErrorMessage name='password' />
                )
            }
            <label htmlFor="password">Password</label>
            <Field
                id="password"
                name="password"
                placeholder="password"
                type="password"
            />
            {
                errors.password && touched.password && (
                    /*<div className='error'>
                        <p>{errors.password}</p>
                    </div>*/
                    <ErrorMessage name='password' />
                )
            }
            <button type="submit">Submit</button>
        </Form>
    )}              

</Formik>
  )
}

LoginForm.propTypes = {
    logged: PropTypes.bool.isRequired,
    onLogin: PropTypes.func.isRequired,
}

export default LoginForm
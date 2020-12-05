import React from 'react'
import { Formik } from "formik";
import * as EmailValidator from "email-validator"; // used when validating with a self-implemented approach
import * as Yup from "yup"; // used when validating with a pre-built solution
import './../ValidatedLoginForm.css'


const ManagerLoginForm = () => (
    <Formik className = "mnform"
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
            console.log("Logging in", values);
            setSubmitting(false);
            }, 500);
        }}

        validate={values => {
            let errors = {};
            if (!values.email) {
                errors.email = "Required";
            } else if (!EmailValidator.validate(values.email)) {
                errors.email = "Invalid email address.";
            }

            const passwordRegex = /(?=.*[0-9])/;
            if (!values.password) {
                errors.password = "Required";
            } else if (values.password.length < 8) {
                errors.password = "Password must be 8 characters long.";
            } else if (!passwordRegex.test(values.password)) {
                errors.password = "Invalid password. Must contain one number.";
            }

            return errors;
        }} 

        validationSchema={Yup.object().shape({
            email: Yup.string()
              .email()
              .required("Required"),
            password: Yup.string()
              .required("No password provided.")
              .min(8, "Password is too short - should be 8 chars minimum.")
              .matches(/(?=.*[0-9])/, "Password must contain a number.")
          })}
    >
        
        {props => {
            const {
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit
            } = props;

            return (
                <form action = "http://localhost:5000/admin" method = "post">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="text"
                        placeholder="Enter your email"
                        value = {values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.email && touched.email && "error"}
                    />

                    {errors.email && touched.email && (
                    <div className="input-feedback">{errors.email}</div>
                    )}

                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.password && touched.password && "error"}
                    />

                    {errors.password && touched.password && (
                    <div className="input-feedback">{errors.password}</div>
                    )}
                    
                    <br></br>
                    <button type="submit" >
                        Login
                    </button>
                </form>
            );
        }}
    </Formik>
);
export default ManagerLoginForm;
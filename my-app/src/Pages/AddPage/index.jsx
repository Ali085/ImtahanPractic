import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import { Helmet } from 'react-helmet'
import { Link } from "react-router-dom";

const SignupForm = () => {
    return (
        <>
            <Helmet>
                <title>Add Page</title>
            </Helmet>

            <Formik
                initialValues={{ name: '', description: '' }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    description: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),
                })}
                onSubmit={(values) => {
                    axios.post("http://localhost:3000/categories", values)
                }}
            >
                <Form>
                    <label htmlFor="name">First Name</label>
                    <Field name="name" type="text" />


                    <label htmlFor="description">Last Name</label>
                    <Field name="description" type="text" />

                    <button type="submit">Submit</button>
                    <Link to={"/"} ><button >Back to MAIN PAGE</button></Link>
                </Form>
            </Formik>
        </>
    );
};

export default SignupForm
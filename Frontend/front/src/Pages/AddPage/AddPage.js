import React from 'react';
import axios from "axios";
import { Formik, Field, Form,} from 'formik';
import { Helmet } from "react-helmet";
import * as Yup from 'yup';
import Navbar from '../../Layout/Navbar/Navbar';

const AddPage = () => {
  return (
    <>
     <Helmet>
        <title>AddPage</title>
        <meta name="description" content="React project" />
      </Helmet>
    <Navbar/>
    <Formik
      initialValues={{ id: '',  name: ''}}
      validationSchema={Yup.object({
        id: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        name: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        
      })}
      onSubmit={(values, ) => {
        axios.post("http://localhost:3000/posts",values)
      }}
    >
      <Form>
        <label htmlFor="id">Id</label>
        <Field name="id" type="number" />

        <label htmlFor="name">Name</label>
        <Field name="name" type="text" />


        <button type="submit">Submit</button>
      </Form>
    </Formik>
    </>
  );
};
export default AddPage
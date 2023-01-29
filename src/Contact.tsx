import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Contact.css';

function Contact() {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters long')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    message: Yup.string()
      .min(10, 'Message must be at least 10 characters long')
      .required('Message is required')
  });


  const handleSubmit = (values: {name: string, email: string, message: string},  { setSubmitting, resetForm }: { setSubmitting: (isSubmitting: boolean) => void, resetForm: () => void }) => {
    alert('Your message was sent successfully!');
    resetForm();
    setSubmitting(false);
};

  return (
    <div>
    <h1>Contact Me</h1>
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="form-fields">
            <Field type="text" name="name" placeholder="Your name" />
            <ErrorMessage name="name" component="div" />
            <Field type="email" name="email" placeholder="Your email" />
            <ErrorMessage name="email" component="div" />
            <Field
              component="textarea"
              name="message"
              placeholder="Your message"
              className="message-field"
            />
            <ErrorMessage name="message" component="div" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
    </div>
  );
};

export default Contact;
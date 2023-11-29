import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./CreditCardForm.css";

const CreditCardForm = ({submitFunc}) => {
  // Define Yup validation schema
  const validationSchema = Yup.object().shape({
    card: Yup.number()
      .typeError("Invalid card number")
      .required("Credit card number is required")
      .positive("Card number must be positive")
      .integer("Card number must be an integer"),
  });

  // Initial form values
  const initialValues = {
    card: "",
  };

  // Handle form submission
  const handleSubmit = (values, { setSubmitting }) => {
    // Your form submission logic here
    console.log(values);
    submitFunc();
    // Reset form submission state
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="buy-form">
        <label htmlFor="card">Credit Card</label>
        <Field
          type="number"
          name="card"
          id="card"
          placeholder="Enter your credit card number"
        />
        <ErrorMessage name="card" component="div" className="error" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default CreditCardForm;

import React from 'react';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const MyForm = () => {
  // Setting up Formik with validation
  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Name is required')
        .min(2, 'Name must be at least 2 characters'),
    }),
    onSubmit: (values) => {
      console.log('Form data', values);
    },
  });

  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
  } = formik;

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        name="name" // Dynamic name prop
        type="text" // Default input type
        inputProps={{ style: { fontSize: 14, padding: '1px' } }} // Custom styles
        value={values.name} // Controlled input value
        onChange={handleChange} // Change event handler
        error={touched.name && Boolean(errors.name)} // Error condition
        helperText={touched.name && errors.name} // Display error message
        label="Name" // Label for the input
        variant="outlined" // MUI variant
        fullWidth // Make the input full width
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;

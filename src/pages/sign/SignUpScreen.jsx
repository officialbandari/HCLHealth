import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// 1. Define the validation schema using Yup
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  role: Yup.string()
    .role('Invalid role address')
    .required('role is required'),
  age: Yup.string()
    .age('Invalid age address')
    .required('age is required'),
  

});

const SingUpScreen = () => {
  // 2. Initialize Formik with initial values, validation, and submission logic
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      // Simulation of an API call
      console.log('Login attempt with:', values);

      // In a real app, you would make an axios/fetch call here:
      // await axios.post('/api/login', values);

      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        
        // Stop the loading indicator
        setSubmitting(false); 

        // Optionally clear the form after successful login
        // resetForm(); 
      }, 1000); 
    },
  });

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2>HCL Healthcare</h2>
      
      {/* 3. Connect formik.handleSubmit to the form */}
      <form onSubmit={formik.handleSubmit}>
        
        {/* Email Input Field */}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            onChange={formik.handleChange} // Connects input to Formik state
            onBlur={formik.handleBlur}     // Marks field as touched on blur
            value={formik.values.email}    // Sets input value from Formik state
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
          {/* Display validation error */}
          {formik.touched.email && formik.errors.email ? (
            <div style={{ color: 'red', fontSize: '12px' }}>{formik.errors.email}</div>
          ) : null}
        </div>

        {/* Password Input Field */}
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
          {/* Display validation error */}
          {formik.touched.password && formik.errors.password ? (
            <div style={{ color: 'red', fontSize: '12px' }}>{formik.errors.password}</div>
          ) : null}
        </div>

        {/* Email Input Field */}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            onChange={formik.handleChange} // Connects input to Formik state
            onBlur={formik.handleBlur}     // Marks field as touched on blur
            value={formik.values.email}    // Sets input value from Formik state
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
          {/* Display validation error */}
          {formik.touched.email && formik.errors.email ? (
            <div style={{ color: 'red', fontSize: '12px' }}>{formik.errors.email}</div>
          ) : null}
        </div>

 
        
        {/* Submit Button */}
        <button 
          type="submit" 
          disabled={formik.isSubmitting || !formik.isValid} // Disable button while submitting or if form is invalid
          style={{ padding: '10px 15px', backgroundColor: formik.isSubmitting ? '#ccc' : '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: formik.isSubmitting ? 'not-allowed' : 'pointer' }}
        >
          {formik.isSubmitting ? 'Logging in...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default SingUpScreen;
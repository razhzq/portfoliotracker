import React, { useState, useEffect } from "react";
import axios from 'axios';
import AssetForm from "./AssetForm";
  
// CreateStudent Component
const CreateAsset = () => {
  const [formValues, setFormValues] = 
    useState({ name: '', email: '', rollno: '' })
  // onSubmit handler
  const onSubmit = studentObject => {
    axios.post(
'http://localhost:4000/students/create-student', 
    studentObject)
      .then(res => {
        if (res.status === 200)
          alert('Student successfully created')
        else
          Promise.reject()
      })
      .catch(err => alert('Something went wrong'))
  }
    
  // Return student form
  return(
    <AssetForm initialValues={formValues} 
      onSubmit={onSubmit} 
      enableReinitialize>
      Create Student
    </AssetForm>
  )
}
  
// Export CreateStudent Component
export default CreateAsset;
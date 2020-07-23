import React, { useState, useEffect } from 'react';
import axios from 'axios'
import * as yup from 'yup'
import './App.css';
import Form from './Form'
import Member from './Member'
import formSchema from './formSchema';

const initialMembers = [];

const initialDisabled = true;

const initialFormValues = {
  username: '',
  email: '',
  password: '',
  terms: false,
}

const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  terms: '',
}



function App() {
  const [members, setMembers] = useState(initialMembers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  // const getMembers = () => {
  //   axios.get('https://reqres.in/api/users')
  //     .then(res => {
  //       setMembers(res.data.data)

  //       console.log(res.data.data)
  //     })
  //     .catch(err => {
  //       console.log(err, 'uh oh')
  //     })
  // }

  const postNewMember = (newMember) => {
    axios.post('https://reqres.in/api/users', newMember)
      .then(res => {
        setMembers([res.data, ...members])
        setFormValues(initialFormValues)
      })
      .catch(err => {
        debugger
      })
  }

  const inputChange = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  
  const checkBoxChange = (name, isChecked) => {
    yup.reach(formSchema, name)
    .validate(isChecked)
    .then(valid => {
      setFormErrors({
        ...formErrors,
        [name]: '',
      })
    })
    .catch(err => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0]
      })
    })
    setFormValues({
      ...formValues,
      [name]: isChecked,
    })
  }

  const submit = () => {
    const newMember = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      // password: formValues.password.trim(),
      // terms: formValues.terms
    }
    postNewMember(newMember)
  }
  // SIDE EFFECTS
  // useEffect(() => {
  //   getMembers()
  // }, [])

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])


  return (
    <div className="App">

      <Form
        values={formValues}
        submit={submit}
        inputChange={inputChange}
        checkboxChange={checkBoxChange}
        disabled={disabled}
        errors={formErrors}
      />
      {
        members.map((member,index) => {
          return (
            <Member key={index} details={member} />
          )
        })
      }

    </div>
  );
}


export default App;

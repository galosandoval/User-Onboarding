import React from 'react'

const Form = (props) => {
  const {
    values,
    submit,
    inputChange,
    checkboxChange,
    disabled,
    errors,
  } = props

  const onSubmit = event => {
    event.preventDefault()
    submit()
  }

  const onCheckboxChange = event => {
    const { name, checked } = event.target
    checkboxChange(name, checked)
  }

  const onInputChange = event => {
    const { name, value } = event.target
    inputChange(name, value)
  }

  return (
    <form className='form-container' onSubmit={onSubmit}>
      <div className='form-submit'>
        <h2>Add a Member</h2>
        <button disabled={disabled}>submit</button>
        <div className='errors'>
          <div>{errors.username}</div>
          <div>{errors.password}</div>
          <div>{errors.email}</div>
          <div>{errors.terms}</div>
        </div>
      </div>
      <div className='form-inputs'>
        <h3>Info</h3>
        <label>Name&nbsp;
        <input
            value={values.username}
            onChange={onInputChange}
            name='username'
            type='text'
          />
        </label>
        <label>Password&nbsp;
          <input
            value={values.password}
            onChange={onInputChange}
            name='password'
            type='password'
          />
        </label>
        <label>Email&nbsp;
        <input
            value={values.email}
            onChange={onInputChange}
            name='email'
            type='text'
          />
        </label>
      </div>
      <div className='form-checkbox'>
        <label>Did you read the terms of service?
        <input
            type="checkbox"
            name='terms'
            checked={values.terms === true}
            onChange={onCheckboxChange}
          />
        </label>
      </div>
    </form >
  )
}

export default Form
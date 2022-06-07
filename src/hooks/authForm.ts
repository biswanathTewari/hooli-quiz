import React from 'react'

interface credsObjProp {
  email: string
  password: string
  checkValue: boolean
  fullName: string
}

const credsObj: credsObjProp = {
  fullName: '',
  email: '',
  password: '',
  checkValue: false,
}

const pwdRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/
const emailRegex = /^\S+@\S+\.\S+$/

const useAuthForm = (
  checkErrorMsg: string = '',
  optionalCheck: boolean = false,
) => {
  const [creds, setCreds] = React.useState<credsObjProp>(credsObj)
  const [error, setError] = React.useState<credsObjProp>(credsObj)

  const onChangeHandler = (e: any) => {
    const { id, value } = e.target
    setCreds({ ...creds, [id]: value })
  }

  const hackHandler = () => {
    setCreds({ ...creds, email: 'guest@hooli.com', password: 'hoolicloud' })
  }

  const onBlurHandler = (e: any) => {
    const { id, value } = e.target
    if (value === '') {
      setError({ ...error, [id]: 'This field is required' })
    } else {
      setError({ ...error, [id]: '' })
    }
  }

  const checkHandler = () => {
    setCreds({ ...creds, checkValue: !creds.checkValue })
  }

  const validateForm = () => {
    const { email, password, checkValue, fullName } = creds
    const errors: any = {}
    if (!email) {
      errors.email = 'Email is required'
    } else if (!emailRegex.test(email)) {
      errors.email = 'Invalid email'
    }
    if (!password) {
      errors.password = 'Password is required'
    } else if (!pwdRegex.test(password) && !optionalCheck) {
      errors.password =
        'Password must be 6 characters long and contain atleast 1 letter , 1 digit & 1 special character!'
    }
    if (!optionalCheck) {
      if (!checkValue) errors.checkValue = checkErrorMsg
      if (!fullName) {
        errors.fullName = 'Full Name is required'
      }
    }
    setError(errors)
    return Object.keys(errors).length === 0
  }

  const resetForm = () => {
    setCreds(credsObj)
    setError(credsObj)
  }

  return {
    creds,
    error,
    onChangeHandler,
    hackHandler,
    onBlurHandler,
    checkHandler,
    validateForm,
    resetForm,
  }
}

export { useAuthForm }

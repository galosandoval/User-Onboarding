import * as yup from 'yup'

const formSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email must be valid")
    .required("Email is required"),
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters")
    .required("Username is Required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is Required"),
  terms: yup
    .bool()
    .oneOf([true], "You must accept the terms and conditions"),
})

export default formSchema

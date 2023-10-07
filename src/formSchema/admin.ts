import * as yup from "yup";

export const adminSchema = yup.object().shape({
  password: yup.string().min(6).max(32).required("First name required!"),
  admin: yup.object().shape({
    name: yup.object().shape({
      firstName: yup.string().max(18).required("First name is required"),
      middleName: yup.string().max(18).required("Middle name is required"),
      lastName: yup.string().max(18).required("First name is required"),
    }),
    email: yup.string().email().required("Email is required"),
    designation: yup.string().required("Designation is required"),
    dateOfBirth: yup.string().required("Date of birth is required"),
  }),
});

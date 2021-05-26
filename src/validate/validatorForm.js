import * as Yup from 'yup';
import { date } from "yup";

export const validationField = Yup.object().shape({
    email: Yup.string()
        .email("Please, enter a valid email")
        .required("This field is required"),

    name: Yup.string()
        .min(2, "This field must be min 2 characters")
        .required("This field is required"),

    date: date()
    .max(new Date())
    .required("This field is required"),

    message: Yup.string()
        .min(10, "This field must be min 10 characters")
        .max(180, "The number of characters entered can't exceed 20 characters")
    .required("This field is required"),

});

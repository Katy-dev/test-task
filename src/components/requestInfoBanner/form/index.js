import { Formik, Form, Field } from "formik";
import React from "react";
import { validationField } from "../../../validate/validatorForm";
import FormInput from "../../common/formComponent/formInput";
import styles from "./form.module.scss";
import FormTextArea from "../../common/formComponent/formTextArea";


const initialValues = {
    name: "",
    email: "",
    date: "",
    message: "",
};

const FormRequest = () => {
    return (
     <div className={styles.form_wrapper}>
        <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }, 400);
                actions.resetForm({
                    values: {
                        name: "",
                        email: "",
                        date: "",
                        message: "",
                    },
                });
            }}
            validationSchema={validationField}
        >
            {({
                  values,
                  handleChange,
                  handleBlur,
                  isSubmitting,
                  handleSubmit,
              }) => (
                <Form
                    onSubmit={handleSubmit}
                    className={styles.form_content}
                >
                    <div>
                    <Field
                        type="text"
                        name="name"
                        component={FormInput}
                        placeholder="Name*"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                    />

                    </div>
                <div>
                        <Field
                        type="email"
                        name="email"
                        placeholder="Email*"
                        component={FormInput}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                </div>
                <div>
                    <Field
                        type="date"
                        name="date"
                        component={FormInput}
                        placeholder="Date of Birth*"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.date}
                    />
                </div>
                <div>
                    <FormTextArea
                        placeholder={"Message*"}
                        name ="message"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message}
                    />
                </div>
                    <button className={styles.button_wrapper}
                            type="submit">
                        Request Info
                    </button>
                </Form>
            )}
        </Formik>
    </div>
)
}

export default FormRequest;

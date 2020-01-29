import React from "react";
import {Formik} from 'formik';
import {TextField} from "formik-material-ui";
import LinearProgress from "@material-ui/core/LinearProgress";
import Button from "@material-ui/core/Button";
import {validate} from "./FormValidation";

const styles = {
    formEl: {
        margin: '6px auto',
        width: '100%',
    }
};

const initValues = {
    email: '',
    password: '',
};

const validation = values => {
    return validate(values);
};

const onSubmit = (values, {setSubmitting}) => {
    setTimeout(() => {
        setSubmitting(false);
        alert(JSON.stringify(values, null, 2));
    }, 500);
};

const FormikForm = () => (
    <>
        <Formik
            initialValues={initValues}
            validate={validation}
            onSubmit={onSubmit}
        >
            {({
                values,
                handleChange,
                  handleSubmit,
                isSubmitting,
              }) => (
                <form>
                    <TextField
                        name="email"
                        defaultValue={values.email}
                        type="email"
                        label="Email"
                        variant="standard"
                        style={styles.formEl}
                        onChange={handleChange}
                    />
                    <br />
                    <TextField
                        type="password"
                        label="Password"
                        name="password"
                        defaultValue={values.password}
                        variant="standard"
                        style={styles.formEl}
                    />
                    {isSubmitting && <LinearProgress />}
                    <br />
                    <Button
                        variant="outlined"
                        color="primary"
                        disabled={isSubmitting}
                        onClick={handleSubmit}
                        style={styles.formEl}
                    >
                        Submit
                    </Button>
                </form>
            )}
        </Formik>
    </>
);

export default FormikForm;

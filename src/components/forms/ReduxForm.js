import React from "react";
import { Field, reduxForm } from 'redux-form';
import {validate} from "./FormValidation";
import ErrorFootnote from "./ErrorFootnote";

const styles = {
    formEl: {
        display: 'block',
        margin: '6px'
    },
    input: {
        border: 'none',
        borderBottom: '1px solid #212121',
        outline: 'none',
        padding: '3px'
    },
    button: {
        display: 'block',
        width: '100px',
        border: '1px solid #212121',
        padding: '6px',
        margin: '6px 0',
        backgroundColor: '#ffffff',
        color: '#212121'
    }
};

const renderInputEmail = ({
    input: { onChange, value },
    meta: {touched, error},
    name,
}) => (
    <>
        <label>
            {name}
            <input
                name={name}
                type='email'
                value={value}
                onChange={onChange}
                style={styles.input}
            />
            {touched && error &&
                <ErrorFootnote error={error}/>
            }
        </label>
        </>
);

const renderInputPassword = ({
                              input: { onChange, value },
                              meta: {touched, error},
                              name,
                          }) => (
    <>
        <label>
            {name}
            <input
                name={name}
                type='password'
                value={value}
                onChange={onChange}
                style={styles.input}
            />
            {touched && error &&
            <ErrorFootnote error={error}/>
            }
        </label>
    </>
);

let ReduxForm = (props) => {
    const { handleSubmit, pristine, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div style={styles.formEl}>
                <label htmlFor="email">Email:</label><br/>
                <Field name="email" component={renderInputEmail} type="email" />
            </div>
            <div style={styles.formEl}>
                <label htmlFor="password">Password:</label><br/>
                <Field name="password" component={renderInputPassword} type="password" />
            </div>
            <button
                type="submit"
                disabled={pristine || submitting}
            >
                Submit
            </button>
        </form>
    )
};

const onSubmit = (values, dispatch) => {
    alert('Все отлично!');
};

const reduxValidate = values => {
    return validate(values);
};

export default reduxForm({
    form: 'login',
    validate: reduxValidate,
    onSubmit,
    initialValues: {
        email: '',
        password: ''
    }
})(ReduxForm);

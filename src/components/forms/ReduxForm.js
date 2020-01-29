import React from "react";
import { Field, reduxForm } from 'redux-form';

const styles = {
    formEl: {
        display: 'block',
        margin: '6px'
    }
};

let ReduxForm = (props) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div style={styles.formEl}>
                <label htmlFor="email">Email:</label><br/>
                <Field name="email" component="input" type="email" />
            </div>
            <div style={styles.formEl}>
                <label htmlFor="password">Password:</label><br/>
                <Field name="password" component="input" type="password" />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
};

export default reduxForm({
    form: 'login',

})(ReduxForm);

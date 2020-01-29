import React from 'react';
import Header from "../components/todos/Header";
import FormikForm from "../components/forms/FormikForm";
import Card from "../components/cards/Card";
import ReduxForm from "../components/forms/ReduxForm";

const FormScreen = () => (
    <>
        <Header title="forms"/>
        <Card title="Formik">
            <FormikForm/>
        </Card>
        <Card title="Redux Form">
            <ReduxForm/>
        </Card>
    </>
);

export default FormScreen;

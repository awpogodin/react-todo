import React from 'react';
import Header from "../components/todos/Header";
import FormikForm from "../components/forms/FormikForm";
import Card from "../components/cards/Card";

const FormScreen = () => (
    <>
        <Header title="forms"/>
        <Card title="Formik">
            <FormikForm/>
        </Card>
    </>
);

export default FormScreen;

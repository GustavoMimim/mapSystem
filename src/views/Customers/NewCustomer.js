import React from 'react';
import CustomerForm from '../../components/CustomerForm.js'

export default NewCustomer = () => {

    return (
        <CustomerForm
            initialValues={{ name: '' }}
        />
    );

};
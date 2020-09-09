import React from 'react';
import CustomerForm from '../../components/CustomerForm.js'
import { findByIDCustomers, updateCustomer } from '../../database/Customers.js'

export default NewCustomer = (props) => {

    const { customerID } = props.route.params;
    var customer = {};

    if (customerID) {
        customer = findByIDCustomers(customerID);
    }

    return (
        <CustomerForm
            onFormSubmit={(values) => {
                updateCustomer(values);
            }}
            initialValues={customer}
        />
    );

};
import React, { useRef, useState } from 'react'
import { View, StyleSheet, Keyboard } from 'react-native';
import { TextInput, HelperText, Text, FAB, Button, Paragraph, Dialog, Portal } from 'react-native-paper';
import { addNewCustomers } from '../database/Customers.js'
import { Formik } from 'formik';
import * as Yup from 'yup';

export default CustomerForm = (props, onFormSubmit) => {

    const name = useRef('');

    const FormSchema = Yup.object().shape({
        name: Yup.string().required('É necessário informar o nome do cliente!')
    });

    const [visible, setVisible] = useState(false);
    const showDialog = () => {
        setVisible(true);
        Keyboard.dismiss();
    };
    const hideDialog = () => setVisible(false);

    const [typeAction, setTypeAction] = useState(props.initialValues.id ? 'update' : 'create');

    return (
        <Formik
            initialValues={
                props.initialValues
            }
            onSubmit={values => {
                addNewCustomers(values);
            }}
            validationSchema={FormSchema}
        >
            {({
                values,
                handleChange,
                handleSubmit,
                errors,
                touched,
                setFieldTouched,
            }) => (
                    <View style={styles.container}>

                        <View style={styles.inputs}>
                            <TextInput
                                autoCompleteType="name"
                                mode="outlined"
                                label="Nome"
                                ref={name}
                                value={values.name}
                                onChangeText={handleChange('name')}
                                onBlur={() => setFieldTouched('name', true)}
                            />
                            {errors.name && touched.name && <HelperText style={{ color: 'red' }}>{errors.name}</HelperText>}
                        </View>

                        <FAB
                            style={props.initialValues.id ? styles.secondFab : styles.firstFab}
                            medium
                            icon="content-save"
                            onPress={() => showDialog(true)}
                        />

                        {props.initialValues.id &&
                            <FAB
                                style={props.initialValues.id ? styles.firstFab : styles.secondFab}
                                medium
                                icon="account-remove-outline"
                                onPress={() => showDialog(true)}
                            />}


                        <View>
                            <Portal>
                                <Dialog visible={visible} onDismiss={hideDialog}>
                                    <Dialog.Title>Atenção</Dialog.Title>
                                    <Dialog.Content>
                                        <Paragraph>Deseja mesmo {typeAction === 'create' ? 'salvar esse novo' : 'remover esse' } registro?</Paragraph>
                                    </Dialog.Content>
                                    <Dialog.Actions>
                                        <Button onPress={() => hideDialog()}>NÃO</Button>
                                        <Button onPress={() => {
                                            hideDialog();
                                            handleSubmit();
                                        }}>SIM</Button>
                                    </Dialog.Actions>
                                </Dialog>
                            </Portal>
                        </View>
                    </View>
                )}

        </Formik>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputs: {
        paddingTop: 10,
        paddingHorizontal: 5,
    },
    firstFab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: "pink"
    },
    secondFab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 64,
        backgroundColor: "pink"
    }
})
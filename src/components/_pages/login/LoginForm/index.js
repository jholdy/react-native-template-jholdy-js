import React from 'react';
import { Formik, FastField } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import { Form, FormInput, SubmitButton } from './styles';

const formSchema = Yup.object().shape({
  email: Yup.string()
    .email('E-mail invalido')
    .required('Obrigatório'),
  password: Yup.string().required('Obrigatório'),
});

const LoginForm = ({ onSubmit }) => {
  const { loading } = useSelector(state => state.login);
  return (
    <Formik
      initialValues={{
        email: __DEV__ ? 'jholdydamasceno@gmail.com' : '',
        password: __DEV__ ? 'secret' : '',
      }}
      validationSchema={formSchema}
      initialErrors={{ button: 'Start false' }}
      onSubmit={onSubmit}
      validateOnChange>
      {({ submitForm, isValid }) => (
        <Form>
          <FastField
            name="email"
            component={FormInput}
            icon="account"
            label="Informe seu E-mail"
          />
          <FastField
            name="password"
            component={FormInput}
            icon="onepassword"
            label="Informe sua senha"
          />

          <SubmitButton loading={loading} onPress={submitForm}>
            Acessar
          </SubmitButton>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;

import React from 'react';
import { Image } from 'react-native';
import { useDispatch } from 'react-redux';

import logo from 'assets/logo.png';

import { getLoginRequest } from 'store/modules/login/actions';

import { Container, SignLink, SignLinkText } from './styles';
import LoginForm from 'components/_pages/login/LoginForm';

export default function LoginScreen({ navigation }) {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(getLoginRequest(email, password));
  }

  return (
    <Container>
      <Image source={logo} />
      <LoginForm onSubmit={handleSubmit} />
      <SignLink onPress={() => navigation.navigate('SignUp')}>
        <SignLinkText>Criar conta gratuita</SignLinkText>
      </SignLink>
    </Container>
  );
}

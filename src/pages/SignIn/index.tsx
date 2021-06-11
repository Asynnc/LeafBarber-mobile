import React from 'react';
import {Image} from 'react-native'
import logoIMG from '../../assets/logo.png'

import { Container } from './styles';

const SignIn: React.FC = () => {
  return (
  <Container>
    <Image source={logoIMG}  />
  </Container>
  );
}

export default SignIn;

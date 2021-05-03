import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import FormContainer from '../../Shared/Form/FormContainer';
import Input from '../../Shared/Form/Input';
import Error from '../../Shared/Error';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Register = (props) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  return (
    <KeyboardAwareScrollView title={'Register'}>
      <Input
        placeholder={'Email'}
        name={'email'}
        id={'email'}
        onChangeText={(text) => setEmail(text)}
      />
    </KeyboardAwareScrollView>
  );
};

export default Register;

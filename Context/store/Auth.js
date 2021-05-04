import React, { useEffect, useState, useReducer } from 'react-native';
import jwt_decoded from 'jwt-decode';
import AsyncStorage from '@react-native-community/async-storage';

import AuthReducer from '../reducers/Authreducer';
import { setCurrentUser } from '../actions/Authactions';
import AuthGlobal from './Authactions';

const Auth = (props) => {
  const [stateUser, dispatch] = useReducer(AuthReducer, {
    isAuthenticated: null,
    user: {},
  });
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
    if (AsyncStorage.jwt) {
      const decoded = AsyncStorage.jwt ? AsyncStorage.jwt : '';
      if (setShowChild) {
        dispatch(setCurrentUser(jwt_decoded(decoded)));
      }
    }
    return () => setShowChild(false);
  }, []);
};

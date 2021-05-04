import React, { useEffect, useState, useReducer } from 'react-native';
import jwt_decoded from 'jwt-decode';
import AsyncStorage from '@react-native-community/async-storage';

import AuthReducer from '../reducers/Authreducer';
import { setCurrentUser } from '../actions/Authactions';
import AuthGlobal from './Authactions';

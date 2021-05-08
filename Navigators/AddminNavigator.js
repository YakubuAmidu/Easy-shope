import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Orders from '../Screens/Admin/Orders';
import Products from '../Screens/Admin/Products';
import ProductForm from '../Screens/Admin/ProductForm';
import Categories from '../Screens/Admin/Categories';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Orders"
        component={Orders}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

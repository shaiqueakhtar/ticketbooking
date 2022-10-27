/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BookTicket from '../Screens/BookTicket';
import Movie from '../Screens/Movie';
const stack = createNativeStackNavigator();

// eslint-disable-next-line @typescript-eslint/no-shadow
const Navigation = ({stack}: any) => {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Movie" />
      <stack.Screen
        name="Movie"
        options={{
          headerShown: false,
        }}
        component={Movie}
      />
      <stack.Navigator initialRouteName="BookTicket" />
      <stack.Screen
        name="BookTicket"
        options={{
          headerShown: false,
        }}
        component={BookTicket}
      />
    </NavigationContainer>
  );
};

export default Navigation;

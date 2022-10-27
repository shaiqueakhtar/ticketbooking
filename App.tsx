import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Movie from './src/Screens/Movie';
import Coutomize from './src/Screens/Coutomize';
import DisplaySeates from './src/Screens/DisplaySeates';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Movie">
      <Stack.Screen name="Movie" component={Movie} />
      <Stack.Screen name={'Coutomize'} options={{title: 'abc'}}>
        {props => <Coutomize {...props} />}
      </Stack.Screen>

      <Stack.Screen name={'DisplaySeates'} options={{title: 'abc'}}>
        {props => <DisplaySeates {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

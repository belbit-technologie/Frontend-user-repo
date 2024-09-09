import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigater from './src/routes/AppNavigater';

function App() {
  return (
    <NavigationContainer>
      <AppNavigater />
    </NavigationContainer>
  );
}

export default App;

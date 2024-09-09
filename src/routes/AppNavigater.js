import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Logo from '../screens/Logo';
import Selectpath from '../screens/Selectpath';
import Register from '../screens/Registerlogin/User/Register';

import MobileNumber from '../screens/Registerlogin/User/MobileNumber';
import Otp from '../screens/Registerlogin/User/Otp';
import FourWheeler from '../componant/FourWheeler/FourWheeler';
import Map from '../componant/Map/Map';
import TwoWheeler from '../componant/TwoWheeler/TwoWheeler';
import Login from '../screens/Registerlogin/User/Login';
import BookRide from '../componant/TwoWheeler/BookRide';
import PaymentMethod from '../componant/TwoWheeler/PaymentMethod';
import TrainerBooking from '../componant/PersonalTrainer/TrainerBooking';
import Ai from '../componant/Ai/Ai';
const Stack = createNativeStackNavigator();

function AppNavigater() {
  return (
    <Stack.Navigator
      initialRouteName="Logo"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="/" component={Logo} />

      <Stack.Screen
        name="User/Register"
        component={Register}
        options={{headerShow: false}}
      />
      <Stack.Screen
        name="User/Login"
        component={Login}
        options={{headerShow: false}}
      />
      <Stack.Screen name="User/MobileNumber" component={MobileNumber} />
      <Stack.Screen name="User/Otp" component={Otp} />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShow: false}}
      />
      <Stack.Screen name="FourWheeler/FourWheeler" component={FourWheeler} />
      <Stack.Screen name="Map/Map" component={Map} />
      <Stack.Screen name="TwoWheeler/TwoWheeler" component={TwoWheeler} />
      <Stack.Screen name="TwoWheeler/PaymentMethod" component={PaymentMethod} />
      <Stack.Screen
        name="PersonalTrainer/TrainerBooking"
        component={TrainerBooking}
      />
      <Stack.Screen
        name="TwoWheeler/BookRide"
        component={BookRide}
        options={{headerShow: true}}
      />
      <Stack.Screen
        name="Ai/Ai"
        component={Ai}
        options={{headerShow: true}}
      />
    </Stack.Navigator>
  );
}

export default AppNavigater;

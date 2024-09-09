import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import tw from 'twrnc';
import {useNavigation} from '@react-navigation/native';
import Home from './Home';

function Selectpath() {
  const navigation = useNavigation();
  return (
    <View
      style={tw`flex-1 justify-center items-center bg-[#fff] w-full h-full`}>
      <TouchableOpacity
        onPress={() => navigation.navigate('User/Login')}
        style={tw`bg-blue-500 justify-center items-center rounded-full mb-4 w-[200px] h-[200px]`} // Custom styles
      >
        <Text style={tw`text-3xl font-bold text-white text-center`}>
          Learner
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Partner/Register')}
        style={tw`bg-yellow-500 justify-center items-center rounded-full mb-4 w-[200px] h-[200px]`} // Custom styles
      >
        <Text style={tw`text-3xl font-bold text-white text-center`}>
          Partner
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Selectpath;

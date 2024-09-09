import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import tw from 'twrnc';
import {useNavigation} from '@react-navigation/native';

function Register() {
  const navigation = useNavigation();

  const handleRegister = () => {
    // Handle registration logic here
    // console.log('Register button pressed');
    navigation.navigate('Home');
  };

  const handleLoginRedirect = () => {
    navigation.navigate('User/Login'); // Adjust the route name if needed
  };

  return (
    <View
      style={tw`flex-1 justify-center items-center bg-blue-400 rounded p-4 `}>
      <View
        style={tw`flex-1 justify-center items-center bg-white p-4 rounded-[30px] bg-white`}>
        <Text style={tw`text-5xl font-bold mb-10 text-blue-500`}>Belbit</Text>
        <Text style={tw`text-2xl font-bold  mb-5 text-black`}>
          Create an account
        </Text>
        <TextInput
          placeholder="Username"
          style={tw`w-[300px] p-3 mb-4 border-0 font-bold text-xl rounded-[12px] border-b-2 border-gray-400`}
        />
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          style={tw`w-[300px] p-3 mb-4 border-0 font-bold text-xl rounded-[12px] border-b-2 border-gray-400`}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={tw`w-[300px] p-3 mb-4 border-0 font-bold text-xl rounded-[12px] border-b-2 border-gray-400`}
        />

        <TouchableOpacity
          onPress={handleRegister}
          style={tw` w-[360px] bg-blue-500 py-3 px-5 rounded-lg mb-4 mt-4`}>
          <Text style={tw`text-xl font-bold text-white text-center`}>
            Register
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleLoginRedirect}
          style={tw`w-[360px] mt-10`}>
          <Text style={tw`text-lg text-black text-center`}>
            Already have a account ?
            <Text style={tw`text-xl font-bold text-blue-500 text-center`}>
              Login
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Register;

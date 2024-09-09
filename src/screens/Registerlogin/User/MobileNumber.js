import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import tw from 'twrnc';
import {useNavigation} from '@react-navigation/native';

function MobileNumber() {
  const navigation = useNavigation();

  const handleLogin = () => {
    // Handle registration logic here
    alert('OTP sent your mobile number');
  };

  const handleLoginRedirect = () => {
    navigation.navigate('User/Otp'); // Adjust the route name if needed
  };
  return (
    <View
      style={tw`flex-1 justify-center items-center bg-blue-400 rounded p-4 `}>
      <View
        style={tw`flex-1 justify-center items-center bg-white p-4 rounded-[30px] bg-white `}>
        <Text style={tw`text-5xl font-bold mb-10 text-blue-500`}>Belbit</Text>
        <Text style={tw`text-2xl font-bold mb-5 text-black`}>
          Enter your mobile number
        </Text>

        <TextInput
          placeholder="Enter your mobile number"
          keyboardType="email-address"
          style={tw`w-[90%] p-3 mb-4 border-0 font-bold text-xl rounded-[12px] border-b-2 border-gray-400`}
        />

        <TouchableOpacity
          onPress={handleLoginRedirect}
          style={tw` w-[360px] bg-blue-500 py-3 px-5 rounded-lg mb-4 mt-4`}>
          <Text style={tw`text-xl font-bold text-white text-center`}>
            Send OTP
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default MobileNumber;

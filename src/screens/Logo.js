import React, {useEffect} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import tw from 'twrnc';

function Logo({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('User/Login');
    }, 3000);
  }, []);
  return (
    <View style={tw`flex-1 justify-center items-center bg-[#fff]`}>
      <Image
        source={require('../../assets/logo.gif')}
        style={{width: 500, height: 400}}
      />
    </View>
  );
}

export default Logo;

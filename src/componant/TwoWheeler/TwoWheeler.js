import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  PermissionsAndroid,
  Linking,
  Image,
  ScrollView,
} from 'react-native';
import Map from '../Map/Map';
import tw from 'twrnc';
import {useNavigation} from '@react-navigation/native';

function TwoWheeler() {
  const navigation = useNavigation();
  return (
    <ScrollView style={tw`flex-col bg-[#fff]`}>
      <View style={tw` w-full h-[500px]`}>
        <Map />
      </View>
      <View
        style={tw` rounded-tl-[30px] rounded-tr-[30px] w-full bg-[#fff] h-[300px]`}>
        {/* Without Subscription */}
        <TouchableOpacity style={tw`flex-row justify-around items-center`}>
          <Image
            source={require('../../../assets/scooty.jpg')}
            style={tw`w-[70px] h-[70px] m-5`}
          />
          <Text style={tw`font-bold text-black text-xl`}>40/KM</Text>
          <Text style={tw`text-red-500 text-sm`}>Without Subscription</Text>
        </TouchableOpacity>

        {/* With Subscription */}
        <TouchableOpacity style={tw`flex-row justify-around items-center`}>
          <Image
            source={require('../../../assets/scooty.jpg')}
            style={tw`w-[70px] h-[70px] m-5`}
          />
          <Text style={tw`font-bold text-black text-xl`}>20/KM</Text>
          <Text style={tw`text-green-500 text-sm`}>With Subscription</Text>
        </TouchableOpacity>

        {/* Book Your Ride Button */}
        <TouchableOpacity
          onPress={() => navigation.navigate('TwoWheeler/BookRide')}
          style={tw`flex-row items-center justify-center border w-[300px] rounded-lg absolute bottom-5 p-5 self-center bg-blue-500`}>
          <Text style={tw`font-bold text-white text-xl`}>Book your ride</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default TwoWheeler;

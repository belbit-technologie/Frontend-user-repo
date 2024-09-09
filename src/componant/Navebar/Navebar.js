// ProfileDrawer.js
import React, {useRef} from 'react';
import {View, Text, TouchableOpacity, Animated, Dimensions} from 'react-native';
import tw from 'twrnc';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AntDesign2 from 'react-native-vector-icons/AntDesign';
import AntDesign3 from 'react-native-vector-icons/AntDesign';
import AntDesign4 from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo2 from 'react-native-vector-icons/Entypo';
import Entypo3 from 'react-native-vector-icons/Entypo';
import Entypo4 from 'react-native-vector-icons/Entypo';
import Entypo5 from 'react-native-vector-icons/Entypo';
import Entypo6 from 'react-native-vector-icons/Entypo';
import Entypo7 from 'react-native-vector-icons/Entypo';
import Entypo8 from 'react-native-vector-icons/Entypo';
import Entypo9 from 'react-native-vector-icons/Entypo';

const Navebar = ({isVisible, onClose}) => {
  const slideAnim = useRef(
    new Animated.Value(-Dimensions.get('window').width),
  ).current;

  React.useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: isVisible ? 0 : -Dimensions.get('window').width,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isVisible]);

  return (
    <Animated.View
      style={[
        tw`absolute top-0 left-0 h-full bg-[#fff] w-4/4 p-5`,
        {transform: [{translateX: slideAnim}]},
      ]}>
      <Text style={tw`text-black text-2xl font-bold mb-10 mt-10`}>Profile</Text>
      <TouchableOpacity onPress={onClose} style={tw`absolute top-4 right-4`}>
        <Entypo name="cross" size={44} color="black" />
      </TouchableOpacity>
      <View
        style={tw`flex-row items-center p-4 bg-gray-100 rounded-xl mb-10 mt-10`}>
        <AntDesign name="user" size={40} color="black" />
        <View style={tw`ml-4`}>
          <Text style={tw`text-black text-xl font-bold`}>Ram Kapur</Text>
          <Text style={tw`text-gray-500`}>0000000000</Text>
        </View>
      </View>
      <TouchableOpacity
        style={tw`flex-row items-center justify-between p-4 bg-gray-100 rounded-xl mb-4`}>
        <Text style={tw`text-black text-lg`}>4.69 My Rating</Text>
        <AntDesign2 name="star" size={24} color="gold" />
      </TouchableOpacity>
      <View style={tw`flex-col mt-4 `}>
        <TouchableOpacity
          style={tw`flex-row items-center justify-between p-6 bg-white border-b border-gray-200`}>
          <View style={tw`flex-row items-center`}>
            <FontAwesome5 name="hands-helping" size={24} color="black" />
            <Text style={tw`text-black text-lg ml-4`}>Help</Text>
          </View>
          <Entypo2 name="chevron-right" size={24} color="gray" />
        </TouchableOpacity>

        <TouchableOpacity
          style={tw`flex-row items-center justify-between p-6 bg-white border-b border-gray-200`}>
          <View style={tw`flex-row items-center`}>
            <AntDesign3 name="credit-card" size={24} color="black" />
            <Text style={tw`text-black text-lg ml-4`}>Payment</Text>
          </View>
          <Entypo3 name="chevron-right" size={24} color="gray" />
        </TouchableOpacity>

        <TouchableOpacity
          style={tw`flex-row items-center justify-between p-6 bg-white border-b border-gray-200`}>
          <View style={tw`flex-row items-center`}>
            {/* <Entypo name="car" size={24} color="black" /> */}
            <Text style={tw`text-black text-lg ml-4`}>My Rides</Text>
          </View>
          <Entypo4 name="chevron-right" size={24} color="gray" />
        </TouchableOpacity>

        <TouchableOpacity
          style={tw`flex-row items-center justify-between p-6 bg-white border-b border-gray-200`}>
          <View style={tw`flex-row items-center`}>
            {/* <Entypo name="shield-checkmark" size={24} color="black" /> */}
            <Text style={tw`text-black text-lg ml-4`}>Safety</Text>
          </View>
          <Entypo5 name="chevron-right" size={24} color="gray" />
        </TouchableOpacity>

        <TouchableOpacity
          style={tw`flex-row items-center justify-between p-6 bg-white border-b border-gray-200`}>
          <View style={tw`flex-row items-center`}>
            {/* <Entypo name="cash" size={24} color="black" /> */}
            <Text style={tw`text-black text-lg ml-4`}>Refer and Earn</Text>
          </View>
          <Entypo6 name="chevron-right" size={24} color="gray" />
        </TouchableOpacity>

        <TouchableOpacity
          style={tw`flex-row items-center justify-between p-6 bg-white border-b border-gray-200`}>
          <View style={tw`flex-row items-center`}>
            {/* <Entypo name="gift" size={24} color="black" /> */}
            <Text style={tw`text-black text-lg ml-4`}>My Rewards</Text>
          </View>
          <Entypo7 name="chevron-right" size={24} color="gray" />
        </TouchableOpacity>

        <TouchableOpacity
          style={tw`flex-row items-center justify-between p-6 bg-white border-b border-gray-200`}>
          <View style={tw`flex-row items-center`}>
            {/* <Entypo name="notifications" size={24} color="black" /> */}
            <Text style={tw`text-black text-lg ml-4`}>Notifications</Text>
          </View>
          <Entypo8 name="chevron-right" size={24} color="gray" />
        </TouchableOpacity>

        <TouchableOpacity
          style={tw`flex-row items-center justify-between p-6  bg-white border-b border-gray-200`}>
          <View style={tw`flex-row items-center`}>
            <AntDesign4 name="setting" size={24} color="black" />
            <Text style={tw`text-black text-lg ml-4`}>Settings</Text>
          </View>
          <Entypo9 name="chevron-right" size={24} color="gray" />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default Navebar;

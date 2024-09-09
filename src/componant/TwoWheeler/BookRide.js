import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import tw from 'twrnc';
import {useNavigation} from '@react-navigation/native';

const BookRide = () => {
  const navigation = useNavigation();
  const [hasSubscription, setHasSubscription] = useState(false);
  const minKm = 5;
  const pricePerKmWithoutSub = 60;
  const pricePerKmWithSub = 40;

  const totalPriceWithoutSub = minKm * pricePerKmWithoutSub;
  const totalPriceWithSub = minKm * pricePerKmWithSub;

  return (
    <View style={tw`flex-1 justify-center items-center p-4 bg-white`}>
      <Text style={tw`text-3xl font-bold mb-4`}>Book Your Ride</Text>

      <View
        style={tw`mb-4 p-4 bg-gray-100 rounded-lg w-full h-[500px] rounded-[20px]`}>
        <Text style={tw`text-base mb-2`}>Minimum Distance: {minKm} km</Text>
        <Text style={tw`text-base mb-2`}>
          Price per km without Subscription: {pricePerKmWithoutSub} INR
        </Text>
        <Text style={tw`text-base text-green-500`}>
          Price per km with Subscription: {pricePerKmWithSub} INR
        </Text>
        <Text style={tw`text-xl font-bold mt-4`}>
          Total Price:{' '}
          {hasSubscription ? totalPriceWithSub : totalPriceWithoutSub} INR
        </Text>
      </View>

      {hasSubscription ? (
        <TouchableOpacity
          style={tw`w-full bg-blue-500 p-4 rounded-lg mb-2`}
          onPress={() => navigation.navigate('TwoWheeler/PaymentMethod')}>
          <Text style={tw`text-white text-center font-bold`}>Confirm Ride</Text>
        </TouchableOpacity>
      ) : (
        <>
          <TouchableOpacity
            style={tw`w-full bg-green-500 p-4 rounded-lg mb-2`}
            onPress={() => setHasSubscription(true)}>
            <Text style={tw`text-white text-center font-bold`}>
              Add Subscription
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={tw`w-full bg-blue-500 p-4 rounded-lg`}
            onPress={() => navigation.navigate('TwoWheeler/PaymentMethod')}>
            <Text style={tw`text-white text-center font-bold`}>
              Book Ride Without Subscription
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default BookRide;

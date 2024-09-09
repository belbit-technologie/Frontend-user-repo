import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import tw from 'twrnc';

const PaymentMethod = ({navigation}) => {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const handleConfirm = () => {
    if (selectedMethod) {
      alert(`Booking Confirmed with ${selectedMethod}!`);
      // Navigate to a booking confirmation page or home screen after this
      // navigation.navigate('BookingConfirmation'); // Implement this if you have a confirmation screen
    } else {
      alert('Please select a payment method.');
    }
  };

  return (
    <View style={tw`flex-1 justify-center items-center p-4 bg-white`}>
      <Text style={tw`text-3xl font-bold mb-4`}>Select Payment Method</Text>

      <TouchableOpacity
        style={[
          tw`w-full p-4 mb-3 rounded-lg`,
          selectedMethod === 'Cash'
            ? tw`bg-blue-500 border-2 border-blue-700`
            : tw`bg-gray-200`,
        ]}
        onPress={() => setSelectedMethod('Cash')}>
        <Text
          style={tw`text-center font-bold ${
            selectedMethod === 'Cash' ? 'text-white' : 'text-black'
          }`}>
          Cash
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          tw`w-full p-4 mb-3 rounded-lg`,
          selectedMethod === 'Online'
            ? tw`bg-blue-500 border-2 border-blue-700`
            : tw`bg-gray-200`,
        ]}
        onPress={() => setSelectedMethod('Online')}>
        <Text
          style={tw`text-center font-bold ${
            selectedMethod === 'Online' ? 'text-white' : 'text-black'
          }`}>
          Online Payment
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          tw`w-full p-4 mb-3 rounded-lg`,
          selectedMethod === 'Credit Card'
            ? tw`bg-blue-500 border-2 border-blue-700`
            : tw`bg-gray-200`,
        ]}
        onPress={() => setSelectedMethod('Credit Card')}>
        <Text
          style={tw`text-center font-bold ${
            selectedMethod === 'Credit Card' ? 'text-white' : 'text-black'
          }`}>
          Credit Card
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          tw`w-full p-4 mb-3 rounded-lg`,
          selectedMethod === 'Debit Card'
            ? tw`bg-blue-500 border-2 border-blue-700`
            : tw`bg-gray-200`,
        ]}
        onPress={() => setSelectedMethod('Debit Card')}>
        <Text
          style={tw`text-center font-bold ${
            selectedMethod === 'Debit Card' ? 'text-white' : 'text-black'
          }`}>
          Debit Card
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={tw`w-full bg-blue-500 p-4 rounded-lg mt-4`}
        onPress={handleConfirm}>
        <Text style={tw`text-white text-center font-bold`}>
          Confirm Booking
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentMethod;

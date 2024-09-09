import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import tw from 'twrnc';

function Ai() {
  return (
    <View style={tw`flex-1 justify-center items-center bg-[#1a1a1a]`}>
      <Text style={tw`text-3xl font-bold text-[#00ffcc] mb-8 text-center`}>
        Crack your Learner Exam Through AI
      </Text>

      {/* Free Learner Exam Option */}
      <TouchableOpacity style={tw`bg-[#0066cc] p-4 rounded-full mb-6 w-60`}>
        <Text style={tw`text-xl font-semibold text-center text-white`}>
          Free Learner Exam
        </Text>
      </TouchableOpacity>

      {/* Free Preparation PDFs Option */}
      <TouchableOpacity style={tw`bg-[#ff6600] p-4 rounded-full mb-6 w-60`}>
        <Text style={tw`text-xl font-semibold text-center text-white`}>
          Free Preparation PDFs
        </Text>
      </TouchableOpacity>

      {/* Delhi Learning License Portal Link */}
      <TouchableOpacity
        style={tw`bg-[#00cc00] p-4 rounded-full mb-6 w-60`}
        onPress={() => Linking.openURL('https://delhi.gov.in')}
      >
        <Text style={tw`text-xl font-semibold text-center text-white`}>
          Delhi Learning License Portal
        </Text>
      </TouchableOpacity>

      {/* Driving Safety Rules Section */}
      <TouchableOpacity style={tw`bg-[#ff0033] p-4 rounded-full w-60`}>
        <Text style={tw`text-xl font-semibold text-center text-white`}>
          Driving Safety Rules
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Ai;


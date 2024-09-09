import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import tw from 'twrnc';

const trainers = [
  {
    id: '1',
    name: 'Kanak Singh',
    exprence: '2 Years',
    hourlyRate: '500 INR',
    imageUrl: 'https://example.com/john.jpg',
  },
  {
    id: '2',
    name: 'Kuldeep singh',
    exprence: '1 Years',
    hourlyRate: '400 INR',
    imageUrl: 'https://example.com/jane.jpg',
  },
  {
    id: '3',
    name: 'Neeraj God',
    exprence: '2 Years',
    hourlyRate: '550 INR',
    imageUrl: 'https://example.com/michael.jpg',
  },
  {
    id: '4',
    name: 'Emily Davis',
    exprence: '2 Years',
    hourlyRate: '600 INR',
    imageUrl: 'https://example.com/emily.jpg',
  },
  {
    id: '5',
    name: 'David Brown',
    exprence: '2 Years',
    hourlyRate: '700 INR',
    imageUrl: 'https://example.com/david.jpg',
  },
  {
    id: '6',
    name: 'Ashwani',
    exprence: '2 Years',
    hourlyRate: '700 INR',
    imageUrl: 'https://example.com/david.jpg',
  },
  {
    id: '7',
    name: 'Depak Singh',
    exprence: '2 Years',
    hourlyRate: '700 INR',
    imageUrl: 'https://example.com/david.jpg',
  },
  {
    id: '8',
    name: 'Monu Rai',
    exprence: '2 Years',
    hourlyRate: '700 INR',
    imageUrl: 'https://example.com/david.jpg',
  },
  {
    id: '9',
    name: 'Sonu singh',
    exprence: '5 Years',
    hourlyRate: '700 INR',
    imageUrl: 'https://example.com/david.jpg',
  },
  {
    id: '10',
    name: 'Rahul Raj',
    exprence: '8 Years',
    hourlyRate: '700 INR',
    imageUrl: 'https://example.com/david.jpg',
  },
];

const TrainerBooking = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTrainers = trainers.filter(
    trainer =>
      trainer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trainer.specialization.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const renderTrainerCard = ({item}) => (
    <View style={tw`p-4 mb-4 bg-gray-100 rounded-lg`}>
      <Image
        source={{uri: item.imageUrl}}
        style={tw`w-full h-48 rounded-lg mb-4`}
        resizeMode="cover"
      />
      <Text style={tw`text-xl font-bold mb-2`}>{item.name}</Text>
      <Text style={tw`text-base mb-1`}>Exprence: {item.exprence}</Text>
      <Text style={tw`text-base mb-4`}>Hourly Rate: {item.hourlyRate}</Text>
      <TouchableOpacity style={tw`bg-blue-500 p-3 rounded-lg`}>
        <Text style={tw`text-white text-center font-bold`}>Book Trainer</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={tw`flex-1 p-4 bg-white`}>
      <Text style={tw`text-3xl font-bold mb-4`}>Book a Personal Trainer</Text>

      <TextInput
        style={tw`p-3 mb-4 border rounded-lg border-gray-300`}
        placeholder="Search Trainers"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <FlatList
        data={filteredTrainers}
        keyExtractor={item => item.id}
        renderItem={renderTrainerCard}
      />
    </View>
  );
};

export default TrainerBooking;

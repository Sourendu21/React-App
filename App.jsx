import{ Text,View,Button } from 'react-native'
import React from 'react';

const App = () => {
  return (
    <View>
      <Text style={ {fontSize : 30} }>React Native Mobile App Developer</Text>
      <Text style={ {fontSize : 30} }>Sourendu Adhikary</Text>
      <Button title="Press Here" />
   </View>
  );
};

export default App

import React from 'react';
import {Text, TextInput, View, Image} from 'react-native';

const CatApp = () => {
  return (
    <View>
    <Image
    source={{
      uri: 'https://logoeps.com/wp-content/uploads/2013/05/slipknot-eps-vector-logo.png',
    }}
    style={{width: 200, height: 200}}
    />
    <Text>Hello, I am your cat!</Text>
    </View>
  );
};
export default CatApp;

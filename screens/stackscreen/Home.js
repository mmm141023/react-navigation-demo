import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from '../../Styles';
export default ({navigation}) => (
  <View style={styles.container}>
    <Text style={styles.largefont}>HomeStack</Text>
    <Button
      title="go to details"
      onPress={() => {
        navigation.navigate('Details');
      }}
    />
  </View>
);

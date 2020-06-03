import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from '../../Styles';
export default ({navigation}) => (
  <View style={styles.container}>
    <Text style={styles.largefont}>DetailsStack</Text>
    <Button
      title="show bottomTab"
      onPress={() => {
        navigation.navigate('BottomTab');
      }}
    />
  </View>
);

import React from 'react';
import {Button, Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Page3Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page 3 Screen</Text>
      <Button title="Go back" onPress={() => navigation.pop()} />
      <Button
        title="Go to page 1"
        onPress={() => navigation.navigate('Page1Screen')}
      />
    </View>
  );
};

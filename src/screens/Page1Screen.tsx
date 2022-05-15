import React from 'react';
import {Button, Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/appTheme';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any, any> {}

export const Page1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page 1 Screen</Text>
      <Button
        title="Go to page 2"
        onPress={() => navigation.navigate('Page2Screen')}
      />
      
      <Text>Navigate with arguments</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('PersonScreen', {id: 1, name: 'Clarissa'})
        }>
        <Text>Klaryon</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate('PersonScreen', {id: 2, name: 'Maria'})
        }>
        <Text>Maria</Text>
      </TouchableOpacity>
    </View>
  );
};

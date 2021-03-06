import React from 'react';
import {Button, Text, View, TouchableOpacity} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Page1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page 1 Screen</Text>
      <Button
        title="Go to page 2"
        onPress={() => navigation.navigate('Page2Screen')}
      />
      <Text style={{marginVertical: 20, fontSize: 18}}>
        Navigate with arguments
      </Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{...styles.buttonBig, backgroundColor: '#5856D6'}}
          onPress={() =>
            navigation.navigate('PersonScreen', {id: 1, name: 'Clarissa'})
          }>
          <Text style={styles.buttonBigText}>Klaryon</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...styles.buttonBig, backgroundColor: '#FF9427'}}
          onPress={() =>
            navigation.navigate('PersonScreen', {id: 2, name: 'Maria'})
          }>
          <Text style={styles.buttonBigText}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

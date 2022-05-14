import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from '../theme/appTheme';

export const Page2Screen = () => {
  const navigator = useNavigation();
  return (
    <View style={styles.globalMargin}>
      <Text>Page 2 Screen</Text>
      <Button
        title="Go to page 3"
        onPress={() => navigator.navigate('Page3Screen')}
      />
    </View>
  );
};

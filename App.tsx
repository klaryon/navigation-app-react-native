import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { DrawerNavigatorPersonalized } from './src/navigator/DrawerNavigatorPersonalized';

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigatorPersonalized />
    </NavigationContainer>
  );
};

export default App;

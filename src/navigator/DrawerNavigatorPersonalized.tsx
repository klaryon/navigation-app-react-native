import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';
import {SettingsScreen} from '../screens/SettingsScreen';
import {Image, Text, useWindowDimensions, View} from 'react-native';
import {styles} from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const DrawerNavigatorPersonalized = () => {
  const {width} = useWindowDimensions();
  return (
    <Drawer.Navigator drawerContent={props => <MenuContent {...props} />}>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const MenuContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://clinicforspecialchildren.org/wp-content/uploads/2016/08/avatar-placeholder.gif',
          }}
          style={styles.avatar}
        />
      </View>
    </DrawerContentScrollView>
  );
};

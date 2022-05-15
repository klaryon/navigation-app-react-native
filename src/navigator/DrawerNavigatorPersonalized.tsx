import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {SettingsScreen} from '../screens/SettingsScreen';
import {
  Image,
  useWindowDimensions,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {styles} from '../theme/appTheme';
import {TabsNavigator} from './TabsNavigator';

const Drawer = createDrawerNavigator();

export const DrawerNavigatorPersonalized = () => {
  const {width} = useWindowDimensions();
  return (
    <Drawer.Navigator
      screenOptions={
        {
          // headerShown: false,
        }
      }
      drawerContent={props => <MenuContent {...props} />}>
      <Drawer.Screen name="TabsNavigator" component={TabsNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const MenuContent = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://clinicforspecialchildren.org/wp-content/uploads/2016/08/avatar-placeholder.gif',
          }}
          style={styles.avatar}
        />
      </View>

      {/* Menu options */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('TabsNavigator')}>
          <Text style={styles.menuText}>Navigation</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('SettingsScreen')}>
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

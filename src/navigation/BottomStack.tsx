import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Image, Text, View} from 'react-native';
import {Constants} from '../utils';
import Theme from '../theme/Theme';
import {styles} from './styles';
import HomeScreen from '../screens/homeScreen/Home';
import FavoritesScreen from '../screens/favoritesScreen/FavoritesScreen';
import Profile from '../screens/profile/Profile';

const Tab = createMaterialBottomTabNavigator();

function BottomStack() {
  return (
    <Tab.Navigator
      initialRouteName={Constants.Home_Screen}
      activeColor={Theme.colors.AppColor}
      labeled={false}
      shifting={false}
      barStyle={{
        backgroundColor: Theme.colors.white,
        height: Theme.fontSize.size65,
        borderWidth: 0.5,
        borderColor: Theme.colors.disable,
        paddingHorizontal: Theme.fontSize.size15,
        elevation:Theme.fontSize.size5
      }}>
      <Tab.Screen
        name={Constants.Home_Screen}
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: 'green',
          tabBarIcon: ({color, focused}) => (
            <>
              {focused ? (
                <View style={styles.image_wrapper}>
                  <Image
                    source={Theme.icons.home_active}
                    style={styles.image}
                    resizeMode="contain"
                  />
                </View>
              ) : (
                <Image
                  source={Theme.icons.home}
                  style={styles.image}
                  resizeMode="contain"
                />
              )}
            </>
          ),
        }}
      />
      <Tab.Screen
        name={Constants.Favorites_Screen}
        component={FavoritesScreen}
        options={{
          tabBarLabel: 'Students',
          tabBarIcon: ({color, focused}) => (
            <>
              {focused ? (
                <View style={styles.image_wrapper}>
                  <Image
                    source={Theme.icons.fav_active}
                    style={styles.image}
                    resizeMode="contain"
                  />
                </View>
              ) : (
                <Image
                  source={Theme.icons.fav}
                  style={{width: 22, height: 22}}
                  resizeMode="contain"
                />
              )}
            </>
          ),
        }}
      />
      <Tab.Screen
        name={Constants.Profile_Screen}
        component={Profile}
        options={{
          tabBarLabel: 'Lessons',
          tabBarIcon: ({color, focused}) => (
            <>
              {focused ? (
                <View style={styles.image_wrapper}>
                  <Image
                    source={Theme.icons.profile_active}
                    style={styles.image}
                    resizeMode="contain"
                  />
                </View>
              ) : (
                <Image
                  source={Theme.icons.profile}
                  style={{width: 22, height: 22}}
                  resizeMode="contain"
                />
              )}
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomStack;

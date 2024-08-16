import React, {useEffect} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Image, Text, View} from 'react-native';
import {Constants} from '../utils';
import Theme from '../theme/Theme';
import {styles} from './styles';
import HomeScreen from '../screens/homeScreen/Home';
import FavoritesScreen from '../screens/favoritesScreen/FavoritesScreen';
import RecipeDetailScreen from '../screens/recipeDetailScreen/RecipeDetailScreen';

const Tab = createMaterialBottomTabNavigator();
function BottomStack() {
  return (
    <Tab.Navigator
      initialRouteName={Constants.Home_Screen}
      activeColor={''}
      style={{
        backgroundColor: 'white',
        // borderTopLeftRadius: theme.responsiveSize.size30,
        // borderTopRightRadius: theme.responsiveSize.size30,
      }}
      labeled={false}
      shifting={false}
      barStyle={{
        backgroundColor: Theme.colors.white,
        borderTopLeftRadius: Theme.fontSize.size30,
        borderTopRightRadius: Theme.fontSize.size30,
        height: Theme.fontSize.size75,
        position: 'absolute',
        borderWidth: 0.5,
        borderColor: '',
        overflow: 'hidden',
        paddingHorizontal: Theme.fontSize.size15,
        paddingTop: Theme.fontSize.size5,
        left: 0,
        right: 0,
        // justifyContent: 'space-evenly'
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
                <View style={[styles.image_wrapper, {backgroundColor: color}]}>
                  <Image
                    source={Theme.icons.search_icon}
                    style={styles.image}
                    resizeMode="contain"
                  />
                  <Text
                    style={{
                      color: Theme.colors.white,
                      fontSize: Theme.fontSize.size10,
                    }}>
                    {'Home'}
                  </Text>
                </View>
              ) : (
                <Image
                  source={Theme.icons.search_icon}
                  style={{width: 22, height: 22}}
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
                <View style={[styles.image_wrapper, {backgroundColor: color}]}>
                  <Image
                    source={Theme.icons.search_icon}
                    style={styles.image}
                    resizeMode="contain"
                  />
                  <Text
                    style={{
                      color: Theme.colors.white,
                      fontSize: Theme.fontSize.size10,
                    }}>
                    'Students'
                  </Text>
                </View>
              ) : (
                <Image
                  source={Theme.icons.search_icon}
                  style={{width: 22, height: 22}}
                  resizeMode="contain"
                />
              )}
            </>
          ),
        }}
      />
      <Tab.Screen
        name={Constants.Recipe_Details}
        component={RecipeDetailScreen}
        options={{
          tabBarLabel: 'Lessons',
          tabBarIcon: ({color, focused}) => (
            <>
              {focused ? (
                <View style={[styles.image_wrapper, {backgroundColor: color}]}>
                  <Image
                    source={Theme.icons.search_icon}
                    style={styles.image}
                    resizeMode="contain"
                  />
                  <Text
                    style={{
                      color: Theme.colors.white,
                      fontSize: Theme.fontSize.size10,
                    }}>
                    {'Lessons'}
                  </Text>
                </View>
              ) : (
                <Image
                  source={Theme.icons.search_icon}
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

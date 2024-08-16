import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Constants} from '../utils';
import HomeScreen from '../screens/homeScreen/Home';
import FavoritesScreen from '../screens/favoritesScreen/FavoritesScreen';
import RecipeDetailScreen from '../screens/recipeDetailScreen/RecipeDetailScreen';
import SplashScreen from '../screens/splashScreen/SplashScreen';
import SearchScreen from '../screens/searchScreen/SearchScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName={Constants.Splash_Screen}
        screenOptions={({navigation, route}) => ({})}>
        <Stack.Screen
          name={Constants.Splash_Screen}
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.Home_Screen}
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.Search_Screen}
          component={SearchScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.Favorites_Screen}
          component={FavoritesScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.Recipe_Details}
          component={RecipeDetailScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default StackNavigation;

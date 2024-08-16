import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import { Favorites } from '../../components/favorites';

export default function FavoritesScreen({navigation}: any) {
  const handleRecipeSelect = (id: any) => {
    navigation.navigate('RecipeDetails', {id});
  };

  return (
    <View style={styles.container}>
      <Favorites onRecipeSelect={handleRecipeSelect} />
    </View>
  );
}

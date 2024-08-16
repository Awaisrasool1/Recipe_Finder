import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import { fetchRecipeDetails } from '../../services/Get';
import { RecipeDetails } from '../../components/recipeDetails';

export default function RecipeDetailScreen({route, navigation}: any) {
  const {id} = route.params;
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const getRecipeDetails = async () => {
      setLoading(true);
      try {
        const data = await fetchRecipeDetails(id);
        setRecipe(data);
        setError('');
      } catch (e) {
        setError('Something went wrong!');
      }
      setLoading(false);
    };
    getRecipeDetails();
  }, [id]);
  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>{error}</Text>
      ) : recipe ? (
        <RecipeDetails recipe={recipe} onBack={() => navigation.goBack()} />
      ) : null}
    </View>
  );
}

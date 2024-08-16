import {View, Text} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import { Filter } from '../../components/filter';
import { RecipeSearch } from '../../components/recipeSearch';
import { fetchRecipes } from '../../services/Get';
import { RecipeList } from '../../components/recipeList';


export default function HomeScreen({navigation}:any) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (query: any) => {
    setLoading(true);
    try {
      const data = await fetchRecipes(query);
      setRecipes(data);
      setError('');
    } catch (e) {
      setError('Something went wrong!');
    }
    setLoading(false);
  };

  const handleFilter = (filter: any) => {
    // Implement filter logic here
  };

  const handleRecipeSelect = (id: any) => {
    navigation.navigate('RecipeDetails', {id});
  };

  const handleFavorite = (recipe: any) => {
    // Implement favorite logic here
  };

  return (
    <View style={styles.container}>
      <RecipeSearch onSearch={handleSearch} />
      {/* <Filter onFilter={handleFilter} /> */}
      {loading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <RecipeList
          recipes={recipes}
          onRecipeSelect={handleRecipeSelect}
          onFavorite={handleFavorite}
        />
      )}
    </View>
  );
}

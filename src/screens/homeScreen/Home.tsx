import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {Filter} from '../../components/filter';
import {InputText} from '../../components/inputText';
import {fetchRecipes} from '../../services/Get';
import {RecipeList} from '../../components/recipeList';
import {Constants} from '../../utils';
import {Categorie} from '../../components/categorie';

export default function HomeScreen({navigation}: any) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  // useEffect(() => {
  //   handleSearch('pasta');
  // }, []);

  const handleSearch = async (query: any) => {
    setLoading(true);
    try {
      const data = await fetchRecipes(query);
      setRecipes(data);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  const handleFilter = (filter: any) => {
    // Implement filter logic here
  };

  const handleRecipeSelect = (id: any) => {
    navigation.navigate(Constants.Recipe_Details, {id});
  };

  const handleFavorite = (recipe: any) => {
    // Implement favorite logic here
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{marginTop: 20}} />
      <Text style={styles.heading}>Make your own food, stay at home</Text>
      <InputText />
      <View style={{marginTop: 20}} />
      <Text style={styles.CategorieText}>Categorie</Text>
      <Categorie
        handleSearch={(i: any) => {
          handleSearch(i);
        }}
      />
      <Text style={styles.CategorieText}>Recipes</Text>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <RecipeList
          recipes={recipes}
          onRecipeSelect={handleRecipeSelect}
          onFavorite={handleFavorite}
        />
      )}
    </ScrollView>
  );
}

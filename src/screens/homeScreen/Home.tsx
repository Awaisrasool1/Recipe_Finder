import {View, Text, ScrollView, ToastAndroid} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {InputText} from '../../components/inputText';
import {fetchRecipes, rendomRecipe} from '../../services/Get';
import {RecipeList} from '../../components/recipeList';
import {Constants} from '../../utils';
import {Categorie} from '../../components/categorie';
import Theme from '../../theme/Theme';
import LottieView from 'lottie-react-native';

export default function HomeScreen({navigation}: any) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    // getData();
  }, []);
  const getData = async () => {
    setLoading(true);
    try {
      const res = await rendomRecipe();
      setRecipes(res);
      setLoading(false);
    } catch (e: any) {
      ToastAndroid.show(e.response.data.message, ToastAndroid.LONG);
      setLoading(false);
    }
  };

  const handleSearch = async (query: any) => {
    setLoading(true);
    try {
      const data = await fetchRecipes(query);
      setRecipes(data);
      setLoading(false);
    } catch (e: any) {
      ToastAndroid.show(e.response.data.message, ToastAndroid.LONG);
      setLoading(false);
    }
  };

  const navigationToSearchScreen = () => {
    navigation.navigate(Constants.Search_Screen, {query: searchText});
    setSearchText('')
  };
  return (
    <ScrollView style={styles.container}>
      <View style={{marginTop: 20}} />
      <Text style={styles.heading}>Make your own food, stay at home</Text>
      <InputText
        onPress={navigationToSearchScreen}
        onChange={setSearchText}
        value={searchText}
      />
      <View style={{marginTop: 20}} />
      <Text style={styles.CategorieText}>Categorie</Text>
      <Categorie
        handleSearch={(i: any) => {
          handleSearch(i);
        }}
      />
      <Text style={styles.CategorieText}>Recipes</Text>
      {loading ? (
        <View style={styles.loadingContainer}>
          <LottieView
            style={{height: 40, width: 40}}
            source={Theme.lottie.loading}
            autoPlay
            loop={true}
          />
        </View>
      ) : (
        <RecipeList
          recipes={recipes}
          onRecipeSelect={(id: any) => {
            navigation.navigate(Constants.Recipe_Details, {id});
          }}
        />
      )}
    </ScrollView>
  );
}

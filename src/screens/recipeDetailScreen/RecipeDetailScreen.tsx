import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  ToastAndroid,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fetchRecipeDetails} from '../../services/Get';
import {Loader} from '../../components/Loader';
import Theme from '../../theme/Theme';

export default function RecipeDetailScreen({route, navigation}: any) {
  const {id} = route.params;
  const [recipe, setRecipe] = useState<any>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getRecipeDetails = async () => {
      setLoading(true);
      try {
        const data = await fetchRecipeDetails(id);
        console.log(data);
        setRecipe(data);
      } catch (e: any) {
        ToastAndroid.show(e.response.data.message, ToastAndroid.LONG);
      }
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    getRecipeDetails();
  }, [id]);
  return (
    <>
      <Image source={{uri: recipe?.image}} style={styles.image} />
      <View style={styles.container}>
        <View style={{paddingHorizontal: Theme.fontSize.size10}}>
          <Text style={styles.title}>{recipe?.title}</Text>
          {/* <Text style={styles?.sectionTitle}>Ingredients:</Text>
          {recipe?.ingredients?.map((ingredient: any, index: any) => (
            <Text key={index} style={styles.text}>
              {ingredient}
            </Text>
          ))}
          <Text style={styles.sectionTitle}>Instructions:</Text>
          <Text style={styles.text}>{recipe?.instructions}</Text> */}
        </View>
        {/* <Loader isLoading={loading} /> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: Theme.fontSize.size1,
    backgroundColor: Theme.colors.white,
  },
  image: {
    width: '100%',
    height: Theme.fontSize.size250,
    resizeMode: 'contain',
    marginTop: -5,
    position: 'absolute',
    flex: 1,
  },
  title: {
    fontSize: Theme.fontSize.size16,
    fontWeight: '700',
    marginVertical: Theme.fontSize.size10,
    color: Theme.colors.black,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  text: {
    fontSize: 16,
    marginVertical: 2,
  },
});

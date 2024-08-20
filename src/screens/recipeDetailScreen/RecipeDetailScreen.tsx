import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  ToastAndroid,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fetchRecipeDetails} from '../../services/Get';
import {Loader} from '../../components/Loader';
import Theme from '../../theme/Theme';
import Animated, {FadeInDown} from 'react-native-reanimated';
import firestore from '@react-native-firebase/firestore';
import {getuserID} from '../../utils/Constants';

export default function RecipeDetailScreen({route, navigation}: any) {
  const {id} = route.params;
  const [recipe, setRecipe] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const getRecipeDetails = async () => {
      setLoading(true);
      try {
        const data = await fetchRecipeDetails(id);
        setRecipe(data);
        const userId = getuserID();
        const favoriteDoc = await firestore()
          .collection('favorites')
          .doc(id.toString())
          .get();

        if (favoriteDoc.exists && favoriteDoc.data()?.userId === userId) {
          setIsFavorite(true);
        }
      } catch (e: any) {
        ToastAndroid.show(
          e.response?.data?.message || 'Error fetching details',
          ToastAndroid.LONG,
        );
      }
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    getRecipeDetails();
  }, [id]);
  
  const toggleFavorite = async () => {
    try {
      let userId = getuserID();
      const favoriteRef = firestore()
        .collection('favorites')
        .doc(id.toString());
      if (isFavorite) {
        await favoriteRef.delete();
        ToastAndroid.show('Recipe removed from favorites!', ToastAndroid.SHORT);
      } else {
        await favoriteRef.set({
          id: recipe.id,
          userId: userId,
          title: recipe.title,
          image: recipe.image,
          instructions: recipe.instructions,
        });
        ToastAndroid.show('Recipe added to favorites!', ToastAndroid.SHORT);
      }
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.log(error);
      ToastAndroid.show('Failed to update favorites.', ToastAndroid.SHORT);
    }
  };

  return (
    <>
      {recipe && (
        <>
          <ImageBackground source={{uri: recipe?.image}} style={styles.image}>
            <View style={styles.icons}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={Theme.icons.go_Back} style={styles.iconImg} />
              </TouchableOpacity>
              {isFavorite ? (
                <TouchableOpacity
                  onPress={toggleFavorite}
                  style={{
                    width: 45,
                    height: 45,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: Theme.colors.AppColor,
                    borderRadius: Theme.fontSize.size10,
                  }}>
                  <Image
                    source={Theme.icons.fav}
                    style={{
                      width: 35,
                      height: 35,
                      tintColor: 'white',
                    }}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={toggleFavorite}>
                  <Image
                    source={Theme.icons.Favorites}
                    style={{
                      width: 45,
                      height: 45,
                    }}
                  />
                </TouchableOpacity>
              )}
            </View>
          </ImageBackground>
          <Animated.View
            entering={FadeInDown.duration(1000)}
            style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={styles.title}>{recipe?.title}</Text>
              <Text style={styles.sectionTitle}>Instructions:</Text>
              <Text style={styles.text}>{recipe?.instructions}</Text>
              <View style={{height: Theme.fontSize.size20}} />
            </ScrollView>
          </Animated.View>
        </>
      )}
      <Loader isLoading={loading} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: Theme.fontSize.size1,
    backgroundColor: Theme.colors.white,
    borderTopLeftRadius: Theme.fontSize.size30,
    borderTopRightRadius: Theme.fontSize.size30,
    marginTop: -Theme.fontSize.size20,
    padding: Theme.fontSize.size10,
  },
  image: {
    width: '100%',
    height: Theme.fontSize.size250,
    resizeMode: 'contain',
  },
  title: {
    fontSize: Theme.fontSize.size16,
    fontWeight: '700',
    marginVertical: Theme.fontSize.size10,
    color: Theme.colors.black,
    letterSpacing: Theme.fontSize.size1,
    paddingLeft: Theme.fontSize.size10,
  },
  sectionTitle: {
    fontSize: Theme.fontSize.size14,
    fontWeight: '700',
    marginVertical: Theme.fontSize.size5,
    color: Theme.colors.black,
    letterSpacing: Theme.fontSize.size1,
  },
  text: {
    fontSize: Theme.fontSize.size14,
    fontWeight: '600',
    color: Theme.colors.disable,
  },
  icons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Theme.fontSize.size10,
    paddingTop: Theme.fontSize.size10,
  },
  iconImg: {
    width: Theme.fontSize.size40,
    height: Theme.fontSize.size40,
  },
});

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

export default function RecipeDetailScreen({route, navigation}: any) {
  const {id} = route.params;
  const [recipe, setRecipe] = useState<any>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getRecipeDetails = async () => {
      setLoading(true);
      try {
        const data = await fetchRecipeDetails(id);
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
      {recipe && (
        <>
          <ImageBackground source={{uri: recipe?.image}} style={styles.image}>
            <View style={styles.icons}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={Theme.icons.go_Back} style={styles.iconImg} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={Theme.icons.Favorites}
                  style={{tintColor: 'black', width: 55, height: 55}}
                />
              </TouchableOpacity>
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

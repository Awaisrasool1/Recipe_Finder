import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ToastAndroid,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {InputText} from '../../components/inputText';
import LottieView from 'lottie-react-native';
import Theme from '../../theme/Theme';
import {RecipeList} from '../../components/recipeList';
import {Constants} from '../../utils';
import {fetchRecipes} from '../../services/Get';
import {useFocusEffect} from '@react-navigation/native';
import BottomSheet from '../../components/bottomSheet/BottomSheet';
import {foodCategories} from '../../utils/Constants';

export default function SearchScreen({route, navigation}: any) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<any[]>([]);
  const refRBSheet: any = useRef(null);

  useFocusEffect(
    React.useCallback(() => {
      setSearchText(route?.params?.query);
      handleSearch();
    }, [route?.params]),
  );
  
  const handleSearch = async () => {
    setLoading(true);
    try {
      const data = await fetchRecipes(route?.params?.query);
      setRecipes(data);
      setLoading(false);
    } catch (e: any) {
      ToastAndroid.show(e.response.data.message, ToastAndroid.LONG);
      setLoading(false);
    }
  };

  const sendCategoriesToApi = async () => {
    setLoading(true);
    try {
      setRecipes([]);
      setSelectedCategories([]);
      refRBSheet.current.close();
      const selectedCategoryNames = selectedCategories
        .map(
          id =>
            foodCategories.find((category: any) => category.id === id)?.type,
        )
        .join(',');
      const res = await fetchRecipes(selectedCategoryNames);
      setRecipes(res);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      ToastAndroid.show(error.response.data.message, ToastAndroid.LONG);
    }
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.flxRow}>
        <View style={{width: '85%'}}>
          <InputText
            onPress={handleSearch}
            onChange={setSearchText}
            value={searchText}
          />
        </View>
        <TouchableOpacity
          style={styles.filterIconContainer}
          onPress={() => refRBSheet.current.open()}>
          <Image source={Theme.icons.filter_icon} style={styles.fliterImg} />
        </TouchableOpacity>
      </View>
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
      <BottomSheet
        refRBSheet={refRBSheet}
        setSelectedCategories={setSelectedCategories}
        selectedCategories={selectedCategories}
        foodCategories={foodCategories}
        onPress={sendCategoriesToApi}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: Theme.fontSize.size1,
    backgroundColor: Theme.colors.white,
    paddingHorizontal: Theme.fontSize.size10,
  },
  flxRow: {
    flexDirection: 'row',
    gap: Theme.fontSize.size10,
    marginTop: Theme.fontSize.size20,
    alignItems: 'center',
  },
  filterIconContainer: {
    width: Theme.fontSize.size40,
    height: Theme.fontSize.size40,
    elevation: Theme.fontSize.size3,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Theme.fontSize.size10,
  },
  fliterImg: {
    width: Theme.fontSize.size30,
    height: Theme.fontSize.size30,
  },
  CategorieText: {
    fontSize: Theme.fontSize.size15,
    color: Theme.colors.black,
    fontWeight: '700',
    marginLeft: Theme.fontSize.size10,
    marginBottom: Theme.fontSize.size10,
    marginTop: Theme.fontSize.size20,
  },
  loadingContainer: {
    alignSelf: 'center',
    marginTop: Theme.fontSize.size30,
  },
});

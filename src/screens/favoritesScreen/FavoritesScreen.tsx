import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Theme from '../../theme/Theme';
import {Loader} from '../../components/Loader';
import {getuserID} from '../../utils/Constants';
import {useFocusEffect} from '@react-navigation/native';
import Animated, {FadeInUp} from 'react-native-reanimated';

export default function FavoritesScreen({navigation}: any) {
  const [favorites, setFavorites] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      const fetchFavorites = async () => {
        setLoading(true);
        try {
          let userId = getuserID();
          let res: any = await firestore()
            .collection('favorites')
            .where('userId', '==', userId)
            .get();
          setFavorites(res._docs);
        } catch (error) {
          console.error(error);
        }
        setLoading(false);
      };
      fetchFavorites();
    }, []),
  );

  const removeFavorite = async (id: string) => {
    setLoading(true);
    try {
      const documentRef = firestore()
        .collection('favorites')
        .doc(id.toString());
      await documentRef.delete();
      setFavorites(prevFavorites =>
        prevFavorites.filter(item => item._data.id !== id),
      );
    } catch (error) {
      console.error('Error removing favorite: ', error);
    }
    setLoading(false);
  };
  const RenderFavoriteItem = ({item, index}: any) => {
    return (
      <Animated.View
        entering={FadeInUp.delay(index * 100)}
        style={styles.itemContainer}>
        <TouchableOpacity
          style={{alignSelf: 'flex-end'}}
          onPress={() => {
            removeFavorite(item._data.id);
          }}>
          <Image source={Theme.icons.Favorites1} style={styles.favImg} />
        </TouchableOpacity>
        <View style={styles.imageContainer}>
          <Image source={{uri: item._data.image}} style={styles.image} />
          <Text style={styles.title} numberOfLines={1}>
            {item._data.title}
          </Text>
        </View>
      </Animated.View>
    );
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Favotite</Text>
      {loading ? (
        <Loader isLoading={loading} />
      ) : (
        <FlatList
          data={favorites}
          renderItem={({item, index}: any) => (
            <RenderFavoriteItem item={item} index={index} />
          )}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      )}
      {favorites.length < 1 && (
        <Text style={[styles.title, {textAlign: 'center'}]}>No Data found</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7fb',
    padding: Theme.fontSize.size10,
  },
  itemContainer: {
    marginVertical: Theme.fontSize.size10,
    backgroundColor: Theme.colors.white,
    borderRadius: Theme.fontSize.size10,
    elevation: Theme.fontSize.size2,
    width: '98%',
    alignSelf: 'center',
    padding: Theme.fontSize.size10,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.fontSize.size15,
    marginTop: -Theme.fontSize.size15,
  },
  favImg: {
    width: Theme.fontSize.size40,
    height: Theme.fontSize.size40,
  },
  image: {
    width: Theme.fontSize.size60,
    height: Theme.fontSize.size60,
    borderRadius: Theme.fontSize.size30,
  },
  title: {
    fontSize: Theme.fontSize.size14,
    fontWeight: '700',
    color: Theme.colors.black,
    width: '80%',
  },
  heading: {
    fontSize: Theme.fontSize.size16,
    fontWeight: '700',
    color: Theme.colors.black,
    paddingTop: Theme.fontSize.size10,
    paddingBottom: Theme.fontSize.size10,
    paddingLeft: Theme.fontSize.size10,
  },
});

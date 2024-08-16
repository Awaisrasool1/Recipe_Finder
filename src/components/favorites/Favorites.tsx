import React, {useContext} from 'react';
import {View, Text, FlatList, Button, StyleSheet} from 'react-native';
import {GlobalContext} from '../../context/GlobalContext';

const Favorites = ({onRecipeSelect}) => {
  const {favorites, removeFavorite}:any = useContext(GlobalContext);

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Button title="View Details" onPress={() => onRecipeSelect(item.id)} />
      <Button
        title="Remove from Favorites"
        onPress={() => removeFavorite(item.id)}
      />
    </View>
  );

  return (
    <FlatList
      data={favorites}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
  },
  item: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Favorites;

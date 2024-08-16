import React from 'react';
import {View, Text, FlatList, Image, Button, StyleSheet} from 'react-native';

const RecipeList = ({recipes, onRecipeSelect, onFavorite}: any) => {
  const renderItem = ({item}: any) => (
    <View style={styles.item}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{item.title}</Text>
        <Button title="View Details" onPress={() => onRecipeSelect(item.id)} />
        <Button title="Save to Favorites" onPress={() => onFavorite(item)} />
      </View>
    </View>
  );

  return (
    <FlatList
      data={recipes}
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
    flexDirection: 'row',
    marginBottom: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: 100,
    height: 100,
  },
  details: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RecipeList;

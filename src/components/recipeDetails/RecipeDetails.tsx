import React from 'react';
import {View, Text, Image, Button, ScrollView, StyleSheet} from 'react-native';

const RecipeDetails = ({recipe, onBack}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{uri: recipe.image}} style={styles.image} />
      <Text style={styles.title}>{recipe.title}</Text>
      <Text style={styles.sectionTitle}>Ingredients:</Text>
      {recipe.ingredients?.map((ingredient, index) => (
        <Text key={index} style={styles.text}>
          {ingredient}
        </Text>
      ))}
      <Text style={styles.sectionTitle}>Instructions:</Text>
      <Text style={styles.text}>{recipe.instructions}</Text>
      <Button title="Back to Search Results" onPress={onBack} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
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

export default RecipeDetails;

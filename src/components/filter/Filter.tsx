// src/components/Filter.js
import React, {useState} from 'react';
import {View, Button,  StyleSheet} from 'react-native';

const Filter = ({onFilter}) => {
  const [cuisine, setCuisine] = useState('');
  const [mealType, setMealType] = useState('');

  const applyFilter = () => {
    onFilter({cuisine, mealType});
  };

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={cuisine}
        onValueChange={itemValue => setCuisine(itemValue)}
        style={styles.picker}>
        <Picker.Item label="Select Cuisine" value="" />
        <Picker.Item label="Italian" value="italian" />
        <Picker.Item label="Chinese" value="chinese" />
        {/* Add more options as needed */}
      </Picker>

      <Picker
        selectedValue={mealType}
        onValueChange={itemValue => setMealType(itemValue)}
        style={styles.picker}>
        <Picker.Item label="Select Meal Type" value="" />
        <Picker.Item label="Breakfast" value="breakfast" />
        <Picker.Item label="Lunch" value="lunch" />
        {/* Add more options as needed */}
      </Picker>

      <Button title="Apply Filter" onPress={applyFilter} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  picker: {
    marginBottom: 10,
  },
});

export default Filter;

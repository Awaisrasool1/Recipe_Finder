import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Theme from '../../theme/Theme';
import {Buttons} from '../Buttons';

const {height} = Dimensions.get('window');

const BottomSheet = (props: any) => {
  const toggleCategory = (categoryId: number) => {
    if (props.selectedCategories.includes(categoryId)) {
      props.setSelectedCategories(
        props.selectedCategories.filter((id: any) => id !== categoryId),
      );
    } else {
      props.setSelectedCategories([...props.selectedCategories, categoryId]);
    }
  };

  return (
    <RBSheet
      ref={props.refRBSheet}
      openDuration={600}
      draggable
      dragOnContent
      customStyles={{
        container: {
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        },
      }}
      height={height - Theme.fontSize.size75}>
      <ScrollView>
        <Text style={styles.heading}>Filter</Text>
        <View style={styles.container}>
          {props.foodCategories.map((category: any) => (
            <TouchableOpacity
              key={category.id}
              onPress={() => toggleCategory(category.id)}
              style={[
                styles.textContainer,
                props.selectedCategories.includes(category.id) &&
                  styles.selectedTextContainer,
              ]}>
              <Text
                style={[
                  styles.text,
                  props.selectedCategories.includes(category.id) && {
                    color: Theme.colors.white,
                  },
                ]}>
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View>
          <Buttons
            disabled={props?.selectedCategories?.length === 0}
            title={'Apply'}
            onPress={() => {
              props.onPress();
            }}
            style={{
              alignSelf: 'flex-end',
              width: Theme.fontSize.size150,
              marginTop: Theme.fontSize.size20,
              marginRight: 20,
            }}
          />
        </View>
      </ScrollView>
    </RBSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    paddingHorizontal: Theme.fontSize.size10,
  },
  heading: {
    fontSize: Theme.fontSize.size16,
    color: Theme.colors.black,
    fontWeight: '700',
    paddingLeft: Theme.fontSize.size20,
    paddingVertical: Theme.fontSize.size20,
    letterSpacing: 0.5,
  },
  textContainer: {
    padding: Theme.fontSize.size5,
    paddingHorizontal: Theme.fontSize.size10,
    borderWidth: 0.7,
    borderColor: '#d1d0d3',
    marginVertical: Theme.fontSize.size5,
    marginHorizontal: Theme.fontSize.size5,
    borderRadius: Theme.fontSize.size20,
  },
  selectedTextContainer: {
    borderColor: Theme.colors.AppColor, // Change this to your theme's primary color
    backgroundColor: Theme.colors.AppColor, // Optional: change background when selected
  },
  text: {
    fontSize: Theme.fontSize.size14,
    fontWeight: '700',
    color: Theme.colors.black,
    letterSpacing: 0.7,
  },
});

export default BottomSheet;

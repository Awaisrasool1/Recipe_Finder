import React from 'react';
import {Text, Image, StyleSheet, Pressable, View} from 'react-native';
import Theme from '../../theme/Theme';
import MasonryList from '@react-native-seoul/masonry-list';
import Animated, {FadeIn, ZoomInDown} from 'react-native-reanimated';

const RenderItem = ({item, index}: any) => {
  let second = index % 2 == 0;
  return (
    <Animated.View entering={FadeIn.delay(index * 100)}>
      <Pressable
        style={[
          styles.Container,
          {marginLeft: second ? 0 : 5, marginRight: second ? 5 : 0},
        ]}>
        <Image
          source={{uri: item.image}}
          style={[styles.image, index % 3 == 0 ? {height: 300} : {height: 200}]}
        />
        <Text numberOfLines={2} style={styles.title}>
          {item.title}
        </Text>
      </Pressable>
    </Animated.View>
  );
};

const RecipeList = ({recipes, onRecipeSelect, onFavorite}: any) => {
  return (
    <MasonryList
      data={recipes}
      keyExtractor={(item): string => item.id}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      renderItem={({item, i}: any) => <RenderItem item={item} index={i} />}
      onEndReachedThreshold={0.1}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: Theme.fontSize.size5,
  },
  Container: {
    width: '95%',
    marginBottom: Theme.fontSize.size25,
  },
  image: {
    width: '100%',
    borderRadius: Theme.fontSize.size20,
  },
  title: {
    fontSize: Theme.fontSize.size14,
    fontWeight: '600',
    color: Theme.colors.black,
    marginTop: Theme.fontSize.size5,
    marginLeft: Theme.fontSize.size5,
  },
});

export default RecipeList;

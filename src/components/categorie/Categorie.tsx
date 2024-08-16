import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {categories} from '../../utils/Constants';
import Theme from '../../theme/Theme';
import Animated, {FadeInRight} from 'react-native-reanimated';

export default function Categorie(props: any) {
  const renderItem = ({item, index}: any) => {
    return (
      <Animated.View entering={FadeInRight.delay(index * 100).springify()}>
        <TouchableOpacity
          style={styles.container}
          onPress={() => {
            props.handleSearch(item.name);
          }}>
          <Image source={{uri: item.photo_url}} style={styles.image} />
          <Text style={styles.name} numberOfLines={2}>
            {item.name}
          </Text>
        </TouchableOpacity>
      </Animated.View>
    );
  };
  return (
    <View>
      <FlatList
        data={categories}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Theme.fontSize.size10,
    rowGap: Theme.fontSize.size2,
    alignItems: 'center',
  },
  image: {
    width: Theme.fontSize.size70,
    height: Theme.fontSize.size70,
    borderRadius: Theme.fontSize.size35,
  },
  name: {
    fontSize: Theme.fontSize.size14,
    fontWeight: '600',
    color: Theme.colors.black,
    letterSpacing: 1,
    width: Theme.fontSize.size90,
    textAlign: 'center',
  },
});

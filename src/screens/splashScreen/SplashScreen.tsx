import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet, Animated, Image, Text} from 'react-native';
import Theme from '../../theme/Theme';
import Animateds, {FadeInDown, FadeInUp} from 'react-native-reanimated';
import {Constants} from '../../utils';

const SplashScreen = (props: any) => {
  const ring1 = useRef(new Animated.Value(0)).current;
  const ring2 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setTimeout(() => {
      Animated.spring(ring1, {
        toValue: 1,
        useNativeDriver: false,
      }).start();
      //
      Animated.spring(ring2, {
        toValue: 1,
        useNativeDriver: false,
      }).start();
    }, 250);
    setTimeout(() => {
      props.navigation.reset({
        index: 0,
        routes: [
          {
            name: Constants.Home_Screen,
          },
        ],
      });
    }, 900);
  }, []);

  const padding = ring1.interpolate({
    inputRange: [0, 8],
    outputRange: ['0%', '100%'],
  });
  const padding1 = ring2.interpolate({
    inputRange: [0, 7],
    outputRange: ['0%', '100%'],
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.circle, {padding}]}>
        <Animated.View
          style={[
            styles.circle,
            {backgroundColor: '#f5b856', padding: padding1},
          ]}>
          <Image source={Theme.icons.splash_logo} style={styles.image} />
        </Animated.View>
      </Animated.View>
      <View style={styles.content}>
        <Text style={styles.title}>Recipe Finder</Text>
        <Text style={styles.subtitle}>Food is always right</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.colors.AppColor,
  },
  circle: {
    backgroundColor: '#f5a632',
    borderRadius: 200,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: Theme.fontSize.size170,
    height: Theme.fontSize.size170,
  },
  title: {
    fontSize: Theme.fontSize.size18,
    fontWeight: '700',
    color: Theme.colors.white,
    marginTop: Theme.fontSize.size20,
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: Theme.fontSize.size14,
    color: Theme.colors.white,
    fontWeight: '600',
    marginTop: Theme.fontSize.size10,
    letterSpacing: 1,
  },
});

export default SplashScreen;

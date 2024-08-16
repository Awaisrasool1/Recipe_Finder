import React, {useEffect, useRef} from 'react';
import {View, Text, StyleSheet, Animated, Image} from 'react-native';
import Theme from '../../theme/Theme';

const SplashScreen = () => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 10,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.circle,
          {
            transform: [{scale: scaleAnim}],
            opacity: opacityAnim,
          },
        ]}
      />
      <View style={styles.content}>
        <Image source={Theme.icons.splash_logo} style={styles.image} />
        <Text style={styles.title}>Foody</Text>
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
    position: 'absolute',
    width: Theme.fontSize.size100,
    height: Theme.fontSize.size100,
    backgroundColor:Theme.colors.AppColor,
    borderRadius: Theme.fontSize.size50,
    zIndex: -1,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: Theme.fontSize.size100,
    height: Theme.fontSize.size100,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Theme.colors.white,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: Theme.colors.white,
    marginTop: Theme.fontSize.size10,
  },
});

export default SplashScreen;

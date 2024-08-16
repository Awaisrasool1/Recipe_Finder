import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Overlay} from 'react-native-elements';
import Theme from '../../theme/Theme';
import LottieView from 'lottie-react-native';

const Loader = (props: any) => {
  return (
    <Overlay isVisible={props.isLoading}>
      <View style={styles.viewLoader}>
        <LottieView
          style={{height: 40, width: 40}}
          source={Theme.lottie.loading}
          autoPlay
          loop={true}
        />
      </View>
    </Overlay>
  );
};

export default Loader;
const styles = StyleSheet.create({
  viewLoader: {
    backgroundColor: Theme.colors.white,
    height: Theme.fontSize.size100,
    width: Theme.fontSize.size100,
    borderRadius: Theme.fontSize.size20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

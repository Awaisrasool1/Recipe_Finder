import React, {FC} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Overlay} from 'react-native-elements';
import Theme from '../../theme/Theme';
import { useGlobal } from '../../context/GlobalContext';
import LottieView from 'lottie-react-native';
let theme = Theme()
interface LoaderProps {
  isLoading: boolean;
}

const Loader: FC<LoaderProps> = props => {
  const globalContext = useGlobal();
  return (
    <Overlay isVisible={props.isLoading}>
      <View style={styles.viewLoader}>
        {/* <ActivityIndicator size="large" color={globalContext.color} /> */}
        <LottieView style={{height:130, width:130}} source={theme.lottie.LOADING} autoPlay loop={true} />
      </View>
    </Overlay>
  );
};

export default Loader;
const styles = StyleSheet.create({
  viewLoader: {
    backgroundColor: theme.colors.white,
    height: theme.responsiveSize.size100,
    width: theme.responsiveSize.size100,
    borderRadius: theme.responsiveSize.size20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

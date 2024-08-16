import {Dimensions, StyleSheet} from 'react-native';
import Theme from '../../theme/Theme';
let theme = Theme()
const styles = StyleSheet.create({
  overlay: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.black,
    opacity: 0.6,
    alignSelf: 'center',
    paddingHorizontal: theme.responsiveSize.size25,
    paddingVertical: theme.responsiveSize.size15,
    borderRadius: theme.responsiveSize.size10
  },
  text:{
    color: theme.colors.white,
  }
});

export default styles;

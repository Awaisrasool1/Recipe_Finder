import {StyleSheet} from 'react-native';
import Theme from '../theme/Theme';
let theme = Theme();
export const styles = StyleSheet.create({
  image_wrapper: {
    display: 'flex',
    flexDirection: 'row',
    // position: 'absolute',
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: theme.responsiveSize.size65,
    height: theme.responsiveSize.size35,
    // marginLeft: -theme.responsiveSize.size21,
    marginTop: -theme.responsiveSize.size8,
    paddingHorizontal: theme.responsiveSize.size3,
    paddingVertical: theme.responsiveSize.size10,
    borderRadius: theme.responsiveSize.size40,
    elevation: theme.responsiveSize.size2,
  },
  top_image_wrapper: {
    display: 'flex',
    flexDirection: 'row',
    minWidth: theme.responsiveSize.size85,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  top_label: {
    color: theme.colors.appColorLight,
    fontSize: theme.responsiveSize.size14,
    fontWeight: '600',
    marginLeft: theme.responsiveSize.size10,
  },
  label: {
    color: theme.colors.white,
    fontSize: theme.responsiveSize.size10,
    fontWeight: '600',
  },
  image: {
    width: theme.responsiveSize.size16,
    height: theme.responsiveSize.size16,
    marginRight: theme.responsiveSize.size4,
  },
  
});

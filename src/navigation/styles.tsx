import {StyleSheet} from 'react-native';
import Theme from '../theme/Theme';
export const styles = StyleSheet.create({
  image_wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Theme.fontSize.size65,
    height: Theme.fontSize.size35,
    paddingHorizontal: Theme.fontSize.size3,
    paddingVertical: Theme.fontSize.size10,
    borderRadius: Theme.fontSize.size40,
    elevation: Theme.fontSize.size2,
    backgroundColor: Theme.colors.AppColor,
    marginTop:-Theme.fontSize.size6
  },
  image: {
    width: Theme.fontSize.size22,
    height: Theme.fontSize.size22,
    marginRight: Theme.fontSize.size4,
  },
});

import {StyleSheet} from 'react-native';
import Theme from '../../theme/Theme';

const styles = StyleSheet.create({
  container: {
    flex: Theme.fontSize.size1,
    paddingHorizontal: Theme.fontSize.size20,
    backgroundColor: Theme.colors.white,
  },
  img: {
    width: Theme.fontSize.size150,
    height: Theme.fontSize.size150,
    alignSelf: 'center',
    marginTop: Theme.fontSize.size25,
    marginBottom: Theme.fontSize.size20,
  },
  text: {
    fontSize: Theme.fontSize.size16,
    color: Theme.colors.black,
    fontWeight: '700',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.fontSize.size30,
    marginTop: Theme.fontSize.size20,
  },
  input: {
    height: Theme.fontSize.size40,
    borderColor: Theme.colors.borderColor,
    borderWidth: Theme.fontSize.size1,
    marginBottom: Theme.fontSize.size10,
    paddingHorizontal: Theme.fontSize.size10,
    borderRadius: Theme.fontSize.size5,
    backgroundColor: Theme.colors.white,
    elevation: Theme.fontSize.size1,
  },
  link: {
    marginVertical: Theme.fontSize.size10,
    color: Theme.colors.AppColor,
    textAlign: 'center',
  },
  errorTextStyle: {
    marginHorizontal: Theme.fontSize.size10,
    color: Theme.colors.lightRed,
    fontSize: Theme.fontSize.size13,
    alignSelf: 'flex-start',
    marginTop: -Theme.fontSize.size10,
    marginBottom: Theme.fontSize.size5,
  },
});

export default styles;

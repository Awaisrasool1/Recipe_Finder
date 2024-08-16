import {StyleSheet} from 'react-native';
import Theme from '../../theme/Theme';

const styles = StyleSheet.create({
  container: {
    flex: Theme.fontSize.size1,
    backgroundColor: Theme.colors.white,
    paddingHorizontal: Theme.fontSize.size10,
  },
  heading: {
    fontSize: Theme.fontSize.size20,
    color: Theme.colors.black,
    fontWeight: '700',
    marginVertical: Theme.fontSize.size20,
  },
  CategorieText: {
    fontSize: Theme.fontSize.size15,
    color: Theme.colors.black,
    fontWeight: '700',
    marginLeft: Theme.fontSize.size10,
    marginBottom: Theme.fontSize.size10,
  },
  loadingContainer:{
    alignSelf:'center',
    marginTop:Theme.fontSize.size30
  }
});

export default styles;

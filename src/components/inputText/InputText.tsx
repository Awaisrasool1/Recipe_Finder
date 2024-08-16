import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Theme from '../../theme/Theme';
import {Constants} from '../../utils';
import {useNavigation} from '@react-navigation/native';

const InputText = (props: any) => {
  const [text, setText] = useState('');
  const nav: any = useNavigation();

  const handleSearch = () => {
    console.log(props);
    nav.navigate(Constants.Search_Screen, {query: text});
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search recipes..."
        value={text}
        onChangeText={setText}
        placeholderTextColor={Theme.colors.black}
      />
      <TouchableOpacity
        disabled={!text}
        style={styles.icon}
        onPress={() => {
          handleSearch();
        }}>
        <Image
          source={Theme.icons.search_icon}
          style={{width: 25, height: 25}}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    borderRadius: Theme.fontSize.size30,
    width: '100%',
    backgroundColor: '#eceeeb',
    paddingLeft: Theme.fontSize.size15,
    fontSize: Theme.fontSize.size15,
    color: Theme.colors.black,
  },
  icon: {
    position: 'absolute',
    right: Theme.fontSize.size4,
    backgroundColor: Theme.colors.white,
    padding: Theme.fontSize.size7,
    borderRadius: Theme.fontSize.size30,
  },
});

export default InputText;

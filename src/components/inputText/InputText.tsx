import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Theme from '../../theme/Theme';

const InputText = (props: any) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search recipes..."
        value={props.value}
        onChangeText={(text: any) => props.onChange(text)}
        placeholderTextColor={Theme.colors.black}
      />
      <TouchableOpacity
        disabled={!props.value}
        style={styles.icon}
        onPress={() => {
          props.onPress();
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
    paddingRight:Theme.fontSize.size55,
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

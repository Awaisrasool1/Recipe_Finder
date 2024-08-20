import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
} from 'react-native';
import Theme from '../../theme/Theme';

const InputText = (props: any) => {
  return (
    <>
      {props.lebel && <Text style={styles.lebel}>{props.lebel}</Text>}
      <View style={styles.container}>
        <TextInput
          style={[styles.input, props.style]}
          placeholder={props.placeholder}
          value={props.value}
          keyboardType={props.keyboardType}
          onBlur={props.onBlur}
          onChangeText={(text: any) => props.onChange(text)}
          placeholderTextColor={Theme.colors.black}
          secureTextEntry={props.secureTextEntry}
        />
        <View style={styles.icon}>{props.icon}</View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // alignItems: 'center',
  },
  lebel: {
    fontSize: Theme.fontSize.size14,
    color: Theme.colors.black,
    fontWeight: '700',
    letterSpacing: 0.5,
    paddingLeft: Theme.fontSize.size5,
    paddingBottom: Theme.fontSize.size2,
  },
  input: {
    borderRadius: Theme.fontSize.size30,
    width: '100%',
    backgroundColor: '#eceeeb',
    paddingLeft: Theme.fontSize.size15,
    paddingRight: Theme.fontSize.size55,
    fontSize: Theme.fontSize.size15,
    color: Theme.colors.black,
  },
  icon: {
    position: 'absolute',
    right: Theme.fontSize.size10,
    top: Theme.fontSize.size10,
  },
});

export default InputText;

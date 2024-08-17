import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Theme from '../../theme/Theme';


export default function Buttons(props: any) {
  return (
    <>
      {props.disabled ? (
        <View
          style={[
            styles.Button,
            props.style,
            {backgroundColor: Theme.colors.disable},
          ]}>
          <Text style={[styles.ButtonText, props.lebalStyle]}>
            {props.title}
          </Text>
        </View>
      ) : (
        <TouchableOpacity
          style={[styles.Button, props.style]}
          onPress={() => props.onPress()}>
          <Text style={[styles.ButtonText, props.lebalStyle]}>
            {props.title}
          </Text>
        </TouchableOpacity>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  Button: {
    borderRadius: Theme.fontSize.size8,
    paddingVertical: Theme.fontSize.size10,
    paddingHorizontal: Theme.fontSize.size10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    alignSelf: 'center',
    backgroundColor: Theme.colors.AppColor,
  },
  ButtonText: {
    color: Theme.colors.white,
    fontSize: Theme.fontSize.size16,
    fontWeight: '600',
  },
});

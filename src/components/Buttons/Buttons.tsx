import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageSourcePropType,
  Image,
} from 'react-native';
import React from 'react';
import Theme from '../../theme/Theme';
import {useGlobal} from '../../context/GlobalContext';

interface Props {
  title: string;
  style?: any;
  lebalStyle?: any;
  disabled?: boolean;
  image?: ImageSourcePropType;
  onPress: () => void;
}

let theme = Theme();
export default function Buttons(props: Props) {
  return (
    <>
      {props.disabled ? (
        <View
          style={[
            styles.arriveButton,
            props.style,
            {backgroundColor: theme.colors.disabled},
          ]}>
          {props.image && <Image source={props.image} style={styles.img} />}
          <Text style={[styles.arriveButtonText, props.lebalStyle]}>
            {props.title}
          </Text>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.arriveButton}
          onPress={() => props.onPress()}>
          {props.image && <Image source={props.image} style={styles.img} />}
          <Text style={[styles.arriveButtonText, props.lebalStyle]}>
            {props.title}
          </Text>
        </TouchableOpacity>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  arriveButton: {
    borderRadius: theme.responsiveSize.size8,
    paddingVertical: theme.responsiveSize.size10,
    paddingHorizontal: theme.responsiveSize.size10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    alignSelf: 'center',
  },
  arriveButtonText: {
    color: theme.colors.white,
    fontSize: theme.responsiveSize.size16,
    fontWeight: '600',
    fontFamily: 'Gotham-Medium',
  },
  img: {
    width: theme.responsiveSize.size20,
    height: theme.responsiveSize.size20,
  },
});

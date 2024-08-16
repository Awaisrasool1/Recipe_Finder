import {Image, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import { Overlay } from 'react-native-elements';
import styles from './styles';
import LottieView from 'lottie-react-native';
import Theme from '../../theme/Theme';
import { useFocusEffect } from '@react-navigation/native';
let theme = Theme()
interface Props {
  isVisible: boolean;
  text?: string;
  setIsVisible: (a:boolean)=>void;
}
export default function SuccessPopup(props: Props) {
  useFocusEffect(
    React.useCallback(()=>{
      // setTimeout(() => {
      //   props.setIsVisible(false);
      // }, 2000);
    },[])
  )
  return (
      <Overlay fullScreen={false} overlayStyle={styles.overlay} isVisible={props.isVisible} onBackdropPress={()=>props.setIsVisible(false)} >
        <LottieView style={{height:100, width:100}} source={theme.lottie.TICK} autoPlay loop={false} />
        <Text style={styles.text}>{props.text}</Text>
      </Overlay>
  );
}


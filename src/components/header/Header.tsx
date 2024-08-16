import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Theme from '../../theme/Theme';
import {useNavigation} from '@react-navigation/native';
import {Message_Screen} from '../../utils/Constants';
let theme = Theme();
interface Props {
  title: string;
  isGoBack?: boolean;
  isLesson?: boolean;
  studentName?: string;
  isMessage?: boolean;
  lessonId?: string;
}
export default function Header(props: Props) {
  const nav: any = useNavigation();
  return (
    <View style={style.container}>
      {props.isGoBack ? (
        <View
          style={[
            style.notificationContainer,
            props.isLesson && {alignItems: 'flex-start'},
            props.isMessage && {
              justifyContent: 'space-between',
              alignItems: 'center',
            },
          ]}>
          <TouchableOpacity onPress={() => nav.goBack()}>
            <Image source={theme.icons.goBack} />
          </TouchableOpacity>
          <View style={style.lessonContainer}>
            <Text style={style.notificationText}>{props.title}</Text>
            {props.isLesson && (
              <Text style={style.lessonText}>
                Lesson with{' '}
                <Text style={[style.lessonText, {fontWeight: '700'}]}>
                  {props.studentName}
                </Text>
              </Text>
            )}
          </View>
          {props.isMessage && (
            <TouchableOpacity
              onPress={() =>
                nav.navigate(Message_Screen, {lessonId: props.lessonId})
              }>
              <Image source={theme.icons.messg_Icon} />
            </TouchableOpacity>
          )}
        </View>
      ) : (
        <View style={style.textContainer}>
          <Text style={style.mainText}>{props.title}</Text>
        </View>
      )}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: theme.colors.white,
    // height: theme.responsiveSize.size70,
    borderBottomWidth: 1,
    borderColor: theme.colors.inputBackground,
    padding: theme.responsiveSize.size20,
    paddingRight: 30,
  },
  textContainer: {
    justifyContent: 'flex-end',
    marginTop: theme.responsiveSize.size20,
  },
  mainText: {
    fontSize: theme.responsiveSize.size16,
    color: theme.colors.black,
    fontWeight: '600',
    fontFamily: 'Gotham-Medium',
  },
  notificationText: {
    fontSize: theme.responsiveSize.size16,
    color: theme.colors.black,
    fontWeight: '600',
    fontFamily: 'Gotham-Medium',
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: theme.responsiveSize.size20,
  },
  lessonContainer: {
    width: '90%',
    rowGap: theme.responsiveSize.size5,
    alignItems: 'center',
  },
  lessonText: {
    fontSize: theme.responsiveSize.size14,
    color: theme.colors.black,
    fontWeight: '400',
    fontFamily: 'Gotham-Medium',
  },
});

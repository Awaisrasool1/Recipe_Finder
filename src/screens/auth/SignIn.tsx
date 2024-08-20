import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import styles from './style';
import {isValidEmail} from '../../utils/Validations';
import {Buttons} from '../../components/Buttons';
import {InputText} from '../../components/inputText';
import Theme from '../../theme/Theme';
import {Constants} from '../../utils';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {saveUserID} from '../../utils/Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Loader} from '../../components/Loader';

const SignInScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [secure, setsecure] = useState(true);
  const [loading, setLoading] = useState(false);

  const checkValidation = () => {
    let isValid = true;
    setEmailError('');
    if (!isValidEmail(email)) {
      isValid = false;
      setEmailError('Please enter a valid email!');
    }
    return isValid;
  };

  const handleSignIn = async () => {
    try {
      setLoading(true);
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      const userDoc: any = await firestore()
        .collection('users')
        .doc(userCredential.user.uid)
        .get();
      if (userDoc.exists) {
        AsyncStorage.setItem('userID', userDoc._data.userId);
        saveUserID(userDoc._data.userId);
        setLoading(false);
        navigation.reset({
          index: 0,
          routes: [
            {
              name: Constants.bottom_tabs,
            },
          ],
        });
      }
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      let errorMessage = '';
      if (error.code === 'auth/user-not-found') {
        errorMessage = 'No user found with this email address.';
        ToastAndroid.show(errorMessage, ToastAndroid.LONG);
      } else if (error.code === 'auth/wrong-password') {
        errorMessage = 'Incorrect password.';
        ToastAndroid.show(errorMessage, ToastAndroid.LONG);
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'Invalid email address.';
        ToastAndroid.show(errorMessage, ToastAndroid.LONG);
      } else {
        errorMessage = 'An unknown error occurred. Please try again.';
        ToastAndroid.show(errorMessage, ToastAndroid.LONG);
      }
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
  };
  return (
    <ScrollView style={styles.container}>
      <Text
        style={[
          styles.text,
          {
            color: Theme.colors.AppColor,
            marginTop: Theme.fontSize.size20,
            marginBottom: Theme.fontSize.size2,
          },
        ]}>
        Welcome Back!
      </Text>
      <Text style={styles.text}>Login To Recipe Finder</Text>
      <Image style={styles.img} source={Theme.icons.login_Login} />
      <InputText
        style={styles.input}
        lebel={'Email'}
        onBlur={checkValidation}
        placeholder="Email"
        value={email}
        onChange={setEmail}
        keyboardType="email-address"
      />
      {emailError != '' && (
        <Text style={styles.errorTextStyle}>{emailError}</Text>
      )}
      <InputText
        style={styles.input}
        lebel={'Password'}
        placeholder="Password"
        onBlur={checkValidation}
        value={password}
        onChange={setPassword}
        secureTextEntry={secure}
        icon={
          <TouchableOpacity
            onPress={() => {
              setsecure(pre => !pre);
            }}>
            {secure ? (
              <Image source={Theme.icons.eye1} style={{tintColor: 'black'}} />
            ) : (
              <Image source={Theme.icons.eye2} style={{tintColor: 'black'}} />
            )}
          </TouchableOpacity>
        }
      />
      <View style={{marginTop: Theme.fontSize.size10}} />
      <Buttons
        title={'Login'}
        disabled={
          email != '' && password != '' && emailError == '' ? false : true
        }
        onPress={() => {
          if (checkValidation()) {
            handleSignIn();
          }
        }}
      />
      <Text
        style={styles.link}
        onPress={() => navigation.navigate(Constants.SignUp_Screen)}>
        Don't have an account? Sign Up
      </Text>
      <Loader isLoading={loading} />
    </ScrollView>
  );
};

export default SignInScreen;

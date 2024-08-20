import React, {useState} from 'react';
import {
  View,
  Text,
  ToastAndroid,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import firestore from '@react-native-firebase/firestore';
import {isValidEmail, isValidPassword} from '../../utils/Validations';
import {Buttons} from '../../components/Buttons';
import {Constants} from '../../utils';
import {InputText} from '../../components/inputText';
import Theme from '../../theme/Theme';
import {Loader} from '../../components/Loader';
import auth from '@react-native-firebase/auth';

const SignUp = ({navigation}: any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [conPasswordError, setConPasswordError] = useState('');
  const [secure, setsecure] = useState(true);
  const [secure1, setsecure1] = useState(true);

  const checkValidation = () => {
    let isValid = true;
    setEmailError('');
    setNameError('');
    setPasswordError('');
    setConPasswordError('');
    if (name == '') {
      setNameError('Please enter your name');
      isValid = false;
    } else if (!isValidEmail(email)) {
      isValid = false;
      setEmailError('Please enter a valid email!');
    } else if (!isValidPassword(password)) {
      setPasswordError(
        'Password must be 8 characters long containing at least 1 lowercase,1 uppercase, 1 number and 1 special character.',
      );
      isValid = false;
    } else if (password !== confirmPassword) {
      setConPasswordError('Passwords do not match');
      isValid = false;
    }
    return isValid;
  };

  const handleSignUp = async () => {
    setLoading(true);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (res: any) => {
        const res1 = await firestore()
          .collection('users')
          .doc(res.user.uid)
          .set({
            userId: res.user.uid,
            name: name,
            email: email,
            password: password,
          });
        setLoading(false);
        ToastAndroid.show('Account created!', ToastAndroid.SHORT);
        navigation.navigate(Constants.Login_Screen);
      })
      .catch(error => {
        setLoading(false);
        if (error.code === 'auth/email-already-in-use') {
          ToastAndroid.show(
            'That email address is already in use!',
            ToastAndroid.LONG,
          );
        }
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
      });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.flexRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Theme.icons.login_GoBack} />
        </TouchableOpacity>
        <Text style={styles.text}>Sign Up New Account </Text>
      </View>
      <Image style={styles.img} source={Theme.icons.login_Login} />
      <InputText
        style={styles.input}
        lebel={'Name'}
        onBlur={checkValidation}
        placeholder="First Name"
        value={name}
        onChange={setName}
      />
      {nameError != '' && (
        <Text style={styles.errorTextStyle}>{nameError}</Text>
      )}
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
      {passwordError != '' && (
        <Text style={styles.errorTextStyle}>{passwordError}</Text>
      )}
      <InputText
        style={styles.input}
        lebel={'Confirm Password'}
        onBlur={checkValidation}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={setConfirmPassword}
        secureTextEntry={secure1}
        icon={
          <TouchableOpacity
            onPress={() => {
              setsecure1(pre => !pre);
            }}>
            {secure1 ? (
              <Image source={Theme.icons.eye1} style={{tintColor: 'black'}} />
            ) : (
              <Image source={Theme.icons.eye2} style={{tintColor: 'black'}} />
            )}
          </TouchableOpacity>
        }
      />
      {conPasswordError != '' && (
        <Text style={styles.errorTextStyle}>{conPasswordError}</Text>
      )}
      <View style={{marginTop: Theme.fontSize.size10}} />
      <Buttons
        title={'Login'}
        disabled={
          name != '' &&
          email != '' &&
          password != '' &&
          confirmPassword != '' &&
          nameError == '' &&
          emailError == '' &&
          passwordError == '' &&
          conPasswordError == ''
            ? false
            : true
        }
        onPress={() => {
          if (checkValidation()) {
            handleSignUp();
          }
        }}
      />
      <Text
        style={styles.link}
        onPress={() => navigation.navigate(Constants.Login_Screen)}>
        Already have an account? Sign In
      </Text>
      <Loader isLoading={loading} />
    </ScrollView>
  );
};

export default SignUp;

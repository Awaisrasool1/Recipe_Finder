import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {getuserID} from '../../utils/Constants';
import Theme from '../../theme/Theme';
import {Buttons} from '../../components/Buttons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Constants} from '../../utils';
import {Loader} from '../../components/Loader';
import {useFocusEffect} from '@react-navigation/native';

export default function Profile({navigation}: any) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      const fetchUserData = async () => {
        setLoading(true);
        try {
          let userId = getuserID();
          const userDoc = await firestore()
            .collection('users')
            .doc(userId)
            .get();
          if (userDoc.exists) {
            const userData = userDoc.data();
            setName(userData?.name);
            setEmail(userData?.email);
          }
          setLoading(false);
        } catch (error) {
          setLoading(false);
          console.error('Error fetching user data: ', error);
        }
      };

      fetchUserData();
    }, []),
  );
  const doLogOut = async () => {
    AsyncStorage.clear();
    navigation.reset({
      index: 0,
      routes: [
        {
          name: Constants.Login_Screen,
        },
      ],
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Profile</Text>
      <View style={{rowGap: Theme.fontSize.size20}}>
        <View>
          <Text style={styles.lebel}>Name</Text>
          <View style={styles.box}>
            <Text>{name}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.lebel}>Email</Text>
          <View>
            <Text style={styles.box}>{email}</Text>
          </View>
        </View>
      </View>
      <View style={{marginTop: Theme.fontSize.size30}} />
      <Buttons
        title={'Logout'}
        onPress={() => {
          doLogOut();
        }}
      />
      <Loader isLoading={loading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: Theme.fontSize.size1,
    padding: Theme.fontSize.size20,
    backgroundColor: '#f7f7fb',
  },
  box: {
    width: '100%',
    padding: Theme.fontSize.size10,
    justifyContent: 'center',
    backgroundColor: Theme.colors.white,
    elevation: Theme.fontSize.size2,
    borderRadius: Theme.fontSize.size5,
  },
  headerTitle: {
    fontSize: Theme.fontSize.size14,
    fontWeight: '700',
    color: Theme.colors.black,
    marginBottom: Theme.fontSize.size40,
  },
  lebel: {
    fontSize: Theme.fontSize.size14,
    color: Theme.colors.black,
    fontWeight: '600',
    marginBottom: Theme.fontSize.size1,
    paddingLeft: Theme.fontSize.size5,
  },
});

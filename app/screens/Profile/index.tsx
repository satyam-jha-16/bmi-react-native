import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './styles';
import { FIREBASE_AUTH, FIRESTORE_DB } from '../../../FirebaseConfig';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import dayjs from 'dayjs';


const Profile = ({ navigation }: { navigation: any }) => {
  const [userEmail, setUserEmail] = useState<string | null>('');
  const [user, setUser] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [lastBMI, setLastBMI] = useState<string | null>(null);
  const [lastCalculated, setLastCalculated] = useState<string | null>(null);


  useEffect(() => {
    const getLastBMI = async () => {
      if (user) {
        try {
          const userDocRef = doc(FIRESTORE_DB, 'users', user.uid);
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            const data = userDoc.data();
            setLastBMI(data.lastBMI);
            setLastCalculated(data.lastCalculated ? dayjs(data.lastCalculated.toDate()).format('MMMM D, YYYY') : null);
          }
        } catch (e) {
          console.error('Error fetching last BMI from Firestore: ', e);
        }
      }
    };
    getLastBMI();
  }, [user]);


  useEffect(() => {
    const user = FIREBASE_AUTH.currentUser;
    if (user) {
      setUser(user);
      setUserEmail(user.email);
      setLoading(false);
    } else {
      navigation.replace('Login');
    }
  }, [user, navigation]);

  const handleSignOut = async () => {
    try {
      await FIREBASE_AUTH.signOut();
      navigation.replace('Login');
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };
  if (loading) {
    return <View style={styles.container}><Text>Loading...</Text></View>;
  }

  return (
    <ImageBackground
      source={require('../../../assets/background.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        
        <Text style={styles.title}>Welcome Home</Text>
        <Text style={styles.emailText}>{userEmail}</Text>
        {lastBMI && (
          <View style={styles.lastBMIContainer}>
            <Text style={styles.lastBMIText}>Your last calculated BMI: {lastBMI}</Text>
            {lastCalculated && (
              <Text style={styles.lastCalculatedText}>Calculated on: {lastCalculated}</Text>
            )}
          </View>
        )}
        <TouchableOpacity style={styles.button} onPress={handleSignOut}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>

    </ImageBackground>
  );
};

export default Profile;
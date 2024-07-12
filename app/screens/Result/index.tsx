import React, { useEffect } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './styles';
import BMIGraph from '../../components/graph';
import { FIREBASE_AUTH, FIRESTORE_DB } from '../../../FirebaseConfig';
import { doc, setDoc } from 'firebase/firestore';

export default function BMIResult({ route, navigation }) {
  const { bmi } = route.params;

  const user = FIREBASE_AUTH.currentUser;

  useEffect(() => {
    const saveBMI = async () => {
      if (user) {
        try {
          const userDocRef = doc(FIRESTORE_DB, 'users', user.uid);
          await setDoc(userDocRef, { lastBMI: bmi, lastCalculated: new Date() }, { merge: true });
        } catch (e) {
          console.error('Error saving BMI to Firestore: ', e);
        }
      }
    };
    saveBMI();
  }, [bmi, user]);

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal weight";
    if (bmi < 30) return "Overweight";
    return "Obese";
  };

  return (
    <ImageBackground source={require('../../../assets/background.jpg')} style={styles.backgroundImage}>
      <View style={styles.glassContainer}>
        <Text style={styles.title}>Your BMI Result</Text>
        <Text style={styles.resultText}>Your BMI: {bmi}</Text>
        <Text style={styles.categoryText}>Category: {getBMICategory(parseFloat(bmi))}</Text>
        <BMIGraph bmi={parseFloat(bmi)} />
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Calculate Again</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

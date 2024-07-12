import { View, Text, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles';
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import { FIREBASE_AUTH, FIRESTORE_DB } from '../../../FirebaseConfig';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export default function Result({ navigation }) {
    const [birthdate, setBirthdate] = useState<any>(dayjs());
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [lastBMI, setLastBMI] = useState<string | null>(null);
    const [lastCalculated, setLastCalculated] = useState<string | null>(null);
    const user = FIREBASE_AUTH.currentUser;

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


    const calculateBMI = () => {
        if (!weight || !height) return alert('Please enter weight and height');
        const heightInMeters = parseFloat(height) / 100;
        const bmi = parseFloat(weight) / (heightInMeters * heightInMeters);
        navigation.navigate('Result', { bmi: bmi.toFixed(2) });
    };
    const toggleDatePicker = () => {
        setShowDatePicker(!showDatePicker);
    };
    const handleDateChange = (params) => {
        setBirthdate(params.date);
        setShowDatePicker(false); // Optionally close the picker after selection
    };

    return (
        <ImageBackground source={require('../../../assets/background.jpg')} style={styles.backgroundImage}>
            <View style={styles.glassContainer}>
                <Text style={styles.title}>BMI Tracker</Text>
                {/* <DateTimePicker
        mode="single"
        date={birthdate}
        onChange={(params) => setBirthdate(params.date)}
      /> */}

                {lastBMI && (
                    <View style={styles.lastBMIContainer}>
                        <Text style={styles.lastBMIText}>Your last calculated BMI: {lastBMI}</Text>
                        {lastCalculated && (
                            <Text style={styles.lastCalculatedText}>Calculated on: {lastCalculated}</Text>
                        )}
                    </View>
                )}

                <TouchableOpacity style={styles.specialbutton} onPress={toggleDatePicker}>
                    <Text style={styles.dateText}>
                        {showDatePicker ? 'Hide Date Picker' : `Selected Date: ${dayjs(birthdate).format("MMMM D, YYYY")}`}
                    </Text>
                </TouchableOpacity>

                {showDatePicker && (
                    <DateTimePicker
                        mode="single"
                        date={birthdate}
                        onChange={handleDateChange}
                    />
                )}

                <Text style={styles.dateText}>

                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your weight (kg)"
                    value={weight}
                    onChangeText={setWeight}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter your height (cm)"
                    value={height}
                    onChangeText={setHeight}
                    keyboardType="numeric"
                />
                <TouchableOpacity style={styles.button} onPress={calculateBMI}>
                    <Text style={styles.buttonText}>Calculate BMI</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Profile') }}>
                    <Text style={styles.buttonText}>view profile</Text>
                </TouchableOpacity>

            </View>

        </ImageBackground>
    );
}
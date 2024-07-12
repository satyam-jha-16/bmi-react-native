import React from 'react';
import { ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FIREBASE_AUTH } from '../../../FirebaseConfig';
import { StyleSheet } from 'react-native';
import { useState } from 'react';
import styles from './styles';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Register = ({navigation} : {navigation : any}) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;
  
  const handleSignUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      alert("check your mail!!");
      navigation.replace('Home');
    } catch (error) {
      console.log(error);
      alert('Registration failed')
    } finally {
      setLoading(false);
    }
  };
    

  return (
    <ImageBackground
    source={require('../../../assets/levi3.jpg')}
    style={styles.backgroundImage}
  >
    <View style={styles.container}>
      <View style={styles.glassmorphicContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Hello There</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#ddd"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize='none'
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#ddd"
            value={password}
            onChangeText={setPassword}
            secureTextEntry = {true}
          />
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Register me</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.linkText}>Already have an account?  
              <Text style={{textDecorationLine : 'underline'}}> Login</Text></Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  </ImageBackground>
  );

}

export default Register;


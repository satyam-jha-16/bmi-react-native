import React from 'react';
import { ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FIREBASE_AUTH } from '../../../FirebaseConfig';
import { StyleSheet } from 'react-native';
import { useState } from 'react';
import styles from './styles';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = ({navigation} : {navigation : any}) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;
  
  const handleSignIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      navigation.replace('Home');
    } catch (error) {
      console.log(error);
      alert('SignIn failed')
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
          <Text style={styles.title}>Welcome Back</Text>
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
          <TouchableOpacity style={styles.button} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.linkText}>Don't have an account?  
              <Text style={{textDecorationLine : 'underline'}}> Register</Text></Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  </ImageBackground>
  );

}

export default Login;


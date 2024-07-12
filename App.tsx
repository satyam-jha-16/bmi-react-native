import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './app/screens/Login';
import Register from './app/screens/Registration';
import Home from './app/screens/Home';
import React, { useState } from 'react';
import { FIREBASE_AUTH } from './FirebaseConfig';
import Result from './app/screens/Result';
import Profile from './app/screens/Profile';


const Stack = createNativeStackNavigator();
export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<any>(null);

  React.useEffect(() => {
    const unsubscribe = FIREBASE_AUTH.onAuthStateChanged((user) => {
      setUser(user);
      if (initializing) setInitializing(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  if (initializing) return null;
  return (
  <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' >
        <Stack.Screen name='Login' component={Login} options={{headerShown : false}} />
        <Stack.Screen name = 'Register' component={Register} options={{headerShown : false}} />
        <Stack.Screen name = 'Home' component={Home} options={{headerShown : false}} />
        <Stack.Screen name = 'Result' component={Result} options={{headerShown : false}} />
        <Stack.Screen name = 'Profile' component={Profile} options={{headerShown : false}} />
      </Stack.Navigator>

    </NavigationContainer>

);
}


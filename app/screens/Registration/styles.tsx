import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    glassmorphicContainer: {
      width: width * 0.85,
      padding: 20,
      borderRadius: 20,
      backgroundColor: 'rgba(255, 255, 255, 0.06)',
      borderColor: 'rgba(255, 255, 255, 0.7)',
      borderWidth: 1,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.9,
      shadowRadius: 10,
      elevation: 10,
    },
    formContainer: {
      alignItems: 'center',
    },
    title: {
      marginTop: 10,
      fontSize: 30,
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 20,
    },
    input: {
      width: '100%',
      height: 50,
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      borderRadius: 10,
      paddingHorizontal: 15,
      fontSize: 16,
      color: '#fff',
      marginBottom: 15,
    },
    button: {
      width: '100%',
      height: 50,
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
    },
    linkText : {
      color: '#fff',
      marginTop: 30,
      fontSize: 16,
      fontWeight: '400',
      
    }
  });

  export default styles;
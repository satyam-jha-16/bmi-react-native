import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
      },
      dateText: {
        fontSize: 18,
        marginVertical: 10,
        color: '#fff', // Adjust color as needed
    },
    specialbutton : {
      width: '100%',
      height: 50,
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
    },
      glassContainer: {
        width: '90%',
        padding: 20,
        borderRadius: 15,
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
        overflow: 'hidden',
      },
      title: {
        fontSize: 30,
        marginBottom: 20,
        color: 'white',
        textAlign: 'center',
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
        backgroundColor: '#1E90FF',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
      },
      lastBMIContainer: {
        marginBottom: 20,
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 10,
    },
    lastBMIText: {
        fontSize: 19,
        color: '#000',
        fontWeight: 'semibold',
    },
    lastCalculatedText: {
        fontSize: 14,
        color: '#000',
        marginTop: 10,
    },
  });
export default styles;
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
      },
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
      },
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      glassEffect: {
        width: '80%',
        padding: 20,
        borderRadius: 15,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 20,
        elevation: 20,
      },
      title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
        textAlign: 'center',
      },
      emailText: {
        fontSize: 18,
        color: '#fff',
        marginBottom: 20,
        textAlign: 'center',
      },
      button: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.5)',
      },
      buttonText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
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
    lastBMIContainer: {
      marginBottom: 20,
      padding: 10,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: 10,
  },
});

export default styles;
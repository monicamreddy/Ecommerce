import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    formContainer: {
      padding: width * 0.04, 
    },
    label: {
      fontSize: width * 0.04, 
      fontWeight: '600',
      marginBottom: height * 0.01, 
      color: '#333',
    },
    input: {
      backgroundColor: '#f9f9f9',
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 8,
      padding: width * 0.04, 
      marginBottom: height * 0.02, 
      fontSize: width * 0.04, 
    },
    textArea: {
      height: height * 0.15, 
      textAlignVertical: 'top',
    },
    button: {
      backgroundColor: '#0066cc',
      borderRadius: 8,
      paddingVertical: height * 0.02, 
      paddingHorizontal: width * 0.1, 
      alignItems: 'center',
      marginTop: height * 0.02, 
    },
    buttonText: {
      color: '#fff',
      fontSize: width * 0.045, 
      fontWeight: '600',
    },
});

export default styles;
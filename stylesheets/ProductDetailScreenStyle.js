import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    centered: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: '100%',
      height: height * 0.4, 
      backgroundColor: '#f9f9f9',
    },
    detailsContainer: {
      padding: width * 0.04, 
    },
    title: {
      fontSize: width * 0.055, 
      fontWeight: 'bold',
      marginBottom: height * 0.01, 
    },
    price: {
      fontSize: width * 0.05, 
      fontWeight: '700',
      color: '#0066cc',
      marginBottom: height * 0.015, 
    },
    categoryContainer: {
      backgroundColor: '#f0f0f0',
      paddingVertical: height * 0.005, 
      paddingHorizontal: width * 0.03, 
      borderRadius: width * 0.04, 
      alignSelf: 'flex-start',
      marginBottom: height * 0.02, 
    },
    category: {
      fontSize: width * 0.035, 
      color: '#666',
      textTransform: 'capitalize',
    },
    descriptionTitle: {
      fontSize: width * 0.045, 
      fontWeight: '600',
      marginBottom: height * 0.01, 
    },
    description: {
      fontSize: width * 0.04, 
      lineHeight: height * 0.03, 
      color: '#333',
      marginBottom: height * 0.02, 
    },
    ratingContainer: {
      marginTop: height * 0.01, 
      padding: width * 0.04, 
      backgroundColor: '#fff9e6',
      borderRadius: width * 0.02, 
      borderWidth: 1,
      borderColor: '#ffe0b2',
    },
    ratingText: {
      fontSize: width * 0.04, 
      color: '#ff9800',
    },
});

export default styles;
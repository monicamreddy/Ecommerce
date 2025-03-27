import { StyleSheet } from "react-native";

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
      height: 300,
      backgroundColor: '#f9f9f9',
    },
    detailsContainer: {
      padding: 16,
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    price: {
      fontSize: 20,
      fontWeight: '700',
      color: '#0066cc',
      marginBottom: 12,
    },
    categoryContainer: {
      backgroundColor: '#f0f0f0',
      paddingVertical: 4,
      paddingHorizontal: 12,
      borderRadius: 16,
      alignSelf: 'flex-start',
      marginBottom: 16,
    },
    category: {
      fontSize: 14,
      color: '#666',
      textTransform: 'capitalize',
    },
    descriptionTitle: {
      fontSize: 18,
      fontWeight: '600',
      marginBottom: 8,
    },
    description: {
      fontSize: 16,
      lineHeight: 24,
      color: '#333',
      marginBottom: 16,
    },
    ratingContainer: {
      marginTop: 8,
      padding: 12,
      backgroundColor: '#fff9e6',
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#ffe0b2',
    },
    ratingText: {
      fontSize: 16,
      color: '#ff9800',
    },
  });
  
export default styles;
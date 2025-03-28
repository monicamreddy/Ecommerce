import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f8f8f8',
    },
    loader: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    productList: {
      padding: width * 0.04, 
    },
    productItem: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: width * 0.03, 
      marginBottom: height * 0.02, 
      elevation: 2,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
    },
    productImage: {
      width: width * 0.2, 
      height: width * 0.2, 
      borderRadius: 8,
      backgroundColor: '#f9f9f9',
    },
    productInfo: {
      flex: 1,
      marginLeft: width * 0.03, 
      justifyContent: 'center',
    },
    productTitle: {
      fontSize: width * 0.04, 
      fontWeight: '600',
      marginBottom: height * 0.005, 
    },
    productPrice: {
      fontSize: width * 0.038, 
      fontWeight: '700',
      color: '#0066cc',
      marginBottom: height * 0.005, 
    },
    productCategory: {
      fontSize: width * 0.03, 
      color: '#666',
      textTransform: 'capitalize',
    },
    actionButtons: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    actionButton: {
      width: width * 0.2, 
      paddingVertical: height * 0.01, 
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: height * 0.01, 
    },
    editButton: {
      backgroundColor: '#4caf50',
    },
    deleteButton: {
      backgroundColor: '#f44336',
    },
    buttonText: {
      color: '#fff',
      fontSize: width * 0.035, 
      fontWeight: 'bold',
      textAlign: 'center',
    },
    addButton: {
      position: 'absolute',
      bottom: height * 0.03, 
      right: width * 0.05, 
      width: width * 0.15, 
      height: width * 0.15, 
      borderRadius: (width * 0.15) / 2, 
      backgroundColor: '#0066cc',
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
});

export default styles;
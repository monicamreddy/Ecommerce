import { StyleSheet } from "react-native";

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
      padding: 16,
    },
    productItem: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 12,
      marginBottom: 16,
      elevation: 2,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
    },
    productImage: {
      width: 80,
      height: 80,
      borderRadius: 8,
      backgroundColor: '#f9f9f9',
    },
    productInfo: {
      flex: 1,
      marginLeft: 12,
      justifyContent: 'center',
    },
    productTitle: {
      fontSize: 16,
      fontWeight: '600',
      marginBottom: 4,
    },
    productPrice: {
      fontSize: 15,
      fontWeight: '700',
      color: '#0066cc',
      marginBottom: 4,
    },
    productCategory: {
      fontSize: 12,
      color: '#666',
      textTransform: 'capitalize',
    },
    actionButtons: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    actionButton: {
      width: 30,
      height: 30,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 8,
    },
    editButton: {
      backgroundColor: '#4caf50',
    },
    deleteButton: {
      backgroundColor: '#f44336',
    },
    addButton: {
      position: 'absolute',
      bottom: 24,
      right: 24,
      width: 56,
      height: 56,
      borderRadius: 28,
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

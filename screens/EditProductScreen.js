import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ScrollView,
  Alert,
  ActivityIndicator
} from 'react-native';
import styles from '../stylesheets/EditProductScreenStyle';

const EditProductScreen = ({ route, navigation }) => {
  const { product } = route.params;
  
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price.toString());
  const [description, setDescription] = useState(product.description);
  const [category, setCategory] = useState(product.category);
  const [image, setImage] = useState(product.image);
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    if (!title.trim()) {
      Alert.alert('Error', 'Please enter a product title');
      return false;
    }
    if (!price.trim() || isNaN(parseFloat(price))) {
      Alert.alert('Error', 'Please enter a valid price');
      return false;
    }
    if (!description.trim()) {
      Alert.alert('Error', 'Please enter a product description');
      return false;
    }
    if (!category.trim()) {
      Alert.alert('Error', 'Please enter a product category');
      return false;
    }
    return true;
  };

  const updateProduct = async () => {
    if (!validateForm()) return;

    try {
      setLoading(true);
      
      // Create the updated product object according to the API requirements
      const updatedProduct = {
        title,
        price: parseFloat(price),
        description,
        category,
        image
      };
      
      console.log('Updating product ID:', product.id);
      console.log('Sending updated data:', JSON.stringify(updatedProduct));
      
      const response = await fetch(`https://fakestoreapi.com/products/${product.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProduct),
      });

      console.log('Response status:', response.status);
      
      // The Fake Store API always returns a 200 status for successful operations
      const data = await response.json();
      console.log('Response data:', JSON.stringify(data));
      
      setLoading(false);

      // The API returns the updated product
      if (data) {
        Alert.alert(
          'Success',
          'Product updated successfully. Note: This change will not be saved permanently.',
          [{ text: 'OK', onPress: () => navigation.goBack() }]
        );
      } else {
        Alert.alert('Error', 'Failed to update product: No data returned');
      }
    } catch (error) {
      console.error('Error updating product:', error);
      Alert.alert('Error', `Failed to update product: ${error.message}`);
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholder="Enter product title"
        />

        <Text style={styles.label}>Price</Text>
        <TextInput
          style={styles.input}
          value={price}
          onChangeText={setPrice}
          placeholder="Enter product price"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={description}
          onChangeText={setDescription}
          placeholder="Enter product description"
          multiline
          numberOfLines={4}
        />

        <Text style={styles.label}>Category</Text>
        <TextInput
          style={styles.input}
          value={category}
          onChangeText={setCategory}
          placeholder="Enter product category"
        />

        <Text style={styles.label}>Image URL</Text>
        <TextInput
          style={styles.input}
          value={image}
          onChangeText={setImage}
          placeholder="Enter image URL"
        />

        <TouchableOpacity 
          style={styles.button}
          onPress={updateProduct}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Update Product</Text>
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default EditProductScreen;
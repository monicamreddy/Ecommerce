import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView,
  Alert,
  ActivityIndicator
} from 'react-native';
import styles from '../stylesheets/AddProductScreenStyle';

const AddProductScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg');
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

  const addProduct = async () => {
    if (!validateForm()) return;

    try {
      setLoading(true);
      const response = await fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          price: parseFloat(price),
          description,
          category,
          image,
        }),
      });

      const data = await response.json();
      setLoading(false);

      if (data) {
        Alert.alert(
          'Success',
          'Product added successfully',
          [{ text: 'OK', onPress: () => navigation.goBack() }]
        );
      } else {
        Alert.alert('Error', 'Failed to add product');
      }
    } catch (error) {
      console.error('Error adding product:', error);
      Alert.alert('Error', 'Failed to add product');
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
          onPress={addProduct}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Add Product</Text>
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AddProductScreen;
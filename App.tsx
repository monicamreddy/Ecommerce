import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';

import ProductsScreen from './screens/ProductsScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import AddProductScreen from './screens/AddProductScreen';
import EditProductScreen from './screens/EditProductScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator initialRouteName="Products">
        <Stack.Screen 
          name="Products" 
          component={ProductsScreen} 
          options={{ title: 'Shop Products' }}
        />
        <Stack.Screen 
          name="ProductDetail" 
          component={ProductDetailScreen} 
          options={{ title: 'Product Details' }}
        />
        <Stack.Screen 
          name="AddProduct" 
          component={AddProductScreen} 
          options={{ title: 'Add New Product' }}
        />
        <Stack.Screen 
          name="EditProduct" 
          component={EditProductScreen} 
          options={{ title: 'Edit Product' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
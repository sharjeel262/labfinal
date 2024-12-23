import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useAppContext } from '../../components/AppContext';

export default function SellerDashboard() {
  const { addProduct } = useAppContext(); // Access the addProduct function from context
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');

  const handleAddProduct = () => {
    if (!name || !description || !price || !category || !image) {
      Alert.alert('Error', 'Please fill out all fields.');
      return;
    }

    const newProduct = {
      id: Date.now(), // Generate unique ID
      name,
      description,
      price: parseFloat(price),
      category,
      image,
    };

    addProduct(newProduct); // Call addProduct to add the product
    Alert.alert('Success', 'Product added successfully!');
    setName('');
    setDescription('');
    setPrice('');
    setCategory('');
    setImage('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add a New Product</Text>
      <TextInput
        style={styles.input}
        placeholder="Product Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
      />
      <TextInput
        style={styles.input}
        placeholder="Image URL"
        value={image}
        onChangeText={setImage}
      />
      <Button title="Add Product" onPress={handleAddProduct} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#e6f7ff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
});

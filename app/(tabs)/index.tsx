import React, { useState } from 'react';
import { FlatList, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image, View, Text } from 'react-native';

export default function HomeScreen() {
    // Local state for products, categories, and search
    const [products] = useState([
        { id: 1, name: 'Laptop', description: 'High-performance laptop', price: 1200, category: 'Electronics', image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Smartphone', description: 'Latest model smartphone', price: 800, category: 'Electronics', image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Running Shoes', description: 'Comfortable running shoes', price: 100, category: 'Fashion', image: 'https://via.placeholder.com/150' },
        { id: 4, name: 'Backpack', description: 'Durable travel backpack', price: 50, category: 'Accessories', image: 'https://via.placeholder.com/150' },
        { id: 5, name: 'Smartwatch', description: 'Feature-packed smartwatch', price: 300, category: 'Electronics', image: 'https://via.placeholder.com/150' },
        { id: 6, name: 'Jacket', description: 'Warm winter jacket', price: 200, category: 'Fashion', image: 'https://via.placeholder.com/150' },
        { id: 7, name: 'Headphones', description: 'Noise-cancelling headphones', price: 150, category: 'Electronics', image: 'https://via.placeholder.com/150' },
    ]);

    const [categories] = useState(['Electronics', 'Fashion', 'Accessories', 'Home Appliances']);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    // Filtered products based on search and category
    const filteredProducts = products.filter(
        (product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
            (selectedCategory ? product.category === selectedCategory : true)
    );

    return (
        <ScrollView style={styles.container}>
            {/* Title */}
            <Text style={styles.title}>Welcome to the Marketplace</Text>

            {/* Search Bar */}
            <TextInput
                style={styles.searchBar}
                placeholder="Search products..."
                placeholderTextColor="#555"
                value={searchQuery}
                onChangeText={(text) => setSearchQuery(text)}
            />

            {/* Categories */}
            <View style={styles.categories}>
                <Text style={styles.sectionTitle}>Categories</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {categories.map((category) => (
                        <TouchableOpacity
                            key={category}
                            style={[
                                styles.categoryButton,
                                selectedCategory === category && styles.categoryButtonSelected,
                            ]}
                            onPress={() => setSelectedCategory(selectedCategory === category ? '' : category)}
                        >
                            <Text
                                style={[
                                    styles.categoryText,
                                    selectedCategory === category && styles.categoryTextSelected,
                                ]}
                            >
                                {category}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            {/* All Products */}
            <View>
                <Text style={styles.sectionTitle}>All Products</Text>
                <FlatList
                    data={filteredProducts}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.productCard}>
                            <Image source={{ uri: item.image }} style={styles.productImage} />
                            <View style={styles.productDetails}>
                                <Text style={styles.productName}>{item.name}</Text>
                                <Text style={styles.productDescription}>{item.description}</Text>
                                <Text style={styles.productPrice}>${item.price}</Text>
                            </View>
                        </View>
                    )}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e6f7ff', // Light blue background for simplicity
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000', // Black text for readability
        marginBottom: 16,
    },
    searchBar: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 12,
        backgroundColor: '#fff', // White background for contrast
        color: '#000',
        marginBottom: 20,
    },
    categories: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000', // Black text for clarity
        marginBottom: 12,
    },
    categoryButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#fff', // White background for buttons
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 20,
        marginRight: 12,
    },
    categoryButtonSelected: {
        backgroundColor: '#007bff', // Light blue for selected category
        borderColor: '#007bff',
    },
    categoryText: {
        fontSize: 16,
        color: '#000', // Black text for unselected categories
    },
    categoryTextSelected: {
        color: '#fff', // White text for selected categories
    },
    productCard: {
        flexDirection: 'row',
        padding: 16,
        backgroundColor: '#fff', // White cards for product items
        borderRadius: 8,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    productDetails: {
        marginLeft: 12,
        flex: 1,
    },
    productImage: {
        width: 80,
        height: 80,
        borderRadius: 8,
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000', // Black text for product name
    },
    productDescription: {
        fontSize: 14,
        color: '#555', // Subtle grey for product description
        marginBottom: 8,
    },
    productPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#007bff', // Light blue for product price
    },
});

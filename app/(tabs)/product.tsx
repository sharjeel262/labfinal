import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Image, FlatList, TextInput, Alert } from 'react-native';

export default function ProductScreen() {
    const product = {
        id: 1,
        name: 'Product 1',
        description: 'Description of Product 1',
        price: 100,
        images: [
            'https://via.placeholder.com/300',
            'https://via.placeholder.com/300/0000FF',
            'https://via.placeholder.com/300/FF0000',
        ],
        specifications: {
            weight: '1.5 kg',
            dimensions: '25 x 15 x 10 cm',
            color: 'Black',
            brand: 'BrandName',
        },
        reviews: [
            { id: 1, username: 'John Doe', rating: 4, comment: 'Great product!' },
            { id: 2, username: 'Jane Smith', rating: 5, comment: 'Exceeded my expectations!' },
        ],
    };

    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        Alert.alert('Success', `${product.name} added to cart!`);
        console.log(`Product added to cart: ${product.name}, Quantity: ${quantity}`);
    };

    return (
        <ScrollView style={styles.container}>
            {/* Product Images */}
            <FlatList
                data={product.images}
                horizontal
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Image source={{ uri: item }} style={styles.productImage} />
                )}
                showsHorizontalScrollIndicator={false}
                style={styles.imageCarousel}
            />

            {/* Product Name and Description */}
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{product.name}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <Text style={styles.price}>${product.price}</Text>

                {/* Quantity Selector */}
                <View style={styles.quantityContainer}>
                    <Text style={styles.quantityLabel}>Quantity:</Text>
                    <TextInput
                        style={styles.quantityInput}
                        keyboardType="numeric"
                        value={quantity.toString()}
                        onChangeText={(value) => setQuantity(Math.max(1, parseInt(value) || 1))}
                    />
                </View>

                <Button title="Add to Cart" onPress={handleAddToCart} />
            </View>

            {/* Specifications */}
            <View style={styles.specificationsContainer}>
                <Text style={styles.sectionTitle}>Specifications</Text>
                {Object.entries(product.specifications).map(([key, value]) => (
                    <Text key={key} style={styles.specification}>
                        <Text style={styles.specKey}>{key}:</Text> {value}
                    </Text>
                ))}
            </View>

            {/* Reviews */}
            <View style={styles.reviewsContainer}>
                <Text style={styles.sectionTitle}>User Reviews</Text>
                {product.reviews.map((review) => (
                    <View key={review.id} style={styles.review}>
                        <Text style={styles.reviewUsername}>{review.username}</Text>
                        <Text style={styles.reviewComment}>"{review.comment}"</Text>
                        <Text style={styles.reviewRating}>Rating: {review.rating} / 5</Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
    imageCarousel: {
        marginBottom: 20,
    },
    productImage: {
        width: 300,
        height: 300,
        resizeMode: 'cover',
        marginHorizontal: 10,
        borderRadius: 8,
    },
    detailsContainer: {
        padding: 16,
        backgroundColor: '#fff',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        marginBottom: 10,
    },
    price: {
        fontSize: 20,
        color: 'green',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    quantityLabel: {
        fontSize: 16,
        marginRight: 10,
    },
    quantityInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        paddingHorizontal: 8,
        width: 50,
        textAlign: 'center',
    },
    specificationsContainer: {
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 12,
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    specification: {
        fontSize: 16,
        marginBottom: 8,
    },
    specKey: {
        fontWeight: 'bold',
    },
    reviewsContainer: {
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 12,
        marginBottom: 20,
    },
    review: {
        marginBottom: 16,
    },
    reviewUsername: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    reviewComment: {
        fontSize: 14,
        fontStyle: 'italic',
        marginBottom: 4,
    },
    reviewRating: {
        fontSize: 14,
        color: '#007bff',
    },
});

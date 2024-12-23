import React, { useState } from 'react';
import { FlatList, StyleSheet, Button } from 'react-native';
import { View, Text } from '../../components/Themed';

export default function CartScreen() {
    // Local state for cart
    const [cart] = useState([
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 },
    ]);

    const handleCheckout = () => {
        console.log('Checkout completed!');
        alert('Checkout successful!');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your Cart</Text>
            <FlatList
                data={cart}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.cartItem}>
                        <Text>{item.name}</Text>
                        <Text>${item.price}</Text>
                    </View>
                )}
            />
            <Button title="Checkout" onPress={handleCheckout} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    cartItem: {
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

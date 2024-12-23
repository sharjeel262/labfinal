import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BuyerDashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Buyer Dashboard</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6f7ff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
});

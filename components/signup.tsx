// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
// import { supabase } from '../components/supabaseClient';
// import { useRouter } from 'expo-router';

// export default function SignupScreen() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('buyer'); // Default role is buyer
//   const router = useRouter();

//   const handleSignup = async () => {
//     try {
//       const { data, error } = await supabase.auth.signUp({
//         email,
//         password,
//         options: {
//           data: { role }, // Save role in user metadata
//         },
//       });

//       if (error) {
//         Alert.alert('Signup Failed', error.message);
//         return;
//       }

//       Alert.alert('Signup Successful', 'Please login to continue.');
//       router.push('//login');
//     } catch (err) {
//       console.error('Error signing up:', err);
//       Alert.alert('Error', 'Unable to sign up.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Sign Up</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         autoCapitalize="none"
//         keyboardType="email-address"
//         onChangeText={setEmail}
//         value={email}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         secureTextEntry
//         onChangeText={setPassword}
//         value={password}
//       />
//       <Text style={styles.label}>Role</Text>
//       <View style={styles.roleContainer}>
//         <TouchableOpacity
//           onPress={() => setRole('buyer')}
//           style={[styles.roleButton, role === 'buyer' && styles.roleSelected]}
//         >
//           <Text style={styles.roleText}>Buyer</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           onPress={() => setRole('seller')}
//           style={[styles.roleButton, role === 'seller' && styles.roleSelected]}
//         >
//           <Text style={styles.roleText}>Seller</Text>
//         </TouchableOpacity>
//       </View>
//       <TouchableOpacity onPress={handleSignup} style={styles.button}>
//         <Text style={styles.buttonText}>Sign Up</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => router.push('//login')}>
//         <Text style={styles.link}>Already have an account? Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   // Add your styles here
// });

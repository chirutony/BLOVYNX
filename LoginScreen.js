import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const KidInHelicopter = () => {
  return (
    <View style={styles.kidContainer}>
      {/* Replace this with your custom component */}
      <Image source={{ uri: 'https://example.com/kid-helicopter.png' }} style={styles.image} />
    </View>
  );
};

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      {/* Kid in Helicopter Component */}
      <KidInHelicopter />

      <Text style={styles.title}>Welcome to BOLVYNX</Text>

      {/* Email and Password Inputs */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
      />

      {/* Login Buttons */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continue with Mobile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
    fontSize: 16,
  },
  button: {
    width: '100%',
    backgroundColor: '#6200ee',
    paddingVertical: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  kidContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default LoginScreen;
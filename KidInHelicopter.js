import React from 'react';
import { View, StyleSheet } from 'react-native';

const KidInHelicopter = () => {
  return (
    <View style={styles.container}>
      <View style={styles.helicopterContainer}>
        {/* Top Rotor */}
        <View style={styles.topRotor}></View>

        {/* Helicopter Body */}
        <View style={styles.helicopterBody}>
          {/* Window with Kid */}
          <View style={styles.window}>
            <View style={styles.kid}>
              <View style={styles.eyeLeft}></View>
              <View style={styles.eyeRight}></View>
              <View style={styles.mouth}></View>
            </View>
          </View>
        </View>

        {/* Tail Rotor */}
        <View style={styles.tailRotor}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9F8FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  helicopterContainer: {
    position: 'relative',
    width: 200,
    alignItems: 'center',
  },
  topRotor: {
    width: 100,
    height: 10,
    backgroundColor: '#555',
    borderRadius: 5,
    position: 'absolute',
    top: -20,
    zIndex: 10,
  },
  helicopterBody: {
    width: 150,
    height: 80,
    backgroundColor: '#FFA500',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  window: {
    width: 50,
    height: 50,
    backgroundColor: '#87CEEB',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#333',
  },
  kid: {
    width: 40,
    height: 40,
    backgroundColor: '#FDD7B0',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  eyeLeft: {
    width: 5,
    height: 5,
    backgroundColor: '#000',
    borderRadius: 2.5,
    position: 'absolute',
    top: 12,
    left: 10,
  },
  eyeRight: {
    width: 5,
    height: 5,
    backgroundColor: '#000',
    borderRadius: 2.5,
    position: 'absolute',
    top: 12,
    right: 10,
  },
  mouth: {
    width: 10,
    height: 5,
    backgroundColor: '#000',
    borderRadius: 5,
    position: 'absolute',
    bottom: 10,
  },
  tailRotor: {
    width: 50,
    height: 10,
    backgroundColor: '#555',
    borderRadius: 5,
    position: 'absolute',
    right: -25,
    top: 20,
  },
});

export default KidInHelicopter;
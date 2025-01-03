import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

const AgeSelectionPage = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    '13 to 17 years',
    '18 to 24 years',
    '25 to 34 years',
    '35 to 44 years',
    '45 to 54 years',
    '55 to 64 years',
    '65+',
  ];

  const handleOptionPress = (index) => {
    setSelectedOption(index);
  };

  return (
    <View style={styles.container}>
      {/* Replace this View with your helicopter component */}
      <View style={styles.helicopter}>
        <Text>Helicopter Component</Text>
      </View>

      <Text style={styles.question}>How old are you?</Text>

      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleOptionPress(index)}
          style={[
            styles.button,
            selectedOption === index && styles.selectedButton, // Apply blue styling when selected
          ]}
        >
          <Text
            style={[
              styles.buttonText,
              selectedOption === index && styles.selectedButtonText, // Change text color when selected
            ]}
          >
            {option}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  helicopter: {
    marginBottom: 10,
    alignItems: 'center',
  },
  question: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#f1f1f1',
    borderRadius: 12,
    paddingVertical: 12,
    width: width * 0.9,
    marginBottom: 15,
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: { width: 2, height: 4 }, // Offset for shadow
    shadowOpacity: 0.3, // Opacity of shadow
    shadowRadius: 4, // Spread of shadow
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease', // Smooth transition (applies to supported platforms)
  },
  selectedButton: {
    backgroundColor: '#4169E1', // Royal Blue when selected
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
  },
  selectedButtonText: {
    color: '#fff', // White text when selected
  },
});

export default AgeSelectionPage;
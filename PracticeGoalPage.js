import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

const PracticeGoalPage = () => { // Updated page name
  const options = [
    { text: '10 minutes', color: '#FFD700', bars: 1 }, // Yellow with 1 bar
    { text: '15 minutes', color: '#FF00FF', bars: 2 }, // Purple with 2 bars
    { text: '20 minutes', color: '#00FF00', bars: 3 }, // Green with 3 bars
    { text: '30 minutes', color: '#0000FF', bars: 4 }, // Blue with 4 bars
  ];

  return (
    <View style={styles.container}>
      {/* Replace this View with your helicopter component */}
      <View style={styles.helicopter}>
        <Text>Helicopter Component</Text>
      </View>

      <Text style={styles.question}>What is your daily practice goal?</Text>

      {options.map((option, index) => (
        <TouchableOpacity key={index} style={styles.button}>
          <View style={styles.option}>
            {/* Render bars based on the number of bars */}
            <View style={styles.barsContainer}>
              {Array.from({ length: 4 }).map((_, barIndex) => (
                <View
                  key={barIndex}
                  style={[
                    styles.bar,
                    {
                      backgroundColor: barIndex < option.bars ? option.color : '#E0E0E0',
                      height: 10 * (barIndex + 1),
                    },
                  ]}
                />
              ))}
            </View>
            <Text style={styles.buttonText}>{option.text}</Text>
          </View>
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
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  barsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end', // Align bars from the bottom
    marginRight: 10,
    height: 40, // Set consistent height for the bars
  },
  bar: {
    width: 6,
    marginHorizontal: 2,
    borderRadius: 2,
  },
  buttonText: {
    fontSize: 16,
    textAlignVertical: 'center', // Center text vertically
    color: '#333',
  },
});

export default PracticeGoalPage; // Updated export
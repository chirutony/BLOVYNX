import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Dimensions,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';

const { width } = Dimensions.get('window');

// Enable LayoutAnimation on Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const KidInHelicopter = () => {
  return (
    <View style={styles.kidContainer}>
      <Text style={styles.kidPlaceholder}>🚁 Kid in Helicopter</Text>
    </View>
  );
};

const ProficiencySelectionScreen = () => {
  const [selectedLevel, setSelectedLevel] = useState(null);

  const levels = [
    { text: "I'm a total beginner", barHeight: 12, segments: 2 },  // Reduced bars
    { text: 'I understand sentences', barHeight: 24, segments: 4 },  // Reduced bars
    { text: 'I can have conversation', barHeight: 36, segments: 6 },  // Reduced bars
    { text: 'I speak with confidence', barHeight: 48, segments: 8 },  // Reduced bars
  ];

  const handleSelect = (level) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setSelectedLevel(level);
  };

  const renderBarSegments = (segments, isSelected) => {
    const segmentArray = [];
    for (let i = 0; i < segments; i++) {
      segmentArray.push(
        <View
          key={i}
          style={[
            styles.barSegment,
            {
              backgroundColor: isSelected ? '#0056b3' : '#007bff',
              marginLeft: i === 0 ? 0 : 1, // Reduced margin between segments
            },
          ]}
        />
      );
    }
    return segmentArray;
  };

  return (
    <View style={styles.container}>
      {/* Kid in Helicopter */}
      <KidInHelicopter />

      {/* Question */}
      <Text style={styles.question}>How much Konkani do you know?</Text>

      {/* Proficiency Levels */}
      <FlatList
        data={levels}
        keyExtractor={(item) => item.text}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.levelButton,
              selectedLevel === item.text && styles.selectedButton,
            ]}
            onPress={() => handleSelect(item.text)}
          >
            {/* Render the bar segments */}
            <View
              style={[
                styles.barContainer,
                { height: item.barHeight, width: 100 }, // Adjusted width of bar container
              ]}
            >
              {renderBarSegments(item.segments, selectedLevel === item.text)}
            </View>

            <Text
              style={[
                styles.levelText,
                selectedLevel === item.text && styles.selectedText,
              ]}
            >
              {item.text}
            </Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.levelList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 40,
  },
  kidContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  kidPlaceholder: {
    fontSize: 22,
    fontStyle: 'italic',
    color: '#888',
  },
  question: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
    paddingHorizontal: 20,
  },
  levelList: {
    width: width * 0.9,
  },
  levelButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 30,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
    transition: 'background-color 0.2s ease-in-out',
  },
  selectedButton: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
  },
  barContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginRight: 10,
    flexShrink: 1,
  },
  barSegment: {
    height: '100%',
    width: 8, // Standard width for all bars
    borderRadius: 6,
  },
  levelText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    flexShrink: 1,
  },
  selectedText: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default ProficiencySelectionScreen;
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const FEATURES = [
  "No daily limit",
  "Learn up to 24 languages",
  "Practical day-to-day situations",
  "Smart Pronunciation Corrector",
  "Voiced by 200+ Native Speakers",
  "All conversational lessons",
  "Get your Certificate Ready",
];

const Tab = ({ label, isActive }) => (
  <Text style={[styles.tab, isActive ? styles.activeTab : styles.inactiveTab]}>
    {label}
  </Text>
);

const FeatureItem = ({ feature }) => (
  <Text style={styles.featureItem}>
    {"\u2713"} {feature}
  </Text>
);

const PremiumScreen = () => {
  return (
    <LinearGradient
      colors={["#5A8EEA", "#AEC9FF"]}
      style={styles.gradientContainer}
    >
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <Text style={styles.headerText}>GET UNLIMITED ACCESS</Text>

        {/* Premium vs Free Box */}
        <View style={styles.box}>
          <View style={styles.tabs}>
            <Tab label="PREMIUM" isActive={true} />
            <Tab label="Free" isActive={false} />
          </View>

          {/* Features */}
          <View style={styles.features}>
            {FEATURES.map((feature, index) => (
              <FeatureItem key={index} feature={feature} />
            ))}
          </View>
        </View>

        {/* Price Section */}
        <Text style={styles.priceText}>Only 4900/– per year</Text>

        {/* Continue Button */}
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueButtonText}>CONTINUE</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    alignItems: "center",
    paddingVertical: 30,
  },
  headerText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 20,
  },
  box: {
    width: "90%",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  activeTab: {
    backgroundColor: "#335084", // Premium Button Color
    color: "#FFFFFF",
  },
  inactiveTab: {
    backgroundColor: "#E6F0FF",
    color: "#5A8EEA",
    marginLeft: 10,
  },
  features: {
    marginTop: 10,
  },
  featureItem: {
    fontSize: 16,
    color: "#333333",
    fontWeight: "bold",
    lineHeight: 28,
  },
  priceText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginVertical: 20,
    textAlign: "center",
  },
  continueButton: {
    backgroundColor: "#5A8EEA",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 20,
    elevation: 5,
  },
  continueButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});

export default PremiumScreen;

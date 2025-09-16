import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Define the props for the component
interface SummaryCardProps {
  title: string;
  value: string | number; // The value can be a number or a string
  color: string; // To add a color accent
}

const SummaryCard = ({ title, value, color }: SummaryCardProps) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.valueText, { color: color }]}>{value}</Text>
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Allows the card to grow and fill space
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    // Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  valueText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  titleText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '600',
  },
});

export default SummaryCard;
import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

// Define the props for the component
interface FilterPillProps {
  label: string;
  onPress: () => void;
  isActive: boolean;
}

const FilterPill = ({ label, onPress, isActive }: FilterPillProps) => {
  // Conditionally select styles based on the isActive prop
  const containerStyle = [
    styles.container,
    isActive && styles.containerActive, // Apply active style if isActive is true
  ];

  const labelStyle = [
    styles.label,
    isActive && styles.labelActive, // Apply active label style if isActive is true
  ];

  return (
    <TouchableOpacity onPress={onPress} style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20, // High border radius for the "pill" shape
    backgroundColor: '#EFEFF4', // Light grey for inactive state
    marginHorizontal: 4,
  },
  containerActive: {
    backgroundColor: '#007AFF', // Blue for active state
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#007AFF', // Blue text for inactive state
  },
  labelActive: {
    color: '#FFFFFF', // White text for active state
  },
});

export default FilterPill;
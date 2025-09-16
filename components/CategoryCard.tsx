import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Define the props for the component
interface CategoryCardProps {
  title: string;
  // This special TypeScript type ensures we only use valid Ionicons names
  iconName: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
  color: string; // To give each card a unique color accent
}

const CategoryCard = ({ title, iconName, onPress, color }: CategoryCardProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={[styles.iconContainer, { backgroundColor: color }]}>
        <Ionicons name={iconName} size={32} color="#FFFFFF" />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Allows the card to grow and fill space in a grid
    margin: 8,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Shadow for Android
    elevation: 3,
    minHeight: 140, // Ensures cards have a consistent height
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30, // Makes it a circle
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
});

export default CategoryCard;
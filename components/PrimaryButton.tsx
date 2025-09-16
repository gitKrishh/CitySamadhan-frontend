import React from 'react';
import { Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';

// Define the props the component will accept
interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
  isLoading?: boolean; // Optional prop for loading state
  disabled?: boolean;  // Optional prop to disable the button
}

const PrimaryButton = ({ title, onPress, isLoading = false, disabled = false }: PrimaryButtonProps) => {
  const buttonStyle = [
    styles.button,
    (disabled || isLoading) && styles.buttonDisabled, // Apply disabled style if needed
  ];

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle} disabled={disabled || isLoading}>
      {isLoading ? (
        <ActivityIndicator color="#FFFFFF" />
      ) : (
        <Text style={styles.buttonText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF', // A standard blue color
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 10,
  },
  buttonDisabled: {
    backgroundColor: '#A9A9A9', // A grey color for the disabled state
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PrimaryButton;
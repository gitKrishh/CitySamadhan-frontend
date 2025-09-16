import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Define the possible statuses for a report
type ReportStatus = 'Pending' | 'In Progress' | 'Resolved';

// Define the props for the component
interface ReportListItemProps {
  id: string;
  category: string;
  date: string;
  status: ReportStatus;
  onPress: () => void;
}

const ReportListItem = ({ id, category, date, status, onPress }: ReportListItemProps) => {
  // Helper function to get the right color for each status
  const getStatusStyle = (status: ReportStatus) => {
    switch (status) {
      case 'Pending':
        return styles.pending;
      case 'In Progress':
        return styles.inProgress;
      case 'Resolved':
        return styles.resolved;
      default:
        return {};
    }
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.category}>{category}</Text>
          <View style={[styles.statusPill, getStatusStyle(status)]}>
            <Text style={styles.statusText}>{status}</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.details}>ID: {id}</Text>
          <Text style={styles.details}>{date}</Text>
        </View>
      </View>
      <Ionicons name="chevron-forward" size={24} color="#A9A9A9" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    // Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  content: {
    flex: 1,
    marginRight: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  category: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  statusPill: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  statusText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  details: {
    fontSize: 12,
    color: '#666',
  },
  // Status-specific styles
  pending: {
    backgroundColor: '#FFA500', // Orange
  },
  inProgress: {
    backgroundColor: '#007AFF', // Blue
  },
  resolved: {
    backgroundColor: '#34C759', // Green
  },
});

export default ReportListItem;
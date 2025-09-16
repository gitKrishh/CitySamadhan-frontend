import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // Import the icon library

import Colors from '@/constants/Colors'; // We'll create this file later

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.light.tint, // Use a color constant
        // You can uncomment this to hide the header on all tab screens
        // headerShown: false,
      }}>
      <Tabs.Screen
        name="index" // This corresponds to index.tsx
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="reports" // This corresponds to reports.tsx
        options={{
          title: 'My Reports',
          tabBarIcon: ({ color }) => <Ionicons name="document-text-outline" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="alerts" // This corresponds to alerts.tsx
        options={{
          title: 'Alerts',
          tabBarIcon: ({ color }) => <Ionicons name="notifications-outline" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile" // This corresponds to profile.tsx
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <Ionicons name="person-circle-outline" size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}
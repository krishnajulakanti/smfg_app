import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Dashboard from '../components/features/loans/Dashboard';
import Offers from '../components/features/loans/Offers';
import PayEmi from '../components/features/loans/PayEmi/PayEmi';
import EmiCalculator from '../components/features/loans/EmiCalculator';
import Menu from '../components/features/loans/Menu';

const BottomTab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.footer,
        tabBarIconStyle: { marginTop: 5 },
        tabBarLabelStyle: styles.tabBarLabel, // Add this line
        tabBarActiveTintColor: '#004831',
        tabBarInactiveTintColor: '#004831',
      }}
    >
      <BottomTab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View style={styles.iconWrapper}>
              {focused && <View style={styles.topBar} />}
              <MaterialCommunityIcons
                name="view-dashboard-outline"
                size={size}
                color={color}
              />
            </View>
          ),
          tabBarLabel: 'Dashboard', // Add label text explicitly if needed
        }}
      />
      <BottomTab.Screen
        name="Offers"
        component={Menu}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View style={styles.iconWrapper}>
              {focused && <View style={styles.topBar} />}
              <MaterialIcons name="local-offer" size={size} color={color} />
            </View>
          ),
          tabBarLabel: 'Offers', // Add label text explicitly if needed
        }}
      />
      <BottomTab.Screen
        name="Pay EMI"
        component={PayEmi}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View style={styles.iconWrapper}>
              {focused && <View style={styles.topBar} />}
              <MaterialIcons name="payment" size={size} color={color} />
            </View>
          ),
          tabBarLabel: 'Pay EMI', // Add label text explicitly if needed
        }}
      />
      <BottomTab.Screen
        name="EMI Calc"
        component={Menu}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View style={styles.iconWrapper}>
              {focused && <View style={styles.topBar} />}
              <MaterialIcons name="calculate" size={size} color={color} />
            </View>
          ),
          tabBarLabel: 'EMI Calc', // Add label text explicitly if needed
        }}
      />
      <BottomTab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View style={styles.iconWrapper}>
              {focused && <View style={styles.topBar} />}
              <MaterialIcons name="menu" size={size} color={color} />
            </View>
          ),
          tabBarLabel: 'Menu', // Add label text explicitly if needed
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#F5F0EB',
    height: 80,
    paddingBottom: 15,
    paddingHorizontal: 15,
  },
  tabBarLabel: {
    fontSize: 13, // Adjust this value for desired font size
    fontWeight: '600', // Optional: Makes the label text bolder
  },
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBar: {
    position: 'absolute',
    top: -14, // Position it at the top of the icon
    width: '100%', // Full width of the icon wrapper
    height: 5, // Height of the bar
    backgroundColor: '#004831', // Color of the top bar
    borderBottomRightRadius: 10, // Rounded corners for a smooth appearance
    borderBottomLeftRadius: 10, // Rounded corners for a smooth appearance
  },
});

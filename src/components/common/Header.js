// import { Icon } from '@rneui/themed/dist/Icon';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({ buttonProps }) => {
  return (
    <View style={styles.header}>
      <View style={styles.backButton}>
        <TouchableOpacity onPress={buttonProps.onPress}>
          <Text style={styles.backButtonText}>
            <MaterialIcons name="keyboard-backspace" size={32} color="#004831" />
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.title}>
        <Text style={styles.headerText}>{buttonProps.title}</Text>
        <View style={styles.topBar} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 20,
    height: 55,
    backgroundColor: '#DDDDDD',
  },
  topBar: {
    position: 'absolute',
    bottom: -5, // Position it at the top of the icon
    width: '33%', // Full width of the icon wrapper
    height: 2, // Height of the bar
    backgroundColor: '#004831', // Color of the top bar
  },
  backButton: {
    marginRight: 90,
  },
  backButtonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#004831',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#004831',
  },
  title: {
    alignItems: 'center',
  }
});

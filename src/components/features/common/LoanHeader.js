import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
// import Logo from '../../../assets/images/SMFG-Logo.svg';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const LoanHeader = () => {
  return (
    <View style={styles.header}>
      {/* <Logo width={130} height={50} /> */}
      <View style={{flexDirection: 'row'}}>
      <FontAwesome style={{paddingRight: 15}} name="bell-o" size={38} color="#2f4f4f" />
      <FontAwesome name="user-circle-o" size={40} color="#2f4f4f" />
      </View>
    </View>
  );
};

export default LoanHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    height: 75,
    padding: 16,
    backgroundColor: '#DDDDDD',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

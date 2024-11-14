import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import LoanHeader from '../common/LoanHeader';

const menuItems = [
  { id: 1, title: 'MyProfile', navigateTo: 'MyProfile' },
  { id: 2, title: 'My Documents'},
  { id: 3, title: 'Service Requests' },
  { id: 4, title: 'Branch Locator'},
  { id: 5, title: 'Forms'},
  { id: 6, title: 'My Leads'},
  { id: 7, title: 'DNC Registration'},
  { id: 8, title: 'Support'},
  { id: 9, title: 'FAQ'},
  { id: 10, title: 'Terms of Use'},
];

const Menu = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <View>
        <LoanHeader />
      </View>

      <View style={styles.mainContainer}>
      <ScrollView style={{ borderTopLeftRadius: 20 }}>
        {menuItems.map((item, index) => (
          <View key={item.id}>
            <TouchableOpacity
              style={styles.card}
              onPress={() => item.navigateTo ? navigation.navigate(item.navigateTo): null }
            >
              <View style={{flexDirection: 'row'}}>
                <MaterialIcons name="radio-button-unchecked" size={24} color="#2f4f4f" />
                <Text style={styles.cardText}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDDDDD',
  },
  mainContainer: {
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    height: 800,
    paddingTop: 15
},
  card: {
    backgroundColor: '#fff',
    paddingVertical: 13,
    paddingHorizontal: 13,
    marginRight: 16,
    marginLeft: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardText: {
    fontSize: 20,
    color: '#154433',
    paddingLeft: 20,
  },
});

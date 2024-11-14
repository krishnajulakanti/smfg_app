import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';


const Footer = ({ buttonProps }) => {
  return (
    <View>
      <FlatList data={buttonProps} renderItem={({ item }) => (
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={item.onPress}
            style={item.varient === 'secondary' ? styles.cancelButton : styles.proceedButton}>
            <Text style={item.varient === 'secondary' ? styles.cancelButtonText : styles.proceedButtonText}>
              {item.title}</Text>
          </TouchableOpacity>
        </View>
      )}
        scrollEnabled={false} numColumns={2}
      />
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    paddingHorizontal: 15,
    // paddingBottom: 10,
    backgroundColor: '#F5F0EB',
  },
  cancelButton: {
    // flex: 1,
    width: 180,
    borderWidth: 1,
    borderColor: '#2E6C50',
    borderRadius: 25,
    paddingVertical: 15,
    // marginRight: 10,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#2E6C50',
    fontSize: 16,
    fontWeight: 'bold',
  },
  proceedButton: {
    // flex: 1,
    width: 180,
    backgroundColor: '#2E6C50',
    borderRadius: 25,
    paddingVertical: 15,
    marginLeft: 10,
    alignItems: 'center',
  },
  proceedButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

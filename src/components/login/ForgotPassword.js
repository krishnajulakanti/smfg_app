import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../common/Header';
import Footer from '../common/Footer';

const ForgotPasswordScreen = ({ navigation }) => {

  const headerProps =
  {
    // size: 'default',
    title: 'Forgot Password',
    onPress: () => {
      navigation.goBack();
    },
  };
  const footerProps = [
    {
      // size: 'default',
      varient: 'secondary',
      title: 'CANCEL',
      onPress: () => {
        navigation.goBack();
      },
    },
    {
      // size: 'default',
      varient: 'primary',
      title: 'PROCEED',
      onPress: () => {
        navigation.navigate('OtpVerificationScreen');
      },
    },
  ];

  return (
    <View style={styles.container}>
      <Header buttonProps={headerProps} />

      <View style={styles.bodyContainer}>
        <Text style={styles.label}>LAN ID</Text>
        <TextInput
          style={styles.input}
        // placeholder="200171XXXXXXXXXX2348"
        // placeholderTextColor="black"
        />
        <Text style={styles.label}>Registered Mobile No.</Text>
        <TextInput
          style={styles.input}
          // placeholder="9944455999"
          // placeholderTextColor="black"
          keyboardType="phone-pad"
        />
      </View>

      <Footer buttonProps={footerProps} />
    </View>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
  },
  bodyContainer: {
    height: 710,
    paddingHorizontal: 20,
    // borderRadius: 40,
  },
  inputContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    elevation: 3,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666666',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#C3D600',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    marginBottom: 20,
    color: 'black',
  }
});

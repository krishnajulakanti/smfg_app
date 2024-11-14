import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { ScrollView } from 'react-native-gesture-handler';

const ResetPasswordScreen = ({ navigation }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

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
      onPress: () => { navigation.goBack(); },
    },
    {
      // size: 'default',
      varient: 'primary',
      title: 'RESET',
      onPress: () => { navigation.navigate('Dashboard'); },
    },
  ];

  return (
    <View style={styles.container}>
      <Header buttonProps={headerProps} />

      <View style={styles.bodyContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>New Password</Text>
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={styles.input}
              secureTextEntry={!isPasswordVisible}
              value={newPassword}
              onChangeText={setNewPassword}
            />
            {/* <TouchableOpacity onPress={togglePasswordVisibility}>
            <Icon name={isPasswordVisible ? "eye-off-outline" : "eye-outline"} size={20} color="gray" />
          </TouchableOpacity> */}
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirm New Password</Text>
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={styles.input}
              secureTextEntry={!isPasswordVisible}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            {/* <TouchableOpacity onPress={togglePasswordVisibility}>
            <Icon name={isPasswordVisible ? "eye-off-outline" : "eye-outline"} size={20} color="gray" />
          </TouchableOpacity> */}
          </View>
        </View>
      </View>

      <Footer buttonProps={footerProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
  },
  bodyContainer: {
    height: 710,
    paddingHorizontal: 20
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 5,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: '#c2d1a0',
    borderRadius: 10,
    padding: 1,
  },
  input: {
    flex: 1,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#A1A241',
    borderRadius: 5,
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 530,
  },
  cancelButton: {
    flex: 1,
    padding: 15,
    borderWidth: 1,
    borderColor: '#2E6C50',
    borderRadius: 25,
    alignItems: 'center',
    marginRight: 10,
  },
  cancelButtonText: {
    color: '#356859',
    fontWeight: 'bold',
  },
  resetButton: {
    flex: 1,
    padding: 15,
    backgroundColor: '#2E6C50',
    borderRadius: 25,
    alignItems: 'center',
  },
  resetButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default ResetPasswordScreen;

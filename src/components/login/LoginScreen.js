import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import Logo from '../../assets/images/SMFG-Logo.svg';

const LoginScreen = ({ navigation }) => {
  const [lanId, setLanId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.version}>App Ver 1.0</Text>
      <Text style={styles.language}>English ▸</Text>

      {/* Logo */}
      <Logo width={300} height={300} />

      <Text style={styles.title}>Login</Text>

      {/* LAN ID Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="LAN ID"
          placeholderTextColor="#9E9E9E"
          value={lanId}
          onChangeText={setLanId}
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#9E9E9E"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setShowPassword(!showPassword)}>
          <Text>{showPassword ? '👁️' : '👁️‍🗨️'}</Text>
        </TouchableOpacity>
      </View>

      {/* Forgot Password */}
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Register & Login Buttons */}
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerText}>REGISTER</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('BottomNavigation')}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
  },
  version: {
    position: 'absolute',
    top: 10,
    left: 10,
    color: '#9E9E9E',
  },
  language: {
    position: 'absolute',
    top: 10,
    right: 10,
    color: '#9E9E9E',
  },
  logo: {
    width: 150,
    height: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2E6C50',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#A1A241',
    borderRadius: 8,
    backgroundColor: '#FFF',
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    color: '#333',
  },
  eyeIcon: {
    paddingHorizontal: 10,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
    color: '#2E6C50',
    textDecorationLine: 'none',
  },
  registerButton: {
    width: '100%',
    padding: 15,
    marginTop: 140,
    marginBottom: 15,
    borderRadius: 25,
    borderColor: '#333',
    borderWidth: 1,
    alignItems: 'center',
  },
  registerText: {
    color: '#333',
    fontWeight: 'bold',
  },
  loginButton: {
    width: '100%',
    padding: 15,
    borderRadius: 25,
    backgroundColor: '#2E6C50',
    alignItems: 'center',
  },
  loginText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default LoginScreen;

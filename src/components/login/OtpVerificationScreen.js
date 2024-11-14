import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../common/Header';
import Footer from '../common/Footer';

const OtpVerificationScreen = ({ navigation }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    // Countdown timer
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleOtpChange = (index, value) => {
    // Update the OTP value at the specific index
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleResendOtp = () => {
    setTimer(60); // Reset timer
    // Add logic to resend OTP here
  };

  const handleSubmit = () => {
    // Handle OTP submission
    navigation.navigate('ResetPasswordScreen');
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
      title: 'SUBMIT',
      onPress: () => { navigation.navigate('ResetPasswordScreen'); },
    },
  ];

  return (
    <View style={styles.container}>
      <Header buttonProps={headerProps} />

      <View style={styles.bodyContainer}>
        <Text style={styles.instruction}>
          Enter the 4-digit code sent to your registered mobile number.
        </Text>

        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.otpInput}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={value => handleOtpChange(index, value)}
            />
          ))}
        </View>

        <Text style={styles.verifyingText}>Verifying</Text>
        <Text style={styles.timer}>
          {timer > 0 ? `${timer} sec` : 'Time expired'}
        </Text>

        <TouchableOpacity onPress={handleResendOtp} disabled={timer > 0}>
          <Text style={styles.resendOtp}>RESEND OTP</Text>
        </TouchableOpacity>
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
  instruction: {
    fontSize: 18,
    textAlign: 'center',
    color: '#555',
    marginBottom: 40,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    textAlign: 'center',
    fontSize: 20,
    color: 'black'
  },
  verifyingText: {
    textAlign: 'center',
    color: '#555',
    fontSize: 16,
    marginTop: 20,
  },
  timer: {
    textAlign: 'center',
    fontSize: 16,
    color: '#888',
  },
  resendOtp: {
    textAlign: 'center',
    color: '#006400', // Dark green
    fontSize: 16,
    marginTop: 20,
  },
});

export default OtpVerificationScreen;

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../components/login/LoginScreen';
import OtpVerificationScreen from '../components/login/OtpVerificationScreen';
import ForgotPasswordScreen from '../components/login/ForgotPassword';
import ResetPasswordScreen from '../components/login/ResetPasswordScreen';
import BottomNavigation from './BottomNavigation';
// import FeatureNavigation from '../components/features/common/FeatureNavigation';
import MyProfile from '../components/features/loans/MyProfile';
import PaymentOptions from '../components/features/loans/PayEmi/PaymentOptions';
import PaymentSuccess from '../components/features/loans/PayEmi/PaymentSuccess';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="OtpVerificationScreen" component={OtpVerificationScreen} />
      <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
      <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
      {/* <Stack.Screen name="FeatureNavigation" component={FeatureNavigation} /> */}
      <Stack.Screen name="MyProfile" component={MyProfile}/>
      <Stack.Screen name="PaymentOptions" component={PaymentOptions} />
      <Stack.Screen name="PaymentSuccess" component={PaymentSuccess} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

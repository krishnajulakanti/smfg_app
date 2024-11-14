import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
import {useColorScheme} from 'react-native';
import {UIThemeProvider} from './src/theme';
import AppNavigator from './src/navigation/AppNavigation';

enableScreens();

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';
  return (
    // <UIThemeProvider mode={'light'}
      // brand={CL}
      // >
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    // </UIThemeProvider>
  );
};

export default App;

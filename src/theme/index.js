import React from 'react';
import { createTheme, ThemeMode, ThemeProvider } from '@rneui/themed';
import { RecursivePartial } from '@rneui/themed/dist/config/theme';
import { typography } from './typography';
import { palette } from './palette';
import { Brand } from '../types/palette';
import {
  smallButton,
  defaultButton,
  roundedButton,
  secondaryButton,
} from './button';
import { largeIcon, mediumIcon, smallIcon, extraSmallIcon } from './icon';

// type UIThemeProviderProps = {
//   children: React.ReactNode,
//   mode: RecursivePartial<ThemeMode>,
//   brand: Brand,
// };
export const UIThemeProvider = ({
  children,
  mode,
  brand,
}) => {
  const theme = createTheme({
    ...palette[brand],
    mode,
    smallButton,
    defaultButton,
    roundedButton,
    secondaryButton,
    largeIcon,
    mediumIcon,
    smallIcon,
    extraSmallIcon,
    typography,
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

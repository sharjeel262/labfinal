/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { Text as DefaultText, View as DefaultView } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from './useColorScheme';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  // Use the current color scheme (light or dark)
  const theme = useColorScheme() ?? 'light'; // Default to 'light' theme if none is provided
  const colorFromProps = props[theme];

  // Return the color based on the current theme or fallback to Colors
  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

// Themed Text component
export function Text(props: TextProps) {
  const { style, lightColor = '#000', darkColor = '#fff', ...otherProps } = props; // Default colors
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

// Themed View component
export function View(props: ViewProps) {
  const { style, lightColor = '#fff', darkColor = '#000', ...otherProps } = props; // Default colors
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

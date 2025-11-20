import 'styled-components';
import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      sidebarBg: string;
      sidebarActive: string;
      textPrimary: string;
      textSecondary: string;
      cardBg: string;
      pageBg: string;
      bgLight: string;
      textDark: string;
      textGray: string;
      textMuted: string;
      panelBg: string;
      black: string;
      white: string;
      iconBg: string;
      tuna: string;
      abbey: string;
      geyser: string;
      malachiteapprox: string;
      wildSand: string;
      gallery: string;
      gullGray: string;
      grayChateauapprox: string,
      stormDust: string,
      stormDust2: string,
    };
    layout: {
      headerHeight: number;
      sidebarWidth: number;
    };
  }
}

export const theme: DefaultTheme = {
  colors: {
    primary: '#C4F000',
    secondary: '#C8EE44',
    sidebarBg: '#FAFAFA',
    sidebarActive: '#C4F000',
    textPrimary: '#111827',
    textSecondary: '#6B7280',
    cardBg: '#F8F8F8',
    pageBg: '#F5F6FA',
    bgLight: '#F9FAFB',
    textDark: '#1B212D',
    textGray: '#78778B',
    textMuted: '#929EAE',
    panelBg: '#E5E7EB',
    black: '#000000',
    white: '#ffffff',
    iconBg: '#EBE8E8',
    tuna: '#363A3F',
    abbey: '#4E5257',
    geyser: '#cbd5e1',
    malachiteapprox: '#0dbf6e',
    wildSand: '#f5f5f5',
    gallery: '#eeeeee',
    gullGray: '#98a1b3',
    grayChateauapprox: '#9AA3B2',
    stormDust: '#626260',
    stormDust2: '#626261',
  },
  layout: {
    headerHeight: 64,
    sidebarWidth: 240
  }
};

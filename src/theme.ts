import { ThemeOptions } from "@mui/material/styles";

export type UiTheme = {
  drawer: string
}


export const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      light: '#5c5fff',
      main: '#5865f2',
      dark: '#4752c4',
      contrastText: '#fefefe',
    },
    secondary: {
      light: '#59ff8e',
      main: '#42be6a',
      dark: '#359855'
    },
    error: {
      light: '#fe4648',
      main: '#d83c3e',
      dark: '#a42d2f',
    },
    text: {
      primary: '#313434',
    },
    background: {
      default: '#EFF0F0',
    }
  },
  typography: {
    fontFamily: 'Noto Sans JP',
  },
};
export const lightTheme: UiTheme = {
  drawer: '#AFB6B6',
} as const;

export const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      light: '#5c5fff',
      main: '#5865f2',
      dark: '#4752c4',
      contrastText: '#fefefe',
    },
    secondary: {
      light: '#59ff8e',
      main: '#42be6a',
      dark: '#359855'
    },
    error: {
      light: '#fe4648',
      main: '#d83c3e',
      dark: '#a42d2f',
    },
    text: {
      primary: '#fefefe'
    },
    background: {
      default: '#36393f',
    },
  },
  typography: {
    fontFamily: 'Noto Sans JP',
  },
};
export const darkTheme: UiTheme = {
  drawer: '#2f3136'
} as const;
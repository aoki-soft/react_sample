import { PaletteMode } from '@mui/material';
import { atom } from 'recoil';
import { lightTheme, UiTheme } from './theme'

export const paletteModeState = atom<PaletteMode>({
  key: 'paletteModeState',
  default: 'light'
})

export const themeState = atom<UiTheme>({
  key: 'themeState',
  default: lightTheme
})
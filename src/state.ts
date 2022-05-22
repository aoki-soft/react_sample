import { PaletteMode } from '@mui/material';
import { atom } from 'recoil';
import { darkTheme, UiTheme } from './theme'

export const paletteModeState = atom<PaletteMode>({
  key: 'paletteModeState',
  default: 'dark'
})

export const themeState = atom<UiTheme>({
  key: 'themeState',
  default: darkTheme
})
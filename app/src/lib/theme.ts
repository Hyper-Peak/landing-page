import { writable } from 'svelte/store';

export const WHITE: string = '#f8f8ff'
export const BLACK: string = '#1c1c1c'
export const GRAY: string = '#c0c0c0'
export const PRIMARY_LIGHT: string = '#003366'
export const PRIMARY_DARK: string = '#6ebdff'
export const SECONDARY_LIGHT: string = '#006666'
export const SECONDARY_DARK: string = '#60c0bf'

export type DS = {
  theme: Theme,
  isLight: boolean
  colors: Colors
}

export type Colors = {
  bg: string
  onBg: string
  gray: string
  primary: string
  onPrimary: string
  secondary: string
  onSecondary: string
}

export enum Theme {
  Light, Dark
}

const lightColors: Colors = {
  bg: WHITE,
  onBg: BLACK,
  gray: GRAY,
  primary: PRIMARY_LIGHT,
  onPrimary: BLACK,
  secondary: PRIMARY_LIGHT,
  onSecondary: BLACK,
}

const darkColors: Colors = {
  bg: BLACK,
  onBg: WHITE,
  gray: GRAY,
  primary: PRIMARY_DARK,
  onPrimary: WHITE,
  secondary: SECONDARY_DARK,
  onSecondary: WHITE,
}

export const ds = writable<DS>({
  isLight: true,
  theme: Theme.Light,
  colors: lightColors,
})

export function setTheme(theme: Theme) {
  ds.set(
    {
      isLight: theme == Theme.Light,
      theme: theme,
      colors: theme == Theme.Light ? lightColors : darkColors,
    }
  )
}

export function colorsToCSS(colors: Colors): string {
  return Object.entries(colors)
    .map(([key, value]) => `--${key}:${value}`)
    .join(';')
}

export function prefersDarkTheme(): boolean {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

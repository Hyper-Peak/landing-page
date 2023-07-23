import { onMount } from 'svelte';
import { writable } from 'svelte/store';

const DARK_PREFERENCE = '(prefers-color-scheme: dark)';

export const WHITE: string = '#f8f8ff'
export const BLACK: string = '#1c1c1c'
export const GRAY: string = '#c0c0c0'

export type DS = {
  theme: Theme,
  isLight: boolean
  colors: Colors
}

export type Colors = {
  bg: string
  content: string
  gray: string
}

export enum Theme {
  Light, Dark
}

const lightColors = {
  bg: WHITE,
  content: BLACK,
  gray: GRAY,
}

const darkColors = {
  bg: BLACK,
  content: WHITE,
  gray: GRAY,
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
  return window.matchMedia(DARK_PREFERENCE).matches
}

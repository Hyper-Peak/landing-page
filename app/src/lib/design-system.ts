import { writable } from 'svelte/store';
import { darkColors, lightColors, type Colors, globalColors } from './colors';
import { typography, type Typography } from './typography';


export enum Theme {
  Light, Dark
}

export type DS = {
  theme: Theme
  isLight: boolean
  colors: Colors
  typo: Typography
}


export const ds = writable<DS>({
  isLight: true,
  theme: Theme.Light,
  colors: lightColors,
  typo: typography
})

export function setTheme(theme: Theme) {
  ds.set(
    {
      isLight: theme == Theme.Light,
      theme: theme,
      colors: theme == Theme.Light ? lightColors : darkColors,
      typo: typography
    }
  )
}

export function dsToCssVars(ds: DS): string {
  return objToCssVars(ds.colors) + objToCssVars(globalColors) + objToCssVars(ds.typo, 'px')
}

export function objToCssVars(obj: object, valuePostFix: string = ''): string {
  return Object.entries(obj)
    .map(([key, value]) => `--${key}:${value}${valuePostFix}`)
    .join(';') + ';'
}

export function prefersDarkTheme(): boolean {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

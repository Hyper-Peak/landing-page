import { onMount } from 'svelte';
import { derived, writable } from 'svelte/store';

export const WHITE: string = '#f8f8ff'
export const BLACK: string = '#1c1c1c'
export const GRAY: string = '#c0c0c0'

export type DS = {
  isLight: boolean
  colors: Colors
}

export type Colors = {
  bg: string
  content: string
  gray: string
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
  colors: lightColors,
})

onMount(() => {
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    ds.update((state) => ({
      isLight: state.isLight,
      colors: state.isLight ? lightColors : darkColors,
    }))
  })
})

export const dsStyles = derived(ds, $ds => Object.entries($ds.colors)
  .map(([key, value]) => `--${key}:${value}`)
  .join(';')
)

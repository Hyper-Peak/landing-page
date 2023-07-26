export const WHITE: string = '#E9E9F5'
export const BLACK: string = '#09090A'
export const GRAY: string = '#74747A'
export const PRIMARY_LIGHT: string = '#3E99F5'
export const PRIMARY_DARK: string = '#3E99F5'
export const SECONDARY_LIGHT: string = '#14CC8F'
export const SECONDARY_DARK: string = '#14CC8F'


export type Colors = {
    bg: string
    onBg: string
    gray: string
    primary: string
    onPrimary: string
    secondary: string
    onSecondary: string
}


export const lightColors: Colors = {
    bg: WHITE,
    onBg: BLACK,
    gray: GRAY,
    primary: PRIMARY_LIGHT,
    onPrimary: WHITE,
    secondary: SECONDARY_LIGHT,
    onSecondary: WHITE,
}

export const darkColors: Colors = {
    bg: BLACK,
    onBg: WHITE,
    gray: GRAY,
    primary: PRIMARY_DARK,
    onPrimary: WHITE,
    secondary: SECONDARY_DARK,
    onSecondary: WHITE,
}
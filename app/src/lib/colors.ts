export const WHITE: string = '#f8f8ff'
export const BLACK: string = '#1c1c1c'
export const GRAY: string = '#c0c0c0'
export const PRIMARY_LIGHT: string = '#003366'
export const PRIMARY_DARK: string = '#6ebdff'
export const SECONDARY_LIGHT: string = '#006666'
export const SECONDARY_DARK: string = '#60c0bf'


export type Colors = {
    bg: string
    onBg: string
    gray: string
    primary: string
    primaryInv: string
    onPrimary: string
    secondary: string
    secondaryInv: string
    onSecondary: string
}


export const lightColors: Colors = {
    bg: WHITE,
    onBg: BLACK,
    gray: GRAY,
    primary: PRIMARY_LIGHT,
    primaryInv: PRIMARY_DARK,
    onPrimary: WHITE,
    secondary: SECONDARY_LIGHT,
    secondaryInv: SECONDARY_DARK,
    onSecondary: WHITE,
}

export const darkColors: Colors = {
    bg: BLACK,
    onBg: WHITE,
    gray: GRAY,
    primary: PRIMARY_DARK,
    primaryInv: PRIMARY_LIGHT,
    onPrimary: BLACK,
    secondary: SECONDARY_DARK,
    secondaryInv: SECONDARY_LIGHT,
    onSecondary: BLACK,
}
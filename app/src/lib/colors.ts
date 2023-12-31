export const WHITE: string = '#E9E9F5'
export const KINDA_WHITE: string = '#DFDFEB'
export const BLACK: string = '#09090A'
export const KINDA_BLACK: string = '#1C1C1F'
export const GRAY: string = '#74747A'

export const PRIMARY_LIGHT: string = '#3380CC'
export const PRIMARY_DARK: string = '#3380CC'

export const SECONDARY_LIGHT: string = '#10A372'
export const SECONDARY_DARK: string = '#14CC8F'

export const ORANGE: string = "#F5D018;"
export const RED: string = "#F53D3D"


export type Colors = {
    bg: string
    onBg: string
    bg2: string
    gray: string
    primary: string
    secondary: string
}

export type GlobalColors = {
    white: string
    black: string
    orange: string
    red: string
}

export const globalColors: GlobalColors = {
    white: WHITE,
    black: BLACK,
    orange: ORANGE,
    red: RED,
}

export const lightColors: Colors = {
    bg: WHITE,
    onBg: BLACK,
    bg2: KINDA_WHITE,
    gray: GRAY,
    primary: PRIMARY_LIGHT,
    secondary: SECONDARY_LIGHT,
}

export const darkColors: Colors = {
    bg: BLACK,
    onBg: WHITE,
    bg2: KINDA_BLACK,
    gray: GRAY,
    primary: PRIMARY_DARK,
    secondary: SECONDARY_DARK,
}
export type Typography = {
    xxxl: number
    xxl: number
    xl: number
    l: number
    m: number
    s: number
    xs: number
    xxs: number
}

export const typography: Typography = {
    xxxl: 64,
    xxl: 48,
    xl: 32,
    l: 24,
    m: 20,
    s: 16,
    xs: 12,
    xxs: 10,
}

const nunito = "Nunito+Sans:700"
const roboto = "Roboto:400,400i,600,700,800,900"

export const fontsUrl = `https://fonts.googleapis.com/css?family=${nunito}|${roboto}&display=swap`
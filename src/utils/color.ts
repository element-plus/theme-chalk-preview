import color from 'css-color-function'
import { formula } from '../constant'

export const generateColors = (primary: string) => {
  let colors = {}
  Object.keys(formula).forEach((key) => {
    const value = formula[key].replace(/primary/g, primary)
    colors[key] = color.convert(value)
  })
  return colors
}

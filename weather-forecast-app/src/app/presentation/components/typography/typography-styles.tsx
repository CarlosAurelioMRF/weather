/**
=========================================================
* Material Dashboard 2 PRO React TS - v1.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-2-pro-react-ts
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

export default styled(Typography)(({ theme, ownerState }: any): any => {
  const { palette, typography, functions }: any = theme
  const { color, textTransform, verticalAlign, fontWeight, opacity, textGradient, darkMode } =
    ownerState

  const { gradients, transparent, white } = palette
  const { fontWeightLight, fontWeightRegular, fontWeightMedium, fontWeightBold } = typography
  const { linearGradient } = functions

  // fontWeight styles
  const fontWeights: { [key: string]: number } = {
    light: fontWeightLight,
    regular: fontWeightRegular,
    medium: fontWeightMedium,
    bold: fontWeightBold,
  }

  // styles for the typography with textGradient={true}
  const gradientStyles = () => ({
    backgroundImage:
      color !== 'inherit' && color !== 'text' && color !== 'white' && gradients[color]
        ? linearGradient(gradients[color].main, gradients[color].state)
        : linearGradient(gradients.dark.main, gradients.dark.state),
    display: 'inline-block',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: transparent.main,
    position: 'relative',
    zIndex: 1,
  })

  // color value
  let colorValue = color === 'inherit' || !palette[color] ? 'inherit' : palette[color].main

  if (darkMode && (color === 'inherit' || !palette[color])) {
    colorValue = 'inherit'
  } else if (darkMode && color === 'dark') colorValue = white.main

  return {
    opacity,
    textTransform,
    verticalAlign,
    textDecoration: 'none',
    color: colorValue,
    fontWeight: fontWeights[fontWeight] && fontWeights[fontWeight],
    ...(textGradient && gradientStyles()),
  }
})

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
import Box from '@mui/material/Box'
import { styled, Theme } from '@mui/material/styles'

export default styled(Box)(
  ({ theme, ownerState, ml }: { theme?: Theme | any; ownerState: any; ml?: any }) => {
    const { palette, functions, borders, boxShadows } = theme
    const { variant, bgColor, color, opacity, borderRadius, shadow, coloredShadow, pointer } =
      ownerState

    const { gradients, grey, white } = palette
    const { linearGradient } = functions
    const { borderRadius: radius } = borders
    const { colored } = boxShadows

    const greyColors: { [key: string]: string } = {
      'grey-100': grey[100],
      'grey-200': grey[200],
      'grey-300': grey[300],
      'grey-400': grey[400],
      'grey-500': grey[500],
      'grey-600': grey[600],
      'grey-700': grey[700],
      'grey-800': grey[800],
      'grey-900': grey[900],
    }

    const validGradients = [
      'primary',
      'secondary',
      'info',
      'success',
      'warning',
      'error',
      'dark',
      'light',
    ]

    const validColors = [
      'transparent',
      'white',
      'black',
      'primary',
      'secondary',
      'info',
      'success',
      'warning',
      'error',
      'light',
      'dark',
      'text',
      'grey-100',
      'grey-200',
      'grey-300',
      'grey-400',
      'grey-500',
      'grey-600',
      'grey-700',
      'grey-800',
      'grey-900',
    ]

    const validBorderRadius = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'section']
    const validBoxShadows = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'inset']

    // background value
    let backgroundValue = bgColor

    if (variant === 'gradient') {
      backgroundValue = validGradients.find((el) => el === bgColor)
        ? linearGradient(gradients[bgColor].main, gradients[bgColor].state)
        : white.main
    } else if (validColors.find((el) => el === bgColor)) {
      backgroundValue = palette[bgColor] ? palette[bgColor].main : greyColors[bgColor]
    } else {
      backgroundValue = bgColor
    }

    // color value
    let colorValue = color

    if (validColors.find((el) => el === color)) {
      colorValue = palette[color] ? palette[color].main : greyColors[color]
    }

    // borderRadius value
    let borderRadiusValue = borderRadius

    if (validBorderRadius.find((el) => el === borderRadius)) {
      borderRadiusValue = radius[borderRadius]
    }

    // boxShadow value
    let boxShadowValue = 'none'

    if (validBoxShadows.find((el) => el === shadow)) {
      boxShadowValue = boxShadows[shadow]
    } else if (coloredShadow) {
      boxShadowValue = colored[coloredShadow] ? colored[coloredShadow] : 'none'
    }

    return {
      opacity,
      background: backgroundValue,
      color: colorValue,
      borderRadius: borderRadiusValue,
      boxShadow: boxShadowValue,
      marginLeft: ml ?? 0,
      cursor: pointer ? 'pointer' : undefined,
    }
  }
)

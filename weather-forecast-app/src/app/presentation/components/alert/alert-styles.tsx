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
import { styled, Theme } from '@mui/material'
import Box from '@mui/material/Box'

const MDAlertRoot = styled(Box)(({ theme, ownerState }: { theme?: Theme; ownerState: any }) => {
  const { palette, typography, borders, functions } = theme
  const { color } = ownerState

  const { white, gradients } = palette
  const { size, fontWeightMedium } = typography
  const { borderRadius } = borders
  const { pxToRem, linearGradient } = functions

  // backgroundImage value
  const backgroundImageValue = gradients[color]
    ? linearGradient(gradients[color].main, gradients[color].state)
    : linearGradient(gradients.info.main, gradients.info.state)

  return {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: pxToRem(60),
    backgroundImage: backgroundImageValue,
    color: white.main,
    position: 'relative',
    padding: pxToRem(16),
    marginBottom: pxToRem(16),
    borderRadius: borderRadius.md,
    fontSize: size.md,
    fontWeight: fontWeightMedium,
  }
})

const MDAlertCloseIcon = styled('span')(({ theme }) => {
  const { palette, typography, functions } = theme

  const { white } = palette
  const { size, fontWeightMedium } = typography
  const { pxToRem } = functions

  return {
    color: white.main,
    fontSize: size.xl,
    padding: `${pxToRem(9)} ${pxToRem(6)} ${pxToRem(8)}`,
    marginLeft: pxToRem(40),
    fontWeight: fontWeightMedium,
    cursor: 'pointer',
    lineHeight: 0,
  }
})

export { MDAlertRoot, MDAlertCloseIcon }

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

// Material Dashboard 2 PRO React TS Base Styles
import colors from '~/app/presentation/styles/theme-dark/base/colors'
import boxShadow from '~/app/presentation/styles/theme-dark/functions/boxShadow'
// Material Dashboard 2 PRO React TS Helper Functions
import pxToRem from '~/app/presentation/styles/theme-dark/functions/pxToRem'

const { white } = colors

// types
type Types = any

const stepIcon: Types = {
  styleOverrides: {
    root: {
      background: '#9fc9ff',
      fill: '#9fc9ff',
      stroke: '#9fc9ff',
      strokeWidth: pxToRem(10),
      width: pxToRem(13),
      height: pxToRem(13),
      borderRadius: '50%',
      zIndex: 99,
      transition: 'all 200ms linear',

      '&.Mui-active': {
        background: white.main,
        fill: white.main,
        stroke: white.main,
        borderColor: white.main,
        boxShadow: boxShadow([0, 0], [0, 2], white.main, 1),
      },

      '&.Mui-completed': {
        background: white.main,
        fill: white.main,
        stroke: white.main,
        borderColor: white.main,
        boxShadow: boxShadow([0, 0], [0, 2], white.main, 1),
      },
    },
  },
}

export default stepIcon

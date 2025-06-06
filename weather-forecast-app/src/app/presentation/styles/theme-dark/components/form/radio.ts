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
import borders from '~/app/presentation/styles/theme-dark/base/borders'
import colors from '~/app/presentation/styles/theme-dark/base/colors'
import linearGradient from '~/app/presentation/styles/theme-dark/functions/linearGradient'
// Material Dashboard 2 PRO React TS Helper Functions
import pxToRem from '~/app/presentation/styles/theme-dark/functions/pxToRem'

const { borderWidth, borderColor } = borders
const { transparent, info } = colors

// types
type Types = any

const radio: Types = {
  styleOverrides: {
    root: {
      '& .MuiSvgIcon-root': {
        width: pxToRem(20),
        height: pxToRem(20),
        color: transparent.main,
        border: `${borderWidth[1]} solid ${borderColor}`,
        borderRadius: '50%',
      },

      '&:after': {
        transition: 'opacity 250ms ease-in-out',
        content: `""`,
        position: 'absolute',
        width: pxToRem(14),
        height: pxToRem(14),
        borderRadius: '50%',
        backgroundImage: linearGradient(info.main, info.main),
        opacity: 0,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        margin: 'auto',
      },

      '&:hover': {
        backgroundColor: transparent.main,
      },

      '&.Mui-focusVisible': {
        border: `${borderWidth[2]} solid ${info.main} !important`,
      },
    },

    colorPrimary: {
      color: borderColor,

      '&.Mui-checked': {
        color: info.main,

        '& .MuiSvgIcon-root': {
          borderColor: info.main,
        },

        '&:after': {
          opacity: 1,
        },
      },
    },

    colorSecondary: {
      color: borderColor,

      '&.Mui-checked': {
        color: info.main,

        '& .MuiSvgIcon-root': {
          borderColor: info.main,
        },

        '&:after': {
          opacity: 1,
        },
      },
    },
  },
}

export default radio

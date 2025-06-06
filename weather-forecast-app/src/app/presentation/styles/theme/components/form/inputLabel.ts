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
import colors from '~/app/presentation/styles/theme/base/colors'
import typography from '~/app/presentation/styles/theme/base/typography'

const { text, info } = colors
const { size } = typography

// types
type Types = any

const inputLabel: Types = {
  styleOverrides: {
    root: {
      fontSize: size.sm,
      color: text.main,
      lineHeight: 0.9,

      '&.Mui-focused': {
        color: info.main,
      },

      '&.MuiInputLabel-shrink': {
        lineHeight: 1.5,
        fontSize: size.md,

        '~ .MuiInputBase-root .MuiOutlinedInput-notchedOutline legend': {
          fontSize: '0.85em',
        },
      },
    },

    sizeSmall: {
      fontSize: size.xs,
      lineHeight: 1.625,

      '&.MuiInputLabel-shrink': {
        lineHeight: 1.6,
        fontSize: size.sm,

        '~ .MuiInputBase-root .MuiOutlinedInput-notchedOutline legend': {
          fontSize: '0.72em',
        },
      },
    },
  },
}

export default inputLabel

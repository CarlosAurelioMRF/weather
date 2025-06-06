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
import typography from '~/app/presentation/styles/theme-dark/base/typography'
// Material Dashboard 2 PRO React TS Helper Functions
import rgba from '~/app/presentation/styles/theme-dark/functions/rgba'

const { info, inputBorderColor, dark, grey, white } = colors
const { size } = typography
const { borderWidth } = borders

// types
type Types = any

const input: Types = {
  styleOverrides: {
    root: {
      fontSize: size.sm,
      color: dark.main,

      '&:hover:not(.Mui-disabled):before': {
        borderBottom: `${borderWidth[1]} solid ${rgba(inputBorderColor, 0.6)}`,
      },

      '&:before': {
        borderColor: rgba(inputBorderColor, 0.6),
      },

      '&:after': {
        borderColor: info.main,
      },

      input: {
        color: white.main,

        '&::-webkit-input-placeholder': {
          color: grey[100],
        },
      },
    },
  },
}

export default input

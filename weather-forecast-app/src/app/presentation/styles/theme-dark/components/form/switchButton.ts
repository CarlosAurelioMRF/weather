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
import boxShadows from '~/app/presentation/styles/theme-dark/base/boxShadows'
import colors from '~/app/presentation/styles/theme-dark/base/colors'
import linearGradient from '~/app/presentation/styles/theme-dark/functions/linearGradient'
// Material Dashboard 2 PRO React TS Helper Functions
// import rgba from "~/app/presentation/styles/theme-dark/functions/rgba";
import pxToRem from '~/app/presentation/styles/theme-dark/functions/pxToRem'

const { white, gradients, grey, transparent } = colors
const { borderWidth } = borders
const { md } = boxShadows

// types
type Types = any

const switchButton: Types = {
  defaultProps: {
    disableRipple: false,
  },

  styleOverrides: {
    switchBase: {
      color: gradients.dark.main,

      '&:hover': {
        backgroundColor: transparent.main,
      },

      '&.Mui-checked': {
        color: gradients.dark.main,

        '&:hover': {
          backgroundColor: transparent.main,
        },

        '& .MuiSwitch-thumb': {
          borderColor: `${gradients.dark.main} !important`,
        },

        '& + .MuiSwitch-track': {
          backgroundColor: `${gradients.dark.main} !important`,
          borderColor: `${gradients.dark.main} !important`,
          opacity: 1,
        },
      },

      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: '0.3 !important',
      },

      '&.Mui-focusVisible .MuiSwitch-thumb': {
        backgroundImage: linearGradient(gradients.info.main, gradients.info.state),
      },
    },

    thumb: {
      backgroundColor: white.main,
      boxShadow: md,
      border: `${borderWidth[1]} solid ${grey[400]}`,
    },

    track: {
      width: pxToRem(32),
      height: pxToRem(15),
      backgroundColor: grey[400],
      border: `${borderWidth[1]} solid ${grey[400]}`,
      opacity: 1,
    },

    checked: {},
  },
}

export default switchButton

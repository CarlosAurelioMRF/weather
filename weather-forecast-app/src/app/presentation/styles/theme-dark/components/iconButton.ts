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

const { transparent } = colors

// types
type Types = any

const iconButton: Types = {
  styleOverrides: {
    root: {
      '&:hover': {
        backgroundColor: transparent.main,
      },
    },
  },
}

export default iconButton

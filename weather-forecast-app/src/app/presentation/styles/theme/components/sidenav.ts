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
import borders from '~/app/presentation/styles/theme/base/borders'
import colors from '~/app/presentation/styles/theme/base/colors'
// Material Dashboard 2 PRO React TS Helper Functions
import pxToRem from '~/app/presentation/styles/theme/functions/pxToRem'

const { white } = colors
const { borderRadius } = borders

// types
type Types = any

const sidenav: Types = {
  styleOverrides: {
    root: {
      width: pxToRem(270),
      whiteSpace: 'nowrap',
      border: 'none',
    },

    paper: {
      width: pxToRem(270),
      backgroundColor: white.main,
      height: `calc(100vh - ${pxToRem(32)})`,
      margin: pxToRem(16),
      borderRadius: borderRadius.xl,
      border: 'none',
    },

    paperAnchorDockedLeft: {
      borderRight: 'none',
    },
  },
}

export default sidenav

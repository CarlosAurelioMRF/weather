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

const { white } = colors
const { borderWidth } = borders

// types
type Types = any

const stepConnector: Types = {
  styleOverrides: {
    root: {
      color: '#9fc9ff',
      transition: 'all 200ms linear',

      '&.Mui-active': {
        color: white.main,
      },

      '&.Mui-completed': {
        color: white.main,
      },
    },

    alternativeLabel: {
      top: '14%',
      left: '-50%',
      right: '50%',
    },

    line: {
      borderWidth: `${borderWidth[2]} !important`,
      borderColor: 'currentColor',
      opacity: 0.5,
    },
  },
}

export default stepConnector

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
// Material Dashboard 2 PRO React TS Helper Functions
import rgba from '~/app/presentation/styles/theme/functions/rgba'

const { info, white, gradients } = colors

// types
type Types = any

const flatpickr: Types = {
  '.flatpickr-day:hover, .flatpickr-day:focus, .flatpickr-day.nextMonthDay:hover, .flatpickr-day.nextMonthDay:focus':
    {
      background: rgba(info.main, 0.28),
      border: 'none',
    },

  '.flatpickr-day.today': {
    background: info.main,
    color: white.main,
    border: 'none',

    '&:hover, &:focus': {
      background: `${info.focus} !important`,
    },
  },

  '.flatpickr-day.selected, .flatpickr-day.selected:hover, .flatpickr-day.nextMonthDay.selected, .flatpickr-day.nextMonthDay.selected:hover, .flatpickr-day.nextMonthDay.selected:focus':
    {
      background: `${gradients.info.state} !important`,
      color: white.main,
      border: 'none',
    },

  '.flatpickr-months .flatpickr-next-month:hover svg, .flatpickr-months .flatpickr-prev-month:hover svg':
    {
      color: `${info.main} !important`,
      fill: `${info.main} !important`,
    },
}

export default flatpickr

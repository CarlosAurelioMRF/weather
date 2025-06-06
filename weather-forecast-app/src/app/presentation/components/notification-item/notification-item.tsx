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

import { FC, forwardRef, ReactNode } from 'react'
import { MenuItemProps } from '@mui/material'
import Link from '@mui/material/Link'
// @mui material components
import MenuItem from '@mui/material/MenuItem'
// Material Dashboard 2 PRO React TS components
import { MDBox, MDTypography } from '~/app/presentation/components'
// custom styles for the NotificationItem
import menuItem from './notification-item-styles'

// Declaring props types for NotificationItem
interface Props extends MenuItemProps {
  icon?: ReactNode
  title: string
  [key: string]: any
}

const NotificationItem: FC<Props> = forwardRef(({ icon, title, ...rest }, ref) => (
  <MenuItem {...rest} ref={ref} sx={(theme) => menuItem(theme)}>
    <MDBox component={Link} py={0.5} display='flex' alignItems='center' lineHeight={1}>
      <MDTypography variant='body1' color='secondary' lineHeight={0.75}>
        {icon}
      </MDTypography>
      <MDTypography variant='button' fontWeight='regular' sx={{ ml: 1 }}>
        {title}
      </MDTypography>
    </MDBox>
  </MenuItem>
))

NotificationItem.displayName = 'NotificationItem'

export default NotificationItem

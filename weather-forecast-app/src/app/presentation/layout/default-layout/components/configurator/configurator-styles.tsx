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

// @mui material components
import Drawer from '@mui/material/Drawer'
import { styled, Theme } from '@mui/material/styles'

export default styled(Drawer)(({ theme, ownerState }: { theme?: Theme; ownerState: any }) => {
  const { boxShadows, functions, transitions } = theme
  const { openConfigurator } = ownerState

  const configuratorWidth = 360
  const { lg } = boxShadows
  const { pxToRem } = functions

  // drawer styles when openConfigurator={true}
  const drawerOpenStyles = () => ({
    width: configuratorWidth,
    left: 'initial',
    right: 0,
    transition: transitions.create('right', {
      easing: transitions.easing.sharp,
      duration: transitions.duration.short,
    }),
  })

  // drawer styles when openConfigurator={false}
  const drawerCloseStyles = () => ({
    left: 'initial',
    right: pxToRem(-350),
    transition: transitions.create('all', {
      easing: transitions.easing.sharp,
      duration: transitions.duration.short,
    }),
  })

  return {
    '& .MuiDrawer-paper': {
      height: '100vh',
      margin: 0,
      padding: `0 ${pxToRem(10)}`,
      borderRadius: 0,
      boxShadow: lg,
      overflowY: 'auto',
      ...(openConfigurator ? drawerOpenStyles() : drawerCloseStyles()),
    },
  }
})

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

function sidenavLogoLabel(theme: Theme, ownerState: any) {
  const { functions, transitions, typography, breakpoints } = theme
  const { miniSidenav } = ownerState

  const { pxToRem } = functions
  const { fontWeightMedium } = typography

  return {
    ml: 0.5,
    fontWeight: fontWeightMedium,
    wordSpacing: pxToRem(-1),
    transition: transitions.create('opacity', {
      easing: transitions.easing.easeInOut,
      duration: transitions.duration.standard,
    }),

    [breakpoints.up('xl')]: {
      opacity: miniSidenav ? 0 : 1,
    },
  }
}

const SidenavRoot = styled(Drawer)(
  ({ theme, ownerState }: { theme?: Theme | any; ownerState: any }) => {
    const { palette, boxShadows, transitions, breakpoints, functions } = theme
    const { transparentSidenav, whiteSidenav, miniSidenav, darkMode } = ownerState

    const sidebarWidth = 270
    const { transparent, gradients, white, background } = palette
    const { xxl } = boxShadows
    const { pxToRem, linearGradient } = functions

    let backgroundValue = darkMode
      ? background.sidenav
      : linearGradient(gradients.dark.main, gradients.dark.state)

    if (transparentSidenav) {
      backgroundValue = transparent.main
    } else if (whiteSidenav) {
      backgroundValue = white.main
    }

    // styles for the sidenav when miniSidenav={false}
    const drawerOpenStyles = () => ({
      background: backgroundValue,
      transform: 'translateX(0)',
      transition: transitions.create('transform', {
        easing: transitions.easing.sharp,
        duration: transitions.duration.shorter,
      }),

      [breakpoints.up('xl')]: {
        boxShadow: transparentSidenav ? 'none' : xxl,
        marginBottom: transparentSidenav ? 0 : 'inherit',
        left: '0',
        width: sidebarWidth,
        transform: 'translateX(0)',
        transition: transitions.create(['width', 'background-color'], {
          easing: transitions.easing.sharp,
          duration: transitions.duration.enteringScreen,
        }),
      },
    })

    // styles for the sidenav when miniSidenav={true}
    const drawerCloseStyles = () => ({
      background: backgroundValue,
      transform: `translateX(${pxToRem(-320)})`,
      transition: transitions.create('transform', {
        easing: transitions.easing.sharp,
        duration: transitions.duration.shorter,
      }),

      [breakpoints.up('xl')]: {
        boxShadow: transparentSidenav ? 'none' : xxl,
        marginBottom: transparentSidenav ? 0 : 'inherit',
        left: '0',
        width: pxToRem(96),
        overflowX: 'hidden',
        transform: 'translateX(0)',
        transition: transitions.create(['width', 'background-color'], {
          easing: transitions.easing.sharp,
          duration: transitions.duration.shorter,
        }),
      },
    })

    return {
      '& .MuiDrawer-paper': {
        boxShadow: xxl,
        border: 'none',

        ...(miniSidenav ? drawerCloseStyles() : drawerOpenStyles()),
      },
    }
  }
)

export { sidenavLogoLabel, SidenavRoot }

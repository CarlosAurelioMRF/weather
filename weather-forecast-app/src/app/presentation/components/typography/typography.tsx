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

import { FC, forwardRef, ReactNode, useMemo } from 'react'
// @mui material components
import { TypographyProps } from '@mui/material'
// Material Dashboard 2 PRO React TS contexts
import { useToggleTheme } from '~/app/presentation/hooks'
// Custom styles for MDTypography
import MDTypographyRoot from './typography-styles'

// Declaring props types for MDTypography
interface Props extends TypographyProps {
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
    | 'light'
    | 'dark'
    | 'text'
    | 'white'
  fontWeight?: 'light' | 'regular' | 'medium' | 'bold' | undefined
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase'
  verticalAlign?:
    | 'unset'
    | 'baseline'
    | 'sub'
    | 'super'
    | 'text-top'
    | 'text-bottom'
    | 'middle'
    | 'top'
    | 'bottom'
  textGradient?: boolean
  children: ReactNode
  opacity?: number
  [key: string]: any
}

const MDTypography: FC<Props | any> = forwardRef(
  (
    { color, fontWeight, textTransform, verticalAlign, textGradient, opacity, children, ...rest },
    ref
  ) => {
    const { themeStorage } = useToggleTheme()

    const isDarkMode = useMemo(() => themeStorage.theme === 'dark', [themeStorage.theme])

    return (
      <MDTypographyRoot
        {...rest}
        ref={ref}
        ownerState={{
          color,
          textTransform,
          verticalAlign,
          fontWeight,
          opacity,
          textGradient,
          darkMode: isDarkMode,
        }}
      >
        {children}
      </MDTypographyRoot>
    )
  }
)

MDTypography.displayName = 'MDTypography'

// Declaring default props for MDTypography
MDTypography.defaultProps = {
  color: 'dark',
  fontWeight: undefined,
  textTransform: 'none',
  verticalAlign: 'unset',
  textGradient: false,
  opacity: 1,
}

export default MDTypography



import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import colors from './colors'

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}
// 3. extend the theme
const theme = extendTheme({ config, colors })

export default theme


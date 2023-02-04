

import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const colors = {
  brand: {
    100: '#f79afc',
    900: '#1af02c',
  },
}

// 3. extend the theme
const theme = extendTheme({ config, colors })

export default theme


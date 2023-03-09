import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import colors from "./colors";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#F8F9FA",
        fontFamily: "Poppins, sans-serif",
      },
    },
  },
  colors,
  config,
});

export default theme;

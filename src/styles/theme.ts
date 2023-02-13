import { extendTheme } from "@chakra-ui/react";
import colors from "./colors";

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
});

export default theme;

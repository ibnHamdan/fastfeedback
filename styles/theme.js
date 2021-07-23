import React from "react";
import { extendTheme } from "@chakra-ui/react";

const fonts = {};
const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
        fontWeights: {
          normal: 400,
          medium: 600,
          bold: 700,
        },
      },
    },
  },
});

export default theme;

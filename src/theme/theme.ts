"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#C4F82A",
    },
    secondary: {
      main: "#1F1F1F",
      light: "#333333",
    },

    background: {
      default: "#141414",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#6B6B6B",
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    preset1: {
      fontSize: "clamp(1.125rem, 1vw + 1rem, 1.5rem)", // Scales between 18px and 22px
      lineHeight: 1.5,
      letterSpacing: 0,
      fontWeight: 800,
    },
    preset2: {
      fontSize: "clamp(0.875rem, 0.5vw + 0.825rem, 0.875rem)", // Scales between 14px and 16px
      lineHeight: 1.5,
      letterSpacing: 0,
      fontWeight: 400,
    },
    preset2Bold: {
      fontSize: "clamp(0.875rem, 0.5vw + 0.825rem, 0.875rem)", // Scales between 14px and 16px
      lineHeight: 1.5,
      letterSpacing: 0,
      fontWeight: 600,
    },
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 800,
          padding: "4px 8px",
        },
      },
    },
  },
});

// Augment the Theme type to include our custom variants
declare module "@mui/material/styles" {
  interface TypographyVariants {
    preset1: React.CSSProperties;
    preset2: React.CSSProperties;
    preset2Bold: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    preset1: React.CSSProperties;
    preset2: React.CSSProperties;
    preset2Bold: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    preset1: true;
    preset2: true;
    preset2Bold: true;
  }
}

export default theme;

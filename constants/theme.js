import { createTheme } from "@mui/material/styles";

// Define your brand color palette
const colors = {
  // Primary - Bright Golden Yellow (brand primary for text/headings)
  primary: {
    main: "#fecf4f", // Brand primary - bright golden yellow for text/headings
    light: "#fff3a0", // Lighter yellow for hover states
    dark: "#e6b800", // Darker yellow for pressed states
    contrastText: "#2d2d2d", // Dark text for readability on yellow
  },
  // Secondary - Soft Turquoise (for backgrounds and navigation)
  secondary: {
    main: "#82d0dd", // Brand turquoise for menu bars and backgrounds
    light: "#b5e2ea", // Lighter turquoise
    dark: "#5ba8b8", // Darker turquoise for depth
    contrastText: "#2d4a52", // Dark navy text on turquoise
  },
  // Brand accent colors
  brand: {
    brown: "#a06b37", // Warm brown accent
    darkGold: "#dea04c", // Darker gold accent
  },
  // Extended palette for comprehensive theming
  accent: {
    cream: "#fef9e7", // Very light cream (based on primary)
    sage: "#7ba8a0", // Muted green that complements the palette
    coral: "#ff7b54", // Warm coral for CTAs and alerts
    navy: "#2d4a52", // Deep blue-green for text and contrast
    lightGray: "#f5f7f8", // Very light gray for subtle backgrounds
    mediumGray: "#8a9ba8", // Medium gray for secondary text
    turquoiseLight: "#e8f4f6", // Very light turquoise for section backgrounds
  },
};

const theme = createTheme({
  palette: {
    primary: colors.primary,
    secondary: colors.secondary,
    background: {
      default: "#ffffff",
      paper: colors.accent.cream, // Subtle cream for cards
    },
    text: {
      primary: colors.primary.main, // Headers use the bright golden yellow
      secondary: colors.accent.navy, // Body text uses the deep navy for readability
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    // All headers use FinkHeavy-Medium with brand golden yellow
    h1: {
      fontFamily: '"FinkHeavy-Medium", "Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: "clamp(2.5rem, 5vw, 4rem)",
      fontWeight: 700,
      lineHeight: 1.2,
      color: colors.primary.main, // Bright golden yellow
      letterSpacing: "-0.02em",
    },
    h2: {
      fontFamily: '"FinkHeavy-Medium", "Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: "clamp(2rem, 4vw, 3rem)",
      fontWeight: 600,
      lineHeight: 1.3,
      color: colors.primary.main, // Bright golden yellow
      letterSpacing: "-0.01em",
    },
    h3: {
      fontFamily: '"FinkHeavy-Medium", "Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
      fontWeight: 600,
      lineHeight: 1.4,
      color: colors.primary.main, // Bright golden yellow
    },
    h4: {
      fontFamily: '"FinkHeavy-Medium", "Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
      fontWeight: 500,
      lineHeight: 1.4,
      color: colors.primary.main, // Bright golden yellow
    },
    h5: {
      fontFamily: '"FinkHeavy-Medium", "Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
      fontWeight: 500,
      lineHeight: 1.4,
      color: colors.primary.main, // Bright golden yellow
    },
    h6: {
      fontFamily: '"FinkHeavy-Medium", "Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
      fontWeight: 500,
      lineHeight: 1.4,
      color: colors.primary.main, // Bright golden yellow
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
      color: colors.accent.navy, // Deep navy for body text readability
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
      color: colors.accent.mediumGray, // Medium gray for secondary text
    },
    // Custom typography variant for subheadings
    subtitle1: {
      fontFamily: '"FinkHeavy-Medium", "Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: "1.1rem",
      fontWeight: 400,
      color: colors.brand.darkGold, // Darker gold for subtitles
      letterSpacing: "0.02em",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: "none",
          padding: "14px 32px",
          fontSize: "1rem",
          fontFamily: '"FinkHeavy-Medium", "Roboto", "Helvetica", "Arial", sans-serif',
          fontWeight: 500,
          letterSpacing: "0.01em",
          transition: "all 0.3s ease",
        },
        contained: {
          boxShadow: `0 4px 16px ${colors.primary.main}40`,
          "&:hover": {
            boxShadow: `0 8px 24px ${colors.primary.main}60`,
            transform: "translateY(-2px)",
          },
        },
        containedPrimary: {
          background: `linear-gradient(135deg, ${colors.primary.main} 0%, ${colors.brand.darkGold} 100%)`,
          color: colors.accent.navy,
          "&:hover": {
            background: `linear-gradient(135deg, ${colors.primary.light} 0%, ${colors.primary.main} 100%)`,
          },
        },
        containedSecondary: {
          background: `linear-gradient(135deg, ${colors.secondary.main} 0%, ${colors.secondary.dark} 100%)`,
          color: "#FFFFFF",
          "&:hover": {
            background: `linear-gradient(135deg, ${colors.secondary.light} 0%, ${colors.secondary.main} 100%)`,
          },
        },
        outlined: {
          borderColor: colors.primary.main,
          color: colors.primary.main,
          borderWidth: 2,
          "&:hover": {
            borderColor: colors.primary.dark,
            backgroundColor: `${colors.primary.main}20`,
            borderWidth: 2,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: `0 8px 32px ${colors.secondary.main}20`,
          border: `1px solid ${colors.accent.cream}`,
          "&:hover": {
            boxShadow: `0 16px 48px ${colors.secondary.main}30`,
            transform: "translateY(-6px)",
            transition: "all 0.3s ease",
            borderColor: colors.secondary.main,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 12,
            "&:focus-within": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: colors.primary.main,
                borderWidth: 2,
              },
            },
          },
        },
      },
    },
    // AppBar/Menu styling for turquoise background
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: colors.secondary.main, // Turquoise background for nav
          color: colors.secondary.contrastText, // Dark navy text on turquoise
          boxShadow: `0 4px 20px ${colors.secondary.main}40`,
        },
      },
    },
    // Chip styling for accent elements
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: colors.brand.brown,
          color: "#FFFFFF",
          fontFamily: '"FinkHeavy-Medium", "Roboto", "Helvetica", "Arial", sans-serif',
        },
      },
    },
    // Style for typography components to ensure consistent header styling
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontFamily: '"FinkHeavy-Medium", "Roboto", "Helvetica", "Arial", sans-serif',
        },
        h2: {
          fontFamily: '"FinkHeavy-Medium", "Roboto", "Helvetica", "Arial", sans-serif',
        },
        h3: {
          fontFamily: '"FinkHeavy-Medium", "Roboto", "Helvetica", "Arial", sans-serif',
        },
        h4: {
          fontFamily: '"FinkHeavy-Medium", "Roboto", "Helvetica", "Arial", sans-serif',
        },
        h5: {
          fontFamily: '"FinkHeavy-Medium", "Roboto", "Helvetica", "Arial", sans-serif',
        },
        h6: {
          fontFamily: '"FinkHeavy-Medium", "Roboto", "Helvetica", "Arial", sans-serif',
        },
      },
    },
  },
});

// Add custom colors to the theme after creation
theme.palette.brand = colors.brand;
theme.palette.accent = colors.accent;

export default theme;

/**
 * Color intention that you want to used in your theme
 * @param {JsonObject} theme Theme customization object
 */

export default function themePalette(theme) {
  return {
    common: {
      black: theme.colors?.darkPaper
    },
    grey: {
      200: theme.colors?.grey200,
      300: theme.colors?.grey300,
      500: theme.colors?.grey500
    },
    dark: {
      main: theme.colors?.darkLevel1,
      dark: theme.colors?.darkLevel2
    },
    background: {
      paper: theme.paper,
      default: theme.backgroundDefault
    }
  };
}

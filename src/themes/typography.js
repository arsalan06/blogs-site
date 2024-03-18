/**
 * Typography used in theme
 * @param {JsonObject} theme theme customization object
 */

export default function themeTypography(theme) {
  return {
    fontFamily: 'Manrope',
    h6: {
      fontWeight: 700,
      color: theme.textLight,
      fontSize: '20px'
    },
    h5: {
      fontSize: '32px',
      color: theme.textLight,
      fontWeight: 700
    },
    h4: {
      fontSize: '34px',
      color: theme.textDark,
      fontWeight: 700
    },
    h3: {
      fontSize: '48px',
      color: theme.textLight,
      fontWeight: 700
    },
    h2: {
      fontSize: '58px',
      color: theme.textLight,
      fontWeight: 700
    },
    h1: {
      fontSize: '64px',
      color: theme.heading,
      fontWeight: 700
    },
    textCaption: {
      fontSize: '16px',
      color: theme.textCaption,
      fontWeight: 600,
      display: 'flex',
      alignItems: 'center'
    },
    linkBlack: {
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: '1.334em',
      color: theme.textDark
    },
    linkWhite: {
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: '1.334em',
      color: theme.textLight
    },
    textOrange: {
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: '1.334em',
      color: theme.textOrange
    },
    body1: {
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: '1.334em',
      color: theme.textLight
    },
    body2: {
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: '1.334em',
      color: theme.textDark1
    }
  };
}

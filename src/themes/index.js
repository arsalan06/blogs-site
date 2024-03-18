import { createTheme } from '@mui/material/styles';

// assets
import colors from '../assets/scss/_themes-vars.module.scss';

// project imports
import componentStyleOverrides from './compStyleOverride';
import themePalette from './palette';
import themeTypography from './typography';

export const theme = () => {
  const color = colors;

  const themeOption = {
    colors: color,
    heading: color.darkLevel2,
    paper: color.paper,
    backgroundDefault: color.paper,
    textCaption: color.grey500,
    textDark1: color.darkLevel1,
    textDark: color.darkLevel2,
    textLight: color.paper,
    textOrange: color.orangeDark
  };

  const themeOptions = {
    direction: 'ltr',
    palette: themePalette(themeOption),
    mixins: {
      toolbar: {
        minHeight: '48px',
        padding: '16px',
        '@media (min-width: 600px)': {
          minHeight: '48px'
        }
      }
    },
    typography: themeTypography(themeOption)
  };

  const themes = createTheme(themeOptions);
  themes.components = componentStyleOverrides(themeOption);

  return themes;
};

export default theme;

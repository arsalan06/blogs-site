export default function componentStyleOverrides(theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          borderRadius: '4px',
          color: theme.paper,
          backgroundColor: theme.colors?.darkLevel2,
          '&:hover': {
            color: theme.paper,
            backgroundColor: theme.colors?.darkLevel1
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          cursor: 'pointer',
          minWidth: 260,
          boxShadow: 'none !important',
          border: 'none',
          outline: 'none'
        }
      }
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          color: theme.colors?.textDark,
          padding: '4px'
        },
        title: {
          fontSize: '1.125rem'
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '10px'
        }
      }
    }
  };
}

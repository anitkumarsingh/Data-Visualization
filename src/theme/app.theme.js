import color from 'color';
import { createMuiTheme } from '@material-ui/core/styles';

const palette = {
  primary: {
    main: '#2196f3',
    light: '#eeeae3',
    dark: '#403208',
    contrastText: '#403208',
  },
  secondary: {
    main: '#bb543e',
  },
  ternary: {
    main: '#453182',
    light: '#a394b7',
    dark: '#843384',
  },
  contributor_primary: {
    main: '#a363ff',
    light: '#eeeae3',
  },
  contributor_secondary: {
    main: '#6200ee',
  },
  contributor_text: {
    primary: '#6200ee',
  },
  others: {
    bg1: '#ede9e2',
  },
  action: {
    hoverOpacity: 0.1,
  },
  tonalOffset: 0.482,
};

const theme = createMuiTheme({
  palette,
  typography: {
    fontFamily: '"Catamaran", "Roboto", "Helvetica", "Arial", sans-serif',
    useNextVariants: true,
    h1: {
      fontFamily: '"Montserrat","Catamaran", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 300,
      fontSize: '6.1075rem',
      letterSpacing: '-1.5px',
      lineHeight: '120px',
    },
    h2: {
      fontFamily: '"Montserrat","Catamaran", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: '3.77375rem',
      letterSpacing: '-0.5px',
      lineHeight: '73px',
    },
    h3: {
      fontFamily: '"Montserrat","Catamaran", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: '2.990625rem',
      letterSpacing: '0px',
      lineHeight: '58px',
    },
    h4: {
      fontFamily: '"Montserrat","Catamaran", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
      fontSize: '2.086875rem',
      letterSpacing: '0.25px',
      lineHeight: '40px',
    },
    h5: {
      fontFamily: '"Montserrat", "Catamaran","Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
      fontSize: '1.48375rem',
      letterSpacing: '0px',
      lineHeight: '29px',
    },
    h6: {
      fontFamily: '"Montserrat","Catamaran", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
      fontSize: '1.236875rem',
      letterSpacing: '0.25px',
      lineHeight: '24px',
    },
    body1: {
      fontWeight: 400,
      fontSize: '1.089375rem',
      letterSpacing: '0.5px',
      lineHeight: '28px',
    },
    body2: {
      fontWeight: 400,
      fontSize: '0.953125rem',
      letterSpacing: '0.25px',
      lineHeight: '20px',
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: '1.089375rem',
      letterSpacing: '0.15px',
      lineHeight: '24px',
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: '0.953125rem',
      letterSpacing: '0.1px',
      lineHeight: '24px',
    },
    button: {
      fontFamily: '"Montserrat","Catamaran", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
      fontSize: '0.8125rem',
      letterSpacing: '0',
      lineHeight: 1.846,
      textTransform: 'none',
    },
    caption: {
      fontWeight: 200,
      fontSize: '0.81875rem',
      letterSpacing: '0.4px',
      lineHeight: 1.22,
    },
    overline: {
      fontWeight: 500,
      fontSize: '0.816875rem',
      letterSpacing: '2px',
      lineHeight: '16px',
    },
  },
  spacing: {
    unit: 8,
  },
  overrides: {
    MuiButton: {
      containedPrimary: {
        '&:hover': {
          backgroundColor: color(palette.primary.main)
            .lighten(palette.action.hoverOpacity),
            // .hex(),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: palette.primary.main,
          },
        },
      },
    },
    MuiChip: {
      root: {
        maxWidth: '100%',
      },
      label: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
    },
    MuiTypography: {
      root: {
        overflowWrap: 'break-word',
      },
    },
  },
});

export default theme;

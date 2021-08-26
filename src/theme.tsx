import red from '@material-ui/core/colors/red';
import { createTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#90caf9"
    },
    secondary: {
      main: "#f48fb1"
    },
    error: {
      main: red.A400
    }
  }
});

export default theme;

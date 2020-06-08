import { createMuiTheme } from '@material-ui/core/styles';

const backgroundGrey = "#595454"
const buttonBlue = "#0B72B9"

export default createMuiTheme({
    palette: {
        common: {
            grey: backgroundGrey,
            blue: buttonBlue,
        },

        primary: {
            main: `${backgroundGrey}`,
        },

        secondary: {
            main: `${buttonBlue}`
        },
    },
    
    typography: {
        submitButton: {
            color: "white",
            borderColor: "white",
            backgroundColor: buttonBlue,
        },
    }
});

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
        standardButton: {
            color: "white",
            borderColor: "white",
            backgroundColor: buttonBlue,
        },

        textFieldStyle: {
            color: "white",
            fontFamily: "Roboto",
        },

        h2: {
            fontFamily: "Roboto",
            fontWeight: "700",
            fontSize: "2.5rem",
            color: "white",
            lineHeight: 1.5,
            textAlign: "center"
        },
    }
});

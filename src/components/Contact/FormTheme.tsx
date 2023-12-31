import { createTheme } from "@mui/material/styles";
import tailwind from "../../../tailwind.config";

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: tailwind.theme.extend.colors["primary"]["DEFAULT"],
    },
    secondary: {
      main: tailwind.theme.extend.colors["secondary"]["DEFAULT"],
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: "8px 8px 0px 0px",
          backgroundColor: "#FFF",
          ".MuiInputBase-root": {
            borderRadius: "8px 8px 0px 0px",
            backgroundColor: "#FFF",
            fontWeight: "500",
          },
          ".MuiInputBase-root:after": {
            borderBottomWidth: "5px",
          },
          ".MuiInputBase-multiline:after": {
            borderBottomWidth: "6px",
          },
          ".MuiInputBase-root:not(.Mui-error):after": {
            borderBottomColor:
              tailwind.theme.extend.colors["secondary"]["darker"],
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontWeight: "500",
        },
      },
    },
  },
});

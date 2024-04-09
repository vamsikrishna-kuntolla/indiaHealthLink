import React from "react";
import { useSelector } from "react-redux";
import { withRouter, Switch } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, StyledEngineProvider } from "@mui/material";

// defaultTheme
import theme from "./theme";

// routing
import Routes from "./routes";

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme()}>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;

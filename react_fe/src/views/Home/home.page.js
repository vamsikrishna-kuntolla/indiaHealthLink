import React from "react";
import Page from "../../components/Page";

import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const Styles = makeStyles((theme) => ({
  header: {
    fontSize: "48px",
    fontWeight: 700,
  },
}));

const HomePage = () => {
  const classes = Styles();
  return (
    <Page title={"Home"}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Typography className={classes.header}>React Js</Typography>
      </Box>
    </Page>
  );
};

export default HomePage;

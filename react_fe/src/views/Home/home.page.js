import React from "react";
import Page from "../../components/Page";

import { Box, Typography, Container, Grid, Avatar } from "@mui/material";
import { makeStyles } from "@mui/styles";

const Styles = makeStyles((theme) => ({
  header: {
    fontSize: "24px",
    fontWeight: 500,
    margin: "30px 0",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
    },
  },
  principlesHeader: {
    fontSize: "24px",
    lineHeight: "48px",
    textAlign: "center",
    margin: "24px 0",
    fontWeight: 500,
  },
  principlesValue: {
    fontSize: "16px",
    lineHeight: "24px",
    textAlign: "center",
    fontWeight: 400,
    marginBottom: "24px",
  },
}));

const HomePage = () => {
  const classes = Styles();
  return (
    <Page title={"Home"}>
      <Box sx={{ marginBottom: "48px" }}>
        <Container maxWidth="lg">
          <Typography className={classes.header}>
            Welcome to India Health Link, your premier destination for valuable
            health facts, expert tips, and insights into innovative solutions
            like hPod. Stay informed, inspired, and empowered on your journey to
            optimal health.
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <Avatar
                variant="square"
                alt="NCD's cause"
                src="/static/img/ihl-1.jpg"
                sx={{
                  height: 380,
                  width: 380,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Avatar
                variant="square"
                alt="NCD's cause"
                src="/static/img/ihl-2.jpg"
                sx={{
                  height: 380,
                  width: 380,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Avatar
                variant="square"
                alt="NCD's cause"
                src="/static/img/ihl-3.jpg"
                sx={{
                  height: 380,
                  width: 380,
                }}
              />
            </Grid>
          </Grid>
        </Container>
        <Box sx={{ backgroundColor: "#D3FFFF", marginTop: "48px" }}>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    fontSize: "24px",
                    lineHeight: "48px",
                    textAlign: "center",
                    margin: "24px 0",
                    fontWeight: 500,
                  }}
                >
                  Our Principles
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Avatar
                  variant="square"
                  alt="Integrity"
                  src="/static/img/Integrity.png"
                  sx={{
                    height: 150,
                    width: 150,
                    margin: "0 auto",
                  }}
                />
                <Typography
                  color="primary"
                  className={classes.principlesHeader}
                >
                  Integrity
                </Typography>
                <Typography className={classes.principlesValue}>
                  We stand by our values and work towards creating awareness and
                  making Quality Healthcare accessible!
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Avatar
                  variant="square"
                  alt="Hope"
                  src="/static/img/Hope.png"
                  sx={{
                    height: 150,
                    width: 150,
                    margin: "0 auto",
                  }}
                />
                <Typography
                  color="primary"
                  className={classes.principlesHeader}
                >
                  Hope
                </Typography>
                <Typography className={classes.principlesValue}>
                  We bring the light of hope to everyone! The hope of Growth and
                  Success, along with Improved Healthcare.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Avatar
                  variant="square"
                  alt="Loyalty"
                  src="/static/img/Loyal.png"
                  sx={{
                    height: 150,
                    width: 150,
                    margin: "0 auto",
                  }}
                />
                <Typography
                  color="primary"
                  className={classes.principlesHeader}
                >
                  Loyalty
                </Typography>
                <Typography className={classes.principlesValue}>
                  We care about you everyday and we’re always going to be there
                  for you, in sickness and in health.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </Page>
  );
};

export default HomePage;

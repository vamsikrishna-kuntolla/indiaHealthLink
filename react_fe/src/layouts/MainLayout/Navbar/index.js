import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import {
  ButtonBase,
  Badge,
  Autocomplete,
  TextField,
  Grid,
} from "@mui/material";
import { Notifications } from "@mui/icons-material";

const pages = ["Home", "Dashboard", "Analytics", "Charts"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ py: 1, backgroundColor: "rgba(255,255,255,1)" }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: "space-between" }} disableGutters>
          <Avatar
            sx={{
              width: { xs: "121px", sm: "162px" },
              height: { xs: "48px", sm: "64px" },
            }}
            src="/static/img/ihl.png"
            alt="India Health Link"
            variant="square"
          />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(page)}
                disableRipple
                sx={{
                  my: 2,

                  display: "block",
                  boxShadow: "none",
                  opacity: 1,
                  // color: "rgba(255,255,255,1)",
                  fontSize: "14px",
                  fontWeight: 400,
                  textAlign: "left",
                  lineHeight: "21px",
                  textTransform: "uppercase",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;

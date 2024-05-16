"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [auth, setAuth] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const router = useRouter();

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    setAnchorEl(null);

    const path = e.target.innerText.toLowerCase();

    const destinations = {
      inscription: "/signup",

      connexion: "/signin",
    };

    const destination = destinations[path];

    if (destination) {
      router.push(destination);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? "Logout" : "Login"}
        />
      </FormGroup>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mon Ami Chauffeur
          </Typography>
          <>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {auth ? (
                <>
                  <MenuItem value="profile" onClick={handleClose}>
                    Profile
                  </MenuItem>
                  <MenuItem value="account" onClick={handleClose}>
                    My account
                  </MenuItem>
                </>
              ) : (
                <>
                  <MenuItem onClick={handleClose}>Connexion</MenuItem>
                  <MenuItem onClick={handleClose}>Inscription</MenuItem>
                </>
              )}
            </Menu>
          </>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

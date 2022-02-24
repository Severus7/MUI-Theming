import React from "react";
import { ThemeProvider } from "@mui/material";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import ImageCard from "./components/ImageCard";
import customTheme from "./assets/theme";

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <Menu />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                News
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
        <ImageCard />
      </div>
    </ThemeProvider>
  );
};

export default App;

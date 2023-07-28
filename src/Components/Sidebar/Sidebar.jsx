import React, { useState } from "react";
import {
  Switch,
  FormGroup,
  FormControlLabel,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import "./Sidebar.css";

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#ffffff", // white for both modes
    },
  },
});

const Sidebar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (event) => setDarkMode(event.target.checked);

  const sidebarStyle = {
    backgroundColor: "#D3D3D3", // light grey
    height: "100vh",
    width: "200px",
    padding: "20px",
  };

  const darkSidebarStyle = {
    ...sidebarStyle,
    backgroundColor: "#696969",
    color: "#ffffff", // dark grey for dark mode
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        className="sidebar"
        style={darkMode ? darkSidebarStyle : sidebarStyle}
      >
        <ul>
          <li className={darkMode ? "dark-mode" : "light-mode"}>Dashboard</li>
          <li className={darkMode ? "dark-mode" : "light-mode"}>Product</li>
          <li className={darkMode ? "dark-mode" : "light-mode"}>Store</li>
          <li className={darkMode ? "dark-mode" : "light-mode"}>Visitor</li>
          <li className={darkMode ? "dark-mode" : "light-mode"}>Analytics</li>
          <li className={darkMode ? "dark-mode" : "light-mode"}>
            Notification
          </li>
          <li className={darkMode ? "dark-mode" : "light-mode"}>Help Center</li>
          <li className={darkMode ? "dark-mode" : "light-mode"}>Settings</li>
        </ul>
        <FormGroup row>
          {darkMode ? <NightsStayIcon /> : <WbSunnyIcon />}
          <FormControlLabel
            control={
              <Switch
                checked={darkMode}
                onChange={toggleDarkMode}
                color="secondary"
              />
            }
            label="Dark Mode"
            style={{
              marginLeft: 10,
              display: "flex",
              flexDirection: "row-reverse",
            }}
          />
        </FormGroup>
      </div>
    </ThemeProvider>
  );
};

export default Sidebar;

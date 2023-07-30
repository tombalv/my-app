import React from "react";
import { Switch } from "@material-ui/core";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NightlightRoundOutlinedIcon from "@mui/icons-material/NightlightRoundOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import StoreIcon from "@mui/icons-material/Store";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import BarChartIcon from "@mui/icons-material/BarChart";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import SettingsIcon from "@mui/icons-material/Settings";
import logo from "./images/logo.png";
import { Badge, withStyles } from "@material-ui/core";
import "./Sidebar.css";

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#ff0000",
    color: "#fff",
    height: "20px",
    width: "20px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}))(Badge);

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="princie logo" />
        <span className="princie_position">Princie</span>
      </div>

      <ul>
        <li className="light-mode" style={{ backgroundColor: "#000000" }}>
          <DashboardIcon fontSize="small" color="primary" />
          <span className="words_position">Dashboard</span>
        </li>
        <li className="light-mode">
          <Inventory2Icon fontSize="small" />
          <span className="words_position">Product</span>
          <StyledBadge
            overlap="circular"
            variant="standard"
            badgeContent={2}
            style={{ marginLeft: "20px" }}
          />
        </li>
        <li className="light-mode">
          <StoreIcon fontSize="small" />
          <span className="words_position">Store</span>
        </li>
        <li className="light-mode">
          <SupervisedUserCircleIcon fontSize="small" />
          <span className="words_position">Visitor</span>
        </li>
        <li className="light-mode">
          <BarChartIcon fontSize="small" />
          <span className="words_position">Analytics </span>
          <KeyboardArrowDownIcon
            style={{ color: "#aaaaaa", fontSize: "15px", marginLeft: "60px" }}
          />
        </li>
        <li className="light-mode">
          <NotificationsNoneIcon fontSize="small" />
          <span className="words_position">Notification </span>
          <StyledBadge
            overlap="circular"
            variant="standard"
            badgeContent={11}
            style={{ marginLeft: "20px" }}
          />
        </li>
      </ul>
      <div className="divider"></div>

      <ul>
        <li className="light-mode">
          <HeadsetMicIcon fontSize="small" />
          <span className="words_position">Help Center</span>
        </li>
        <li className="light-mode">
          <SettingsIcon fontSize="small" />
          <span className="words_position">Settings</span>
        </li>
      </ul>

      <ul className="toggle_container">
        <div className="divider"></div>
        <div className="toggle_position">
          <div className="icon_position">
            <NightlightRoundOutlinedIcon fontSize="small" />
          </div>
          <div className="words_position">DarkMode</div>
          <div className="switch_position">
            <Switch defaultChecked size="small" color="primary" />
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;

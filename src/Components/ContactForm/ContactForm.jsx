import React from "react";
import {
  Badge as MaterialBadge,
  IconButton,
  withStyles,
  Typography,
  Avatar,
} from "@material-ui/core";
import NotificationsIcon from "@mui/icons-material/Notifications";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#f40000",
    right: 7,
    top: 7,
    borderRadius: "50%",
    padding: "0 4px",
    height: "7px",
    minWidth: "3px",
  },
}))(MaterialBadge);

const StyledIconButton = withStyles(() => ({
  root: {
    height: "40px",
    width: "40px",
    marginTop: "15px",
    marginRight: "20px",
    backgroundColor: "#e9e7e7",

    "&:hover": {
      backgroundColor: "#f1f1f1",
    },
  },
}))(IconButton);

function ContactForm() {
  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          borderRadius: "20px",
          backgroundColor: "#f1f1f1",
          height: "40px",
          width: "180px",
          marginTop: "15px",
        }}
      >
        <Avatar alt="Maxie Mon Wachid" src="./images/human.jpg" />
        <div style={{ marginLeft: "10px" }}>
          <Typography style={{ fontSize: "11px" }} variant="body1">
            Maxie Mon Wachid
          </Typography>
          <Typography
            style={{ fontSize: "8px", color: "#aaaaaa" }}
            variant="body2"
          >
            @Maxie Mon Wachid
          </Typography>
        </div>

        <KeyboardArrowDownIcon
          style={{ fontSize: "13px", marginLeft: "10px" }}
        />
      </div>
      <hr
        style={{
          height: "25%",
          border: "1px solid rgba(0, 0, 0, 0.1)",
          margin: "27px 10px 0px 20px",
        }}
      />
      <StyledIconButton color="primary">
        <StyledBadge
          overlap="circular"
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          variant="dot"
        >
          <NotificationsIcon style={{ fontSize: "20px", color: "#a1b2bf" }} />
        </StyledBadge>
      </StyledIconButton>
    </div>
  );
}

export default ContactForm;

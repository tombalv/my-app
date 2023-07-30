import React from "react";
import InventoryIcon from "@mui/icons-material/Inventory";
import { CardContent, withStyles, IconButton } from "@material-ui/core";
import { Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const StyledIconButton = withStyles(() => ({
  root: {
    height: "30px",
    width: "30px",
    backgroundColor: "#12a5bc",
    color: "#F9f9f9",

    "&:hover": {
      backgroundColor: "#f1f1f1",
    },
  },
}))(IconButton);

function Chart2() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "400px",
        borderRadius: "30px",
        backgroundColor: "#12a5bc",
        width: "390px",
        margin: "0px 0px 0px 5px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <CardContent>
          <StyledIconButton
            style={{ backgroundColor: "#ffff", color: "#aaaaaa" }}
          >
            <InventoryIcon style={{ fontSize: "15px" }} />
          </StyledIconButton>
          <span
            style={{
              fontSize: "12px",
              margin: "0px 0px 0px 7px",
              color: "#fff",
            }}
          >
            Selling Product
          </span>
        </CardContent>
        <div>
          <div
            style={{
              display: "flex",
              backgroundColor: "#09525d",
              height: "35px",
              width: "90px",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "30px",
              marginRight: "15px",
            }}
          >
            <Typography
              variant="body1"
              style={{ marginLeft: "5px", fontSize: "12px", color: "#fff" }}
            >
              This Month
            </Typography>
            <KeyboardArrowDownIcon
              style={{ color: "#fff", fontSize: "15px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart2;

import React from "react";
import { Card, CardContent, withStyles, IconButton } from "@material-ui/core";
import InventoryIcon from "@mui/icons-material/Inventory";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import SouthEastIcon from "@mui/icons-material/SouthEast";

const StyledIconButton = withStyles(() => ({
  root: {
    height: "30px",
    width: "30px",
    backgroundColor: "#e9e7e7",
    color: "#aaaaaa",

    "&:hover": {
      backgroundColor: "#f1f1f1",
    },
  },
}))(IconButton);

function MyCard2() {
  return (
    <div style={{ display: "flex" }}>
      <Card
        style={{
          margin: "0px 0px 0px 5px",
          width: "190px",
          height: "130px",
          borderRadius: "20px",
          backgroundColor: "#f1f1f1",
        }}
      >
        <CardContent>
          <StyledIconButton>
            <InventoryIcon style={{ fontSize: "15px" }} />
          </StyledIconButton>
          <span style={{ fontSize: "14px", margin: "0px 0px 0px 7px" }}>
            Product
          </span>
        </CardContent>

        <span
          style={{
            fontSize: "25px",
            margin: "0px 0px 0px 15px",
          }}
        >
          390,040
        </span>
        <div
          style={{
            margin: "10px 15px 0px 15px",
            border: "1px solid rgba(0, 0, 0, 0.1)",
            transform: "scaleY(0.1)",
          }}
        ></div>
        <div
          style={{
            margin: "5px 0px 0px 15px",
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
          }}
        >
          <NorthEastIcon style={{ fontSize: "10px", color: "green" }} />
          <span style={{ color: "green", fontSize: "10px" }}>4.1%</span>
          <span
            style={{
              fontSize: "10px",
              letterSpacing: "0.03em",
              wordSpacing: "0.03em",
              color: "#aaaaaa",
            }}
          >
            vs 320.583 last year
          </span>
        </div>
      </Card>

      <Card
        style={{
          margin: "0px 0px 0px 10px",
          width: "190px",
          height: "130px",
          borderRadius: "20px",
          backgroundColor: "#f1f1f1",
        }}
      >
        <CardContent>
          <StyledIconButton
            style={{ color: "#aaaaaa", backgroundColor: "#e9e7e7" }}
          >
            <SupervisedUserCircleIcon style={{ fontSize: "15px" }} />
          </StyledIconButton>
          <span style={{ fontSize: "14px", margin: "0px 0px 0px 7px" }}>
            Visitor
          </span>
        </CardContent>

        <span
          style={{
            fontSize: "25px",
            margin: "0px 0px 0px 15px",
          }}
        >
          3.1M
        </span>
        <div
          style={{
            margin: "10px 15px 0px 15px",
            border: "1px solid rgba(0, 0, 0, 0.1)",
            transform: "scaleY(0.1)",
          }}
        ></div>
        <div
          style={{
            margin: "5px 0px 0px 15px",
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
          }}
        >
          <SouthEastIcon style={{ fontSize: "10px", color: "red" }} />
          <span style={{ color: "red", fontSize: "10px" }}>17%</span>
          <span
            style={{
              fontSize: "10px",
              letterSpacing: "0.03em",
              wordSpacing: "0.03em",
              color: "#aaaaaa",
            }}
          >
            vs 3.3M last year
          </span>
        </div>
      </Card>
    </div>
  );
}

export default MyCard2;

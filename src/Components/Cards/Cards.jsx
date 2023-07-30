import React from "react";
import {
  Card,
  CardContent,
  withStyles,
  IconButton,
  Badge,
} from "@material-ui/core";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { FaDollarSign } from "react-icons/fa";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import StoreIcon from "@mui/icons-material/Store";

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

function MyCard() {
  return (
    <div style={{ display: "flex" }}>
      <Card
        style={{
          margin: "0px 0px 0px 20px",
          width: "190px",
          height: "130px",
          borderRadius: "20px",
          backgroundColor: "#f1f1f1",
        }}
      >
        <CardContent>
          <StyledIconButton>
            <AttachMoneyIcon style={{ fontSize: "15px" }} />
          </StyledIconButton>
          <span style={{ fontSize: "14px", margin: "0px 0px 0px 7px" }}>
            Net Profit
          </span>
        </CardContent>

        <span
          style={{
            fontSize: "25px",
            margin: "0px 0px 0px 15px",
          }}
        >
          <Badge>
            <FaDollarSign
              style={{
                color: "12a5bc",
                fontSize: "11px",
                marginBottom: "12px",
              }}
            />
          </Badge>
          302.1K
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
          <span style={{ color: "red", fontSize: "10px" }}>29%</span>
          <span
            style={{
              fontSize: "10px",
              letterSpacing: "0.03em",
              wordSpacing: "0.03em",
              color: "#aaaaaa",
            }}
          >
            vs $3003k last year
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
            <StoreIcon style={{ fontSize: "15px" }} />
          </StyledIconButton>
          <span style={{ fontSize: "14px", margin: "0px 0px 0px 7px" }}>
            Store
          </span>
        </CardContent>

        <span
          style={{
            fontSize: "25px",
            margin: "0px 0px 0px 15px",
          }}
        >
          12,900
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
          <span style={{ color: "green", fontSize: "10px" }}>12,9%</span>
          <span
            style={{
              fontSize: "10px",
              letterSpacing: "0.03em",
              wordSpacing: "0.03em",
              color: "#aaaaaa",
            }}
          >
            vs 1030 last year
          </span>
        </div>
      </Card>
    </div>
  );
}

export default MyCard;

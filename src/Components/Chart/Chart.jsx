import React from "react";
import { CardContent, withStyles, IconButton, Badge } from "@material-ui/core";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { FaDollarSign } from "react-icons/fa";
import NorthEastIcon from "@mui/icons-material/NorthEast";

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

function Chart() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "400px",
        borderRadius: "30px",
        backgroundColor: "#f1f1f1",
        width: "390px",
        margin: "0px 0px 0px 20px",
      }}
    >
      <div
        style={{
          display: "flex",
        }}
      >
        <CardContent>
          <StyledIconButton
            style={{ color: "black", backgroundColor: "#e9e7e7" }}
          >
            <CurrencyExchangeIcon style={{ fontSize: "15px" }} />
          </StyledIconButton>
          <span style={{ fontSize: "12px", margin: "0px 0px 0px 7px" }}>
            Monthly Recurring Revenue
          </span>
        </CardContent>
        <MoreHorizIcon
          style={{ margin: "20px 0px 0px 120px", fontSize: "20px" }}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <CardContent>
            <span style={{ fontSize: "10px", color: "#aaaaaa" }}>Income</span>
          </CardContent>
          <Badge>
            <FaDollarSign
              style={{
                color: "12a5bc",
                fontSize: "15px",
                margin: "0px 0px 15px 15px",
              }}
            />
          </Badge>

          <span
            style={{
              fontSize: "30px",
            }}
          >
            156,098.1
          </span>
          <div
            style={{
              margin: "10px 0px 0px 15px",
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
        </div>
        <hr
          style={{
            height: "70%",
            border: "1px solid rgba(0, 0, 0, 0.1)",
            margin: "27px 10px 0px 20px",
          }}
        />
        <div style={{ marginRight: "20px" }}>
          <CardContent>
            <span style={{ fontSize: "10px", color: "#aaaaaa" }}>Spend</span>
          </CardContent>
          <Badge>
            <FaDollarSign
              style={{
                fontSize: "15px",
                margin: "0px 0px 18px 15px",
                color: "#aaaaaa",
              }}
            />
          </Badge>

          <span
            style={{
              fontSize: "30px",
            }}
          >
            80,112.02
          </span>

          <div
            style={{
              margin: "10px 0px 0px 15px",
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
            }}
          >
            <NorthEastIcon style={{ fontSize: "10px", color: "green" }} />
            <span style={{ color: "green", fontSize: "10px" }}>2%</span>
            <span
              style={{
                fontSize: "8px",
                letterSpacing: "0.03em",
                wordSpacing: "0.03em",
                color: "#aaaaaa",
              }}
            >
              vs 77,000.02 last year
            </span>
          </div>
        </div>
      </div>
      <div
        style={{
          margin: "25px 20px 0px 15px",
          border: "1px solid rgba(0, 0, 0, 0.1)",
          transform: "scaleY(0.1)",
        }}
      ></div>
      <div>
        <div>$10k $50k</div>
      </div>
    </div>
  );
}

export default Chart;

import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

const Calendar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <div
        style={{
          display: "flex",
          backgroundColor: "#f1f1f1",
          height: "40px",
          width: "150px",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "30px",
          marginRight: "10px",
        }}
      >
        <CalendarMonthIcon
          style={{ fontSize: "15px", color: "#aaaaaa", marginBottom: "3px" }}
        />
        <Typography
          variant="body1"
          style={{ marginLeft: "5px", fontSize: "12px", color: "#aaaaaa" }}
        >
          This Month
        </Typography>
        <KeyboardArrowDownIcon
          style={{ color: "#aaaaaa", fontSize: "15px", marginLeft: "20px" }}
        />
      </div>

      <Button
        variant="contained"
        style={{
          height: "40px",
          marginRight: "20px",
          backgroundColor: "black",
          color: "white",
          borderRadius: "30px",
          textTransform: "none",
        }}
      >
        Download Report
      </Button>
    </div>
  );
};

export default Calendar;

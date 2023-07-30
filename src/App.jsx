import React from "react";
import { Container } from "@material-ui/core";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Sidebar from "./Components/Sidebar/Sidebar";
import SearchBar from "./Components/SearchBar/SearchBar";
import ContactForm from "./Components/ContactForm/ContactForm";
import MyCard from "./Components/Cards/Cards";
import MyCard2 from "./Components/Cards/Cards2";
import Calendar from "./Components/Calendar/Calendar";
import Chart from "./Components/Chart/Chart";
import Chart2 from "./Components/Chart/Chart2";

function App() {
  return (
    <Container
      style={{
        backgroundColor: "#f9f9f9",
        marginTop: "70px",
        height: "730px",
        width: "1050px",
        borderRadius: "20px",
        padding: "0px",
        display: "grid",
        gridTemplateColumns: "0.4fr 1fr 1fr",
        gridTemplateRows: "80px 90px 140px 1fr",
      }}
    >
      <div style={{ display: "grid" }}>
        <Sidebar style={{ gridColumn: 1 }} />
      </div>

      <SearchBar style={{ gridColumn: 2, gridRow: 1 }} />
      <h1
        style={{
          gridColumn: 2,
          gridRow: 2,
          margin: "0px 0px 0px 20px",
          fontSize: "35px",
          fontWeight: "300",
        }}
      >
        Welcome back, Maxie
      </h1>
      <p
        style={{
          gridColumn: 2,
          gridRow: 2,
          fontSize: "7px",
          color: "#aaaaaa",
          margin: "45px 0px 0px 20px",
        }}
      >
        Maximize product sales and store management in order to get the best
        results
      </p>

      <ContactForm style={{ gridColumn: 3, gridRow: 1 }}></ContactForm>
      <div style={{ gridColumn: 3, gridRow: 2 }}>
        <Calendar></Calendar>
      </div>

      <div style={{ gridColumn: 3, gridRow: 3 }}>
        <MyCard2></MyCard2>
      </div>
      <div style={{ gridColumn: 2, gridRow: 3 }}>
        <MyCard></MyCard>
      </div>
      <div style={{ gridColumn: 2, gridRow: 4 }}>
        <Chart></Chart>
      </div>
      <div style={{ gridColumn: 3, gridRow: 4 }}>
        <Chart2></Chart2>
      </div>
    </Container>
  );
}

export default App;

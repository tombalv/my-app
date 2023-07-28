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
        gridTemplateColumns: "0.4fr 1.3fr 1fr",
        gridTemplateRows: "80px 90px 140px 1fr",
      }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "auto auto" }}>
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

      <ContactForm style={{ gridColumn: 3, gridRow: 1 }}>Kontaktai</ContactForm>
      <h3 style={{ gridColumn: 3, gridRow: 3 }}>App</h3>
    </Container>
  );
}

export default App;

import React from "react";
import { Container } from "@material-ui/core";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <Container
      style={{
        backgroundColor: "#f9f9f9",
        marginTop: "70px",
        height: "730px",
        width: "1300px",
        borderRadius: "20px",
        padding: "0px",
      }}
    >
      <Sidebar />
    </Container>
  );
}

export default App;

import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import styled from "@emotion/styled";
import { Container } from "@mui/material";
import { RouterProvider } from "react-router";
import { router } from "./utils/route-generator";

const AppWrapper = styled("div")({
  width: "100%",
  height: "100vh",
  backgroundColor: "hsl(210, 35%, 9%)",
  color: "#ffff",
});

const App = () => {
  return (
    <AppWrapper>
      <CssBaseline />
      <Container
        maxWidth="xl"
        sx={{
          padding: "0 1rem",
          height: "100%",
        }}
      >
        <RouterProvider router={router} />
      </Container>
    </AppWrapper>
  );
};

export default App;

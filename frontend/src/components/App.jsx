import React from "react";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Form from "./Form";

function App() {
  return (
    <Container maxWidth="sm" disableGutters sx={{ mb: 4, mt: 6 }}>
      <CssBaseline />
      <Form></Form>
    </Container>
  );
}

export default App;

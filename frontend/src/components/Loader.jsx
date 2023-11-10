import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Backdrop from "@mui/material/Backdrop";
import Grid from "@mui/material/Grid";

function Loader() {
  return (
    <Grid
      container
      direction="column"
      jujustifyContent="center"
      alignItems="center"
      mt={5}
    >
      <Backdrop open="true" sx={{ color: "#fff", zIndex: "0" }} />
      <CircularProgress color="primary" />
      <Typography sx={{ color: "inherit" }} mt={3}>
        Stiamo costruendo la lettera
      </Typography>
    </Grid>
  );
}

export default Loader;

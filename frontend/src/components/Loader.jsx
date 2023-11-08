import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
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
      <Backdrop
        open="true"
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      />
      <CircularProgress color="inherit" />
      <Typography sx={{ color: "inherit" }} mt={3}>
        Stiamo costruendo la lettera
      </Typography>
    </Grid>
  );
}

export default Loader;

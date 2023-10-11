import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

function Cv() {
  return (
    <React.Fragment>
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        xs={12}
        p={2}
      >
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Curriculum Vitae
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            multiline
            rows={6}
            placeholder="Presentati e descrivi brevemente le tue esperienze"
            label="Le mie skill"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Cv;

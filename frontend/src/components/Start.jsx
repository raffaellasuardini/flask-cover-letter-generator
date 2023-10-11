import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function Job() {
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
          <Typography variant="subtitle1">
            Crea una cover letter professionale e che ti permetta di presentarti
            al meglio al tuo prossimo colloquio. Non sai da dove partire? Questo
            tool ti aiuterà in soli 2 passaggi a creare la tua cover letter
            personalizzata.
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Job;

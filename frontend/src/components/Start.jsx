import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

function Start(props) {
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
      <Grid
        item
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Button
          variant="contained"
          onClick={() => props.next()}
          sx={{ mt: 3, ml: 1 }}
          type="button"
        >
          Inizia ora
        </Button>
      </Grid>
    </React.Fragment>
  );
}

export default Start;

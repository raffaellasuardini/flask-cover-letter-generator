import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

function Job() {
  const [jobDescription, setJobDescription] = useState("");

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
            Job description
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="job-description"
            multiline
            rows={6}
            placeholder="Inserisci il testo della job description per cui vuoi candidarti.
            "
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Job;

import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Cv(props) {
  const [isFilled, setIsFilled] = useState(false);
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
            fullWidth
            required
            id="cv"
            name="cv"
            multiline
            rows={6}
            placeholder="Presentati e descrivi brevemente le tue esperienze"
            label="Le mie skill"
            onChange={(e) => {
              props.setContent(e.target.value);
              if (e.target.value.length > 1) {
                setIsFilled(true);
              } else {
                setIsFilled(false);
              }
            }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Button onClick={() => props.back()} sx={{ mt: 3, ml: 1 }}>
          Back
        </Button>
        <Button
          disabled={!isFilled}
          variant="contained"
          sx={{ mt: 3, ml: 1 }}
          type="submit"
        >
          Create Letter
        </Button>
      </Grid>
    </React.Fragment>
  );
}

export default Cv;

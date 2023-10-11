import React, { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Stepper from "@mui/material/Stepper";
import StepLabel from "@mui/material/StepLabel";
import Step from "@mui/material/Step";
import Start from "./Start";
import Job from "./Job";
import Cv from "./Cv";

function Form() {
  const steps = ["Job description", "Your skill"];
  const [activeStep, setActiveStep] = useState(-1);
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  function chooseContent(step) {
    if (step < 0) {
      return <Start></Start>;
    } else if (step === 0) {
      return <Job></Job>;
    } else if (step === 1) {
      return <Cv></Cv>;
    }
  }

  return (
    <Paper variant="outlined" square={false}>
      <Grid contaier xs={12} p={2}>
        <Grid item>
          <Typography component="h1" variant="h4" align="center">
            Cover letter generator
          </Typography>
        </Grid>
        <Grid item pt={3} pb={5}>
          <Stepper activeStep={activeStep}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Grid>
        {chooseContent(activeStep)}
        <Grid
          item
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          {activeStep >= 0 && (
            <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
              Back
            </Button>
          )}

          <Button
            variant="contained"
            onClick={handleNext}
            sx={{ mt: 3, ml: 1 }}
          >
            {activeStep < 0
              ? "Inizia ora"
              : activeStep === steps.length - 1
              ? "Create letter"
              : "Next"}
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Form;

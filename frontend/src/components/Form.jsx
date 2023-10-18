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
import Letter from "./Letter";

function Form() {
  const steps = ["Job description", "Your skill"];
  const [activeStep, setActiveStep] = useState(-1);
  const [curriculum, setCurriculum] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [coverLetter, setCoverLetter] = useState("");

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    if (activeStep === steps.length - 1) {
      handleSubmit();
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  function chooseContent(step) {
    if (step < 0) {
      return <Start></Start>;
    } else if (step === 0) {
      return <Job setContent={setJobDescription}></Job>;
    } else if (step === 1) {
      return <Cv setContent={setCurriculum}></Cv>;
    }
  }

  function handleSubmit() {
    const FLASK_ENDPOINT = "http://localhost:5000";

    return fetch(FLASK_ENDPOINT + "/api/letter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cv: curriculum, job: jobDescription }),
    })
      .then((response) => response.text())
      .then((response) => {
        console.log(response);
        setCoverLetter(response);
      })

      .catch((err) => console.error(err));
  }

  return (
    <Paper variant="outlined" square={false}>
      <Grid item xs={12} p={2}>
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
        {coverLetter ? (
          <Letter content={coverLetter}></Letter>
        ) : (
          <form method="post" noValidate>
            {chooseContent(activeStep)}
            <Grid
              item
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
            >
              {activeStep >= 0 && activeStep < 2 && (
                <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                  Back
                </Button>
              )}

              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 3, ml: 1 }}
                type="button"
              >
                {activeStep < 0
                  ? "Inizia ora"
                  : activeStep === steps.length - 1
                  ? "Create letter"
                  : "Next"}
              </Button>
            </Grid>
          </form>
        )}
      </Grid>
    </Paper>
  );
}

export default Form;

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
  const [isDone, setIsDone] = useState(false);
  const [paragraphs, setParagraphs] = useState([]);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  function chooseContent(step) {
    if (step < 0) {
      return <Start next={handleNext}></Start>;
    } else if (step === 0) {
      return <Job setContent={setJobDescription} next={handleNext}></Job>;
    } else if (step === 1) {
      return <Cv setContent={setCurriculum} back={handleBack}></Cv>;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("submit");
    const FLASK_ENDPOINT = "http://localhost:5000";

    return fetch(FLASK_ENDPOINT + "/api/letter", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cv: curriculum, job: jobDescription }),
    })
      .then((data) => data.json())
      .then((data) => {
        setParagraphs(data.paragraphs);
        setIsDone(true);
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
        {isDone ? (
          <Letter content={paragraphs}></Letter>
        ) : (
          <form method="post" onSubmit={(event) => handleSubmit(event)}>
            {chooseContent(activeStep)}
          </form>
        )}
      </Grid>
    </Paper>
  );
}

export default Form;

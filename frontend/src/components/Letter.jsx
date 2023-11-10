import React from "react";
import Button from "@mui/material/Button";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

function Letter(props) {
  function handleRestart() {
    window.location.reload();
  }
  return (
    <React.Fragment>
      {props.content?.map((paragraph, index) => (
        <p index={index}>{paragraph}</p>
      ))}
      <Button
        variant="contained"
        endIcon={<RestartAltIcon />}
        onClick={handleRestart}
      >
        Restart
      </Button>
    </React.Fragment>
  );
}

export default Letter;

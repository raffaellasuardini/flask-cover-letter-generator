import React from "react";

function Letter(props) {
  return (
    <React.Fragment>
      {props.content?.map((paragraph, index) => (
        <p index={index}>{paragraph}</p>
      ))}
    </React.Fragment>
  );
}

export default Letter;

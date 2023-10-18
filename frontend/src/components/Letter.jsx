import React from "react";

function Letter(props) {
  return (
    <React.Fragment>
      <div dangerouslySetInnerHTML={{ __html: props.content }} />
    </React.Fragment>
  );
}

export default Letter;

import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const FLASK_ENDPOINT = "http://localhost:5000";
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Using useEffect for single rendering
  useEffect(() => {
    fetch(FLASK_ENDPOINT + "/api")
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setMessage(data.message))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      <h1>{message}</h1>
    </div>
  );
}

export default App;

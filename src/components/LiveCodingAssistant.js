import React, { useState } from "react";
import { Card, CardContent, Button, TextField } from "@mui/material";

const LiveCodingAssistant = () => {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  // This function sends the code to the Piston API
  const handleRunCode = async () => {
    try {
      // POST request to the Piston API endpoint
      const response = await fetch("https://emkc.org/api/v2/piston/execute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // We tell the API the language (javascript), the version ("*" means latest)
        // and provide the code in a "files" array.
        body: JSON.stringify({
          language: "javascript",
          version: "*",
          files: [
            {
              name: "main.js",
              content: code,
            },
          ],
        }),
      });

      // Convert the response into JSON format
      const data = await response.json();

      // If the API returns output, display it; otherwise, show a default message.
      if (data && data.run && data.run.output) {
        setOutput(data.run.output);
      } else {
        setOutput("No output returned.");
      }
    } catch (error) {
      // If an error occurs, display it.
      setOutput("Error: " + error.message);
    }
  };

  return (
    <Card sx={{ maxWidth: 500, margin: "auto", padding: 2 }}>
      <CardContent>
        <h2>Live Coding Assistant</h2>
        <TextField
          fullWidth
          multiline
          rows={6}
          label="Write your code here..."
          variant="outlined"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleRunCode}
          sx={{ marginTop: 2 }}
        >
          Run Code
        </Button>
        <div
          style={{
            marginTop: 20,
            padding: 10,
            background: "#f5f5f5",
            borderRadius: 5,
          }}
        >
          <strong>Output:</strong>
          <pre>{output}</pre>
        </div>
      </CardContent>
    </Card>
  );
};

export default LiveCodingAssistant;

import React, { useState, useEffect } from "react";
import mermaid from "mermaid";

function CodeVisualizerFlowchart() {
  // Example Mermaid diagram string (this is a static example; you can later generate it dynamically)
  const [diagramText, setDiagramText] = useState(`
    graph TD;
      A[Start] --> B{Is Python code valid?};
      B -- Yes --> C[Run Code];
      B -- No --> D[Show Error];
      C --> E[Display Output];
      D --> E[Display Error];
  `);

  const [error, setError] = useState(null);

  // Initialize mermaid on component mount
  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false, // We'll trigger rendering manually
      theme: "default",   // Change this if you want a different Mermaid theme
    });
  }, []);

  // Render the Mermaid diagram when diagramText changes
  useEffect(() => {
    try {
      // This triggers Mermaid to look for elements with the "mermaid" class and render them.
      mermaid.contentLoaded();
      setError(null);
    } catch (err) {
      console.error("Error rendering Mermaid diagram:", err);
      setError("Failed to render the flowchart.");
    }
  }, [diagramText]);

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>Python Topics Flowchart</h1>
      
      {/* Textarea to allow modifying the Mermaid diagram (optional) */}
      <textarea
        value={diagramText}
        onChange={(e) => setDiagramText(e.target.value)}
        rows="10"
        cols="60"
        style={{
          width: "100%",
          maxWidth: "800px",
          padding: "10px",
          fontFamily: "monospace",
          marginBottom: "20px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />
      
      <div>
        <button
          onClick={() => mermaid.contentLoaded()}
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Render Flowchart
        </button>
      </div>

      {error && (
        <div style={{ marginTop: "20px", color: "red" }}>
          <strong>Error:</strong> {error}
        </div>
      )}

      {/* Container where the Mermaid diagram will be rendered */}
      <div
        className="mermaid"
        style={{
          textAlign: "left",
          margin: "20px auto",
          maxWidth: "800px",
          border: "1px solid #ddd",
          borderRadius: "5px",
          padding: "10px",
          backgroundColor: "#f9f9f9",
        }}
      >
        {diagramText}
      </div>
    </div>
  );
}

export default CodeVisualizerFlowchart;

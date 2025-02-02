import React, { useState, useRef } from "react";
import { FaMicrophone, FaStop, FaRobot, FaVolumeUp } from "react-icons/fa"; // Fun icons
import './styles.css'; // Import the CSS file

const VoiceAssistant = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [codeSnippet, setCodeSnippet] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const recognitionRef = useRef(null);
  const utteranceRef = useRef(null);

  if (!recognitionRef.current) {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.continuous = false;
    recognitionRef.current.interimResults = false;
    recognitionRef.current.lang = "en-US";

    recognitionRef.current.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setQuestion(transcript);
      setIsListening(false);
      getAnswerAndCode(transcript);
    };

    recognitionRef.current.onerror = (event) => {
      console.error("Speech recognition error", event.error);
      setIsListening(false);
    };
  }

  const startListening = () => {
    setIsListening(true);
    setQuestion("");
    setAnswer("");
    setCodeSnippet("");
    recognitionRef.current.start();
  };

  const stopListening = () => {
    recognitionRef.current.stop();
    setIsListening(false);
  };

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  const getAnswerAndCode = async (userQuestion) => {
    try {
      const chatResponse = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userQuestion }),
      });
      const chatData = await chatResponse.json();
      const aiAnswer = chatData.choices[0].message.content;
      setAnswer(aiAnswer);

      const utterance = new SpeechSynthesisUtterance(aiAnswer);
      utteranceRef.current = utterance;
      setIsSpeaking(true);

      utterance.onend = () => {
        setIsSpeaking(false);
      };

      window.speechSynthesis.speak(utterance);

      const promptForCode = `Generate a Python code snippet that addresses the following question: ${userQuestion}`;

      const codeResponse = await fetch("http://localhost:5000/get-code-suggestions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: promptForCode }),
      });
      const codeData = await codeResponse.json();
      setCodeSnippet(codeData.suggestions);
    } catch (error) {
      console.error("Error fetching answer and code:", error);
    }
  };

  return (
    <div className="voice-assistant-container">
      <div className="voice-assistant-box">
        <h2 className="heading">🎤 Voice Assistant 🤖</h2>
        
        <div className="button-group">
          {/* Start/Stop Listening Button */}
          {!isListening ? (
            <button className="btn start-btn" onClick={startListening}>
              <FaMicrophone className="mr-2" /> Start Listening
            </button>
          ) : (
            <button className="btn stop-btn" onClick={stopListening}>
              <FaStop className="mr-2" /> Stop Listening
            </button>
          )}

          {/* Stop Speaking Button */}
          {isSpeaking && (
            <button className="btn speaking-btn" onClick={stopSpeaking}>
              <FaVolumeUp className="mr-2" /> Stop Speaking
            </button>
          )}
        </div>

        <input
          type="text"
          placeholder="Ask me anything..."
          className="question-input"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <button className="btn ask-btn" onClick={() => getAnswerAndCode(question)}>
          Ask AI <FaRobot className="ml-2" />
        </button>

        {question && (
          <div className="response-box">
            <h3 className="response-heading">Your Question:</h3>
            <p className="response-text">{question}</p>
          </div>
        )}
        {answer && (
          <div className="response-box">
            <h3 className="response-heading">AI Answer:</h3>
            <p className="response-text">{answer}</p>
          </div>
        )}
        {codeSnippet && (
          <div className="code-box">
            <h3 className="response-heading">Generated Python Code:</h3>
            <pre className="code-text">{codeSnippet}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default VoiceAssistant;

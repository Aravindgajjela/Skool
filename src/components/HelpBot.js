import React, { Component } from "react";
import axios from "axios";  // Import axios to make HTTP requests
import "./HelpBot.css";  // Import styles to style the chat box

class HelpBot extends Component {
  state = {
    isChatOpen: false,
    userMessage: "",
    botResponse: "",
    messages: [],
  };

  toggleChat = () => {
    this.setState({ isChatOpen: !this.state.isChatOpen });
  };

  handleMessageChange = (event) => {
    this.setState({ userMessage: event.target.value });
  };

  // Function to send message to Gemini API
  sendMessage = async () => {
    if (this.state.userMessage.trim()) {
      const userMessage = this.state.userMessage;

      // Simple temporary bot message
      const botMessage = "HelpBot: Thinking...";

      // Update state to show bot is thinking
      this.setState((prevState) => ({
        messages: [
          ...prevState.messages,
          { user: userMessage, bot: botMessage },
        ],
        userMessage: "",
        botResponse: botMessage,
      }));

      // Your actual Gemini API Key (don't hardcode it in production, use an env variable)
      const apiKey = "YOUR_GEMINI_API_KEY";  // Replace with actual API Key

      // Now call the Gemini API to get the response
      try {
        const response = await axios.post(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, // URL for Gemini API
          {
            model: "gemini", // Model name
            messages: [{ role: "user", content: userMessage }], // Sending user message as input
          }
        );

        // Extract the response from Gemini
        const geminiResponse = response.data.choices[0].message.content;

        // Update chat messages with the bot's response
        this.setState((prevState) => ({
          messages: [
            ...prevState.messages,
            { user: userMessage, bot: geminiResponse },
          ],
          botResponse: geminiResponse,
        }));
      } catch (error) {
        console.error("Error calling Gemini API", error);
        this.setState({
          botResponse: "HelpBot: Sorry, I couldn't understand that.",
        });
      }
    }
  };

  render() {
    return (
      <div>
        <div className="heroBot" onClick={this.toggleChat}>
          <i className="fas fa-robot icon"></i> {/* Robot Icon */}
          <div className="heroMessage">
            <p>Click me for help, I am HelpBot!</p>
          </div>
        </div>

        {this.state.isChatOpen && (
          <div className="chatbox">
            <div className="chatbox-header">
              <h3>HelpBot: Your Assistant</h3>
              <button onClick={this.toggleChat} className="close-chat">
                X
              </button>
            </div>
            <div className="chatbox-body">
              {this.state.messages.map((msg, index) => (
                <div key={index} className="message">
                  <div className="user-message">You: {msg.user}</div>
                  <div className="bot-message">{msg.bot}</div>
                </div>
              ))}
            </div>
            <div className="chatbox-footer">
              <input
                type="text"
                value={this.state.userMessage}
                onChange={this.handleMessageChange}
                placeholder="Ask me anything..."
              />
              <button onClick={this.sendMessage}>Send</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default HelpBot;

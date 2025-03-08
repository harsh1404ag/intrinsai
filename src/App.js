import React, { useState } from "react";
import axios from "axios";
import "./App.css"; // Ensure CSS for App is properly imported

function App() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    try {
      const apiUrl = process.env.REACT_APP_OPENAI_API_URL; // Load API URL from .env
      if (!apiUrl) {
        setError("API URL is not defined!");
        return;
      }

      const res = await axios.post(apiUrl, { question });
      setResponse(res.data);
      setError(""); // Clear error
    } catch (err) {
      setError("Failed to fetch response. Check API URL or internet connection.");
    }
  };

  return (
    <div className="chat-container">
      <h1>IntrinsAI Legal Chatbot</h1>
      <input
        type="text"
        placeholder="Ask a legal question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button onClick={handleSubmit}>Send</button>
      {response && <p className="response">{response}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default App;

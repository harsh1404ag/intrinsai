import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const API_ENDPOINT = process.env.REACT_APP_AZURE_OPENAI_ENDPOINT;
  const API_KEY = process.env.REACT_APP_AZURE_OPENAI_KEY;

  const sendMessage = async () => {
    if (!userInput) return;
    
    const newMessages = [...messages, { role: "user", content: userInput }];
    setMessages(newMessages);
    setUserInput("");

    try {
      const response = await axios.post(
        API_ENDPOINT,
        {
          messages: newMessages,
          max_tokens: 150,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`,
          },
        }
      );

      setMessages([...newMessages, { role: "assistant", content: response.data.choices[0].message.content }]);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col w-full">
      <Header />
      <div className="flex-1 overflow-auto p-4 bg-gray-900">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-4 ${msg.role === "user" ? "text-right" : "text-left"}`}>
            <div className={`inline-block p-3 rounded-lg ${msg.role === "user" ? "bg-blue-600 text-white" : "bg-gray-700 text-white"}`}>
              {msg.content}
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 bg-gray-800 flex">
        <input
          className="flex-1 p-2 rounded-l-lg bg-gray-700 text-white"
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Ask a legal question..."
        />
        <button className="p-2 bg-blue-600 rounded-r-lg" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;

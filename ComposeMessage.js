import React, { useState } from "react";

const ComposeMessage = () => {
  const [prompt, setPrompt] = useState("");
  const [message, setMessage] = useState("");

  const generateMessage = () => {
    let template = "";

    if (prompt.toLowerCase().includes("diwali")) {
      template = "Hello {name}, Diwali greetings! We wish you the best holiday. Namaste!";
    } else if (prompt.toLowerCase().includes("new year")) {
      template = "Hello {name}, Happy New Year! Wishing you joy, success, and good health this year.";
    } else if (prompt.toLowerCase().includes("offer")) {
      template = "Hello {name}, don’t miss our special offer! Avail exciting discounts today.";
    } else {
      template = `Hello {name}, ${prompt}`;
    }

    setMessage(template);
  };

  const handleSend = () => {
    alert(`Message sent: \n\n${message}`);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Compose Message</h2>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter a prompt (e.g. Diwali wishes)"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <button
          onClick={generateMessage}
          className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
        >
          Generate Message
        </button>
      </div>

      <textarea
        placeholder="Type your message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={5}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={handleSend}
        className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
      >
        Send Message
      </button>
    </div>
  );
};

export default ComposeMessage;

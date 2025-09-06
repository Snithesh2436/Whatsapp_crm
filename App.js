import React from "react";
import ComposeMessage from "./ComposeMessage";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div>
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">WhatsApp CRM - Demo</h1>
        <ComposeMessage />
      </div>
    </div>
  );
}

export default App;

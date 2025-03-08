import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Chat from "./Chat";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar />
      <Chat user={user} />
    </div>
  );
}

export default App;

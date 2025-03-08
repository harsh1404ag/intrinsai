import React from "react";
import { HomeIcon, UserIcon, LogoutIcon } from "@heroicons/react/solid";

const Sidebar = () => {
  return (
    <div className="w-64 bg-purple-800 h-screen flex flex-col p-4">
      <h1 className="text-2xl font-bold text-white mb-6">IntrinsAI</h1>
      <nav className="flex flex-col gap-4">
        <button className="flex items-center gap-3 text-white p-2 rounded-lg hover:bg-purple-600">
          <HomeIcon className="w-5 h-5" /> Home
        </button>
        <button className="flex items-center gap-3 text-white p-2 rounded-lg hover:bg-purple-600">
          <UserIcon className="w-5 h-5" /> Profile
        </button>
        <button className="flex items-center gap-3 text-white p-2 rounded-lg hover:bg-purple-600">
          <LogoutIcon className="w-5 h-5" /> Logout
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;

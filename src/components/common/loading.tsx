import React from "react";
import Navbar from "./Navbar";

const Loading: React.FC = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <Navbar/>
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        <p className="text-lg font-medium text-blue-600 animate-pulse">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;

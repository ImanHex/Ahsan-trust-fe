import React from "react";
import Navbar from "./Navbar";

interface ErrorPageProps {
  errorMessage: string; 
}

const ErrorPage: React.FC<ErrorPageProps> = ({ errorMessage }) => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <Navbar/>
      <p className="text-red-600 text-lg">{errorMessage}</p>
    </div>
  );
};

export default ErrorPage;

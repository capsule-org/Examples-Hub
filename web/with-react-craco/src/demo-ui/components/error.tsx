import React from "react";
import { AlertTriangle, RefreshCw } from "react-feather";

type ErrorComponentProps = {
  error: Error;
  resetErrorBoundary: () => void;
};

const ErrorComponent: React.FC<ErrorComponentProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-4 text-center">
      <div className="mb-4">
        <AlertTriangle className="w-8 h-8 text-red-500" />
      </div>
      <h2 className="text-lg font-semibold text-gray-900">Something went wrong</h2>
      <p className="mb-4 text-gray-700">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="flex items-center px-4 py-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-600">
        <RefreshCw className="w-4 h-4 mr-2" />
        Try again
      </button>
    </div>
  );
};

export default ErrorComponent;

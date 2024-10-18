import React from "react";

interface SuccessMessageProps {
  message: string;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ message }) => {
  return <p className="text-green-600 font-semibold">{message}</p>;
};

export default SuccessMessage;

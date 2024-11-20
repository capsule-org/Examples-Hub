import React from "react";
import { CheckCircle } from "lucide-react";
import { cn } from "../lib/utils";

interface SuccessMessageProps {
  message: string;
  className?: string;
  icon?: boolean; // Allow hiding icon if needed
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({
  message,
  className,
  icon = true, // Default to showing icon
}) => {
  return (
    <div
      role="alert"
      className={cn(
        "flex items-center gap-2 p-3 rounded-lg bg-green-50 text-green-600 animate-in fade-in slide-in-from-bottom-2 duration-300",
        className
      )}>
      {icon && <CheckCircle className="h-5 w-5 shrink-0" />}
      <p className="text-sm font-medium">{message}</p>
    </div>
  );
};

export default SuccessMessage;

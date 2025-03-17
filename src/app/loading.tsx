import React from "react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "w-4 h-4",
  md: "w-8 h-8",
  lg: "w-16 h-16",
};

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = "md" }) => {
  return (
    <div
      className={`spinner-border animate-spin inline-block border-4 rounded-full ${sizeClasses[size]}`}
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;

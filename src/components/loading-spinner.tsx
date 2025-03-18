interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = "md" }) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-48 h-48",
  };

  return (
    <div
      className="flex justify-center items-center m-36 "
      role="status"
      aria-label="Loading"
    >
      <div
        className={`${sizeClasses[size]} border-4 border-gray-200 border-t-gray-700 rounded-full animate-spin`}
      ></div>
    </div>
  );
};

export default LoadingSpinner;
